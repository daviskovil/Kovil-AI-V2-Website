'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  Headphones, Megaphone, GitBranch, Award, Clock, CheckCircle2, ChevronDown,
  Briefcase, Settings, X, Minus, Building2, Cloud, Layers, Search,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { openCalendly } from '@/src/lib/calendly'

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match Salesforce talent' },
  { stat: '2 wks', label: 'To a live Agentforce pilot' },
  { stat: '4', label: 'Certified role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: '150,000+', label: 'companies run their business on Salesforce — more than any other CRM platform', src: 'Salesforce, 2026' },
  { value: '$1.6T', label: 'in new business revenue the Salesforce economy is projected to generate by 2026', src: 'IDC, commissioned by Salesforce' },
  { value: '9.3M', label: 'new jobs projected across the Salesforce ecosystem by 2026, most requiring certified skills', src: 'IDC, commissioned by Salesforce' },
  { value: '4–6 mo', label: 'average time to hire a senior Salesforce architect through traditional recruiting', src: 'Industry avg.' },
]

const clouds = [
  { icon: Workflow, title: 'Sales Cloud', desc: 'Pipeline, forecasting, and opportunity management — the system most Salesforce orgs are built around first.' },
  { icon: Headphones, title: 'Service Cloud', desc: 'Case management, omni-channel routing, and support automation, often the first place AI agents get deployed.' },
  { icon: Megaphone, title: 'Marketing Cloud', desc: 'Journeys, email, and campaign orchestration, unified with sales and service data instead of running in isolation.' },
  { icon: Database, title: 'Data Cloud', desc: "Salesforce's customer data platform — unifying records from every cloud and external system into one profile." },
  { icon: Layers, title: 'Experience Cloud', desc: 'Branded portals for customers, partners, and vendors, built on the same data and automation as internal Salesforce.' },
  { icon: GitBranch, title: 'MuleSoft', desc: "Salesforce's integration platform for connecting Salesforce to ERPs, legacy systems, and everything in between." },
]

const aiCapabilities = [
  { icon: Bot, title: 'Agentforce Service & Sales Agents', desc: 'Autonomous agents that resolve support cases, qualify leads, and take real actions inside your existing Salesforce data — built and deployed by our dedicated Agentforce practice.' },
  { icon: Zap, title: 'Custom Apex & LWC AI Integrations', desc: "AI features that don't fit a template — invoking LLMs from Apex, surfacing model output in Lightning Web Components, wired into your actual data model." },
  { icon: Database, title: 'Data Cloud Grounding for RAG', desc: "Retrieval-augmented AI agents grounded in your unified Data Cloud profile, so answers come from your real customer history, not a generic model guess." },
  { icon: GitBranch, title: 'MuleSoft-Connected Agents', desc: 'AI agents that reach beyond Salesforce — into ERPs, legacy databases, and internal tools — through MuleSoft integration you already have or that we build.' },
  { icon: ShieldCheck, title: 'Einstein Trust Layer Configuration', desc: "Governed AI within Salesforce's own trust boundary — data masking, audit trails, and toxicity detection configured correctly from day one, not bolted on after a security review." },
  { icon: Search, title: 'Agentforce Readiness & Scoping', desc: "Not sure where to start? We audit your org's data quality, automation, and permission model, then scope the single highest-impact Agentforce use case first." },
]

