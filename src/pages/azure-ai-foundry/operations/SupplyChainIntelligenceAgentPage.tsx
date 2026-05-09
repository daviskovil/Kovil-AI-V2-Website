'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, AlertTriangle, BarChart3, Database, Globe, Zap, Server } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  { title: "Multi-Source Data Ingestion", desc: "Ingests logistics feeds, supplier APIs, weather data, port status, and demand signals via Azure Data Factory — unified into a single risk intelligence layer." },
  { title: "Natural Language Risk Summaries", desc: "Azure OpenAI translates raw risk signals into plain-English briefings for procurement and ops teams — no data science skills required to understand the output." },
  { title: "Re-Routing Recommendations", desc: "When a supplier or logistics lane shows elevated risk, the agent generates specific alternative routing options with cost and lead-time comparisons." },
  { title: "Demand Forecast Integration", desc: "Pulls demand forecast data from your planning system and cross-references against supply risk signals to prioritise which disruptions matter most." },
  { title: "Supplier Risk Scoring", desc: "Continuously scores each active supplier on reliability, financial health signals, geographic concentration, and recent delivery performance." },
  { title: "Executive Alert Dashboard", desc: "Power BI Embedded dashboard surfacing top-5 supply risks, recommended actions, and trend data — updated in real time as new signals arrive." },
]

const howItWorks = [
  {
    step: "01",
    title: "Data Ingestion & Unification",
    desc: "We connect your logistics systems, supplier databases, and external data feeds into Azure Data Factory pipelines — creating a unified operational data layer.",
    bullets: ["ERP & WMS integration via Azure API Management", "External logistics & weather APIs connected", "Supplier data normalised and deduplicated"],
  },
  {
    step: "02",
    title: "Risk Signal Analysis",
    desc: "Azure OpenAI reads the unified data stream and identifies risk patterns — supplier delays, port disruptions, demand spikes — contextualised against your specific supply network.",
    bullets: ["Azure OpenAI GPT-4o interprets risk signals", "Severity scoring based on business impact", "Historical pattern comparison for context"],
  },
  {
    step: "03",
    title: "Recommendation & Alert Engine",
    desc: "When risks exceed configured thresholds, the agent generates specific, actionable recommendations and routes them to the right stakeholders via Teams or email.",
    bullets: ["Prioritised risk queue with recommended actions", "Automatic escalation for critical disruptions", "Full audit trail in Azure Monitor"],
  },
]

const metrics = [
  { value: "48hr", label: "avg risk lead time" },
  { value: "62%", label: "fewer unplanned stockouts" },
  { value: "+18%", label: "on-time delivery improvement" },
  { value: "$1.2M", label: "avg inventory optimisation" },
]

const techStack = ["Azure OpenAI", "Azure Data Factory", "Azure Synapse Analytics", "Semantic Kernel", "Azure Service Bus", "Power BI Embedded"]

export default function SupplyChainIntelligenceAgentPage() {
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
            <span className="text-foreground">Supply Chain Intelligence</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Operations · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Supply chain risks surfaced before they become{" "}
            <span className="text-accent">disruptions.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Real-time supply chain risk analysis built on Azure AI Foundry. Ingests logistics, supplier, and demand data — uses Azure OpenAI to interpret risk signals and surface recommended actions before disruptions hit production.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From raw data signals to actionable risk intelligence.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">See supply chain risks 48 hours earlier.</h2>
            <p className="text-background/60 text-base">Fixed-price pilot. Deployed in 2–3 weeks. Zero delivery risk.</p>
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
