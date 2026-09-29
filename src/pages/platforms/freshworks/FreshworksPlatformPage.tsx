'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  Headphones, Megaphone, GitBranch, Award, CheckCircle2, ChevronDown,
  Briefcase, Settings, X, Minus, Sparkles, Search, Store,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const FW = '#1FBF9F' // Freshworks Green/Teal
const FW_DARK = '#0F2E28'

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match Freshworks talent' },
  { stat: '2 wks', label: 'To a live Freddy AI pilot' },
  { stat: '4', label: 'Specialist role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: '65,000+', label: 'businesses run support, sales, and IT service on Freshworks', src: 'Freshworks, 2026' },
  { value: '100+', label: 'countries where Freshworks customers operate', src: 'Freshworks, 2026' },
  { value: '#1', label: 'rated helpdesk and ITSM software for ease of setup', src: 'G2, 2026' },
  { value: '3–5 mo', label: 'average time to hire a senior RevOps/Freshworks specialist through traditional recruiting', src: 'Industry avg.' },
]

const products = [
  { icon: Headphones, title: 'Freshdesk', desc: 'Customer support ticketing and omnichannel help desk — the product most Freshworks accounts start with.' },
  { icon: Settings, title: 'Freshservice', desc: 'IT service management (ITSM) — incident, request, and asset management for internal IT teams.' },
  { icon: Workflow, title: 'Freshsales', desc: 'CRM and sales pipeline management, unified with support data on the same customer record.' },
  { icon: Megaphone, title: 'Freshmarketer', desc: 'Marketing automation and journeys, sharing the same contact data as sales and support.' },
  { icon: Sparkles, title: 'Freddy AI Agent', desc: "Freshworks' native AI layer — autonomous ticket resolution, agent-assist, and AI-powered routing." },
  { icon: Store, title: 'Freshworks Marketplace', desc: 'Apps and integrations extending every product, built on the Freshworks Developer Kit (FDK).' },
]

const aiCapabilities = [
  { icon: Bot, title: 'Freddy AI Agent Configuration', desc: 'Configure and deploy Freddy AI Agent for autonomous ticket resolution, or Freddy Copilot for agent-assist — grounded in your real support and service data.' },
  { icon: Zap, title: 'Custom FDK Apps & Workflows', desc: "AI features that don't fit a template — custom apps built on the Freshworks Developer Kit (FDK), wired into your actual ticket and pipeline data." },
  { icon: Database, title: 'Cross-Product Data Sync', desc: 'Bi-directional sync between Freshdesk, Freshservice, and Freshsales so AI agents work from one unified customer view, not three disconnected silos.' },
  { icon: GitBranch, title: 'Cross-Platform Agent Integrations', desc: 'AI agents that reach beyond Freshworks — into Slack, Jira, Salesforce, and internal tools — through the Freshworks API or custom middleware we build.' },
  { icon: Search, title: 'Ticket Deflection & Routing Models', desc: "Custom classification and routing logic that goes beyond Freddy's defaults, tuned to your actual ticket categories and SLAs." },
  { icon: ShieldCheck, title: 'Data Quality & Permission Audits', desc: 'AI agents are only as good as the data behind them — we audit deduplication, field hygiene, and permission sets before anything goes live.' },
]

const practiceExamples = [
  { title: 'Autonomous Tier-1 ticket resolution', desc: 'Freddy AI Agent resolves password resets, order-status checks, and FAQ-style tickets end-to-end, escalating only genuinely complex cases to a human agent.' },
  { title: 'IT service requests that route themselves', desc: 'Freshservice tickets are classified, prioritized, and routed to the right queue automatically, with SLA timers starting the moment a request comes in.' },
  { title: 'One customer view across support and sales', desc: 'Freshsales and Freshdesk data sync so a rep can see open tickets before a renewal call, and support can see deal stage before making a promise.' },
]