const caseStudies = [
  {
    industry: 'Telecommunications',
    headline: 'Agentforce Service Agent Automates 87% of Tier-1 Support for a Mid-Size Telecom Provider',
    metric1: { value: '87%', label: 'Fewer manual case creations' },
    metric2: { value: '24/7', label: 'Coverage, up from business hours only' },
    href: '/agentforce/case-studies/agentforce-telecom-service-automation',
  },
  {
    industry: 'Insurance / Healthcare',
    headline: 'Salesforce Data Cloud and Agentforce Build Member 360 for a Medicare Provider Serving 120K+ Members',
    metric1: { value: '42%', label: 'Less advisor data-lookup time' },
    metric2: { value: '120K+', label: 'Member profiles unified' },
    href: '/agentforce/case-studies/agentforce-medicare-insurance-ai',
  },
  {
    industry: 'Hospitality',
    headline: 'Agentforce and Data Cloud Cut Duplicate Leads by 85% for a Multi-Property Hotel Group',
    metric1: { value: '85%', label: 'Fewer duplicate guest records' },
    metric2: { value: '96%', label: 'Faster lead response time' },
    href: '/agentforce/case-studies/agentforce-hospitality-lead-management',
  },
]

const roles = [
  {
    icon: Settings,
    title: 'Salesforce Administrators',
    desc: 'Own day-to-day org health using declarative tools — Flow, page layouts, validation rules, permission sets, reports and dashboards — without writing code. Usually the first hire for any growing Salesforce org.',
    certs: ['Salesforce Certified Administrator', 'Platform App Builder'],
  },
  {
    icon: Code2,
    title: 'Salesforce Developers (Apex & LWC)',
    desc: 'Build custom functionality when declarative tools run out of road — Apex classes and triggers, Lightning Web Components, custom integrations, and complex automation logic.',
    certs: ['Platform Developer I', 'Platform Developer II'],
  },
  {
    icon: Briefcase,
    title: 'Salesforce Architects & Consultants',
    desc: 'Design the data model, integration strategy, and governance for large or multi-cloud implementations. The most senior and hardest-to-hire tier — typically owns the roadmap across Sales, Service, and Data Cloud.',
    certs: ['Application Architect', 'System Architect', 'Technical Architect (CTA)'],
  },
  {
    icon: Bot,
    title: 'Agentforce Specialists',
    desc: 'Configure and deploy Agentforce AI agents — Atlas Reasoning Engine setup, Prompt Builder, Einstein Trust Layer configuration, and grounding agents in Data Cloud. The newest and fastest-growing Salesforce specialization.',
    certs: ['Agentforce Specialist', 'Salesforce AI Associate'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'Salesforce Administrator', usOnsite: '$50 – $75/hr', remote: '$18 – $25/hr', savings: '~66% lower' },
  { role: 'Salesforce Developer (Apex/LWC)', usOnsite: '$75 – $110/hr', remote: '$25 – $35/hr', savings: '~68% lower' },
  { role: 'Senior Salesforce Developer', usOnsite: '$100 – $140/hr', remote: '$32 – $40/hr', savings: '~70% lower' },
  { role: 'Agentforce Specialist', usOnsite: '$130 – $190/hr', remote: '$35 – $45/hr', savings: '~75% lower' },
  { role: 'Salesforce Architect / CTA', usOnsite: '$150 – $250/hr', remote: '$38 – $45/hr', savings: '~79% lower' },
]

const vettingCriteria = [
  { title: 'Live Apex & LWC Build Challenge', desc: 'Build a working feature against a realistic spec under time pressure — trigger logic, governor-limit awareness, and Lightning component design, not a take-home nobody reviews.' },
  { title: 'Declarative-vs-Code Judgment', desc: "For admins and developers alike, we test the judgment call that separates senior from junior: when Flow is the right tool, and when it isn't." },
  { title: 'Certification Verification', desc: "We verify every claimed Salesforce certification directly, and don't stop there — certification proves baseline knowledge, not production judgment, so it's paired with the live build." },
  { title: 'Production Portfolio Review', desc: '2–3 real orgs or features they have shipped to production, reviewed for data model decisions, automation hygiene, and lessons from what broke.' },
]

const comparisonRows = [
  { dimension: 'Time to start', kovil: '24–48 hrs matched', fullTime: '4–6 months to hire', si: '6–12 weeks to mobilize', freelancer: '1–2 weeks, unvetted' },
  { dimension: 'Certification verified', kovil: 'yes', fullTime: 'self-reported', si: 'yes', freelancer: 'self-reported' },
  { dimension: 'Single accountable owner', kovil: 'yes', fullTime: 'yes', si: 'no', freelancer: 'yes' },
  { dimension: 'Delivery oversight', kovil: 'Engagement Manager audits every milestone', fullTime: 'depends on your management capacity', si: 'account manager, not technical', freelancer: 'none' },
  { dimension: 'Risk-free trial', kovil: 'yes', fullTime: 'no', si: 'no', freelancer: 'rare' },
  { dimension: 'IP ownership', kovil: '100% yours', fullTime: '100% yours', si: 'often shared', freelancer: 'varies' },
]

const forWho = [
  { title: 'RevOps & Sales Leaders', desc: "Your pipeline data lives in Salesforce but your reporting, forecasting, and automation haven't kept up with how the team actually sells. Get an admin or developer who can fix it without a 6-month SI engagement." },
  { title: 'IT Teams Stretched Thin', desc: 'One admin is covering three clouds and a backlog nobody has time to touch. Add a vetted Salesforce specialist in days, scoped to exactly the workload you need covered.' },
  { title: 'Teams Mid-Implementation', desc: "Your Salesforce rollout stalled, or your Agentforce pilot never made it to production. We audit what's there and take over in milestone-gated phases — not a risky rewrite from zero." },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Org', desc: 'Tell us which clouds you run, what\'s broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.' },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted Salesforce specialists (or an Agentforce scoping call) matched to your clouds and stack. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: 'Before any work starts, you agree the org access, integration points, and success metrics — so day one has a clear target, not a vague ramp-up.' },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or AI agent build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new clouds or workflows come online, extend the engagement, or wind down — no lock-in. You stay because it works, not because you signed a year.' },
]

