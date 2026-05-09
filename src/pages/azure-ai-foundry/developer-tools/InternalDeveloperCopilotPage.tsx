'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Code, GitBranch, Users, Cpu, BarChart3, FileText } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  { title: "Codebase-Aware Code Completion", desc: "Trained on your actual repositories, the copilot suggests completions that match your internal patterns, naming conventions, and architecture — not generic Stack Overflow answers." },
  { title: "Architecture Doc Q&A", desc: "Engineers ask questions about system design, data flows, and component interactions in plain English — and get grounded answers with citations to your actual architecture documents." },
  { title: "Runbook & Incident Response Lookup", desc: "During incidents, the copilot surfaces relevant runbooks, past incident playbooks, and escalation paths instantly — reducing mean time to resolution." },
  { title: "PR Review Assistance", desc: "Flags issues against your internal coding standards, security guidelines, and architectural patterns before code reaches human reviewers." },
  { title: "Internal API Documentation Generation", desc: "Automatically generates OpenAPI documentation from your internal API traffic and codebase — keeping developer docs current without manual effort." },
  { title: "Teams Integration for Async Queries", desc: "Engineers query the copilot directly in Microsoft Teams — getting answers to technical questions without interrupting senior colleagues." },
]

const howItWorks = [
  {
    step: "01",
    title: "Codebase & Documentation Indexing",
    desc: "We index your repositories, architecture docs, runbooks, and API specifications into Azure AI Search — with Entra ID access control so engineers only see what they're authorised to access.",
    bullets: ["GitHub / Azure DevOps repositories indexed", "Confluence, SharePoint, Notion docs ingested", "Entra ID RBAC applied per document source"],
  },
  {
    step: "02",
    title: "Copilot Extension Build",
    desc: "We build the custom GitHub Copilot extension or Teams bot using Semantic Kernel, with RAG retrieval over your indexed knowledge base and Azure OpenAI GPT-4o for generation.",
    bullets: ["Semantic Kernel orchestration with tool plugins", "RAG over internal knowledge base", "Content safety and hallucination guardrails"],
  },
  {
    step: "03",
    title: "VS Code & Teams Deployment",
    desc: "The copilot is deployed as a GitHub Copilot extension in VS Code and a bot in Microsoft Teams — with analytics dashboards showing usage, top queries, and knowledge gaps.",
    bullets: ["VS Code extension deployed to engineering org", "Teams bot live in developer channels", "Usage analytics and knowledge gap reporting"],
  },
]

const metrics = [
  { value: "60%", label: "onboarding time reduction" },
  { value: "3.2x", label: "developer productivity" },
  { value: "40%", label: "fewer Slack interruptions" },
  { value: "Same day", label: "new hire productivity" },
]

const techStack = ["Azure OpenAI GPT-4o", "Azure AI Search", "GitHub Copilot Extension API", "Semantic Kernel", "Azure DevOps", "Microsoft Teams"]

export default function InternalDeveloperCopilotPage() {
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
            <Link href="/azure-ai-foundry/developer-tools" className="hover:text-foreground transition-colors">Developer Tools</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Internal Developer Copilot</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Developer Tools · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            A Copilot trained on your codebase.{" "}
            <span className="text-accent">Not theirs.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Custom GitHub Copilot extension and Teams bot trained on your internal codebase, architecture docs, runbooks, and API specs. Engineers get contextual answers grounded in your actual systems — not generic documentation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {metrics.map(m => (
              <div key={m.label} className="rounded-xl p-4 text-center" style={{ background: `${AZURE}10`, border: `1px solid ${AZURE}25` }}>
                <div className="font-display font-bold text-2xl" style={{ color: AZURE }}>{m.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>
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
      <section className="border-t border-border py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From codebase to deployed copilot in 3 weeks.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-7 overflow-hidden group hover:border-accent/40 transition-all">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
                <span className="font-display font-black text-5xl text-accent/15 leading-none block mb-4">{step.step}</span>
                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                <ul className="space-y-2">
                  {step.bullets.map(b => (
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

      {/* Capabilities */}
      <section className="border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>Capabilities</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What this copilot can do.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/30 transition-colors">
                <div className="h-2 w-2 rounded-full mb-4" style={{ background: AZURE }} />
                <h3 className="font-semibold text-base mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Built With</p>
          <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Azure technology stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map(tech => (
              <span key={tech} className="px-4 py-2 rounded-xl text-sm font-medium border" style={{ borderColor: `${AZURE}30`, background: `${AZURE}08`, color: AZURE }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Give your engineers a copilot that actually knows your systems.</h2>
            <p className="text-background/60 text-base">Fixed-price build. Deployed in 3 weeks. 60% faster onboarding from day one.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
