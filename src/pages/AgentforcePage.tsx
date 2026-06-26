'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Database, Brain, Cpu, Zap, Users, Wrench, BarChart3, BookOpen, Download, Clock, FileText, AlertCircle, TrendingUp, Settings, Globe, Scale, HelpCircle, DollarSign } from "lucide-react"
import { Button } from "../components/ui/button"
import { openCalendly } from "../lib/calendly"

// ── Salesforce / Agentforce brand colour (used inline only — no new CSS var) ──
const SF_BLUE = "#00A1E0"

// ── Agentforce Section Navigator Data ────────────────────────────────────────
const agentforceNavSections = [
  {
    label: 'Services',
    href: '/agentforce/services',
    Icon: Wrench,
    color: SF_BLUE,
    items: [
      { title: 'Strategy & Readiness', href: '/agentforce/services/agentforce-strategy-readiness' },
      { title: 'Agent Design & Configuration', href: '/agentforce/services/agent-design-configuration' },
      { title: 'Sales Cloud Deployment', href: '/agentforce/services/sales-cloud-agent-deployment' },
      { title: 'Service Cloud Deployment', href: '/agentforce/services/service-cloud-agent-deployment' },
      { title: 'MuleSoft & Data Cloud', href: '/agentforce/services/mulesoft-data-cloud-integration' },
      { title: 'Rescue & Optimisation', href: '/agentforce/services/agentforce-rescue-optimisation' },
    ],
  },
  {
    label: 'Sales Cloud',
    href: '/agentforce/sales-cloud',
    Icon: TrendingUp,
    color: '#0070D2',
    items: [
      { title: 'Agentforce SDR Agent', href: '/agentforce/sales-cloud/sdr-agent' },
      { title: 'Pipeline Health Monitor', href: '/agentforce/sales-cloud/pipeline-health-monitor' },
      { title: 'Quote & Proposal Agent', href: '/agentforce/sales-cloud/quote-proposal-agent' },
    ],
  },
  {
    label: 'Service Cloud',
    href: '/agentforce/service-cloud',
    Icon: Users,
    color: '#5A5FCE',
    items: [
      { title: 'Autonomous Case Resolution', href: '/agentforce/service-cloud/autonomous-case-resolution' },
      { title: 'Intelligent Escalation', href: '/agentforce/service-cloud/intelligent-escalation' },
      { title: 'Knowledge Base Agent', href: '/agentforce/service-cloud/knowledge-base-agent' },
    ],
  },
  {
    label: 'Marketing Cloud',
    href: '/agentforce/marketing-cloud',
    Icon: BarChart3,
    color: '#FF6900',
    items: [
      { title: 'Campaign Execution Agent', href: '/agentforce/marketing-cloud/campaign-execution-agent' },
      { title: 'Lead Nurture Agent', href: '/agentforce/marketing-cloud/lead-nurture-agent' },
      { title: 'Event & Webinar Agent', href: '/agentforce/marketing-cloud/event-webinar-agent' },
    ],
  },
  {
    label: 'Internal Operations',
    href: '/agentforce/internal-operations',
    Icon: Settings,
    color: '#1B7F4F',
    items: [
      { title: 'HR Onboarding Agent', href: '/agentforce/internal-operations/hr-onboarding-agent' },
      { title: 'Finance Approval Agent', href: '/agentforce/internal-operations/finance-approval-agent' },
      { title: 'IT Helpdesk Agent', href: '/agentforce/internal-operations/it-helpdesk-agent' },
    ],
  },
  {
    label: 'Industries',
    href: '/agentforce/industries',
    Icon: Globe,
    color: '#34D399',
    items: [
      { title: 'Financial Services', href: '/agentforce/industries/financial-services' },
      { title: 'Healthcare', href: '/agentforce/industries/healthcare' },
      { title: 'Insurance', href: '/agentforce/industries/insurance' },
      { title: 'Retail & Ecommerce', href: '/agentforce/industries/retail-ecommerce' },
      { title: 'Manufacturing', href: '/agentforce/industries/manufacturing' },
      { title: 'Telecom', href: '/agentforce/industries/telecom' },
      { title: 'Legal & Professional Services', href: '/agentforce/industries/legal-professional-services' },
      { title: 'Logistics & Supply Chain', href: '/agentforce/industries/logistics-supply-chain' },
      { title: 'Automotive', href: '/agentforce/industries/automotive' },
      { title: 'Real Estate', href: '/agentforce/industries/real-estate' },
      { title: 'Education', href: '/agentforce/industries/education' },
      { title: 'Energy & Utilities', href: '/agentforce/industries/energy-utilities' },
      { title: 'Government & Public Sector', href: '/agentforce/industries/government-public-sector' },
    ],
  },
  {
    label: 'Playbook',
    href: '/agentforce/playbook',
    Icon: BookOpen,
    color: '#8B5CF6',
    items: [
      { title: 'Scope Your First Agent', href: '/agentforce/playbook/scope-your-first-agentforce-agent' },
      { title: 'Atlas Reasoning Engine', href: '/agentforce/playbook/atlas-reasoning-engine-explained' },
      { title: 'Pricing Guide 2026', href: '/agentforce/playbook/agentforce-pricing-guide-2026' },
      { title: 'ROI Guide', href: '/agentforce/playbook/agentforce-roi-guide' },
      { title: 'How Agentforce Works', href: '/agentforce/playbook/how-does-agentforce-work' },
      { title: 'Financial Services Build', href: '/agentforce/playbook/financial-services-service-cloud-build' },
    ],
  },
  {
    label: 'Compare',
    href: '/agentforce/compare',
    Icon: Scale,
    color: '#F59E0B',
    items: [
      { title: 'vs Einstein Copilot', href: '/agentforce/compare/agentforce-vs-einstein-copilot' },
      { title: 'vs Microsoft Copilot', href: '/agentforce/compare/agentforce-vs-microsoft-copilot' },
    ],
  },
  {
    label: 'FAQ',
    href: '/agentforce/faq',
    Icon: HelpCircle,
    color: '#EC4899',
    items: [
      { title: 'What is Agentforce?', href: '/agentforce/faq' },
      { title: 'Pricing & Licensing', href: '/agentforce/faq' },
      { title: 'Technical Architecture', href: '/agentforce/faq' },
      { title: 'Security & Compliance', href: '/agentforce/faq' },
    ],
  },
  {
    label: 'Pricing',
    href: '/agentforce/pricing',
    Icon: DollarSign,
    color: '#06B6D4',
    items: [
      { title: '~$2 / conversation model', href: '/agentforce/pricing' },
      { title: 'Volume discount tiers', href: '/agentforce/pricing' },
      { title: 'Implementation costs', href: '/agentforce/pricing' },
      { title: 'TCO vs alternatives', href: '/agentforce/pricing' },
    ],
  },
]

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

