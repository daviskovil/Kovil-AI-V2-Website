import { useState, useRef, useEffect } from "react"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import ReactGA from "react-ga4"
import { ChevronDown, Users, Rocket, Shield } from "lucide-react"

import { Button } from "./components/ui/button"
import { OnboardingModal } from "./components/OnboardingModal"

import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import BlogPostPage from "./pages/BlogPostPage"
import CaseStudiesPage from "./pages/CaseStudiesPage"
import CaseStudyPage from "./pages/CaseStudyPage"
import HowItWorksPage from "./pages/HowItWorksPage"
import ManagedAIEngineerPage from "./pages/engage/ManagedAIEngineerPage"
import OutcomeProjectPage from "./pages/engage/OutcomeProjectPage"
import AppRescuePage from "./pages/engage/AppRescuePage"
import ApplyPage from "./pages/ApplyPage"
import TermsPage from "./pages/TermsPage"
import PrivacyPage from "./pages/PrivacyPage"

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
  const location = useLocation()
  const isActive = location.pathname.startsWith("/engage")

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  // Close on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

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
          {/* Orange top bar */}
          <div className="h-0.5 bg-accent w-full" />
          <div className="p-2">
            {engageLinks.map((item) => {
              const Icon = item.icon
              const active = location.pathname === item.to
              return (
                <Link
                  key={item.to}
                  to={item.to}
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

function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/kovil-logo-symbol.png" alt="Kovil AI" className="h-8 w-8 rounded-sm object-cover" />
          <span className="font-display font-bold text-xl tracking-tight">Kovil AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link
            to="/how-it-works"
            className={`hover:text-foreground transition-colors ${location.pathname === "/how-it-works" ? "text-foreground font-semibold" : ""}`}
          >
            How It Works
          </Link>

          <EngageDropdown />

          <Link
            to="/case-studies"
            className={`hover:text-foreground transition-colors ${location.pathname.startsWith("/case-studies") ? "text-foreground font-semibold" : ""}`}
          >
            Case Studies
          </Link>
          <Link
            to="/blog"
            className={`hover:text-foreground transition-colors ${location.pathname.startsWith("/blog") ? "text-foreground font-semibold" : ""}`}
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/apply" className="hidden sm:block text-sm font-medium hover:text-accent transition-colors cursor-pointer">Apply as AI Engineer</Link>
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

function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img src="/kovil-logo-symbol-orange.png" alt="Kovil AI" className="h-7 w-auto" />
            <span className="font-display font-bold text-2xl tracking-tight">Kovil AI</span>
          </div>
          <p className="text-sm text-muted/60 mb-6">
            Managed AI implementation with zero delivery risk.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Engage</h4>
          <ul className="space-y-3 text-sm text-muted/60">
            <li><Link to="/engage/managed-ai-engineer" className="hover:text-accent transition-colors">Managed AI Engineer</Link></li>
            <li><Link to="/engage/outcome-based-project" className="hover:text-accent transition-colors">Outcome-Based AI Project</Link></li>
            <li><Link to="/engage/app-rescue" className="hover:text-accent transition-colors">AI Reliability & App Rescue</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-muted/60">
            <li><Link to="/how-it-works" className="hover:text-accent transition-colors">How It Works</Link></li>
            <li><Link to="/apply" className="hover:text-accent transition-colors">Apply as AI Engineer</Link></li>
            <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted/60">
            <li>+1 646-535-9141</li>
            <li><a href="mailto:info@kovil.ai" className="hover:text-accent transition-colors">info@kovil.ai</a></li>
            <li className="pt-1">734 Franklin Ave,<br />Garden City, New York<br />11530, US</li>
            <li className="pt-2">
              <a href="https://www.linkedin.com/company/kovil-ai/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-sm text-muted/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Kovil AI LLC. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/terms" className="hover:text-white transition-colors cursor-pointer">Terms</Link>
          <Link to="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}

ReactGA.initialize("G-J2TXKBR1L0")

function PageTracker() {
  const location = useLocation()
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search })
  }, [location])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      <PageTracker />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<div className="pt-20"><BlogPage /></div>} />
        <Route path="/blog/:slug" element={<div className="pt-20"><BlogPostPage /></div>} />
        <Route path="/case-studies" element={<div className="pt-20"><CaseStudiesPage /></div>} />
        <Route path="/case-studies/:slug" element={<div className="pt-20"><CaseStudyPage /></div>} />
        <Route path="/how-it-works" element={<div className="pt-20"><HowItWorksPage /></div>} />
        <Route path="/engage/managed-ai-engineer" element={<div className="pt-20"><ManagedAIEngineerPage /></div>} />
        <Route path="/engage/outcome-based-project" element={<div className="pt-20"><OutcomeProjectPage /></div>} />
        <Route path="/engage/app-rescue" element={<div className="pt-20"><AppRescuePage /></div>} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>

      <Footer />
    </div>
  )
}
