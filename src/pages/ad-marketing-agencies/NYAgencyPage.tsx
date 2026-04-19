'use client'

import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight, Network, BarChart3, Repeat2, Plug2,
  AlertTriangle, CheckCircle2,
  Users, Target, Wrench, Zap, Star, ChevronRight,
  Brain, DollarSign,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Helpers ──────────────────────────────────────────────────────────────────

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "48hr",  label: "Match Time" },
  { value: "2-Week", label: "Risk-Free Trial" },
  { value: "150+",  label: "AI Deployments" },
  { value: "98%",   label: "Trial-to-Hire Rate" },
]

const problems = [
  {
    icon: Brain,
    title: "Your team doesn't have the engineering depth",
    desc: "You know AI can transform your campaigns — but building production AI systems requires a different skill set than running campaigns or managing creative.",
  },
  {
    icon: DollarSign,
    title: "NYC AI engineers cost $180K+ and take 3+ months to hire",
    desc: "The talent market in New York is brutal. By the time you hire, onboard, and ramp a full-time AI engineer, your competitors have already shipped.",
  },
  {
    icon: AlertTriangle,
    title: "Freelancers deliver code. Not outcomes. Not accountability.",
    desc: "Offshore agencies and freelance platforms hand you files and disappear. No sprint oversight, no milestone accountability, no one responsible for results.",
  },
]

const services = [
  {
    icon: Network,
    title: "AI Orchestration",
    desc: "Connect and coordinate multiple AI models, APIs, and data sources into a single intelligent system. We build the orchestration layer that makes your AI stack actually work together.",
    href: "/engage/managed-ai-engineer",
  },
  {
    icon: BarChart3,
    title: "AI in Digital Marketing",
    desc: "From AI-powered campaign intelligence to automated performance reporting and personalization engines — we engineer the AI layer inside your marketing operations.",
    href: "/engage/outcome-based-project",
  },
  {
    icon: Repeat2,
    title: "AI Workflow Automation",
    desc: "Eliminate repetitive agency tasks. We automate brief intake, creative approvals, reporting pipelines, client updates, and more — with AI agents that actually run reliably.",
    href: "/engage/managed-ai-engineer",
  },
  {
    icon: Plug2,
    title: "AI Integration",
    desc: "Already using HubSpot, Salesforce, Meta Ads, Google Analytics? We integrate AI models directly into your existing stack without rebuilding everything from scratch.",
    href: "/engage/outcome-based-project",
  },
]

const engagements = [
  {
    icon: Users,
    title: "Managed AI Engineer",
    badge: "Most Popular",
    desc: "Embed a pre-vetted AI engineer directly into your agency team. They work your hours, your tools, your Slack.",
    cta: "Hire an AI Engineer",
    href: "/engage/managed-ai-engineer",
  },
  {
    icon: Target,
    title: "Outcome-Based AI Project",
    badge: null,
    desc: "Have a specific AI product to build? We scope, build, and ship it with a dedicated squad and fixed timeline.",
    cta: "Start a Project",
    href: "/engage/outcome-based-project",
  },
  {
    icon: Wrench,
    title: "AI App Rescue",
    badge: null,
    desc: "Inherited a broken AI build from another agency or vendor? We audit, fix, and maintain it.",
    cta: "Get Rescued",
    href: "/engage/app-rescue",
  },
]

const comparison = [
  { label: "Time to Start",   kovil: "3–5 Days",           inhouse: "1–3 Months",  freelance: "2–3 Weeks" },
  { label: "Risk",            kovil: "Zero (2-week trial)", inhouse: "High",         freelance: "Medium" },
  { label: "Cost",            kovil: "$$",                  inhouse: "$$$$",         freelance: "$" },
  { label: "Accountability",  kovil: "Managed + Audited",   inhouse: "Depends",      freelance: "None" },
  { label: "NY Agency Fit",   kovil: "Specialized",         inhouse: "Generic",      freelance: "Generic" },
]

const logos = ["Unilever", "Smartfren", "Blibli", "LaVie", "CloseUp"]

