'use client'

import { motion } from "motion/react"
import {
  Users, FileText, Shield, BarChart2, Building2, AlertCircle,
  CheckCircle2, ArrowRight, ChevronRight, Clock, Lock, ShieldCheck,
  Database, Brain, Zap,
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const SF_BLUE = "#00A1E0"

const useCases = [
  {
    id: "wealth-onboarding",
    icon: Users,
    color: SF_BLUE,
    title: "Wealth Management Onboarding",
    subtitle: "KYC document collection, suitability questionnaire, account opening — automated",
    description:
      "Wealth management onboarding requires collecting KYC documents, running suitability assessments, verifying identity, and coordinating between advisors and compliance teams. Agentforce automates the document collection sequence, routes cases to compliance review when thresholds are breached, and keeps clients updated throughout — cutting onboarding time from weeks to days.",
    bullets: [
      "KYC document request and chase sequences automated",
      "Suitability questionnaire completion and scoring",
      "Compliance escalation routing with full audit trail",
      "Integration with Financial Services Cloud client records",
    ],
  },
  {
    id: "loan-servicing",
    icon: FileText,
    color: "#60A5FA",
    title: "Loan Servicing Case Resolution",
    subtitle: "Payment queries, deferral requests, and payoff statements — resolved without agent touch",
    description:
      "Loan servicers handle thousands of routine queries weekly — payment status, deferral eligibility, payoff statements, escrow inquiries. Agentforce resolves Tier 1 and Tier 2 servicing cases by pulling real-time loan data, applying eligibility rules, and providing accurate responses without routing to a human agent.",
    bullets: [
      "Payment history and status queries resolved in real time",
      "Deferral and modification eligibility assessment automated",
      "Payoff statement generation and delivery",
      "Escalation to human agents for complex loss mitigation cases",
    ],
  },
  {
    id: "compliance-monitoring",
    icon: Shield,
    color: "#34D399",
    title: "Compliance Monitoring Agent",
    subtitle: "Regulatory alert triage, suspicious activity flagging, and audit trail generation",
    description:
      "Financial services compliance teams face constant alert fatigue — AML flags, KYC refresh triggers, suspicious transaction alerts. Agentforce triage agents classify each alert by risk level, pull supporting account data from Financial Services Cloud and Data Cloud, generate structured summaries for compliance officers, and route high-risk alerts immediately while closing false positives automatically.",
    bullets: [
      "AML and suspicious activity alert classification by risk level",
      "KYC refresh trigger management and customer outreach",
      "Structured compliance summary generation for officer review",
      "Full Einstein Trust Layer audit trail for every agent action",
    ],
  },
  {
    id: "investment-advisory",
    icon: BarChart2,
    color: "#A78BFA",
    title: "Investment Advisory Support",
    subtitle: "Portfolio review prep, client query response, and market update delivery",
    description:
      "Relationship managers and financial advisors spend hours preparing for client reviews and answering routine portfolio queries. Agentforce agents pull current portfolio data from Financial Services Cloud, generate pre-meeting briefings, answer standard portfolio performance questions, and deliver personalised market update summaries — freeing advisors for high-value client interactions.",
    bullets: [
      "Pre-meeting portfolio briefing generation for advisors",
      "Client portfolio performance query resolution",
      "Personalised market update and commentary delivery",
      "Next-best-action recommendations surfaced to advisors",
    ],
  },
  {
    id: "mortgage-processing",
    icon: Building2,
    color: "#F59E0B",
    title: "Mortgage Application Support",
    subtitle: "Application status updates, document collection, and underwriting queue management",
    description:
      "Mortgage processing teams manage hundreds of in-progress applications simultaneously — tracking document completeness, chasing applicants for outstanding items, and updating status across multiple systems. Agentforce agents monitor application completeness, trigger outreach for missing documents, provide real-time status to applicants via portal or messaging, and route complete files to underwriting.",
    bullets: [
      "Outstanding document chase sequences automated",
      "Real-time application status delivered to applicants",
      "Completeness scoring and underwriting queue prioritisation",
      "Integration with loan origination systems via MuleSoft",
    ],
  },
  {
    id: "fraud-triage",
    icon: AlertCircle,
    color: "#EF4444",
    title: "Fraud Alert Triage",
    subtitle: "Transaction anomaly investigation, customer verification, and case creation — automated",
    description:
      "Fraud operations teams receive thousands of transaction anomaly alerts daily. Agentforce fraud triage agents review each flagged transaction against account history and behavioural patterns in Data Cloud, contact customers for verification via their preferred channel, and create structured fraud cases for specialist review — without manual analyst touch for standard alert types.",
    bullets: [
      "Transaction anomaly review against Data Cloud behavioural patterns",
      "Automated customer outreach for card-present verification",
      "Structured fraud case creation with supporting evidence",
      "High-confidence fraud escalation to specialist queue",
    ],
  },
]

const steps = [
  {
    number: "01",
    label: "Connect",
    title: "Connect Financial Services Cloud Data",
    desc: "We connect Agentforce to your Financial Services Cloud org, Data Cloud unification layer, and any external systems via MuleSoft — loan management platforms, compliance databases, trading systems. Every agent action is grounded in real client and account data.",
    bullets: [
      "Financial Services Cloud org audit and agent prerequisites check",
      "Data Cloud identity resolution and unified profile configuration",
      "MuleSoft connectors to loan origination systems, core banking, and compliance databases",
    ],
  },
  {
    number: "02",
    label: "Build",
    title: "Build and Configure Your Agents",
    desc: "We design Topics, Actions, and Instructions for each financial services agent using Agentforce Agent Builder, Prompt Builder, and Flow — scoped to your compliance requirements, escalation thresholds, and audit trail specifications.",
    bullets: [
      "Agent Topics and Actions designed for your specific use case scope",
      "Instructions written with explicit compliance guardrails and escalation triggers",
      "Prompt Builder templates for structured regulatory communication",
    ],
  },
  {
    number: "03",
    label: "Deploy",
    title: "Deploy with Einstein Trust Layer",
    desc: "Every financial services Agentforce deployment includes full Einstein Trust Layer configuration — zero data retention, prompt injection prevention, complete audit logging for every agent action — meeting SEC, FINRA, and SOX audit requirements.",
    bullets: [
      "Einstein Trust Layer configured for zero external LLM data retention",
      "Full audit log export to your compliance SIEM",
      "UAT with compliance officer sign-off and go-live threshold definition",
    ],
  },
]

const complianceItems = [
  {
    icon: Shield,
    title: "SEC / FINRA Compliance",
    desc: "Agent actions logged to immutable Einstein Trust Layer audit trail. Escalation thresholds configurable by regulation. No client data transmitted outside your Salesforce trust boundary.",
  },
  {
    icon: Lock,
    title: "SOX & Internal Controls",
    desc: "Agent decision paths documented with full traceability. Approval workflows and exception escalations logged for SOX audit evidence.",
  },
  {
    icon: ShieldCheck,
    title: "AML / BSA Requirements",
    desc: "Suspicious activity alert triage with structured case creation. Integration with AML platforms via MuleSoft for real-time screening.",
  },
  {
    icon: Database,
    title: "Data Residency & PCI-DSS",
    desc: "All agent processing within your Salesforce org. No card data transmitted to external LLMs. Private cloud deployment available for additional isolation.",
  },
]

const integrations = [
  "Financial Services Cloud", "Salesforce Data Cloud", "MuleSoft",
  "Einstein Trust Layer", "Revenue Cloud", "nCino", "Blend",
  "Finastra", "Jack Henry", "FIS", "Temenos", "Bloomberg API",
  "SS&C Geneva", "FactSet",
]

const faqs = [
  {
    q: "What Salesforce products does Agentforce for financial services require?",
    a: "A production Agentforce financial services deployment typically requires Agentforce licences (included with certain Sales/Service Cloud editions or available as an add-on), Financial Services Cloud for relationship and account data, Salesforce Data Cloud for unified customer profiles grounding agent actions in real-time context, and Einstein licences for generative features. The exact licence combination depends on your use case scope — we assess this during the readiness phase.",
  },
  {
    q: "How does Agentforce handle regulatory compliance in financial services?",
    a: "Agentforce includes Einstein Trust Layer as the compliance backbone. Every agent action — prompt content, data retrieved, response generated — is logged to an immutable audit trail with full traceability. The Trust Layer enforces zero data retention with external LLM providers, applies configurable PII masking before any data reaches the model, and provides prompt injection prevention. For SEC, FINRA, and SOX requirements, we configure audit log exports to your compliance SIEM and define explicit escalation thresholds in Agent Instructions.",
  },
  {
    q: "Can Agentforce integrate with our loan origination or core banking system?",
    a: "Yes. MuleSoft is the standard integration layer connecting Agentforce to external banking systems — loan origination systems (Encompass, Blend, nCino), core banking platforms (Finastra, Temenos, Jack Henry, FIS), and compliance databases. MuleSoft provides circuit breaker, retry logic, and rate limiting out of the box. For simpler integrations, Apex callouts and named credentials can connect directly to REST APIs. We assess the right integration approach during the technical scoping phase.",
  },
  {
    q: "What financial services use cases does Agentforce handle best?",
    a: "Agentforce performs strongest on high-volume, repetitive financial services interactions with clear resolution logic: loan servicing queries (payment status, payoff statements, deferral eligibility), KYC and wealth management onboarding sequences, compliance alert triage (AML, KYC refresh), investment advisory support (portfolio briefings, client queries), and mortgage application status management. Use cases requiring nuanced human judgment — complex loss mitigation, investment advice, regulatory disputes — are best handled with agent-assisted handoff rather than full autonomy.",
  },
  {
    q: "How long does an Agentforce financial services implementation take?",
    a: "A focused pilot targeting one use case — for example, loan servicing case resolution or KYC onboarding automation — typically takes 2–3 weeks from kick-off to production. Full financial services deployments covering multiple use cases with compliance review, MuleSoft integration, and multi-channel configuration typically run 6–12 weeks. We always recommend starting with a single, read-only use case to prove the approach before expanding scope.",
  },
  {
    q: "Does Agentforce work with Financial Services Cloud?",
    a: "Yes. Agentforce has native integration with Financial Services Cloud — agents operate within the Relationship Manager workspace, have direct access to FSC data objects (Financial Accounts, Households, Financial Goals, Referrals), and can surface next-best-action recommendations to advisors. The FSC data model grounds agent responses in real client and account data without requiring separate data transformation pipelines.",
  },
  {
    q: "What is the ROI of Agentforce for financial services?",
    a: "ROI in financial services Agentforce deployments is typically driven by three factors: case resolution cost reduction (autonomous resolution of Tier 1 and Tier 2 cases eliminates agent handling time), response time improvement (lead and case response drops from hours to minutes, improving conversion and retention), and compliance cost reduction (automated audit logging and alert triage reduces compliance team workload). Our financial services clients have seen projected annual savings of $280K–$400K per deployment at mid-size organisations. Results vary by use case scope and baseline operational cost.",
  },
  {
    q: "How does Agentforce handle sensitive client financial data?",
    a: "Einstein Trust Layer is Salesforce's data protection architecture for Agentforce. It ensures that sensitive client financial data — account numbers, balances, transaction history — is masked before being included in any LLM prompt, that no prompt content is retained by external model providers, and that every data access event is logged with full traceability. All agent processing occurs within your Salesforce trust boundary. For organisations with strict data residency requirements, Salesforce offers private cloud deployment options that ensure no data leaves your designated region.",
  },
]

export default function FinancialServicesAgentforcePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ───────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">Financial Services</span>
            </nav>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
              Industry Focus · Financial Services
            </p>

            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-5">
              Agentforce for{" "}
              <span className="text-accent">Financial Services &amp; Banking</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Wealth management onboarding, loan servicing automation, compliance monitoring, and KYC case resolution — production Agentforce deployments for banks, lenders, and wealth managers.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Kovil AI designs, builds, and deploys production Agentforce implementations for financial services organisations using Financial Services Cloud. We scope each engagement to your specific regulatory environment, integration landscape, and compliance thresholds — delivering working agents in 2–3 weeks on a fixed-price basis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/agentforce">
                <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                  See Agentforce Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — 3D hero panel */}
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
                boxShadow: "32px 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,161,224,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* Dot grid */}
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
              {/* Top blue glow line */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(0,161,224,0.6), transparent)" }} />
              {/* Glow blob */}
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,161,224,0.12) 0%, transparent 70%)" }} />

              {/* Status bar */}
              <div className="flex items-center gap-2 relative">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
                  AI Agent · Financial Services Cloud
                </span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              {/* Input documents */}
              <div className="grid grid-cols-3 gap-2 relative">
                {[
                  { label: "Loan Application", color: SF_BLUE },
                  { label: "KYC Document",     color: "#60A5FA" },
                  { label: "Support Case",     color: "#34D399" },
                ].map((doc) => (
                  <div key={doc.label}
                    className="rounded-xl p-2.5 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${doc.color}28` }}>
                    <FileText className="h-4 w-4 mx-auto mb-1" style={{ color: doc.color }} />
                    <span className="text-[10px] leading-tight block" style={{ color: "rgba(255,255,255,0.5)" }}>{doc.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4" style={{ background: `rgba(0,161,224,0.35)` }} />
              </div>

              {/* AI processing card */}
              <div className="rounded-xl p-3 relative"
                style={{ background: "rgba(0,161,224,0.08)", border: "1px solid rgba(0,161,224,0.3)" }}>
                <div className="flex items-center gap-2 mb-2.5">
                  <Brain className="h-3.5 w-3.5" style={{ color: SF_BLUE }} />
                  <span className="text-[11px] font-bold" style={{ color: SF_BLUE }}>Atlas Reasoning Engine</span>
                </div>
                <div className="space-y-1.5">
                  {["Customer 360 Context", "Compliance Check", "Eligibility Scoring"].map((step) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: "#4ade80" }} />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.6)" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4" style={{ background: `rgba(0,161,224,0.35)` }} />
              </div>

              {/* Output data */}
              <div className="rounded-xl p-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "rgba(255,255,255,0.3)" }}>
                  Agent Resolution
                </div>
                <div className="space-y-1">
                  {[
                    { label: "Type",     value: "Mortgage · Tier 2" },
                    { label: "Customer", value: "Robert Chen" },
                    { label: "Status",   value: "Eligible — KYC ✓" },
                    { label: "Action",   value: "Auto-approve · Log" },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-16 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{field.label}</span>
                      <span className="font-medium flex-1 px-2" style={{ color: "rgba(255,255,255,0.85)" }}>{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer action */}
              <div className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Zap className="h-3 w-3 shrink-0" style={{ color: SF_BLUE }} />
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Updated in FSC · Compliance logged · Advisor notified
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-muted/10 py-7">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {[
              { stat: "68%",       label: "cases resolved autonomously by Agentforce Service agents" },
              { stat: "9 min",     label: "average lead response time (was 4 days) for wealth management SDR agents" },
              { stat: "$340K",     label: "average annual cost reduction per mid-size financial services deployment" },
              { stat: "2–3 weeks", label: "to production on a fixed-price Agentforce sprint" },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center gap-1">
                <span className="font-display font-black text-2xl text-foreground">{item.stat}</span>
                <span className="text-xs text-muted-foreground max-w-[180px] leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ─────────────────────────────────────────────────────────── */}
      <section id="use-cases" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
          Use Cases
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          Agentforce use cases for financial services — production-ready.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Every use case below is a production-ready Agentforce deployment pattern we have designed and built — not a concept. Each targets a specific, high-volume financial services workflow where autonomous agent resolution delivers measurable ROI.
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

      {/* ── How we build it ───────────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
            How We Build It
          </p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            From Financial Services Cloud to live agent — in three steps.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Every financial services Agentforce engagement follows the same proven three-step delivery pattern — built around your existing FSC org, compliance requirements, and regulatory environment.
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
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: `${SF_BLUE}15`, border: `1px solid ${SF_BLUE}30` }}>
                    <span className="font-display font-black text-sm" style={{ color: SF_BLUE }}>{step.number}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 min-h-[60px] bg-border" />}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ color: SF_BLUE, background: `${SF_BLUE}15` }}>
                      {step.label}
                    </span>
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{step.desc}</p>
                  <ul className="space-y-1.5">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: SF_BLUE }} />{b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance ────────────────────────────────────────────────────────── */}
      <section id="compliance" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
          Compliance
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          Built for regulated financial services environments.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Financial services Agentforce deployments operate inside some of the most heavily regulated environments in technology. We treat compliance as a first-class design constraint, not a checkbox.
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
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${SF_BLUE}15`, border: `1px solid ${SF_BLUE}30` }}>
                  <Icon className="h-5 w-5" style={{ color: SF_BLUE }} />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Integrations ──────────────────────────────────────────────────────── */}
      <section className="bg-muted/20 border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
            Integrations
          </p>
          <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6">
            Connects to your financial services technology stack.
          </h2>
          <div className="flex flex-wrap gap-2">
            {integrations.map((int) => (
              <span key={int}
                className="text-sm bg-background border border-border px-3 py-1.5 rounded-full text-muted-foreground">
                {int}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>
          FAQ
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">
          Agentforce for financial services — common questions.
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
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
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-10 lg:p-14 text-center"
          style={{ background: `${SF_BLUE}08`, border: `1px solid ${SF_BLUE}30` }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>Get Started</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5 max-w-2xl mx-auto">
            Ready to deploy Agentforce in your financial services org?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We will scope one high-impact financial services use case and give you a fixed-price delivery plan the same week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                See Agentforce Services
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8">
            {[
              { icon: Clock, text: "2–3 week sprint to production" },
              { icon: Shield, text: "SEC · FINRA · SOX · Einstein Trust Layer" },
              { icon: CheckCircle2, text: "Fixed price, no hourly billing" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon className="h-3.5 w-3.5" /> {text}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  )
}
