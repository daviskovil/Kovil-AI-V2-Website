'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight, Database,
  Settings, Bot, MessageSquare, Play, ShieldCheck, Repeat2, X,
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
  { stat: "+18%",  label: "Cart recovery lift" },
  { stat: "98%",   label: "WhatsApp open rate" },
  { stat: "100%",  label: "Opt-in only outreach" },
  { stat: "2 wks", label: "To first live flow" },
]

const proofSlides: Slide[] = [
  {
    tag: "Workflow Blueprint",
    title: "A brand's recovery emails were getting buried in the inbox.",
    desc: "Kovil AI moved cart recovery onto WhatsApp, where messages actually get opened — combined with a conversational agent that can answer real product questions instead of just repeating the cart contents.",
    stats: [
      { value: "+18%", label: "Cart recovery lift" },
      { value: "98%", label: "WhatsApp open rate" },
    ],
  },
  {
    tag: "Under the Hood",
    title: "Built on the official Twilio and Meta WhatsApp Business API.",
    desc: "No unofficial workarounds — the integration runs through Twilio and Meta's official gateways for reliable delivery, with multi-turn conversation memory so customers can ask follow-up questions naturally.",
    stats: [
      { value: "Official API", label: "Twilio/Meta" },
      { value: "Multi-turn", label: "Conversation memory" },
    ],
  },
  {
    tag: "Multi-Agent Handoff",
    title: "A Trigger Agent hands off to an Offer Generator, then a Conversational Agent.",
    desc: "The Trigger Agent detects abandonment, the Offer Generator builds the personalized discount and image, and the Conversational Agent handles the back-and-forth before generating a one-tap checkout link.",
    stats: [
      { value: "4", label: "Agents in the loop" },
      { value: "One-tap", label: "Checkout link" },
    ],
  },
  {
    tag: "Safety Controls",
    title: "Every message goes only to customers who explicitly opted in.",
    desc: "Recovery messages send strictly to users who opted in to WhatsApp alerts at checkout, with TCPA and GDPR consent rules enforced automatically before any send.",
    stats: [
      { value: "100%", label: "Opt-in verified" },
      { value: "TCPA/GDPR", label: "Compliant outreach" },
    ],
  },
  {
    tag: "Outcome",
    title: "Higher open rates, real answers, one-tap recovery.",
    desc: "Customers get their sizing question answered in the same thread where they abandoned, then check out without ever leaving the conversation.",
    stats: [
      { value: "+18%", label: "Cart Recovery" },
      { value: "98%", label: "Open Rate" },
    ],
  },
]

const pipeline = [
  { icon: Play, title: "Cart Abandonment Event", desc: "Triggers when a customer abandons checkout, capturing variant items, quantities, and buyer parameters." },
  { icon: Bot, title: "Visual Discount Proposal", desc: "Generates custom recommendation images and recovery discounts matching the abandoned catalog items." },
  { icon: MessageSquare, title: "WhatsApp Conversation Loop", desc: "Sends a custom WhatsApp recovery message, answering variant sizing or price questions autonomously in the same thread." },
  { icon: Database, title: "Checkout Handoff & Logging", desc: "Generates a pre-loaded checkout link with the variant and code, logging the full conversation for attribution." },
]

const features = [
  { icon: ShieldCheck, title: "Opt-In Checkpoint Compliance", desc: "Sends recovery messages strictly to users who opt in to WhatsApp alerts during checkout, respecting privacy and marketing consent laws." },
  { icon: Repeat2, title: "Multi-Turn Conversation Memory", desc: "Maintains chat history across turns, allowing buyers to adjust order variables directly via text without restarting the conversation." },
  { icon: Settings, title: "Twilio / Meta API Connectors", desc: "Integrates with official WhatsApp Business API gateways for robust, high-deliverability messaging rather than unofficial workarounds." },
  { icon: MessageSquare, title: "Post-Purchase Follow-Up", desc: "Beyond cart recovery, the same conversational channel handles delivery updates, review requests, and reorder prompts." },
]

const scenario = {
  title: "Example: Abandoned Cart With a Sizing Question",
  steps: [
    "A customer adds a jacket to cart, selects a size, but abandons at the shipping step.",
    "20 minutes later, the agent sends a WhatsApp message with a personalized image of the item and a 10% recovery code.",
    "The customer replies asking if the jacket runs small — the agent answers using your actual sizing data for that specific SKU.",
    "Satisfied with the answer, the customer requests the checkout link directly in the same thread.",
    "The agent sends a pre-loaded checkout URL with the variant, size, and discount code already applied for one-tap payment.",
  ],
}

const stack = ["Twilio", "Meta WhatsApp Business API", "Shopify Admin API", "Klaviyo", "Segment"]