const roles = [
  {
    icon: Settings,
    title: 'Freshdesk/Freshservice Administrators',
    desc: 'Own day-to-day support and ITSM health — SLA policies, ticket routing rules, workflow automation, and permission sets. Usually the first hire for any growing Freshworks account.',
    certs: ['SLA & Workflow Design', 'Ticket Routing Automation'],
  },
  {
    icon: Code2,
    title: 'Freshworks Developers (API/FDK)',
    desc: 'Build custom functionality when native tools run out of road — custom apps on the Freshworks Developer Kit, API integrations, and webhooks.',
    certs: ['Freshworks API', 'Custom Apps (FDK)'],
  },
  {
    icon: Briefcase,
    title: 'Freshsales & RevOps Consultants',
    desc: 'Design pipeline structure, lifecycle stages, and cross-product journeys spanning sales and marketing. The most senior tier for multi-product accounts.',
    certs: ['Freshsales Configuration', 'Journey & Pipeline Design'],
  },
  {
    icon: Bot,
    title: 'Freddy AI Specialists',
    desc: 'Configure and deploy Freddy AI Agent and Copilot, plus custom AI workflow actions grounded in your ticket and CRM data. The newest and fastest-growing Freshworks specialization.',
    certs: ['Freddy AI Agent Setup', 'Freddy Copilot Configuration'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'Freshdesk/Freshservice Administrator', usOnsite: '$40 – $60/hr', remote: '$18 – $23/hr', savings: '~59% lower' },
  { role: 'Freshworks Developer (API/FDK)', usOnsite: '$65 – $95/hr', remote: '$23 – $30/hr', savings: '~67% lower' },
  { role: 'Freddy AI Specialist', usOnsite: '$85 – $130/hr', remote: '$28 – $38/hr', savings: '~69% lower' },
  { role: 'Freshsales & RevOps Consultant', usOnsite: '$95 – $140/hr', remote: '$30 – $40/hr', savings: '~70% lower' },
]

const vettingCriteria = [
  { title: 'Live FDK & Workflow Build Challenge', desc: 'Build a working custom app or automation workflow against a realistic spec under time pressure — FDK basics, API calls, and ticket/workflow logic, not a take-home nobody reviews.' },
  { title: 'Native-vs-Custom Judgment', desc: 'For admins and developers alike, we test the judgment call that separates senior from junior: when native automation and Freddy AI defaults are enough, and when a custom build is worth it.' },
  { title: 'Cross-Product Literacy Check', desc: 'We verify hands-on experience across the specific Freshworks products you run — Freshdesk, Freshservice, Freshsales — not just one in isolation.' },
  { title: 'Production Portfolio Review', desc: "2–3 real Freshworks instances or apps they've shipped to production, reviewed for automation hygiene and lessons from what broke." },
]

const comparisonRows = [
  { dimension: 'Time to start', kovil: '24–48 hrs matched', fullTime: '3–5 months to hire', si: '4–8 weeks to mobilize', freelancer: '1–2 weeks, unvetted' },
  { dimension: 'Single accountable owner', kovil: 'yes', fullTime: 'yes', si: 'no', freelancer: 'yes' },
  { dimension: 'Delivery oversight', kovil: 'Engagement Manager audits every milestone', fullTime: 'depends on your management capacity', si: 'account manager, not technical', freelancer: 'none' },
  { dimension: 'Cross-product depth', kovil: 'Freshdesk + Freshservice + Freshsales', fullTime: 'varies', si: 'templated', freelancer: 'hit or miss' },
  { dimension: 'Risk-free trial', kovil: 'yes', fullTime: 'no', si: 'no', freelancer: 'rare' },
  { dimension: 'IP ownership', kovil: '100% yours', fullTime: '100% yours', si: 'often shared', freelancer: 'varies' },
]

const forWho = [
  { title: 'Support & IT Leaders', desc: "Your ticket volume outgrew your team's capacity, but headcount isn't approved. Get a specialist who can configure Freddy AI deflection and routing without a lengthy vendor engagement." },
  { title: 'Small Ops Teams', desc: 'One person is covering Freshdesk, Freshservice, and Freshsales, and the backlog keeps growing. Add a vetted specialist in days, scoped to exactly the workload you need covered.' },
  { title: 'Teams Mid-Migration', desc: 'Your migration onto Freshworks stalled, or your Freddy AI pilot never made it to production. We audit what\'s there and take over in milestone-gated phases — not a risky rewrite from zero.' },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Instance', desc: "Tell us which Freshworks products you run, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours." },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted Freshworks specialists (or a Freddy AI scoping call) matched to your products and stack. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: 'Before any work starts, you agree the account access, integration points, and success metrics — so day one has a clear target.' },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or AI agent build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new products or workflows come online, extend the engagement, or wind down — no lock-in.' },
]

