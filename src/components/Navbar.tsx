'use client'

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Users, Rocket, Shield } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { OnboardingModal } from "@/src/components/OnboardingModal"

const engageLinks = [
  {
    to: "/engage/managed-ai-engineer",
    icon: Users,
    label: "Managed AI Engineer",
    desc: "Embed a vetted engineer — milestone-gated delivery.",
  },
  {
    to: "/engage/outcome-based-project",
    icon: Rocket,
    label: "Outcome-Based AI Project",
    desc: "Fixed price. Scoped, built & shipped.",
  },
  {
    to: "/engage/app-rescue",
    icon: Shield,
    label: "AI Reliability & App Rescue",
    desc: "Audit, fix & stabilise your failing AI app.",
  },
]

function EngageDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname() ?? ''
  const isActive = pathname.startsWith("/engage")

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1 font-medium text-sm transition-colors hover:text-foreground ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}
      >
        Engage
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-background border border-border rounded-2xl shadow-xl overflow-hidden z-50">
          <div className="h-0.5 bg-accent w-full" />
          <div className="p-2">
            {engageLinks.map((item) => {
              const Icon = item.icon
              const active = pathname === item.to
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`flex items-start gap-3 px-4 py-3 rounded-xl transition-colors group ${active ? "bg-accent/8 text-foreground" : "hover:bg-muted/50"}`}
                >
                  <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-snug">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const pathname = usePathname() ?? ''

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/kovil-logo-symbol.webp" alt="Kovil AI" className="h-8 w-8 rounded-sm object-cover" />
          <span className="font-display font-bold text-xl tracking-tight">Kovil AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link
            href="/how-it-works"
            className={`hover:text-foreground transition-colors ${pathname === "/how-it-works" ? "text-foreground font-semibold" : ""}`}
          >
            How It Works
          </Link>

          <EngageDropdown />

          <Link
            href="/case-studies"
            className={`hover:text-foreground transition-colors ${pathname.startsWith("/case-studies") ? "text-foreground font-semibold" : ""}`}
          >
            Case Studies
          </Link>
          <Link
            href="/blog"
            className={`hover:text-foreground transition-colors ${pathname.startsWith("/blog") ? "text-foreground font-semibold" : ""}`}
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/apply" className="hidden sm:block text-sm font-medium hover:text-accent transition-colors cursor-pointer">Apply as AI Engineer</Link>
          <OnboardingModal>
            <Button variant="accent" className="rounded-full font-semibold">
              Start My AI Build
            </Button>
          </OnboardingModal>
        </div>
      </div>
    </nav>
  )
}
