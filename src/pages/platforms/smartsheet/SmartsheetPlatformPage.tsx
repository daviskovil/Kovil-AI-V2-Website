'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  GitBranch, CheckCircle2, ChevronDown, Briefcase, Settings, X, Minus,
  Search, Grid3x3, Calendar, BarChart3,
  AlertTriangle, Layers,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const SS = '#1B6FC9' // Smartsheet Blue
const SS_DARK = '#0D3A6B'

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match Smartsheet talent' },
  { stat: '2 wks', label: 'To a live automation pilot' },
  { stat: '3', label: 'Specialist role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: 'Spreadsheet-Native', label: 'familiar grid interface built for teams that already think in spreadsheets', src: 'Smartsheet, 2026' },
  { value: '90%', label: 'of Fortune 100 companies use Smartsheet for collaborative work', src: 'Smartsheet, 2026' },
  { value: 'Control Center', label: 'enterprise provisioning for standardized, repeatable project rollouts at scale', src: 'Smartsheet, 2026' },
  { value: '2–4 mo', label: 'average time to hire a dedicated Smartsheet specialist through traditional recruiting', src: 'Industry avg.' },
]

const modules = [
  { icon: Workflow, title: "Sheets, Formulas & Cross-Sheet References", desc: "Smartsheet is spreadsheet-native, so formulas and cross-sheet references carry real logic, and also real fragility as sheets grow." },
  { icon: Settings, title: "Automation: Alerts, Approvals & Updates", desc: "Workflow rules for notifications, approval requests, and update requests that move work along without a project manager chasing." },
  { icon: Briefcase, title: "Dashboards, Reports & WorkApps", desc: "Dashboards and reports aggregate sheet data, and WorkApps package it into simple apps for people who should not see raw sheets." },
  { icon: Layers, title: "Control Center", desc: "Blueprint-based provisioning that creates standardized project sets with their sheets, reports, and dashboards, which is how governance scales." },
  { icon: Users, title: "Resource Management", desc: "Capacity and allocation planning across projects, which depends on timely and consistent time and assignment data." },
  { icon: Code2, title: "API 2.0, Bridge & Data Shuttle", desc: "A REST API, Bridge for workflow automation, and Data Shuttle and Live Data Connector for moving and refreshing data across systems." },
]

const aiCapabilities = [
  { icon: Bot, title: "Smartsheet AI Features", desc: "Use Smartsheet's built-in AI for tasks like formula help and text transformation where it saves time, with limits on what it may change." },
  { icon: Zap, title: "LLM Steps Via the API or Bridge", desc: "Call an LLM for work the built-in features cannot do, such as summarizing a project sheet, and write the result back with an audit trail." },
  { icon: Search, title: "Intake and Update Request Triage", desc: "Classify submissions, fill missing fields, and route them to the right sheet or owner, with uncertain cases flagged for review." },
  { icon: GitBranch, title: "Cross-System Data Sync", desc: "Keep sheets aligned with Salesforce, Jira, or finance systems through Data Shuttle, Live Data Connector, or API, without conflicting writes." },
  { icon: ShieldCheck, title: "Sheet Health and Governance Audit", desc: "Find oversized sheets, brittle formulas, and unmanaged copies of templates before automation depends on them." },
  { icon: Database, title: "Readiness & Scoping", desc: "We review sheets, automation, and Control Center setup, then scope the single highest-impact use case first." },
]

const practiceExamples = [
  { title: "Project sets that provision themselves", desc: "A new project is created from a Control Center blueprint with every sheet, report, and dashboard in place, instead of a manual copy-and-rename ritual." },
  { title: "Formulas that survive growth", desc: "Fragile cross-sheet references are restructured, so sheets stay fast and accurate as they accumulate rows." },
  { title: "Status roll-ups leaders trust", desc: "Reports and dashboards draw from standardized sheets, so executive status matches what project teams see." },
]

