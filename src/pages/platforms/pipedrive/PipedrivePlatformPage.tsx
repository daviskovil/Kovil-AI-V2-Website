'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  Headphones, Megaphone, GitBranch, Clock, CheckCircle2, ChevronDown,
  Briefcase, Settings, X, Minus, TrendingUp, Search,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const PD = '#1F9D55' // Pipedrive Green
const PD_DARK = '#14251B'

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match Pipedrive talent' },
  { stat: '2 wks', label: 'To a live AI automation pilot' },
  { stat: '3', label: 'Specialist role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: '100,000+', label: 'companies run their sales process on Pipedrive worldwide', src: 'Pipedrive, 2026' },
  { value: '#1', label: 'rated CRM for ease of use among small and growing sales teams', src: 'G2, 2026' },
  { value: '500+', label: 'integrations and apps available via the Pipedrive Marketplace', src: 'Pipedrive Marketplace' },
  { value: '2–4 mo', label: 'average time to hire a dedicated Pipedrive/RevOps specialist through traditional recruiting', src: 'Industry avg.' },
]

const modules = [
  { icon: TrendingUp, title: 'Deals & Pipeline', desc: "Pipedrive's signature visual, drag-and-drop pipeline — the system every other module is built around." },
  { icon: Users, title: 'Contacts & Organizations', desc: 'Contact and company records with activity history, tightly linked to every deal they touch.' },
  { icon: Megaphone, title: 'Email Sync & Templates', desc: 'Two-way email sync, open tracking, and templates, logged automatically against the right deal.' },
  { icon: Workflow, title: 'Workflow Automation', desc: "Native no-code automation for routine actions — the first place to look before reaching for Zapier or Make." },
  { icon: Database, title: 'Insights & Reports', desc: 'Pipeline reporting and forecasting, only as reliable as the stage hygiene and custom-field data feeding it.' },
  { icon: Headphones, title: 'LeadBooster', desc: 'Chatbot, web forms, and prospector tools that capture and qualify inbound leads directly into your pipeline.' },
]

const aiCapabilities = [
  { icon: Bot, title: 'Pipedrive AI Configuration', desc: "Configure and extend Pipedrive's built-in AI features — deal insights, smart contact data, and AI-assisted email drafting — grounded in your real pipeline data." },
  { icon: Zap, title: 'Custom Deal-Scoring Models', desc: "AI scoring logic that goes beyond Pipedrive's defaults, weighted to your actual win patterns and sales cycle length." },
  { icon: GitBranch, title: 'Zapier/Make AI Agent Orchestration', desc: 'Multi-step AI agents built across Zapier or Make, triggered by Pipedrive events and acting across your connected tools — inbox, calendar, billing, and support.' },
  { icon: Headphones, title: 'LeadBooster Chatbot & Web Forms', desc: 'AI-assisted chatbot and web-form configuration that qualifies inbound leads and creates deals automatically, with no manual entry.' },
  { icon: Search, title: 'Email & Outreach AI', desc: 'AI-drafted follow-ups and reply classification wired directly into your Pipedrive activity feed.' },
  { icon: ShieldCheck, title: 'Data Quality & API Audits', desc: 'AI agents are only as good as the pipeline data behind them — we audit duplicate deals, stale stages, and API rate limits before anything goes live.' },
]

const practiceExamples = [
  { title: 'Automated deal handoff', desc: "When a deal hits 'Proposal Sent,' an agent drafts the SOW, notifies the account owner in Slack, and creates a matching invoice in Stripe — no manual handoff between tools." },
  { title: 'Automatic inbound qualification', desc: 'LeadBooster captures the chat, an AI agent enriches the contact, scores fit against ICP criteria, and routes hot leads to the right rep in under a minute.' },
  { title: 'Forecasting you can trust', desc: 'Custom fields and automation clean up stage hygiene so pipeline reports reflect what actually happened, not optimistic guesswork.' },
]

