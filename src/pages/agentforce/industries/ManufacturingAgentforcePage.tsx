'use client'

import { motion } from "motion/react"
import {
  FileText, Brain, CheckCircle2, ArrowRight, ChevronRight,
  Shield, Lock, Clock, ShieldCheck, Database, Zap,
  Wrench, AlertTriangle, Users, Activity, Package, HelpCircle,
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const SF_BLUE = "#00A1E0"

// ── Use-case data ─────────────────────────────────────────────────────────────
const useCases = [
  {
    id: "field-service-scheduling-agent",
    icon: Wrench,
    color: SF_BLUE,
    title: "Field Service Scheduling Agent",
    subtitle: "Service request intake, technician dispatch, appointment scheduling, SLA monitoring",
    description:
      "Handles inbound field service requests autonomously — capturing asset and symptom information, checking technician availability and skill match in Field Service Lightning, scheduling appointments within SLA windows, dispatching the right technician with the right parts, and sending customer confirmations. Dispatchers focus on exceptions rather than routine scheduling.",
    bullets: [
      "Service request intake with asset history retrieval from Manufacturing Cloud",
      "Technician skill match and availability check via Field Service Lightning",
      "SLA-aware appointment scheduling with customer confirmation",
      "Parts availability check and reservation before dispatch confirmation",
    ],
  },
  {
    id: "warranty-claim-intake-agent",
    icon: Shield,
    color: "#60A5FA",
    title: "Warranty Claim Intake Agent",
    subtitle: "Warranty eligibility check, claim intake, parts ordering, repair authorisation",
    description:
      "Handles warranty claim intake end to end — validating product registration and purchase date against Manufacturing Cloud warranty records, collecting failure description and supporting documentation, determining warranty coverage, initiating parts orders via ERP integration, and routing for repair authorisation. Average warranty claim response time reduced from 3 days to under 4 hours.",
    bullets: [
      "Warranty eligibility validation against Manufacturing Cloud product and contract records",
      "Failure description capture with guided troubleshooting to confirm warranty applicability",
      "Parts order initiation via SAP or Oracle ERP MuleSoft integration",
      "Repair authorisation routing with coverage confirmation to customer",
    ],
  },
  {
    id: "dealer-distributor-support-agent",
    icon: Users,
    color: "#34D399",
    title: "Dealer & Distributor Support",
    subtitle: "Dealer portal support, order status, product configuration queries, incentive programme management",
    description:
      "Supports dealer and distributor networks with autonomous query resolution — order status and tracking, product configuration guidance, incentive programme status, co-op fund balance, and documentation requests — reducing the load on your dealer support team while improving dealer response times and satisfaction scores.",
    bullets: [
      "Order status and delivery tracking from ERP and logistics systems via MuleSoft",
      "Product configuration guidance grounded in Manufacturing Cloud catalogue data",
      "Incentive programme status and co-op fund balance from Revenue Cloud",
      "Technical documentation and parts catalogue delivery via Knowledge Base",
    ],
  },
  {
    id: "preventive-maintenance-alerts-agent",
    icon: Activity,
    color: "#F59E0B",
    title: "Preventive Maintenance Alerts",
    subtitle: "IoT signal monitoring, maintenance schedule management, proactive outreach, work order creation",
    description:
      "Monitors IoT signals from connected assets via MuleSoft integration with PTC ThingWorx, GE Digital, or Siemens MindSphere — identifies assets approaching maintenance thresholds or exhibiting anomalous patterns, sends proactive outreach to customers, and creates Field Service work orders for preventive maintenance visits before failure occurs.",
    bullets: [
      "IoT asset health monitoring via MuleSoft integration with ThingWorx, GE Digital, Siemens",
      "Threshold-based proactive outreach when asset metrics approach maintenance triggers",
      "Work order creation in Field Service Lightning with technician pre-dispatch",
      "Maintenance history retrieval from Data Cloud to contextualise outreach",
    ],
  },
  {
    id: "quality-complaint-triage-agent",
    icon: AlertTriangle,
    color: "#EF4444",
    title: "Quality Complaint Triage",
    subtitle: "Customer quality complaint intake, root cause categorisation, engineering escalation, replacement authorisation",
    description:
      "Captures inbound quality complaints — product defects, performance issues, non-conformances — classifies them by root cause category, determines whether replacement, repair, or credit resolution is appropriate, escalates to engineering for systemic issues, and closes the loop with the customer. Feeds quality data into your Manufacturing Cloud quality management records.",
    bullets: [
      "Quality complaint intake with structured defect classification",
      "Root cause categorisation against known issue library in Knowledge Base",
      "Replacement authorisation routing within configured cost and category thresholds",
      "Engineering escalation with complaint data package for systemic issue review",
    ],
  },
  {
    id: "parts-inventory-query-agent",
    icon: Package,
    color: "#8B5CF6",
    title: "Parts & Inventory Query Agent",
    subtitle: "Parts availability, lead times, substitution options, order placement",
    description:
      "Resolves parts and inventory queries from field technicians, dealers, and service engineers — real-time parts availability from ERP, lead times, approved substitutions, and order placement — without a parts desk interaction. Integrates with SAP Materials Management or Oracle Inventory to provide accurate, real-time answers.",
    bullets: [
      "Real-time parts availability from SAP or Oracle ERP via MuleSoft",
      "Lead time retrieval including location-specific warehouse data",
      "Approved substitution identification from Manufacturing Cloud catalogue",
      "Parts order placement and confirmation with ERP write-back",
    ],
  },
]

// ── Steps ─────────────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Connect Manufacturing Cloud, FSL, and IoT",
    desc: "MuleSoft connects Manufacturing Cloud and Field Service Lightning to your ERP (SAP S/4HANA, Oracle ERP Cloud), IoT platforms, asset management systems, and dealer management systems — giving agents real-time access to asset history, technician availability, parts inventory, and warranty data.",
  },
  {
    number: "02",
    title: "Build Field Service and Dealer Agents",
    desc: "Agentforce Topics and Actions are scoped to your SLA rules, warranty policy, escalation thresholds, and dealer programme configuration. Field service routing logic, IoT trigger thresholds, and quality complaint triage criteria are all configurable without code changes.",
  },
  {
    number: "03",
    title: "Deploy with Full Asset Context",
    desc: "Agents are grounded in Data Cloud asset history, service records, and parts inventory for accurate, real-time responses. Every agent action — warranty decision, work order creation, parts order — is logged in Manufacturing Cloud for quality and compliance reporting.",
  },
]

