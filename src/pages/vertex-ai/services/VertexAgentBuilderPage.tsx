'use client'

import { motion } from "motion/react"
import { Bot, GitBranch, Wrench, Network, Search, Shield, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const steps = [
  {
    number: "01",
    timeline: "Week 1",
    title: "Agent Architecture Design",
    description: "We design the agent's reasoning strategy, compile the tool inventory, map data sources for grounding, and define the safety policy before a single line of Vertex AI Agent Builder configuration is written.",
    bullets: ["Reasoning strategy and task decomposition design", "Tool inventory and external API mapping", "Safety policy and guardrail specification"],
  },
  {
    number: "02",
    timeline: "Weeks 2–3",
    title: "Build & Test",
    description: "We configure Vertex AI Agent Builder end-to-end — setting up the Reasoning Engine orchestration, integrating tools and function calls, wiring Vertex AI Search grounding, and building the evaluation framework.",
    bullets: ["Vertex AI Agent Builder configuration", "Reasoning Engine and tool integration", "Evaluation framework and regression testing"],
  },
  {
    number: "03",
    timeline: "Week 4+",
    title: "Deploy & Scale",
    description: "We deploy the agent to production on Vertex AI, configure monitoring and alerting, and architect the multi-agent expansion pathway so your first agent becomes the foundation for a broader agent network.",
    bullets: ["Production deployment on Vertex AI", "Monitoring, alerting, and performance dashboards", "Multi-agent architecture expansion planning"],
  },
]

const features = [
  {
    icon: Bot,
    title: "Vertex AI Agent Builder Configuration",
    desc: "End-to-end configuration of Vertex AI Agent Builder — playbooks, flows, tools, and data stores — building production-grade agents that reason, retrieve, and act on your business data.",
  },
  {
    icon: GitBranch,
    title: "Reasoning Engine Orchestration",
    desc: "Implement Vertex AI Reasoning Engine to orchestrate complex multi-step agent workflows — enabling agents to plan, decompose tasks, use tools, and adapt based on intermediate results.",
  },
  {
    icon: Wrench,
    title: "Tool & Function Calling",
    desc: "Build and integrate the tools your agent needs — REST API connectors, database query functions, CRM integrations, and custom Cloud Functions callable from within the Vertex AI agent.",
  },
  {
    icon: Network,
    title: "Multi-Agent Workflows",
    desc: "Design and implement multi-agent architectures where specialist agents collaborate — one agent triages, another retrieves, another executes — all orchestrated through Vertex AI Reasoning Engine.",
  },
  {
    icon: Search,
    title: "Vertex AI Search Grounding",
    desc: "Ground agent responses in your enterprise knowledge using Vertex AI Search datastores — ensuring every agent response is accurate, cited, and traceable back to authoritative sources.",
  },
  {
    icon: Shield,
    title: "Safety & Guardrails",
    desc: "Implement safety filters, content moderation policies, and output validation layers to prevent harmful outputs, enforce brand guidelines, and satisfy enterprise compliance requirements.",
  },
]

const forWho = [
  {
    label: "Teams building autonomous agents on GCP",
    desc: "Engineering teams who want to build production agents on Google Cloud and need expert guidance on Vertex AI Agent Builder, Reasoning Engine, and GCP-native tooling rather than generic frameworks.",
  },
  {
    label: "Engineers evaluating Vertex AI vs LangChain/AutoGen",
    desc: "Teams assessing whether to build with Vertex AI Agent Builder or open-source frameworks — you need a hands-on technical evaluation grounded in your actual requirements and GCP environment.",
  },
  {
    label: "Enterprises needing production-grade agents with GCP security",
    desc: "Organisations that require agents to operate entirely within GCP's security perimeter — with VPC Service Controls, IAM-governed tool access, and data residency guarantees.",
  },
]

export default function VertexAgentBuilderPage() {
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
            <span className="text-foreground">Agent Builder & Reasoning Engine</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: G_BLUE }}>Agent Builder & Reasoning Engine</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Production AI agents built on <span className="text-accent">Vertex AI Agent Builder.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We design, build, and deploy production AI agents using Vertex AI Agent Builder and Reasoning Engine — with tool calling, multi-agent workflows, and GCP-native security built in.
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From architecture design to production in four weeks.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Every layer of a production Vertex AI agent.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to deploy production AI agents on Vertex AI?</h2>
            <p className="text-background/60 text-base">Four-week build. GCP-native security. Production-ready from day one.</p>
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
