'use client'

import { motion } from "motion/react"
import {
  FileText, Brain, CheckCircle2, ArrowRight, ChevronRight,
  Shield, Lock, Clock, ShieldCheck, Database, AlertTriangle,
  RefreshCw, Users, Briefcase, HelpCircle, Zap,
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const SF_BLUE = "#00A1E0"

// ── Use-case data ─────────────────────────────────────────────────────────────
const useCases = [
  {
    id: "fnol-claims-intake-agent",
    icon: FileText,
    color: SF_BLUE,
    title: "FNOL Claims Intake Agent",
    subtitle: "First notice of loss intake, severity classification, reserve setting, adjuster assignment",
    description:
      "Handles inbound FNOL via digital channels, extracts incident details, classifies claim type and severity, routes to the appropriate adjuster queue, sets initial reserves, and sends acknowledgement — all without an adjuster touching the file until routing is complete. Integrates directly with Financial Services Cloud and Guidewire ClaimCenter.",
    bullets: [
      "FNOL data capture across web, mobile, email, and API channels",
      "Severity and coverage classification against policy data in FSC",
      "Initial reserve recommendation based on incident type and loss data",
      "Adjuster queue routing with priority scoring and SLA tagging",
    ],
  },
  {
    id: "policy-renewal-agent",
    icon: RefreshCw,
    color: "#60A5FA",
    title: "Policy Renewal Agent",
    subtitle: "Renewal outreach, quote generation, coverage review, premium negotiation, payment collection",
    description:
      "Identifies policies approaching renewal, generates personalised renewal quotes from FSC data, outreaches to policyholders at 90/60/30-day intervals, answers coverage questions, and processes payment method updates — reducing lapse rates without additional renewal headcount.",
    bullets: [
      "Renewal outreach 90/60/30 days before expiry via email, SMS, and portal",
      "Personalised quote generation from Financial Services Cloud policy data",
      "Coverage gap identification and upsell presentation during renewal conversation",
      "Payment method update automation with Stripe and Revenue Cloud integration",
    ],
  },
  {
    id: "underwriting-triage-agent",
    icon: Briefcase,
    color: "#34D399",
    title: "Underwriting Triage Agent",
    subtitle: "New business application review, risk data collection, completeness scoring, underwriter queue prioritisation",
    description:
      "Reviews incoming new business applications, scores completeness, initiates automated data collection for missing risk inputs — MVR, loss history, property records — and prioritises the underwriter workqueue by risk tier. Underwriters receive fully packaged submissions, not raw applications.",
    bullets: [
      "Application completeness scoring with missing field identification",
      "Risk data collection automation for MVR, loss history, and property records",
      "MVR and CLUE history retrieval via MuleSoft integrations",
      "Underwriter workqueue prioritisation by risk tier and submission completeness",
    ],
  },
  {
    id: "broker-support-agent",
    icon: Users,
    color: "#F59E0B",
    title: "Broker Support Agent",
    subtitle: "Broker portal support, commission queries, submission status, policy documentation",
    description:
      "Handles the full range of broker and managing general agent (MGA) support queries autonomously — submission status, commission calculations, policy document delivery, and product appetite guidance — freeing underwriting assistants for higher-value tasks.",
    bullets: [
      "Submission status and tracking with real-time FSC data",
      "Commission calculation and query resolution from Revenue Cloud records",
      "Policy document generation and delivery via DocuSign integration",
      "Product appetite and eligibility guidance scoped to your underwriting guidelines",
    ],
  },
  {
    id: "fraud-alert-triage",
    icon: AlertTriangle,
    color: "#EF4444",
    title: "Fraud Alert Triage",
    subtitle: "Anomaly detection review, SIU referral, customer verification outreach",
    description:
      "Reviews claims flagged by Einstein anomaly detection against Data Cloud patterns, initiates SIU referral case creation where warranted, manages customer verification outreach, and links related claims for pattern analysis — providing SIU teams with pre-packaged referral packages rather than raw flags.",
    bullets: [
      "Claims anomaly pattern review against Data Cloud historical data",
      "SIU referral case creation with supporting evidence chain in FSC",
      "Customer verification outreach with identity challenge workflows",
      "Cross-claim linkage analysis to surface connected fraud patterns",
    ],
  },
  {
    id: "customer-coverage-inquiry",
    icon: HelpCircle,
    color: "#8B5CF6",
    title: "Customer Coverage Inquiry",
    subtitle: "Policy terms explanation, coverage limit queries, claims status updates, billing inquiries",
    description:
      "Resolves the full range of inbound policyholder queries — policy terms, coverage limits, claims status, billing, and endorsement questions — autonomously via web chat, email, and the customer portal, with escalation to a licensed agent for anything requiring regulatory guidance or complex coverage interpretation.",
    bullets: [
      "Policy terms and coverage explanation grounded in FSC policy data",
      "Claims status and timeline updates with real-time FSC integration",
      "Billing and payment query resolution with Revenue Cloud data",
      "Endorsement and rider explanation with upsell routing where appropriate",
    ],
  },
]

// ── Steps ─────────────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Connect FSC (Insurance) and Claims Systems",
    desc: "MuleSoft connects Financial Services Cloud (Insurance) to your claims management system (Guidewire, Duck Creek, Majesco), policy admin system, and third-party data sources — MVR, CLUE, ISO loss cost data — giving agents real-time access to policy, claims, and risk data.",
  },
  {
    number: "02",
    title: "Configure Claims and Policy Agents",
    desc: "Agentforce Topics and Actions are scoped to your claims handling rules, escalation thresholds, SIU referral criteria, renewal policy, and state-specific regulatory requirements. Every agent decision boundary is configurable — no black box behaviour.",
  },
  {
    number: "03",
    title: "Deploy with Full Audit Trail",
    desc: "Einstein Trust Layer logs every agent decision — FNOL triage, reserve recommendation, SIU referral, renewal quote generation — meeting state DOI audit requirements and NAIC model law documentation standards. Deployment is production-grade from day one.",
  },
]

