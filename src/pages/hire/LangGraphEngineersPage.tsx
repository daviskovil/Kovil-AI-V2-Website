'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  GitBranch, Brain, Zap, ShieldCheck, BarChart3, Repeat2,
  Database, Layers, CheckCircle2, ArrowRight, Clock, ChevronDown
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01", timeline: "Day 1",
    title: "Brief Your Needs",
    description: "Fill a 5-minute intake form describing your LangGraph use case — the graph structure you need, state requirements, agent roles, and production environment. A Delivery Lead contacts you within 24 hours.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "Graph architecture scoped upfront"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Engineer",
    description: "We surface 2–3 hand-picked LangGraph engineers with proven production experience in stateful agent graphs and complex multi-agent systems. Review profiles, join intro calls, choose your fit.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your engineer works in focused sprints. An Engagement Manager audits every milestone. You get working, production-grade LangGraph systems — not demos.",
    bullets: ["Weekly milestone check-ins", "Engagement Manager quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted LangGraph Engineers", desc: "Every engineer passes a rigorous 5-stage vetting — agent graph theory, LangGraph state management, multi-agent design, production deployment, and live delivery simulation." },
  { icon: Repeat2, title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every sprint milestone — graph correctness, state transitions, edge case handling, and end-to-end workflow reliability before it reaches you." },
  { icon: Zap, title: "Sprint-Based Delivery", desc: "Structured weekly sprints with clear deliverables. Each sprint ends with a working, reviewable LangGraph system — not open-ended hours on a vague ticket." },
  { icon: GitBranch, title: "Graph Architecture Depth", desc: "Specialists in state graph design, conditional edges, parallel node execution, subgraph composition, persistence layers, and human-in-the-loop interrupt patterns." },
  { icon: BarChart3, title: "Production-Ready Deployments", desc: "LangGraph systems built for production — async execution, checkpointing, thread-level persistence, streaming responses, observability, and LangSmith tracing." },
  { icon: Brain, title: "RAG & Agent Integration", desc: "LangGraph engineers who combine stateful graphs with RAG pipelines, tool-calling agents, memory systems, and external API integrations for complete production applications." },
]

const buildItems = [
  { title: "Stateful Agent Graph Systems", desc: "Complex agent workflows where state persists across steps — enabling multi-turn reasoning, backtracking, conditional branching, and long-running autonomous processes." },
  { title: "RAG Pipelines with LangGraph", desc: "Retrieval-augmented generation systems built as LangGraph workflows — with document routing, query rewriting, context grading, hallucination checking, and re-retrieval loops." },
  { title: "Multi-Agent Graph Orchestration", desc: "Supervisor-agent architectures where a coordinator graph delegates to specialist sub-agents, aggregates results, and handles failures gracefully." },
  { title: "Human-in-the-Loop Workflows", desc: "LangGraph systems with human interrupt nodes — approval gates, review checkpoints, and override capabilities that keep humans in control of critical decisions." },
  { title: "LangGraph + LangSmith Observability", desc: "Full tracing, debugging, and evaluation pipelines using LangSmith — with run tracking, dataset evaluation, and regression testing for production agent systems." },
  { title: "Streaming & Real-Time Agent UIs", desc: "LangGraph backends that stream intermediate agent steps, tool calls, and partial responses to frontends — enabling responsive, transparent AI applications." },
]

const forWho = [
  { title: "Teams Building Complex Agent Workflows", desc: "You need stateful, multi-step agent systems where control flow matters — routing, branching, looping, and human checkpoints — and simpler frameworks don't give you enough control." },
  { title: "Teams Scaling RAG Beyond Basic Chains", desc: "You've built a basic RAG system but need more sophisticated retrieval patterns — query routing, adaptive retrieval, self-correction loops, and multi-source orchestration." },
  { title: "Engineering Teams Adopting Agentic AI", desc: "Your team is strong on core engineering but needs a LangGraph specialist to architect the agent layer — graph design, state management, and production deployment." },
]

const timeline = [
  { day: "Day 1",    title: "Submit Your Brief",     desc: "Fill a 5-minute intake form. A Delivery Lead calls within 24 hours to scope your LangGraph requirements — graph structure, state design, agent roles, and production environment." },
  { day: "Day 2–3",  title: "Meet Your Shortlist",   desc: "We surface 2–3 LangGraph engineers matched to your use case. Review profiles, join intro calls, choose your fit." },
  { day: "Day 3–4",  title: "Milestone Plan Locked", desc: "You and your engineer agree a sprint plan — graph architecture, node definitions, success criteria, and timelines before any build begins." },
  { day: "Week 1+",  title: "Sprint & Deliver",      desc: "Your engineer builds in focused sprints. Your Engagement Manager audits every milestone. You review working LangGraph systems at each checkpoint." },
  { day: "Ongoing",  title: "Scale or Wind Down",    desc: "Add engineers, extend sprints, or wind down — no lock-in. You stay because the graphs are delivering, not because you're contracted." },
]

const comparison = [
  { label: "Time to start",       kovil: "24–48 hours",    inhouse: "2–4 months",   agency: "2–4 weeks",    freelancer: "1–2 weeks" },
  { label: "LangGraph expertise", kovil: "Deep specialist", inhouse: "Rare to find", agency: "Varies widely", freelancer: "Varies" },
  { label: "Managed delivery",    kovil: "✓ Always",        inhouse: "✗",            agency: "Partial",       freelancer: "✗" },
  { label: "Risk-free trial",     kovil: "✓ 2 weeks",       inhouse: "✗",            agency: "✗",             freelancer: "Rarely" },
  { label: "Production deploy",   kovil: "✓ Included",      inhouse: "Depends",      agency: "Extra cost",    freelancer: "Varies" },
  { label: "IP ownership",        kovil: "100% yours",      inhouse: "100% yours",   agency: "Often shared",  freelancer: "Varies" },
]

