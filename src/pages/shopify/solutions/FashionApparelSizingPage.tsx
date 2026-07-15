'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Maximize2, Compass, ShieldCheck, ShoppingBag, Ruler,
  Shirt, Scale, Layers, X,
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
  { stat: "-28%",  label: "Size-related returns" },
  { stat: "500+",  label: "SKUs per size profile" },
  { stat: "0",     label: "Theme code changes" },
  { stat: "2 wks", label: "To first live agent" },
]

const proofSlides: Slide[] = [
  {
    tag: "D2C Case Study",
    title: "An apparel brand was losing margin to size-related returns.",
    desc: "Kovil AI built a per-item fit estimator on top of the brand's existing size charts, replacing a generic S/M/L guide with a model that accounts for fabric stretch, cut, and category before a customer ever checks out.",
    stats: [
      { value: "-28%", label: "Size-related returns" },
      { value: "+11%", label: "Average order value" },
    ],
  },
  {
    tag: "Under the Hood",
    title: "Fit logic reads live size charts and stock through the Shopify Storefront API.",
    desc: "Instead of a static PDF size guide, the agent queries per-item chart data and current variant availability directly, so every recommendation reflects what's actually on the shelf.",
    stats: [
      { value: "500+", label: "SKUs per size profile" },
      { value: "Live", label: "Stock-checked variants" },
    ],
  },
  {
    tag: "Multi-Agent Handoff",
    title: "A Fit Agent hands off to an Outfit Orchestrator, then a Bundle Checkout Agent.",
    desc: "Once a size is confirmed, the Outfit Orchestrator proposes coordinated pieces, and the Bundle Checkout Agent assembles every size and color into one draft cart — no manual re-entry between steps.",
    stats: [
      { value: "3", label: "Agents in the loop" },
      { value: "+9%", label: "Outfit attach rate" },
    ],
  },
  {
    tag: "Safety Controls",
    title: "Size chart changes never ship without a merchandiser's sign-off.",
    desc: "The returns-aware learning loop flags chronically mis-sized SKUs for review, but no chart is updated automatically — a human confirms every adjustment before it goes live.",
    stats: [
      { value: "100%", label: "Chart changes reviewed" },
      { value: "Weekly", label: "Accuracy report" },
    ],
  },
  {
    tag: "Outcome",
    title: "Fewer wrong-size returns, more coordinated purchases, zero theme rewrites.",
    desc: "The fit agent runs alongside the existing storefront, lowering returns while lifting basket size — without a single line of theme code touched.",
    stats: [
      { value: "-28%", label: "Size Returns" },
      { value: "+11%", label: "Average Order Value" },
    ],
  },
]

const useCases = [
  {
    icon: Ruler,
    title: "Size & Fit Estimator",
    desc: "Asks a short set of body-measurement and fit-preference questions, then maps the answer directly to your brand's specific size chart per item — not a generic S/M/L guess — accounting for cut, fabric stretch, and category.",
    bullets: ["Body measurement + fit-preference intake", "Per-item size chart lookup, not generic sizing", "Fabric stretch and cut factored into the estimate", "Learns from confirmed purchase and return outcomes"],
  },
  {
    icon: Scale,
    title: "Cross-Brand Fit Normalizer",
    desc: "For multi-brand storefronts, the agent normalizes sizing across brands with different size charts, so a customer who knows their fit in one brand gets an accurate equivalent recommendation in another.",
    bullets: ["Size-chart normalization across multiple brands", "Handles vanity sizing and regional size differences", "Confidence-scored recommendation, not a flat guess", "Flags when a size falls between two chart values"],
  },
  {
    icon: Compass,
    title: "Visual Outfit Orchestrator",
    desc: "Builds complete outfit recommendations from a single item — matching shoes, outerwear, and accessories based on visual style compatibility and current catalog availability, not just 'customers also bought.'",
    bullets: ["Visual style-compatibility matching", "Full outfit assembly from a single anchor item", "Real-time stock check across all suggested pieces", "Occasion and season-aware suggestions"],
  },
  {
    icon: ShoppingBag,
    title: "Multi-Variant Bundle Checkout",
    desc: "Lets customers confirm an entire outfit — multiple sizes and colors across several products — into a single draft cart with one conversational confirmation, rather than adding each item manually.",
    bullets: ["Single-command multi-item cart assembly", "Per-item size and color variant selection handled inline", "Draft cart handoff for final review before payment", "Coordinated discount code application across the bundle"],
  },
  {
    icon: Shirt,
    title: "Returns-Aware Size Learning",
    desc: "Feeds confirmed returns data (wrong size vs. changed mind) back into the sizing model, so recommendation accuracy for a given SKU improves continuously rather than staying static after launch.",
    bullets: ["Return-reason-aware model feedback loop", "Per-SKU accuracy tracking over time", "Flags chronically mis-sized items for catalog review", "No manual retraining required"],
  },
]

const pipeline = [
  { number: "01", title: "Fit Intake", desc: "The agent captures body measurements and fit preference (snug, regular, relaxed) through a short conversational flow." },
  { number: "02", title: "Per-Item Chart Lookup", desc: "Measurements are matched against the specific item's size chart — accounting for fabric, cut, and category — not a generic scale." },
  { number: "03", title: "Outfit & Bundle Assembly", desc: "If requested, the agent builds a full coordinated outfit, checking stock across every suggested piece." },
  { number: "04", title: "Cart Handoff & Feedback Loop", desc: "Confirmed selections move to a draft cart; later purchase and return outcomes feed back into sizing accuracy." },
]

