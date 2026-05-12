'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, BarChart3, Wrench, Activity, ClipboardList, HelpCircle, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const techStack = [
  "Vertex AI AutoML",
  "BigQuery ML",
  "Cloud IoT",
  "Vertex AI Pipelines",
  "Looker",
]

const problems = [
  {
    title: "Reactive maintenance causing costly downtime",
    description: "Equipment failures caught only after breakdown result in unplanned downtime, emergency repair costs, and production losses that dwarf the cost of predictive prevention.",
  },
  {
    title: "Inaccurate demand forecasts causing stock imbalances",
    description: "Inaccurate demand forecasting leads simultaneously to overstock (tying up capital) and stockouts (losing sales) — inefficiency that compounds through the supply chain.",
  },
  {
    title: "Planning cycles taking weeks instead of hours",
    description: "Manual forecasting processes involving spreadsheets, email, and offline collaboration take weeks to complete — leaving organisations planning on stale data.",
  },
]

const capabilities = [
  {
    icon: BarChart3,
    title: "Demand Forecasting with Confidence Intervals",
    description: "Vertex AI AutoML models produce demand forecasts with calibrated confidence intervals — giving planners not just a number but a reliable range for inventory decisions.",
  },
  {
    icon: Wrench,
    title: "Predictive Maintenance Scheduling",
    description: "IoT sensor data feeds BigQuery ML models that predict equipment failure probability — enabling maintenance to be scheduled at optimal times before failures occur.",
  },
  {
    icon: Activity,
    title: "Anomaly Detection in Sensor Data",
    description: "Real-time anomaly detection flags unusual sensor patterns — vibration, temperature, pressure — before they escalate to failures, enabling pre-emptive intervention.",
  },
  {
    icon: ClipboardList,
    title: "Automated Work Order Creation",
    description: "When predictive models exceed maintenance thresholds, work orders are created automatically in your CMMS or ERP — with priority, parts list, and estimated labour hours.",
  },
  {
    icon: HelpCircle,
    title: "Forecasting Uncertainty Quantification",
    description: "All forecasts include uncertainty bounds, enabling risk-adjusted planning — planners know which forecasts to rely on and where to carry additional safety stock.",
  },
]

const metrics = [
  { value: "76%", label: "Reduction in unplanned downtime events" },
  { value: "34%", label: "Improvement in demand forecast accuracy" },
  { value: "$890K", label: "Maintenance cost avoidance annually" },
]

const faqs = [
  {
    q: "What IoT data sources does the predictive maintenance model use?",
    a: "The model ingests sensor data via Cloud IoT or Pub/Sub from any connected equipment — vibration sensors, temperature probes, pressure transducers, current monitors, and run-time counters. Historical maintenance records and failure logs from your CMMS are used for model training. We work with whatever sensor infrastructure you have in place and can advise on sensor gaps that would improve model accuracy.",
  },
  {
    q: "How much historical data is needed to train the demand forecast model?",
    a: "Vertex AI AutoML performs well with 12–24 months of historical demand data. Shorter history reduces forecast accuracy, particularly for seasonal patterns. Where historical data is limited, we use transfer learning from analogous product categories or apply Bayesian priors based on industry demand profiles. The model improves continuously as more data accumulates.",
  },
  {
    q: "Can the system handle demand for new products with no history?",
    a: "Yes. Vertex AI AutoML supports cold-start forecasting for new products using feature similarity to existing products — matching on attributes like category, price point, seasonality, and channel. New product forecasts carry wider confidence intervals that narrow as actual demand data accumulates. We configure the cold-start approach based on your product catalogue structure.",
  },
  {
    q: "How does the automated work order creation integrate with our CMMS?",
    a: "We implement the CMMS integration as part of the engagement. We support standard integrations with IBM Maximo, SAP PM, Infor EAM, UpKeep, and Fiix. Custom integrations are implemented via API for any CMMS with a documented REST API. Work orders are created with configurable approval gates — low-priority maintenance may be created automatically, while high-cost interventions require approval before creation.",
  },
]

export default function PredictiveAnalyticsAgentPage() {
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
            <span className="text-foreground">Predictive Analytics Agent</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_BLUE, color: G_BLUE }}>
            Operations
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Predictive Analytics AI Agent
            <span className="block" style={{ color: G_BLUE }}>Demand &amp; Maintenance Forecasting</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Predictive analytics agent using BigQuery ML and Vertex AI AutoML — forecasting demand, predicting equipment failures, and automating response actions before problems occur. Reduce downtime and improve planning accuracy simultaneously.
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
            We implement a production-grade predictive analytics agent on Google Cloud — building Vertex AI AutoML models for demand forecasting, training BigQuery ML anomaly detection on your IoT sensor data, and connecting model outputs to automated work order creation and inventory adjustment workflows. Looker dashboards give planners real-time visibility into forecasts and maintenance predictions.
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
            Stop reacting to failures and forecast misses. We implement production-ready predictive analytics in 4–6 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
