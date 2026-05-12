'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, AlertTriangle, Map, Bot, Layers, Eye, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const techStack = [
  "Vertex AI Agent Builder",
  "BigQuery ML",
  "Gemini 2.0 Pro",
  "Pub/Sub",
  "Cloud Dataflow",
]

const problems = [
  {
    title: "Disruptions detected too late to act",
    description: "Supply chain disruptions — supplier failures, port delays, weather events — are often identified only after they have already impacted operations, when recovery is expensive.",
  },
  {
    title: "Manual risk review across hundreds of suppliers",
    description: "Operations teams manually monitor supplier health, news, and logistics signals across large supplier networks — a time-consuming process that misses early warning signals.",
  },
  {
    title: "Reactive rather than predictive operations",
    description: "Without predictive intelligence, organisations respond to supply chain failures rather than preventing them — accepting higher costs, stockouts, and customer service failures.",
  },
]

const capabilities = [
  {
    icon: AlertTriangle,
    title: "Real-Time Supplier Risk Scoring",
    description: "BigQuery ML models continuously score every supplier against financial health, delivery performance, news signals, and geopolitical risk — updated in real time via Pub/Sub.",
  },
  {
    icon: Eye,
    title: "Disruption Prediction",
    description: "The agent correlates weather data, logistics signals, geopolitical events, and supplier patterns to predict disruptions up to 14 days before they impact your operations.",
  },
  {
    icon: Map,
    title: "Autonomous Re-Routing Recommendations",
    description: "When disruption risk is detected, the agent generates ranked re-routing options — alternative suppliers, logistics routes, safety stock draw-down — with cost-benefit analysis.",
  },
  {
    icon: Bot,
    title: "Procurement Agent Integration",
    description: "Approved re-routing decisions can trigger procurement actions directly — purchase order amendments, supplier notifications, and logistics bookings via integrated APIs.",
  },
  {
    icon: Layers,
    title: "Multi-Tier Supplier Visibility",
    description: "Risk visibility extends beyond Tier 1 suppliers to Tier 2 and Tier 3 — giving a complete picture of the supply chain dependency network and hidden concentration risks.",
  },
]

const metrics = [
  { value: "68%", label: "Faster disruption detection vs. manual monitoring" },
  { value: "$1.2M", label: "Avoided supply chain costs in year 1" },
  { value: "94%", label: "Prediction accuracy on 14-day supplier risks" },
]

const faqs = [
  {
    q: "What data sources does the Supply Chain Intelligence Agent monitor?",
    a: "The agent ingests internal data (purchase orders, goods receipts, delivery performance history) alongside external signals: news feeds, weather APIs, maritime and logistics tracking data, commodity price feeds, and supplier financial data. During implementation we configure the data sources most relevant to your specific supply chain risk profile and industry.",
  },
  {
    q: "How does the agent handle multi-tier supplier visibility?",
    a: "Tier 2 and Tier 3 visibility is built from your supplier-provided supply chain declarations, industry databases, and BigQuery ML inference based on product category and origin patterns. We work with you during discovery to map your known supplier network and identify where multi-tier data is available versus where it must be estimated from proxy signals.",
  },
  {
    q: "Can the agent take autonomous actions or does it require human approval?",
    a: "The agent operates within a configurable approval framework. Low-risk, pre-approved actions (e.g., activating a backup supplier within an existing contract) can be executed autonomously. Higher-risk actions (e.g., a new supplier engagement above a cost threshold) require human approval. The approval boundary is fully configurable during implementation to match your procurement governance policy.",
  },
  {
    q: "How long does implementation take?",
    a: "A standard Supply Chain Intelligence Agent implementation runs 6–8 weeks: 2 weeks for data source integration and BigQuery ML model training, 2 weeks for agent logic and routing recommendation engine, 2 weeks for integration testing with your procurement and ERP systems, and 2 weeks of supervised operation before full handover. Timelines vary based on the number of data source integrations required.",
  },
]

export default function SupplyChainIntelligencePage() {
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
            <Link href="/vertex-ai/operations" className="hover:text-foreground transition-colors">Operations</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">Supply Chain Intelligence</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_BLUE, color: G_BLUE }}>
            Operations
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Supply Chain Intelligence Agent
            <span className="block" style={{ color: G_BLUE }}>Predict and Prevent Disruptions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            AI agent that monitors supply chain signals, detects disruption risks, and recommends re-routing decisions — powered by Vertex AI and BigQuery ML on real-time logistics data. From reactive to predictive in weeks.
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
            We implement a production-grade supply chain intelligence agent on Google Cloud — ingesting real-time logistics and supplier data via Cloud Dataflow, scoring risks continuously with BigQuery ML, and surfacing the Gemini 2.0-powered agent to your operations team via a dashboard or Slack integration. Approved re-routing actions can trigger downstream procurement workflows automatically.
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
            Stop reacting to supply chain failures. Predict and prevent them before they impact operations. We implement in 6–8 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
