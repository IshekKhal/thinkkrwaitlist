export default function Footer() {
  return (
    <footer className="w-full px-4 py-8 border-t border-border bg-background">
      <div className="mx-auto max-w-5xl flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-muted">
          Thinker © 2026
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-muted hover:text-foreground transition-colors">
            Privacy
          </a>
          <span className="text-border">|</span>
          <a href="#" className="text-muted hover:text-foreground transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
