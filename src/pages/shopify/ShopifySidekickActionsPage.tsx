'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Wrench, CheckCircle2, ArrowRight, Clock, ChevronDown, ChevronRight, Database,
  Settings, Bot, ShieldCheck, Repeat2, MessageCircleQuestion,
  PackageSearch, ReceiptText, Truck, X,
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
  { stat: "3–4 wks",  label: "To first custom action" },
  { stat: "100%",     label: "Source code ownership" },
  { stat: "0",        label: "Unauthorized writes" },
  { stat: "2 weeks",  label: "Risk-free trial" },
]

const actionPillars = [
  {
    title: "Prompt-to-Action Interceptors",
    icon: Bot,
    desc: "Intercept conversational prompts from Sidekick and dynamically route them to custom back-end tasks, bypassing standard interface limits.",
  },
  {
    title: "Vector-Database RAG Grounding",
    icon: Database,
    desc: "Index custom data schemas (e.g. offline wholesale contracts, returns guidelines) in vector search databases to ground Sidekick's answers in your actual policies.",
  },
  {
    title: "Multi-System Transaction API",
    icon: Wrench,
    desc: "Write action connectors enabling Sidekick to write to shipping software, edit ERP stock, and adjust supplier purchase orders directly.",
  },
  {
    title: "Custom Prompt Libraries",
    icon: MessageCircleQuestion,
    desc: "Extend Sidekick's default understanding with store-specific prompt templates so it correctly interprets your internal terminology and shorthand.",
  },
]

const features = [
  { icon: ShieldCheck, title: "Secure Middleware Gateway", desc: "Our middleware wraps API credentials, protecting database servers and ensuring only validated admin sessions run Sidekick commands." },
  { icon: Clock, title: "Slack Approval Intercepts", desc: "Sensitive updates (e.g. refund approvals, mass price overrides) trigger a Slack review message, holding execution until a manager approves." },
  { icon: Settings, title: "Context-Aware Action Scoping", desc: "Restrict Sidekick custom action access based on user authorization roles (e.g., customer service vs. billing manager)." },
  { icon: Repeat2, title: "Error Re-evaluation Loops", desc: "Our action hooks parse API payload failures in real-time, allowing models to retry parameters dynamically for high success rates." },
]

const exampleActions = [
  { icon: ReceiptText, title: "Wholesale Contract Lookup", desc: "\"What's this customer's negotiated unit price on SKU-4471?\" — Sidekick queries your offline contract database via RAG grounding and answers with the exact clause, not a guess." },
  { icon: PackageSearch, title: "Cross-System Stock Check", desc: "\"Do we have stock in the Reno warehouse?\" — a custom action queries your NetSuite/SAP ERP directly, since that data never lives in Shopify's native inventory object." },
  { icon: Truck, title: "Carrier Escalation Trigger", desc: "\"This order is 4 days late, escalate it\" — Sidekick calls a custom action that opens a carrier claim via your ShipStation account and logs the case in Gorgias automatically." },
]

const comparisonRows = [
  { capability: "Access to legacy ERP/WMS data", stock: "Not available", custom: "Custom connectors to NetSuite, SAP, and more" },
  { capability: "Wholesale / contract pricing lookups", stock: "Limited to standard price lists", custom: "RAG-grounded on your actual contract documents" },
  { capability: "Write actions outside Shopify", stock: "Not supported", custom: "Shipping, ERP, and CRM write actions available" },
  { capability: "Approval gates on sensitive actions", stock: "No native gating", custom: "Slack approval intercepts before execution" },
  { capability: "Role-based action scoping", stock: "Store-wide admin access only", custom: "Per-role action permissions" },
]

