'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Award, Blocks, Bot, CheckCircle2, ChevronDown, Code2, Database, FileText, GitBranch, Languages, Minus, Network, Plug, ShieldCheck, Sparkles, Users, Workflow, X, Zap,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const BR = "#2478CC"
const BR_LIGHT = "#8CC0F2"

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [{"stat":"48 hrs","label":"To match Contentful talent"},{"stat":"2 wks","label":"To a live AI pilot"},{"stat":"3","label":"Role types we staff"},{"stat":"100%","label":"IP & data stay yours"}]

const marketStats = [{"value":"API-first","label":"content delivered through REST and GraphQL APIs to any channel, not tied to one website","src":"Contentful, 2026"},{"value":"AI Actions","label":"Contentful's built-in way to generate, translate, and transform content inside the editor","src":"Contentful, 2026"},{"value":"Composable","label":"content that plugs into best-of-breed commerce, search, and personalization tools","src":"Contentful, 2026"},{"value":"3–5 mo","label":"average time to hire a senior headless CMS engineer through traditional recruiting","src":"Industry avg."}]

const modules = [
  { icon: Blocks, title: "Content Modeling", desc: "Structured content types, fields, and relationships — the foundation every channel depends on." },
  { icon: Network, title: "Content Delivery APIs", desc: "REST and GraphQL APIs with a global CDN for fast, cacheable content delivery." },
  { icon: Sparkles, title: "AI Actions", desc: "In-editor AI for generating, rewriting, translating, and summarizing content." },
  { icon: Languages, title: "Localization", desc: "Per-field locales and translation workflows for multi-region content." },
  { icon: Workflow, title: "Workflows & Roles", desc: "Editorial workflows, approvals, and granular permissions for larger content teams." },
  { icon: Plug, title: "Apps & Marketplace", desc: "Custom apps and integrations that extend the editor and connect to external tools." },
]

const aiCapabilities = [
  { icon: Bot, title: "AI Actions Configuration", desc: "Set up and govern Contentful's AI Actions so editors get useful, on-brand generation and translation without prompt-engineering from scratch." },
  { icon: Zap, title: "Custom LLM Content Workflows", desc: "Pipelines that draft, tag, and translate content from your content model with human review before anything publishes." },
  { icon: Languages, title: "AI-Assisted Localization", desc: "Translate and adapt content across locales with glossary and brand-voice guardrails, reviewed by regional editors." },
  { icon: GitBranch, title: "Content-to-Experience Pipelines", desc: "Connect Contentful to search, commerce, and personalization so AI-enriched content flows into live experiences." },
  { icon: ShieldCheck, title: "Content Model & Quality Audits", desc: "Before scaling AI generation, we audit the content model, validation, and governance so output stays consistent." },
  { icon: Database, title: "Readiness & Scoping", desc: "Not sure where to start? We audit your space and scope the single highest-impact AI use case first." },
]

const practiceExamples = [{"title":"Drafts, tags, and translations in minutes","desc":"Editors generate a first draft and metadata from a brief, then review and approve instead of writing from a blank page."},{"title":"A content model that finally makes sense","desc":"Duplicated and ad-hoc content types are consolidated into a governed model that every frontend can rely on."},{"title":"Faster pages through smarter queries","desc":"GraphQL queries and caching are restructured so pages load quickly even with deeply linked content."}]

