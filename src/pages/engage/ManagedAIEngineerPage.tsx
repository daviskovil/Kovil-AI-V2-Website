'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Users, CheckCircle2, ArrowRight, Clock, ChevronDown,
  Zap, ShieldCheck, BarChart3, Repeat2, Globe2, Brain
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",                 "item": "https://kovil.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Engage",               "item": "https://kovil.ai/engage/managed-ai-engineer" },
    { "@type": "ListItem", "position": 3, "name": "Managed AI Engineer",  "item": "https://kovil.ai/engage/managed-ai-engineer" }
  ]
}

const PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Managed AI Engineer",
  "provider": { "@type": "Organization", "name": "Kovil AI", "url": "https://kovil.ai" },
  "description": "Embed a vetted Tier-1 AI engineer into your team in under 48 hours. Sprint-based delivery, Engagement Manager oversight, 2-week risk-free trial. No lock-in.",
  "url": "https://kovil.ai/engage/managed-ai-engineer",
  "serviceType": "AI Engineering",
  "areaServed": "Worldwide"
}

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Hire a Managed AI Engineer with Kovil AI",
  "description": "Embed a vetted AI engineer into your team in under 48 hours with milestone-gated delivery and Engagement Manager oversight.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Brief Your Needs", "text": "Fill a 5-minute intake form. A Delivery Lead contacts you within 24 hours to scope your requirements, preferred stack, and timeline.", "url": "https://kovil.ai/engage/managed-ai-engineer" },
    { "@type": "HowToStep", "position": 2, "name": "Meet Your Engineer", "text": "We surface a curated shortlist of Tier-1 AI engineers matched to your domain. You meet, align on sprint goals, and sign off on a milestone plan.", "url": "https://kovil.ai/engage/managed-ai-engineer" },
    { "@type": "HowToStep", "position": 3, "name": "Sprint & Deliver", "text": "Your engineer works in focused sprints. An Engagement Manager audits every milestone output. You get working, production-ready AI — not decks, not promises.", "url": "https://kovil.ai/engage/managed-ai-engineer" }
  ]
}

