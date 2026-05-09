'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  {
    title: "Contract Extraction",
    desc: "Automatically parse and extract key clauses, dates, parties, obligations, and termination conditions from contracts of any length or format.",
  },
  {
    title: "Invoice Processing",
    desc: "Capture line items, totals, vendor details, and PO references from structured and unstructured invoices, feeding directly into your ERP or AP system.",
  },
  {
    title: "Compliance Document Review",
    desc: "Flag missing fields, detect non-compliant language, and surface regulatory risk in policy documents, audit reports, and regulatory filings.",
  },
  {
    title: "Multi-Format Support",
    desc: "Process PDFs, Word documents, scanned images, and mixed-format packages using Azure AI Document Intelligence's layout and OCR models.",
  },
  {
    title: "Azure Form Recognizer Integration",
    desc: "Leverage pre-built and custom-trained Form Recognizer models to extract structured data from standard business forms with high accuracy.",
  },
  {
    title: "Human-in-the-Loop Escalation",
    desc: "Low-confidence extractions are automatically routed to a human reviewer via a configurable approval queue, ensuring accuracy without bottlenecks.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Document Ingestion & Classification",
    desc: "Documents arrive via email, upload portal, or Azure Blob Storage trigger. The agent classifies each document type and routes it to the appropriate extraction pipeline.",
    bullets: [
      "Supports email attachments, SharePoint libraries, and direct API upload",
      "Multi-class classification using a fine-tuned GPT-4o prompt chain",
      "Unsupported or ambiguous documents flagged for manual review",
    ],
  },
  {
    step: "02",
    title: "Extraction & Validation",
    desc: "Azure AI Document Intelligence and GPT-4o work in concert to extract structured fields, validate against business rules, and compute a confidence score for each result.",
    bullets: [
      "Layout-aware extraction preserves table structure and column relationships",
      "Field-level confidence thresholds trigger escalation when below configured minimums",
      "Cross-field validation (e.g., invoice total must equal sum of line items)",
    ],
  },
  {
    step: "03",
    title: "Routing & Action",
    desc: "Validated data is pushed downstream via Azure Logic Apps — into your ERP, CRM, or document management system — and a full audit trail is written to Azure Monitor.",
    bullets: [
      "Pre-built connectors for SAP, Dynamics 365, and Salesforce",
      "Webhook-based integration for any REST-capable downstream system",
      "Immutable audit log with extraction version history in Azure Monitor Logs",
    ],
  },
]

const metrics = [
  { value: "85%", label: "Extraction accuracy" },
  { value: "10x", label: "Faster processing" },
  { value: "70%", label: "Cost reduction" },
  { value: "24/7", label: "Continuous operation" },
]

const techStack = [
  "Azure OpenAI GPT-4o",
  "Azure AI Document Intelligence",
  "Azure Blob Storage",
  "Azure Logic Apps",
  "Semantic Kernel",
  "Prompt Flow",
]

export default function DocumentIntelligenceAgentPage() {
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
            <span className="text-foreground">Document Intelligence Agent</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Enterprise Automation · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Documents processed, classified, and acted on.{" "}
            <span className="text-accent">Automatically.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Kovil AI builds Azure-native document intelligence agents that ingest any document format, extract structured data with 85%+ accuracy, validate against your business rules, and push results into your existing systems — all without manual intervention.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From document receipt to downstream action in minutes.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to eliminate manual document processing?</h2>
            <p className="text-background/60 text-base">Book a call to see a live demo tailored to your document types and volumes.</p>
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
