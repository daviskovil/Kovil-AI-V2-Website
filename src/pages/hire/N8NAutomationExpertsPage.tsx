'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Workflow, Brain, Zap, ShieldCheck, BarChart3, Repeat2,
  Database, Layers, CheckCircle2, ArrowRight, Clock, ChevronDown
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01", timeline: "Day 1",
    title: "Brief Your Needs",
    description: "Fill a 5-minute intake form describing your automation requirements — the workflows to build, the tools to connect, and whether you need AI integrated into your n8n pipelines. A Delivery Lead contacts you within 24 hours.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "Workflow scope mapped upfront"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Expert",
    description: "We surface 2–3 hand-picked n8n experts with production experience in complex workflow automation and AI-integrated pipelines. Review profiles, join intro calls, choose your fit.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your expert works in focused sprints. An Engagement Manager audits every milestone. You get working, production-grade n8n automations — not fragile duct-tape workflows.",
    bullets: ["Weekly milestone check-ins", "Engagement Manager quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted n8n Experts", desc: "Every expert passes rigorous vetting — n8n workflow design, API integration depth, custom node development, error handling, and production deployment simulation." },
  { icon: Repeat2, title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every sprint milestone — workflow reliability, error handling coverage, integration stability, and end-to-end automation testing." },
  { icon: Zap, title: "Sprint-Based Delivery", desc: "Structured weekly sprints with clear deliverables. Each sprint ends with working, tested n8n workflows — not open-ended hours on an ever-growing list of automations." },
  { icon: Workflow, title: "Workflow Architecture Depth", desc: "Specialists in n8n workflow design, branching logic, error workflows, sub-workflows, webhook triggers, scheduled execution, and complex multi-step automation patterns." },
  { icon: BarChart3, title: "Production-Ready Automations", desc: "n8n workflows built for production — self-hosted or cloud, with proper error handling, retry logic, execution logging, monitoring, and alerting when workflows fail." },
  { icon: Brain, title: "AI-Powered Workflow Integration", desc: "n8n pipelines that connect to OpenAI, Anthropic, and other AI services — enabling intelligent document processing, AI-assisted data routing, and LLM-powered automation steps." },
]

const buildItems = [
  { title: "Business Process Automation", desc: "End-to-end n8n workflows that automate repetitive business processes — lead handling, order processing, customer onboarding, invoice management, and approval workflows." },
  { title: "AI-Powered n8n Pipelines", desc: "n8n workflows with embedded AI — document classification, sentiment routing, AI-generated summaries, intelligent data extraction, and LLM-powered decision nodes." },
  { title: "API & SaaS Integration Workflows", desc: "Connect your entire SaaS stack through n8n — CRM, helpdesk, email, Slack, databases, payment processors, and hundreds of other tools via n8n's native integrations." },
  { title: "Custom n8n Node Development", desc: "Bespoke n8n nodes for tools without native integrations — your internal APIs, proprietary systems, and custom data sources, built as reusable community or private nodes." },
  { title: "Data Sync & ETL Pipelines", desc: "n8n workflows that extract, transform, and load data between systems — scheduled syncs, real-time event-driven pipelines, and data normalisation workflows at scale." },
  { title: "Self-Hosted n8n Infrastructure", desc: "Full self-hosted n8n setup — Docker deployment, PostgreSQL configuration, credential management, queue mode for scalability, and production monitoring." },
]

const forWho = [
  { title: "Ops Teams Drowning in Manual Work", desc: "You have repetitive, rules-based processes that eat engineering time or require manual effort. n8n can automate them — and an expert ensures they run reliably at scale." },
  { title: "SaaS Businesses Connecting Their Stack", desc: "You're managing data across multiple tools and need reliable, maintainable pipelines between them — not fragile Zapier zaps that break at scale or hit plan limits." },
  { title: "Teams Adding AI to Existing Workflows", desc: "You want to inject AI capabilities into your existing business processes — intelligent routing, AI-powered document handling, and LLM steps embedded in production workflows." },
]

const timeline = [
  { day: "Day 1",   title: "Submit Your Brief",      desc: "Fill a 5-minute intake form. A Delivery Lead calls within 24 hours to scope your automation requirements — workflows to build, tools to connect, and production environment." },
  { day: "Day 2–3", title: "Meet Your Shortlist",    desc: "We surface 2–3 n8n experts matched to your automation use case. Review profiles, join intro calls, choose your fit." },
  { day: "Day 3–4", title: "Milestone Plan Locked",  desc: "You and your expert agree a sprint plan — workflow architecture, integration scope, success criteria, and timelines before any build begins." },
  { day: "Week 1+", title: "Sprint & Deliver",       desc: "Your expert builds in focused sprints. Your Engagement Manager audits every milestone. You review working n8n automations at each checkpoint." },
  { day: "Ongoing", title: "Scale or Wind Down",     desc: "Add experts, extend sprints, or wind down — no lock-in. You stay because the automations are delivering, not because you're contracted." },
]

