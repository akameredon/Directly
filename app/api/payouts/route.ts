import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { sql } from 'drizzle-orm'

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const result = await db.execute(sql`
    SELECT id, reference, status, currency, "totalAmount", "recipientCount", "scheduledFor", "createdAt"
    FROM payouts WHERE "userId" = ${session.user.id} ORDER BY "createdAt" DESC
  `)
  return NextResponse.json({ payouts: result.rows })
}

export async function POST(request: Request) {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json()
  if (!Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: 'At least one payout item is required' }, { status: 400 })
  }
  const invalid = body.items.find((item: { email?: string; amount?: number }) => !item.email || typeof item.amount !== 'number' || !Number.isInteger(item.amount) || item.amount <= 0)
  if (invalid) return NextResponse.json({ error: 'Each item needs a valid email and positive integer amount' }, { status: 400 })

  const reference = `ZMP-${Date.now().toString(36).toUpperCase()}`
  const total = body.items.reduce((sum: number, item: { amount: number }) => sum + item.amount, 0)
  const result = await db.execute(sql`
    INSERT INTO payouts ("userId", reference, status, currency, "totalAmount", "recipientCount")
    VALUES (${session.user.id}, ${reference}, 'draft', ${body.currency ?? 'NGN'}, ${total}, ${body.items.length})
    RETURNING id, reference, status, "totalAmount", "recipientCount"
  `)
  return NextResponse.json({ payout: result.rows[0] }, { status: 201 })
}