const comparisonRows = [
  { capability: "Message open rate", email: "~20% typical open rate", kovil: "~98% typical WhatsApp open rate" },
  { capability: "Sizing/product questions", email: "Requires a separate support ticket", kovil: "Answered directly in the same thread" },
  { capability: "Checkout friction", email: "Customer navigates back to the site", kovil: "Pre-loaded one-tap checkout link" },
  { capability: "Compliance", email: "CAN-SPAM / CASL rules apply", kovil: "Opt-in verified before every send, TCPA/GDPR aligned" },
  { capability: "Conversation continuity", email: "Static, one-way sequence", kovil: "Multi-turn, remembers context across replies" },
]

const faqs = [
  { q: "Is the recovery workflow compliant with SMS and messaging laws?", a: "Yes. Our integrations follow strict TCPA and GDPR rules, ensuring automated marketing only runs for customers with verified opt-ins during checkout." },
  { q: "Can customers finalize checkout inside WhatsApp?", a: "The agent generates a direct Shopify checkout link pre-loaded with the variant and discount code, enabling one-tap payment without leaving the conversation." },
  { q: "What happens if a customer asks a question the agent can't answer?", a: "The agent is scoped to catalog and order data it's grounded in. For genuinely ambiguous requests, it hands off to a human rep in your helpdesk rather than guessing." },
  { q: "How is this different from a basic WhatsApp broadcast tool?", a: "Broadcast tools send one-way messages. Our agent maintains multi-turn conversation memory, can answer product-specific questions grounded in your real catalog, and adjusts the offer based on the actual conversation." },
  { q: "Does this require the official WhatsApp Business API?", a: "Yes. We integrate through Twilio or Meta's official WhatsApp Business API gateways for reliable, high-deliverability messaging rather than unofficial or unsupported integration paths." },
  { q: "Can the same channel be used for more than cart recovery?", a: "Yes. Once the conversational channel is live, most clients extend it to delivery updates, review requests, and personalized reorder prompts using the same infrastructure." },
  { q: "How quickly after cart abandonment does the message send?", a: "Timing is configurable; most deployments start with a 20–30 minute delay to avoid feeling instantaneous, with a possible follow-up message if the first goes unanswered." },
  { q: "What discount bounds can we configure?", a: "You set the maximum discount percentage or dollar amount, and whether it should vary based on cart value or customer segment." },
  { q: "How long does it take to launch?", a: "A first cart-recovery workflow typically takes about 2 weeks from kickoff, including WhatsApp Business API setup and catalog data grounding." },
  { q: "Can we track revenue attribution from this channel?", a: "Yes. Every conversation and resulting purchase is logged and tagged for attribution, so recovered revenue from WhatsApp is clearly separated from other channels in your reporting." },
]

export default function WhatsappAgenticMarketingPage() {
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
          <span className="text-foreground">WhatsApp Marketing</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Actionable Workflows · Recovery Blueprint</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              WhatsApp Agentic Marketing — <br />
              <span className="text-accent">Conversational Checkout Recovery.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy WhatsApp e-commerce agents that recover abandoned checkouts, answer real sizing and product questions in-thread, and hand off a pre-loaded one-tap checkout link.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Deploy Recovery Setup" />
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">The Recovery Pipeline</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Abandoned Cart to One-Tap Checkout</h2>
            <p className="text-muted-foreground text-sm">Trigger, generate customized visual recommendations, and recover checkouts dynamically.</p>
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

      <ShopifyProofCarousel
        heading="How one brand recovered abandoned carts inside a WhatsApp thread."
        subheading="A real deployment, walked step by step — from official Business API messaging to a multi-agent conversation handoff to the opt-in check that keeps every send compliant."
        slides={proofSlides}
      />

      {/* Features */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Technical Features</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Compliant, Contextual, Multi-Turn</h2>
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

      {/* Example Scenario */}
      <section className="py-20 px-6 border-t border-border bg-background">
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
      <section className="py-16 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">Compatibility</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">The Conversational Recovery Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Email vs. WhatsApp Recovery</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Not Just Send Another Recovery Email?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Recovery Email</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI WhatsApp Agent</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={idx < comparisonRows.length - 1 ? "border-b border-border/60" : ""}>
                    <td className="p-4 font-medium text-foreground text-xs md:text-sm">{row.capability}</td>
                    <td className="p-4 text-muted-foreground text-xs md:text-sm">
                      <span className="flex items-start gap-1.5"><X className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />{row.email}</span>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Workflows FAQs</h2>
            <p className="text-muted-foreground text-sm">Answers regarding compliance bounds and Twilio scopes.</p>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your WhatsApp Recovery Flow</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Partner with Kovil AI to deploy opt-in WhatsApp marketing channels under a 2-week risk-free trial.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Deploy Recovery Setup" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
