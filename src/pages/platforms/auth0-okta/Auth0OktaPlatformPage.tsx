'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight, Award, Bot, CheckCircle2, ChevronDown, Code2, Fingerprint, GitBranch, KeyRound, Layers, Lock, Minus, Search, ShieldAlert, ShieldCheck, Users, X, Zap,
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { PlatformLogoBadge } from '@/src/components/platforms/PlatformLogo'
import { openCalendly } from '@/src/lib/calendly'

// ── Brand ─────────────────────────────────────────────────────────────────────
const BR = "#EB5424"
const BR_LIGHT = "#FFA27F"

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [{"stat":"48 hrs","label":"To match Auth0 talent"},{"stat":"2 wks","label":"To a live AI pilot"},{"stat":"4","label":"Certified role types we staff"},{"stat":"100%","label":"IP & data stay yours"}]

const marketStats = [{"value":"Okta","label":"Auth0 is part of Okta, one of the largest independent identity providers","src":"Okta, 2026"},{"value":"Auth0 for AI Agents","label":"Okta's identity and scoped-access controls for agents acting on behalf of users","src":"Okta, 2026"},{"value":"Passkeys & MFA","label":"modern phishing-resistant authentication supported alongside SSO and social login","src":"Auth0, 2026"},{"value":"4–6 mo","label":"average time to hire a senior IAM engineer through traditional recruiting","src":"Industry avg."}]

const modules = [
  { icon: KeyRound, title: "Universal Login", desc: "Hosted, customizable login with social, enterprise, and passwordless options." },
  { icon: Fingerprint, title: "MFA & Passkeys", desc: "Multi-factor authentication and phishing-resistant passkeys with adaptive policies." },
  { icon: Users, title: "Organizations (B2B)", desc: "Multi-tenant identity for B2B SaaS with per-customer connections and roles." },
  { icon: Code2, title: "Actions & Extensibility", desc: "Serverless hooks that customize login, tokens, and user flows without forking the platform." },
  { icon: Lock, title: "API Authorization", desc: "OAuth 2.0 scopes, RBAC, and fine-grained authorization for APIs and agents." },
  { icon: ShieldAlert, title: "Attack Protection", desc: "Bot detection, breached-password checks, and brute-force protections on every login." },
]

const aiCapabilities = [
  { icon: Bot, title: "Auth0 for AI Agents Configuration", desc: "Give agents their own identity and let users grant narrowly scoped access, instead of sharing a user's credentials or a god-mode API key." },
  { icon: Lock, title: "Scoped Token & Consent Flows", desc: "Delegated access flows where an agent acts on behalf of a user with the minimum scopes needed and revocable consent." },
  { icon: Zap, title: "Custom Authorization Logic", desc: "Actions and API policies that enforce which agent can do what, with step-up approval for sensitive operations." },
  { icon: GitBranch, title: "Cross-System Agent Identity", desc: "Consistent identity for agents across Auth0, your APIs, and third-party tools so access is auditable end to end." },
  { icon: ShieldCheck, title: "Identity Security Audits", desc: "Before agents get access, we audit token scopes, session lifetimes, MFA coverage, and legacy Rules for gaps." },
  { icon: Search, title: "Readiness & Scoping", desc: "Not sure where to start? We audit your tenant and scope the highest-impact, lowest-risk AI identity use case first." },
]

const practiceExamples = [{"title":"Agents that never hold a user's password","desc":"An assistant books travel and reads calendars using delegated, revocable scopes rather than stored credentials."},{"title":"Step-up approval for risky actions","desc":"An agent can draft a payment freely, but a fresh MFA prompt is required before anything is actually sent."},{"title":"Migration without forced resets","desc":"Users move from a legacy store to Auth0 transparently on next login, with no mass password-reset event."}]

const roles = [
  { icon: ShieldCheck, title: "IAM Security Engineers", desc: "Design authentication policies, MFA and passkey rollouts, and threat protections that raise security without wrecking conversion.", certs: ["Okta Certified Professional","Okta Certified Administrator"] },
  { icon: Code2, title: "Auth0 Integration Developers", desc: "Build login flows, Actions, token claims, and API authorization in application code that is secure by default.", certs: ["Okta Certified Developer"] },
  { icon: Layers, title: "IAM Architects", desc: "Design tenant strategy, federation, B2B organization models, and the overall identity architecture for enterprise programs.", certs: ["Okta Certified Consultant"] },
  { icon: Bot, title: "Auth0 for AI Agents Specialists", desc: "Design identity and scoped-access models for AI agents — the newest and fastest-growing identity specialization.", certs: [], skills: ["Delegated access","OAuth scopes","Agent authorization"] },
]

