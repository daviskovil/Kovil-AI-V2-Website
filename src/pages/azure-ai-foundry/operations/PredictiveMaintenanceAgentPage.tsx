'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Activity, AlertTriangle, Settings } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  {
    title: "Real-Time Sensor Stream Monitoring",
    desc: "Continuously ingests vibration, temperature, pressure, and flow-rate telemetry from Azure IoT Hub — processing millions of events per second without data loss.",
  },
  {
    title: "Azure OpenAI Anomaly Interpretation",
    desc: "GPT-4o contextualises raw anomaly signals against asset maintenance history and operating conditions, explaining failure modes in plain language for field technicians.",
  },
  {
    title: "Automatic Work Order Creation",
    desc: "When failure probability crosses configurable thresholds, the agent creates prioritised work orders directly in your CMMS or ERP — including the fault description, recommended parts, and urgency level.",
  },
  {
    title: "Asset Maintenance History Analysis",
    desc: "Retrieves full maintenance records from Azure Data Lake and correlates current sensor patterns with past failure signatures to improve prediction confidence.",
  },
  {
    title: "Failure Probability Scoring",
    desc: "Azure Stream Analytics computes rolling anomaly scores per asset in real time, while Azure Machine Learning regression models output per-asset failure probability with confidence intervals.",
  },
  {
    title: "CMMS / ERP Integration",
    desc: "Pre-built connectors for SAP PM, IBM Maximo, Infor EAM, and ServiceNow — with Logic Apps handling authentication, payload mapping, and retry logic for reliable work order delivery.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "IoT Data Pipeline Setup",
    desc: "We configure Azure IoT Hub ingestion, Azure Stream Analytics jobs, and Azure Digital Twins to create a live, queryable model of your asset estate.",
    bullets: [
      "IoT Hub device provisioning and telemetry routing",
      "Stream Analytics windowed anomaly detection queries",
      "Digital Twins asset topology and relationship mapping",
    ],
  },
  {
    step: "02",
    title: "Anomaly Detection Model Integration",
    desc: "Azure Machine Learning regression and time-series forecasting models are trained on your historical sensor data and baseline failure events, then deployed as real-time scoring endpoints.",
    bullets: [
      "Custom ML model training on your failure history",
      "Azure OpenAI GPT-4o for contextual fault explanation",
      "Configurable alert thresholds per asset class and criticality",
    ],
  },
  {
    step: "03",
    title: "Work Order Automation",
    desc: "Semantic Kernel orchestrates the full alert-to-work-order pipeline — from anomaly confirmation to CMMS record creation — with human-in-the-loop review for critical assets.",
    bullets: [
      "Semantic Kernel agent orchestration for alert triage",
      "Azure Logic Apps for CMMS / ERP work order creation",
      "Maintenance team notification via Teams and email",
    ],
  },
]

const metrics = [
  { value: "73%", label: "Downtime reduction" },
  { value: "6x", label: "Earlier fault detection" },
  { value: "$890K", label: "Avg annual savings" },
  { value: "15 min", label: "Alert-to-order time" },
]

const techStack = [
  "Azure IoT Hub",
  "Azure OpenAI",
  "Azure Stream Analytics",
  "Semantic Kernel",
  "Azure Logic Apps",
  "Azure Digital Twins",
]

export default function PredictiveMaintenanceAgentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/azure-ai-foundry" className="hover:text-foreground transition-colors">Azure AI Foundry</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/azure-ai-foundry/operations" className="hover:text-foreground transition-colors">Operations</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Predictive Maintenance</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Operations · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Detect equipment failures <span className="text-accent">before they happen.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            AI agent that monitors IoT sensor streams via Azure IoT Hub, detects anomaly patterns with Azure OpenAI, and triggers maintenance work orders before equipment fails — reducing downtime by up to 73%.
          </p>

          {/* Metrics strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {metrics.map(m => (
              <div key={m.label} className="rounded-xl p-4 text-center" style={{ background: `${AZURE}10`, border: `1px solid ${AZURE}25` }}>
                <div className="font-display font-bold text-2xl" style={{ color: AZURE }}>{m.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                Back to Azure AI Foundry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From sensor signal to work order in 15 minutes.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-7 overflow-hidden group hover:border-accent/40 transition-all">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
                <span className="font-display font-black text-5xl text-accent/15 leading-none block mb-4">{step.step}</span>
                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                <ul className="space-y-2">
                  {step.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>Capabilities</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What this agent can do.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/30 transition-colors">
                <div className="h-2 w-2 rounded-full mb-4" style={{ background: AZURE }} />
                <h3 className="font-semibold text-base mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Built With</p>
          <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Azure technology stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map(tech => (
              <span key={tech} className="px-4 py-2 rounded-xl text-sm font-medium border" style={{ borderColor: `${AZURE}30`, background: `${AZURE}08`, color: AZURE }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to eliminate unplanned downtime?</h2>
            <p className="text-background/60 text-base">Talk to our Azure AI team about your asset monitoring environment and we'll scope a predictive maintenance agent in one call.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
