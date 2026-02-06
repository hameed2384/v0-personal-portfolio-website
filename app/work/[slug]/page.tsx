import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

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
    title: `${project.title} — Hameed Ur Rehman`,
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
      {/* Back link */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pt-24">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Work
        </Link>
      </section>

      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pt-12 pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs tracking-wider text-accent uppercase mb-4">
              {project.industry}
            </p>
            <h1 className="text-3xl md:text-5xl text-foreground tracking-tight font-light leading-[1.15] text-balance">
              {project.title}
            </h1>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6">
            {[
              { label: "Client", value: project.client },
              { label: "Role", value: project.role },
              { label: "Duration", value: project.duration },
              { label: "Tools", value: project.tools.join(", ") },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">{item.label}</p>
                <p className="text-sm text-secondary-foreground mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pb-16">
        <div className="aspect-[16/9] relative overflow-hidden bg-secondary">
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
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-20">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-6">
            Overview
          </p>
          <p className="text-base text-secondary-foreground leading-relaxed max-w-3xl">
            {project.overview}
          </p>
        </div>
      </section>

      {/* Constraints */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-20">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-8">
            Constraints
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border max-w-3xl">
            {[
              { label: "Time", value: project.constraints.time },
              { label: "Budget", value: project.constraints.budget },
              { label: "Team", value: project.constraints.team },
              { label: "Platform", value: project.constraints.platform },
            ].map((item) => (
              <div key={item.label} className="bg-background p-6">
                <p className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase mb-2">{item.label}</p>
                <p className="text-sm text-secondary-foreground leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-20">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-8">
            Approach
          </p>
          <div className="space-y-6 max-w-3xl">
            {project.approach.map((paragraph, index) => (
              <p key={index} className="text-base text-secondary-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-20">
          <div className="grid gap-8">
            {project.images.map((image, index) => (
              <figure key={index}>
                <div className="aspect-[16/10] relative overflow-hidden bg-secondary">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[11px] text-muted-foreground tracking-wider">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-20">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-8">
            Outcome
          </p>
          <div className="max-w-3xl">
            <div className="grid gap-px bg-border mb-8">
              {project.outcome.metrics.map((metric, index) => (
                <div key={index} className="bg-background py-4 px-5 flex items-start gap-4">
                  <span className="font-mono text-[11px] text-accent mt-0.5">0{index + 1}</span>
                  <p className="text-sm text-secondary-foreground">{metric}</p>
                </div>
              ))}
            </div>
            <p className="text-base text-muted-foreground leading-relaxed italic font-serif">
              {project.outcome.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-20">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-8">
            Reflection
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
            <div>
              <p className="text-sm text-foreground mb-4 tracking-tight">What worked</p>
              <ul className="space-y-3">
                {project.reflection.worked.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-accent/30">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm text-foreground mb-4 tracking-tight">{"What didn't"}</p>
              <ul className="space-y-3">
                {project.reflection.didnt.map((item, index) => (
                  <li key={index} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 max-w-3xl">
            <p className="text-sm text-foreground mb-3 tracking-tight">What I would do differently</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.reflection.different}
            </p>
          </div>
        </div>
      </section>

      {/* Back to Work */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors uppercase"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-accent hover:text-foreground transition-colors uppercase"
          >
            Start a Project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
