'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
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
    <section className="w-full px-4 py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-16 w-16 md:h-20 md:w-20">
            <Image
              src="/thinker-logo.png"
              alt="Thinker logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-balance">
          Replace brain rot with intellectual identity
        </h1>

        {/* Subheadline */}
        <p className="mb-12 text-xl text-muted md:text-2xl text-balance">
          Earn scroll time by thinking. Build a portfolio of your ideas.
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
              className="flex-1 rounded-none border border-foreground bg-card px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            />
            <Button
              type="submit"
              className="rounded-none bg-accent px-6 py-3 font-bold text-accent-foreground hover:bg-accent/90 h-auto"
            >
              Join Beta
            </Button>
          </div>
          <p className="text-sm text-muted">
            {submitted ? 'Thanks for signing up!' : 'Be the first to try Thinker'}
          </p>
        </form>
      </div>
    </section>
  )
}
