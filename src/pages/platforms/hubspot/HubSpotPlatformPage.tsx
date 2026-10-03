'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  Headphones, Megaphone, GitBranch, Award, Clock, CheckCircle2, ChevronDown,
  Briefcase, Settings, X, Minus, Layers, ShoppingCart, Search,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const HS = '#FF7A59' // HubSpot Orange
const HS_DARK = '#33475B' // HubSpot Eggplant (dark navy)

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match HubSpot talent' },
  { stat: '2 wks', label: 'To a live Breeze AI pilot' },
  { stat: '4', label: 'Certified role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: '258,000+', label: 'companies run their business on HubSpot across 135+ countries', src: 'HubSpot, 2026' },
  { value: '1,500+', label: 'apps in the HubSpot ecosystem extending Marketing, Sales, and Service Hub', src: 'HubSpot App Marketplace' },
  { value: '#1', label: 'rated CRM platform for small and mid-market businesses', src: 'G2, 2026' },
  { value: '4–6 mo', label: 'average time to hire a senior RevOps/HubSpot architect through traditional recruiting', src: 'Industry avg.' },
]

const hubs = [
  { icon: Megaphone, title: 'Marketing Hub', desc: 'Email, landing pages, SEO, and campaign automation — the Hub most portals are built around first.' },
  { icon: Workflow, title: 'Sales Hub', desc: 'Pipeline, deal automation, quotes, and forecasting, unified with every marketing touchpoint on the same contact record.' },
  { icon: Headphones, title: 'Service Hub', desc: 'Ticketing, help desk, and customer feedback, often the first place Breeze AI agents get deployed.' },
  { icon: Layers, title: 'Content Hub (CMS)', desc: "HubSpot's website and content management system, built on the same CRM data as every other Hub." },
  { icon: Zap, title: 'Operations Hub', desc: 'Data sync, custom workflows, and programmable automation connecting HubSpot to the rest of your stack.' },
  { icon: ShoppingCart, title: 'Commerce Hub', desc: 'Invoicing, payments, and subscription billing, native to the CRM instead of bolted on through a third party.' },
]

const aiCapabilities = [
  { icon: Bot, title: 'Breeze Copilot & Agents', desc: "Configure HubSpot's native AI layer — Breeze Copilot for in-app assistance and Breeze Agents for autonomous prospecting, content, and customer-service workflows — grounded in your real CRM data." },
  { icon: Zap, title: 'Custom Workflow AI Actions', desc: "AI steps that don't fit a template — calling an LLM from inside a HubSpot workflow, scoring leads with custom logic, wired into your actual pipeline stages." },
  { icon: Database, title: 'Operations Hub Data Sync', desc: 'Bi-directional sync and custom-coded workflows that keep HubSpot as the single source of truth across your sales, support, and billing systems.' },
  { icon: GitBranch, title: 'Cross-Platform Agent Integrations', desc: 'AI agents that reach beyond HubSpot — into Salesforce, Slack, Stripe, and internal tools — through the HubSpot API or custom middleware we build.' },
  { icon: ShieldCheck, title: 'Data Quality & Permission Audits', desc: 'AI agents are only as good as the CRM data behind them — we audit deduplication, property hygiene, and permission sets before anything goes live.' },
  { icon: Search, title: 'Breeze Readiness & Scoping', desc: 'Not sure where to start? We audit your portal, workflows, and data quality, then scope the single highest-impact Breeze AI use case first.' },
]

const caseStudies = [
  {
    industry: 'Sales / B2B Manufacturing',
    headline: 'Five AI Agents, One Automated B2B Pipeline — HubSpot CRM Updates Itself From Every Interaction',
    metric1: { value: '3×', label: 'More pipeline, same headcount' },
    metric2: { value: '97%', label: 'HubSpot data completeness, up from 60%' },
    href: '/case-studies/ai-powered-lead-generation',
  },
  {
    industry: 'SaaS / B2B',
    headline: '80% of Manual Approval Workflows Eliminated in 6 Weeks, HubSpot Wired Into the Automation Layer',
    metric1: { value: '$120K', label: 'Annual savings, fully documented' },
    metric2: { value: '80%', label: 'Workflows automated hands-off' },
    href: '/case-studies/saas-workflow-automation',
  },
]

