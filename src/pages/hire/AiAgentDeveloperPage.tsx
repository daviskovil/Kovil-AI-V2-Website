'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Bot, CheckCircle2, ArrowRight, Clock, ChevronDown, Workflow,
  Wrench, Network, Database, ShieldCheck, GitBranch, Cpu, Gauge, X, Minus
} from "lucide-react"
import { Button } from "../../components/ui/button"

// ── Data ──────────────────────────────────────────────────────────────────────

const heroStats = [
  { stat: "< 48h",   label: "Time to match" },
  { stat: "Top 1%",  label: "Engineer tier" },
  { stat: "100%",    label: "IP ownership" },
  { stat: "2 weeks", label: "Risk-free trial" },
]

const marketStats = [
  { value: "33%", label: "of enterprise software will include agentic AI by 2028 — up from under 1% in 2024", src: "Gartner" },
  { value: "15%", label: "of day-to-day work decisions will be made autonomously by AI agents by 2028", src: "Gartner" },
  { value: "$47B", label: "projected AI-agents market by 2030, growing ~44% year over year", src: "MarketsandMarkets" },
  { value: "4–6 mo", label: "average time to hire a senior agent engineer through traditional recruiting", src: "Industry avg." },
]

const buildItems = [
  { icon: Workflow, title: "Autonomous Workflows", desc: "Agents that plan, decide, and execute multi-step tasks end to end — triaging tickets, processing documents, running research, or orchestrating back-office operations without a human in every loop." },
  { icon: Wrench,   title: "Custom Tool & API Integration", desc: "Function-calling and tool-use layers that let an agent query your database, hit internal APIs, trigger workflows, and act on real systems — not just chat about them." },
  { icon: Network,  title: "Multi-Agent Orchestration", desc: "Supervisor-and-worker architectures where specialised agents collaborate — a planner, a researcher, a coder, a reviewer — coordinated with shared state and hand-offs." },
  { icon: Database, title: "RAG & Long-Term Memory", desc: "Retrieval pipelines and memory stores that ground agents in your knowledge base, keep context across sessions, and cut hallucination with source-cited answers." },
  { icon: Cpu,      title: "Custom Agentic Architecture", desc: "Bespoke reasoning loops, state machines, and control flow designed for your domain — not a no-code template that breaks the moment your use case gets real." },
  { icon: Gauge,    title: "Evals, Guardrails & Monitoring", desc: "Evaluation harnesses, safety guardrails, cost controls, and production observability so your agent is measurable, reliable, and safe to put in front of customers." },
]

