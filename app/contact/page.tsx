import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"

export const metadata = {
  title: "Contact — Hameed Ur Rehman",
  description: "Get in touch for CRM implementation, database administration, or systems building projects.",
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-24 pb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
          Contact
        </h1>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <p className="text-base text-foreground leading-relaxed">
              If you're dealing with a CRM that's not quite working, a database 
              that's become unwieldy, or systems that don't talk to each other—I 
              can probably help. Through Nexlink Media, I work with individuals, 
              small teams, and organisations on the kind of infrastructure that 
              makes things run more smoothly.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Whether it's a new CRM implementation, migrating from legacy systems, 
              building a website, or just getting your data organised properly—I'm 
              happy to have an initial conversation about what you're trying to achieve.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4">
              Email is the best way to reach me. I typically respond within a 
              day or two.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Email
              </p>
              <a 
                href="mailto:rehman2384@gmail.com" 
                className="text-base text-foreground hover:text-muted-foreground transition-colors"
              >
                rehman2384@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Location
              </p>
              <p className="text-base text-foreground">
                United Kingdom
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Nexlink Media
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Social
              </p>
              <div className="flex gap-4">
                {socialLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Interested In */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-8">
          What I'm Interested In
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">Good Fit</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>CRM implementation and customisation</li>
              <li>Database design and data management</li>
              <li>Website builds for small organisations</li>
              <li>Workflow automation and system integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">How I Work</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Emphasis on reliability over impressiveness</li>
              <li>Clear documentation for handover and maintenance</li>
              <li>Direct communication about what's realistic</li>
              <li>Building things that work long-term</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
          If you're not sure whether your project is the right fit, just reach 
          out anyway. I'm happy to have an initial conversation and point you 
          in the right direction even if I'm not the right person for the job.
        </p>
      </section>
    </div>
  )
}
