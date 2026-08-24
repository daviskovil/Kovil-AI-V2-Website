'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Users, CheckCircle2, ArrowRight, Clock, ChevronDown, Workflow,
  Zap, Database, ShieldCheck, GitBranch, Gauge, Network, X, Minus
} from "lucide-react"
import { Button } from "../../components/ui/button"

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: "< 48h",   label: "Time to match" },
  { stat: "Top 1%",  label: "Engineer tier" },
  { stat: "100%",    label: "IP ownership" },
  { stat: "2 weeks", label: "Risk-free trial" },
]

const marketStats = [
  { value: "80%", label: "of AI pilots fail to reach production, roughly twice the failure rate of non-AI IT projects", src: "RAND Corporation" },
  { value: "42%", label: "of companies scrapped most of their AI initiatives in 2025, citing unclear ROI and integration gaps", src: "S&P Global" },
  { value: "95%", label: "of enterprise generative AI pilots fail to deliver measurable P&L impact within six months", src: "MIT Media Lab, 2025" },
  { value: "4–6 mo", label: "average time to hire a senior embedded AI engineer through traditional recruiting", src: "Industry avg." },
]

const buildItems = [
  { icon: Workflow,   title: "Bespoke Workflow Integration", desc: "AI wired directly into the systems you already run — CRM, ERP, internal tools, legacy databases — not a generic connector that stops at the demo." },
  { icon: Zap,        title: "Rapid Onsite Prototyping",     desc: "Working prototypes built alongside your end users in days, tested against the real workflow before a single line goes to production." },
  { icon: Database,   title: "Custom Data Pipelines",        desc: "Pipelines grounded in your actual data — however messy, siloed, or undocumented — not a clean sandbox dataset that falls apart on contact with reality." },
  { icon: ShieldCheck,title: "Production Hardening",         desc: "Prototypes turned into reliable, monitored systems that survive your real edge cases, your real traffic, and your real compliance requirements." },
  { icon: Network,    title: "Cross-Functional Bridge",      desc: "An engineer who sits in your stand-ups, translates between your ops team and the implementation, and owns outcomes — not just tickets." },
  { icon: Gauge,      title: "Feedback-Driven Iteration",    desc: "Usage instrumented from day one, direct feedback from the people actually using it, and fast iteration cycles measured in days, not quarters." },
]

