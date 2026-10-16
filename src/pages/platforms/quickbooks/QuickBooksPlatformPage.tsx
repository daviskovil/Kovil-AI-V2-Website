'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  GitBranch, CheckCircle2, ChevronDown, Briefcase, Settings, X, Minus,
  Receipt, Search, Clock, Boxes, CreditCard,
  AlertTriangle,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const QB = '#2CA01C' // QuickBooks Green
const QB_DARK = '#0F2E0A'

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match QuickBooks talent' },
  { stat: '2 wks', label: 'To a live automation pilot' },
  { stat: '3', label: 'Specialist role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: '7M+', label: 'small businesses run their books on QuickBooks worldwide', src: 'Intuit, 2026' },
  { value: '#1', label: 'small business accounting software in the United States', src: 'Intuit, 2026' },
  { value: '750+', label: 'apps in the QuickBooks App Store extending core accounting', src: 'Intuit App Store' },
  { value: '2–4 mo', label: 'average time to hire a dedicated QuickBooks/API specialist through traditional recruiting', src: 'Industry avg.' },
]

const modules = [
  { icon: Receipt, title: "Chart of Accounts, Classes & Locations", desc: "The structure every report rests on. Account design, classes, and locations decide whether the P&L explains itself or needs a spreadsheet to interpret it." },
  { icon: Database, title: "Bank Feeds & Rules", desc: "Imported bank transactions are matched, categorized, or excluded through rules. This is where most reconciliation time is won or lost." },
  { icon: Briefcase, title: "Invoicing & Accounts Receivable", desc: "Recurring invoices, payment links, and reminders. Combined with QuickBooks Payments, paid invoices can close themselves." },
  { icon: Users, title: "Payroll & Time", desc: "Payroll and time tracking post wages and job costs to the ledger, so how they are classified directly shapes your margins." },
  { icon: Settings, title: "Reports & Advanced Tier Features", desc: "Custom reports, and on higher tiers custom fields, workflow automation, and Excel-based reporting for larger teams." },
  { icon: Code2, title: "Intuit Developer Platform", desc: "OAuth 2.0 REST APIs and webhooks for QuickBooks Online. The route for any integration the App Store does not already cover." },
]

const aiCapabilities = [
  { icon: Bot, title: "Intuit Assist Setup & Guardrails", desc: "Configure Intuit Assist where it helps and set clear limits on what it may change, so suggestions never post straight to your books." },
  { icon: Zap, title: "LLM Categorization Over the Bank Feed", desc: "Suggest categories for transactions your rules miss, with a confidence threshold. High-confidence items are queued, uncertain ones go to a human." },
  { icon: Receipt, title: "Receipt & Bill Capture Pipelines", desc: "Extract vendor, date, tax, and totals from emailed receipts and bills, then create draft entries a bookkeeper approves in one click." },
  { icon: Search, title: "Month-End Variance Explainer", desc: "An agent compares this month with last month from the P&L and writes a plain-English summary of what moved, flagged for review before it reaches anyone." },
  { icon: GitBranch, title: "Order-to-Ledger Agents", desc: "Turn Shopify and Stripe payouts into the right gross sale, fee, refund, and deposit entries, so each bank deposit ties back to its orders." },
  { icon: ShieldCheck, title: "Books Health Audit", desc: "Find duplicate customers and vendors, stale clearing accounts, and uncategorized transactions before any automation touches the data." },
]

const practiceExamples = [
  { title: "Stripe payouts that finally tie out", desc: "A single bank deposit is rebuilt into its underlying sales, processing fees, and refunds, so the reconciliation matches without a manual adjustment." },
  { title: "A vendor list you can trust", desc: "Duplicate vendors from years of imports are merged and coded consistently, so spend reports and any later automation start from clean data." },
  { title: "A month-end checklist that runs itself", desc: "Recurring checks for uncategorized items, unmatched deposits, and unusual swings are run automatically and handed to a bookkeeper as a short review list." },
]

