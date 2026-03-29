import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Rocket, Shield, CheckCircle2, ArrowRight, Clock } from "lucide-react"
import { Button } from "../components/ui/button"
import { OnboardingModal } from "../components/OnboardingModal"

const tabs = [
  {
    id: "managed-builder",
    label: "Managed AI Builder",
    icon: Users,
    tagline: "Hire a vetted AI builder embedded into your team — fully managed, milestone-gated.",
    color: "text-accent",
    steps: [
      {
        number: "01",
        timeline: "Day 1",
        title: "Brief Your Needs",
        description:
          "Fill a quick intake form — takes under 5 minutes. A Delivery Lead contacts you within 24 hours to scope your requirements, preferred stack, and expected timeline.",
        bullets: [
          "5-minute async intake",
          "Delivery Lead assigned same day",
          "Stack & timezone matched",
        ],
      },
      {
        number: "02",
        timeline: "Days 2 – 3",
        title: "Meet Your Builder",
        description:
          "We surface a shortlist of vetted Tier-1 AI builders matched to your domain. You meet, align on sprint goals, and sign off on a milestone plan before any work begins.",
        bullets: [
          "Curated shortlist — not a marketplace",
          "Live intro call included",
          "Milestone plan agreed upfront",
        ],
      },
      {
        number: "03",
        timeline: "Week 1 onwards",
        title: "Sprint & Deliver",
        description:
          "Your builder works in focused sprints. A Shadow Lead audits every milestone output. You get working, production-ready AI — not decks, not promises.",
        bullets: [
          "Weekly milestone check-ins",
          "Shadow Lead quality audit",
          "Two-week risk-free trial",
        ],
      },
    ],
    cta: "Hire an AI Builder",
  },
  {
    id: "outcome-project",
    label: "Outcome-Based AI Project",
    icon: Rocket,
    tagline: "Describe the outcome you want. We scope, build, and ship it — fixed price, fixed timeline.",
    color: "text-accent",
    steps: [
      {
        number: "01",
        timeline: "Days 1 – 2",
        title: "Scope & Estimate",
        description:
          "Share your idea in plain language. Our team produces a fixed-scope document with clear deliverables, a realistic timeline, and a flat price. No ambiguity, no hidden fees.",
        bullets: [
          "Fixed-price proposal in 48 hours",
          "Deliverables defined in writing",
          "No retainer — pay per project",
        ],
      },
      {
        number: "02",
        timeline: "Weeks 1 – N",
        title: "Build in Gated Milestones",
        description:
          "A dedicated squad builds your AI product in gated milestones. You review and approve each phase before we proceed — full visibility, no surprises mid-build.",
        bullets: [
          "Dedicated squad, not freelancers",
          "Milestone approval gates",
          "Real-time progress dashboard",
        ],
      },
      {
        number: "03",
        timeline: "Final week",
        title: "Ship & Handoff",
        description:
          "We deploy to your infrastructure, write full documentation, and hand off the complete codebase. Optional post-launch support and maintenance retainer available.",
        bullets: [
          "Full codebase ownership",
          "Deployment + documentation included",
          "Optional post-launch support",
        ],
      },
    ],
    cta: "Build an AI Project",
  },
  {
    id: "app-rescue",
    label: "AI Reliability & App Rescue",
    icon: Shield,
    tagline: "Failing AI app? Hallucinating RAG? Vibe-coded mess? Our SWAT team audits, fixes, and stabilises it.",
    color: "text-accent",
    steps: [
      {
        number: "01",
        timeline: "Days 1 – 3",
        title: "Deep Audit",
        description:
          "Our SWAT team audits your full codebase, AI architecture, and production logs. You receive a prioritised diagnostic report — every bug, bottleneck, and risk surface mapped.",
        bullets: [
          "Codebase + AI layer reviewed",
          "Prioritised fix list delivered",
          "No commitment required to proceed",
        ],
      },
      {
        number: "02",
        timeline: "Weeks 1 – 2",
        title: "Fix & Stabilise",
        description:
          "We resolve hallucinations, performance regressions, and critical P1 bugs systematically. Every fix is peer-reviewed and regression-tested before it hits production.",
        bullets: [
          "Hallucination & RAG fixes",
          "Performance & uptime restored",
          "Peer-reviewed before deploy",
        ],
      },
      {
        number: "03",
        timeline: "Month 1 onwards",
        title: "Ongoing Maintenance",
        description:
          "We stay on as your reliability partner — monitoring, proactive patching, and continuous optimisation. Guaranteed SLA with a named engineer on call.",
        bullets: [
          "Named engineer on your account",
          "Proactive monitoring & alerting",
          "99.9% uptime SLA guarantee",
        ],
      },
    ],
    cta: "Get Rescued",
  },
]

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState(0)

  const active = tabs[activeTab]
  const ActiveIcon = active.icon

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-4">
            From Brief to Build —<br />
            <span className="text-accent">Zero Guesswork.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose your engagement model. Every path is milestone-gated, managed, and built to deliver real outcomes.
          </p>
        </div>
        <div className="mt-10 h-px bg-border relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>
      </section>

      {/* Tab Switcher */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-0 no-scrollbar">
            {tabs.map((tab, i) => {
              const Icon = tab.icon
              const isActive = i === activeTab
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`relative flex items-center gap-2.5 px-6 py-5 text-sm font-semibold whitespace-nowrap transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 py-16"
        >
          {/* Tab Intro */}
          <div className="flex items-start gap-4 mb-14">
            <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-1">
              <ActiveIcon className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-foreground mb-1">{active.label}</h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xl">{active.tagline}</p>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {active.steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.35 }}
                className="relative flex flex-col rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />

                {/* Step number + timeline */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-black text-4xl text-accent/20 leading-none select-none">
                    {step.number}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                    <Clock className="h-3 w-3" />
                    {step.timeline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>

                {/* Bullets */}
                <ul className="space-y-2 mt-auto">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Connector Line (desktop) */}
          <div className="hidden md:flex items-center gap-0 mb-16 -mt-12 px-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center flex-1">
                <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                {i < 2 && <div className="flex-1 h-px border-t border-dashed border-accent/30" />}
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-border bg-muted/20 p-8">
            <div>
              <p className="font-display font-bold text-xl text-foreground mb-1">Ready to get started?</p>
              <p className="text-sm text-muted-foreground">No commitment needed — let's scope your project first.</p>
            </div>
            <OnboardingModal>
              <Button variant="accent" className="rounded-full font-semibold px-8 whitespace-nowrap">
                {active.cta} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* Compare All Models */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="h-px bg-border mb-16 relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Compare Models</p>
        <h2 className="font-display font-bold text-3xl mb-10">Not sure which model fits?</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-6 font-semibold text-muted-foreground w-40">Feature</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Managed AI Builder</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Outcome-Based Project</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">App Rescue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Best for", "Ongoing AI features & scale", "New product or MVP build", "Broken or underperforming apps"],
                ["Pricing", "Weekly rate", "Fixed price", "Audit + retainer"],
                ["Timeline", "Flexible, rolling", "Scoped upfront", "Emergency start"],
                ["Team setup", "1 embedded builder", "Dedicated squad", "SWAT audit team"],
                ["Risk-free trial", "✓ 2-week trial", "✓ Milestone gates", "✓ Free audit first"],
                ["Managed delivery", "✓", "✓", "✓"],
              ].map(([feature, col1, col2, col3]) => (
                <tr key={feature} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 pr-6 text-muted-foreground font-medium">{feature}</td>
                  <td className="py-4 px-4 text-foreground">{col1}</td>
                  <td className="py-4 px-4 text-foreground">{col2}</td>
                  <td className="py-4 px-4 text-foreground">{col3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
