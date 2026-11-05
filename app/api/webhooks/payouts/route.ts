import { db } from '@/lib/db'
import { sql } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const eventId = request.headers.get('x-event-id')
  const provider = request.headers.get('x-provider') ?? 'payout-provider'
  if (!eventId) return NextResponse.json({ error: 'Missing x-event-id' }, { status: 400 })
  const payload = await request.json()
  try {
    await db.execute(sql`
      INSERT INTO webhook_events (provider, "eventId", type, payload)
      VALUES (${provider}, ${eventId}, ${payload.type ?? 'payout.updated'}, ${JSON.stringify(payload)}::jsonb)
      ON CONFLICT ("eventId") DO NOTHING
    `)
  } catch {
    return NextResponse.json({ error: 'Unable to record webhook' }, { status: 500 })
  }
  return NextResponse.json({ received: true })
}