const roles = [
  {
    icon: Settings,
    title: 'QuickBooks Administrators',
    desc: "Own the chart of accounts, bank rules, classes, and reports. Usually the first hire for a growing file, and the person who keeps month-end from turning into a cleanup project.",
    skills: ['QuickBooks ProAdvisor', 'Chart of Accounts Design'],
  },
  {
    icon: Code2,
    title: 'QBO API Developers',
    desc: "Write code against the QuickBooks Online API and webhooks, with proper OAuth token handling, retries, and idempotency so integrations survive real-world failures.",
    skills: ['QuickBooks Online API', 'OAuth & Webhooks'],
  },
  {
    icon: Briefcase,
    title: 'App Ecosystem Consultants',
    desc: "Decide which apps and integrations to use and how data should flow between QuickBooks, your store, your payment processor, and your payroll provider.",
    skills: ['App Store Integration Strategy', 'Multi-Channel Reconciliation'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'QuickBooks Administrator', usOnsite: '$35 – $55/hr', remote: '$18 – $22/hr', savings: '~56% lower' },
  { role: 'QBO API Developer', usOnsite: '$60 – $90/hr', remote: '$22 – $29/hr', savings: '~66% lower' },
  { role: 'App Ecosystem Consultant', usOnsite: '$75 – $110/hr', remote: '$26 – $34/hr', savings: '~68% lower' },
]

const vettingCriteria = [
  { title: "Payout Reconciliation Challenge", desc: "Given a Stripe-style payout with fees and a refund, rebuild the correct QuickBooks entries so the deposit reconciles. It tests accounting sense as much as code." },
  { title: "Native-vs-Custom Judgment", desc: "When is a bank rule or App Store app enough, and when does a custom integration earn its upkeep? We test for restraint as well as skill." },
  { title: "Token and Failure Handling", desc: "We ask how they would handle expired refresh tokens, API throttling, and duplicate webhooks, because that is where integrations fail in production." },
  { title: "Production Portfolio Review", desc: "Two or three real QuickBooks integrations or cleanups they shipped, reviewed for how they handled failures and what they would change." },
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
  { title: "Shopify and Amazon Sellers", desc: "Payouts arrive net of fees, refunds, and chargebacks, which makes simple income entries wrong. We rebuild the sync so reports reflect real sales and costs." },
  { title: "Bookkeepers and Fractional CFOs", desc: "Managing many QuickBooks files means repeating the same cleanups. We standardize rules and checks across clients so quality stays consistent." },
  { title: "Businesses Deciding Whether to Outgrow QuickBooks", desc: "If multi-entity reporting or tighter controls are on the horizon, we assess whether to stay or move, and can staff a NetSuite or Acumatica project if you do." },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Books', desc: "Tell us how your accounts are structured, what's broken or manual, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours." },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted QuickBooks specialists matched to your stack and automation needs. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: 'Before any work starts, you agree the account access, integration points, and success metrics — so day one has a clear target.' },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or automation build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new automation needs come online, extend the engagement, or wind down — no lock-in.' },
]

const pitfalls = [
  { title: "Undeposited Funds as a junk drawer", desc: "Payments pile up there when deposits are never grouped, so the bank reconciliation never ties out and month-end starts with a cleanup." },
  { title: "Recording payouts as income", desc: "Syncing a net payout as revenue hides fees and refunds. Margins look better than they are until someone reconciles the processor report." },
  { title: "Duplicate customers and vendors", desc: "Repeated imports and manual entry create near-identical records that split history and break any automation that matches on name." },
  { title: "Trusting auto-categorization without review", desc: "A wrong category on a tax-sensitive account is cheap to fix in March and expensive in April. Automated entries need a review queue and an audit trail." },
  { title: "Tokens that expire quietly", desc: "QuickBooks Online refresh tokens must be renewed. An integration that ignores this works for months and then stops, with nothing visibly broken." },
]

const faqs = [
  { q: "What is QuickBooks Online, and how is it different from QuickBooks Desktop for automation?", a: "QuickBooks Online (QBO) is Intuit's cloud accounting product, with a REST API, OAuth 2.0, and webhooks, which is what modern integrations and AI automation are built on. QuickBooks Desktop is a separate installed product with a different integration model, so a Desktop file usually needs a migration or a bridge before AI automation is practical. We work primarily on QBO." },
  { q: "Does QuickBooks have native AI, or do I need a custom build?", a: "QuickBooks includes Intuit Assist, Intuit's built-in assistant for tasks such as categorization suggestions and insights, and it works within the product's own limits. A custom build makes sense when you need logic that spans systems, such as matching Stripe payouts, applying your own approval rules, or running LLM steps against your chart of accounts." },
  { q: "What can an LLM safely automate in QuickBooks, and what should stay with a human?", a: "Good fits are suggesting categories, drafting invoice reminders, summarizing variances, and flagging duplicates, all with a confidence threshold and human approval. We keep a person in the loop for anything that posts to tax-sensitive accounts, touches closed periods, or moves money, and every automated action is logged so it can be reviewed and reversed." },
  { q: "Can you reconcile Stripe or Shopify payouts into QuickBooks correctly?", a: "Yes. Payouts arrive as a net deposit after fees, refunds, and adjustments, so recording them as plain income breaks reports. We rebuild the gross sale, fee, refund, and payout entries so each bank deposit matches the orders behind it." },
  { q: "What is the Undeposited Funds problem, and can it be fixed?", a: "Undeposited Funds is a holding account for payments received but not yet deposited. When payments are never grouped into deposits, it fills with unmatched items and the bank reconciliation never ties out. We clear the backlog, set up deposit matching, and put a rule in place so it does not rebuild." },
  { q: "How much does it cost to hire a QuickBooks developer through Kovil AI?", a: "Kovil AI's remote QuickBooks talent bills $18-$34 per hour depending on role and experience, versus $35-$110+ per hour for prevailing US onsite rates for the same roles — typically 56-68% lower." },
  { q: "What is the difference between a QuickBooks Administrator, API Developer, and App Ecosystem Consultant?", a: "An Administrator owns the chart of accounts, bank rules, and reports inside the product. An API Developer writes code against the QuickBooks Online API and webhooks. An App Ecosystem Consultant decides which apps and integrations to use and how data should flow between them." },
  { q: "Does a QuickBooks ProAdvisor certification matter for this work?", a: "ProAdvisor certification shows a baseline in QuickBooks bookkeeping, and we verify it where it applies. For integration and AI work it is not enough on its own, so we also run a live build and review of shipped integrations." },
  { q: "How do API rate limits and token expiry affect QuickBooks integrations?", a: "The QuickBooks Online API limits how fast an app can call a given company, and OAuth refresh tokens must be renewed or they expire. An integration that ignores either one works in testing and then stops quietly in production. We build retries with backoff, token refresh, and alerts so failures are visible." },
  { q: "Should we stay on QuickBooks or move to an ERP like NetSuite or Acumatica?", a: "QuickBooks fits many growing businesses. Consider an ERP when you need multi-entity consolidation, complex inventory or manufacturing, or approvals and controls QuickBooks cannot enforce. We can assess that honestly, and staff NetSuite or Acumatica work if a move makes sense." },
  { q: "How quickly can I hire a QuickBooks specialist through Kovil AI?", a: "Most clients are matched with a vetted administrator, developer, or consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement." },
  { q: "Who owns the integrations and automations built during an engagement?", a: "You do, 100%. All custom integrations, automations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in." },
  { q: "Do you support QuickBooks rescues or fixing messy books?", a: "Yes. Typical rescues involve duplicate vendors and customers, a bloated chart of accounts, an Undeposited Funds backlog, or an old integration nobody maintains. We audit first, agree a cleanup plan, and fix in stages so reporting stays usable throughout." },
  { q: "Can we extend a trial engagement or convert it to a long-term hire?", a: "Yes. Most clients extend the engagement as new automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way." },
]

const integrations = [
  "QuickBooks Online API", "OAuth 2.0 & Refresh Tokens", "Webhooks", "Intuit Assist", "Bank Feeds & Rules", "Classes & Locations", "Undeposited Funds Cleanup", "Shopify", "Stripe", "PayPal", "Amazon Seller Central", "Gusto & Payroll Tools", "Zapier & Make", "Multi-Currency", "Custom Fields", "SSO",
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
  { label: 'Accounting', color: QB },
  { label: 'Payroll', color: '#7BC26F' },
  { label: 'Payments', color: QB },
  { label: 'App Ecosystem', color: '#7BC26F' },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #12250D 0%, #0F1F0A 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${QB}33` }} />
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on QuickBooks</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: QB, opacity: 0.4 }} />
            <PlatformLogoBadge slug="quickbooks" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${QB}, #1E7A11)` }}
            >
              <Receipt className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">QuickBooks Online</p>
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
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #112108 0%, #0B1805 100%)', border: `1px solid ${QB}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${QB}, #1E7A11)` }}>
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

