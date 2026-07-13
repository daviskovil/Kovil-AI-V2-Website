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
    description: "Fill a 5-minute intake form describing your automation requirements — the Make.com scenarios to build, the SaaS tools to connect, and any AI modules to integrate. A Delivery Lead contacts you within 24 hours.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "Scenario scope mapped upfront"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Expert",
    description: "We surface 2–3 hand-picked Make.com experts with production experience in complex scenario design, data routers, error handling, and AI integrations. Review profiles, join intro calls, choose your fit.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your expert works in focused sprints. An Engagement Manager audits every milestone. You get clean, production-grade Make.com scenarios — not spaghetti integrations that break constantly.",
    bullets: ["Weekly milestone check-ins", "Engagement Manager quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted Make.com Experts", desc: "Every expert passes rigorous vetting — scenario architecture, data transformers, custom app development, error handling, and high-frequency webhook optimization." },
  { icon: Repeat2, title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every sprint milestone — scenario reliability, error path coverage, API compliance, and end-to-end automation testing." },
  { icon: Zap, title: "Sprint-Based Delivery", desc: "Structured weekly sprints with clear deliverables. Each sprint ends with working, tested Make.com scenarios — not open-ended hours on an ever-growing backlog of tasks." },
  { icon: Workflow, title: "Scenario Architecture Depth", desc: "Specialists in Make.com scenario design, router logic, iterators, aggregators, filters, variable mapping, webhooks, and complex multi-path execution." },
  { icon: BarChart3, title: "Production-Ready Scenarios", desc: "Make.com scenarios built for scale — structured with proper error handlers, rollbacks, retry limits, execution logging, and automated alerts for failures." },
  { icon: Brain, title: "AI-Powered Scenario Integration", desc: "Make.com pipelines that connect to OpenAI, Anthropic, and other AI services — enabling automated classification, intelligent text routing, and LLM-assisted data formatting." },
]

const buildItems = [
  { title: "Business Process Automation", desc: "End-to-end Make.com scenarios that automate repetitive operations — lead routing, client onboarding, invoicing, contract management, and notifications." },
  { title: "AI-Powered Make.com Scenarios", desc: "Make.com scenarios with embedded AI — auto-categorizing support tickets, extracting data from files, summarizing notes, and running intelligent validation checks." },
  { title: "SaaS & API Integrations", desc: "Connect your entire software suite via Make.com — Hubspot, Salesforce, Slack, Gmail, Stripe, Airtable, Notion, and hundreds of other apps via pre-built modules or HTTP modules." },
  { title: "Custom Make.com App Development", desc: "Bespoke Make.com apps for proprietary software or APIs without native modules — built, tested, and published to your Make organization for reuse." },
  { title: "Data Ingestion & Syncing", desc: "Real-time or scheduled data syncing between systems — webhook-driven event handlers, database synchronization, and clean data routing at scale." },
  { title: "Error Handling & Scenario Audits", desc: "Audit existing Make.com scenarios to fix execution timeouts, loop overflows, and silent failures — adding robust error handler directives." },
]

const forWho = [
  { title: "Operations Drowning in Data Entry", desc: "You have repetitive task sequences that waste valuable team hours. Make.com can automate them — and an expert ensures they remain stable and cost-efficient." },
  { title: "SaaS Teams Syncing Fragmented Tools", desc: "You are managing data across multiple platforms and need reliable, maintainable links between them — not basic integrations that throw errors or hit rate limits." },
  { title: "Teams Deploying AI to Workflows", desc: "You want to insert LLMs and AI capabilities into existing pipelines — summarizing communications, routing queries, and auto-responding with dynamic context." },
]

const timeline = [
  { day: "Day 1",   title: "Submit Your Brief",      desc: "Fill a 5-minute intake form. A Delivery Lead calls within 24 hours to scope your automation requirements — scenarios to build, tools to connect, and success criteria." },
  { day: "Day 2–3", title: "Meet Your Shortlist",    desc: "We surface 2–3 Make.com experts matched to your specific app integrations. Review profiles, join intro calls, choose your fit." },
  { day: "Day 3–4", title: "Milestone Plan Locked",  desc: "You and your expert agree a sprint plan — scenario routing structure, API specifications, and testing protocols before any build starts." },
  { day: "Week 1+", title: "Sprint & Deliver",       desc: "Your expert builds in focused sprints. Your Engagement Manager audits every milestone. You review working Make.com automations at each checkpoint." },
  { day: "Ongoing", title: "Scale or Wind Down",     desc: "Add experts, extend sprints, or wind down — no lock-in. You stay because the automations are delivering, not because of a contract." },
]