const comparison = [
  { label: "Time to start",    kovil: "24–48 hours",   inhouse: "2–4 months",  agency: "2–4 weeks",   freelancer: "1–2 weeks" },
  { label: "n8n expertise",    kovil: "Deep specialist",inhouse: "Hard to find",agency: "Varies widely",freelancer: "Varies" },
  { label: "Managed delivery", kovil: "✓ Always",      inhouse: "✗",           agency: "Partial",     freelancer: "✗" },
  { label: "Risk-free trial",  kovil: "✓ 2 weeks",     inhouse: "✗",           agency: "✗",           freelancer: "Rarely" },
  { label: "Production deploy",kovil: "✓ Included",    inhouse: "Depends",     agency: "Extra cost",  freelancer: "Varies" },
  { label: "IP ownership",     kovil: "100% yours",    inhouse: "100% yours",  agency: "Often shared",freelancer: "Varies" },
]

const faqs = [
  {
    q: "What is n8n and what can an n8n expert build?",
    a: "n8n is an open-source workflow automation platform that connects apps, APIs, and services through a visual node-based interface. Unlike Zapier or Make, n8n can be self-hosted (giving you full data control), supports custom JavaScript in nodes, and scales to complex enterprise workflows. An n8n expert designs and builds these automation pipelines — from simple two-step integrations to complex multi-branch workflows with AI steps, error handling, sub-workflows, and custom nodes for tools n8n doesn't natively support.",
  },
  {
    q: "How quickly can I hire an n8n automation expert through Kovil AI?",
    a: "Most clients are matched with a vetted n8n specialist within 24–48 hours of submitting their brief. The expert starts on a milestone plan within 3–4 days, and every engagement includes a 2-week risk-free trial.",
  },
  {
    q: "n8n vs Zapier vs Make — which is right for my team?",
    a: "Zapier is the simplest to start with but hits limits quickly — plan caps, limited branching, and no self-hosting. Make (formerly Integromat) offers more power but is still cloud-only. n8n is the right choice when you need self-hosting for data sovereignty, complex branching and error workflows, custom code execution in nodes, scalability beyond SaaS plan limits, or AI integration in your pipelines. The trade-off is that n8n requires more engineering skill — which is exactly what our experts provide.",
  },
  {
    q: "Can n8n handle AI-powered workflows?",
    a: "Yes — n8n has native nodes for OpenAI, Anthropic, Google AI, and other AI services. Our experts build n8n workflows that use AI for document classification, intelligent data routing, AI-generated summaries, entity extraction, and LLM-powered decision steps embedded directly in your automation pipelines. They also integrate n8n with vector databases and RAG systems for more complex AI use cases.",
  },
  {
    q: "Should I self-host n8n or use n8n cloud?",
    a: "n8n Cloud is the fastest way to get started and works well for most teams. Self-hosted n8n is better when you have strict data residency requirements, need to process sensitive data without it leaving your infrastructure, want to avoid per-execution pricing at scale, or need custom node development and advanced configuration. Our experts set up and configure both — and migrate you from cloud to self-hosted when the time comes.",
  },
  {
    q: "Who owns the n8n workflows and automations your expert builds?",
    a: "You do — 100%. All workflow designs, custom node code, configuration files, and deployment infrastructure produced during your engagement are fully owned by your company. Kovil AI retains no rights to any work product. This is contractually guaranteed from day one.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-base pr-4">{item.q}</span>
            <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function N8NAutomationExpertsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">n8n Automation Experts</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire an n8n Automation Expert —<br />
            <span className="text-accent">Matched in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Vetted Tier-1 n8n automation experts embedded into your team. Workflow automation, AI-powered n8n pipelines, API integrations, custom nodes, and production n8n deployment — sprint-delivered, Engagement Manager audited.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire an n8n Expert <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="text-sm text-muted-foreground">Two-week risk-free trial. No lock-in.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { stat: "< 48h",   label: "Time to match" },
            { stat: "Top 1%",  label: "Expert tier" },
            { stat: "100%",    label: "IP ownership" },
            { stat: "2 weeks", label: "Risk-free trial" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What They Build */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What They Build</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What Can an n8n Expert Build for You?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Workflow className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It's For</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire an n8n Expert Through Kovil AI?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6"
            >
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Layers className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire an n8n Expert with Kovil AI?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all"
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
                <ul className="space-y-2">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire an n8n automation expert?</h3>
            <p className="text-sm text-muted-foreground">Tell us your automation use case. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0">
              Start Hiring <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What's Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What's Included When You Hire an n8n Expert Through Kovil AI?</h2>
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

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">What Should You Expect When Hiring an n8n Expert?</h2>
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

      {/* Comparison */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
        <h2 className="font-display font-bold text-3xl mb-12">How Does Kovil AI Compare to Other Ways to Hire an n8n Expert?</h2>
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

      {/* FAQ */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring n8n Experts</h2>
          <div className="max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/hire/llm-engineers",    label: "Hire LLM Engineers",    desc: "RAG, fine-tuning, AI agents, LLMOps" },
            { href: "/hire/crewai-developers", label: "Hire CrewAI Developers", desc: "Multi-agent orchestration and role-based agent systems" },
            { href: "/engage/managed-ai-engineer", label: "Managed AI Engineer", desc: "Embedded AI engineer for any AI task" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-border p-5 hover:border-accent/40 hover:bg-muted/20 transition-all group"
            >
              <p className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors">{link.label}</p>
              <p className="text-xs text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your n8n automation expert?</h2>
            <p className="text-background/60 text-base">Tell us your automation use case. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire an n8n Expert <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}
