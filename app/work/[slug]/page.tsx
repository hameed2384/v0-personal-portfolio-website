import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} — Daniel Mercer`,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-12 pb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h1 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight text-balance">
              {project.title}
            </h1>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-muted-foreground">Client</p>
              <p className="text-foreground">{project.client}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Role</p>
              <p className="text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Duration</p>
              <p className="text-foreground">{project.duration}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Tools</p>
              <p className="text-foreground">{project.tools.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-8">
        <div className="aspect-[16/9] relative overflow-hidden bg-muted">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6">
          Overview
        </h2>
        <p className="text-base text-foreground leading-relaxed max-w-3xl">
          {project.overview}
        </p>
      </section>

      {/* Constraints */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6">
          Constraints
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Time</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.constraints.time}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Budget</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.constraints.budget}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Team</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.constraints.team}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Platform</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.constraints.platform}</p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6">
          Approach
        </h2>
        <div className="space-y-6 max-w-3xl">
          {project.approach.map((paragraph, index) => (
            <p key={index} className="text-base text-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Images */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <div className="space-y-8">
          {project.images.map((image, index) => (
            <figure key={index}>
              <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6">
          Outcome
        </h2>
        <div className="max-w-3xl">
          <ul className="space-y-3 mb-6">
            {project.outcome.metrics.map((metric, index) => (
              <li key={index} className="text-sm text-foreground flex items-start gap-3">
                <span className="text-muted-foreground mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                {metric}
              </li>
            ))}
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed italic font-serif">
            {project.outcome.summary}
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-6">
          Reflection
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          <div>
            <p className="text-sm font-medium text-foreground mb-3">What worked</p>
            <ul className="space-y-2">
              {project.reflection.worked.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-3">{"What didn't"}</p>
            <ul className="space-y-2">
              {project.reflection.didnt.map((item, index) => (
                <li key={index} className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 max-w-3xl">
          <p className="text-sm font-medium text-foreground mb-2">What I would do differently</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.reflection.different}
          </p>
        </div>
      </section>

      {/* Back to Work */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>
      </section>
    </div>
  )
}