const faqs = [
  { q: 'What is Freshworks?', a: 'Freshworks is a customer experience software suite spanning support, IT service management, sales, and marketing — built around Freshdesk (customer support), Freshservice (ITSM), Freshsales (CRM), and Freshmarketer (marketing automation), unified by a shared customer record. On top of that suite sits Freddy AI, Freshworks\' native AI layer for ticket deflection, agent assistance, and autonomous customer-facing agents.' },
  { q: 'What is the difference between Freshworks and Freddy AI?', a: "Freshworks is the underlying suite of products — Freshdesk, Freshservice, Freshsales, and Freshmarketer; Freddy AI is Freshworks' native AI layer, built on top of them. Freddy AI Agent resolves tickets and requests autonomously, while Freddy Copilot assists human agents, both grounded in your real support and CRM data." },
  { q: 'Does Kovil AI build custom AI agents on Freshworks, or only staff talent?', a: "Both, and they're often the same engagement. Clients commonly hire a Freshworks administrator to clean up ticket routing and data hygiene, then layer Freddy AI agents and custom workflow automation on top." },
  { q: 'How much does it cost to hire a Freshworks developer through Kovil AI?', a: "Kovil AI's remote Freshworks talent bills $18-$40 per hour depending on role and experience, versus $40-$140+ per hour for prevailing US onsite rates for the same roles — typically 59-70% lower, at the same skill bar. See the full role-by-role rate comparison further up this page." },
  { q: 'What is the difference between a Freshworks Administrator, Developer, and RevOps Consultant?', a: 'A Freshdesk/Freshservice Administrator configures SLAs, routing rules, and workflow automation without writing code. A Freshworks Developer builds custom apps on the Freshworks Developer Kit (FDK) and API integrations. A Freshsales & RevOps Consultant designs pipeline structure and cross-product journeys spanning sales and marketing, and is typically the most senior of the three.' },
  { q: 'How quickly can I hire a Freshworks specialist through Kovil AI?', a: 'Most clients are matched with a vetted Freshworks admin, developer, or RevOps consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement.' },
  { q: 'Do your Freshworks engineers hold official certifications?', a: "Freshworks doesn't run as extensive a formal certification program as Salesforce or HubSpot. We verify hands-on production experience across the specific products you run, plus a live build challenge, since that tests real judgment far better than a badge does." },
  { q: 'Can Kovil AI integrate Freshworks with other systems like Slack, Jira, or Salesforce?', a: 'Yes. Our Freshworks talent regularly builds integrations using the Freshworks API, FDK custom apps, Slack, Jira, and Salesforce — connecting Freshworks to whatever else your business runs on.' },
  { q: 'Who owns the code, apps, and integrations built during an engagement?', a: 'You do, 100%. All custom apps, workflows, integrations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no carve-outs, no shared IP, and no lock-in.' },
  { q: 'Can I combine a Freddy AI agent build with Freshworks staff augmentation in one engagement?', a: 'Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate a Freddy AI build alongside dedicated admin or developer talent working in the same instance.' },
  { q: 'What Freshworks products does Kovil AI have experience with?', a: 'Freshdesk, Freshservice, Freshsales, and Freshmarketer, plus integrations including Slack, Jira, and Salesforce. If your account spans multiple products, we scope the engagement around your full customer data model.' },
  { q: 'How is Kovil AI different from a traditional Freshworks implementation partner?', a: 'Traditional partners typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer or small pod directly with your team, under one Engagement Manager who audits every milestone — with a 2-week risk-free trial and no long-term lock-in.' },
  { q: 'Can we extend a trial engagement or convert it to a long-term hire?', a: 'Yes. Most clients extend the engagement as new products or AI agent use cases come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' },
  { q: 'Do you support Freshworks rescues or fixing a messy implementation?', a: 'Yes. A significant share of our Freshworks engagements start as a rescue — a support desk with broken SLAs, duplicate contacts, or a stalled Freddy AI pilot. We audit the setup and data model, then stabilize and rebuild in milestone-gated phases.' },
]

