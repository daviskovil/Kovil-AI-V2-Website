'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight, Database,
  Server, ShieldCheck, Code2, Repeat2, Settings, Zap, Terminal, Lock,
  Cpu, PlugZap, FileJson, ScanSearch, X,
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
  { stat: "<50ms",  label: "Cached tool response" },
  { stat: "3",      label: "Model providers supported" },
  { stat: "100%",   label: "Scoped token access" },
  { stat: "24/7",   label: "Webhook re-indexing" },
]

const toolkitItems = [
  {
    title: "Model Context Protocol (MCP) Servers",
    icon: Server,
    desc: "Expose product catalogs, variant attributes, and customer order histories directly as structured 'tools' for large language models — the standard, portable way to give any model safe access to your store.",
  },
  {
    title: "Shopify Partner GraphQL Integrations",
    icon: Code2,
    desc: "Perform high-speed semantic searches, fetch complex discount schemas, and manage checkout objects securely using official GraphQL endpoints, wrapped with schema validation.",
  },
  {
    title: "Vector Database Catalog Sync",
    icon: Database,
    desc: "Index product text descriptions and high-resolution item photos in vector databases (pgvector/Pinecone) to enable fast, accurate product recommendation matches.",
  },
  {
    title: "Checkout & Draft Order Tools",
    icon: FileJson,
    desc: "Custom tool definitions that let agents build draft orders, apply discount codes, and reserve inventory — with strict validation before anything touches a real checkout.",
  },
]

const advantages = [
  { icon: Zap, title: "Sub-Second Response Times", desc: "Our custom MCP gateways cache catalog schemas locally, serving structured queries to agent models in under 50ms." },
  { icon: ShieldCheck, title: "Secure Scoped Access", desc: "Configure custom token scopes strictly within the Shopify Partner network to guarantee agents only execute approved commands." },
  { icon: Repeat2, title: "Webhook Real-Time Ingest", desc: "Connect webhooks to automatically trigger agent re-indexing operations when products are added, modified, or run out of stock." },
  { icon: Settings, title: "Legacy System Synchronization", desc: "Sync inventory changes between Shopify, custom ERP systems, and external warehouse channels (NetSuite/SAP) seamlessly." },
]

const architectureSteps = [
  { number: "01", icon: ScanSearch, title: "Tool Definition", desc: "We map your Shopify schema — products, variants, orders, customers — into structured MCP tool definitions with strict input/output types the model can call reliably." },
  { number: "02", icon: Cpu, title: "Model Query & Reasoning", desc: "The LLM receives the user's intent, selects the appropriate tool(s) from the exposed set, and issues a structured call rather than guessing at raw API syntax." },
  { number: "03", icon: Lock, title: "Secure Execution", desc: "Our gateway validates the call against scoped permissions, executes it against Shopify's Admin/GraphQL API, and sanitizes the response before it returns to the model." },
  { number: "04", icon: Terminal, title: "Grounded Response", desc: "The model composes its final answer strictly from the tool's real data — eliminating hallucinated prices, stock counts, or order statuses." },
]

const modelCompat = [
  { name: "Anthropic Claude", detail: "Native MCP support — the protocol Anthropic originated" },
  { name: "OpenAI GPT-4o / o-series", detail: "Function-calling compatible via our MCP-to-tool adapter" },
  { name: "DeepSeek & open-source", detail: "Self-hosted models supported via OpenAI-compatible endpoints" },
]

const comparisonRows = [
  { capability: "Setup complexity", native: "Configuration-only, limited customization", custom: "Fully custom tool schema for your exact catalog" },
  { capability: "Multi-model support", native: "Tied to Shopify's chosen provider", custom: "Model-agnostic — swap providers freely" },
  { capability: "Legacy system sync", native: "Not supported out of the box", custom: "Custom connectors to ERP, WMS, and CRM" },
  { capability: "Response latency", native: "Depends on Shopify's infrastructure", custom: "Sub-50ms via our cached gateway layer" },
  { capability: "Checkout & draft order actions", native: "Limited to supported flows", custom: "Fully custom validation and business rules" },
]

