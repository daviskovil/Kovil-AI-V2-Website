'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Bot, CheckCircle2, ArrowRight, Clock, ChevronDown, Workflow,
  Wrench, Network, Database, ShieldCheck, GitBranch, Gauge, X, Minus
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
  { stat: "< 48h",   label: "Time to match" },
  { stat: "Top 1%",  label: "Shopify AI Vetted" },
  { stat: "100%",    label: "IP ownership" },
  { stat: "2 weeks", label: "Risk-free trial" },
]

const buildItems = [
  { icon: Workflow, title: "Autonomous Shopify Workflows", desc: "Embed custom agents that run multi-step e-commerce operations—triaging customer support tickets, dynamically repricing catalogs, and orchestrating full marketing campaigns." },
  { icon: Wrench,   title: "Admin API & Tool Integration", desc: "Vetted developers who write state-of-the-art Model Context Protocol (MCP) servers and Shopify tool connections to query stock, adjust inventory, and initiate refunds." },
  { icon: Network,  title: "Multi-Agent Systems", desc: "Configure collaborative multi-agent structures where specialized agents (e.g. Designer, Copywriter, and Operations Manager) sync to publish new collections." },
  { icon: Database, title: "RAG & Semantic Catalogs", desc: "Build vector-database search indexes so models reason over massive product catalogs with 100% accuracy, answering queries without hallucinations." }
]

const stack = [
  "Shopify Admin API", "GraphQL API", "Shopify Webhooks", "MCP Servers", "LangGraph", 
  "CrewAI", "Pydantic AI", "Supabase", "pgvector", "Pinecone", "NetSuite Sync", "SAP Integration"
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted AI Developers", desc: "Every placed engineer passes a strict vetting process focusing on agentic reasoning loops, e-commerce GraphQL API structures, and custom tool safety constraints." },
  { icon: GitBranch,   title: "Delivery Lead Oversight", desc: "A senior Kovil AI lead audits and verifies all implementation milestones to check prompt reliability, API boundary safety, and cost controls." },
  { icon: Gauge,       title: "Evaluation-Driven Quality", desc: "We track success metrics (task completion rate, tool-call accuracy, latency, and token cost per run) using programmatic eval suites from day one." }
]

const faqs = [
  { q: "What does a Shopify AI agent developer do?", a: "An AI agent developer designs and writes custom software agents that communicate directly with Shopify's database using standard APIs. Unlike a basic chat widget, these agents can execute multi-turn e-commerce actions—fetching shipping tracking codes, automating refunds based on return guidelines, dynamically adjusting variant prices based on competitor scrapes, and auto-drafting marketing copy." },
  { q: "How much does it cost to hire an AI developer through Kovil AI?", a: "We place senior, vetted, Delivery-Lead-audited agent engineers on a flexible contract basis. Rates are competitive and transparent, structured based on engagement scope, with no long-term contracts and a 2-week risk-free trial." },
  { q: "What is the average timeline to match and deploy an engineer?", a: "We match you with 2–3 vetted engineers specifically qualified for your stack within 24–48 hours of scoping. Once selected, your developer can begin embedding and coding within 3–4 days." },
  { q: "Do I fully own the custom agent's IP and code?", a: "Yes, 100%. All custom code, agentic prompts, workflow schemas, database structures, and documentation developed during the placement are fully owned by you under clear IP-assignment clauses." }
]

export default function HireShopifyAgentDeveloperPage() {
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
          <span className="text-foreground">Hire Developers</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Talent Solutions</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Hire Shopify AI Agent Developers — <br />
              <span className="text-accent">Vetted, Embedded, Shipped in 48 Hours.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Embed senior Python/TypeScript engineers specializing in custom e-commerce agents, GraphQL tool-calling integrations, and Model Context Protocol setups.
            </p>
            <div className="flex gap-4">
              <ShopifyCTA label="Book Scoping Call" />
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

      {/* Capabilties Grid */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Core Competencies & Capabilities</h2>
            <p className="text-muted-foreground text-sm">
              Our engineers build stateful, autonomous e-commerce automation systems, not basic demo interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buildItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-6 md:p-8 space-y-4 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stack & Vetting */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Vetted Across the Shopify & AI Stack</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We test engineers on e-commerce logic, stateful multi-agent systems, and secure API boundaries—ensuring they deliver production-ready code.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {stack.map((tag, idx) => (
                <span key={idx} className="bg-muted/10 border border-border text-muted-foreground text-[10px] font-mono px-2.5 py-1 rounded-full uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {included.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex gap-4 p-4 border border-border bg-muted/10 rounded-2xl">
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
            <h2 className="text-3xl font-bold tracking-tight">Placement FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers to common hiring queries for Shopify AI placements.
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
            Embed Vetted Shopify AI Engineers Today
          </h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Deliver stateful workflows, repricers, and custom API layers with our senior resources. First 2 weeks are fully risk-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Book Scoping Call" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
          <p className="text-[10px] text-background/40 mt-4 font-mono">No upfront recruitment fees. 2-week risk-free trial on placements.</p>
        </div>
      </section>

    </div>
  )
}