const roles = [
  {
    icon: Settings,
    title: 'Pipedrive Administrators',
    desc: 'Own day-to-day pipeline health — stage design, custom fields, permission sets, and native workflow automation. Usually the first hire for any growing Pipedrive account.',
    skills: ['Pipeline Configuration', 'Custom Fields & Automations'],
  },
  {
    icon: Code2,
    title: 'Pipedrive Automation Developers',
    desc: 'Build the automation layer that connects Pipedrive to everything else — Zapier and Make workflows, REST API integrations, and webhooks that Pipedrive\'s native tools can\'t reach.',
    skills: ['Zapier / Make Expert', 'REST API & Webhooks'],
  },
  {
    icon: Briefcase,
    title: 'RevOps & Sales Ops Consultants',
    desc: 'Design pipeline strategy, forecasting categories, and reporting structure across the funnel. The most senior tier — usually engaged once a team outgrows ad-hoc configuration.',
    skills: ['Pipedrive Certified Partner', 'Forecasting & Reporting'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'Pipedrive Administrator', usOnsite: '$35 – $55/hr', remote: '$18 – $22/hr', savings: '~56% lower' },
  { role: 'Pipedrive Automation Developer', usOnsite: '$55 – $85/hr', remote: '$22 – $30/hr', savings: '~63% lower' },
  { role: 'RevOps & Sales Ops Consultant', usOnsite: '$80 – $120/hr', remote: '$28 – $38/hr', savings: '~67% lower' },
]

const vettingCriteria = [
  { title: 'Live Pipeline & Automation Build Challenge', desc: 'Configure a working pipeline and Zapier/Make automation against a realistic spec under time pressure — stage logic, custom fields, and multi-tool triggers, not a take-home nobody reviews.' },
  { title: 'Native-vs-API Judgment', desc: "We test the judgment call that separates senior from junior: when Pipedrive's native automation is enough, and when a custom API integration is worth the added complexity." },
  { title: 'Integration Portfolio Review', desc: "2–3 real Pipedrive instances or Zapier/Make workflows they've shipped to production, reviewed for reliability and failure handling." },
  { title: 'Sales Process Literacy Check', desc: 'Beyond the tool, we test whether the specialist understands pipeline mechanics — stage definitions, forecasting categories, and what makes CRM data trustworthy.' },
]

const comparisonRows = [
  { dimension: 'Time to start', kovil: '24–48 hrs matched', fullTime: '2–4 months to hire', si: '2–4 weeks to mobilize', freelancer: '1–2 weeks, unvetted' },
  { dimension: 'Single accountable owner', kovil: 'yes', fullTime: 'yes', si: 'no', freelancer: 'yes' },
  { dimension: 'Delivery oversight', kovil: 'Engagement Manager audits every milestone', fullTime: 'depends on your management capacity', si: 'account manager, not technical', freelancer: 'none' },
  { dimension: 'Automation depth', kovil: 'Native + Zapier/Make + custom API', fullTime: 'varies', si: 'native tools only', freelancer: 'hit or miss' },
  { dimension: 'Risk-free trial', kovil: 'yes', fullTime: 'no', si: 'no', freelancer: 'rare' },
  { dimension: 'IP ownership', kovil: '100% yours', fullTime: '100% yours', si: 'often shared', freelancer: 'varies' },
]

const forWho = [
  { title: 'Growing Sales Teams', desc: "You outgrew a spreadsheet but haven't outgrown Pipedrive — you just need someone to configure it properly and automate the busywork reps are still doing by hand." },
  { title: 'Founders Running Sales Themselves', desc: "You don't have a RevOps hire yet, but you need reliable pipeline reporting and lead routing that doesn't fall apart when you're not watching it." },
  { title: 'Teams Drowning in Manual Handoffs', desc: "Deals stall between stages because nobody owns the handoff — invoicing, onboarding, Slack notifications. We automate the connective tissue." },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Pipeline', desc: "Tell us how your pipeline is structured, what's broken or manual, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours." },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted Pipedrive specialists matched to your stack and automation needs. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: 'Before any work starts, you agree the account access, integration points, and success metrics — so day one has a clear target.' },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or automation build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new automation needs come online, extend the engagement, or wind down — no lock-in.' },
]

const faqs = [
  { q: 'What is Pipedrive?', a: 'Pipedrive is a sales-first CRM built around a visual, drag-and-drop pipeline — designed for small and growing sales teams who want to see deal flow at a glance rather than navigate a sprawling enterprise platform. It combines deal and contact management, email sync, workflow automation, and built-in AI for deal insights and sales assistance, extended through a marketplace of integrations and a strong Zapier/Make automation ecosystem.' },
  { q: 'Does Pipedrive have native AI, or do I need a custom build?', a: "Pipedrive ships built-in AI features for deal insights, smart contact data, and email assistance. For most teams that's a solid starting point. Where it stops is multi-step automation across tools it doesn't natively integrate with — that's where Kovil AI builds custom AI agents through Zapier, Make, or the Pipedrive API, acting on your pipeline events across your whole stack." },
  { q: 'Does Kovil AI build custom automation on Pipedrive, or only staff talent?', a: "Both, and they're often the same engagement. Clients commonly hire a Pipedrive administrator to clean up pipeline hygiene, then layer AI-driven automation on top once the underlying data is trustworthy." },
  { q: 'How much does it cost to hire a Pipedrive specialist through Kovil AI?', a: "Kovil AI's remote Pipedrive talent bills $18-$38 per hour depending on role and experience, versus $35-$120+ per hour for prevailing US onsite rates for the same roles — typically 56-67% lower. See the full role-by-role rate comparison further up this page." },
  { q: 'What is the difference between a Pipedrive Administrator, Automation Developer, and RevOps Consultant?', a: 'A Pipedrive Administrator configures the pipeline itself — stages, custom fields, permission sets, and native automation. A Pipedrive Automation Developer builds the layer connecting Pipedrive to everything else, via Zapier, Make, or the REST API. A RevOps & Sales Ops Consultant designs the broader pipeline strategy and forecasting structure, and is typically engaged once a team outgrows ad-hoc configuration.' },
  { q: 'How quickly can I hire a Pipedrive specialist through Kovil AI?', a: 'Most clients are matched with a vetted specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement.' },
  { q: 'Is there such a thing as a "certified" Pipedrive specialist?', a: "Pipedrive doesn't run a certification program as extensive as Salesforce or HubSpot. Where relevant, we verify the Pipedrive Certified Partner credential, but we weight a live build challenge and production portfolio review far more heavily than any badge — since real judgment on when to automate natively versus via API isn't something a certificate tests." },
  { q: 'Can Kovil AI integrate Pipedrive with other systems like Slack, Stripe, or accounting tools?', a: 'Yes. Our Pipedrive talent regularly builds integrations using Zapier, Make, the Pipedrive REST API, and webhooks — connecting Pipedrive to Slack, Stripe, QuickBooks, and whatever else your business runs on.' },
  { q: 'Who owns the automations and integrations built during an engagement?', a: 'You do, 100%. All workflows, integrations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no carve-outs, no shared IP, and no lock-in.' },
  { q: 'Can I combine an AI automation build with Pipedrive staff augmentation in one engagement?', a: 'Yes. A single Engagement Manager can coordinate an AI automation build alongside dedicated Pipedrive admin or developer talent working in the same account.' },
  { q: 'What does Kovil AI typically build on top of Pipedrive?', a: 'Deal-scoring models tuned to your actual sales cycle, LeadBooster-to-CRM qualification flows, cross-tool automation via Zapier or Make, and data-hygiene audits that make pipeline reporting trustworthy.' },
  { q: 'How is Kovil AI different from a Pipedrive Marketplace app or a freelance consultant?', a: 'A Marketplace app solves one narrow problem and stops. A freelancer solves what you specifically asked for, with no ongoing oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone, with a 2-week risk-free trial and no long-term lock-in.' },
  { q: 'Can we extend a trial engagement or convert it to a long-term hire?', a: 'Yes. Most clients extend the engagement as new automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' },
  { q: 'Do you support Pipedrive rescues or fixing a messy pipeline?', a: 'Yes. A meaningful share of our Pipedrive engagements start as a rescue — duplicate deals, undefined stages, or automations nobody remembers building. We audit the data and automation layer, then stabilize and rebuild in milestone-gated phases.' },
]

const integrations = [
  'Pipedrive API', 'Zapier', 'Make (Integromat)', 'Webhooks', 'LeadBooster', 'Workflow Automation',
  'Pipedrive AI', 'Email Sync', 'Slack', 'Stripe', 'QuickBooks', 'Google Workspace',
  'Campaigns Add-On', 'Smart Docs', 'Insights & Reports', 'Marketplace Apps',
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
  if (['partial', 'rare', 'hit or miss', 'varies'].includes(value)) return <span className="inline-flex items-center gap-1.5 text-muted-foreground capitalize"><Minus className="h-4 w-4" />{value}</span>
  return <span className="text-muted-foreground">{value}</span>
}

const moduleChips = [
  { label: 'Deals & Pipeline', color: PD },
  { label: 'Automation', color: '#7C8A82' },
  { label: 'Insights', color: PD },
  { label: 'LeadBooster', color: '#7C8A82' },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #10201A 0%, #0E1712 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${PD}33` }} />
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Pipedrive</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: PD, opacity: 0.4 }} />
            <PlatformLogoBadge slug="pipedrive" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${PD}, #0F6B36)` }}
            >
              <TrendingUp className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">Pipedrive Pipeline</p>
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
            <p className="font-display font-bold text-sm text-white mb-1">AI Automation</p>
            <p className="text-xs text-white/50 leading-snug">Agents, live in weeks</p>
          </div>
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #10261A 0%, #0A1810 100%)', border: `1px solid ${PD}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${PD}, #0F6B36)` }}>
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

