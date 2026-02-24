export default function HowItWorks() {
  const steps = [
    'Your addictive apps (Instagram, TikTok, YouTube) are blocked by default',
    'When you want scroll time, complete a ThinkIt challenge',
    'AI evaluates your work and rewards you with screen time',
    'Your submission is published to your Thinkkr profile',
    'Over time, you build an intellectual portfolio that becomes your new identity',
  ]

  return (
    <section className="w-full px-4 py-20 md:py-32">
      <div className="mx-auto max-w-2xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-8 text-base font-semibold uppercase tracking-wide text-accent">
            How It Works
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-center font-bold text-accent-foreground">
                  {index + 1}
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-lg text-foreground md:text-xl leading-relaxed">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
