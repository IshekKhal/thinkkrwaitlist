import Hero from '@/components/hero'
import Problem from '@/components/problem'
import Solution from '@/components/solution'
import Vision from '@/components/vision'
import HowItWorks from '@/components/how-it-works'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Problem />
      <Solution />
      <Vision />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  )
}
