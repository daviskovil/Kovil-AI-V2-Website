'use client'

import { motion } from "motion/react"
import { Search, Wrench, BarChart3, Zap, Shield, Server, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const steps = [
  {
    number: "01",
    timeline: "Days 1–3",
    title: "Diagnostic Assessment",
    description: "We perform a structured diagnostic of your Azure AI deployment — reviewing architecture decisions, prompt design, retrieval configuration, token usage, latency profiles, and security posture to identify every root cause.",
    bullets: ["Full architecture and configuration review", "Hallucination and accuracy audit", "Token cost and latency profiling"],
  },
  {
    number: "02",
    timeline: "Days 4–10",
    title: "Root Cause Remediation",
    description: "We fix the identified problems — restructuring RAG pipelines, rewriting system prompts, optimising chunking strategies, patching security gaps, and implementing cost controls across your deployment.",
    bullets: ["RAG pipeline and prompt redesign", "Security gaps closed and policies applied", "Token cost reduction measures implemented"],
  },
  {
    number: "03",
    timeline: "Days 11–14",
    title: "Performance Validation",
    description: "We run a full evaluation suite post-remediation — benchmarking accuracy, latency, and cost against pre-fix baselines, and configuring monitoring dashboards so you can track performance going forward.",
    bullets: ["Pre/post accuracy benchmarks compared", "Latency and cost improvement measured", "Azure Monitor dashboards and alerts live"],
  },
]

const features = [
  {
    icon: Search,
    title: "Hallucination Root Cause Analysis",
    desc: "Systematically identify why your agent is hallucinating — whether the cause is poor chunking, weak retrieval, insufficient grounding, or model temperature misconfiguration.",
  },
  {
    icon: Wrench,
    title: "RAG Accuracy Remediation",
    desc: "Rebuild or reconfigure your retrieval pipeline — fixing chunk sizes, overlap, embedding models, reranking, and index schema to dramatically improve answer accuracy and groundedness.",
  },
  {
    icon: BarChart3,
    title: "Token Cost Reduction",
    desc: "Audit every LLM call in your deployment for token waste — implementing prompt compression, response caching, model downtiering where appropriate, and usage dashboards to maintain control.",
  },
  {
    icon: Zap,
    title: "Latency Optimisation",
    desc: "Profile end-to-end latency across retrieval, LLM inference, and post-processing — identifying and eliminating bottlenecks to bring response times within acceptable user-facing thresholds.",
  },
  {
    icon: Shield,
    title: "Security Gap Remediation",
    desc: "Identify and close security vulnerabilities in your Azure AI deployment — including open endpoints, overpermissioned identities, missing content safety filters, and unprotected prompt injection vectors.",
  },
  {
    icon: Server,
    title: "Monitoring & Alerting Setup",
    desc: "Configure Azure Monitor, Application Insights, and Log Analytics for full observability — alerting on hallucination spikes, cost anomalies, latency regressions, and failed agent actions.",
  },
]

const forWho = [
  {
    label: "Underperforming Azure AI builds",
    desc: "Teams who have deployed an Azure AI agent or RAG pipeline that is giving wrong answers, confusing users, or failing to complete tasks reliably in production.",
  },
  {
    label: "Spiralling OpenAI token costs",
    desc: "Organisations who approved an Azure OpenAI budget that is being exceeded month after month — token costs that seemed manageable at prototype scale have become unsustainable in production.",
  },
  {
    label: "Inherited a broken AI deployment",
    desc: "Engineering teams handed responsibility for an Azure AI system they didn't build — you need an external team to diagnose what went wrong and fix it properly without starting from scratch.",
  },
]

export default function AzureAIRescueOptimisationPage() {
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
            <span className="text-foreground">Azure AI Rescue & Optimisation</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Azure AI Rescue & Optimisation</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Your Azure AI deployment isn&apos;t working. <span className="text-accent">We fix it.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We diagnose why your Azure AI build is underperforming — hallucinations, high costs, slow responses, or security gaps — and remediate the root causes in 14 days.
          </p>
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
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Diagnose, remediate, and validate in 14 days.</h2>
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
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>What&apos;s Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Every failure mode diagnosed and fixed.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-6">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${AZURE}1A` }}>
                    <Icon className="h-5 w-5" style={{ color: AZURE }} />
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
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>Who It&apos;s For</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Is this engagement right for you?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div key={w.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6">
              <div className="h-8 w-8 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${AZURE}1A` }}>
                <CheckCircle2 className="h-4 w-4" style={{ color: AZURE }} />
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Stop tolerating an Azure AI deployment that doesn&apos;t work.</h2>
            <p className="text-background/60 text-base">14-day fixed-price rescue engagement. Root causes fixed. Performance validated before handover.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                Back to Azure AI Foundry
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
