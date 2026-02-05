import Link from "next/link"

export const metadata = {
  title: "About — Hameed Ur Rehman",
  description: "Background and approach of Hameed Ur Rehman, a systems builder and administrator specialising in CRM and database solutions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-24 pb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
          About
        </h1>
      </section>

      {/* Biography */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-base text-foreground leading-relaxed">
              I'm Hameed Ur Rehman, a systems builder based in the UK. I specialise in 
              CRM implementation, database design, and the operational infrastructure 
              that keeps organisations running smoothly.
            </p>

            <p className="text-base text-foreground leading-relaxed">
              I started studying Computer Science at the University of Portsmouth, but 
              left before completing my degree. It wasn't a lack of ability—I found I 
              learned better by building real things than by studying theory. The decision 
              to leave was a conscious pivot toward hands-on work, and it's shaped how I 
              approach problems ever since.
            </p>

            <p className="text-base text-foreground leading-relaxed">
              Since then, I've taught myself through real projects—taking responsibility 
              for live data, workflows, and platforms where the stakes are real. That 
              practical learning path has given me a grounding in systems thinking that 
              formal education alone wouldn't have provided.
            </p>

            <p className="text-base text-foreground leading-relaxed">
              I now run Nexlink Media, a small independent practice focused on building 
              websites and internal systems for individuals, small teams, and organisations. 
              The work is practical and reliability-focused—building structures that last 
              rather than impressive demos that fall apart.
            </p>

            <p className="text-base text-foreground leading-relaxed">
              Most of my work involves taking messy, fragmented data and turning it into 
              something organised and useful. Whether that's migrating legacy systems, 
              building custom CRM workflows, or designing database schemas—I enjoy the 
              puzzle of making complex information accessible.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              If you're dealing with a systems challenge or need help getting your data 
              infrastructure in order, I'd be happy to talk.
            </p>
          </div>

          <aside className="space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Location
              </p>
              <p className="text-sm text-foreground">United Kingdom</p>
              <p className="text-xs text-muted-foreground mt-1">Remote-capable</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Current
              </p>
              <p className="text-sm text-foreground">Nexlink Media</p>
              <p className="text-xs text-muted-foreground mt-1">Independent practice</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Focus Areas
              </p>
              <ul className="space-y-1.5 text-sm text-foreground">
                <li>CRM Systems</li>
                <li>Data Management</li>
                <li>Workflow Design</li>
                <li>Operational Tooling</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                Links
              </p>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <Link href="/work" className="text-foreground hover:text-muted-foreground transition-colors">
                    View Work
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="text-foreground hover:text-muted-foreground transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-foreground hover:text-muted-foreground transition-colors">
                    Get in Touch
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-8">
          How I Think About Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          <div>
            <p className="font-serif text-lg text-foreground mb-3">
              Clarity over cleverness
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The goal is usually to make something clearer, not more impressive. 
              Good work often goes unnoticed because it just works.
            </p>
          </div>
          <div>
            <p className="font-serif text-lg text-foreground mb-3">
              Constraints are useful
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unlimited budgets and timelines rarely produce better work. 
              Knowing your limits forces better decisions.
            </p>
          </div>
          <div>
            <p className="font-serif text-lg text-foreground mb-3">
              Systems over heroics
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sustainable processes beat individual brilliance. Build things 
              that keep working after you leave.
            </p>
          </div>
          <div>
            <p className="font-serif text-lg text-foreground mb-3">
              Honest communication
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Say what you actually think. Flag problems early. Be direct 
              about what you can and cannot do.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-16 border-t border-border">
        <blockquote className="max-w-2xl">
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic">
            "I think in systems, but I understand that systems serve people. 
            The goal is infrastructure that works quietly in the background—reliable, 
            documented, and maintainable long after I've moved on."
          </p>
        </blockquote>
      </section>
    </div>
  )
}
