'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Heart, ShieldCheck, Database, Eye,
  Scan, Layers, Lock, FileWarning, Repeat2, X,
} from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { OnboardingModal } from "@/src/components/OnboardingModal"
import { ShopifyProofCarousel } from "@/src/components/ShopifyProofCarousel"

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
  { stat: "+34%",   label: "Avg. order value lift" },
  { stat: "<5s",    label: "Shade match response" },
  { stat: "0",      label: "Photos retained post-scan" },
  { stat: "2 wks",  label: "To first live agent" },
]

const useCases = [
  {
    icon: Heart,
    title: "Skin Profile Consultation Agent",
    desc: "Runs a conversational intake — skin type, concerns, climate, current routine — and builds a structured customer profile that grounds every downstream recommendation, replacing static quiz funnels with a real dialogue.",
    bullets: ["Multi-turn skin-type and concern intake", "Climate and lifestyle-aware adjustments", "Structured profile saved to customer metafields", "Re-engages returning customers with updated routines"],
  },
  {
    icon: Scan,
    title: "Shade & Tone Matching (Vision Model)",
    desc: "A vision-language model analyzes an uploaded selfie under normal lighting, extracts undertone and depth, and cross-references your actual variant catalog to recommend the correct foundation, concealer, or powder shade code.",
    bullets: ["Undertone and depth extraction from photo", "Matches against real in-stock variant SKUs", "Confidence score shown, not a guess presented as fact", "Photo discarded immediately after processing"],
  },
  {
    icon: Layers,
    title: "Routine Bundle Builder",
    desc: "Once a profile exists, the agent assembles a complete AM/PM routine — cleanser, treatment, moisturizer, SPF — checking real-time stock and adding the full bundle to a draft cart with one conversational confirmation.",
    bullets: ["Full routine assembly from single profile", "Real-time inventory check before bundling", "One-click draft cart handoff", "Complementary upsell suggestions grounded in semantic similarity"],
  },
  {
    icon: FileWarning,
    title: "Ingredient & Allergy Safety Check",
    desc: "Cross-references stated allergies or sensitivities (fragrance-free, sulfate-free, pregnancy-safe) against your ingredient metadata before ever recommending a product, flagging conflicts instead of silently ignoring them.",
    bullets: ["Ingredient metadata cross-check per recommendation", "Explicit conflict flagging, not silent filtering", "Supports common exclusion categories out of the box", "Configurable to your specific ingredient taxonomy"],
  },
  {
    icon: Repeat2,
    title: "Post-Purchase Skincare Coach",
    desc: "Follows up after delivery with usage guidance and check-ins timed to product consumption rate, catching early dissatisfaction and prompting timely replenishment before the customer even thinks to reorder.",
    bullets: ["Usage timing and application guidance follow-ups", "Consumption-rate-based replenishment prompts", "Early dissatisfaction detection and escalation", "Review request routing at the optimal moment"],
  },
]

const pipeline = [
  { number: "01", title: "Conversational Intake", desc: "The agent runs a structured skin/hair profile questionnaire through chat, not a static multi-page quiz form." },
  { number: "02", title: "Visual Shade Analysis", desc: "If shade matching applies, a vision model processes the uploaded photo and extracts tone data in real time." },
  { number: "03", title: "Semantic Catalog Match", desc: "Profile and shade data are matched against your live product catalog via vector search, respecting current stock." },
  { number: "04", title: "Cart Handoff & Follow-Up", desc: "Recommendations move to a draft cart for one-click checkout, with post-purchase coaching scheduled automatically." },
]

const trustItems = [
  { icon: Lock, title: "Zero Photo Retention", desc: "Uploaded shade-match photos are processed in memory and discarded immediately — never stored, never used for model training." },
  { icon: ShieldCheck, title: "No Medical Claims", desc: "Agents are scoped to cosmetic recommendation language only, with disclaimers directing dermatological concerns to a professional." },
  { icon: Database, title: "GDPR / CCPA Aligned", desc: "Customer profile data (skin type, concerns) is stored in your own Shopify metafields — never a third-party database outside your control." },
  { icon: Eye, title: "Transparent Confidence Scoring", desc: "Shade match results show a confidence score rather than presenting an automated guess as certain fact." },
]

const stack = ["Shopify Admin API", "Vision-Language Models", "pgvector", "Klaviyo", "Yotpo", "Gorgias", "Metafields API", "Recharge", "Loop Returns", "Segment"]