const roles = [
  {
    icon: Settings,
    title: 'Smartsheet Solutions Architects',
    desc: "Design sheet structure, Control Center blueprints, and governance so project delivery is consistent and sheets stay fast as they grow.",
    skills: ['Control Center Architecture', 'Sheet & Workflow Design'],
  },
  {
    icon: Code2,
    title: 'Automation/API Developers',
    desc: "Build with API 2.0, Bridge, and Data Shuttle, with clear sources of truth and retry handling so syncs stay accurate.",
    skills: ['Smartsheet API', 'Custom Integration Development'],
  },
  {
    icon: Briefcase,
    title: 'Work Management Consultants',
    desc: "Standardize templates, reports, and dashboards, and train teams so the setup holds after the rollout ends.",
    skills: ['Template Standardization', 'Dashboard Configuration'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'Work Management Consultant', usOnsite: '$40 – $65/hr', remote: '$18 – $24/hr', savings: '~60% lower' },
  { role: 'Automation/API Developer', usOnsite: '$65 – $95/hr', remote: '$24 – $30/hr', savings: '~66% lower' },
  { role: 'Smartsheet Solutions Architect', usOnsite: '$60 – $90/hr', remote: '$22 – $28/hr', savings: '~67% lower' },
]

const vettingCriteria = [
  { title: "Sheet Design Exercise", desc: "Given a project process, design sheets, references, and reports that stay fast and clear as they grow. We look for restraint with cross-sheet formulas." },
  { title: "Control Center Judgment", desc: "When does a blueprint-based approach pay off, and when is it overkill? We test for pragmatic governance design." },
  { title: "Sync and Source-of-Truth Design", desc: "How would they keep Smartsheet and another system aligned without conflicting edits? That is where integrations tend to fail." },
  { title: "Production Portfolio Review", desc: "Two or three real Smartsheet builds they delivered, reviewed for what held up and what they would change." },
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
  { title: "PMOs Standardizing Project Delivery", desc: "Control Center and consistent sheet design make every project look the same where it matters. We design the blueprints and governance." },
  { title: "Teams Whose Sheets Became Unmanageable", desc: "Years of copied templates and cross-sheet formulas slow everything. We restructure so sheets stay fast and understandable." },
  { title: "Operations Teams Connecting Smartsheet to Other Systems", desc: "When data must move between Smartsheet and CRM or finance tools, we build reliable syncs with clear sources of truth." },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Account', desc: "Tell us how your sheets and workflows are structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours." },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted Smartsheet specialists matched to your stack and team size. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: 'Before any work starts, you agree the account access, integration points, and success metrics — so day one has a clear target.' },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or automation build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new teams or workflows come online, extend the engagement, or wind down — no lock-in.' },
]

const pitfalls = [
  { title: "Sheets that grew past their limits", desc: "Large sheets with heavy cross-sheet formulas slow down and hit size limits, so structure matters long before it becomes an emergency." },
  { title: "Template copies drifting apart", desc: "Without Control Center or disciplined templates, every copy diverges, and reports built on them stop agreeing." },
  { title: "Fragile cross-sheet formulas", desc: "A renamed column or moved sheet can break references silently, producing numbers that look plausible but are wrong." },
  { title: "Two-way sync without a source of truth", desc: "Syncing a sheet with another system in both directions invites conflicting edits unless one side is declared authoritative." },
  { title: "Automation nobody owns", desc: "Alert and approval workflows accumulate on shared sheets until nobody knows what fires when or why." },
]

const faqs = [
  { q: "What is Smartsheet?", a: "Smartsheet is a work management platform with a spreadsheet-style grid, used for project tracking, resource planning, and process automation. It adds dashboards, reports, WorkApps, Control Center for governed project provisioning, and a REST API with Bridge and Data Shuttle for integration." },
  { q: "Does Smartsheet have native AI, or do I need a custom build?", a: "Smartsheet includes built-in AI features such as formula assistance and text transformation. A custom build makes sense when you need an LLM working with data from other systems or logic the built-in features cannot express." },
  { q: "When do we need Control Center, and when is it overkill?", a: "Control Center pays off when many projects must follow the same structure and roll up into consistent reporting. For a few projects, disciplined templates may be enough. We recommend the lighter option when it is enough." },
  { q: "Why do large Smartsheet sheets get slow, and how do we fix them?", a: "Large sheets with many cross-sheet references and complex formulas slow down and can hit size limits. We restructure by splitting data sensibly, simplifying references, and archiving old rows, so performance and accuracy hold up." },
  { q: "How do you keep Smartsheet and another system in sync safely?", a: "We declare one side the source of truth for each field, use Data Shuttle, Live Data Connector, or the API accordingly, and add retries and logging. That avoids the conflicting edits that two-way syncs tend to create." },
  { q: "How much does it cost to hire a Smartsheet specialist through Kovil AI?", a: "Kovil AI's remote Smartsheet talent bills $18-$30 per hour depending on role and experience, versus $40-$95+ per hour for prevailing US onsite rates for the same roles — typically 60-67% lower." },
  { q: "What is the difference between a Solutions Architect, Developer, and Work Management Consultant?", a: "A Solutions Architect designs sheet structure, Control Center blueprints, and governance. An Automation/API Developer builds with the API, Bridge, and Data Shuttle. A Work Management Consultant standardizes templates and reports and helps teams adopt them." },
  { q: "Can you move our resource planning into Smartsheet properly?", a: "Yes. Resource Management depends on consistent time and assignment data, so we set simple rules for entering it and build views that planners and leaders can trust." },
  { q: "Can Kovil AI connect Smartsheet to Salesforce, Jira, or Microsoft 365?", a: "Yes. We use Data Shuttle, Live Data Connector, or the API according to the use case, with a clear source of truth so syncs do not conflict." },
  { q: "Are your Smartsheet specialists certified?", a: "We verify relevant Smartsheet experience and credentials where they exist, but weight a live sheet-design exercise and a review of shipped work at least as heavily, since credentials alone do not test judgment." },
  { q: "How quickly can I hire a Smartsheet specialist through Kovil AI?", a: "Most clients are matched with a vetted architect, developer, or consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement." },
  { q: "Who owns the sheets and automations built during an engagement?", a: "You do, 100%. All custom sheets, automations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in." },
  { q: "Do you support Smartsheet rescues or fixing a messy account?", a: "Yes. Typical rescues involve oversized sheets, fragile cross-sheet formulas, drifting template copies, or unowned automation. We audit first, then restructure in stages so teams are not disrupted." },
  { q: "Can we extend a trial engagement or convert it to a long-term hire?", a: "Yes. Most clients extend the engagement as new teams or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way." },
]

