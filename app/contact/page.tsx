import Link from "next/link"
import { Github, Linkedin, Instagram, ArrowUpRight, Mail } from "lucide-react"

export const metadata = {
  title: "Contact — Hameed Ur Rehman",
  description: "Get in touch for CRM implementation, database administration, or systems building projects.",
}


export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-16 md:pt-40">
        <p className="font-mono text-xs tracking-wider text-accent uppercase mb-6">
          Contact
        </p>
        <h1 className="text-3xl md:text-5xl text-foreground tracking-tight font-light max-w-3xl leading-[1.15]">
          Let's talk about your project
        </h1>
      </section>

      {/* Main Content */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7">
              <p className="text-base text-secondary-foreground leading-relaxed">
                If you're dealing with a CRM that's not quite working, a database 
                that's become unwieldy, or systems that don't talk to each other—I 
                can probably help. Through Nexlink Media, I work with individuals, 
                small teams, and organisations on the kind of infrastructure that 
                makes things run more smoothly.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mt-5">
                Whether it's a new CRM implementation, migrating from legacy systems, 
                building a website, or just getting your data organised properly—I'm 
                happy to have an initial conversation about what you're trying to achieve.
              </p>

              {/* Email CTA */}
              <a
                href="mailto:rehman2384@gmail.com"
                className="group mt-10 flex items-center gap-4 bg-secondary hover:bg-accent/10 p-6 transition-colors"
              >
                <div className="h-10 w-10 flex items-center justify-center bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground group-hover:text-accent transition-colors">
                    rehman2384@gmail.com
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Typically respond within a day or two
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent ml-auto transition-colors" />
              </a>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-10">
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-3">
                    Location
                  </p>
                  <p className="text-sm text-foreground">United Kingdom</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Nexlink Media
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-3">
                    Social
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-14">
            What I'm Interested In
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border max-w-3xl">
            <div className="bg-background p-8">
              <h3 className="text-foreground tracking-tight mb-4">Good Fit</h3>
              <ul className="space-y-3">
                {[
                  "CRM implementation and customisation",
                  "Database design and data management",
                  "Website builds for small organisations",
                  "Workflow automation and system integration",
                ].map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/30">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-8">
              <h3 className="text-foreground tracking-tight mb-4">How I Work</h3>
              <ul className="space-y-3">
                {[
                  "Emphasis on reliability over impressiveness",
                  "Clear documentation for handover and maintenance",
                  "Direct communication about what's realistic",
                  "Building things that work long-term",
                ].map((item) => (
                  <li key={item} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            If you're not sure whether your project is the right fit, just reach 
            out anyway. I'm happy to have an initial conversation and point you 
            in the right direction even if I'm not the right person for the job.
          </p>
        </div>
      </section>
    </div>
  )
}
