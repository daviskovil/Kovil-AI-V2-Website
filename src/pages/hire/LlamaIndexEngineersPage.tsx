'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Workflow, Brain, Zap, ShieldCheck, BarChart3, Repeat2,
  Database, Layers, CheckCircle2, ArrowRight, Clock, ChevronDown
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01", timeline: "Day 1",
    title: "Brief Your Needs",
    description: "Fill a 5-minute intake form describing your RAG project — the types of documents (PDFs, SQL, Notion), your current vector database, and search performance bottlenecks. A Delivery Lead contacts you within 24 hours.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "RAG architecture scope mapped upfront"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Engineer",
    description: "We surface 2–3 hand-picked LlamaIndex specialists with production experience in hierarchical index strategies, metadata routing, and advanced parsing logic. Review profiles and pick your engineer.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your engineer works in focused sprints. An Engagement Manager audits every milestone. You get production-grade, highly accurate RAG pipelines with robust evaluations — not fragile demos.",
    bullets: ["Weekly milestone check-ins", "Engagement Manager quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted LlamaIndex Engineers", desc: "Every engineer passes rigorous vetting — document parsing strategies, node configurations, vector index optimization, metadata filtering, and custom query engine design." },
  { icon: Repeat2, title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every sprint milestone — retrieval recall/precision, document chunking quality, latency optimization, and answer truthfulness." },
  { icon: Zap, title: "Sprint-Based Delivery", desc: "Structured weekly sprints with clear deliverables. Each sprint ends with working, evaluated query engines — not open-ended hours." },
  { icon: Database, title: "Custom Data Connectors (LlamaHub)", desc: "Build ingestion pipelines for any source — Postgres, Salesforce, Notion, SharePoint, Slack, and raw S3 buckets — using pre-built or bespoke LlamaHub readers." },
  { icon: Workflow, title: "Advanced Indexing Structures", desc: "Specialists in hierarchical indexing, auto-merging retrievers, parent-child chunk relations, recursive retrieval, and hybrid keyword-vector search configurations." },
  { icon: Brain, title: "Agentic Query Engines", desc: "Build search tools that reason — multi-document agent loops, sub-question query engines, router query engines, and tool-calling search agents." },
]

const buildItems = [
  { title: "Enterprise RAG Pipelines", desc: "End-to-end RAG systems that query complex internal data (contracts, PDFs, API docs) with high semantic accuracy and minimum hallucination." },
  { title: "Hierarchical & Auto-Merging Retrievers", desc: "Build parent-child chunking architectures where small child chunks are retrieved for speed, but broader parent nodes are passed to the LLM for context." },
  { icon: Workflow, title: "Custom LlamaHub Data Connectors", desc: "Extract and sync data from proprietary internal systems, APIs, or legacy databases directly into your vector store using custom LlamaIndex data loaders." },
  { title: "Hybrid Search & Re-ranking", desc: "Combine BM25 keyword search with vector embeddings, optimized by Cohere or BGE re-rankers, to guarantee top-1 relevance for technical queries." },
  { title: "Agentic Document Search Loops", desc: "Query agents that break down complex requests into sub-questions, query multiple documents in parallel, and synthesize a single comprehensive answer." },
  { title: "RAG Evaluation & Triaging", desc: "Implement continuous evaluation frameworks (like Ragas or TruLens) to measure faithfulness, answer relevance, and context recall, resolving production drift." },
]

const forWho = [
  { title: "Teams with Poor RAG Search Quality", desc: "Your basic LangChain or database RAG is returning bad chunks, hallucinating, or missing critical sections. LlamaIndex offers the precision indexing you need." },
  { title: "Companies with Diverse Data Sources", desc: "You have information scattered across PDFs, spreadsheets, APIs, and SaaS tools, and need a unified ingestion pipeline that structures this data for LLMs." },
  { title: "Projects Requiring Reasoning Search", desc: "You need more than simple matching. You need an agent that can compare documents, summarize trends, and answer questions like 'What changed between version A and B?'" },
]

const timeline = [
  { day: "Day 1",   title: "Submit Your Brief",      desc: "Fill a 5-minute intake form. A Delivery Lead calls within 24 hours to map out your files, database stacks, latency constraints, and accuracy goals." },
  { day: "Day 2–3", title: "Meet Your Shortlist",    desc: "We surface 2–3 LlamaIndex specialists matched to your specific document types and vector stores. Review profiles, join intro calls, choose your fit." },
  { day: "Day 3–4", title: "Milestone Plan Locked",  desc: "You and your engineer agree a sprint plan — data ingestion, chunking strategy, index choice, re-ranking setup, and evaluation metrics." },
  { day: "Week 1+", title: "Sprint & Deliver",       desc: "Your engineer builds in focused sprints. Your Engagement Manager audits every milestone. You review retrieval accuracy at each checkpoint." },
  { day: "Ongoing", title: "Scale or Wind Down",     desc: "Add engineers, extend sprints, or wind down — no lock-in. You stay because the retrieval quality is stellar, not because of a contract." },
]

