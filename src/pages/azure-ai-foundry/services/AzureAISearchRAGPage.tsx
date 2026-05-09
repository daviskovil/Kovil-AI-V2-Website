'use client'

import { motion } from "motion/react"
import { Search, Database, Shield, Zap, GitBranch, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const steps = [
  {
    number: "01",
    timeline: "Days 1–4",
    title: "Data Source Audit & Index Design",
    description: "We audit your document sources — SharePoint, Confluence, Blob Storage, SQL, or third-party systems — and design the Azure AI Search index schema, chunking strategy, and embedding configuration.",
    bullets: ["Document source inventory and quality assessment", "Index schema and field mapping designed", "Chunking and embedding strategy defined"],
  },
  {
    number: "02",
    timeline: "Days 5–10",
    title: "RAG Pipeline Build",
    description: "We build the end-to-end RAG pipeline — ingestion, chunking, embedding, indexing, retrieval, and generation — connecting Azure AI Search with Azure OpenAI inside an Azure AI Foundry Prompt Flow.",
    bullets: ["Ingestion and chunking pipeline built", "Vector and hybrid search configured", "Retrieval-augmented generation flow deployed"],
  },
  {
    number: "03",
    timeline: "Days 11–14",
    title: "Evaluation & Accuracy Tuning",
    description: "We evaluate retrieval accuracy, groundedness, and answer relevance against a curated test set — tuning semantic ranking, chunk overlap, and reranking until the pipeline meets your quality bar.",
    bullets: ["Retrieval accuracy benchmarked", "Groundedness and relevance evaluated", "Semantic ranker and reranker tuned"],
  },
]

const features = [
  {
    icon: Search,
    title: "Vector + Hybrid Search",
    desc: "Combine vector similarity search with BM25 keyword search in a single Azure AI Search query — ensuring high recall for semantic queries while maintaining precision for exact-match lookups.",
  },
  {
    icon: Zap,
    title: "Semantic Ranking",
    desc: "Apply Azure AI Search's semantic ranker to reorder results by language understanding — dramatically improving answer relevance for ambiguous or conversational queries.",
  },
  {
    icon: Database,
    title: "Multi-Source Indexing",
    desc: "Index content from SharePoint, Confluence, Azure Blob Storage, SQL databases, and APIs — creating a unified knowledge index accessible to any Azure AI agent or application.",
  },
  {
    icon: Shield,
    title: "Entra ID Access Control",
    desc: "Preserve document-level security by filtering search results against the querying user's Entra ID group memberships — ensuring users only retrieve content they are authorised to see.",
  },
  {
    icon: GitBranch,
    title: "Index Freshness Automation",
    desc: "Configure Azure AI Search indexers with incremental indexing policies — automatically detecting and processing new or updated documents so the knowledge base stays current without manual re-indexing.",
  },
  {
    icon: CheckCircle2,
    title: "Hallucination Guardrails",
    desc: "Implement groundedness checks in the Prompt Flow pipeline — verifying that every generated answer cites retrieved passages, and blocking or flagging responses unsupported by the index.",
  },
]

const forWho = [
  {
    label: "Large document archives",
    desc: "Organisations with thousands of internal documents, policies, runbooks, or product specifications — employees can't find what they need, and AI search changes that.",
  },
  {
    label: "Knowledge agents over SharePoint",
    desc: "Teams building AI knowledge agents grounded in SharePoint or Confluence — you need a retrieval pipeline that respects permissions, handles large corpora, and returns accurate answers.",
  },
  {
    label: "Any Azure AI build needing retrieval",
    desc: "Engineering teams building any Azure AI agent that requires accurate, grounded responses — a well-tuned RAG pipeline is the difference between a demo and a production system.",
  },
]

export default function AzureAISearchRAGPage() {
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
            <span className="text-foreground">Azure AI Search & RAG</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Azure AI Search & RAG Pipeline</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Enterprise knowledge, instantly accessible. <span className="text-accent">Zero hallucinations.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We design, build, and evaluate a production-grade RAG pipeline on Azure AI Search — connecting your documents, SharePoint, and databases to AI agents that give accurate, cited answers.
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Audit, build, and evaluate in 14 days.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">The full retrieval stack, properly engineered.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Make your enterprise knowledge instantly accessible — with zero hallucinations.</h2>
            <p className="text-background/60 text-base">14-day fixed-price engagement. Production RAG pipeline. Evaluated and tuned before handover.</p>
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
    </div>
  )
}