const trustItems = [
  { icon: ShieldCheck, title: "No Theme Modifications", desc: "We embed conversational advisor blocks using standard widgets or headless storefront API calls, keeping your theme completely clean." },
  { icon: Layers, title: "Per-Brand Size Chart Isolation", desc: "Multi-brand catalogs keep separate size chart logic per brand, preventing cross-contamination of fit recommendations." },
  { icon: Maximize2, title: "Confidence-Scored Recommendations", desc: "Every size suggestion ships with a confidence indicator, and the agent proactively surfaces the next-best size when confidence is low." },
  { icon: CheckCircle2, title: "Stock-Aware Suggestions", desc: "Vetted models read stock levels across colors and variants, ensuring recommended sizes are always actually available." },
]

const stack = ["Shopify Admin API", "Storefront API", "Metafields API", "pgvector", "Klaviyo", "Loop Returns", "Narvar", "Yotpo", "Recharge"]

const comparisonRows = [
  { capability: "Sizing basis", generic: "Generic S/M/L size guide chart", kovil: "Per-item fit modeling with brand-specific charts" },
  { capability: "Multi-brand catalogs", generic: "One-size-fits-all sizing assumption", kovil: "Per-brand chart normalization" },
  { capability: "Outfit building", generic: "Static 'frequently bought together'", kovil: "Visual style-compatibility matching, stock-checked" },
  { capability: "Learns from returns", generic: "No feedback loop", kovil: "Continuous accuracy improvement from return data" },
  { capability: "Checkout flow", generic: "Manual add-to-cart per item", kovil: "Single-command multi-item bundle checkout" },
]

const faqs = [
  { q: "How accurate is the sizing recommendation?", a: "The sizing recommendations leverage comparative database tables and custom questionnaire metrics to match user dimensions with specific variant measurements per item, ensuring a high-confidence fit rather than a generic S/M/L guess." },
  { q: "Does this require modifications to my theme?", a: "No, we embed conversational advisor blocks using standard widgets or headless storefront API calls, keeping your theme completely clean and unaffected by future theme updates." },
  { q: "Can it handle a multi-brand catalog with different size charts?", a: "Yes. We build per-brand size chart normalization so a customer who knows their fit in one brand gets an accurate equivalent recommendation when shopping a different brand on the same storefront." },
  { q: "Does the agent account for fabric stretch and cut differences?", a: "Yes. Size charts are configured per item category and fabric type, so a stretchy jersey top and a structured woven blazer in the same 'Medium' size produce different fit recommendations where appropriate." },
  { q: "How does the returns feedback loop work?", a: "When a customer returns an item citing a sizing issue, that signal feeds back into the model's per-SKU accuracy tracking, so the recommendation for that item improves over time without manual retraining." },
  { q: "Can customers build a full outfit, not just one item?", a: "Yes. The Visual Outfit Orchestrator suggests coordinated pieces — shoes, outerwear, accessories — based on style compatibility with the anchor item, checking real-time stock before suggesting anything." },
  { q: "What happens if a customer's measurements fall between two sizes?", a: "The agent explicitly flags the ambiguity and presents both options with guidance based on stated fit preference (e.g. 'snug' vs. 'relaxed'), rather than silently rounding to one size." },
  { q: "Is this compatible with our existing returns platform?", a: "Yes. We integrate directly with returns platforms like Loop Returns and Narvar to capture return reason data, which is the primary signal driving the continuous sizing accuracy improvements." },
  { q: "How long does it take to launch?", a: "A first-workflow deployment covering size estimation for your core categories typically takes about 2 weeks from kickoff, including size chart mapping and testing against historical order data." },
  { q: "Can the agent recommend across genders or age categories?", a: "Yes, provided your catalog metadata distinguishes these categories. We configure separate sizing logic per category so recommendations stay accurate across men's, women's, and kids' lines." },
  { q: "Does this work for footwear sizing as well as apparel?", a: "Yes. Footwear uses a separate sizing model accounting for width and brand-specific last shapes, which we configure alongside apparel sizing during the same engagement." },
]

export default function FashionApparelSizingPage() {
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
          <span className="text-foreground">Fashion & Sizing AI</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Vertical Solutions · Fashion & Apparel</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Fashion & Apparel AI — <br />
              <span className="text-accent">Custom Sizing & Outfit Recommendation Agents.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy fashion styling and fit advisors that size customer profiles per item — not a generic size guide — construct visual outfit matches, and process multi-variant bundle carts in one step.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Styling Agent" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Five Agents That Lower Returns and Lift AOV</h2>
            <p className="text-muted-foreground text-sm">Deliver sizing fit advice and outfit visual bundles that reduce the #1 cause of apparel returns.</p>
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
        heading="How one apparel brand cut size-related returns."
        subheading="A real deployment, walked step by step — from per-item fit modeling to a multi-agent outfit handoff to the merchandiser check before any chart changes."
        slides={proofSlides}
      />

      {/* Pipeline */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Fit Intake to Confirmed Bundle</h2>
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
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Reliability</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Built to Not Break Your Storefront</h2>
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
      <section className="py-16 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">Compatibility</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Fashion Tech Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Size Guide vs. Fit Agent</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Not Just a Static Size Chart?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Generic Size Guide</th>
                  <th className="text-left p-4 font-semibold text-accent">Kovil AI Fit Agent</th>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Solutions FAQs</h2>
            <p className="text-muted-foreground text-sm">Answers regarding styling workflows and catalog sizing.</p>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Visual Fashion Stylist</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized size recommendations and fashion styling agents with a 2-week risk-free trial.</p>
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
