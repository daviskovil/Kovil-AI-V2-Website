'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Award, Blocks, Bot, CheckCircle2, ChevronDown, Code2, Database, GitBranch, Image, Languages, Layers, Lock, Minus, Network, Plug, Search, Server, ShieldCheck, Users, X, Zap,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const BR = "#8E75FF"
const BR_LIGHT = "#C1B3FF"

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [{"stat":"48 hrs","label":"To match Strapi talent"},{"stat":"2 wks","label":"To a live AI pilot"},{"stat":"3","label":"Role types we staff"},{"stat":"100%","label":"IP & data stay yours"}]

const marketStats = [{"value":"Open source","label":"self-hostable headless CMS with a large community and plugin ecosystem","src":"Strapi, 2026"},{"value":"Node.js","label":"built on a language most web teams already know, so customization stays in-house friendly","src":"Strapi, 2026"},{"value":"REST + GraphQL","label":"both API styles generated automatically from your content types","src":"Strapi, 2026"},{"value":"2–4 mo","label":"average time to hire a senior Strapi/Node.js developer through traditional recruiting","src":"Industry avg."}]

const modules = [
  { icon: Blocks, title: "Content-Type Builder", desc: "Define collection and single types with fields, relations, and components through a visual builder." },
  { icon: Network, title: "REST & GraphQL APIs", desc: "APIs generated automatically from your content types, with filtering, population, and pagination." },
  { icon: Lock, title: "Roles & Permissions", desc: "Granular role-based access for admin users and API consumers." },
  { icon: Plug, title: "Plugins & Customization", desc: "Custom controllers, services, lifecycle hooks, and plugins that extend the backend in Node.js." },
  { icon: Image, title: "Media Library", desc: "Asset management with providers for cloud storage and image processing." },
  { icon: Server, title: "Self-Hosted or Cloud", desc: "Run Strapi on your own infrastructure or on a managed cloud, keeping data and deployment under your control." },
]

const aiCapabilities = [
  { icon: Bot, title: "AI-Assisted Content Plugins", desc: "Plugins that draft, summarize, and tag content from within the admin panel, with editors approving before publish." },
  { icon: Zap, title: "Custom LLM Workflows", desc: "Lifecycle hooks and services that call LLMs to enrich content — alt text, SEO metadata, translations — as it is created." },
  { icon: Languages, title: "AI-Assisted Localization", desc: "Translate and adapt content across locales with brand-voice guardrails and regional review." },
  { icon: GitBranch, title: "Content-to-Frontend Pipelines", desc: "Connect Strapi to search, commerce, and frontends so enriched content flows straight into live experiences." },
  { icon: ShieldCheck, title: "Backend & Permission Audits", desc: "Before adding AI, we audit permissions, API exposure, and upgrade state so automation cannot reach what it should not." },
  { icon: Search, title: "Readiness & Scoping", desc: "Not sure where to start? We audit your Strapi project and scope the single highest-impact AI use case first." },
]

const practiceExamples = [{"title":"Metadata generated as content is saved","desc":"A lifecycle hook produces alt text and SEO descriptions on save, which editors can accept or adjust instead of writing from scratch."},{"title":"An upgrade done without a freeze","desc":"An outdated Strapi project is migrated to the current major version in stages, with the site staying live throughout."},{"title":"Self-hosting that scales","desc":"A containerized, monitored deployment with backups replaces a single fragile server."}]

