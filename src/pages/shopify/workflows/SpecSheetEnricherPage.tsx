'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight, Database,
  FileText, Bot, ShieldCheck, Repeat2, Zap, PenLine, X,
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
  { stat: "5,000",  label: "Sheets processed / hour" },
  { stat: "95%+",   label: "Field extraction accuracy" },
  { stat: "0",      label: "Live publishes without review" },
  { stat: "2 wks",  label: "To first live pipeline" },
]

const pipeline = [
  { icon: FileText, title: "Raw Supplier Spec Ingest", desc: "Agents monitor supplier emails or shared directories, parsing raw PDF or Excel specification files as soon as they arrive." },
  { icon: Bot, title: "SEO Description Copywriting", desc: "Models rewrite dry specifications into engaging, SEO-optimized product titles, descriptions, and feature lists in your brand's tone of voice." },
  { icon: Database, title: "Schema Validation", desc: "Extracted attributes — weight, price, color, dimensions — are validated into strict, consistent variant schemas before anything is written." },
  { icon: PenLine, title: "Shopify Draft Catalog Update", desc: "Completed records post to Shopify GraphQL endpoints as draft products, ready for a merchandiser's one-click review and publish." },
]

const features = [
  { icon: Zap, title: "High-Volume Catalog Scope", desc: "Processes up to 5,000 unique supplier sheets per hour, converting messy structures into consistent variant schemas at scale." },
  { icon: ShieldCheck, title: "Tone-of-Voice Guideline Alignment", desc: "Store your style guides inside the model context, ensuring description outputs match your brand aesthetic perfectly, every time." },
  { icon: Repeat2, title: "Structured Schema Validation", desc: "Ensures attributes like weight, price, and color tags are formatted into strict schemas before committing, catching malformed data early." },
  { icon: FileText, title: "Format-Agnostic Parsing", desc: "Reads PDF layouts, Excel tables, and even scanned image-based spec sheets, normalizing wildly different supplier formats into one schema." },
]

const scenario = {
  title: "Example: New Supplier Sends a 40-Item Spec Sheet",
  steps: [
    "A supplier emails a PDF spec sheet covering 40 new SKUs with inconsistent formatting across sections.",
    "The parsing agent extracts each item's dimensions, materials, price, and available variants into a normalized table.",
    "A copywriting model drafts SEO-optimized titles and descriptions for each item, matching your brand's established tone of voice.",
    "All 40 products are created as Shopify drafts, flagged for merchandiser review rather than published live automatically.",
    "The merchandising team reviews the batch in one sitting and publishes with a single bulk action, rather than 40 individual manual entries.",
  ],
}

const stack = ["Shopify Admin API", "GraphQL API", "Vision-Language Models", "OpenAI", "Anthropic Claude", "Google Cloud Document AI"]

const comparisonRows = [
  { capability: "Time per new product line", manual: "Often a full day of manual data entry", kovil: "Minutes per batch, review-and-publish" },
  { capability: "Format handling", manual: "Breaks on inconsistent supplier layouts", kovil: "Reads PDF, Excel, and scanned formats" },
  { capability: "SEO copywriting", manual: "Copy-pasted spec text, rarely optimized", kovil: "Brand-voice-aligned SEO description generation" },
  { capability: "Data validation", manual: "Manual spot-checking, error-prone", kovil: "Strict schema validation before commit" },
  { capability: "Publishing safety", manual: "N/A — manual process", kovil: "Draft-only by default, human review required" },
]

const faqs = [
  { q: "Can the parser handle messy supplier spec sheets?", a: "Yes, vision models read PDF layouts and map headers to normalized e-commerce variant tags (price, size, color) even if layouts vary significantly between suppliers." },
  { q: "Does the system upload products directly to live storefronts?", a: "By default, products are created as 'Drafts' in Shopify, letting merchandising teams review outputs before hitting publish. Fully autonomous publishing is available but not the default configuration." },
  { q: "What file formats are supported?", a: "PDF specification sheets, Excel/CSV tables, and scanned image-based documents are all supported, with vision-language models handling the harder cases where text extraction alone would fail." },
  { q: "How accurate is the extracted data in practice?", a: "Extraction accuracy on well-formatted supplier PDFs typically exceeds 95% for core fields (SKU, price, dimensions). Because products are created as drafts, any edge-case errors are caught during human review before publishing." },
  { q: "Can we customize the tone of voice for generated descriptions?", a: "Yes. We embed your brand style guide directly into the model's context, so generated titles and descriptions consistently match your established voice rather than reading generically." },
  { q: "What happens if a supplier's spec sheet is missing key fields?", a: "The agent flags incomplete records rather than guessing or leaving fields blank, surfacing them in a review queue so a human can source the missing detail." },
  { q: "How many supplier sheets can be processed at once?", a: "Production deployments handle up to 5,000 unique supplier sheets per hour without performance degradation, suitable for large seasonal catalog refreshes." },
  { q: "Does this integrate with our existing PIM or ERP system?", a: "Yes. We commonly sync enriched product data with product information management (PIM) systems or ERPs alongside the Shopify draft creation, keeping all systems of record aligned." },
  { q: "How long does it take to launch this workflow?", a: "A first deployment covering your core supplier formats typically takes about 2 weeks, including style guide configuration and testing against real historical spec sheets." },
  { q: "Can the agent detect duplicate or near-duplicate products?", a: "Yes. Before creating a new draft, the agent checks for existing catalog matches using semantic similarity, flagging likely duplicates instead of creating redundant listings." },
]

export default function SpecSheetEnricherPage() {
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
          <span className="text-foreground">Catalog Enricher</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Actionable Workflows · Catalog Blueprint</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Supplier Spec Sheet Enricher — <br />
              <span className="text-accent">Automated Catalog Creation Engines.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Ingest raw supplier spec sheet files autonomously. Convert unstructured tables and technical documents into SEO-optimized product titles, descriptions, and tag structures — ready for one-click review.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Deploy Enricher Setup" />
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">The Enrichment Pipeline</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Raw PDF to Reviewable Draft</h2>
            <p className="text-muted-foreground text-sm">Ingest messy files, optimize for search engines, and draft catalog items automatically.</p>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Built for Volume Without Sacrificing Voice</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">The Enrichment Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Manual Entry vs. Enrichment Agent</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Not Just Type It In Manually?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Manual Data Entry</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Enricher</th>
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
            <p className="text-muted-foreground text-sm">Answers regarding description rules and draft approvals.</p>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Catalog Creation Pipeline</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Partner with Kovil AI to map supplier files and deploy automatic description generators under a 2-week risk-free trial.</p>
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
