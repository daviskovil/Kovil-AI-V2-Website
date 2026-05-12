'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, FileText, Eye, ShieldCheck, GitBranch, Database, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const techStack = [
  "Google Cloud Document AI",
  "Gemini 2.0 Flash",
  "Cloud Storage",
  "BigQuery",
  "Cloud Workflows",
]

const problems = [
  {
    title: "Hours lost to manual document extraction",
    description: "Staff spend hours manually reading and re-typing data from PDFs, invoices, and contracts into systems — a slow, expensive, and error-prone process at scale.",
  },
  {
    title: "Error-prone manual entry",
    description: "Human data entry introduces transcription errors that compound downstream — causing incorrect payments, compliance failures, and costly corrections.",
  },
  {
    title: "Growing document review backlogs",
    description: "As document volumes grow, review queues build up, delaying procurement approvals, invoice processing, and contract execution by days or weeks.",
  },
]

const capabilities = [
  {
    icon: FileText,
    title: "Multi-Document Type Extraction",
    description: "Trained processors for invoices, contracts, purchase orders, financial statements, and compliance forms — each with document-type-specific field extraction.",
  },
  {
    icon: Eye,
    title: "Gemini Vision Validation",
    description: "Gemini 2.0 Flash validates extracted fields in context — catching misreads, layout anomalies, and inconsistencies that rule-based OCR misses.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence Scoring",
    description: "Every extracted field carries a confidence score. Low-confidence fields are flagged automatically for human review rather than processed blindly.",
  },
  {
    icon: GitBranch,
    title: "Exception Routing via Cloud Workflows",
    description: "Documents failing confidence thresholds are routed to the appropriate reviewer via Cloud Workflows, with extracted data pre-populated for efficient review.",
  },
  {
    icon: Database,
    title: "BigQuery Storage and Analytics",
    description: "All extracted data lands directly in BigQuery, enabling analytics, trend reporting, and downstream system integration via standard APIs.",
  },
]

const metrics = [
  { value: "91%", label: "Extraction accuracy across document types" },
  { value: "22 sec", label: "Processing time per document (was 45 min manual)" },
  { value: "18 hrs", label: "FTE-hours reclaimed per week" },
]

const faqs = [
  {
    q: "Which document types can the pipeline process?",
    a: "Google Cloud Document AI provides pre-trained processors for invoices, receipts, contracts, identity documents, lending documents, and tax forms. Custom processors can be trained for organisation-specific document types with as few as 50 labelled examples. During implementation we configure the processor mix based on your actual document portfolio.",
  },
  {
    q: "What happens when the AI is not confident about an extraction?",
    a: "Each extracted field carries a confidence score from 0 to 1. You define the thresholds during implementation — for example, fields below 0.85 confidence are flagged, fields below 0.60 are routed to human review. Reviewers see the original document alongside the extracted data, making corrections fast. Corrected data can feed back into model fine-tuning over time.",
  },
  {
    q: "How does the pipeline handle handwritten documents?",
    a: "Document AI's handwriting processor handles printed handwriting reliably. Heavily stylised or cursive handwriting has lower accuracy than typed text, so those documents are typically routed to a human review queue after initial extraction. Gemini Vision is used as a second pass for ambiguous fields, improving overall accuracy above what OCR alone achieves.",
  },
  {
    q: "Does extracted data integrate with our ERP or accounting system?",
    a: "Yes. Extracted data lands in BigQuery and can be pushed to downstream systems via Cloud Workflows, Pub/Sub, or direct API calls. We implement standard integrations with SAP, Oracle, NetSuite, Xero, and other ERPs during the engagement. Custom webhook delivery is also available for any system with an API.",
  },
]

export default function DocumentAIPipelinePage() {
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
            <span className="text-foreground">Document AI Pipeline</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_BLUE, color: G_BLUE }}>
            Data &amp; Analytics
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Document AI Processing Pipeline
            <span className="block" style={{ color: G_BLUE }}>Automated Extraction at Scale</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Automated document extraction and routing using Google Cloud Document AI and Gemini Vision. Processes contracts, invoices, financial statements, and compliance documents at scale — turning hours of manual work into seconds.
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
            We implement a fully managed document processing pipeline on Google Cloud — ingesting documents from email, cloud storage, or API upload, extracting structured data using specialised Document AI processors, validating with Gemini Vision, and delivering clean data to BigQuery and your downstream systems. The pipeline runs continuously with no manual intervention for high-confidence documents.
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
            Stop paying people to copy data from documents. We implement a production-grade Document AI pipeline in 3 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
