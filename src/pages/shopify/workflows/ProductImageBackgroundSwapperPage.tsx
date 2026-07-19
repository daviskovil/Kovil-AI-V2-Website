'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Image, Sparkles, CheckSquare, ShieldCheck,
  Zap, HelpCircle, FileCheck, Layers, X,
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
  { stat: "95%",     label: "Visual editing cost reduction" },
  { stat: "<15s",    label: "Background generation speed" },
  { stat: "API",     label: "Automation workflows" },
  { stat: "2 wks",   label: "To first live agent" },
]

const proofSlides: Slide[] = [
  {
    tag: "Visual AI Case Study",
    title: "A homeware brand needed lifestyle mockups for 3,000 products without photoshoot costs.",
    desc: "Kovil AI engineered visual background generation agents that isolated products and generated realistic room backgrounds matching shadows and colors.",
    stats: [
      { value: "95%", label: "Editing cost savings" },
      { value: "3,000+", label: "Images processed" },
    ],
  },
]

const useCases = [
  {
    icon: Sparkles,
    title: "Automated Product Background Swapper Agent",
    desc: "Isolates the main product catalog image, removes flat backgrounds, and generates realistic lifestyle scenes (beach, kitchen, living room) around the item frame.",
    bullets: ["Precise segment-based product isolation", "Generates contextual lifestyle scenes", "Maintains matching perspective and angles", "Exports high-definition storefront assets"],
  },
  {
    icon: Image,
    title: "Shadow & Lighting Realism Matcher",
    desc: "Analyzes the main item's lighting vectors and automatically calculates matching shadows, color reflections, and focus depths in the generated background.",
    bullets: ["Calculates realistic shadow vector offsets", "Harmonizes product color reflections", "Applies realistic camera focal blurring", "Ensures output looks photographed, not edited"],
  },
  {
    icon: Layers,
    title: "Seasonal Campaign Aspect Scaling Agent",
    desc: "Automatically adapts product image background styles for holiday campaigns (Christmas, Halloween, Summer) and resizes them for Pinterest, Instagram, or Shopify grids.",
    bullets: ["Batch swaps backgrounds for holiday promos", "Outputs correct aspect ratios per platform", "Maintains high file compression standards", "Syncs directly to Shopify product media tables"],
  },
  {
    icon: FileCheck,
    title: "Visual Asset Review Dashboard Flow",
    desc: "Holds all generated lifestyle mockups in an administration queue, letting creative directors inspect, regenerate, or push live in bulk.",
    bullets: ["Regenerates background prompts dynamically", "Bulk select and sync to live products", "Slack notifications for new asset alerts", "Compares side-by-side drafts before updating"],
  },
]

const pipeline = [
  { number: "01", title: "Image Upload", desc: "Monitors new product uploads with white or flat background styles." },
  { number: "02", title: "Product Isolation", desc: "Extracts product bounding shapes and masks in under 3 seconds." },
  { number: "03", title: "Lifestyle Render", desc: "Generates shadows and scene backgrounds matching target prompts." },
  { number: "04", title: "Creative Review", desc: "Presents assets for confirmation before writing to Shopify media API." },
]

const trustItems = [
  { icon: ShieldCheck, title: "No Item Alteration", desc: "Model logic locks the product bounding box, ensuring the actual item shape and color remain 100% untouched." },
  { icon: Zap, title: "High-Speed Renders", desc: "Generates beautiful lifestyle scenes in under 15 seconds per asset." },
  { icon: FileCheck, title: "Review Safeguards", desc: "Never pushes an AI image directly to live storefronts without merchant sign-off." },
  { icon: Image, title: "Lossless Compression", desc: "Ensures exported WebP formats match mobile speed requirements." },
]

const stack = ["Shopify Admin API", "Segment Anything API", "Stable Diffusion / Midjourney API", "pgvector", "Cloudflare Images", "Klaviyo", "Slack Webhooks"]

const comparisonRows = [
  { capability: "Product safety", generic: "AI changes the item color/details", kovil: "Product pixels are locked; only the background is swapped" },
  { capability: "Lighting & shadows", generic: "Flat cutouts looking copy-pasted", kovil: "Vector-calculated lighting vectors and depth-of-field shadow layers" },
  { capability: "Campaign scaling", generic: "Manual Photoshop editing hours", kovil: "Bulk background swaps across thousands of SKUs in minutes" },
  { capability: "Publish control", generic: "No review queue, updates immediately", kovil: "Central review dashboard with single-click approval flow" },
]

const faqs = [
  { q: "Will the AI change what our actual product looks like?", a: "No. Our pipeline uses a strict masking mask that completely locks the product's original pixels. The generative model is only allowed to fill the surrounding area, ensuring your product is represented 100% accurately." },
  { q: "How long does it take to process a batch of 1,000 images?", a: "Processing typically executes in parallel, taking about 15–20 minutes to generate and queue 1,000 lifestyle mockups in your dashboard for review." },
]

export default function ProductImageBackgroundSwapperPage() {
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
          <span className="text-foreground">Visual AI Swapper</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Workflows · Visual AI Blueprints</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Product Image AI Background Swapper — <br />
              <span className="text-accent">Automated Lifestyle Mockup Generation.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy image editing agents to automatically generate custom lifestyle backgrounds for product images, matching catalog shadows and colors.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Visual AI Agent" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">AI Product Image Workflows</h2>
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
        heading="How one brand automated product photography."
        subheading="A live deployment demonstrating shadow harmonizing and bulk campaign exports."
        slides={proofSlides}
      />

      {/* Pipeline */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Raw Image to Live Storefront Mockup</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Visual Integrity & Review Controls</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Design Tech Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Standard Mockup Apps vs. Kovil AI Rendering</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Static Templates vs. Context-Aware Image Swapping</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Standard App</th>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Product Image Background Swapper FAQs</h2>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Custom Image Editor Agent</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized background swappers and catalog visual updates with a 2-week risk-free trial.</p>
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
