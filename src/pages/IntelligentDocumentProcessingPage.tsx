'use client'

import { motion } from "motion/react"
import { FileText, Brain, Eye, Layers, Shield, GitBranch, CheckCircle2, Clock, ArrowRight, ChevronRight, Building2, Heart, Scale, Truck, Users, UserCheck, ShieldCheck, Zap } from "lucide-react"
import { Button } from "../components/ui/button"
import { openCalendly } from "../lib/calendly"
import Link from "next/link"

const industries = [
  {
    icon: Building2,
    label: "Banking & Financial Services",
    href: "/intelligent-document-processing/banking-financial-services",
    useCases: [
      "KYC & identity document classification",
      "Mortgage bundle processing — paystubs, bank statements, tax returns",
      "Trade finance — bills of lading, letters of credit",
    ],
  },
  {
    icon: Shield,
    label: "Insurance",
    href: "/intelligent-document-processing/insurance",
    useCases: [
      "Claims processing — medical bills, police reports, repair estimates",
      "Underwriting — prior medical histories, property records",
      "Policy application classification and data extraction",
    ],
  },
  {
    icon: Heart,
    label: "Healthcare & Life Sciences",
    href: "/intelligent-document-processing/healthcare-life-sciences",
    useCases: [
      "Medical records indexing — EHRs, physician notes, lab results",
      "Medical billing & coding — procedural descriptions, diagnoses",
      "Prior authorisation document classification",
    ],
  },
  {
    icon: Scale,
    label: "Legal & Compliance",
    href: null,
    useCases: [
      "Contract lifecycle management — NDA and vendor agreement classification",
      "eDiscovery — email, memo, and record classification by relevance",
      "Regulatory filing extraction and compliance monitoring",
    ],
  },
  {
    icon: Truck,
    label: "Supply Chain & Logistics",
    href: null,
    useCases: [
      "Accounts payable automation — invoice, PO, and receipt 3-way matching",
      "Customs & shipping compliance — declarations, certificates of origin",
      "Freight document classification and routing",
    ],
  },
  {
    icon: Users,
    label: "Human Resources",
    href: null,
    useCases: [
      "Resume parsing — work history, skills, education extraction",
      "Employee records management — onboarding, certifications, tax forms",
      "Background check document classification",
    ],
  },
]

const steps = [
  {
    number: "01",
    timeline: "Ingest",
    title: "Connect Any Document Source",
    description: "We connect your document intake — email inboxes, SharePoint, cloud storage, ERP upload portals, or API endpoints — into a unified pipeline. PDFs, scanned images, smartphone photos, Excel files, and XML are all handled.",
    bullets: ["Multi-source document intake configured", "Document routing rules defined", "Pre-processing and quality normalisation applied"],
  },
  {
    number: "02",
    timeline: "Classify & Extract",
    title: "AI Agent Classifies and Extracts",
    description: "Our AI Document Agent uses Vision LLMs and layout-aware models to classify each document type, write its own extraction prompt based on the detected layout, extract structured data fields, and self-check its own confidence scores — flagging low-confidence outputs for human review.",
    bullets: ["Document classification engine deployed", "Vision LLM data extraction configured", "Confidence scoring and HITL escalation logic built"],
  },
  {
    number: "03",
    timeline: "Act",
    title: "Push to Downstream Systems",
    description: "Extracted data flows automatically into your CRM, ERP, core banking system, or data warehouse. The agent logs into SAP, matches line items, schedules payments, sends approval emails, or flags anomalies — without human intervention for clean documents.",
    bullets: ["ERP / CRM / database integration built", "Automated downstream action triggers configured", "Audit trail and exception handling deployed"],
  },
]

