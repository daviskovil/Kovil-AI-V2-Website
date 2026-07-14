'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Shuffle, Users, RefreshCw, BarChart2, CreditCard,
  MailPlus, ShieldCheck, X,
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
  { stat: "-22%",  label: "Voluntary churn" },
  { stat: "+15%",  label: "Failed payment recovery" },
  { stat: "24/7",  label: "Cohort monitoring" },
  { stat: "2 wks", label: "To first live agent" },
]

const useCases = [
  {
    icon: Shuffle,
    title: "Custom Box Swaps & Skips",
    desc: "Allows subscribers to text or message the agent to swap items, alter shipping intervals, or skip a cycle without logging into an account portal — the single biggest reducer of passive 'I forgot to manage it' churn.",
    bullets: ["Natural-language swap, skip, and pause requests", "No account login required to make changes", "Respects your configured swap/skip frequency limits", "Confirms changes back through the customer's preferred channel"],
  },
  {
    icon: Users,
    title: "Churn Risk Cohort Watchers",
    desc: "Continuously tracks subscriber behavior signals — failed payments, declining usage, help-page visits — and triggers preemptive, personalized outreach before the customer ever initiates a cancellation.",
    bullets: ["Behavioral signal monitoring (payment, engagement, support)", "Preemptive discount or check-in outreach before cancellation", "Cohort-level risk scoring, not one-size-fits-all triggers", "Escalates high-LTV at-risk accounts to a human rep"],
  },
  {
    icon: RefreshCw,
    title: "Renewal Price Negotiators",
    desc: "When a customer signals intent to cancel, the agent checks their lifetime value and applies configured discount bounds to offer a cheaper tier, a box swap, or a pause — instead of losing the subscriber outright.",
    bullets: ["LTV-aware discount and offer bounds", "Alternative offers: downgrade, swap, or pause vs. flat discount", "Full negotiation transcript logged for review", "Configurable maximum discount ceiling per cohort"],
  },
  {
    icon: CreditCard,
    title: "Failed Payment Recovery Agent",
    desc: "Detects failed card charges immediately, retries with smart timing, and reaches out conversationally to update payment details — recovering revenue that would otherwise silently churn out through card decline alone.",
    bullets: ["Smart retry timing based on decline reason", "Conversational payment-method update flow", "Dunning sequence across email, SMS, and WhatsApp", "Recovers subscriptions before involuntary cancellation"],
  },
  {
    icon: BarChart2,
    title: "Unified Subscription Analytics",
    desc: "Aggregates retention lists, average subscriber lifespan, cancellation cause breakdowns, and win-back performance into a single dashboard, replacing manual spreadsheet reconciliation across multiple tools.",
    bullets: ["Retention and lifespan tracking by cohort", "Cancellation cause categorization", "Win-back campaign performance tracking", "Exportable reporting for leadership review"],
  },
]

const pipeline = [
  { number: "01", title: "Signal Detection", desc: "The agent monitors payment failures, engagement drops, and support interactions in real time across your subscription base." },
  { number: "02", title: "Risk Scoring", desc: "Each subscriber is scored for churn risk based on LTV, tenure, and behavioral signals — not a flat one-size-fits-all rule." },
  { number: "03", title: "Personalized Outreach", desc: "High-risk subscribers receive a tailored offer (discount, swap, pause) delivered via their preferred channel." },
  { number: "04", title: "Negotiation & Logging", desc: "If a cancellation request comes in, the agent negotiates within your configured bounds and logs the full transcript." },
]

const trustItems = [
  { icon: ShieldCheck, title: "Configurable Discount Ceilings", desc: "Every negotiation runs within a hard-coded maximum discount bound you set — the agent can never exceed your approved offer limits." },
  { icon: MailPlus, title: "Compliant Outreach Channels", desc: "Email, SMS, and WhatsApp outreach respect opt-in status and regional marketing consent rules (TCPA, GDPR) automatically." },
  { icon: Users, title: "Human Escalation for High-LTV Accounts", desc: "Subscribers above a configurable lifetime-value threshold are routed to a human rep instead of being fully automated." },
  { icon: BarChart2, title: "Full Negotiation Transcript Logging", desc: "Every automated offer and customer response is logged, giving your team a complete audit trail of retention activity." },
]

const stack = ["Recharge", "Loop Subscriptions", "Smartrr", "Bold Subscriptions", "Stripe", "Klaviyo", "Gorgias", "Twilio WhatsApp", "Segment"]

