'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Cpu, AlertTriangle, Eye, BarChart3, Wrench, Network } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"

const capabilities = [
  { title: "Predictive Maintenance", desc: "Analyses IoT sensor streams from production equipment to predict failure before it occurs — generating maintenance work orders automatically and prioritising by criticality and production impact." },
  { title: "Quality Control Vision", desc: "Processes camera feeds on production lines using Azure AI Vision to detect surface defects, dimensional anomalies, and assembly errors in real time — at accuracy rates exceeding manual inspection." },
  { title: "Supply Chain Intelligence", desc: "Monitors supplier lead times, raw material availability, logistics disruptions, and geopolitical risk signals to surface supply chain vulnerabilities before they interrupt production schedules." },
  { title: "Production Scheduling Optimisation", desc: "Generates and adjusts production schedules dynamically based on machine availability, material inventory, order priorities, and demand forecasts — reducing schedule adherence gaps and line idle time." },
  { title: "Equipment Anomaly Detection", desc: "Applies multivariate anomaly detection to sensor telemetry streams — identifying subtle deviation patterns that precede failures, with configurable alert thresholds per equipment class." },
  { title: "Supplier Risk Monitoring", desc: "Continuously monitors supplier financial health, delivery performance metrics, news signals, and regulatory compliance status — flagging at-risk suppliers with lead time to source alternatives." },
]

const howItWorks = [
  {
    step: "01",
    title: "IoT & Operational Data Integration",
    desc: "We connect the agent to your manufacturing equipment, SCADA systems, MES, and ERP via Azure IoT Hub and Azure Digital Twins — creating a real-time operational data fabric the agent reasons over.",
    bullets: ["Azure IoT Hub for sensor telemetry ingestion at scale", "Azure Digital Twins for plant-floor topology modelling", "ERP and MES connectors via Azure API Management"],
  },
  {
    step: "02",
    title: "Predictive & Visual Intelligence",
    desc: "Azure Machine Learning runs anomaly detection and predictive maintenance models against telemetry streams, while Azure AI Vision processes camera feeds — both surfacing actionable alerts without human review of raw data.",
    bullets: ["Azure ML anomaly detection on sensor streams", "Azure AI Vision for defect detection at line speed", "Configurable alert routing by severity and asset class"],
  },
  {
    step: "03",
    title: "Work Order & Scheduling Automation",
    desc: "When the agent detects an anomaly or quality issue, it automatically creates work orders in your CMMS, adjusts production schedules in your MES, and notifies the relevant maintenance or operations team.",
    bullets: ["Automatic work order generation in CMMS systems", "Production schedule adjustments pushed to MES", "Azure Monitor dashboards for operations leadership"],
  },
]

const metrics = [
  { value: "43%", label: "unplanned downtime reduction" },
  { value: "99.1%", label: "defect detection accuracy" },
  { value: "$1.8M", label: "avoided maintenance costs" },
  { value: "Real-time", label: "risk alerts" },
]

const techStack = [
  "Azure IoT Hub",
  "Azure OpenAI",
  "Azure Machine Learning",
  "Azure AI Vision",
  "Azure Digital Twins",
  "Azure Monitor",
]

export default function ManufacturingAzurePage() {
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
            <Link href="/azure-ai-foundry/industries" className="hover:text-foreground transition-colors">Industries</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Manufacturing & Supply Chain</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Industries · Manufacturing</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            AI agents for manufacturing.{" "}
            <span className="text-accent">Predictive. Autonomous. Azure-native.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Intelligent agents that connect your plant floor IoT data to actionable intelligence — predicting equipment failures, detecting quality defects at line speed, and optimising production schedules in real time. Built on Azure IoT Hub, Azure Machine Learning, and Azure Digital Twins.
          </p>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From sensor data to work order — without a human in the loop.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What the agent handles across manufacturing and supply chain.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Stop reacting to equipment failures. Predict them.</h2>
            <p className="text-background/60 text-base">Azure IoT + ML agents on your plant floor. Reduce unplanned downtime by 40%+ in 6 weeks.</p>
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

      <AzurePracticeNavigation currentPath="/azure-ai-foundry/industries/manufacturing-supply-chain" />
    </div>
  )
}
