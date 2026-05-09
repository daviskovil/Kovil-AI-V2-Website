'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  {
    title: "SharePoint & Confluence Indexing",
    desc: "Automatically crawl and index your SharePoint Online sites, Confluence spaces, and OneDrive libraries, keeping the knowledge base fresh with daily delta updates.",
  },
  {
    title: "Cited Responses with Source Links",
    desc: "Every answer includes inline citations linking directly to the source document and page, so employees can verify and explore further with a single click.",
  },
  {
    title: "Entra ID Access Control",
    desc: "Document-level security trims search results to match each user's existing SharePoint and Azure AD permissions — no sensitive documents are ever surfaced to unauthorised users.",
  },
  {
    title: "Teams & Web Chat Deployment",
    desc: "Deploy the knowledge agent as a Microsoft Teams bot or embeddable web chat widget, meeting employees where they already work without any app switching.",
  },
  {
    title: "Knowledge Gap Detection",
    desc: "Unanswered or low-confidence queries are logged and surfaced in a weekly report, alerting content owners to documentation gaps that need filling.",
  },
  {
    title: "Daily Index Freshness",
    desc: "Incremental indexing pipelines run on a configurable schedule, ensuring the agent answers based on your latest policies, procedures, and product documentation.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Knowledge Source Indexing",
    desc: "Kovil AI connects Azure AI Search to your existing knowledge repositories using Microsoft Graph and SharePoint connectors, chunking and embedding content for semantic retrieval.",
    bullets: [
      "Supports SharePoint Online, Confluence, OneDrive, and custom REST sources",
      "Configurable chunking strategies optimised for long-form documents and FAQs",
      "Entra ID permission filters applied at index time and query time",
    ],
  },
  {
    step: "02",
    title: "Semantic Retrieval",
    desc: "User queries are embedded and matched against the vector index using hybrid search — combining dense vector similarity with BM25 keyword scoring for highest-relevance retrieval.",
    bullets: [
      "Hybrid search (vector + keyword) outperforms pure vector retrieval on enterprise queries",
      "Re-ranking with Azure AI Search semantic ranker boosts precision on long-tail questions",
      "Multi-turn conversation context maintained across the session",
    ],
  },
  {
    step: "03",
    title: "Grounded Answer Generation",
    desc: "GPT-4o synthesises retrieved chunks into a concise, cited answer using a strict grounding system prompt that prohibits responses unsupported by retrieved evidence.",
    bullets: [
      "System prompt enforces source-only answers, eliminating hallucination risk",
      "Confidence score returned with each answer; low-confidence answers state uncertainty",
      "Answer and source chunks logged to Application Insights for quality monitoring",
    ],
  },
]

const metrics = [
  { value: "83%", label: "Answer accuracy" },
  { value: "12 min", label: "Avg research time (was 4hrs)" },
  { value: "4.2x", label: "Productivity lift" },
  { value: "Zero", label: "Hallucinations" },
]

const techStack = [
  "Azure AI Search",
  "Azure OpenAI GPT-4o",
  "SharePoint Connector",
  "Microsoft Teams",
  "Semantic Kernel",
  "Copilot Studio",
]

export default function EnterpriseKnowledgeAgentPage() {
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
            <Link href="/azure-ai-foundry/enterprise" className="hover:text-foreground transition-colors">Enterprise Automation</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Enterprise Knowledge Agent</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Enterprise Automation · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Every answer your employees need. Instantly.{" "}
            <span className="text-accent">Accurately.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Kovil AI builds RAG-powered enterprise knowledge agents on Azure AI Foundry that turn your SharePoint, Confluence, and internal documentation into an always-available, permission-aware AI assistant — grounded in your content, never hallucinating.
          </p>

          {/* Metrics strip */}
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From scattered documentation to instant grounded answers.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What this agent can do.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Give your team instant access to everything they need to know.</h2>
            <p className="text-background/60 text-base">Book a call and we'll show you how fast we can index your knowledge base and have the agent answering questions.</p>
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
