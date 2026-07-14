'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Wrench, CheckCircle2, ArrowRight, Clock, ChevronDown, Database,
  Settings, Bot, Sparkles, ShieldCheck, Repeat2, Lock
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
const actionPillars = [
  {
    title: "1. Prompt-to-Action Interceptors",
    icon: Bot,
    desc: "Intercept conversational prompts from Sidekick and dynamically route them to custom back-end tasks, bypassing standard interface limits."
  },
  {
    title: "2. Vector-Database RAG Grounding",
    icon: Database,
    desc: "Index custom data schemas (e.g. offline wholesale contracts, returns guidelines) in vector search databases to ground Sidekick's answers."
  },
  {
    title: "3. Multi-System Transaction API",
    icon: Wrench,
    desc: "Write action connectors enabling Sidekick to write to shipping software, edit ERP stock, and adjust supplier purchase orders directly."
  }
]

const features = [
  { icon: ShieldCheck, title: "Secure Middleware Gateway", desc: "Our middleware wraps API credentials, protecting database servers and ensuring only validated admin sessions run Sidekick commands." },
  { icon: Clock, title: "Slack Approval Intercepts", desc: "Sensitive updates (e.g. refund approvals, mass price overrides) trigger a Slack review message, holding execution until a manager approves." },
  { icon: Settings, title: "Context-Aware Action Scoping", desc: "Restrict Sidekick custom action access based on user authorization roles (e.g., customer service vs. billing manager)." },
  { icon: Repeat2, title: "Error Re-evaluation Loops", desc: "Our action hooks parse API payload failures in real-time, allowing models to retry parameters dynamically for high success rates." }
]

const faqs = [
  { q: "How do you extend Shopify Sidekick's capabilities?", a: "We run a secure middleware layer that intercepts conversational inputs or custom tool-calling schema prompts. When Sidekick recognizes a request that requires legacy systems or offline databases, it calls our custom API hook, which routes the task, executes the data sync, and returns the result." },
  { q: "Is this safe to run on enterprise-tier stores?", a: "Yes. Our middleware enforces strict rate limits, credential encryption, and human-in-the-loop checkpoints so that agents cannot make unauthorized modifications to your catalog or financial records." },
  { q: "Which models power the custom Sidekick extensions?", a: "We integrate custom actions using Anthropic's Claude 3.5, OpenAI's GPT-4o, or DeepSeek models depending on latency limits and budget constraints." }
]

export default function ShopifySidekickActionsPage() {
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
          <span className="text-foreground">Custom Sidekick Actions</span>
        </nav>

        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Assistant Extensions</span>
          <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
            Shopify Sidekick Custom Actions — <br />
            <span className="text-accent">Conversational System Integrations.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Extend Shopify's Sidekick assistant with custom action hooks, vector database RAG layers, and secure legacy ERP synchronization loops. Build conversational dashboards.
          </p>
          <div className="flex gap-4 pt-2">
            <ShopifyCTA label="Consult with an Assistant Lead" />
          </div>
        </div>
      </section>

      {/* Action Pillars */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Custom Action pillars</h2>
            <p className="text-muted-foreground text-sm">
              We extend Sidekick from a chat utility to an autonomous operational assistant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionPillars.map((item, idx) => {
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

      {/* Security & Middleware */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Enterprise Safety & Access Controls</h2>
            <p className="text-muted-foreground text-sm">
              Restricting tool-calling scopes to prevent catalog errors and secure order pipelines.
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
            <h2 className="text-3xl font-bold tracking-tight">Sidekick FAQs</h2>
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
