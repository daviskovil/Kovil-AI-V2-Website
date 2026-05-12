'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Search, BookOpen, Lock, RefreshCw, Layers, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const techStack = [
  "Vertex AI Search",
  "Gemini 2.0 Pro",
  "Cloud Storage",
  "Document AI",
  "Identity-Aware Proxy",
]

const problems = [
  {
    title: "Employees losing hours to information searches",
    description: "Employees spend 2–3 hours per day searching for internal information — policies, procedures, past decisions, product specs — across fragmented systems with no single source of truth.",
  },
  {
    title: "Perpetually outdated knowledge bases",
    description: "Wiki pages go stale, SharePoint becomes a graveyard of old versions, and no one trusts the knowledge base because it's never current — so teams just ask colleagues instead.",
  },
  {
    title: "Different teams holding different truths",
    description: "Sales, finance, and operations each maintain their own versions of core documents, creating inconsistency in decision-making and compliance risk from misaligned policies.",
  },
]

const capabilities = [
  {
    icon: Search,
    title: "Natural Language Question Answering",
    description: "Employees ask questions in plain language and receive direct answers grounded in your internal documents — not a list of links to search through.",
  },
  {
    icon: BookOpen,
    title: "Source Citation with Confidence Scores",
    description: "Every answer cites the specific document, section, and confidence level — so employees know exactly where the information comes from and can verify it.",
  },
  {
    icon: Lock,
    title: "Access-Controlled Retrieval",
    description: "Identity-Aware Proxy and IAM integration ensures users only receive answers from documents they are authorised to see — department boundaries and classification levels respected.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Indexing of New Documents",
    description: "New documents added to Cloud Storage, Confluence, or SharePoint are automatically indexed within minutes — the knowledge base is always current without manual curation.",
  },
  {
    icon: Layers,
    title: "Multi-Corpus Search",
    description: "The agent searches across multiple knowledge bases simultaneously — policies, product docs, technical guides, and HR materials — and synthesises a unified answer.",
  },
]

const metrics = [
  { value: "87%", label: "Answer accuracy rate on internal knowledge queries" },
  { value: "12 min", label: "Average research time (was 2.8 hours)" },
  { value: "94%", label: "Employee satisfaction with search experience" },
]

const faqs = [
  {
    q: "What data sources can the Enterprise Search Agent index?",
    a: "Vertex AI Search supports indexing from Google Cloud Storage (PDF, Word, HTML, TXT), Google Drive, Confluence, SharePoint, and any source reachable via a web crawler or API connector. During implementation we configure the data connectors based on where your knowledge lives. The index is updated continuously so new content is available within minutes of publication.",
  },
  {
    q: "How does access control work — can employees access documents above their clearance?",
    a: "No. The system uses Identity-Aware Proxy and your existing Google Workspace or Active Directory groups to enforce access controls at retrieval time. When a user submits a query, the agent only searches the subset of documents that user is authorised to view. A confidential HR policy will never surface in a query from a general employee, even if the question is relevant.",
  },
  {
    q: "How does Gemini grounding improve answer quality?",
    a: "Gemini grounding means the model only answers from the retrieved document set — it does not use its pre-training knowledge to fill gaps. This prevents hallucination and ensures every answer is traceable to a specific internal source. If the information is not in your knowledge base, the agent says so rather than generating a plausible-sounding but incorrect response.",
  },
  {
    q: "What happens when a document is deleted or updated?",
    a: "The index is kept in sync with your source systems. Deleted documents are removed from the index on the next sync cycle (typically within 15 minutes). Updated documents are re-indexed automatically. If a user queries for information in a deleted document, the agent will indicate that the source is no longer available rather than returning stale information.",
  },
]

export default function EnterpriseSearchAgentPage() {
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
            <Link href="/vertex-ai/data-analytics" className="hover:text-foreground transition-colors">Data &amp; Analytics</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">Enterprise Search Agent</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_BLUE, color: G_BLUE }}>
            Data &amp; Analytics
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Enterprise Search Agent
            <span className="block" style={{ color: G_BLUE }}>AI-Powered Knowledge Retrieval</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Semantic search agent over internal knowledge — policies, procedures, product docs, Confluence, SharePoint — using Vertex AI Search and Gemini grounding. Employees get direct, cited answers in seconds instead of hunting across fragmented systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={openCalendly} size="lg" style={{ backgroundColor: G_BLUE }} className="text-white hover:opacity-90">
              Build This for Your Organisation <ArrowRight className="ml-2 w-4 h-4" />
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
            We implement a production-grade enterprise knowledge agent on Vertex AI Search — indexing your internal documents, enforcing your existing access controls, and surfacing a natural language search interface via web app, Slack bot, or Microsoft Teams integration. Gemini grounding ensures every answer is anchored to your actual internal knowledge, not the model's general training.
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
          <h2 className="text-3xl font-bold mb-4">Build This for Your Organisation</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Give every employee instant, accurate access to your internal knowledge. We implement a production-ready Enterprise Search Agent in 3 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