// ── Section 5b — Industries ───────────────────────────────────────────────────

const industries = [
  {
    label: "Financial Services",
    slug: "financial-services",
    desc: "Wealth management onboarding, loan servicing automation, compliance monitoring, and KYC case resolution.",
    color: SF_BLUE,
  },
  {
    label: "Healthcare & Life Sciences",
    slug: "healthcare",
    desc: "Patient scheduling agents, prior authorization resolution, care coordination, and billing inquiry handling.",
    color: "#34D399",
  },
  {
    label: "Insurance",
    slug: "insurance",
    desc: "FNOL claims intake, policy renewal automation, underwriting triage, and broker support agents.",
    color: "#60A5FA",
  },
  {
    label: "Retail & Ecommerce",
    slug: "retail-ecommerce",
    desc: "Order management agents, returns automation, personalised shopping assistants, and loyalty program agents.",
    color: "#F59E0B",
  },
  {
    label: "Manufacturing",
    slug: "manufacturing",
    desc: "Field service scheduling, warranty claim intake, dealer support, and preventive maintenance alert agents.",
    color: "#A78BFA",
  },
  {
    label: "Telecommunications",
    slug: "telecom",
    desc: "Network outage support agents, billing dispute resolution, plan management, and churn prevention agents.",
    color: "#FB923C",
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
  {
    pill: "Pricing Guide",
    title: "Agentforce Pricing Guide 2026: What it really costs to deploy",
    desc: "Per-conversation pricing, Data Cloud add-ons, Einstein licences, implementation cost, and a full TCO model.",
    readTime: "10 min read",
    href: "/agentforce/playbook/agentforce-pricing-guide-2026",
  },
  {
    pill: "Business Case",
    title: "The Agentforce ROI Guide: How to build the business case",
    desc: "Cost savings model, revenue uplift calculation, time-to-ROI analysis, and real numbers from production deployments.",
    readTime: "9 min read",
    href: "/agentforce/playbook/agentforce-roi-guide",
  },
  {
    pill: "Technical Guide",
    title: "How Agentforce works: Atlas Reasoning, Topics, Actions & Trust Layer",
    desc: "Complete technical guide — the four-phase reasoning loop, data grounding, action execution, and the Einstein Trust Layer explained.",
    readTime: "14 min read",
    href: "/agentforce/playbook/how-does-agentforce-work",
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
  { q: "What is the difference between Agentforce and Einstein Copilot?", a: "Einstein Copilot was rebranded and evolved into Agentforce in October 2024. Agentforce is a significant architectural upgrade — it adds the Atlas Reasoning Engine for autonomous multi-step reasoning, expands beyond co-pilot assistance to fully autonomous action execution, and adds enterprise-grade guardrails via the Einstein Trust Layer. If you built on Einstein Copilot, migration to Agentforce is recommended." },
  { q: "What is the Agentforce Atlas Reasoning Engine?", a: "The Atlas Reasoning Engine is Salesforce's hybrid AI reasoning layer that powers Agentforce agents. It operates in a four-phase loop: Observe (intake context from the conversation and CRM), Plan (identify which Topic applies and what Actions are needed), Act (execute the Actions — Apex, Flow, API calls, MuleSoft), and Reflect (evaluate whether the outcome was successful and determine next steps). Atlas enables agents to handle complex, multi-step tasks without human intervention." },
  { q: "How much does Agentforce cost?", a: "Agentforce is priced per conversation at approximately $2 per conversation as of 2025, with volume discounts available for enterprise commitments. Additional costs may apply for Data Cloud licences, Einstein licences, and MuleSoft API calls depending on your integration architecture. Kovil AI provides a full licence audit as part of our scoping engagement so you understand the total cost before any implementation begins." },
  { q: "Can Agentforce work with systems outside Salesforce?", a: "Yes. Agentforce connects to external systems through three primary mechanisms: MuleSoft API-led connectivity (recommended for enterprise-grade integrations with ERP, EHR, payments, logistics), HTTP callout Actions (for simpler REST/SOAP integrations), and native MCP (Model Context Protocol) support added in Agentforce 3, which enables direct connections to Google Cloud, Stripe, PayPal, DocuSign, and other platforms without custom code." },
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

function DownloadCard({ resourceLabel, title, desc, buttonLabel, fileHref }: { resourceLabel: string; title: string; desc: string; buttonLabel: string; fileHref: string }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const inputCls = "w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!firstName.trim() || !lastName.trim()) { setError("Please enter your first and last name."); return }
    if (!company.trim()) { setError("Please enter your company name."); return }
    if (!email.trim()) return
    if (!isCorporateEmail(email)) { setError("Please use your work email address."); return }

    setLoading(true)
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    const leadData = {
      name: `${firstName.trim()} ${lastName.trim()}`,
      company: company.trim(),
      email,
      engagement_type: "agentforce_download",
      project_description: `Downloaded: ${title}`,
      source: "agentforce_download",
      resource_title: title,
    }

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(leadData),
      })

      fetch(`${SUPABASE_URL}/functions/v1/notify-lead`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      }).catch(err => console.error('Email notification error:', err))

    } catch (err) {
      console.error('Lead submission error:', err)
    }

    setLoading(false)
    setSubmitted(true)

    const a = document.createElement("a")
    a.href = fileHref
    a.download = fileHref.split("/").pop() ?? "download.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
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
          Your download has started — check your email too.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-3">
            <input
              type="text"
              required
              value={firstName}
              onChange={e => { setFirstName(e.target.value); setError("") }}
              placeholder="First name *"
              className={inputCls}
            />
            <input
              type="text"
              required
              value={lastName}
              onChange={e => { setLastName(e.target.value); setError("") }}
              placeholder="Last name *"
              className={inputCls}
            />
          </div>
          <input
            type="text"
            required
            value={company}
            onChange={e => { setCompany(e.target.value); setError("") }}
            placeholder="Company name *"
            className={inputCls}
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={e => { setEmail(e.target.value); setError("") }}
              placeholder="Work email *"
              className={`${inputCls} flex-1`}
            />
            <Button type="submit" variant="accent" className="rounded-xl shrink-0" disabled={loading}>
              <Download className="h-4 w-4 mr-2" />
              {loading ? "Saving…" : buttonLabel}
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
  const [showStickyNav, setShowStickyNav] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowStickyNav(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="pt-20 bg-background min-h-screen">

      {/* ── STICKY SECTION SUBNAV ── */}
      <AnimatePresence>
        {showStickyNav && (
          <motion.div
            initial={{ y: -44, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -44, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            style={{ top: '80px' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="h-10 flex items-center gap-0.5 overflow-x-auto scrollbar-none">
                <span className="text-[11px] font-semibold shrink-0 mr-2 pr-2 border-r border-border hidden sm:block" style={{ color: SF_BLUE }}>
                  Agentforce
                </span>
                {agentforceNavSections.map((sec) => (
                  <Link
                    key={sec.label}
                    href={sec.href}
                    className="shrink-0 px-3 py-1 rounded-full text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors whitespace-nowrap"
                  >
                    {sec.label}
                  </Link>
                ))}
                <div className="ml-auto pl-3 shrink-0 hidden md:block">
                  <button
                    onClick={openCalendly}
                    className="text-[11px] font-semibold px-3 py-1 rounded-full text-white transition-all"
                    style={{ background: SF_BLUE }}
                  >
                    Book a call
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SECTION 1 — HERO ── */}
      <section className="relative overflow-hidden">
        {/* Atmospheric gradient orbs */}
        <div className="absolute top-0 right-0 w-[900px] h-[700px] pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 80% 10%, rgba(0,161,224,0.10) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(0,112,210,0.07) 0%, transparent 65%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(0,161,224,0.03) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-7 shadow-sm"
                style={{ border: `1px solid ${SF_BLUE}40`, background: `linear-gradient(135deg, ${SF_BLUE}14 0%, ${SF_BLUE}07 100%)`, color: SF_BLUE }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
                Salesforce Agentforce Practice — New York
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] mb-6">
                Build your Agentforce.{" "}
                <span style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #0055C4 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Ship agents that work.</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Kovil AI is a specialist Agentforce implementation partner. We design, build and deploy autonomous AI agents inside your Salesforce org — in fixed-price sprints with zero delivery risk.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Button variant="accent" size="lg" className="text-base h-12 px-8 rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-200" onClick={openCalendly}>
                  Start my Agentforce build <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link href="#downloads">
                  <Button variant="outline" size="lg" className="text-base h-12 px-8 rounded-full hover:-translate-y-0.5 transition-all duration-200">
                    Download the Readiness Guide
                  </Button>
                </Link>
              </div>

              {/* Trust pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['2-week risk-free pilot', 'Fixed-price sprints', 'Milestone-gated delivery'].map(pill => (
                  <span key={pill} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-card border border-border text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: SF_BLUE }} />
                    {pill}
                  </span>
                ))}
              </div>

              <p className="text-xs text-muted-foreground/50 leading-relaxed max-w-lg">
                Kovil AI is a Salesforce Agentforce implementation partner serving enterprises across the United States. Our Agentforce consulting practice covers agent design, Sales Cloud deployment, Service Cloud deployment, MuleSoft integration, and Atlas Reasoning Engine configuration — delivered in fixed-price sprints from our New York office.
              </p>
            </motion.div>

            {/* Right — Agentforce mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:flex items-center justify-center relative"
            >
              {/* Glow behind mascot */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[420px] h-[420px] rounded-full" style={{ background: `radial-gradient(circle, ${SF_BLUE}18 0%, transparent 70%)` }} />
              </div>
              <img
                src="/agentforce-mascot.png"
                alt="Salesforce Agentforce AI agent — Kovil AI implementation partner"
                className="w-full max-w-2xl object-contain drop-shadow-2xl scale-110 relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1.5 — AGENTFORCE SECTION EXPLORER ── */}
      <section className="relative overflow-hidden py-14" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #091526 50%, #0C1E38 100%)' }}>
        {/* Background glow orbs */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,161,224,0.13) 0%, transparent 70%)', transform: 'translateY(-50%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,80,180,0.10) 0%, transparent 70%)', transform: 'translateY(40%)' }} />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-9">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase mb-2 font-semibold" style={{ color: SF_BLUE }}>Quick Navigation</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">Explore the Agentforce Section</h2>
            </div>
            <p className="text-xs text-white/25 sm:pb-1">10 sections · 50+ pages</p>
          </div>

          {/* 7-card grid: 1 col → 2 col → 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {agentforceNavSections.map((sec) => (
              <div
                key={sec.label}
                className="group relative rounded-2xl p-px transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg, ${sec.color}35 0%, rgba(255,255,255,0.06) 100%)` }}
              >
                {/* Glass inner card */}
                <div className="rounded-[15px] p-4 h-full" style={{ background: 'rgba(10, 22, 44, 0.85)', backdropFilter: 'blur(16px)' }}>
                  {/* Section header — links to hub page */}
                  <Link href={sec.href} className="flex items-center justify-between mb-4 group/head">
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${sec.color}28 0%, ${sec.color}14 100%)`, boxShadow: `0 0 14px ${sec.color}22` }}>
                        <sec.Icon className="h-4 w-4" style={{ color: sec.color }} />
                      </div>
                      <span className="text-sm font-bold text-white/90 group-hover/head:text-white transition-colors">{sec.label}</span>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-white/20 group-hover:text-white/50 transition-all group-hover:translate-x-0.5 shrink-0" />
                  </Link>

                  {/* Divider */}
                  <div className="mb-3 h-px" style={{ background: `linear-gradient(90deg, ${sec.color}30 0%, transparent 100%)` }} />

                  {/* Child page links */}
                  <ul className="space-y-1.5">
                    {sec.items.slice(0, 4).map(item => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-start gap-2 text-xs text-white/40 hover:text-white/75 transition-colors py-0.5 leading-snug"
                        >
                          <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: `${sec.color}70` }} />
                          {item.title}
                        </Link>
                      </li>
                    ))}
                    {sec.items.length > 4 && (
                      <li className="pt-1">
                        <Link href={sec.href} className="text-xs font-bold flex items-center gap-1 transition-opacity hover:opacity-70" style={{ color: sec.color }}>
                          +{sec.items.length - 4} more <ArrowRight className="h-2.5 w-2.5" />
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
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

      {/* ── SECTION 2B — WHAT IS AGENTFORCE (AEO) ── */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Agentforce Explained</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">What is Agentforce?</h2>
            <div className="prose-like space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg"><strong className="text-foreground">Agentforce is Salesforce&apos;s autonomous AI agent platform</strong>, launched in October 2024. It enables companies to build, deploy, and manage AI agents that reason, plan, and take action across Sales Cloud, Service Cloud, Marketing Cloud, and Data Cloud — without requiring human intervention for routine tasks.</p>
              <p>Unlike traditional Salesforce automation (Flows, Process Builder), Agentforce agents use the <strong className="text-foreground">Atlas Reasoning Engine</strong> — a hybrid AI layer that classifies intent, selects actions, executes tasks, and reflects on outcomes. Agents are configured using Topics (what the agent handles), Actions (what it can do), and Instructions (how it should behave).</p>
              <p>Enterprise security is handled by the <strong className="text-foreground">Einstein Trust Layer</strong>, which ensures zero data retention for LLM calls, prevents prompt injection, masks PII, and maintains a full audit log of every agent action — making Agentforce suitable for regulated industries including financial services and healthcare.</p>
              <p>As of 2025, Agentforce is licensed per conversation at approximately $2/conversation, with volume discounts available. Agentforce 3 added native MCP (Model Context Protocol) support, enabling agents to connect directly to Google Cloud, Stripe, PayPal, and other external platforms.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Atlas Reasoning Engine", "Einstein Trust Layer", "Topics & Actions", "Data Cloud", "MuleSoft Integration", "Agentforce 360"].map(tag => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted-foreground bg-card">{tag}</span>
              ))}
            </div>
          </motion.div>
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
                <Link href={`/agentforce/services/${svc.slug}`} className="group bg-card border border-border rounded-2xl hover:shadow-2xl hover:-translate-y-1.5 hover:border-transparent transition-all duration-300 flex flex-col h-full relative overflow-hidden" style={{ '--hover-shadow': `0 20px 60px ${SF_BLUE}15` } as React.CSSProperties}>
                  {/* Top gradient strip */}
                  <div className="h-[3px] w-full rounded-t-2xl shrink-0 transition-all duration-300" style={{ background: `linear-gradient(90deg, ${SF_BLUE} 0%, ${SF_BLUE}60 100%)` }} />
                  <div className="p-8 flex flex-col flex-1">
                    <div className="h-12 w-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${SF_BLUE}1E 0%, ${SF_BLUE}0C 100%)`, boxShadow: `0 4px 16px ${SF_BLUE}20` }}>
                      <svc.icon className="h-6 w-6" style={{ color: SF_BLUE }} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{svc.desc}</p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold mt-5 overflow-hidden h-5" style={{ color: SF_BLUE }}>
                      <span className="opacity-0 group-hover:opacity-100 -translate-y-3 group-hover:translate-y-0 transition-all duration-200">Learn more</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 -translate-y-3 group-hover:translate-y-0 transition-all duration-200 delay-75" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA 1 — after services ── */}
      <section className="relative overflow-hidden py-16">
        {/* Deep dark background with SF blue glow */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #091526 60%, #0C1E38 100%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${SF_BLUE}18 0%, transparent 70%)` }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase mb-6" style={{ border: `1px solid ${SF_BLUE}35`, color: SF_BLUE, background: `${SF_BLUE}10` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
            Free · No commitment
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            Not sure which Agentforce service fits your org?
          </h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">Book a free 30-minute discovery call. We&apos;ll review your Salesforce org, identify the 2–3 highest-ROI agent opportunities, and give you an honest implementation roadmap — no sales pitch.</p>
          <Button variant="accent" size="lg" className="rounded-full px-10 shadow-xl hover:-translate-y-0.5 transition-all duration-200" style={{ boxShadow: `0 8px 32px ${SF_BLUE}45` }} onClick={openCalendly}>
            Book a free discovery call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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
            <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
              {useCases[activeTab].map((uc, i) => (
                <Link
                  key={uc.title}
                  href={`/agentforce/${tabSlug[activeTab]}/${uc.slug}`}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 hover:border-transparent transition-all duration-300 block relative overflow-hidden"
                >
                  {/* Subtle gradient corner on hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle at top right, ${SF_BLUE}10 0%, transparent 70%)` }} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-7 w-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 text-white shadow-md" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #0050C8 100%)`, boxShadow: `0 4px 12px ${SF_BLUE}35` }}>
                      {i + 1}
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground group-hover:text-accent transition-colors">{uc.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.desc}</p>
                  <div className="flex items-center gap-1 text-xs font-bold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200" style={{ color: SF_BLUE }}>
                    View details <ArrowRight className="h-3 w-3 ml-0.5" />
                  </div>
                </Link>
              ))}
              </div>
              {activeTab === "Sales Cloud" && (
                <div className="text-center pt-2">
                  <Link href="/agentforce/sales-cloud" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: SF_BLUE }}>
                    Explore the full Agentforce for Sales Teams hub <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
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
              <motion.div key={cs.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl flex flex-col overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gradient top strip */}
                <div className="h-1 w-full shrink-0" style={{ background: `linear-gradient(90deg, ${SF_BLUE} 0%, #0050C8 100%)` }} />

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-5">
                    <span className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: SF_BLUE, background: `${SF_BLUE}15` }}>{cs.label}</span>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{cs.sub}</p>
                  </div>

                  <div className="mb-4 space-y-3 flex-1">
                    <div>
                      <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-1">Problem</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-1">What we built</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.built}</p>
                    </div>
                  </div>

                  {/* Metrics — dark tile strip */}
                  <div className="mt-4 rounded-xl overflow-hidden grid grid-cols-3" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #0C1E38 100%)' }}>
                    {cs.metrics.map((m, mi) => (
                      <div key={m.label} className={`py-4 px-2 text-center flex flex-col items-center justify-center ${mi < cs.metrics.length - 1 ? 'border-r border-white/5' : ''}`}>
                        <div className="font-display font-black text-2xl leading-none mb-1" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #60CFFF 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{m.value}</div>
                        <div className="text-[9px] text-white/35 leading-tight font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA 2 — after case studies ── */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #091526 50%, #0C1E38 100%)' }} />
        {/* Glow orbs */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[300px] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${SF_BLUE}20 0%, transparent 70%)` }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(255,79,0,0.08) 0%, transparent 70%)' }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-4" style={{ border: `1px solid ${SF_BLUE}35`, color: SF_BLUE, background: `${SF_BLUE}10` }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: SF_BLUE }} />
                2-week risk-free pilot
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight">
                See results like these in your Salesforce org.
              </h2>
              <p className="text-white/45 mt-3 max-w-md leading-relaxed">We scope, build, and deploy your first Agentforce agent in 2 weeks. Fixed price. If it doesn&apos;t hit your agreed metrics, you don&apos;t pay.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="accent" size="lg" className="rounded-full px-8 shadow-xl hover:-translate-y-0.5 transition-all duration-200" style={{ boxShadow: `0 8px 32px ${SF_BLUE}40` }} onClick={openCalendly}>
                Start my pilot <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="#downloads">
                <Button variant="outline" size="lg" className="rounded-full px-8 border-white/15 text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5">
                  Download Readiness Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5b — INDUSTRIES ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Industries</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Agentforce by Industry</h2>
            <p className="text-muted-foreground text-lg">Production Agentforce deployments across six regulated and high-volume industries — each with dedicated compliance guardrails, cloud integration patterns, and use cases proven in the field.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {industries.map((ind, i) => (
              <motion.div key={ind.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                <Link
                  href={`/agentforce/industries/${ind.slug}`}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
                  style={{ borderColor: "var(--border)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${ind.color}50` }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)" }}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: `linear-gradient(180deg, ${ind.color} 0%, ${ind.color}40 100%)` }} />
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: `radial-gradient(ellipse at top left, ${ind.color}08 0%, transparent 60%)` }} />

                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-xl shrink-0 flex items-center justify-center" style={{ background: `${ind.color}18`, boxShadow: `0 0 12px ${ind.color}15` }}>
                        <span className="text-sm font-black leading-none" style={{ color: ind.color }}>{ind.label.charAt(0)}</span>
                      </div>
                      <span className="text-xs font-bold tracking-wider uppercase" style={{ color: ind.color }}>{ind.label}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-all duration-200" style={{ color: `${ind.color}` }} />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 relative z-10">{ind.desc}</p>
                  <p className="text-xs font-bold mt-4 relative z-10 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200" style={{ color: ind.color }}>Explore use cases →</p>
                </Link>
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
                <Link href={article.href} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 hover:border-transparent transition-all duration-300 flex flex-col h-full relative">
                  {/* Top gradient strip */}
                  <div className="h-[3px] w-full shrink-0" style={{ background: `linear-gradient(90deg, #8B5CF6 0%, ${SF_BLUE} 100%)` }} />

                  {/* Hover background glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top left, rgba(139,92,246,0.06) 0%, transparent 60%)' }} />

                  <div className="p-6 flex flex-col flex-1 relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ color: '#8B5CF6', background: 'rgba(139,92,246,0.12)' }}>
                        {article.pill}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium px-2.5 py-1 rounded-full border border-border">
                        <Clock className="h-3 w-3 shrink-0" />{article.readTime}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-base text-foreground leading-snug mb-3 group-hover:text-accent transition-colors flex-1">{article.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{article.desc}</p>

                    <div className="flex items-center gap-1.5 text-xs font-bold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200" style={{ color: SF_BLUE }}>
                      Read article <ArrowRight className="h-3.5 w-3.5" />
                    </div>
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
                buttonLabel="Download Free eBook"
                fileHref="/agentforce-readiness-guide.pdf"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              <DownloadCard
                resourceLabel="Whitepaper · 18 pages · PDF"
                title="Agentforce Implementation Whitepaper"
                desc="Covers Agentforce 360 architecture, the Atlas Reasoning Engine, Einstein Trust Layer, MuleSoft integration patterns, and a phased rollout framework for enterprise."
                buttonLabel="Download Free Whitepaper"
                fileHref="/agentforce-implementation-whitepaper.pdf"
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
