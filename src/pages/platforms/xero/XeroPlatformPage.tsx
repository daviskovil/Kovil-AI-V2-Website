'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  GitBranch, CheckCircle2, ChevronDown, Briefcase, Settings, X, Minus,
  LineChart, Search, Boxes, Receipt, Clock,
  AlertTriangle,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const XR = '#13B5EA' // Xero Blue
const XR_DARK = '#0A2E3D'

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match Xero talent' },
  { stat: '2 wks', label: 'To a live automation pilot' },
  { stat: '3', label: 'Specialist role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: '4M+', label: 'subscribers run their books on Xero worldwide', src: 'Xero, 2026' },
  { value: '#1', label: 'cloud accounting platform for small businesses in the UK, Australia, and New Zealand', src: 'Xero, 2026' },
  { value: '1,000+', label: 'apps in the Xero App Marketplace extending core accounting', src: 'Xero App Marketplace' },
  { value: '2–4 mo', label: 'average time to hire a dedicated Xero/API specialist through traditional recruiting', src: 'Industry avg.' },
]

const modules = [
  { icon: Receipt, title: "Chart of Accounts & Tracking Categories", desc: "Tracking categories add a second dimension to every transaction, such as department or project, and are the main lever for management reporting in Xero." },
  { icon: Database, title: "Bank Reconciliation & Rules", desc: "Bank rules and Xero's matching suggestions drive daily reconciliation. Rule order and overlap decide how much stays manual." },
  { icon: Briefcase, title: "Invoices, Bills & Repeating Transactions", desc: "Sales invoices, supplier bills, and repeating templates, with approval options for teams that need a second pair of eyes." },
  { icon: Settings, title: "Multi-Currency", desc: "Foreign-currency invoices, bills, and bank accounts with exchange-rate handling, which matters most for exporters and international teams." },
  { icon: Clock, title: "Projects & Expenses", desc: "Time and cost tracking against jobs, plus expense claims, feeding profitability by project." },
  { icon: Code2, title: "Xero API & App Marketplace", desc: "Accounting, payroll, and files APIs with OAuth 2.0 and webhooks. Each connection is per organisation, which shapes how integrations are built." },
]

const aiCapabilities = [
  { icon: Bot, title: "Xero's Built-In AI, Tuned and Bounded", desc: "Make the most of native suggestions for reconciliation and reminders, with limits on what they may post and a review step for exceptions." },
  { icon: Zap, title: "Bank Rule Mining From History", desc: "Analyze past reconciled transactions to propose bank rules, then retire conflicting or redundant ones so matching improves instead of getting noisier." },
  { icon: Receipt, title: "Bill Coding From Email and Hubdoc", desc: "Extract supplier, tax, and totals from emailed bills and captured documents, code them from history, and queue drafts for approval." },
  { icon: Search, title: "Multi-Currency Revaluation Checks", desc: "Flag unrealised gain and loss anomalies and stale exchange-rate usage before month-end close, with an explanation for each flag." },
  { icon: GitBranch, title: "Practice-Level Rollups", desc: "For accountants running many Xero organisations: one agent summarizing status, overdue items, and anomalies across the whole client list." },
  { icon: ShieldCheck, title: "Tracking-Category Hygiene Audit", desc: "Find unused, duplicated, or inconsistently applied tracking options so reports can be trusted before an agent reads them." },
]

const practiceExamples = [
  { title: "Bank rules that stop fighting each other", desc: "Overlapping rules are consolidated and ordered correctly, so common transactions reconcile in one click instead of landing in review." },
  { title: "One summary across many organisations", desc: "A practice sees overdue invoices, unreconciled items, and unusual movements across all clients in a single weekly digest." },
  { title: "Foreign-currency close without surprises", desc: "Revaluation and exchange-rate checks run before close, so gains and losses are explained instead of discovered during review." },
]

