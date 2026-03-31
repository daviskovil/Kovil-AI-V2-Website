import { useState } from "react"
import { motion } from "framer-motion"
import {
  Rocket, CheckCircle2, ArrowRight, Clock, ChevronDown,
  FileText, Users, GitMerge, Package, Lock, Headphones
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"
import { SEOHead } from "../../components/SEOHead"

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fixed-Price AI Project",
  "provider": { "@type": "Organization", "name": "Kovil AI", "url": "https://kovil.ai" },
  "description": "Get a fixed-price AI project proposal in 48 hours. Milestone-gated builds, dedicated squad, full codebase handoff, and 100% IP assigned to you. No surprises.",
  "url": "https://kovil.ai/engage/outcome-based-project",
  "serviceType": "AI Engineering",
  "areaServed": "Worldwide"
}

const steps = [
  {
    number: "01", timeline: "Days 1–2",
    title: "Scope & Estimate",
    description: "Share your idea in plain language. Our team produces a fixed-scope document with clear deliverables, a realistic timeline, and a flat price. No ambiguity, no hidden fees.",
    bullets: ["Fixed-price proposal in 48 hours", "Deliverables defined in writing", "No retainer — pay per project"],
  },
  {
    number: "02", timeline: "Weeks 1–N",
    title: "Build in Gated Milestones",
    description: "A dedicated squad builds your AI product in gated milestones. You review and approve each phase before we proceed — full visibility, zero surprises.",
    bullets: ["Dedicated squad, not freelancers", "Milestone approval gates", "Real-time progress visibility"],
  },
  {
    number: "03", timeline: "Final week",
    title: "Ship & Handoff",
    description: "We deploy to your infrastructure, write full documentation, and hand off the complete codebase with IP fully assigned to you.",
    bullets: ["Full codebase ownership", "Deployment + docs included", "Optional post-launch support"],
  },
]

const included = [
  { icon: FileText, title: "Fixed-Scope Document", desc: "A written agreement defining exactly what gets built, when, and for how much. Nothing ambiguous, nothing open-ended." },
  { icon: Users, title: "Dedicated Build Squad", desc: "A matched team — AI engineer, a project lead, and QA — focused exclusively on your project until delivery." },
  { icon: GitMerge, title: "Milestone Approval Gates", desc: "You sign off at every milestone before we proceed. You always control the pace and direction of the build." },
  { icon: Package, title: "Full Code Handoff", desc: "At delivery you receive the complete, documented codebase. No lock-in, no subscription, no dependency on Kovil AI to run it." },
  { icon: Lock, title: "IP Fully Assigned", desc: "All work product, models, prompts, and code built during the project are 100% assigned to your company upon final payment." },
  { icon: Headphones, title: "Post-Launch Support Option", desc: "Add a maintenance retainer post-launch and we'll monitor, patch, and optimise — so performance doesn't degrade over time." },
]

const projectTypes = [
  { label: "AI Agent Pipelines", desc: "Multi-step autonomous agents for document processing, lead routing, customer ops, or internal automation." },
  { label: "RAG & Knowledge Bases", desc: "Retrieval-augmented generation systems that surface accurate answers from your proprietary data." },
  { label: "Voice AI & Conversational Apps", desc: "Voice-first or chat interfaces powered by LLMs — for patient intake, sales qualification, or customer support." },
  { label: "AI-Augmented SaaS Features", desc: "Embedded AI features inside your existing product — smart search, auto-summarisation, predictive suggestions." },
  { label: "LLM Ops & Evaluation Pipelines", desc: "Structured workflows to test, evaluate, and continuously improve your AI outputs at scale." },
  { label: "Data Extraction & Automation", desc: "AI-powered pipelines that pull, classify, and act on unstructured data — PDFs, emails, forms, and more." },
]

const timeline = [
  { day: "Day 1–2", title: "Submit Your Idea", desc: "Share your concept in plain language — no spec required. Our team reviews it and schedules a scoping call within 24 hours." },
  { day: "Day 3–5", title: "Fixed-Price Proposal Delivered", desc: "You receive a written scope document: clear deliverables, milestone plan, timeline, and a flat price. No ambiguity, no hidden fees." },
  { day: "Week 1", title: "Squad Assigned & Work Begins", desc: "You approve the proposal, milestone plan is locked, and your dedicated build squad kicks off Sprint 1 immediately." },
  { day: "Weeks 1–N", title: "Gated Milestone Delivery", desc: "Each milestone produces a working, testable output. You review and approve before we proceed — full control at every stage." },
  { day: "Final Week", title: "Deploy, Document & Hand Off", desc: "We deploy to your infrastructure, write full technical documentation, and transfer 100% of the codebase and IP to you." },
]

