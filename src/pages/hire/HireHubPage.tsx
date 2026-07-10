'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Eye, Brain, MessageSquare, FileText, Database,
  ArrowRight, Clock, ShieldCheck, Repeat2, Zap, CheckCircle2,
  Users, GitBranch, Bot, Workflow, Terminal, Sparkles, Code2,
  Server, Cloud, Bug, Lock, Boxes, ClipboardList
} from "lucide-react"
import { OnboardingModal } from "../../components/OnboardingModal"
import { Button } from "../../components/ui/button"

// ── CTA Button wrapped in OnboardingModal trigger ────────────────────────────
function HireCTA({ label, size = "lg", className = "" }: { label: string; size?: "lg" | "sm"; className?: string }) {
  return (
    <OnboardingModal defaultGoal="talent">
      <Button size={size} className={`bg-accent hover:bg-accent/90 text-white ${className}`}>
        {label} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </OnboardingModal>
  )
}

// ── Specialist role cards (rich) ─────────────────────────────────────────────

const specialists = [
  {
    slug: "ai-agent-developer", icon: Bot, title: "AI Agent Developers", isNew: true,
    desc: "Autonomous agents, custom tool & API integration, multi-agent orchestration, RAG and memory — production agentic systems, not prototypes.",
    tags: ["Autonomous Agents", "Tool Use", "Multi-Agent", "Evals"],
    chip: "bg-accent/10 text-accent",
  },
  {
    slug: "claude-code-engineer", icon: Terminal, title: "Claude Code Engineers", isNew: true,
    desc: "Engineers fluent in Anthropic's Claude Code toolchain — ship at agentic velocity, run large migrations, build MCP tooling, enable your team.",
    tags: ["Agentic Coding", "MCP Tooling", "Migrations", "Team Enablement"],
    chip: "bg-violet-500/10 text-violet-500",
  },
  {
    slug: "llm-engineers", icon: MessageSquare, title: "LLM Engineers",
    desc: "RAG systems, LLM fine-tuning, prompt engineering, LLM API integration, and LLMOps. Claude, GPT, Llama, and Mistral in production.",
    tags: ["RAG Systems", "Fine-Tuning", "LLMOps", "LLM APIs"],
    chip: "bg-orange-500/10 text-orange-500",
  },
  {
    slug: "machine-learning-engineers", icon: Brain, title: "Machine Learning Engineers",
    desc: "Predictive models, recommendation systems, NLP pipelines, time series, and MLOps. From experiment to reliable production.",
    tags: ["Predictive ML", "Recommendations", "MLOps", "Time Series"],
    chip: "bg-purple-500/10 text-purple-500",
  },
  {
    slug: "computer-vision-engineers", icon: Eye, title: "Computer Vision Engineers",
    desc: "Object detection, image classification, video analytics, OCR, medical imaging, and edge AI. YOLO, Detectron2, PyTorch, OpenCV.",
    tags: ["Object Detection", "Video Analytics", "OCR", "Edge AI"],
    chip: "bg-blue-500/10 text-blue-500",
  },
  {
    slug: "nlp-engineers", icon: FileText, title: "NLP Engineers",
    desc: "Sentiment analysis, NER, text classification, document intelligence, conversational AI, and summarisation. Hugging Face, spaCy, BERT.",
    tags: ["Sentiment", "NER", "Document AI", "Dialogue Systems"],
    chip: "bg-emerald-500/10 text-emerald-500",
  },
  {
    slug: "generative-ai-developer", icon: Sparkles, title: "Generative AI Developers",
    desc: "Custom generative applications — text, image, audio, and code generation, diffusion pipelines, and multimodal AI products built for scale.",
    tags: ["GenAI Apps", "Diffusion", "Multimodal", "Content Gen"],
    chip: "bg-pink-500/10 text-pink-500",
  },
  {
    slug: "data-engineers", icon: Database, title: "Data Engineers",
    desc: "Data pipelines, warehouses, real-time streaming, ML feature stores, and data quality. dbt, Spark, Kafka, Snowflake, BigQuery.",
    tags: ["Pipelines", "Warehousing", "Streaming", "Feature Stores"],
    chip: "bg-cyan-500/10 text-cyan-500",
  },
  {
    slug: "langgraph-engineers", icon: GitBranch, title: "LangGraph Engineers",
    desc: "Stateful agent graphs, advanced RAG, multi-agent orchestration, human-in-the-loop workflows, and LangSmith observability.",
    tags: ["Stateful Graphs", "Advanced RAG", "HITL", "LangSmith"],
    chip: "bg-indigo-500/10 text-indigo-500",
  },
  {
    slug: "crewai-developers", icon: Users, title: "CrewAI Developers",
    desc: "Role-based multi-agent systems, crew orchestration, tool integration, and production CrewAI deployment — agents that collaborate.",
    tags: ["Multi-Agent", "Crew Roles", "Tool Use", "Production"],
    chip: "bg-rose-500/10 text-rose-500",
  },
  {
    slug: "autogen-developers", icon: Boxes, title: "AutoGen Developers",
    desc: "Conversational multi-agent systems, code-executing agents, GroupChat orchestration, and production AutoGen with safety controls.",
    tags: ["Conversational", "Code Execution", "GroupChat", "Sandbox"],
    chip: "bg-amber-500/10 text-amber-500",
  },
  {
    slug: "n8n-automation-experts", icon: Workflow, title: "n8n Automation Experts",
    desc: "Workflow automation, AI-powered n8n pipelines, API integrations, custom nodes, and self-hosted n8n built for production reliability.",
    tags: ["Automation", "AI Pipelines", "Custom Nodes", "Self-Hosted"],
    chip: "bg-teal-500/10 text-teal-500",
  },
  {
    slug: "make-automation-experts", icon: Workflow, title: "Make.com Automation Experts", isNew: true,
    desc: "Custom Make.com scenarios, complex SaaS integrations, webhook routers, error handling, and AI-enabled automation pipelines.",
    tags: ["Make.com", "SaaS Integration", "Webhooks", "No-Code AI"],
    chip: "bg-sky-500/10 text-sky-500",
  },
  {
    slug: "voiceflow-developers", icon: Bot, title: "Voiceflow Developers", isNew: true,
    desc: "Voiceflow conversational agents, custom API and knowledge base integrations, dynamic support routing, and CRM handoffs.",
    tags: ["Voiceflow", "Chatbots", "Voice Agents", "API Handoff"],
    chip: "bg-violet-500/10 text-violet-500",
  },
  {
    slug: "llamaindex-engineers", icon: Database, title: "LlamaIndex Engineers", isNew: true,
    desc: "Advanced RAG pipelines, LLM data ingestion, metadata filtering, hierarchical node parsing, and custom vector search connectors.",
    tags: ["Advanced RAG", "Data Ingestion", "LlamaIndex", "Vector Search"],
    chip: "bg-emerald-500/10 text-emerald-500",
  },
]

