'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight, Database,
  Settings, Bot, Play, ShieldCheck, Repeat2, Zap, GitBranch, X,
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { OnboardingModal } from "@/src/components/OnboardingModal"
import { ShopifyProofCarousel, type Slide } from "@/src/components/ShopifyProofCarousel"

function ShopifyCTA({ label, size = "lg", className = "" }: { label: string; size?: "lg" | "sm"; className?: string }) {
  return (
    <OnboardingModal defaultGoal="talent">
      <Button size={size} className={`bg-accent hover:bg-accent/90 text-white rounded-full ${className}`}>
        {label} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </OnboardingModal>
  )
}

const heroStats = [
  { stat: "$0",     label: "Per-execution cost" },
  { stat: "<500ms", label: "Node-to-node latency" },
  { stat: "24/7",   label: "Self-hosted uptime" },
  { stat: "2 wks",  label: "To first production flow" },
]

const proofSlides: Slide[] = [
  {
    tag: "Workflow Blueprint",
    title: "A team was paying premium Zapier tiers just to keep up with order volume.",
    desc: "Kovil AI replaced the brand's Zapier automations with a self-hosted n8n pipeline, moving webhook-triggered logic onto infrastructure the team owns outright — at zero additional cost per execution.",
    stats: [
      { value: "$0", label: "Per-execution cost" },
      { value: "<500ms", label: "Node latency" },
    ],
  },
  {
    tag: "Under the Hood",
    title: "Every webhook is HMAC-validated before a reasoning agent ever sees it.",
    desc: "The payload is checked against its signature, standardized into a consistent schema, then handed to an OpenAI or Claude reasoning node that decides which tool to call — not a fixed if/then chain.",
    stats: [
      { value: "n8n", label: "Self-hosted" },
      { value: "LangGraph", label: "Agent orchestration" },
    ],
  },
  {
    tag: "Multi-Agent Handoff",
    title: "A Manager node routes to the Reasoning Agent, then the Tool Executor.",
    desc: "The Manager node classifies the incoming event, the Reasoning Agent formulates the action, and the Tool Executor commits the result to Supabase or Shopify — with a Slack notification on anything flagged for review.",
    stats: [
      { value: "4", label: "Pipeline nodes" },
      { value: "Auto", label: "Retry on failure" },
    ],
  },
  {
    tag: "Safety Controls",
    title: "Every workflow change ships through a pull request, not a live edit.",
    desc: "Workflow definitions export as JSON and live in Git, so changes get reviewed like application code, and a bad update rolls back with one command instead of a scramble in the n8n UI.",
    stats: [
      { value: "100%", label: "Version-controlled" },
      { value: "Auto", label: "Exponential backoff" },
    ],
  },
  {
    tag: "Outcome",
    title: "Zero execution fees, sub-second latency, a pipeline the team actually owns.",
    desc: "The workflows run 24/7 on the team's own infrastructure, reviewable in Git, with no per-run billing surprise at the end of the month.",
    stats: [
      { value: "$0", label: "Execution Cost" },
      { value: "24/7", label: "Uptime" },
    ],
  },
]

const pipeline = [
  { icon: Play, title: "Webhook Payload Ingest", desc: "n8n captures the Shopify order/product webhook event, validates the HMAC signature, and standardizes parameters into a consistent schema." },
  { icon: Bot, title: "Reasoning Agent Node", desc: "The payload is exposed to an OpenAI, Claude, or CrewAI reasoning agent which checks business rules, formulates instructions, and selects the correct tool." },
  { icon: Settings, title: "Tool Execution", desc: "The agent calls the selected tool — a Shopify GraphQL mutation, a Supabase write, or a third-party API — with validated, structured parameters." },
  { icon: Database, title: "Database & Notification Sync", desc: "Results commit to Supabase or your database of record, with Slack notifications firing for any flow requiring human review." },
]

