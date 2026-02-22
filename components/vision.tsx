import Image from 'next/image'

export default function Vision() {
  return (
    <section className="w-full px-4 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <h2 className="mb-8 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl text-balance">
              A new kind of identity
            </h2>
            <div className="space-y-6 text-lg text-muted md:text-xl leading-relaxed">
              <p>
                Your Instagram profile took years to build. Thousands of hours scrolling, curating, performing.
              </p>
              <p>
                What if you spent those hours building something that's actually YOU?
              </p>
              <p>
                Thinker is a place where your identity isn't borrowed content. It's your actual thoughts. Your actual creativity. Your actual growth.
              </p>
              <p className="font-semibold text-foreground">
                After 6 months, you'll have 200 submissions. Which identity would you be more afraid to lose?
              </p>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="order-1 md:order-2">
            <div className="relative aspect-square w-full overflow-hidden border border-foreground bg-secondary">
              <Image
                src="/vision-mockup.png"
                alt="Thinker portfolio mockup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
