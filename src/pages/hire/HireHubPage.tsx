'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Eye, Brain, MessageSquare, FileText, Database,
  ArrowRight, Clock, ShieldCheck, Repeat2, Zap, CheckCircle2,
  Users, GitBranch, Bot, Workflow
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

// ── Role cards ───────────────────────────────────────────────────────────────

const roles = [
  {
    slug:     "computer-vision-engineers",
    icon:     Eye,
    title:    "Computer Vision Engineers",
    keyword:  "hire computer vision developer",
    desc:     "Object detection, image classification, video analytics, OCR, medical imaging, and edge AI. Built with YOLO, Detectron2, PyTorch, and OpenCV.",
    tags:     ["Object Detection", "Video Analytics", "OCR", "Edge AI", "Medical Imaging"],
    color:    "from-blue-500/20 to-blue-600/5",
    border:   "hover:border-blue-500/40",
    iconColor:"text-blue-400",
  },
  {
    slug:     "machine-learning-engineers",
    icon:     Brain,
    title:    "Machine Learning Engineers",
    keyword:  "hire machine learning developer",
    desc:     "Predictive models, recommendation systems, NLP pipelines, LLM fine-tuning, time series, and MLOps. From experiment to production.",
    tags:     ["Predictive ML", "Recommendations", "LLM Fine-Tuning", "MLOps", "Time Series"],
    color:    "from-purple-500/20 to-purple-600/5",
    border:   "hover:border-purple-500/40",
    iconColor:"text-purple-400",
  },
  {
    slug:     "llm-engineers",
    icon:     MessageSquare,
    title:    "LLM Engineers",
    keyword:  "hire LLM developer",
    desc:     "RAG systems, LLM fine-tuning, AI agents, prompt engineering, LLM API integration, and LLMOps. GPT-4o, Claude, Llama, Mistral.",
    tags:     ["RAG Systems", "AI Agents", "Fine-Tuning", "LLMOps", "LLM APIs"],
    color:    "from-orange-500/20 to-orange-600/5",
    border:   "hover:border-orange-500/40",
    iconColor:"text-orange-400",
  },
  {
    slug:     "nlp-engineers",
    icon:     FileText,
    title:    "NLP Engineers",
    keyword:  "hire NLP engineer",
    desc:     "Sentiment analysis, NER, text classification, document intelligence, conversational AI, and summarisation. Hugging Face, spaCy, BERT, T5.",
    tags:     ["Sentiment Analysis", "NER", "Text Classification", "Document AI", "Dialogue Systems"],
    color:    "from-emerald-500/20 to-emerald-600/5",
    border:   "hover:border-emerald-500/40",
    iconColor:"text-emerald-400",
  },
  {
    slug:     "data-engineers",
    icon:     Database,
    title:    "Data Engineers",
    keyword:  "hire data engineer",
    desc:     "Data pipelines, warehouses, real-time streaming, ML feature stores, and data quality. dbt, Spark, Kafka, Snowflake, BigQuery.",
    tags:     ["Data Pipelines", "Data Warehouse", "Streaming", "Feature Stores", "dbt"],
    color:    "from-cyan-500/20 to-cyan-600/5",
    border:   "hover:border-cyan-500/40",
    iconColor:"text-cyan-400",
  },
  {
    slug:     "crewai-developers",
    icon:     Users,
    title:    "CrewAI Developers",
    keyword:  "hire crewai developers",
    desc:     "Role-based multi-agent systems, crew orchestration, tool integration, and production CrewAI deployment. Autonomous workflows that collaborate.",
    tags:     ["Multi-Agent", "Crew Orchestration", "Tool Use", "Agent Roles", "Production Deploy"],
    color:    "from-rose-500/20 to-rose-600/5",
    border:   "hover:border-rose-500/40",
    iconColor:"text-rose-400",
  },
  {
    slug:     "langgraph-engineers",
    icon:     GitBranch,
    title:    "LangGraph Engineers",
    keyword:  "hire langgraph engineers",
    desc:     "Stateful agent graphs, advanced RAG pipelines, multi-agent orchestration, human-in-the-loop workflows, and LangSmith observability.",
    tags:     ["Stateful Graphs", "Advanced RAG", "Agent Workflows", "HiTL", "LangSmith"],
    color:    "from-violet-500/20 to-violet-600/5",
    border:   "hover:border-violet-500/40",
    iconColor:"text-violet-400",
  },
  {
    slug:     "autogen-developers",
    icon:     Bot,
    title:    "AutoGen Developers",
    keyword:  "hire autogen developers",
    desc:     "Conversational multi-agent systems, code-executing agents, GroupChat orchestration, and production AutoGen deployment with safety controls.",
    tags:     ["Conversational Agents", "Code Execution", "GroupChat", "Docker Sandbox", "MS AutoGen"],
    color:    "from-amber-500/20 to-amber-600/5",
    border:   "hover:border-amber-500/40",
    iconColor:"text-amber-400",
  },
  {
    slug:     "n8n-automation-experts",
    icon:     Workflow,
    title:    "n8n Automation Experts",
    keyword:  "hire n8n automation experts",
    desc:     "Workflow automation, AI-powered n8n pipelines, API integrations, custom nodes, and self-hosted n8n infrastructure — built for production reliability.",
    tags:     ["Workflow Automation", "AI Pipelines", "Custom Nodes", "Self-Hosted", "API Integration"],
    color:    "from-teal-500/20 to-teal-600/5",
    border:   "hover:border-teal-500/40",
    iconColor:"text-teal-400",
  },
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
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-6">
              Specialist AI Engineers
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Hire a Specialist AI Engineer<br />
              <span className="text-accent">Matched in 48 Hours.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Vetted Tier-1 engineers across computer vision, machine learning, LLMs, NLP, and data engineering. Embedded in your team. Sprint-delivered. Engagement Manager audited.
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

      {/* ── Role Cards ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Specialist</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every role is a dedicated specialist — not a generalist wearing multiple hats. Pick the domain that matches your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, i) => {
              const Icon = role.icon
              return (
                <motion.div
                  key={role.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={`/hire/${role.slug}`}
                    className={`group flex flex-col h-full border border-border rounded-2xl p-6 bg-gradient-to-br ${role.color} ${role.border} transition-all duration-200 hover:shadow-lg`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-background/60 flex items-center justify-center mb-4 border border-border group-hover:border-accent/30 transition-colors`}>
                      <Icon className={`h-6 w-6 ${role.iconColor}`} />
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                      {role.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {role.tags.map(tag => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-background/60 border border-border text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-sm font-semibold text-accent mt-auto">
                      View Engineers <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why Kovil ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-muted/30">
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
                  transition={{ delay: i * 0.07 }}
                  className="border border-border rounded-2xl p-6 bg-background"
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
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From Brief to Engineer in 48 Hours</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The fastest way to get a specialist AI engineer into your team — without the risk of a bad hire.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { n: "01", day: "Day 1",       title: "Submit Your Brief",   desc: "Fill a 5-minute intake form. A Delivery Lead calls you within 24 hours to scope your requirements, tech stack, and timeline." },
              { n: "02", day: "Days 2–3",    title: "Meet Your Shortlist", desc: "We surface 2–3 hand-picked engineers matched to your domain. Review profiles, join intro calls, choose your fit." },
              { n: "03", day: "Days 3–4",    title: "Agree a Sprint Plan", desc: "You and your engineer agree deliverables, milestones, and success criteria before any work begins." },
              { n: "04", day: "Week 1+",     title: "Sprint & Deliver",    desc: "Your engineer works in focused sprints. Your Engagement Manager audits every milestone. You review at each checkpoint." },
              { n: "05", day: "Ongoing",     title: "Scale or Wind Down",  desc: "Add engineers, extend sprints, or wind down — no lock-in. You stay because it's working." },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
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
          <div className="rounded-2xl bg-accent/10 border border-accent/20 p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Specialist You Need?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Talk to a Delivery Lead. We'll scope your project, identify the right engineer profile, and have a shortlist ready within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <HireCTA label="Talk to a Delivery Lead" className="px-8" />
              <Button size="lg" variant="outline" asChild>
                <Link href="/case-studies">See Our Work</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">No commitment. 2-week risk-free trial on all engagements.</p>
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
