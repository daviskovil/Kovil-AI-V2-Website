'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  GitBranch, CheckCircle2, ChevronDown, Briefcase, Settings, X, Minus,
  Cloud, Search, Truck, Factory, Wrench,
  AlertTriangle, Layers,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const AC = '#5FA935' // Acumatica Green
const AC_DARK = '#1E3A14'

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match Acumatica talent' },
  { stat: '2 wks', label: 'To a live automation pilot' },
  { stat: '3', label: 'Specialist role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: '10,000+', label: 'organizations run their business on Acumatica worldwide', src: 'Acumatica, 2026' },
  { value: '150+', label: 'countries where Acumatica is available', src: 'Acumatica, 2026' },
  { value: 'Unlimited', label: 'user licensing — Acumatica prices by resource consumption, not per-seat fees', src: 'Acumatica' },
  { value: '3–5 mo', label: 'average time to hire a senior Acumatica developer through traditional recruiting', src: 'Industry avg.' },
]

const modules = [
  { icon: Database, title: "Financials & Multi-Entity", desc: "General ledger, AP/AR, and consolidation across companies and branches. Multi-entity design is the decision hardest to change later." },
  { icon: Truck, title: "Distribution & Warehouse", desc: "Inventory, purchasing, order management, and warehouse operations for product-based businesses." },
  { icon: Factory, title: "Manufacturing", desc: "Bills of material, production orders, and shop-floor tracking connected to Financials on the same data model." },
  { icon: Briefcase, title: "Project Accounting & Construction", desc: "Job costing, project budgets, and billing, used heavily in construction and services firms." },
  { icon: Settings, title: "Customization Projects & Platform", desc: "A customization framework for screens, fields, and business logic. Powerful, but it must be built to survive each new release." },
  { icon: Code2, title: "Open API, Generic Inquiries & Business Events", desc: "REST and contract-based endpoints, inquiry-driven data access, and events that fire when records change." },
]

const aiCapabilities = [
  { icon: Bot, title: "Acumatica's Built-In AI, Configured and Bounded", desc: "Use native capabilities such as AI-assisted document recognition where they fit, with clear limits on what posts automatically." },
  { icon: Zap, title: "AP Invoice Intake Pipelines", desc: "Extract vendor, lines, and totals from emailed invoices, match to purchase orders, and queue drafts for approval." },
  { icon: Search, title: "Business Event-Driven Agents", desc: "Trigger an agent when a record changes, such as a stock level crossing a threshold, and have it propose an action for a person to approve." },
  { icon: GitBranch, title: "Cross-System Order and Inventory Sync", desc: "Keep Acumatica aligned with Shopify, Salesforce, and warehouse tools using the Open API, with clear sources of truth." },
  { icon: ShieldCheck, title: "Customization and Upgrade-Safety Audit", desc: "Find customizations that will block the next release and fix them before an agent depends on them." },
  { icon: Layers, title: "Readiness & Scoping", desc: "We review modules, customizations, and integrations, then scope the single highest-impact use case first." },
]

const practiceExamples = [
  { title: "Supplier invoices that match themselves", desc: "Invoices are read, matched against purchase orders and receipts, and queued with exceptions flagged, so AP reviews differences instead of keying lines." },
  { title: "Replenishment suggestions that explain themselves", desc: "When stock crosses a threshold, a proposed purchase order is drafted with the reasoning, and a buyer approves or edits it." },
  { title: "An upgrade that does not break the business", desc: "Customizations are refactored onto supported patterns, so a new release goes in without an emergency retest of everything." },
]

