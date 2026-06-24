'use client'

import { FileText, Users, Clock3, DollarSign, ShieldCheck, BookOpen, Lock, Database, Scale, AlertCircle } from "lucide-react"
import IndustryPageTemplate, { type IndustryPageData } from "./_shared/IndustryPageTemplate"

const SF_BLUE = "#00A1E0"

const data: IndustryPageData = {
  breadcrumb: "Legal & Professional Services",
  industryTag: "Legal & Professional Services",
  headline: "Agentforce for",
  headlineAccent: "Legal & Professional Services",
  description: "Contract review automation, client intake agents, matter management, and billing inquiry resolution — production Agentforce for law firms, consultancies, and professional services firms.",
  expandedDescription: "Kovil AI designs, builds, and deploys production Agentforce implementations for legal and professional services organisations using Salesforce. Every engagement is scoped to your specific regulatory obligations, practice management integration landscape, and client confidentiality requirements — delivering working agents in 2–3 weeks on a fixed-price basis.",
  ctaLabel: "Book a Call",
  stats: [
    { stat: "65%", label: "client intake queries handled autonomously" },
    { stat: "18 hrs", label: "admin time reclaimed per fee earner per month" },
    { stat: "< 2 min", label: "average client inquiry response time" },
    { stat: "2–3 weeks", label: "to production on a fixed-price sprint" },
  ],
  heroPanel: {
    agentLabel: "AI Agent · Salesforce CRM",
    inputDocs: [
      { label: "Client Intake", color: SF_BLUE },
      { label: "Contract Query", color: "#60A5FA" },
      { label: "Billing Query", color: "#34D399" },
    ],
    processingSteps: ["Conflict Check", "Matter Context", "Privilege Verification"],
    outputFields: [
      { label: "Client", value: "Hartley & Co." },
      { label: "Matter", value: "M-2026-0481" },
      { label: "Status", value: "Onboarded" },
      { label: "Action", value: "Auto-route" },
    ],
    footerText: "Engagement letter sent · Conflict cleared · Matter opened in DMS",
  },
  useCasesIntro: "Every use case below is a production-ready Agentforce deployment pattern for legal and professional services organisations. Each targets a specific, high-volume administrative workflow where autonomous agent resolution reduces overhead and allows fee earners to focus on billable work.",
  useCases: [
    {
      id: "contract-review",
      icon: FileText,
      color: SF_BLUE,
      title: "Contract Review & Analysis Agent",
      subtitle: "Clause extraction, risk flagging, and comparison against standard templates",
      description: "AI-assisted contract review agents extract key clauses, identify non-standard terms, flag risk areas against your approved playbook, and generate structured review summaries — reducing the time fee earners spend on first-pass document review.",
      bullets: ["Clause extraction and classification against approved templates", "Non-standard term identification and risk flagging", "Comparison with previously negotiated positions from matter history", "Structured review summary generated for fee earner final approval"],
    },
    {
      id: "client-intake",
      icon: Users,
      color: "#60A5FA",
      title: "Client Intake & Onboarding Agent",
      subtitle: "Conflict checks, KYC, engagement letter generation, and matter opening",
      description: "Automates the complete new client onboarding sequence — running conflict checks, collecting KYC documentation, generating engagement letters from approved templates, and opening the matter in your DMS — without manual admin intervention for standard instruction types.",
      bullets: ["Automated conflict check against existing matter and client database", "KYC document collection and completeness verification", "Engagement letter generation from approved practice-area templates", "Matter opening in iManage, NetDocuments, or Clio with data pre-populated"],
    },
    {
      id: "matter-management",
      icon: Clock3,
      color: "#34D399",
      title: "Matter & Case Management Agent",
      subtitle: "Deadline tracking, task assignment, status updates, and billing milestone alerts",
      description: "Matter management agents monitor active matters for upcoming deadlines, send proactive status updates to clients, flag overdue tasks to the responsible fee earner, and alert billing managers when matters approach WIP thresholds.",
      bullets: ["Court and regulatory deadline monitoring with advance alerts", "Client status update delivery at configurable intervals", "Overdue task escalation to fee earner and supervising partner", "WIP billing milestone alerts to billing management team"],
    },
    {
      id: "billing-inquiry",
      icon: DollarSign,
      color: "#A78BFA",
      title: "Legal Billing Inquiry Agent",
      subtitle: "WIP queries, invoice explanation, payment plans, and dispute triage",
      description: "Handles routine billing inquiries without fee earner involvement — explaining invoice line items, providing WIP summaries, setting up payment arrangements within approved parameters, and triaging billing disputes to the appropriate billing manager.",
      bullets: ["Invoice and WIP query resolution from client portal or email", "Payment plan setup within pre-approved finance parameters", "Billing dispute intake and triage to billing management team", "Overdue invoice reminder sequences with configurable escalation"],
    },
    {
      id: "compliance-monitoring",
      icon: ShieldCheck,
      color: "#F59E0B",
      title: "Compliance Monitoring Agent",
      subtitle: "SRA, ABA, and regulatory deadline tracking with automated alerts",
      description: "Tracks regulatory filing deadlines, CPD requirements, practising certificate renewals, and compliance programme obligations — sending automated alerts and triggering document collection workflows before deadlines are missed.",
      bullets: ["SRA/ABA regulatory deadline tracking and advance notification", "CPD and practising certificate renewal management", "Document collection workflows for regulatory submissions", "Compliance status reporting with exception escalation to COLP/COB"],
    },
    {
      id: "research-support",
      icon: BookOpen,
      color: "#EF4444",
      title: "Legal Research Support Agent",
      subtitle: "Case research briefing, precedent identification, and document summarisation",
      description: "Research support agents generate structured briefing documents from matter context, identify relevant precedents from your knowledge management system, and summarise lengthy documents — reducing the research time consumed before substantive fee earner analysis begins.",
      bullets: ["Matter context briefing from CRM and matter management data", "Precedent identification from internal knowledge management system", "Document summarisation with key term and clause extraction", "Research task triage and assignment to appropriate team member"],
    },
  ],
  buildSteps: [
    {
      number: "01", label: "Integrate",
      title: "Connect Salesforce to Your Practice Management Stack",
      desc: "We connect Agentforce to your Salesforce org, DMS (iManage, NetDocuments, Clio), billing platform (Elite 3E, Aderant, Clio), and conflict check database via MuleSoft — giving agents access to matter data, client records, and billing information in real time.",
      bullets: ["Salesforce CRM audit and Agentforce prerequisites check", "DMS and billing platform integration via MuleSoft or native connectors", "Conflict check database integration with automated screening workflow"],
    },
    {
      number: "02", label: "Build",
      title: "Design Privilege-Safe Agent Architecture",
      desc: "We design Topics, Actions, and Instructions with client confidentiality and professional privilege boundaries built in from the start — using Agent Builder, Prompt Builder, and Flow with matter-level access controls and Einstein Trust Layer configuration reviewed against SRA/ABA obligations.",
      bullets: ["Matter-level access controls with fee earner permission boundaries", "Privilege protection: agent cannot surface one client's data in another's context", "Einstein Trust Layer configured with legal data masking and full audit trail"],
    },
    {
      number: "03", label: "Deploy",
      title: "Deploy with Fee Earner Sign-Off",
      desc: "Legal Agentforce deployments include fee earner UAT, compliance officer sign-off, and a supervised go-live period with defined performance metrics. Every deployment includes a 30-day post-go-live review against agreed autonomous resolution rate targets.",
      bullets: ["UAT with fee earners and billing team across real matter scenarios", "Compliance officer review of Instructions, guardrails, and escalation paths", "Supervised go-live with daily monitoring and performance reporting"],
    },
  ],
  complianceTitle: "Built for regulated legal environments.",
  complianceIntro: "Legal Agentforce deployments operate under professional privilege, SRA/ABA obligations, and client data protection requirements. We configure every legal agent deployment with confidentiality controls, audit logging, and regulatory compliance checkpoints from day one.",
  complianceItems: [
    { icon: Scale, title: "SRA / ABA", desc: "Regulatory compliance monitoring, deadline tracking, and CPD management configured to your jurisdiction's specific obligations." },
    { icon: Lock, title: "Client Privilege", desc: "Matter-level access controls ensure agents never surface one client's privileged data in another client's interaction context." },
    { icon: Database, title: "GDPR / CCPA", desc: "Data minimisation by design — agents access only the fields required for the specific interaction, with full audit logging of every data access event." },
    { icon: AlertCircle, title: "Einstein Trust Layer", desc: "Immutable audit trail of every agent action, PII masking before LLM prompt inclusion, and zero data retention at external model providers." },
  ],
  integrations: ["Salesforce CRM", "Salesforce Data Cloud", "MuleSoft", "iManage", "NetDocuments", "Clio", "Thomson Reuters Elite 3E", "Aderant Expert", "DocuSign", "LexisNexis", "Westlaw", "LEAP"],
  faqTitle: "Agentforce for legal — common questions.",
  faqs: [
    { q: "What Agentforce use cases work best for law firms?", a: "The strongest Agentforce use cases for legal are client intake automation (conflict checks, engagement letter generation, KYC collection), billing inquiry resolution (WIP queries, invoice explanation, payment plans), matter status updates and deadline tracking, and contract review assistance. These are high-volume administrative tasks that consume fee earner time without generating billable value." },
    { q: "How does Agentforce handle legal professional privilege?", a: "The Einstein Trust Layer ensures client data is masked before any information is included in LLM prompts, with zero data retention at external model providers. We configure strict matter-level access controls — agents only surface data relevant to the specific matter and client context. Privilege boundaries are enforced at the data model level, not as an afterthought." },
    { q: "Can Agentforce integrate with iManage or NetDocuments?", a: "Yes. MuleSoft connects Agentforce to legal DMS platforms — iManage, NetDocuments, Clio, Thomson Reuters Elite 3E, and Aderant — to surface matter data, document status, and billing information without fee earners switching systems." },
    { q: "Is Agentforce suitable for professional services firms beyond law?", a: "Yes. The same patterns apply across accounting firms, management consultancies, and advisory firms — client onboarding, engagement management, billing inquiry resolution, and compliance deadline tracking are common to all professional services businesses." },
    { q: "How long does a legal Agentforce implementation take?", a: "A focused pilot on one use case — client intake or billing inquiry resolution — takes 2–3 weeks from kick-off to production. Full deployments with practice management system integration run 6–10 weeks." },
    { q: "How does Agentforce help with SRA or ABA compliance?", a: "Agentforce compliance monitoring agents track regulatory deadlines, trigger document collection workflows, and generate audit trail exports for SRA or ABA regulatory reviews. The Einstein Trust Layer provides immutable logging of every agent action. Configurations are reviewed against your specific regulatory obligations before deployment." },
  ],
  ctaHeadline: "Ready to deploy Agentforce in your firm?",
  ctaBody: "Book a 30-minute call. We will scope one high-impact use case — client intake, billing inquiry resolution, or matter management — and give you a fixed-price delivery plan the same week.",
  ctaTrustItems: ["2–3 week sprint to production", "SRA · ABA · GDPR · Einstein Trust Layer", "Fixed price, no hourly billing"],
}

export default function LegalProfessionalServicesAgentforcePage() {
  return <IndustryPageTemplate data={data} />
}
