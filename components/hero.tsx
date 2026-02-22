'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/xykdnaae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full px-4 py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative h-16 w-16 md:h-20 md:w-20">
            <Image
              src="/thinkkr-logo.png"
              alt="Thinkkr logo"
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
              disabled={loading}
              className="flex-1 rounded-none border border-foreground bg-card px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50"
            />
            <Button
              type="submit"
              disabled={loading}
              className="rounded-none bg-accent px-6 py-3 font-bold text-accent-foreground hover:bg-accent/90 h-auto disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Join Waitlist'}
            </Button>
          </div>
          <p className="text-sm text-muted">
            {submitted ? 'Thanks for signing up!' : error ? error : 'Be the first to try Thinkkr'}
          </p>
        </form>
      </div>
    </section>
  )
}