const features = [
  { icon: Zap, title: "Open-Source Performance", desc: "Hosting n8n workflows on your own infrastructure keeps execution costs at $0 per run, eliminating per-execution premium pricing tiers common on Zapier or Make." },
  { icon: ShieldCheck, title: "Strict Payload Decryption", desc: "Integrations run inside isolated containers, ensuring customer addresses and order details are never persisted on unencrypted systems." },
  { icon: Repeat2, title: "Automatic Webhook Retries", desc: "n8n captures API timeouts and retries variant updates dynamically with exponential backoff, preventing database mismatches from transient failures." },
  { icon: GitBranch, title: "Version-Controlled Workflow JSON", desc: "Every workflow definition is exportable as JSON and version-controlled in Git, so changes are reviewable and rollback is a one-command operation." },
]

const scenario = {
  title: "Example: New Order → Loyalty Points → Personalized Follow-Up",
  steps: [
    "Shopify fires an order/create webhook the moment a customer completes checkout.",
    "n8n validates the payload and passes order line items to a reasoning agent node.",
    "The agent checks the order against loyalty tier rules and calculates points earned.",
    "Points are written to a Supabase table, and a personalized thank-you message is queued in Klaviyo referencing the specific items purchased.",
    "If the order qualifies for a VIP tier upgrade, a Slack notification pings the retention team for a manual outreach follow-up.",
  ],
}

const stack = ["n8n", "OpenAI", "Anthropic Claude", "CrewAI", "LangGraph", "Supabase", "Shopify Admin API", "Docker", "Redis", "Slack API"]

const comparisonRows = [
  { capability: "Per-execution pricing", zapier: "Premium tier billing above free execution cap", n8n: "$0 — self-hosted, unlimited executions" },
  { capability: "Custom code logic", zapier: "Limited to built-in app blocks", n8n: "Full JavaScript/Python code nodes" },
  { capability: "AI agent reasoning steps", zapier: "Basic OpenAI action blocks only", n8n: "Full LangGraph/CrewAI orchestration support" },
  { capability: "Data residency", zapier: "Processed on Zapier's cloud", n8n: "Self-hosted, your infrastructure, your control" },
  { capability: "Version control", zapier: "No native Git integration", n8n: "Exportable JSON, Git-versioned workflows" },
]

const faqs = [
  { q: "Why use n8n over Zapier or Make?", a: "n8n offers an open-source, self-hosted option that eliminates the recurring costs of high-volume executions. It also lets developers design complex JavaScript code block nodes, making it well suited for custom AI integrations that off-the-shelf platforms can't express." },
  { q: "Can we sync n8n with LangGraph or CrewAI?", a: "Yes. n8n serves as a router that catches webhook inputs, feeds them to LangGraph or CrewAI endpoints, and passes the output back to Shopify or your database of record." },
  { q: "Is self-hosting n8n difficult to maintain?", a: "We deploy n8n in Docker containers with automated health checks and backups, so ongoing maintenance is minimal — typically limited to occasional version upgrades, which we can also manage under a support retainer." },
  { q: "How do you handle webhook signature validation?", a: "Every incoming Shopify webhook is validated against its HMAC signature before any processing occurs, rejecting unauthenticated or tampered payloads immediately." },
  { q: "What happens if a downstream API call fails?", a: "n8n's retry logic captures timeouts and failures, retrying with exponential backoff. If retries are exhausted, the workflow logs the failure and can trigger a Slack alert rather than silently dropping the event." },
  { q: "Can non-technical team members edit the workflows later?", a: "Yes. n8n's visual workflow editor lets your team inspect and adjust simple logic (like discount thresholds) without touching code, while the underlying agent reasoning nodes remain engineer-maintained." },
  { q: "Does this require us to migrate off our existing automation tools?", a: "No. n8n workflows can run alongside your existing Zapier or Make automations, letting you migrate specific high-volume or AI-driven flows first while leaving simpler automations in place." },
  { q: "How is workflow logic versioned and reviewed?", a: "Every workflow is exportable as JSON and stored in Git, so changes go through the same pull-request review process as your application code, with clean rollback if an update introduces an issue." },
  { q: "What's the typical cost to build a first n8n agentic workflow?", a: "Most first workflows — such as order-to-loyalty sync or webhook-triggered catalog updates — are scoped as a fixed-price 2-week sprint, after which ongoing hosting costs are typically under $30/month." },
  { q: "Can n8n workflows trigger actions across multiple systems in one run?", a: "Yes. A single n8n workflow commonly orchestrates several systems in sequence — for example, writing to Supabase, updating a Shopify metafield, and triggering a Klaviyo campaign — all from one webhook trigger." },
]