const comparison = [
  { label: "Time to start",    kovil: "24–48 hours",   inhouse: "2–4 months",  agency: "2–4 weeks",   freelancer: "1–2 weeks" },
  { label: "LlamaIndex skill",  kovil: "Deep specialist",inhouse: "Hard to find",agency: "Varies widely",freelancer: "Varies" },
  { label: "Managed delivery", kovil: "✓ Always",      inhouse: "✗",           agency: "Partial",     freelancer: "✗" },
  { label: "Risk-free trial",  kovil: "✓ 2 weeks",     inhouse: "✗",           agency: "✗",           freelancer: "Rarely" },
  { label: "Production deploy",kovil: "✓ Included",    inhouse: "Depends",     agency: "Extra cost",  freelancer: "Varies" },
  { label: "IP ownership",     kovil: "100% yours",    inhouse: "100% yours",  agency: "Often shared",freelancer: "Varies" },
]

const faqs = [
  {
    q: "What is LlamaIndex and what can a LlamaIndex engineer build?",
    a: "LlamaIndex (formerly GPT Index) is a specialized data framework for connecting custom data sources to LLMs. While general frameworks cover many use cases, LlamaIndex focuses heavily on data ingestion, indexing, and retrieval. A LlamaIndex engineer builds highly optimized RAG pipelines, semantic search engines over legacy databases, custom document parsers, and agentic multi-document query tools.",
  },
  {
    q: "How quickly can I hire a LlamaIndex engineer through Kovil AI?",
    a: "Most clients are matched with a vetted LlamaIndex specialist within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days, and every engagement includes a 2-week risk-free trial.",
  },
  {
    q: "LlamaIndex vs LangChain — which is right for my project?",
    a: "LangChain is a broad orchestrator for general AI application chains and agents. LlamaIndex is deeply specialized in search, retrieval, and structuring data for LLMs. If your app is primarily focused on search, Q&A, document analysis, and connecting custom databases or files with high accuracy, LlamaIndex is the superior choice. Many teams use them together: LangChain for the agent workflow and LlamaIndex for the RAG engine.",
  },
  {
    q: "Can LlamaIndex query structured databases like SQL?",
    a: "Yes. LlamaIndex has advanced query translation capabilities, including Text-to-SQL and SQL-Structured RAG. Our engineers build systems that dynamically translate user questions into SQL queries, retrieve the relevant rows, and use an LLM to formulate a readable answer.",
  },
  {
    q: "Who owns the code and database indices?",
    a: "You do — 100%. All index designs, connector scripts, embedding schemas, evaluation code, and pipeline configurations are fully owned by your company. Everything is deployed directly on your infrastructure (AWS, Azure, GCP, or local).",
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

export default function LlamaIndexEngineersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">LlamaIndex Engineers</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire a LlamaIndex Engineer —<br />
            <span className="text-accent">Matched in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Vetted Tier-1 LlamaIndex engineers embedded into your team. Advanced RAG, document parsing, metadata routing, agentic query engines, and vector search optimization — sprint-delivered, Engagement Manager audited.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire a LlamaIndex Engineer <ArrowRight className="ml-2 h-4 w-4" />
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What Can a LlamaIndex Engineer Build for You?</h2>
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
                  <Database className="h-5 w-5 text-accent" />
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire a LlamaIndex Engineer Through Kovil AI?</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire a LlamaIndex Engineer with Kovil AI?</h2>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire a LlamaIndex engineer?</h3>
            <p className="text-sm text-muted-foreground">Tell us your RAG and data search goals. Matched in 48 hours. 2-week risk-free trial.</p>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What's Included When You Hire a LlamaIndex Engineer Through Kovil AI?</h2>
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
        <h2 className="font-display font-bold text-3xl mb-12">What Should You Expect When Hiring a LlamaIndex Engineer?</h2>
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
        <h2 className="font-display font-bold text-3xl mb-12">How Does Kovil AI Compare to Other Ways to Hire a LlamaIndex Engineer?</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring LlamaIndex Engineers</h2>
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
            { href: "/hire/langgraph-engineers",  label: "Hire LangGraph Engineers",  desc: "Stateful agent graphs, advanced RAG, LangSmith observability" },
            { href: "/hire/llm-engineers",        label: "Hire LLM Engineers",        desc: "RAG systems, fine-tuning, system prompts, LLMOps" },
            { href: "/engage/managed-ai-engineer", label: "Managed AI Engineer",       desc: "Embedded AI engineer for any AI task" },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your LlamaIndex engineer?</h2>
            <p className="text-background/60 text-base">Tell us your indexing and retrieval goals. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire a LlamaIndex Engineer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}