const comparison = [
  { label: "Fixed price guarantee", kovil: "✓ Always",        inhouse: "✗ Scope creep",   agency: "Rarely",       freelancer: "Rarely" },
  { label: "Time to proposal",      kovil: "48 hours",         inhouse: "Weeks",            agency: "1–2 weeks",    freelancer: "Varies" },
  { label: "Milestone gates",       kovil: "✓ Every phase",    inhouse: "✗",                agency: "Partial",      freelancer: "✗" },
  { label: "Dedicated squad",       kovil: "✓ Matched team",   inhouse: "If you hire",      agency: "Often shared", freelancer: "Solo" },
  { label: "Timeline guarantee",    kovil: "✓ Contractual",    inhouse: "✗",                agency: "Rarely",       freelancer: "✗" },
  { label: "IP ownership",          kovil: "100% yours",       inhouse: "100% yours",       agency: "Often shared", freelancer: "Varies" },
]

export default function OutcomeProjectPage() {

  return (
    <>
    <SEOHead
      title="Fixed-Price AI Project — Scoped, Built & Shipped"
      description="Get a fixed-price AI project proposal in 48 hours. Milestone-gated builds, dedicated squad, full codebase handoff, and 100% IP assigned to you. No lock-in."
      canonical="/engage/outcome-based-project"
      schema={PAGE_SCHEMA}
    />
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Outcome-Based AI Project</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Your AI Product, Scoped,<br />
            <span className="text-accent">Built & Shipped.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Describe the outcome you want. We produce a fixed-price proposal in 48 hours, build in gated milestones, and hand off the full codebase — IP yours, no lock-in.
          </p>
          <div className="flex flex-wrap gap-4">
            <OnboardingModal defaultGoal="project">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Build an AI Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="self-center text-sm text-muted-foreground">Fixed price. Milestone gates. Full IP ownership.</p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { stat: "48h", label: "Proposal turnaround" },
            { stat: "Fixed", label: "Price — no surprises" },
            { stat: "100%", label: "IP assigned to you" },
            { stat: "Gated", label: "Milestone approvals" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What We Build</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">AI products across every layer of the stack.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectTypes.map((pt, i) => (
              <motion.div
                key={pt.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6 group hover:border-accent/40 transition-all"
              >
                <div className="h-2 w-8 rounded-full bg-accent/30 group-hover:bg-accent/60 transition-colors mb-4" />
                <h3 className="font-semibold text-base mb-2">{pt.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Scope. Build. Ship. In that order.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-black text-4xl text-accent/20 leading-none">{step.number}</span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                  <Clock className="h-3 w-3" />{step.timeline}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>
              <ul className="space-y-2 mt-auto">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What's Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Everything from scope to ship — in one engagement.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What to Expect Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">From idea to shipped product — step by step.</h2>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-[136px] flex flex-col items-end gap-1 pt-1 hidden md:flex">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent bg-accent/10 px-2.5 py-1 rounded-full">{item.day}</span>
                </div>
                <div className="shrink-0 h-3 w-3 rounded-full bg-accent mt-2 hidden md:block ring-4 ring-background z-10" />
                <div className="flex-1 bg-muted/20 border border-border rounded-xl p-5 hover:border-accent/30 transition-colors">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent mb-1 block md:hidden">{item.day}</span>
                  <h3 className="font-display font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kovil vs Alternatives */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil</p>
        <h2 className="font-display font-bold text-3xl mb-12">How we compare to your other build options.</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground w-40"></th>
                <th className="text-left py-4 px-6 font-bold text-accent">Kovil AI</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">In-House Build</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Big Agency</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Freelancer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparison.map((row) => (
                <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 text-muted-foreground font-medium">{row.label}</td>
                  <td className="py-4 px-6 font-semibold text-foreground">{row.kovil}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.inhouse}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.agency}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.freelancer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to build your AI product?</h2>
            <p className="text-background/60 text-base">Share your idea. We'll scope it and send a fixed-price proposal in 48 hours.</p>
          </div>
          <OnboardingModal defaultGoal="project">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Build an AI Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
    </>
  )
}
