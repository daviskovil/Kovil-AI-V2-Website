'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Users, Brain, Zap, ShieldCheck, BarChart3, Repeat2,
  Database, Layers, CheckCircle2, ArrowRight, Clock, ChevronDown
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01", timeline: "Day 1",
    title: "Brief Your Needs",
    description: "Fill a 5-minute intake form describing your CrewAI use case — the agents you need, the tools they should call, and your production requirements. A Delivery Lead contacts you within 24 hours to scope the build.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "Use case & stack scoped"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Engineer",
    description: "We surface 2–3 hand-picked CrewAI developers with proven production experience in multi-agent systems. You review profiles, join intro calls, and choose your fit.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your engineer works in focused sprints. An Engagement Manager audits every milestone. You get working, production-grade CrewAI systems — not prototypes.",
    bullets: ["Weekly milestone check-ins", "Engagement Manager quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted CrewAI Developers", desc: "Every engineer passes a rigorous 5-stage vetting — agent frameworks theory, CrewAI system design, tool integration, production deployment, and live delivery simulation." },
  { icon: Repeat2, title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every sprint milestone before it reaches you — agent behaviour, task routing, tool call reliability, and end-to-end workflow testing." },
  { icon: Zap, title: "Sprint-Based Delivery", desc: "Structured weekly sprints with clear deliverables. Not open-ended hours billed to a vague ticket queue. Each sprint ends with a working, reviewable CrewAI system." },
  { icon: Users, title: "Multi-Agent Architecture Depth", desc: "Specialists in role-based agent design, crew orchestration, hierarchical process flows, shared memory, and inter-agent task delegation for complex production workflows." },
  { icon: BarChart3, title: "Production-Ready Systems", desc: "CrewAI systems that run reliably in production — async execution, error handling, retry logic, tool call logging, cost optimisation, and observability baked in." },
  { icon: Brain, title: "Tool & API Integration", desc: "Your agents connect to the tools your business runs on — databases, APIs, search engines, code execution environments, web browsers, and internal services." },
]

const buildItems = [
  { title: "Multi-Agent Crew Pipelines", desc: "End-to-end CrewAI systems where specialised agents collaborate to complete complex tasks — research, analysis, writing, code generation, and decision workflows." },
  { title: "Role-Based Agent Design", desc: "Custom agent roles with precise goals, backstories, and tool access. Each agent optimised for its specific function within the crew." },
  { title: "Tool Integration & Custom Tools", desc: "CrewAI agents connected to your internal APIs, databases, search tools, code interpreters, and external services via custom tool definitions." },
  { title: "Hierarchical Process Flows", desc: "Manager-agent architectures where a planning agent delegates tasks to specialist sub-agents, with result aggregation and validation at each stage." },
  { title: "Async & Long-Running Crews", desc: "Production CrewAI deployments that handle long-running tasks asynchronously — with state persistence, error recovery, and human-in-the-loop checkpoints." },
  { title: "CrewAI Observability & Monitoring", desc: "Full visibility into agent execution — task traces, tool call logs, token usage, latency per agent, and alerting when crews fail or drift from expected behaviour." },
]

const forWho = [
  { title: "Teams Building AI Automation Workflows", desc: "You need multi-agent systems that handle complex, multi-step processes autonomously — research pipelines, content generation crews, data processing workflows." },
  { title: "Product Teams Adding Agentic Features", desc: "You're embedding agent capabilities into your SaaS product and need CrewAI expertise to architect reliable, scalable crew systems that work in production." },
  { title: "Engineering Teams Without Agent Expertise", desc: "Your team is strong on core engineering but lacks deep experience with agentic frameworks. You need a specialist to architect and build the CrewAI layer." },
]

const timeline = [
  { day: "Day 1",     title: "Submit Your Brief",       desc: "Fill a 5-minute intake form. A Delivery Lead calls you within 24 hours to scope your CrewAI requirements — agent roles, tools, workflows, and production environment." },
  { day: "Day 2–3",   title: "Meet Your Shortlist",     desc: "We surface 2–3 CrewAI developers matched to your use case. You review profiles, join intro calls, and choose your fit." },
  { day: "Day 3–4",   title: "Milestone Plan Locked",   desc: "You and your engineer agree a sprint plan — agent architecture, tool integrations, success criteria, and timelines before any build begins." },
  { day: "Week 1+",   title: "Sprint & Deliver",        desc: "Your engineer builds in focused sprints. Your Engagement Manager audits every milestone. You review working CrewAI systems at each checkpoint." },
  { day: "Ongoing",   title: "Scale or Wind Down",      desc: "Add engineers, extend sprints, or wind down — no lock-in. You stay because the agents are delivering, not because you're contracted." },
]

