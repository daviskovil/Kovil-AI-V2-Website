'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  UtensilsCrossed, Calendar, Tag, ShieldCheck,
  ShoppingBag, HelpCircle, AlertTriangle, RefreshCw, X,
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
  { stat: "+28%",   label: "Subscription retention lift" },
  { stat: "-42%",   label: "Support tickets deflected" },
  { stat: "0",      label: "Oversold fresh products" },
  { stat: "2 wks",  label: "To first live agent" },
]

const proofSlides: Slide[] = [
  {
    tag: "D2C F&B Case Study",
    title: "A gourmet food merchant needed to automate subscription boxes and allergen filtering.",
    desc: "Kovil AI deployed a multi-agent structure integrating with the brand's Shopify store, ensuring allergen exclusion validations and inventory-timed deliveries.",
    stats: [
      { value: "+28%", label: "Subscription retention lift" },
      { value: "0", label: "Allergen routing errors" },
    ],
  },
  {
    tag: "Inventory Integration",
    title: "Agents track fresh inventory batches and expiration dates.",
    desc: "A custom MCP server links the agentic network to the merchant's ERP, prioritizing the shipping of products with earlier expiration dates.",
    stats: [
      { value: "Live", label: "Batch & expiry tracking" },
      { value: "ERP", label: "Direct database bridge" },
    ],
  },
]

const useCases = [
  {
    icon: Calendar,
    title: "Freshness & Expiry Tracking Agent",
    desc: "Monitors inventory batches in real time. It recommends near-expiry items via dynamic discounts and ensures no item is dispatched past its safety threshold.",
    bullets: ["Real-time expiry inventory monitoring", "Dynamic threshold-based discounting", "Auto-updates product variant availability", "Safe dispatch validation"],
  },
  {
    icon: UtensilsCrossed,
    title: "Recipe Personalization & Ingredient Builder",
    desc: "Assembles custom ingredient bundles based on customer recipe choices, serving sizes, and dietary tags (keto, vegan, gluten-free).",
    bullets: ["Ingredient mapping from recipe selections", "Dietary profile creation and filtering", "Serving size dynamically updates cart quantities", "Cross-sell pantry essentials semantically"],
  },
  {
    icon: ShoppingBag,
    title: "Dynamic Subscription Box Manager",
    desc: "Allows customers to modify their monthly meal or ingredient subscription box via chat. It queries current warehouse stocks to suggest fresh alternatives.",
    bullets: ["Chat-based box content adjustments", "Live inventory checking for swap options", "Recharge and Shopify Subscriptions API integration", "Auto-reconciles variant price differences"],
  },
  {
    icon: AlertTriangle,
    title: "Allergen & Sensitivity Exclusion Safety Audit",
    desc: "Enforces strict validation rules, preventing any product containing user-flagged allergens from being added to the cart.",
    bullets: ["Cross-checks full ingredient deck metadata", "Allergen warning triggers during conversation", "Saves safety exclusions to customer metafields", "Prevents mistaken add-to-cart actions"],
  },
]

const pipeline = [
  { number: "01", title: "Dietary Intake", desc: "The agent builds a profile containing customer preferences, serving sizes, and allergen limitations." },
  { number: "02", title: "Live Stock Verification", desc: "Checks batch inventory databases to verify that fresh items are in stock." },
  { number: "03", title: "Ingredient Matching", desc: "Constructs custom recipe bundles using vector catalog search." },
  { number: "04", title: "Subscription Sync", desc: "Finalizes checkout and syncs profile preferences to subscription apps." },
]

const trustItems = [
  { icon: ShieldCheck, title: "FDA Compliance Grounding", desc: "Agents use pre-vetted label copy and never invent nutritional profiles or health benefits." },
  { icon: AlertTriangle, title: "Allergen Priority Gate", desc: "Exclusions are validated at the database level before cart insertion." },
  { icon: RefreshCw, title: "Cold-Chain Logistical Awareness", desc: "Calculates delivery estimates based on zip-code shipping routes for perishable items." },
  { icon: HelpCircle, title: "Clear Diet Disclaimers", desc: "Redirects complex dietary advisory inquiries to professional nutritionists." },
]

const stack = ["Shopify Admin API", "Recharge API", "Loop Returns", "pgvector", "ERP databases", "Klaviyo", "Gorgias", "Gusto", "ShipStation"]

const comparisonRows = [
  { capability: "Dietary mapping", generic: "Static dropdown selections", kovil: "Conversational intake + strict ingredient metadata safety check" },
  { capability: "Perishable control", generic: "No batch or expiry awareness", kovil: "MCP-linked batch tracking and expiry-based discounting" },
  { capability: "Recipe bundling", generic: "Manual adding of individual items", kovil: "Dynamic recipe-to-cart single conversational confirmation" },
  { capability: "Allergen safety", generic: "Self-service disclaimer notes only", kovil: "Hard validation gates preventing allergen cart insertion" },
]

const faqs = [
  { q: "How do the agents handle allergen filters?", a: "We ingest your full ingredient deck metadata. During the intake process, customer exclusions are mapped to customer metafields. Before any product recommendations are rendered, the agent checks the product's ingredients for conflicts and actively blocks the item if a match is found." },
  { q: "Can this connect with Recharge or Shopify Subscriptions?", a: "Yes. Our agents are built to query subscription APIs, allowing customers to easily modify schedules, swap meal variants, or skip months entirely through natural conversation." },
  { q: "Does the system support cold-chain shipping restrictions?", a: "Yes. We configure the agent to check the customer's delivery zip-code against local carrier transit times to ensure perishable items are only offered if transit time falls below the safety thresholds." },
]

export default function FoodBeverageAiPage() {
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
          <span className="text-foreground">Food & Beverage AI</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Vertical Solutions · Food & Beverage</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Food & Beverage AI — <br />
              <span className="text-accent">Expiry Tracking & Recipe Personalization.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy conversational F&B agents that handle nutrition profile audits, coordinate ingredients from recipes, and run batch-expiry stock alerts directly on Shopify.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Food Agent" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">AI Agents Built for Food & Beverage</h2>
            <p className="text-muted-foreground text-sm">
              Deliver personalized food selections and automated logistics routing.
            </p>
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
        heading="How one gourmet brand put agents to work."
        subheading="A live deployment demonstrating coordinate recipe mapping and safety gates."
        slides={proofSlides}
      />

      {/* Pipeline */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Meal Choice to Subscription Update</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Perishable & Allergen Control Guardrails</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Food Tech Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Generic Quiz vs. Conversational F&B Agent</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Static Rules vs. Conversational Context</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Generic App</th>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Food & Beverage FAQs</h2>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Custom Food Advisor</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized expiry trackers and recipe builders with a 2-week risk-free trial.</p>
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
