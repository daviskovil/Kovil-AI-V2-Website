'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  GitBranch, Award, CheckCircle2, ChevronDown, Briefcase, Settings, X, Minus,
  Search, Cpu, ScanText, Hand, Server,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const UP = '#6B4EFF' // evocative violet — deliberately not UiPath orange, to avoid clashing with Kovil's accent
const UP_DARK = '#33229E'

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match UiPath talent' },
  { stat: '2 wks', label: 'To a live agentic pilot' },
  { stat: '4', label: 'Certified role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: '10K+', label: 'organizations worldwide run automation on UiPath', src: 'UiPath, 2026' },
  { value: 'Agentic', label: "UiPath's shift from rule-based bots to AI agents that reason across processes", src: 'UiPath, 2026' },
  { value: 'Attended + Unattended', label: 'robots for both human-assisted tasks and fully autonomous back-office work', src: 'UiPath, 2026' },
  { value: '4–6 mo', label: 'average time to hire a senior UiPath developer through traditional recruiting', src: 'Industry avg.' },
]

const modules = [
  { icon: Code2, title: 'UiPath Studio', desc: 'The workflow designer where automations are built — the module every UiPath deployment is built around first.' },
  { icon: Server, title: 'Orchestrator', desc: 'Central control plane for scheduling, monitoring, credentials, and queues across every robot.' },
  { icon: Hand, title: 'Attended & Unattended Robots', desc: 'Robots that assist employees at their desktop, or run entire processes autonomously on servers.' },
  { icon: ScanText, title: 'Document Understanding', desc: 'AI-driven extraction of data from invoices, forms, and unstructured documents into automated workflows.' },
  { icon: Briefcase, title: 'Action Center', desc: 'Human-in-the-loop task management for exceptions and approvals inside automated processes.' },
  { icon: Workflow, title: 'Process & Task Mining', desc: 'Discovery tooling that finds which processes are actually worth automating, and measures the result.' },
]

const aiCapabilities = [
  { icon: Bot, title: 'Agentic Automation & Autopilot Configuration', desc: "Configure and deploy UiPath's native agentic automation and Autopilot features, grounded in your real process and orchestration data." },
  { icon: Zap, title: 'Custom LLM Activities & APIs', desc: "AI features that don't fit a template — invoking LLMs from custom activities and wiring them into your actual workflows, queues, and exception paths." },
  { icon: ScanText, title: 'Intelligent Document Processing', desc: 'Document Understanding pipelines that classify and extract data from messy real-world documents, with human review only where confidence is low.' },
  { icon: GitBranch, title: 'Cross-Platform Agent Integrations', desc: 'AI agents that reach beyond UiPath — into Salesforce, ServiceNow, SAP, and internal tools — through APIs, Orchestrator, or custom middleware.' },
  { icon: ShieldCheck, title: 'Process & Governance Audits', desc: 'Agents are only as good as the processes behind them — we audit queue design, credential handling, and exception logic before anything goes live.' },
  { icon: Search, title: 'Automation Readiness & Scoping', desc: 'Not sure where to start? We audit your process landscape and automation maturity, then scope the single highest-impact agentic use case first.' },
]

const practiceExamples = [
  { title: 'Invoice processing that handles the exceptions', desc: 'Document Understanding extracts invoice data automatically and routes only low-confidence cases to a human, instead of an AP clerk keying every invoice.' },
  { title: 'Brittle bots replaced by resilient agents', desc: 'An agent that adapts to UI and data changes replaces a selector-based bot that broke every release, cutting the maintenance backlog.' },
  { title: 'Cross-system reconciliation that runs overnight', desc: 'Unattended automation reconciles records across ERP and CRM and flags only genuine mismatches for review in the morning.' },
]

