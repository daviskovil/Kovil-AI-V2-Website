'use client'

import { AlertTriangle, DollarSign, Gauge, Plug, Truck, Leaf, Shield, Lock, Database, ShieldCheck } from "lucide-react"
import IndustryPageTemplate, { type IndustryPageData } from "./_shared/IndustryPageTemplate"

const SF_BLUE = "#00A1E0"

const data: IndustryPageData = {
  breadcrumb: "Energy & Utilities",
  industryTag: "Energy & Utilities",
  headline: "Agentforce for",
  headlineAccent: "Energy & Utilities",
  description: "Outage management agents, billing inquiry resolution, smart meter query automation, new connection handling, and field service dispatch — production Agentforce for energy companies and utilities.",
  expandedDescription: "Kovil AI designs, builds, and deploys production Agentforce implementations for energy companies and utility operators. Every engagement is scoped to your metering infrastructure, billing platform, field service landscape, and regulatory compliance posture — delivering working agents in 2–3 weeks on a fixed-price basis.",
  ctaLabel: "Book a Call",
  stats: [
    { stat: "68%", label: "billing inquiry queries resolved autonomously" },
    { stat: "10×", label: "inbound volume handled during major outage events" },
    { stat: "4.6/5", label: "customer satisfaction maintained post-deployment" },
    { stat: "2–3 weeks", label: "to production on a fixed-price sprint" },
  ],
  heroPanel: {
    agentLabel: "AI Agent · Energy & Utilities Cloud",
    inputDocs: [
      { label: "Outage Report", color: SF_BLUE },
      { label: "Billing Query", color: "#60A5FA" },
      { label: "Meter Query", color: "#34D399" },
    ],
    processingSteps: ["Account Lookup", "Grid Status Check", "Usage Data Fetch"],
    outputFields: [
      { label: "Account", value: "Robert Davies" },
      { label: "Status", value: "Outage Active" },
      { label: "ETA", value: "3:45 PM Today" },
      { label: "Action", value: "Notified" },
    ],
    footerText: "ETA delivered · Case created · Follow-up scheduled at restoration",
  },
  useCasesIntro: "Every use case below is a production-ready Agentforce deployment pattern for energy companies and utility operators. Each targets a specific, high-volume customer interaction that can be handled autonomously — freeing contact centre agents for complex cases requiring human judgment.",
  useCases: [
    {
      id: "outage-management",
      icon: AlertTriangle,
      color: SF_BLUE,
      title: "Outage Management Agent",
      subtitle: "Proactive notification, ETA communication, and restoration status updates",
      description: "Handles the complete outage communication lifecycle — proactive notification delivery to affected customers, ETA updates as restoration progresses, complaint acknowledgement during grid events, and restoration confirmation — without requiring human agent involvement for standard status queries.",
      bullets: ["Proactive outage notification to affected accounts via SMS, email, app", "Real-time ETA updates as restoration timeline changes", "Complaint and frustration acknowledgement with escalation threshold logic", "Restoration confirmation delivery and case closure at grid restoration"],
    },
    {
      id: "billing-inquiry",
      icon: DollarSign,
      color: "#60A5FA",
      title: "Billing Inquiry Agent",
      subtitle: "Bill explanation, payment plans, usage queries, and hardship routing",
      description: "Resolves routine billing interactions without contact centre agent involvement — explaining high bill drivers, setting up payment arrangements within approved parameters, answering usage queries, and routing hardship cases to the appropriate support programme.",
      bullets: ["High bill driver explanation from usage data and tariff records", "Payment plan setup within pre-approved financial parameters", "Direct debit amendment and account billing preference updates", "Hardship programme eligibility screening and specialist routing"],
    },
    {
      id: "smart-meter",
      icon: Gauge,
      color: "#34D399",
      title: "Smart Meter Query Agent",
      subtitle: "Usage explanation, anomaly investigation, fault reporting, and rebate queries",
      description: "Handles smart meter customer interactions — explaining usage data in plain language, investigating apparent anomalies against historical patterns, logging meter fault reports, and answering smart meter rebate and installation programme queries.",
      bullets: ["Usage data explanation with historical and average comparison", "Anomaly investigation against seasonal and household usage patterns", "Meter fault report logging with engineer visit scheduling where required", "Smart meter installation eligibility and appointment booking"],
    },
    {
      id: "new-connection",
      icon: Plug,
      color: "#A78BFA",
      title: "New Connection Agent",
      subtitle: "Application intake, eligibility checks, scheduling, and status tracking",
      description: "Manages the new connection application lifecycle — capturing residential and commercial connection requests, verifying eligibility and network capacity, scheduling survey and connection appointments, and providing status updates throughout the process.",
      bullets: ["Residential and commercial connection application intake", "Network capacity eligibility checks via grid management system integration", "Survey and connection appointment scheduling with field service teams", "Application status updates at each stage of the connection process"],
    },
    {
      id: "field-service",
      icon: Truck,
      color: "#F59E0B",
      title: "Field Service Dispatch Agent",
      subtitle: "Job creation, technician assignment, appointment confirmation, and status updates",
      description: "Automates field service scheduling — creating jobs from customer requests, assigning to available technicians based on location and skills, confirming appointments with customers, and providing real-time arrival status during the service window.",
      bullets: ["Job creation and urgency classification from customer fault reports", "Technician assignment based on location, availability, and skill set", "Customer appointment confirmation with 30-minute arrival window alerts", "Real-time status update delivery if technician is delayed or rescheduled"],
    },
    {
      id: "sustainability",
      icon: Leaf,
      color: "#EF4444",
      title: "Sustainability Reporting Agent",
      subtitle: "Carbon queries, renewable certificates, programme enrolment, and efficiency tips",
      description: "Handles customer sustainability queries — explaining carbon footprint calculations, processing renewable energy certificate requests, enrolling customers in demand response and efficiency programmes, and delivering personalised usage efficiency recommendations.",
      bullets: ["Carbon footprint explanation from usage and tariff mix data", "Renewable Energy Certificate request processing and fulfilment", "Demand response and efficiency programme enrolment management", "Personalised energy efficiency recommendations based on usage profile"],
    },
  ],
  buildSteps: [
    {
      number: "01", label: "Connect",
      title: "Connect Agentforce to Your Billing and Metering Systems",
      desc: "We connect Agentforce to Salesforce Energy & Utilities Cloud, your billing platform (Oracle Utilities, SAP IS-U, Hansen), AMI/metering systems (Itron, Landis+Gyr), and field service management via MuleSoft — giving agents access to real-time account, usage, and grid status data.",
      bullets: ["Energy & Utilities Cloud audit and Agentforce prerequisites check", "Billing platform integration via MuleSoft (Oracle Utilities, SAP IS-U, Hansen)", "AMI and smart meter data integration for live usage data access"],
    },
    {
      number: "02", label: "Build",
      title: "Build Agents with Regulatory Compliance by Design",
      desc: "We design Topics, Actions, and Instructions for each utility agent with NERC CIP, OFGEM, FERC, and consumer protection obligations built in from the start — including hardship detection triggers, vulnerable customer pathways, and complaint escalation logic required by regulators.",
      bullets: ["Hardship detection and vulnerable customer pathway configuration", "Regulatory complaint acknowledgement and escalation threshold logic", "Einstein Trust Layer configured with customer data protection controls"],
    },
    {
      number: "03", label: "Deploy",
      title: "Deploy with Contact Centre and Compliance Sign-Off",
      desc: "Utility Agentforce deployments include contact centre manager and compliance officer sign-off before go-live. We define performance benchmarks — autonomous resolution rate, average handling time, CSAT — and validate against them at 30 and 90 days.",
      bullets: ["UAT with contact centre managers using real customer interaction scenarios", "Compliance officer review of Instructions and escalation paths", "Supervised go-live with outage event simulation testing before live deployment"],
    },
  ],
  complianceTitle: "Built for regulated energy and utilities environments.",
  complianceIntro: "Utility Agentforce deployments must meet NERC CIP, OFGEM, FERC, and consumer protection obligations. We configure every utility deployment with explicit regulatory compliance checkpoints, hardship detection, and vulnerable customer pathways before go-live.",
  complianceItems: [
    { icon: Shield, title: "NERC CIP / FERC", desc: "Operational technology interaction controls and security requirements configured to NERC CIP standards for US utility deployments." },
    { icon: ShieldCheck, title: "OFGEM / Ofwat", desc: "UK regulatory compliance including complaint handling standards, vulnerable customer obligations, and mandatory escalation pathway requirements." },
    { icon: Lock, title: "GDPR / CCPA", desc: "Customer personal and consumption data handled within Salesforce trust boundary. PII masked before LLM prompt inclusion. Full audit trail." },
    { icon: Database, title: "Einstein Trust Layer", desc: "Immutable logging of every agent action, zero external data retention, and configurable data masking for sensitive account and metering information." },
  ],
  integrations: ["Salesforce Energy & Utilities Cloud", "Salesforce Data Cloud", "MuleSoft", "Oracle Utilities", "SAP IS-U", "Hansen Technologies", "Itron", "Landis+Gyr", "SAP Field Service", "Salesforce Field Service", "Twilio", "Medallia"],
  faqTitle: "Agentforce for energy and utilities — common questions.",
  faqs: [
    { q: "What Agentforce use cases work best for energy and utilities?", a: "The strongest use cases are outage management (proactive notifications, ETA updates, complaint deflection), billing inquiry resolution (bill explanation, payment plans, usage queries), and smart meter queries. These three represent 60–70% of inbound utility customer service volume." },
    { q: "How does Agentforce handle peak demand during outage events?", a: "Agentforce scales elastically — no per-agent throughput cap creates queuing during high-volume events. During major outages, the agent handles proactive status delivery, ETA updates, and restoration confirmation across thousands of simultaneous customer sessions without requiring additional headcount." },
    { q: "Can Agentforce integrate with Oracle Utilities or SAP IS-U?", a: "Yes. MuleSoft connects Agentforce to Oracle Utilities, SAP IS-U, Hansen Technologies, and AMI/metering systems — surfacing live account balances, usage data, and meter readings for real-time, accurate agent responses." },
    { q: "What compliance requirements apply to Agentforce in utilities?", a: "Utility deployments must meet NERC CIP, GDPR/CCPA, OFGEM, and consumer protection obligations. The Einstein Trust Layer provides audit logging and data masking. We configure explicit regulatory compliance checkpoints before go-live." },
    { q: "How does Agentforce help utilities reduce call centre costs?", a: "Utilities typically see 55–75% autonomous resolution rates on billing inquiry and outage query use cases within 90 days. At mid-size utilities handling 500,000+ annual contacts, this translates to $400K–$1.2M in annual handling cost reduction." },
  ],
  ctaHeadline: "Ready to deploy Agentforce in your utility?",
  ctaBody: "Book a 30-minute call. We will scope one high-impact use case — outage management, billing inquiry resolution, or smart meter queries — and give you a fixed-price delivery plan the same week.",
  ctaTrustItems: ["2–3 week sprint to production", "NERC CIP · OFGEM · GDPR · Einstein Trust Layer", "Fixed price, no hourly billing"],
}

export default function EnergyUtilitiesAgentforcePage() {
  return <IndustryPageTemplate data={data} />
}
