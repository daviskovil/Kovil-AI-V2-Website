'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  ShieldCheck, HelpCircle, FileCheck, Layers,
  DollarSign, RefreshCw, Truck, X,
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
  { stat: "-52%",   label: "Support tickets deflected" },
  { stat: "<5s",    label: "Refund approval validation" },
  { stat: "0",      label: "Accidental return policy leaks" },
  { stat: "2 wks",  label: "To first live agent" },
]

const proofSlides: Slide[] = [
  {
    tag: "Support Case Study",
    title: "A high-volume home essentials brand had support agents spending 30+ hours a week reviewing returns.",
    desc: "Kovil AI designed custom returns validation agents that parsed delivery times, validated tracking statuses, and automatically processed replacements within pre-set rules.",
    stats: [
      { value: "-52%", label: "Support tickets deflected" },
      { value: "30 hrs", label: "Agent time saved weekly" },
    ],
  },
]

const useCases = [
  {
    icon: Truck,
    title: "Fulfillment & Delivery Status Verifier Agent",
    desc: "Checks tracking codes directly against carrier databases (UPS, FedEx, USPS) to verify transit updates, delivery timestamps, and lost package timelines.",
    bullets: ["Queries real-time carrier delivery checkpoints", "Detects stuck shipments or custom exceptions", "Verifies delivery timeframe policy constraints", "Pushes tracking records to Shopify metafields"],
  },
  {
    icon: DollarSign,
    title: "Refund Eligibility & Policy Auditor",
    desc: "Automates policy audits based on return windows, discount codes applied, and item safety status, ensuring no accidental refunds bypass your rules.",
    bullets: ["Verifies exact purchase and return timestamps", "Validates final sale/clearance product rules", "Enforces maximum refund limit caps", "Triggers secure fraud checks dynamically"],
  },
  {
    icon: RefreshCw,
    title: "Automatic Replacements & Draft Creator",
    desc: "When a package is verified as lost or damaged in transit, the agent automatically creates a zero-dollar replacement draft order to speed up resolution.",
    bullets: ["Creates replacement draft orders in under 5 seconds", "Applies custom inventory availability audits", "Triggers shipping label generation workflows", "Sends instant email updates to customers"],
  },
  {
    icon: FileCheck,
    title: "Human-in-the-Loop Risk Audit Flow",
    desc: "For questionable requests or high-value items, the agent flags the ticket and routes an approval card to your Slack channel for manual review.",
    bullets: ["Routes high-value refunds for team review", "Slack validation button confirmations", "Escalates potential policy violations in chat", "Logs agent reasoning parameters clearly"],
  },
]

const pipeline = [
  { number: "01", title: "Claim Ingest", desc: "Customer submits a returns or refund inquiry through the support chat." },
  { number: "02", title: "Fulfillment Check", desc: "Agent validates transit codes, delivery timestamps, and purchase dates." },
  { number: "03", title: "Policy Audit", desc: "Runs rules audit against your return policy conditions." },
  { number: "04", title: "Fulfillment Sync", desc: "Triggers automatic refund or replacement draft order creation." },
]

const trustItems = [
  { icon: ShieldCheck, title: "Zero Leak Protection", desc: "Refund gates are locked to exact policy constraints, preventing mistakes." },
  { icon: DollarSign, title: "Direct Shopify Checks", desc: "All transactions are executed through native Shopify transaction APIs." },
  { icon: FileCheck, title: "Review Safeguards", desc: "Slack review gates hold premium value claims until confirmed by team leads." },
  { icon: Truck, title: "Carrier API Grounding", desc: "Uses direct shipping carrier logs, not self-reported user dates." },
]

const stack = ["Shopify Admin API", "pgvector", "Loop Returns", "ShipStation", "Gorgias", "Zendesk", "Slack Webhooks", "Klaviyo"]

const comparisonRows = [
  { capability: "Audit velocity", generic: "Support agents manually check tracking", kovil: "Sub-5-second automated carrier database check" },
  { capability: "Rule enforcement", generic: "Policy exceptions occur frequently", kovil: "Hard validation gates grounded in shop metadata" },
  { capability: "Replacement logic", generic: "Manual draft order setups", kovil: "Auto-creation of zero-value replacements on confirmation" },
  { capability: "Risk escalation", generic: "No threshold warnings", kovil: "Slack review escalation for high-value claims" },
]

const faqs = [
  { q: "How does the agent determine if a refund is eligible?", a: "The agent checks the Shopify order details, verifying the delivery date from the carrier API. It checks this against your store's return window and tags (like 'Final Sale' exclusions) before approving the refund or replacement." },
  { q: "Can we set maximum price thresholds for automatic approvals?", a: "Yes. You can define threshold limits (e.g. automatic refunds only for orders under $50). Anything above that is held for human confirmation." },
]

export default function RefundsReturnsAutomationPage() {
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
          <span className="text-foreground">Returns Automation AI</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Workflows · Support Blueprints</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Refunds & Returns Automation — <br />
              <span className="text-accent">Autonomous Order Cancellation Auditor.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy returns auditing agents to verify customer order metrics, delivery dates, and return reasons to automatically process replacements or refunds.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Support Agent" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">AI Returns & Refunds Workflows</h2>
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
        heading="How one brand automated returns."
        subheading="A live deployment demonstrating carrier delivery lookups and human review triggers."
        slides={proofSlides}
      />

      {/* Pipeline */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Return Request to Sync Completion</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Financial Safeguards & Return Auditing</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Support & Logistics Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Manual Return Invoicing vs. Kovil AI Automation</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Manual Tracking Checks vs. Instant Automated Auditing</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Manual Setup</th>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Returns & Refunds FAQs</h2>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Custom Returns Auditor</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized refund controllers and shipping status syncs with a 2-week risk-free trial.</p>
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
