'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Truck, Mail, AlertTriangle, ShieldCheck, MapPin,
  RotateCcw, Inbox, HeartCrack, X,
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { OnboardingModal } from "@/src/components/OnboardingModal"

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
  { stat: "70%+",  label: "Tickets resolved autonomously" },
  { stat: "<30s",  label: "Avg. first response" },
  { stat: "24/7",  label: "Coverage, every channel" },
  { stat: "2 wks", label: "To first live agent" },
]

const useCases = [
  {
    icon: Truck,
    title: "Order Status & Tracking Agent",
    desc: "Resolves the highest-volume support query — \"where is my order\" — autonomously by querying Shopify order and carrier tracking data directly, providing accurate delivery estimates without a human touching the ticket.",
    bullets: ["Real-time order and carrier tracking lookup", "Delay detection with proactive customer notification", "Multi-order queries handled in a single interaction", "Lost shipment escalation to carrier claims"],
  },
  {
    icon: RotateCcw,
    title: "Returns & Refund Authorization",
    desc: "Applies your returns policy automatically — checking eligibility by item, category, and purchase date — generating labels and processing refunds to the original payment method without manual review for standard cases.",
    bullets: ["Automatic eligibility check against policy rules", "Return label generation via carrier integration", "Refund processing to original payment method", "Configurable dollar threshold for auto-approval"],
  },
  {
    icon: MapPin,
    title: "Address Correction & Shipping Updates",
    desc: "Updates shipping addresses or delivery instructions when a shipment hasn't yet been processed by the carrier, logging every modification for audit purposes rather than requiring a manual support handoff.",
    bullets: ["Pre-fulfillment address correction", "Carrier-status check before allowing changes", "Full modification audit log", "Automatic customer confirmation of the update"],
  },
  {
    icon: Inbox,
    title: "Omnichannel Ticket Triage",
    desc: "Reads support tickets across email, SMS, WhatsApp, and live chat, drafts replies grounded in real order data, and updates ticket labels and status across Gorgias or Zendesk automatically.",
    bullets: ["Unified triage across email, SMS, WhatsApp, chat", "Reply drafts grounded in live Shopify order data", "Automatic ticket labeling and status updates", "Consistent tone-of-voice across every channel"],
  },
  {
    icon: HeartCrack,
    title: "Sentiment-Based Escalation Agent",
    desc: "Detects frustrated sentiment, chargeback threats, or legal language in incoming tickets and routes them instantly to a human manager in Slack, rather than letting a bot attempt to de-escalate a high-risk case.",
    bullets: ["Real-time sentiment and risk-language detection", "Instant Slack routing for high-risk tickets", "Chargeback-threat pattern recognition", "Never attempts automated resolution on flagged tickets"],
  },
]

const pipeline = [
  { number: "01", title: "Ticket Intake", desc: "Incoming messages across every channel are normalized and routed to the agent for initial triage." },
  { number: "02", title: "Order Data Grounding", desc: "The agent pulls live order, shipping, and account data from Shopify before drafting any response." },
  { number: "03", title: "Resolve or Escalate", desc: "Standard cases resolve autonomously within policy; high-risk or ambiguous cases route to Slack for human review." },
  { number: "04", title: "Log & Learn", desc: "Every resolution and escalation is logged, giving your team visibility into automation performance over time." },
]

const trustItems = [
  { icon: ShieldCheck, title: "Secure, Scoped API Gateways", desc: "Model permissions are limited so agents only run validated commands — for example, initiating a return without ever writing a payment refund directly." },
  { icon: AlertTriangle, title: "Slack Review Escapes", desc: "Tickets involving custom refunds above threshold, chargeback threats, or angry sentiment are routed instantly to human managers in Slack." },
  { icon: Mail, title: "Consistent Omnichannel Tone", desc: "Brand voice guidelines are enforced across every channel, so automated replies read consistently whether they arrive by email or WhatsApp." },
  { icon: CheckCircle2, title: "Full Audit Trail", desc: "Every autonomous action — refund, address change, label generation — is logged with the reasoning behind the decision." },
]

const stack = ["Gorgias", "Zendesk", "Shopify Admin API", "ShipStation", "Loop Returns", "Twilio", "Slack", "Klaviyo"]

