'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signUp } from '@/lib/auth-client'

export default function SignUpPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const result = await signUp.email({ email: String(form.get('email')), password: String(form.get('password')), name: String(form.get('name')) })
    if (result.error) setError('Unable to create your account. Please check the details and try again.')
    else router.push('/')
  }
  return <main className="min-h-screen bg-background p-6 text-foreground"><form onSubmit={submit} className="mx-auto mt-20 max-w-sm space-y-4 rounded-2xl border border-border bg-card p-6"><div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">zero middleman</p><h1 className="mt-2 text-2xl font-semibold">Create your workspace</h1></div><input name="name" required placeholder="Full name" className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm" /><input name="email" type="email" required placeholder="you@company.com" className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm" /><input name="password" type="password" minLength={8} required placeholder="Password (8+ characters)" className="w-full rounded-xl border border-border bg-background px-3 py-3 text-sm" />{error && <p className="text-sm text-red-400">{error}</p>}<button className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">Create workspace</button><a href="/sign-in" className="block text-center text-sm text-muted-foreground">Already have an account?</a></form></main>
}