const comparison = [
  { label: "Time to start",    kovil: "24–48 hours",   inhouse: "2–4 months",  agency: "2–4 weeks",   freelancer: "1–2 weeks" },
  { label: "Make.com expertise",kovil: "Deep specialist",inhouse: "Hard to find",agency: "Varies widely",freelancer: "Varies" },
  { label: "Managed delivery", kovil: "✓ Always",      inhouse: "✗",           agency: "Partial",     freelancer: "✗" },
  { label: "Risk-free trial",  kovil: "✓ 2 weeks",     inhouse: "✗",           agency: "✗",           freelancer: "Rarely" },
  { label: "Production deploy",kovil: "✓ Included",    inhouse: "Depends",     agency: "Extra cost",  freelancer: "Varies" },
  { label: "IP ownership",     kovil: "100% yours",    inhouse: "100% yours",  agency: "Often shared",freelancer: "Varies" },
]

const faqs = [
  {
    q: "What is Make.com and what can a Make.com expert build?",
    a: "Make.com (formerly Integromat) is a powerful visual automation platform that lets you connect apps, APIs, and databases through drag-and-drop scenarios. Unlike basic tools, Make supports advanced features like routers, iterators, aggregators, filters, and raw HTTP calls. A Make.com expert designs and builds these workflows — from simple cross-app syncs to complex, multi-route business logic containing AI decision steps, loop parsing, custom database updates, and error handling pathways.",
  },
  {
    q: "How quickly can I hire a Make.com expert through Kovil AI?",
    a: "Most clients are matched with a vetted Make.com specialist within 24–48 hours of submitting their brief. The expert starts on a milestone plan within 3–4 days, and every engagement includes a 2-week risk-free trial.",
  },
  {
    q: "Make.com vs Zapier vs n8n — which is right for my team?",
    a: "Zapier is great for simple, linear task automations but gets highly expensive and restrictive for multi-step scenarios. n8n is ideal when you need self-hosting or writing raw JavaScript nodes. Make.com is the perfect middle ground: it provides visual debugging, advanced routers/aggregators, and complex API parsing without writing code from scratch. It is highly optimized for fast development and complex loops.",
  },
  {
    q: "Can Make.com handle AI-powered workflows?",
    a: "Yes. Make.com features native integrations with OpenAI, Anthropic, Google AI, Pinecone, and other AI services. Our experts build scenarios that extract data from files, run sentiment analysis, classify incoming requests, and route tasks to agents using LLM completions integrated directly into the workflow steps.",
  },
  {
    q: "Who owns the Make.com scenarios that your expert builds?",
    a: "You do — 100%. All scenario designs, custom App code, configuration files, and credentials configured during the engagement are fully owned by your company. Everything is built within your own Make.com organization or transferred to it before completion.",
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

export default function MakeAutomationExpertsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Make.com Automation Experts</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire a Make.com Automation Expert —<br />
            <span className="text-accent">Matched in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Vetted Tier-1 Make.com automation experts embedded into your team. Complex scenario design, SaaS integrations, custom app development, and AI-enabled pipelines — sprint-delivered, Engagement Manager audited.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire a Make Expert <ArrowRight className="ml-2 h-4 w-4" />
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What Can a Make.com Expert Build for You?</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire a Make.com Expert Through Kovil AI?</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire a Make.com Expert with Kovil AI?</h2>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire a Make.com automation expert?</h3>
            <p className="text-sm text-muted-foreground">Tell us your automation requirements. Matched in 48 hours. 2-week risk-free trial.</p>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What's Included When You Hire a Make.com Expert Through Kovil AI?</h2>
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
        <h2 className="font-display font-bold text-3xl mb-12">What Should You Expect When Hiring a Make.com Expert?</h2>
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
        <h2 className="font-display font-bold text-3xl mb-12">How Does Kovil AI Compare to Other Ways to Hire a Make.com Expert?</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring Make.com Experts</h2>
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
            { href: "/hire/n8n-automation-experts", label: "Hire n8n Experts",     desc: "Workflow automation, self-hosted deployment, custom JS nodes" },
            { href: "/hire/llm-engineer",           label: "Hire LLM Engineers",    desc: "RAG, fine-tuning, AI agents, LLMOps" },
            { href: "/engage/managed-ai-engineer",  label: "Managed AI Engineer", desc: "Embedded AI engineer for any AI task" },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your Make.com automation expert?</h2>
            <p className="text-background/60 text-base">Tell us your automation requirements. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire a Make.com Expert <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}
