'use client'

import { Users, FileText, CheckCircle, FolderOpen, Archive, ShieldCheck, Lock, Database, Shield, Globe } from "lucide-react"
import IndustryPageTemplate, { type IndustryPageData } from "./_shared/IndustryPageTemplate"

const SF_BLUE = "#00A1E0"

const data: IndustryPageData = {
  breadcrumb: "Government & Public Sector",
  industryTag: "Government & Public Sector",
  headline: "Agentforce for",
  headlineAccent: "Government & Public Sector",
  description: "Citizen service agents, permit processing automation, benefits eligibility, case management, records requests, and compliance monitoring — production Agentforce for government agencies and public sector organisations.",
  expandedDescription: "Kovil AI designs, builds, and deploys production Agentforce implementations for government agencies and public sector organisations. Every engagement is scoped to your Government Cloud environment, legacy system integration landscape, and statutory compliance obligations — delivering working agents in 2–3 weeks on a fixed-price basis.",
  ctaLabel: "Book a Call",
  stats: [
    { stat: "58%", label: "citizen service queries handled without staff involvement" },
    { stat: "24/7", label: "citizen service availability post-deployment" },
    { stat: "< 2 min", label: "average citizen query response time" },
    { stat: "2–3 weeks", label: "to production on a fixed-price sprint" },
  ],
  heroPanel: {
    agentLabel: "AI Agent · Government Cloud",
    inputDocs: [
      { label: "Citizen Query", color: SF_BLUE },
      { label: "Permit Request", color: "#60A5FA" },
      { label: "Benefits Query", color: "#34D399" },
    ],
    processingSteps: ["Identity Verification", "Case Lookup", "Eligibility Check"],
    outputFields: [
      { label: "Citizen", value: "Marcus Webb" },
      { label: "Case", value: "PRM-2026-0912" },
      { label: "Status", value: "In Review" },
      { label: "Action", value: "Update Sent" },
    ],
    footerText: "Status delivered · Documents requested · Callback scheduled",
  },
  useCasesIntro: "Every use case below is a production-ready Agentforce deployment pattern for government agencies and public sector organisations. Each targets a specific, high-volume citizen interaction that can be handled autonomously — freeing government staff for complex cases requiring policy judgment and human discretion.",
  useCases: [
    {
      id: "citizen-service",
      icon: Users,
      color: SF_BLUE,
      title: "Citizen Service Agent",
      subtitle: "24/7 service information, application status, department routing, and appointments",
      description: "Delivers 24/7 citizen service across government contact channels — answering service and programme information queries, providing application status updates, routing citizens to the correct department, and scheduling appointment callbacks — without requiring staff involvement for standard information requests.",
      bullets: ["24/7 service and programme information delivery via web, chat, email, SMS", "Application and case status queries resolved from CRM in real time", "Department routing for multi-service enquiries with context handoff", "Appointment and callback scheduling integrated with staff availability"],
    },
    {
      id: "permit-processing",
      icon: FileText,
      color: "#60A5FA",
      title: "Permit Processing Agent",
      subtitle: "Application intake, eligibility checks, documentation requirements, and status tracking",
      description: "Manages the complete permit application workflow — guiding citizens through eligibility requirements, capturing application information, explaining documentation requirements, tracking application status through the review workflow, and scheduling inspections when approvals progress.",
      bullets: ["Permit type eligibility guidance and application intake", "Documentation requirement explanation and completeness checking", "Application status tracking through internal review workflow", "Inspection scheduling when permit progresses to approval stage"],
    },
    {
      id: "benefits-eligibility",
      icon: CheckCircle,
      color: "#34D399",
      title: "Benefits Eligibility Agent",
      subtitle: "Programme eligibility screening, application guidance, document collection, and status",
      description: "Screens citizens for benefits programme eligibility, guides eligible applicants through the application process, collects required supporting documentation, provides application status updates, and routes complex or borderline cases to the appropriate benefits officer.",
      bullets: ["Benefits programme eligibility screening from stated household circumstances", "Application process guidance with plain-language step-by-step instruction", "Supporting document collection and completeness verification", "Status updates through processing stages with expected decision timeline"],
    },
    {
      id: "case-management",
      icon: FolderOpen,
      color: "#A78BFA",
      title: "Case Management Agent",
      subtitle: "Case creation, status updates, document requests, escalation, and citizen communication",
      description: "Supports active case management interactions — creating new cases from citizen contacts, delivering status updates, requesting additional documentation, routing escalation requests to the responsible caseworker, and managing citizen communication throughout the case lifecycle.",
      bullets: ["New case creation from citizen contact with document template delivery", "Case status updates on demand and at defined lifecycle milestones", "Additional document request with submission deadline communication", "Escalation routing to caseworker with full interaction history"],
    },
    {
      id: "records-request",
      icon: Archive,
      color: "#F59E0B",
      title: "Records Request Agent",
      subtitle: "FOIA intake, acknowledgement, document delivery, and deadline tracking",
      description: "Manages the public records and FOIA request lifecycle — accepting requests, confirming receipt within statutory timeframes, routing to the responsible records officer, delivering automatically disclosable records, and tracking response deadlines against legal obligations.",
      bullets: ["FOIA and public records request intake with statutory acknowledgement", "Automatic disclosure delivery for records meeting standard release criteria", "Routing to records officer for requests requiring exemption determination", "Response deadline tracking against statutory timeframe obligations"],
    },
    {
      id: "compliance-monitoring",
      icon: ShieldCheck,
      color: "#EF4444",
      title: "Compliance Monitoring Agent",
      subtitle: "Deadline tracking, inspection scheduling, violation notices, and status reporting",
      description: "Monitors regulatory compliance obligations for regulated entities — tracking filing and reporting deadlines, scheduling compliance inspections, delivering violation notices, processing compliance status queries, and generating exception reports for compliance officers.",
      bullets: ["Regulatory filing and reporting deadline tracking with advance alerts", "Compliance inspection scheduling with regulated entity notification", "Violation notice generation and delivery within statutory requirements", "Compliance status reporting and exception escalation to compliance officers"],
    },
  ],
  buildSteps: [
    {
      number: "01", label: "Connect",
      title: "Connect Agentforce to Your Government Systems of Record",
      desc: "We connect Agentforce to Salesforce Government Cloud, your case management system, permit and licensing platform, benefits administration system, and legacy systems of record via MuleSoft — giving agents access to real-time case status, eligibility data, and citizen records within your security boundary.",
      bullets: ["Government Cloud audit and Agentforce prerequisites check", "Case management and permit platform integration via MuleSoft", "Legacy system of record integration within your security boundary"],
    },
    {
      number: "02", label: "Build",
      title: "Build Agents with FedRAMP and Statutory Compliance Controls",
      desc: "We design Topics, Actions, and Instructions with FedRAMP, FISMA, and relevant statutory obligations built in from the start — including citizen identity verification gates, data minimisation by interaction type, mandatory routing for regulated matters, and ADA-accessible response formats.",
      bullets: ["Citizen identity verification gates for sensitive record access", "ADA-accessible response formats and multi-language support configuration", "Einstein Trust Layer configured to FedRAMP and FISMA audit requirements"],
    },
    {
      number: "03", label: "Deploy",
      title: "Deploy with Legal, IT Security, and Service Management Sign-Off",
      desc: "Government Agentforce deployments require legal, IT security, and service management sign-off before go-live. We account for government procurement, ATO, and security assessment timelines in the engagement plan. Every deployment includes a 30-day performance review and a 90-day audit trail export.",
      bullets: ["Legal and IT security review of Instructions, routing, and data access", "ATO and authority sign-off process support with documentation", "30-day performance review with 90-day audit trail export deliverable"],
    },
  ],
  complianceTitle: "Built for government security and statutory requirements.",
  complianceIntro: "Government Agentforce deployments must meet FedRAMP, FISMA, ADA, and agency-specific statutory obligations. We configure every government deployment with the required security controls, audit logging, and access management before any citizen data is processed.",
  complianceItems: [
    { icon: Shield, title: "FedRAMP / FISMA", desc: "Salesforce Government Cloud is FedRAMP Moderate authorised. FISMA-required audit logging, access controls, and data protection configured before go-live." },
    { icon: Globe, title: "ADA / Section 508", desc: "Text-based citizen service agents are inherently accessible. All response formats reviewed against Section 508 and WCAG 2.1 accessibility requirements." },
    { icon: Lock, title: "Privacy Act / GDPR", desc: "Citizen personal data handled under Privacy Act obligations. PII masked before LLM prompt inclusion. Full audit trail for Privacy Act compliance documentation." },
    { icon: Database, title: "Einstein Trust Layer", desc: "Immutable logging of every agent action, zero external data retention at LLM providers, and configurable masking for sensitive citizen record data." },
  ],
  integrations: ["Salesforce Government Cloud", "Salesforce Data Cloud", "MuleSoft", "Tyler Technologies", "OpenGov", "Accela", "IBM CÚRAM", "ServiceNow", "Microsoft Azure Government", "DocuSign", "Twilio", "AWS GovCloud"],
  faqTitle: "Agentforce for government — common questions.",
  faqs: [
    { q: "What Agentforce use cases work best for government agencies?", a: "The strongest Agentforce use cases for government are citizen service (24/7 information delivery, application status, department routing), permit processing (intake, eligibility checks, status tracking), and benefits eligibility (programme screening, application guidance, document collection). These handle the highest-volume citizen interactions that currently require human agent time for standard queries, allowing staff to focus on complex cases requiring judgment and policy expertise." },
    { q: "Is Agentforce FedRAMP and FISMA compliant for government use?", a: "Salesforce Government Cloud is FedRAMP Moderate authorized, making it the deployment environment for US federal Agentforce implementations. The Einstein Trust Layer provides the FISMA-required audit logging, access controls, and data protection controls. UK central government deployments are supported through Salesforce's G-Cloud accredited environment. We configure every government Agentforce deployment with agency-specific security requirements reviewed before any data is processed." },
    { q: "How does Agentforce handle FOIA and public records requests?", a: "Agentforce records request agents handle the administrative workflow: accepting FOIA requests, confirming receipt within statutory timeframes, routing to the responsible department, sending acknowledgment letters, and tracking response deadlines against legal obligations. For standard records that meet automatic disclosure criteria, the agent can deliver records directly. Complex requests requiring legal review or exemption determination are routed to the appropriate records officer with full request context." },
    { q: "Can Agentforce improve citizen service access for ADA compliance?", a: "Yes. Agentforce citizen service agents are accessible through text-based channels (web chat, SMS, email) which are inherently ADA-compatible. Agents follow plain language standards, provide alternative format document options, and route accessibility accommodation requests to the appropriate ADA coordinator. Multi-language support is available for agencies serving non-English-speaking populations." },
    { q: "How long does a government Agentforce implementation take?", a: "A focused pilot — citizen service handling or permit status queries — takes 2–3 weeks in a Government Cloud environment. Full deployments with legacy system integration run 8–14 weeks. Government procurement and security assessment timelines can extend pre-build phases — we account for this in every engagement plan." },
  ],
  ctaHeadline: "Ready to deploy Agentforce in your agency?",
  ctaBody: "Book a 30-minute call. We will scope one high-impact use case — citizen service handling, permit processing, or benefits eligibility — and give you a fixed-price delivery plan the same week.",
  ctaTrustItems: ["2–3 week sprint to production", "FedRAMP · FISMA · ADA · Einstein Trust Layer", "Fixed price, no hourly billing"],
}

export default function GovernmentPublicSectorAgentforcePage() {
  return <IndustryPageTemplate data={data} />
}
