import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-foreground">Hameed Ur Rehman</p>
            <a 
              href="mailto:rehman2384@gmail.com" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              rehman2384@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hameed Ur Rehman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