const roles = [
  {
    icon: Settings,
    title: 'HubSpot Administrators',
    desc: 'Own day-to-day portal health using declarative tools — workflows, properties, permission sets, reports and dashboards — without writing code. Usually the first hire for any growing HubSpot portal.',
    certs: ['HubSpot Inbound Certification', 'HubSpot Marketing Software'],
  },
  {
    icon: Code2,
    title: 'HubSpot Developers (CMS/HubL/API)',
    desc: 'Build custom functionality when declarative tools run out of road — HubL templates, custom modules, private apps, and API integrations.',
    certs: ['CMS for Developers', 'HubSpot APIs'],
  },
  {
    icon: Briefcase,
    title: 'RevOps & Solutions Architects',
    desc: 'Design the data model, Hub-to-Hub integration strategy, and lifecycle stage governance for multi-Hub portals. The most senior and hardest-to-hire tier.',
    certs: ['RevOps Certification', 'Solutions Architecture'],
  },
  {
    icon: Bot,
    title: 'Breeze AI Specialists',
    desc: "Configure and deploy Breeze AI — Copilot setup, Breeze Agents for prospecting and service, and custom AI workflow actions grounded in your CRM data. The newest and fastest-growing HubSpot specialization.",
    certs: ['Breeze AI Certification', 'AI for Marketers'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'HubSpot Administrator', usOnsite: '$45 – $65/hr', remote: '$18 – $24/hr', savings: '~62% lower' },
  { role: 'HubSpot Developer (CMS/HubL)', usOnsite: '$70 – $100/hr', remote: '$24 – $32/hr', savings: '~67% lower' },
  { role: 'Breeze AI Specialist', usOnsite: '$90 – $140/hr', remote: '$30 – $40/hr', savings: '~70% lower' },
  { role: 'RevOps & Solutions Architect', usOnsite: '$110 – $160/hr', remote: '$32 – $42/hr', savings: '~73% lower' },
]

const vettingCriteria = [
  { title: 'Live HubL & Workflow Build Challenge', desc: 'Build a working module or workflow against a realistic spec under time pressure — HubL templating, API calls, and workflow branching logic, not a take-home nobody reviews.' },
  { title: 'Declarative-vs-Code Judgment', desc: "For admins and developers alike, we test the judgment call that separates senior from junior: when a native workflow is the right tool, and when custom code is." },
  { title: 'Certification Verification', desc: "We verify every claimed HubSpot Academy certification directly, and don't stop there — certification proves baseline knowledge, not production judgment, so it's paired with the live build." },
  { title: 'Production Portfolio Review', desc: '2–3 real portals or features they have shipped to production, reviewed for data model decisions, workflow hygiene, and lessons from what broke.' },
]

const comparisonRows = [
  { dimension: 'Time to start', kovil: '24–48 hrs matched', fullTime: '4–6 months to hire', si: '4–8 weeks to mobilize', freelancer: '1–2 weeks, unvetted' },
  { dimension: 'Certification verified', kovil: 'yes', fullTime: 'self-reported', si: 'yes', freelancer: 'self-reported' },
  { dimension: 'Single accountable owner', kovil: 'yes', fullTime: 'yes', si: 'no', freelancer: 'yes' },
  { dimension: 'Delivery oversight', kovil: 'Engagement Manager audits every milestone', fullTime: 'depends on your management capacity', si: 'account manager, not technical', freelancer: 'none' },
  { dimension: 'Risk-free trial', kovil: 'yes', fullTime: 'no', si: 'no', freelancer: 'rare' },
  { dimension: 'IP ownership', kovil: '100% yours', fullTime: '100% yours', si: 'often shared', freelancer: 'varies' },
]

const forWho = [
  { title: 'Marketing & RevOps Leaders', desc: "Your pipeline data lives in HubSpot but your lifecycle stages, attribution, and automation haven't kept up with how the team actually sells. Get an admin or developer who can fix it without a lengthy agency engagement." },
  { title: 'Small IT/Ops Teams', desc: 'One person is covering four Hubs and a backlog nobody has time to touch. Add a vetted HubSpot specialist in days, scoped to exactly the workload you need covered.' },
  { title: 'Teams Mid-Migration', desc: 'Your migration onto HubSpot stalled, or your Breeze AI pilot never made it to production. We audit what\'s there and take over in milestone-gated phases — not a risky rewrite from zero.' },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Portal', desc: 'Tell us which Hubs you run, what\'s broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.' },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted HubSpot specialists (or a Breeze AI scoping call) matched to your Hubs and stack. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: "Before any work starts, you agree the portal access, integration points, and success metrics — so day one has a clear target, not a vague ramp-up." },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or AI agent build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new Hubs or workflows come online, extend the engagement, or wind down — no lock-in. You stay because it works, not because you signed a year.' },
]