// US onsite hourly rates reflect prevailing 2026 US contractor/consulting
// billing rates for each role. Kovil remote rates span our $18-$45/hr band,
// scaled by seniority. Savings = 1 - (remote midpoint / US midpoint).
const rateComparison = [{"role":"IAM Security Engineer","usOnsite":"$90 – $140/hr","remote":"$28 – $38/hr","savings":"~71% lower"},{"role":"Auth0 Integration Developer","usOnsite":"$80 – $125/hr","remote":"$26 – $34/hr","savings":"~71% lower"},{"role":"Auth0 for AI Agents Specialist","usOnsite":"$110 – $165/hr","remote":"$34 – $44/hr","savings":"~72% lower"},{"role":"IAM Architect","usOnsite":"$120 – $180/hr","remote":"$36 – $45/hr","savings":"~73% lower"}]

const vettingCriteria = [{"title":"Live Identity Build Challenge","desc":"Implement a login flow with an Action and protected API against a realistic spec — scopes, token claims, and a revoked-access path — not a take-home nobody reviews."},{"title":"Security-First Judgment","desc":"We test least-privilege instincts: token scopes, session lifetimes, and what happens when something is compromised — the judgment that separates safe identity work from risky shortcuts."},{"title":"Certification Verification","desc":"We verify every claimed Auth0 certification directly, and don't stop there — certification proves baseline knowledge, not production judgment, so it's paired with the live build."},{"title":"Production Portfolio Review","desc":"2–3 real Auth0 projects they have shipped to production, reviewed for maintainability and lessons from what broke."}]

const comparisonRows = [{"dimension":"Time to start","kovil":"24–48 hrs matched","fullTime":"4–6 months to hire","si":"6–10 weeks to mobilize","freelancer":"1–2 weeks, unvetted"},{"dimension":"Certification verified","kovil":"yes","fullTime":"self-reported","si":"yes","freelancer":"self-reported"},{"dimension":"Single accountable owner","kovil":"yes","fullTime":"yes","si":"no","freelancer":"yes"},{"dimension":"Delivery oversight","kovil":"Engagement Manager audits every milestone","fullTime":"depends on your management capacity","si":"account manager, not technical","freelancer":"none"},{"dimension":"Risk-free trial","kovil":"yes","fullTime":"no","si":"no","freelancer":"rare"},{"dimension":"IP ownership","kovil":"100% yours","fullTime":"100% yours","si":"often shared","freelancer":"varies"}]

const forWho = [{"title":"SaaS Teams Adding B2B Login","desc":"Enterprise customers want SSO and per-customer connections. Get engineers who model organizations and connections correctly the first time."},{"title":"Teams Deploying AI Agents","desc":"Your agents need to act on users' behalf without sharing passwords or overbroad keys. We design scoped, auditable agent identity."},{"title":"Teams Migrating Identity Systems","desc":"A homegrown or legacy user store needs to move to Auth0 without locking people out. We plan and execute the migration carefully."}]

const timeline = [{"day":"Day 1","title":"Brief Your Tenant","desc":"Tell us how you use Auth0, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours."},{"day":"Day 2–3","title":"Meet Your Match","desc":"Review 2–3 vetted Auth0 specialists (or an AI scoping call) matched to your stack and scale. Interview and choose your fit."},{"day":"Day 3–4","title":"Access & Plan Locked","desc":"Before any work starts, you agree tenant access (dev tenant first), secrets handling, and success metrics — so day one has a clear target and no production-identity risk."},{"day":"Week 1+","title":"Build & Iterate","desc":"Your specialist or AI build moves in weekly milestones. An Engagement Manager audits every checkpoint before it reaches you."},{"day":"Ongoing","title":"Scale or Wind Down","desc":"Add talent as scope grows, extend the engagement, or wind down — no lock-in."}]

