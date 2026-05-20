'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Users, Rocket, Shield, Activity, Cpu, Brain, Eye, Database,
  Network, Bot, Zap, ArrowRight, CheckCircle2, ChevronRight,
  Layers, TrendingUp, Code2, FlaskConical, Globe, Sparkles,
} from "lucide-react"
import { Button } from "../components/ui/button"
import { OnboardingModal } from "../components/OnboardingModal"
import { openCalendly } from "../lib/calendly"

// ─── Data ─────────────────────────────────────────────────────────────────────

const buildServices = [
  {
    icon: Users,
    label: "Managed AI Engineer",
    slug: "/engage/managed-ai-engineer",
    tag: "Ongoing",
    description:
      "Embed a vetted AI engineer directly into your team. Milestone-gated sprints, two-week risk-free trial, Engagement Manager included.",
    bullets: ["Match in 24–48 hours", "Weekly milestone sign-off", "2-week risk-free trial"],
    accent: true,
  },
  {
    icon: Rocket,
    label: "Outcome-Based AI Project",
    slug: "/engage/outcome-based-project",
    tag: "Fixed Price",
    description:
      "Describe the outcome you want. We scope, build, and ship it — fixed price, fixed timeline, full IP handoff.",
    bullets: ["Fixed-price proposal in 48 hrs", "Gated milestone approval", "100% IP transferred on delivery"],
    accent: false,
  },
  {
    icon: Shield,
    label: "AI Reliability & App Rescue",
    slug: "/engage/app-rescue",
    tag: "Emergency",
    description:
      "Failing RAG, hallucinating model, vibe-coded mess? Our SWAT team audits, fixes, and stabilises — free diagnostic first.",
    bullets: ["Free codebase audit", "Hallucination & RAG fixes", "99.9% uptime SLA on retainer"],
    accent: false,
  },
]

const operateTiers = [
  {
    tier: "Maintain",
    price: "$2k – $4k / mo",
    description: "Baseline monitoring, alerting, and incident response. Keeps your system from breaking silently.",
    features: ["Model performance monitoring", "Drift alerting", "Incident response SLA", "Monthly health report"],
  },
  {
    tier: "Operate",
    price: "$8k – $15k / mo",
    description: "Proactive optimisation on top of monitoring — cost reduction, latency, RAG pipeline management.",
    features: ["Everything in Maintain", "Token cost optimisation sprints", "RAG index & pipeline management", "Monthly improvement sprints"],
    highlighted: true,
  },
  {
    tier: "Accelerate",
    price: "$25k – $50k / mo",
    description: "Full embedded operations team. Dedicated engineering hours, compliance reporting, strategic advisory.",
    features: ["Everything in Operate", "Dedicated engineering hours", "Compliance audit reporting", "AI roadmap advisory"],
  },
]

const platforms = [
  {
    name: "Agentforce",
    by: "Salesforce",
    slug: "/agentforce",
    description:
      "Deploy autonomous AI agents inside Sales Cloud, Service Cloud, and Marketing Cloud — without leaving Salesforce.",
    tags: ["Sales Cloud", "Service Cloud", "MuleSoft", "Data Cloud"],
    color: "from-blue-500/10",
  },
  {
    name: "Azure AI Foundry",
    by: "Microsoft",
    slug: "/azure-ai-foundry",
    description:
      "Build enterprise-grade AI agents on Azure OpenAI, Copilot Studio, and AI Search — with full compliance and governance.",
    tags: ["Azure OpenAI", "Copilot Studio", "AI Search", "RAG"],
    color: "from-sky-500/10",
  },
  {
    name: "Vertex AI",
    by: "Google Cloud",
    slug: "/vertex-ai",
    description:
      "Agent Builder, Gemini integrations, BigQuery ML, and enterprise search — on Google's production AI infrastructure.",
    tags: ["Gemini", "Agent Builder", "BigQuery ML", "AI Search"],
    color: "from-green-500/10",
  },
]

