'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Award, Bot, CheckCircle2, ChevronDown, Code2, Database, GitBranch, Globe, LayoutTemplate, Minus, Search, ShieldCheck, Sparkles, Users, Wand2, X, Zap,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const BR = "#4353FF"
const BR_LIGHT = "#9AA3FF"

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [{"stat":"48 hrs","label":"To match Webflow talent"},{"stat":"2 wks","label":"To a live AI pilot"},{"stat":"3","label":"Role types we staff"},{"stat":"100%","label":"IP & data stay yours"}]

const marketStats = [{"value":"Visual dev","label":"design and build production sites visually, with clean code output","src":"Webflow, 2026"},{"value":"Built-in CMS","label":"structured collections for blogs, case studies, and catalogs without a separate backend","src":"Webflow, 2026"},{"value":"Webflow AI","label":"Webflow's native AI features for generating content and speeding up site building","src":"Webflow, 2026"},{"value":"2–4 mo","label":"average time to hire a senior Webflow developer through traditional recruiting","src":"Industry avg."}]

const modules = [
  { icon: LayoutTemplate, title: "Designer", desc: "Visual canvas for building responsive layouts with real HTML, CSS, and a class-based design system." },
  { icon: Database, title: "CMS & Collections", desc: "Structured, reference-linked collections that power blogs, catalogs, and dynamic pages." },
  { icon: Sparkles, title: "Interactions & Animations", desc: "Scroll, hover, and page-load interactions built visually without custom animation code." },
  { icon: Wand2, title: "Webflow AI", desc: "Native AI for generating copy and speeding up site-building inside the platform." },
  { icon: Code2, title: "Custom Code & APIs", desc: "Embeds, custom JavaScript, and the Webflow API for functionality beyond the Designer." },
  { icon: Globe, title: "Hosting, SEO & Localization", desc: "Managed hosting with SEO controls, redirects, and localized site variants." },
]

const aiCapabilities = [
  { icon: Bot, title: "Native Webflow AI Configuration", desc: "Use Webflow's built-in AI where it saves time — and keep humans in control of what actually gets published." },
  { icon: Zap, title: "On-Site AI Chat & Assistants", desc: "Chat assistants embedded in the site that answer questions grounded in your own content, with clean handoff to sales or support." },
  { icon: Search, title: "AI-Powered Site Search", desc: "Search over CMS content using vector or hybrid retrieval, so visitors find answers instead of leaving." },
  { icon: GitBranch, title: "CMS-to-AI Content Pipelines", desc: "Draft, tag, and translate CMS items with an LLM through the Webflow API, with editorial approval before publishing." },
  { icon: ShieldCheck, title: "Site Structure & Performance Audits", desc: "Before adding AI, we audit class structure, CMS design, and page speed so new features do not sit on a shaky base." },
  { icon: Database, title: "Readiness & Scoping", desc: "Not sure where to start? We audit your site and scope the single highest-impact AI use case first." },
]

const practiceExamples = [{"title":"A site assistant that actually answers","desc":"A chat widget answers product and pricing questions from the site’s own content and hands qualified visitors to sales."},{"title":"A CMS that scales past a hundred pages","desc":"Collections and references are restructured so editors can publish quickly without breaking layouts."},{"title":"A faster, cleaner site","desc":"Class structure, assets, and scripts are cleaned up, cutting load time and improving search visibility."}]

