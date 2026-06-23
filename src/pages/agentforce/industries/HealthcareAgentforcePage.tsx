'use client'

import { motion } from "motion/react"
import {
  Calendar, FileText, Heart, DollarSign, MessageSquare, TrendingUp,
  CheckCircle2, ArrowRight, ChevronRight, Clock, Lock, ShieldCheck,
  Database, Brain, Zap, Shield,
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const SF_BLUE = "#00A1E0"

const useCases = [
  {
    id: "patient-scheduling",
    icon: Calendar,
    color: SF_BLUE,
    title: "Patient Scheduling Agent",
    subtitle: "Appointment booking, rescheduling, cancellations, and waitlist management — automated",
    description:
      "Patient scheduling is one of the highest-volume, lowest-complexity tasks in health system operations. Agentforce scheduling agents handle appointment booking, rescheduling, cancellation processing, and waitlist management via Health Cloud — integrating with EHR scheduling systems through MuleSoft to create appointments directly in the system of record without human intervention for standard request types.",
    bullets: [
      "New appointment booking via patient portal, SMS, or web chat",
      "Rescheduling and cancellation processing with automated slot release",
      "Waitlist management and appointment opportunity outreach",
      "EHR scheduling system integration via MuleSoft and FHIR R4 APIs",
    ],
  },
  {
    id: "prior-auth",
    icon: FileText,
    color: "#60A5FA",
    title: "Prior Authorization Resolution",
    subtitle: "Clinical documentation collection, payer submission, status tracking, and staff alerts",
    description:
      "Prior authorization is one of the most time-consuming administrative burdens in healthcare — requiring clinical documentation gathering, payer portal submission, status monitoring, and follow-up coordination. Agentforce PA agents collect required clinical documentation, submit to payer portals via integration, track authorisation status, and alert clinical staff when decisions are received or additional information is needed.",
    bullets: [
      "Clinical documentation collection and completeness checking",
      "Automated payer portal submission and submission confirmation",
      "PA status tracking with proactive clinical team notifications",
      "Denial alerts and appeals documentation request initiation",
    ],
  },
  {
    id: "care-coordination",
    icon: Heart,
    color: "#34D399",
    title: "Care Coordination Agent",
    subtitle: "Care transitions, post-discharge follow-up, referral coordination, and care gap outreach",
    description:
      "Care coordination requires managing complex, multi-party interactions across providers, patients, and payers — tracking care transitions, following up post-discharge, coordinating referrals, and reaching out to patients with identified care gaps. Agentforce care coordination agents automate the routine outreach and tracking tasks that consume care manager time, ensuring no patient falls through the gaps between care settings.",
    bullets: [
      "Care gap identification and proactive patient outreach",
      "Post-discharge follow-up calls and symptom monitoring sequences",
      "Referral tracking and specialist appointment confirmation",
      "Care team coordination with shared Health Cloud task management",
    ],
  },
  {
    id: "billing-inquiry",
    icon: DollarSign,
    color: "#A78BFA",
    title: "Patient Billing Inquiry Agent",
    subtitle: "EOB queries, payment plan setup, claim status, and financial assistance routing",
    description:
      "Patient billing inquiries generate high inbound volume — explanation of benefits questions, payment plan requests, insurance claim status checks, and financial assistance eligibility enquiries. Agentforce billing agents answer standard EOB queries, set up payment plans within approved parameters, provide real-time claim status, and route financial assistance requests to the appropriate counsellor — without requiring a human billing rep for routine interactions.",
    bullets: [
      "EOB and claim explanation delivered to patients in plain language",
      "Payment plan setup within approved financial parameters",
      "Insurance claim status queries resolved in real time",
      "Financial assistance programme eligibility and routing",
    ],
  },
  {
    id: "clinical-triage",
    icon: MessageSquare,
    color: "#F59E0B",
    title: "Clinical Query Triage",
    subtitle: "Patient message routing, clinical context surfacing, and follow-up protocol triggering",
    description:
      "Patient portal messages and secure messaging channels generate significant triage workload — nurses and medical assistants must route each message to the appropriate provider, surface relevant clinical context, and trigger follow-up protocols. Agentforce clinical triage agents classify incoming patient messages by urgency and care type, route to the correct care team member, surface relevant Health Cloud clinical context, and trigger protocol-specific follow-up sequences.",
    bullets: [
      "Patient message classification by urgency and care type",
      "Routing to appropriate care team member with clinical context",
      "Protocol-specific follow-up sequence triggering",
      "Urgent message escalation with immediate care team notification",
    ],
  },
  {
    id: "revenue-cycle",
    icon: TrendingUp,
    color: "#EF4444",
    title: "Revenue Cycle Support",
    subtitle: "Prior auth denial management, claim status monitoring, and payer follow-up automation",
    description:
      "Revenue cycle teams are under constant pressure to reduce days in accounts receivable, manage denial rates, and follow up with payers on outstanding claims. Agentforce revenue cycle agents monitor claim status across payers, escalate aged claims to revenue cycle specialists, manage prior authorisation denial workflows, and automate payer follow-up outreach — reducing manual workload and improving cash collection velocity.",
    bullets: [
      "Claim status monitoring across payers with aged-claim escalation",
      "Prior authorisation denial management and appeals documentation",
      "Payer follow-up automation for outstanding claims",
      "Revenue cycle KPI reporting and exception flagging for management",
    ],
  },
]

const steps = [
  {
    number: "01",
    label: "Connect",
    title: "Connect Health Cloud and EHR Systems",
    desc: "We connect Agentforce to your Health Cloud org, Data Cloud patient 360 layer, and EHR systems via MuleSoft — Epic, Oracle Health (Cerner), athenahealth, Meditech, and others — using FHIR R4 APIs. Every agent action is grounded in real patient and clinical data from the system of record.",
    bullets: [
      "Health Cloud org audit and Agentforce prerequisites check",
      "MuleSoft FHIR R4 connector configuration for EHR integration",
      "Data Cloud patient 360 profile unification and agent grounding",
    ],
  },
  {
    number: "02",
    label: "Build",
    title: "Build HIPAA-Safe Agents",
    desc: "We design Topics, Actions, and Instructions for each healthcare agent using Agentforce Agent Builder, Prompt Builder, and Flow — with HIPAA guardrails, PHI minimisation, and Einstein Trust Layer configured from the ground up. Every agent is reviewed against HIPAA minimum necessary access standards before deployment.",
    bullets: [
      "Agent Topics and Actions designed with PHI minimisation from the start",
      "HIPAA-compliant escalation triggers and clinical handoff protocols",
      "Einstein Trust Layer configured with PHI field masking and audit logging",
    ],
  },
  {
    number: "03",
    label: "Deploy",
    title: "Deploy with Clinical Governance",
    desc: "Healthcare Agentforce deployments include physician oversight workflow configuration, clinical escalation path design, and full audit logging for every agent action. UAT involves clinical staff and a compliance officer. Go-live thresholds are defined pre-deployment and validated in staging with real patient interaction patterns.",
    bullets: [
      "Clinical governance workflows with physician oversight checkpoints",
      "Staged rollout with clinical staff UAT and compliance officer sign-off",
      "Full HIPAA audit trail export to your compliance systems",
    ],
  },
]

const complianceItems = [
  {
    icon: Shield,
    title: "HIPAA / HITECH",
    desc: "PHI handling controls, minimum necessary access, no PHI transmitted to external LLMs, BAA available from Salesforce for Health Cloud deployments.",
  },
  {
    icon: Lock,
    title: "HL7 FHIR R4",
    desc: "Native FHIR-compliant data access via Health Cloud APIs and MuleSoft integration layer — structured clinical data for every agent action.",
  },
  {
    icon: ShieldCheck,
    title: "21 CFR Part 11",
    desc: "Audit trail logging for clinical operations and life sciences research use cases. Full electronic record and signature trail for regulated workflows.",
  },
  {
    icon: Database,
    title: "SOC 2 Type II",
    desc: "Private cloud and on-premise deployment options. PHI never leaves your Salesforce trust boundary. Einstein Trust Layer enforces zero external data retention.",
  },
]

const integrations = [
  "Health Cloud", "Salesforce Data Cloud", "MuleSoft",
  "Epic FHIR R4", "Oracle Health (Cerner)", "athenahealth",
  "Meditech", "Veeva Vault", "CommonWell", "Surescripts",
  "Change Healthcare", "Availity",
]

const faqs = [
  {
    q: "What Salesforce products are needed for healthcare Agentforce?",
    a: "A production healthcare Agentforce deployment typically requires Agentforce licences, Health Cloud for patient relationship and care data management, Salesforce Data Cloud for unified patient 360 profiles that ground agent actions in real-time clinical context, and Einstein licences for generative features. MuleSoft is required for EHR system integration (Epic, Cerner, athenahealth). The exact licence combination depends on your use case scope and existing Salesforce investment — we assess this during the readiness phase.",
  },
  {
    q: "Is Agentforce HIPAA compliant?",
    a: "Salesforce Health Cloud and Agentforce operate within Salesforce's HIPAA-eligible environment. The Einstein Trust Layer ensures that PHI is masked before any data is included in LLM prompts, that no patient data is retained by external model providers, and that every agent action is logged to an immutable audit trail. Salesforce makes a Business Associate Agreement (BAA) available for Health Cloud customers. We configure every healthcare Agentforce deployment with PHI minimisation, minimum necessary access controls, and HIPAA-compliant escalation paths as non-negotiable design requirements.",
  },
  {
    q: "Can Agentforce integrate with Epic or Cerner?",
    a: "Yes. MuleSoft connects Agentforce to Epic via FHIR R4 APIs — the Epic App Orchard MuleSoft connector provides structured access to scheduling, clinical, and patient data. Oracle Health (Cerner) integration follows the same FHIR R4 pattern. athenahealth and Meditech integrations are available via MuleSoft connectors. FHIR R4 compliance means Agentforce agents can read and write clinical data in structured format without custom parsing logic for each EHR vendor.",
  },
  {
    q: "What healthcare use cases does Agentforce handle best?",
    a: "Agentforce performs strongest on high-volume, protocol-driven healthcare interactions: patient scheduling (booking, rescheduling, waitlist management), patient billing inquiries (EOB explanation, claim status, payment plan setup), prior authorisation status tracking and follow-up, care coordination outreach (post-discharge follow-up, referral confirmation, care gap outreach), and clinical message triage and routing. Use cases requiring clinical judgment — diagnosis, treatment decisions, prescription management — require human oversight and are best configured as agent-assisted workflows rather than autonomous resolution.",
  },
  {
    q: "How long does a healthcare Agentforce implementation take?",
    a: "A focused pilot targeting one use case — for example, patient scheduling automation or billing inquiry resolution — typically takes 2–3 weeks from kick-off to production. Full healthcare deployments covering multiple use cases with HIPAA review, MuleSoft EHR integration, clinical governance configuration, and multi-channel setup typically run 6–12 weeks. EHR integration timelines depend heavily on your EHR vendor and the availability of FHIR-compliant APIs in your environment.",
  },
  {
    q: "Does Agentforce work with Health Cloud?",
    a: "Yes. Agentforce has native integration with Health Cloud — agents operate within the Health Cloud data model, have direct access to care plan records, patient timelines, care team assignments, and referral management objects. Health Cloud's patient 360 view provides the clinical context that grounds every Agentforce agent response. Care gap, care coordination, and scheduling agents are all natural fits for the Health Cloud data model.",
  },
  {
    q: "Can Agentforce handle prior authorizations?",
    a: "Yes. Prior authorisation is a strong Agentforce use case for the administrative components: collecting required clinical documentation from the patient record in Health Cloud, submitting to payer portals via MuleSoft integration with clearinghouses (Change Healthcare, Availity), tracking authorisation status, and alerting clinical staff when decisions are received or additional information is required. The clinical determination of medical necessity remains a physician responsibility — Agentforce handles the administrative orchestration around that clinical decision, not the decision itself.",
  },
  {
    q: "How does Agentforce protect patient data?",
    a: "Einstein Trust Layer is the PHI protection architecture for Agentforce in healthcare. It masks protected health information — MRN, diagnosis codes, medication data, insurance identifiers — before any data is included in an LLM prompt. No PHI is retained by external model providers. Every data access event is logged with full traceability for HIPAA audit purposes. All agent processing occurs within the Salesforce Health Cloud trust boundary, which operates under a BAA. For organisations with additional data residency requirements, Salesforce offers private cloud deployment options.",
  },
]

export default function HealthcareAgentforcePage() {
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
              <span className="text-foreground">Healthcare &amp; Life Sciences</span>
            </nav>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
              Industry Focus · Healthcare &amp; Life Sciences
            </p>

            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-5">
              Agentforce for{" "}
              <span className="text-accent">Healthcare &amp; Life Sciences</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Patient scheduling automation, prior authorisation case resolution, care coordination, and billing inquiry agents — production Agentforce deployments for health systems, clinics, and life sciences companies.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Kovil AI designs, builds, and deploys production Agentforce implementations for healthcare organisations using Health Cloud. Every engagement is scoped to your specific clinical governance requirements, EHR integration landscape, and HIPAA compliance posture — delivering working agents in 2–3 weeks on a fixed-price basis.
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
                  AI Agent · Health Cloud
                </span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              {/* Input documents */}
              <div className="grid grid-cols-3 gap-2 relative">
                {[
                  { label: "Appointment Request", color: SF_BLUE },
                  { label: "Prior Auth Case",     color: "#60A5FA" },
                  { label: "Billing Query",        color: "#34D399" },
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
                  {["Patient 360 Context", "EHR Integration", "Insurance Verification"].map((step) => (
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
                    { label: "Patient", value: "Maria Santos" },
                    { label: "Appt",    value: "Tomorrow 2pm" },
                    { label: "Status",  value: "Insurance Verified" },
                    { label: "Action",  value: "Auto-book" },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-14 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{field.label}</span>
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
                  Booked in Epic · Reminder sent · Pre-visit instructions delivered
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
              { stat: "73%",       label: "patient scheduling queries resolved autonomously" },
              { stat: "22 hrs",    label: "admin time reclaimed per site per week" },
              { stat: "4.8/5",     label: "patient satisfaction score maintained post-deployment" },
              { stat: "2–3 weeks", label: "to production on a fixed-price health sprint" },
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
          Agentforce use cases for healthcare — production-ready.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Every use case below is a production-ready Agentforce deployment pattern we have designed and built for healthcare organisations. Each targets a specific, high-volume administrative workflow where autonomous agent resolution reduces cost, reclaims clinical staff time, and improves the patient experience.
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
            From Health Cloud to live agent — in three steps.
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Every healthcare Agentforce engagement follows the same proven three-step delivery pattern — built around your existing Health Cloud org, EHR integration landscape, and HIPAA compliance requirements.
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
          Built for regulated healthcare environments.
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Healthcare Agentforce deployments operate under HIPAA, HL7 FHIR, and clinical governance requirements that make compliance a design constraint — not an afterthought. We configure every healthcare agent deployment with PHI protection, clinical escalation paths, and full audit logging from day one.
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
            Connects to your health technology ecosystem.
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
          Agentforce for healthcare — common questions.
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
            Ready to deploy Agentforce in your health system?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a 30-minute call. We will scope one high-impact healthcare use case — patient scheduling, prior authorisation, or billing inquiry resolution — and give you a fixed-price delivery plan the same week.
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
              { icon: Shield, text: "HIPAA · HL7 FHIR · SOC 2 · Einstein Trust Layer" },
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