const roles = [
  {
    icon: Code2,
    title: 'RPA Developers',
    desc: 'Build, test, and maintain automations in UiPath Studio — reusable, resilient workflows with proper exception handling instead of fragile one-off bots.',
    certs: ['UiPath Certified Professional – Automation Developer Associate'],
  },
  {
    icon: Settings,
    title: 'Automation Business Analysts',
    desc: 'Discover and document candidate processes, define automation scope, and build the business case — the role that keeps projects pointed at value.',
    certs: ['UiPath Certified Professional – Business Analyst'],
  },
  {
    icon: Briefcase,
    title: 'UiPath Solution Architects',
    desc: 'Design the Orchestrator topology, governance, and reusable-component strategy for enterprise-scale automation programs.',
    certs: ['UiPath Certified Professional – Advanced Developer'],
  },
  {
    icon: Bot,
    title: 'UiPath Agentic AI Specialists',
    desc: "Configure and deploy UiPath's agentic automation and LLM-powered capabilities — the newest and fastest-growing UiPath specialization.",
    certs: ['UiPath AI & Agentic Automation Fundamentals'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'RPA Developer', usOnsite: '$55 – $85/hr', remote: '$22 – $28/hr', savings: '~64% lower' },
  { role: 'Automation Business Analyst', usOnsite: '$60 – $90/hr', remote: '$22 – $28/hr', savings: '~67% lower' },
  { role: 'UiPath Agentic AI Specialist', usOnsite: '$90 – $130/hr', remote: '$30 – $38/hr', savings: '~69% lower' },
  { role: 'UiPath Solution Architect', usOnsite: '$100 – $150/hr', remote: '$32 – $40/hr', savings: '~71% lower' },
]

const vettingCriteria = [
  { title: 'Live Automation Build Challenge', desc: 'Build a working, exception-handled automation against a realistic spec under time pressure — selectors, queues, and retry logic, not a take-home nobody reviews.' },
  { title: 'Resilience-vs-Speed Judgment', desc: 'We test the judgment call that separates senior from junior: when a quick bot is fine, and when a process needs the extra design to survive UI changes and bad data.' },
  { title: 'Certification Verification', desc: "We verify every claimed UiPath Certified Professional credential directly, and don't stop there — certification proves baseline knowledge, not production judgment, so it's paired with the live build." },
  { title: 'Production Portfolio Review', desc: '2–3 real automations they have shipped to production, reviewed for maintainability and lessons from what broke.' },
]

const comparisonRows = [
  { dimension: 'Time to start', kovil: '24–48 hrs matched', fullTime: '4–6 months to hire', si: '6–10 weeks to mobilize', freelancer: '1–2 weeks, unvetted' },
  { dimension: 'Certification verified', kovil: 'yes', fullTime: 'self-reported', si: 'yes', freelancer: 'self-reported' },
  { dimension: 'Single accountable owner', kovil: 'yes', fullTime: 'yes', si: 'no', freelancer: 'yes' },
  { dimension: 'Delivery oversight', kovil: 'Engagement Manager audits every milestone', fullTime: 'depends on your management capacity', si: 'account manager, not technical', freelancer: 'none' },
  { dimension: 'Risk-free trial', kovil: 'yes', fullTime: 'no', si: 'no', freelancer: 'rare' },
  { dimension: 'IP ownership', kovil: '100% yours', fullTime: '100% yours', si: 'often shared', freelancer: 'varies' },
]

const forWho = [
  { title: 'Finance & Operations Teams', desc: 'Manual back-office work is eating headcount, and your first bots have become a maintenance burden. Get a developer who builds automations that last.' },
  { title: 'Automation CoEs Stretched Thin', desc: 'Your center of excellence has a backlog longer than its capacity. Add a vetted specialist in days, scoped to exactly the workload you need covered.' },
  { title: 'Teams Moving From RPA to Agentic', desc: 'Your rule-based bots have hit their ceiling. We audit what exists and layer agentic capabilities on top in milestone-gated phases — not a risky rewrite from zero.' },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Automation Estate', desc: "Tell us which UiPath components you run, what's broken or backlogged, and whether you need an agent build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours." },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted UiPath specialists (or an agentic scoping call) matched to your stack and process mix. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: 'Before any work starts, you agree the Orchestrator access, credential handling, and success metrics — so day one has a clear target.' },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or agent build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new processes come online, extend the engagement, or wind down — no lock-in.' },
]

const faqs = [
  { q: 'What is UiPath?', a: 'UiPath is an enterprise automation platform best known for robotic process automation (RPA), combining a workflow designer (Studio), a control plane (Orchestrator), attended and unattended robots, document understanding, and process mining — now extended with agentic automation that uses AI agents to handle work that rule-based bots cannot.' },
  { q: 'What is the difference between RPA and agentic automation?', a: "RPA follows fixed, rule-based steps and breaks when screens or data change. Agentic automation uses AI agents that can interpret context and adapt. Kovil AI configures UiPath's native agentic features and, where they aren't enough, builds custom LLM-powered integrations on top." },
  { q: 'Does Kovil AI build custom agents on UiPath, or only staff talent?', a: "Both, and they're often the same engagement. Clients commonly hire an RPA developer to stabilize brittle bots, then layer agentic capabilities on top of processes that are already well-defined." },
  { q: 'How much does it cost to hire a UiPath developer through Kovil AI?', a: "Kovil AI's remote UiPath talent bills $22-$40 per hour depending on role and experience, versus $55-$150+ per hour for prevailing US onsite rates for the same roles — typically 64-71% lower, at the same certification bar." },
  { q: 'What is the difference between an RPA Developer, Business Analyst, and Solution Architect?', a: 'An RPA Developer builds and maintains automations in Studio. A Business Analyst discovers and scopes candidate processes and builds the business case. A Solution Architect designs Orchestrator topology, governance, and reusable-component strategy for enterprise programs.' },
  { q: 'How quickly can I hire a UiPath specialist through Kovil AI?', a: 'Most clients are matched with a vetted developer, analyst, or architect within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement.' },
  { q: 'Do your UiPath engineers hold official certifications?', a: 'Yes. We verify UiPath Certified Professional credentials directly as part of vetting — Automation Developer, Business Analyst, and Advanced Developer — alongside a live technical assessment, since certification alone does not test real production judgment.' },
  { q: 'Can Kovil AI integrate UiPath with other systems like Salesforce or SAP?', a: 'Yes. Our UiPath talent regularly builds automations and API integrations that connect UiPath to Salesforce, SAP, ServiceNow, and whatever else your business runs on.' },
  { q: 'Who owns the automations built during an engagement?', a: 'You do, 100%. All workflows, custom activities, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in.' },
  { q: 'Can I combine an agentic build with UiPath staff augmentation in one engagement?', a: 'Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an agentic build alongside dedicated developer or analyst talent working in the same environment.' },
  { q: 'What does Kovil AI typically build on UiPath?', a: 'Intelligent document processing pipelines, resilient replacements for brittle bots, cross-system reconciliation automations, and agentic workflows for exception handling.' },
  { q: 'How is Kovil AI different from a traditional UiPath systems integrator?', a: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team, under one Engagement Manager who audits every milestone — with a 2-week risk-free trial and no long-term lock-in.' },
  { q: 'Can we extend a trial engagement or convert it to a long-term hire?', a: 'Yes. Most clients extend the engagement as new processes come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' },
  { q: 'Do you support UiPath rescues or fixing a failing automation program?', a: 'Yes. A significant share of our UiPath engagements start as a rescue — a bot estate with years of maintenance debt or a program that never scaled past a pilot. We audit the automations and governance, then stabilize and rebuild in milestone-gated phases.' },
]

const integrations = [
  'UiPath Studio', 'Orchestrator API', 'Document Understanding', 'Action Center', 'Process Mining', 'Autopilot',
  'REST/SOAP APIs', 'Salesforce', 'SAP', 'ServiceNow', 'Microsoft 365', 'SSO/SAML',
]

// ── Small components ────────────────────────────────────────────────────────

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden bg-background">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <h3 className="font-semibold text-base pr-4">{item.q}</h3>
            <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          <div className={`px-6 text-sm text-muted-foreground leading-relaxed border-t border-border ${open === i ? 'block pb-5 pt-4' : 'hidden'}`}>
            {item.a}
          </div>
        </div>
      ))}
    </div>
  )
}