const comparisonRows = [
  { capability: "Cancellation handling", generic: "Static 'are you sure?' page with one flat discount", kovil: "LTV-aware negotiation across multiple offer types" },
  { capability: "Failed payment recovery", generic: "Generic retry email sequence", kovil: "Smart-timed retries + conversational payment update" },
  { capability: "Churn detection", generic: "Reactive — only after cancellation request", kovil: "Proactive cohort risk scoring before request" },
  { capability: "Box management", generic: "Requires account portal login", kovil: "Swap/skip/pause via natural-language message" },
  { capability: "Reporting", generic: "Manual spreadsheet reconciliation", kovil: "Unified dashboard across cause, lifespan, and win-back" },
]

const faqs = [
  { q: "Which subscription tools can agents integrate with?", a: "We build custom connectors linking Shopify Admin APIs with subscription processors like Recharge, Loop, Smartrr, and Bold, so agents can read and act on live subscription state." },
  { q: "How does the agent negotiate cancellations?", a: "When a customer signals intent to cancel, the model checks their lifetime value (LTV) and applies custom discount bounds to offer cheaper alternatives, box swaps, or pauses — never exceeding a ceiling you configure." },
  { q: "Can the agent recover failed payments automatically?", a: "Yes. It detects declined charges, applies smart-timed retries based on decline reason, and reaches out conversationally to help the customer update their payment method before the subscription is involuntarily cancelled." },
  { q: "How is churn risk actually scored?", a: "We build a cohort risk model incorporating payment health, engagement signals (logins, help-page visits), and tenure. Subscribers crossing a risk threshold trigger preemptive outreach before they ever initiate a cancellation." },
  { q: "Can high-value subscribers still talk to a human?", a: "Yes. We configure an LTV threshold above which the agent escalates directly to a human retention specialist rather than attempting a fully automated negotiation." },
  { q: "Is outreach compliant with SMS and email marketing laws?", a: "Yes. All outreach respects opt-in status and regional consent requirements (TCPA, GDPR, CASL) automatically, and unsubscribe/opt-out requests are honored immediately across every channel." },
  { q: "Can subscribers manage their box without logging in?", a: "Yes. Subscribers can text or message the agent directly to swap products, change frequency, or skip a shipment, without navigating to an account portal — this is one of the highest-impact features for reducing passive churn." },
  { q: "How long does it take to launch?", a: "A first-workflow deployment — typically failed payment recovery plus basic cancellation negotiation — takes about 2 weeks from kickoff, including integration with your subscription platform." },
  { q: "Do you provide reporting on retention performance?", a: "Yes. Every deployment includes a unified dashboard tracking retention rates, average subscriber lifespan, cancellation cause breakdowns, and win-back campaign performance." },
  { q: "What discount bounds can we configure?", a: "You set the maximum discount percentage, which offer types are available (percentage off, free shipping, box downgrade, pause), and how many times a single subscriber can be offered a retention deal." },
  { q: "Can this work alongside our existing win-back email flows?", a: "Yes. We typically integrate with your existing Klaviyo win-back sequences rather than replacing them, adding conversational recovery as an additional channel rather than a rip-and-replace." },
]

export default function SubscriptionRetentionPage() {
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
          <span className="text-foreground">Subscription Retention</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Vertical Solutions · Subscription D2C</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Subscription Retention AI — <br />
              <span className="text-accent">Autonomous Churn Prevention Agents.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Lower subscription churn with agents that handle renewal negotiations, recover failed payments, execute box skips and swaps by text, and flag at-risk cohorts before they ever hit cancel.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Retention Agent" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Five Agents That Extend Subscriber Lifetime Value</h2>
            <p className="text-muted-foreground text-sm">Deliver personalized retention actions that extend subscriber lifetime value automatically.</p>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">From Risk Signal to Logged Negotiation</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Guardrails</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Negotiation With Boundaries You Set</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Subscription Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Static Flow vs. Retention Agent</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Not Just a Cancel-Flow Discount Popup?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Static Discount Popup</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Retention Agent</th>
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
            <p className="text-muted-foreground text-sm">Answers regarding negotiation bounds and subscription platform hooks.</p>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Autonomous Retention System</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch custom subscription negotiators and failed-payment recovery agents with a 2-week risk-free trial.</p>
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
