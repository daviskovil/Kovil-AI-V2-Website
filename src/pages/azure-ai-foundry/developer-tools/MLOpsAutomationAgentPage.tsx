'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, BarChart3, Shield, GitBranch, Cpu, Zap, AlertTriangle } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  { title: "Automated Model Evaluation", desc: "Runs model evaluation pipelines against ground truth datasets automatically on every deployment candidate — no manual eval steps, consistent scoring methodology." },
  { title: "Deployment Gate Pass/Fail", desc: "Enforces quality thresholds before any model reaches production. If a candidate fails evaluation benchmarks, deployment is blocked and the team is notified with specific failure details." },
  { title: "Performance Drift Detection", desc: "Monitors production model output quality in real time — detecting drift in accuracy, latency, or output coherence and alerting the team before users notice degradation." },
  { title: "Model Lineage & Version Tracking", desc: "Every model deployment is tracked with full lineage: training data snapshot, evaluation results, deployment timestamp, and the engineer who approved it — for audit and rollback." },
  { title: "Responsible AI Dashboard Integration", desc: "Automated fairness metrics, toxicity scores, and content safety reports generated for every model deployment — surfaced in Azure AI Foundry's Responsible AI dashboard." },
  { title: "Rollback Orchestration", desc: "When production degradation is detected, the agent orchestrates an automatic rollback to the last stable model version — with notification to the team and post-mortem ticket creation." },
]

const howItWorks = [
  {
    step: "01",
    title: "Evaluation Pipeline Setup",
    desc: "We build Prompt Flow evaluation pipelines that run automatically on every model candidate — scoring against your ground truth dataset and custom quality metrics.",
    bullets: ["Prompt Flow evaluation pipeline configured", "Ground truth dataset prepared and versioned", "Custom quality metrics defined per use case"],
  },
  {
    step: "02",
    title: "Automated Deployment Gating",
    desc: "Evaluation results are compared against configurable pass/fail thresholds. Only models that meet all criteria are promoted to production — without manual intervention.",
    bullets: ["Pass/fail threshold configuration", "Automatic promotion on pass", "Blocked deployment notification on fail"],
  },
  {
    step: "03",
    title: "Production Monitoring",
    desc: "Once in production, the agent monitors model performance continuously — detecting drift, latency spikes, and safety violations, with automatic rollback on severe degradation.",
    bullets: ["Real-time performance metrics monitoring", "Drift detection with configurable thresholds", "Automatic rollback + post-mortem ticket"],
  },
]

const metrics = [
  { value: "5x", label: "faster deployment cycles" },
  { value: "Zero", label: "manual eval steps" },
  { value: "100%", label: "model lineage tracked" },
  { value: "Real-time", label: "drift alerts" },
]

const techStack = ["Azure Machine Learning", "Azure AI Foundry", "Prompt Flow", "Semantic Kernel", "Azure Monitor", "Azure DevOps"]

export default function MLOpsAutomationAgentPage() {
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
            <Link href="/azure-ai-foundry/developer-tools" className="hover:text-foreground transition-colors">Developer Tools</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">MLOps Automation</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Developer Tools · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Models deployed, monitored, and governed.{" "}
            <span className="text-accent">Automatically.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Automates the full MLOps lifecycle — model evaluation, deployment gating, performance monitoring, and drift detection — using Azure Machine Learning and Azure AI Foundry. Human-in-the-loop only for exceptions.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Evaluate, gate, deploy, and monitor — without manual steps.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Stop deploying AI models manually. Automate it.</h2>
            <p className="text-background/60 text-base">Full MLOps automation pipeline. Production in 3 weeks. Zero manual eval steps.</p>
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
