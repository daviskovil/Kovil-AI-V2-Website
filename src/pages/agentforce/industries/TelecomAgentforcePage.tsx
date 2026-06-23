'use client'

import { motion } from "motion/react"
import {
  FileText, Brain, CheckCircle2, ArrowRight, ChevronRight,
  Shield, Lock, Clock, ShieldCheck, Database, Zap,
  Wifi, CreditCard, ToggleLeft, TrendingDown, Smartphone, Settings,
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const SF_BLUE = "#00A1E0"

// ── Use-case data ─────────────────────────────────────────────────────────────
const useCases = [
  {
    id: "network-outage-support-agent",
    icon: Wifi,
    color: SF_BLUE,
    title: "Network Outage Support",
    subtitle: "Outage detection, proactive customer notification, credit application, ETR updates",
    description:
      "Monitors network management system data via MuleSoft for confirmed outages, proactively notifies affected customers via SMS and email before they call in, provides accurate estimated time to restore (ETR) updates, applies account credits automatically based on configurable SLA thresholds, and closes cases when service is restored — all without agent involvement for standard outage events.",
    bullets: [
      "Proactive outage notification to affected customers before inbound contact",
      "Accurate ETR updates sourced from network management system via MuleSoft",
      "Automatic credit calculation and application based on outage duration and plan SLA",
      "Case auto-close with resolution confirmation and NPS survey trigger on service restore",
    ],
  },
  {
    id: "billing-dispute-resolution-agent",
    icon: CreditCard,
    color: "#60A5FA",
    title: "Billing Dispute Resolution",
    subtitle: "Bill explanation, adjustment eligibility, credit application, payment arrangement",
    description:
      "Resolves billing disputes autonomously — explaining charges in plain language, determining adjustment or credit eligibility based on account history and configured policies, applying credits within configured thresholds, and setting up payment arrangements — with average resolution time reduced to under 90 seconds for standard billing queries.",
    bullets: [
      "Bill charge explanation grounded in account data from Communications Cloud",
      "Adjustment and credit eligibility determination against account policy rules",
      "Credit application within configured threshold limits with automatic posting",
      "Payment arrangement setup and confirmation with billing system write-back",
    ],
  },
  {
    id: "plan-upgrade-downgrade-agent",
    icon: ToggleLeft,
    color: "#34D399",
    title: "Plan Upgrade & Downgrade Agent",
    subtitle: "Eligibility check, plan comparison, migration execution, confirmation",
    description:
      "Handles plan change requests autonomously — checking upgrade/downgrade eligibility against contract terms, presenting personalised plan comparisons based on usage data from Data Cloud, executing the migration in the provisioning system via MuleSoft, and sending confirmation. Upsell logic surfaces higher-value plans when usage patterns indicate readiness.",
    bullets: [
      "Upgrade eligibility check against contract terms and account standing",
      "Usage-grounded plan comparison with personalised recommendation from Data Cloud",
      "Plan migration execution via provisioning system MuleSoft integration",
      "Downgrade retention logic with counter-offer before confirmation",
    ],
  },
  {
    id: "churn-prevention-agent",
    icon: TrendingDown,
    color: "#F59E0B",
    title: "Churn Prevention Agent",
    subtitle: "At-risk account identification, personalised retention offer, escalation to retention specialist",
    description:
      "Identifies at-risk accounts using churn propensity scores from Einstein AI and Data Cloud usage analytics, initiates personalised retention outreach with targeted offers — loyalty discounts, plan upgrades, device offers — and escalates accounts with high lifetime value to a human retention specialist for bespoke negotiation. Voluntary churn reduced by 23% in production deployments.",
    bullets: [
      "At-risk account identification from Einstein churn propensity scores in Data Cloud",
      "Personalised retention offer generation based on account value and churn reason",
      "Offer acceptance processing with immediate provisioning and billing update",
      "High-LTV account escalation to retention specialist with full context package",
    ],
  },
  {
    id: "porting-activation-agent",
    icon: Smartphone,
    color: "#8B5CF6",
    title: "Porting & Activation",
    subtitle: "Number port-in processing, device activation, SIM swap, account setup",
    description:
      "Manages the full porting and activation lifecycle autonomously — processing number port-in requests with LNP carriers, guiding device activation, executing SIM swap requests, and setting up new accounts — reducing activation call handle time and improving the new customer experience at the highest-risk point in the customer lifecycle.",
    bullets: [
      "Number port-in initiation and status tracking via LNP carrier integration",
      "Device activation guidance with IMEI validation and provisioning trigger",
      "SIM swap processing with identity verification and account security checks",
      "New account setup with service provisioning and welcome communication",
    ],
  },
  {
    id: "technical-troubleshooting-agent",
    icon: Settings,
    color: "#EF4444",
    title: "Technical Troubleshooting",
    subtitle: "Network diagnostics, device configuration, remote reset, escalation to field tech",
    description:
      "Runs network diagnostics against the customer's line via BSS/OSS integration, guides device configuration for common issues, executes remote resets and reprovisioning where available, and escalates to a field technician dispatch via Field Service integration when remote resolution fails — providing a structured troubleshooting record before field escalation.",
    bullets: [
      "Network line diagnostics via OSS integration for signal strength and service quality",
      "Guided device configuration for common mobile and broadband setup issues",
      "Remote line reset and reprovisioning via provisioning system integration",
      "Field technician escalation with pre-completed fault record and diagnostic data",
    ],
  },
]

// ── Steps ─────────────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Connect Communications Cloud and BSS/OSS",
    desc: "MuleSoft connects Salesforce Communications Cloud to your billing system (Amdocs, CSG, Netcracker), network management platform, provisioning system, and trouble ticketing — giving agents real-time account, service, and network data for accurate autonomous resolution.",
  },
  {
    number: "02",
    title: "Build Telecom-Specific Agents",
    desc: "Agentforce Topics and Actions are scoped to your tariff plans, network topology, churn risk thresholds, TCPA compliance requirements, and escalation criteria. Credit limit thresholds, plan change eligibility rules, and retention offer logic are all configurable.",
  },
  {
    number: "03",
    title: "Deploy at Scale",
    desc: "Agentforce handles millions of interactions — web chat, SMS, WhatsApp, IVR deflection via Genesys or NICE CXone — without proportional headcount increase. Seasonal volume spikes and peak support periods are absorbed without queue degradation.",
  },
]

