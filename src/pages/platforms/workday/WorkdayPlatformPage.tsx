'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  GitBranch, Award, CheckCircle2, ChevronDown, Briefcase, Settings, X, Minus,
  Search, GraduationCap, DollarSign, UserPlus,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const WD = '#0875E1' // Workday Blue
const WD_DARK = '#0C2C4E'

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match Workday talent' },
  { stat: '2 wks', label: 'To a live Illuminate pilot' },
  { stat: '4', label: 'Certified role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: '10,000+', label: 'organizations run HR and finance on Workday worldwide', src: 'Workday, 2026' },
  { value: '50%+', label: 'of the Fortune 500 runs on Workday', src: 'Workday, 2026' },
  { value: '175+', label: 'countries where Workday customers operate', src: 'Workday, 2026' },
  { value: '4–6 mo', label: 'average time to hire a senior Workday consultant through traditional recruiting', src: 'Industry avg.' },
]

const modules = [
  { icon: Users, title: 'Workday HCM', desc: 'Core human capital management — the module every Workday tenant is built around first.' },
  { icon: DollarSign, title: 'Financial Management', desc: 'General ledger, accounting, and financial reporting, unified with HCM on the same data model.' },
  { icon: Briefcase, title: 'Payroll', desc: 'Payroll processing and compliance, tightly integrated with HCM and time tracking.' },
  { icon: Workflow, title: 'Adaptive Planning', desc: "Workday's FP&A platform for budgeting, forecasting, and workforce planning." },
  { icon: UserPlus, title: 'Recruiting', desc: 'Applicant tracking and hiring workflows, feeding directly into HCM on day one of employment.' },
  { icon: GraduationCap, title: 'Learning', desc: 'Employee training and development, connected to HCM for skills and career-path data.' },
]

const aiCapabilities = [
  { icon: Bot, title: 'Workday Illuminate Configuration', desc: "Configure and deploy Workday Illuminate — Workday's native AI platform — for autonomous HR and finance workflows, grounded in your real HCM and Financials data." },
  { icon: Zap, title: 'Custom EIB & Studio Integrations', desc: "AI features that don't fit a template — invoking LLMs from Workday Studio, building custom Enterprise Interface Builder (EIB) workflows wired into your actual business processes." },
  { icon: Database, title: 'People Analytics Automation', desc: 'AI-assisted workforce analytics that surface attrition risk and compensation anomalies before they become expensive problems.' },
  { icon: GitBranch, title: 'Cross-Platform Agent Integrations', desc: 'AI agents that reach beyond Workday — into Slack, ServiceNow, and internal tools — through Workday REST/SOAP APIs or custom middleware.' },
  { icon: ShieldCheck, title: 'Security & Business Process Audits', desc: 'AI agents are only as good as the data behind them — we audit security group configuration and business process design before anything goes live.' },
  { icon: Search, title: 'Illuminate Readiness & Scoping', desc: "Not sure where to start? We audit your tenant's data quality and business process maturity, then scope the single highest-impact Illuminate use case first." },
]

const practiceExamples = [
  { title: 'Autonomous onboarding coordination', desc: 'A new-hire event triggers document collection, equipment requests, and manager task reminders automatically, instead of an HR coordinator chasing each step.' },
  { title: 'Compensation anomalies caught early', desc: 'Custom Illuminate logic flags off-cycle pay changes that fall outside policy before they reach payroll, not after.' },
  { title: 'Finance close that explains itself', desc: 'Automated variance analysis surfaces the actual driver behind a budget miss instead of an analyst reverse-engineering it from spreadsheets.' },
]