const faqs = [
  { q: 'What is the Salesforce platform?', a: "Salesforce is the world's leading customer relationship management (CRM) platform, built around a unified data model that spans sales, service, marketing, commerce, and now AI agents. Rather than a single application, Salesforce is a suite of connected \"clouds\" — Sales Cloud for pipeline and forecasting, Service Cloud for support and case management, Marketing Cloud for campaigns and journeys, Data Cloud for unifying customer data, and Experience Cloud for partner and customer portals — all built on the same underlying platform (Apex, Lightning Web Components, and Salesforce Flow) so data, automation, and now AI agents can move across every department without duplicate systems or manual syncing." },
  { q: 'What is the difference between Salesforce and Agentforce?', a: "Salesforce is the underlying CRM platform; Agentforce is Salesforce's native AI agent layer, built on top of it. Agentforce lets you configure autonomous AI agents — using the Atlas Reasoning Engine, Einstein Trust Layer, and Prompt Builder — that can resolve support cases, qualify leads, and execute actions directly inside your existing Salesforce data and workflows. If you're specifically looking to design and deploy Agentforce AI agents, our dedicated Agentforce practice at kovil.ai/agentforce covers that in depth — services, industries, pricing, and 14+ real deployment case studies. This page covers the full Salesforce platform: the clouds, the integrations, and the specialist talent who keep it running." },
  { q: 'Does Kovil AI build custom AI agents on Salesforce, or only staff talent?', a: 'Both, and they\'re often the same engagement. Many clients start by hiring a Salesforce developer or admin to stabilize or extend their org, then bring in our Agentforce team to layer AI agents on top of the data and automation that talent has already built — or the reverse, starting with an AI agent pilot and adding dedicated talent once it\'s proven out.' },
  { q: 'How much does it cost to hire a Salesforce developer through Kovil AI?', a: "Kovil AI's remote Salesforce talent bills $18-$45 per hour depending on role and experience, versus $50-$250+ per hour for prevailing US onsite rates for the same roles — typically 65-79% lower, at the same certification bar. See the full role-by-role rate comparison further up this page." },
  { q: 'What is the difference between a Salesforce Administrator, Developer, and Architect?', a: "A Salesforce Administrator configures the platform using declarative tools — Flow, page layouts, validation rules, permission sets — without writing code, and typically owns day-to-day org health. A Salesforce Developer builds custom functionality with Apex and Lightning Web Components when declarative tools aren't enough. A Salesforce Architect designs the overall data model, integration strategy, and governance for large or multi-cloud implementations, and is typically the most senior and hardest-to-hire of the three." },
  { q: 'How quickly can I hire a Salesforce specialist through Kovil AI?', a: 'Most clients are matched with a vetted Salesforce admin, developer, or architect within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement.' },
  { q: 'Do your Salesforce engineers hold official Salesforce certifications?', a: 'Yes. We verify Salesforce certifications directly as part of vetting — Administrator, Platform App Builder, Platform Developer I & II, Application Architect, System Architect, and cloud-specific consultant certifications — alongside a live technical assessment, since certification alone does not test real production judgment.' },
  { q: 'Can Kovil AI integrate Salesforce with other systems like MuleSoft, NetSuite, or Slack?', a: 'Yes. Our Salesforce talent and Forward Deployed Engineers regularly build integrations using MuleSoft, native Salesforce APIs (REST/SOAP), Slack, DocuSign, and NetSuite — connecting Salesforce to whatever else your business runs on, not just the systems Salesforce ships out of the box.' },
  { q: 'Who owns the code, configurations, and integrations built during an engagement?', a: 'You do, 100%. All Apex code, Lightning components, Flow automations, integrations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no carve-outs, no shared IP, and no lock-in.' },
  { q: 'Can I combine an Agentforce AI agent build with Salesforce staff augmentation in one engagement?', a: 'Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an Agentforce AI agent build (scoped through kovil.ai/agentforce) alongside dedicated Salesforce admin or developer talent working in the same org, so the AI agent and the underlying data model are built by people talking to each other daily, not two disconnected vendors.' },
  { q: 'What Salesforce clouds does Kovil AI have experience with?', a: 'Sales Cloud, Service Cloud, Marketing Cloud, Data Cloud, Experience Cloud, and Salesforce CPQ, plus native and third-party integrations including MuleSoft, Slack, Tableau, and Agentforce. If your implementation spans multiple clouds, we scope the engagement around your full data model, not just one department\'s instance.' },
  { q: 'How is Kovil AI different from a traditional Salesforce systems integrator or partner agency?', a: "Traditional SIs typically scope a fixed project, hand it to a rotating bench of consultants, and move to the next client. Kovil AI embeds a single accountable engineer or small pod directly with your team, under one Engagement Manager who audits every milestone — with a 2-week risk-free trial and no long-term lock-in." },
  { q: 'Can we extend a trial engagement or convert it to a long-term hire?', a: 'Yes. Most clients extend the engagement as new Salesforce workflows or AI agent use cases come online, scale to a small embedded pod, or wind down once the work is stable and handed off to their own team. There is no minimum lock-in in either direction.' },
  { q: 'Do you support Salesforce org rescues or fixing a failing implementation?', a: 'Yes. A significant share of our Salesforce engagements start as a rescue — an org with years of technical debt, a stalled Agentforce pilot, or an integration that never worked. We audit the data model, automation, and code, then stabilize and rebuild in milestone-gated phases rather than a risky big-bang rewrite.' },
]