const agencyWorkflows = [
  {
    title: 'Campaign Performance Reporting Automation',
    description: 'Pull data from Meta, Google, LinkedIn → GPT-4o analysis → auto-build slide deck → email client + Slack team',
    tools: ['n8n', 'GPT-4o', 'Google Slides', 'Gmail', 'Slack'],
    timeSaved: '12 hrs/week',
    buildTime: '2–3 week sprint',
    slug: 'campaign-performance-reporting',
  },
  {
    title: 'White-Label Voice AI Agents',
    description: 'Customized conversational voice bots handle complex inbound calls with zero latency — resell to local SMB clients as a profitable recurring SaaS revenue stream',
    tools: ['Twilio', 'ElevenLabs', 'GPT-4o', 'n8n', 'HubSpot', 'Google Calendar'],
    timeSaved: '24/7 coverage',
    buildTime: '4–6 week sprint',
    slug: 'white-label-voice-ai-agents',
  },
  {
    title: 'New Client Onboarding Automation',
    description: 'Deal Won in HubSpot → parallel: contract + invoice + onboarding → auto-create Notion workspace + Slack channel → kickoff',
    tools: ['HubSpot', 'DocuSign', 'Stripe', 'n8n', 'Notion', 'Calendly'],
    timeSaved: '3 days → 2 hrs',
    buildTime: '3–4 week sprint',
    slug: 'new-client-onboarding-automation',
  },
  {
    title: 'Automated AM Briefs & Client Reporting',
    description: 'GA4 + ad platform data → GPT-4o drafts weekly client reports + pushes daily synthesized Slack briefs to Account Managers',
    tools: ['Google Analytics 4', 'GPT-4o', 'n8n', 'Google Slides', 'Slack'],
    timeSaved: '8 hrs/week',
    buildTime: '2–3 week sprint',
    slug: 'automated-am-briefs-client-reporting',
  },
  {
    title: 'Multi-Channel Inbound Dispatching',
    description: 'Instagram DMs + WhatsApp + Email → AI dispatcher instantly answers FAQs, qualifies prospects, and books meetings into your calendar',
    tools: ['Instagram API', 'WhatsApp Business API', 'GPT-4o', 'n8n', 'Calendly', 'HubSpot'],
    timeSaved: 'Zero lead leakage',
    buildTime: '3–4 week sprint',
    slug: 'multi-channel-inbound-dispatching',
  },
  {
    title: 'CRM Ops Layer — Intelligent Data Hygiene',
    description: 'AI agents parse messy inbound requests, enforce naming conventions, and ensure pristine data hygiene before it enters your Salesforce or HubSpot',
    tools: ['GPT-4o', 'n8n', 'Clearbit', 'Salesforce', 'HubSpot', 'Slack'],
    timeSaved: '5 hrs/day ops',
    buildTime: '3–4 week sprint',
    slug: 'crm-ops-layer',
  },
]

// ── Workflow diagram components ───────────────────────────────────────────────

type NodeVariant = "input" | "agent" | "process" | "monitor" | "output"