const stack = [
  "LangGraph", "LangChain", "CrewAI", "AutoGen", "OpenAI Agents SDK", "Claude tool use",
  "Anthropic API", "OpenAI API", "Vercel AI SDK", "Pydantic AI", "Pinecone", "Weaviate",
  "pgvector", "Temporal", "FastAPI", "RAGAS", "LangSmith", "LangFuse",
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted Agent Engineers", desc: "Every engineer passes a 5-stage vetting — agent architecture design, tool-use implementation, evaluation methodology, a live production build, and a shipped-portfolio review." },
  { icon: GitBranch,   title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every milestone before it reaches you — checking reasoning reliability, tool safety, eval coverage, and production readiness." },
  { icon: Gauge,       title: "Evaluation-First Delivery",     desc: "We measure agent quality with real eval suites, not vibes. Task success rate, tool-call accuracy, latency, and cost per run — tracked from day one." },
  { icon: Bot,         title: "Full Agentic Depth",            desc: "Single-agent tool use, multi-agent systems, RAG, memory, human-in-the-loop, and autonomous pipelines — across every major framework and model provider." },
  { icon: Database,    title: "Infrastructure Included",       desc: "Your engineer owns the whole stack — vector stores, orchestration, state management, deployment, and monitoring. Not just a prompt in a notebook." },
  { icon: ShieldCheck, title: "Production, Not Demos",         desc: "We build agents that survive real traffic, real edge cases, and real cost budgets — deployed, monitored, and maintained. Not a flashy proof-of-concept." },
]

const steps = [
  { number: "01", timeline: "Day 1", title: "Brief Your Use Case", description: "Tell us what you want the agent to do, your stack, data sources, and constraints. A Delivery Lead scopes it with you within 24 hours.", bullets: ["5-minute async intake", "Delivery Lead within 24h", "Use case & stack matched"] },
  { number: "02", timeline: "Days 2–3", title: "Meet Your Engineer", description: "We surface 2–3 vetted agent engineers with proven, shipped agentic systems in your domain. You review, interview, and choose.", bullets: ["Curated match, not a marketplace", "Live intro call included", "Milestone plan agreed upfront"] },
  { number: "03", timeline: "Week 1+", title: "Ship & Iterate", description: "Your engineer builds in focused sprints against an eval suite. An Engagement Manager audits every milestone. You get a working agent — deployed, measured, maintained.", bullets: ["Weekly milestone check-ins", "Eval-gated quality audits", "Two-week risk-free trial"] },
]

const forWho = [
  { title: "CTOs & VPs of Engineering", desc: "You have budget and a roadmap, but hiring senior agent talent takes months. Get a vetted engineer embedded in 48 hours, delivering against milestones — not a job req sitting open for a quarter." },
  { title: "Product Founders", desc: "Your product's differentiation is an AI agent, and it has to actually work. Skip the risky freelancer lottery and ship a production agent with managed delivery and a risk-free trial." },
  { title: "Teams Rescuing a Stalled Agent", desc: "You have a proof-of-concept that hallucinates, costs too much, or won't scale. Our engineers specialise in taking agents from demo to reliable production." },
]

const timeline = [
  { day: "Day 1",   title: "Submit Your Brief", desc: "Describe the agent's job, data sources, tools it needs to call, and success criteria. A Delivery Lead calls within 24 hours to scope." },
  { day: "Day 2–3", title: "Meet Your Shortlist", desc: "Review 2–3 agent engineers matched to your domain and stack. Interview them. Choose your fit — no obligation." },
  { day: "Day 3–4", title: "Eval Plan Locked", desc: "Before any build, you agree the success metrics — task success rate, tool-call accuracy, latency, and cost budget — so quality is measurable." },
  { day: "Week 1+", title: "Sprint & Ship", desc: "Your engineer builds against the eval suite in weekly sprints. Your Engagement Manager audits every checkpoint. You review at each milestone." },
  { day: "Ongoing", title: "Scale or Wind Down", desc: "Add engineers, extend sprints, or wind down — no lock-in. You stay because the agent is working, not because you're contracted." },
]

const comparison = [
  { label: "Time to start",         kovil: "24–48 hours",  fulltime: "4–6 months", agency: "3–6 weeks",  freelancer: "1–2 weeks" },
  { label: "Agentic specialisation",kovil: "Deep, shipped",fulltime: "Rare, costly",agency: "Generalist", freelancer: "Hit or miss" },
  { label: "Evals & guardrails",    kovil: "yes",          fulltime: "maybe",       agency: "partial",    freelancer: "no" },
  { label: "Managed delivery",      kovil: "yes",          fulltime: "n/a",         agency: "partial",    freelancer: "no" },
  { label: "Risk-free trial",       kovil: "yes",          fulltime: "no",          agency: "no",         freelancer: "rare" },
  { label: "Production deployment",  kovil: "yes",          fulltime: "yes",         agency: "extra cost", freelancer: "rare" },
  { label: "IP ownership",          kovil: "100% yours",   fulltime: "100% yours",  agency: "often shared",freelancer: "varies" },
]

const faqs = [
  { q: "What does an AI agent developer do?", a: "An AI agent developer designs and builds software agents that can reason, use tools, and act autonomously to complete tasks. Unlike a standard chatbot that only replies with text, an agent can plan a multi-step task, call APIs and tools, query databases, retrieve knowledge, remember context across steps, and take real actions in your systems. The role spans agent architecture (reasoning loops, state, control flow), tool and function-calling integration, retrieval and memory, multi-agent orchestration, evaluation, guardrails, and production deployment." },
  { q: "How much does it cost to hire an AI agent developer?", a: "Rates vary by seniority and engagement model. Hiring a senior agent engineer full-time in the US typically costs $180,000–$260,000 in base salary plus recruiting time and equity. Freelance agent developers on marketplaces range from $80–$200+ per hour with highly variable quality. Kovil AI places a vetted, Engagement-Manager-audited agent engineer on a fixed monthly or milestone basis — usually a fraction of a full-time hire's fully-loaded cost, with no recruiting delay, a 2-week risk-free trial, and no lock-in. Tell us your use case and we'll give you a clear number." },
  { q: "How quickly can I hire an AI agent developer through Kovil AI?", a: "Most clients are matched with a vetted agent engineer within 24–48 hours of submitting their brief, with work starting on an agreed milestone plan in 3–4 days. Compare that to 4–6 months for a traditional senior hire. You also get a 2-week risk-free trial to validate fit and output before committing." },
  { q: "What is the difference between an AI agent and a chatbot?", a: "A chatbot responds to messages with generated text. An AI agent is goal-directed: it can break a task into steps, decide what to do next, call external tools and APIs, retrieve and reason over data, keep state across steps, and take actions in the real world — then check its own work. A chatbot tells you the weather; an agent books the flight, updates the CRM, and emails the itinerary. Building reliable agents requires skills a typical chatbot developer doesn't have: orchestration, tool safety, evaluation, and cost control." },
  { q: "Which frameworks and models do your agent engineers use?", a: "Our engineers are fluent across the modern agent stack: LangGraph, LangChain, CrewAI, AutoGen, the OpenAI Agents SDK, Pydantic AI, and the Vercel AI SDK for orchestration; Anthropic's Claude and OpenAI's models for reasoning and tool use; Pinecone, Weaviate, and pgvector for retrieval; and LangSmith, LangFuse, and RAGAS for evaluation and observability. We choose the stack that fits your use case and constraints — not a one-size-fits-all template." },
  { q: "Can you build multi-agent systems, not just a single agent?", a: "Yes. Multi-agent orchestration is a core capability. We build supervisor-and-worker architectures where specialised agents collaborate — for example a planner that decomposes a task, a researcher that gathers information, a builder that executes, and a reviewer that verifies — coordinated with shared state, message passing, and controlled hand-offs. We design multi-agent systems only where they genuinely outperform a single well-built agent, because more agents also means more cost and more failure modes." },
  { q: "How do you make sure the agent is reliable and doesn't hallucinate?", a: "Reliability is engineered, not hoped for. We ground agents in your data with retrieval and source citation, constrain tool use with validation and guardrails, and — critically — measure quality with real evaluation suites: task success rate, tool-call accuracy, faithfulness, latency, and cost per run. We add human-in-the-loop checkpoints for high-stakes actions and production monitoring to catch regressions. Evaluation-first delivery is what separates a demo that impresses from an agent you can safely put in front of customers." },
  { q: "Do I own the code and IP the agent developer produces?", a: "Yes, 100%. All code, prompts, agent architectures, eval suites, pipelines, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no carve-outs, no shared IP, and no lock-in to proprietary tooling." },
]

// ── Component ───────────────────────────────────────────────────────────────

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden bg-background">
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

function Cell({ value }: { value: string }) {
  if (value === "yes") return <span className="inline-flex items-center gap-1.5 font-semibold text-accent"><CheckCircle2 className="h-4 w-4" />Yes</span>
  if (value === "no")  return <span className="inline-flex items-center gap-1.5 text-muted-foreground/70"><X className="h-4 w-4" />No</span>
  if (value === "partial" || value === "maybe" || value === "rare")
    return <span className="inline-flex items-center gap-1.5 text-muted-foreground capitalize"><Minus className="h-4 w-4" />{value}</span>
  return <span className="text-muted-foreground">{value}</span>
}

export default function AiAgentDeveloperPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/hire" className="hover:text-accent transition-colors">Hire AI Engineers</Link>
          <span>/</span>
          <span className="text-foreground">AI Agent Developers</span>
        </nav>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Hire AI Agent Developers</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire AI Agent Developers —<br />
            <span className="text-accent">Vetted, Senior, Shipping in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Elite engineers who build autonomous agents, custom tool integrations, multi-agent systems, and production agentic architectures — embedded in your team, delivering against real eval suites, audited at every milestone.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link href="/book-a-call">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">Two-week risk-free trial. No lock-in. 100% IP yours.</p>
          </div>
        </div>

        {/* Hero stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {heroStats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market intent band */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Now</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10 max-w-3xl">Agentic AI is moving from experiment to core infrastructure — and the talent is scarce.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((s) => (
              <div key={s.label} className="border-t-2 border-accent/40 pt-4">
                <p className="font-display font-black text-4xl text-accent mb-2">{s.value}</p>
                <p className="text-sm text-background/70 leading-relaxed">{s.label}</p>
                <p className="text-xs text-background/40 mt-2">{s.src}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What they build */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What They Build</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">What Can an AI Agent Developer Build for You?</h2>
        <p className="text-muted-foreground max-w-2xl mb-10">From a single tool-using agent to a fleet of coordinated ones — production systems, not prototypes.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildItems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-muted/20 p-6 hover:border-accent/40 transition-colors"
              >
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Under the Hood</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">The Anatomy of a Production AI Agent</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">This is what your engineer actually builds — a reasoning loop wired to tools, memory, and guardrails, measured by evals and watched in production.</p>
          <div className="rounded-2xl border border-border bg-background p-6 md:p-10 overflow-x-auto">
            <svg viewBox="0 0 900 420" className="w-full min-w-[720px]" role="img" aria-label="Diagram of a production AI agent: input flows into a reasoning loop connected to tools, retrieval memory, and guardrails, producing an action, with evaluations and monitoring across the system.">
              <defs>
                <marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#FF4F00" /></marker>
              </defs>
              {/* Input */}
              <rect x="20" y="180" width="130" height="60" rx="12" fill="#FF4F00" opacity="0.1" stroke="#FF4F00" strokeWidth="1.5" />
              <text x="85" y="205" textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor">User / Event</text>
              <text x="85" y="224" textAnchor="middle" fontSize="12" fill="#8A8A8A">the goal</text>
              {/* Reasoning loop */}
              <rect x="330" y="150" width="240" height="120" rx="16" fill="#FF4F00" opacity="0.08" stroke="#FF4F00" strokeWidth="2" />
              <text x="450" y="185" textAnchor="middle" fontSize="17" fontWeight="800" fill="currentColor">Reasoning Loop</text>
              <text x="450" y="210" textAnchor="middle" fontSize="12.5" fill="#8A8A8A">plan → act → observe → reflect</text>
              <text x="450" y="234" textAnchor="middle" fontSize="12.5" fill="#8A8A8A">LLM + control flow + state</text>
              {/* Tools */}
              <rect x="690" y="40" width="190" height="66" rx="12" fill="currentColor" opacity="0.04" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
              <text x="785" y="68" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Tools &amp; APIs</text>
              <text x="785" y="87" textAnchor="middle" fontSize="11.5" fill="#8A8A8A">DB · CRM · code · web</text>
              {/* Memory */}
              <rect x="690" y="177" width="190" height="66" rx="12" fill="currentColor" opacity="0.04" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
              <text x="785" y="205" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Retrieval + Memory</text>
              <text x="785" y="224" textAnchor="middle" fontSize="11.5" fill="#8A8A8A">RAG · vector store</text>
              {/* Guardrails */}
              <rect x="690" y="314" width="190" height="66" rx="12" fill="currentColor" opacity="0.04" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
              <text x="785" y="342" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Guardrails</text>
              <text x="785" y="361" textAnchor="middle" fontSize="11.5" fill="#8A8A8A">validation · limits · HITL</text>
              {/* Output */}
              <rect x="330" y="330" width="240" height="56" rx="12" fill="#FF4F00" opacity="0.1" stroke="#FF4F00" strokeWidth="1.5" />
              <text x="450" y="363" textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor">Action + Cited Result</text>
              {/* Eval band */}
              <rect x="20" y="40" width="130" height="66" rx="12" fill="currentColor" opacity="0.04" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
              <text x="85" y="68" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Evals</text>
              <text x="85" y="87" textAnchor="middle" fontSize="11.5" fill="#8A8A8A">success · cost</text>
              <rect x="20" y="314" width="130" height="66" rx="12" fill="currentColor" opacity="0.04" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
              <text x="85" y="342" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Monitoring</text>
              <text x="85" y="361" textAnchor="middle" fontSize="11.5" fill="#8A8A8A">traces · alerts</text>
              {/* Arrows */}
              <line x1="150" y1="210" x2="326" y2="210" stroke="#FF4F00" strokeWidth="2" markerEnd="url(#arr)" />
              <line x1="570" y1="185" x2="686" y2="80" stroke="#FF4F00" strokeWidth="1.6" markerEnd="url(#arr)" />
              <line x1="686" y1="90" x2="570" y2="200" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" markerEnd="url(#arr)" />
              <line x1="570" y1="210" x2="686" y2="210" stroke="#FF4F00" strokeWidth="1.6" markerEnd="url(#arr)" />
              <line x1="686" y1="228" x2="572" y2="230" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.2" markerEnd="url(#arr)" />
              <line x1="570" y1="235" x2="686" y2="340" stroke="#FF4F00" strokeWidth="1.6" markerEnd="url(#arr)" />
              <line x1="450" y1="270" x2="450" y2="326" stroke="#FF4F00" strokeWidth="2" markerEnd="url(#arr)" />
            </svg>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">The Stack</p>
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Frameworks &amp; Tools Our Agent Engineers Ship With</h2>
        <div className="flex flex-wrap gap-2.5">
          {stack.map((t) => (
            <span key={t} className="text-sm font-medium bg-muted/40 border border-border px-4 py-2 rounded-full text-foreground/80">{t}</span>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It's For</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire an AI Agent Developer Through Kovil AI?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {forWho.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-background p-7">
                <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire an AI Agent Developer with Kovil AI?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:border-accent/40 transition-all">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-black text-4xl text-accent/20 leading-none">{step.number}</span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground bg-muted px-2.5 py-1 rounded-full"><Clock className="h-3 w-3" />{step.timeline}</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>
              <ul className="space-y-2">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mid CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-4">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire an AI agent developer?</h3>
            <p className="text-sm text-muted-foreground">Tell us your use case on a 30-minute call. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <Link href="/book-a-call">
            <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0">Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* What's included */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What's Included</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What You Get When You Hire an AI Agent Developer Through Kovil AI</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-2xl border border-border bg-muted/20 p-6">
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4"><Icon className="h-5 w-5 text-accent" /></div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Kovil AI vs. Other Ways to Hire an AI Agent Developer</h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground w-44"></th>
                  <th className="text-left py-5 px-6"><span className="font-display font-bold text-accent text-base">Kovil AI</span></th>
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Full-Time Hire</th>
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Dev Agency</th>
                  <th className="text-left py-5 px-6 font-semibold text-muted-foreground">Freelancer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparison.map((row) => (
                  <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 text-muted-foreground font-medium">{row.label}</td>
                    <td className="py-4 px-6 bg-accent/[0.03]"><Cell value={row.kovil} /></td>
                    <td className="py-4 px-6"><Cell value={row.fulltime} /></td>
                    <td className="py-4 px-6"><Cell value={row.agency} /></td>
                    <td className="py-4 px-6"><Cell value={row.freelancer} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">From Brief to Shipped Agent — What the First Weeks Look Like</h2>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-[136px] flex-col items-end gap-1 pt-1 hidden md:flex">
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

      {/* FAQ */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring AI Agent Developers</h2>
          <div className="max-w-3xl"><FAQ items={faqs} /></div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/hire/claude-code-engineer", label: "Hire Claude Code Engineers", desc: "Engineers fluent in Anthropic's agentic toolchain" },
            { href: "/hire/langgraph-engineers", label: "Hire LangGraph Engineers", desc: "Stateful multi-agent orchestration specialists" },
            { href: "/hire/llm-engineers", label: "Hire LLM Engineers", desc: "RAG, fine-tuning, and LLM app development" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="rounded-xl border border-border p-5 hover:border-accent/40 hover:bg-muted/20 transition-all group">
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your AI agent developer?</h2>
            <p className="text-background/60 text-base">Book a 30-minute call. Matched in 48 hours. 2-week risk-free trial. 100% IP yours.</p>
          </div>
          <Link href="/book-a-call">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
