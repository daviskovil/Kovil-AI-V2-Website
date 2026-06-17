'use client'

import { motion } from "motion/react"
import {
  FileText, Brain, CheckCircle2, ArrowRight, ChevronRight,
  Shield, Lock, Clock, Zap, Users, ShieldCheck, Database,
  UserCheck, ClipboardList, Award, BookOpen, FileSearch, Layers,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { openCalendly } from "../../lib/calendly"
import Link from "next/link"

const useCases = [
  {
    id: "resume-cv-parsing",
    icon: FileSearch,
    color: "#F97316",
    title: "Resume & CV Parsing",
    subtitle: "Automated candidate data extraction — skills, experience, education, certifications",
    description:
      "High-volume resume screening is the highest-cost manual task in talent acquisition. Our AI pipeline classifies resumes and CVs by format and source, extracts all structured candidate data — work history, skills, education, certifications, and contact details — and maps extracted data to your ATS schema without manual re-keying. Recruiters focus on assessment, not data entry.",
    bullets: [
      "Resume classification by format — PDF, Word, LinkedIn export, email attachment",
      "Structured extraction: candidate name, contact, employment history, skills, education, certifications",
      "Skills taxonomy normalisation — maps \"ML\", \"Machine Learning\", and \"PyTorch\" to unified skills graph",
      "ATS integration: Greenhouse, Lever, Workday Recruiting, SAP SuccessFactors, iCIMS",
    ],
  },
  {
    id: "employee-onboarding-documents",
    icon: ClipboardList,
    color: "#60A5FA",
    title: "Employee Onboarding Documents",
    subtitle: "I-9, W-4, direct deposit, offer letters, and new-hire form automation",
    description:
      "New-hire onboarding generates a flood of government forms, policy acknowledgements, and payroll setup documents that HR teams process manually under time pressure. Our AI pipeline classifies each document, extracts form field data, validates I-9 identity and eligibility information, and routes completed documents to the correct HRIS workflow — reducing onboarding document processing from days to hours.",
    bullets: [
      "I-9 Section 1 and Section 2 data extraction and E-Verify eligibility validation",
      "W-4 and state tax withholding form extraction and payroll system push",
      "Offer letter classification and key term extraction — start date, role, compensation, equity",
      "HRIS integration: Workday, BambooHR, ADP Workforce Now, SAP SuccessFactors",
    ],
  },
  {
    id: "background-check-documents",
    icon: UserCheck,
    color: "#34D399",
    title: "Background Check Documents",
    subtitle: "Criminal record, credit, employment verification, and professional licence check processing",
    description:
      "Background check document processing spans multiple third-party vendors, government sources, and formats — criminal records, credit reports, employment verification letters, professional licence checks, and international police clearance certificates. Our AI pipeline classifies each incoming background document, extracts key findings, flags adverse items against configurable decision rules, and routes results to the hiring team without manual review of standard clear reports.",
    bullets: [
      "Criminal record report classification and adverse item detection across jurisdictions",
      "Employment verification letter extraction — employer, dates, title, reason for leaving",
      "Professional licence check processing — licence number, issuing authority, expiry, status",
      "Configurable adverse action thresholds with FCRA-compliant escalation routing",
    ],
  },
  {
    id: "benefits-payroll-documents",
    icon: Layers,
    color: "#A78BFA",
    title: "Benefits & Payroll Documents",
    subtitle: "Benefits enrolment, payroll changes, and EOB processing for HR and finance teams",
    description:
      "Benefits enrolment and payroll change documents — election forms, qualifying life event documentation, payroll adjustment requests, and Explanations of Benefits — arrive in high volumes during open enrolment and throughout the year. Our AI pipeline classifies each document type, extracts relevant data fields, validates eligibility documentation against plan rules, and pushes structured data to payroll and benefits administration systems.",
    bullets: [
      "Benefits election form extraction — plan selections, coverage tier, dependent enrolment",
      "Qualifying life event document classification — marriage certificates, birth records, adoption papers",
      "Explanation of Benefits (EOB) extraction for FSA/HSA reimbursement workflows",
      "Payroll integration: ADP, Paychex, Workday Payroll, Ceridian Dayforce",
    ],
  },
  {
    id: "performance-development-documents",
    icon: Award,
    color: "#F59E0B",
    title: "Performance & Development Documents",
    subtitle: "Performance reviews, PIPs, promotion documents, and learning records processing",
    description:
      "Performance management generates structured and unstructured documents — annual review forms, 360-degree feedback surveys, performance improvement plans (PIPs), promotion recommendation memos, and learning completion certificates — that HR teams must index, route, and retain. Our AI pipeline classifies each document, extracts key ratings, goals, and decision outcomes, and routes to the correct talent management workflow.",
    bullets: [
      "Performance review form extraction — ratings, goal attainment, development areas, calibration scores",
      "PIP document classification and key milestone extraction for compliance audit trails",
      "Training completion certificate parsing — course name, provider, date, CPD credits",
      "Integration with talent platforms: Workday Talent, SAP SuccessFactors, Cornerstone, 15Five",
    ],
  },
  {
    id: "compliance-certification-tracking",
    icon: BookOpen,
    color: "#EC4899",
    title: "Compliance & Certification Tracking",
    subtitle: "Mandatory training records, licence renewals, and regulatory compliance documentation",
    description:
      "HR compliance teams must track mandatory training completions, professional licence renewals, regulatory certification documents, and employment eligibility reverifications across the entire workforce. Our AI pipeline processes incoming compliance documents — training certificates, licence renewal confirmations, right-to-work documentation — extracts expiry dates and credential details, and triggers renewal alerts before deadlines are missed.",
    bullets: [
      "Mandatory training certificate extraction with expiry tracking and automated renewal alerts",
      "Right-to-work document classification and re-verification scheduling (Form I-9 re-verification)",
      "Professional licence renewal document processing across regulated roles — nursing, engineering, finance",
      "OSHA training record extraction and compliance dashboard integration",
    ],
  },
]

const extractionTable = [
  {
    docType: "Resume / CV",
    fields: "Name, contact, employment history, job titles, dates, skills, education, certifications, publications",
    accuracy: "95–98%",
    integration: "ATS platform, skills taxonomy, recruiter dashboard",
  },
  {
    docType: "Form I-9",
    fields: "Employee name, DOB, SSN (last 4), employment eligibility, document type, document number, expiry",
    accuracy: "98–99%",
    integration: "E-Verify, HRIS, I-9 compliance tracker",
  },
  {
    docType: "W-4 / State Tax Form",
    fields: "Filing status, allowances, additional withholding, effective date, employee signature",
    accuracy: "97–99%",
    integration: "Payroll system, HRIS",
  },
  {
    docType: "Background Check Report",
    fields: "Report type, findings by category, adverse items, county/state searched, report date, vendor",
    accuracy: "94–97%",
    integration: "ATS, hiring decision workflow, FCRA adverse action queue",
  },
  {
    docType: "Training Certificate",
    fields: "Employee name, course name, provider, completion date, expiry date, CPD credits, instructor",
    accuracy: "96–99%",
    integration: "LMS, compliance tracker, HRIS",
  },
  {
    docType: "Offer Letter",
    fields: "Candidate name, role, department, start date, base salary, equity, sign-on bonus, expiry date",
    accuracy: "97–99%",
    integration: "ATS, DocuSign, onboarding workflow",
  },
]

const steps = [
  {
    number: "01",
    label: "Ingest",
    title: "Connect Your HR Document Sources",
    desc: "We connect every HR document source — email inboxes, HRIS upload portals, ATS document repositories, background check vendor APIs, benefits administration platforms, and SharePoint or Google Drive HR folders — into a unified ingestion pipeline. PDFs, Word documents, image scans, and structured form submissions are all handled with automatic format normalisation.",
    bullets: [
      "Multi-source intake: email, HRIS portals, ATS repositories, vendor APIs, cloud storage",
      "PII handling controls applied at ingestion — minimum-necessary-access data masking",
      "Document deduplication and version management for recurring HR document types",
    ],
  },
  {
    number: "02",
    label: "Classify & Extract",
    title: "AI Agent Classifies HR Documents and Extracts Structured Data",
    desc: "Our AI Document Agent uses Vision LLMs (GPT-4o, Claude) and HR-domain NLP models to classify each document type, extract all relevant structured fields, validate compliance-critical data (I-9 eligibility codes, licence status), and assign confidence scores — with full extraction audit trails for every document event.",
    bullets: [
      "HR document type classification across 30+ form and record categories",
      "Field-level extraction with confidence scores and human-in-the-loop exception routing",
      "I-9 eligibility code validation and E-Verify integration for compliance workflows",
    ],
  },
  {
    number: "03",
    label: "Integrate",
    title: "Push to HRIS, ATS, and Payroll Platforms",
    desc: "Extracted HR document data flows automatically into your HRIS, ATS, payroll system, LMS, or compliance tracker. The agent triggers downstream HR workflows — onboarding task creation, payroll system updates, compliance renewal alerts, ATS candidate profile updates — without manual re-keying or copy-paste errors.",
    bullets: [
      "Native connectors for Workday, SAP SuccessFactors, BambooHR, Greenhouse, ADP, and Lever",
      "Automated onboarding workflow triggers — tasks, document completion confirmations, IT provisioning",
      "Structured JSON output for bespoke HRIS and compliance system integrations",
    ],
  },
]

const complianceItems = [
  {
    icon: Shield,
    title: "I-9 / E-Verify",
    desc: "I-9 Section 1 and Section 2 data extraction with E-Verify submission support. Re-verification scheduling for temporary work authorisation documents. Full audit trail per USCIS requirements.",
  },
  {
    icon: Lock,
    title: "EEOC / Equal Employment",
    desc: "Demographic data handling controls aligned to EEOC guidance. No protected class data extracted or stored during resume screening unless explicitly required for affirmative action reporting.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR / CCPA",
    desc: "Candidate and employee PII handling with data minimisation controls. Right-to-erasure workflow support for GDPR Article 17 requests. Data residency options for EU employee record processing.",
  },
  {
    icon: Database,
    title: "SOC 2 Type II",
    desc: "On-premise and private cloud LLM deployment options. Sensitive HR data — I-9 documents, background check reports, payroll records — never transmitted to third-party APIs without explicit authorisation.",
  },
]

const engagements = [
  {
    icon: Zap,
    title: "Fixed-Price Sprint",
    subtitle: "2–4 weeks",
    href: "/engage/outcome-based-project",
    desc: "We scope one high-impact HR document workflow — resume parsing for high-volume roles, I-9 processing automation, or compliance certification tracking — define clear accuracy benchmarks, and deliver a production pipeline at a fixed price.",
    bullets: [
      "One HR document workflow scoped and built to production",
      "Vision LLM extraction deployed with PII handling and compliance controls",
      "Delivered against agreed field-level extraction accuracy benchmarks",
    ],
  },
  {
    icon: Users,
    title: "Dedicated HR Document AI Squad",
    subtitle: "Monthly retainer",
    href: "/engage/managed-ai-engineer",
    desc: "Embed a pre-vetted AI engineer specialised in HR document processing, HRIS integrations, and HR compliance automation into your team. Ideal for HR ops and people ops teams with a document automation roadmap.",
    bullets: [
      "Senior Document AI engineer embedded in your team",
      "Full ownership of your HR IDP pipeline roadmap",
      "Flexible scope — resume parsing today, onboarding document automation next quarter",
    ],
  },
  {
    icon: Brain,
    title: "IDP Rescue & Optimisation",
    subtitle: "Assessment + fix",
    href: "/engage/app-rescue",
    desc: "Is your existing HR document pipeline missing I-9 fields, producing low resume extraction accuracy, or failing on non-standard CV formats? Our SWAT team audits and fixes it.",
    bullets: [
      "Full pipeline audit against your HR document corpus",
      "HR NLP model tuning for your document types and HRIS schema",
      "Compliance control hardening for I-9, background check, and PII workflows",
    ],
  },
]

const faqs = [
  {
    q: "What is AI resume parsing?",
    a: "AI resume parsing uses Vision LLMs and HR-domain NLP models to extract structured candidate data from unstructured resume and CV documents — regardless of format, layout, or country-specific conventions. The AI identifies and extracts work history with dates and titles, skills (normalising synonyms across a skills taxonomy), education with institutions and qualifications, certifications and licences, and contact details. This replaces manual data entry into ATS systems, reducing resume processing from minutes per candidate to seconds, and enabling structured data search and filtering across large candidate pools.",
  },
  {
    q: "How does AI automate I-9 processing?",
    a: "AI I-9 processing uses computer vision to extract all fields from completed Form I-9 documents — employee name, date of birth, SSN (last 4 digits), employment eligibility attestation, and List A or B+C identity and employment authorisation document details. The AI validates eligibility codes against USCIS acceptable document lists, flags incomplete or inconsistent entries, and triggers E-Verify submissions for employers using electronic I-9 workflows. Expiry dates on temporary work authorisation documents are tracked automatically for re-verification scheduling.",
  },
  {
    q: "What HR document types does the AI process?",
    a: "Our HR IDP pipeline handles: resumes and CVs (all formats and nationalities), Form I-9 and supporting identity documents, W-4 and state income tax withholding forms, offer letters, employment agreements, onboarding checklists, background check reports (criminal, credit, employment verification, professional licence), benefits election forms, qualifying life event documents, Explanations of Benefits, payroll change forms, performance review forms, PIPs, training completion certificates, professional licence renewals, OSHA training records, and any document type in the HR and people operations workflow.",
  },
  {
    q: "Is AI resume screening EEOC compliant?",
    a: "Our resume parsing pipeline is designed for EEOC compliance. We do not extract or score protected class attributes — race, gender, age, national origin, religion, or disability status — unless explicitly required for affirmative action reporting under a separate, controlled workflow. Skills and experience extraction is neutral with respect to candidate demographics. For adverse impact monitoring, we provide structured extraction outputs that HR teams can use with their own adverse impact analysis tools, keeping human judgement in the hiring decision loop.",
  },
  {
    q: "How does AI handle background check document processing?",
    a: "AI background check processing classifies incoming reports from background screening vendors — criminal background checks, credit reports, employment verification letters, professional licence checks, and international police clearance certificates — and extracts key structured data including findings by category, adverse items, jurisdictions searched, and report dates. Configurable adverse action thresholds trigger FCRA-compliant escalation routing for reports with adverse items, while standard clear reports are auto-closed without requiring HR review. This eliminates manual reading of thousands of background check reports per year.",
  },
  {
    q: "How long does HR document automation take to implement?",
    a: "A production HR document automation pipeline targeting a defined document set — for example, resume parsing into an ATS, or I-9 extraction into an HRIS — typically takes 2–4 weeks from scoping to production. This covers document intake setup, Vision LLM classification and extraction, HRIS or ATS integration, PII handling controls, HITL exception queue, and compliance audit logging. Multi-document-type deployments covering the full onboarding document set typically require 4–6 weeks.",
  },
  {
    q: "Can AI extract data from international CVs and non-standard resume formats?",
    a: "Yes. Our resume parsing pipeline handles international CV formats — European Europass CVs, UK-style two-page CVs, APAC formats with photos and personal details, and academic CVs with publication sections — as well as non-standard creative or infographic resumes. Vision LLMs process the visual layout of the document rather than relying on positional templates, enabling accurate extraction from any resume format. Skills normalisation maps country-specific qualification names (e.g. UK A-levels, German Abitur) to a unified education taxonomy.",
  },
  {
    q: "Is HR document processing GDPR compliant?",
    a: "Yes. All HR IDP pipelines are built with GDPR compliance as a first-class design constraint. We offer on-premise and private cloud LLM deployment so candidate and employee PII never leaves your organisation's infrastructure. Data minimisation controls ensure only the fields required for the downstream HR workflow are extracted and stored. Right-to-erasure workflows support GDPR Article 17 requests across candidate records. Data residency options are available for organisations processing EU employee documents under cross-border transfer restrictions.",
  },
]

export default function HumanResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <section id="hero" className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center justify-between flex-wrap gap-y-1 mb-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href="/intelligent-document-processing" className="hover:text-foreground transition-colors">Intelligent Document Processing</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-foreground">Human Resources</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-17">Updated June 2026</time>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">Industry Focus · Human Resources</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              HR Document Processing <span className="text-accent">&amp; People Operations Automation</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              Resume parsing, I-9 automation, onboarding documents, and compliance tracking — production pipelines for HR ops and people teams.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We design, build, and deploy production Intelligent Document Processing (IDP) pipelines for human resources — automating resume and CV parsing, employee onboarding document processing, background check report extraction, benefits enrolment automation, and compliance certification tracking. Fixed-price sprints, 2–4 weeks to production.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/intelligent-document-processing">
                <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">IDP Platform Overview</Button>
              </Link>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block" style={{ perspective: "1400px" }}>
            <div className="rounded-2xl p-5 space-y-3 relative overflow-hidden" style={{
              background: "linear-gradient(145deg, #0d1117 0%, #0c1629 50%, #0f0d1a 100%)",
              transform: "rotateY(-10deg) rotateX(4deg)", transformStyle: "preserve-3d",
              boxShadow: "32px 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(249,115,22,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}>
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)" }} />
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)" }} />

              <div className="flex items-center gap-2 relative">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>AI Document Agent · Human Resources</span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              <div className="grid grid-cols-3 gap-2 relative">
                {[{ label: "Resume PDF", color: "#F97316" }, { label: "I-9 Form", color: "#60A5FA" }, { label: "Offer Letter", color: "#34D399" }].map((doc) => (
                  <div key={doc.label} className="rounded-xl p-2.5 text-center" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${doc.color}28` }}>
                    <FileText className="h-4 w-4 mx-auto mb-1" style={{ color: doc.color }} />
                    <span className="text-[10px] leading-tight block" style={{ color: "rgba(255,255,255,0.5)" }}>{doc.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center"><div className="w-px h-4" style={{ background: "rgba(249,115,22,0.35)" }} /></div>

              <div className="rounded-xl p-3" style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.3)" }}>
                <div className="flex items-center gap-2 mb-2.5">
                  <Brain className="h-3.5 w-3.5" style={{ color: "#F97316" }} />
                  <span className="text-[11px] font-bold" style={{ color: "#F97316" }}>AI Document Agent</span>
                </div>
                <div className="space-y-1.5">
                  {["Document Classification", "Candidate Data Extraction", "Compliance Verification"].map((s) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: "#4ade80" }} />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.6)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center"><div className="w-px h-4" style={{ background: "rgba(249,115,22,0.35)" }} /></div>

              <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Extracted Data · 97.4% Confidence</div>
                <div className="space-y-1">
                  {[
                    { label: "Name", value: "Sarah Chen", badge: "99.2%" },
                    { label: "Exp", value: "8 yrs · ML Engineer", badge: "98.6%" },
                    { label: "Skills", value: "Python, PyTorch, LLMs", badge: "97.1%" },
                    { label: "Status", value: "Eligible — I-9 ✓", badge: "✓ Auto" },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-14 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{f.label}</span>
                      <span className="font-medium flex-1 px-2" style={{ color: "rgba(255,255,255,0.85)" }}>{f.value}</span>
                      <span className="text-[10px] font-semibold" style={{ color: "#4ade80" }}>{f.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Zap className="h-3 w-3 shrink-0" style={{ color: "#F97316" }} />
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>Added to ATS · I-9 verified · Onboarding triggered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/10 py-7">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {[
              { stat: "90%+", label: "reduction in manual resume screening and data entry time" },
              { stat: "98%+", label: "I-9 field extraction accuracy across all eligibility document types" },
              { stat: "75%", label: "faster employee onboarding document processing cycle times" },
              { stat: "2–4 weeks", label: "to production on a fixed-price HR document sprint" },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center gap-1">
                <span className="font-display font-black text-2xl text-foreground">{item.stat}</span>
                <span className="text-xs text-muted-foreground max-w-[160px] leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">HR Use Cases</p>
          <h2 className="font-display font-bold text-4xl tracking-tight text-balance">Six HR Document Workflows We Automate</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            From resume parsing to compliance tracking — every document-intensive HR workflow that benefits from production AI automation.
          </p>
        </div>
        <div className="space-y-8">
          {useCases.map((uc, i) => (
            <motion.div key={uc.id} id={uc.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-8">
              <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${uc.color}18`, border: `1px solid ${uc.color}30` }}>
                      <uc.icon className="h-5 w-5" style={{ color: uc.color }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl">{uc.title}</h3>
                      <p className="text-sm text-muted-foreground">{uc.subtitle}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
                  <ul className="space-y-2">
                    {uc.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="extraction-coverage" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Extraction Coverage</p>
            <h2 className="font-display font-bold text-4xl tracking-tight">What the AI Extracts from HR Documents</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Field-level extraction accuracy benchmarks across core HR document types.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left px-5 py-3.5 font-semibold text-muted-foreground">Document Type</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-muted-foreground">Fields Extracted</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-muted-foreground">Accuracy</th>
                  <th className="text-left px-5 py-3.5 font-semibold text-muted-foreground">Integration</th>
                </tr>
              </thead>
              <tbody>
                {extractionTable.map((row, i) => (
                  <tr key={row.docType} className={`border-b border-border last:border-0 ${i % 2 === 1 ? "bg-muted/10" : ""}`}>
                    <td className="px-5 py-3.5 font-medium whitespace-nowrap">{row.docType}</td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.fields}</td>
                    <td className="px-5 py-3.5"><span className="font-semibold text-accent">{row.accuracy}</span></td>
                    <td className="px-5 py-3.5 text-muted-foreground">{row.integration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Implementation</p>
          <h2 className="font-display font-bold text-4xl tracking-tight">How We Build Your HR Document Pipeline</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display font-black text-3xl text-accent/30">{step.number}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">{step.label}</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.desc}</p>
              <ul className="space-y-2">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="integrations" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Integrations</p>
            <h2 className="font-display font-bold text-4xl tracking-tight">Connects to Your HRIS, ATS, and Payroll Stack</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              Native connectors and API integrations across the HR technology ecosystem.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["Workday", "SAP SuccessFactors", "BambooHR", "Greenhouse", "Lever", "iCIMS", "ADP Workforce Now", "Paychex Flex", "Ceridian Dayforce", "ServiceNow HR", "UKG Pro", "Rippling", "DocuSign", "Cornerstone OnDemand", "15Five", "Lattice"].map((s) => (
              <span key={s} className="px-3 py-1.5 rounded-full text-sm font-medium border border-border bg-card text-muted-foreground">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Compliance & Security</p>
          <h2 className="font-display font-bold text-4xl tracking-tight">Built for HR Compliance from Day One</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            I-9/E-Verify, EEOC, GDPR, and SOC 2 — every pipeline is designed to meet the compliance requirements of HR document processing.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="engagements" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Engagement Models</p>
            <h2 className="font-display font-bold text-4xl tracking-tight">How to Work with Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((eng) => (
              <Link key={eng.title} href={eng.href} className="rounded-2xl border border-border bg-card p-7 hover:border-accent/50 transition-colors group">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>
                  <eng.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display font-bold text-xl">{eng.title}</h3>
                  <span className="text-xs font-semibold text-accent border border-accent/30 rounded-full px-2 py-0.5">{eng.subtitle}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{eng.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {eng.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                      <span className="text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-sm font-semibold text-accent flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faq-grid" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">FAQ</p>
          <h2 className="font-display font-bold text-4xl tracking-tight">HR Document Processing — Common Questions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display font-bold text-lg mb-3">{faq.q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl border border-border bg-card p-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Get Started</p>
          <h2 className="font-display font-bold text-4xl tracking-tight text-balance mb-4">
            Ready to Automate Your HR Document Workflows?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a scoping call. We'll map your highest-volume HR document workflows and spec a fixed-price pipeline — delivered in 2–4 weeks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Link href="/case-studies"><Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">See Case Studies</Button></Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8">
            {[<><Clock className="h-3.5 w-3.5" /> 2–4 week sprint to production</>, <><Shield className="h-3.5 w-3.5" /> I-9 · EEOC · GDPR · SOC 2</>, <><CheckCircle2 className="h-3.5 w-3.5" /> Fixed price, no hourly billing</>].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">{item}</span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
