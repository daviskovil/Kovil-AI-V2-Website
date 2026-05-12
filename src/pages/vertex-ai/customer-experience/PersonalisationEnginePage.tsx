'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Zap, SplitSquareHorizontal, UserPlus, BookOpen, BarChart3, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const techStack = [
  "Vertex AI Recommendations AI",
  "BigQuery ML",
  "Gemini Embeddings",
  "Pub/Sub",
  "Cloud Spanner",
]

const problems = [
  {
    title: "Generic recommendations failing to convert",
    description: "One-size-fits-all product recommendations ignore individual user behaviour, intent, and history — resulting in irrelevant suggestions that customers simply ignore.",
  },
  {
    title: "Low click-through rates on product suggestions",
    description: "Product recommendation widgets deliver poor CTR because they rely on simple popularity metrics rather than semantic understanding of user intent and context.",
  },
  {
    title: "Revenue leakage from poor cross-sell",
    description: "Without accurate next-best-offer logic, organisations leave significant cross-sell and upsell revenue untapped — customers never see products they would actually buy.",
  },
]

const capabilities = [
  {
    icon: Zap,
    title: "Real-Time Recommendation Scoring",
    description: "Sub-100ms recommendation scoring powered by Vertex AI Recommendations AI — personalised results served at page load time without perceptible latency.",
  },
  {
    icon: BarChart3,
    title: "Multi-Signal Personalisation",
    description: "Recommendations factor in real-time behaviour, semantic purchase intent from Gemini embeddings, purchase history, and session context simultaneously.",
  },
  {
    icon: SplitSquareHorizontal,
    title: "A/B Testing Framework",
    description: "Built-in experiment framework for testing recommendation strategies, placement, and ranking models — with statistical significance tracking in BigQuery.",
  },
  {
    icon: UserPlus,
    title: "Cold-Start Handling for New Users",
    description: "New users without purchase history receive recommendations based on session behaviour and semantic similarity to cohort profiles — no cold-start gap.",
  },
  {
    icon: BookOpen,
    title: "Explainable Recommendation Reasons",
    description: "Each recommendation can surface a plain-language reason — 'because you browsed X' or 'customers like you also bought Y' — improving trust and conversion.",
  },
]

const metrics = [
  { value: "+31%", label: "CTR on product recommendations" },
  { value: "+24%", label: "Average order value uplift" },
  { value: "$2.1M", label: "Additional revenue attributed in first 6 months" },
]

const faqs = [
  {
    q: "How quickly can the model learn from new user behaviour?",
    a: "Vertex AI Recommendations AI supports real-time event ingestion via Pub/Sub. User behaviour events (page views, add-to-carts, purchases) are processed within seconds and influence recommendations in near real-time. The model's ranking updates continuously within the same session, so a user who changes their browsing intent mid-session receives contextually updated recommendations.",
  },
  {
    q: "What product catalogue size does the system support?",
    a: "Vertex AI Recommendations AI is designed for large-scale catalogues and handles millions of SKUs efficiently. Cloud Spanner provides the low-latency storage layer for serving recommendations at scale. There is no practical upper limit on catalogue size for the recommendation engine — the system is purpose-built for enterprise e-commerce and content catalogues.",
  },
  {
    q: "How does Gemini Embeddings improve recommendation quality?",
    a: "Gemini Embeddings creates dense vector representations of product descriptions, attributes, and user query intent. This enables semantic similarity matching — recommending conceptually related products even when there is no explicit co-purchase history. A user browsing 'sustainable outdoor gear' will receive semantically related recommendations even for new catalogue items with no behavioural data.",
  },
  {
    q: "Can we use this for content recommendations as well as products?",
    a: "Yes. Vertex AI Recommendations AI supports product, content, and media recommendation use cases with the same underlying infrastructure. We have implemented content recommendation engines for media publishers, learning platforms, and financial services using the same technical approach. The implementation is adapted to your catalogue type during discovery.",
  },
]

export default function PersonalisationEnginePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai" className="hover:text-foreground transition-colors">Vertex AI</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai/customer-experience" className="hover:text-foreground transition-colors">Customer Experience</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">Personalisation Engine</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_BLUE, color: G_BLUE }}>
            Customer Experience
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            AI Personalisation Engine
            <span className="block" style={{ color: G_BLUE }}>Real-Time Recommendations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Real-time personalisation using Vertex AI Recommendations AI and BigQuery ML — recommending products, content, or offers based on user behaviour, purchase history, and semantic intent. Sub-100ms recommendations served at scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={openCalendly} size="lg" style={{ backgroundColor: G_BLUE }} className="text-white hover:opacity-90">
              Build This for Your Organisation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/vertex-ai">Explore Vertex AI Services</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* What We Build */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4">What We Build</h2>
          <p className="text-muted-foreground max-w-3xl mb-6">
            We implement a production-grade personalisation engine on Google Cloud — ingesting behavioural events via Pub/Sub, training recommendation models in Vertex AI, storing recommendations in Cloud Spanner for low-latency serving, and delivering results via a lightweight API your frontend calls at render time. A/B testing and model monitoring are included from day one.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: G_BLUE, color: G_BLUE, backgroundColor: `${G_BLUE}10` }}>
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* The Problem It Solves */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">The Problem It Solves</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="rounded-xl border bg-card p-6">
                <div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: G_BLUE }} />
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What You Get */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">What You Get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="rounded-xl border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${G_BLUE}15` }}>
                    <Icon className="w-5 h-5" style={{ color: G_BLUE }} />
                  </div>
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Business Impact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">Business Impact</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border bg-card p-8 text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: G_BLUE }}>{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border bg-card p-6">
                <h3 className="font-semibold mb-3 flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: G_BLUE }} />
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl p-10 text-center text-white"
          style={{ background: `linear-gradient(135deg, ${G_BLUE} 0%, #1a73e8 100%)` }}>
          <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Build This for Your Organisation</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Turn generic recommendations into personalised experiences that convert. We implement a production-ready Personalisation Engine in 3 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
