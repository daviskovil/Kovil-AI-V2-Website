'use client'

import { motion } from "motion/react"
import {
  UserCheck, Home, TrendingUp, FileText, FileCheck2, Globe,
  CheckCircle2, ArrowRight, ChevronRight, Shield, Lock,
  Clock, Zap, Users, Brain, Database, ShieldCheck,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { openCalendly } from "../../lib/calendly"
import Link from "next/link"
import Image from "next/image"

// ── Use-case data ─────────────────────────────────────────────────────────────
const useCases = [
  {
    id: "kyc-automation",
    icon: UserCheck,
    color: "#F97316",
    title: "KYC Automation",
    subtitle: "Identity document classification & extraction",
    description:
      "Our KYC automation pipeline classifies incoming identity documents — passports, national IDs, driver's licences, utility bills, and proof-of-address letters — and extracts structured fields with confidence scores. AML audit trails are generated automatically for every decision.",
    bullets: [
      "Government ID, passport, and utility bill classification",
      "Name, DOB, ID number, nationality, expiry date extraction",
      "Liveness check integration and document tampering flags",
      "BSA/AML-compliant audit log per document event",
    ],
  },
  {
    id: "automated-mortgage-processing",
    icon: Home,
    color: "#0078D4",
    title: "Automated Mortgage Processing",
    subtitle: "Full loan bundle processing — paystubs, bank statements, tax returns",
    description:
      "Automated mortgage processing eliminates the most labour-intensive part of loan origination: manually sorting, reading, and keying data from the mortgage bundle. Our AI document agent classifies each document in the bundle, extracts income, debt, and asset fields, and calculates LTV and DTI ratios automatically.",
    bullets: [
      "Pay stub, W-2, and 1040 income extraction",
      "12-month bank statement parsing for cash flow and reserves",
      "Automated LTV and DTI ratio calculation",
      "Integration with leading loan origination systems (LOS)",
    ],
  },
  {
    id: "credit-underwriting-software",
    icon: TrendingUp,
    color: "#10B981",
    title: "Credit Underwriting Software",
    subtitle: "Financial statements, credit reports, and risk signal extraction",
    description:
      "Financial institutions using our credit underwriting software capabilities replace manual spreading with AI-powered extraction of P&L statements, balance sheets, and tax returns. Risk signals — unusual cash flow patterns, covenant breaches, derogatory marks — are surfaced automatically before a human underwriter ever opens the document.",
    bullets: [
      "P&L, balance sheet, and cash flow statement extraction",
      "12-month transaction pattern analysis from bank statements",
      "Automated risk signal identification and flagging",
      "Credit report trade-line and derogatory mark extraction",
    ],
  },
  {
    id: "bank-statement-parsing",
    icon: FileText,
    color: "#8B5CF6",
    title: "Bank Statement Parsing",
    subtitle: "Transaction-level extraction for income verification and cash flow analysis",
    description:
      "Bank statement parsing goes beyond OCR — our Vision LLM understands the semantic structure of multi-page statements from any bank, extracting individual transactions, categorising income and expense streams, identifying recurring payments, and producing structured cash flow summaries for underwriting or fraud review.",
    bullets: [
      "Multi-page statement parsing from any bank format",
      "Income and expense categorisation at transaction level",
      "Recurring payment and salary deposit identification",
      "Clean JSON output for direct integration with underwriting engines",
    ],
  },
  {
    id: "loan-document-processing",
    icon: FileCheck2,
    color: "#F59E0B",
    title: "Loan Document Processing",
    subtitle: "Origination, servicing, and default document automation",
    description:
      "Loan document processing covers the full document lifecycle — from application classification and completeness checking at origination, through servicing document indexing, to default and workout document extraction. Every document type in the loan file is classified, extracted, and routed to the correct downstream system.",
    bullets: [
      "Loan application completeness checking and gap detection",
      "Collateral document classification — titles, appraisals, insurance",
      "Servicing document indexing and routing",
      "Default and modification document extraction",
    ],
  },
  {
    id: "trade-finance-document-automation",
    icon: Globe,
    color: "#06B6D4",
    title: "Trade Finance Document Automation",
    subtitle: "Bills of lading, letters of credit, and customs compliance",
    description:
      "Trade finance operations are among the most document-intensive in banking — letters of credit, bills of lading, commercial invoices, certificates of origin, and packing lists flow through every transaction. Our financial IDP pipeline classifies, extracts, and validates these documents against LC terms and compliance rules automatically.",
    bullets: [
      "Bill of lading extraction — ports, vessel, cargo details",
      "Letter of credit field extraction and terms validation",
      "Certificate of origin and customs document processing",
      "Discrepancy detection between presented documents and LC terms",
    ],
  },
]

// ── Extraction table data ─────────────────────────────────────────────────────
const extractionTable = [
  {
    docType: "Passport / National ID",
    fields: "Name, DOB, ID number, nationality, expiry, MRZ",
    accuracy: "98–99%",
    integration: "KYC platform, CRM, AML system",
  },
  {
    docType: "Bank Statement (any format)",
    fields: "Transactions, income streams, expenses, cash flow, recurring payments",
    accuracy: "97–99%",
    integration: "Underwriting engine, LOS, fraud detection",
  },
  {
    docType: "Pay Stub / W-2",
    fields: "Gross/net income, employer name, pay period, YTD earnings",
    accuracy: "98–99%",
    integration: "Mortgage LOS, HR system",
  },
  {
    docType: "Tax Return (1040, Schedule C)",
    fields: "AGI, filed income, deductions, business income, Schedule C net profit",
    accuracy: "95–98%",
    integration: "Mortgage LOS, underwriting engine",
  },
  {
    docType: "Credit Report",
    fields: "Credit score, trade lines, payment history, derogatory marks, balances",
    accuracy: "97–99%",
    integration: "Underwriting engine, risk platform",
  },
  {
    docType: "Trade Finance Document (BL, LC, COO)",
    fields: "Parties, ports, cargo, LC terms, dates, compliance fields",
    accuracy: "96–98%",
    integration: "Trade finance platform, core banking",
  },
]

// ── How-we-build steps ────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    label: "Ingest",
    title: "Connect Your Banking Document Sources",
    desc: "We connect your document intake — email inboxes, SharePoint, core banking upload portals, broker portals, or API endpoints — into a unified ingestion pipeline. PDFs, scanned images, smartphone photos, and fax-to-digital outputs are all handled with automatic quality normalisation.",
    bullets: [
      "Multi-source intake: email, SharePoint, portal, API, SFTP",
      "Document quality normalisation and de-skew applied automatically",
      "Duplicate detection and version control per document",
    ],
  },
  {
    number: "02",
    label: "Classify & Extract",
    title: "AI Agent Classifies and Extracts Financial Data",
    desc: "Our AI Document Agent uses Vision LLMs (GPT-4o Vision, Claude) and layout-aware models to classify each banking document type, write context-aware extraction prompts based on the detected format, extract structured financial data fields with confidence scores, and escalate low-confidence outputs to human reviewers via a clean HITL interface.",
    bullets: [
      "Document type classification — KYC, mortgage, credit, trade finance",
      "Vision LLM financial data extraction with field-level confidence scores",
      "AML-compliant audit trail generated for every extraction event",
    ],
  },
  {
    number: "03",
    label: "Integrate",
    title: "Push to Core Banking and LOS Systems",
    desc: "Extracted and validated financial data flows automatically into your core banking system, LOS, CRM, or data warehouse. The agent triggers downstream workflows — underwriting queue updates, loan status changes, KYC approval actions, or AML alert creation — without manual re-keying.",
    bullets: [
      "Direct integration with Finastra, Temenos, Encompass, Salesforce FSC",
      "Automated downstream triggers: KYC approval, underwriting queue, alert creation",
      "Exception handling and escalation routing with full audit trail",
    ],
  },
]