const roles = [
  {
    icon: Settings,
    title: 'Xero Administrators',
    desc: "Own the chart of accounts, tracking categories, bank rules, and approvals. Usually the first hire, and the person who keeps reconciliation quick and reports consistent.",
    skills: ['Xero Certified Advisor', 'Chart of Accounts Design'],
  },
  {
    icon: Code2,
    title: 'Xero API Developers',
    desc: "Build against the Xero accounting and payroll APIs with per-organisation connections, token refresh, and webhooks that stay reliable when connections change.",
    skills: ['Xero API', 'OAuth 2.0 & Webhooks'],
  },
  {
    icon: Briefcase,
    title: 'Ecosystem Integration Specialists',
    desc: "Choose and connect the apps around Xero, such as your store, payments, expenses, and payroll, and decide where each piece of data should live.",
    skills: ['App Marketplace Integration Strategy', 'Multi-Channel Reconciliation'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'Xero Administrator', usOnsite: '$35 – $55/hr', remote: '$18 – $22/hr', savings: '~56% lower' },
  { role: 'Xero API Developer', usOnsite: '$60 – $90/hr', remote: '$22 – $29/hr', savings: '~66% lower' },
  { role: 'Ecosystem Integration Specialist', usOnsite: '$75 – $110/hr', remote: '$26 – $34/hr', savings: '~68% lower' },
]

const vettingCriteria = [
  { title: "Bank Rule Design Exercise", desc: "Given a messy set of reconciled transactions, propose a clean, non-overlapping rule set. It tests judgment about order and conflict, not just syntax." },
  { title: "Native-vs-Custom Judgment", desc: "When is a Marketplace app or built-in feature enough, and when is custom API work worth maintaining? We test for restraint as well as skill." },
  { title: "Multi-Organisation Integration Design", desc: "We ask how they would handle several Xero organisations, revoked connections, and token refresh, which is where many integrations fail." },
  { title: "Production Portfolio Review", desc: "Two or three real Xero integrations or cleanups they shipped, reviewed for how failures were handled and what they would change." },
]

const comparisonRows = [
  { dimension: 'Time to start', kovil: '24–48 hrs matched', fullTime: '2–4 months to hire', si: '2–4 weeks to mobilize', freelancer: '1–2 weeks, unvetted' },
  { dimension: 'Single accountable owner', kovil: 'yes', fullTime: 'yes', si: 'no', freelancer: 'yes' },
  { dimension: 'Delivery oversight', kovil: 'Engagement Manager audits every milestone', fullTime: 'depends on your management capacity', si: 'account manager, not technical', freelancer: 'none' },
  { dimension: 'Automation depth', kovil: 'Native + API + custom integration', fullTime: 'varies', si: 'templated apps only', freelancer: 'hit or miss' },
  { dimension: 'Risk-free trial', kovil: 'yes', fullTime: 'no', si: 'no', freelancer: 'rare' },
  { dimension: 'IP ownership', kovil: '100% yours', fullTime: '100% yours', si: 'often shared', freelancer: 'varies' },
]

const forWho = [
  { title: "Accounting and Bookkeeping Practices", desc: "Running dozens of Xero organisations means repeating cleanups and checks. We standardize them and add practice-wide visibility." },
  { title: "UK, Australian, and New Zealand Businesses", desc: "Local payroll, VAT or GST, and bank connections are Xero strengths. We build automation that respects those regional rules instead of fighting them." },
  { title: "Businesses Adding Projects, Inventory, or Multi-Currency", desc: "As needs grow, Xero add-ons and integrations multiply. We design how they fit together and when it is time to look beyond Xero." },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Books', desc: "Tell us how your accounts are structured, what's broken or manual, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours." },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted Xero specialists matched to your stack and automation needs. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: 'Before any work starts, you agree the account access, integration points, and success metrics — so day one has a clear target.' },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or automation build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new automation needs come online, extend the engagement, or wind down — no lock-in.' },
]

const pitfalls = [
  { title: "Tracking categories overloaded", desc: "Only two tracking categories are available, so using them for everything leads to unwieldy option lists and reports nobody can read." },
  { title: "Bank rules in conflict", desc: "Overlapping rules and the wrong ordering produce wrong categories quietly, and the errors surface at review time rather than at entry." },
  { title: "Integrations that assume one organisation", desc: "Xero connections are per organisation. Code that ignores this breaks for multi-entity groups or when a connection is revoked." },
  { title: "Multi-currency left to chance", desc: "Unreviewed exchange rates and revaluation produce gains and losses that nobody can explain at close." },
  { title: "Duplicate bills from several capture routes", desc: "Email, Hubdoc, and manual entry can all create the same supplier bill, so payments get duplicated unless a matching check is in place." },
]

const faqs = [
  { q: "What is Xero?", a: "Xero is a cloud accounting platform used widely by small and mid-sized businesses and by accounting practices, particularly in the UK, Australia, and New Zealand. It covers bookkeeping, invoicing, bank reconciliation, payroll in supported countries, projects, and an app marketplace connected through its APIs." },
  { q: "Does Xero have native AI, or do I need a custom build?", a: "Xero includes built-in automation and AI-driven suggestions for tasks like bank reconciliation, invoice reminders, and duplicate detection. A custom build makes sense when you need logic across systems, such as mining your own rules, coding bills from email, or running an agent across many organisations." },
  { q: "What are tracking categories, and why do they matter for automation?", a: "Tracking categories let you tag transactions with dimensions such as department or project, and Xero allows two of them. Reports and any automation that reads them are only as reliable as how consistently they are applied, so we audit them before building on top." },
  { q: "Can you clean up and improve our Xero bank rules?", a: "Yes. We review existing rules for overlap and order, mine your reconciled history for patterns worth turning into rules, and retire the ones causing wrong categories. The aim is more transactions reconciling in one click, with fewer silent errors." },
  { q: "How do Xero integrations work when we have several organisations?", a: "Xero connections are made per organisation, and each one has its own authorization. We build integrations that track each connection, refresh tokens correctly, and handle revoked access, so one failure does not silently stop the whole group." },
  { q: "How much does it cost to hire a Xero developer through Kovil AI?", a: "Kovil AI's remote Xero talent bills $18-$34 per hour depending on role and experience, versus $35-$110+ per hour for prevailing US onsite rates for the same roles — typically 56-68% lower." },
  { q: "What is the difference between a Xero Administrator, API Developer, and Ecosystem Integration Specialist?", a: "An Administrator owns the chart of accounts, tracking categories, and bank rules. An API Developer writes code against the Xero APIs and webhooks. An Ecosystem Integration Specialist decides which apps to connect and how data should flow between them." },
  { q: "Does a Xero Certified Advisor credential matter for this work?", a: "The Certified Advisor credential shows knowledge of Xero for accounting work, and we verify it where it applies. For integration and AI work it is not enough on its own, so we also run a live build and review shipped projects." },
  { q: "Can you build an agent that works across many client organisations?", a: "Yes. For practices, we build a single view across all Xero organisations covering overdue items, unreconciled transactions, and unusual movements, with per-client permissions respected. It is a practice-level tool and sends summaries to a person to act on." },
  { q: "How do you handle multi-currency in Xero automation?", a: "We treat exchange rates and revaluation as first-class concerns. Automation checks which rate was used, flags unusual gains and losses before close, and never posts foreign-currency entries without a rate source you have approved." },
  { q: "How quickly can I hire a Xero specialist through Kovil AI?", a: "Most clients are matched with a vetted administrator, developer, or specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement." },
  { q: "Who owns the integrations and automations built during an engagement?", a: "You do, 100%. All custom integrations, automations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in." },
  { q: "Do you support Xero rescues or fixing messy books?", a: "Yes. Typical rescues involve conflicting bank rules, bloated tracking categories, duplicated bills, or an integration that stopped syncing unnoticed. We audit first, agree a cleanup plan, and fix in stages so reporting stays usable throughout." },
  { q: "Can we extend a trial engagement or convert it to a long-term hire?", a: "Yes. Most clients extend the engagement as new automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way." },
]

const integrations = [
  "Xero Accounting API", "Xero Payroll API", "OAuth 2.0 & Webhooks", "Tracking Categories", "Bank Rules", "Hubdoc", "Xero Projects", "Xero Files API", "Shopify", "Stripe", "PayPal", "Dext & Expense Tools", "Zapier & Make", "Multi-Currency", "Custom Reports", "SSO",
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
  { label: 'Accounting', color: XR },
  { label: 'Payroll', color: '#6ECBE8' },
  { label: 'Projects', color: XR },
  { label: 'Marketplace', color: '#6ECBE8' },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0B2836 0%, #09222E 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${XR}33` }} />
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Xero</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: XR, opacity: 0.4 }} />
            <PlatformLogoBadge slug="xero" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${XR}, #0C86AB)` }}
            >
              <LineChart className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">Xero Accounting</p>
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
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #0A2430 0%, #071A23 100%)', border: `1px solid ${XR}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${XR}, #0C86AB)` }}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Specialist Talent</p>
            <p className="text-xs text-white/50 leading-snug">Admins, devs, consultants</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function XeroPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Xero</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: XR }}>Xero Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
              Everything You Need to Run Xero —<br />
              <span className="text-accent">AI Automation, and the Talent to Build It.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From AI-driven reconciliation automation to API developers, administrators, and ecosystem integration specialists — Kovil AI is a single partner for the entire Xero stack. AI automation and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-xero-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Xero talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Xero?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Xero</strong> is a cloud accounting platform combining core bookkeeping with payroll, project tracking, expense management, and inventory. It is one of the leading cloud accounting platforms for small businesses in the UK, Australia, and New Zealand, extended through the Xero App Marketplace. Most growing businesses need both a properly configured account and, increasingly, AI-driven automation built on top of it — exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Xero, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">A leading small business accounting platform — now with AI automation layered on top.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Xero</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI & Automation Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Custom AI workflows built on top of Xero's native automation and API layer — reconciliation automation, multi-currency reporting, and agents that act across your connected tools.
            </p>
            <a href="#ai-agents">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${XR}40`, background: `${XR}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${XR}18`, border: `1px solid ${XR}40` }}>
              <Users className="h-5 w-5" style={{ color: XR }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted Xero administrators, API developers, and ecosystem integration specialists, matched in 48 hours. For the configuration work that has to happen whether or not you're automating yet.
            </p>
            <a href="#hire-xero-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Xero Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Xero is rarely one module — most real accounts span several of these, sharing one set of books.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${XR}14`, border: `1px solid ${XR}30` }}>
                    <Icon className="h-5 w-5" style={{ color: XR }} />
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure what's slowing your books down?</h3>
            <p className="text-sm text-muted-foreground">Tell us what's broken or missing on a 30-minute call — we'll scope the highest-impact fix first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI on Xero */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI on Xero</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your Xero Account</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From configuring native Xero automation to fully custom API workflows — here's what's possible.</p>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common automation patterns we build on Xero — illustrative examples, not specific client engagements.</p>
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

      {/* Field notes: platform-specific failure patterns */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Field Notes</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Where Xero Projects Go Wrong</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">These are the failure patterns we see most often in Xero organisations. Knowing them early is the cheapest way to avoid an expensive cleanup.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {pitfalls.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-border bg-background p-6">
              <h3 className="font-semibold text-base mb-2 flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-1" />{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
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

      {/* Xero talent */}
      <section id="hire-xero-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: XR }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Xero Administrators, Developers & Ecosystem Specialists</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every specialist is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${XR}14`, border: `1px solid ${XR}30` }}>
                    <Icon className="h-5 w-5" style={{ color: XR }} />
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Xero Talent: US Onsite vs. Remote</h3>
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
                    <td className="py-4 px-6 font-semibold" style={{ color: XR }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil specialist passes the same live build challenge below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Xero Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Xero Talent</h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-44"></th>
                <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Full-Time Hire</th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Marketplace / Agency</th>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Xero Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Xero?</h2>
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
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${XR}0A`, border: `1px solid ${XR}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need a Xero administrator, developer, or specialist?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${XR}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Xero</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/platforms/quickbooks', label: 'QuickBooks Platform', desc: 'AI automation and QuickBooks talent' },
            { href: '/platforms/sage-intacct', label: 'Sage Intacct Platform', desc: 'Sage Copilot AI agents and Intacct talent' },
            { href: '/staff-augmentation', label: 'Staff Augmentation', desc: 'Add vetted engineers without full-time overhead' },
            { href: '/platforms', label: 'All Platform Integrations', desc: 'Salesforce, HubSpot, Workday, and 27 more' },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Xero?</h2>
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