const faqs = [
  { q: "How do you extend Shopify Sidekick's capabilities?", a: "We run a secure middleware layer that intercepts conversational inputs or custom tool-calling schema prompts. When Sidekick recognizes a request that requires legacy systems or offline databases, it calls our custom API hook, which routes the task, executes the data sync, and returns the result." },
  { q: "Is this safe to run on enterprise-tier stores?", a: "Yes. Our middleware enforces strict rate limits, credential encryption, and human-in-the-loop checkpoints so that agents cannot make unauthorized modifications to your catalog or financial records." },
  { q: "Which models power the custom Sidekick extensions?", a: "We integrate custom actions using Anthropic's Claude, OpenAI's GPT-4o, or DeepSeek models depending on latency limits and budget constraints." },
  { q: "Can Sidekick access data that isn't stored in Shopify at all?", a: "Yes — that's the primary reason to build custom actions. We connect Sidekick to ERP systems, wholesale contract databases, carrier platforms, and internal tools via RAG grounding and direct API connectors, so it can answer questions Shopify's native data model simply doesn't cover." },
  { q: "Can different staff members have different Sidekick permissions?", a: "Yes. We scope custom actions to authorization roles — a customer service rep might be able to check order status and issue refunds under $50, while only a billing manager's session can approve larger refunds or price overrides." },
  { q: "What stops Sidekick from making a costly mistake autonomously?", a: "Every high-stakes action we build routes through a configurable approval gate. Refund approvals, mass price overrides, and PO adjustments trigger a Slack review message and wait for a human decision before executing." },
  { q: "How long does it take to add a new custom action?", a: "A single well-scoped custom action (e.g. a new ERP lookup or carrier integration) typically takes 3–5 business days to build, test, and deploy once the API access and business rules are confirmed." },
  { q: "Do custom actions work on both the Shopify admin app and Sidekick's web interface?", a: "Yes. Our middleware sits behind the same conversational entry points Sidekick uses natively, so custom actions are available wherever your team already interacts with Sidekick." },
  { q: "What happens to our custom actions if Shopify updates Sidekick?", a: "Our middleware is built as a decoupled layer that intercepts and extends — not a fork of Sidekick itself — so Shopify platform updates don't break custom actions. We monitor Shopify's release notes and adjust integration points proactively when needed." },
  { q: "Do I own the code for the custom actions?", a: "Yes, 100%. All middleware code, prompt templates, and integration logic built during the engagement are fully owned by you with no vendor lock-in." },
  { q: "Can Sidekick actions trigger workflows in tools like Klaviyo or Gorgias?", a: "Yes. We commonly build actions that let Sidekick draft a Klaviyo campaign, open or update a Gorgias ticket, or push a note into your CRM directly from a conversational prompt." },
]

export default function ShopifySidekickActionsPage() {
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
          <span className="text-foreground">Custom Sidekick Actions</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Assistant Extensions</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Shopify Sidekick Custom Actions — <br />
              <span className="text-accent">Conversational System Integrations.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Extend Shopify's Sidekick assistant with custom action hooks, vector database RAG layers, and secure legacy ERP synchronization loops. Turn Sidekick into a conversational dashboard for your whole stack.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Consult with an Assistant Lead" />
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="#examples">See Example Actions</Link>
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

      {/* Action Pillars */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Extension Pillars</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Chat Utility to Operational Assistant</h2>
            <p className="text-muted-foreground text-sm">
              We extend Sidekick from a chat utility to an autonomous operational assistant with real access to your stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {actionPillars.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-6 space-y-4 hover:-translate-y-1 transition-all duration-300 shadow-sm">
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

      {/* Example Actions */}
      <section id="examples" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">In Practice</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">What Your Team Can Ask Sidekick</h2>
            <p className="text-muted-foreground text-sm">
              Real example prompts that only work once a custom action is wired behind them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {exampleActions.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-muted/10 border border-border rounded-2xl p-6 space-y-4">
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

      {/* Security & Middleware */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Safety & Access Controls</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Enterprise-Grade Guardrails</h2>
            <p className="text-muted-foreground text-sm">
              Restricting tool-calling scopes to prevent catalog errors and secure order pipelines.
            </p>
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

      {/* Comparison */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Default vs. Custom</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Stock Sidekick vs. Kovil AI Extensions</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-muted/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Stock Sidekick</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Custom Actions</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx < comparisonRows.length - 1 ? "border-b border-border/60" : ""}>
                    <td className="p-4 font-medium text-foreground text-xs md:text-sm">{row.capability}</td>
                    <td className="p-4 text-muted-foreground text-xs md:text-sm">
                      <span className="flex items-start gap-1.5"><X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />{row.stock}</span>
                    </td>
                    <td className="p-4 text-foreground text-xs md:text-sm font-medium bg-accent/5">
                      <span className="flex items-start gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{row.custom}</span>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Sidekick FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers to common queries regarding custom Sidekick configurations.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-border rounded-2xl overflow-hidden bg-background">
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
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto rounded-3xl bg-foreground text-background p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent pointer-events-none" />
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Extend Sidekick's Capabilities
          </h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Consult with our custom AI development leads to map your APIs and write secure Sidekick extensions under a 2-week risk-free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Book Extension Consultation" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
          <p className="text-[10px] text-background/40 mt-4 font-mono">Secure custom middleware. Full source code ownership.</p>
        </div>
      </section>

    </div>
  )
}
