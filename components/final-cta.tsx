'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="w-full px-4 py-20 bg-foreground text-background md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        {/* Headline */}
        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl text-balance">
          While Zuckerberg's in court defending addiction...
        </h2>

        {/* Subheadline */}
        <p className="mb-12 text-xl md:text-2xl text-balance">
          We're building the antidote.
        </p>

        {/* Email Signup Form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-none border border-background bg-background px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-foreground"
            />
            <Button
              type="submit"
              className="rounded-none bg-accent px-6 py-3 font-bold text-accent-foreground hover:bg-accent/90 h-auto"
            >
              Join Beta
            </Button>
          </div>
          <p className="text-sm text-balance">
            {submitted ? 'Thanks! See you in Spring 2026.' : 'Launching Spring 2026'}
          </p>
        </form>
      </div>
    </section>
  )
}
