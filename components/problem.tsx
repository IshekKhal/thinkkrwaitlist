export default function Problem() {
  return (
    <section className="w-full px-4 py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        {/* Small heading */}
        <p className="mb-8 text-base font-semibold uppercase tracking-wide text-accent">
          The Problem
        </p>

        {/* Main text */}
        <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl text-balance">
          Instagram gives you an identity. That's why you can't quit.
        </h2>

        {/* Body text */}
        <p className="text-lg text-muted md:text-xl leading-relaxed text-balance">
          Every app blocker takes away your apps but gives you nothing to replace them. The moment you delete the blocker, you relapse. You need identity replacement, not willpower.
        </p>
      </div>
    </section>
  )
}
