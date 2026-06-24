'use client'

import { Home, Users, MessageSquare, Wrench, RefreshCcw, TrendingUp, Lock, Database, ShieldCheck, AlertCircle } from "lucide-react"
import IndustryPageTemplate, { type IndustryPageData } from "./_shared/IndustryPageTemplate"

const SF_BLUE = "#00A1E0"

const data: IndustryPageData = {
  breadcrumb: "Real Estate",
  industryTag: "Real Estate",
  headline: "Agentforce for",
  headlineAccent: "Real Estate",
  description: "Property inquiry agents, lead qualification, tenant support automation, maintenance request handling, and lease renewal management — production Agentforce for real estate firms and property managers.",
  expandedDescription: "Kovil AI designs, builds, and deploys production Agentforce implementations for real estate companies and property management organisations. Every engagement is scoped to your specific inventory systems, tenant communication requirements, and property management workflows — delivering working agents in 2–3 weeks on a fixed-price basis.",
  ctaLabel: "Book a Call",
  stats: [
    { stat: "< 5 min", label: "average lead response time from first enquiry" },
    { stat: "71%", label: "tenant support queries resolved without human agent" },
    { stat: "+28%", label: "lease renewal rate with proactive outreach agents" },
    { stat: "2–3 weeks", label: "to production on a fixed-price sprint" },
  ],
  heroPanel: {
    agentLabel: "AI Agent · Salesforce CRM",
    inputDocs: [
      { label: "Property Enquiry", color: SF_BLUE },
      { label: "Tenant Query", color: "#60A5FA" },
      { label: "Maint. Request", color: "#34D399" },
    ],
    processingSteps: ["Inventory Match", "Tenant Record", "Work Order Check"],
    outputFields: [
      { label: "Lead", value: "Sarah Mitchell" },
      { label: "Property", value: "Unit 4B, Harbor Ct" },
      { label: "Status", value: "Viewing Booked" },
      { label: "Action", value: "Auto-schedule" },
    ],
    footerText: "Viewing confirmed · Brochure sent · CRM record updated",
  },
  useCasesIntro: "Every use case below is a production-ready Agentforce deployment pattern for real estate and property management organisations. Each targets a specific, high-volume interaction that consumes broker and property manager time without requiring specialist judgment for standard request types.",
  useCases: [
    {
      id: "property-inquiry",
      icon: Home,
      color: SF_BLUE,
      title: "Property Inquiry Agent",
      subtitle: "Availability, pricing, specifications, and viewing scheduling — 24/7",
      description: "Handles inbound property enquiries around the clock — answering availability, pricing, floor plan, and specification questions, scheduling viewings directly in the broker's calendar, and delivering property brochures — without requiring broker involvement for standard information requests.",
      bullets: ["24/7 property availability and pricing queries via web, chat, or email", "Viewing appointment scheduling integrated with broker calendar", "Property specification and floor plan delivery via preferred channel", "MLS and inventory data surfaced in real time from your property database"],
    },
    {
      id: "lead-qualification",
      icon: Users,
      color: "#60A5FA",
      title: "Lead Qualification Agent",
      subtitle: "ICP scoring, intent classification, and instant high-quality lead routing",
      description: "Qualifies inbound buyer and tenant leads against your ideal client profile — budget, timeline, property type, location requirements — scores by intent signals, and routes high-quality leads to the right broker within minutes of first contact.",
      bullets: ["ICP qualification against budget, timeline, and property type criteria", "Intent scoring with high-intent leads routed to brokers within minutes", "Leads from all channels: portals, web forms, email, chat, SMS", "Full qualification data written back to Salesforce CRM automatically"],
    },
    {
      id: "tenant-support",
      icon: MessageSquare,
      color: "#34D399",
      title: "Tenant Support Agent",
      subtitle: "Lease queries, payment confirmation, move-in guidance, and service requests",
      description: "Handles routine tenant interactions without property manager involvement — answering lease queries, confirming payment status, providing move-in and move-out checklists, and routing complex service requests to the appropriate team member.",
      bullets: ["Lease term queries resolved from live lease database", "Rent payment status and confirmation delivered in real time", "Move-in and move-out process guidance and document collection", "Service request triage with routing to appropriate property management team"],
    },
    {
      id: "maintenance-request",
      icon: Wrench,
      color: "#A78BFA",
      title: "Maintenance Request Agent",
      subtitle: "Capture, classify, work order creation, and tenant status updates",
      description: "Captures maintenance requests via any channel, classifies by urgency and trade type, creates work orders in your property management system, assigns to the appropriate contractor, and provides status updates to tenants throughout the repair lifecycle.",
      bullets: ["Maintenance request intake via web chat, SMS, email, or portal", "Urgency and trade classification with emergency escalation path", "Work order creation in Yardi, AppFolio, or RealPage via MuleSoft", "Tenant status updates at each stage of the repair lifecycle"],
    },
    {
      id: "lease-renewal",
      icon: RefreshCcw,
      color: "#F59E0B",
      title: "Lease Renewal Agent",
      subtitle: "Proactive outreach, renewal offer generation, and signed document collection",
      description: "Proactively reaches out to tenants 90 days before lease expiry, delivers personalised renewal offers, handles standard negotiation queries, routes complex negotiations to property managers, and manages the document signing process through to completion.",
      bullets: ["Proactive renewal outreach triggered 90 days before lease expiry", "Personalised renewal offer generation within approved pricing parameters", "Standard negotiation query handling with manager escalation path", "DocuSign or digital signature integration for lease execution"],
    },
    {
      id: "property-marketing",
      icon: TrendingUp,
      color: "#EF4444",
      title: "Property Marketing Agent",
      subtitle: "Personalised property matches, market updates, and re-engagement sequences",
      description: "Delivers personalised property match outreach to prospects in your CRM, sends market update briefings to investor clients, and runs automated re-engagement sequences for leads that went cold — turning passive database contacts into active pipeline.",
      bullets: ["Personalised property match outreach based on stated preferences", "Market update delivery to investor and repeat buyer contacts", "Re-engagement sequences for leads inactive for 30, 60, or 90 days", "Portal lead re-import and deduplication against existing CRM records"],
    },
  ],
  buildSteps: [
    {
      number: "01", label: "Connect",
      title: "Connect Salesforce to Your Property Management Stack",
      desc: "We connect Agentforce to your Salesforce CRM, property management platform (Yardi, AppFolio, RealPage), MLS/portal feeds, and calendar system — giving agents access to live inventory, tenant records, lease data, and maintenance work order status.",
      bullets: ["Salesforce CRM audit and Agentforce prerequisites check", "Property management platform integration via MuleSoft (Yardi, AppFolio, RealPage)", "MLS and portal feed integration for real-time inventory data"],
    },
    {
      number: "02", label: "Build",
      title: "Build Agents Around Your Leasing and Property Workflows",
      desc: "We design Topics, Actions, and Instructions for each real estate agent using Agent Builder, Prompt Builder, and Flow — configured to your specific leasing process, maintenance workflow, and escalation paths. Every agent is tested against real tenant interaction patterns before go-live.",
      bullets: ["Agent Topics and Actions designed around your specific workflows", "Lead qualification criteria configured to your ICP and property type mix", "Einstein Trust Layer configured with tenant data protection controls"],
    },
    {
      number: "03", label: "Deploy",
      title: "Deploy with Broker and Property Manager Sign-Off",
      desc: "Real estate Agentforce deployments include broker UAT, property manager sign-off, and a supervised go-live period. We define performance benchmarks — lead response time, tenant resolution rate, renewal conversion — before launch and validate against them at 30 days.",
      bullets: ["UAT with brokers and property managers using real enquiry scenarios", "Performance benchmarks defined and agreed before go-live", "Supervised go-live with daily monitoring and 30-day performance review"],
    },
  ],
  complianceTitle: "Built for real estate compliance requirements.",
  complianceIntro: "Real estate Agentforce deployments handle tenant personal data, financial information, and property transaction details — all subject to GDPR, CCPA, fair housing regulations, and anti-money laundering requirements.",
  complianceItems: [
    { icon: ShieldCheck, title: "Fair Housing / EqA", desc: "Agent instructions are reviewed against fair housing and Equality Act obligations — no discriminatory qualification criteria, consistent treatment of all enquirers." },
    { icon: Lock, title: "GDPR / CCPA", desc: "Tenant and buyer personal data handled within Salesforce trust boundary. PII masked before LLM prompt inclusion. Full data subject request support." },
    { icon: Database, title: "AML / KYC", desc: "Client onboarding agents can be configured to capture AML identity verification documentation for high-value property transactions as required by regulation." },
    { icon: AlertCircle, title: "Einstein Trust Layer", desc: "Immutable audit trail of every agent action, zero external data retention at LLM providers, and configurable data masking for sensitive tenant information." },
  ],
  integrations: ["Salesforce CRM", "Salesforce Data Cloud", "MuleSoft", "Yardi Voyager", "AppFolio", "RealPage", "CoStar", "Rightmove", "Zoopla", "Zillow", "LoopNet", "DocuSign"],
  faqTitle: "Agentforce for real estate — common questions.",
  faqs: [
    { q: "What Agentforce use cases work best for real estate?", a: "The strongest use cases are property inquiry handling (24/7, availability, pricing), lead qualification (instant ICP scoring and broker routing), tenant support (lease queries, payment confirmation, move-in guidance), and maintenance request management (capture, classify, work order creation, status updates)." },
    { q: "Can Agentforce integrate with Yardi or AppFolio?", a: "Yes. MuleSoft connects Agentforce to Yardi Voyager, AppFolio, and RealPage — surfacing live unit availability, tenant records, lease data, and work order status to ground agent responses in real-time property data." },
    { q: "How does Agentforce help with tenant retention?", a: "Agentforce improves retention through proactive engagement: lease renewal outreach 90 days before expiry, maintenance resolution follow-up, and personalised market context delivery. Agents handle the administrative renewal process — offer generation, document collection — making the experience frictionless for tenants." },
    { q: "Can Agentforce qualify leads from property portals?", a: "Yes. Agentforce qualification agents handle inbound leads from Rightmove, Zoopla, Zillow, LoopNet, web forms, and email — classifying by buyer/tenant type, qualification criteria, and intent, then routing to the right broker within minutes." },
    { q: "How long does a real estate Agentforce implementation take?", a: "A focused pilot on one use case — property inquiry or lead qualification — takes 2–3 weeks. Full deployments with property management system integration run 6–10 weeks." },
  ],
  ctaHeadline: "Ready to deploy Agentforce in your real estate business?",
  ctaBody: "Book a 30-minute call. We will scope one high-impact use case — lead qualification, property inquiry, or tenant support — and give you a fixed-price delivery plan the same week.",
  ctaTrustItems: ["2–3 week sprint to production", "GDPR · Fair Housing · Einstein Trust Layer", "Fixed price, no hourly billing"],
}

export default function RealEstateAgentforcePage() {
  return <IndustryPageTemplate data={data} />
}
