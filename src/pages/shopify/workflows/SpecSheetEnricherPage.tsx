'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Workflow, CheckCircle2, ArrowRight, ChevronDown, Database,
  FileText, Bot, ShieldCheck, Repeat2, Zap
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

const steps = [
  { icon: FileText, title: "1. Raw Supplier Spec Ingest", desc: "Agents monitor supplier emails or directories, parsing raw PDF/Excel specification files autonomously." },
  { icon: Bot, title: "2. SEO Description Copywriting", desc: "Fine-tuned models rewrite dry specifications into engaging, SEO-optimized product titles, descriptions, and feature lists." },
  { icon: Database, title: "3. Shopify Catalog Update", desc: "Exposes completed records back to Shopify GraphQL endpoints, creating draft products in real-time." }
]

const features = [
  { icon: Zap, title: "High-Volume Catalog Scopes", desc: "Processes up to 5,000 unique supplier sheets per hour, converting messy structures into consistent variant schemas." },
  { icon: ShieldCheck, title: "Tone-of-Voice Guideline Alignment", desc: "Store your style guides inside models, ensuring description outputs match your brand aesthetics perfectly." },
  { icon: Repeat2, title: "Structured Schema Validation", desc: "Ensures attributes like weight, price, and color tags are formatted into strict schemas before committing." }
]

const faqs = [
  { q: "Can the parser handle messy supplier spec sheets?", a: "Yes, visual models read PDF layouts and map headers to normalized e-commerce variant tags (price, size, color) even if layouts vary." },
  { q: "Does the system upload products directly to live storefronts?", a: "By default, products are created as 'Drafts' in Shopify, letting merchandise teams review outputs before hitting publish." }
]

export default function SpecSheetEnricherPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shopify" className="hover:text-accent transition-colors">Shopify</Link>
          <span>/</span>
          <span className="text-foreground">Catalog Enricher</span>
        </nav>

        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Actionable Workflows</span>
          <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
            Supplier Spec Sheet Enricher — <br />
            <span className="text-accent">Automated Catalog Creation Engines.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Ingest raw supplier spec sheet files autonomously. Convert unstructured tables and technical files into SEO-optimized product titles, descriptions, and tag structures in real-time.
          </p>
          <div className="flex gap-4 pt-2">
            <ShopifyCTA label="Deploy Enricher Setup" />
          </div>
        </div>
      </section>

      {/* Steps Flow */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">The Enrichment Pipeline</h2>
            <p className="text-muted-foreground text-sm">
              Ingest messy files, optimize for search engines, and draft catalog items automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="py-20 px-6 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={idx} className="flex gap-4 p-5 border border-border bg-muted/10 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center text-accent shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-xs text-foreground">{item.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Workflows FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers regarding description rules and draft approvals.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="border border-border rounded-2xl overflow-hidden bg-background">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-xs font-semibold hover:bg-muted/20 transition-all font-mono"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`h-4 w-4 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-xs text-muted-foreground leading-relaxed border-t border-border/40 bg-background/50 font-sans">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto rounded-3xl bg-foreground text-background p-10 md:p-14 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Build Your Catalog Creation Pipeline
          </h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Partner with Kovil AI to map supplier files and deploy automatic description generators under a 2-week risk-free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShopifyCTA label="Deploy Enricher Setup" className="bg-accent hover:bg-accent/90 text-white px-8" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