const faqs = [
  { q: "What is the Model Context Protocol (MCP)?", a: "The Model Context Protocol (MCP) is an open standard that allows LLMs to interact with secure external data sources and tools. We write custom MCP servers that map Shopify's database schema, exposing product features, inventory metrics, and customer tracking tools directly to AI reasoning models." },
  { q: "Do you use the official Shopify AI Toolkit?", a: "Yes. We integrate official Shopify API layers with custom-built libraries to create robust agentic ecosystems that handle the unique scale, checkout parameters, and draft-order requirements of enterprise stores." },
  { q: "Can the integration scale with holiday traffic peaks?", a: "Absolutely. Our custom MCP and RAG nodes run on serverless cloud architectures (AWS Lambda / Google Cloud Run) that scale automatically to handle flash-sale checkout spikes." },
  { q: "Why build a custom MCP server instead of using Shopify's default AI features?", a: "Shopify's native AI tooling is designed for general use cases. A custom MCP layer lets us expose exactly the data and actions your specific workflows need — draft order creation, custom discount logic, ERP-synced stock levels — none of which are available out of the box." },
  { q: "Is my product catalog data sent to a third party for indexing?", a: "No. Vector indexing runs inside your own private cloud tenant (or ours, dedicated to you). Catalog data never leaves your infrastructure boundary except as encrypted API calls to the LLM provider you've chosen." },
  { q: "How do you keep the vector index in sync with live inventory?", a: "We connect Shopify webhooks (product update, inventory update, order create) to trigger incremental re-indexing, so the vector database reflects catalog changes within seconds rather than running on a stale nightly batch." },
  { q: "Can agents write back to Shopify, or only read data?", a: "Both, depending on the tools you authorize. Read-only tools (product lookup, order status) are the default; write-capable tools (draft order creation, price update, fulfillment triggers) are opt-in and can require human approval before execution." },
  { q: "What happens if the MCP server goes down?", a: "The gateway is deployed on redundant serverless infrastructure with health checks and automatic failover. If a tool call fails, agents receive a structured error and can retry or gracefully degrade to a fallback response rather than crashing." },
  { q: "Do you support multi-store or multi-region Shopify Plus setups?", a: "Yes. We architect MCP gateways that can route to multiple Shopify store instances based on region, brand, or currency, with a unified tool schema so agents don't need separate logic per store." },
  { q: "How is this priced?", a: "MCP integration is typically scoped as a fixed-price sprint (2–3 weeks) covering tool definition, gateway deployment, and testing. Ongoing hosting cost is minimal — usually under $50/month on serverless infrastructure." },
]

export default function ShopifyAiToolkitPage() {
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
          <span className="text-foreground">AI Toolkit & MCP</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Platform Engineering</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Shopify AI Toolkit & <br />
              <span className="text-accent">MCP Server Integrations.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Integrate your storefront catalog semantically using the Model Context Protocol (MCP). Expose products, stock levels, and order histories directly to AI agents securely, with sub-50ms response times.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Consult with a Solutions Engineer" />
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="#architecture">See How MCP Works</Link>
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

      {/* Toolkit Pillars */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Core Pillars</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Four Integration Building Blocks</h2>
            <p className="text-muted-foreground text-sm">
              We connect your store to large language models using secure standards and performant architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolkitItems.map((item, idx) => {
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

      {/* How MCP Works */}
      <section id="architecture" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Under the Hood</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Model Intent to Grounded Answer</h2>
            <p className="text-muted-foreground text-sm">
              Every query passes through four deterministic steps — no hallucinated prices or stock counts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {architectureSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="relative bg-muted/10 border border-border rounded-2xl p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-display font-black text-xl text-accent/50">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-sm text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  {idx < architectureSteps.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-border" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Performance & Reliability</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Built to Stay Fast Under Load</h2>
            <p className="text-muted-foreground text-sm">
              Secure RAG vector indexes and API wrappers that keep your database protected and responsive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((item, idx) => {
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

      {/* Model Compatibility */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">Model-Agnostic</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-3">Works With the Model You Already Trust</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We don't lock you into a single provider. Every MCP server we build is portable across the major model APIs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modelCompat.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 border border-border bg-muted/10 rounded-2xl">
                <PlugZap className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Native vs. Custom</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Build a Custom MCP Layer?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Native Shopify AI Toolkit</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Custom MCP</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx < comparisonRows.length - 1 ? "border-b border-border/60" : ""}>
                    <td className="p-4 font-medium text-foreground text-xs md:text-sm">{row.capability}</td>
                    <td className="p-4 text-muted-foreground text-xs md:text-sm">
                      <span className="flex items-start gap-1.5"><X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />{row.native}</span>
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
      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">FAQ</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Integration FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers to common technical queries about MCP and vector schemas.
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
            Connect Your Store to Agent Models
          </h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Consult with our AI Solutions Leads to design custom MCP servers and catalog vector databases. Deployment includes a 2-week risk-free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Book Technical Call" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
          <p className="text-[10px] text-background/40 mt-4 font-mono">Compatible with OpenAI, Anthropic, and open-source models.</p>
        </div>
      </section>

    </div>
  )
}
