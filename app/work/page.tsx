import Link from "next/link"
import Image from "next/image"
import { getAllProjects } from "@/lib/projects"

export const metadata = {
  title: "Work — Daniel Mercer",
  description: "Selected projects in video editing, platform strategy, workflow design, and digital systems.",
}

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-24 pb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
          Work
        </h1>
        <p className="mt-4 text-base text-muted-foreground max-w-2xl leading-relaxed">
          A selection of projects from media organisations, creative studios, internal company 
          teams, and freelance engagements. Each one taught me something different.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block"
            >
              <article className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`aspect-[4/3] relative overflow-hidden bg-muted ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="text-xs text-muted-foreground mb-2">
                    {project.industry}
                  </p>
                  <h2 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>{project.client}</span>
                    <span>·</span>
                    <span>{project.role}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