const roles = [
  {
    icon: Settings,
    title: 'Workday HCM Consultants',
    desc: "Configure core HR, absence, and compensation using Workday's business process framework and security groups without writing code. Usually the first hire for any growing tenant.",
    certs: ['Workday Pro – HCM'],
  },
  {
    icon: Code2,
    title: 'Workday Integration Developers',
    desc: 'Build custom integrations using Workday Studio, EIBs, and REST/SOAP APIs when native connectors run out of road.',
    certs: ['Workday Pro – Integrations'],
  },
  {
    icon: Briefcase,
    title: 'Financial Management Consultants',
    desc: 'Design the chart of accounts, financial reporting, and multi-book accounting structure for Financials-tier tenants. The most senior tier for finance-heavy deployments.',
    certs: ['Workday Pro – Financial Management'],
  },
  {
    icon: Bot,
    title: 'Illuminate AI Specialists',
    desc: 'Configure and deploy Workday Illuminate AI agents across HCM and Financials — the newest and fastest-growing Workday specialization.',
    certs: ['Workday Illuminate Fundamentals'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'Workday HCM Consultant', usOnsite: '$65 – $100/hr', remote: '$22 – $29/hr', savings: '~69% lower' },
  { role: 'Workday Integration Developer', usOnsite: '$90 – $140/hr', remote: '$29 – $38/hr', savings: '~71% lower' },
  { role: 'Illuminate AI Specialist', usOnsite: '$110 – $160/hr', remote: '$34 – $42/hr', savings: '~72% lower' },
  { role: 'Financial Management Consultant', usOnsite: '$120 – $180/hr', remote: '$36 – $45/hr', savings: '~73% lower' },
]

const vettingCriteria = [
  { title: 'Live Business Process Build Challenge', desc: 'Configure a working business process or EIB against a realistic spec under time pressure — security groups, condition rules, and integration logic, not a take-home nobody reviews.' },
  { title: 'Native-vs-Custom Judgment', desc: "We test the judgment call that separates senior from junior: when Workday's native business process framework is enough, and when a custom integration is worth the added complexity." },
  { title: 'Certification Verification', desc: "We verify every claimed Workday Pro certification directly, and don't stop there — certification proves baseline knowledge, not production judgment, so it's paired with the live build." },
  { title: 'Production Portfolio Review', desc: '2–3 real tenants or integrations they have shipped to production, reviewed for security design and lessons from what broke.' },
]

const comparisonRows = [
  { dimension: 'Time to start', kovil: '24–48 hrs matched', fullTime: '4–6 months to hire', si: '8–14 weeks to mobilize', freelancer: '1–2 weeks, unvetted' },
  { dimension: 'Certification verified', kovil: 'yes', fullTime: 'self-reported', si: 'yes', freelancer: 'self-reported' },
  { dimension: 'Single accountable owner', kovil: 'yes', fullTime: 'yes', si: 'no', freelancer: 'yes' },
  { dimension: 'Delivery oversight', kovil: 'Engagement Manager audits every milestone', fullTime: 'depends on your management capacity', si: 'account manager, not technical', freelancer: 'none' },
  { dimension: 'Risk-free trial', kovil: 'yes', fullTime: 'no', si: 'no', freelancer: 'rare' },
  { dimension: 'IP ownership', kovil: '100% yours', fullTime: '100% yours', si: 'often shared', freelancer: 'varies' },
]

const forWho = [
  { title: 'HR & People Leaders', desc: "Your workforce data lives in Workday but reporting and business processes haven't kept up with how the org actually operates. Get a consultant who can fix it without a 6-month SI engagement." },
  { title: 'IT Teams Stretched Thin', desc: 'One admin is covering HCM, Payroll, and Financials, and the integration backlog keeps growing. Add a vetted specialist in days, scoped to exactly the workload you need covered.' },
  { title: 'Teams Mid-Implementation', desc: "Your Workday rollout stalled, or your Illuminate pilot never made it to production. We audit what's there and take over in milestone-gated phases — not a risky rewrite from zero." },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Tenant', desc: "Tell us which modules you run, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours." },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted Workday specialists (or an Illuminate scoping call) matched to your modules and stack. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: 'Before any work starts, you agree the tenant access, integration points, and success metrics — so day one has a clear target.' },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or AI agent build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new modules or workflows come online, extend the engagement, or wind down — no lock-in.' },
]