export default function PipedrivePlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Pipedrive</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: PD }}>Pipedrive Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
              Everything You Need to Run Pipedrive —<br />
              <span className="text-accent">AI Automation, and the Talent to Build It.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From AI-driven pipeline automation to configuration and Zapier/Make integrations — Kovil AI is a single partner for the entire Pipedrive stack. AI automation and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-pipedrive-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Pipedrive talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Pipedrive?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Pipedrive</strong> is a sales-first CRM built around a visual, drag-and-drop pipeline — designed for small and growing sales teams who want to see deal flow at a glance rather than navigate a sprawling enterprise platform. It combines deal and contact management, email sync, workflow automation, and built-in AI for deal insights and sales assistance, extended through a marketplace of integrations and a strong Zapier/Make automation ecosystem. Most growing sales teams need both a properly configured pipeline and the automation glue connecting it to the rest of their stack — exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Pipedrive, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The simplest CRM to run — now with AI automation underneath it.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Pipedrive</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI & Automation Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Custom AI workflows built on top of Pipedrive's native AI and your Zapier/Make layer — deal scoring, AI-drafted outreach, and agents that act across your connected tools.
            </p>
            <a href="#ai-automation">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${PD}40`, background: `${PD}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${PD}18`, border: `1px solid ${PD}40` }}>
              <Users className="h-5 w-5" style={{ color: PD }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted Pipedrive administrators, automation developers, and RevOps consultants, matched in 48 hours. For the configuration work that has to happen whether or not you're automating yet.
            </p>
            <a href="#hire-pipedrive-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Pipedrive Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">One focused product, built around six core modules — no separate Hubs or Clouds to license.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${PD}14`, border: `1px solid ${PD}30` }}>
                    <Icon className="h-5 w-5" style={{ color: PD }} />
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure what's slowing your pipeline down?</h3>
            <p className="text-sm text-muted-foreground">Tell us what's broken or missing on a 30-minute call — we'll scope the highest-impact fix first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI on Pipedrive */}
      <section id="ai-automation" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI on Pipedrive</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your Pipedrive Account</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From configuring Pipedrive's native AI to fully custom Zapier/Make agent workflows — here's what's possible.</p>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common automation patterns we build on Pipedrive — illustrative examples, not specific client engagements.</p>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to scope an AI automation build?</h3>
            <p className="text-sm text-background/60">Book a free 30-minute architecture call. Live pilot in 2 weeks, risk-free.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Pipedrive talent */}
      <section id="hire-pipedrive-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: PD }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Pipedrive Administrators, Automation Developers & RevOps Consultants</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every specialist is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${PD}14`, border: `1px solid ${PD}30` }}>
                    <Icon className="h-5 w-5" style={{ color: PD }} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.skills.map((c) => (
                      <span key={c} className="inline-flex items-center gap-1 text-[10px] font-medium text-foreground/70 bg-muted px-2 py-1 rounded-md">
                        <CheckCircle2 className="h-2.5 w-2.5" />{c}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Pipedrive Talent: US Onsite vs. Remote</h3>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Prevailing 2026 US onsite hourly rates vs. Kovil AI's vetted remote talent — <strong className="text-foreground">$18–$45/hr</strong> depending on role and experience.
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
                    <td className="py-4 px-6 font-semibold" style={{ color: PD }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil specialist passes the same live build challenge below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Pipedrive Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Pipedrive Talent</h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-44"></th>
                <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Full-Time Hire</th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Agency / Consultant</th>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Pipedrive Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Pipedrive?</h2>
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
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${PD}0A`, border: `1px solid ${PD}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need a Pipedrive admin, developer, or RevOps consultant?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${PD}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About the Pipedrive Platform</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/platforms/salesforce', label: 'Salesforce Platform', desc: 'Agentforce AI agents and Salesforce talent' },
            { href: '/platforms/hubspot', label: 'HubSpot Platform', desc: 'Breeze AI agents and HubSpot talent' },
            { href: '/staff-augmentation', label: 'Staff Augmentation', desc: 'Add vetted engineers without full-time overhead' },
            { href: '/platforms', label: 'All Platform Integrations', desc: 'ServiceNow, NetSuite, Freshworks, and 33 more' },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Pipedrive?</h2>
            <p className="text-background/60 text-base">AI automation or specialist talent — book a 30-minute call. 2-week risk-free trial either way.</p>
          </div>
          <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

    </div>
  )
}
