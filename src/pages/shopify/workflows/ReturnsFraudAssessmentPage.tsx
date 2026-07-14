'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight, Database,
  Settings, Bot, Play, ShieldCheck, Repeat2, Image as ImageIcon, Users, X,
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
  { stat: "48hrs",  label: "Avg. processing time" },
  { stat: "<$100",  label: "Auto-approval threshold" },
  { stat: "24/7",   label: "Photo audit coverage" },
  { stat: "2 wks",  label: "To first live auditor" },
]

const pipeline = [
  { icon: Play, title: "Return Ticket Trigger", desc: "A customer submits a return request with descriptions and photos of the item through your existing returns portal." },
  { icon: ImageIcon, title: "Photo Quality VLM Audit", desc: "Vision-language models compare photos with catalog records, identifying tag authenticity, damage state, and item match." },
  { icon: Bot, title: "Risk Scoring", desc: "Cross-references customer purchase and return history, LTV, and photo audit results into a single fraud risk score." },
  { icon: Users, title: "Auto-Approve or Escalate", desc: "Low-risk returns under your configured threshold commit automatically; flagged cases route to a human reviewer." },
]

const features = [
  { icon: ShieldCheck, title: "Visual Defect Checks", desc: "Vision networks scan item labels and tags, identifying wear metrics and preventing worn-and-returned fraud exchanges." },
  { icon: Repeat2, title: "High-Confidence Return Routing", desc: "High-value customers with clean purchase histories get instant approvals, routing items directly to the closest warehouse." },
  { icon: Settings, title: "Loop / Returnly API Connectors", desc: "Hooks directly into standard e-commerce returns APIs, managing exchange logic autonomously alongside your existing returns platform." },
  { icon: Database, title: "Cross-Order Pattern Detection", desc: "Flags customers with unusual return-rate patterns across their order history, not just single-transaction anomalies." },
]

const scenario = {
  title: "Example: High-Value Return With a Damage Claim",
  steps: [
    "A customer submits a return claiming a product arrived damaged, uploading two photos.",
    "The vision model compares the photos against catalog reference images, confirming the item and tag match, but flags an inconsistency in the described damage location.",
    "The risk model checks the customer's return history — a first-time return with strong purchase history lowers the risk score.",
    "Because the inconsistency is flagged but risk is otherwise low, the case routes to a human reviewer rather than auto-approving or auto-denying.",
    "The reviewer resolves it in under a minute using the pre-analyzed photo comparison, instead of starting the investigation from scratch.",
  ],
}

const stack = ["Loop Returns", "Returnly", "Shopify Admin API", "Vision-Language Models", "Stripe", "Slack API"]

const comparisonRows = [
  { capability: "Photo review", manual: "Manual visual inspection by a rep", kovil: "Vision-model comparison against catalog images" },
  { capability: "Processing time", manual: "5–7 days typical turnaround", kovil: "48 hours average" },
  { capability: "Risk detection", manual: "Reactive, based on rep intuition", kovil: "Cross-order pattern detection and LTV scoring" },
  { capability: "Low-risk case handling", manual: "Every case reviewed manually", kovil: "Auto-approved under configured threshold" },
  { capability: "Consistency", manual: "Varies by reviewer judgment", kovil: "Consistent, logged scoring criteria" },
]

const faqs = [
  { q: "How does the system audit return photo quality?", a: "Visual model algorithms check pixel-level details, structural parameters, and brand tags against template catalog images, highlighting discrepancies like damage location mismatches or tag inconsistencies." },
  { q: "Does the auditor initiate refunds autonomously?", a: "Only within strict price thresholds (e.g. returns under $100 with a clean customer history). Higher-value or flagged refunds require a manager's validation in Slack before processing." },
  { q: "How accurate is the fraud risk scoring?", a: "The scoring model combines photo audit confidence, purchase history, and return-rate patterns. Production deployments typically see a meaningful reduction in fraudulent approvals while keeping legitimate customer friction low." },
  { q: "What happens to flagged cases?", a: "Flagged cases are routed to a human reviewer with the photo comparison and risk factors pre-analyzed, so the reviewer resolves the case in a fraction of the time a cold investigation would take." },
  { q: "Can this integrate with our existing returns platform?", a: "Yes. We build direct connectors to Loop Returns, Returnly, and similar platforms, so the fraud assessment layer sits on top of your existing returns workflow rather than replacing it." },
  { q: "Does the system store customer return photos long-term?", a: "Photos are processed for comparison and retained only as long as your returns policy requires for audit purposes, following the same data retention rules as your existing returns platform." },
  { q: "How is the auto-approval threshold configured?", a: "You set the dollar threshold and any additional conditions (e.g. first-time return, minimum account tenure) that qualify a return for automatic approval without human review." },
  { q: "Can the system detect patterns across multiple orders from the same customer?", a: "Yes. The risk model looks at return-rate history across a customer's full order history, not just the current transaction, catching patterns a single-case review would miss." },
  { q: "How long does it take to launch this workflow?", a: "A first deployment covering your core return categories typically takes about 2 weeks, including integration with your returns platform and threshold configuration." },
  { q: "Does this replace our returns team?", a: "No. It removes the repetitive, low-judgment photo review and history cross-checking so your team's time goes to the genuinely ambiguous cases that need human judgment." },
]

export default function ReturnsFraudAssessmentPage() {
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
          <span className="text-foreground">Returns Fraud Auditor</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Actionable Workflows · Risk Blueprint</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Returns Fraud Assessment — <br />
              <span className="text-accent">Autonomous Risk & Photo Auditors.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy cognitive returns fraud inspectors that analyze customer return photos automatically, evaluate past order behavior patterns, and flag high-risk transactions before a refund commits.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Deploy Auditor Setup" />
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="#pipeline">See the Pipeline</Link>
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

      {/* Pipeline */}
      <section id="pipeline" className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">The Auditing Pipeline</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Trigger, Analyze, Score, Route</h2>
            <p className="text-muted-foreground text-sm">Trigger, analyze visual assets, and log customer risk parameters.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {pipeline.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="relative bg-background border border-border rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  {idx < pipeline.length - 1 && (
                    <ChevronRight className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-border" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Technical Features</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Vision-Grounded, History-Aware Risk Scoring</h2>
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
                    <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Example Scenario */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Walkthrough</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">{scenario.title}</h2>
          </div>
          <div className="bg-background border border-border rounded-2xl p-6 md:p-8">
            <ol className="space-y-4">
              {scenario.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs flex items-center justify-center shrink-0">{idx + 1}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">Compatibility</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">The Returns Risk Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Manual Review vs. Auditor Agent</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Not Just Review Returns by Hand?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Manual Review</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Auditor</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx < comparisonRows.length - 1 ? "border-b border-border/60" : ""}>
                    <td className="p-4 font-medium text-foreground text-xs md:text-sm">{row.capability}</td>
                    <td className="p-4 text-muted-foreground text-xs md:text-sm">
                      <span className="flex items-start gap-1.5"><X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />{row.manual}</span>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Workflows FAQs</h2>
            <p className="text-muted-foreground text-sm">Answers regarding vision constraints and approval overrides.</p>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Returns Risk Auditor</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Partner with Kovil AI to map returns schemas and deploy automatic photo verification loops under a 2-week risk-free trial.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Deploy Auditor Setup" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
