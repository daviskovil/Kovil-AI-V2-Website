'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  CheckCircle2, ArrowRight, ChevronDown, ChevronRight,
  Cpu, FileText, CheckSquare, ShieldCheck,
  Wrench, HelpCircle, HardDrive, CpuIcon, X,
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
  { stat: "+24%",   label: "AOV lift on accessories" },
  { stat: "-45%",   label: "Technical tickets deflected" },
  { stat: "98.5%",  label: "Compatibility match rate" },
  { stat: "2 wks",  label: "To first live agent" },
]

const proofSlides: Slide[] = [
  {
    tag: "Electronics Case Study",
    title: "An enterprise hardware distributor needed automated model checks and specs comparison.",
    desc: "Kovil AI deployed conversational agents that read structured hardware manuals, compared compatibility parameters, and processed RMA approvals directly on Shopify.",
    stats: [
      { value: "-45%", label: "Technical support tickets" },
      { value: "+24%", label: "Accessory upsell lift" },
    ],
  },
]

const useCases = [
  {
    icon: FileText,
    title: "Dynamic Spec Sheet & Model Comparison Agent",
    desc: "Allows customers to compare complex tech products (laptops, cameras, components) in side-by-side grids. Highlights battery life, processor speed, and connectors.",
    bullets: ["Parses raw spec sheets into comparison grids", "Highlights key differentiating attributes", "Recommends models based on customer use case", "Grounds answers strictly in product documentation"],
  },
  {
    icon: CheckSquare,
    title: "Hardware Compatibility Verification Agent",
    desc: "Ensures selected components or accessories (cables, mounts, lenses) are fully compatible with the customer's main device model, preventing returns.",
    bullets: ["Checks socket, voltage, and dimension attributes", "Validates cross-device compatibility gates", "Suggests necessary adapters or bundles", "Saves device profile tags to checkout session"],
  },
  {
    icon: Wrench,
    title: "Autonomous Tier-1 Tech Support Agent",
    desc: "Resolves common troubleshooting inquiries (firmware setup, error codes, pairing resets) using structured technical documentation.",
    bullets: ["Reads user manuals and error code libraries", "Walks through step-by-step resolution logic", "Escalates hardware failures directly to RMA flow", "Integrates with Gorgias and Zendesk tickets"],
  },
  {
    icon: Cpu,
    title: "Semantic Accessory & Cable Bundler",
    desc: "Examines the customer's cart and recommends required or high-value accessories (specific chargers, compatible batteries, cases) semantically.",
    bullets: ["Analyzes main device connector requirements", "Suggests in-stock exact fit accessories", "Adds accessory bundles in one conversational check", "Prevents user from buying incompatible variants"],
  },
]

const pipeline = [
  { number: "01", title: "Device Profile", desc: "Intakes the customer's hardware model or requirement specs." },
  { number: "02", title: "Specs Lookup", desc: "Queries product spec sheets via vector documentation search." },
  { number: "03", title: "Compatibility Gate", desc: "Verifies connector, size, and voltage compatibility." },
  { number: "04", title: "Accessory Add", desc: "Bundles exact-fit accessories and updates the Shopify cart." },
]

const trustItems = [
  { icon: ShieldCheck, title: "No Tech Hallucinations", desc: "Agents are strictly limited to technical documentation and manuals — they never invent specification metrics." },
  { icon: CheckSquare, title: "Zero Error Sizing", desc: "Compatibility logic runs database checks on exact variant SKUs." },
  { icon: Wrench, title: "Clean Support Escalations", desc: "Seamless transfer to human technical engineers with complete troubleshooting logs." },
  { icon: HelpCircle, title: "Warranty Validation", desc: "Verifies customer serial numbers against warranty policies before recommending replacements." },
]

const stack = ["Shopify Admin API", "pgvector", "Zendesk", "Gorgias", "Metafields API", "Loop Returns", "ShipStation", "ERP databases"]

const comparisonRows = [
  { capability: "Spec lookup", generic: "Long HTML tables to manually read", kovil: "Conversational lookup summarizing specs side-by-side" },
  { capability: "Compatibility gate", generic: "Dropdown lists of compatible models", kovil: "Strict parameter cross-checking (voltage, socket, fit)" },
  { capability: "Technical support", generic: "Static FAQ pages or slow human wait", kovil: "Instant tier-1 step-by-step troubleshooting assistant" },
  { capability: "Accessory matching", generic: "Generic 'customers also bought' list", kovil: "Exact connector and model-matched accessories only" },
]

const faqs = [
  { q: "How do you ensure the agent doesn't hallucinate tech specs?", a: "We ground the agent using Retrieval-Augmented Generation (RAG) connected to your structured product specifications and manuals. If a spec isn't documented in the knowledge base, the agent is trained to state they don't have that metric rather than guessing." },
  { q: "Can the agent check compatibilities across different brands?", a: "Yes. By mapping cross-brand compatibility matrixes in your catalog metadata, the agent can check if brand-A accessories fit brand-B devices based on socket type, diameter, or interface parameters." },
]

export default function ElectronicsGadgetsAiPage() {
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
          <span className="text-foreground">Consumer Electronics AI</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Vertical Solutions · Consumer Electronics</span>
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
              Consumer Electronics AI — <br />
              <span className="text-accent">Hardware Compatibility & Technical Support.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Deploy conversational electronics agents that run spec sheet comparisons, compatibility checks, and step-by-step technical support directly on Shopify.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShopifyCTA label="Build Tech Support Agent" />
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
            <h2 className="font-display text-3xl font-bold tracking-tight">AI Agents Built for Consumer Electronics</h2>
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
        heading="How one tech distributor put agents to work."
        subheading="A live deployment demonstrating compatibility gates and tier-1 troubleshooting."
        slides={proofSlides}
      />

      {/* Pipeline */}
      <section className="py-20 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">How It Works</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">From Technical Query to Confirmed Compatibility</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Technical Data Grounding & Support Escalations</h2>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Connects to Your Technical Stack</h2>
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
            <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono">Standard Specs vs. Conversational Specs Check</p>
            <h2 className="font-display text-3xl font-bold tracking-tight">Static Specs vs. Real Compatibility Validation</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/20">
                  <th className="text-left p-4 font-semibold text-foreground">Capability</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Standard Page</th>
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
            <h2 className="font-display text-3xl font-bold tracking-tight">Consumer Electronics FAQs</h2>
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
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">Build Your Custom Electronics Support Agent</h2>
          <p className="text-background/60 max-w-xl mx-auto mb-8 leading-relaxed text-sm">Launch customized spec sheet auditors and tech support assistants with a 2-week risk-free trial.</p>
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