const hireRoles = [
  { icon: Brain, label: "LLM Engineers", slug: "/hire/llm-engineers", desc: "Prompt engineering, fine-tuning, RAG" },
  { icon: Network, label: "ML Engineers", slug: "/hire/machine-learning-engineers", desc: "Training, evaluation, MLOps" },
  { icon: Eye, label: "Computer Vision", slug: "/hire/computer-vision-engineers", desc: "Detection, segmentation, pipelines" },
  { icon: Code2, label: "NLP Engineers", slug: "/hire/nlp-engineers", desc: "Classification, extraction, NER" },
  { icon: Database, label: "Data Engineers", slug: "/hire/data-engineers", desc: "Pipelines, warehousing, ETL" },
  { icon: Bot, label: "CrewAI Developers", slug: "/hire/crewai-developers", desc: "Multi-agent orchestration" },
  { icon: Layers, label: "LangGraph Engineers", slug: "/hire/langgraph-engineers", desc: "Stateful graph-based agents" },
  { icon: Cpu, label: "AutoGen Developers", slug: "/hire/autogen-developers", desc: "Microsoft multi-agent framework" },
  { icon: Zap, label: "n8n Automation", slug: "/hire/n8n-automation-experts", desc: "Workflow automation & integrations" },
]

const stats = [
  { value: "48 hrs", label: "Engineer match time" },
  { value: "100%", label: "IP ownership — yours" },
  { value: "$2k/mo", label: "AI Ops starting price" },
  { value: "9", label: "AI engineering specialisms" },
]

