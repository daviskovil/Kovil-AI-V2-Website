'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Gem, Heart, ShieldCheck, Eye,
  Lock, HelpCircle, Calendar, MessageSquare, X,
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
  { stat: "+36%",   label: "AOV lift on fine jewelry" },
  { stat: "-34%",   label: "Support tickets deflected" },
  { stat: "100%",   label: "Brand voice adherence" },
  { stat: "2 wks",  label: "To first live agent" },
]

const proofSlides: Slide[] = [
  {
    tag: "Luxury Case Study",
    title: "An upscale diamond boutique needed a premium virtual concierge and sizing checker.",
    desc: "Kovil AI engineered a custom-trained virtual clienteling agent grounded in their specific style guidelines, booking physical private viewings and validating rings sizing.",
    stats: [
      { value: "+36%", label: "AOV lift" },
      { value: "96%", label: "Consultation-to-sale rate" },
    ],
  },
]

const useCases = [
  {
    icon: MessageSquare,
    title: "Premium Voice & Tone Concierge Agent",
    desc: "Communicates using high-end, elegant vocabulary that aligns with your brand voice guidelines. Answers questions about material sourcing, stone certifications, and jewelry care.",
    bullets: ["Custom-trained tone-of-voice guidelines", "Provides details on material origin (GIA, conflict-free)", "Answers questions on metal alloys and karats", "Handles high-value clientele profiles securely"],
  },
  {
    icon: Gem,
    title: "Interactive Sizing & Ring Fit Advisor",
    desc: "Guides customers through custom sizing parameters for rings, bracelets, and necklaces, using screen guides to match sizes accurately.",
    bullets: ["Conversational sizing metrics evaluation", "Directs customers to exact-fit SKU variants", "Coordinates custom engraving notes", "Reduces high-value return logistics costs"],
  },
  {
    icon: Calendar,
    title: "Private In-Store Viewing Booking Agent",
    desc: "Integrates with Shopify App calendars (like Calendly or Appointly) to schedule in-store viewings or video consultations for high-ticket pieces.",
    bullets: ["Schedules private store bookings in chat", "Syncs client details to retail POS", "Pushes viewing configurations to sales staff", "Automates follow-up confirmations"],
  },
  {
    icon: Lock,
    title: "High-Security Checkout & Concierge Routing",
    desc: "For items over custom value thresholds, the agent offers secure draft order generation and routes the client to a dedicated human concierge.",
    bullets: ["Automated draft order creation for high-ticket items", "Secures transaction details via direct link routing", "Triggers immediate Slack alerts for premium leads", "Maintains full audit trails of agent logs"],
  },
]

const pipeline = [
  { number: "01", title: "Client Profiling", desc: "Builds a luxury taste profile containing sizing and stone preferences." },
  { number: "02", title: "GIA Stone Check", desc: "Retrieves specific certification and catalog data from metafields." },
  { number: "03", title: "Concierge Hand-off", desc: "Routes premium checkout items or schedules an in-store viewing." },
  { number: "04", title: "Secure Checkout", desc: "Completes transaction via secure, encrypted invoice links." },
]

const trustItems = [
  { icon: ShieldCheck, title: "GIA Certified Metadata", desc: "Agents quote exact GIA cert numbers and stone details without mistakes." },
  { icon: Lock, title: "Secure Transactions", desc: "All client transactions use direct Shopify checkout redirect tokens." },
  { icon: Eye, title: "Complete Visibility", desc: "Provides transparent details on custom engraving character limit limitations." },
  { icon: Gem, title: "Concierge Fallback", desc: "For extreme purchase price tiers, the agent transfers automatically to a human concierge." },
]

const stack = ["Shopify Admin API", "pgvector", "Gorgias", "Klaviyo", "Calendly API", "Shopify POS", "Segment", "Loop Returns"]

const comparisonRows = [
  { capability: "Brand tone voice", generic: "Generic customer service template", kovil: "Pre-trained luxury tone guidelines matching brand aesthetic" },
  { capability: "Sizing guidance", generic: "Printable PDF ruler download", kovil: "Interactive dimensions intake and engraving validation" },
  { capability: "Booking viewings", generic: "Static contact form pages", kovil: "Direct calendar booking scheduler in chat" },
  { capability: "High-value routing", generic: "Standard shopping cart checkout", kovil: "Draft order invoicing and direct human concierge escalation" },
]

const faqs = [
  { q: "How do you ensure the agent represents a luxury brand voice?", a: "We fine-tune the agent's prompts using your existing marketing collateral, copy guidelines, and customer service transcripts. We define forbidden phrases and establish a pre-approved vocabulary list matching your brand aesthetic." },
  { q: "Can this schedule calendar bookings directly?", a: "Yes. The agent connects to booking apps via API, checking real-time staff availability to schedule private in-store viewings or virtual video consultations in seconds." },
]

export default function LuxuryJewelryAiPage() {
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
          <span className="text-foreground">Luxury Goods & Jewelry AI</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Vertical Solutions · Luxury Goods & Jewelry</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Luxury Goods & Jewelry AI — <br />
              <span className="text-accent">Virtual Clienteling & Premium Concierge.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy conversational luxury agents that handle premium voice consultations, coordinate ring sizing, and schedule private viewings directly on Shopify.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Luxury Concierge" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">AI Agents Built for Luxury Goods & Jewelry</h2>
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
        heading="How one jewelry brand put agents to work."
        subheading="A live deployment demonstrating premium clienteling and viewing bookings."
        slides={proofSlides}
      />

      {/* Pipeline */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Premium Profile to Private Consultation</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Stone Certification Data & Secure Clienteling</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Luxury Sales Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Standard Chat vs. Premium Concierge Agent</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Static Live Chat vs. Active Luxury Clienteling</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Standard Live Chat</th>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Luxury Goods & Jewelry FAQs</h2>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Luxury Virtual Advisor</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized private viewing assistants and premium clienteling with a 2-week risk-free trial.</p>
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