const roles = [
  {
    icon: Settings,
    title: 'Acumatica Administrators',
    desc: "Own generic inquiries, reports, workflows, and security roles, keeping day-to-day operations running smoothly without custom code.",
    skills: ['Generic Inquiries & Reports', 'Workflow Configuration'],
  },
  {
    icon: Code2,
    title: '.NET/Acumatica Developers',
    desc: "Build customization projects in C# on supported patterns, and integrations through the Open API, so work survives each new release.",
    skills: ['C#/.NET Framework', 'Acumatica xRP Customization'],
  },
  {
    icon: Briefcase,
    title: 'ERP Consultants',
    desc: "Configure financials, distribution, and multi-entity structure, and guide process design so the system fits the business, not the other way round.",
    skills: ['Multi-Entity Implementation', 'Financial & Distribution Configuration'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'Acumatica Administrator', usOnsite: '$40 – $65/hr', remote: '$18 – $24/hr', savings: '~60% lower' },
  { role: '.NET/Acumatica Developer', usOnsite: '$70 – $105/hr', remote: '$25 – $32/hr', savings: '~67% lower' },
  { role: 'ERP Consultant', usOnsite: '$90 – $140/hr', remote: '$30 – $38/hr', savings: '~70% lower' },
]

const vettingCriteria = [
  { title: "Customization Design Exercise", desc: "Given a business requirement, choose between configuration, a customization, and an integration, and justify it. We look for upgrade-safe thinking." },
  { title: "API Surface Judgment", desc: "When is a contract-based endpoint the right choice versus a screen-based or generic-inquiry approach? We test for reliability over convenience." },
  { title: "Test Tenant and Release Discipline", desc: "How do they stage, test, and publish customizations and integrations? That is where Acumatica projects tend to fail." },
  { title: "Production Portfolio Review", desc: "Two or three real Acumatica implementations or integrations they delivered, reviewed for what held up through upgrades." },
]

const comparisonRows = [
  { dimension: 'Time to start', kovil: '24–48 hrs matched', fullTime: '3–5 months to hire', si: '6–10 weeks to mobilize', freelancer: '1–2 weeks, unvetted' },
  { dimension: 'Single accountable owner', kovil: 'yes', fullTime: 'yes', si: 'no', freelancer: 'yes' },
  { dimension: 'Delivery oversight', kovil: 'Engagement Manager audits every milestone', fullTime: 'depends on your management capacity', si: 'account manager, not technical', freelancer: 'none' },
  { dimension: 'Cross-module depth', kovil: 'Financials + Distribution + Manufacturing + CRM', fullTime: 'varies', si: 'templated', freelancer: 'hit or miss' },
  { dimension: 'Risk-free trial', kovil: 'yes', fullTime: 'no', si: 'no', freelancer: 'rare' },
  { dimension: 'IP ownership', kovil: '100% yours', fullTime: '100% yours', si: 'often shared', freelancer: 'varies' },
]

const forWho = [
  { title: "Distributors and Wholesalers", desc: "Inventory accuracy, order flow, and supplier invoices are the daily grind. We automate the repetitive parts and keep buyers in control." },
  { title: "Manufacturers", desc: "Production planning and costing rely on clean data. We help get the master data and integrations right before adding AI." },
  { title: "Project-Based and Construction Firms", desc: "Job costing and billing depend on disciplined project setup. We configure and extend Acumatica to match how projects are really run." },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Instance', desc: "Tell us which modules you run, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours." },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted Acumatica specialists matched to your modules and stack. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: 'Before any work starts, you agree the instance access, integration points, and success metrics — so day one has a clear target.' },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or automation build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new modules or workflows come online, extend the engagement, or wind down — no lock-in.' },
]

const pitfalls = [
  { title: "Customizations that block upgrades", desc: "Heavy or unsupported customizations turn every semi-annual release into a regression project, so teams fall behind on versions." },
  { title: "Using the wrong API surface", desc: "Screen-based integrations break when screens change, while contract-based endpoints are versioned. Picking the wrong one creates fragile integrations." },
  { title: "Ignoring licensing resource limits", desc: "Acumatica licenses by computing resources rather than user count, so integration volume and reporting load should be planned, not discovered." },
  { title: "Multi-entity set up as an afterthought", desc: "Branch and company structure shapes reporting and security. Changing it after go-live is expensive." },
  { title: "No test tenant discipline", desc: "Publishing customizations or integrations straight to production without a test tenant invites outages and rollbacks." },
]

