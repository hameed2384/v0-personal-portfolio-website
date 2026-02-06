import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Experience — Hameed Ur Rehman",
  description: "Background in systems building, CRM implementation, and database administration.",
}

const experiences = [
  {
    role: "Founder & Systems Builder",
    organisation: "Nexlink Media",
    period: "2024 — Present",
    description: "Running a small, independent practice focused on building websites and internal systems for individuals, small teams, and organisations. Work spans CRM implementation, database design, workflow automation, and operational tooling. The emphasis is always on reliability, structure, and long-term maintainability—building things that work after I've moved on.",
    learned: "Running your own practice teaches you that trust is built through consistency, not credentials. Clients care about whether their systems work, not how you learned to build them.",
    tools: ["HubSpot", "Salesforce", "PostgreSQL", "Zapier", "Airtable"],
  },
  {
    role: "Self-Directed Learning",
    organisation: "Independent",
    period: "2023 — 2024",
    description: "After leaving university, focused on learning through real projects with real stakes. Took responsibility for live data, workflows, and platforms. Built confidence through ownership rather than credentials, developing practical skills in CRM systems, database administration, and process design.",
    learned: "Learning by doing—especially when the stakes are real—builds a different kind of competence than academic study. You develop an instinct for what can go wrong.",
    tools: ["Python", "SQL", "Make", "Google Workspace"],
  },
  {
    role: "Computer Science Student",
    organisation: "University of Portsmouth",
    period: "2022 — 2023",
    description: "Started formal computer science education with a focus on databases, systems architecture, and structured problem-solving. Left before completing the degree. The decision was straightforward—I was learning more from building real things than from coursework, and I wanted to pursue that.",
    learned: "University gave me foundational knowledge and a structured way of thinking about problems. I don't regret going, and I don't regret leaving. Both decisions made sense at the time.",
    tools: ["Java", "SQL", "Git", "Linux"],
  },
]

const otherWork = [
  {
    category: "CRM Implementation",
    description: "Setting up and customising CRM platforms for specific business needs. Custom fields, workflows, automations, and integrations with existing tools.",
  },
  {
    category: "Database Design",
    description: "Schema design, data modelling, and database administration. Building structures that are clean, fast, and maintainable.",
  },
  {
    category: "Workflow Automation",
    description: "Connecting systems and eliminating manual work. Data flows, notifications, and process automation using integration platforms.",
  },
  {
    category: "System Documentation",
    description: "Creating clear documentation for handover and ongoing maintenance. Making sure systems can be understood and maintained by others.",
  },
]

const toolGroups = [
  {
    title: "CRM Platforms",
    tools: ["Salesforce", "HubSpot", "Zoho CRM", "Pipedrive", "Airtable"],
  },
  {
    title: "Databases",
    tools: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Supabase"],
  },
  {
    title: "Automation",
    tools: ["Zapier", "Make (Integromat)", "n8n", "Power Automate", "Python Scripts"],
  },
  {
    title: "Technical",
    tools: ["SQL / Query Optimisation", "Data Modelling", "API Integration", "ETL Processes", "System Documentation"],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-16 md:pt-40">
        <p className="font-mono text-xs tracking-wider text-accent uppercase mb-6">
          Experience
        </p>
        <h1 className="text-3xl md:text-5xl text-foreground tracking-tight font-light max-w-3xl leading-[1.15]">
          A non-traditional path into systems work
        </h1>
        <p className="mt-6 text-base text-muted-foreground max-w-xl leading-relaxed">
          I dropped out of university, taught myself through real projects, and built a 
          practice from there. This isn't a CV—it's context for understanding how I think.
        </p>
      </section>

      {/* Main Experience */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="grid gap-px bg-border">
            {experiences.map((exp, index) => (
              <article key={index} className="bg-background py-10 md:py-14 px-0 md:px-2">
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
                  <div className="lg:col-span-3">
                    <p className="font-mono text-[11px] tracking-wider text-muted-foreground">{exp.period}</p>
                  </div>
                  <div className="lg:col-span-9">
                    <h2 className="text-xl text-foreground tracking-tight">{exp.role}</h2>
                    <p className="font-mono text-[11px] tracking-wider text-accent mt-1 uppercase">{exp.organisation}</p>
                    <p className="text-base text-secondary-foreground leading-relaxed mt-5">
                      {exp.description}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4 italic font-serif">
                      {exp.learned}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {exp.tools.map((tool) => (
                        <span key={tool} className="font-mono text-[10px] tracking-wider text-muted-foreground bg-secondary px-2.5 py-1">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other Work */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-14">
            Core Services
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {otherWork.map((work, index) => (
              <div key={index} className="bg-background p-8">
                <h3 className="text-foreground tracking-tight mb-3">
                  {work.category}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-14">
            Tools & Technologies
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {toolGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm text-foreground mb-4 tracking-tight">{group.title}</h3>
                <ul className="space-y-2">
                  {group.tools.map((tool) => (
                    <li key={tool} className="text-sm text-muted-foreground">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Skills */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <p className="font-mono text-xs tracking-wider text-accent uppercase mb-6">
            Supporting Skills
          </p>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            Alongside systems work, I have practical experience in web design, video 
            editing, and content production. These aren't the headline—but they inform how 
            I approach problems. Understanding how people actually use digital tools makes 
            me a better systems builder.
          </p>
        </div>
      </section>

      {/* Note */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
          <p className="text-sm text-muted-foreground">
            For specific project details and case studies, see the{" "}
            <Link href="/work" className="inline-flex items-center gap-1 text-accent hover:text-foreground transition-colors">
              Work <ArrowUpRight className="h-3 w-3" />
            </Link>{" "}
            section.
          </p>
        </div>
      </section>
    </div>
  )
}