const stack = [
  "REST & GraphQL APIs", "Webhooks", "OAuth / SSO", "Python", "TypeScript", "PostgreSQL",
  "Snowflake", "Salesforce APIs", "SAP", "AWS", "Azure", "GCP", "Docker", "Kubernetes",
  "Airflow", "n8n", "Retool", "Datadog",
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted FDEs",        desc: "Every engineer passes a 5-stage vetting — systems-integration depth, rapid prototyping under real constraints, a live embedded build, and a shipped-deployment review." },
  { icon: GitBranch,   title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every milestone before it reaches you — checking integration safety, data handling, and production readiness." },
  { icon: Users,       title: "Genuinely Embedded Delivery",  desc: "Your FDE works inside your team — your stand-ups, your Slack, your systems access — not a detached vendor filing weekly status reports." },
  { icon: Workflow,    title: "Full-Loop Ownership",          desc: "One engineer owns discovery, build, integration, deployment, and iteration end to end — no hand-offs between a sales engineer, a builder, and a support team." },
  { icon: Database,    title: "Infrastructure Included",      desc: "Your engineer owns the whole stack for the workflow — pipelines, integration layer, deployment, and monitoring. Not just a notebook prototype." },
  { icon: Gauge,       title: "Production, Not Demos",        desc: "We measure success by adoption in your real workflow — deployed, monitored, and iterated with your users. Not a flashy proof-of-concept that stalls after the pilot." },
]

const steps = [
  { number: "01", timeline: "Day 1",    title: "Brief Your Environment", description: "Tell us the workflow, systems, data sources, and access model your engineer needs to embed against. A Delivery Lead scopes it with you within 24 hours.", bullets: ["5-minute async intake", "Delivery Lead within 24h", "Systems & access mapped upfront"] },
  { number: "02", timeline: "Days 2–3", title: "Meet Your Engineer",     description: "We surface 2–3 vetted FDEs with proven embedded delivery in your domain. You review, interview, and choose.", bullets: ["Curated match, not a marketplace", "Live intro call included", "Milestone plan agreed upfront"] },
  { number: "03", timeline: "Week 1+",  title: "Embed & Iterate",        description: "Your engineer joins your stand-ups, builds against your real systems and users, and iterates fast. An Engagement Manager audits every milestone.", bullets: ["Weekly milestone check-ins", "Direct end-user feedback loops", "Two-week risk-free trial"] },
]

const forWho = [
  { title: "CTOs & VPs of Engineering", desc: "You're rolling AI into workflows too specific and messy for an off-the-shelf tool to fit. Get an engineer embedded in 48 hours who learns your systems and ships directly against them." },
  { title: "AI & SaaS Vendors Selling Into Enterprise", desc: "Your product is strong, but every enterprise customer needs custom integration to actually adopt it. Embed a Kovil AI FDE with your customer to drive real deployment and retention." },
  { title: "Teams Stuck Post-Pilot", desc: "You have a promising AI proof of concept that never reached production because nobody owned the last-mile integration, rollout, and iteration with real users." },
]

const timeline = [
  { day: "Day 1",   title: "Submit Your Brief",   desc: "Describe the workflow, the systems it touches, the data involved, and what success looks like. A Delivery Lead calls within 24 hours to scope." },
  { day: "Day 2–3", title: "Meet Your Shortlist",  desc: "Review 2–3 FDEs matched to your domain and stack. Interview them. Choose your fit — no obligation." },
  { day: "Day 3–4", title: "Access & Plan Locked", desc: "Before any build, you agree the systems access, the integration points, and the success metrics — so the embed starts with a clear target." },
  { day: "Week 1+", title: "Embed & Ship",         desc: "Your engineer works inside your team in weekly sprints, building and integrating against your real workflow. Your Engagement Manager audits every checkpoint." },
  { day: "Ongoing", title: "Scale or Wind Down",   desc: "Add engineers as new workflows come online, extend the embed, or wind down — no lock-in. You stay because it's working, not because you're contracted." },
]

const comparison = [
  { label: "Time to start",            kovil: "24–48 hours", fulltime: "4–6 months", agency: "6–12 weeks",  freelancer: "1–2 weeks" },
  { label: "Genuinely embedded",       kovil: "yes",          fulltime: "yes",        agency: "no",          freelancer: "no" },
  { label: "Custom integration depth", kovil: "Deep",         fulltime: "Varies",     agency: "Templated",   freelancer: "Hit or miss" },
  { label: "End-user feedback loops",  kovil: "yes",          fulltime: "maybe",      agency: "rare",        freelancer: "no" },
  { label: "Managed delivery",         kovil: "yes",          fulltime: "n/a",        agency: "partial",     freelancer: "no" },
  { label: "Risk-free trial",          kovil: "yes",          fulltime: "no",         agency: "no",          freelancer: "rare" },
  { label: "IP ownership",             kovil: "100% yours",   fulltime: "100% yours", agency: "often shared",freelancer: "varies" },
]

const faqs = [
  { q: "What is a Forward Deployed Engineer (FDE)?", a: "A Forward Deployed Engineer is a senior engineer embedded directly with a customer's team — on-site or tightly integrated remotely — who builds, integrates, and iterates software against that customer's real, specific workflows and systems, rather than building generic product features from a distance. The role was popularized by Palantir and is now widely used by AI-native companies to get complex AI deployments from pilot to production inside real enterprise environments." },
  { q: "How is a Forward Deployed Engineer different from a regular engineer or consultant?", a: "A regular product engineer builds features for many customers at once from a central roadmap. A traditional consultant hands over a report or a generic implementation plan and moves on. A Forward Deployed Engineer does neither — they embed directly in your environment, learn your actual systems and data, write and ship real code against your specific workflows, and iterate directly with your end users until it works in production." },
  { q: "How much does it cost to hire a Forward Deployed Engineer through Kovil AI?", a: "Kovil AI places vetted, Engagement-Manager-audited Forward Deployed Engineers on a fixed monthly or milestone basis. By using our global talent pool, you get elite, production-ready engineers at a fraction of the fully-loaded cost of a traditional senior hire or a systems-integrator engagement, with zero hiring delay and a 2-week risk-free trial." },
  { q: "How quickly can I get a Forward Deployed Engineer embedded with my team?", a: "Most clients are matched with a vetted FDE within 24–48 hours of submitting their brief, with embedded work starting on an agreed milestone plan within 3–4 days. Compare that to 4–6 months for a traditional senior hire. You also get a 2-week risk-free trial to validate fit and output before committing." },
  { q: "Do your Forward Deployed Engineers work on-site or remotely?", a: "Both. Most engagements run tightly-integrated remote — daily stand-ups, shared access to your systems, and direct channels with your end users — with on-site time available for kickoff, discovery, or critical rollout weeks where being physically present accelerates adoption." },
  { q: "What systems and tools can your Forward Deployed Engineers integrate with?", a: "Our FDEs regularly integrate against CRMs, ERPs, internal tools, legacy databases, data warehouses, and bespoke internal APIs — using REST and GraphQL, webhooks, message queues, and whatever access model your environment requires. They adapt to your stack rather than forcing you onto a template." },
  { q: "Who owns the code and integrations the Forward Deployed Engineer builds?", a: "You do, 100%. All code, integrations, pipelines, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no carve-outs, no shared IP, and no lock-in to proprietary tooling." },
  { q: "Can we extend the engagement or bring the FDE in-house afterward?", a: "Yes. Many clients extend the embed as new workflows come online, scale to a small embedded pod, or wind down once the system is stable and handed off to their own team. There's no minimum lock-in either way." },
]

// ── Component ───────────────────────────────────────────────────────────────

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
          {open === i && (
            <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function Cell({ value }: { value: string }) {
  if (value === "yes") return <span className="inline-flex items-center gap-1.5 font-semibold text-accent"><CheckCircle2 className="h-4 w-4" />Yes</span>
  if (value === "no")  return <span className="inline-flex items-center gap-1.5 text-muted-foreground/70"><X className="h-4 w-4" />No</span>
  if (value === "partial" || value === "maybe" || value === "rare")
    return <span className="inline-flex items-center gap-1.5 text-muted-foreground capitalize"><Minus className="h-4 w-4" />{value}</span>
  return <span className="text-muted-foreground">{value}</span>
}

export default function ForwardDeployedEngineerPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/hire" className="hover:text-accent transition-colors">Hire AI Engineers</Link>
          <span>/</span>
          <span className="text-foreground">Forward Deployed Engineer</span>
        </nav>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Hire a Forward Deployed Engineer</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire Forward Deployed Engineers —<br />
            <span className="text-accent">Embedded With Your Team in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Elite engineers who embed directly with your team, build against your real systems and workflows, and iterate with your actual users — until it's genuinely in production, not just demoed.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/book-a-call">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">Two-week risk-free trial. No lock-in. 100% IP yours.</p>
          </div>
        </div>

        {/* Hero stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {heroStats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Definition — explicit, citable answer for "what is a forward
          deployed engineer" queries, independent of the FAQ prose */}
      <section id="definition" className="border-t border-border bg-muted/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-4">What Is a Forward Deployed Engineer?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Forward Deployed Engineer (FDE)</strong> is a senior engineer embedded directly with a customer's team — on-site or tightly integrated remotely — who builds, integrates, and iterates software against that customer's real, specific workflows and systems, rather than building generic product features from a distance. The role was popularized by Palantir and is now widely used by AI-native companies to move enterprise AI deployments from pilot to production.
            </p>
          </div>
        </div>
      </section>

      {/* Market intent band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">Most enterprise AI dies at the last mile — the gap only an embedded engineer can close.</h2>
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

      {/* What they build */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What They Build</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What Can a Forward Deployed Engineer Build for You?</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From first prototype to hardened production system — built directly against your systems, with your users, not around them.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-muted/20 p-6 hover:border-accent/40 transition-colors"
              >
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Embedded loop diagram */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Under the Hood</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Forward-Deployed Loop</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">This is what embedded delivery actually looks like — a tight loop between your systems, your users, and the engineer building against both.</p>
          <div className="rounded-2xl border border-border bg-background p-6 md:p-10 overflow-x-auto">
            <svg viewBox="0 0 900 420" className="w-full min-w-[720px]" role="img" aria-label="Diagram of the forward-deployed loop: an embedded engineer sits between the customer's systems and data and the customer's end users, building and integrating, shipping, and receiving direct feedback that feeds back into the next iteration.">
              <defs>
                <marker id="arr2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#FF4F00" /></marker>
              </defs>
              {/* Your systems */}
              <rect x="20" y="177" width="170" height="66" rx="12" fill="currentColor" opacity="0.04" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
              <text x="105" y="205" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Your Systems</text>
              <text x="105" y="224" textAnchor="middle" fontSize="11.5" fill="#8A8A8A">CRM · ERP · data · APIs</text>
              {/* Embedded engineer */}
              <rect x="335" y="150" width="230" height="120" rx="16" fill="#FF4F00" opacity="0.08" stroke="#FF4F00" strokeWidth="2" />
              <text x="450" y="200" textAnchor="middle" fontSize="17" fontWeight="800" fill="currentColor">Embedded Engineer</text>
              <text x="450" y="224" textAnchor="middle" fontSize="12.5" fill="#8A8A8A">in your stand-ups, your Slack</text>
              <text x="450" y="243" textAnchor="middle" fontSize="12.5" fill="#8A8A8A">building against reality</text>
              {/* Build & integrate */}
              <rect x="690" y="60" width="190" height="66" rx="12" fill="currentColor" opacity="0.04" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
              <text x="785" y="88" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Build &amp; Integrate</text>
              <text x="785" y="107" textAnchor="middle" fontSize="11.5" fill="#8A8A8A">wired into real systems</text>
              {/* Ship & observe */}
              <rect x="690" y="294" width="190" height="66" rx="12" fill="currentColor" opacity="0.04" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
              <text x="785" y="322" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Ship &amp; Observe</text>
              <text x="785" y="341" textAnchor="middle" fontSize="11.5" fill="#8A8A8A">real users, real usage</text>
              {/* Your users / feedback */}
              <rect x="20" y="294" width="170" height="66" rx="12" fill="#FF4F00" opacity="0.1" stroke="#FF4F00" strokeWidth="1.5" />
              <text x="105" y="322" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Your Users</text>
              <text x="105" y="341" textAnchor="middle" fontSize="11.5" fill="#8A8A8A">direct feedback loop</text>
              {/* Arrows: systems -> engineer */}
              <line x1="190" y1="210" x2="331" y2="210" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.4" markerEnd="url(#arr2)" />
              {/* engineer -> build */}
              <line x1="565" y1="190" x2="686" y2="105" stroke="#FF4F00" strokeWidth="1.8" markerEnd="url(#arr2)" />
              {/* build -> ship */}
              <path d="M785,126 C 860,175 860,245 785,294" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.4" markerEnd="url(#arr2)" />
              {/* ship -> engineer */}
              <line x1="686" y1="315" x2="565" y2="235" stroke="#FF4F00" strokeWidth="1.8" markerEnd="url(#arr2)" />
              {/* engineer -> users feedback */}
              <line x1="335" y1="245" x2="192" y2="315" stroke="#FF4F00" strokeWidth="1.8" markerEnd="url(#arr2)" />
              {/* users -> systems (loop closes) */}
              <path d="M105,294 C 105,265 105,265 105,246" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.4" markerEnd="url(#arr2)" />
            </svg>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">The Stack</p>
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Systems &amp; Tools Our FDEs Integrate With</h2>
        <div className="flex flex-wrap gap-2.5">
          {stack.map((t) => (
            <span key={t} className="text-sm font-medium bg-muted/40 border border-border px-4 py-2 rounded-full text-foreground/80">{t}</span>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It's For</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire a Forward Deployed Engineer Through Kovil AI?</h2>
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
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire a Forward Deployed Engineer with Kovil AI?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:border-accent/40 transition-all">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-black text-4xl text-accent/20 leading-none">{step.number}</span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground bg-muted px-2.5 py-1 rounded-full"><Clock className="h-3 w-3" />{step.timeline}</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>
              <ul className="space-y-2">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mid CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire a Forward Deployed Engineer?</h3>
            <p className="text-sm text-muted-foreground">Tell us your workflow on a 30-minute call. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <Link href="/book-a-call">
            <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0">Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* What's included */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What's Included</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What You Get When You Hire a Forward Deployed Engineer Through Kovil AI</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-muted/20 p-6">
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4"><Icon className="h-5 w-5 text-accent" /></div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire a Forward Deployed Engineer</h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-44"></th>
                  <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Full-Time Hire</th>
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground">SI / Agency</th>
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Freelancer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map((row) => (
                  <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 text-muted-foreground font-medium">{row.label}</td>
                    <td className="py-4 px-6 bg-accent/[0.03]"><Cell value={row.kovil} /></td>
                    <td className="py-4 px-6"><Cell value={row.fulltime} /></td>
                    <td className="py-4 px-6"><Cell value={row.agency} /></td>
                    <td className="py-4 px-6"><Cell value={row.freelancer} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">From Brief to Embedded — What the First Weeks Look Like</h2>
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

      {/* FAQ */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring a Forward Deployed Engineer</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/hire/ai-agent-developer", label: "Hire AI Agent Developers", desc: "Autonomous agents, tool use, multi-agent systems" },
            { href: "/hire/data-engineer", label: "Hire Data Engineers", desc: "Pipelines, warehousing, and data infrastructure" },
            { href: "/engage/app-rescue", label: "AI App Rescue", desc: "Audit and fix a stalled or failing AI build" },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your Forward Deployed Engineer?</h2>
            <p className="text-background/60 text-base">Book a 30-minute call. Matched in 48 hours. 2-week risk-free trial. 100% IP yours.</p>
          </div>
          <Link href="/book-a-call">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