const faqs = [
  { q: "What is Acumatica?", a: "Acumatica is a cloud ERP covering financials, distribution, manufacturing, project accounting, and more, with a customization platform and an Open API. It is known for consumption-based licensing, which prices by computing resources rather than by user count." },
  { q: "Does Acumatica have native AI, or do I need a custom build?", a: "Acumatica includes built-in AI capabilities such as AI-assisted document recognition. A custom build makes sense when you need logic across systems, such as matching invoices to purchase orders, triggering agents from Business Events, or running LLM steps against your data." },
  { q: "What does consumption-based licensing mean for integrations and AI?", a: "Acumatica licenses by computing resources rather than named users, so broad access is affordable but heavy integration and reporting load uses capacity. We plan integration volume and scheduling with that in mind instead of discovering it later." },
  { q: "Which Acumatica API should we use for an integration?", a: "Contract-based REST endpoints are versioned and suited to most integrations. Generic inquiries suit read-heavy reporting, and screen-based access is a last resort because it can break when screens change. We choose per use case." },
  { q: "How do customizations affect Acumatica upgrades?", a: "Acumatica ships releases on a regular cadence, and customizations that rely on unsupported patterns can break them. We build and refactor customization projects to supported patterns and test in a separate tenant before publishing." },
  { q: "How much does it cost to hire an Acumatica developer through Kovil AI?", a: "Kovil AI's remote Acumatica talent bills $18-$38 per hour depending on role and experience, versus $40-$140+ per hour for prevailing US onsite rates for the same roles — typically 60-70% lower." },
  { q: "What is the difference between an Acumatica Administrator, Developer, and ERP Consultant?", a: "An Administrator owns inquiries, reports, workflows, and security roles. A .NET/Acumatica Developer builds customization projects and integrations. An ERP Consultant configures financials, distribution, and multi-entity structure and guides process design." },
  { q: "What are Business Events, and how can an AI agent use them?", a: "Business Events fire when records meet conditions, such as stock below a threshold. We use them to trigger an agent that drafts a proposed action, such as a purchase order, which a person approves before anything posts." },
  { q: "Can Kovil AI integrate Acumatica with Shopify, Salesforce, or warehouse tools?", a: "Yes. We use the contract-based Open API with a declared source of truth for each field, so order, inventory, and customer data stay aligned without conflicting writes." },
  { q: "Is there such a thing as a certified Acumatica specialist?", a: "Acumatica offers certifications and we verify them where they exist. For development and integration work we also weight a live design exercise and a review of shipped work, since credentials alone do not test judgment." },
  { q: "How quickly can I hire an Acumatica specialist through Kovil AI?", a: "Most clients are matched with a vetted administrator, developer, or consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement." },
  { q: "Who owns the customizations, automations, and integrations built during an engagement?", a: "You do, 100%. All custom screens, business events, integrations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in." },
  { q: "Do you support Acumatica rescues or fixing a failing implementation?", a: "Yes. Typical rescues involve heavy customizations that block upgrades, fragile integrations, weak multi-entity design, or stalled go-lives. We audit first, then stabilize in stages so operations are not disrupted." },
  { q: "Can we extend a trial engagement or convert it to a long-term hire?", a: "Yes. Most clients extend the engagement as new modules or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way." },
]

const integrations = [
  "Acumatica Open API", "Contract-Based REST Endpoints", "Generic Inquiries", "Business Events", "Customization Projects", "Document Recognition", "Shopify", "Salesforce", "Avalara & Tax Tools", "Power BI", "Microsoft 365", "SSO & SAML", "Multi-Entity", "Project Accounting",
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
  if (['partial', 'rare', 'hit or miss', 'templated', 'varies'].includes(value)) return <span className="inline-flex items-center gap-1.5 text-muted-foreground capitalize"><Minus className="h-4 w-4" />{value}</span>
  return <span className="text-muted-foreground">{value}</span>
}

