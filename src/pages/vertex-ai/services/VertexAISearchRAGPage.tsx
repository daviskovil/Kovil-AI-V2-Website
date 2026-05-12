'use client'

import { motion } from "motion/react"
import { Search, SlidersHorizontal, FileText, Database, Lock, Link2, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const steps = [
  {
    number: "01",
    timeline: "Week 1",
    title: "Data Architecture & Index Design",
    description: "We map your enterprise data sources — Cloud Storage, BigQuery, SharePoint, Drive — define the chunking strategy, plan the Vertex AI Search index structure, and document access controls before any data moves.",
    bullets: ["Source mapping and data inventory", "Chunking and embedding strategy design", "Access control and IAM policy planning"],
  },
  {
    number: "02",
    timeline: "Weeks 2–3",
    title: "Build & Configure",
    description: "We set up Vertex AI Search datastores, configure Gemini grounding integration, tune hybrid search parameters, and ingest your documents — iterating on retrieval quality with test queries before production.",
    bullets: ["Vertex AI Search datastore setup and document ingestion", "Gemini grounding API integration", "Hybrid search tuning and retrieval quality testing"],
  },
  {
    number: "03",
    timeline: "Week 4+",
    title: "Evaluate, Deploy & Monitor",
    description: "We benchmark retrieval accuracy against your ground-truth query set, deploy to production with latency SLAs, and wire up freshness automation so your search index stays current as documents change.",
    bullets: ["Retrieval accuracy benchmarking vs. ground truth", "Production deployment with latency monitoring", "Automated freshness and re-indexing pipelines"],
  },
]

const features = [
  {
    icon: Search,
    title: "Vertex AI Search Datastore Setup",
    desc: "End-to-end setup of Vertex AI Search datastores across your document corpus — structured and unstructured data — with embedding generation, indexing, and namespace configuration handled by our team.",
  },
  {
    icon: SlidersHorizontal,
    title: "Hybrid Search Configuration",
    desc: "Configure and tune hybrid search — combining dense vector similarity with sparse keyword matching — to maximise retrieval accuracy across diverse query types and document formats.",
  },
  {
    icon: FileText,
    title: "Document AI Integration",
    desc: "Use Google Cloud Document AI to extract structured content from PDFs, scanned documents, and forms before indexing — dramatically improving retrieval accuracy over unprocessed binary files.",
  },
  {
    icon: Database,
    title: "BigQuery ML RAG",
    desc: "Build RAG pipelines that retrieve context directly from BigQuery — enabling Gemini agents to ground responses in structured analytical data, metrics, and real-time query results.",
  },
  {
    icon: Lock,
    title: "Access-Controlled Retrieval",
    desc: "Implement IAM-aware search so agents only retrieve documents the authenticated user is permitted to see — enforcing the same access controls your existing GCP data governance policies require.",
  },
  {
    icon: Link2,
    title: "Grounding API Integration",
    desc: "Wire Vertex AI Search into Gemini via the Grounding API — ensuring every agent response is grounded in retrieved, cited documents rather than model-generated hallucinations.",
  },
]

const forWho = [
  {
    label: "Teams building knowledge-base agents over internal docs",
    desc: "Engineering teams building internal Q&A agents, policy assistants, or knowledge workers over large document corpora — you need a production RAG pipeline that returns accurate, cited answers.",
  },
  {
    label: "Engineers replacing keyword search with semantic search",
    desc: "Teams migrating from Elasticsearch or keyword-based internal search to semantic, vector-powered search — you need the retrieval accuracy and GCP integration that Vertex AI Search provides.",
  },
  {
    label: "Enterprises needing compliant RAG with GCP data residency",
    desc: "Organisations with data residency requirements or compliance mandates — you need a RAG system where all data stays within GCP's VPC Service Controls perimeter, with full IAM governance.",
  },
]

export default function VertexAISearchRAGPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/vertex-ai" className="hover:text-foreground transition-colors">Vertex AI</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Vertex AI Search & RAG Pipeline</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: G_BLUE }}>Vertex AI Search & RAG Pipeline</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Ground your Gemini agents in <span className="text-accent">live enterprise knowledge.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We build enterprise RAG pipelines using Vertex AI Search, BigQuery, and Cloud Storage — grounding Gemini agents in your internal documents with IAM-aware retrieval and production accuracy guarantees.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/vertex-ai">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                Back to Vertex AI
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: G_BLUE }}>How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From data architecture to production RAG in four weeks.</h2>
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
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: G_BLUE }}>What&apos;s Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Every layer of an enterprise-grade RAG pipeline.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-6">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${G_BLUE}1A` }}>
                    <Icon className="h-5 w-5" style={{ color: G_BLUE }} />
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
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: G_BLUE }}>Who It&apos;s For</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Is this engagement right for you?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div key={w.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6">
              <div className="h-8 w-8 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${G_BLUE}1A` }}>
                <CheckCircle2 className="h-4 w-4" style={{ color: G_BLUE }} />
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to ground your Gemini agents in accurate, cited enterprise knowledge?</h2>
            <p className="text-background/60 text-base">Four-week build. IAM-governed retrieval. Benchmarked accuracy before go-live.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/vertex-ai">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                Back to Vertex AI
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