const faqs = [
  {
    "q": "What is Auth0?",
    "a": "Auth0, part of Okta, is a customer identity platform that provides authentication, authorization, single sign-on, and multi-factor authentication for applications, including secure identity for AI agents."
  },
  {
    "q": "Does Auth0 have native AI support, or do I need a custom build?",
    "a": "Auth0 offers Auth0 for AI Agents, which adds identity and scoped-access controls for agents acting on behalf of users. Kovil AI configures those natively and builds custom authorization logic and integrations where they aren't enough."
  },
  {
    "q": "Does Kovil AI build custom AI on Auth0, or only staff talent?",
    "a": "Both, and they're often the same engagement. Clients commonly hire an IAM engineer to harden login, tokens, and authorization first, then add AI agents with properly scoped access on top of an identity layer that is already sound."
  },
  {
    "q": "How much does it cost to hire a Auth0 developer through Kovil AI?",
    "a": "Kovil AI's remote Auth0 talent bills $26-$45 per hour depending on role and experience, versus $80-$180+ per hour for prevailing US onsite rates for the same roles — typically 71-73% lower, at the same certification bar."
  },
  {
    "q": "What is the difference between an IAM Security Engineer, Auth0 Developer, and IAM Architect?",
    "a": "An IAM Security Engineer designs policies, MFA, and threat protections. An Auth0 Integration Developer builds login flows, Actions, and API authorization in application code. An IAM Architect designs tenant strategy, federation, and the overall identity architecture."
  },
  {
    "q": "How quickly can I hire a Auth0 specialist through Kovil AI?",
    "a": "Most clients are matched with a vetted specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
  },
  {
    "q": "Do your Auth0 engineers hold official certifications?",
    "a": "Yes. We verify Okta Certified Professional, Administrator, Developer, and Consultant credentials directly as part of vetting, alongside a live technical assessment, since certification alone does not test real production judgment."
  },
  {
    "q": "Can Kovil AI integrate Auth0 with our apps, APIs, and enterprise directories?",
    "a": "Yes. Our Auth0 talent regularly builds integrations with web and mobile apps, APIs, enterprise directories like Active Directory and Okta Workforce, and the rest of your stack through Actions and the Management API."
  },
  {
    "q": "Who owns the work built during an engagement?",
    "a": "You do, 100%. All code, configuration, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
  },
  {
    "q": "Can I combine an AI build with Auth0 staff augmentation in one engagement?",
    "a": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated specialist talent working in the same tenant."
  },
  {
    "q": "What does Kovil AI typically build on Auth0?",
    "a": "Customer login and SSO, MFA and passkey rollouts, custom Actions and token claims, B2B organization models, migration from legacy user stores, and scoped identity for AI agents acting on users' behalf."
  },
  {
    "q": "How is Kovil AI different from a Auth0 partner agency or freelancer?",
    "a": "A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist or small pod under an Engagement Manager who audits every milestone, with a 2-week risk-free trial and no lock-in."
  },
  {
    "q": "Can we extend a trial engagement or convert it to a long-term hire?",
    "a": "Yes. Most clients extend the engagement as scope grows, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
  },
  {
    "q": "Do you support Auth0 rescues or fixing a risky identity setup?",
    "a": "Yes. A meaningful share of our Auth0 engagements start as a rescue — overly broad token scopes, brittle Rules and Actions, stalled migrations, or missing MFA coverage. We audit it carefully, then fix it in milestone-gated phases without locking users out."
  }
]

const integrations = ["Universal Login","MFA & Passkeys","Organizations","Actions","Management API","Auth0 for AI Agents","OAuth 2.0 / OIDC","SAML","Active Directory","Okta Workforce","React & Next.js SDKs","Node.js & Python"]

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
  { label: "Universal Login", color: BR },
  { label: "MFA", color: BR_LIGHT },
  { label: "SSO", color: BR },
  { label: "AI Agents", color: BR_LIGHT },
]