const roles = [
  { icon: Code2, title: "Node.js / Strapi Developers", desc: "Build content types, custom controllers, services, and plugins that follow Strapi conventions and stay upgradeable.", skills: ["Strapi v5","Custom plugins & hooks","Node.js / TypeScript"] },
  { icon: Layers, title: "Jamstack Engineers", desc: "Build fast frontends in Next.js, Nuxt, or Astro that consume the Strapi API with proper caching and preview.", skills: ["Next.js / Nuxt","API consumption","Static & ISR rendering"] },
  { icon: Server, title: "Strapi DevOps & Self-Hosting Engineers", desc: "Handle deployment, scaling, backups, and upgrades of self-hosted Strapi so it stays reliable.", skills: ["Docker & CI/CD","Database & backups","Upgrades & scaling"] },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [{"role":"Node.js / Strapi Developer","usOnsite":"$65 – $100/hr","remote":"$22 – $30/hr","savings":"~68% lower"},{"role":"Jamstack Engineer","usOnsite":"$70 – $110/hr","remote":"$24 – $32/hr","savings":"~69% lower"},{"role":"Strapi DevOps & Self-Hosting Engineer","usOnsite":"$75 – $115/hr","remote":"$26 – $34/hr","savings":"~68% lower"}]

const vettingCriteria = [{"title":"Live Strapi Build Challenge","desc":"Model content types and build a custom endpoint or plugin against a realistic spec, with permissions set correctly — not a take-home nobody reviews."},{"title":"Upgrade-Safety Judgment","desc":"We test whether they customize in ways that survive major upgrades — conventions over hacks — since that is what decides long-term maintainability."},{"title":"Platform Experience Verification","desc":"We verify claimed Strapi experience and any certifications directly, but weight the live build and production portfolio just as heavily — credentials alone do not prove production judgment."},{"title":"Production Portfolio Review","desc":"2–3 real Strapi projects they have shipped to production, reviewed for maintainability and lessons from what broke."}]

const comparisonRows = [{"dimension":"Time to start","kovil":"24–48 hrs matched","fullTime":"2–4 months to hire","si":"4–8 weeks to mobilize","freelancer":"1–2 weeks, unvetted"},{"dimension":"Experience verified","kovil":"yes","fullTime":"self-reported","si":"yes","freelancer":"self-reported"},{"dimension":"Single accountable owner","kovil":"yes","fullTime":"yes","si":"no","freelancer":"yes"},{"dimension":"Delivery oversight","kovil":"Engagement Manager audits every milestone","fullTime":"depends on your management capacity","si":"account manager, not technical","freelancer":"none"},{"dimension":"Risk-free trial","kovil":"yes","fullTime":"no","si":"no","freelancer":"rare"},{"dimension":"IP ownership","kovil":"100% yours","fullTime":"100% yours","si":"often shared","freelancer":"varies"}]

const forWho = [{"title":"Teams That Want Control and Self-Hosting","desc":"You need data and deployment under your control. Get engineers who run Strapi reliably on your infrastructure."},{"title":"Teams Moving Off a Traditional CMS","desc":"You are going headless. We model content, migrate it, and rebuild the frontend without a long freeze."},{"title":"Teams With an Outdated Project","desc":"An old Strapi version and brittle custom code hold you back. We audit and upgrade in staged milestones."}]

const timeline = [{"day":"Day 1","title":"Brief Your Project","desc":"Tell us how you use Strapi, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours."},{"day":"Day 2–3","title":"Meet Your Match","desc":"Review 2–3 vetted Strapi specialists (or an AI scoping call) matched to your stack and scale. Interview and choose your fit."},{"day":"Day 3–4","title":"Access & Plan Locked","desc":"Before any work starts, you agree repository and hosting access, deployment process, and success metrics — so day one has a clear target."},{"day":"Week 1+","title":"Build & Iterate","desc":"Your specialist or AI build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you."},{"day":"Ongoing","title":"Scale or Wind Down","desc":"Add talent as scope grows, extend the engagement, or wind down — no lock-in."}]

const faqs = [
  {
    "q": "What is Strapi?",
    "a": "Strapi is an open-source headless CMS built on Node.js that lets teams define content types and expose them through REST and GraphQL APIs, with full control over hosting and customization."
  },
  {
    "q": "Does Strapi have native AI, or do I need a custom build?",
    "a": "Strapi's open, plugin-based architecture makes it straightforward to add AI features through plugins and custom code. Kovil AI configures what is available natively and builds custom LLM workflows and integrations where it isn't."
  },
  {
    "q": "Does Kovil AI build custom AI on Strapi, or only staff talent?",
    "a": "Both, and they're often the same engagement. Clients commonly hire a Node.js/Strapi developer to clean up content types, permissions, and deployment first, then add AI-assisted content workflows on top of a backend that is already solid."
  },
  {
    "q": "How much does it cost to hire a Strapi developer through Kovil AI?",
    "a": "Kovil AI's remote Strapi talent bills $22-$34 per hour depending on role and experience, versus $65-$115+ per hour for prevailing US onsite rates for the same roles — typically 68-69% lower."
  },
  {
    "q": "What is the difference between a Strapi Developer, Jamstack Engineer, and DevOps Engineer?",
    "a": "A Node.js/Strapi Developer builds content types, custom controllers, and plugins. A Jamstack Engineer builds the frontends that consume the API. A Strapi DevOps & Self-Hosting Engineer handles deployment, scaling, backups, and upgrades of self-hosted instances."
  },
  {
    "q": "How quickly can I hire a Strapi specialist through Kovil AI?",
    "a": "Most clients are matched with a vetted specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
  },
  {
    "q": "Are your Strapi specialists certified?",
    "a": "We verify relevant platform experience and certifications where they exist, but weight a live build challenge and production portfolio review just as heavily, since credentials alone do not test real production judgment."
  },
  {
    "q": "Can Kovil AI integrate Strapi with our frontend, search, and commerce stack?",
    "a": "Yes. Our Strapi talent regularly builds integrations with Next.js and Nuxt frontends, Algolia search, Stripe, and commerce platforms through the API and webhooks."
  },
  {
    "q": "Who owns the work built during an engagement?",
    "a": "You do, 100%. All code, configuration, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
  },
  {
    "q": "Can I combine an AI build with Strapi staff augmentation in one engagement?",
    "a": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated specialist talent working in the same project."
  },
  {
    "q": "What does Kovil AI typically build on Strapi?",
    "a": "Content-type design, custom plugins and lifecycle hooks, REST and GraphQL API optimization, Jamstack frontends, self-hosted deployment on cloud infrastructure, and AI-assisted content workflows."
  },
  {
    "q": "How is Kovil AI different from a Strapi partner agency or freelancer?",
    "a": "A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist or small pod under an Engagement Manager who audits every milestone, with a 2-week risk-free trial and no lock-in."
  },
  {
    "q": "Can we extend a trial engagement or convert it to a long-term hire?",
    "a": "Yes. Most clients extend the engagement as scope grows, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
  },
  {
    "q": "Do you support Strapi rescues or fixing a fragile deployment?",
    "a": "Yes. A meaningful share of our Strapi engagements start as a rescue — an outdated version, brittle custom code, an unscalable self-hosted setup, or a stalled v4-to-v5 upgrade. We audit it, then stabilize and upgrade in milestone-gated phases."
  }
]

const integrations = ["Content-Type Builder","REST API","GraphQL","Lifecycle Hooks","Plugins","Next.js","Nuxt","PostgreSQL","Docker","Algolia","Stripe","SSO/SAML"]

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
  { label: "Content Types", color: BR },
  { label: "REST & GraphQL", color: BR_LIGHT },
  { label: "Plugins", color: BR },
  { label: "Self-Hosted", color: BR_LIGHT },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1D1550 0%, #120D36 55%, #0A0A0D 100%)' }}
    >
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl" style={{ background: `${BR}33` }} />
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Strapi</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: BR, opacity: 0.4 }} />
            <PlatformLogoBadge slug="strapi" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${BR}, #5A3FD6)` }}
            >
              <Database className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">Strapi Headless CMS</p>
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
            <p className="font-display font-bold text-sm text-white mb-1">Content AI</p>
            <p className="text-xs text-white/50 leading-snug">AI workflows, live in weeks</p>
          </div>
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #1D1550 0%, #120D36 100%)', border: `1px solid ${BR}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${BR}, #5A3FD6)` }}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Specialist Talent</p>
            <p className="text-xs text-white/50 leading-snug">Node.js devs, Jamstack, DevOps</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function StrapiPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Strapi</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: BR }}>Strapi Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance break-words mb-6">
              Everything You Need to Run Strapi —<br />
              <span className="text-accent">AI Agents, and the Talent to Build Them.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From AI-assisted content workflows to Node.js/Strapi developers, Jamstack engineers, and self-hosting specialists — Kovil AI is a single partner for the entire Strapi platform. AI agent builds and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-strapi-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Strapi talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Strapi?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Strapi</strong> is an open-source headless CMS built on Node.js that lets teams define content types and expose them through REST and GraphQL APIs, with full control over hosting and customization. Its open architecture makes it a natural base for custom <strong className="text-foreground">AI-assisted content workflows</strong> — exactly where Kovil AI's Strapi engineers and AI specialists work.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Strapi, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The open-source headless CMS teams choose for control — and a flexible base for custom AI workflows.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((s) => (
              <div key={s.label} className="border-t-2 border-accent/40 pt-4">
                <p className="font-display font-black text-4xl text-accent mb-2 break-words">{s.value}</p>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Strapi</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI Agent Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              AI-assisted content workflows built on Strapi — through plugins and custom code that draft, tag, and translate content grounded in your content types.
            </p>
            <a href="#ai-agents">
              <Button variant="accent" size="sm" className="rounded-full">
                See AI capabilities <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
          <div className="rounded-2xl border p-8" style={{ borderColor: `${BR}40`, background: `${BR}08` }}>
            <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${BR}18`, border: `1px solid ${BR}40` }}>
              <Users className="h-5 w-5" style={{ color: BR }} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Vetted Node.js/Strapi developers, Jamstack engineers, and DevOps specialists, matched in 48 hours. For the CMS work that has to happen whether or not you're building AI yet.
            </p>
            <a href="#hire-strapi-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Strapi Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Strapi is rarely just a content tool — most real projects combine several of these under one self-managed backend.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.div key={c.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-background p-6 transition-colors">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${BR}14`, border: `1px solid ${BR}30` }}>
                    <Icon className="h-5 w-5" style={{ color: BR }} />
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure where AI fits in your content stack?</h3>
            <p className="text-sm text-muted-foreground">Tell us where content work is slow on a 30-minute call — we'll scope the highest-impact use case first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI on platform */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI Agents on Strapi</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do With Your Strapi Project</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From native AI configuration to fully custom LLM integrations — here's what's possible.</p>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common patterns we build on Strapi — illustrative examples, not specific client engagements.</p>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to scope a Strapi AI build?</h3>
            <p className="text-sm text-background/60">Book a free 30-minute architecture call. Live pilot in 2 weeks, risk-free.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Talent */}
      <section id="hire-strapi-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BR }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Strapi Developers, Jamstack Engineers & Self-Hosting Specialists</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every specialist is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {roles.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-background p-7">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center mb-4" style={{ background: `${BR}14`, border: `1px solid ${BR}30` }}>
                    <Icon className="h-5 w-5" style={{ color: BR }} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {r.skills?.map((s) => (
                      <span key={s} className="inline-flex items-center gap-1 text-[10px] font-medium text-foreground/70 bg-muted px-2 py-1 rounded-md">
                        <CheckCircle2 className="h-2.5 w-2.5" />{s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Strapi Talent: US Onsite vs. Remote</h3>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Prevailing 2026 US onsite hourly rates vs. Kovil AI's vetted remote talent — <strong className="text-foreground">$18–$45/hr</strong> depending on role and experience, at the same vetting bar.
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
                    <td className="py-4 px-6 font-semibold" style={{ color: BR }}>{row.remote}</td>
                    <td className="py-4 px-6"><span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{row.savings}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil specialist passes the same live build challenge and experience verification below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Strapi Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Strapi Talent</h2>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Strapi Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Strapi?</h2>
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
        <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6" style={{ background: `${BR}0A`, border: `1px solid ${BR}30` }}>
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Need a Strapi developer, Jamstack engineer, or DevOps specialist?</h3>
            <p className="text-sm text-muted-foreground">Matched in 48 hours. 2-week risk-free trial. No lock-in.</p>
          </div>
          <Link href="/staff-augmentation">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11 shrink-0" style={{ borderColor: `${BR}50` }}>Explore Staff Augmentation <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Strapi</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{"href":"/platforms/contentful","label":"Contentful Platform","desc":"Headless CMS AI and Contentful talent"},{"href":"/platforms/webflow","label":"Webflow Platform","desc":"Web AI and Webflow talent"},{"href":"/platforms/algolia","label":"Algolia Platform","desc":"AI search and Algolia talent"},{"href":"/platforms","label":"All Platform Integrations","desc":"Salesforce, HubSpot, NetSuite, and 36 more"}].map((link) => (
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Strapi?</h2>
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
