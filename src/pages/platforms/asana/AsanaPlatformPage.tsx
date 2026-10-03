'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Bot, Users, Code2, ShieldCheck, Zap, Database, Workflow,
  GitBranch, CheckCircle2, ChevronDown, Briefcase, Settings, X, Minus,
  Search, ListTodo, Calendar, Network,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const AS = '#F06A6A' // Asana Coral
const AS_DARK = '#9C3A3A'

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: '48 hrs', label: 'To match Asana talent' },
  { stat: '2 wks', label: 'To a live automation pilot' },
  { stat: '3', label: 'Specialist role types we staff' },
  { stat: '100%', label: 'IP & data stay yours' },
]

const marketStats = [
  { value: 'Work Graph', label: "Asana's underlying data model connecting goals, projects, and tasks across teams", src: 'Asana, 2026' },
  { value: '150K+', label: 'paying organizations run their work on Asana', src: 'Asana, 2026' },
  { value: 'Portfolios', label: 'native cross-project reporting built for leadership visibility', src: 'Asana, 2026' },
  { value: '2–4 mo', label: 'average time to hire a dedicated Asana specialist through traditional recruiting', src: 'Industry avg.' },
]

const modules = [
  { icon: ListTodo, title: 'Projects & Tasks', desc: 'List, board, timeline, and calendar views over the same task data — the module every Asana instance is built around first.' },
  { icon: Network, title: 'Goals & Work Graph', desc: "Asana's connected data model linking company goals to the projects and tasks that drive them." },
  { icon: Workflow, title: 'Rules & Automation', desc: 'No-code automation rules for task routing, status updates, and cross-project triggers.' },
  { icon: Calendar, title: 'Portfolios & Workload', desc: 'Cross-project reporting and capacity planning for managers overseeing multiple teams.' },
  { icon: Briefcase, title: 'Forms & Intake', desc: 'Structured request forms that convert directly into tracked tasks and projects.' },
  { icon: GitBranch, title: 'Integrations & API', desc: "Asana's app directory and REST API connecting to Slack, Salesforce, and your broader stack." },
]

const aiCapabilities = [
  { icon: Bot, title: 'Native Automation Configuration', desc: "Configure and extend Asana's built-in AI features — smart status updates, goal tracking, and summarization — grounded in your real project data." },
  { icon: Zap, title: 'Custom API Automation', desc: "AI features that don't fit a template — invoking LLMs from custom integrations, wired into your actual tasks, projects, and automation rules." },
  { icon: Database, title: 'Workload & Risk Automation', desc: 'AI-assisted monitoring that catches at-risk projects and overloaded team members before a status meeting finds them.' },
  { icon: GitBranch, title: 'Cross-Platform Agent Integrations', desc: 'AI agents that reach beyond Asana — into Slack, Salesforce, and internal tools — through the Asana API or custom middleware.' },
  { icon: ShieldCheck, title: 'Data Quality Audits', desc: 'AI agents are only as good as the data behind them — we audit custom field structure and project template hygiene before anything goes live.' },
  { icon: Search, title: 'AI Readiness & Scoping', desc: 'Not sure where to start? We audit your account and integration setup, then scope the single highest-impact automation first.' },
]

const practiceExamples = [
  { title: 'Status updates that write themselves', desc: 'AI-generated project summaries roll up task activity into a digest automatically, instead of a project manager writing one by hand.' },
  { title: 'Risk flags before a deadline slips', desc: 'Custom automation surfaces projects trending off-track based on real task completion velocity, instead of a status meeting catching it too late.' },
  { title: 'Intake that routes itself', desc: 'Form submissions get triaged and assigned to the right team automatically, instead of an ops manager sorting requests by hand.' },
]