// ── Compliance ────────────────────────────────────────────────────────────────
const complianceItems = [
  {
    icon: Shield,
    title: "ISO 9001",
    desc: "Quality complaint and non-conformance records logged with full agent decision chain. Supports ISO 9001 quality management system documentation requirements for corrective action records.",
  },
  {
    icon: Lock,
    title: "ISO 14001 / OSHA",
    desc: "Safety incident escalation thresholds configurable within agent logic. Environmental and health & safety event classification routes to EHS team without delay.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Audit Trail",
    desc: "Every warranty decision — eligibility determination, coverage confirmation, repair authorisation — logged with full reasoning chain in Manufacturing Cloud for warranty programme audits.",
  },
  {
    icon: Database,
    title: "SOC 2 Type II",
    desc: "No asset, customer, or ERP data transmitted to external LLMs. Einstein Trust Layer enforces data boundary with full audit logging of every agent action.",
  },
]

// ── Integrations ──────────────────────────────────────────────────────────────
const integrations = [
  "Manufacturing Cloud", "Field Service Lightning", "Data Cloud", "MuleSoft",
  "SAP S/4HANA", "Oracle ERP Cloud", "PTC ThingWorx IoT", "GE Digital",
  "Siemens MindSphere", "ServiceMax", "ClickSoftware", "Tableau",
]

