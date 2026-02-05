export const metadata = {
  title: "Experience — Hameed Ur Rehman",
  description: "Background in systems building, CRM implementation, and database administration.",
}

const experiences = [
  {
    role: "Founder & Systems Builder",
    organisation: "Nexlink Media",
    period: "2024 — Present",
    description: "Running an independent practice focused on building websites and internal systems for individuals, small teams, and organisations. Work spans CRM implementation, database design, workflow automation, and operational tooling. Emphasis on reliability, structure, and long-term maintainability rather than impressive demos.",
    learned: "Building a practice from scratch has reinforced that trust comes from consistency. Clients don't care about clever solutions—they care about systems that keep working.",
  },
  {
    role: "Self-Directed Learning",
    organisation: "Independent",
    period: "2023 — 2024",
    description: "After leaving university, focused on learning through real projects with real stakes. Took responsibility for live data, workflows, and platforms. Built confidence through ownership rather than credentials, developing practical skills in CRM systems, database administration, and process design.",
    learned: "Learning by doing—especially when the stakes are real—builds a different kind of competence than academic study. You develop an instinct for what can go wrong.",
  },
  {
    role: "Computer Science Student",
    organisation: "University of Portsmouth",
    period: "2022 — 2023",
    description: "Started formal computer science education with focus on databases, systems architecture, and structured problem-solving. Left before completion—not due to inability, but a preference for hands-on, applied work over academic theory.",
    learned: "University gave me foundational knowledge and a structured way of thinking about systems. Leaving was a conscious decision to pursue practical learning, which has shaped my approach ever since.",
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

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pt-24 pb-12">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">
          Experience
        </h1>
        <p className="mt-4 text-base text-muted-foreground max-w-2xl leading-relaxed">
          A non-traditional path into systems work. This isn't a CV—it's context 
          for understanding how I learned and why I approach problems the way I do.
        </p>
      </section>

      {/* Main Experience */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <article key={index} className="grid lg:grid-cols-4 gap-6 lg:gap-12">
              <div className="lg:col-span-1">
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <div className="lg:col-span-3">
                <h2 className="font-serif text-xl text-foreground">{exp.role}</h2>
                <p className="text-sm text-muted-foreground mt-1">{exp.organisation}</p>
                <p className="text-base text-foreground leading-relaxed mt-4">
                  {exp.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4 italic">
                  {exp.learned}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Other Work */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-8">
          Other Work
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {otherWork.map((work, index) => (
            <div key={index}>
              <h3 className="text-sm font-medium text-foreground mb-2">
                {work.category}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <h2 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-8">
          Tools & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">CRM Platforms</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Salesforce</li>
              <li>HubSpot</li>
              <li>Zoho CRM</li>
              <li>Pipedrive</li>
              <li>Airtable</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Databases</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>SQL Server</li>
              <li>MongoDB</li>
              <li>Supabase</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Automation</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>Zapier</li>
              <li>Make (Integromat)</li>
              <li>n8n</li>
              <li>Power Automate</li>
              <li>Python Scripts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Technical</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>SQL / Query Optimisation</li>
              <li>Data Modelling</li>
              <li>API Integration</li>
              <li>ETL Processes</li>
              <li>System Documentation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-12 border-t border-border">
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          This page covers my background and how I got here. For specific project 
          details and case studies, see the{" "}
          <a href="/work" className="text-foreground hover:text-muted-foreground transition-colors underline underline-offset-2">
            Work
          </a>{" "}
          section.
        </p>
      </section>
    </div>
  )
}