// ── Full engineering team (compact) ──────────────────────────────────────────

const engineeringRoles = [
  { href: "/hire/ai-engineer",           icon: Bot,           label: "AI Engineers" },
  { href: "/hire/software-engineer",     icon: Code2,         label: "Software Engineers" },
  { href: "/hire/full-stack-developer",  icon: Boxes,         label: "Full-Stack Developers" },
  { href: "/hire/python-developer",      icon: Code2,         label: "Python Developers" },
  { href: "/hire/react-developer",       icon: Code2,         label: "React Developers" },
  { href: "/hire/node-developer",        icon: Server,        label: "Node.js Developers" },
  { href: "/hire/devops-engineer",       icon: Repeat2,       label: "DevOps Engineers" },
  { href: "/hire/cloud-engineer",        icon: Cloud,         label: "Cloud Engineers" },
  { href: "/hire/qa-engineer",           icon: Bug,           label: "QA Engineers" },
  { href: "/hire/cybersecurity-engineer",icon: Lock,          label: "Cybersecurity Engineers" },
  { href: "/hire/product-manager",       icon: ClipboardList, label: "Product Managers" },
  { href: "/hire-databricks-engineer",   icon: Database,      label: "Databricks Engineers" },
]

// ── Why Kovil ────────────────────────────────────────────────────────────────

