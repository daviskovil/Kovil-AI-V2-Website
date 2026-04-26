'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Database, Brain, Cpu, Zap, Users, Wrench, BarChart3, BookOpen, Download, Clock, FileText, AlertCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { openCalendly } from "../lib/calendly"

// ── Salesforce / Agentforce brand colour (used inline only — no new CSS var) ──
const SF_BLUE = "#00A1E0"

// ── Corporate email blocklist ─────────────────────────────────────────────────
const CONSUMER_DOMAINS = new Set([
  "gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","aol.com",
  "protonmail.com","live.com","me.com","msn.com","ymail.com","googlemail.com",
  "mail.com","inbox.com","zohomail.com","fastmail.com","hey.com","pm.me",
])

function isCorporateEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase()
  return !!domain && !CONSUMER_DOMAINS.has(domain)
}

// ── Section 3 — Services ─────────────────────────────────────────────────────

const services = [
  {
    icon: Brain,
    title: "Agentforce Strategy & Readiness",
    slug: "agentforce-strategy-readiness",
    desc: "We audit your Salesforce org, map your highest-ROI agent opportunities, and deliver a prioritised implementation roadmap before a single line of config is written.",
  },
  {
    icon: Cpu,
    title: "Agent Design & Configuration",
    slug: "agent-design-configuration",
    desc: "We build Topics, Actions, and Instructions for each agent using Agent Builder, Prompt Builder, and Flow — scoped to your exact business logic and guardrail requirements.",
  },
  {
    icon: Zap,
    title: "Sales Cloud Agent Deployment",
    slug: "sales-cloud-agent-deployment",
    desc: "Agentforce SDR agents that qualify leads, handle objections, draft personalised outreach, and book meetings — autonomously, around the clock, inside your Sales Cloud org.",
  },
  {
    icon: Users,
    title: "Service Cloud Agent Deployment",
    slug: "service-cloud-agent-deployment",
    desc: "Deploy agents that resolve Tier 1 and Tier 2 cases, manage orders and refunds, and escalate to humans only when needed. Our clients average 65%+ autonomous resolution rates.",
  },
  {
    icon: Database,
    title: "MuleSoft & Data Cloud Integration",
    slug: "mulesoft-data-cloud-integration",
    desc: "Connect your Agentforce agents to any system — ERP, EHR, payments, logistics — using MuleSoft API connectors and Data Cloud unification.",
  },
  {
    icon: Wrench,
    title: "Agentforce Rescue & Optimisation",
    slug: "agentforce-rescue-optimisation",
    desc: "Inherited a broken Agentforce deployment? We diagnose, re-architect, and optimise — typically restoring measurable performance within one 2-week sprint.",
  },
]

// ── Section 4 — Use Cases ────────────────────────────────────────────────────

type Tab = "Sales Cloud" | "Service Cloud" | "Marketing Cloud" | "Internal Operations"

const TABS: Tab[] = ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Internal Operations"]

const tabSlug: Record<Tab, string> = {
  "Sales Cloud": "sales-cloud",
  "Service Cloud": "service-cloud",
  "Marketing Cloud": "marketing-cloud",
  "Internal Operations": "internal-operations",
}

const useCases: Record<Tab, { title: string; slug: string; desc: string }[]> = {
  "Sales Cloud": [
    { title: "Agentforce SDR Agent", slug: "sdr-agent", desc: "Qualifies inbound leads, sends personalised outreach, handles objections, books meetings. 24/7 pipeline coverage." },
    { title: "Pipeline Health Monitor", slug: "pipeline-health-monitor", desc: "Monitors stalled deals, auto-drafts follow-up emails, updates opportunity stages, alerts reps to risk signals." },
    { title: "Quote & Proposal Agent", slug: "quote-proposal-agent", desc: "Pulls product data, drafts CPQ quotes, routes for approval, and sends to prospects — without rep intervention." },
  ],
  "Service Cloud": [
    { title: "Autonomous Case Resolution", slug: "autonomous-case-resolution", desc: "Handles L1/L2 queries — refunds, rescheduling, order status, troubleshooting — with live account context." },
    { title: "Intelligent Escalation", slug: "intelligent-escalation", desc: "Detects case complexity, sentiment, and SLA risk — routes to the right human with full context pre-loaded." },
    { title: "Knowledge Base Agent", slug: "knowledge-base-agent", desc: "Surfaces relevant articles, suggests content gaps, and updates documentation based on resolved case patterns." },
  ],
  "Marketing Cloud": [
    { title: "Campaign Execution Agent", slug: "campaign-execution-agent", desc: "Monitors campaign performance, adjusts segment targeting, pauses underperforming journeys autonomously." },
    { title: "Lead Nurture Agent", slug: "lead-nurture-agent", desc: "Delivers personalised content sequences based on engagement signals, intent data, and CRM history." },
    { title: "Event & Webinar Agent", slug: "event-webinar-agent", desc: "Manages registrations, sends reminders, follows up post-event, and scores leads for sales handoff." },
  ],
  "Internal Operations": [
    { title: "HR Onboarding Agent", slug: "hr-onboarding-agent", desc: "Guides new hires through onboarding checklists, answers policy questions, triggers system provisioning via Slack." },
    { title: "Finance Approval Agent", slug: "finance-approval-agent", desc: "Routes invoices and expense approvals, validates against policy, escalates exceptions, logs to ERP." },
    { title: "IT Helpdesk Agent", slug: "it-helpdesk-agent", desc: "Resolves common IT requests, resets credentials, routes hardware issues, and updates tickets without L1 human touch." },
  ],
}