const comparisonRows = [
  { capability: "Recommendation basis", generic: "Static multiple-choice quiz", kovil: "Conversational profile + real catalog + vision model" },
  { capability: "Shade matching", generic: "Not available or manual", kovil: "Vision-model shade extraction, sub-5-second response" },
  { capability: "Ingredient safety checks", generic: "Manual label reading by customer", kovil: "Automatic cross-check against stated allergies" },
  { capability: "Stock awareness", generic: "May recommend out-of-stock items", kovil: "Real-time inventory checked before every suggestion" },
  { capability: "Post-purchase engagement", generic: "Generic drip email sequence", kovil: "Consumption-timed coaching and replenishment prompts" },
]

const faqs = [
  { q: "How does the shade matching model execute?", a: "We run custom vision model endpoints that analyze user-uploaded face photos under normal lighting, extracting tone and depth values to match with variant catalog attributes in real time. The result includes a confidence score, and the photo is discarded immediately after processing." },
  { q: "Is customer skincare data secure?", a: "Yes. All customer image uploads are processed through secure gateways and are never persisted to disk or used in any model training pipeline. Structured profile data (skin type, concerns) is stored in your own Shopify customer metafields, under your data control." },
  { q: "Can the agent recommend complementary items?", a: "Yes, our models use semantic similarity search to recommend dynamic complementary upsells based on the main routine selection — for example, suggesting a matching serum once a customer selects a moisturizer." },
  { q: "Does the agent make dermatological or medical claims?", a: "No. Agents are explicitly scoped to cosmetic product recommendation language and are configured to redirect any medical or dermatological question to a licensed professional rather than attempting a diagnosis." },
  { q: "How accurate is the shade matching in practice?", a: "Accuracy depends on photo lighting quality, but production deployments typically see 85–92% first-match satisfaction, with the agent explicitly surfacing a confidence score and offering an alternate shade if the customer isn't satisfied." },
  { q: "Can this integrate with our existing loyalty or subscription program?", a: "Yes. We commonly connect these agents to Recharge for subscription routine management and to loyalty platforms for points-aware bundle recommendations." },
  { q: "What happens if a customer has multiple skin concerns?", a: "The conversational intake is designed to capture multiple concerns (e.g. both dryness and sensitivity) and weighs them together when constructing routine recommendations, rather than forcing a single-concern selection." },
  { q: "Do you handle ingredient allergy and safety exclusions?", a: "Yes. We map your ingredient metadata so agents cross-reference stated exclusions (fragrance-free, sulfate-free, pregnancy-safe, etc.) before ever recommending a product, and explicitly flag any conflict rather than silently filtering." },
  { q: "How long does it take to launch a first agent?", a: "A first-workflow deployment — typically the skin profile and routine builder — takes about 2 weeks from kickoff, including catalog indexing, questionnaire design, and testing against real customer scenarios." },
  { q: "Can the agent operate in multiple languages?", a: "Yes. The underlying models support multilingual conversation, and we configure locale-aware responses for international beauty brands operating across regions." },
  { q: "Does this replace our existing beauty quiz app?", a: "It typically supersedes static quiz apps, since the agent replaces a fixed multiple-choice flow with a real conversation that adapts to follow-up answers and grounds recommendations in live catalog and inventory data." },
  { q: "What's required from our team to get started?", a: "We need read access to your product catalog and ingredient metadata, brand voice guidelines, and a list of any allergy/safety categories you want enforced. Most of the technical integration work is handled by our engineering team." },
]

export default function BeautyCosmeticsAiPage() {
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
          <span className="text-foreground">Beauty & Cosmetics AI</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Vertical Solutions · Beauty & Cosmetics</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Beauty & Cosmetics AI — <br />
              <span className="text-accent">Custom Skincare & Shade-Matching Agents.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy conversational beauty agents that analyze skin profiles, shade-match foundation tones from a photo, and bundle full routines directly into checkout — replacing static quiz funnels with a real advisor experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Skincare Agent" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Five Agents for a Full Beauty Advisory Loop</h2>
            <p className="text-muted-foreground text-sm">
              Deliver personalized consultations that replicate the in-store beauty advisor experience online.
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

      <ShopifyProofCarousel />

      {/* Pipeline */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From First Message to Draft Cart</h2>
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

      {/* Trust & Data Privacy */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Trust & Data Privacy</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Built for Sensitive Beauty Data</h2>
            <p className="text-muted-foreground text-sm">
              Skin photos and health-adjacent data need stricter handling than a typical product query — here's how we treat it.
            </p>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Beauty Tech Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Quiz App vs. Conversational Agent</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Why Not a Static Beauty Quiz?</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Generic Quiz App</th>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Solutions FAQs</h2>
            <p className="text-muted-foreground text-sm">Answers regarding our vision model shade match pipelines and data handling.</p>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Custom Skincare Advisor</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized shade matchers and routine builders with a 2-week risk-free trial.</p>
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