const integrations = [
  'Apex', 'Lightning Web Components', 'Salesforce Flow', 'Salesforce CPQ', 'MuleSoft', 'Data Cloud',
  'Agentforce', 'Einstein AI', 'Slack API', 'Tableau', 'Salesforce DX', 'REST & SOAP APIs',
  'DocuSign', 'NetSuite', 'Experience Cloud', 'Heroku',
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
          {/* Always rendered (not conditionally mounted) so the full answer text is in the
              initial HTML for crawlers — only visibility is toggled. Google explicitly treats
              CSS-hidden accordion content as indexable, unlike content that never mounts. */}
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

const cloudChips = [
  { label: 'Sales Cloud', color: '#00A1E0' },
  { label: 'Service Cloud', color: '#FF4F00' },
  { label: 'Marketing Cloud', color: '#00A1E0' },
  { label: 'Data Cloud', color: '#FF4F00' },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #061826 0%, #0A0F16 55%, #0A0A0D 100%)' }}
    >
      {/* Ambient glow + texture */}
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: '#00A1E033' }} />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full blur-3xl" style={{ background: '#FF4F0022' }} />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '18px 18px', color: '#FFFFFF' }}
      />

      <div className="relative flex flex-col gap-6">
        {/* Live badge */}
        <div className="flex items-center gap-2 self-start rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#4ADE80' }} />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#4ADE80' }} />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Salesforce</span>
        </div>

        {/* Central platform node */}
        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: '#00A1E0', opacity: 0.4 }} />
            <div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: 'linear-gradient(135deg, #00A1E0, #0077A8)' }}
            >
              <Cloud className="h-8 w-8 text-white" />
            </div>
          </div>
          <p className="font-display font-bold text-white text-lg">Salesforce Platform</p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
            {cloudChips.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/70 bg-white/5 border border-white/10 rounded-full px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.color }} />
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Animated connector */}
        <div className="relative h-8 flex items-center justify-center">
          <div className="h-full w-px" style={{ background: 'linear-gradient(to bottom, #ffffff30, transparent)' }} />
          <div className="absolute top-0 h-1.5 w-1.5 rounded-full bg-white/80 animate-bounce" />
        </div>

        {/* Destination cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #2A1408 0%, #150A05 100%)', border: '1px solid #FF4F0040' }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: 'linear-gradient(135deg, #FF4F00, #C43D00)' }}>
              <Bot className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Agentforce AI</p>
            <p className="text-xs text-white/50 leading-snug">Autonomous agents, live in weeks</p>
          </div>
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #06222E 0%, #051318 100%)', border: '1px solid #00A1E040' }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: 'linear-gradient(135deg, #00A1E0, #0077A8)' }}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Specialist Talent</p>
            <p className="text-xs text-white/50 leading-snug">Admins, devs, architects</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SalesforcePlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Salesforce</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#00A1E0] uppercase tracking-widest mb-4">Salesforce Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
              Everything You Need to Run Salesforce —<br />
              <span className="text-accent">AI Agents, and the Talent to Build Them.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From Agentforce AI agents to Apex developers, admins, and architects — Kovil AI is a single partner for the entire Salesforce ecosystem. AI agent builds are scoped through our dedicated <Link href="/agentforce" className="text-accent hover:underline font-medium">Agentforce practice</Link>. Specialist talent, matched in 48 hours, is right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-salesforce-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Salesforce talent
                </Button>
              </a>
            </div>
          </div>
          <HeroGraphic />
        </div>

        {/* Hero stats */}
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is the Salesforce Platform?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Salesforce</strong> is the world's leading customer relationship management (CRM) platform — a suite of connected clouds (Sales, Service, Marketing, Data, and Experience Cloud) built on one underlying data model, so information and automation move across every department without duplicate systems. On top of that platform sits <strong className="text-foreground">Agentforce</strong>, Salesforce's native layer for building autonomous AI agents that act on your real data. Most companies need both a properly run Salesforce org and, increasingly, AI agents built on it — which is exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Salesforce, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The dominant CRM platform is now also the fastest-growing enterprise AI agent platform.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Salesforce</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI Agent Integration (Agentforce)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Autonomous agents built natively on Salesforce — reading and writing through Agentforce, the Atlas Reasoning Engine, and your real Data Cloud profile. This is scoped and delivered through our dedicated Agentforce practice, with 14+ published case studies across telecom, healthcare, hospitality, real estate, and more.
            </p>
            <Link href="/agentforce">
              <Button variant="accent" size="sm" className="rounded-full">
                Explore Agentforce services <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
          <div className="rounded-2xl border border-[#00A1E0]/25 bg-[#00A1E0]/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-[#00A1E0]/10 border border-[#00A1E0]/25 flex items-center justify-center mb-5">
              <Users className="h-5 w-5" style={{ color: '#00A1E0' }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted Salesforce administrators, developers, and architects, matched in 48 hours. For the org work that has to happen whether or not you're building AI agents yet — automation, integrations, data hygiene, and the backlog nobody has time for.
            </p>
            <a href="#hire-salesforce-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Salesforce Ecosystem at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Salesforce is rarely one thing — most real implementations span several of these, sharing one data model.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clouds.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 hover:border-[#00A1E0]/40 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: '#00A1E012', border: '1px solid #00A1E030' }}>
                    <Icon className="h-5 w-5" style={{ color: '#00A1E0' }} />
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure which cloud to start with?</h3>
            <p className="text-sm text-muted-foreground">Tell us what's broken or missing on a 30-minute call — we'll scope the highest-impact fix first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI Agents on Salesforce */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI Agents on Salesforce</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your Salesforce Org</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Deep implementation detail, pricing, and industry playbooks live at our dedicated Agentforce practice — here's what's possible at a glance.</p>
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

        {/* Divider */}
        <div className="h-px w-full bg-border my-12" />

        <h3 className="font-display font-bold text-2xl mb-2">Proof, Not Promises</h3>
        <p className="text-muted-foreground max-w-2xl mb-8">Three of 14+ published Agentforce deployments, each built on real Salesforce data.</p>
        <div className="grid md:grid-cols-3 gap-6">
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
          <Link href="/agentforce/case-studies" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
            See all Agentforce case studies <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Mid CTA #2 */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="rounded-2xl bg-foreground text-background p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to scope an Agentforce AI agent?</h3>
            <p className="text-sm text-background/60">Book a free 30-minute architecture call. Live pilot in 2 weeks, risk-free.</p>
          </div>
          <Link href="/agentforce">
            <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0">Visit the Agentforce Practice <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* Salesforce talent */}
      <section id="hire-salesforce-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-[#00A1E0] uppercase tracking-widest mb-3">Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Salesforce Administrators, Developers, Architects & Agentforce Specialists</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every engineer is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: '#00A1E012', border: '1px solid #00A1E030' }}>
                    <Icon className="h-5 w-5" style={{ color: '#00A1E0' }} />
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

          {/* Divider */}
          <div className="h-px w-full bg-border mb-14" />

          {/* Rate comparison table */}
          <h3 className="font-display font-bold text-2xl mb-2">Hiring Salesforce Talent: US Onsite vs. Remote</h3>
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
                    <td className="py-4 px-6 font-semibold text-[#00A1E0]">{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil engineer passes the same live build challenge and certification verification below, regardless of location.</p>

          {/* Divider */}
          <div className="h-px w-full bg-border mb-14" />

          {/* Vetting */}
          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Salesforce Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Salesforce Talent</h2>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Salesforce Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Salesforce?</h2>
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
        <div className="rounded-2xl bg-[#00A1E0]/5 border border-[#00A1E0]/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need a Salesforce admin, developer, or architect?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0 border-[#00A1E0]/30 hover:bg-[#00A1E0]/10">Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About the Salesforce Platform</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/agentforce', label: 'Agentforce AI Agents', desc: 'Deep implementation, pricing, and 14+ case studies' },
            { href: '/staff-augmentation', label: 'Staff Augmentation', desc: 'Add vetted engineers without full-time overhead' },
            { href: '/platforms', label: 'All Platform Integrations', desc: 'HubSpot, ServiceNow, NetSuite, and 35 more' },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Salesforce?</h2>
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