// ── Compliance ────────────────────────────────────────────────────────────────
const complianceItems = [
  {
    icon: Shield,
    title: "State DOI / NAIC",
    desc: "Agent triage decisions logged with full reasoning chain. Escalation thresholds configurable per state regulatory requirements. Claims handling timeline compliance monitoring built in.",
  },
  {
    icon: Lock,
    title: "GDPR / CCPA",
    desc: "Policyholder PII handling controls with data residency options for EU business. Consent management for renewal and marketing outreach automation.",
  },
  {
    icon: ShieldCheck,
    title: "SIU Audit Trail",
    desc: "Fraud referral decisions logged with supporting evidence for SIU and law enforcement review. Einstein Trust Layer provides immutable audit trail for every referral.",
  },
  {
    icon: Database,
    title: "SOC 2 Type II",
    desc: "No claims data transmitted to external LLMs. Private cloud and on-premise deployment available for sensitive lines of business and carriers with strict data residency requirements.",
  },
]

// ── Integrations ──────────────────────────────────────────────────────────────
const integrations = [
  "Financial Services Cloud", "Data Cloud", "MuleSoft", "Guidewire",
  "Duck Creek", "Majesco", "Verisk ISO", "LexisNexis CLUE",
  "Carfax MVR", "Salesforce Revenue Cloud", "DocuSign", "Stripe Payments",
]

// ── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What Salesforce products are needed for insurance Agentforce?",
    a: "The core stack is Agentforce (included in Salesforce platform licences above a threshold), Financial Services Cloud with the Insurance module, Data Cloud for unified policyholder and claims data, and MuleSoft for connecting claims management and policy admin systems. Einstein Trust Layer is included. Revenue Cloud handles billing and payment automation. DocuSign is optional for document generation workflows.",
  },
  {
    q: "Is Agentforce NAIC compliant for insurance?",
    a: "Agentforce running on Salesforce Financial Services Cloud (Insurance) supports NAIC compliance through the Einstein Trust Layer audit trail, configurable escalation thresholds, and claims handling timeline monitoring. Every agent decision is logged with a full reasoning chain for regulatory examination. State-specific requirements — prompt payment laws, acknowledgement timelines — are configured into the agent's action boundaries during implementation.",
  },
  {
    q: "Can Agentforce integrate with Guidewire ClaimCenter?",
    a: "Yes. MuleSoft provides a native Guidewire API connector that gives Agentforce real-time read and write access to ClaimCenter — FNOL creation, claim status retrieval, adjuster assignment, reserve setting, and payment triggering. The same connector supports Duck Creek, Majesco, and other major claims management systems. We scope the integration depth during the pre-sprint discovery.",
  },
  {
    q: "What are the best Agentforce use cases for P&C insurers?",
    a: "For P&C carriers, the highest-ROI use cases are FNOL claims intake automation (eliminates manual data entry and routing delays), policy renewal agents (reduces lapse rates without additional headcount), and underwriting triage (packages submissions for underwriters rather than having them chase missing data). Fraud alert triage and broker support agents typically follow in a second sprint once the core claims and renewal workflows are proven.",
  },
  {
    q: "How long does an Agentforce insurance implementation take?",
    a: "A production Agentforce insurance sprint — scoped to one primary workflow such as FNOL intake or policy renewal — takes 2–3 weeks from kickoff to production deployment. This includes FSC configuration, MuleSoft integration to the claims or policy admin system, agent Topic and Action build, testing against real-world claim scenarios, and go-live. Broader multi-workflow programmes typically run in sequential 2-week sprints.",
  },
  {
    q: "Does Financial Services Cloud have an insurance-specific module?",
    a: "Yes. Financial Services Cloud includes an Insurance vertical layer with native objects for policies, coverage lines, claims, and beneficiaries. This gives Agentforce direct access to structured insurance data without custom object development. The Insurance module also supports P&C, life, and health line-specific data models, reducing implementation time compared to building on a generic Salesforce org.",
  },
  {
    q: "How does FNOL automation work in Agentforce?",
    a: "The FNOL agent receives the first notice of loss via any configured digital channel — web portal, mobile app, email, or API. It extracts incident details using Atlas Reasoning Engine, classifies the claim type (auto, property, liability) and severity tier, retrieves the policyholder's policy data from FSC to validate coverage, sets an initial reserve, routes the claim to the appropriate adjuster queue with priority scoring, and sends an acknowledgement to the claimant. The entire intake process completes in under two minutes without adjuster involvement for standard claims.",
  },
  {
    q: "Can Agentforce detect insurance fraud?",
    a: "Agentforce can be configured to review claims flagged by Einstein anomaly detection against historical patterns in Data Cloud. When anomalies are detected — unusual claim frequency, provider patterns, or incident characteristics — the fraud triage agent reviews the pattern, creates an SIU referral case with a structured evidence package, initiates customer verification outreach, and links related claims for cross-case analysis. This supplements your SIU team rather than replacing their investigative judgement.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function InsuranceAgentforcePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center justify-between flex-wrap gap-y-1 mb-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-foreground">Insurance</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-23">Updated June 2026</time>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
              Industry Focus · Insurance
            </p>

            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              Agentforce for{" "}
              <span style={{ color: SF_BLUE }}>Insurance</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              FNOL claims intake, policy renewal automation, underwriting triage, and broker support agents.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Production Agentforce deployments for P&C, life, and specialty insurers — built on Financial Services Cloud
              (Insurance), Data Cloud, and MuleSoft. Fixed-price sprints, 2–3 weeks to production.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="accent"
                className="rounded-full font-semibold px-8 text-base h-12"
                style={{ background: SF_BLUE, color: "#fff" }}
                onClick={openCalendly}
              >
                Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/agentforce">
                <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                  All Agentforce Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right — dark 3D panel */}
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
              <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(0,161,224,0.6), transparent)" }} />
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(0,161,224,0.12) 0%, transparent 70%)" }} />

              {/* Status bar */}
              <div className="flex items-center gap-2 relative">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
                  AI Agent · Financial Services Cloud (Insurance)
                </span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              {/* Input documents */}
              <div className="grid grid-cols-3 gap-2 relative">
                {[
                  { label: "FNOL Report", color: SF_BLUE },
                  { label: "Policy Renewal", color: "#60A5FA" },
                  { label: "Coverage Query", color: "#34D399" },
                ].map((doc) => (
                  <div key={doc.label} className="rounded-xl p-2.5 text-center"
                    style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${doc.color}28` }}>
                    <FileText className="h-4 w-4 mx-auto mb-1" style={{ color: doc.color }} />
                    <span className="text-[10px] leading-tight block" style={{ color: "rgba(255,255,255,0.5)" }}>{doc.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4" style={{ background: "rgba(0,161,224,0.35)" }} />
              </div>

              {/* AI processing card */}
              <div className="rounded-xl p-3 relative"
                style={{ background: "rgba(0,161,224,0.08)", border: "1px solid rgba(0,161,224,0.3)" }}>
                <div className="flex items-center gap-2 mb-2.5">
                  <Brain className="h-3.5 w-3.5" style={{ color: SF_BLUE }} />
                  <span className="text-[11px] font-bold" style={{ color: SF_BLUE }}>Atlas Reasoning Engine</span>
                </div>
                <div className="space-y-1.5">
                  {["Claims Triage", "Policy Data Retrieval", "Fraud Risk Scoring"].map((step) => (
                    <div key={step} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: "#4ade80" }} />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.6)" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-4" style={{ background: "rgba(0,161,224,0.35)" }} />
              </div>

              {/* Output */}
              <div className="rounded-xl p-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "rgba(255,255,255,0.3)" }}>Claim Output</div>
                <div className="space-y-1">
                  {[
                    { label: "Claim",   value: "AUTO-2026-4821" },
                    { label: "Type",    value: "Rear collision · Low severity" },
                    { label: "Fraud",   value: "Low risk — 94%" },
                    { label: "Action",  value: "STP approved" },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-14 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{field.label}</span>
                      <span className="font-medium flex-1 px-2" style={{ color: "rgba(255,255,255,0.85)" }}>{field.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Zap className="h-3 w-3 shrink-0" style={{ color: SF_BLUE }} />
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Adjuster assigned · Reserves set · Customer notified
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
              { stat: "60–80%",    label: "reduction in claims cycle time" },
              { stat: "85%",       label: "FNOL cases triaged without adjuster" },
              { stat: "$420K",     label: "average annual savings per deployment" },
              { stat: "2–3 weeks", label: "to production on a fixed-price sprint" },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center gap-1">
                <span className="font-display font-black text-2xl text-foreground">{item.stat}</span>
                <span className="text-xs text-muted-foreground max-w-[160px] leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ─────────────────────────────────────────────────────────── */}
      <section id="use-cases" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>Use Cases</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
          Agentforce for Insurance — Production Use Cases
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Every use case below is a production deployment configuration — not a demo. Each targets a
          high-volume insurance workflow where autonomous agents deliver measurable cycle time and cost reduction.
        </p>
        <div className="space-y-8">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.id}
              id={uc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${uc.color}18`, border: `1px solid ${uc.color}30` }}>
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
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: SF_BLUE }} />
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

      {/* ── How it works ──────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            From kickoff to production in three steps.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Every Agentforce insurance engagement follows the same proven delivery pattern — built around
            your existing FSC configuration, claims systems, and regulatory requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${SF_BLUE}18`, border: `1px solid ${SF_BLUE}30` }}>
                  <span className="font-display font-black text-sm" style={{ color: SF_BLUE }}>{step.number}</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>Integrations</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
          Connects to your insurance technology stack.
        </h2>
        <div className="flex flex-wrap gap-2">
          {integrations.map((pill) => (
            <span key={pill}
              className="text-sm bg-muted/30 border border-border px-4 py-2 rounded-full text-muted-foreground">
              {pill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Compliance ────────────────────────────────────────────────────────── */}
      <section id="compliance" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>Compliance</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">
            Built for regulated insurance environments.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Insurance Agentforce deployments operate under state DOI requirements, NAIC model laws, and
            federal privacy regulations. Compliance is a first-class design constraint — not an afterthought.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {complianceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${SF_BLUE}18`, border: `1px solid ${SF_BLUE}30` }}>
                  <item.icon className="h-5 w-5" style={{ color: SF_BLUE }} />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section id="faq" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: SF_BLUE }}>FAQ</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">
          Agentforce for Insurance — common questions.
        </h2>
        <div id="faq-grid" className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-semibold text-base mb-3 leading-snug">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section id="cta" className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-10 lg:p-14 text-center"
          style={{ background: `${SF_BLUE}08`, border: `1px solid ${SF_BLUE}28` }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>Get Started</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5 max-w-2xl mx-auto">
            Ready to deploy Agentforce for your insurance operations?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a 30-minute discovery call. We will scope your highest-impact insurance workflow —
            FNOL intake, policy renewal, or underwriting triage — and deliver a fixed-price plan the same week.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              className="rounded-full font-semibold px-8 text-base h-12 text-white"
              style={{ background: SF_BLUE }}
              onClick={openCalendly}
            >
              Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                All Agentforce Services
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8">
            {[
              { icon: Clock, text: "2–3 week sprint to production" },
              { icon: Shield, text: "NAIC · State DOI · SOC 2 · Einstein Trust Layer" },
              { icon: CheckCircle2, text: "Fixed price, no hourly billing" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon className="h-3.5 w-3.5" style={{ color: SF_BLUE }} /> {text}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  )
}
