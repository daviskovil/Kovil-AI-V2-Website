'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Workflow, CheckCircle2, ArrowRight, Clock, ChevronDown, Database,
  Settings, Bot, Sparkles, ShieldCheck, Repeat2, Lock, Eye
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
const automationPillars = [
  {
    title: "1. Returns Fraud Auditing",
    icon: ShieldCheck,
    desc: "Autonomous returns risk auditor. Checks customer purchase histories, analyzes return photos, and automatically flags fraud or approves exchanges."
  },
  {
    title: "2. Supplier Catalog Enricher",
    icon: Database,
    desc: "Inbound invoice and supplier catalog PDF parser. Converts raw supplier documents into fully formatted, SEO-optimized Shopify product variants."
  },
  {
    title: "3. Multi-Channel Marketing Sync",
    icon: Sparkles,
    desc: "Connects Klaviyo email flows and SMS outreach campaigns with live catalog changes, generating personalized discount code graphics dynamically."
  }
]

const features = [
  { icon: Workflow, title: "Multi-System Orchestrations", desc: "Orchestrate processes seamlessly between Shopify, shipping carriers (ShipStation), helpdesks (Gorgias), and ERP layers." },
  { icon: Eye, title: "Audit Trail Logging", desc: "Every command executed by the agents is logged inside a central terminal dashboard, giving managers a transparent history of operations." },
  { icon: Lock, title: "Enterprise-Tier Token Defense", desc: "Data token shields protect API pathways, masking customer addresses and payment details before model ingestion loops." },
  { icon: Clock, title: "Human Validation Gates", desc: "Configure custom checkpoints to halt agents on high-stakes tasks, prompting managers in Slack for approval before final commits." }
]

const faqs = [
  { q: "How do custom AI automation workflows differ from Shopify Flow?", a: "Shopify Flow runs static if/then rules that require exact string matches. Our cognitive AI automation workflows use reasoning models to process unstructured data, like customer support emails, return photos, and supplier PDFs, making decisions on complex variables on the fly." },
  { q: "What systems can the e-commerce agents connect with?", a: "Our engineers construct custom connectors to sync Shopify with shipping platforms (ShipStation), ERP software (NetSuite/SAP), CRM layers (HubSpot), email marketers (Klaviyo), and internal tools (n8n/Slack)." },
  { q: "How do you verify return photos for fraud?", a: "We integrate visual models (VLM) that compare customer-uploaded product photos with standard catalog images, identifying color matches, label authenticity, and damage states before authorizing refunds." }
]

export default function ShopifyEcommerceAutomationPage() {
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
          <span className="text-foreground">E-Commerce Automation</span>
        </nav>

        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Operations & Sync</span>
          <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
            Shopify AI E-Commerce <br />
            <span className="text-accent">Automation Solutions.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Deploy enterprise-tier e-commerce AI automation workflows. Automate returns fraud verification, supplier catalog enrichment, and cross-channel marketing campaigns.
          </p>
          <div className="flex gap-4 pt-2">
            <ShopifyCTA label="Consult with an Automation Lead" />
          </div>
        </div>
      </section>

      {/* Automation Pillars */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Core Automation Pillars</h2>
            <p className="text-muted-foreground text-sm">
              We automate the complex manual operations that bottleneck high-volume e-commerce brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {automationPillars.map((item, idx) => {
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

      {/* Capabilities Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Technical Features & Specs</h2>
            <p className="text-muted-foreground text-sm">
              Stateful tracking and secure middleware interfaces that scale automatically under load.
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
            <h2 className="text-3xl font-bold tracking-tight">Automation FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers to common queries regarding cognitive e-commerce automation.
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
            Automate Your Operations with AI
          </h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Consult with our automation leads to scope NetSuite/SAP sync loops, returns fraud VLMs, and Klaviyo triggers under a 2-week risk-free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Book Automation Consultation" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
          <p className="text-[10px] text-background/40 mt-4 font-mono">Compatible with ShipStation, Stripe, and legacy custom warehouse tools.</p>
        </div>
      </section>

    </div>
  )
}
