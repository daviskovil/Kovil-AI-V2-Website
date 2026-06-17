'use client'

import { motion } from "motion/react"
import {
  FileText, Brain, CheckCircle2, ArrowRight, ChevronRight,
  Shield, Lock, Clock, Zap, Users, ShieldCheck, Database,
  Scale, Search, BookOpen, Briefcase, Layers, FileSearch,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { openCalendly } from "../../lib/calendly"
import Link from "next/link"

const useCases = [
  {
    id: "contract-lifecycle-management",
    icon: FileText,
    color: "#F97316",
    title: "Contract Lifecycle Management",
    subtitle: "NDA, MSA, SOW, and vendor agreement classification and clause extraction",
    description:
      "Contract review and abstraction is one of the highest-cost manual tasks in legal and procurement teams. Our AI pipeline classifies incoming contracts by type — NDA, MSA, SOW, licence agreement, or employment contract — extracts all material terms and obligations, flags non-standard clauses against your playbook, and routes each contract to the correct CLM workflow without manual triage.",
    bullets: [
      "Contract type classification across 30+ agreement categories",
      "Key clause extraction — parties, term, termination rights, liability caps, governing law",
      "Non-standard clause flagging against your organisation's contract playbook",
      "Integration with CLM platforms: ContractPodAi, Ironclad, DocuSign CLM, Icertis",
    ],
  },
  {
    id: "ediscovery-document-review",
    icon: Search,
    color: "#0078D4",
    title: "eDiscovery Document Review",
    subtitle: "Email, memo, and record classification by relevance, privilege, and responsiveness",
    description:
      "eDiscovery document review is the most volume-intensive document AI use case in legal — millions of documents must be classified for relevance, responsiveness, and privilege in tight litigation timelines. Our AI pipeline classifies every document in the discovery corpus, identifies attorney-client privilege candidates, tags responsive documents by issue, and produces a prioritised review queue — dramatically cutting first-pass review cost.",
    bullets: [
      "Relevance and responsiveness classification across email, chat, and document formats",
      "Privilege candidate identification — attorney names, legal department markers, legal advice indicators",
      "Issue tagging and coding by matter-specific classification schema",
      "Integration with Relativity, Reveal, Everlaw, and NUIX review platforms",
    ],
  },
  {
    id: "regulatory-filing-extraction",
    icon: BookOpen,
    color: "#10B981",
    title: "Regulatory Filing Extraction",
    subtitle: "SEC filings, compliance reports, and regulatory submission document processing",
    description:
      "Regulatory filings — SEC 10-Ks, 8-Ks, proxy statements, Basel III disclosures, and compliance submissions — contain critical structured data buried in long-form documents. Our AI pipeline extracts financial figures, disclosure language, risk factors, and compliance attestations from all major regulatory filing formats, enabling compliance teams to monitor obligations and flag material changes without manual document review.",
    bullets: [
      "SEC filing extraction — 10-K, 10-Q, 8-K financial figures, risk factors, disclosures",
      "Regulatory change monitoring — extract amendments and flag material differences",
      "Compliance attestation and certification document parsing",
      "Output structured for GRC platforms, compliance dashboards, and audit systems",
    ],
  },
  {
    id: "due-diligence-document-processing",
    icon: Briefcase,
    color: "#8B5CF6",
    title: "Due Diligence Document Processing",
    subtitle: "M&A deal room document classification, extraction, and risk flagging",
    description:
      "M&A due diligence involves reviewing thousands of documents under extreme time pressure. Our AI pipeline classifies every document in the deal room data room, extracts material terms from contracts and financial documents, identifies risk flags — change-of-control clauses, litigation exposure, environmental liabilities — and produces structured summaries for each document category, compressing weeks of manual review into days.",
    bullets: [
      "Data room document classification across all due diligence categories",
      "Change-of-control clause identification and flag across all contracts",
      "Financial statement extraction and cross-document consistency checking",
      "Structured due diligence report generation by category",
    ],
  },
  {
    id: "intellectual-property-document-management",
    icon: Layers,
    color: "#F59E0B",
    title: "Intellectual Property Document Management",
    subtitle: "Patent applications, trademark filings, and IP portfolio document extraction",
    description:
      "IP portfolios generate enormous document volumes — patent applications, office actions, maintenance filings, trademark registrations, and licensing agreements. Our AI pipeline classifies all IP documents, extracts claim language and prosecution history, tracks filing and renewal deadlines from docketing documents, and routes documents to the correct IP management system without manual docketing.",
    bullets: [
      "Patent claim extraction — independent and dependent claims, priority dates, inventors",
      "Office action classification and response deadline extraction",
      "Trademark filing data extraction — mark, classes, filing dates, owner details",
      "Integration with IP management systems: CPA Global, Anaqua, Dennemeyer",
    ],
  },
  {
    id: "litigation-court-document-processing",
    icon: FileSearch,
    color: "#EF4444",
    title: "Litigation & Court Document Processing",
    subtitle: "Pleadings, discovery responses, and expert report extraction and indexing",
    description:
      "Litigation generates a continuous stream of court filings, discovery responses, deposition transcripts, and expert reports. Our AI pipeline classifies every litigation document, extracts case identifiers, parties, claims, defences, and key dates, indexes deposition transcripts for keyword and concept search, and routes documents to the correct matter workspace — keeping litigation teams focused on strategy rather than document management.",
    bullets: [
      "Pleading and motion classification — complaint, answer, motion type, relief sought",
      "Deposition transcript indexing and key testimony extraction",
      "Expert report classification and opinion summary extraction",
      "Matter workspace integration: iManage, NetDocuments, Clio, Filevine",
    ],
  },
]

const extractionTable = [
  {
    docType: "Contract (NDA / MSA / SOW)",
    fields: "Parties, effective date, term, termination rights, liability cap, governing law, key obligations",
    accuracy: "95–98%",
    integration: "CLM platform, CRM, procurement system",
  },
  {
    docType: "SEC Filing (10-K / 10-Q / 8-K)",
    fields: "Filing type, period, filer, revenue, net income, EPS, material risk factors, key disclosures",
    accuracy: "97–99%",
    integration: "GRC platform, compliance dashboard, investor relations system",
  },
  {
    docType: "Court Pleading",
    fields: "Case number, court, parties, filing type, claims or defences, relief sought, filing date",
    accuracy: "96–98%",
    integration: "Matter management system, docketing platform",
  },
  {
    docType: "Due Diligence Document",
    fields: "Document type, parties, date, material terms, change-of-control clauses, risk flags",
    accuracy: "94–97%",
    integration: "Virtual data room, deal management platform",
  },
  {
    docType: "Patent Application",
    fields: "Inventor(s), assignee, filing date, priority claim, independent claims, cited prior art",
    accuracy: "95–98%",
    integration: "IP management system, docketing platform",
  },
  {
    docType: "eDiscovery Document",
    fields: "Document type, custodian, date, relevance classification, privilege flag, issue tags",
    accuracy: "92–96%",
    integration: "Relativity, Reveal, Everlaw, NUIX review platform",
  },
]

const steps = [
  {
    number: "01",
    label: "Ingest",
    title: "Connect Your Legal Document Sources",
    desc: "We connect every legal document source — deal room data rooms, DMS systems (iManage, NetDocuments), email archives, court filing systems, and API feeds — into a unified ingestion pipeline. PDFs, Word documents, email exports (PST, MBOX), scanned paper documents, and structured XML filings are all handled with automatic format normalisation.",
    bullets: [
      "Multi-source intake: DMS, email archives, data rooms, court feeds, API",
      "Attorney-Client Privilege markers flagged at ingestion for downstream review",
      "Document versioning and deduplication across matter repositories",
    ],
  },
  {
    number: "02",
    label: "Classify & Extract",
    title: "AI Agent Classifies Legal Documents and Extracts Material Terms",
    desc: "Our AI Document Agent uses Vision LLMs (GPT-4o, Claude) and legal NLP models to classify each document type, extract material terms and obligations, identify privilege candidates, flag non-standard clauses against playbooks, and assign issue codes — all with confidence scores and full extraction audit trails.",
    bullets: [
      "Document type classification across 30+ legal document categories",
      "Material clause and obligation extraction with field-level confidence scores",
      "Privilege candidate detection — attorney names, in-house counsel markers, legal advice language",
    ],
  },
  {
    number: "03",
    label: "Integrate",
    title: "Push to CLM, DMS, and Review Platforms",
    desc: "Extracted and classified legal documents flow automatically into your CLM system, document management platform, GRC tool, or eDiscovery review environment. The agent triggers downstream workflows — contract approval routing, obligation tracking alerts, compliance deadline notifications — without manual re-keying.",
    bullets: [
      "Native connectors for iManage, NetDocuments, Relativity, ContractPodAi, and Icertis",
      "Automated obligation and deadline tracking alerts in CLM systems",
      "Structured extraction output in JSON for bespoke matter management integrations",
    ],
  },
]

const complianceItems = [
  {
    icon: Shield,
    title: "Attorney-Client Privilege",
    desc: "Privilege candidate detection at classification time — attorney names, in-house counsel markers, and legal advice language flagged before any document enters a non-privileged review queue.",
  },
  {
    icon: Lock,
    title: "GDPR / CCPA",
    desc: "PII detection and redaction controls for documents containing personal data. Data residency options for EU-jurisdiction matter processing and cross-border data transfer compliance.",
  },
  {
    icon: ShieldCheck,
    title: "SEC 17a-4 / Record Retention",
    desc: "Immutable audit trails and document retention metadata aligned to SEC Rule 17a-4 and FINRA requirements for broker-dealer legal document management.",
  },
  {
    icon: Database,
    title: "SOC 2 Type II",
    desc: "On-premise and private cloud LLM deployment options. Confidential legal documents — contracts, privileged communications, M&A data room materials — never transmitted to third-party APIs without explicit authorisation.",
  },
]

const engagements = [
  {
    icon: Zap,
    title: "Fixed-Price Sprint",
    subtitle: "2–4 weeks",
    href: "/engage/outcome-based-project",
    desc: "We scope one high-impact legal document workflow — contract abstraction, eDiscovery first-pass review, or regulatory filing extraction — define clear accuracy benchmarks, and deliver a production pipeline at a fixed price.",
    bullets: [
      "One legal document workflow scoped and built to production",
      "Legal NLP and Vision LLM extraction deployed with privilege safeguards",
      "Delivered against agreed clause extraction and classification benchmarks",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Legal Document AI Squad",
    subtitle: "Monthly retainer",
    href: "/engage/managed-ai-engineer",
    desc: "Embed a pre-vetted AI engineer specialised in legal document processing, contract AI, and DMS/CLM integrations into your team. Ideal for law firms, legal ops teams, and GRC functions with a document automation roadmap.",
    bullets: [
      "Senior Document AI engineer embedded in your team",
      "Full ownership of your legal IDP pipeline roadmap",
      "Flexible scope — contract abstraction today, eDiscovery automation next quarter",
    ],
  },
  {
    icon: Brain,
    title: "IDP Rescue & Optimisation",
    subtitle: "Assessment + fix",
    href: "/engage/app-rescue",
    desc: "Is your existing legal document pipeline missing privilege candidates, producing low clause extraction accuracy, or failing on non-standard contract formats? Our SWAT team audits and fixes it.",
    bullets: [
      "Full pipeline audit against your legal document corpus",
      "Legal NLP model tuning for your jurisdiction and practice areas",
      "Privilege detection hardening and playbook integration",
    ],
  },
]

const faqs = [
  {
    q: "What is contract lifecycle management automation?",
    a: "Contract lifecycle management (CLM) automation uses AI Document Agents to handle the document-intensive stages of the contract lifecycle — classification of incoming agreements, extraction of material terms and obligations, identification of non-standard clauses, routing for review and approval, and ongoing obligation monitoring. AI CLM automation eliminates the manual abstraction that typically takes 30–90 minutes per contract, replacing it with a structured extraction in seconds that legal and procurement teams review and validate rather than create from scratch.",
  },
  {
    q: "How does AI improve eDiscovery document review?",
    a: "AI improves eDiscovery document review by performing first-pass classification of the entire document corpus — tagging each document for relevance, responsiveness, and privilege candidacy — before any human reviewer touches a document. This means reviewers spend their time on documents AI has pre-identified as likely relevant, rather than reviewing millions of clearly non-responsive documents. AI eDiscovery tools typically reduce first-pass review cost by 60–80% compared to purely manual review, while improving recall consistency across large review teams.",
  },
  {
    q: "What legal document types does the AI handle?",
    a: "Our legal IDP pipeline handles: contracts (NDAs, MSAs, SOWs, licence agreements, employment contracts, lease agreements), SEC and regulatory filings, court pleadings and motions, deposition transcripts, expert reports, discovery responses, due diligence documents, patent applications and office actions, trademark filings, IP licensing agreements, compliance reports, board minutes and resolutions, and any document type generated in legal, compliance, or IP workflows.",
  },
  {
    q: "How does AI handle attorney-client privilege in document review?",
    a: "Our AI pipeline identifies privilege candidates at classification time using multiple detection signals: attorney names and bar numbers cross-referenced against a privilege custodian list, in-house counsel email domain markers, legal advice request and response language patterns, and document metadata indicating legal hold or privilege log entries. Privilege candidates are flagged with a confidence score and routed to a separate privilege review queue — they never enter the non-privileged review pool. Final privilege determinations remain with human attorneys.",
  },
  {
    q: "What is due diligence document processing?",
    a: "Due diligence document processing uses AI to classify and extract material information from every document in an M&A data room — contracts, financial statements, corporate records, IP filings, litigation documents, regulatory correspondence, and HR records. The AI identifies material risk flags across the document corpus — change-of-control provisions, pending litigation, IP ownership gaps, environmental liabilities — and produces structured summaries by due diligence category. This compresses weeks of manual review into days without sacrificing coverage.",
  },
  {
    q: "How long does legal document automation take to implement?",
    a: "A production legal document automation pipeline targeting a defined document set — for example, NDA and MSA abstraction for a procurement team — typically takes 2–4 weeks from scoping to production. This covers document intake setup, legal NLP and Vision LLM classification and extraction, playbook integration for non-standard clause flagging, confidence scoring, HITL exception queue, and CLM or DMS integration. eDiscovery and large-scale due diligence deployments with custom coding schemas typically require 4–6 weeks.",
  },
  {
    q: "Can AI extract data from SEC and regulatory filings?",
    a: "Yes. Our regulatory filing extraction pipeline handles SEC 10-K, 10-Q, and 8-K filings, proxy statements, Basel III and Pillar 3 disclosures, FINRA submissions, and international regulatory filings. The AI extracts financial figures, risk factor language, material event disclosures, and compliance attestations — producing structured data for GRC platforms, compliance monitoring dashboards, and investor relations systems. It also monitors for material changes between filing periods and flags amendments.",
  },
  {
    q: "Is legal document AI SOC 2 compliant?",
    a: "Yes. Legal IDP pipelines are built with confidentiality as a first-class design constraint. We offer on-premise and private cloud LLM deployment so privileged communications, M&A deal documents, and regulatory submissions never leave your infrastructure. Every document event — classification, extraction, privilege flagging, human review — is logged to an immutable audit trail. Data residency controls are available for EU and UK matter processing to meet GDPR cross-border transfer requirements.",
  },
]

export default function LegalCompliancePage() {
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
                <span className="text-foreground">Legal &amp; Compliance</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-17">Updated June 2026</time>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">Industry Focus · Legal &amp; Compliance</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              Legal Document Processing <span className="text-accent">&amp; Contract AI Automation</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              Contract abstraction, eDiscovery review, and regulatory filing extraction — production pipelines for law firms, legal ops, and GRC teams.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We design, build, and deploy production Intelligent Document Processing (IDP) pipelines for legal and compliance — automating contract lifecycle management, eDiscovery classification, due diligence document review, regulatory filing extraction, and IP document management. Fixed-price sprints, 2–4 weeks to production.
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
                <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>AI Document Agent · Legal &amp; Compliance</span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              <div className="grid grid-cols-3 gap-2 relative">
                {[{ label: "NDA / Contract", color: "#F97316" }, { label: "SEC Filing", color: "#60A5FA" }, { label: "Court Pleading", color: "#34D399" }].map((doc) => (
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
                  {["Legal Document Classification", "Clause & Term Extraction", "Privilege Detection"].map((s) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: "#4ade80" }} />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.6)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center"><div className="w-px h-4" style={{ background: "rgba(249,115,22,0.35)" }} /></div>

              <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Extracted Data · 97.2% Confidence</div>
                <div className="space-y-1">
                  {[
                    { label: "Type", value: "NDA — Mutual", badge: "99.1%" },
                    { label: "Party", value: "Acme Corporation", badge: "98.7%" },
                    { label: "Term", value: "5 years — auto-renew", badge: "97.3%" },
                    { label: "Risk", value: "Standard — approved", badge: "✓ Auto" },
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
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>Indexed in CLM · Obligation tracked · Review assigned</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/10 py-7">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {[
              { stat: "80%+", label: "reduction in manual contract review and abstraction time" },
              { stat: "95%+", label: "clause extraction accuracy on standard agreements" },
              { stat: "10×", label: "faster eDiscovery first-pass review and categorisation" },
              { stat: "2–4 weeks", label: "to production on a fixed-price legal sprint" },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center gap-1">
                <span className="font-display font-black text-2xl text-foreground">{item.stat}</span>
                <span className="text-xs text-muted-foreground max-w-[160px] leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/40 mt-4">
            Based on <Link href="/case-studies" className="underline hover:text-muted-foreground transition-colors">production deployments</Link> and industry benchmarks for legal document automation.
          </p>
        </div>
      </section>

      <section id="the-challenge" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">The Problem</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Legal teams spend more time reading documents than practising law.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">A mid-size company manages 20,000+ active contracts. An eDiscovery review corpus can run to millions of documents. A single M&A due diligence exercise covers thousands of files across dozens of categories. Manual document handling is the largest cost in legal operations — and the slowest part of every legal workflow.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-border bg-background p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Manual / Legacy Legal Document Handling</p>
              <ul className="space-y-3">
                {[
                  "Contract abstraction takes 30–90 minutes per agreement — paralegals and associates doing data entry",
                  "eDiscovery first-pass review costs $1–5 per document at attorney hourly rates",
                  "M&A due diligence coverage is incomplete — time pressure means documents get skipped",
                  "Non-standard clause flags missed — risky contracts approved because reviewers rush",
                  "Regulatory filing data extracted manually — compliance teams copy figures into spreadsheets",
                  "IP deadlines missed because docketing relies on manual document reading",
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
              <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-4">Legal IDP — Kovil AI</p>
              <ul className="space-y-3">
                {[
                  "Contracts abstracted in seconds — legal teams review and approve, not create from scratch",
                  "eDiscovery corpus classified automatically — reviewers start with pre-prioritised queues",
                  "Due diligence coverage is complete — every data room document classified and flagged",
                  "Non-standard clauses flagged against playbook — nothing risky slips through",
                  "Regulatory filing data extracted and structured — compliance dashboards updated automatically",
                  "IP deadlines extracted at docketing — no manual reading required",
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

      <section id="use-cases" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Use Cases</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Legal &amp; Compliance IDP Use Cases: Contracts, eDiscovery, Regulatory &amp; More</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Every use case below is a production-ready pipeline we design and deploy. Each targets a specific, high-volume legal document workflow where manual handling costs the most billable time, compliance risk, and operational overhead.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => {
            const Icon = uc.icon
            return (
              <motion.div key={uc.id} id={uc.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-background p-6 hover:border-accent/30 transition-colors group">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${uc.color}18`, border: `1px solid ${uc.color}30` }}>
                  <Icon className="h-5 w-5" style={{ color: uc.color }} />
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">{uc.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{uc.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
                <ul className="space-y-1.5">
                  {uc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: uc.color }} />{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="contract-ai" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Primary Use Case</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Contract AI — Abstraction and CLM Automation</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Contract abstraction is the highest-cost manual task in legal operations — and the one where AI delivers the most immediate, measurable ROI. Here is how our contract AI pipeline processes agreements from intake to CLM system.</p>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {[
              { step: "01", label: "Contract Intake", text: "Contracts arrive via email, DocuSign, CLM upload portal, or DMS. PDFs, Word documents, and scanned paper agreements are all accepted and normalised automatically." },
              { step: "02", label: "Agreement Classification", text: "The AI classifies the contract type — NDA, MSA, SOW, licence, employment, lease, or amendment — and identifies the governing jurisdiction, parties, and executed vs. draft status." },
              { step: "03", label: "Clause Extraction", text: "Vision LLM extracts all material terms: parties, effective date, term, renewal provisions, termination rights, liability cap, indemnification scope, governing law, and all custom obligation fields defined in your playbook." },
              { step: "04", label: "Playbook Comparison", text: "Extracted clauses are compared against your standard contract playbook. Non-standard positions — lower liability caps, missing IP assignment, unusual termination triggers — are flagged with a risk classification for attorney review." },
              { step: "05", label: "CLM Routing", text: "Abstracted contract data populates your CLM system directly. Obligation and renewal alerts are configured automatically from extracted dates. Low-risk standard contracts may route to auto-approval; others queue for legal review." },
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
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Contract AI — Performance Benchmarks</p>
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  { stat: "< 30s", label: "per contract — classification and full abstraction" },
                  { stat: "95–98%", label: "clause extraction accuracy on standard agreements" },
                  { stat: "80%+", label: "reduction in manual abstraction time" },
                  { stat: "2–4 wks", label: "to production pipeline" },
                ].map((m) => (
                  <div key={m.stat} className="text-center p-3 rounded-xl bg-muted/20">
                    <p className="font-display font-black text-xl text-foreground">{m.stat}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/50">Based on production contract AI deployments across law firms, legal ops teams, and procurement functions.</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">CLM &amp; Legal Platform Integrations</p>
              <div className="flex flex-wrap gap-2">
                {["ContractPodAi", "Ironclad", "Icertis", "DocuSign CLM", "Agiloft", "iManage", "NetDocuments", "Relativity", "Clio", "Filevine"].map((s) => (
                  <span key={s} className="text-xs bg-muted/30 border border-border px-2.5 py-1 rounded-full text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="extraction-coverage" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Extraction Coverage</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Legal Document Extraction: What the AI Extracts</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Every major legal document type is covered — from NDAs to court pleadings. Below are the fields extracted per document type with accuracy ranges from production deployments.</p>
          <div className="rounded-2xl border border-border bg-background overflow-hidden">
            <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-muted/30 border-b border-border">
              {["Document Type", "Extracted Fields", "Accuracy", "Integration Target"].map((h) => (
                <span key={h} className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{h}</span>
              ))}
            </div>
            {extractionTable.map((row, i) => (
              <motion.div key={row.docType} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                <span className="text-sm font-semibold text-foreground">{row.docType}</span>
                <span className="text-sm text-muted-foreground leading-relaxed">{row.fields}</span>
                <span className="text-sm font-semibold text-green-600">{row.accuracy}</span>
                <span className="text-sm text-muted-foreground">{row.integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">How We Build It</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">From document intake to CLM and review platform — in three steps.</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">Every legal IDP engagement follows the same proven three-step delivery pattern — built around your existing document sources, legal platforms, and privilege requirements.</p>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-8 items-start">
              <div className="hidden md:flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-accent text-sm">{step.number}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 min-h-[60px] bg-border" />}
              </div>
              <div className="flex-1 pb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-3 inline-block">{step.label}</span>
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
      </section>

      <section id="compliance" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Compliance</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Built for privilege, confidentiality, and regulatory requirements.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Legal document processing operates under unique confidentiality and privilege obligations. Attorney-client privilege, work product doctrine, and regulatory document retention requirements are built into every pipeline from day one.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {complianceItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-background p-6">
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

      <section id="engagement-models" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Engagement Models</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">How to work with us on legal document AI.</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Three engagement models — matched to where you are: proving ROI on one workflow, scaling a document automation roadmap, or rescuing a broken pipeline.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {engagements.map((eng, i) => {
            const Icon = eng.icon
            return (
              <motion.div key={eng.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div><p className="font-semibold text-base">{eng.title}</p><p className="text-xs text-muted-foreground">{eng.subtitle}</p></div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{eng.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {eng.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
                <Link href={eng.href} className="text-sm font-semibold text-accent hover:underline flex items-center gap-1.5 mt-auto">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Legal &amp; Compliance IDP — common questions.</h2>
          <div id="faq-grid" className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-semibold text-base mb-3 leading-snug">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-accent/5 border border-accent/20 p-10 lg:p-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">Get Started</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5 max-w-2xl mx-auto">Ready to automate your legal document workflows?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Book a 30-minute call. We will scope one high-impact workflow — contract abstraction, eDiscovery first-pass review, or regulatory filing extraction — and give you a fixed-price delivery plan the same week.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Link href="/case-studies"><Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">See Case Studies</Button></Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8">
            {[<><Clock className="h-3.5 w-3.5" /> 2–4 week sprint to production</>, <><Shield className="h-3.5 w-3.5" /> Privilege-safe · SOC 2 · GDPR</>, <><CheckCircle2 className="h-3.5 w-3.5" /> Fixed price, no hourly billing</>].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">{item}</span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
