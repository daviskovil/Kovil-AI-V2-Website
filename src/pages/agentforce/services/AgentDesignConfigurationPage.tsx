'use client'

import { motion } from "motion/react"
import {
  Layers, Cpu, ShieldCheck, Workflow, AlertOctagon, TestTube2,
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
    title: "Agent Scoping",
    description: "We workshop your business workflows, edge cases, and escalation paths to define every Topic, Action, and Instruction your agent needs before a single line of configuration is written.",
    bullets: ["Topic & Action inventory defined", "Edge cases and escalations mapped", "Scope doc signed off before build starts"],
  },
  {
    number: "02",
    timeline: "Weeks 2–3",
    title: "Build & Configure",
    description: "Using Agent Builder, Prompt Builder, and Flow, we build your agent layer by layer — precise prompt instructions, grounded Actions, and integrated flows that reflect your exact business logic.",
    bullets: ["Agent Builder & Prompt Builder configured", "Flow integration built and tested", "Einstein Trust Layer policies applied"],
  },
  {
    number: "03",
    timeline: "Week 4",
    title: "Test & Harden",
    description: "Every topic, action, and fallback path is stress-tested against real scenarios. We run adversarial prompts, edge cases, and UAT sessions until the agent performs reliably across all conditions.",
    bullets: ["Full UAT with stakeholders", "Adversarial prompt testing", "Go-live support and handover docs"],
  },
]

const features = [
  {
    icon: Layers,
    title: "Topic & Action Design",
    desc: "We design every Topic and Action with precision — clear intent boundaries, disambiguation rules, and action chaining logic that prevents agent confusion or scope creep.",
  },
  {
    icon: Cpu,
    title: "Prompt Engineering",
    desc: "Role, persona, Instructions, and constraints authored in Prompt Builder — tested iteratively against real data until output quality meets your production standard.",
  },
  {
    icon: ShieldCheck,
    title: "Einstein Trust Layer Config",
    desc: "Data masking, toxicity filtering, and grounding policies configured to protect your customer data and keep agent responses within safe, approved boundaries.",
  },
  {
    icon: Workflow,
    title: "Flow Integration",
    desc: "Agent Actions wired to Salesforce Flows for approvals, record creation, notifications, and CRM updates — your agent executes real business processes, not just chat.",
  },
  {
    icon: AlertOctagon,
    title: "Guardrail & Fallback Design",
    desc: "Every agent needs a graceful exit. We design fallback topics, escalation triggers, and out-of-scope handling so no user conversation ends in a dead end.",
  },
  {
    icon: TestTube2,
    title: "UAT & Go-Live Support",
    desc: "Structured user acceptance testing with your team, followed by a supervised go-live — monitoring the first live conversations in real time before we hand over.",
  },
]

const forWho = [
  {
    label: "Orgs Ready to Build Their First Agent",
    desc: "You have Agentforce licences and a use case in mind, but lack the Salesforce AI expertise to configure Topics, Actions, and Trust Layer policies correctly from scratch.",
  },
  {
    label: "Teams Needing Bespoke Agent Logic",
    desc: "Generic templates won't cut it. Your workflows are complex, your edge cases are numerous, and you need an agent that reflects your exact business rules — not a demo.",
  },
  {
    label: "Companies with Complex Approval Workflows",
    desc: "Your agent needs to trigger multi-step approvals, update records, and respect hierarchy rules. We wire Agentforce to your existing Flows and approval processes precisely.",
  },
]

export default function AgentDesignConfigurationPage() {
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
            <span className="text-foreground">Agent Design &amp; Configuration</span>
          </nav>

          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
            Agent Design &amp; Configuration
          </p>

          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Agents built to your exact business logic —{" "}
            <span className="text-accent">not a template.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We design Topics, Actions, Instructions, and guardrails for each agent using Agent Builder, Prompt Builder, and Flow — scoped precisely to your workflows and data.
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
          From scoping to go-live in four weeks.
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
            Every layer of a production-grade Agentforce agent.
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
          Built for teams who need it done right.
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
              Ready to build an agent that actually works?
            </h2>
            <p className="text-background/60 text-base">
              Book a scoping call and we&apos;ll define your first agent&apos;s Topics, Actions, and go-live plan.
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
