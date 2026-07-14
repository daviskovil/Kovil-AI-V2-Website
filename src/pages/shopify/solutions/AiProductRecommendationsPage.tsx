'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Search, Database, ShieldCheck, Cpu, LayoutGrid,
  SlidersHorizontal, Zap, X,
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
  { stat: "<2s",   label: "Catalog sync latency" },
  { stat: "500K",  label: "SKUs indexed, sub-second" },
  { stat: "0",     label: "Out-of-stock suggestions" },
  { stat: "2 wks", label: "To first live index" },
]

const useCases = [
  {
    icon: Search,
    title: "Semantic Intent Mapping",
    desc: "Allows shoppers to describe needs in natural text — \"breathable shirt for a hot weather run\" — and matches item variants semantically rather than requiring exact keyword overlap with product titles.",
    bullets: ["Natural-language query understanding", "Semantic match beyond exact keyword overlap", "Handles vague, descriptive, or comparative queries", "Falls back gracefully when no strong match exists"],
  },
  {
    icon: Database,
    title: "Vector Catalog Indexing",
    desc: "Synchronizes catalog descriptions, variant prices, and size parameters automatically into a vector database, keeping recommendations grounded in what's actually in your live catalog, not a stale export.",
    bullets: ["Continuous sync via Shopify Admin webhooks", "Under-2-second index update on catalog changes", "Supports pgvector and Pinecone backends", "Handles high-SKU catalogs without query slowdown"],
  },
  {
    icon: LayoutGrid,
    title: "Personalized Homepage Merchandising",
    desc: "Reorders homepage and category-page product grids per visitor based on browsing history and semantic similarity to past purchases, replacing static merchandising rules with dynamic, per-session ranking.",
    bullets: ["Per-visitor dynamic product grid reordering", "Grounded in browsing history and past purchases", "Falls back to merchandiser-defined defaults for new visitors", "A/B testable against your existing static rules"],
  },
  {
    icon: Cpu,
    title: "Contextual Cross-Sell Prompts",
    desc: "Reviews variant properties and current cart contents to formulate personalized bundle proposals matching user aesthetic or functional preferences, rather than a fixed 'frequently bought together' list.",
    bullets: ["Cart-context-aware bundle suggestions", "Matches aesthetic and functional compatibility", "Dynamically updates as cart contents change", "Configurable margin-aware suggestion weighting"],
  },
  {
    icon: SlidersHorizontal,
    title: "Search-to-Purchase Re-ranking",
    desc: "Continuously re-ranks search results based on actual conversion signals — not just semantic similarity — so items that convert well for a given query surface higher over time without manual merchandising.",
    bullets: ["Conversion-signal-weighted re-ranking", "Improves automatically as more purchase data accrues", "No manual re-tuning of search relevance rules", "Transparent ranking factors, not an opaque black box"],
  },
]

const pipeline = [
  { number: "01", title: "Catalog Ingestion", desc: "Product descriptions, variants, prices, and images are pulled from Shopify Admin and embedded into a vector index." },
  { number: "02", title: "Webhook-Driven Sync", desc: "Product create/update/delete webhooks trigger incremental re-indexing, keeping the vector store current within seconds." },
  { number: "03", title: "Semantic Query Matching", desc: "Customer queries or browsing signals are embedded and matched against the live index using hybrid semantic + keyword search." },
  { number: "04", title: "Stock-Filtered Results", desc: "Results are filtered against real-time inventory before being shown, guaranteeing recommendations are always purchasable." },
]

const trustItems = [
  { icon: ShieldCheck, title: "Zero Hallucination Grounding", desc: "Constrain model recommendations strictly within your standard Shopify catalog database, preventing invented or out-of-stock item suggestions." },
  { icon: Zap, title: "Sub-Second Query Performance", desc: "Cluster-backed vector databases maintain sub-second query speeds even at 500,000+ unique SKUs." },
  { icon: Database, title: "Your Data, Your Infrastructure", desc: "Vector indexes run inside your own private cloud tenant — catalog data never becomes training data for a third party." },
  { icon: CheckCircle2, title: "Real-Time Stock Filtering", desc: "Every recommendation is filtered against live inventory before display, eliminating out-of-stock suggestion frustration." },
]