const faqs = [
  {
    q: "What is LangGraph and what does a LangGraph engineer build?",
    a: "LangGraph is a library built on LangChain for building stateful, multi-actor agent applications as directed graphs. Unlike linear chains, LangGraph lets you define complex control flows — conditional branching, looping, parallel execution, and human-in-the-loop interrupts. A LangGraph engineer designs and implements these graph-based agent systems: defining nodes (processing steps), edges (routing logic), state schemas, and persistence layers. Common applications include complex RAG pipelines, autonomous research agents, multi-agent orchestration systems, and production AI workflows.",
  },
  {
    q: "How quickly can I hire a LangGraph engineer through Kovil AI?",
    a: "Most clients are matched with a vetted LangGraph specialist within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days, and every engagement includes a 2-week risk-free trial.",
  },
  {
    q: "What is the difference between LangGraph and LangChain?",
    a: "LangChain provides the building blocks — LLM wrappers, prompt templates, tool definitions, and simple chains. LangGraph builds on top of LangChain to add stateful graph execution: you define nodes and edges rather than linear sequences, enabling conditional branching, looping, parallel execution, and persistent state across steps. LangGraph is the right choice when your AI workflow has complex control flow that a simple chain can't express.",
  },
  {
    q: "What's the difference between LangGraph and CrewAI?",
    a: "LangGraph gives you low-level control over agent state machines — you define graph nodes, edges, and transitions explicitly. This makes it ideal for complex, branching workflows where control flow precision matters. CrewAI abstracts over this with role-based agent collaboration — easier to get started with for straightforward multi-agent tasks. LangGraph is typically chosen when you need fine-grained state management, custom routing logic, or production reliability at scale.",
  },
  {
    q: "Can LangGraph be used for production RAG systems?",
    a: "Yes — LangGraph is increasingly the preferred framework for production RAG because it enables advanced retrieval patterns that simple chains cannot express: query routing, adaptive retrieval, document grading, hallucination detection with re-retrieval, and multi-source orchestration. Our LangGraph engineers build RAG systems as stateful graphs with full observability via LangSmith.",
  },
  {
    q: "Who owns the LangGraph systems and code your engineer builds?",
    a: "You do — 100%. All graph definitions, state schemas, node implementations, and deployment infrastructure produced during your engagement are fully owned by your company. Kovil AI retains no rights to any work product. This is contractually guaranteed from day one.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-base pr-4">{item.q}</span>
            <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function LangGraphEngineersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">LangGraph Engineers</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire a LangGraph Engineer —<br />
            <span className="text-accent">Matched in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Vetted Tier-1 LangGraph engineers embedded into your team. Stateful agent graphs, RAG pipelines, multi-agent orchestration, human-in-the-loop workflows, and production LangGraph deployment — sprint-delivered, Engagement Manager audited.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire a LangGraph Engineer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="text-sm text-muted-foreground">Two-week risk-free trial. No lock-in.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { stat: "< 48h",   label: "Time to match" },
            { stat: "Top 1%",  label: "Engineer tier" },
            { stat: "100%",    label: "IP ownership" },
            { stat: "2 weeks", label: "Risk-free trial" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What They Build */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What They Build</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What Can a LangGraph Engineer Build for You?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <GitBranch className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It's For</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire a LangGraph Developer Through Kovil AI?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6"
            >
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Layers className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire a LangGraph Engineer with Kovil AI?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all"
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
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire a LangGraph engineer?</h3>
            <p className="text-sm text-muted-foreground">Tell us your use case. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0">
              Start Hiring <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What's Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What's Included When You Hire a LangGraph Developer Through Kovil AI?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => {
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
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">What Should You Expect When Hiring a LangGraph Engineer?</h2>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-[136px] flex flex-col items-end gap-1 pt-1 hidden md:flex">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent bg-accent/10 px-2.5 py-1 rounded-full">{item.day}</span>
                </div>
                <div className="shrink-0 h-3 w-3 rounded-full bg-accent mt-2 hidden md:block ring-4 ring-background z-10" />
                <div className="flex-1 bg-muted/20 border border-border rounded-xl p-5 hover:border-accent/30 transition-colors">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent mb-1 block md:hidden">{item.day}</span>
                  <h3 className="font-display font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
        <h2 className="font-display font-bold text-3xl mb-12">How Does Kovil AI Compare to Other Ways to Hire a LangGraph Developer?</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground w-40"></th>
                <th className="text-left py-4 px-6 font-bold text-accent">Kovil AI</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">In-House Hire</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Big Agency</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Freelancer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparison.map((row) => (
                <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 text-muted-foreground font-medium">{row.label}</td>
                  <td className="py-4 px-6 font-semibold text-foreground">{row.kovil}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.inhouse}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.agency}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.freelancer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring LangGraph Engineers</h2>
          <div className="max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/hire/crewai-developers",       label: "Hire CrewAI Developers",  desc: "Multi-agent orchestration and role-based agent systems" },
            { href: "/hire/llm-engineers",            label: "Hire LLM Engineers",       desc: "RAG, fine-tuning, AI agents, LLMOps" },
            { href: "/engage/managed-ai-engineer",    label: "Managed AI Engineer",      desc: "Embedded AI engineer for any AI task" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-border p-5 hover:border-accent/40 hover:bg-muted/20 transition-all group"
            >
              <p className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors">{link.label}</p>
              <p className="text-xs text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your LangGraph engineer?</h2>
            <p className="text-background/60 text-base">Tell us your use case. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire a LangGraph Engineer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}
