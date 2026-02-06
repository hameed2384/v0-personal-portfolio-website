import Link from "next/link"
import Image from "next/image"
import { getFeaturedProjects } from "@/lib/projects"
import { ArrowRight } from "lucide-react"

const capabilities = [
  "CRM Implementation & Administration",
  "Database Design & Management",
  "Workflow Automation & Integration",
  "Data Migration & Cleanup",
  "System Documentation & Handover",
]

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-24 pb-20">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight text-balance">
          Hameed Ur Rehman
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Systems builder based in the UK. I design, implement, and maintain CRM platforms, 
          databases, and operational tooling for individuals, small teams, and organisations 
          through Nexlink Media.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            View Work
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-16 border-t border-border">
        <div className="max-w-2xl">
          <p className="text-base text-foreground leading-relaxed">
            I run Nexlink Media, a small independent practice focused on building websites 
            and internal systems. Most of my work involves CRM implementation, database design, 
            workflow automation, and the kind of operational tooling that organisations depend 
            on but rarely think about.
          </p>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Good systems work is invisible when it's done right. The goal is infrastructure that 
            just works—reliable, well-documented, and maintainable long after I've moved on.
          </p>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-16 border-t border-border">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Selected Work
          </h2>
          <Link
            href="/work"
            className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-12">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block"
            >
              <article className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs text-muted-foreground mb-2">
                    {project.industry}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {project.role} · {project.year}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-16 border-t border-border">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-8">
          Capabilities
        </h2>
        <ul className="space-y-3">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="text-base text-foreground"
            >
              {capability}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
