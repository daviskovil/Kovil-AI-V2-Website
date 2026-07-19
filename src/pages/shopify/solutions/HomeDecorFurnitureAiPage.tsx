'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Home, Compass, Layers, ShieldCheck,
  Truck, HelpCircle, Eye, Sliders, X,
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
  { stat: "+31%",   label: "Average order value lift" },
  { stat: "-38%",   label: "Support tickets deflected" },
  { stat: "94%",    label: "Matching accuracy score" },
  { stat: "2 wks",  label: "To first live agent" },
]

const proofSlides: Slide[] = [
  {
    tag: "Furniture Case Study",
    title: "A luxury sofa merchant needed automated assembly coordination and delivery scheduling.",
    desc: "Kovil AI designed an integrated agent network that handled dimension inquiries, fabric options, and delivery dates directly on top of their Shopify Plus setup.",
    stats: [
      { value: "+31%", label: "Average order value lift" },
      { value: "-38%", label: "Support tickets deflected" },
    ],
  },
]

const useCases = [
  {
    icon: Compass,
    title: "Visual Spacing & Dimension Consulting Agent",
    desc: "Helps users determine if a furniture piece fits their layout. Customers input room dimensions, and the agent cross-references catalog product sizing (width, depth, height) to verify compatibility.",
    bullets: ["Interactive room dimension intake", "Cross-checks catalog size parameters", "Provides advice on spacing clearances", "Flags sizing warnings in real time"],
  },
  {
    icon: Layers,
    title: "Coordinate Rug, Lighting, & Accent Recommender",
    desc: "Suggests matching accent pieces (rugs, side tables, throw pillows) based on the primary furniture piece style, fabric color, or room type.",
    bullets: ["Style consistency validation (modern, rustic)", "Color & fabric matching intelligence", "Upsells complementary room sets semantically", "Creates dynamic draft carts with single confirmations"],
  },
  {
    icon: Sliders,
    title: "Upholstery & Custom Configurator Agent",
    desc: "Guides customers through custom configuration choices: fabric selections, leg finishes, and orientation setups, referencing live swatch availability.",
    bullets: ["Custom fabric & swatch configurations", "Visual configuration guides in chat", "Checks swatch supplier availability metrics", "Sets variant attributes correctly in cart"],
  },
  {
    icon: Truck,
    title: "LTL Freight Logistics & Delivery Scheduler",
    desc: "Coordinates with freight carrier API endpoints to estimate delivery fees and schedule white-glove assembly options based on zip code.",
    bullets: ["LTL freight shipping estimates in real-time", "White-glove assembly option opt-in", "Syncs tracking metrics to order profile", "Coordinates with delivery dispatch logs"],
  },
]

const pipeline = [
  { number: "01", title: "Room Details", desc: "Intakes room dimensions and style preferences from the customer." },
  { number: "02", title: "Sizing Audit", desc: "Cross-checks catalog dimensions to ensure a clean fit." },
  { number: "03", title: "Coordinated Match", desc: "Suggests matching rugs, tables, and lighting via vector search." },
  { number: "04", title: "LTL Booking", desc: "Estimates freight costs and adds assembly options to the final cart." },
]

const trustItems = [
  { icon: ShieldCheck, title: "Exact Fit Validation", desc: "Agents explicitly flag if a piece is too large for the room based on measurements, reducing returns." },
  { icon: Truck, title: "Carrier API Sync", desc: "Pulls direct freight quotes rather than flat rate estimates." },
  { icon: Eye, title: "Clear Fabric Swatches", desc: "Explains texture details and color representations transparently." },
  { icon: Home, title: "Room Setup Guides", desc: "Provides step-by-step assembly guides based on variant metadata." },
]

const stack = ["Shopify Admin API", "pgvector", "ShipStation", "Recharge", "Gorgias", "LTL carrier APIs", "Metafields API", "Loop Returns"]

const comparisonRows = [
  { capability: "Spacing checks", generic: "Static dimension charts on page", kovil: "Conversational intake verifying room clearances dynamically" },
  { capability: "Room coordination", generic: "Manual related products grid", kovil: "Semantic design matcher suggesting matching tables/rugs" },
  { capability: "Freight estimates", generic: "Flat-rate shipping calculations", kovil: "Direct carrier API sync based on zip code and weight" },
  { capability: "Fabric swatch checking", generic: "Manual search for swatch variants", kovil: "Live swatch check integrated directly into selection flow" },
]

const faqs = [
  { q: "How does the agent calculate sizing compatibility?", a: "The customer provides room dimensions or wall clearances. The agent maps these parameters and cross-references your product catalog's physical dimension tags (stored in metafields). It then calculates if the furniture fits, leaving standard clearance space for doors and hallways." },
  { q: "Can the agent coordinate delivery with LTL freight carriers?", a: "Yes. By connecting to freight logistics APIs (like ShipStation or custom LTL endpoints), the agent calculates exact shipping quotes based on item weight, volume, and customer zip code, presenting it directly in chat." },
]

export default function HomeDecorFurnitureAiPage() {
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
          <span className="text-foreground">Home & Furniture AI</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Vertical Solutions · Home & Furniture</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Home & Furniture AI — <br />
              <span className="text-accent">Visual Spacing & Design Coordination.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy conversational home & furniture agents that run spacing audits, recommend coordinate accent sets, and calculate freight logistics directly in Shopify.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Furniture Agent" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">AI Agents Built for Home & Furniture</h2>
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
        heading="How one luxury brand put agents to work."
        subheading="A live deployment demonstrating dimension audits and freight logistics scheduling."
        slides={proofSlides}
      />

      {/* Pipeline */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Dimension Checking to White-Glove Booking</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Sizing Precision & Carrier Integration</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Design & Logistics Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Dimension Grid vs. Conversational Space Audit</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Static Metrics vs. Real Spacing Checks</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Generic Setup</th>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Home & Furniture FAQs</h2>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Custom Furniture Advisor</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized spacing checks and design coordinators with a 2-week risk-free trial.</p>
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
