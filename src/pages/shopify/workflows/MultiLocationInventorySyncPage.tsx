'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Database, RefreshCcw, Layers, ShieldCheck,
  Zap, HelpCircle, Server, HardDrive, X,
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
  { stat: "0",      label: "Oversold inventory cases" },
  { stat: "<2s",    label: "Sync transaction update" },
  { stat: "100%",   label: "Multi-location accuracy" },
  { stat: "2 wks",  label: "To first live agent" },
]

const proofSlides: Slide[] = [
  {
    tag: "Logistics Case Study",
    title: "A multi-warehouse apparel seller was experiencing stock discrepancies and oversold variants.",
    desc: "Kovil AI built a cognitive inventory sync agent connecting their ERP, 3PL providers, and Shopify Plus Admin API nodes directly.",
    stats: [
      { value: "0", label: "Oversold occurrences" },
      { value: "99.9%", label: "Stock sync accuracy" },
    ],
  },
]

const useCases = [
  {
    icon: RefreshCcw,
    title: "Real-Time Multi-Warehouse Stock Sync",
    desc: "Syncs inventory parameters across multiple physical locations, Shopify markets, and retail POS databases in real time, preventing double-selling.",
    bullets: ["Instant quantity allocations per warehouse", "POS and online store stock level balance", "Auto-calculates buffers for peak traffic", "Handles high-concurrency order updates"],
  },
  {
    icon: Layers,
    title: "Intelligent Out-of-Stock Pre-order Routing",
    desc: "Automatically moves products to 'pre-order' state when inventory drops below buffers, and switches routing channels once new supplier shipments land.",
    bullets: ["Auto-switches variants to pre-order status", "Calculates back-in-stock ETA targets", "Routes backorders to correct warehouse queues", "Updates meta fields for transparency"],
  },
  {
    icon: Server,
    title: "Cognitive 3PL & ERP DB Connector",
    desc: "Bridges legacy warehouse databases (SAP, Oracle, NetSuite) with Shopify's inventory nodes using custom Model Context Protocol (MCP) servers.",
    bullets: ["NetSuite & SAP ERP native connectors", "Parses raw supplier manifest sheets", "Resolves SKU code mismatch conflicts", "Maintains transaction safety offsets"],
  },
  {
    icon: Database,
    title: "Automated Reorder Threshold Alerts",
    desc: "Monitors velocity metrics and forecasts when a product will run out of stock, triggering automated reorder requests to suppliers.",
    bullets: ["Predictive velocity analytics mapping", "Supplier email/Slack notification alerts", "Generates draft Purchase Orders in ERP", "Syncs tracking codes on landing"],
  },
]

const pipeline = [
  { number: "01", title: "Order Placement", desc: "Customer places order across any active Shopify POS or online channel." },
  { number: "02", title: "Logistics Check", desc: "Agent validates stock level balances across all fulfillment locations." },
  { number: "03", title: "ERP Database Sync", desc: "Locks inventory counts at NetSuite/ERP level in under 2 seconds." },
  { number: "04", title: "Fulfillment Assign", desc: "Routes the order slip to the closest warehouse to minimize transit time." },
]

const trustItems = [
  { icon: ShieldCheck, title: "Double-Sell Protection", desc: "Maintains virtual stock buffers to prevent sales during exact-second high-volume traffic." },
  { icon: Zap, title: "Sub-Second Syncs", desc: "API requests execute in real-time to avoid periodic batch discrepancies." },
  { icon: Server, title: "Conflict Resolution", desc: "Auto-reconciles discrepancies between physical scans and digital logs." },
  { icon: HardDrive, title: "Offline Resiliency", desc: "Queues transactions securely if warehouse internet drops, syncing on reconnection." },
]

const stack = ["Shopify Admin API", "ERP systems", "pgvector", "3PL APIs", "Metafields API", "NetSuite", "ShipStation", "Loop Returns"]

const comparisonRows = [
  { capability: "Sync speed", generic: "Hourly or daily batch sync updates", kovil: "Sub-2-second real-time event-driven sync updates" },
  { capability: "Oversell prevention", generic: "No safety stock buffer adjustments", kovil: "Dynamic buffer calculation based on sales velocity" },
  { capability: "ERP integrations", generic: "Custom middleware apps requiring months", kovil: "Pre-built MCP connectors deployed in under 2 weeks" },
  { capability: "Warehouse selection", generic: "Basic static regional settings", kovil: "Cognitive routing optimized by transit cost and speed" },
]

const faqs = [
  { q: "How does the system prevent overselling during high-volume drops?", a: "We establish virtual stock buffers. If a product's stock is low, the agent temporarily reserves inventory during the checkout initiate phase, preventing other buyers from checking out the same item until the session expires or completes." },
  { q: "Can this connect to custom ERPs and legacy databases?", a: "Yes. Using custom Model Context Protocol (MCP) server configurations, we build direct read/write bridges to NetSuite, SAP, or on-premise SQL databases safely." },
]

export default function MultiLocationInventorySyncPage() {
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
          <span className="text-foreground">Inventory Sync AI</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Workflows · Logistical Blueprints</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Multi-Location Inventory Sync — <br />
              <span className="text-accent">Autonomous Warehouse & POS Stock Sync.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy automated inventory sync agents that coordinate stock across multiple Shopify warehouses and sales channels in real-time, preventing double-selling.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Inventory Agent" />
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="#use-cases">See Use Cases</Link>
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

      {/* Use Cases */}
      <section id="use-cases" className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Use Cases</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">AI Inventory Management Workflows</h2>
          </div>
          <div className="space-y-6">
            {useCases.map((uc, idx) => {
              const Icon = uc.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-6 md:p-8">
                  <div className="grid lg:grid-cols-[1fr_2fr] gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground leading-snug">{uc.title}</h3>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{uc.desc}</p>
                      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                        {uc.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ShopifyProofCarousel
        heading="How one brand solved multi-warehouse sync."
        subheading="A live deployment demonstrating real-time inventory allocation gates and NetSuite ERP integrations."
        slides={proofSlides}
      />

      {/* Pipeline */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Checkout Success to ERP Inventory Lock</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {pipeline.map((step, idx) => (
              <div key={idx} className="relative bg-muted/10 border border-border rounded-2xl p-6 space-y-3">
                <span className="font-display font-black text-2xl text-accent/70">{step.number}</span>
                <h3 className="font-bold text-sm text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                {idx < pipeline.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Trust & Safety</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Database Reliability & Synchronization Integrity</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="py-16 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">Compatibility</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Logistics Tech Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Traditional Integrations vs. Kovil AI Sync</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Batch File Syncs vs. Real-Time Event Routing</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Generic Sync App</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Agent</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx < comparisonRows.length - 1 ? "border-b border-border/60" : ""}>
                    <td className="p-4 font-medium text-foreground text-xs md:text-sm">{row.capability}</td>
                    <td className="p-4 text-muted-foreground text-xs md:text-sm">
                      <span className="flex items-start gap-1.5"><X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />{row.generic}</span>
                    </td>
                    <td className="p-4 text-foreground text-xs md:text-sm font-medium bg-accent/5">
                      <span className="flex items-start gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{row.kovil}</span>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Multi-Location Inventory Sync FAQs</h2>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Custom Inventory Agent</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized multi-warehouse stock sync and pre-order handlers with a 2-week risk-free trial.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Consult a Solutions Lead" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