const faqs = [
  { q: 'What is Workday?', a: 'Workday is a cloud platform for human capital management (HCM) and financial management, built around a shared data model spanning core HR, payroll, recruiting, learning, financial management, and Adaptive Planning (FP&A). It is widely used by large and mid-market enterprises to unify people and financial data in one system instead of separate HR and finance platforms.' },
  { q: 'What is the difference between Workday and Workday Illuminate?', a: "Workday is the underlying HCM and Financials platform; Illuminate is Workday's native AI layer, built on top of it, for autonomous HR and finance workflows grounded in your real tenant data. Kovil AI configures Illuminate natively and, where it isn't enough, builds custom AI integrations on top." },
  { q: 'Does Kovil AI build custom AI agents on Workday, or only staff talent?', a: "Both, and they're often the same engagement. Clients commonly hire a Workday consultant to clean up business process configuration, then layer Illuminate AI agents on top of the data that talent has already fixed." },
  { q: 'How much does it cost to hire a Workday consultant through Kovil AI?', a: "Kovil AI's remote Workday talent bills $22-$45 per hour depending on role and experience, versus $65-$180+ per hour for prevailing US onsite rates for the same roles — typically 69-73% lower, at the same certification bar." },
  { q: 'What is the difference between a Workday HCM Consultant, Integration Developer, and Financial Management Consultant?', a: "An HCM Consultant configures core HR, absence, and compensation using Workday's business process framework without code. An Integration Developer builds custom integrations with Workday Studio and EIBs. A Financial Management Consultant designs the chart of accounts and financial reporting structure, and is typically engaged for Financials-tier tenants specifically." },
  { q: 'How quickly can I hire a Workday specialist through Kovil AI?', a: 'Most clients are matched with a vetted consultant, developer, or specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement.' },
  { q: 'Do your Workday engineers hold official certifications?', a: 'Yes. We verify Workday Pro certifications directly as part of vetting — HCM, Integrations, and Financial Management — alongside a live technical assessment, since certification alone does not test real production judgment.' },
  { q: 'Can Kovil AI integrate Workday with other systems like Slack or ServiceNow?', a: 'Yes. Our Workday talent regularly builds integrations using Workday Studio, EIBs, and REST/SOAP APIs — connecting Workday to whatever else your business runs on.' },
  { q: 'Who owns the integrations and configurations built during an engagement?', a: 'You do, 100%. All EIBs, Studio integrations, business process configurations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in.' },
  { q: 'Can I combine an Illuminate AI agent build with Workday staff augmentation in one engagement?', a: 'Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an Illuminate build alongside dedicated consultant or developer talent working in the same tenant.' },
  { q: 'What Workday modules does Kovil AI have experience with?', a: 'HCM, Financial Management, Payroll, Adaptive Planning, Recruiting, and Learning, plus integrations including Slack and ServiceNow. If your tenant spans multiple modules, we scope the engagement around your full data model.' },
  { q: 'How is Kovil AI different from a traditional Workday systems integrator?', a: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team, under one Engagement Manager who audits every milestone — with a 2-week risk-free trial and no long-term lock-in.' },
  { q: 'Can we extend a trial engagement or convert it to a long-term hire?', a: 'Yes. Most clients extend the engagement as new modules or Illuminate use cases come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' },
  { q: 'Do you support Workday rescues or fixing a failing implementation?', a: 'Yes. A significant share of our Workday engagements start as a rescue — a tenant with years of business process debt or an integration that never worked. We audit the configuration and integrations, then stabilize and rebuild in milestone-gated phases.' },
]

const integrations = [
  'Workday Studio', 'EIB (Enterprise Interface Builder)', 'Workday REST API', 'Workday SOAP API', 'Illuminate', 'Business Process Framework',
  'Security Groups', 'Adaptive Planning', 'Prism Analytics', 'Slack', 'ServiceNow', 'Webhooks',
  'SSO/SAML', 'Custom Reports', 'Workday Extend', 'Marketplace Apps',
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
  { label: 'HCM', color: WD },
  { label: 'Financials', color: '#6FA8DC' },
  { label: 'Payroll', color: WD },
  { label: 'Adaptive Planning', color: '#6FA8DC' },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0C2340 0%, #0A1D33 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${WD}33` }} />
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Workday</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: WD, opacity: 0.4 }} />
            <PlatformLogoBadge slug="workday" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${WD}, #0559A8)` }}
            >
              <Briefcase className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">Workday Suite</p>
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
            <p className="font-display font-bold text-sm text-white mb-1">Illuminate AI</p>
            <p className="text-xs text-white/50 leading-snug">Autonomous agents, live in weeks</p>
          </div>
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #0B2038 0%, #071627 100%)', border: `1px solid ${WD}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${WD}, #0559A8)` }}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Specialist Talent</p>
            <p className="text-xs text-white/50 leading-snug">Consultants, devs, architects</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WorkdayPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Workday</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: WD }}>Workday Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
              Everything You Need to Run Workday —<br />
              <span className="text-accent">AI Agents, and the Talent to Build Them.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From Illuminate AI agents to integration developers, HCM consultants, and financial management specialists — Kovil AI is a single partner for the entire Workday suite. AI agent builds and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-workday-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Workday talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Workday?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Workday</strong> is a cloud platform for human capital management (HCM) and financial management, built around a shared data model spanning core HR, payroll, recruiting, learning, financial management, and Adaptive Planning (FP&A). On top of that platform sits <strong className="text-foreground">Illuminate</strong>, Workday's native AI layer, for building autonomous HR and finance agents. Most large organizations need both a properly configured tenant and, increasingly, AI agents built on it — exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Workday, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The enterprise standard for HR and finance — now with AI built into the core.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((s) => (
              <div key={s.label} className="border-t-2 border-accent/40 pt-4">
                <p className="font-display font-black text-4xl text-accent mb-2">{s.value}</p>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Workday</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI Agent Integration (Illuminate)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Autonomous agents built natively on Workday — configuring Illuminate across HCM and Financials, or building custom AI integrations grounded in your real tenant data.
            </p>
            <a href="#ai-agents">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${WD}40`, background: `${WD}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${WD}18`, border: `1px solid ${WD}40` }}>
              <Users className="h-5 w-5" style={{ color: WD }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted HCM consultants, integration developers, and financial management specialists, matched in 48 hours. For the tenant work that has to happen whether or not you're building AI agents yet.
            </p>
            <a href="#hire-workday-talent">
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
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">The Suite</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Workday Suite at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Workday is rarely one module — most real tenants span several of these, sharing one data model.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${WD}14`, border: `1px solid ${WD}30` }}>
                    <Icon className="h-5 w-5" style={{ color: WD }} />
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure which module to start with?</h3>
            <p className="text-sm text-muted-foreground">Tell us what's broken or missing on a 30-minute call — we'll scope the highest-impact fix first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI Agents on Workday */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI Agents on Workday</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your Workday Tenant</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From native Illuminate configuration to fully custom Studio integrations — here's what's possible.</p>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common automation patterns we build on Workday — illustrative examples, not specific client engagements.</p>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to scope an Illuminate AI agent?</h3>
            <p className="text-sm text-background/60">Book a free 30-minute architecture call. Live pilot in 2 weeks, risk-free.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Workday talent */}
      <section id="hire-workday-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: WD }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Workday Consultants, Developers & Illuminate Specialists</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every engineer is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${WD}14`, border: `1px solid ${WD}30` }}>
                    <Icon className="h-5 w-5" style={{ color: WD }} />
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Workday Talent: US Onsite vs. Remote</h3>
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
                    <td className="py-4 px-6 font-semibold" style={{ color: WD }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil engineer passes the same live build challenge and certification verification below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Workday Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Workday Talent</h2>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Workday Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Workday?</h2>
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
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${WD}0A`, border: `1px solid ${WD}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need a Workday consultant, developer, or specialist?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${WD}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Workday</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/platforms/salesforce', label: 'Salesforce Platform', desc: 'Agentforce AI agents and Salesforce talent' },
            { href: '/platforms/microsoft-dynamics-365', label: 'Dynamics 365 Platform', desc: 'Copilot AI agents and D365 talent' },
            { href: '/platforms/netsuite', label: 'NetSuite Platform', desc: 'AI automation and NetSuite talent' },
            { href: '/staff-augmentation', label: 'Staff Augmentation', desc: 'Add vetted engineers without full-time overhead' },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Workday?</h2>
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
