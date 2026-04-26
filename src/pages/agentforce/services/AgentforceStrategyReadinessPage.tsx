'use client'

import { motion } from "motion/react"
import {
  ClipboardList, Database, BarChart3, Ticket, GitBranch, Layout,
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
    title: "Org Audit",
    description: "We perform a comprehensive audit of your Salesforce org — licence utilisation, Data Cloud readiness, existing data models, integration landscape, and agent prerequisites.",
    bullets: ["Licence utilisation mapped", "Data Cloud readiness scored", "Integration gaps surfaced"],
  },
  {
    number: "02",
    timeline: "Days 4–7",
    title: "Opportunity Mapping",
    description: "Every high-ROI agent use case is identified and ranked by feasibility, business impact, and implementation effort — so you know exactly where to invest first.",
    bullets: ["Use cases ranked by ROI", "Effort vs. impact matrix", "Stakeholder alignment workshop"],
  },
  {
    number: "03",
    timeline: "Day 10",
    title: "Roadmap Delivery",
    description: "You receive a board-ready prioritised roadmap: phased agent rollout, resource requirements, success metrics, and a clear path to your first live agent.",
    bullets: ["Phased implementation roadmap", "Success metrics defined", "Ready to start build immediately"],
  },
]

const features = [
  {
    icon: ClipboardList,
    title: "Org Health Check",
    desc: "Full audit of your Salesforce org configuration, data quality, permission sets, and Einstein enablement status — so nothing blocks your first agent.",
  },
  {
    icon: Database,
    title: "Data Cloud Readiness",
    desc: "We assess whether your data is structured, unified, and accessible enough to ground Agentforce agents in real-time, accurate information.",
  },
  {
    icon: BarChart3,
    title: "Use Case Prioritisation",
    desc: "Every viable agent use case across Sales, Service, and Ops is scored by ROI, feasibility, and time-to-value — ranked so you build the right thing first.",
  },
  {
    icon: Ticket,
    title: "Licence Optimisation",
    desc: "We identify unused Agentforce licences, redundant add-ons, and configuration gaps that are costing you money before a single agent goes live.",
  },
  {
    icon: GitBranch,
    title: "Integration Gap Analysis",
    desc: "Every system your agents will need to touch — ERP, ticketing, CRM, data lakes — is mapped against current integration capabilities and gaps flagged.",
  },
  {
    icon: Layout,
    title: "Agent Architecture Blueprint",
    desc: "A detailed technical architecture document: recommended Topics, Actions, Trust Layer settings, and channel configurations for your first agent build.",
  },
]

const forWho = [
  {
    label: "Salesforce Orgs with Unused Licences",
    desc: "You've invested in Agentforce licences but haven't deployed a single agent. This engagement turns that sunk cost into a clear, funded activation plan.",
  },
  {
    label: "CTOs Planning an AI Roadmap",
    desc: "You need a defensible, board-ready AI strategy for Salesforce — not a vendor pitch deck, but a real technical and commercial plan grounded in your org's data.",
  },
  {
    label: "Ops Teams Evaluating Agentforce",
    desc: "You're assessing whether Agentforce is the right platform for your automation needs. This engagement gives you an objective, implementation-ready answer.",
  },
]

export default function AgentforceStrategyReadinessPage() {
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
            <span className="text-foreground">Strategy &amp; Readiness</span>
          </nav>

          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
            Agentforce Strategy &amp; Readiness
          </p>

          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Turn your Salesforce licence into a{" "}
            <span className="text-accent">live AI strategy.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Before a single Topic is configured, we audit your org, map your highest-ROI agent opportunities, and hand you a prioritised roadmap — so implementation starts with certainty, not guesswork.
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
          From org audit to prioritised roadmap in 10 days.
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
            Everything you need to start building with confidence.
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
          Is this engagement right for you?
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
              Ready to turn your licences into a live AI strategy?
            </h2>
            <p className="text-background/60 text-base">
              Book a call and get your Agentforce roadmap in 10 days.
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
