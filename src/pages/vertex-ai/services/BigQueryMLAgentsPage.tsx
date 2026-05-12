'use client'

import { motion } from "motion/react"
import { BarChart3, MessageSquare, Network, LayoutDashboard, Workflow, Activity, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const steps = [
  {
    number: "01",
    timeline: "Week 1",
    title: "Data Assessment & Model Selection",
    description: "We assess your BigQuery data quality and schema, select the right BQML model type for your use case — regression, classification, clustering, time series, or ARIMA — and design the feature engineering plan.",
    bullets: ["BigQuery data quality and schema assessment", "BQML model type selection for your use case", "Feature engineering and transformation plan"],
  },
  {
    number: "02",
    timeline: "Weeks 2–3",
    title: "Model Build & Agent Integration",
    description: "We train the BigQuery ML model using your warehouse data, integrate it with Vertex AI agents, and set up Gemini in BigQuery for natural language SQL generation — turning your analysts into power users.",
    bullets: ["BigQuery ML model training and validation", "Vertex AI agent integration with BQML predictions", "Gemini in BigQuery natural language SQL setup"],
  },
  {
    number: "03",
    timeline: "Week 4+",
    title: "Deploy & Monitor",
    description: "We deploy to production, configure model monitoring for drift and data quality, and set up automated retraining triggers — ensuring your models stay accurate as your data evolves.",
    bullets: ["Production deployment of BQML models and agents", "Model monitoring and drift detection setup", "Automated retraining and freshness pipelines"],
  },
]

const features = [
  {
    icon: BarChart3,
    title: "BigQuery ML Model Development",
    desc: "Train production ML models — regression, classification, clustering, time series forecasting, and anomaly detection — directly inside BigQuery using SQL, without moving data to a separate ML platform.",
  },
  {
    icon: MessageSquare,
    title: "Gemini in BigQuery",
    desc: "Deploy Gemini in BigQuery to enable natural language SQL generation — letting analysts query complex data with plain English questions instead of hand-crafted SQL, dramatically accelerating insight velocity.",
  },
  {
    icon: Network,
    title: "Vertex AI Integration",
    desc: "Bridge BigQuery ML predictions into Vertex AI agents — enabling agents to trigger model inference, retrieve predictions, and incorporate ML outputs into multi-step reasoning workflows.",
  },
  {
    icon: LayoutDashboard,
    title: "Looker Intelligence Layer",
    desc: "Integrate BigQuery ML predictions and Vertex AI agent outputs into Looker dashboards — adding AI-powered anomaly callouts, predictive KPIs, and natural language data exploration to existing BI tooling.",
  },
  {
    icon: Workflow,
    title: "Dataflow ETL Automation",
    desc: "Build Dataflow pipelines to continuously feed feature data into BigQuery ML models — automating the ETL layer so models train on fresh, high-quality feature sets without manual intervention.",
  },
  {
    icon: Activity,
    title: "Model Monitoring & Drift Detection",
    desc: "Configure Vertex AI Model Monitoring to detect feature drift and prediction drift in production BQML models — triggering alerts and automated retraining before model accuracy degrades silently.",
  },
]

const forWho = [
  {
    label: "Data teams wanting AI on top of BigQuery",
    desc: "Analytics and data engineering teams with mature BigQuery data assets who want to add ML predictions and AI agents without standing up a separate ML infrastructure platform.",
  },
  {
    label: "Organisations replacing BI dashboards with AI agents",
    desc: "Teams moving from static Looker or Data Studio dashboards to AI agents that surface insights proactively, answer natural language questions, and trigger actions based on data signals.",
  },
  {
    label: "Teams wanting ML without moving data out of GCP",
    desc: "Enterprises with data residency or governance requirements — you need ML models trained entirely inside GCP with no data egress to external ML platforms or third-party APIs.",
  },
]

export default function BigQueryMLAgentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/vertex-ai" className="hover:text-foreground transition-colors">Vertex AI</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">BigQuery ML & Data Intelligence Agents</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: G_BLUE }}>BigQuery ML & Data Intelligence Agents</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            AI agents and ML models built <span className="text-accent">inside your data warehouse.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We build predictive ML models and AI agents directly on BigQuery — using BigQuery ML, Gemini in BigQuery, and Vertex AI to deliver data intelligence automation without moving your data anywhere.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/vertex-ai">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                Back to Vertex AI
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: G_BLUE }}>How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From data assessment to production ML in four weeks.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-black text-4xl text-accent/20 leading-none">{step.number}</span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                  <Clock className="h-3 w-3" />{step.timeline}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>
              <ul className="space-y-2">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: G_BLUE }}>What&apos;s Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">The full stack of GCP data intelligence.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-6">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${G_BLUE}1A` }}>
                    <Icon className="h-5 w-5" style={{ color: G_BLUE }} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: G_BLUE }}>Who It&apos;s For</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Is this engagement right for you?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div key={w.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6">
              <div className="h-8 w-8 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${G_BLUE}1A` }}>
                <CheckCircle2 className="h-4 w-4" style={{ color: G_BLUE }} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{w.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to add AI intelligence to your BigQuery data warehouse?</h2>
            <p className="text-background/60 text-base">Four-week build. ML stays in GCP. No data egress. Production monitoring included.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/vertex-ai">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                Back to Vertex AI
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
