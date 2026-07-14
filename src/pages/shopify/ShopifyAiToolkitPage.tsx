'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Wrench, CheckCircle2, ArrowRight, Clock, ChevronDown, Database,
  Server, ShieldCheck, Code2, Repeat2, Settings, Zap
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
const toolkitItems = [
  {
    title: "1. Model Context Protocol (MCP) Servers",
    icon: Server,
    desc: "Expose product catalogs, variant attributes, and customer order histories directly as structured 'tools' for Large Language Models (LLMs)."
  },
  {
    title: "2. Shopify Partner GraphQL Integrations",
    icon: Code2,
    desc: "Perform high-speed semantic searches, fetch complex discount schemas, and manage checkout objects securely using official GraphQL end-points."
  },
  {
    title: "3. Vector Database Catalog Sync",
    icon: Database,
    desc: "Index product text descriptions and high-resolution item photos in vector databases (pgvector/Pinecone) to enable fast product recommendation matches."
  }
]

const advantages = [
  { icon: Zap, title: "Sub-Second Response Times", desc: "Our custom MCP gateways cache catalog schemas locally, serving structured queries to agent models in under 50ms." },
  { icon: ShieldCheck, title: "Secure Scoped Access", desc: "Configure custom token scopes strictly within the Shopify Partner network to guarantee agents only execute approved commands." },
  { icon: Repeat2, title: "Webhook Real-Time Ingest", desc: "Connect webhooks to automatically trigger agent re-indexing operations when products are added, modified, or run out of stock." },
  { icon: Settings, title: "Legacy System Synchronization", desc: "Sync inventory changes between Shopify, custom ERP systems, and external warehouse channels (NetSuite/SAP) seamlessly." }
]

const faqs = [
  { q: "What is the Model Context Protocol (MCP)?", a: "The Model Context Protocol (MCP) is an open standard that allows LLMs to interact with secure external data sources and tools. We write custom MCP servers that map Shopify's database schema, exposing product features, inventory metrics, and customer tracking tools directly to AI reasoning brains." },
  { q: "Do you use the official Shopify AI Toolkit?", a: "Yes. We integrate official Shopify API layers with custom-built libraries to create robust agentic ecosystems that handle the unique scale, checkout parameters, and draft-order requirements of enterprise stores." },
  { q: "Can the integration scale with holiday traffic peaks?", a: "Absolutely. Our custom MCP and RAG nodes run on serverless cloud architectures (AWS Lambda / Google Cloud Run) that scale automatically to handle flash-sale checkout spikes." }
]

export default function ShopifyAiToolkitPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shopify" className="hover:text-accent transition-colors">Shopify</Link>
          <span>/</span>
          <span className="text-foreground">AI Toolkit & MCP</span>
        </nav>

        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Platform Engineering</span>
          <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
            Shopify AI Toolkit & <br />
            <span className="text-accent">MCP Server Integrations.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Integrate your storefront catalog semantically using the Model Context Protocol (MCP). Expose products, stock levels, and order histories directly to AI agents securely.
          </p>
          <div className="flex gap-4 pt-2">
            <ShopifyCTA label="Consult with a Solutions Engineer" />
          </div>
        </div>
      </section>

      {/* Toolkit Pillars */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Core Integration Pillars</h2>
            <p className="text-muted-foreground text-sm">
              We connect your store to large language models using secure standards and performant architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolkitItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-6 md:p-8 space-y-4 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Advantages */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Performance & Reliability</h2>
            <p className="text-muted-foreground text-sm">
              Building secure RAG vector indexes and API wrappers that keep your database protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex gap-4 p-5 border border-border bg-muted/10 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-xs text-foreground">{item.title}</h3>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Integration FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers to common technical queries about MCP and vector schemas.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-border rounded-2xl overflow-hidden bg-background">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-xs font-semibold hover:bg-muted/20 transition-all font-mono"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`h-4 w-4 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
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
                        <div className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed border-t border-border/40 bg-background/50 font-sans">
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
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
