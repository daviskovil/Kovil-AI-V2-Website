'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  Sparkles, CheckCircle2, ArrowRight, ChevronDown, Workflow,
  MessageSquare, Heart, ShieldCheck, Database, ShoppingBag, Eye
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

const features = [
  { icon: Heart, title: "Personalized Skincare Profiles", desc: "AI agents query users about skin concerns, oily/dry conditions, and environment metrics to recommend customized morning/night routine kits." },
  { icon: Sparkles, title: "Shade Matching Conversational Flow", desc: "Integrate visual LLMs to parse shade match photos, comparing tones with standard cosmetics variants to select the correct foundation code." },
  { icon: ShoppingBag, title: "Variant Add-to-Cart Actions", desc: "Recommend routines and add multiple variant IDs directly into the Shopify draft cart queue with one conversational click." },
  { icon: ShieldCheck, title: "HIPAA & PII Data Protection", desc: "Mask client skin photos and data, ensuring skin profiling images are completely deleted from temporary reasoning servers immediately." }
]

const faqs = [
  { q: "How does the shade matching model execute?", a: "We run custom vision model endpoints that analyze user-uploaded face photos under normal lighting, extracting hex values to match with variant catalog attributes in real-time." },
  { q: "Is customer skincare data secure?", a: "Yes. All customer image uploads and profiles are processed through secure gateways, with masked values ensuring no PII persists in our pipelines." },
  { q: "Can the agent recommend complementary items?", a: "Yes, our models utilize semantic graphs to recommend dynamic complementary upsells based on the main routine selection." }
]

export default function BeautyCosmeticsAiPage() {
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
          <span className="text-foreground">Beauty & Cosmetics AI</span>
        </nav>

        <div className="max-w-3xl space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Vertical Solutions</span>
          <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
            Beauty & Cosmetics AI — <br />
            <span className="text-accent">Custom Skincare Recommendation Agents.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Deploy advanced beauty styling and recommendation agents. Let models analyze skin profiles, shade match foundation tones, and bundle customized routines directly inside the checkout cart.
          </p>
          <div className="flex gap-4 pt-2">
            <ShopifyCTA label="Build Skincare Agent" />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Skincare & Cosmetic Capabilities</h2>
            <p className="text-muted-foreground text-sm">
              Deliver personalized consultations that replicate the in-store beauty advisor experience online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex gap-4 p-5 border border-border bg-background rounded-2xl shadow-sm">
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
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Solutions FAQs</h2>
            <p className="text-muted-foreground text-sm">
              Answers regarding our vision model shade match pipelines.
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
            Build Your Custom Skincare Advisor
          </h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">
            Launch customized shade matchers and routines with a 2-week risk-free trial.
          </p>
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
