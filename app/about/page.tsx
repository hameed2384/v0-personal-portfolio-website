import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export const metadata = {
  title: "About Hameed Ur Rehman — CRM Specialist & Systems Builder, Sheffield UK",
  description: "Hameed Ur Rehman is a self-taught systems builder and CRM specialist based in Sheffield, UK. Founder of Nexlink Media, specialising in HubSpot, Salesforce, PostgreSQL, database design, workflow automation, and operational infrastructure for businesses.",
  openGraph: {
    title: "About Hameed Ur Rehman — CRM Specialist & Systems Builder",
    description: "Self-taught systems builder specialising in CRM implementation, database design, and workflow automation. Founder of Nexlink Media, Sheffield UK.",
    url: "https://hameed.pro/about",
  },
  alternates: {
    canonical: "https://hameed.pro/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-16 md:pt-40">
        <p className="font-mono text-xs tracking-wider text-accent uppercase mb-6">
          -----
        </p>
        <h1 className="text-3xl md:text-5xl text-foreground tracking-tight font-light max-w-3xl leading-[1.15]">
          ----- ----- ----- ----- ----- ----- ----- -----
        </h1>
      </section>

      {/* Biography */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-secondary-foreground leading-relaxed">
                ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
              </p>
              <p className="text-base text-secondary-foreground leading-relaxed">
                ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
              </p>
              <p className="text-base text-secondary-foreground leading-relaxed">
                ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
              </p>
              <p className="text-base text-secondary-foreground leading-relaxed">
                ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
              </p>
              <p className="text-base text-secondary-foreground leading-relaxed">
                ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
              </p>
            </div>

            <aside className="lg:col-span-5 lg:pl-8">
              <div className="lg:sticky lg:top-24 space-y-10">
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-3">
                    -----
                  </p>
                  <p className="text-sm text-foreground">-----</p>
                  <p className="text-xs text-muted-foreground mt-1">-----</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-3">
                    -----
                  </p>
                  <p className="text-sm text-foreground">-----</p>
                  <p className="text-xs text-muted-foreground mt-1">-----</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-3">
                    -----
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["-----", "-----", "-----", "-----"].map((area) => (
                      <span key={area} className="font-mono text-[11px] tracking-wider text-secondary-foreground bg-secondary px-3 py-1.5">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase mb-3">
                    -----
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link href="/work" className="inline-flex items-center gap-1.5 text-sm text-secondary-foreground hover:text-accent transition-colors">
                      ----- <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    <Link href="/experience" className="inline-flex items-center gap-1.5 text-sm text-secondary-foreground hover:text-accent transition-colors">
                      ----- <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-secondary-foreground hover:text-accent transition-colors">
                      ----- <ArrowUpRight className="h-3 w-3" />
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
            -----
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-border max-w-4xl">
            {[
              {
                title: "-----",
                text: "----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----",
              },
              {
                title: "-----",
                text: "----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----",
              },
              {
                title: "-----",
                text: "----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----",
              },
              {
                title: "-----",
                text: "----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----",
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
              "----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----"
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
