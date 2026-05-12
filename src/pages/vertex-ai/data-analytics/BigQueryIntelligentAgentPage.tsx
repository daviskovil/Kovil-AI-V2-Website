'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Database, MessageSquare, BarChart3, Bell, GitMerge, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const techStack = [
  "Gemini in BigQuery",
  "Vertex AI Agent Builder",
  "BigQuery ML",
  "Looker Studio",
  "Cloud Pub/Sub",
]

const problems = [
  {
    title: "Data team overwhelmed with ad-hoc requests",
    description: "Data teams field 50+ ad-hoc query requests per week, pulling analysts away from strategic work and creating multi-day backlogs for business stakeholders.",
  },
  {
    title: "Analysts stuck in data prep",
    description: "Analysts spend 60% of their time on data preparation and query writing rather than generating insights — a massive misallocation of expensive talent.",
  },
  {
    title: "Non-technical stakeholders locked out",
    description: "Business leaders who need data to make decisions can't self-serve insights without SQL knowledge, creating a bottleneck and dependency on technical staff.",
  },
]

const capabilities = [
  {
    icon: MessageSquare,
    title: "Natural Language to SQL",
    description: "Gemini in BigQuery translates plain-English business questions into optimised SQL queries — no SQL knowledge required from the end user.",
  },
  {
    icon: BarChart3,
    title: "Automated Insight Generation",
    description: "The agent surfaces key trends, outliers, and patterns automatically, presenting findings in plain language alongside the underlying data.",
  },
  {
    icon: Bell,
    title: "Anomaly Detection Alerts",
    description: "BigQuery ML models continuously monitor data streams and trigger natural-language alerts when anomalies or threshold breaches are detected.",
  },
  {
    icon: Database,
    title: "Scheduled Report Narration",
    description: "Recurring reports are automatically narrated by Gemini — turning raw dashboards into plain-English summaries delivered to stakeholders on schedule.",
  },
  {
    icon: GitMerge,
    title: "Multi-Dataset Agent Reasoning",
    description: "The Vertex AI agent reasons across multiple BigQuery datasets, joining data sources intelligently to answer complex cross-functional questions.",
  },
]

const metrics = [
  { value: "78%", label: "Reduction in ad-hoc query requests to data team" },
  { value: "4.2x", label: "Faster insight delivery to business stakeholders" },
  { value: "$320K", label: "Analyst time reclaimed annually" },
]

const faqs = [
  {
    q: "How does Gemini in BigQuery convert natural language to SQL?",
    a: "Gemini in BigQuery uses a fine-tuned large language model that understands your specific schema — table names, column definitions, and relationships. When a user asks a question in plain English, Gemini generates the corresponding SQL, executes it against your BigQuery dataset, and returns both the results and a plain-language explanation. The model improves over time as it learns your data vocabulary.",
  },
  {
    q: "How is our data kept secure?",
    a: "All data remains within your Google Cloud project — no data leaves your environment. Gemini in BigQuery operates within your existing IAM permissions, so users can only query tables they are already authorised to access. Vertex AI Agent Builder applies the same access controls, and all queries are logged in Cloud Audit Logs for compliance.",
  },
  {
    q: "What types of BigQuery data does the agent support?",
    a: "The agent supports structured and semi-structured data in BigQuery, including standard tables, partitioned tables, views, and BigQuery ML models. It works across any data domain — sales, finance, operations, marketing, and more. Documents and unstructured data can be incorporated via BigQuery's Object Table feature combined with Gemini multimodal analysis.",
  },
  {
    q: "What is the query response latency?",
    a: "For typical analytical queries, end-to-end response time (natural language question to results with explanation) is between 3 and 15 seconds, depending on query complexity and dataset size. For simple aggregations and lookups, responses are typically under 5 seconds. Complex multi-dataset joins may take 15–30 seconds. Scheduled report narration runs asynchronously with no latency constraint.",
  },
]

export default function BigQueryIntelligentAgentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai" className="hover:text-foreground transition-colors">Vertex AI</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai/data-analytics" className="hover:text-foreground transition-colors">Data &amp; Analytics</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">BigQuery Intelligent Agent</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_BLUE, color: G_BLUE }}>
            Data &amp; Analytics
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            BigQuery Intelligent Agent
            <span className="block" style={{ color: G_BLUE }}>Natural Language Analytics</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            AI agent that lets business users query BigQuery in plain English using Gemini in BigQuery and Vertex AI Agent Builder. No SQL required. Real-time dashboards explained in natural language — insights delivered directly to decision-makers.
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
            We implement a production-grade natural language analytics agent on Google Cloud — connecting Gemini in BigQuery to your existing data warehouse and surfacing it through Looker Studio dashboards, Slack, or a custom web interface. Business users ask questions in plain English and receive accurate, sourced answers within seconds, without any SQL knowledge.
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
            Let your business users query data in plain English while your data team focuses on strategic work. We implement production-ready in 3 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
