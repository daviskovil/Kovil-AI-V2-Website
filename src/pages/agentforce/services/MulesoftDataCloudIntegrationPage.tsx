'use client'

import { motion } from "motion/react"
import {
  Network, Radio, Users2, Server, Webhook, ShieldAlert,
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
    title: "Integration Discovery",
    description: "We map every system your Agentforce agents need to access — ERP, EHR, payments, logistics, ticketing — and assess current API capability, authentication patterns, and data quality at each source.",
    bullets: ["Full system inventory documented", "API readiness assessed per system", "Data quality and latency requirements defined"],
  },
  {
    number: "02",
    timeline: "Weeks 2–4",
    title: "API & Connector Build",
    description: "MuleSoft API connectors are designed, built, and deployed for each system — with error handling, circuit breakers, retry logic, and observability built in from the start, not bolted on later.",
    bullets: ["MuleSoft connectors built per system", "Error handling and retry logic implemented", "API gateway and auth configured"],
  },
  {
    number: "03",
    timeline: "Weeks 5–6",
    title: "Data Cloud Unification",
    description: "Data streams from all connected systems are unified into Salesforce Data Cloud — creating a single, real-time customer and operational profile that grounds every Agentforce agent action.",
    bullets: ["Data Cloud ingestion pipelines live", "Unified profiles available to agents", "Real-time grounding verified end-to-end"],
  },
]

const features = [
  {
    icon: Network,
    title: "MuleSoft API Connector Design",
    desc: "Custom MuleSoft connectors built for each external system — following API-led connectivity principles with experience, process, and system layers properly separated.",
  },
  {
    icon: Radio,
    title: "Real-Time Data Grounding",
    desc: "Agentforce agents grounded in live data from your external systems — no stale cache, no hallucinated answers, just accurate responses backed by the current state of your business.",
  },
  {
    icon: Users2,
    title: "Data Cloud Profile Unification",
    desc: "Customer records from CRM, ERP, support, and commerce systems unified into a single Data Cloud profile — giving every agent a complete, real-time view of each customer.",
  },
  {
    icon: Server,
    title: "ERP & EHR Connectivity",
    desc: "SAP, Oracle, Epic, Cerner, NetSuite — we have built connectors for the complex, high-stakes systems that matter most in enterprise and regulated industries.",
  },
  {
    icon: Webhook,
    title: "Webhook & Event Streaming",
    desc: "Event-driven triggers from external systems — order status changes, payment confirmations, appointment updates — streamed into Data Cloud so agents respond to real-world events in real time.",
  },
  {
    icon: ShieldAlert,
    title: "Fallback & Circuit Breaker Patterns",
    desc: "If an external system is unavailable, your agent degrades gracefully — not catastrophically. Circuit breakers, fallback responses, and retry queues keep agents functional under system stress.",
  },
]

const forWho = [
  {
    label: "Enterprises with Complex System Landscapes",
    desc: "You have 10+ systems your agents need to touch. Without a proper integration layer, your agents are operating blind. We build the connective tissue that makes them useful.",
  },
  {
    label: "Healthcare and Financial Services Orgs",
    desc: "Your agents need access to EHR, payment, and compliance systems with strict security and audit requirements. We have built these integrations before — with the right controls baked in.",
  },
  {
    label: "Agentforce Teams Hitting Data Access Walls",
    desc: "Your agents are live but keep failing because they can't access the data they need. We diagnose the integration gaps and build the connectors that unlock full agent capability.",
  },
]

export default function MulesoftDataCloudIntegrationPage() {
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
            <span className="text-foreground">MuleSoft &amp; Data Cloud Integration</span>
          </nav>

          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
            MuleSoft &amp; Data Cloud Integration
          </p>

          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Give your Agentforce agents a brain that{" "}
            <span className="text-accent">spans every system.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Connect your agents to ERP, EHR, payments, logistics, and more using MuleSoft API connectors and Data Cloud unification — so every agent action is grounded in real-time, accurate data.
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
          From integration discovery to unified real-time data in six weeks.
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
            Enterprise-grade connectivity for Agentforce agents.
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
          For enterprises where data lives in many places.
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
              Ready to give your agents access to every system?
            </h2>
            <p className="text-background/60 text-base">
              Book a call and we&apos;ll map your integration landscape and propose the fastest path to unified data grounding.
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