const comparisonRows = [
  { capability: "Order status queries", generic: "Static chatbot with scripted responses", kovil: "Live order/carrier data lookup, real answers" },
  { capability: "Returns processing", generic: "Manual review for every request", kovil: "Auto-approved within policy, escalates the rest" },
  { capability: "Channel coverage", generic: "Siloed per channel, inconsistent tone", kovil: "Unified triage across email, SMS, WhatsApp, chat" },
  { capability: "Risk detection", generic: "No sentiment or chargeback awareness", kovil: "Real-time detection with instant Slack escalation" },
  { capability: "Response time", generic: "Business-hours only, queue delays", kovil: "24/7 coverage, sub-30-second first response" },
]

const faqs = [
  { q: "How does the agent interface with Gorgias or Zendesk?", a: "We write secure API middleware that listens to webhook triggers from helpdesks. The agent processes ticket text, hits Shopify APIs to verify order state, and drafts a reply or executes order updates automatically." },
  { q: "Can the support agent edit customer addresses?", a: "Yes, under strict constraints. If the shipping carrier has not yet processed the label, the agent updates the address and logs the modification for audit purposes." },
  { q: "What stops the agent from issuing an unauthorized refund?", a: "Refund actions are scoped to a configurable dollar threshold and eligibility rules. Anything outside those bounds — or involving a customer signaling a chargeback — is routed to a human manager in Slack instead of being auto-approved." },
  { q: "Does the agent work across all our support channels?", a: "Yes. We build unified triage across email, SMS, WhatsApp, and live chat, so the agent maintains consistent context and tone regardless of which channel a customer uses." },
  { q: "How does sentiment-based escalation work?", a: "The agent screens incoming messages for frustrated sentiment, legal language, or chargeback-threat patterns. Any ticket matching those signals is routed instantly to a human manager rather than receiving an automated response." },
  { q: "What percentage of tickets can actually be resolved autonomously?", a: "Production deployments typically see 70%+ of standard tickets (order status, straightforward returns, address updates) resolved without human involvement, with the remainder escalated by design." },
  { q: "Is customer PII protected during automated processing?", a: "Yes. Customer data flows through token-shielded middleware, and sensitive fields are masked before reaching any model, with data processed inside your dedicated private cloud tenant." },
  { q: "Can we review what the agent decided and why?", a: "Yes. Every autonomous action is logged with the reasoning behind the decision, giving your team a full audit trail rather than a black-box resolution." },
  { q: "How long does it take to launch a first agent?", a: "A first deployment — typically order status and basic returns triage — takes about 2 weeks from kickoff, including helpdesk integration and policy rule configuration." },
  { q: "Can the agent operate in multiple languages?", a: "Yes. The underlying models support multilingual conversation, and we configure locale-aware responses for international support teams." },
  { q: "Does this replace our human support team?", a: "No. It removes the repetitive, low-judgment ticket volume so your human reps focus on complex, high-value, or emotionally sensitive cases that genuinely need a person." },
]

export default function AutonomousCustomerServicePage() {
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
          <span className="text-foreground">Autonomous Customer Service</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Vertical Solutions · Customer Service</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Autonomous Customer Service — <br />
              <span className="text-accent">Custom Support AI Agents for Shopify.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Automate customer support with agents that have read/write API access to order tracking, address correction, and return authorization — while risky or emotional tickets escalate straight to a human.
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Five Agents Covering the Support Queue</h2>
            <p className="text-muted-foreground text-sm">Resolve e-commerce support tickets autonomously with direct API integrations.</p>
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

      {/* Pipeline */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Ticket Intake to Resolution or Escalation</h2>
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

      {/* Trust */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Safety & Access Controls</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Autonomous, Not Unaccountable</h2>
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

      {/* Stack */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">Compatibility</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Support Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {stack.map((tag, idx) => (
              <span key={idx} className="bg-muted/10 border border-border text-muted-foreground text-[10px] font-mono px-2.5 py-1 rounded-full uppercase">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Chatbot vs. Support Agent</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Not Just a Scripted Chatbot?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Scripted Chatbot</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Support Agent</th>
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
      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">FAQ</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Solutions FAQs</h2>
            <p className="text-muted-foreground text-sm">Answers regarding safety boundaries and helpdesk triggers.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-border rounded-2xl overflow-hidden bg-muted/5">
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Support AI Agent</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized order tracking and returns agents with a 2-week risk-free trial.</p>
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