const integrations = [
  "Smartsheet API 2.0", "Bridge", "Data Shuttle", "Live Data Connector", "Control Center", "WorkApps", "Dashboards & Reports", "Resource Management", "Salesforce", "Jira", "Microsoft 365", "Google Workspace", "Slack", "SSO & SCIM",
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
  { label: 'Sheets', color: SS },
  { label: 'Automation', color: '#6EA8E0' },
  { label: 'Control Center', color: SS },
  { label: 'Dashboards', color: '#6EA8E0' },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0D2548 0%, #091B38 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${SS}33` }} />
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Smartsheet</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: SS, opacity: 0.4 }} />
            <PlatformLogoBadge slug="smartsheet" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${SS}, #0F4D90)` }}
            >
              <Grid3x3 className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">Smartsheet</p>
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
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #0B2140 0%, #071530 100%)', border: `1px solid ${SS}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${SS}, #0F4D90)` }}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Specialist Talent</p>
            <p className="text-xs text-white/50 leading-snug">Architects, devs, consultants</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SmartsheetPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Smartsheet</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SS }}>Smartsheet Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance break-words mb-6">
              Everything You Need to Run Smartsheet —<br />
              <span className="text-accent">AI Automation, and the Talent to Build It.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From AI-driven resource automation to solutions architects, developers, and work management consultants — Kovil AI is a single partner for the entire Smartsheet stack. AI automation and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-smartsheet-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Smartsheet talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Smartsheet?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Smartsheet</strong> is a collaborative work management platform with a spreadsheet-native grid interface, used by around 90% of Fortune 100 companies. It combines familiar sheet editing with automation workflows, resource management, and Control Center for standardized, repeatable project rollouts at scale. Most growing teams need both a properly structured account and, increasingly, AI-driven automation built on top of it — exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Smartsheet, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The spreadsheet-native work management standard — now with AI automation layered on top.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Smartsheet</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI & Automation Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Custom AI workflows built on top of Smartsheet's native automation and API layer — standardized Control Center rollouts, approval routing, and resource capacity alerts.
            </p>
            <a href="#ai-agents">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${SS}40`, background: `${SS}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${SS}18`, border: `1px solid ${SS}40` }}>
              <Users className="h-5 w-5" style={{ color: SS }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted solutions architects, developers, and work management consultants, matched in 48 hours. For the sheet and automation work that has to happen whether or not you're automating yet.
            </p>
            <a href="#hire-smartsheet-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Smartsheet Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Smartsheet is rarely one module — most real accounts span several of these, sharing one data model.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${SS}14`, border: `1px solid ${SS}30` }}>
                    <Icon className="h-5 w-5" style={{ color: SS }} />
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure what's slowing your rollouts down?</h3>
            <p className="text-sm text-muted-foreground">Tell us what's broken or missing on a 30-minute call — we'll scope the highest-impact fix first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI on Smartsheet */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI on Smartsheet</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your Smartsheet Account</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From configuring native automation to fully custom API workflows — here's what's possible.</p>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common automation patterns we build on Smartsheet — illustrative examples, not specific client engagements.</p>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Where Smartsheet Projects Go Wrong</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">These are the failure patterns we see most often in Smartsheet accounts. Knowing them early is the cheapest way to avoid an expensive cleanup.</p>
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

      {/* Smartsheet talent */}
      <section id="hire-smartsheet-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SS }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Smartsheet Architects, Developers & Consultants</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every specialist is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${SS}14`, border: `1px solid ${SS}30` }}>
                    <Icon className="h-5 w-5" style={{ color: SS }} />
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Smartsheet Talent: US Onsite vs. Remote</h3>
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
                    <td className="py-4 px-6 font-semibold" style={{ color: SS }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil specialist passes the same live build challenge below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Smartsheet Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Smartsheet Talent</h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-44"></th>
                <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Full-Time Hire</th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Partner Agency</th>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Smartsheet Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Smartsheet?</h2>
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
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${SS}0A`, border: `1px solid ${SS}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need a Smartsheet architect, developer, or consultant?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${SS}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Smartsheet</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/platforms/wrike', label: 'Wrike Platform', desc: 'AI automation and Wrike talent' },
            { href: '/platforms/monday', label: 'monday.com Platform', desc: 'AI automation and monday.com talent' },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Smartsheet?</h2>
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