const faqs = [
  { q: 'What is HubSpot?', a: 'HubSpot is a leading all-in-one customer platform built around six connected "Hubs" — Marketing Hub, Sales Hub, Service Hub, Content Hub (CMS), Operations Hub, and Commerce Hub — sharing one CRM data model so campaigns, pipeline, and support all read from the same customer record. On top of that platform sits Breeze, HubSpot\'s native AI layer, for building AI-powered marketing, sales, and service workflows.' },
  { q: 'What is the difference between HubSpot and Breeze AI?', a: "HubSpot is the underlying CRM and Hub platform; Breeze is HubSpot's native AI layer, built on top of it. Breeze Copilot assists inside the app, while Breeze Agents work autonomously — prospecting, drafting content, and resolving service tickets — grounded in your real CRM data. Kovil AI configures Breeze AI natively and, when the built-in agents aren't enough, builds custom AI workflow actions on top." },
  { q: 'Does Kovil AI build custom AI agents on HubSpot, or only staff talent?', a: "Both, and they're often the same engagement. Many clients start by hiring a HubSpot developer or admin to clean up their portal, then layer Breeze AI agents and custom workflow automation on top of the data that talent has already fixed — or the reverse, starting with an AI pilot and adding dedicated talent once it's proven out." },
  { q: 'How much does it cost to hire a HubSpot developer through Kovil AI?', a: "Kovil AI's remote HubSpot talent bills $18-$42 per hour depending on role and experience, versus $45-$160+ per hour for prevailing US onsite rates for the same roles — typically 62-73% lower, at the same certification bar. See the full role-by-role rate comparison further up this page." },
  { q: 'What is the difference between a HubSpot Administrator, Developer, and Solutions Architect?', a: 'A HubSpot Administrator configures the portal using declarative tools — workflows, properties, permission sets — without writing code. A HubSpot Developer builds custom functionality with HubL, custom modules, and the HubSpot API when declarative tools aren\'t enough. A RevOps & Solutions Architect designs the overall data model and Hub-to-Hub integration strategy for larger, multi-Hub portals, and is typically the most senior and hardest-to-hire of the three.' },
  { q: 'How quickly can I hire a HubSpot specialist through Kovil AI?', a: 'Most clients are matched with a vetted HubSpot admin, developer, or RevOps architect within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement.' },
  { q: 'Do your HubSpot engineers hold official HubSpot certifications?', a: 'Yes. We verify HubSpot Academy certifications directly as part of vetting — Inbound, Marketing Software, CMS for Developers, HubSpot APIs, RevOps, and Breeze AI — alongside a live technical assessment, since certification alone does not test real production judgment.' },
  { q: 'Can Kovil AI integrate HubSpot with other systems like Salesforce, Slack, or Stripe?', a: 'Yes. Our HubSpot talent regularly builds integrations using the HubSpot API, native Salesforce sync, Slack, Stripe, and custom middleware via Operations Hub — connecting HubSpot to whatever else your business runs on, not just the native integrations in the App Marketplace.' },
  { q: 'Who owns the code, workflows, and integrations built during an engagement?', a: 'You do, 100%. All custom code, modules, workflows, integrations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no carve-outs, no shared IP, and no lock-in.' },
  { q: 'Can I combine a Breeze AI agent build with HubSpot staff augmentation in one engagement?', a: 'Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate a Breeze AI build alongside dedicated HubSpot admin or developer talent working in the same portal, so the AI agent and the underlying data model are built by people talking to each other daily, not two disconnected vendors.' },
  { q: 'What HubSpot Hubs does Kovil AI have experience with?', a: 'Marketing Hub, Sales Hub, Service Hub, Content Hub (CMS), Operations Hub, and Commerce Hub, plus native and third-party integrations including Salesforce, Slack, and Stripe. If your portal spans multiple Hubs, we scope the engagement around your full data model, not just one team\'s instance.' },
  { q: 'How is Kovil AI different from a traditional HubSpot agency or Solutions Partner?', a: 'Traditional agencies typically scope a fixed retainer, hand it to a rotating bench of consultants, and optimize for billable hours. Kovil AI embeds a single accountable engineer or small pod directly with your team, under one Engagement Manager who audits every milestone — with a 2-week risk-free trial and no long-term lock-in.' },
  { q: 'Can we extend a trial engagement or convert it to a long-term hire?', a: 'Yes. Most clients extend the engagement as new Hubs or AI agent use cases come online, scale to a small embedded pod, or wind down once the work is stable and handed off to their own team. There is no minimum lock-in in either direction.' },
  { q: 'Do you support HubSpot portal rescues or fixing a messy implementation?', a: 'Yes. A significant share of our HubSpot engagements start as a rescue — a portal with years of duplicate properties, broken workflows, or a stalled migration. We audit the data model, automation, and integrations, then stabilize and rebuild in milestone-gated phases rather than a risky big-bang rewrite.' },
]

