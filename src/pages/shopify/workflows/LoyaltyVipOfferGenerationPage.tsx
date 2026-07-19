'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Gift, Trophy, FileCheck, Layers,
  TrendingUp, ShieldCheck, UserCheck, Percent, X,
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
  { stat: "+18%",   label: "Repeat purchase conversion" },
  { stat: "-24%",   label: "Margin cost on discount codes" },
  { stat: "Live",    label: "Dynamic price sync" },
  { stat: "2 wks",   label: "To first live agent" },
]

const proofSlides: Slide[] = [
  {
    tag: "Retention Case Study",
    title: "A premium subscription brand needed custom-targeted VIP offers without margin loss.",
    desc: "Kovil AI deployed customer loyalty agents that evaluated purchase histories and generated dynamic coupon segments automatically.",
    stats: [
      { value: "+18%", label: "Repeat conversions" },
      { value: "-24%", label: "Discount cost reduction" },
    ],
  },
]

const useCases = [
  {
    icon: UserCheck,
    title: "VIP Purchase Behavior Analyzer Agent",
    desc: "Examines customer order histories (AOV, purchase count, lifetime value) to classify buyers into specific VIP segments and recommend custom loyalty offers.",
    bullets: ["Auto-calculates RFM metrics in real time", "Classifies VIP tiers dynamically", "Maintains purchase velocity maps per customer", "Pushes segment codes to customer metafields"],
  },
  {
    icon: Percent,
    title: "Dynamic Discount & Coupon Code Allocator",
    desc: "Generates custom single-use Shopify discount codes dynamically in chat. Limits discount values based on margins and previous discount usage.",
    bullets: ["Creates custom single-use discount codes", "Balances margin parameters before code generation", "Syncs code limits with checkout session", "Enforces expiration limits dynamically"],
  },
  {
    icon: Trophy,
    title: "Loyalty Point-Aware Cart Bundler",
    desc: "Integrates with loyalty platform APIs (Yotpo, Smile) to check point balances and recommend point-redemption items directly in the cart.",
    bullets: ["Queries live loyalty point balances in chat", "Recommends custom point-redemption add-ons", "Automates code application at checkout", "Encourages tier upgrades through purchase advice"],
  },
  {
    icon: Gift,
    title: "Custom Birthday & Anniversary Campaign Agent",
    desc: "Designs and dispatches custom loyalty offers timed to client milestones, checking purchase logs to dynamically size the rewards.",
    bullets: ["Automates milestone campaign generation", "Customizes reward values based on LTV tier", "Integrates follow-up tracking via Klaviyo", "Monitors coupon claim rates automatically"],
  },
]

const pipeline = [
  { number: "01", title: "Segment Audit", desc: "Monitors buyer lifecycles and flags users reaching target LTV milestones." },
  { number: "02", title: "Margin Check", desc: "Verifies product margin constraints before designing loyalty coupons." },
  { number: "03", title: "Code Gen", desc: "Autogenerates custom single-use discount strings in Shopify Admin." },
  { number: "04", title: "Inbox Route", desc: "Sends custom coupon codes and points reminders via email or SMS/WhatsApp." },
]

const trustItems = [
  { icon: ShieldCheck, title: "Margin Safe Gates", desc: "Coupons cannot exceed configured margin limits, protecting store profit metrics." },
  { icon: Percent, title: "Direct Shopify Codes", desc: "All discount strings are created dynamically through native Shopify APIs." },
  { icon: FileCheck, title: "Review Control Hub", desc: "Draft marketing campaigns hold pending review before dispatch." },
  { icon: UserCheck, title: "Data Alignment", desc: "Stores loyalty data inside customer metafields, ensuring compliance." },
]

const stack = ["Shopify Admin API", "pgvector", "Yotpo Loyalty", "Smile.io", "Klaviyo", "Attentive", "Loop Returns", "Segment"]

const comparisonRows = [
  { capability: "Discount rules", generic: "Flat generic codes public on site", kovil: "Single-use dynamic codes sized by margin margins" },
  { capability: "Retention timing", generic: "Generic monthly newsletter alerts", kovil: "Event-triggered updates matching buyer LTV milestones" },
  { capability: "Loyalty point use", generic: "Requires logging into complex widget", kovil: "Conversational point lookups and cart bundles in chat" },
  { capability: "LTV segmentation", generic: "Static manual lists export in GSC", kovil: "Real-time RFM analysis updating metafield tags dynamically" },
]

const faqs = [
  { q: "How do you protect margins during discount generation?", a: "We define margin rules (e.g. max discount of 15% only on items with >50% gross margin). The agent queries product cost metadata and dynamically calculates the maximum allowable coupon rate." },
  { q: "Can this connect to Klaviyo and loyalty platforms?", a: "Yes. The agent syncs segment tags directly to Klaviyo lists and queries loyalty APIs like Yotpo or Smile to pull current point balances in real-time." },
]

export default function LoyaltyVipOfferGenerationPage() {
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
          <span className="text-foreground">Loyalty & VIP Offer AI</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Workflows · Retention Blueprints</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Loyalty & Custom VIP Offer — <br />
              <span className="text-accent">Dynamic Discount Allocation & Loyalty Rewards.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy VIP offer agents to analyze customer purchase patterns and automatically generate custom discount allocations and loyalty rewards.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Loyalty Agent" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">AI Loyalty & VIP Offer Workflows</h2>
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
        heading="How one brand boosted VIP customer retention."
        subheading="A live deployment demonstrating margin guardrails and dynamic Klaviyo list segments."
        slides={proofSlides}
      />

      {/* Pipeline */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Customer Action to Custom Coupon Delivery</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Margin Protection & Retention Guardrails</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Retention & Loyalty Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Standard Coupons vs. Kovil AI Rewards</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Static Discounts vs. Margin-Aware Loyalty Offers</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Standard Setup</th>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Loyalty & VIP Offer FAQs</h2>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Custom Loyalty Advisor</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized VIP rewards and dynamic discount triggers with a 2-week risk-free trial.</p>
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