const nodeStyles: Record<NodeVariant, { card: string; icon: string; badge: string }> = {
  input:   { card: "border-accent/50 bg-accent/[0.08]",           icon: "text-accent bg-accent/20",           badge: "text-accent border-accent/30 bg-accent/10" },
  agent:   { card: "border-violet-500/40 bg-violet-500/[0.07]",   icon: "text-violet-400 bg-violet-500/15",   badge: "text-violet-400 border-violet-500/30 bg-violet-500/10" },
  process: { card: "border-white/10 bg-white/[0.03]",             icon: "text-slate-400 bg-white/5",          badge: "text-slate-400 border-white/10 bg-white/5" },
  monitor: { card: "border-blue-500/40 bg-blue-500/[0.07]",       icon: "text-blue-400 bg-blue-500/15",       badge: "text-blue-400 border-blue-500/30 bg-blue-500/10" },
  output:  { card: "border-emerald-500/40 bg-emerald-500/[0.07]", icon: "text-emerald-400 bg-emerald-500/15", badge: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
}

interface NodeDef {
  step: string; label: string; sub: string; badge: string
  variant: NodeVariant; Icon: React.ComponentType<{ className?: string }>
}

function DiagramNode({ node, delay }: { node: NodeDef; delay: number }) {
  const s = nodeStyles[node.variant]
  const { Icon } = node
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.38 }}
      className={`rounded-xl border px-4 py-3.5 w-full ${s.card}`}
    >
      <div className="flex items-center gap-3">
        <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${s.icon}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <span className="text-[9px] font-bold text-white/30 tracking-widest uppercase">{node.step}</span>
            <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${s.badge}`}>{node.badge}</span>
          </div>
          <p className="font-semibold text-sm text-white leading-snug">{node.label}</p>
          <p className="text-[11px] text-white/45 mt-0.5">{node.sub}</p>
        </div>
      </div>
    </motion.div>
  )
}

function DiagramArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.25 }}
      className="flex flex-col items-center"
      style={{ originY: 0 }}
    >
      <div className="w-px h-6 bg-gradient-to-b from-orange-500/70 to-orange-500/30" />
      <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-orange-500/60" />
    </motion.div>
  )
}

function ForkConnector({ delay }: { delay: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true }} transition={{ delay, duration: 0.3 }}
      viewBox="0 0 320 44" className="w-full max-w-[320px]" style={{ overflow: "visible" }}
    >
      {/* Stem down from center */}
      <line x1="160" y1="0" x2="160" y2="18" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
      {/* Horizontal bar */}
      <line x1="40" y1="18" x2="280" y2="18" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
      {/* Left drop */}
      <line x1="40" y1="18" x2="40" y2="44" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
      {/* Right drop */}
      <line x1="280" y1="18" x2="280" y2="44" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
      {/* Left arrowhead */}
      <polygon points="36,40 44,40 40,46" fill="rgba(249,115,22,0.55)" />
      {/* Right arrowhead */}
      <polygon points="276,40 284,40 280,46" fill="rgba(249,115,22,0.55)" />
    </motion.svg>
  )
}

function MergeConnector({ delay }: { delay: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true }} transition={{ delay, duration: 0.3 }}
      viewBox="0 0 320 44" className="w-full max-w-[320px]" style={{ overflow: "visible" }}
    >
      {/* Left rise */}
      <line x1="40" y1="0" x2="40" y2="26" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
      {/* Right rise */}
      <line x1="280" y1="0" x2="280" y2="26" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
      {/* Horizontal bar */}
      <line x1="40" y1="26" x2="280" y2="26" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
      {/* Center drop */}
      <line x1="160" y1="26" x2="160" y2="44" stroke="rgba(249,115,22,0.5)" strokeWidth="1.5" />
      {/* Center arrowhead */}
      <polygon points="156,40 164,40 160,46" fill="rgba(249,115,22,0.55)" />
    </motion.svg>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function NYAgencyPage() {
  const servicesRef = useRef<HTMLElement>(null)

  function scrollToServices() {
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── 1. HERO ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-background to-background pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Grain overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div {...fade(0)}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6 border border-accent/20">
              For New York Ad &amp; Marketing Agencies
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.04] text-balance mb-6"
          >
            Your NY Agency Needs<br />
            <span className="text-accent">Reliable AI Agents,</span><br />
            Not AI Experiments.
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Kovil AI embeds vetted AI Ops Engineers into your agency in 48 hours. Build reliable agentic workflows, automate your operational bottlenecks, and decouple your revenue growth from expensive headcount.
          </motion.p>

          <motion.div {...fade(0.22)} className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <OnboardingModal defaultGoal="project">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 h-12 text-base">
                Book a Free Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <Button
              variant="outline"
              onClick={scrollToServices}
              className="rounded-full px-8 h-12 text-base font-semibold border-border hover:bg-muted/30"
            >
              See How It Works
            </Button>
          </motion.div>

          <motion.p {...fade(0.28)} className="text-sm text-muted-foreground mb-8">
            <Star className="inline h-3.5 w-3.5 text-accent mr-1 mb-0.5" />
            Trusted by 50+ enterprise clients across the US, UK &amp; Australia
          </motion.p>

          {/* Entity description — readable by crawlers + AI models */}
          <motion.p
            {...fade(0.32)}
            className="text-xs text-muted-foreground/60 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Kovil AI is a New York-based AI engineering firm that embeds pre-vetted AI engineers into advertising and marketing agencies. Specialising in AI orchestration, agentic workflow automation, and AI integration into existing marketing stacks, Kovil AI has completed 150+ production AI deployments across agencies in the US, UK, and Australia — all without the 3-month hiring cycle or freelance accountability gaps.
          </motion.p>

          {/* Stat bar */}
          <motion.div
            {...fade(0.34)}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-background py-6 px-4 text-center">
                <p className="font-display font-black text-3xl text-accent mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. PROBLEM SECTION ─────────────────────────────────────────────── */}
      <section className="bg-muted/20 border-y border-border py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">NY Marketing Agencies Are Falling Behind on AI</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  {...fade(i * 0.1)}
                  className="rounded-2xl border border-border bg-background p-7 hover:border-accent/30 transition-colors"
                >
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES SECTION ────────────────────────────────────────────── */}
      <section ref={servicesRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What We Build</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">What Kovil AI Builds for Marketing Agencies</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  {...fade(i * 0.09)}
                  className="group rounded-2xl border border-border bg-background p-7 hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT WE CAN BUILD FOR YOU ──────────────────────────────────── */}
      <section className="border-y border-border py-20 px-6" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.04) 0%, transparent 70%)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Real Builds</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
              What We Can Build For You
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Six AI workflow automations we build specifically for ad &amp; marketing agencies. Each ships in 1–4 week sprints.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {agencyWorkflows.map((wf, i) => (
              <motion.div
                key={wf.title}
                {...fade(i * 0.07)}
                className="group relative rounded-2xl border border-border bg-background p-6 hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden"
              >
                {/* Full-card link overlay */}
                <Link
                  href={`/ai-workflow-automation-library/${wf.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={wf.title}
                />

                {/* Accent top bar */}
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-accent to-accent/40" />

                {/* Time saved badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-full">
                    Ad &amp; Marketing
                  </span>
                  <span className="text-[11px] font-semibold text-accent flex items-center gap-1">
                    <Zap size={10} /> {wf.timeSaved}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-[15px] leading-snug mb-2 group-hover:text-accent transition-colors">
                  {wf.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-muted-foreground leading-relaxed mb-4">
                  {wf.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {wf.tools.slice(0, 4).map(t => (
                    <span key={t} className="rounded px-2 py-0.5 text-[10px] font-medium border border-border bg-muted/30 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                  {wf.tools.length > 4 && (
                    <span className="rounded px-2 py-0.5 text-[10px] border border-border text-muted-foreground">
                      +{wf.tools.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                    Full deep-dive <ArrowRight size={11} />
                  </span>
                  <span className="text-[10px] text-muted-foreground">{wf.buildTime}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade(0.5)} className="text-center mt-10">
            <Link
              href="/ai-workflow-automation-library"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
            >
              Browse all AI workflow automations <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 5. ENGAGEMENT MODELS ───────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Engagement Models</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">Three Ways to Work With Kovil AI</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((e, i) => {
              const Icon = e.icon
              return (
                <motion.div
                  key={e.title}
                  {...fade(i * 0.1)}
                  className={`relative rounded-2xl border p-7 flex flex-col ${
                    e.badge
                      ? "border-accent/40 bg-accent/5"
                      : "border-border bg-background"
                  }`}
                >
                  {e.badge && (
                    <span className="absolute -top-3 left-6 text-xs font-bold uppercase tracking-widest text-white bg-accent px-3 py-1 rounded-full">
                      {e.badge}
                    </span>
                  )}
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{e.desc}</p>
                  <Link
                    href={e.href}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:gap-2 transition-all"
                  >
                    {e.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 6. COMPARISON TABLE ────────────────────────────────────────────── */}
      <section className="bg-muted/20 border-y border-border py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">The Smarter Way to Get AI Built</h2>
          </motion.div>

          <motion.div {...fade(0.1)} className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground w-40"></th>
                  <th className="text-left py-4 px-6 font-bold text-accent">Kovil AI</th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">In-House Hire</th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Freelance Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map((row) => (
                  <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium text-muted-foreground">{row.label}</td>
                    <td className="py-4 px-6 font-semibold text-foreground">
                      <CheckCircle2 className="inline h-4 w-4 text-accent mr-1.5 mb-0.5" />
                      {row.kovil}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{row.inhouse}</td>
                    <td className="py-4 px-6 text-muted-foreground">{row.freelance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 7. SOCIAL PROOF ────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Social Proof</p>
            <h2 className="font-display font-bold text-3xl">Built and Trusted by Teams That Ship</h2>
          </motion.div>

          <motion.div
            {...fade(0.1)}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            {logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-xl border border-border bg-muted/20 px-8 py-4 text-sm font-semibold text-muted-foreground tracking-wide hover:border-accent/30 hover:text-foreground transition-all"
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>

          {/* Trust micro-copy */}
          <motion.div {...fade(0.4)} className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            {[
              "🔒 NDA signed before discovery",
              "✅ 5-stage engineer vetting",
              "⚡ Engineers start in 3–5 days",
              "🇺🇸 NY-timezone aligned",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ SECTION ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">Common Questions</h2>
          </motion.div>

          <div className="divide-y divide-border">
            {[
              {
                q: 'How quickly can Kovil AI embed an AI engineer into my marketing agency?',
                a: 'Most agencies are matched with a vetted AI engineer within 48 hours of submitting a brief. The engineer starts on a milestone plan within 3–5 days, and every engagement includes a 2-week risk-free trial — you only pay if you hire.',
              },
              {
                q: 'What AI services does Kovil AI build for marketing agencies?',
                a: 'Kovil AI builds AI orchestration systems, AI workflow automation, digital marketing AI (campaign intelligence, performance reporting, personalization), and AI integrations into existing tools like HubSpot, Salesforce, Meta Ads, and Google Analytics.',
              },
              {
                q: 'How is Kovil AI different from freelancers or offshore agencies?',
                a: 'Kovil AI is an embedded engineering partner — not a freelance marketplace. Every engineer passes a 5-stage vetting process. Every engagement has an Engagement Manager who audits milestone outputs before they reach you. Sprint-based delivery with clear outcomes, not open-ended hours.',
              },
              {
                q: 'What is the risk-free trial?',
                a: 'You work with your matched AI engineer for two weeks at no cost. If the fit is not right — technically or culturally — you owe nothing. We will rematch you with a different engineer at no additional cost.',
              },
              {
                q: 'Can you build AI workflow automation for a marketing agency?',
                a: 'Yes. Kovil AI engineers automate brief intake, creative approvals, reporting pipelines, and client updates using AI agents built with frameworks like n8n, CrewAI, LangGraph, and custom LLM pipelines. These run reliably in production — not just as demos.',
              },
            ].map((item, i) => (
              <motion.div key={item.q} {...fade(i * 0.08)} className="py-6">
                <h3 className="font-display font-semibold text-base md:text-lg mb-2 leading-snug">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. FREE TOOLS CALLOUT ─────────────────────────────────────────── */}
      <section className="bg-muted/20 border-y border-border py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Free Resources</p>
            <h2 className="font-display font-bold text-3xl">Not Ready to Hire? Start Here.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              {...fade(0.1)}
              className="rounded-2xl border border-border bg-background p-8 hover:border-accent/30 transition-colors group"
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <Zap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">AI Readiness Assessment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Find out where AI can have the fastest impact in your agency operations. Takes 4 minutes.
              </p>
              <Link
                href="/tools/ai-readiness-ad-marketing-agencies"
                className="inline-flex items-center font-semibold text-sm text-accent hover:gap-2 transition-all"
              >
                Take the Free Assessment <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              {...fade(0.18)}
              className="rounded-2xl border border-border bg-background p-8 hover:border-accent/30 transition-colors group"
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <BarChart3 className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">AI Project Cost Estimator</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Get a ballpark on what your AI build might cost before any commitment. No sales call required.
              </p>
              <Link
                href="/tools/ai-project-estimator"
                className="inline-flex items-center font-semibold text-sm text-accent hover:gap-2 transition-all"
              >
                Estimate My Project <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 11. FINAL CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fade(0)}
            className="relative rounded-3xl overflow-hidden bg-foreground text-background p-12 md:p-16 text-center"
          >
            {/* Accent glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent/80 mb-4">Ready to Start?</p>
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 leading-tight text-balance">
                Ready to Add AI Engineering to Your Agency?
              </h2>
              <p className="text-background/60 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Most agencies are matched with an engineer within 48 hours. Your two-week trial is risk-free — you only pay if you hire.
              </p>
              <OnboardingModal defaultGoal="project">
                <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-10 h-13 text-base">
                  Book a Free Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </OnboardingModal>
              <p className="mt-6 text-sm text-background/50">
                Or call us directly:{" "}
                <a href="tel:+16465359141" className="text-background/80 hover:text-background font-semibold transition-colors">
                  +1 646-535-9141
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
