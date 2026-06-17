'use client'

import { motion } from "motion/react"
import {
  FileText, Brain, CheckCircle2, ArrowRight, ChevronRight,
  Shield, Lock, Clock, Zap, Users, ShieldCheck, Database,
  AlertTriangle, Heart, Car, Home, Stethoscope, FileSearch,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { openCalendly } from "../../lib/calendly"
import Link from "next/link"

// ── Use-case data ─────────────────────────────────────────────────────────────
const useCases = [
  {
    id: "claims-processing-automation",
    icon: FileSearch,
    color: "#F97316",
    title: "Claims Processing Automation",
    subtitle: "FNOL, medical bills, repair estimates, and police reports",
    description:
      "Our insurance claims processing pipeline ingests every document type across the claims lifecycle — FNOL forms, medical bills, police reports, repair estimates, and body shop invoices — classifies them automatically, extracts structured claim data, and routes clean claims to straight-through processing while escalating complex or anomalous cases to adjusters.",
    bullets: [
      "FNOL form classification and structured data extraction",
      "Medical bill parsing — CPT codes, diagnosis codes, billed vs. allowed amounts",
      "Repair estimate line-item extraction and cross-validation",
      "Automated STP routing for low-complexity, high-confidence claims",
    ],
  },
  {
    id: "insurance-underwriting-document-processing",
    icon: FileText,
    color: "#0078D4",
    title: "Underwriting Document Processing",
    subtitle: "Prior histories, property records, and risk assessment documents",
    description:
      "Underwriting document processing eliminates the manual review of prior medical histories, property inspection reports, driver records, and loss run documents. Our AI extracts risk-relevant fields — loss history, property characteristics, medical conditions, driving violations — and feeds them directly into underwriting engines for faster, more consistent risk assessment.",
    bullets: [
      "Loss run extraction — claims history, frequency, severity by policy period",
      "Property inspection report parsing — construction type, age, condition, upgrades",
      "Motor vehicle record (MVR) extraction — violations, accidents, licence status",
      "Prior medical history classification for life and health underwriting",
    ],
  },
  {
    id: "prior-authorization-automation",
    icon: Stethoscope,
    color: "#10B981",
    title: "Prior Authorization Automation",
    subtitle: "Healthcare insurance PA requests — reduce manual review by 80%",
    description:
      "Prior authorization (PA) is one of the most document-intensive workflows in health insurance. Our PA automation pipeline classifies incoming PA request documents, extracts diagnosis and procedure codes, matches them against formulary and coverage criteria, and routes auto-approvable requests through without human intervention — reserving clinical reviewer time for genuinely complex cases.",
    bullets: [
      "PA request classification and clinical document extraction",
      "ICD-10 / CPT code extraction and coverage criteria matching",
      "Supporting clinical documentation parsing — lab results, physician notes",
      "Auto-approval routing for criteria-matched requests; escalation queue for edge cases",
    ],
  },
  {
    id: "property-claims-document-processing",
    icon: Home,
    color: "#8B5CF6",
    title: "Property Claims Document Processing",
    subtitle: "Appraisals, contractor estimates, and catastrophe loss documents",
    description:
      "Property claims generate high document volumes per claim — contractor estimates, independent appraisals, building permits, photos, and public adjuster reports. Our pipeline classifies each document, extracts damage scope and cost fields, flags estimate discrepancies, and produces a structured claim summary for reserve-setting and settlement decisions.",
    bullets: [
      "Contractor estimate parsing — line items, labor, materials, overhead",
      "Independent appraisal field extraction and estimate reconciliation",
      "Catastrophe (CAT) loss document batch processing at scale",
      "Reserve recommendations based on extracted damage scope and cost benchmarks",
    ],
  },
  {
    id: "auto-claims-document-processing",
    icon: Car,
    color: "#F59E0B",
    title: "Auto Claims Document Processing",
    subtitle: "Collision reports, body shop invoices, and total loss valuations",
    description:
      "Auto claims combine multiple document types — police reports, photos, body shop estimates, rental invoices, and total loss valuations — across every claim. Our AI pipeline classifies and extracts all of these, cross-validates repair costs against industry benchmarks, identifies potential fraud signals, and routes straightforward claims to settlement without adjuster touch.",
    bullets: [
      "Police report extraction — parties, citations, accident narrative, officer details",
      "Body shop estimate parsing and benchmark cost comparison",
      "Total loss valuation document extraction — ACV, deductible, settlement calculation",
      "Rental invoice processing and coverage limit validation",
    ],
  },
  {
    id: "insurance-fraud-detection-documents",
    icon: AlertTriangle,
    color: "#EF4444",
    title: "Insurance Fraud Detection",
    subtitle: "Document-level fraud signals surfaced at classification time",
    description:
      "Insurance fraud costs the industry over $80 billion annually in the US alone. Our fraud detection layer analyses claim documents at classification time — identifying editing artifacts, duplicate claim patterns, provider anomalies, inflated repair estimates, and medical billing irregularities — and surfaces a fraud risk score alongside every extracted claim record.",
    bullets: [
      "Document tampering detection — editing artifacts, font inconsistencies",
      "Duplicate claim identification across claim IDs and policy numbers",
      "Inflated estimate flagging — line-item cost comparison against benchmark databases",
      "Medical billing anomaly detection — unbundling, upcoding, phantom billing patterns",
    ],
  },
]

// ── Extraction table ──────────────────────────────────────────────────────────
const extractionTable = [
  {
    docType: "FNOL Form",
    fields: "Claimant name, policy number, incident date, loss description, location",
    accuracy: "97–99%",
    integration: "Claims management system (Guidewire, Duck Creek)",
  },
  {
    docType: "Medical Bill / EOB",
    fields: "CPT codes, ICD-10 codes, billed amount, allowed amount, provider NPI, service dates",
    accuracy: "96–99%",
    integration: "Claims payment system, benefits engine",
  },
  {
    docType: "Repair Estimate",
    fields: "Vehicle / property details, damage items, labor hours, parts costs, total amount",
    accuracy: "96–98%",
    integration: "Claims system, reserve calculation engine",
  },
  {
    docType: "Police Report",
    fields: "Incident details, parties involved, citations, narrative, officer badge and precinct",
    accuracy: "94–97%",
    integration: "Claims management system, SIU platform",
  },
  {
    docType: "Property Appraisal",
    fields: "Property details, damage scope, replacement cost value, depreciation, ACV",
    accuracy: "95–98%",
    integration: "Reserve system, settlement workflow",
  },
  {
    docType: "Loss Run Report",
    fields: "Policy period, claims count, incurred losses, paid losses, open reserves, loss ratio",
    accuracy: "97–99%",
    integration: "Underwriting engine, pricing model",
  },
]

// ── How-we-build steps ────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    label: "Ingest",
    title: "Connect Your Insurance Document Sources",
    desc: "We connect every document intake channel — claimant portals, email inboxes, fax-to-digital feeds, mobile photo uploads, and API endpoints from broker and TPA systems — into a unified ingestion pipeline. FNOL forms, medical records, photos, scanned paper documents, and digital PDFs are all normalised automatically before processing.",
    bullets: [
      "Multi-source intake: portal, email, fax-to-digital, API, mobile upload",
      "Automatic image quality normalisation and de-skew for scanned documents",
      "Duplicate claim detection and document versioning at intake",
    ],
  },
  {
    number: "02",
    label: "Classify & Extract",
    title: "AI Agent Classifies Claims and Extracts Structured Data",
    desc: "Our AI Document Agent uses Vision LLMs (GPT-4o Vision, Claude) and layout-aware models to classify each insurance document type — FNOL, medical bill, repair estimate, police report, or appraisal — extract all relevant claim fields with confidence scores, apply fraud detection signals, and escalate low-confidence or high-risk documents to adjuster review via a HITL interface.",
    bullets: [
      "Document type classification across all insurance lines — P&C, health, life, specialty",
      "Vision LLM extraction with field-level confidence scores for every claim field",
      "Real-time fraud signal scoring embedded at classification — no separate batch process",
    ],
  },
  {
    number: "03",
    label: "Integrate",
    title: "Push to Claims Management and Underwriting Systems",
    desc: "Extracted and validated claim data flows automatically into your claims management system, underwriting engine, payment platform, or data warehouse. The agent triggers downstream workflows — STP claim settlement, reserve updates, adjuster queue assignments, or SIU referrals — without manual re-keying or system-switching.",
    bullets: [
      "Native connectors for Guidewire ClaimCenter, Duck Creek, Majesco, and custom systems",
      "Automated downstream triggers: STP settlement, reserve update, adjuster assignment",
      "Exception routing with full evidence chain — every decision logged and traceable",
    ],
  },
]

