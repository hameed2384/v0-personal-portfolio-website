import Link from "next/link"
import Image from "next/image"
import { getFeaturedProjects } from "@/lib/projects"
import { ArrowUpRight } from "lucide-react"

const capabilities = [
  { label: "CRM Implementation", description: "Setting up and customising platforms to match how you actually work" },
  { label: "Database Design", description: "Clean schemas, proper relationships, data that stays reliable" },
  { label: "Workflow Automation", description: "Connecting systems and eliminating repetitive manual work" },
  { label: "Data Migration", description: "Moving from legacy systems without losing records or relationships" },
  { label: "System Documentation", description: "Clear handover docs so it all makes sense after I leave" },
]

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32">
        <p className="font-mono text-xs tracking-wider text-accent uppercase mb-6">
          Systems Builder & Administrator
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tight font-light leading-[1.1] max-w-4xl text-balance">
          I build the systems that organisations depend on
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
          CRM platforms, databases, and operational tooling for individuals, 
          small teams, and organisations through{" "}
          <span className="text-foreground">Nexlink Media</span>.
        </p>
        <div className="mt-10 flex gap-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-foreground bg-secondary hover:bg-accent hover:text-accent-foreground px-5 py-3 transition-colors uppercase"
          >
            View Work
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground px-5 py-3 border border-border hover:border-foreground/30 transition-colors uppercase"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Selected Work */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="font-mono text-xs tracking-wider text-accent uppercase mb-3">
                Selected Work
              </p>
              <p className="text-sm text-muted-foreground max-w-md">
                Recent projects in CRM implementation, database design, and systems integration.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              View All
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-px bg-border">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group bg-background"
              >
                <article className="grid md:grid-cols-12 gap-6 py-10 md:py-12 px-0 md:px-2">
                  <div className="md:col-span-3">
                    <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
                      <Image
                        src={project.thumbnail || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6 flex flex-col justify-center">
                    <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-2">
                      {project.industry}
                    </p>
                    <h3 className="text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="md:col-span-3 flex flex-col justify-center items-start md:items-end gap-1">
                    <p className="font-mono text-[11px] tracking-wider text-muted-foreground">
                      {project.role}
                    </p>
                    <p className="font-mono text-[11px] tracking-wider text-muted-foreground">
                      {project.year}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              View All Projects
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-14">
            Capabilities
          </p>
          <div className="grid gap-px bg-border">
            {capabilities.map((cap) => (
              <div key={cap.label} className="bg-background flex flex-col md:flex-row md:items-center gap-2 md:gap-12 py-6 md:py-7 px-0 md:px-2">
                <p className="text-foreground md:w-64 flex-shrink-0 tracking-tight">
                  {cap.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed tracking-tight">
              I run Nexlink Media, a small independent practice focused on building websites 
              and internal systems. Most of my work involves taking messy, fragmented data and 
              turning it into something structured and useful.
            </p>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Good systems work is invisible when it's done right. The goal is infrastructure that 
              just works—reliable, well-documented, and maintainable long after I've moved on.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-accent hover:text-foreground mt-8 transition-colors uppercase"
            >
              More about me
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
