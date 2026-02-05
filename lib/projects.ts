export interface Project {
  slug: string
  title: string
  client: string
  role: string
  year: string
  duration: string
  industry: string
  description: string
  tools: string[]
  featured: boolean
  thumbnail: string
  overview: string
  constraints: {
    time: string
    budget: string
    team: string
    platform: string
  }
  approach: string[]
  outcome: {
    metrics: string[]
    summary: string
  }
  images: {
    src: string
    caption: string
  }[]
  reflection: {
    worked: string[]
    didnt: string[]
    different: string
  }
}

export const projects: Project[] = [
  {
    slug: "property-crm-implementation",
    title: "Property Management CRM",
    client: "Greenfield Lettings",
    role: "CRM Architect",
    year: "2024",
    duration: "3 months",
    industry: "Property & Lettings",
    description: "Designed and implemented a CRM system for a growing lettings agency, replacing spreadsheets with a unified platform for property, tenant, and contractor management.",
    tools: ["HubSpot", "Zapier", "PostgreSQL", "Airtable"],
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    overview: "Greenfield Lettings had grown from managing 30 properties to over 200, but their systems hadn't kept pace. Client information lived in spreadsheets, maintenance requests came through email, and nobody had a clear view of the pipeline. They needed a CRM that could handle property listings, tenant relationships, and contractor coordination in one place.",
    constraints: {
      time: "Three months to full implementation with minimal disruption to daily operations",
      budget: "Mid-range budget requiring efficient use of existing tool subscriptions",
      team: "Small office team with varying technical comfort levels",
      platform: "Needed to integrate with existing accounting software and property portals"
    },
    approach: [
      "Started by mapping every existing workflow—how leads came in, how viewings were scheduled, how maintenance requests were tracked. This revealed where information was getting lost and where manual work could be automated.",
      "Chose HubSpot as the core CRM for its balance of power and usability, but built a supporting PostgreSQL database for property-specific data that needed more structure than HubSpot could provide.",
      "Created custom pipelines for different transaction types: lettings, renewals, and maintenance. Each had its own stages and automation rules, but they all fed into unified contact records.",
      "Built Zapier workflows to connect the CRM with their property portals and accounting software, eliminating the double-entry that was consuming hours of admin time each week."
    ],
    outcome: {
      metrics: [
        "Admin time reduced by approximately 12 hours per week",
        "Lead response time improved from 24+ hours to under 2 hours",
        "Zero lost enquiries in six months post-implementation",
        "Maintenance request resolution time halved"
      ],
      summary: "The implementation gave Greenfield a single source of truth for all client and property data. More importantly, it freed up the team to focus on relationships rather than data entry."
    },
    images: [
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", caption: "Custom dashboard showing pipeline overview and key metrics" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "Workflow automation map connecting CRM to external systems" },
      { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", caption: "Property database schema design document" }
    ],
    reflection: {
      worked: [
        "Mapping existing workflows before touching any software prevented us from automating broken processes",
        "Using HubSpot for CRM and PostgreSQL for property data gave us the best of both worlds",
        "Building in training time from the start meant adoption was smooth"
      ],
      didnt: [
        "Initial data migration took longer than estimated due to inconsistent formatting in legacy spreadsheets",
        "Some automations were too aggressive at first and needed manual override options"
      ],
      different: "Would have done a more thorough data audit before starting the migration. Cleaning up years of inconsistent data formatting mid-project was avoidable."
    }
  },
  {
    slug: "contact-database-cleanup",
    title: "Contact Database Restructure",
    client: "Regional Arts Council",
    role: "Database Administrator",
    year: "2024",
    duration: "6 weeks",
    industry: "Arts & Non-Profit",
    description: "Cleaned and restructured a contact database that had accumulated duplicates and inconsistencies over eight years, enabling more effective stakeholder communication.",
    tools: ["PostgreSQL", "Python", "Mailchimp", "Google Sheets"],
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    overview: "The Regional Arts Council had been building their contact database for eight years across multiple staff members and systems. The result was over 15,000 records with significant duplication, inconsistent formatting, and unclear categorisation. Email campaigns were bouncing at 18%, and staff couldn't trust the data for funding reports.",
    constraints: {
      time: "Six weeks to complete before the autumn funding cycle",
      budget: "Non-profit budget requiring cost-effective solutions",
      team: "Two staff members available for validation work",
      platform: "Needed to remain compatible with existing Mailchimp integration"
    },
    approach: [
      "Exported all data and ran initial analysis to understand the scale of the problem—duplicate detection, email validation, and field consistency checks.",
      "Built Python scripts to standardise formatting (phone numbers, postcodes, organisation names) and flag probable duplicates using fuzzy matching on names and email addresses.",
      "Created a validation workflow where staff reviewed flagged records in batches, making merge decisions for duplicates and confirming categorisation updates.",
      "Redesigned the database schema with proper constraints and validation rules to prevent the same problems recurring."
    ],
    outcome: {
      metrics: [
        "Record count reduced from 15,000 to 9,200 after deduplication",
        "Email bounce rate dropped from 18% to under 2%",
        "Staff confidence in data accuracy restored",
        "Funding report generation time reduced significantly"
      ],
      summary: "The restructured database gave the council reliable data for the first time in years. The validation rules we implemented mean it should stay clean going forward."
    },
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Data quality analysis showing duplicate clusters" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", caption: "Validation workflow interface for staff review" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "New schema design with integrity constraints" }
    ],
    reflection: {
      worked: [
        "Automated detection combined with human validation caught edge cases that pure automation would have missed",
        "Involving staff in the validation process built trust in the final result",
        "Adding constraints to the schema prevents future data quality issues"
      ],
      didnt: [
        "Initial duplicate thresholds were too aggressive and flagged legitimate separate contacts",
        "Some historical categorisation decisions were impossible to understand without context that no longer existed"
      ],
      different: "Would have built the validation interface earlier in the process. Staff feedback on the first batch would have informed better automation rules for the rest."
    }
  },
  {
    slug: "consulting-pipeline-automation",
    title: "Sales Pipeline Automation",
    client: "Meridian Consulting",
    role: "Systems Architect",
    year: "2024",
    duration: "2 months",
    industry: "Professional Services",
    description: "Rebuilt and automated a consulting firm's sales pipeline in Salesforce, reducing manual follow-up work and improving visibility for partners.",
    tools: ["Salesforce", "Zapier", "Slack", "Google Sheets"],
    featured: true,
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    overview: "Meridian Consulting had Salesforce but wasn't really using it. Deals were tracked in a shared spreadsheet, follow-ups happened (or didn't) based on individual memory, and partners had no real visibility into the pipeline. They didn't need a new CRM—they needed someone to make their existing one actually work.",
    constraints: {
      time: "Two months to redesign and implement, with training completed before quarter end",
      budget: "Existing Salesforce subscription needed to be utilised better before considering upgrades",
      team: "Eight consultants with varying levels of CRM adoption",
      platform: "Salesforce core with integrations to Slack for notifications and Google Workspace for documents"
    },
    approach: [
      "Interviewed each consultant individually to understand their actual workflow versus the 'official' process. The gap between these was where the system had failed them.",
      "Simplified the opportunity stages from twelve to six, removing distinctions that looked good in theory but nobody used in practice.",
      "Built automated workflows for the tasks consultants disliked: follow-up reminders, proposal deadline alerts, and handoff notifications. Made the CRM do the nagging so people didn't have to.",
      "Created a weekly pipeline dashboard that went to partners automatically, replacing the manual report that took two hours to compile."
    ],
    outcome: {
      metrics: [
        "CRM adoption increased from roughly 40% to over 90%",
        "Manual reporting time eliminated (2+ hours per week saved)",
        "Average deal cycle shortened by 15%",
        "Follow-up tasks completed on time improved from 60% to 95%"
      ],
      summary: "The same Salesforce subscription they'd been paying for suddenly became useful. The key was making the CRM serve the consultants rather than expecting consultants to serve the CRM."
    },
    images: [
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", caption: "Simplified pipeline stages with clear exit criteria" },
      { src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80", caption: "Automated notification workflow in Zapier" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "Partner dashboard showing pipeline health metrics" }
    ],
    reflection: {
      worked: [
        "Individual interviews revealed the real problems that group workshops would have missed",
        "Simplifying rather than adding features made adoption much easier",
        "Automating the annoying tasks first built goodwill for broader adoption"
      ],
      didnt: [
        "Initially underestimated how much historical data cleanup would be needed",
        "Some automation edge cases required manual overrides we hadn't planned for"
      ],
      different: "Would have done a data cleanup sprint before launching the new workflows. Garbage data in a well-designed system is still garbage."
    }
  },
  {
    slug: "inventory-system-migration",
    title: "Inventory Database Migration",
    client: "Thornton Engineering",
    role: "Database Administrator",
    year: "2024",
    duration: "3 months",
    industry: "Manufacturing",
    description: "Migrated a manufacturing company from an aging Access database to a modern PostgreSQL system, improving reliability and enabling real-time reporting.",
    tools: ["PostgreSQL", "Metabase", "Python", "Airtable"],
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    overview: "Thornton Engineering had been running their inventory on a Microsoft Access database built in 2010. It worked when they had 500 SKUs. Now they had 3,000+, and the database was crashing regularly. They needed a proper database that could handle their current scale and grow with them.",
    constraints: {
      time: "Three months to design, build, migrate, and train",
      budget: "Small manufacturing business budget—needed cost-effective solutions",
      team: "Warehouse manager plus two floor staff would be primary users",
      platform: "Desktop and mobile access required for floor staff doing stocktakes"
    },
    approach: [
      "Analysed the existing Access database structure and identified fundamental design problems—lack of normalisation, no referential integrity, and fields being used for multiple purposes.",
      "Designed a clean PostgreSQL schema with proper relationships, constraints, and indexing. Built it to handle 10x their current volume.",
      "Created an Airtable front-end for daily operations—easy enough for warehouse staff to use without SQL training.",
      "Built Metabase dashboards for reporting, giving management visibility into stock levels, turnover rates, and reorder points."
    ],
    outcome: {
      metrics: [
        "Zero database crashes since implementation",
        "Stock discrepancy rate reduced from 8% to under 1%",
        "Monthly stocktake time reduced from 2 days to 4 hours",
        "System handles 3x query volume without performance issues"
      ],
      summary: "The new system turned inventory management from a constant problem into a solved one. Warehouse staff actually trust the numbers now."
    },
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Database schema showing normalised structure" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", caption: "Airtable interface for daily inventory operations" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "Metabase dashboard for inventory analytics" }
    ],
    reflection: {
      worked: [
        "Using Airtable as the interface layer made adoption painless for non-technical users",
        "Designing for 10x scale from the start means they won't outgrow this system",
        "The combination of PostgreSQL for data integrity and Airtable for usability was ideal"
      ],
      didnt: [
        "Initial data migration revealed more inconsistencies than expected",
        "Some custom Access reports needed manual recreation in Metabase"
      ],
      different: "Would build the reporting layer earlier in the project. Having dashboards available during testing would have caught some edge cases sooner."
    }
  },
  {
    slug: "donor-management-system",
    title: "Donor Management System",
    client: "Sheffield Community Foundation",
    role: "CRM Consultant",
    year: "2023",
    duration: "2 months",
    industry: "Non-Profit",
    description: "Implemented a donor management system for a community foundation, enabling better relationship tracking and more effective fundraising campaigns.",
    tools: ["Zoho CRM", "Mailchimp", "Zapier", "Google Sheets"],
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    overview: "Sheffield Community Foundation was tracking donors in spreadsheets, which meant they had no real visibility into giving patterns, lapsed donors, or campaign effectiveness. They needed a proper donor management system but didn't have the budget for enterprise non-profit software.",
    constraints: {
      time: "Two months to implement before the autumn fundraising season",
      budget: "Charity budget requiring free or low-cost tools",
      team: "Two part-time fundraising staff and several volunteers",
      platform: "Needed to integrate with existing Mailchimp for email campaigns"
    },
    approach: [
      "Selected Zoho CRM for its free tier and non-profit pricing, customising it for donor relationship management rather than sales.",
      "Built custom modules for tracking donations, pledges, and volunteer hours, with relationships linking individuals to their giving history.",
      "Created automated workflows for acknowledgment emails, renewal reminders, and lapsed donor re-engagement sequences.",
      "Integrated with Mailchimp so campaign results automatically updated donor records."
    ],
    outcome: {
      metrics: [
        "Donor retention rate improved from 45% to 62% in first year",
        "Average gift size increased by 23%",
        "Time spent on donor admin reduced by 10 hours per week",
        "Lapsed donor campaign recovered £12,000"
      ],
      summary: "A proper donor management system transformed their fundraising from reactive to proactive. They now know who their donors are and can cultivate relationships properly."
    },
    images: [
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", caption: "Donor dashboard showing giving patterns and engagement" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "Automated acknowledgment workflow" },
      { src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80", caption: "Campaign tracking integrated with Mailchimp" }
    ],
    reflection: {
      worked: [
        "Zoho's customisation options meant we could build a proper donor system without enterprise costs",
        "Automating acknowledgments immediately freed up staff time",
        "Mailchimp integration kept email marketing connected to relationship data"
      ],
      didnt: [
        "Initial volunteer adoption was slower than staff adoption",
        "Some historical giving data was incomplete and required manual research"
      ],
      different: "Would spend more time on volunteer training. They interact with donors regularly but weren't using the system to log those interactions initially."
    }
  },
  {
    slug: "ecommerce-data-integration",
    title: "E-commerce Systems Integration",
    client: "Willow & Sage Homeware",
    role: "Systems Integrator",
    year: "2023",
    duration: "6 weeks",
    industry: "Retail",
    description: "Connected disparate e-commerce systems—Shopify, warehouse management, and accounting—into a unified data flow that eliminated manual reconciliation.",
    tools: ["Shopify", "Make (Integromat)", "Airtable", "QuickBooks"],
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    overview: "Willow & Sage had grown quickly online but their systems hadn't grown with them. Orders came through Shopify, inventory was tracked in a separate system, and accounting was done manually in QuickBooks. The owner was spending hours each day on reconciliation that should have been automatic.",
    constraints: {
      time: "Six weeks to implement before peak Christmas trading",
      budget: "Small business budget with existing tool subscriptions to work within",
      team: "Owner-operator with one part-time assistant",
      platform: "Shopify non-negotiable, QuickBooks required for accountant compatibility"
    },
    approach: [
      "Mapped every data flow between systems—where orders originated, how inventory was tracked, what needed to go to accounting, and where the manual work was.",
      "Built Make (Integromat) scenarios to sync orders from Shopify to Airtable (for operational tracking) and QuickBooks (for accounting) automatically.",
      "Created inventory sync workflows that updated stock levels across Shopify and the warehouse system in real-time.",
      "Added automated alerts for low stock, unusual order patterns, and sync failures."
    ],
    outcome: {
      metrics: [
        "Daily reconciliation time reduced from 3 hours to 15 minutes",
        "Order processing errors eliminated",
        "Inventory accuracy improved from 85% to 99%",
        "Owner freed to focus on product sourcing and marketing"
      ],
      summary: "The integration gave the owner their evenings back. Systems that talk to each other automatically mean fewer mistakes and less time spent on admin."
    },
    images: [
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", caption: "Integration architecture showing data flows" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "Make scenario for order processing" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Operational dashboard in Airtable" }
    ],
    reflection: {
      worked: [
        "Starting with a complete map of existing flows prevented us from missing edge cases",
        "Make's visual interface meant the owner could understand and modify scenarios themselves",
        "Building in failure alerts caught issues before they became problems"
      ],
      didnt: [
        "Some Shopify webhooks were less reliable than expected, requiring retry logic",
        "Initial inventory sync had timing issues that caused brief discrepancies"
      ],
      different: "Would test the integration under load before Christmas rather than assuming it would scale. We had to make adjustments during the busy period."
    }
  },
  {
    slug: "media-workflow-documentation",
    title: "Workflow Documentation Project",
    client: "Northern Media Collective",
    role: "Systems Consultant",
    year: "2023",
    duration: "4 weeks",
    industry: "Media & Production",
    description: "Documented and systematised operational workflows for a media production company preparing for growth, creating handover-ready process documentation.",
    tools: ["Notion", "Loom", "Miro", "Google Workspace"],
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    overview: "Northern Media Collective had grown to the point where tribal knowledge was becoming a liability. Key processes lived in people's heads, onboarding new team members took months, and the founders couldn't step back from day-to-day operations. They needed their workflows documented before they could grow further.",
    constraints: {
      time: "Four weeks to complete documentation before a new hire started",
      budget: "Limited budget for external consulting",
      team: "Three founders plus two contractors, all actively working on projects",
      platform: "Already using Notion for project management, needed to integrate documentation there"
    },
    approach: [
      "Shadowed each team member for a day, documenting their actual workflows rather than what they thought their workflows were.",
      "Identified the critical processes that would break if someone was unavailable—these became the priority for documentation.",
      "Created process documentation in Notion with decision trees, checklists, and embedded Loom videos for complex tasks.",
      "Built a documentation structure that could grow with the company, with clear ownership and review cycles."
    ],
    outcome: {
      metrics: [
        "New hire onboarding time reduced from 3 months to 6 weeks",
        "Founders able to take their first holiday in two years",
        "Zero process failures during staff absence",
        "Documentation became living resource, updated regularly by team"
      ],
      summary: "The documentation project wasn't glamorous, but it was transformative. The company could finally operate without every decision going through the founders."
    },
    images: [
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", caption: "Process map showing key workflows and dependencies" },
      { src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80", caption: "Notion documentation structure" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "Decision tree for client onboarding process" }
    ],
    reflection: {
      worked: [
        "Observing actual workflows rather than asking about them revealed the real processes",
        "Loom videos captured context that written documentation couldn't",
        "Building documentation into existing tools (Notion) meant it actually got used"
      ],
      didnt: [
        "Some processes were more variable than expected, making documentation challenging",
        "Initial documentation was too detailed in places—had to simplify for usability"
      ],
      different: "Would involve the team more in the writing process from the start. Documentation that people write themselves tends to be more accurate and more likely to be maintained."
    }
  },
  {
    slug: "membership-database-redesign",
    title: "Membership Database Redesign",
    client: "Yorkshire Craft Guild",
    role: "Database Designer",
    year: "2023",
    duration: "5 weeks",
    industry: "Membership Organisation",
    description: "Redesigned a membership database for a craft guild, improving data structure and enabling self-service member management through a simple web interface.",
    tools: ["PostgreSQL", "Airtable", "Zapier", "Stripe"],
    featured: false,
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    overview: "Yorkshire Craft Guild managed their 400+ members through a combination of spreadsheets and email. Renewals were tracked manually, member directories were always out of date, and the administrator spent hours each week on tasks that should have been automated.",
    constraints: {
      time: "Five weeks to implement before annual renewal season",
      budget: "Volunteer-run organisation with minimal budget",
      team: "One part-time administrator managing all member relations",
      platform: "Needed to integrate with existing Stripe for payment processing"
    },
    approach: [
      "Designed a PostgreSQL database to properly structure member data—contact details, membership types, renewal dates, and activity history.",
      "Built an Airtable interface layer for the administrator—familiar spreadsheet-like interface but with proper data validation.",
      "Created Zapier workflows for automatic renewal reminders, welcome sequences, and member directory updates.",
      "Integrated Stripe payments so renewals could be processed automatically with minimal manual intervention."
    ],
    outcome: {
      metrics: [
        "Admin time reduced from 15 hours to 4 hours per week",
        "Renewal rate improved from 72% to 85%",
        "Member directory now always current",
        "Self-service payments reduced manual processing by 80%"
      ],
      summary: "The redesign gave the administrator their time back and improved the member experience. A well-designed database with the right interfaces can transform a struggling organisation."
    },
    images: [
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "New database schema for membership data" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", caption: "Airtable interface for member management" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", caption: "Automated renewal workflow" }
    ],
    reflection: {
      worked: [
        "Airtable's familiar interface meant no learning curve for the administrator",
        "Stripe integration made payment processing nearly automatic",
        "Automated reminders dramatically improved renewal rates"
      ],
      didnt: [
        "Some members needed phone support to use online renewal—hadn't anticipated this",
        "Historical membership data had gaps that required manual investigation"
      ],
      different: "Would have included a simple phone script for helping less tech-savvy members with online renewals. Not everyone is comfortable with self-service."
    }
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getAllProjects(): Project[] {
  return projects
}
