'use client'

import { motion } from "motion/react"
import {
  Bot, BookOpen, HeartHandshake, ReceiptText, Timer, Star,
  CheckCircle2, Clock, ArrowRight, ChevronRight
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const SF_BLUE = "#00A1E0"

const steps = [
  {
    number: "01",
    timeline: "Week 1",
    title: "Case Flow Mapping",
    description: "We analyse your top case categories, resolution workflows, escalation triggers, and knowledge base structure — identifying every case type the agent can resolve autonomously with high confidence.",
    bullets: ["Top case categories ranked by volume", "Resolution steps documented per type", "Escalation triggers and thresholds defined"],
  },
  {
    number: "02",
    timeline: "Weeks 2–3",
    title: "Agent Build & Knowledge Integration",
    description: "The service agent is built with precise Topics for each case type, integrated with your Knowledge Base articles, Order Management records, and Service Cloud case history for full customer context.",
    bullets: ["Knowledge Base fully integrated", "Order & account data grounded", "Sentiment and escalation logic configured"],
  },
  {
    number: "03",
    timeline: "Week 4",
    title: "Go-Live & Optimise",
    description: "Supervised go-live with real customer cases, CSAT monitoring in place, and live tuning of agent responses based on actual conversation data — then handover with a full optimisation playbook.",
    bullets: ["Supervised go-live with real cases", "CSAT and resolution rate benchmarked", "Handover with optimisation playbook"],
  },
]

const features = [
  {
    icon: Bot,
    title: "Autonomous Case Resolution",
    desc: "L1 and L2 cases — refunds, order status, password resets, troubleshooting — resolved end-to-end by the agent without human involvement, 24 hours a day.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Integration",
    desc: "Agent responses are grounded in your approved Knowledge Base articles — no hallucinations, no improvised answers, just accurate information drawn from your documented procedures.",
  },
  {
    icon: HeartHandshake,
    title: "Sentiment-Based Escalation",
    desc: "When a customer's frustration exceeds a threshold, the agent detects sentiment shifts and escalates to a human agent with full conversation context — before the situation deteriorates.",
  },
  {
    icon: ReceiptText,
    title: "Order & Refund Handling",
    desc: "Order status lookups, refund initiations, rescheduling requests, and delivery queries handled autonomously using live Order Management and CRM data — no rep required.",
  },
  {
    icon: Timer,
    title: "SLA Monitoring",
    desc: "The agent tracks case age against SLA targets and auto-escalates cases approaching breach — ensuring your response time commitments are met even when case volume spikes.",
  },
  {
    icon: Star,
    title: "CSAT Preservation",
    desc: "Every resolution pathway is designed to preserve customer satisfaction — appropriate tone, accurate information, fast resolution, and a human fallback when needed.",
  },
]

const forWho = [
  {
    label: "Support Teams Managing High Case Volume",
    desc: "Your agents are handling hundreds of identical L1 cases daily. This agent deflects the repeatable work, freeing your human team for complex cases that genuinely require expertise.",
  },
  {
    label: "Ops Leads Reducing Cost-per-Case",
    desc: "Every L1 case resolved by an agent costs a fraction of a human-handled case. At scale, autonomous resolution delivers measurable, board-reportable cost reduction.",
  },
  {
    label: "CX Orgs Targeting 60%+ Auto-Resolution",
    desc: "You have an auto-resolution target but lack the AI infrastructure to reach it. This engagement builds the Agentforce layer that gets you there — with CSAT safeguards built in.",
  },
]

export default function ServiceCloudAgentDeploymentPage() {
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
            <span className="text-foreground">Service Cloud Agent Deployment</span>
          </nav>

          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
            Service Cloud Agent Deployment
          </p>

          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            65% of your support cases,{" "}
            <span className="text-accent">resolved without a human.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Deploy Agentforce agents that handle L1 and L2 cases — refunds, rescheduling, troubleshooting, order status — with full account context and intelligent human escalation.
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
          From case flow analysis to autonomous resolution in four weeks.
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
            A full autonomous support layer for Service Cloud.
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
          For teams ready to stop paying humans to do agent work.
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
              Ready to automate 65% of your support cases?
            </h2>
            <p className="text-background/60 text-base">
              Book a call and we&apos;ll identify which of your cases are ready for autonomous resolution this month.
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
