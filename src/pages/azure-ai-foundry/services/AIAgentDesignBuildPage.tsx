'use client'

import { motion } from "motion/react"
import { Brain, Code, Cpu, GitBranch, BarChart3, Server, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const steps = [
  {
    number: "01",
    timeline: "Week 1",
    title: "Agent Architecture Design",
    description: "We design the full agent architecture — defining orchestration patterns, tool and plugin strategy, memory requirements, and evaluation criteria before a single line of code is written.",
    bullets: ["Agent orchestration pattern selected", "Tool and plugin inventory defined", "Evaluation framework designed upfront"],
  },
  {
    number: "02",
    timeline: "Weeks 2–3",
    title: "Build & Evaluate",
    description: "Your agents are built using Azure AI Foundry, Semantic Kernel, and Prompt Flow — with continuous evaluation against ground truth datasets throughout development to ensure production quality.",
    bullets: ["Agents built in Azure AI Foundry", "Continuous evaluation against benchmarks", "Multi-agent workflows configured"],
  },
  {
    number: "03",
    timeline: "Week 4",
    title: "Deploy & Monitor",
    description: "Agents are deployed to your Azure infrastructure with monitoring, alerting, and logging configured — so you have full observability over agent behaviour and costs from day one.",
    bullets: ["Production deployment to Azure", "Monitoring and cost alerts configured", "Handover documentation and runbook"],
  },
]

const features = [
  {
    icon: Brain,
    title: "Semantic Kernel Orchestration",
    desc: "Agents built on Microsoft's Semantic Kernel framework — enabling reliable, testable orchestration of LLM calls, tools, and memory across complex multi-step workflows.",
  },
  {
    icon: Code,
    title: "Tool & Plugin Design",
    desc: "Custom tools and plugins that give your agents access to internal APIs, databases, and enterprise systems — with proper error handling and retry logic for production reliability.",
  },
  {
    icon: GitBranch,
    title: "Multi-Agent Workflows",
    desc: "Design and implement multi-agent systems where specialised agents collaborate — including orchestrator-subagent patterns, handoffs, and shared memory contexts.",
  },
  {
    icon: Cpu,
    title: "Memory & Context Management",
    desc: "Implement short-term conversation memory, long-term semantic memory using Azure AI Search, and context compression strategies to keep agents accurate without token bloat.",
  },
  {
    icon: BarChart3,
    title: "Evaluation Framework",
    desc: "Automated evaluation pipelines using Azure AI Foundry's evaluation SDK — measuring groundedness, relevance, coherence, and task completion against curated test datasets.",
  },
  {
    icon: Server,
    title: "Prompt Flow Deployment",
    desc: "Production-grade deployment via Azure AI Foundry Prompt Flow — with versioned flows, A/B testing capability, and managed online endpoints for low-latency inference.",
  },
]

const forWho = [
  {
    label: "Engineering teams needing AI expertise",
    desc: "Software teams with strong engineering skills but limited LLM agent experience — you need a partner who has built production agents on Azure, not demo prototypes.",
  },
  {
    label: "Clear use case, no AI engineers",
    desc: "Businesses that have identified a valuable AI agent use case and have Azure access but lack the in-house AI engineering capability to build it properly.",
  },
  {
    label: "Production-grade, not demo-grade",
    desc: "Teams who have seen AI demos that look impressive but fail in production — you need agents with real evaluation, proper error handling, and observable behaviour.",
  },
]

export default function AIAgentDesignBuildPage() {
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
            <span className="text-foreground">AI Agent Design & Build</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>AI Agent Design & Build</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            AI agents that reason, act, and <span className="text-accent">deliver results.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We design, build, and deploy production-grade AI agents on Azure AI Foundry — using Semantic Kernel, Prompt Flow, and rigorous evaluation to ensure they work in the real world.
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Design, build, and deploy in four weeks.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Every layer of a production-grade AI agent.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to build AI agents that actually work in production?</h2>
            <p className="text-background/60 text-base">Four-week fixed-price engagement. Production-deployed agents. Full evaluation coverage.</p>
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
