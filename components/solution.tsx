export default function Solution() {
  const cards = [
    {
      icon: '💭',
      title: 'Daily ThinkIts',
      description: 'Personalized prompts based on your interests. Write poems, explain concepts, reflect on ideas.',
    },
    {
      icon: '⚡',
      title: 'Earn Scroll Time',
      description: 'Complete challenges to unlock your apps. Quality work earns you more time.',
    },
    {
      icon: '📚',
      title: 'Build Your Portfolio',
      description: 'Every submission becomes part of your intellectual identity. Public, permanent, proud.',
    },
  ]

  return (
    <section className="w-full px-4 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-8 text-base font-semibold uppercase tracking-wide text-accent">
            The Solution
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl text-balance">
            Thinker blocks your apps. But here's what we give you instead.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-foreground bg-card p-6 md:p-8"
            >
              <div className="mb-4 text-4xl">{card.icon}</div>
              <h3 className="mb-4 text-xl font-bold text-foreground">
                {card.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