// ─── Animation helpers ─────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay, ease: "easeOut" },
})

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <motion.div {...fadeUp()} className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-5">
            Build, Operate &amp; Scale<br />
            <span className="text-accent">AI That Works in Production.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Kovil AI delivers end-to-end AI engineering — from building your first agent to keeping it healthy in
            production. We work on Salesforce, Azure, and Google Cloud, and we staff every AI engineering discipline
            you need.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div {...fadeUp(0.15)} className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display font-black text-3xl text-accent leading-none">{s.value}</span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{s.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 h-px bg-border relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>
      </section>

      {/* ── Three Tracks overview ──────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div {...fadeUp()} className="grid md:grid-cols-3 gap-5">
          {[
            {
              icon: Rocket,
              track: "Build",
              color: "text-accent",
              bg: "bg-accent/10",
              headline: "We build your AI system",
              body: "Managed engineers, fixed-price projects, and app rescue — every engagement milestone-gated with full IP handoff.",
              anchor: "#build",
            },
            {
              icon: Activity,
              track: "Operate",
              color: "text-accent",
              bg: "bg-accent/10",
              headline: "We run it after launch",
              body: "Continuous monitoring, drift detection, cost optimisation, and compliance logging — so your AI stays healthy long after go-live.",
              anchor: "#operate",
            },
            {
              icon: Users,
              track: "Hire",
              color: "text-accent",
              bg: "bg-accent/10",
              headline: "We staff your AI team",
              body: "Vetted LLM, ML, CV, NLP, and data engineers — plus framework specialists in CrewAI, LangGraph, AutoGen, and n8n.",
              anchor: "#hire",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.track}
                href={item.anchor}
                {...fadeUp(i * 0.1)}
                className="group flex flex-col rounded-2xl border border-border bg-muted/20 p-7 hover:border-accent/40 hover:bg-muted/40 transition-all relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
                <div className={`h-11 w-11 rounded-xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent mb-2">{item.track}</p>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.headline}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.body}</p>
                <div className="flex items-center gap-1 mt-5 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                  <span>See details</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </section>

      {/* ── BUILD ─────────────────────────────────────────────────────────────── */}
      <section id="build" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="h-px bg-border mb-14 relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>

        <motion.div {...fadeUp()}>
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
            <Rocket className="h-4 w-4" /> Build
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-4">
            Three ways to build with us.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
            Pick the engagement model that matches your situation. All three are milestone-gated, fully managed, and delivered with zero lock-in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {buildServices.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.slug}
                {...fadeUp(i * 0.1)}
                className="relative flex flex-col rounded-2xl border border-border bg-muted/20 p-7 hover:border-accent/40 hover:bg-muted/40 transition-all group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />

                <div className="flex items-start justify-between mb-5">
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                    {svc.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-3">{svc.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{svc.description}</p>

                <ul className="space-y-2 mb-6">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href={svc.slug}
                  className="flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all mt-auto"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div {...fadeUp(0.2)} className="mt-10">
          <OnboardingModal>
            <Button variant="accent" className="rounded-full font-semibold px-8">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </motion.div>
      </section>

      {/* ── PLATFORM EXPERTISE ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="h-px bg-border mb-14 relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>

        <motion.div {...fadeUp()}>
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
            <Globe className="h-4 w-4" /> Platform Expertise
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-4">
            We build on the big three.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
            Whether you're on Salesforce, Microsoft Azure, or Google Cloud — we have a dedicated practice, certified delivery team, and production case studies on each.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <motion.div key={p.slug} {...fadeUp(i * 0.1)}>
              <Link
                href={p.slug}
                className={`group flex flex-col rounded-2xl border border-border bg-gradient-to-br ${p.color} to-transparent p-7 hover:border-accent/40 hover:shadow-sm transition-all h-full`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-display font-black text-2xl text-foreground">{p.name}</p>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">by {p.by}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all mt-1 shrink-0" />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-semibold uppercase tracking-wide bg-background border border-border px-2.5 py-1 rounded-full text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── OPERATE ───────────────────────────────────────────────────────────── */}
      <section id="operate" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="h-px bg-border mb-14 relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>

        <motion.div {...fadeUp()}>
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
            <Activity className="h-4 w-4" /> Operate
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-4">
            AI that works on day one<br />
            <span className="text-accent">and month twelve.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
            Production AI degrades silently — models drift, retrieval quality drops, costs spiral. AI Operations is the managed service that keeps your system performing long after launch.
          </p>
        </motion.div>

        {/* What AI Ops covers */}
        <motion.div {...fadeUp(0.1)} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {[
            { icon: TrendingUp, label: "Model performance monitoring", desc: "Continuous output quality tracking against production baselines." },
            { icon: Activity, label: "Drift detection & remediation", desc: "Identify and fix data drift, concept drift, and prompt template erosion." },
            { icon: Zap, label: "Token cost optimisation", desc: "Structured sprints to reduce LLM API spend without quality loss." },
            { icon: Database, label: "RAG index & pipeline management", desc: "Keep your retrieval index fresh, embeddings aligned, and queries accurate." },
            { icon: FlaskConical, label: "Compliance audit logging", desc: "Structured inference logs for SOC 2, HIPAA-adjacent, and AI governance." },
            { icon: Shield, label: "Incident response SLA", desc: "Named engineer on your account. P1 response under 2 hours." },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-start gap-4 rounded-xl border border-border p-5 bg-muted/20 hover:border-accent/30 transition-colors">
                <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Tiers */}
        <motion.div {...fadeUp(0.15)} className="grid md:grid-cols-3 gap-5 mb-10">
          {operateTiers.map((tier, i) => (
            <div
              key={tier.tier}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                tier.highlighted
                  ? "border-accent bg-accent/5 shadow-md"
                  : "border-border bg-muted/20"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-accent text-white px-3 py-1 rounded-full">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                </div>
              )}
              <div className="mb-4">
                <p className="font-display font-black text-xl text-foreground">{tier.tier}</p>
                <p className="text-lg font-bold text-accent mt-1">{tier.price}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{tier.description}</p>
              <ul className="space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-4">
          <Link href="/ai-operations">
            <Button variant="accent" className="rounded-full font-semibold px-8">
              See AI Operations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="rounded-full font-semibold px-8">
              Get a Free Audit
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* ── HIRE ──────────────────────────────────────────────────────────────── */}
      <section id="hire" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-24">
        <div className="h-px bg-border mb-14 relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>

        <motion.div {...fadeUp()}>
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3 flex items-center gap-2">
            <Users className="h-4 w-4" /> Hire
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-4">
            Staff every AI engineering<br />
            <span className="text-accent">discipline you need.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-12">
            Pre-vetted, domain-specialist engineers — placed in days, not months. All matched to your stack and embedded with the same milestone-gated delivery model.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {hireRoles.map((role, i) => {
            const Icon = role.icon
            return (
              <motion.div key={role.slug} {...fadeUp(Math.floor(i / 3) * 0.1)}>
                <Link
                  href={role.slug}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-muted/20 p-5 hover:border-accent/40 hover:bg-muted/40 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="h-4.5 w-4.5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-foreground">{role.label}</p>
                      <ChevronRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{role.desc}</p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div {...fadeUp(0.2)}>
          <Link href="/hire">
            <Button variant="accent" className="rounded-full font-semibold px-8">
              Browse All AI Roles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          {...fadeUp()}
          className="relative rounded-2xl border border-accent/30 bg-accent/5 overflow-hidden p-12 text-center"
        >
          {/* Decorative accent blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Ready to start?</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-5 text-balance">
              Not sure which service fits?<br />Let's figure it out together.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Book a free 30-minute scoping call. We'll map your problem to the right engagement model and give you a clear path forward — no commitment needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="accent"
                className="rounded-full font-semibold px-10 h-12 text-base"
                onClick={openCalendly}
              >
                Book a Free Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/case-studies">
                <Button variant="outline" className="rounded-full font-semibold px-10 h-12 text-base">
                  See Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
