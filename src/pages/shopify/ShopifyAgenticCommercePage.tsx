'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Sparkles, CheckCircle2, ArrowRight, ChevronDown, ChevronRight, Workflow,
  MessageSquare, LineChart, ShieldCheck, Database, Repeat2, Settings,
  Radar, PackageCheck, TrendingUp, X,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Shopify-Specific CTA Trigger ─────────────────────────────────────────────
function ShopifyCTA({ label, size = "lg", className = "" }: { label: string; size?: "lg" | "sm"; className?: string }) {
  return (
    <OnboardingModal defaultGoal="talent">
      <Button size={size} className={`bg-accent hover:bg-accent/90 text-white rounded-full ${className}`}>
        {label} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </OnboardingModal>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────
const heroStats = [
  { stat: "3–5",     label: "Agents per team" },
  { stat: "2–3 wks", label: "To first production sprint" },
  { stat: "24/7",    label: "Autonomous operation" },
  { stat: "100%",    label: "Human-in-the-loop control" },
]

const roles = [
  {
    title: "Manager Agent",
    icon: Settings,
    desc: "Coordinates the entire operation. Watches Shopify Webhooks, parses incoming order payloads, queries inventory thresholds, and delegates tasks to execution agents based on business rules you define.",
  },
  {
    title: "Design & Creative Agent",
    icon: Sparkles,
    desc: "Ingests product images and descriptions from the catalog to autonomously generate ad banners, email newsletters, and promotional assets matching your store's design guides.",
  },
  {
    title: "Communication Agent",
    icon: MessageSquare,
    desc: "Handles outgoing text, email campaigns, and customer support triage. Automatically drafts campaigns inside Klaviyo and responds to support queries in Gorgias or Zendesk.",
  },
  {
    title: "Repricing & Ops Agent",
    icon: LineChart,
    desc: "Continuously scrapes competitor pricing, recalculates margins against your cost floor, and syncs approved price updates directly to Shopify Admin — with guardrails you set.",
  },
]

const features = [
  { icon: Workflow, title: "LangGraph Orchestration", desc: "We map agent execution paths in stateful LangGraph workflows, ensuring logical state progression, loop cycles, and safe database updates — not brittle single-shot prompts." },
  { icon: ShieldCheck, title: "Human-in-the-Loop Controls", desc: "High-stakes transactions (e.g. pricing overrides or marketing campaign launches) require a simple manager approval in Slack to proceed, keeping you in control at every step." },
  { icon: Database, title: "Semantic Vector Search", desc: "Integrate vector databases to let models perform semantic matching on inventory codes, catalogs, and customer purchase histories, replacing brittle keyword search." },
  { icon: Repeat2, title: "Self-Healing Error Correction", desc: "Our agents execute multi-turn operational loops and dynamically debug API exceptions by parsing error payloads and retrying with corrected parameters on the fly." },
]

const scenarios = [
  { icon: Radar, title: "BFCM Campaign Launch", desc: "Manager Agent detects the campaign trigger date, tasks Design Agent to generate 6 banner variants from your product catalog, then routes finalists to Communication Agent for a segmented Klaviyo send — all reviewed in one Slack approval thread." },
  { icon: PackageCheck, title: "Inventory-Aware Repricing", desc: "Repricing Agent monitors 12 competitor storefronts hourly, cross-references your live inventory levels and cost floor from NetSuite, and adjusts variant prices only when margin thresholds are safely maintained." },
  { icon: TrendingUp, title: "Churn-Risk Subscription Save", desc: "When a subscription customer pauses, the Communication Agent triggers a personalized win-back offer based on their order history, escalating to a human rep only if the automated offer is declined twice." },
]

const process = [
  { number: "01", title: "Discovery & Workflow Mapping", desc: "We audit your existing Shopify Admin setup, third-party integrations, and manual bottlenecks to identify the highest-leverage first workflow to automate." },
  { number: "02", title: "Multi-Agent Architecture Design", desc: "We design the LangGraph state machine — which agent owns which decision, where human approval gates sit, and how failures are retried or escalated." },
  { number: "03", title: "Build & Sandbox Testing", desc: "Engineers build against a staging store, running your agents through historical order and support data to validate accuracy before anything touches production." },
  { number: "04", title: "Production Rollout & Monitoring", desc: "We deploy behind approval gates, monitor tool-call accuracy and cost-per-run for the first two weeks, and hand you a live activity dashboard." },
]

const comparisonRows = [
  { capability: "Handles unstructured input", flow: "No — requires exact field matches", agentic: "Yes — reasons over free text, images, PDFs" },
  { capability: "Adapts to catalog changes", flow: "Breaks on schema changes", agentic: "Self-corrects and re-plans" },
  { capability: "Multi-step reasoning", flow: "Single-trigger, single-action", agentic: "Coordinates multi-agent, multi-step workflows" },
  { capability: "Error handling", flow: "Fails silently, halts the flow", agentic: "Retries, escalates, or self-heals" },
  { capability: "Setup for new edge cases", flow: "Manual rule rebuild", agentic: "Prompt/tool update, no rearchitecture" },
]

const faqs = [
  { q: "What is Agentic Commerce?", a: "Agentic Commerce represents a shift from static, rule-based automation (like Zapier triggers) to dynamic, cognitive AI agents. Instead of running rigid if/then flows, custom agents use large language models to reason over data, choose what tools to execute, self-correct errors, and coordinate multi-step tasks autonomously." },
  { q: "How long does a custom multi-agent setup take to deploy?", a: "Most multi-agent systems are prototyped and integrated within 2–3 weeks for a first workflow. We place a dedicated, vetted engineering team to execute the build, backed by weekly milestones and Engagement Lead quality audits." },
  { q: "What security measures protect customer data?", a: "We run agent instances in dedicated, private cloud tenants. All customer data and Shopify tokens are fully encrypted, with masked data pathways ensuring PII never enters public LLM training datasets." },
  { q: "Do I need to replace my existing Shopify Flow automations?", a: "No. Agentic systems typically sit alongside Shopify Flow, handling the unstructured, judgment-based work that Flow can't (image analysis, free-text support triage, multi-source reasoning) while Flow continues to handle simple deterministic triggers." },
  { q: "How many agents does a typical deployment include?", a: "Most first engagements start with 2–3 agents covering one workflow end-to-end (e.g. a Manager and Communication agent for support triage). Brands that scale up typically run 4–6 specialized agents across marketing, ops, and support." },
  { q: "Can the agents make purchasing or pricing decisions without approval?", a: "Only if you configure them to. By default, every high-stakes action (price changes above a threshold, discount code creation, campaign sends) routes through a Slack approval gate before execution. You control which actions are fully autonomous." },
  { q: "What happens if an agent encounters something it can't handle?", a: "Agents are built with explicit escalation paths — when confidence is low or the situation falls outside defined boundaries, the workflow pauses and routes to a human via Slack or your helpdesk, rather than guessing." },
  { q: "Which LLM providers do you use?", a: "We architect model-agnostic systems and typically use a mix of Anthropic Claude, OpenAI GPT, and open-source models selected per task based on latency, cost, and reasoning requirements — not locked to a single vendor." },
  { q: "Can this integrate with our existing marketing and support tools?", a: "Yes. We build direct connectors to Klaviyo, Gorgias, Zendesk, HubSpot, Stripe, and most major e-commerce tools, so agents write into systems you already use rather than requiring a platform migration." },
  { q: "What's the ongoing cost after the initial build?", a: "Ongoing cost is primarily LLM token usage (typically $10–$150/month depending on volume) plus optional monitoring retainer. There's no software license fee — you own the code and infrastructure outright." },
  { q: "How do you measure whether the agents are actually working?", a: "Every deployment ships with programmatic evaluation suites tracking task completion rate, tool-call accuracy, latency, and cost-per-run. You get a live dashboard, not just anecdotal confidence." },
  { q: "Can we start small and expand the agent team later?", a: "Yes — this is the most common path. Most clients start with a single high-impact workflow (often support triage or campaign generation) and add specialized agents in subsequent 2-week sprints once the first is proven in production." },
]

export default function ShopifyAgenticCommercePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/shopify" className="hover:text-accent transition-colors">Shopify</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">Agentic Commerce</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Solutions & Consulting</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Shopify Agentic Commerce — <br />
              <span className="text-accent">Custom Multi-Agent Infrastructure.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Design and deploy custom autonomous multi-agent networks tailored specifically for high-volume e-commerce brands. Automatically orchestrate support, marketing copy, and repricing loops — with a human approval gate wherever you want one.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Consult with an AI Lead" />
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="#agent-team">Meet the Agent Team</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-muted/10 border border-border rounded-3xl p-6 md:p-8 grid grid-cols-2 gap-4">
            {heroStats.map((item, idx) => (
              <div key={idx} className="bg-background border border-border p-4 rounded-2xl text-center space-y-1 shadow-sm">
                <div className="text-2xl md:text-3xl font-extrabold text-accent">{item.stat}</div>
                <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Agent Roles */}
      <section id="agent-team" className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">The Agent Team</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Specialized Agents That Collaborate in Real Time</h2>
            <p className="text-muted-foreground text-sm">
              We design specialized agent networks that collaborate to manage your Shopify storefront — each agent owns a domain, and the Manager Agent coordinates the handoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-6 space-y-4 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Architecture</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Enterprise Agent Capabilities</h2>
            <p className="text-muted-foreground text-sm">
              State-of-the-art architectures designed to solve real operational bottlenecks, not demo-ware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex gap-4 p-5 border border-border bg-muted/10 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Real-World Scenarios */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">In Production</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">What This Looks Like on a Real Storefront</h2>
            <p className="text-muted-foreground text-sm">
              Three example workflows, from trigger to resolution, showing how the agent team actually operates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {scenarios.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-6 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How We Build It</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Discovery to a Live Agent Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {process.map((step, idx) => (
              <div key={idx} className="relative bg-muted/10 border border-border rounded-2xl p-6 space-y-3">
                <span className="font-display font-black text-2xl text-accent/70">{step.number}</span>
                <h3 className="font-bold text-sm text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                {idx < process.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Why Not Just Use Shopify Flow?</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Rule-Based Automation vs. Agentic Reasoning</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Shopify Flow / Zapier</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Agentic Commerce</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx < comparisonRows.length - 1 ? "border-b border-border/60" : ""}>
                    <td className="p-4 font-medium text-foreground text-xs md:text-sm">{row.capability}</td>
                    <td className="p-4 text-muted-foreground text-xs md:text-sm">
                      <span className="flex items-start gap-1.5"><X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />{row.flow}</span>
                    </td>
                    <td className="p-4 text-foreground text-xs md:text-sm font-medium bg-accent/5">
                      <span className="flex items-start gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{row.agentic}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">FAQ</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Solutions FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers to common queries regarding multi-agent e-commerce setups.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-border rounded-2xl overflow-hidden bg-muted/5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-sm font-semibold hover:bg-muted/20 transition-all"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`h-4 w-4 text-accent transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/40 bg-background/50">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto rounded-3xl bg-foreground text-background p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Build Your Autonomous Agent Network
          </h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Partner with Kovil AI to map your storefront webhooks and deploy stateful multi-agent systems with a 2-week risk-free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Consult with an AI Lead" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
          <p className="text-[10px] text-background/40 mt-4 font-mono">Fully customized models. Integrated with existing Shopify App architectures.</p>
        </div>
      </section>

    </div>
  )
}
