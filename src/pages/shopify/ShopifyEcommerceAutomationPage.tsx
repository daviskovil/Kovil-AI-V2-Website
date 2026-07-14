'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Workflow, CheckCircle2, ArrowRight, Clock, ChevronDown, ChevronRight, Database,
  ShieldCheck, Sparkles, Lock, Eye, X, TrendingDown, Truck, RefreshCcw,
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
  { stat: "-70%",    label: "Manual ops hours" },
  { stat: "24/7",    label: "Autonomous monitoring" },
  { stat: "2–3 wks", label: "First workflow live" },
  { stat: "100%",    label: "Audit trail logged" },
]

const automationPillars = [
  {
    title: "Returns Fraud Auditing",
    icon: ShieldCheck,
    desc: "Autonomous returns risk auditor. Checks customer purchase histories, analyzes return photos, and automatically flags fraud or approves exchanges.",
  },
  {
    title: "Supplier Catalog Enricher",
    icon: Database,
    desc: "Inbound invoice and supplier catalog PDF parser. Converts raw supplier documents into fully formatted, SEO-optimized Shopify product variants.",
  },
  {
    title: "Multi-Channel Marketing Sync",
    icon: Sparkles,
    desc: "Connects Klaviyo email flows and SMS outreach campaigns with live catalog changes, generating personalized discount code graphics dynamically.",
  },
  {
    title: "Inventory & Fulfillment Sync",
    icon: RefreshCcw,
    desc: "Keeps stock levels consistent across Shopify, your warehouse management system, and third-party marketplaces, rerouting orders when a location runs dry.",
  },
]

const features = [
  { icon: Workflow, title: "Multi-System Orchestrations", desc: "Orchestrate processes seamlessly between Shopify, shipping carriers (ShipStation), helpdesks (Gorgias), and ERP layers." },
  { icon: Eye, title: "Audit Trail Logging", desc: "Every command executed by the agents is logged inside a central terminal dashboard, giving managers a transparent history of operations." },
  { icon: Lock, title: "Enterprise-Tier Token Defense", desc: "Data token shields protect API pathways, masking customer addresses and payment details before model ingestion loops." },
  { icon: Clock, title: "Human Validation Gates", desc: "Configure custom checkpoints to halt agents on high-stakes tasks, prompting managers in Slack for approval before final commits." },
]

const workflowExamples = [
  { icon: TrendingDown, title: "Returns Fraud Triage", before: "A support rep manually reviews every return photo and purchase history — 6–8 minutes per case.", after: "A vision-language model cross-checks the photo against catalog images and purchase history in seconds, auto-approving clean cases and flagging only the ambiguous ones for human review." },
  { icon: Database, title: "Supplier Catalog Onboarding", before: "Ops staff retype supplier PDF spec sheets into Shopify manually — often a full day per new product line.", after: "The agent parses the PDF, extracts variant attributes, writes SEO-optimized titles and descriptions, and creates the product in Shopify as a draft for a one-click review." },
  { icon: Truck, title: "Multi-Warehouse Fulfillment", before: "Orders route to whichever warehouse a static rule points to, even when that location is out of stock.", after: "The agent checks real-time stock across all locations and 3PL partners before confirming fulfillment, rerouting automatically when the primary warehouse can't fill the order." },
]

const integrations = [
  "ShipStation", "NetSuite", "SAP ERP", "Klaviyo", "Gorgias", "Zendesk",
  "HubSpot", "Stripe", "n8n", "Slack", "Recharge", "Loop Returns",
]

const comparisonRows = [
  { capability: "Handles unstructured inputs (PDFs, photos, free text)", flow: "No", cognitive: "Yes — parses and reasons over unstructured data" },
  { capability: "Cross-system orchestration (ERP + WMS + Shopify)", flow: "Limited connector support", cognitive: "Native multi-system orchestration" },
  { capability: "Fraud/anomaly judgment calls", flow: "Not supported", cognitive: "Vision-language model review with confidence scoring" },
  { capability: "Adapts when supplier formats change", flow: "Breaks, requires manual rework", cognitive: "Self-adjusts extraction logic" },
  { capability: "Full audit trail of automated decisions", flow: "Limited logging", cognitive: "Every action logged with reasoning trace" },
]