const moduleChips = [
  { label: 'Financials', color: AC },
  { label: 'Distribution', color: '#8FBF6E' },
  { label: 'Manufacturing', color: AC },
  { label: 'Field Service', color: '#8FBF6E' },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #16240F 0%, #121E0D 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${AC}33` }} />
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Acumatica</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: AC, opacity: 0.4 }} />
            <PlatformLogoBadge slug="acumatica" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${AC}, #3D7522)` }}
            >
              <Cloud className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">Acumatica ERP</p>
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
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #15220E 0%, #0E1809 100%)', border: `1px solid ${AC}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${AC}, #3D7522)` }}>
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

export default function AcumaticaPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Acumatica</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AC }}>Acumatica Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
              Everything You Need to Run Acumatica —<br />
              <span className="text-accent">AI Automation, and the Talent to Build It.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From AI-driven financial automation to .NET developers, administrators, and ERP consultants — Kovil AI is a single partner for the entire Acumatica stack. AI automation and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-acumatica-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Acumatica talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Acumatica?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Acumatica</strong> is a cloud ERP platform built around a unified Financial Management core, extended by Distribution Management, Manufacturing Management, Project Accounting, CRM, and Field Service Management, all sharing one data model. It is distinguished by consumption-based licensing rather than per-user fees, making it popular with growing mid-market companies. Most companies need both a properly configured Acumatica instance and, increasingly, AI-driven automation built on top of it — exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Acumatica, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">Cloud ERP built for growing mid-market companies — with AI automation layered on top.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Acumatica</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI & Automation Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Custom AI workflows built on top of Acumatica's native AI and .NET framework — financial close automation, field service scheduling, and agents that act across your connected tools.
            </p>
            <a href="#ai-agents">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${AC}40`, background: `${AC}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${AC}18`, border: `1px solid ${AC}40` }}>
              <Users className="h-5 w-5" style={{ color: AC }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted Acumatica administrators, .NET developers, and ERP consultants, matched in 48 hours. For the configuration work that has to happen whether or not you're automating yet.
            </p>
            <a href="#hire-acumatica-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Acumatica Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Acumatica is rarely one module — most real instances span several of these, sharing one financial core.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${AC}14`, border: `1px solid ${AC}30` }}>
                    <Icon className="h-5 w-5" style={{ color: AC }} />
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

      {/* AI on Acumatica */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI on Acumatica</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your Acumatica Instance</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From configuring native Acumatica AI to fully custom .NET automation — here's what's possible.</p>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common automation patterns we build on Acumatica — illustrative examples, not specific client engagements.</p>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Where Acumatica Projects Go Wrong</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">These are the failure patterns we see most often in Acumatica environments. Knowing them early is the cheapest way to avoid an expensive cleanup.</p>
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

      {/* Acumatica talent */}
      <section id="hire-acumatica-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AC }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Acumatica Administrators, Developers & ERP Consultants</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every specialist is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${AC}14`, border: `1px solid ${AC}30` }}>
                    <Icon className="h-5 w-5" style={{ color: AC }} />
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Acumatica Talent: US Onsite vs. Remote</h3>
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
                    <td className="py-4 px-6 font-semibold" style={{ color: AC }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil specialist passes the same live build challenge below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Acumatica Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Acumatica Talent</h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-44"></th>
                <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Full-Time Hire</th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">VAR / SI</th>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Acumatica Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Acumatica?</h2>
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
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${AC}0A`, border: `1px solid ${AC}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need an Acumatica administrator, developer, or consultant?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${AC}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Acumatica</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/platforms/netsuite', label: 'NetSuite Platform', desc: 'AI automation and NetSuite talent' },
            { href: '/platforms/odoo', label: 'Odoo Platform', desc: 'AI automation and Odoo talent' },
            { href: '/staff-augmentation', label: 'Staff Augmentation', desc: 'Add vetted engineers without full-time overhead' },
            { href: '/platforms', label: 'All Platform Integrations', desc: 'Workday, Dynamics 365, Salesforce, and 31 more' },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Acumatica?</h2>
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