const roles = [
  {
    icon: Settings,
    title: 'Asana Solutions Architects',
    desc: 'Design the project, portfolio, and Work Graph structure for teams rolling out Asana across departments.',
    skills: ['Work Graph Architecture', 'Portfolio Design'],
  },
  {
    icon: Code2,
    title: 'API Integration Specialists',
    desc: 'Build custom integrations and automation using the Asana API when native rules run out of road.',
    skills: ['Asana API', 'Custom Integration Development'],
  },
  {
    icon: Briefcase,
    title: 'Work Management Consultants',
    desc: 'Own day-to-day project template standardization, automation rules, and adoption across growing teams.',
    skills: ['Template Standardization', 'Automation Rule Design'],
  },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [
  { role: 'Work Management Consultant', usOnsite: '$40 – $65/hr', remote: '$18 – $24/hr', savings: '~60% lower' },
  { role: 'API Integration Specialist', usOnsite: '$65 – $95/hr', remote: '$24 – $30/hr', savings: '~66% lower' },
  { role: 'Asana Solutions Architect', usOnsite: '$60 – $90/hr', remote: '$22 – $28/hr', savings: '~67% lower' },
]

const vettingCriteria = [
  { title: 'Live Automation Build Challenge', desc: 'Build a working project structure and automation rule against a realistic spec under time pressure — custom fields, rules, and portfolios, not a take-home nobody reviews.' },
  { title: 'Native-vs-Custom Judgment', desc: 'We test the judgment call that separates senior from junior: when a native rule is enough, and when a custom API integration is worth the added complexity.' },
  { title: 'Adoption & Template Design Check', desc: 'Beyond the build, we test whether the specialist understands rollout and adoption — a technically perfect project template nobody uses is a wasted engagement.' },
  { title: 'Production Portfolio Review', desc: '2–3 real Asana accounts or integrations they have shipped to production, reviewed for reliability and lessons from what broke.' },
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
  { title: 'Cross-Functional Teams', desc: "Marketing, product, and ops all run on Asana but with inconsistent templates and no shared automation standard. Get an architect who can unify it." },
  { title: 'Leadership Teams Needing Visibility', desc: 'Project status lives in a dozen disconnected boards, and portfolio reporting takes a day to assemble manually. We build the Work Graph structure that fixes it.' },
  { title: 'Teams Migrating From Spreadsheets', desc: 'Your workflows still live in shared spreadsheets. We migrate your process into structured projects and automation in milestone-gated phases.' },
]

const timeline = [
  { day: 'Day 1', title: 'Brief Your Account', desc: "Tell us how your projects and portfolios are structured, what's broken or missing, and whether you need automation, dedicated talent, or both. A Delivery Lead scopes it within 24 hours." },
  { day: 'Day 2–3', title: 'Meet Your Match', desc: 'Review 2–3 vetted Asana specialists matched to your stack and team size. Interview and choose your fit.' },
  { day: 'Day 3–4', title: 'Access & Plan Locked', desc: 'Before any work starts, you agree the account access, integration points, and success metrics — so day one has a clear target.' },
  { day: 'Week 1+', title: 'Build & Iterate', desc: 'Your specialist or automation build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you.' },
  { day: 'Ongoing', title: 'Scale or Wind Down', desc: 'Add talent as new teams or workflows come online, extend the engagement, or wind down — no lock-in.' },
]

const faqs = [
  { q: 'What is Asana?', a: 'Asana is a work management platform built around the Work Graph — a connected data model linking company goals to the projects and tasks that drive them. It is used by over 150,000 paying organizations to plan, track, and report on work across teams.' },
  { q: 'Does Asana have native AI, or do I need a custom build?', a: "Asana ships built-in AI features for smart status updates, goal tracking, and summarization. Kovil AI configures those natively and builds custom API automation where they aren't enough." },
  { q: 'Does Kovil AI build custom automation on Asana, or only staff talent?', a: "Both, and they're often the same engagement. Clients commonly hire a work management consultant to standardize project templates, then layer AI-driven automation on top." },
  { q: 'How much does it cost to hire an Asana specialist through Kovil AI?', a: "Kovil AI's remote Asana talent bills $18-$30 per hour depending on role and experience, versus $40-$95+ per hour for prevailing US onsite rates for the same roles — typically 60-67% lower." },
  { q: 'What is the difference between a Solutions Architect, API Specialist, and Work Management Consultant?', a: 'A Solutions Architect designs the project, portfolio, and Work Graph structure. An API Integration Specialist builds custom integrations using the Asana API. A Work Management Consultant owns template standardization and automation rules day to day.' },
  { q: 'How quickly can I hire an Asana specialist through Kovil AI?', a: 'Most clients are matched with a vetted architect, specialist, or consultant within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement.' },
  { q: 'Are your Asana specialists certified?', a: "We verify relevant platform experience and credentials where they exist, but weight a live automation build challenge and production portfolio review just as heavily, since that tests engineering judgment a certification alone doesn't cover." },
  { q: 'Can Kovil AI integrate Asana with other systems like Slack or Salesforce?', a: 'Yes. Our Asana talent regularly builds integrations using the REST API and custom middleware — connecting Asana to Slack, Salesforce, and whatever else your business runs on.' },
  { q: 'Who owns the projects and automations built during an engagement?', a: 'You do, 100%. All custom project templates, automations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in.' },
  { q: 'Can I combine an AI automation build with Asana staff augmentation in one engagement?', a: 'Yes. A single Engagement Manager can coordinate an automation build alongside dedicated architect or specialist talent working in the same account.' },
  { q: 'What does Kovil AI typically build on top of Asana?', a: 'AI-generated status digests, at-risk project scoring, automated intake triage, and custom API integrations with sales and support tools.' },
  { q: 'How is Kovil AI different from an Asana Solutions Partner agency or freelancer?', a: 'A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist under an Engagement Manager who audits every milestone, with a 2-week risk-free trial and no long-term lock-in.' },
  { q: 'Can we extend a trial engagement or convert it to a long-term hire?', a: 'Yes. Most clients extend the engagement as new teams or automation needs come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' },
  { q: 'Do you support Asana rescues or fixing a messy account?', a: 'Yes. A meaningful share of our Asana engagements start as a rescue — inconsistent project templates, duplicate automations, or a rollout that lost adoption. We audit the account and automation layer, then stabilize and rebuild in milestone-gated phases.' },
]

const integrations = [
  'Asana API', 'Webhooks', 'Rules & Automation', 'Portfolios', 'Work Graph', 'Forms API',
  'Slack', 'Salesforce', 'Zapier', 'Microsoft Teams', 'Google Workspace', 'SSO',
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
  { label: 'Projects', color: AS },
  { label: 'Goals', color: '#F6A0A0' },
  { label: 'Portfolios', color: AS },
  { label: 'Rules', color: '#F6A0A0' },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #3A1212 0%, #280D0D 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${AS}33` }} />
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Asana</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: AS, opacity: 0.4 }} />
            <PlatformLogoBadge slug="asana" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${AS}, #B33F3F)` }}
            >
              <ListTodo className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">Asana</p>
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
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #331515 0%, #220D0D 100%)', border: `1px solid ${AS}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${AS}, #B33F3F)` }}>
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