export default function QuickBooksPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">QuickBooks</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: QB }}>QuickBooks Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
              Everything You Need to Run QuickBooks —<br />
              <span className="text-accent">AI Automation, and the Talent to Build It.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From AI-driven reconciliation automation to API developers, administrators, and app ecosystem consultants — Kovil AI is a single partner for the entire QuickBooks stack. AI automation and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-quickbooks-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire QuickBooks talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is QuickBooks?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">QuickBooks</strong>, made by Intuit, is the most widely used small business accounting platform in the United States, combining core bookkeeping with payroll, payments, time tracking, and inventory. It is extended through the QuickBooks App Store, which connects it to e-commerce platforms, payment processors, and hundreds of operational tools. Most growing businesses need both a properly configured account and, increasingly, AI-driven automation built on top of it — exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why QuickBooks, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The default small business accounting platform — now with AI automation layered on top.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on QuickBooks</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI & Automation Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Custom AI workflows built on top of QuickBooks' native Intuit Assist and API layer — reconciliation automation, e-commerce sync, and agents that act across your connected tools.
            </p>
            <a href="#ai-agents">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${QB}40`, background: `${QB}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${QB}18`, border: `1px solid ${QB}40` }}>
              <Users className="h-5 w-5" style={{ color: QB }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted QuickBooks administrators, API developers, and app ecosystem consultants, matched in 48 hours. For the configuration work that has to happen whether or not you're automating yet.
            </p>
            <a href="#hire-quickbooks-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The QuickBooks Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">QuickBooks is rarely one module — most real accounts span several of these, sharing one set of books.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${QB}14`, border: `1px solid ${QB}30` }}>
                    <Icon className="h-5 w-5" style={{ color: QB }} />
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

      {/* AI on QuickBooks */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI on QuickBooks</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your QuickBooks Account</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From configuring native Intuit Assist to fully custom API automation — here's what's possible.</p>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common automation patterns we build on QuickBooks — illustrative examples, not specific client engagements.</p>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Where QuickBooks Projects Go Wrong</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">These are the failure patterns we see most often in QuickBooks Online files. Knowing them up front is the cheapest way to avoid an expensive cleanup.</p>
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

      {/* QuickBooks talent */}
      <section id="hire-quickbooks-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: QB }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire QuickBooks Administrators, Developers & Ecosystem Consultants</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every specialist is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${QB}14`, border: `1px solid ${QB}30` }}>
                    <Icon className="h-5 w-5" style={{ color: QB }} />
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring QuickBooks Talent: US Onsite vs. Remote</h3>
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
                    <td className="py-4 px-6 font-semibold" style={{ color: QB }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil specialist passes the same live build challenge below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every QuickBooks Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire QuickBooks Talent</h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-44"></th>
                <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Full-Time Hire</th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">App Store / Agency</th>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">QuickBooks Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on QuickBooks?</h2>
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
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${QB}0A`, border: `1px solid ${QB}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need a QuickBooks administrator, developer, or consultant?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${QB}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About QuickBooks</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/platforms/sage-intacct', label: 'Sage Intacct Platform', desc: 'Sage Copilot AI agents and Intacct talent' },
            { href: '/platforms/netsuite', label: 'NetSuite Platform', desc: 'AI automation and NetSuite talent' },
            { href: '/staff-augmentation', label: 'Staff Augmentation', desc: 'Add vetted engineers without full-time overhead' },
            { href: '/platforms', label: 'All Platform Integrations', desc: 'Xero, Salesforce, HubSpot, and 28 more' },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on QuickBooks?</h2>
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