// ── Section 5 — Case Studies ─────────────────────────────────────────────────

const caseStudies = [
  {
    label: "Financial Services",
    sub: "Series B lending platform · 120,000 active borrowers",
    problem: "Loan servicing team handling 2,400 support cases/week manually, 48-hour average resolution time.",
    built: "Deployed an Agentforce Service Cloud agent trained on 4 years of case history, integrated with loan management system via MuleSoft.",
    metrics: [
      { value: "68%", label: "cases resolved autonomously" },
      { value: "4.2 hrs", label: "avg resolution (was 48 hrs)" },
      { value: "$340K", label: "annual cost reduction" },
    ],
  },
  {
    label: "SaaS / B2B",
    sub: "200-person B2B SaaS company · $18M ARR",
    problem: "SDR team burning 60% of time on manual lead qualification, 4-day average lead response time.",
    built: "Agentforce SDR agents in Sales Cloud qualifying inbound leads, sending personalised outreach, booking discovery calls within minutes of lead creation.",
    metrics: [
      { value: "9 min", label: "avg lead response (was 4 days)" },
      { value: "+34%", label: "increase in qualified pipeline" },
      { value: "3.2x", label: "SDR productivity per rep" },
    ],
  },
  {
    label: "Healthcare",
    sub: "Multi-site healthcare network · 85 clinicians",
    problem: "Admin staff managing 1,800 appointment queries/week — scheduling, cancellations, insurance verification.",
    built: "Agentforce Service Agent integrated with EHR and scheduling system via MuleSoft. Handles booking, rescheduling, insurance eligibility, pre-visit instructions.",
    metrics: [
      { value: "73%", label: "scheduling queries autonomous" },
      { value: "22 hrs", label: "admin time reclaimed/site/week" },
      { value: "4.8/5", label: "patient satisfaction maintained" },
    ],
  },
]

// ── Section 6 — Playbook ─────────────────────────────────────────────────────

const playbookArticles = [
  {
    pill: "Implementation Guide",
    title: "How to scope your first Agentforce agent: A practitioner's checklist",
    desc: "The 12 questions you must answer before writing a single Topic or Action.",
    readTime: "8 min read",
    href: "/agentforce/playbook/scope-your-first-agentforce-agent",
  },
  {
    pill: "Technical Deep Dive",
    title: "Atlas Reasoning Engine explained: How Agentforce agents actually think",
    desc: "A technical breakdown of hybrid reasoning, topic classification, and action execution — with real org examples.",
    readTime: "12 min read",
    href: "/agentforce/playbook/atlas-reasoning-engine-explained",
  },
  {
    pill: "Case Study",
    title: "From 48-hour case resolution to 4 hours: An Agentforce Service Cloud build",
    desc: "Step-by-step walkthrough of a financial services deployment — architecture, MuleSoft integration, and guardrail configuration.",
    readTime: "15 min read",
    href: "/agentforce/playbook/financial-services-service-cloud-build",
  },
]

// ── Section 9 — FAQ ──────────────────────────────────────────────────────────