const whyItems = [
  { icon: Clock,        title: "Matched in 48 Hours",        desc: "Submit a brief. Meet 2–3 curated engineers. Start your trial within the week. No months-long hiring process." },
  { icon: ShieldCheck,  title: "Tier-1 Vetted Specialists",  desc: "5-stage vetting: theory, coding, system design, domain depth, and live delivery simulation. Top 1% only." },
  { icon: Repeat2,      title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every milestone before it reaches you. Quality guaranteed at every sprint." },
  { icon: Zap,          title: "Sprint-Based Delivery",      desc: "Structured weekly sprints with clear deliverables. Not open-ended hours billed to a ticket queue." },
  { icon: CheckCircle2, title: "2-Week Risk-Free Trial",     desc: "Start working with your engineer risk-free. If the fit isn't right in 2 weeks, you owe nothing." },
  { icon: ShieldCheck,  title: "100% IP Ownership",          desc: "Everything your engineer builds is yours — code, models, data pipelines, documentation. No exceptions." },
]

// ── Component ────────────────────────────────────────────────────────────────

export default function HireHubPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6">
              Specialist AI Engineers
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Hire a Specialist AI Engineer<br />
              <span className="text-accent">Matched in 48 Hours.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Vetted Tier-1 engineers across AI agents, agentic coding, LLMs, machine learning, computer vision, and data. Embedded in your team. Sprint-delivered. Engagement Manager audited.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm">
              {[
                ["< 48h", "engineer match"],
                ["Top 1%", "of applicants vetted"],
                ["100%", "IP ownership"],
                ["2 weeks", "risk-free trial"],
              ].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-accent">{val}</div>
                  <div className="text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HireCTA label="Find My Engineer" className="px-8" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works">See How It Works</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Specialist Cards ────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your AI Specialist</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every role is a dedicated specialist — not a generalist wearing multiple hats. Pick the domain that matches your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialists.map((role, i) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={role.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.06 }}
                >
                  <Link
                    href={`/hire/${role.slug}`}
                    className="group relative flex flex-col h-full rounded-2xl border border-border bg-muted/20 hover:bg-muted/40 hover:border-accent/40 transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${role.chip}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        {role.isNew && (
                          <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">New</span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{role.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{role.desc}</p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {role.tags.map(tag => (
                          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-sm font-semibold text-accent mt-auto pt-1">
                        View Engineers <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Complete the Team ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-muted/20 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Your Engineering Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Beyond AI specialists, hire the full-stack, platform, and product talent to ship — all vetted, all matched in 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {engineeringRoles.map((role, i) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={role.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.05 }}
                >
                  <Link
                    href={role.href}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-background hover:border-accent/40 hover:bg-muted/40 transition-all p-4 h-full"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm font-semibold group-hover:text-accent transition-colors flex-1 leading-tight">{role.label}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why Kovil ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Hire Through Kovil AI</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're not a job board. We're not an agency. We're an embedded engineering partner with standards that most hiring processes never get to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.07 }}
                  className="border border-border rounded-2xl p-6 bg-muted/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-muted/20 border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Brief to Engineer in 48 Hours</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The fastest way to get a specialist AI engineer into your team — without the risk of a bad hire.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { n: "01", day: "Day 1",    title: "Submit Your Brief",   desc: "Fill a 5-minute intake form. A Delivery Lead calls you within 24 hours to scope your requirements, tech stack, and timeline." },
              { n: "02", day: "Days 2–3", title: "Meet Your Shortlist", desc: "We surface 2–3 hand-picked engineers matched to your domain. Review profiles, join intro calls, choose your fit." },
              { n: "03", day: "Days 3–4", title: "Agree a Sprint Plan", desc: "You and your engineer agree deliverables, milestones, and success criteria before any work begins." },
              { n: "04", day: "Week 1+",  title: "Sprint & Deliver",    desc: "Your engineer works in focused sprints. Your Engagement Manager audits every milestone. You review at each checkpoint." },
              { n: "05", day: "Ongoing",  title: "Scale or Wind Down",  desc: "Add engineers, extend sprints, or wind down — no lock-in. You stay because it's working." },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 5) * 0.06 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-bold text-sm">
                    {step.n}
                  </div>
                  {i < 4 && <div className="w-px h-8 bg-border mt-2" />}
                </div>
                <div className="pb-6">
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">{step.day}</div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-foreground text-background p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Specialist You Need?</h2>
            <p className="text-background/60 max-w-xl mx-auto mb-8">
              Book a 30-minute call with a Delivery Lead. We'll scope your project, identify the right engineer profile, and have a shortlist ready within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-full px-8" asChild>
                <Link href="/book-a-call">Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full" asChild>
                <Link href="/case-studies">See Our Work</Link>
              </Button>
            </div>
            <p className="text-xs text-background/40 mt-4">No commitment. 2-week risk-free trial on all engagements.</p>
          </div>
        </div>
      </section>

      {/* ── Internal Links ───────────────────────────────────────────────────── */}
      <section className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4 font-medium">Explore Engagement Models</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/engage/managed-ai-engineer",   label: "Managed AI Engineer" },
              { href: "/engage/outcome-based-project", label: "Outcome-Based Project" },
              { href: "/engage/app-rescue",            label: "AI App Rescue" },
              { href: "/how-it-works",                 label: "How It Works" },
              { href: "/case-studies",                 label: "Case Studies" },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm border border-border rounded-full px-4 py-1.5 text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
