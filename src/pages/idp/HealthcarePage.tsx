'use client'

import { motion } from "motion/react"
import {
  FileText, Brain, CheckCircle2, ArrowRight, ChevronRight,
  Shield, Lock, Clock, Zap, Users, ShieldCheck, Database,
  Heart, Stethoscope, FlaskConical, ClipboardList, FileSearch, Activity,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { openCalendly } from "../../lib/calendly"
import Link from "next/link"

// ── Use-case data ─────────────────────────────────────────────────────────────
const useCases = [
  {
    id: "medical-records-indexing",
    icon: FileSearch,
    color: "#F97316",
    title: "Medical Records Indexing",
    subtitle: "EHRs, discharge summaries, physician notes, and referral letters",
    description:
      "Manual medical records indexing is one of the largest HIM cost centres in healthcare. Our AI pipeline classifies every incoming document — discharge summaries, physician progress notes, operative reports, and referral letters — extracts structured clinical data fields, assigns document types, and routes records directly into the EHR without manual keying. Release of information (ROI) requests are fulfilled in hours, not days.",
    bullets: [
      "Discharge summary and operative report classification and indexing",
      "Physician note extraction — chief complaint, assessment, plan, medications",
      "Referral letter routing — specialty, urgency, relevant history extracted",
      "EHR integration: Epic, Cerner, athenahealth, and HL7 FHIR APIs",
    ],
  },
  {
    id: "medical-billing-coding",
    icon: ClipboardList,
    color: "#0078D4",
    title: "Medical Billing & Coding",
    subtitle: "ICD-10, CPT code extraction and claim preparation — reduce coding backlogs",
    description:
      "Medical billing and coding is labour-intensive and error-prone. Our AI extracts ICD-10 diagnosis codes and CPT procedure codes directly from clinical documentation — physician notes, operative reports, and discharge summaries — and prepares structured claim data for submission. Coding accuracy improves, denial rates drop, and coders focus on complex cases rather than routine extraction.",
    bullets: [
      "ICD-10 and CPT code extraction from clinical documentation",
      "Claim scrubbing and completeness validation before submission",
      "Denial root cause classification from EOB and remittance documents",
      "Integration with billing systems: Epic Resolute, Cerner Revenue Cycle, athenaNet",
    ],
  },
  {
    id: "prior-authorization-provider",
    icon: ClipboardList,
    color: "#10B981",
    title: "Prior Authorization (Provider Side)",
    subtitle: "Reduce PA prep time by 70% — auto-populate requests from clinical records",
    description:
      "On the provider side, prior authorisation is a documentation burden — clinical staff spend hours pulling records, completing PA forms, and submitting supporting documentation to payers. Our AI auto-populates PA request packets from existing clinical records, extracts the relevant diagnosis and procedure codes, attaches supporting clinical documentation, and submits structured requests through payer portals.",
    bullets: [
      "PA request auto-population from clinical records — diagnosis, procedure, clinical criteria",
      "Supporting documentation identification and attachment from the patient chart",
      "Payer-specific form completion — adapts to each payer's PA requirements",
      "Status tracking and appeal document preparation when PAs are denied",
    ],
  },
  {
    id: "clinical-trial-document-processing",
    icon: FlaskConical,
    color: "#8B5CF6",
    title: "Clinical Trial Document Processing",
    subtitle: "Informed consent, CRFs, adverse events, and regulatory submissions",
    description:
      "Clinical trials generate enormous volumes of structured and unstructured documents — informed consent forms, case report forms (CRFs), adverse event reports, regulatory submissions, and site monitoring reports. Our AI pipeline classifies, extracts, and validates all of these against protocol definitions, flagging anomalies and missing data fields before they become GCP compliance issues.",
    bullets: [
      "Informed consent form version tracking and patient signature validation",
      "CRF data extraction and cross-validation against protocol definitions",
      "Adverse event report classification — seriousness, causality, expectedness",
      "21 CFR Part 11 compliant audit trails for all document events",
    ],
  },
  {
    id: "lab-pathology-report-extraction",
    icon: FlaskConical,
    color: "#F59E0B",
    title: "Lab & Pathology Report Extraction",
    subtitle: "Structured data from lab results, pathology reports, and imaging findings",
    description:
      "Lab and pathology reports contain the most clinically critical data in the patient record — and they arrive in dozens of formats from reference labs, in-house laboratories, and imaging centres. Our AI extracts structured result values, reference ranges, critical flag indicators, and ordering physician details from all report formats, routing abnormal results for immediate clinical review.",
    bullets: [
      "Lab result extraction — test name, value, units, reference range, critical flags",
      "Pathology report parsing — specimen type, diagnosis, grade, staging, pathologist details",
      "Radiology and imaging report extraction — modality, findings, impression, radiologist sign-off",
      "HL7 FHIR-formatted output for direct EHR integration",
    ],
  },
  {
    id: "healthcare-revenue-cycle-documents",
    icon: Activity,
    color: "#EF4444",
    title: "Revenue Cycle Document Processing",
    subtitle: "EOBs, remittances, and denial management — accelerate cash collections",
    description:
      "Healthcare revenue cycle management depends on fast, accurate processing of Explanations of Benefits, electronic remittance advices (ERA), and denial letters. Our AI extracts payment details, denial reason codes, and appeal deadlines from every payer document, reconciles payments against charges automatically, and populates denial management queues with all the context needed to file effective appeals.",
    bullets: [
      "EOB and ERA payment extraction — amounts, denial codes, adjustment reasons",
      "Denial reason code classification and appeal deadline tracking",
      "Automated charge-to-payment reconciliation with variance flagging",
      "Appeal letter preparation from extracted denial context and clinical documentation",
    ],
  },
]

// ── Extraction table ──────────────────────────────────────────────────────────
const extractionTable = [
  {
    docType: "Discharge Summary",
    fields: "Patient demographics, admission/discharge dates, diagnoses (ICD-10), procedures (CPT), discharge disposition, medications",
    accuracy: "96–99%",
    integration: "EHR (Epic, Cerner), HIM system",
  },
  {
    docType: "Lab Report",
    fields: "Test name, result value, units, reference range, critical flag, ordering physician, collection date",
    accuracy: "97–99%",
    integration: "EHR, LIS (Lab Information System)",
  },
  {
    docType: "Pathology Report",
    fields: "Specimen type, clinical history, diagnosis, grade, staging, margin status, pathologist sign-off",
    accuracy: "94–97%",
    integration: "EHR, oncology platform, tumour registry",
  },
  {
    docType: "Physician Note / SOAP",
    fields: "Chief complaint, history, assessment, plan, medications prescribed, follow-up instructions",
    accuracy: "93–97%",
    integration: "EHR, care coordination platform",
  },
  {
    docType: "EOB / Remittance Advice",
    fields: "Claim number, billed amount, allowed amount, paid amount, denial codes, adjustment reasons, appeal deadline",
    accuracy: "97–99%",
    integration: "Revenue cycle system, billing platform",
  },
  {
    docType: "Referral Letter",
    fields: "Referring provider, reason for referral, relevant history, urgency, requested specialist, supporting diagnoses",
    accuracy: "95–98%",
    integration: "EHR, care management platform, scheduling system",
  },
]

// ── How-we-build steps ────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    label: "Ingest",
    title: "Connect Your Healthcare Document Sources",
    desc: "We connect every document intake channel — EHR document queues, fax-to-digital feeds, patient portal uploads, HIE interfaces, and API endpoints from labs and imaging centres — into a unified ingestion pipeline. PDFs, scanned paper records, HL7 messages, DICOM reports, and fax-converted images are all handled with automatic quality normalisation and PHI-safe processing.",
    bullets: [
      "Multi-source intake: EHR queues, fax-to-digital, HIE, lab feeds, portal uploads",
      "Automatic image quality normalisation and de-skew for scanned records",
      "PHI detection and redaction controls applied at ingestion — HIPAA-safe from intake",
    ],
  },
  {
    number: "02",
    label: "Classify & Extract",
    title: "AI Agent Classifies Records and Extracts Clinical Data",
    desc: "Our AI Document Agent uses Vision LLMs (GPT-4o Vision, Claude) and clinical NLP models to classify each healthcare document type, extract structured clinical data fields with confidence scores, map extracted codes to ICD-10 and CPT terminologies, and flag missing or anomalous data for clinical review. Every extraction event is logged to a HIPAA-compliant audit trail.",
    bullets: [
      "Document type classification across 40+ healthcare document categories",
      "Clinical entity extraction — diagnoses, procedures, medications, lab values — with confidence scoring",
      "ICD-10 and CPT code mapping from free-text clinical documentation",
    ],
  },
  {
    number: "03",
    label: "Integrate",
    title: "Push to EHR, Billing, and Care Coordination Systems",
    desc: "Extracted and validated clinical data flows automatically into your EHR, revenue cycle system, care management platform, or data warehouse via HL7 FHIR or native API integrations. The agent triggers downstream workflows — coding queues, PA submissions, referral routing, lab result alerts, or denial management — without manual re-keying.",
    bullets: [
      "HL7 FHIR R4 output for Epic, Cerner, athenahealth, and interoperability platforms",
      "Native connectors for Epic Resolute, Cerner Revenue Cycle, and major billing systems",
      "Automated downstream triggers: coding queue, PA submission, referral routing, critical result alert",
    ],
  },
]