const faqs = [
  { q: "What is Salesforce Agentforce?", a: "Agentforce is Salesforce's AI agent platform, launched October 2024 and now at Agentforce 360. It lets companies build, deploy, and manage autonomous AI agents that reason, plan, and execute tasks across Sales, Service, Marketing, and Data Cloud — without human intervention. Powered by the Atlas Reasoning Engine, protected by the Einstein Trust Layer." },
  { q: "How long does an Agentforce implementation take?", a: "A focused pilot agent scoped to one use case typically takes 2–3 weeks from scoping to go-live. A full multi-cloud deployment with MuleSoft integrations typically runs 6–12 weeks depending on org complexity and data readiness." },
  { q: "Do we need a Salesforce consultant or an AI engineer?", a: "Both — but most firms only bring one. Agentforce sits at the intersection of Salesforce configuration and AI engineering. You need someone who understands Topics, Actions, and Flows AND understands LLM reasoning, prompt design, and hallucination guardrails. That's exactly what Kovil AI provides." },
  { q: "What Salesforce licences do we need?", a: "Agentforce is licensed per conversation (approximately $2/conversation as of 2025) with volume discounts. Some capabilities require Data Cloud and Einstein licences. We provide a licence audit as part of our scoping engagement." },
  { q: "Can Agentforce connect to non-Salesforce systems?", a: "Yes. Via MuleSoft API connectors, HTTP callouts, or MCP server integrations. Agentforce 3 added native MCP support for Google Cloud, Stripe, PayPal, and more. We handle all integration architecture as part of our builds." },
  { q: "How do you ensure our data stays secure?", a: "Agentforce includes the Einstein Trust Layer — preventing prompt injection, filtering sensitive outputs, auditing every agent action, and ensuring data never leaves your Salesforce trust boundary for AI processing. We configure all guardrails as standard." },
  { q: "What is the Kovil AI risk-free pilot?", a: "We scope a single high-impact use case, build and deploy in 2 weeks, and define clear success metrics upfront. If the pilot doesn't hit agreed metrics, you don't pay. Over 90% of our pilots convert to full engagements." },
  { q: "How is Kovil AI different from a traditional Salesforce SI?", a: "Traditional SIs are generalists. We are an AI engineering firm specialising exclusively in agentic AI. Every build team member understands both the Salesforce platform and the AI layer underneath." },
]

// ── Accordion Item ───────────────────────────────────────────────────────────

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`border border-border rounded-xl overflow-hidden transition-colors ${open ? "bg-accent/5 border-accent/30" : "bg-card hover:border-border/80"}`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left">
        <span className={`font-medium text-sm ${open ? "text-accent" : "text-foreground"}`}>{q}</span>
        <ChevronDown className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180 text-accent" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Download Card ─────────────────────────────────────────────────────────────