// ── Compliance badges ─────────────────────────────────────────────────────────
const complianceItems = [
  {
    icon: Shield,
    title: "SOC 2 Type II",
    desc: "On-premise and private cloud LLM deployment options. No document data transmitted to third-party APIs for sensitive banking workflows.",
  },
  {
    icon: ShieldCheck,
    title: "BSA / AML Audit Trails",
    desc: "Every document event — intake, classification, extraction, human review — is logged to an immutable audit trail meeting BSA/AML examination requirements.",
  },
  {
    icon: Lock,
    title: "GLBA & Data Residency",
    desc: "PII redaction pipelines, data residency controls for US or EU processing, and role-based access controls aligned with GLBA Safeguards Rule requirements.",
  },
  {
    icon: Database,
    title: "Basel III Document Evidence",
    desc: "Structured extraction of regulatory capital and liquidity documents — FINREP, COREP, DFAST supporting documents — with traceable field-level evidence chains.",
  },
]

// ── Engagement models ─────────────────────────────────────────────────────────
const engagements = [
  {
    icon: Zap,
    title: "Fixed-Price Sprint",
    subtitle: "2–4 weeks",
    href: "/engage/outcome-based-project",
    desc: "We scope one high-impact banking document workflow — KYC automation, mortgage bundle processing, or bank statement parsing — define clear accuracy benchmarks, and deliver a production pipeline. Fixed price, no surprises.",
    bullets: [
      "One banking document workflow scoped and built to production",
      "Vision LLM extraction and confidence scoring deployed",
      "Delivered against agreed field-level accuracy benchmarks",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Banking Document AI Squad",
    subtitle: "Monthly retainer",
    href: "/engage/managed-ai-engineer",
    desc: "Embed a pre-vetted AI engineer specialised in financial data extraction, banking document AI, and LOS integrations into your team. Ideal for banks and fintechs with a document automation roadmap but a specialist hiring bottleneck.",
    bullets: [
      "Senior Document AI engineer embedded in your team",
      "Full ownership of your financial IDP pipeline roadmap",
      "Flexible scope — KYC today, mortgage automation next quarter",
    ],
  },
  {
    icon: Brain,
    title: "IDP Rescue & Optimisation",
    subtitle: "Assessment + fix",
    href: "/engage/app-rescue",
    desc: "Is your existing banking IDP pipeline hallucinating on non-standard bank statement formats, failing on handwritten mortgage notes, or producing BSA/AML audit gaps? Our SWAT team audits and fixes it.",
    bullets: [
      "Full pipeline audit against your banking document corpus",
      "Transition to Vision LLM hybrid architecture",
      "BSA/AML audit trail remediation and compliance hardening",
    ],
  },
]

// ── FAQ data ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is financial data extraction?",
    a: "Financial data extraction is the automated process of pulling structured fields — income, liabilities, transaction amounts, dates, party names, risk signals — from unstructured banking documents such as bank statements, tax returns, pay stubs, and financial statements. Modern financial data extraction uses Vision LLMs and layout-aware AI models to handle variable formats across banks, geographies, and document vintages, replacing manual spreading and keying.",
  },
  {
    q: "What is KYC automation and how does AI improve it?",
    a: "KYC automation uses AI document agents to classify incoming identity documents (passports, national IDs, utility bills, proof-of-address letters), extract structured identity fields with confidence scores, flag potential document tampering, and generate AML-compliant audit trails — without manual review for high-confidence documents. AI improves KYC automation by handling multi-country ID formats, poor-quality scans, and mixed document bundles that break rule-based systems. Production KYC automation pipelines typically process identity documents in under 3 seconds.",
  },
  {
    q: "How does automated mortgage processing work?",
    a: "Automated mortgage processing uses AI Document Agents to handle the full mortgage bundle: classifying each document in the package (paystubs, W-2s, 1040s, bank statements, employer letters), extracting income and asset fields, calculating DTI and LTV ratios, checking document completeness, and pushing structured data into the loan origination system — with any gaps or anomalies escalated to the loan officer pre-populated with all available context. Automated mortgage processing typically reduces the time to complete income and asset verification from 2–3 days to under 2 hours.",
  },
  {
    q: "What can bank statement parsing extract?",
    a: "Bank statement parsing can extract: individual transactions with amounts, dates, and merchant categories; income streams (salary deposits, recurring income, self-employment income); expense categories (housing, utilities, debt repayments); recurring payment amounts and frequencies; available balance history; cash flow trends over the statement period; and anomalous transactions or large one-off debits. Our bank statement parsing pipeline handles multi-page statements from any bank format — PDF exports, scanned paper statements, or smartphone photos — without requiring bank-specific templates.",
  },
  {
    q: "What is credit underwriting software in the context of document AI?",
    a: "In the context of document AI, credit underwriting software refers to systems that automate the extraction and analysis of financial documents required for credit decisions — P&L statements, balance sheets, cash flow statements, tax returns, and bank statements. Rather than a loan officer manually spreading these documents, the AI extracts all relevant financial fields, identifies risk signals (covenant breaches, declining revenue trends, cash flow volatility), and presents a structured risk summary for underwriter review. This typically reduces spreading time from 2–4 hours per loan application to under 10 minutes.",
  },
  {
    q: "How long does KYC automation take to implement?",
    a: "A production KYC automation pipeline targeting a defined set of identity document types — passports, national IDs, utility bills — typically takes 2–4 weeks from scoping to production. This covers document intake setup, Vision LLM classification and extraction, confidence scoring, BSA/AML audit trail logging, HITL exception queue for low-confidence documents, and integration with your KYC platform or CRM. More complex multi-jurisdiction KYC workflows with extensive document variety typically require 4–8 weeks.",
  },
  {
    q: "What is loan document processing?",
    a: "Loan document processing is the automated classification, extraction, and routing of documents throughout the loan lifecycle — from origination (application, KYC bundle, income documents, collateral documents) through servicing (payment processing letters, escrow documents, modification agreements) to default and resolution (NOD, forbearance agreements, workout documents). AI loan document processing eliminates manual sorting and data entry at each stage, ensuring clean structured data flows into the LOS, core banking, and CRM systems without re-keying.",
  },
  {
    q: "Is banking IDP SOC 2 and BSA/AML compliant?",
    a: "Yes. We build banking IDP pipelines with compliance as a first-class design constraint. For SOC 2 compliance, we offer on-premise or private cloud LLM deployment options so sensitive financial documents never leave your infrastructure. For BSA/AML compliance, every document event — intake, classification, extraction, human review, correction — is logged to an immutable, timestamped audit trail that meets examination requirements. We also support GLBA Safeguards Rule alignment with data residency controls, PII redaction, and role-based access logging.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function BankingFinancialServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section id="hero" className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">

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
                <span className="text-foreground">Banking &amp; Financial Services</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-03">Updated June 2026</time>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">
              Industry Focus · Banking &amp; Financial Services
            </p>

            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              Financial Data Extraction &amp;{" "}
              <span className="text-accent">IDP for Banking</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              KYC automation, automated mortgage processing, and credit underwriting — production pipelines for BFSI.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We design, build, and deploy production Intelligent Document Processing (IDP) pipelines
              for banking and financial services — automating KYC document classification, mortgage bundle
              processing, loan document processing, and financial data extraction from bank statements and
              credit files. Fixed-price sprints, 2–4 weeks to production.
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

          {/* Right — hero image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden lg:flex lg:items-stretch"
          >
            <Image
              src="/hero-idp-banking-financial-services.png"
              alt="Financial data extraction and KYC automation pipeline — Banking IDP by Kovil AI"
              width={900}
              height={900}
              className="rounded-2xl border border-border shadow-2xl w-full h-full object-cover"
              priority
            />
          </motion.div>

        </div>
      </section>

      {/* ── Proof stats bar ────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-muted/10 py-7">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {[
              { stat: "2–3 s",       label: "per KYC document — end-to-end extraction" },
              { stat: "98%+",        label: "field-level accuracy on bank statement parsing" },
              { stat: "90%+",        label: "reduction in manual loan document keying" },
              { stat: "2–4 weeks",   label: "to production on a fixed-price banking sprint" },
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
            and industry benchmarks for BFSI document automation.
          </p>
        </div>
      </section>

      {/* ── The challenge ─────────────────────────────────────────────────────── */}
      <section id="the-challenge" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">The Problem</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Banking is still one of the most document-intensive industries on Earth.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            A single mortgage application generates 100+ pages. A KYC bundle spans 5–12 documents.
            A commercial loan file can run to 500 pages. Manual handling is a bottleneck, a compliance risk,
            and an operational cost that scales linearly — unless you replace it with financial IDP.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-border bg-background p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Manual / Legacy Document Handling
              </p>
              <ul className="space-y-3">
                {[
                  "Loan officers manually spread financial statements — 2–4 hours per file",
                  "KYC analysts key identity fields from every passport and utility bill",
                  "Mortgage processors sort and re-key each document in the bundle",
                  "Bank statement review misses recurring-payment patterns a human eye skips",
                  "BSA/AML audit trail is incomplete — no timestamped evidence chain",
                  "Document errors discovered at closing, not origination — costly rework",
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
                Financial IDP — Kovil AI
              </p>
              <ul className="space-y-3">
                {[
                  "KYC documents extracted in under 3 seconds — any ID format, any country",
                  "Mortgage bundle classified and extracted automatically — LTV/DTI calculated",
                  "Bank statement parsing produces structured cash flow in seconds, not hours",
                  "Credit underwriting fields extracted before the underwriter opens the file",
                  "Immutable BSA/AML audit trail generated for every document event",
                  "Document completeness checked at intake — gaps flagged before review begins",
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
          Financial IDP Use Cases: KYC, Mortgage, Credit &amp; More
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Every use case below is a production-ready pipeline we have designed and deployed —
          not a demo. Each targets a specific, high-volume banking document workflow where manual
          handling costs the most time, money, and compliance risk.
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

      {/* ── KYC Automation deep-dive (H2 for primary keyword) ────────────────── */}
      <section id="kyc-automation" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Primary Use Case</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          KYC Automation for Banking and Financial Services
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          KYC automation is the highest-volume document AI use case in BFSI. Every new account,
          loan application, and onboarding event triggers a KYC document review. Manual review
          at scale is slow, error-prone, and a compliance liability — AI automation handles it
          in seconds with a full BSA/AML audit trail.
        </p>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — what it does */}
          <div className="space-y-4">
            {[
              {
                step: "01",
                label: "Document Intake",
                text: "Identity documents arrive via onboarding portal, email, mobile upload, or API. PDFs, photos, and scanned copies are all accepted — the pipeline normalises image quality automatically before processing.",
              },
              {
                step: "02",
                label: "Document Type Classification",
                text: "The AI classifies the document as a passport, national ID, driver's licence, utility bill, or proof-of-address letter — across all issuing countries and formats, without country-specific templates.",
              },
              {
                step: "03",
                label: "Field Extraction",
                text: "Vision LLM extracts all identity fields: full name, date of birth, ID number, nationality, expiry date, issuing authority, and address. MRZ lines on passports are parsed and cross-validated against the visual zone.",
              },
              {
                step: "04",
                label: "Tampering & Quality Flags",
                text: "The pipeline flags documents with editing artifacts, font inconsistencies, mismatched MRZ/visual zone data, or image quality below the extraction confidence threshold for human review.",
              },
              {
                step: "05",
                label: "BSA/AML Audit Trail",
                text: "Every event — document receipt, classification decision, extraction output, human review action — is logged to an immutable, timestamped audit trail that satisfies BSA/AML examination requirements.",
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
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">KYC Automation — Performance Benchmarks</p>
              <div className="grid grid-cols-2 gap-4 mb-5">
                {[
                  { stat: "< 3s",    label: "end-to-end per document" },
                  { stat: "98–99%",  label: "field extraction accuracy" },
                  { stat: "2–4 wks", label: "to production pipeline" },
                  { stat: "100%",    label: "BSA/AML audit trail coverage" },
                ].map((m) => (
                  <div key={m.stat} className="text-center p-3 rounded-xl bg-muted/20">
                    <p className="font-display font-black text-xl text-foreground">{m.stat}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/50">Based on production KYC automation deployments for BFSI clients.</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Supported Identity Document Types</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Passport (all countries)", "National ID Card", "Driver's Licence (US, UK, AU, CA)",
                  "Utility Bill", "Bank Statement (address proof)", "Residence Permit",
                  "Company Registration (B2B KYC)", "Certificate of Incorporation",
                ].map((doc) => (
                  <span key={doc} className="text-xs bg-muted/30 border border-border px-2.5 py-1 rounded-full text-muted-foreground">
                    {doc}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Financial Data Extraction deep-dive ───────────────────────────────── */}
      <section id="financial-data-extraction" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Extraction Coverage</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Financial Data Extraction: What the AI Extracts
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Financial data extraction accuracy depends on model choice, pre-processing, and
            confidence scoring — not just raw OCR. Here is what our production banking IDP
            pipeline extracts from each major document type, with typical confidence ranges
            from live deployments.
          </p>
          <div className="rounded-2xl border border-border bg-background overflow-hidden">
            {/* Header */}
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
          From document intake to core banking — in three steps.
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Every banking IDP engagement follows the same proven three-step delivery pattern
          — built around your existing document sources, banking systems, and compliance requirements.
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
            For Azure-native banking deployments, see our{" "}
            <Link href="/azure-ai-foundry" className="text-accent hover:underline font-medium">
              Azure AI Foundry enterprise implementation
            </Link>{" "}
            for Managed Identity, Entra ID, and Azure OpenAI integration patterns.
          </p>
        </div>
      </section>

      {/* ── Compliance ────────────────────────────────────────────────────────── */}
      <section id="compliance" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Compliance</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Built for regulated banking environments.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Financial IDP pipelines operate inside some of the most heavily regulated environments
            in technology. We treat compliance as a first-class design constraint — not an
            afterthought or a checkbox.
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
          How to work with us on banking document AI.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Three engagement models — matched to where you are: proving ROI on one workflow,
          scaling a document AI roadmap, or rescuing a broken IDP pipeline.
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
            Banking &amp; Financial Services IDP — common questions.
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
            Ready to automate your banking document workflows?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We will scope one high-impact document workflow — KYC
            automation, bank statement parsing, or automated mortgage processing — and give
            you a fixed-price delivery plan the same week.
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
              <><Shield className="h-3.5 w-3.5" /> SOC 2 · BSA/AML compliant</>,
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