// ── Compliance ────────────────────────────────────────────────────────────────
const complianceItems = [
  {
    icon: Shield,
    title: "FCC Regulations",
    desc: "Agent decision boundaries configurable to FCC consumer protection requirements. Outage credit policies and service restoration communications aligned to FCC rules. Every agent action logged for regulatory review.",
  },
  {
    icon: Lock,
    title: "TCPA (Outbound Messaging)",
    desc: "Outbound SMS and proactive notification sequences configured with TCPA-compliant opt-in validation and opt-out handling. Consent records stored and enforced at the campaign level in Marketing Cloud.",
  },
  {
    icon: ShieldCheck,
    title: "CPNI Data Protection",
    desc: "Customer Proprietary Network Information handled within Salesforce's trust boundary. CPNI access controls configured per FCC requirements. Authentication and identity verification required before account data access.",
  },
  {
    icon: Database,
    title: "GDPR / CCPA / SOC 2",
    desc: "No customer or network data transmitted to external LLMs. Einstein Trust Layer enforces data boundary. EU data residency available for European telco deployments. SOC 2 Type II audit logs for every agent action.",
  },
]

// ── Integrations ──────────────────────────────────────────────────────────────
const integrations = [
  "Communications Cloud", "Data Cloud", "MuleSoft", "Salesforce Service Cloud",
  "Amdocs", "CSG Systems", "Netcracker", "Nokia BSS", "Ericsson OSS",
  "Genesys", "NICE CXone", "Twilio", "Zendesk",
]

// ── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What Salesforce products are needed for telecom Agentforce?",
    a: "The core stack is Salesforce Communications Cloud (the telecom-specific CRM with native objects for service plans, accounts, devices, and orders), Service Cloud (for OmniChannel and case management), Data Cloud (for unified customer profiles, usage analytics, and churn propensity scoring), and MuleSoft (for BSS/OSS, billing system, and network management integration). Agentforce is included in qualifying Salesforce platform licences. Marketing Cloud handles TCPA-compliant outbound SMS and email sequences.",
  },
  {
    q: "Can Agentforce integrate with BSS and OSS systems like Amdocs or CSG?",
    a: "Yes. MuleSoft provides integration to major telco BSS/OSS platforms — Amdocs, CSG, Netcracker, Ericsson, and Nokia — via REST and SOAP APIs. This gives Agentforce real-time access to billing records, service provisioning status, order management, and network diagnostics. Write-back capabilities allow agents to post credits, trigger provisioning changes, and update account records directly in the BSS without manual intervention. We scope the specific API objects and operations during pre-sprint discovery.",
  },
  {
    q: "How does Agentforce ensure TCPA compliance for outbound messaging?",
    a: "Agentforce outbound SMS and proactive notification sequences are governed by Marketing Cloud's consent management layer, which validates TCPA opt-in status before any outbound contact. Opt-out requests are processed in real time and propagated across all outbound channels. Contact frequency limits and quiet hours are configured at the campaign level. Every outbound contact attempt is logged with consent status for regulatory audit. We configure all TCPA compliance controls during the sprint as part of the agent Topic and Action setup.",
  },
  {
    q: "What are the best Agentforce use cases for telcos?",
    a: "For telecom operators and MVNOs, the highest-ROI starting points are network outage support automation (which typically generates 20–40% of inbound contact volume during outage events) and billing dispute resolution (the most time-consuming per-contact query type). Churn prevention agents deliver the strongest revenue protection ROI for operators with elevated voluntary churn. Plan upgrade automation drives incremental ARPU without additional sales headcount. We prioritise use cases based on your contact volume distribution during the discovery sprint.",
  },
  {
    q: "Can Agentforce integrate with churn prediction models?",
    a: "Yes. Agentforce churn prevention agents are grounded in Einstein AI churn propensity scores and Data Cloud usage analytics — connecting to your existing churn prediction models via the Data Cloud data pipeline or MuleSoft API integration. If you do not yet have a churn model, Einstein Prediction Builder can generate one from your Communications Cloud usage and account data. The agent acts on churn propensity scores to trigger proactive outreach before customers contact with a cancellation intent.",
  },
  {
    q: "Can Agentforce deflect IVR contacts and reduce call volume?",
    a: "Yes. Agentforce integrates with IVR platforms — Genesys, NICE CXone, Twilio Flex, Nuance — to deflect callers to digital self-service channels at key IVR decision points. When a caller's intent is identified as one the agent can resolve autonomously (outage status, billing dispute, plan change), the IVR routes to a web chat or SMS agent interaction rather than queuing for a human agent. Production telco deployments typically achieve 25–40% IVR deflection to digital channels within 90 days of go-live.",
  },
  {
    q: "How long does a telecom Agentforce implementation take?",
    a: "A production telecom Agentforce sprint — scoped to one primary workflow such as network outage support or billing dispute resolution — takes 2–3 weeks from kickoff to deployment. This includes Communications Cloud configuration, MuleSoft integration to BSS/billing system, TCPA compliance configuration, agent Topic and Action build, testing against real-world query scenarios, and go-live across selected channels. Churn prevention agents with Data Cloud churn model integration typically add one additional week.",
  },
  {
    q: "Can Agentforce support multiple brands or MVNOs within one Salesforce org?",
    a: "Yes. Agentforce supports multi-brand and MVNO deployments within a single Communications Cloud org using separate Experience Cloud portals per brand, brand-scoped OmniChannel routing, and brand-specific agent Topic configurations. Billing system integrations are scoped per brand where brands use separate BSS instances. Data Cloud's multi-source identity resolution supports unified customer profiles across brands where cross-brand analytics are desired.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function TelecomAgentforcePage() {
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
                <span className="text-foreground">Telecommunications</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-23">Updated June 2026</time>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
              Industry Focus · Telecommunications
            </p>

            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              Agentforce for{" "}
              <span style={{ color: SF_BLUE }}>Telecommunications</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              Network outage support agents, billing dispute resolution, plan upgrade automation, and churn prevention agents.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Production Agentforce deployments for telcos, MVNOs, and communications providers — built on
              Salesforce Communications Cloud, Data Cloud, and MuleSoft. Fixed-price sprints, 2–3 weeks to production.
            </p>

            <div className="flex flex-wrap gap-4">
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
                  AI Agent · Communications Cloud
                </span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              {/* Input documents */}
              <div className="grid grid-cols-3 gap-2 relative">
                {[
                  { label: "Outage Report", color: SF_BLUE },
                  { label: "Billing Dispute", color: "#60A5FA" },
                  { label: "Plan Change", color: "#34D399" },
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
                  {["Network Status Check", "Account Analysis", "Churn Risk Scoring"].map((step) => (
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
                  style={{ color: "rgba(255,255,255,0.3)" }}>Resolution Output</div>
                <div className="space-y-1">
                  {[
                    { label: "Account", value: "James Miller" },
                    { label: "Issue",   value: "Network outage confirmed" },
                    { label: "Credit",  value: "$15 applied" },
                    { label: "Action",  value: "Case auto-closed" },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-16 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{field.label}</span>
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
                  Credit applied · Case closed · NPS survey sent
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
              { stat: "72%",       label: "inbound contacts resolved without human agent" },
              { stat: "90 sec",    label: "average resolution time for billing disputes" },
              { stat: "23%",       label: "reduction in voluntary churn" },
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
          Agentforce for Telecom — Production Use Cases
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Every use case below is a production deployment configuration for telcos, MVNOs, and communications providers.
          Each targets a high-volume contact driver where autonomous resolution delivers direct OPEX reduction and CSAT improvement.
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
            Every telecom Agentforce engagement follows the same delivery pattern — connected to your
            Communications Cloud, BSS/OSS, and network infrastructure from day one.
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
          Connects to your telecom technology stack.
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
            Built for regulated telecommunications environments.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Telecom Agentforce deployments operate under FCC regulations, TCPA outbound messaging rules, and CPNI
            data protection requirements. Every compliance control is built in during implementation.
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
          Agentforce for Telecommunications — common questions.
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
            Ready to deploy Agentforce for your telecom operations?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a 30-minute discovery call. We will scope your highest-impact telecom workflow —
            outage support, billing dispute resolution, or churn prevention — and deliver a fixed-price plan the same week.
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
              { icon: Shield, text: "FCC · TCPA · CPNI · GDPR · SOC 2" },
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