// ── FAQs ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What Salesforce products are needed for manufacturing Agentforce?",
    a: "The core stack is Manufacturing Cloud (for accounts, asset records, warranty contracts, and dealer agreements), Field Service Lightning (for technician scheduling and work order management), Data Cloud (for unified asset history and customer data grounding agent responses), and MuleSoft (for ERP, IoT platform, and dealer management system integration). Agentforce is included in qualifying Salesforce platform licences. Einstein Trust Layer is included and required for production deployments.",
  },
  {
    q: "Can Agentforce integrate with Field Service Lightning for technician dispatch?",
    a: "Yes. Agentforce has native integration with Field Service Lightning — agents can query technician availability, skill records, and service territories in real time, create and update work orders, schedule appointments, and trigger dispatcher assignment. The FSL mobile app gives field technicians access to agent-generated work order context before they arrive on site. We configure FSL scheduling policies, skill requirements, and SLA rules during the sprint.",
  },
  {
    q: "Can Agentforce connect to SAP ERP for parts inventory and warranty data?",
    a: "Yes. MuleSoft provides pre-built SAP S/4HANA and SAP ECC connectors that give Agentforce real-time read and write access to materials management, plant maintenance, warranty contracts, and sales order data. Oracle ERP Cloud connectivity uses the same MuleSoft integration layer. We scope the specific SAP objects and transactions needed — parts availability, order placement, warranty validation — during pre-sprint discovery.",
  },
  {
    q: "What are the best Agentforce use cases for manufacturers?",
    a: "For manufacturers, the highest-ROI starting points are field service scheduling automation (the largest dispatcher time consumer for most manufacturers) and warranty claim intake (which typically takes 2–5 days for human-handled claims and can be reduced to under 4 hours). Dealer and distributor support agents typically deliver the highest satisfaction improvement for companies with large channel networks. Preventive maintenance agents using IoT signal data deliver the strongest downtime reduction ROI for connected equipment manufacturers.",
  },
  {
    q: "Can Agentforce integrate with IoT platforms like PTC ThingWorx?",
    a: "Yes. MuleSoft connects Agentforce to IoT platforms — PTC ThingWorx, GE Digital APM, Siemens MindSphere, and custom MQTT/REST IoT architectures — ingesting asset health signals, threshold alerts, and anomaly events. When an IoT signal triggers a maintenance threshold, the Agentforce preventive maintenance agent initiates proactive customer outreach, creates a work order in Field Service Lightning, and checks parts availability — all without dispatcher involvement.",
  },
  {
    q: "Can Agentforce support dealer and distributor networks?",
    a: "Yes. Dealer support agents built on Manufacturing Cloud's channel partner data model can resolve the full range of dealer queries autonomously — order status, technical documentation, incentive programme status, co-op fund balance, and product configuration guidance. The agent integrates with your dealer management system (DMS) via MuleSoft and with Revenue Cloud for incentive and rebate data. Dealer-facing Experience Cloud portals provide the chat and query interface.",
  },
  {
    q: "How long does an Agentforce manufacturing implementation take?",
    a: "A production manufacturing Agentforce sprint — scoped to one primary workflow such as field service scheduling or warranty claim intake — takes 2–3 weeks from kickoff to deployment. This includes Manufacturing Cloud and FSL configuration review, MuleSoft integration to ERP, agent Topic and Action build, testing against real service request and warranty scenarios, and go-live. IoT-triggered preventive maintenance agents typically require an additional week for IoT integration configuration.",
  },
  {
    q: "Does the Salesforce Field Technician app work with Agentforce?",
    a: "Yes. The Field Service Lightning mobile app gives technicians access to agent-generated work order context — asset history, recommended parts, prior service records, and troubleshooting guidance — before and during the service visit. Agentforce can also update work order status, trigger parts orders, and close work orders via the FSL mobile app workflow. This reduces on-site call duration and parts-not-available delays.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────
export default function ManufacturingAgentforcePage() {
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
                <span className="text-foreground">Manufacturing</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-23">Updated June 2026</time>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: SF_BLUE }}>
              Industry Focus · Manufacturing
            </p>

            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              Agentforce for{" "}
              <span style={{ color: SF_BLUE }}>Manufacturing</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              Field service scheduling agents, warranty claim intake, dealer support automation, and preventive maintenance alerts.
            </p>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Production Agentforce deployments for manufacturers and industrial companies — built on Manufacturing
              Cloud, Field Service Lightning, and MuleSoft. Fixed-price sprints, 2–3 weeks to production.
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
                  AI Agent · Manufacturing Cloud + Field Service
                </span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              {/* Input documents */}
              <div className="grid grid-cols-3 gap-2 relative">
                {[
                  { label: "Service Request", color: SF_BLUE },
                  { label: "Warranty Claim", color: "#60A5FA" },
                  { label: "Parts Query", color: "#34D399" },
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
                  {["Asset History Retrieval", "Technician Dispatch", "Parts Availability"].map((step) => (
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
                  style={{ color: "rgba(255,255,255,0.3)" }}>Dispatch Output</div>
                <div className="space-y-1">
                  {[
                    { label: "Asset",  value: "CNC-Unit-4821" },
                    { label: "Tech",   value: "J. Williams dispatched" },
                    { label: "ETA",    value: "Tomorrow 9am" },
                    { label: "Parts",  value: "Reserved" },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-12 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{field.label}</span>
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
                  Work order created · Customer notified · Parts reserved
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
              { stat: "65%",       label: "field service queries resolved without dispatcher" },
              { stat: "4hr",       label: "average warranty claim response (was 3 days)" },
              { stat: "40%",       label: "reduction in unplanned downtime via IoT agents" },
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
          Agentforce for Manufacturing — Production Use Cases
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
          Every use case below is a production deployment configuration for manufacturers and industrial companies.
          Each targets a high-volume workflow where autonomous agents eliminate manual scheduling, data retrieval, and routing delays.
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
            Every manufacturing Agentforce engagement follows the same delivery pattern — connected to your
            Manufacturing Cloud, FSL, ERP, and IoT infrastructure from day one.
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
          Connects to your manufacturing technology stack.
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
            Built for regulated manufacturing environments.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Manufacturing Agentforce deployments support ISO 9001 quality management, OSHA safety escalation
            requirements, and warranty programme audit standards — with full Einstein Trust Layer logging.
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
          Agentforce for Manufacturing — common questions.
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
            Ready to deploy Agentforce for your manufacturing operations?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a 30-minute discovery call. We will scope your highest-impact manufacturing workflow —
            field service scheduling, warranty intake, or dealer support — and deliver a fixed-price plan the same week.
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
              { icon: Shield, text: "ISO 9001 · OSHA · SOC 2 · Einstein Trust Layer" },
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