function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl p-8 md:p-9 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #2E1409 0%, #1E0D06 55%, #0A0A0D 100%)' }}
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
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">Live on Auth0</span>
        </div>

        <div className="flex flex-col items-center text-center py-2">
          <div className="relative mb-4">
            <div className="absolute inset-0 rounded-full blur-xl" style={{ background: BR, opacity: 0.4 }} />
            <PlatformLogoBadge slug="auth0-okta" fallback={<div
              className="relative h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: `linear-gradient(135deg, ${BR}, #B83A12)` }}
            >
              <KeyRound className="h-8 w-8 text-white" />
            </div>} />
          </div>
          <p className="font-display font-bold text-white text-lg">Auth0 by Okta</p>
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
            <p className="font-display font-bold text-sm text-white mb-1">Agent Identity</p>
            <p className="text-xs text-white/50 leading-snug">Secure AI agents, live in weeks</p>
          </div>
          <div className="rounded-2xl p-4 shadow-lg" style={{ background: 'linear-gradient(160deg, #2E1409 0%, #1E0D06 100%)', border: `1px solid ${BR}40` }}>
            <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 shadow-md" style={{ background: `linear-gradient(135deg, ${BR}, #B83A12)` }}>
              <Users className="h-5 w-5 text-white" />
            </div>
            <p className="font-display font-bold text-sm text-white mb-1">Specialist Talent</p>
            <p className="text-xs text-white/50 leading-snug">IAM engineers, devs, architects</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Auth0OktaPlatformPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/platforms" className="hover:text-accent transition-colors">Platforms</Link>
          <span>/</span>
          <span className="text-foreground">Auth0</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: BR }}>Auth0 Platform Partner</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance break-words mb-6">
              Everything You Need to Run Auth0 —<br />
              <span className="text-accent">AI Agents, and the Talent to Build Them.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              From secure identity for AI agents to IAM engineers, Auth0 developers, and architects — Kovil AI is a single partner for the entire Auth0 platform, with engineers who treat security as a first principle. AI agent builds and specialist talent, matched in 48 hours, both live right here.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="accent" size="lg" className="rounded-full font-semibold px-8 h-12" onClick={openCalendly}>
                Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <a href="#hire-auth0-okta-talent">
                <Button variant="outline" size="lg" className="rounded-full font-semibold px-8 h-12">
                  Hire Auth0 talent
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
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is Auth0?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Auth0</strong>, part of Okta, is a customer identity platform that provides authentication, authorization, single sign-on, and multi-factor authentication for applications. As AI agents begin acting on users' behalf, controlling <strong className="text-foreground">who an agent is and what it may access</strong> becomes a core identity problem — exactly where Kovil AI's IAM engineers and AI specialists work.
            </p>
          </div>
        </div>
      </section>

      {/* Market stats band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Auth0, Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">The identity layer behind modern apps — and the access-control foundation AI agents depend on.</h2>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Two Ways to Work With Kovil AI on Auth0</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">Most clients need one of these to start. Many end up using both, coordinated by the same Engagement Manager.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-8">
            <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
              <Bot className="h-5 w-5 text-accent" />
            </div>
            <h3 className="font-display font-bold text-xl mb-2">AI Agent Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Secure identity for AI agents built on Auth0 — configuring Auth0 for AI Agents, or building custom authorization so agents only ever access what a user has granted.
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
              Vetted IAM security engineers, Auth0 developers, AI-identity specialists, and architects, matched in 48 hours. For the identity work that has to happen whether or not you're building AI yet.
            </p>
            <a href="#hire-auth0-okta-talent">
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Auth0 Platform at a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Auth0 is rarely one feature — most real deployments combine several of these under one tenant strategy.</p>
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
            <h3 className="font-display font-bold text-xl mb-1">Not sure how AI agents should authenticate in your stack?</h3>
            <p className="text-sm text-muted-foreground">Tell us what your agents need to access on a 30-minute call — we'll scope a secure design first.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* AI on platform */}
      <section id="ai-agents" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">AI Agents on Auth0</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What AI Agents Can Do With Your Auth0 Tenant</h2>
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
        <p className="text-muted-foreground max-w-2xl mb-8">Common patterns we build on Auth0 — illustrative examples, not specific client engagements.</p>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to scope an Auth0 AI-identity build?</h3>
            <p className="text-sm text-background/60">Book a free 30-minute architecture call. Live pilot in 2 weeks, risk-free.</p>
          </div>
          <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0" onClick={openCalendly}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Talent */}
      <section id="hire-auth0-okta-talent" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: BR }}>Specialist Talent</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Hire IAM Security Engineers, Auth0 Developers & Identity Architects</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">Every specialist is vetted through a live build challenge, not just a resume review — matched in 48 hours, with a 2-week risk-free trial.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
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
                    {r.certs?.map((c) => (
                      <span key={c} className="inline-flex items-center gap-1 text-[10px] font-medium text-foreground/70 bg-muted px-2 py-1 rounded-md">
                        <Award className="h-2.5 w-2.5" />{c}
                      </span>
                    ))}
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

          <h3 className="font-display font-bold text-2xl mb-2">Hiring Auth0 Talent: US Onsite vs. Remote</h3>
          <p className="text-muted-foreground max-w-2xl mb-6">
            Prevailing 2026 US onsite hourly rates vs. Kovil AI's vetted remote talent — <strong className="text-foreground">$18–$45/hr</strong> depending on role and experience, at the same certification bar.
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
          <p className="text-xs text-muted-foreground mb-14">US onsite rates reflect prevailing 2026 contractor/consulting billing rates. Rate, not headcount, is what changes — every Kovil specialist passes the same live build challenge and certification verification below, regardless of location.</p>

          <div className="h-px w-full bg-border mb-14" />

          <h3 className="font-display font-bold text-2xl mb-8">How We Vet Every Auth0 Specialist</h3>
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire Auth0 Talent</h2>
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Auth0 Tools &amp; Integrations We Work With</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Works With Kovil AI on Auth0?</h2>
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
            <h3 className="font-display font-bold text-xl mb-1">Need an IAM engineer, Auth0 developer, or architect?</h3>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Auth0</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Explore more */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{"href":"/platforms/stripe","label":"Stripe Platform","desc":"Payment AI and Stripe talent"},{"href":"/platforms/servicenow","label":"ServiceNow Platform","desc":"Now Assist builds and ServiceNow talent"},{"href":"/platforms/mulesoft","label":"MuleSoft Platform","desc":"AI integrations and MuleSoft talent"},{"href":"/platforms","label":"All Platform Integrations","desc":"Salesforce, HubSpot, NetSuite, and 36 more"}].map((link) => (
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to move on Auth0?</h2>
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