const integrations = [
  'HubL', 'HubSpot API', 'Private Apps', 'Custom Objects', 'Workflows', 'Operations Hub',
  'Breeze AI', 'Content Hub (CMS)', 'Salesforce Sync', 'Slack', 'Stripe', 'Zapier',
  'Google Ads API', 'Webhooks', 'Reporting API', 'Marketplace Apps',
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

const hubChips = [
  { label: 'Marketing Hub', color: HS },
  { label: 'Sales Hub', color: HS_DARK },
  { label: 'Service Hub', color: HS },
  { label: 'Operations Hub', color: HS_DARK },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1F2B38 0%, #141C24 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: '#FF7A5933' }} />
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on HubSpot</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: HS, opacity: 0.4 }} />
            <PlatformLogoBadge slug="hubspot" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${HS}, #C6552F)` }}
            >
              <Layers className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">HubSpot Platform</p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
            {hubChips.map((c) => (
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
            <p className="font-display font-bold text-sm text-white mb-1">Breeze AI</p>
            <p className="text-xs text-white/50 leading-snug">Autonomous agents, live in weeks</p>
          </div>
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #2A1D12 0%, #18120A 100%)', border: `1px solid ${HS}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${HS}, #C6552F)` }}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Specialist Talent</p>
            <p className="text-xs text-white/50 leading-snug">Admins, devs, RevOps</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HubSpotPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">HubSpot</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: HS }}>HubSpot Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
              Everything You Need to Run HubSpot —<br />
              <span className="text-accent">AI Agents, and the Talent to Build Them.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From Breeze AI agents to HubL developers, admins, and RevOps architects — Kovil AI is a single partner for the entire HubSpot ecosystem. AI agent builds and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-hubspot-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire HubSpot talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is HubSpot?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">HubSpot</strong> is a leading all-in-one customer platform built around six connected "Hubs" — Marketing, Sales, Service, Content (CMS), Operations, and Commerce — sharing one CRM data model so campaigns, pipeline, and support all read from the same customer record. On top of that platform sits <strong className="text-foreground">Breeze</strong>, HubSpot's native AI layer, for building AI-powered marketing, sales, and service workflows. Most companies need both a properly run HubSpot portal and, increasingly, AI agents built on it — exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why HubSpot, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The top-rated SMB CRM is now also a serious AI agent platform.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on HubSpot</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI Agent Integration (Breeze AI)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Autonomous agents built natively on HubSpot — configuring Breeze Copilot and Breeze Agents, or building custom AI workflow actions grounded in your real CRM data.
            </p>
            <a href="#ai-agents">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${HS}40`, background: `${HS}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${HS}18`, border: `1px solid ${HS}40` }}>
              <Users className="h-5 w-5" style={{ color: HS_DARK }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted HubSpot administrators, developers, and RevOps architects, matched in 48 hours. For the portal work that has to happen whether or not you're building AI agents yet.
            </p>
            <a href="#hire-hubspot-talent">
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
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">The Ecosystem</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The HubSpot Ecosystem at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">HubSpot is rarely one Hub — most real portals span several of these, sharing one CRM data model.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors" style={{ borderColor: undefined }}>
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${HS}14`, border: `1px solid ${HS}30` }}>
                    <Icon className="h-5 w-5" style={{ color: HS_DARK }} />
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure which Hub to start with?</h3>
            <p className="text-sm text-muted-foreground">Tell us what's broken or missing on a 30-minute call — we'll scope the highest-impact fix first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI Agents on HubSpot */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI Agents on HubSpot</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your HubSpot Portal</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From native Breeze AI configuration to fully custom workflow automation — here's what's possible.</p>
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

        <h3 className="font-display font-bold text-2xl mb-2">Proof, Not Promises</h3>
        <p className="text-muted-foreground max-w-2xl mb-8">Two real engagements where HubSpot was the CRM of record, pulled from our published case studies.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link href={cs.href} className="group flex flex-col h-full rounded-2xl border border-border bg-background p-6 hover:border-accent/40 hover:shadow-lg transition-all">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-accent mb-3">{cs.industry}</span>
                <h4 className="font-display font-bold text-base leading-snug mb-4 group-hover:text-accent transition-colors">{cs.headline}</h4>
                <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-border/60">
                  <div>
                    <p className="font-display font-black text-2xl text-accent">{cs.metric1.value}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">{cs.metric1.label}</p>
                  </div>
                  <div>
                    <p className="font-display font-black text-2xl text-foreground">{cs.metric2.value}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">{cs.metric2.label}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
            See all case studies <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Mid CTA #2 */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="rounded-2xl bg-foreground text-background p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to scope a Breeze AI agent?</h3>
            <p className="text-sm text-background/60">Book a free 30-minute architecture call. Live pilot in 2 weeks, risk-free.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* HubSpot talent */}
      <section id="hire-hubspot-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: HS_DARK }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire HubSpot Administrators, Developers, RevOps Architects & Breeze AI Specialists</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every engineer is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${HS}14`, border: `1px solid ${HS}30` }}>
                    <Icon className="h-5 w-5" style={{ color: HS_DARK }} />
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring HubSpot Talent: US Onsite vs. Remote</h3>
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
                    <td className="py-4 px-6 font-semibold" style={{ color: HS_DARK }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil engineer passes the same live build challenge and certification verification below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every HubSpot Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire HubSpot Talent</h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-44"></th>
                <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Full-Time Hire</th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Agency / Partner</th>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">HubSpot Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on HubSpot?</h2>
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
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${HS}0A`, border: `1px solid ${HS}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need a HubSpot admin, developer, or RevOps architect?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${HS}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About the HubSpot Platform</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/platforms/salesforce', label: 'Salesforce Platform', desc: 'Agentforce AI agents and Salesforce talent' },
            { href: '/staff-augmentation', label: 'Staff Augmentation', desc: 'Add vetted engineers without full-time overhead' },
            { href: '/platforms', label: 'All Platform Integrations', desc: 'ServiceNow, NetSuite, Pipedrive, and 34 more' },
            { href: '/hire', label: 'Hire an AI Engineer', desc: 'Browse every specialist role we staff' },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on HubSpot?</h2>
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