const faqs = [
  { q: "How do custom AI automation workflows differ from Shopify Flow?", a: "Shopify Flow runs static if/then rules that require exact string matches. Our cognitive AI automation workflows use reasoning models to process unstructured data, like customer support emails, return photos, and supplier PDFs, making decisions on complex variables on the fly." },
  { q: "What systems can the e-commerce agents connect with?", a: "Our engineers construct custom connectors to sync Shopify with shipping platforms (ShipStation), ERP software (NetSuite/SAP), CRM layers (HubSpot), email marketers (Klaviyo), and internal tools (n8n/Slack)." },
  { q: "How do you verify return photos for fraud?", a: "We integrate visual models (VLM) that compare customer-uploaded product photos with standard catalog images, identifying color matches, label authenticity, and damage states before authorizing refunds." },
  { q: "Can this replace our operations team entirely?", a: "No, and that's not the goal. These agents remove the repetitive, judgment-light portions of ops work (data entry, first-pass return triage, catalog formatting) so your team spends time on the exceptions and strategic decisions that actually need a human." },
  { q: "How accurate is the supplier catalog enrichment?", a: "Extraction accuracy on well-formatted supplier PDFs typically exceeds 95% for core fields (SKU, price, dimensions). Every new product is created as a draft for human review before publishing, so accuracy issues are caught before they reach your storefront." },
  { q: "What's the typical ROI timeline for an automation project?", a: "Most clients see measurable time savings (support hours, catalog onboarding time) within the first 2–3 weeks of a workflow going live, since we scope the first automation around your highest-volume manual bottleneck." },
  { q: "Do you build automations for multi-warehouse or 3PL setups?", a: "Yes. We regularly build fulfillment routing logic that checks real-time stock across multiple warehouses and third-party logistics providers before confirming an order, rerouting automatically when needed." },
  { q: "Can I see what the agents are doing in real time?", a: "Yes. Every deployment includes an audit trail dashboard logging every action an agent takes, with timestamps and the reasoning behind each decision — nothing runs invisibly." },
  { q: "Is my customer and payment data safe in these automations?", a: "Yes. Token-shielding middleware masks customer addresses and payment details before any data reaches a model, and all data processing happens within your dedicated private cloud tenant." },
  { q: "How is this priced?", a: "Most engagements are scoped as a fixed-price sprint per workflow (2–3 weeks). Once your team wants to expand into additional workflows, we scope those as separate sprints so cost stays predictable and tied to concrete deliverables." },
  { q: "What happens if a supplier changes their PDF format?", a: "The extraction agent is built to reason over document structure rather than fixed field positions, so moderate format changes are handled automatically. Significant format overhauls typically require a brief recalibration, which we handle as part of ongoing support." },
]

export default function ShopifyEcommerceAutomationPage() {
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
          <span className="text-foreground">E-Commerce Automation</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Operations & Sync</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Shopify AI E-Commerce <br />
              <span className="text-accent">Automation Solutions.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy enterprise-tier e-commerce AI automation workflows. Automate returns fraud verification, supplier catalog enrichment, multi-warehouse fulfillment, and cross-channel marketing campaigns.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Consult with an Automation Lead" />
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="#workflows">See Before / After Workflows</Link>
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

      {/* Automation Pillars */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Core Pillars</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Where Manual Ops Work Bottlenecks Brands</h2>
            <p className="text-muted-foreground text-sm">
              We automate the complex manual operations that bottleneck high-volume e-commerce brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationPillars.map((item, idx) => {
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

      {/* Before/After Workflows */}
      <section id="workflows" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Real Impact</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Before and After, in Practice</h2>
          </div>

          <div className="space-y-5">
            {workflowExamples.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-muted/10 border border-border rounded-2xl p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-4 rounded-xl bg-background border border-border/60">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">Before</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.before}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-accent mb-2">After</p>
                      <p className="text-sm text-foreground leading-relaxed">{item.after}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Technical Features & Specs</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Stateful, Logged, and Auditable by Design</h2>
            <p className="text-muted-foreground text-sm">
              Stateful tracking and secure middleware interfaces that scale automatically under load.
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

      {/* Integrations */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">Compatibility</p>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-3">Connects to Your Existing Ops Stack</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We don't ask you to migrate systems. Our agents write into the shipping, ERP, and marketing tools you already run.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {integrations.map((tag, idx) => (
              <span key={idx} className="bg-muted/10 border border-border text-muted-foreground text-[10px] font-mono px-2.5 py-1 rounded-full uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Rule-Based vs. Cognitive</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Shopify Flow vs. Cognitive Automation</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Shopify Flow</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Cognitive Automation</th>
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
                      <span className="flex items-start gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{row.cognitive}</span>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Automation FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers to common queries regarding cognitive e-commerce automation.
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