const capabilities = [
  {
    icon: Layers,
    title: "Document Classification",
    desc: "Layout-aware AI classifies incoming documents by type — invoice, ID, contract, medical record, customs form — even when layouts vary across vendors, geographies, or time periods. No rigid templates required.",
  },
  {
    icon: Eye,
    title: "Vision LLM Data Extraction",
    desc: "We use multimodal Vision LLMs (GPT-4o Vision, Claude, Gemini) to extract structured data from scanned images, handwritten forms, and low-resolution smartphone photos that break traditional OCR pipelines.",
  },
  {
    icon: Brain,
    title: "Agentic RAG for Documents",
    desc: "For documents requiring context from other systems — policies, contracts, compliance rules — the agent retrieves relevant reference data via RAG before making extraction or classification decisions, dramatically reducing errors.",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-Loop (HITL) Validation",
    desc: "Low-confidence extractions are automatically surfaced to human reviewers via a clean validation interface. Reviewers correct, approve, or reject — and the agent learns from each correction to improve accuracy over time.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA, SOC 2 & GDPR Ready",
    desc: "We build document pipelines with enterprise compliance by default — on-premise or private cloud LLM deployment options, data residency controls, PII redaction, audit logging, and access controls for regulated industries.",
  },
  {
    icon: GitBranch,
    title: "Multi-System Integration",
    desc: "Extracted data integrates natively with SAP, Dynamics 365, Salesforce, ServiceNow, Workday, and custom APIs — pushing structured outputs directly into your workflows without manual re-keying.",
  },
]

const engagements = [
  {
    icon: Zap,
    title: "Fixed-Price Sprint",
    subtitle: "2–4 weeks",
    href: "/engage/outcome-based-project",
    desc: "We scope a single high-impact document workflow — invoice processing, KYC classification, or claims extraction — define clear accuracy metrics, and deliver a production pipeline. Fixed price, no surprises.",
    bullets: ["One document workflow scoped and built", "Vision LLM extraction and classification deployed", "Evaluated against agreed accuracy benchmarks"],
  },
  {
    icon: Users,
    title: "Dedicated Document AI Squad",
    subtitle: "Monthly retainer",
    href: "/engage/managed-ai-engineer",
    desc: "Embed a pre-vetted AI engineer specialised in Document AI, RAG pipelines, and Vision LLMs into your team. Ideal for CTOs with a roadmap but a 3-month hiring bottleneck for this specialist skill.",
    bullets: ["Senior Document AI engineer embedded in your team", "Full ownership of your document pipeline roadmap", "Flexible scope — build, iterate, and expand"],
  },
  {
    icon: Brain,
    title: "IDP Rescue & Optimisation",
    subtitle: "Assessment + fix",
    href: "/engage/app-rescue",
    desc: "Is your existing IDP pipeline hallucinating, failing on non-standard layouts, or costing too much in token fees? Our SWAT team audits the codebase, transitions to hybrid OCR/LLM architecture, and deploys confidence scoring.",
    bullets: ["Full pipeline audit and accuracy benchmark", "Transition to Vision LLM hybrid architecture", "Confidence scoring and HITL validation deployed"],
  },
]

