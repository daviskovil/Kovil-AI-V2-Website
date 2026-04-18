'use client'

import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight, Network, BarChart3, Repeat2, Plug2,
  AlertTriangle, Clock, ShieldCheck, CheckCircle2,
  Users, Target, Wrench, Zap, Star, ChevronRight,
  Brain, TrendingDown, DollarSign
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Helpers ──────────────────────────────────────────────────────────────────

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.45, delay },
  }
}

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "48hr",  label: "Match Time" },
  { value: "2-Week", label: "Risk-Free Trial" },
  { value: "150+",  label: "AI Deployments" },
  { value: "98%",   label: "Trial-to-Hire Rate" },
]

const problems = [
  {
    icon: Brain,
    title: "Your team doesn't have the engineering depth",
    desc: "You know AI can transform your campaigns — but building production AI systems requires a different skill set than running campaigns or managing creative.",
  },
  {
    icon: DollarSign,
    title: "NYC AI engineers cost $180K+ and take 3+ months to hire",
    desc: "The talent market in New York is brutal. By the time you hire, onboard, and ramp a full-time AI engineer, your competitors have already shipped.",
  },
  {
    icon: AlertTriangle,
    title: "Freelancers deliver code. Not outcomes. Not accountability.",
    desc: "Offshore agencies and freelance platforms hand you files and disappear. No sprint oversight, no milestone accountability, no one responsible for results.",
  },
]

const services = [
  {
    icon: Network,
    title: "AI Orchestration",
    desc: "Connect and coordinate multiple AI models, APIs, and data sources into a single intelligent system. We build the orchestration layer that makes your AI stack actually work together.",
    href: "/engage/managed-ai-engineer",
  },
  {
    icon: BarChart3,
    title: "AI in Digital Marketing",
    desc: "From AI-powered campaign intelligence to automated performance reporting and personalization engines — we engineer the AI layer inside your marketing operations.",
    href: "/engage/outcome-based-project",
  },
  {
    icon: Repeat2,
    title: "AI Workflow Automation",
    desc: "Eliminate repetitive agency tasks. We automate brief intake, creative approvals, reporting pipelines, client updates, and more — with AI agents that actually run reliably.",
    href: "/engage/managed-ai-engineer",
  },
  {
    icon: Plug2,
    title: "AI Integration",
    desc: "Already using HubSpot, Salesforce, Meta Ads, Google Analytics? We integrate AI models directly into your existing stack without rebuilding everything from scratch.",
    href: "/engage/outcome-based-project",
  },
]

const engagements = [
  {
    icon: Users,
    title: "Managed AI Engineer",
    badge: "Most Popular",
    desc: "Embed a pre-vetted AI engineer directly into your agency team. They work your hours, your tools, your Slack.",
    cta: "Hire an AI Engineer",
    href: "/engage/managed-ai-engineer",
  },
  {
    icon: Target,
    title: "Outcome-Based AI Project",
    badge: null,
    desc: "Have a specific AI product to build? We scope, build, and ship it with a dedicated squad and fixed timeline.",
    cta: "Start a Project",
    href: "/engage/outcome-based-project",
  },
  {
    icon: Wrench,
    title: "AI App Rescue",
    badge: null,
    desc: "Inherited a broken AI build from another agency or vendor? We audit, fix, and maintain it.",
    cta: "Get Rescued",
    href: "/engage/app-rescue",
  },
]

const comparison = [
  { label: "Time to Start",   kovil: "3–5 Days",           inhouse: "1–3 Months",  freelance: "2–3 Weeks" },
  { label: "Risk",            kovil: "Zero (2-week trial)", inhouse: "High",         freelance: "Medium" },
  { label: "Cost",            kovil: "$$",                  inhouse: "$$$$",         freelance: "$" },
  { label: "Accountability",  kovil: "Managed + Audited",   inhouse: "Depends",      freelance: "None" },
  { label: "NY Agency Fit",   kovil: "Specialized",         inhouse: "Generic",      freelance: "Generic" },
]

const logos = ["Unilever", "Smartfren", "Blibli", "LaVie", "CloseUp"]

// ── Workflow diagram nodes ────────────────────────────────────────────────────

function WNode({ text, delay, accent = false }: { text: string; delay: number; accent?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
      className={`rounded-xl border px-4 py-2.5 font-mono text-xs text-center leading-snug ${
        accent
          ? "border-accent/60 bg-accent/10 text-accent"
          : "border-border bg-muted/40 text-foreground"
      }`}
    >
      {text}
    </motion.div>
  )
}

function WArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.25 }}
      className="flex justify-center"
    >
      <div className="w-px h-6 bg-accent/40" />
      <div className="absolute w-2 h-2 border-r-2 border-b-2 border-accent/40 rotate-45 mt-4 -ml-1" />
    </motion.div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function NYAgencyPage() {
  const servicesRef = useRef<HTMLElement>(null)

  function scrollToServices() {
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── 1. HERO ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-background to-background pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Grain overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div {...fade(0)}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6 border border-accent/20">
              For New York Ad &amp; Marketing Agencies
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.04] text-balance mb-6"
          >
            Your NY Agency Needs<br />
            <span className="text-accent">AI Engineers,</span><br />
            Not AI Experiments
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Kovil AI embeds vetted AI talent into marketing agencies — in 48 hours. Build AI orchestration, automate workflows, and ship AI-powered campaigns without hiring nightmares.
          </motion.p>

          <motion.div {...fade(0.22)} className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <OnboardingModal defaultGoal="project">
              <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 h-12 text-base">
                Book a Free Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <Button
              variant="outline"
              onClick={scrollToServices}
              className="rounded-full px-8 h-12 text-base font-semibold border-border hover:bg-muted/30"
            >
              See How It Works
            </Button>
          </motion.div>

          <motion.p {...fade(0.28)} className="text-sm text-muted-foreground mb-16">
            <Star className="inline h-3.5 w-3.5 text-accent mr-1 mb-0.5" />
            Trusted by 50+ enterprise clients across the US, UK &amp; Australia
          </motion.p>

          {/* Stat bar */}
          <motion.div
            {...fade(0.34)}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-background py-6 px-4 text-center">
                <p className="font-display font-black text-3xl text-accent mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 2. PROBLEM SECTION ─────────────────────────────────────────────── */}
      <section className="bg-muted/20 border-y border-border py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">NY Marketing Agencies Are Falling Behind on AI</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  {...fade(i * 0.1)}
                  className="rounded-2xl border border-border bg-background p-7 hover:border-accent/30 transition-colors"
                >
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-3 leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES SECTION ────────────────────────────────────────────── */}
      <section ref={servicesRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What We Build</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">What Kovil AI Builds for Marketing Agencies</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.title}
                  {...fade(i * 0.09)}
                  className="group rounded-2xl border border-border bg-background p-7 hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <Link
                    href={s.href}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. AI WORKFLOW DIAGRAM ─────────────────────────────────────────── */}
      <section className="bg-muted/20 border-y border-border py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
              How AI Workflow Automation Works Inside a Marketing Agency
            </h2>
            <p className="text-muted-foreground">A Kovil AI engineer builds this in your first sprint — typically 14 days.</p>
          </motion.div>

          {/* Diagram */}
          <div className="relative max-w-2xl mx-auto">
            {/* Top linear nodes */}
            <div className="flex flex-col items-center gap-0">

              <WNode text="[ Client Brief Received ]" delay={0.05} accent />
              <WArrow delay={0.12} />
              <WNode text="[ AI Brief Parser — extracts goals, audience, budget ]" delay={0.18} />
              <WArrow delay={0.25} />
              <WNode text="[ AI Campaign Strategist Agent — generates channel mix + messaging ]" delay={0.3} />

              {/* Arrow splitting */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.38 }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-px h-5 bg-accent/40" />
                <div className="w-[60%] h-px bg-accent/40 relative">
                  <div className="absolute -left-px -top-1.5 w-px h-3 bg-accent/40" />
                  <div className="absolute -right-px -top-1.5 w-px h-3 bg-accent/40" />
                </div>
              </motion.div>

              {/* Parallel tracks */}
              <div className="grid grid-cols-2 gap-4 w-full mb-0">
                <div className="flex flex-col items-center gap-0">
                  <WNode text="[ Paid Media Plan (Google/Meta targeting) ]" delay={0.45} />
                  <WArrow delay={0.52} />
                  <WNode text="[ Budget Allocator Agent (auto-optimizes spend) ]" delay={0.58} />
                </div>
                <div className="flex flex-col items-center gap-0">
                  <WNode text="[ Content Brief Generator (copy angles, ad variants) ]" delay={0.45} />
                  <WArrow delay={0.52} />
                  <WNode text="[ Creative Asset Prompt Engine (design team prompts) ]" delay={0.58} />
                </div>
              </div>

              {/* Merge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65 }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-[60%] h-px bg-accent/40 relative mt-0">
                  <div className="absolute -left-px top-0 w-px h-3 bg-accent/40" />
                  <div className="absolute -right-px top-0 w-px h-3 bg-accent/40" />
                </div>
                <div className="w-px h-5 bg-accent/40" />
              </motion.div>

              <WNode text="[ Campaign Performance Monitor (real-time AI scoring) ]" delay={0.72} />
              <WArrow delay={0.79} />
              <WNode text="[ Auto-Report Generator → Client Dashboard ]" delay={0.85} accent />
            </div>

            {/* Caption */}
            <motion.p
              {...fade(0.95)}
              className="text-center text-sm text-muted-foreground mt-8 italic border-t border-border pt-6"
            >
              This replaces 3 manual handoffs, 2 spreadsheets, and 1 status meeting per campaign.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 5. ENGAGEMENT MODELS ───────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Engagement Models</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">Three Ways to Work With Kovil AI</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((e, i) => {
              const Icon = e.icon
              return (
                <motion.div
                  key={e.title}
                  {...fade(i * 0.1)}
                  className={`relative rounded-2xl border p-7 flex flex-col ${
                    e.badge
                      ? "border-accent/40 bg-accent/5"
                      : "border-border bg-background"
                  }`}
                >
                  {e.badge && (
                    <span className="absolute -top-3 left-6 text-xs font-bold uppercase tracking-widest text-white bg-accent px-3 py-1 rounded-full">
                      {e.badge}
                    </span>
                  )}
                  <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{e.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{e.desc}</p>
                  <Link
                    href={e.href}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:gap-2 transition-all"
                  >
                    {e.cta} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 6. COMPARISON TABLE ────────────────────────────────────────────── */}
      <section className="bg-muted/20 border-y border-border py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">The Smarter Way to Get AI Built</h2>
          </motion.div>

          <motion.div {...fade(0.1)} className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground w-40"></th>
                  <th className="text-left py-4 px-6 font-bold text-accent">Kovil AI</th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">In-House Hire</th>
                  <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Freelance Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map((row) => (
                  <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-medium text-muted-foreground">{row.label}</td>
                    <td className="py-4 px-6 font-semibold text-foreground">
                      <CheckCircle2 className="inline h-4 w-4 text-accent mr-1.5 mb-0.5" />
                      {row.kovil}
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{row.inhouse}</td>
                    <td className="py-4 px-6 text-muted-foreground">{row.freelance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── 7. SOCIAL PROOF ────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Social Proof</p>
            <h2 className="font-display font-bold text-3xl">Built and Trusted by Teams That Ship</h2>
          </motion.div>

          <motion.div
            {...fade(0.1)}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            {logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-xl border border-border bg-muted/20 px-8 py-4 text-sm font-semibold text-muted-foreground tracking-wide hover:border-accent/30 hover:text-foreground transition-all"
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>

          {/* Trust micro-copy */}
          <motion.div {...fade(0.4)} className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            {[
              "🔒 NDA signed before discovery",
              "✅ 5-stage engineer vetting",
              "⚡ Engineers start in 3–5 days",
              "🇺🇸 NY-timezone aligned",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 8. FREE TOOLS CALLOUT ──────────────────────────────────────────── */}
      <section className="bg-muted/20 border-y border-border py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fade(0)} className="text-center mb-10">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Free Resources</p>
            <h2 className="font-display font-bold text-3xl">Not Ready to Hire? Start Here.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              {...fade(0.1)}
              className="rounded-2xl border border-border bg-background p-8 hover:border-accent/30 transition-colors group"
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <Zap className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">AI Readiness Assessment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Find out where AI can have the fastest impact in your agency operations. Takes 4 minutes.
              </p>
              <Link
                href="/tools/ai-readiness-ad-marketing-agencies"
                className="inline-flex items-center font-semibold text-sm text-accent hover:gap-2 transition-all"
              >
                Take the Free Assessment <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              {...fade(0.18)}
              className="rounded-2xl border border-border bg-background p-8 hover:border-accent/30 transition-colors group"
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <BarChart3 className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">AI Project Cost Estimator</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Get a ballpark on what your AI build might cost before any commitment. No sales call required.
              </p>
              <Link
                href="/tools/ai-project-estimator"
                className="inline-flex items-center font-semibold text-sm text-accent hover:gap-2 transition-all"
              >
                Estimate My Project <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fade(0)}
            className="relative rounded-3xl overflow-hidden bg-foreground text-background p-12 md:p-16 text-center"
          >
            {/* Accent glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent/80 mb-4">Ready to Start?</p>
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 leading-tight text-balance">
                Ready to Add AI Engineering to Your Agency?
              </h2>
              <p className="text-background/60 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Most agencies are matched with an engineer within 48 hours. Your two-week trial is risk-free — you only pay if you hire.
              </p>
              <OnboardingModal defaultGoal="project">
                <Button className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-10 h-13 text-base">
                  Book a Free Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </OnboardingModal>
              <p className="mt-6 text-sm text-background/50">
                Or call us directly:{" "}
                <a href="tel:+16465359141" className="text-background/80 hover:text-background font-semibold transition-colors">
                  +1 646-535-9141
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
