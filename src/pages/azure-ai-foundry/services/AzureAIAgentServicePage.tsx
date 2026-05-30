'use client'

import { motion } from "motion/react"
import { Bot, Layers, Wrench, Shield, BarChart3, GitBranch, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from "../../../components/azure/AzurePracticeNavigation"

const AZURE = "#0078D4"

const steps = [
  {
    number: "01",
    timeline: "Days 1–4",
    title: "Agent Architecture & Tool Design",
    description: "We analyse your target use case, map out the agent's required tools — Code Interpreter, File Search, Function Calling, Azure AI Search grounding — and design the thread lifecycle, state management strategy, and handoff logic.",
    bullets: ["Use-case scoping and success-metric definition", "Tool manifest and function calling schema designed", "Thread and run lifecycle architecture finalised"],
  },
  {
    number: "02",
    timeline: "Days 5–10",
    title: "Agent Build & Tool Integration",
    description: "We provision the Azure AI Agent Service environment, implement the agent definition, wire up all tools via the Agents SDK, connect Azure AI Search for grounded retrieval, and deploy the agent run infrastructure inside your Azure tenant.",
    bullets: ["Agent deployed in Azure AI Foundry project", "Function calling tools and API integrations built", "Azure AI Search grounding and File Search configured"],
  },
  {
    number: "03",
    timeline: "Days 11–14",
    title: "Evaluation, Safety & Handover",
    description: "We run the agent through a structured evaluation suite — tool invocation accuracy, response groundedness, token efficiency, and error-handling coverage — apply content safety filters, and hand over with full observability dashboards and Prompt Flow tracing.",
    bullets: ["Tool calling accuracy and groundedness evaluated", "Content safety and prompt injection guardrails applied", "Observability, tracing, and handover documentation complete"],
  },
]

const features = [
  {
    icon: Bot,
    title: "Stateful Agent Runs",
    desc: "Azure AI Agent Service manages persistent threads — storing conversation history, intermediate tool outputs, and state across multiple turns without you building any session infrastructure. Every run is isolated and auditable.",
  },
  {
    icon: Wrench,
    title: "Built-In Tool Suite",
    desc: "Agents have native access to Code Interpreter (sandboxed Python execution), File Search (vector retrieval over uploaded documents), Function Calling (any external API or internal system), and Azure AI Search grounding for enterprise knowledge.",
  },
  {
    icon: Layers,
    title: "Multi-Agent Orchestration",
    desc: "Wire multiple specialised agents together — a routing agent that dispatches to a coding agent, a document agent, and a data agent — with Azure AI Agent Service managing the inter-agent message passing and shared thread context.",
  },
  {
    icon: Shield,
    title: "Enterprise Security by Default",
    desc: "All agent runs execute within your Azure tenant with Managed Identity authentication, private endpoints, no data leaving your compliance boundary, and Entra ID RBAC controlling who can create or invoke agents.",
  },
  {
    icon: BarChart3,
    title: "Full Observability & Tracing",
    desc: "Every tool call, token consumption, and run step is captured in Azure AI Foundry's tracing dashboard — giving you latency breakdowns, cost attribution per agent run, and the complete reasoning trace for debugging.",
  },
  {
    icon: GitBranch,
    title: "Prompt Flow LLMOps",
    desc: "Deploy agents through Prompt Flow pipelines for production-grade LLMOps — versioned prompt templates, A/B evaluation, CI/CD promotion gates, and automated regression testing before any agent update reaches production.",
  },
]

const forWho = [
  {
    label: "Teams replacing chat with action",
    desc: "Organisations whose AI use cases require the agent to take actions — run code, query APIs, update records, retrieve documents — rather than simply generating text. Azure AI Agent Service makes this production-safe.",
  },
  {
    label: "Multi-step workflow automation",
    desc: "Engineering teams building agents that execute complex multi-step workflows — breaking down a user intent into a sequence of tool calls, evaluating results, and adapting the plan mid-run with full state continuity.",
  },
  {
    label: "Regulated industries needing auditability",
    desc: "Financial services, healthcare, and legal organisations that need every AI action logged, every tool call recorded, and every output traceable to source data — within their own Azure compliance boundary.",
  },
]

export default function AzureAIAgentServicePage() {
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
            <span className="text-foreground">Azure AI Agent Service</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Azure AI Agent Service</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Stateful AI agents that act, not just answer. <span className="text-accent">On Azure.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We design, build, and deploy production AI agents on Azure AI Agent Service — wiring Code Interpreter, Function Calling, File Search, and Azure AI Search grounding into agents that execute multi-step tasks inside your Azure tenant.
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Architecture, build, and evaluate in 14 days.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">The full agent capability stack, production-ready.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Deploy a production AI agent on Azure AI Agent Service — in 14 days.</h2>
            <p className="text-background/60 text-base">Fixed-price engagement. Stateful agents with full tool access, observability, and compliance — inside your Azure tenant.</p>
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

      <AzurePracticeNavigation currentPath="/azure-ai-foundry/services/azure-ai-agent-service" />
    </div>
  )
}
