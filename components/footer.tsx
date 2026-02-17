import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-4">
              Get in touch
            </p>
            <a
              href="mailto:rehman2384@gmail.com"
              className="text-sm text-foreground hover:text-accent transition-colors"
            >
              rehman2384@gmail.com
            </a>
          </div>

          <div>
            <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase mb-4">
              Links
            </p>
            <div className="flex flex-col gap-2.5">
              <Link href="/work" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">Work</Link>
              <Link href="/about" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="/experience" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">Experience</Link>
              <Link href="/contact" className="text-sm text-secondary-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-[11px] text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Hameed Ur Rehman
          </p>
          <p className="font-mono text-[11px] text-muted-foreground tracking-wider">
            Sheffield, UK
          </p>
        </div>
      </div>
    </footer>
  )
}