const integrations = [
  'Freshworks API', 'FDK (Developer Kit)', 'Freddy AI', 'Freshdesk', 'Freshservice', 'Freshsales',
  'Freshmarketer', 'Slack', 'Jira', 'Salesforce Sync', 'Webhooks', 'Zapier',
  'Microsoft Teams', 'SSO/SAML', 'Marketplace Apps', 'Custom Objects',
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

const productChips = [
  { label: 'Freshdesk', color: FW },
  { label: 'Freshservice', color: '#7CA69A' },
  { label: 'Freshsales', color: FW },
  { label: 'Freddy AI', color: '#7CA69A' },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0F2E28 0%, #0C231F 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${FW}33` }} />
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Freshworks</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: FW, opacity: 0.4 }} />
            <div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${FW}, #0E8A70)` }}
            >
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          <p className="font-display font-bold text-white text-lg">Freshworks Suite</p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
            {productChips.map((c) => (
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
            <p className="font-display font-bold text-sm text-white mb-1">Freddy AI</p>
            <p className="text-xs text-white/50 leading-snug">Autonomous agents, live in weeks</p>
          </div>
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #0F2A22 0%, #0A1D18 100%)', border: `1px solid ${FW}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${FW}, #0E8A70)` }}>
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

export default function FreshworksPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Freshworks</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: FW }}>Freshworks Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
              Everything You Need to Run Freshworks —<br />
              <span className="text-accent">AI Agents, and the Talent to Build Them.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From Freddy AI agents to FDK developers, admins, and RevOps consultants — Kovil AI is a single partner for the entire Freshworks suite. AI agent builds and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-freshworks-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Freshworks talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Freshworks?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Freshworks</strong> is a customer experience software suite spanning support, IT service management, sales, and marketing — built around <strong className="text-foreground">Freshdesk</strong> (customer support), <strong className="text-foreground">Freshservice</strong> (ITSM), <strong className="text-foreground">Freshsales</strong> (CRM), and <strong className="text-foreground">Freshmarketer</strong> (marketing automation), unified by a shared customer record. On top of that suite sits <strong className="text-foreground">Freddy AI</strong>, Freshworks' native AI layer for ticket deflection, agent assistance, and autonomous customer-facing agents. Most companies need both a properly configured Freshworks instance and, increasingly, AI agents built on it — exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Freshworks, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The top-rated support and ITSM suite is now a serious AI agent platform too.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Freshworks</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI Agent Integration (Freddy AI)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Autonomous agents built natively on Freshworks — configuring Freddy AI Agent and Copilot, or building custom AI workflow actions grounded in your real support and CRM data.
            </p>
            <a href="#ai-agents">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${FW}40`, background: `${FW}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${FW}18`, border: `1px solid ${FW}40` }}>
              <Users className="h-5 w-5" style={{ color: FW }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted Freshworks administrators, developers, and RevOps consultants, matched in 48 hours. For the setup work that has to happen whether or not you're building AI agents yet.
            </p>
            <a href="#hire-freshworks-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Freshworks Suite at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Freshworks is rarely one product — most real accounts span several of these, sharing one customer record.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${FW}14`, border: `1px solid ${FW}30` }}>
                    <Icon className="h-5 w-5" style={{ color: FW }} />
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure which product to start with?</h3>
            <p className="text-sm text-muted-foreground">Tell us what's broken or missing on a 30-minute call — we'll scope the highest-impact fix first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI Agents on Freshworks */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI Agents on Freshworks</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your Freshworks Instance</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From native Freddy AI configuration to fully custom FDK automation — here's what's possible.</p>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common automation patterns we build on Freshworks — illustrative examples, not specific client engagements.</p>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to scope a Freddy AI agent?</h3>
            <p className="text-sm text-background/60">Book a free 30-minute architecture call. Live pilot in 2 weeks, risk-free.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Freshworks talent */}
      <section id="hire-freshworks-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: FW }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Freshworks Administrators, Developers, RevOps Consultants & Freddy AI Specialists</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every specialist is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${FW}14`, border: `1px solid ${FW}30` }}>
                    <Icon className="h-5 w-5" style={{ color: FW }} />
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Freshworks Talent: US Onsite vs. Remote</h3>
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
                    <td className="py-4 px-6 font-semibold" style={{ color: FW }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil specialist passes the same live build challenge below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Freshworks Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Freshworks Talent</h2>
        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full text-sm min-w-[760px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-44"></th>
                <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Full-Time Hire</th>
                <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Implementation Partner</th>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Freshworks Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Freshworks?</h2>
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
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${FW}0A`, border: `1px solid ${FW}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need a Freshworks admin, developer, or RevOps consultant?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${FW}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About the Freshworks Platform</h2>
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
            { href: '/platforms/pipedrive', label: 'Pipedrive Platform', desc: 'AI automation and Pipedrive talent' },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Freshworks?</h2>
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