export default function AsanaPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Asana</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AS_DARK }}>Asana Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance break-words mb-6">
              Everything You Need to Run Asana —<br />
              <span className="text-accent">AI Automation, and the Talent to Build It.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From AI-driven workload automation to solutions architects, API specialists, and work management consultants — Kovil AI is a single partner for the entire Asana stack. AI automation and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-asana-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Asana talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Asana?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Asana</strong> is a work management platform built around the Work Graph — a connected data model linking company goals to the projects and tasks that drive them, used by over 150,000 paying organizations to plan, track, and report on work across teams. Most growing teams need both a properly structured account and, increasingly, AI-driven automation built on top of it — exactly the gap Kovil AI fills.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Asana, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The connected work management standard — now with AI automation layered on top.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Asana</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI & Automation Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Custom AI workflows built on top of Asana's native automation and API layer — AI-generated status digests, risk scoring, and automated intake.
            </p>
            <a href="#ai-agents">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${AS}40`, background: `${AS}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${AS}18`, border: `1px solid ${AS}40` }}>
              <Users className="h-5 w-5" style={{ color: AS }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted solutions architects, API specialists, and work management consultants, matched in 48 hours. For the project work that has to happen whether or not you're automating yet.
            </p>
            <a href="#hire-asana-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Asana Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Asana is rarely one module — most real accounts span several of these, sharing one Work Graph.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${AS}14`, border: `1px solid ${AS}30` }}>
                    <Icon className="h-5 w-5" style={{ color: AS }} />
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure what's slowing your projects down?</h3>
            <p className="text-sm text-muted-foreground">Tell us what's broken or missing on a 30-minute call — we'll scope the highest-impact fix first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI on Asana */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI on Asana</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do Inside Your Asana Account</h2>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common automation patterns we build on Asana — illustrative examples, not specific client engagements.</p>
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

      {/* Asana talent */}
      <section id="hire-asana-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AS_DARK }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Asana Architects, Specialists & Consultants</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every specialist is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${AS}14`, border: `1px solid ${AS}30` }}>
                    <Icon className="h-5 w-5" style={{ color: AS }} />
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Asana Talent: US Onsite vs. Remote</h3>
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
                    <td className="py-4 px-6 font-semibold" style={{ color: AS }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil specialist passes the same live build challenge below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Asana Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Asana Talent</h2>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Asana Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Asana?</h2>
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
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${AS}0A`, border: `1px solid ${AS}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need an Asana architect, specialist, or consultant?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${AS}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Asana</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { href: '/platforms/monday', label: 'monday.com Platform', desc: 'AI automation and monday.com talent' },
            { href: '/platforms/atlassian', label: 'Atlassian Platform', desc: 'Rovo AI agents and Jira/Confluence talent' },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Asana?</h2>
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