function DownloadCard({ resourceLabel, title, desc, buttonLabel }: { resourceLabel: string; title: string; desc: string; buttonLabel: string }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!email.trim()) return
    if (!isCorporateEmail(email)) {
      setError("Please use your work email address.")
      return
    }

    setLoading(true)
    try {
      const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
      const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: "Resource Download",
          email,
          engagement_type: "general_inquiry",
          project_description: `Downloaded: ${title}`,
          source: "agentforce_download",
        }),
      })
    } catch {
      // fire-and-forget — still show success to user
    }
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
      <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full self-start mb-5" style={{ color: SF_BLUE, background: `${SF_BLUE}18` }}>
        {resourceLabel}
      </span>
      <div className="flex items-start gap-3 mb-4">
        <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${SF_BLUE}18` }}>
          <FileText className="h-5 w-5" style={{ color: SF_BLUE }} />
        </div>
        <h3 className="font-display font-bold text-xl text-foreground leading-snug">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{desc}</p>
      {submitted ? (
        <div className="flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 rounded-xl px-4 py-3">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Check your inbox — it's on its way.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={e => { setEmail(e.target.value); setError("") }}
              placeholder="you@company.com"
              className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <Button type="submit" variant="accent" className="rounded-xl shrink-0" disabled={loading}>
              <Download className="h-4 w-4 mr-2" />
              {loading ? "Sending…" : buttonLabel}
            </Button>
          </div>
          {error && (
            <p className="flex items-center gap-1.5 text-xs text-red-400">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />{error}
            </p>
          )}
        </form>
      )}
    </div>
  )
}


// ── Main Page ────────────────────────────────────────────────────────────────

export default function AgentforcePage() {
  const [activeTab, setActiveTab] = useState<Tab>("Sales Cloud")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="pt-20 bg-background min-h-screen">

      {/* ── SECTION 1 — HERO ── */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ borderColor: `${SF_BLUE}50`, background: `${SF_BLUE}10`, color: SF_BLUE }}>
              Salesforce Agentforce Practice — New York
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] mb-6">
              Build your Agentforce.{" "}
              <span className="text-accent">Ship agents that work.</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Kovil AI is a specialist Agentforce implementation partner. We design, build and deploy autonomous AI agents inside your Salesforce org — in fixed-price sprints with zero delivery risk.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button variant="accent" size="lg" className="text-base h-12 px-8 rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all" onClick={openCalendly}>
                Start my Agentforce build <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="#downloads">
                <Button variant="outline" size="lg" className="text-base h-12 px-8 rounded-full">
                  Download the Readiness Guide
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground font-medium">
              2-week risk-free pilot · Fixed-price sprints · Milestone-gated delivery
            </p>
          </motion.div>

          {/* Right — Agentforce mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden md:flex items-center justify-center"
          >
            <img
              src="/agentforce-mascot.png"
              alt="Salesforce Agentforce"
              className="w-full max-w-2xl object-contain drop-shadow-2xl scale-110"
            />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2 — VALUE PROPOSITION (replaces "What is Agentforce?") ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">The Implementation Gap</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Most Agentforce orgs have licences.<br />
              <span className="text-accent">Almost none have production agents.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The platform works. The gap is implementation — knowing which Topics to build, how to ground agents in live data, how to configure guardrails that hold in production, and how to integrate with systems that weren't designed for AI. That's where most teams get stuck. That's exactly what we fix.
            </p>
          </motion.div>

          {/* 3-step process */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: "01",
                title: "Org Audit & Use Case Mapping",
                timeframe: "48 hours",
                desc: "We inspect your Salesforce org, data quality, and existing workflows to identify the 2–3 agent opportunities with the highest ROI and lowest implementation risk. You get a prioritised roadmap before we write a single line of config.",
                color: SF_BLUE,
              },
              {
                step: "02",
                title: "Build, Test & Deploy",
                timeframe: "2 weeks",
                desc: "We build your first production agent — Topics, Actions, Flows, guardrails, and data connections — and deploy it live in your org. Not a demo. Not a sandbox. Production-grade, with the Einstein Trust Layer configured from day one.",
                color: "#FF4F00",
              },
              {
                step: "03",
                title: "Scale & Optimise",
                timeframe: "Ongoing",
                desc: "Once your first agent is live and measurably working, we expand across clouds — Sales, Service, Marketing, Ops — with each sprint building on the last. You own the agents. We own the outcomes.",
                color: SF_BLUE,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: item.color }} />
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl font-display font-bold opacity-10 text-foreground">{item.step}</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}10` }}>
                    {item.timeframe}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Why most fail — 3 columns */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <p className="text-sm font-mono tracking-widest uppercase mb-6 text-center" style={{ color: SF_BLUE }}>Why implementations fail — and what we do differently</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  problem: "Topics built from demos, not business logic",
                  fix: "We map Topics directly to your actual workflows, escalation paths, and business rules — not Salesforce's sample agents.",
                },
                {
                  problem: "Agents with no live data grounding",
                  fix: "We connect every agent to live Data Cloud, CRM records, and external systems via MuleSoft from day one. No hallucinations from stale context.",
                },
                {
                  problem: "Admin-led builds with no AI depth",
                  fix: "Every build is led by engineers who understand LLM reasoning, prompt injection, and guardrail design — not just Salesforce configuration.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">✕</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-through opacity-60">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${SF_BLUE}20` }}>
                      <span className="text-xs font-bold" style={{ color: SF_BLUE }}>✓</span>
                    </div>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — SERVICES ── */}
      <section className="border-t border-border py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Services</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Agentforce Services</h2>
            <p className="text-muted-foreground text-lg">From first agent to full enterprise rollout — we cover every phase.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Link href={`/agentforce/services/${svc.slug}`} className="group bg-card border border-border rounded-2xl p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col h-full block">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <svc.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-accent mt-5 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — USE CASES (Tab Switcher) ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Use Cases</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">What We Build</h2>
          </motion.div>

          {/* Tab bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "text-white shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:border-accent/30 hover:text-foreground"
                }`}
                style={activeTab === tab ? { background: SF_BLUE, boxShadow: `0 4px 14px ${SF_BLUE}40` } : {}}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }} className="grid md:grid-cols-3 gap-6">
              {useCases[activeTab].map((uc, i) => (
                <Link
                  key={uc.title}
                  href={`/agentforce/${tabSlug[activeTab]}/${uc.slug}`}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300 block"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white" style={{ background: SF_BLUE }}>
                      {i + 1}
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground group-hover:text-accent transition-colors">{uc.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    View details <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── SECTION 5 — CASE STUDIES ── */}
      <section className="border-t border-border py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Results</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-3">Agentforce in Production</h2>
            <p className="text-muted-foreground text-lg">Real deployments. Real outcomes.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: SF_BLUE, background: `${SF_BLUE}15` }}>{cs.label}</span>
                  <p className="text-xs text-muted-foreground mt-2">{cs.sub}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                </div>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">What we built</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.built}</p>
                </div>
                <div className="mt-auto grid grid-cols-3 gap-2">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl p-3 text-center" style={{ background: `${SF_BLUE}10` }}>
                      <div className="font-display font-bold text-lg" style={{ color: SF_BLUE }}>{m.value}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — PLAYBOOK PREVIEW ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Playbook</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">The Agentforce Playbook</h2>
            <p className="text-muted-foreground text-lg">Practitioner guides, implementation patterns, and field notes from real Agentforce deployments. Written by the engineers who build them.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {playbookArticles.map((article, i) => (
              <motion.div key={article.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Link href={article.href} className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full block">
                  <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full self-start mb-4" style={{ color: SF_BLUE, background: `${SF_BLUE}15` }}>
                    {article.pill}
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground leading-snug mb-3 group-hover:text-accent transition-colors flex-1">{article.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />{article.readTime}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/agentforce/playbook" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              View all Playbook articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — DOWNLOADS ── */}
      <section id="downloads" className="border-t border-border py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Resources</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-3">Free Agentforce Resources</h2>
            <p className="text-muted-foreground text-lg">Download and keep. No spam.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <DownloadCard
                resourceLabel="eBook · 24 pages · PDF"
                title="The Agentforce Readiness Guide"
                desc="Is your Salesforce org ready for Agentforce? This guide covers the 5 readiness pillars — data quality, org architecture, use case prioritisation, team enablement, and governance — with a self-assessment scorecard included."
                buttonLabel="Download free eBook"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              <DownloadCard
                resourceLabel="Whitepaper · 18 pages · PDF"
                title="Agentforce Implementation Whitepaper"
                desc="Covers Agentforce 360 architecture, the Atlas Reasoning Engine, Einstein Trust Layer, MuleSoft integration patterns, and a phased rollout framework for enterprise."
                buttonLabel="Download whitepaper"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — WHY KOVIL AI ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Why Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Why Kovil AI for Agentforce?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Brain, title: "AI-native engineers, not Salesforce generalists", desc: "We're an AI engineering firm first. Every Agentforce build is designed by engineers who understand LLMs, RAG, and agentic reasoning — not just admins following a config guide." },
              { icon: BarChart3, title: "Fixed-price sprints. Zero surprises.", desc: "Every engagement is scoped, priced, and milestone-gated before we write a single line of config. You know exactly what you're getting and when." },
              { icon: Shield, title: "2-week risk-free pilot", desc: "Start with a pilot agent scoped to one high-impact use case. If we don't deliver measurable value in 2 weeks, you pay nothing." },
              { icon: CheckCircle2, title: "Production-grade delivery", desc: "We don't build demo agents. Every deployment includes guardrail configuration, Einstein Trust Layer setup, monitoring, and a 30-day post-launch support window." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — FAQ ── */}
      <section className="border-t border-border py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10 — FINAL CTA ── */}
      <section className="py-24 max-w-4xl mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-foreground rounded-2xl p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-3">Ready to deploy your first Agentforce agent?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto text-lg">Scoped and shipped in 2 weeks. Fixed price. Zero delivery risk.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button variant="accent" size="lg" className="rounded-full px-8" onClick={openCalendly}>
              Book a discovery call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="#downloads">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 text-background hover:bg-white/10">
                <BookOpen className="mr-2 h-4 w-4" />
                Download the Readiness Guide
              </Button>
            </Link>
          </div>
          <p className="text-background/40 text-sm">No commitment · 2-week pilot · Real outcomes</p>
        </motion.div>
      </section>

    </main>
  )
}