const comparison = [
  { label: "Time to start",       kovil: "24–48 hours",      inhouse: "2–4 months",   agency: "2–4 weeks",    freelancer: "1–2 weeks" },
  { label: "CrewAI expertise",    kovil: "Deep specialist",  inhouse: "Rare to find", agency: "Varies widely", freelancer: "Varies" },
  { label: "Managed delivery",    kovil: "✓ Always",         inhouse: "✗",            agency: "Partial",       freelancer: "✗" },
  { label: "Risk-free trial",     kovil: "✓ 2 weeks",        inhouse: "✗",            agency: "✗",             freelancer: "Rarely" },
  { label: "Production deploy",   kovil: "✓ Included",       inhouse: "Depends",      agency: "Extra cost",    freelancer: "Varies" },
  { label: "IP ownership",        kovil: "100% yours",       inhouse: "100% yours",   agency: "Often shared",  freelancer: "Varies" },
]

const faqs = [
  {
    q: "What is CrewAI and what does a CrewAI developer build?",
    a: "CrewAI is an open-source multi-agent framework built on top of LangChain that enables teams of AI agents to collaborate on complex tasks. Each agent has a defined role, goal, and backstory, and can use tools to interact with external systems. A CrewAI developer designs and builds these agent systems — defining roles, orchestrating task flows, integrating tools, and deploying crews that run reliably in production. Use cases include research pipelines, content workflows, data analysis crews, and automated decision systems.",
  },
  {
    q: "How quickly can I hire a CrewAI developer through Kovil AI?",
    a: "Most clients are matched with a vetted CrewAI specialist within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days, and every engagement includes a 2-week risk-free trial.",
  },
  {
    q: "What tools and frameworks do your CrewAI developers use?",
    a: "Our CrewAI engineers are proficient across CrewAI, LangChain, LangGraph, OpenAI, Anthropic, and open-source models for the LLM layer. For tooling, they integrate web search, code interpreters, databases, REST APIs, and custom tool definitions. For production deployment: FastAPI, Docker, and cloud platforms including AWS, GCP, and Azure.",
  },
  {
    q: "What's the difference between CrewAI and LangGraph?",
    a: "CrewAI focuses on role-based, human-readable agent collaboration — it's ideal for workflows where you want defined agents with specific responsibilities working as a team. LangGraph provides lower-level graph-based control flow for agents, giving you finer-grained control over state and transitions. CrewAI is typically faster to get to a working multi-agent system; LangGraph gives more control for complex branching and stateful workflows. Your engineer will recommend the right framework for your use case.",
  },
  {
    q: "Can CrewAI agents be deployed in production reliably?",
    a: "Yes — but production reliability requires deliberate engineering. Our CrewAI developers implement async execution patterns, error handling and retry logic, state persistence for long-running crews, tool call logging and observability, token cost controls, and human-in-the-loop checkpoints where appropriate. Production CrewAI systems require the same engineering rigour as any distributed system.",
  },
  {
    q: "Who owns the CrewAI agents and code your engineer builds?",
    a: "You do — 100%. All agent definitions, crew configurations, tool integrations, and deployment infrastructure produced during your engagement are fully owned by your company. Kovil AI retains no rights to any work product. This is contractually guaranteed from day one.",
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

export default function CrewAIDevelopersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">CrewAI Developers</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire a CrewAI Developer —<br />
            <span className="text-accent">Matched in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Vetted Tier-1 CrewAI developers embedded into your team. Multi-agent orchestration, role-based agent systems, CrewAI pipelines, tool integration, and production deployment — sprint-delivered, Engagement Manager audited.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire a CrewAI Developer <ArrowRight className="ml-2 h-4 w-4" />
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What Can a CrewAI Developer Build for You?</h2>
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
                  <Users className="h-5 w-5 text-accent" />
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire a CrewAI Developer Through Kovil AI?</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire a CrewAI Developer with Kovil AI?</h2>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire a CrewAI developer?</h3>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What's Included When You Hire a CrewAI Developer Through Kovil AI?</h2>
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
        <h2 className="font-display font-bold text-3xl mb-12">What Should You Expect When Hiring a CrewAI Developer?</h2>
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
        <h2 className="font-display font-bold text-3xl mb-12">How Does Kovil AI Compare to Other Ways to Hire a CrewAI Developer?</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring CrewAI Developers</h2>
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
            { href: "/hire/langgraph-engineers",      label: "Hire LangGraph Engineers",  desc: "Graph-based agent workflows and stateful AI systems" },
            { href: "/hire/llm-engineers",            label: "Hire LLM Engineers",         desc: "RAG, fine-tuning, AI agents, LLMOps" },
            { href: "/engage/managed-ai-engineer",    label: "Managed AI Engineer",        desc: "Embedded AI engineer for any AI task" },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your CrewAI developer?</h2>
            <p className="text-background/60 text-base">Tell us your use case. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire a CrewAI Developer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}