const steps = [
  {
    number: "01", timeline: "Day 1",
    title: "Brief Your Needs",
    description: "Fill a 5-minute intake form. A Delivery Lead contacts you within 24 hours to scope your requirements, preferred stack, and timeline.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "Stack & timezone matched"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Engineer",
    description: "We surface a curated shortlist of Tier-1 AI engineers matched to your domain. You meet, align on sprint goals, and sign off on a milestone plan.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your engineer works in focused sprints. A Engagement Manager audits every milestone output. You get working, production-ready AI — not decks, not promises.",
    bullets: ["Weekly milestone check-ins", "Engagement Manager quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted Builder", desc: "Every builder passes a rigorous 5-stage technical vetting — coding, system design, AI depth, and live delivery simulation." },
  { icon: Repeat2, title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every milestone before it reaches you. No surprises, no silent drift." },
  { icon: Zap, title: "Sprint-Based Delivery", desc: "Work happens in structured weekly sprints with clear deliverables. Not open-ended hours billed to a ticket queue." },
  { icon: Globe2, title: "Timezone Matched", desc: "We match your builder to overlap with your core working hours — real-time collaboration, not async delays." },
  { icon: BarChart3, title: "Progress Dashboard", desc: "View sprint goals, completed work, and upcoming milestones in one place. Full visibility at all times." },
  { icon: Brain, title: "AI Domain Depth", desc: "Builders specialise across LLMs, RAG pipelines, voice AI, agent frameworks, and MLOps — not generalist developers." },
]

const forWho = [
  { label: "Growing Startups", desc: "Need AI velocity without building a full in-house team. Get an engineer embedded immediately." },
  { label: "Enterprises Augmenting Teams", desc: "Your team has direction but needs specialist AI execution. We slot in without friction." },
  { label: "CTOs & Heads of Engineering", desc: "Want reliable AI delivery without managing freelancers, agencies, or offshore vendors." },
]

const timeline = [
  { day: "Day 1", title: "Submit Your Brief", desc: "Fill a 5-minute intake form. A Delivery Lead calls you within 24 hours to scope requirements, preferred stack, and timeline." },
  { day: "Day 2–3", title: "Meet Your Shortlist", desc: "We surface 2–3 hand-picked engineers matched to your domain. You review profiles, join intro calls, and choose your fit." },
  { day: "Day 3–4", title: "Milestone Plan Locked", desc: "You and your engineer agree a sprint plan — clear deliverables, timelines, and success criteria — before any work begins." },
  { day: "Week 1+", title: "Sprint & Deliver", desc: "Your engineer works in focused sprints. Your Engagement Manager audits every output. You review at each milestone checkpoint." },
  { day: "Ongoing", title: "Scale or Wind Down", desc: "Add engineers, extend sprints, or wind down — no lock-in. You stay because it's working, not because you're contracted." },
]

const comparison = [
  { label: "Time to start",      kovil: "24–48 hours",     inhouse: "2–3 months",   agency: "2–4 weeks",    freelancer: "1–2 weeks" },
  { label: "Technical vetting",  kovil: "5-stage process", inhouse: "You do it",    agency: "Varies",       freelancer: "You do it" },
  { label: "Managed delivery",   kovil: "✓ Always",        inhouse: "✗",            agency: "Partial",      freelancer: "✗" },
  { label: "Risk-free trial",    kovil: "✓ 2 weeks",       inhouse: "✗",            agency: "✗",            freelancer: "Rarely" },
  { label: "IP ownership",       kovil: "100% yours",      inhouse: "100% yours",   agency: "Often shared", freelancer: "Varies" },
  { label: "Cost",               kovil: "$$",              inhouse: "$$$$",         agency: "$$$",          freelancer: "$" },
]

export default function ManagedAIEngineerPage() {

  return (
    <>
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Managed AI Engineer</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Ship AI Features Faster —<br />
            <span className="text-accent">Fully Managed Delivery.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Embed a vetted Tier-1 AI engineer into your team. Every sprint is milestone-gated, Engagement Manager audited, and built to production standard.
          </p>
          <div className="flex flex-wrap gap-4">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire an AI Engineer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="self-center text-sm text-muted-foreground">Two-week risk-free trial. No lock-in.</p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { stat: "< 48h", label: "Time to match" },
            { stat: "Top 1%", label: "Engineer tier" },
            { stat: "100%", label: "IP ownership" },
            { stat: "2 weeks", label: "Risk-free trial" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It's For</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Is the Managed AI Engineer Model Built For?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {forWho.map((w, i) => (
              <motion.div
                key={w.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-4 w-4 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{w.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Does the Managed AI Engineer Process Work?</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What's Included in a Managed AI Engineer Engagement?</h2>
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
        <h2 className="font-display font-bold text-3xl mb-12">What Should You Expect When Hiring a Managed AI Engineer?</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                {/* Day badge */}
                <div className="shrink-0 w-[136px] flex flex-col items-end gap-1 pt-1 hidden md:flex">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent bg-accent/10 px-2.5 py-1 rounded-full">{item.day}</span>
                </div>
                {/* Dot */}
                <div className="shrink-0 h-3 w-3 rounded-full bg-accent mt-2 hidden md:block ring-4 ring-background z-10" />
                {/* Content */}
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
        <h2 className="font-display font-bold text-3xl mb-12">How Does Kovil AI Compare to In-House Hiring and Agencies?</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground w-40"></th>
                <th className="text-left py-4 px-6 font-bold text-accent">Kovil AI</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">In-House Hire</th>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your AI engineer?</h2>
            <p className="text-background/60 text-base">Tell us what you need. We'll match you in 48 hours.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire an AI Engineer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
    </>
  )
}