const roles = [
  { icon: Code2, title: "Headless CMS Frontend Engineers", desc: "Build fast, maintainable frontends in Next.js and similar frameworks that consume Contentful content cleanly.", skills: ["Next.js / React","Contentful SDKs","Preview & ISR"] },
  { icon: Network, title: "GraphQL & API Specialists", desc: "Design efficient queries, caching, and integrations so content delivery stays fast as the model grows.", skills: ["GraphQL","Delivery & Management APIs","Caching strategy"] },
  { icon: Blocks, title: "Content Modeling Architects", desc: "Design content types, relationships, and governance — the structure everything else depends on.", skills: ["Content model design","Localization strategy","Governance & workflows"] },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [{"role":"Headless CMS Frontend Engineer","usOnsite":"$75 – $115/hr","remote":"$24 – $32/hr","savings":"~71% lower"},{"role":"GraphQL & API Specialist","usOnsite":"$80 – $120/hr","remote":"$26 – $34/hr","savings":"~70% lower"},{"role":"Content Modeling Architect","usOnsite":"$90 – $140/hr","remote":"$30 – $40/hr","savings":"~70% lower"}]

const vettingCriteria = [{"title":"Live Content Build Challenge","desc":"Model a realistic content domain and build a frontend that consumes it with preview support — not a take-home nobody reviews."},{"title":"Content-Model Judgment","desc":"We test whether they model for reuse and change — references, validation, and localization — rather than one-off fields that become debt."},{"title":"Platform Experience Verification","desc":"We verify claimed Contentful experience and any certifications directly, but weight the live build and production portfolio just as heavily — credentials alone do not prove production judgment."},{"title":"Production Portfolio Review","desc":"2–3 real Contentful projects they have shipped to production, reviewed for maintainability and lessons from what broke."}]

const comparisonRows = [{"dimension":"Time to start","kovil":"24–48 hrs matched","fullTime":"3–5 months to hire","si":"4–8 weeks to mobilize","freelancer":"1–2 weeks, unvetted"},{"dimension":"Experience verified","kovil":"yes","fullTime":"self-reported","si":"yes","freelancer":"self-reported"},{"dimension":"Single accountable owner","kovil":"yes","fullTime":"yes","si":"no","freelancer":"yes"},{"dimension":"Delivery oversight","kovil":"Engagement Manager audits every milestone","fullTime":"depends on your management capacity","si":"account manager, not technical","freelancer":"none"},{"dimension":"Risk-free trial","kovil":"yes","fullTime":"no","si":"no","freelancer":"rare"},{"dimension":"IP ownership","kovil":"100% yours","fullTime":"100% yours","si":"often shared","freelancer":"varies"}]

const forWho = [{"title":"Teams Replacing a Monolithic CMS","desc":"You are moving off a legacy CMS and want a composable stack. Get engineers who migrate content and rebuild the frontend without a freeze."},{"title":"Multi-Brand & Multi-Region Teams","desc":"Content is duplicated across sites and locales. We design a shared model and localization workflow that scales."},{"title":"Content Teams Drowning in Volume","desc":"Editors cannot keep up with drafting, tagging, and translating. We add AI-assisted workflows with human review."}]

const timeline = [{"day":"Day 1","title":"Brief Your Space","desc":"Tell us how you use Contentful, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours."},{"day":"Day 2–3","title":"Meet Your Match","desc":"Review 2–3 vetted Contentful specialists (or an AI scoping call) matched to your stack and scale. Interview and choose your fit."},{"day":"Day 3–4","title":"Access & Plan Locked","desc":"Before any work starts, you agree space and environment access, content-model change process, and success metrics — so day one has a clear target."},{"day":"Week 1+","title":"Build & Iterate","desc":"Your specialist or AI build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you."},{"day":"Ongoing","title":"Scale or Wind Down","desc":"Add talent as scope grows, extend the engagement, or wind down — no lock-in."}]

const faqs = [
  {
    "q": "What is Contentful?",
    "a": "Contentful is a headless content management platform that stores structured content and delivers it through APIs to any website, app, or channel, separating content from presentation."
  },
  {
    "q": "Does Contentful have native AI, or do I need a custom build?",
    "a": "Contentful offers native AI features, including AI Actions for generating and transforming content within the editor. Kovil AI configures those natively and builds custom LLM workflows and integrations where they aren't enough."
  },
  {
    "q": "Does Kovil AI build custom AI on Contentful, or only staff talent?",
    "a": "Both, and they're often the same engagement. Clients commonly hire a content-modeling architect or developer to clean up the content model first, then add AI-assisted content operations on top of a structure that is already well-designed."
  },
  {
    "q": "How much does it cost to hire a Contentful developer through Kovil AI?",
    "a": "Kovil AI's remote Contentful talent bills $24-$40 per hour depending on role and experience, versus $75-$140+ per hour for prevailing US onsite rates for the same roles — typically 70-71% lower."
  },
  {
    "q": "What is the difference between a Frontend Engineer, GraphQL/API Specialist, and Content Modeling Architect?",
    "a": "A Headless CMS Frontend Engineer builds sites and apps that consume Contentful content. A GraphQL/API Specialist designs efficient queries, caching, and integrations. A Content Modeling Architect designs the content types, relationships, and governance that everything else depends on."
  },
  {
    "q": "How quickly can I hire a Contentful specialist through Kovil AI?",
    "a": "Most clients are matched with a vetted specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
  },
  {
    "q": "Are your Contentful specialists certified?",
    "a": "We verify relevant platform experience and certifications where they exist, but weight a live build challenge and production portfolio review just as heavily, since credentials alone do not test real production judgment."
  },
  {
    "q": "Can Kovil AI integrate Contentful with our commerce, search, and personalization tools?",
    "a": "Yes. Our Contentful talent regularly builds integrations with Shopify, BigCommerce, Algolia, and personalization platforms through the Content Management and Delivery APIs and webhooks."
  },
  {
    "q": "Who owns the work built during an engagement?",
    "a": "You do, 100%. All code, configuration, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
  },
  {
    "q": "Can I combine an AI build with Contentful staff augmentation in one engagement?",
    "a": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated specialist talent working in the same space."
  },
  {
    "q": "What does Kovil AI typically build on Contentful?",
    "a": "Content-model redesigns, Next.js and other frontend builds on Contentful, GraphQL and caching optimization, localization workflows, and AI-assisted content generation and tagging in the editor."
  },
  {
    "q": "How is Kovil AI different from a Contentful partner agency or freelancer?",
    "a": "A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist or small pod under an Engagement Manager who audits every milestone, with a 2-week risk-free trial and no lock-in."
  },
  {
    "q": "Can we extend a trial engagement or convert it to a long-term hire?",
    "a": "Yes. Most clients extend the engagement as scope grows, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
  },
  {
    "q": "Do you support Contentful rescues or fixing a messy content model?",
    "a": "Yes. A meaningful share of our Contentful engagements start as a rescue — a content model that grew without governance, slow API queries, or a migration that stalled. We audit it, then restructure in milestone-gated phases without breaking live sites."
  }
]

const integrations = ["Content Delivery API","GraphQL API","Management API","AI Actions","Next.js","React","Algolia","Shopify","BigCommerce","Vercel & Netlify","Webhooks","SSO/SAML"]

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
  { label: "Content Model", color: BR },
  { label: "GraphQL API", color: BR_LIGHT },
  { label: "AI Actions", color: BR },
  { label: "Workflows", color: BR_LIGHT },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0C2744 0%, #081A2E 55%, #0A0A0D 100%)' }}
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Contentful</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: BR, opacity: 0.4 }} />
            <PlatformLogoBadge slug="contentful" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${BR}, #14508F)` }}
            >
              <FileText className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">Contentful Composable Content</p>
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
            <p className="text-xs text-white/50 leading-snug">AI content ops, live in weeks</p>
          </div>
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #0C2744 0%, #081A2E 100%)', border: `1px solid ${BR}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${BR}, #14508F)` }}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Specialist Talent</p>
            <p className="text-xs text-white/50 leading-snug">Frontend, API, content architects</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ContentfulPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Contentful</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: BR }}>Contentful Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance break-words mb-6">
              Everything You Need to Run Contentful —<br />
              <span className="text-accent">AI Agents, and the Talent to Build Them.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From AI-assisted content operations to headless frontend engineers, API specialists, and content architects — Kovil AI is a single partner for the entire Contentful platform. AI agent builds and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-contentful-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Contentful talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Contentful?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Contentful</strong> is a headless content management platform that stores structured content and delivers it through APIs to any website, app, or channel. With AI now generating, translating, and tagging content at scale, a clean content model and reliable delivery layer matter more than ever — which is where Kovil AI's Contentful engineers and AI specialists work.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Contentful, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The composable content layer for modern digital experiences — now with AI built into the editor.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Contentful</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI Agent Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              AI-assisted content operations built on Contentful — configuring AI Actions, or building custom LLM workflows for generation, translation, and tagging grounded in your brand and content model.
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
              Vetted headless CMS frontend engineers, GraphQL/API specialists, and content architects, matched in 48 hours. For the content work that has to happen whether or not you're building AI yet.
            </p>
            <a href="#hire-contentful-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Contentful Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Contentful is rarely just a CMS — most real implementations combine several of these under one content model.</p>
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure where AI fits in your content workflow?</h3>
            <p className="text-sm text-muted-foreground">Tell us where editors spend the most time on a 30-minute call — we'll scope the highest-impact use case first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI on platform */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI Agents on Contentful</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do With Your Contentful Space</h2>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common patterns we build on Contentful — illustrative examples, not specific client engagements.</p>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to scope a Contentful AI build?</h3>
            <p className="text-sm text-background/60">Book a free 30-minute architecture call. Live pilot in 2 weeks, risk-free.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Talent */}
      <section id="hire-contentful-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BR }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Contentful Frontend Engineers, API Specialists & Content Architects</h2>
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Contentful Talent: US Onsite vs. Remote</h3>
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

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Contentful Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Contentful Talent</h2>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Contentful Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Contentful?</h2>
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
            <h3 className="font-display font-bold text-xl mb-1">Need a Contentful engineer, API specialist, or architect?</h3>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Contentful</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{"href":"/platforms/strapi","label":"Strapi Platform","desc":"Open-source CMS AI and Strapi talent"},{"href":"/platforms/webflow","label":"Webflow Platform","desc":"Web AI and Webflow talent"},{"href":"/platforms/algolia","label":"Algolia Platform","desc":"AI search and Algolia talent"},{"href":"/platforms","label":"All Platform Integrations","desc":"Salesforce, HubSpot, NetSuite, and 36 more"}].map((link) => (
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Contentful?</h2>
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
