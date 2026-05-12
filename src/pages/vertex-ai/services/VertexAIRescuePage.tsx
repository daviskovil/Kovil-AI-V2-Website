'use client'

import { motion } from "motion/react"
import { Stethoscope, Wrench, ClipboardCheck, DollarSign, Search, Bell, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const steps = [
  {
    number: "01",
    timeline: "Days 1–4",
    title: "Diagnostic Sprint",
    description: "We run a structured diagnostic across your Vertex AI deployment — auditing models, retrieval pipelines, prompt chains, and infrastructure to identify every root cause of underperformance before touching a line of configuration.",
    bullets: ["Vertex AI deployment and configuration audit", "Root cause analysis across models, retrieval, and prompts", "Infrastructure and cost structure review"],
  },
  {
    number: "02",
    timeline: "Days 5–10",
    title: "Remediation Build",
    description: "We implement the fixes — architectural changes, prompt optimisation, RAG pipeline improvements, and GCP resource right-sizing — with each change validated against your performance benchmarks as we go.",
    bullets: ["Architectural fixes and configuration remediation", "Prompt optimisation and RAG pipeline improvement", "GCP resource right-sizing and cost reduction"],
  },
  {
    number: "03",
    timeline: "Day 14",
    title: "Verified & Handed Over",
    description: "We benchmark the improved system against the pre-rescue baseline, configure monitoring and alerting so issues surface before users notice, and hand over a runbook so your team can operate it confidently.",
    bullets: ["Benchmarked performance improvement vs. baseline", "Monitoring, alerting, and dashboard setup", "Operations runbook and knowledge transfer"],
  },
]

const features = [
  {
    icon: Stethoscope,
    title: "Vertex AI Deployment Audit",
    desc: "Systematic audit of your Vertex AI configuration — model versions, endpoint settings, agent playbooks, grounding configuration, and API usage patterns — to locate every source of underperformance.",
  },
  {
    icon: DollarSign,
    title: "Cost & Token Optimisation",
    desc: "Identify and eliminate wasteful token usage, misconfigured compute resources, and over-provisioned endpoints — typically reducing GCP AI spend by 30–50% while maintaining or improving quality.",
  },
  {
    icon: Search,
    title: "RAG Pipeline Debugging",
    desc: "Debug retrieval accuracy issues in Vertex AI Search — diagnosing poor chunking strategies, suboptimal embedding configurations, missing hybrid search tuning, and stale or misindexed documents.",
  },
  {
    icon: Wrench,
    title: "Hallucination & Safety Analysis",
    desc: "Identify why your Gemini deployment is hallucinating or generating unsafe outputs — analysing grounding gaps, prompt construction issues, and safety filter misconfigurations causing the problem.",
  },
  {
    icon: ClipboardCheck,
    title: "Model Selection Review",
    desc: "Assess whether your current Gemini model choice — Flash, Pro, or custom fine-tuned — is appropriate for your latency, quality, and cost requirements, and recommend changes with evidence.",
  },
  {
    icon: Bell,
    title: "Monitoring & Alerting Setup",
    desc: "Configure Cloud Monitoring dashboards, latency alerts, error rate thresholds, and model drift detection so your team knows about issues before they affect end users or escalate costs.",
  },
]

const forWho = [
  {
    label: "Teams with underperforming Vertex AI agents",
    desc: "Engineering teams whose Vertex AI agents produce poor output quality, high hallucination rates, or retrieval failures — you need a structured rescue that diagnoses and fixes the root cause.",
  },
  {
    label: "Engineers with GCP AI cost overruns",
    desc: "Teams whose Gemini or Vertex AI spend has ballooned beyond budget without a clear reason — you need a cost audit that identifies the waste and right-sizes your GCP AI infrastructure.",
  },
  {
    label: "Organisations with Gemini reliability issues",
    desc: "Enterprises whose Gemini-powered products suffer from inconsistent responses, timeout errors, or unpredictable latency — you need a production reliability fix with monitoring baked in.",
  },
]

export default function VertexAIRescuePage() {
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
            <span className="text-foreground">Vertex AI Rescue & Optimisation</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: G_BLUE }}>Vertex AI Rescue & Optimisation</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Fix broken GCP AI deployments <span className="text-accent">in two weeks.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We diagnose and fix underperforming Vertex AI deployments — cost overruns, hallucinations, latency spikes, retrieval failures, and model drift — and restore measurable performance within a single two-week sprint.
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Diagnose, fix, and verify in 14 days.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Every fix your Vertex AI deployment needs.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to fix your underperforming Vertex AI deployment?</h2>
            <p className="text-background/60 text-base">Two-week fixed-price sprint. Benchmarked improvement. Monitoring included. No surprises.</p>
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
