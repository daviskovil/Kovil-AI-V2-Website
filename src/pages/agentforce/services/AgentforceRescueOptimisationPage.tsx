'use client'

import { motion } from "motion/react"
import {
  SearchCode, BrainCircuit, ShieldOff, PlugZap, Gauge, Lock,
  CheckCircle2, Clock, ArrowRight, ChevronRight
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const SF_BLUE = "#00A1E0"

const steps = [
  {
    number: "01",
    timeline: "Days 1–3",
    title: "Diagnostic Audit",
    description: "We perform a structured audit of every failing component — Topic and Action configuration, prompt Instructions, Trust Layer policy settings, integration connections, and production conversation logs.",
    bullets: ["Full Topic & Action audit complete", "Production conversation logs reviewed", "Root cause for each failure documented"],
  },
  {
    number: "02",
    timeline: "Weeks 1–2",
    title: "Remediation Sprint",
    description: "Every identified failure is remediated in a focused two-week sprint — reconfiguring Topics, rewriting Instructions, fixing Trust Layer policies, and restoring broken integrations with rigorous testing at each step.",
    bullets: ["All P1 failures remediated first", "Prompt and instruction rewrites tested", "Integration failures resolved and monitored"],
  },
  {
    number: "03",
    timeline: "Week 3",
    title: "Optimise & Handover",
    description: "Performance is benchmarked against pre-rescue baselines, guardrails hardened against future failure, and your team receives a full handover — documentation, playbooks, and a 30-day monitoring period.",
    bullets: ["Performance benchmarks documented", "Guardrails hardened for resilience", "Handover with monitoring playbook"],
  },
]

const features = [
  {
    icon: SearchCode,
    title: "Topic & Action Audit",
    desc: "Every Topic boundary, Action definition, and instruction set reviewed against Salesforce best practices — with specific failure modes identified and remediation steps documented for each.",
  },
  {
    icon: BrainCircuit,
    title: "Hallucination Root Cause Analysis",
    desc: "We trace every hallucination back to its source — missing grounding, poorly scoped Instructions, inadequate knowledge base coverage, or Trust Layer misconfiguration — and fix the root cause, not just the symptom.",
  },
  {
    icon: ShieldOff,
    title: "Trust Layer Re-configuration",
    desc: "Data masking rules, toxicity filters, and grounding policies audited and rebuilt — ensuring your agents operate within safe, compliant boundaries with the right guardrails in the right places.",
  },
  {
    icon: PlugZap,
    title: "Integration Failure Diagnosis",
    desc: "Broken MuleSoft connectors, failed Flow integrations, and data access errors diagnosed and resolved — with circuit breaker patterns added to prevent cascading failures in future.",
  },
  {
    icon: Gauge,
    title: "Performance Benchmarking",
    desc: "Resolution rate, deflection rate, escalation frequency, and CSAT impact measured before and after remediation — giving you clear, reportable evidence of what the rescue delivered.",
  },
  {
    icon: Lock,
    title: "Guardrail Hardening",
    desc: "Fallback topics, out-of-scope handling, and adversarial prompt resistance tested and hardened — so the failures that brought you here cannot reoccur once your agents are back in production.",
  },
]

const forWho = [
  {
    label: "Orgs with a Stalled Agentforce Rollout",
    desc: "You launched agents, saw poor results, and paused the rollout. The business case is still there but confidence is gone. We restore both the performance and the internal credibility.",
  },
  {
    label: "Teams Who Inherited a Vendor Build",
    desc: "A previous agency or Salesforce partner delivered the configuration and left. Now it's underperforming and no one understands why. We audit it, explain what's broken, and fix it properly.",
  },
  {
    label: "CTOs with Agents in Production but Underperforming",
    desc: "Your agents are live but hallucinating, escalating too frequently, or failing on basic cases. You need measurable improvement fast, with evidence you can take to leadership.",
  },
]

export default function AgentforceRescueOptimisationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Agentforce Rescue &amp; Optimisation</span>
          </nav>

          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
            Agentforce Rescue &amp; Optimisation
          </p>

          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Inherited a broken Agentforce deployment?{" "}
            <span className="text-accent">We fix it.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We diagnose failing agent Topics, hallucinating Actions, mis-configured Trust Layer guardrails, and integration failures — and restore measurable performance within one 2-week sprint.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="accent"
              className="rounded-full font-semibold px-8 text-base h-12"
              onClick={openCalendly}
            >
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                Back to Agentforce
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
          How It Works
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">
          Audit, remediate, and harden in three weeks.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all"
            >
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
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
            What&apos;s Included
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">
            A forensic, fix-everything Agentforce rescue.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${SF_BLUE}1A` }}>
                    <Icon className="h-5 w-5" style={{ color: SF_BLUE }} />
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
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
          Who It&apos;s For
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">
          For teams who need their Agentforce investment saved.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div
              key={w.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6"
            >
              <div className="h-8 w-8 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${SF_BLUE}1A` }}>
                <CheckCircle2 className="h-4 w-4" style={{ color: SF_BLUE }} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{w.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">
              Ready to rescue your Agentforce deployment?
            </h2>
            <p className="text-background/60 text-base">
              Book a call and we&apos;ll scope the audit. You&apos;ll have a diagnosis report within three days.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button
              className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap"
              onClick={openCalendly}
            >
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                Back to Agentforce
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