export default function N8nShopifySyncPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/shopify" className="hover:text-accent transition-colors">Shopify</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">n8n Agentic Sync</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Actionable Workflows · Integration Blueprint</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              n8n Shopify Agentic Sync — <br />
              <span className="text-accent">Custom Webhook Integration Blueprints.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Design and deploy self-hosted n8n workflows that connect Shopify webhooks with OpenAI or Claude reasoning agents, CrewAI execution blocks, and Supabase tables — at zero per-execution cost.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Deploy Workflow Setup" />
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="#pipeline">See the Pipeline</Link>
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

      {/* Pipeline */}
      <section id="pipeline" className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">The Sync Pipeline</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Four Nodes From Webhook to Committed Write</h2>
            <p className="text-muted-foreground text-sm">Deploy modular nodes that parse events and trigger model execution loops.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {pipeline.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="relative bg-background border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  {idx < pipeline.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-border" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ShopifyProofCarousel
        heading="How one team replaced Zapier with a self-hosted agentic pipeline."
        subheading="A real deployment, walked step by step — from HMAC-validated webhook intake to a multi-node agent handoff to the Git-reviewed workflow changes that keep it safe."
        slides={proofSlides}
      />

      {/* Technical Features */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Technical Features</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Built for Cost Control and Reliability</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex gap-4 p-5 border border-border bg-background rounded-2xl">
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

      {/* Example Scenario */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Walkthrough</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">{scenario.title}</h2>
          </div>
          <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
            <ol className="space-y-4">
              {scenario.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs flex items-center justify-center shrink-0">{idx + 1}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">Compatibility</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">The Full Sync Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((tag, idx) => (
              <span key={idx} className="bg-muted/10 border border-border text-muted-foreground text-[10px] font-mono px-2.5 py-1 rounded-full uppercase">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">n8n vs. Zapier/Make</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Self-Hosted, Agentic n8n?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Zapier / Make</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI on n8n</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx < comparisonRows.length - 1 ? "border-b border-border/60" : ""}>
                    <td className="p-4 font-medium text-foreground text-xs md:text-sm">{row.capability}</td>
                    <td className="p-4 text-muted-foreground text-xs md:text-sm">
                      <span className="flex items-start gap-1.5"><X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />{row.zapier}</span>
                    </td>
                    <td className="p-4 text-foreground text-xs md:text-sm font-medium bg-accent/5">
                      <span className="flex items-start gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{row.n8n}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">FAQ</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Workflows FAQs</h2>
            <p className="text-muted-foreground text-sm">Answers regarding node setups and execution budgets.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-border rounded-2xl overflow-hidden bg-background">
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full text-left p-5 flex items-center justify-between text-sm font-semibold hover:bg-muted/20 transition-all">
                    <span>{item.q}</span>
                    <ChevronDown className={`h-4 w-4 text-accent transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                        <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/40 bg-background/50">{item.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto rounded-3xl bg-foreground text-background p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your n8n Automation Workflows</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Partner with Kovil AI to map your webhook pipelines and deploy custom n8n servers under a 2-week risk-free trial.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Deploy Workflow Setup" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