// ── Compliance badges ─────────────────────────────────────────────────────────
const complianceItems = [
  {
    icon: Heart,
    title: "HIPAA Compliance",
    desc: "Health insurance claim document processing with BAA, PHI handling controls, minimum necessary access, and audit logging aligned to HIPAA Security Rule requirements.",
  },
  {
    icon: ShieldCheck,
    title: "NAIC & State DOI Standards",
    desc: "Claims processing timelines and documentation standards aligned to NAIC model laws and state Department of Insurance requirements across all 50 US states.",
  },
  {
    icon: Shield,
    title: "SOC 2 Type II",
    desc: "On-premise and private cloud LLM deployment options. Sensitive claim documents — medical records, police reports, financial data — never transmitted to third-party APIs without explicit authorisation.",
  },
  {
    icon: Database,
    title: "SIU Audit Trails",
    desc: "Every fraud signal, document review event, and adjuster escalation is logged to an immutable audit trail for SIU investigations, regulatory examinations, and litigation support.",
  },
]

// ── Engagement models ─────────────────────────────────────────────────────────
const engagements = [
  {
    icon: Zap,
    title: "Fixed-Price Sprint",
    subtitle: "2–4 weeks",
    href: "/engage/outcome-based-project",
    desc: "We scope one high-impact insurance document workflow — claims processing automation, prior authorization, or underwriting document extraction — define clear accuracy benchmarks, and deliver a production pipeline at a fixed price.",
    bullets: [
      "One insurance document workflow scoped and built to production",
      "Vision LLM extraction and fraud scoring deployed",
      "Delivered against agreed field-level accuracy and STP rate benchmarks",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Insurance Document AI Squad",
    subtitle: "Monthly retainer",
    href: "/engage/managed-ai-engineer",
    desc: "Embed a pre-vetted AI engineer specialised in insurance document processing, claims automation, and ClaimCenter/Duck Creek integrations into your team. Ideal for carriers and MGAs with a document automation roadmap.",
    bullets: [
      "Senior Document AI engineer embedded in your team",
      "Full ownership of your insurance IDP pipeline roadmap",
      "Flexible scope — auto claims today, PA automation next quarter",
    ],
  },
  {
    icon: Brain,
    title: "IDP Rescue & Optimisation",
    subtitle: "Assessment + fix",
    href: "/engage/app-rescue",
    desc: "Is your existing claims document pipeline producing low STP rates, missing fraud signals, or failing on handwritten FNOL forms? Our SWAT team audits and fixes it.",
    bullets: [
      "Full pipeline audit against your claims document corpus",
      "Transition to Vision LLM hybrid architecture for better accuracy",
      "Fraud detection model tuning and SIU workflow integration",
    ],
  },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is insurance claims processing automation?",
    a: "Insurance claims processing automation uses AI Document Agents to handle every document that flows through a claim — FNOL forms, medical bills, repair estimates, police reports, and appraisals — without manual review for clean, high-confidence documents. The AI classifies each document, extracts structured claim data with confidence scores, applies fraud signals, and routes the claim to straight-through processing or adjuster review based on complexity and risk. Production claims automation pipelines typically reduce end-to-end claims cycle time by 40–70%.",
  },
  {
    q: "What is straight-through processing (STP) in insurance?",
    a: "Straight-through processing (STP) in insurance refers to claims that can be validated, approved, and settled without any human intervention — end to end. AI-powered insurance IDP enables STP by extracting and validating all claim fields automatically, cross-checking them against policy terms and coverage limits, scoring fraud risk, and triggering payment without an adjuster touching the file. Typical STP rates achievable with modern insurance IDP range from 30–60% of total claim volume for standard personal lines.",
  },
  {
    q: "How does AI document processing reduce claims cycle time?",
    a: "AI document processing reduces claims cycle time in insurance by eliminating the manual steps that create the most delay: sorting and indexing incoming documents, keying claim data from FNOL forms and medical bills, cross-referencing repair estimates against policy limits, and routing files to the correct adjuster queue. Each of these steps — which typically takes hours or days manually — is completed in seconds by an AI Document Agent. Production insurance IDP deployments typically cut document-related cycle time by 40–70%.",
  },
  {
    q: "Can AI detect fraudulent insurance claims from documents?",
    a: "Yes. AI document processing can surface fraud signals at classification time — before a human reviewer sees the document. These signals include: document editing artifacts (inconsistent fonts, metadata mismatches, altered field values), duplicate claim patterns across policy numbers and claim IDs, inflated repair estimates compared to benchmark cost databases, medical billing anomalies (unbundling, upcoding, phantom billing), and narrative inconsistencies between FNOL descriptions and police reports. Fraud risk scores are appended to every extracted claim record for SIU review.",
  },
  {
    q: "What is prior authorization automation in health insurance?",
    a: "Prior authorization (PA) automation in health insurance uses AI Document Agents to process incoming PA request packets — which typically include physician request forms, clinical supporting documentation, lab results, and prior treatment records — classify all documents, extract diagnosis and procedure codes, match them against formulary and coverage criteria, and automatically approve PA requests that meet criteria without clinical reviewer intervention. PA automation typically reduces prior auth processing time from 2–5 days to under 2 hours for criteria-matched requests.",
  },
  {
    q: "What insurance document types does the AI handle?",
    a: "Our insurance IDP pipeline handles: FNOL (First Notice of Loss) forms, medical bills and Explanations of Benefits (EOB), repair estimates and body shop invoices, police and incident reports, property appraisals and inspection reports, contractor estimates, loss run reports, prior authorisation request packets, clinical notes and lab results, motor vehicle records (MVR), death certificates, commercial policy documents and endorsements, and reinsurance bordereau files. Any PDF, scanned image, smartphone photo, or digital form that flows through an insurance workflow can be processed.",
  },
  {
    q: "How long does insurance claims document automation take to implement?",
    a: "A production insurance claims document automation pipeline targeting a defined document set — for example, FNOL forms, medical bills, and repair estimates for auto claims — typically takes 2–4 weeks from scoping to production. This covers document intake setup, Vision LLM classification and extraction, confidence scoring, fraud signal integration, HITL exception queue, and integration with your claims management system. More complex multi-line workflows with extensive document variety typically require 4–8 weeks.",
  },
  {
    q: "Is insurance IDP HIPAA and SOC 2 compliant?",
    a: "Yes. For health insurance and any workflow touching PHI (Protected Health Information), we build HIPAA-compliant pipelines with Business Associate Agreements, PHI handling controls, minimum necessary access policies, and full HIPAA Security Rule audit logging. For SOC 2 compliance, we offer on-premise or private cloud LLM deployment so sensitive claim documents never leave your infrastructure. Every document event — intake, classification, extraction, fraud scoring, human review — is logged to an immutable audit trail for regulatory examination and litigation support.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section id="hero" className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center justify-between flex-wrap gap-y-1 mb-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href="/intelligent-document-processing" className="hover:text-foreground transition-colors">
                  Intelligent Document Processing
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-foreground">Insurance</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-17">Updated June 2026</time>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">
              Industry Focus · Insurance
            </p>

            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              Insurance Claims Processing{" "}
              <span className="text-accent">&amp; AI Document Automation</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              FNOL automation, claims document extraction, and prior authorisation — production pipelines for P&amp;C, health, and life insurers.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We design, build, and deploy production Intelligent Document Processing (IDP) pipelines
              for insurance — automating claims document classification, FNOL data extraction, repair estimate
              parsing, medical bill processing, and prior authorisation. Fixed-price sprints, 2–4 weeks to production.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/intelligent-document-processing">
                <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                  IDP Platform Overview
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — 3D insurance pipeline visual */}
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
                  AI Document Agent · Insurance Claims
                </span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              {/* Input documents */}
              <div className="grid grid-cols-3 gap-2 relative">
                {[
                  { label: "FNOL Report",      color: "#F97316" },
                  { label: "Medical Bill",     color: "#60A5FA" },
                  { label: "Repair Estimate",  color: "#34D399" },
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
                  {["Claims Classification", "Damage Data Extraction", "Fraud Risk Scoring"].map((step) => (
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
                  Extracted Data · 98.6% Confidence
                </div>
                <div className="space-y-1">
                  {[
                    { label: "Type",    value: "Auto Liability",     badge: "99.1%" },
                    { label: "Policy",  value: "POL-2026-8821",      badge: "99.4%" },
                    { label: "Damage",  value: "$18,450.00",          badge: "98.2%" },
                    { label: "Risk",    value: "Low — STP eligible",  badge: "✓ Auto" },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-14 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{field.label}</span>
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
                  STP triggered · Reserves updated · Adjuster notified
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Proof stats bar ────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-muted/10 py-7">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {[
              { stat: "60–80%",     label: "reduction in claims document processing time" },
              { stat: "30–60%",     label: "straight-through processing rate on standard claims" },
              { stat: "95%+",       label: "field-level accuracy on medical bill extraction" },
              { stat: "2–4 weeks",  label: "to production on a fixed-price insurance sprint" },
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
              production deployments
            </Link>{" "}
            and industry benchmarks for insurance document automation.
          </p>
        </div>
      </section>

      {/* ── The challenge ─────────────────────────────────────────────────────── */}
      <section id="the-challenge" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">The Problem</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Insurance is drowning in documents — and manual review doesn&apos;t scale.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            A single auto claim can generate 15+ documents. A complex health claim may involve
            hundreds of pages of medical records, bills, and prior auth packets. A catastrophe event
            floods your team with thousands of claims simultaneously. Manual document handling is
            the bottleneck — and it compounds with every claim that comes in.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-border bg-background p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Manual / Legacy Claims Document Handling
              </p>
              <ul className="space-y-3">
                {[
                  "Adjusters manually key FNOL data — 20–40 minutes per claim file",
                  "Medical bill review requires clinical staff to read every line item",
                  "Repair estimates compared to benchmarks manually — slow and inconsistent",
                  "Fraud signals missed because reviewers are processing volume, not patterns",
                  "CAT events create backlogs that take weeks to clear — claimant satisfaction drops",
                  "PA requests take 2–5 days — physicians and patients wait for approvals",
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
              <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-4">
                Insurance IDP — Kovil AI
              </p>
              <ul className="space-y-3">
                {[
                  "FNOL data extracted and structured in seconds — adjuster starts with full context",
                  "Medical bills parsed at line-item level — CPT codes, amounts, provider details",
                  "Repair estimates benchmarked automatically — overages flagged at classification",
                  "Fraud signals scored on every document — SIU referrals triggered without manual review",
                  "CAT claim batches processed at scale — no backlog, STP for standard cases",
                  "PA auto-approval for criteria-matched requests — clinical reviewers handle edge cases only",
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

      {/* ── Use cases ─────────────────────────────────────────────────────────── */}
      <section id="use-cases" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Use Cases</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          Insurance IDP Use Cases: Claims, PA, Underwriting &amp; More
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Every use case below is a production-ready pipeline we design and deploy — not a demo.
          Each targets a specific, high-volume insurance document workflow where manual handling
          costs the most time, money, and customer satisfaction.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => {
            const Icon = uc.icon
            return (
              <motion.div
                key={uc.id}
                id={uc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-background p-6 hover:border-accent/30 transition-colors group"
              >
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${uc.color}18`, border: `1px solid ${uc.color}30` }}>
                  <Icon className="h-5 w-5" style={{ color: uc.color }} />
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">{uc.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{uc.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
                <ul className="space-y-1.5">
                  {uc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: uc.color }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Claims Processing deep-dive ───────────────────────────────────────── */}
      <section id="claims-processing" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Primary Use Case</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          Insurance Claims Processing Automation — How It Works
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Claims processing is the highest-volume, highest-stakes document AI use case in
          insurance. Every claim generates multiple documents — and every manual step in
          handling them adds cycle time, cost, and claimant dissatisfaction. Here is how
          our AI pipeline processes a claim from FNOL to settlement.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — what it does */}
          <div className="space-y-4">
            {[
              {
                step: "01",
                label: "FNOL Intake",
                text: "First Notice of Loss arrives via claimant portal, phone-transcribed form, email, mobile photo, or API. All formats — typed PDFs, handwritten forms, scanned paper, and SMS descriptions — are ingested and quality-normalised.",
              },
              {
                step: "02",
                label: "Document Classification",
                text: "The AI classifies each document in the claim file — FNOL form, police report, medical bill, repair estimate, or appraisal — and routes them into the correct extraction pipeline automatically. No manual sorting required.",
              },
              {
                step: "03",
                label: "Structured Data Extraction",
                text: "Vision LLM extracts all claim fields: claimant information, policy number, incident date and location, loss description, damage type, and all document-specific fields (CPT codes on medical bills, line-item costs on estimates). Confidence scores are generated per field.",
              },
              {
                step: "04",
                label: "Fraud Signal Scoring",
                text: "Every document is analysed for fraud signals at classification time — editing artifacts, duplicate patterns, benchmark deviations, and billing anomalies. A fraud risk score is appended to the claim record. High-risk claims are flagged for SIU review.",
              },
              {
                step: "05",
                label: "STP or Adjuster Routing",
                text: "Low-complexity, high-confidence claims meeting STP criteria are routed to automated settlement. Complex, low-confidence, or high-risk claims go to an adjuster queue pre-populated with all extracted data — the adjuster reviews context, not raw documents.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="h-8 w-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-display font-black text-accent text-xs">{item.step}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Right — metrics + document types */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Claims Automation — Performance Benchmarks</p>
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  { stat: "< 5s",    label: "per FNOL document — end-to-end extraction" },
                  { stat: "96–99%",  label: "field extraction accuracy on standard claims" },
                  { stat: "30–60%",  label: "STP rate on personal lines claims" },
                  { stat: "2–4 wks", label: "to production pipeline" },
                ].map((m) => (
                  <div key={m.stat} className="text-center p-3 rounded-xl bg-muted/20">
                    <p className="font-display font-black text-xl text-foreground">{m.stat}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/50">Based on production insurance IDP deployments across P&C, health, and specialty lines.</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Insurance Lines Covered</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Personal Auto", "Commercial Auto", "Homeowners / Property",
                  "Commercial Property", "Health Insurance", "Life Insurance",
                  "Workers' Compensation", "Liability", "Specialty / E&S Lines",
                  "Reinsurance", "Title Insurance",
                ].map((line) => (
                  <span key={line} className="text-xs bg-muted/30 border border-border px-2.5 py-1 rounded-full text-muted-foreground">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Extraction table ──────────────────────────────────────────────────── */}
      <section id="extraction-coverage" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Extraction Coverage</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Insurance Document Extraction: What the AI Extracts
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Every document type in the insurance workflow — from FNOL to loss run — is covered.
            Below are the fields extracted from each major insurance document type, with
            accuracy ranges from production deployments.
          </p>
          <div className="rounded-2xl border border-border bg-background overflow-hidden">
            <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-muted/30 border-b border-border">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Document Type</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground col-span-1">Extracted Fields</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Accuracy</span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Integration Target</span>
            </div>
            {extractionTable.map((row, i) => (
              <motion.div
                key={row.docType}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border last:border-0 hover:bg-muted/10 transition-colors"
              >
                <span className="text-sm font-semibold text-foreground">{row.docType}</span>
                <span className="text-sm text-muted-foreground col-span-1 leading-relaxed">{row.fields}</span>
                <span className="text-sm font-semibold text-green-600">{row.accuracy}</span>
                <span className="text-sm text-muted-foreground">{row.integration}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/50 mt-4">
            Accuracy figures represent field-level confidence on clean-to-moderate quality documents from production deployments.
            Handwritten or severely degraded documents are escalated to HITL validation automatically.
          </p>
        </div>
      </section>

      {/* ── How we build it ───────────────────────────────────────────────────── */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">How We Build It</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          From document intake to claims settlement — in three steps.
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Every insurance IDP engagement follows the same proven three-step delivery pattern
          — built around your existing document sources, claims systems, and compliance requirements.
        </p>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-8 items-start"
            >
              <div className="hidden md:flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-accent text-sm">{step.number}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 min-h-[60px] bg-border" />}
              </div>
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    {step.label}
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{step.desc}</p>
                <ul className="space-y-1.5">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-accent/5 border border-accent/20 px-6 py-4 flex items-center gap-4">
          <Brain className="h-5 w-5 text-accent shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Related service: </span>
            For health insurance claims on Azure infrastructure, see our{" "}
            <Link href="/azure-ai-foundry/enterprise/document-intelligence-agent" className="text-accent hover:underline font-medium">
              Azure AI Document Intelligence Agent
            </Link>{" "}
            for HIPAA-compliant, Azure-native claims document processing.
          </p>
        </div>
      </section>

      {/* ── Compliance ────────────────────────────────────────────────────────── */}
      <section id="compliance" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Compliance</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Built for regulated insurance environments.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Insurance IDP pipelines process sensitive PHI, PII, and financial data under
            a patchwork of federal and state regulations. We treat compliance as a first-class
            design constraint — HIPAA, NAIC, SOC 2, and state DOI requirements built in from day one.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {complianceItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
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

      {/* ── Engagement models ─────────────────────────────────────────────────── */}
      <section id="engagement-models" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Engagement Models</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          How to work with us on insurance document AI.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Three engagement models — matched to where you are: proving ROI on one claims
          workflow, scaling a document AI roadmap, or rescuing a broken pipeline.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {engagements.map((eng, i) => {
            const Icon = eng.icon
            return (
              <motion.div
                key={eng.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-base">{eng.title}</p>
                    <p className="text-xs text-muted-foreground">{eng.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{eng.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {eng.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
                <Link href={eng.href}
                  className="text-sm font-semibold text-accent hover:underline flex items-center gap-1.5 mt-auto">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">
            Insurance IDP — common questions.
          </h2>
          <div id="faq-grid" className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="font-semibold text-base mb-3 leading-snug">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section id="cta" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-accent/5 border border-accent/20 p-10 lg:p-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">Get Started</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5 max-w-2xl mx-auto">
            Ready to automate your insurance document workflows?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We will scope one high-impact document workflow — claims
            processing automation, prior authorisation, or underwriting document extraction —
            and give you a fixed-price delivery plan the same week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/case-studies">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                See Case Studies
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8">
            {[
              <><Clock className="h-3.5 w-3.5" /> 2–4 week sprint to production</>,
              <><Shield className="h-3.5 w-3.5" /> HIPAA · SOC 2 · NAIC compliant</>,
              <><CheckCircle2 className="h-3.5 w-3.5" /> Fixed price, no hourly billing</>,
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  )
}
