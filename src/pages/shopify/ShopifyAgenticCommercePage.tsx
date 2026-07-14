'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Sparkles, CheckCircle2, ArrowRight, Clock, ChevronDown, Workflow,
  MessageSquare, LineChart, ShieldCheck, Database, Repeat2, Settings
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
const roles = [
  {
    title: "1. The Manager Agent",
    icon: Settings,
    desc: "Coordinates the entire operation. Watches Shopify Webhooks, parses incoming order payloads, queries inventory thresholds, and delegates tasks to execution agents."
  },
  {
    title: "2. The Design & Creative Agent",
    icon: Sparkles,
    desc: "Ingests product images and descriptions from the catalog to autonomously generate ad banners, email newsletters, and promotional assets matching store design guides."
  },
  {
    title: "3. The Communication Agent",
    icon: MessageSquare,
    desc: "Handles outgoing text, email campaigns, and customer support triage. Automatically drafts campaigns inside Klaviyo and responds to support queries in Gorgias."
  }
]

const features = [
  { icon: Workflow, title: "LangGraph Orchestration", desc: "We map agent execution paths in stateful LangGraph workflows, ensuring logical state progression, loop cycles, and safe database updates." },
  { icon: ShieldCheck, title: "Human-in-the-Loop Controls", desc: "High-stakes transactions (e.g. pricing overrides or marketing campaign launches) require a simple manager approval in Slack to proceed." },
  { icon: Database, title: "Semantic Vector Search", desc: "Integrate vector databases to let models perform semantic matching on inventory codes, catalogs, and customer purchase histories." },
  { icon: Repeat2, title: "Self-Healing Error Correction", desc: "Our agents execute multi-turn operational loops and dynamically debug API exceptions by parsing and retrying failures on the fly." }
]

const faqs = [
  { q: "What is Agentic Commerce?", a: "Agentic Commerce represents a shift from static, rule-based automation (like Zapier triggers) to dynamic, cognitive AI agents. Instead of running rigid if/then flows, custom agents use large language models to reason over data, choose what tools to execute, self-correct errors, and coordinate multi-step tasks autonomously." },
  { q: "How long does a custom multi-agent setup take to deploy?", a: "Most multi-agent systems are prototyped and integrated within 3–4 weeks. We place a dedicated, vetted engineering team to execute the build, backed by weekly milestones and Engagement Lead quality audits." },
  { q: "What security measures protect customer data?", a: "We run agent instances in dedicated, private cloud tenants. All customer data and Shopify tokens are fully encrypted, with masked data pathways ensuring PII never enters public LLM training datasets." }
]

export default function ShopifyAgenticCommercePage() {
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
          <span className="text-foreground">Agentic Commerce</span>
        </nav>

        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Solutions & Consulting</span>
          <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
            Shopify Agentic Commerce — <br />
            <span className="text-accent">Custom Multi-Agent Infrastructure.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Design and deploy custom autonomous multi-agent networks tailored specifically for high-volume e-commerce brands. Automatically orchestrate support, marketing copy, and repricing loops.
          </p>
          <div className="flex gap-4 pt-2">
            <ShopifyCTA label="Consult with an AI Lead" />
          </div>
        </div>
      </section>

      {/* Multi-Agent Roles */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">The 3-Agent Autonomous Team</h2>
            <p className="text-muted-foreground text-sm">
              We design specialized agent networks that collaborate in real-time to manage your Shopify storefront.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((item, idx) => {
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

      {/* Capabilities Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Enterprise Agent capabilities</h2>
            <p className="text-muted-foreground text-sm">
              State-of-the-art architectures designed to solve real operational bottlenecks.
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
            <h2 className="text-3xl font-bold tracking-tight">Solutions FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers to common queries regarding multi-agent e-commerce setups.
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