const faqs = [
  {
    q: "What is intelligent document processing (IDP)?",
    a: "Intelligent document processing (IDP) is the use of AI, machine learning, and large language models to automatically classify, extract, validate, and route data from unstructured documents — PDFs, scanned images, forms, and emails — at scale. Unlike traditional OCR, which relies on fixed templates and position-based rules, IDP uses layout-aware models and Vision LLMs to handle variability in document formats, handwriting, and image quality. The result is a pipeline that can read any document, understand its structure, extract the right fields, and push data into downstream systems without manual intervention.",
  },
  {
    q: "What are the main intelligent document processing use cases?",
    a: "The highest-volume IDP use cases are: (1) KYC and identity verification in banking — classifying government IDs, passports, and utility bills; (2) mortgage and loan document processing — sorting and extracting data from paystubs, bank statements, and tax returns; (3) insurance claims processing — extracting data from medical bills, police reports, and repair estimates; (4) accounts payable automation — 3-way matching of invoices, purchase orders, and receipts; (5) medical records indexing — classifying EHRs and physician notes; (6) contract lifecycle management — classifying contract types and extracting key clauses. Banking, financial services, and insurance (BFSI) is the single largest vertical by document volume.",
  },
  {
    q: "What is the difference between OCR and intelligent document processing?",
    a: "Traditional OCR (Optical Character Recognition) converts document images into machine-readable text using positional rules and fixed templates — it breaks when layouts change, handwriting appears, or image quality is poor. Intelligent document processing goes several layers deeper: it uses Vision LLMs to understand document semantics (not just characters), classifies document types dynamically, writes context-aware extraction prompts based on detected layout, validates extracted fields against business rules, and routes exceptions to human reviewers. IDP handles variability; OCR requires uniformity.",
  },
  {
    q: "What is document classification and how does AI do it?",
    a: "Document classification is the process of automatically identifying what type of document has arrived — an invoice, an ID, a contract, a medical record, a customs form — so it can be routed to the correct extraction pipeline. AI document classification uses layout-aware models and Vision LLMs trained on document structure patterns to classify incoming documents even when templates vary across vendors, geographies, or time periods. Unlike rule-based classifiers that rely on specific keywords or positions, AI classifiers generalise across format variations and can handle novel document types with minimal retraining.",
  },
  {
    q: "What is an AI document agent?",
    a: "An AI document agent is an autonomous AI system that does more than extract data — it reasons over documents, takes actions, and orchestrates multi-step workflows. For example, an AI document agent processing an insurance claim will: extract data from the medical bill, retrieve the patient's policy document via RAG, determine whether the treatment is covered, calculate the payable amount, and draft an approval or rejection email — all without human intervention for straightforward cases. AI document agents combine Vision LLMs for extraction, RAG for contextual reasoning, function calling for system actions, and HITL escalation for edge cases.",
  },
  {
    q: "Which industries benefit most from intelligent document processing?",
    a: "The Banking, Financial Services, and Insurance (BFSI) sector processes the highest volume of documents and delivers the strongest ROI from IDP — driven by KYC, mortgage processing, claims, and underwriting workflows. Healthcare follows closely, with EHR indexing, medical billing, and prior authorisation processing. Legal and compliance teams benefit significantly from contract classification and eDiscovery. Supply chain and logistics operations use IDP for accounts payable, customs compliance, and freight documentation. Human resources rounds out the top verticals with resume parsing and employee records management.",
  },
  {
    q: "Is intelligent document processing HIPAA and SOC 2 compliant?",
    a: "Yes — we build IDP pipelines with compliance requirements as a first-class design constraint. For healthcare clients, we implement HIPAA-compliant architectures with PII redaction, data residency controls, encrypted storage, and audit logging of every document access and extraction event. For financial services and enterprise clients requiring SOC 2 compliance, we deploy on-premise or private cloud LLM options (avoiding third-party API data transmission for sensitive documents), implement role-based access controls, and provide full audit trails. We also support GDPR-compliant architectures for European document workflows. See our security approach on the Azure AI Foundry security guide.",
  },
  {
    q: "How does intelligent document processing improve claims processing in insurance?",
    a: "In insurance claims processing, IDP eliminates the manual bottleneck of a claims handler reading, classifying, and keying data from each submitted document — medical bills, accident photos, police reports, and repair estimates. An AI document agent classifies each incoming document, extracts the relevant fields (procedure codes, amounts, dates, provider details), cross-references them against the policy document via RAG, checks coverage rules, and either auto-approves straightforward claims or escalates complex cases to a human adjudicator with all relevant data pre-populated. Based on production deployments, insurers typically see 60–80% reduction in manual processing time and significant improvement in claims cycle time.",
  },
  {
    q: "How long does it take to implement an intelligent document processing solution?",
    a: "A focused IDP sprint targeting a single document workflow — invoice processing, KYC classification, or insurance claims extraction — typically takes 2–4 weeks from scoping to production. This covers document source integration, Vision LLM extraction configuration, confidence scoring, HITL validation interface, and downstream system push. More complex multi-document-type pipelines with extensive ERP integration typically require 6–12 weeks. The consistently fastest approach: start with one high-volume, high-value document type, prove ROI, then expand iteratively — rather than attempting a full enterprise IDP platform in a single build.",
  },
  {
    q: "What does intelligent document processing cost?",
    a: "A fixed-price IDP sprint targeting one document workflow — invoice processing, KYC classification, or claims extraction — typically costs $25,000–$60,000, covering pipeline design, Vision LLM extraction, HITL validation, and downstream integration. Larger multi-workflow enterprise implementations for BFSI and healthcare clients typically run $75,000–$200,000+. Dedicated Document AI Squad engagements (embedded engineer on your team) are priced as monthly retainers. The ROI case is compelling: manual document handling typically costs $2–$15 per document including labour and error-correction; at scale, automated IDP reduces this to fractions of a cent per document.",
  },
]

export default function IntelligentDocumentProcessingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section id="hero" className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            {/* P2-C: breadcrumb with <time> for GEO freshness (P3-B) */}
            <div className="flex items-center justify-between flex-wrap gap-y-1 mb-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-foreground">Intelligent Document Processing</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-03">Updated June 2026</time>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">AI Service · Kovil AI</p>

            {/* P1-B: primary keyword now in H1 */}
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              Intelligent Document Processing <span className="text-accent">&amp; AI Document Agents</span>
            </h1>
            {/* Compelling subline — moved out of H1 */}
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              Read, reason, and act — not just OCR.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We design, build, and deploy production Intelligent Document Processing (IDP) pipelines powered by Vision LLMs and AI Document Agents — cutting manual document handling by 70–80% across BFSI, Insurance, Healthcare, and Legal, based on production deployments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/engage/outcome-based-project">
                <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                  View Engagement Models
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — 3D pipeline visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block"
            style={{ perspective: "1400px" }}
          >
            <div
              className="rounded-2xl p-5 space-y-3 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #0d1117 0%, #0c1629 50%, #0f0d1a 100%)",
                transform: "rotateY(-10deg) rotateX(4deg)",
                transformStyle: "preserve-3d",
                boxShadow: "32px 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(249,115,22,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Dot grid */}
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
              {/* Orange top-edge glow */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)" }} />
              {/* Ambient orange orb */}
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)" }} />

              {/* Status bar */}
              <div className="flex items-center gap-2 relative">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
                  AI Document Agent · Processing
                </span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              {/* Input documents */}
              <div className="grid grid-cols-3 gap-2 relative">
                {[
                  { label: "Invoice PDF",     color: "#F97316" },
                  { label: "Medical Record",  color: "#60A5FA" },
                  { label: "Insurance Claim", color: "#34D399" },
                ].map((doc) => (
                  <div key={doc.label}
                    className="rounded-xl p-2.5 text-center transition-colors"
                    style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${doc.color}28` }}>
                    <FileText className="h-4 w-4 mx-auto mb-1" style={{ color: doc.color }} />
                    <span className="text-[10px] leading-tight block" style={{ color: "rgba(255,255,255,0.5)" }}>{doc.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4" style={{ background: "rgba(249,115,22,0.35)" }} />
              </div>

              {/* AI processing card */}
              <div className="rounded-xl p-3 relative"
                style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.3)" }}>
                <div className="flex items-center gap-2 mb-2.5">
                  <Brain className="h-3.5 w-3.5" style={{ color: "#F97316" }} />
                  <span className="text-[11px] font-bold" style={{ color: "#F97316" }}>AI Document Agent</span>
                </div>
                <div className="space-y-1.5">
                  {["Document Classification", "Vision LLM Extraction", "Confidence Scoring & HITL"].map((step) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: "#4ade80" }} />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.6)" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4" style={{ background: "rgba(249,115,22,0.35)" }} />
              </div>

              {/* Extracted data */}
              <div className="rounded-xl p-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "rgba(255,255,255,0.3)" }}>
                  Extracted Data · 99.1% Confidence
                </div>
                <div className="space-y-1">
                  {[
                    { label: "Type",     value: "Invoice",          badge: "99.1%" },
                    { label: "Vendor",   value: "Acme Corporation", badge: "98.7%" },
                    { label: "Amount",   value: "$45,230.00",        badge: "99.8%" },
                    { label: "PO Match", value: "PO-2026-4471",     badge: "✓ Matched" },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-16 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{field.label}</span>
                      <span className="font-medium flex-1 px-2" style={{ color: "rgba(255,255,255,0.85)" }}>{field.value}</span>
                      <span className="text-[10px] font-semibold" style={{ color: "#4ade80" }}>{field.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Downstream action */}
              <div className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Zap className="h-3 w-3 shrink-0" style={{ color: "#F97316" }} />
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Pushed to SAP ERP · Approval workflow triggered
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Proof bar (P3-D: real stats from case studies) ───────────────────── */}
      <section className="border-y border-border bg-muted/10 py-7">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {[
              { stat: "78%",              label: "faster contract review — law firm case study" },
              { stat: "95%",              label: "manual entry eliminated — HealthTech case study" },
              { stat: "60–80%",           label: "reduction in claims processing time" },
              { stat: "2–4 weeks",        label: "to production on a fixed-price sprint" },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center gap-1">
                <span className="font-display font-black text-2xl text-foreground">{item.stat}</span>
                <span className="text-xs text-muted-foreground max-w-[160px] leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/40 mt-4">
            Based on{" "}
            <Link href="/case-studies" className="underline hover:text-muted-foreground transition-colors">
              deployed client projects
            </Link>
          </p>
        </div>
      </section>

      {/* ── OCR vs IDP ────────────────────────────────────────────────────────── */}
      <section id="ocr-vs-idp" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">The Problem</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Why template-based OCR breaks — and IDP doesn&apos;t.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Traditional OCR was built for uniform, high-quality documents with fixed layouts. Enterprise documents are none of those things.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-border bg-background p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Legacy OCR / Template-Based</p>
              <ul className="space-y-3">
                {[
                  "Fails when vendor changes invoice layout",
                  "Breaks on smartphone photos and skewed scans",
                  "Requires manual template maintenance per document type",
                  "Cannot handle handwriting or mixed-format documents",
                  "No reasoning — extracts wrong fields without knowing it",
                  "Zero downstream action — data sits in a queue for humans",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-destructive/10 flex items-center justify-center text-destructive text-[10px] font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl border border-accent/30 bg-accent/5 p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-4">Intelligent Document Processing — Kovil AI</p>
              <ul className="space-y-3">
                {[
                  "Layout-aware Vision LLMs adapt to any document format",
                  "Handles scanned images, photos, PDFs, and handwriting",
                  "Zero template maintenance — AI classifies document type dynamically",
                  "Self-corrects using confidence scoring and HITL escalation",
                  "Reasons over documents using RAG and business rules",
                  "Autonomously acts — updates ERP, sends emails, flags anomalies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Industries ────────────────────────────────────────────────────────── */}
      <section id="industries" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Industries</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Where document classification delivers the most value.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon
            const card = (
              <motion.div key={ind.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-muted/20 p-6 hover:border-accent/40 hover:bg-muted/40 transition-all h-full">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg mb-3">{ind.label}</h3>
                <ul className="space-y-2 mb-4">
                  {ind.useCases.map((uc) => (
                    <li key={uc} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{uc}
                    </li>
                  ))}
                </ul>
                {ind.href && (
                  <span className="text-xs font-semibold text-accent flex items-center gap-1">
                    Deep-dive guide <ArrowRight className="h-3 w-3" />
                  </span>
                )}
              </motion.div>
            )
            return ind.href ? (
              <Link key={ind.label} href={ind.href} className="block">{card}</Link>
            ) : (
              <div key={ind.label}>{card}</div>
            )
          })}
        </div>
        {/* P2-B: internal link to case studies */}
        <p className="mt-8 text-sm text-muted-foreground text-center">
          See how we built AI document agents for a law firm and a mortgage lender in our{" "}
          <Link href="/case-studies" className="text-accent font-semibold hover:underline">
            client case studies →
          </Link>
        </p>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From document upload to downstream action — fully automated.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/20 transition-all">
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

      {/* ── Capabilities ──────────────────────────────────────────────────────── */}
      <section id="capabilities" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Capabilities</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">The full IDP stack — from classification to compliance.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-muted/20 p-6">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-base mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            )
          })}
        </div>
        {/* P2-B: cross-link to Azure IDP use case */}
        <div className="mt-8 rounded-2xl border border-border bg-muted/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-sm text-foreground">Running on Microsoft Azure?</p>
            <p className="text-sm text-muted-foreground mt-0.5">See our Azure AI Document Intelligence Agent — a pre-built IDP pipeline on Azure AI Foundry.</p>
          </div>
          <Link href="/azure-ai-foundry/enterprise/document-intelligence-agent" className="shrink-0">
            <Button variant="outline" className="rounded-full text-sm font-semibold px-5 h-9 whitespace-nowrap">
              Azure IDP Agent <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Engagement Models ─────────────────────────────────────────────────── */}
      <section id="engagement-models" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">How We Engage</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Three ways to work with us on document AI.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((eng, i) => {
              const Icon = eng.icon
              return (
                <motion.div key={eng.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-background p-7 flex flex-col">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-display font-bold text-xl">{eng.title}</h3>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">{eng.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{eng.desc}</p>
                  <ul className="space-y-2 mb-5 mt-auto">
                    {eng.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                      </li>
                    ))}
                  </ul>
                  {/* P2-B: internal link to each engagement page */}
                  <Link href={eng.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all group">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">FAQ</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Intelligent document processing — common questions.</h2>
        <div id="what-is-idp" className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-muted/20 p-6">
              <h3 className="font-display font-bold text-base mb-3">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Cut document processing time by 70–80%. Start with one workflow.</h2>
            <p className="text-background/60 text-base">Fixed-price sprint. One document type. Production pipeline delivered in 2–4 weeks — evaluated against agreed accuracy benchmarks.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/case-studies">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                See Case Studies
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
