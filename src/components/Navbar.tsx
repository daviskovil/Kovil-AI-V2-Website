'use client'

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Users, Rocket, Shield, BookOpen, FileText, Workflow, Menu, X, ChevronRight, Zap, Cloud, Globe, ShoppingBag } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { OnboardingModal } from "@/src/components/OnboardingModal"
import { openCalendly } from "@/src/lib/calendly"

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

const resourceLinks = [
  {
    to: "/case-studies",
    icon: BookOpen,
    label: "Case Studies",
    desc: "Real AI deployments and measurable outcomes.",
  },
  {
    to: "/blog",
    icon: FileText,
    label: "Blog",
    desc: "AI engineering insights, guides and deep-dives.",
  },
  {
    to: "/ai-workflow-automation-library",
    icon: Workflow,
    label: "AI Workflow Library",
    desc: "Real AI automations across industries.",
  },
]

const exploreLinks = [
  {
    to: "/ai-consulting-firm",
    icon: Globe,
    label: "AI Consulting Services",
    desc: "Enterprise strategy, architecture, and scoping.",
    color: "#EA580C",
  },
  {
    to: "/agentforce",
    icon: Zap,
    label: "Salesforce Agentforce",
    desc: "AI agents built natively on Salesforce.",
    color: "#00A1E0",
  },
  {
    to: "/azure-ai-foundry",
    icon: Cloud,
    label: "Azure AI Foundry",
    desc: "Enterprise AI agents on Microsoft Azure.",
    color: "#0078D4",
  },
  {
    to: "/vertex-ai",
    icon: Globe,
    label: "GCP Vertex AI",
    desc: "AI agents powered by Google Cloud.",
    color: "#4285F4",
  },
  {
    to: "/intelligent-document-processing",
    icon: FileText,
    label: "Document AI & IDP",
    desc: "Intelligent document processing pipelines.",
    color: "#F97316",
  },
  {
    to: "/shopify",
    icon: ShoppingBag,
    label: "Shopify AI Solutions",
    desc: "AI agents built for Shopify stores.",
    color: "#95BF47",
  },
]

const hireLink = {
  to: "/hire",
  icon: Users,
  label: "Hire an AI Engineer",
  desc: "Vetted specialist AI engineers, matched in 48 hours.",
  color: "#FF4F00",
}

function ResourcesDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname() ?? ''
  const isActive =
    pathname.startsWith("/case-studies") ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/ai-workflow-automation-library")

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
        Resources
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-background border border-border rounded-2xl shadow-xl overflow-hidden z-50">
          <div className="h-0.5 bg-accent w-full" />
          <div className="p-2">
            {resourceLinks.map((item) => {
              const Icon = item.icon
              const active = pathname.startsWith(item.to)
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

function ExploreDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname() ?? ''
  const isActive =
    pathname.startsWith("/agentforce") ||
    pathname.startsWith("/azure-ai-foundry") ||
    pathname.startsWith("/vertex-ai") ||
    pathname.startsWith("/intelligent-document-processing") ||
    pathname.startsWith("/shopify") ||
    pathname.startsWith("/hire")

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
        Explore
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-background border border-border rounded-2xl shadow-xl overflow-hidden z-50">
          <div className="h-0.5 bg-accent w-full" />
          <div className="px-2 pt-3 pb-0.5">
            <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">Explore Platforms</p>
          </div>
          <div className="px-2 pb-2">
            {exploreLinks.map((item) => {
              const Icon = item.icon
              const active = pathname.startsWith(item.to)
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={`flex items-start gap-3 px-4 py-3 rounded-xl transition-colors group ${active ? "bg-accent/8 text-foreground" : "hover:bg-muted/50"}`}
                >
                  <div
                    className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                    style={{ backgroundColor: `${item.color}22` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-foreground leading-snug">{item.label}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              )
            })}

            <div className="my-1 border-t border-border" />
            <Link
              href={hireLink.to}
              className={`flex items-start gap-3 px-4 py-3 rounded-xl transition-colors group ${pathname.startsWith("/hire") ? "bg-accent/8 text-foreground" : "hover:bg-muted/50"}`}
            >
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                style={{ backgroundColor: `${hireLink.color}22` }}
              >
                <hireLink.icon className="h-4 w-4" style={{ color: hireLink.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground leading-snug">{hireLink.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{hireLink.desc}</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Mobile Menu ───────────────────────────────────────────────────────────────

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname() ?? ''
  const [engageOpen, setEngageOpen] = useState(false)
  const [exploreOpen, setExploreOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  // Close on route change
  useEffect(() => { onClose() }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background md:hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 h-20 border-b border-border shrink-0">
        <Link href="/" className="flex items-center gap-2" onClick={onClose}>
          <img src="/kovil-logo-symbol.webp" alt="Kovil AI" className="h-8 w-8 rounded-sm object-cover" />
          <span className="font-display font-bold text-xl tracking-tight">Kovil AI</span>
        </Link>
        <button
          onClick={onClose}
          className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-muted/50 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Links */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
        <Link
          href="/"
          onClick={onClose}
          className={`flex items-center h-12 px-3 rounded-xl text-base font-medium transition-colors ${pathname === "/" ? "bg-accent/10 text-accent font-semibold" : "text-foreground hover:bg-muted/40"}`}
        >
          Home
        </Link>

        <Link
          href="/what-we-do"
          onClick={onClose}
          className={`flex items-center h-12 px-3 rounded-xl text-base font-medium transition-colors ${pathname === "/what-we-do" ? "bg-accent/10 text-accent font-semibold" : "text-foreground hover:bg-muted/40"}`}
        >
          What We Do
        </Link>

        <Link
          href="/how-it-works"
          onClick={onClose}
          className={`flex items-center h-12 px-3 rounded-xl text-base font-medium transition-colors ${pathname === "/how-it-works" ? "bg-accent/10 text-accent font-semibold" : "text-foreground hover:bg-muted/40"}`}
        >
          How It Works
        </Link>

        {/* Engage accordion */}
        <div>
          <button
            onClick={() => setEngageOpen((o) => !o)}
            className={`flex items-center justify-between w-full h-12 px-3 rounded-xl text-base font-medium transition-colors ${pathname.startsWith("/engage") ? "bg-accent/10 text-accent font-semibold" : "text-foreground hover:bg-muted/40"}`}
          >
            Engage
            <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${engageOpen ? "rotate-90" : ""}`} />
          </button>
          {engageOpen && (
            <div className="mt-1 ml-3 pl-3 border-l border-border space-y-1">
              {engageLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${pathname === item.to ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted/40"}`}
                  >
                    <div className="h-7 w-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-snug">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        {/* Explore accordion */}
        <div>
          <button
            onClick={() => setExploreOpen((o) => !o)}
            className={`flex items-center justify-between w-full h-12 px-3 rounded-xl text-base font-medium transition-colors ${(pathname.startsWith("/agentforce") || pathname.startsWith("/azure-ai-foundry") || pathname.startsWith("/vertex-ai") || pathname.startsWith("/intelligent-document-processing") || pathname.startsWith("/shopify") || pathname.startsWith("/hire")) ? "bg-accent/10 text-accent font-semibold" : "text-foreground hover:bg-muted/40"}`}
          >
            Explore
            <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${exploreOpen ? "rotate-90" : ""}`} />
          </button>
          {exploreOpen && (
            <div className="mt-1 ml-3 pl-3 border-l border-border space-y-1">
              {exploreLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${pathname.startsWith(item.to) ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted/40"}`}
                  >
                    <div
                      className="h-7 w-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}22` }}
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold leading-snug">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                )
              })}

              <div className="my-1 border-t border-border" />
              <Link
                href={hireLink.to}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${pathname.startsWith("/hire") ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted/40"}`}
              >
                <div
                  className="h-7 w-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${hireLink.color}22` }}
                >
                  <hireLink.icon className="h-3.5 w-3.5" style={{ color: hireLink.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold leading-snug">{hireLink.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{hireLink.desc}</p>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* Resources accordion */}
        <div>
          <button
            onClick={() => setResourcesOpen((o) => !o)}
            className={`flex items-center justify-between w-full h-12 px-3 rounded-xl text-base font-medium transition-colors ${(pathname.startsWith("/case-studies") || pathname.startsWith("/blog") || pathname.startsWith("/ai-workflow-automation-library")) ? "bg-accent/10 text-accent font-semibold" : "text-foreground hover:bg-muted/40"}`}
          >
            Resources
            <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${resourcesOpen ? "rotate-90" : ""}`} />
          </button>
          {resourcesOpen && (
            <div className="mt-1 ml-3 pl-3 border-l border-border space-y-1">
              {resourceLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.to}
                    href={item.to}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-colors ${pathname.startsWith(item.to) ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted/40"}`}
                  >
                    <div className="h-7 w-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold leading-snug">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        <Link
          href="/apply"
          onClick={onClose}
          className={`flex items-center h-12 px-3 rounded-xl text-base font-medium transition-colors ${pathname === "/apply" ? "bg-accent/10 text-accent font-semibold" : "text-foreground hover:bg-muted/40"}`}
        >
          Apply as AI Engineer
        </Link>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 pb-8 pt-4 border-t border-border shrink-0">
        <Button variant="accent" className="w-full rounded-full font-semibold h-12 text-base" onClick={openCalendly}>
          Book a Call
        </Button>
      </div>
    </div>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname() ?? ''
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/kovil-logo-symbol.webp" alt="Kovil AI" className="h-8 w-8 rounded-sm object-cover" />
            <span className="font-display font-bold text-xl tracking-tight">Kovil AI</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link
              href="/"
              className={`hover:text-foreground transition-colors ${pathname === "/" ? "text-foreground font-semibold" : ""}`}
            >
              Home
            </Link>

            <Link
              href="/what-we-do"
              className={`hover:text-foreground transition-colors ${pathname === "/what-we-do" ? "text-foreground font-semibold" : ""}`}
            >
              What We Do
            </Link>

            <Link
              href="/how-it-works"
              className={`hover:text-foreground transition-colors ${pathname === "/how-it-works" ? "text-foreground font-semibold" : ""}`}
            >
              How It Works
            </Link>

            <EngageDropdown />
            <ExploreDropdown />
            <ResourcesDropdown />
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/apply" className="text-sm font-medium hover:text-accent transition-colors cursor-pointer">
              Apply as AI Engineer
            </Link>
            <Button variant="accent" className="rounded-full font-semibold" onClick={openCalendly}>
              Book a Call
            </Button>
          </div>

          {/* Mobile right — CTA + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <Button variant="accent" className="rounded-full font-semibold text-sm px-5 h-10" onClick={openCalendly}>
              Book a Call
            </Button>
            <button
              onClick={() => setMobileOpen(true)}
              className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-muted/50 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
