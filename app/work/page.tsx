import Link from "next/link"
import Image from "next/image"
import { getAllProjects } from "@/lib/projects"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "Work & Case Studies — CRM Implementation, Database Design & Systems Integration",
  description: "Portfolio of Hameed Ur Rehman's projects: CRM implementation (HubSpot, Salesforce, Zoho), database design (PostgreSQL), workflow automation (Zapier, Make), data migration, e-commerce integration, and systems building for businesses and non-profits.",
  openGraph: {
    title: "Work & Case Studies — Hameed Ur Rehman",
    description: "CRM implementation, database design, workflow automation, and systems integration projects by Hameed Ur Rehman through Nexlink Media.",
    url: "https://hameed.pro/work",
  },
  alternates: {
    canonical: "https://hameed.pro/work",
  },
}

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-16 md:pt-40">
        <p className="font-mono text-xs tracking-wider text-accent uppercase mb-6">
          Work
        </p>
        <h1 className="text-3xl md:text-5xl text-foreground tracking-tight font-light max-w-3xl leading-[1.15]">
          Selected projects
        </h1>
        <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
          CRM implementation, database design, workflow automation, and systems 
          integration. Each project taught me something different.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group bg-background block"
              >
                <article className="p-6 md:p-8">
                  <div className="aspect-[16/10] relative overflow-hidden bg-secondary mb-6">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-2">
                    {project.industry}
                  </p>
                  <h2 className="text-lg text-foreground group-hover:text-accent transition-colors tracking-tight">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                      {project.client}
                    </span>
                    <span className="text-border">|</span>
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] tracking-wider text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    View Case Study <ArrowUpRight className="h-3 w-3" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