// ── Compliance badges ─────────────────────────────────────────────────────────
const complianceItems = [
  {
    icon: Heart,
    title: "HIPAA / HITECH",
    desc: "PHI handling with Business Associate Agreements, minimum necessary access controls, encryption at rest and in transit, and full HIPAA Security Rule audit logging. On-premise LLM deployment available.",
  },
  {
    icon: ShieldCheck,
    title: "21 CFR Part 11",
    desc: "Clinical trial document processing with electronic signature validation, audit trails, and access controls meeting FDA 21 CFR Part 11 requirements for clinical research environments.",
  },
  {
    icon: Shield,
    title: "SOC 2 Type II",
    desc: "On-premise and private cloud LLM deployment options. Sensitive patient records — medical histories, lab results, clinical notes — never transmitted to third-party APIs without explicit authorisation.",
  },
  {
    icon: Database,
    title: "HL7 / FHIR R4",
    desc: "Structured output in HL7 FHIR R4 format for interoperability with Epic, Cerner, and HIE platforms. LOINC and SNOMED CT terminologies supported for lab and clinical entity mapping.",
  },
]

// ── Engagement models ─────────────────────────────────────────────────────────
const engagements = [
  {
    icon: Zap,
    title: "Fixed-Price Sprint",
    subtitle: "2–4 weeks",
    href: "/engage/outcome-based-project",
    desc: "We scope one high-impact healthcare document workflow — medical records indexing, billing and coding automation, or prior auth document prep — define clear accuracy benchmarks, and deliver a production pipeline at a fixed price.",
    bullets: [
      "One healthcare document workflow scoped and built to production",
      "Vision LLM extraction and ICD-10/CPT mapping deployed",
      "Delivered against agreed field-level accuracy and throughput benchmarks",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Healthcare Document AI Squad",
    subtitle: "Monthly retainer",
    href: "/engage/managed-ai-engineer",
    desc: "Embed a pre-vetted AI engineer specialised in healthcare document processing, clinical NLP, and EHR integrations into your team. Ideal for health systems, HIM vendors, and RCM companies with a document automation roadmap.",
    bullets: [
      "Senior Document AI engineer embedded in your team",
      "Full ownership of your healthcare IDP pipeline roadmap",
      "Flexible scope — medical records indexing today, coding automation next quarter",
    ],
  },
  {
    icon: Brain,
    title: "IDP Rescue & Optimisation",
    subtitle: "Assessment + fix",
    href: "/engage/app-rescue",
    desc: "Is your existing healthcare document pipeline producing low coding accuracy, missing critical result flags, or failing HIPAA audit requirements? Our SWAT team audits and fixes it.",
    bullets: [
      "Full pipeline audit against your healthcare document corpus",
      "Clinical NLP and Vision LLM model tuning for your document mix",
      "HIPAA audit trail remediation and PHI handling hardening",
    ],
  },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is medical records indexing automation?",
    a: "Medical records indexing automation uses AI Document Agents to classify, extract, and route incoming health records — discharge summaries, physician notes, operative reports, lab results, and referral letters — without manual HIM staff intervention for standard document types. The AI assigns document categories, extracts structured clinical data fields, and routes records to the correct location in the EHR. This eliminates the manual sorting and keying that typically consumes the majority of HIM department time, reducing release-of-information turnaround from days to hours.",
  },
  {
    q: "How does AI improve medical billing and coding accuracy?",
    a: "AI improves medical billing and coding accuracy by extracting ICD-10 diagnosis codes and CPT procedure codes directly from clinical documentation — physician notes, operative reports, and discharge summaries — rather than relying on coders to read and interpret unstructured text. The AI maps clinical language to standardised terminology, flags documentation gaps that would cause denials, and validates code combinations against payer rules before submission. Production healthcare coding AI deployments typically achieve 90–96% coding accuracy on standard encounter types, with complex cases escalated to certified coders.",
  },
  {
    q: "What is prior authorization from the provider perspective?",
    a: "From the provider perspective, prior authorization is a documentation workflow — clinical staff must gather patient records, complete payer-specific PA request forms, attach supporting clinical documentation, and submit structured requests through payer portals or fax. AI automates this by pulling the relevant clinical data from the patient chart, auto-populating PA request forms, identifying and attaching supporting documentation, and submitting to payer systems. Provider-side PA automation typically reduces the staff time spent per PA request from 20–40 minutes to under 5 minutes.",
  },
  {
    q: "What healthcare document types does the AI handle?",
    a: "Our healthcare IDP pipeline handles: discharge summaries, physician progress notes, operative reports, pathology reports, radiology and imaging reports, lab results, referral letters, consent forms, Explanations of Benefits, electronic remittance advices, prior authorisation request packets, clinical trial case report forms, adverse event reports, problem lists, medication reconciliation documents, care transition documents, and insurance eligibility responses. Any document that flows through a healthcare, life sciences, or clinical research workflow can be processed.",
  },
  {
    q: "How does clinical data extraction differ from standard OCR?",
    a: "Standard OCR extracts text from documents using positional rules — it fails when layouts vary and has no understanding of clinical meaning. Clinical data extraction uses Vision LLMs and clinical NLP models to understand the semantic content of healthcare documents: recognising that 'Dx: T2DM' and 'Diagnosis: Type 2 Diabetes Mellitus' are the same entity and mapping both to ICD-10 code E11.9, identifying medication dosing instructions in free-text physician notes, and extracting lab values with their units and reference ranges even from non-standard lab formats. Clinical data extraction handles the variability and domain specificity that breaks template-based OCR.",
  },
  {
    q: "How long does healthcare document automation take to implement?",
    a: "A production healthcare document automation pipeline targeting a defined document set — for example, discharge summaries and lab reports for a specific facility — typically takes 2–4 weeks from scoping to production. This covers document intake setup, Vision LLM classification and extraction, ICD-10/CPT mapping, HIPAA audit trail logging, HITL exception queue for low-confidence extractions, and EHR integration via HL7 FHIR or native API. More complex multi-facility or multi-document-type deployments typically require 4–8 weeks.",
  },
  {
    q: "What clinical trial document processing capabilities does AI provide?",
    a: "AI clinical trial document processing covers: informed consent form version tracking and patient signature validation, case report form (CRF) data extraction and cross-validation against protocol definitions, adverse event report classification by seriousness and causality, site monitoring report summarisation, regulatory submission document indexing, and audit trail generation for all document events meeting 21 CFR Part 11 requirements. This eliminates the manual data entry that creates the most errors and delays in clinical trial data management.",
  },
  {
    q: "Is healthcare IDP HIPAA compliant?",
    a: "Yes. All our healthcare IDP pipelines are built with HIPAA compliance as a first-class design constraint. We offer Business Associate Agreements, PHI handling controls with minimum necessary access policies, encryption at rest and in transit, on-premise or private cloud LLM deployment options so patient records never leave the organisation's infrastructure, and full HIPAA Security Rule audit logging for every document event — intake, classification, extraction, human review, and downstream routing. For clinical research, we also support 21 CFR Part 11 audit trail requirements.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function HealthcarePage() {
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
                <span className="text-foreground">Healthcare &amp; Life Sciences</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-17">Updated June 2026</time>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">
              Industry Focus · Healthcare &amp; Life Sciences
            </p>

            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              Healthcare Document Processing{" "}
              <span className="text-accent">&amp; Clinical Data Extraction</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              Medical records indexing, billing &amp; coding automation, and clinical trial document processing — HIPAA-compliant pipelines for health systems, payers, and life sciences.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We design, build, and deploy production Intelligent Document Processing (IDP) pipelines
              for healthcare and life sciences — automating medical records indexing, ICD-10/CPT extraction,
              prior authorisation prep, lab report processing, and clinical trial document management.
              Fixed-price sprints, 2–4 weeks to production.
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

          {/* Right — 3D healthcare pipeline visual */}
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
                  AI Document Agent · Healthcare
                </span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              {/* Input documents */}
              <div className="grid grid-cols-3 gap-2 relative">
                {[
                  { label: "Medical Record",   color: "#F97316" },
                  { label: "Lab Report",       color: "#60A5FA" },
                  { label: "Clinical Note",    color: "#34D399" },
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
                  {["Document Classification", "Clinical Data Extraction", "HIPAA Audit Trail"].map((step) => (
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
                  Extracted Data · 97.4% Confidence
                </div>
                <div className="space-y-1">
                  {[
                    { label: "Patient",    value: "J. Morrison, DOB 1971",  badge: "99.1%" },
                    { label: "Dx",         value: "ICD-10: J18.9",           badge: "97.3%" },
                    { label: "Proc",       value: "CPT: 99213, 71046",       badge: "96.8%" },
                    { label: "Status",     value: "Coded — ready to bill",   badge: "✓ Auto" },
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
                  Pushed to Epic · Coding queue updated · Claim prepared
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
              { stat: "85%+",      label: "reduction in manual medical records indexing time" },
              { stat: "90–96%",    label: "coding accuracy on standard encounter types" },
              { stat: "70%",       label: "reduction in prior auth document prep time" },
              { stat: "2–4 weeks", label: "to production on a fixed-price healthcare sprint" },
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
            and industry benchmarks for healthcare document automation.
          </p>
        </div>
      </section>

      {/* ── The challenge ─────────────────────────────────────────────────────── */}
      <section id="the-challenge" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">The Problem</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Healthcare generates more documents per patient than any other industry — and most are still processed manually.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            A typical patient encounter generates 8–15 documents. A complex hospitalisation can produce
            hundreds of pages across records, labs, imaging reports, and billing documents.
            HIM departments, coding teams, and revenue cycle staff spend the majority of their time
            on document handling — not on the clinical and financial decisions that require human judgment.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-border bg-background p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Manual / Legacy Healthcare Document Handling
              </p>
              <ul className="space-y-3">
                {[
                  "HIM staff manually index 200–400 documents per day — error-prone and expensive",
                  "Coders read full clinical notes to find billable codes — 15–30 min per encounter",
                  "PA prep takes 20–40 minutes of clinical staff time per request",
                  "Lab critical values may sit in inboxes for hours before reaching the ordering provider",
                  "Coding denials traced back to missing documentation — revenue cycle disrupted",
                  "Clinical trial data entry introduces transcription errors into research datasets",
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
                Healthcare IDP — Kovil AI
              </p>
              <ul className="space-y-3">
                {[
                  "Medical records indexed automatically — HIM staff review exceptions, not every document",
                  "ICD-10 and CPT codes extracted from clinical notes — coders validate and submit",
                  "PA request packets auto-populated from the patient chart — staff review and send",
                  "Critical lab values routed in seconds — alert triggers before provider inbox",
                  "Documentation gaps flagged before coding — denial risk eliminated at source",
                  "CRF data extracted and validated against protocol — transcription errors eliminated",
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
          Healthcare IDP Use Cases: Records, Coding, Trials &amp; More
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Every use case below is a production-ready pipeline we design and deploy — not a demo.
          Each targets a specific, high-volume healthcare document workflow where manual handling
          costs the most time, money, and clinical risk.
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

      {/* ── Medical Records Indexing deep-dive ───────────────────────────────── */}
      <section id="medical-records-indexing" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Primary Use Case</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          Medical Records Indexing Automation — How It Works
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Medical records indexing is the highest-volume document AI use case in healthcare.
          Every patient encounter, referral, and lab result creates documents that must be
          classified, indexed, and routed into the EHR. Manual indexing consumes enormous
          HIM capacity. AI handles the routine cases — HIM staff handle the exceptions.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {[
              {
                step: "01",
                label: "Document Intake",
                text: "Records arrive via fax-to-digital feeds, patient portal uploads, HIE interfaces, lab system APIs, and direct EHR document queues. All formats are accepted — typed PDFs, handwritten notes, scanned paper records, and HL7 messages.",
              },
              {
                step: "02",
                label: "Document Classification",
                text: "The AI classifies each document into 40+ healthcare document categories — discharge summary, physician note, operative report, lab result, referral letter, consent form, or EOB — without requiring document-specific templates.",
              },
              {
                step: "03",
                label: "Clinical Data Extraction",
                text: "Vision LLM and clinical NLP extract structured fields: patient demographics, encounter dates, diagnoses (mapped to ICD-10), procedures (mapped to CPT), medications, allergies, and document-specific clinical data. Confidence scores are generated per field.",
              },
              {
                step: "04",
                label: "Validation & Flagging",
                text: "Extracted data is validated for completeness against document type requirements. Missing required fields, low-confidence extractions, and anomalous values are flagged for HIM staff review. Clean records are automatically indexed.",
              },
              {
                step: "05",
                label: "EHR Routing",
                text: "Indexed records are pushed to the correct EHR location via HL7 FHIR R4 or native API — patient chart, problem list, medication list, or results section — triggering downstream workflows such as coding queues or critical result alerts.",
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
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Medical Records Indexing — Performance Benchmarks</p>
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  { stat: "< 8s",    label: "per document — classification and extraction" },
                  { stat: "96–99%",  label: "document classification accuracy" },
                  { stat: "85%+",    label: "reduction in manual indexing time" },
                  { stat: "2–4 wks", label: "to production pipeline" },
                ].map((m) => (
                  <div key={m.stat} className="text-center p-3 rounded-xl bg-muted/20">
                    <p className="font-display font-black text-xl text-foreground">{m.stat}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/50">Based on production healthcare IDP deployments across health systems, HIM vendors, and RCM companies.</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">EHR &amp; System Integrations</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Epic (HL7 FHIR R4)", "Cerner / Oracle Health", "athenahealth",
                  "Meditech", "Allscripts", "eClinicalWorks",
                  "Veeva Vault (Clinical Trials)", "HL7 v2 / FHIR APIs",
                  "CommonWell / Carequality HIE",
                ].map((sys) => (
                  <span key={sys} className="text-xs bg-muted/30 border border-border px-2.5 py-1 rounded-full text-muted-foreground">
                    {sys}
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
            Healthcare Document Extraction: What the AI Extracts
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Every major healthcare document type is covered — from discharge summaries to
            remittance advices. Below are the fields extracted per document type, with
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
            Handwritten or degraded documents are escalated to HITL validation automatically.
          </p>
        </div>
      </section>

      {/* ── How we build it ───────────────────────────────────────────────────── */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">How We Build It</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          From document intake to EHR and billing — in three steps.
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Every healthcare IDP engagement follows the same proven three-step delivery pattern
          — built around your existing document sources, EHR systems, and compliance requirements.
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
            For Azure-native healthcare deployments, see our{" "}
            <Link href="/azure-ai-foundry/enterprise/document-intelligence-agent" className="text-accent hover:underline font-medium">
              Azure AI Document Intelligence Agent
            </Link>{" "}
            for HIPAA-compliant processing with Azure Health Data Services and Epic FHIR APIs.
          </p>
        </div>
      </section>

      {/* ── Compliance ────────────────────────────────────────────────────────── */}
      <section id="compliance" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Compliance</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Built for regulated healthcare environments.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Healthcare IDP pipelines process PHI, clinical records, and research data under some
            of the most stringent regulatory frameworks in technology. HIPAA, HITECH, 21 CFR Part 11,
            and HL7 interoperability requirements are built into every pipeline from day one.
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
          How to work with us on healthcare document AI.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Three engagement models — matched to where you are: proving ROI on one workflow,
          scaling a document AI roadmap, or rescuing a broken pipeline.
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
            Healthcare &amp; Life Sciences IDP — common questions.
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
            Ready to automate your healthcare document workflows?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We will scope one high-impact document workflow — medical
            records indexing, billing and coding automation, or prior auth document prep —
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
              <><Shield className="h-3.5 w-3.5" /> HIPAA · HITECH · SOC 2 compliant</>,
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
