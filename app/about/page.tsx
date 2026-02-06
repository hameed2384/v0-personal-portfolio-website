import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "About — Hameed Ur Rehman",
  description: "Background and approach of Hameed Ur Rehman, a systems builder and administrator specialising in CRM and database solutions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-16 md:pt-40">
        <p className="font-mono text-xs tracking-wider text-accent uppercase mb-6">
          About
        </p>
        <h1 className="text-3xl md:text-5xl text-foreground tracking-tight font-light max-w-3xl leading-[1.15]">
          Systems builder. CRM specialist. Database admin. Based in Sheffield.
        </h1>
      </section>

      {/* Biography */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-secondary-foreground leading-relaxed">
                I'm Hameed Ur Rehman, a systems builder based in the UK. I specialise in 
                CRM implementation, database design, and the operational infrastructure 
                that keeps organisations running smoothly.
              </p>

              <p className="text-base text-secondary-foreground leading-relaxed">
                I started studying Computer Science at the University of Portsmouth, but 
                left before completing my degree. It wasn't a lack of ability—I found I 
                learned better by building real things than by studying theory. The decision 
                to leave was a conscious pivot toward hands-on work, and it's shaped how I 
                approach problems ever since.
              </p>

              <p className="text-base text-secondary-foreground leading-relaxed">
                Since then, I've taught myself through real projects—taking responsibility 
                for live data, workflows, and platforms where the stakes are real. That 
                practical learning path has given me a grounding in systems thinking that 
                formal education alone wouldn't have provided.
              </p>

              <p className="text-base text-secondary-foreground leading-relaxed">
                I now run Nexlink Media, a small independent practice focused on building 
                websites and internal systems for individuals, small teams, and organisations. 
                The work is practical and reliability-focused—building structures that last 
                rather than impressive demos that fall apart.
              </p>

              <p className="text-base text-secondary-foreground leading-relaxed">
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

            <aside className="lg:col-span-5 lg:pl-8">
              <div className="lg:sticky lg:top-24 space-y-10">
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-3">
                    Location
                  </p>
                  <p className="text-sm text-foreground">Sheffield, UK</p>
                  <p className="text-xs text-muted-foreground mt-1">Remote-capable</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-3">
                    Current
                  </p>
                  <p className="text-sm text-foreground">Nexlink Media</p>
                  <p className="text-xs text-muted-foreground mt-1">Independent practice</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-3">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["CRM Systems", "Data Management", "Workflow Design", "Operational Tooling"].map((area) => (
                      <span key={area} className="font-mono text-[11px] tracking-wider text-secondary-foreground bg-secondary px-3 py-1.5">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-3">
                    Links
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link href="/work" className="inline-flex items-center gap-1.5 text-sm text-secondary-foreground hover:text-accent transition-colors">
                      View Work <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    <Link href="/experience" className="inline-flex items-center gap-1.5 text-sm text-secondary-foreground hover:text-accent transition-colors">
                      Experience <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-secondary-foreground hover:text-accent transition-colors">
                      Get in Touch <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-14">
            How I Think About Work
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border max-w-4xl">
            {[
              {
                title: "Reliability over impressiveness",
                text: "A system that works quietly every day is worth more than one that demos well but breaks under pressure. I build for the long run.",
              },
              {
                title: "Document everything",
                text: "If the person after me can't understand what I built or why, I haven't finished the job. Documentation is part of the work, not an afterthought.",
              },
              {
                title: "Solve the actual problem",
                text: "The requested solution and the actual problem are often different things. I try to understand what's really going wrong before building anything.",
              },
              {
                title: "Ownership builds competence",
                text: "Taking responsibility for live systems—where mistakes have real consequences—teaches you things that theory never will.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background p-8">
                <p className="text-foreground tracking-tight mb-3">
                  {item.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <blockquote className="max-w-3xl">
            <p className="font-serif text-xl md:text-3xl text-foreground leading-relaxed italic">
              "I didn't finish university, but I've maintained live databases, migrated 
              CRM systems with thousands of records, and built workflows that people 
              depend on daily. The learning never stopped—it just moved somewhere more practical."
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