function Cell({ value }: { value: string }) {
  if (value === 'yes') return <span className="inline-flex items-center gap-1.5 font-semibold text-accent"><CheckCircle2 className="h-4 w-4" />Yes</span>
  if (value === 'no') return <span className="inline-flex items-center gap-1.5 text-muted-foreground/70"><X className="h-4 w-4" />No</span>
  if (['partial', 'rare', 'self-reported'].includes(value)) return <span className="inline-flex items-center gap-1.5 text-muted-foreground capitalize"><Minus className="h-4 w-4" />{value}</span>
  return <span className="text-muted-foreground">{value}</span>
}

const moduleChips = [
  { label: 'Studio', color: UP },
  { label: 'Orchestrator', color: '#A99BFF' },
  { label: 'Doc Understanding', color: UP },
  { label: 'Agentic', color: '#A99BFF' },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1E1450 0%, #150E38 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${UP}33` }} />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full blur-3xl" style={{ background: '#FF4F0022' }} />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '18px 18px', color: '#FFFFFF' }}
      />

      <div className="relative flex flex-col gap-6">
        <div className="flex items-center gap-2 self-start rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#4ADE80' }} />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#4ADE80' }} />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on UiPath</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: UP, opacity: 0.4 }} />
            <PlatformLogoBadge slug="uipath" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${UP}, #4A32CC)` }}
            >
              <Cpu className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">UiPath Platform</p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
            {moduleChips.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/70 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.color }} />
                {c.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative h-8 flex items-center justify-center">
          <div className="h-full w-px" style={{ background: 'linear-gradient(to bottom, #ffffff30, transparent)' }} />
          <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-white/80 animate-bounce" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #2A1408 0%, #150A05 100%)', border: '1px solid #FF4F0040' }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: 'linear-gradient(135deg, #FF4F00, #C43D00)' }}>
              <Bot className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Agentic AI</p>
            <p className="text-xs text-white/50 leading-snug">Autonomous agents, live in weeks</p>
          </div>
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #1B1245 0%, #110B30 100%)', border: `1px solid ${UP}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${UP}, #4A32CC)` }}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Specialist Talent</p>
            <p className="text-xs text-white/50 leading-snug">Devs, analysts, architects</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function UiPathPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">UiPath</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: UP }}>UiPath Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance break-words mb-6">
              Everything You Need to Run UiPath —<br />
              <span className="text-accent">AI Agents, and the Talent to Build Them.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From agentic automation to RPA developers, business analysts, and solution architects — Kovil AI is a single partner for the entire UiPath platform. AI agent builds and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-uipath-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire UiPath talent
                </Button>
              </a>
            </div>
          </div>
          <HeroGraphic />
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {heroStats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Definition */}
      <section id="definition" className="border-t border-border bg-muted/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is UiPath?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">UiPath</strong> is an enterprise automation platform best known for robotic process automation (RPA), combining a workflow designer, an orchestration control plane, attended and unattended robots, document understanding, and process mining. It is now extended with <strong className="text-foreground">agentic automation</strong> — AI agents that handle work rule-based bots cannot. Most large organizations need both stable, well-governed bots and, increasingly, agentic capabilities on top — exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why UiPath, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The enterprise automation platform — now moving from rule-based bots to AI agents.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((s) => (
              <div key={s.label} className="border-t-2 border-accent/40 pt-4">
                <p className="font-display font-black text-4xl text-accent mb-2 break-words">{s.value}</p>
                <p className="text-sm text-background/70 leading-relaxed">{s.label}</p>
                <p className="text-xs text-background/40 mt-2">{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two pillars */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Two Ways to Engage</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on UiPath</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI Agent Integration (Agentic Automation)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Autonomous agents built natively on UiPath — configuring agentic automation and Autopilot, or building custom LLM-powered integrations grounded in your real process data.
            </p>
            <a href="#ai-agents">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${UP}40`, background: `${UP}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${UP}18`, border: `1px solid ${UP}40` }}>
              <Users className="h-5 w-5" style={{ color: UP }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted RPA developers, business analysts, and solution architects, matched in 48 hours. For the automation work that has to happen whether or not you're building agents yet.
            </p>
            <a href="#hire-uipath-talent">
              <Button variant="outline" size="sm" className="rounded-full">
                See roles &amp; rates <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Ecosystem at a glance */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">The Platform</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The UiPath Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">UiPath is rarely one component — most real programs span several of these, sharing one orchestration layer.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${UP}14`, border: `1px solid ${UP}30` }}>
                    <Icon className="h-5 w-5" style={{ color: UP }} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mid CTA #1 */}
      <section className="max-w-7xl mx-auto px-6 py-4">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Not sure which process to automate first?</h3>
            <p className="text-sm text-muted-foreground">Tell us what's slow or manual on a 30-minute call — we'll scope the highest-impact automation first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI Agents on UiPath */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI Agents on UiPath</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your UiPath Environment</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From native agentic configuration to fully custom LLM integrations — here's what's possible.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiCapabilities.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-muted/20 p-6 hover:border-accent/40 transition-colors">
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="h-px w-full bg-border my-12" />

        <h3 className="font-display font-bold text-2xl mb-2">What This Looks Like in Practice</h3>
        <p className="text-muted-foreground max-w-2xl mb-8">Common automation patterns we build on UiPath — illustrative examples, not specific client engagements.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {practiceExamples.map((ex, i) => (
            <motion.div key={ex.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-6">
              <h4 className="font-display font-bold text-base mb-2">{ex.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{ex.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
            See real client case studies <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Mid CTA #2 */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="rounded-2xl bg-foreground text-background p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to scope an agentic automation build?</h3>
            <p className="text-sm text-background/60">Book a free 30-minute architecture call. Live pilot in 2 weeks, risk-free.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* UiPath talent */}
      <section id="hire-uipath-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: UP }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire UiPath Developers, Analysts & Agentic AI Specialists</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every engineer is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${UP}14`, border: `1px solid ${UP}30` }}>
                    <Icon className="h-5 w-5" style={{ color: UP }} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.certs.map((c) => (
                      <span key={c} className="inline-flex items-center gap-1 text-[10px] font-medium text-foreground/70 bg-muted px-2 py-1 rounded-md">
                        <Award className="h-2.5 w-2.5" />{c}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-2">Hiring UiPath Talent: US Onsite vs. Remote</h3>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Prevailing 2026 US onsite hourly rates vs. Kovil AI's vetted remote talent — <strong className="text-foreground">$18–$45/hr</strong> depending on role and experience, at the same certification bar.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background mb-6">
            <table className="w-full text-sm min-w-[640px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Role</th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">US Onsite Rate</th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Kovil Remote Rate</th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rateComparison.map((row) => (
                  <tr key={row.role} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium">{row.role}</td>
                    <td className="py-4 px-6 text-muted-foreground">{row.usOnsite}</td>
                    <td className="py-4 px-6 font-semibold" style={{ color: UP }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil engineer passes the same live build challenge and certification verification below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every UiPath Specialist</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {vettingCriteria.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6">
                <h4 className="font-semibold text-base mb-2 flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent shrink-0" />{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire UiPath Talent</h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-44"></th>
                <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Full-Time Hire</th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">SI / Partner Agency</th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Freelancer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparisonRows.map((row) => (
                <tr key={row.dimension} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 text-muted-foreground font-medium">{row.dimension}</td>
                  <td className="py-4 px-6 bg-accent/[0.03]"><Cell value={row.kovil} /></td>
                  <td className="py-4 px-6"><Cell value={row.fullTime} /></td>
                  <td className="py-4 px-6"><Cell value={row.si} /></td>
                  <td className="py-4 px-6"><Cell value={row.freelancer} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Integrations / stack */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">The Stack</p>
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">UiPath Tools &amp; Integrations We Work With</h2>
        <div className="flex flex-wrap gap-2.5">
          {integrations.map((t) => (
            <span key={t} className="text-sm font-medium bg-muted/40 border border-border px-4 py-2 rounded-full text-foreground/80">{t}</span>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It's For</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on UiPath?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {forWho.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-background p-7">
                <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">From Brief to Delivery — What the First Weeks Look Like</h2>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-[136px] flex-col items-end gap-1 pt-1 hidden md:flex">
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

      {/* Mid CTA #3 */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${UP}0A`, border: `1px solid ${UP}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need a UiPath developer, analyst, or architect?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${UP}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About UiPath</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/platforms/mulesoft', label: 'MuleSoft Platform', desc: 'AI agents and integration talent' },
            { href: '/platforms/boomi', label: 'Boomi Platform', desc: 'Boomi AI agents and integration talent' },
            { href: '/staff-augmentation', label: 'Staff Augmentation', desc: 'Add vetted engineers without full-time overhead' },
            { href: '/platforms', label: 'All Platform Integrations', desc: 'Salesforce, HubSpot, NetSuite, and 36 more' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-xl border border-border p-5 hover:border-accent/40 hover:bg-muted/20 transition-all group">
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on UiPath?</h2>
            <p className="text-background/60 text-base">AI agent or specialist talent — book a 30-minute call. 2-week risk-free trial either way.</p>
          </div>
          <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

    </div>
  )
}