const stack = ["Shopify Admin API", "pgvector", "Pinecone", "Weaviate", "Klaviyo", "Segment", "Algolia", "Searchspring"]

const comparisonRows = [
  { capability: "Query understanding", generic: "Exact keyword match only", kovil: "Semantic understanding of natural-language intent" },
  { capability: "Catalog freshness", generic: "Nightly batch re-index", kovil: "Under-2-second webhook-driven sync" },
  { capability: "Stock awareness", generic: "May surface out-of-stock items", kovil: "Real-time inventory filtering on every result" },
  { capability: "Ranking improvement", generic: "Static rules, manual re-tuning", kovil: "Conversion-signal-weighted, self-improving" },
  { capability: "High-SKU performance", generic: "Slows down past ~10K SKUs", kovil: "Sub-second at 500,000+ SKUs" },
]

const faqs = [
  { q: "How is product inventory synchronized?", a: "We run background database workers that hook to Shopify Admin Webhooks. When items are created, modified, or depleted, vector index values update in under 2 seconds." },
  { q: "Does the system support high SKU stores?", a: "Yes. Our semantic architectures index stores with up to 500,000 unique SKUs, maintaining sub-second query speeds using cluster databases." },
  { q: "What happens if a customer's query doesn't match anything well?", a: "The system is designed to fall back gracefully — surfacing the closest semantic matches with lower confidence rather than returning zero results or forcing an exact-match failure." },
  { q: "Can this replace our current site search entirely?", a: "In most deployments, yes — the semantic layer becomes the primary search and recommendation engine, though we can also run it alongside an existing search provider like Algolia during a transition period." },
  { q: "How does personalized homepage merchandising work?", a: "We reorder product grids per visitor based on browsing history and semantic similarity to past purchases, falling back to your merchandiser-defined defaults for new or anonymous visitors." },
  { q: "Will recommendations ever suggest out-of-stock items?", a: "No. Every recommendation is filtered against real-time inventory data before being shown, so customers never see a suggestion they can't actually purchase." },
  { q: "How do you prevent irrelevant or hallucinated suggestions?", a: "Recommendations are constrained strictly to embeddings generated from your actual catalog data — the model can only surface products that exist in your store, eliminating invented suggestions." },
  { q: "Can this integrate with our existing personalization or CDP tools?", a: "Yes. We commonly integrate with Segment and similar customer data platforms to enrich the ranking signal with cross-channel behavioral data." },
  { q: "How long does it take to launch?", a: "Initial catalog indexing and basic semantic search typically go live within 2 weeks. Personalized merchandising and cross-sell logic are usually layered on in a following sprint." },
  { q: "Does search-to-purchase re-ranking require manual tuning?", a: "No. Ranking improves automatically as more purchase data accrues, though we do expose configuration for margin-aware weighting if you want certain products prioritized." },
]

export default function AiProductRecommendationsPage() {
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
          <span className="text-foreground">AI Product Recommendations</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Vertical Solutions · Semantic Search</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              AI Product Recommendations — <br />
              <span className="text-accent">Semantic Vector Search Systems.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Integrate vector-database semantic recommendation modules that expose massive catalogs to LLM reasoning, helping customers discover variants through natural conversational inquiries — stock-aware, always.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Recommendation System" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Five Ways Semantic Search Lifts Conversion</h2>
            <p className="text-muted-foreground text-sm">Ground customer search intent using semantic matching rather than rigid keywords.</p>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">From Catalog Sync to Stock-Filtered Results</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Reliability</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Grounded, Fast, and Always in Stock</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Layers on Top of Your Existing Search</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Keyword Search vs. Semantic Search</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Not Just Use Shopify's Default Search?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Default Keyword Search</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Semantic Search</th>
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
            <p className="text-muted-foreground text-sm">Answers regarding vector database clusters and sync limits.</p>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Semantic Catalog Search</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized vector-database product recommenders with a 2-week risk-free trial.</p>
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
