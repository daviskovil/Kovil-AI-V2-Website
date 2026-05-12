'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Code2, GitBranch, BookOpen, Search, Zap, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const techStack = [
  "Gemini 2.0 Flash",
  "Vertex AI Search",
  "Code Gemma",
  "Vertex AI Agent Builder",
  "Cloud Run",
  "VS Code Extension API",
]

const problems = [
  {
    title: "Developers spend hours navigating unfamiliar codebase",
    description: "New engineers and cross-team contributors lose 30–40% of their time searching for the right functions, understanding patterns, and decoding undocumented legacy code — a massive drag on velocity.",
  },
  {
    title: "Internal knowledge is locked in wikis nobody reads",
    description: "Architecture decisions, runbooks, and API documentation are spread across Confluence, Notion, GitHub, and email threads — impossible to surface at the moment a developer needs them.",
  },
  {
    title: "Boilerplate and repetitive code slow every sprint",
    description: "Scaffolding new services, writing standard error handling, generating unit tests, and producing API clients consumes engineering hours that should be spent on product logic.",
  },
]

const capabilities = [
  {
    icon: Search,
    title: "Codebase Semantic Search",
    description: "Gemini-powered search over your entire repository — ask questions about how a feature works, find the function that handles a specific task, or locate all usages of an internal API in plain English.",
  },
  {
    icon: Code2,
    title: "Context-Aware Code Completion",
    description: "Code completions that understand your internal libraries, naming conventions, and architectural patterns — not just generic suggestions based on general training data.",
  },
  {
    icon: BookOpen,
    title: "Runbook & Architecture Q&A",
    description: "Ask the copilot about deployment procedures, incident response runbooks, and architectural decisions — it retrieves the relevant documentation and explains it in context.",
  },
  {
    icon: GitBranch,
    title: "Unit Test Generation",
    description: "Generates unit tests for your functions based on your existing test patterns — covering happy paths, edge cases, and error conditions, written in your test framework of choice.",
  },
  {
    icon: Zap,
    title: "Service Scaffolding",
    description: "Generate new service stubs, API routes, repository patterns, and integration boilerplate that follow your internal standards — reducing service creation from hours to minutes.",
  },
]

const metrics = [
  { value: "38%", label: "Reduction in time spent on codebase navigation" },
  { value: "2x", label: "Faster onboarding for new engineers" },
  { value: "45%", label: "Reduction in boilerplate and scaffolding time" },
]

const faqs = [
  {
    q: "Does code or codebase data leave our GCP environment?",
    a: "No. The entire pipeline runs within your Google Cloud project under VPC Service Controls: repositories are indexed in Vertex AI Search within your VPC, Gemini inference runs on Vertex AI within your IAM perimeter, and no code or queries are used for Google model training. This is a contractually isolated, enterprise-grade environment — fundamentally different from consumer coding tools.",
  },
  {
    q: "How do you train the copilot on our specific codebase?",
    a: "We build a RAG pipeline over your codebase using Vertex AI Search: repositories are indexed at the function and file level with semantic embeddings. When a developer queries, the agent retrieves the most relevant internal code context, architecture docs, and runbook sections, then passes them to Gemini as grounding context. The copilot knows your patterns without fine-tuning, and stays up to date as your codebase evolves.",
  },
  {
    q: "What IDEs does the copilot integrate with?",
    a: "We integrate as a VS Code extension, JetBrains plugin (IntelliJ, PyCharm, WebStorm), or via a REST API consumable by any IDE or developer portal. For Backstage or custom developer portals, we provide a chat widget component. All channels share the same Vertex AI backend.",
  },
  {
    q: "How long does deployment take?",
    a: "A production-ready internal developer copilot with codebase indexing, Gemini-grounded Q&A, IDE plugin, and usage analytics typically takes 3–4 weeks from scoping to go-live. The primary variable is repository size and the number of documentation sources to index.",
  },
]

export default function CodeGenerationAgentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai" className="hover:text-foreground transition-colors">Vertex AI</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai/developer-tools" className="hover:text-foreground transition-colors">Developer Tools</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">Code Generation Agent</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_BLUE, color: G_BLUE }}>
            Developer Tools
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Code Generation Agent
            <span className="block" style={{ color: G_BLUE }}>Internal Developer Copilot on GCP</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Internal developer copilot powered by Gemini Code on Vertex AI — trained on your codebase, architecture docs, and runbooks, deployed in your IDE and developer portals. Codebase-aware code completion, Q&A, test generation, and service scaffolding — all within your GCP environment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={openCalendly} size="lg" style={{ backgroundColor: G_BLUE }} className="text-white hover:opacity-90">
              Build This for Your Engineering Team <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/vertex-ai">Explore Vertex AI Services</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* What We Build */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4">What We Build</h2>
          <p className="text-muted-foreground max-w-3xl mb-6">
            We implement a production-grade internal developer copilot using Gemini Code and Vertex AI Search — indexed over your repositories, architecture decision records, runbooks, and API documentation. Developers get codebase-aware assistance in their IDE and developer portal without sending any code outside your GCP environment.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: G_BLUE, color: G_BLUE, backgroundColor: `${G_BLUE}10` }}>
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* The Problem It Solves */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">The Problem It Solves</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="rounded-xl border bg-card p-6">
                <div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: G_BLUE }} />
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What You Get */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">What You Get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="rounded-xl border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${G_BLUE}15` }}>
                    <Icon className="w-5 h-5" style={{ color: G_BLUE }} />
                  </div>
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Business Impact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">Business Impact</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border bg-card p-8 text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: G_BLUE }}>{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border bg-card p-6">
                <h3 className="font-semibold mb-3 flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: G_BLUE }} />
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl p-10 text-center text-white"
          style={{ background: `linear-gradient(135deg, ${G_BLUE} 0%, #1a73e8 100%)` }}>
          <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Build This for Your Engineering Team</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Give your developers a codebase-aware copilot that lives in their IDE, knows your internal patterns, and never sends your code outside your GCP environment. Deployed in 3–4 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