const roles = [
  { icon: LayoutTemplate, title: "Webflow Developers", desc: "Build responsive, maintainable sites with clean class systems, CMS collections, and interactions in the Designer.", skills: ["Designer & class systems","CMS collections","Interactions"] },
  { icon: Code2, title: "Custom JS Frontend Engineers", desc: "Add custom code, API integrations, and app-like behavior that the Designer alone cannot deliver.", skills: ["JavaScript / TypeScript","Webflow API & webhooks","Third-party integrations"] },
  { icon: Search, title: "Webflow CMS & SEO Specialists", desc: "Structure collections, metadata, and redirects so the site scales and ranks as content grows.", skills: ["CMS architecture","Technical SEO","Localization"] },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [{"role":"Webflow Developer","usOnsite":"$55 – $90/hr","remote":"$20 – $28/hr","savings":"~67% lower"},{"role":"Custom JS Frontend Engineer","usOnsite":"$70 – $110/hr","remote":"$24 – $32/hr","savings":"~69% lower"},{"role":"Webflow CMS & SEO Specialist","usOnsite":"$50 – $85/hr","remote":"$20 – $26/hr","savings":"~66% lower"}]

const vettingCriteria = [{"title":"Live Webflow Build Challenge","desc":"Build a responsive page with a CMS-driven section and a small custom-code integration against a realistic brief — not a take-home nobody reviews."},{"title":"Maintainability Judgment","desc":"We test class naming, component reuse, and CMS structure — the choices that decide whether a site stays easy to edit a year from now."},{"title":"Platform Experience Verification","desc":"We verify claimed Webflow experience and any certifications directly, but weight the live build and production portfolio just as heavily — credentials alone do not prove production judgment."},{"title":"Production Portfolio Review","desc":"2–3 real Webflow projects they have shipped to production, reviewed for maintainability and lessons from what broke."}]

const comparisonRows = [{"dimension":"Time to start","kovil":"24–48 hrs matched","fullTime":"2–4 months to hire","si":"3–6 weeks to mobilize","freelancer":"1–2 weeks, unvetted"},{"dimension":"Experience verified","kovil":"yes","fullTime":"self-reported","si":"yes","freelancer":"self-reported"},{"dimension":"Single accountable owner","kovil":"yes","fullTime":"yes","si":"no","freelancer":"yes"},{"dimension":"Delivery oversight","kovil":"Engagement Manager audits every milestone","fullTime":"depends on your management capacity","si":"account manager, not technical","freelancer":"none"},{"dimension":"Risk-free trial","kovil":"yes","fullTime":"no","si":"no","freelancer":"rare"},{"dimension":"IP ownership","kovil":"100% yours","fullTime":"100% yours","si":"often shared","freelancer":"varies"}]

const forWho = [{"title":"Marketing Teams Outgrowing Their Site","desc":"The site was built fast and is now slow to change. Get a developer who restructures it for speed and maintainability."},{"title":"Teams Adding AI to the Website","desc":"You want chat, search, or personalization on a Webflow site without a full rebuild. We integrate it cleanly."},{"title":"Teams Migrating From WordPress","desc":"You are moving to Webflow. We migrate content, preserve SEO with redirects, and rebuild without losing rankings."}]

const timeline = [{"day":"Day 1","title":"Brief Your Site","desc":"Tell us how you use Webflow, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours."},{"day":"Day 2–3","title":"Meet Your Match","desc":"Review 2–3 vetted Webflow specialists (or an AI scoping call) matched to your stack and scale. Interview and choose your fit."},{"day":"Day 3–4","title":"Access & Plan Locked","desc":"Before any work starts, you agree workspace and staging access, publishing process, and success metrics — so day one has a clear target and no live-site risk."},{"day":"Week 1+","title":"Build & Iterate","desc":"Your specialist or AI build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you."},{"day":"Ongoing","title":"Scale or Wind Down","desc":"Add talent as scope grows, extend the engagement, or wind down — no lock-in."}]

const faqs = [
  {
    "q": "What is Webflow?",
    "a": "Webflow is a visual web development platform that lets designers and developers build, manage, and host custom websites with a built-in CMS, interactions, and hosting, without hand-writing every line of code."
  },
  {
    "q": "Does Webflow have native AI, or do I need a custom build?",
    "a": "Webflow ships native AI features for generating content and accelerating site-building. Kovil AI configures those natively and builds custom JavaScript, API integrations, and LLM-powered experiences where they aren't enough."
  },
  {
    "q": "Does Kovil AI build custom AI on Webflow, or only staff talent?",
    "a": "Both, and they're often the same engagement. Clients commonly hire a Webflow developer to clean up structure, CMS collections, and performance first, then add AI-powered features on top of a site that is already well-built."
  },
  {
    "q": "How much does it cost to hire a Webflow developer through Kovil AI?",
    "a": "Kovil AI's remote Webflow talent bills $20-$32 per hour depending on role and experience, versus $50-$110+ per hour for prevailing US onsite rates for the same roles — typically 66-69% lower."
  },
  {
    "q": "What is the difference between a Webflow Developer, Custom JS Engineer, and CMS & SEO Specialist?",
    "a": "A Webflow Developer builds responsive sites, CMS collections, and interactions in the Designer. A Custom JS Frontend Engineer adds custom code, APIs, and integrations beyond what the Designer can do. A CMS & SEO Specialist structures collections and metadata so the site scales and ranks."
  },
  {
    "q": "How quickly can I hire a Webflow specialist through Kovil AI?",
    "a": "Most clients are matched with a vetted specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
  },
  {
    "q": "Are your Webflow specialists certified?",
    "a": "We verify relevant platform experience and certifications where they exist, but weight a live build challenge and production portfolio review just as heavily, since credentials alone do not test real production judgment."
  },
  {
    "q": "Can Kovil AI integrate Webflow with our CRM, forms, and analytics stack?",
    "a": "Yes. Our Webflow talent regularly builds integrations connecting forms and CMS data to HubSpot, Salesforce, Stripe, and analytics tools through the Webflow API, webhooks, and custom code."
  },
  {
    "q": "Who owns the work built during an engagement?",
    "a": "You do, 100%. All code, configuration, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
  },
  {
    "q": "Can I combine an AI build with Webflow staff augmentation in one engagement?",
    "a": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated specialist talent working in the same site."
  },
  {
    "q": "What does Kovil AI typically build on Webflow?",
    "a": "Marketing sites and CMS-driven blogs, custom JavaScript and API integrations, gated and personalized content, AI-powered chat and search on top of site content, and performance and SEO overhauls."
  },
  {
    "q": "How is Kovil AI different from a Webflow partner agency or freelancer?",
    "a": "A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist or small pod under an Engagement Manager who audits every milestone, with a 2-week risk-free trial and no lock-in."
  },
  {
    "q": "Can we extend a trial engagement or convert it to a long-term hire?",
    "a": "Yes. Most clients extend the engagement as scope grows, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
  },
  {
    "q": "Do you support Webflow rescues or fixing a messy site?",
    "a": "Yes. A meaningful share of our Webflow engagements start as a rescue — inconsistent class structure, slow pages, CMS collections that grew without a plan, or custom code nobody understands. We audit it, then rebuild in milestone-gated phases without taking the site down."
  }
]

const integrations = ["Designer","CMS","Interactions","Webflow AI","Webflow API","Webhooks","HubSpot","Salesforce","Stripe","Algolia","Google Analytics","Custom JavaScript"]

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
  { label: "Designer", color: BR },
  { label: "CMS", color: BR_LIGHT },
  { label: "Interactions", color: BR },
  { label: "Webflow AI", color: BR_LIGHT },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #121A52 0%, #0B1036 55%, #0A0A0D 100%)' }}
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Webflow</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: BR, opacity: 0.4 }} />
            <PlatformLogoBadge slug="webflow" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${BR}, #2A36CC)` }}
            >
              <LayoutTemplate className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">Webflow Visual Development</p>
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
            <p className="font-display font-bold text-sm text-white mb-1">Site AI</p>
            <p className="text-xs text-white/50 leading-snug">AI features, live in weeks</p>
          </div>
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #121A52 0%, #0B1036 100%)', border: `1px solid ${BR}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${BR}, #2A36CC)` }}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Specialist Talent</p>
            <p className="text-xs text-white/50 leading-snug">Webflow devs, JS engineers, SEO</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WebflowPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Webflow</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: BR }}>Webflow Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance break-words mb-6">
              Everything You Need to Run Webflow —<br />
              <span className="text-accent">AI Agents, and the Talent to Build Them.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From AI-powered site features to Webflow developers, custom JavaScript engineers, and SEO specialists — Kovil AI is a single partner for the entire Webflow platform. AI agent builds and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-webflow-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Webflow talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Webflow?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Webflow</strong> is a visual web development platform that lets designers and developers build, manage, and host custom websites with a built-in CMS, interactions, and hosting, without hand-writing every line of code. Teams increasingly want <strong className="text-foreground">AI features</strong> — chat, search, personalization — on top of fast, well-structured Webflow sites, which is where Kovil AI's Webflow engineers and AI specialists work.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Webflow, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The visual development platform for fast, design-led sites — now a front end for AI-powered experiences.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Webflow</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI Agent Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              AI-powered features built on Webflow sites — configuring native AI, or building custom chat, search, and personalization grounded in your site content.
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
              Vetted Webflow developers, custom JavaScript engineers, and CMS & SEO specialists, matched in 48 hours. For the web work that has to happen whether or not you're building AI yet.
            </p>
            <a href="#hire-webflow-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Webflow Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Webflow is rarely just a page builder — most real sites combine several of these under one design system.</p>
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure where AI fits on your website?</h3>
            <p className="text-sm text-muted-foreground">Tell us what visitors struggle with on a 30-minute call — we'll scope the highest-impact use case first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI on platform */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI Agents on Webflow</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do With Your Webflow Site</h2>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common patterns we build on Webflow — illustrative examples, not specific client engagements.</p>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to scope a Webflow AI build?</h3>
            <p className="text-sm text-background/60">Book a free 30-minute architecture call. Live pilot in 2 weeks, risk-free.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Talent */}
      <section id="hire-webflow-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BR }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire Webflow Developers, Custom JS Engineers & CMS Specialists</h2>
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Webflow Talent: US Onsite vs. Remote</h3>
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

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Webflow Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Webflow Talent</h2>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Webflow Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Webflow?</h2>
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
            <h3 className="font-display font-bold text-xl mb-1">Need a Webflow developer, JS engineer, or SEO specialist?</h3>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Webflow</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{"href":"/platforms/contentful","label":"Contentful Platform","desc":"Headless CMS AI and Contentful talent"},{"href":"/platforms/hubspot","label":"HubSpot Platform","desc":"CRM AI agents and HubSpot talent"},{"href":"/platforms/algolia","label":"Algolia Platform","desc":"AI search and Algolia talent"},{"href":"/platforms","label":"All Platform Integrations","desc":"Salesforce, HubSpot, NetSuite, and 36 more"}].map((link) => (
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Webflow?</h2>
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
