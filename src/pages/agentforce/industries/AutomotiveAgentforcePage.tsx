'use client'

import { Car, CreditCard, Wrench, AlertTriangle, Settings, RefreshCcw, Shield, Lock, Database, ShieldCheck } from "lucide-react"
import IndustryPageTemplate, { type IndustryPageData } from "./_shared/IndustryPageTemplate"

const SF_BLUE = "#00A1E0"

const data: IndustryPageData = {
  breadcrumb: "Automotive",
  industryTag: "Automotive",
  headline: "Agentforce for",
  headlineAccent: "Automotive",
  description: "Dealer lead qualification, vehicle financing, service booking automation, recall and warranty handling, parts inquiry agents, and customer retention — production Agentforce for OEMs, dealerships, and automotive groups.",
  expandedDescription: "Kovil AI designs, builds, and deploys production Agentforce implementations for automotive OEMs, dealer groups, and aftermarket businesses. Every engagement is scoped to your DMS, CRM, and inventory integration landscape — delivering working agents in 2–3 weeks on a fixed-price basis.",
  ctaLabel: "Book a Call",
  stats: [
    { stat: "< 4 min", label: "average lead response time from first enquiry" },
    { stat: "69%", label: "service booking queries handled without service advisor" },
    { stat: "+34%", label: "recall campaign completion rate with outreach agents" },
    { stat: "2–3 weeks", label: "to production on a fixed-price sprint" },
  ],
  heroPanel: {
    agentLabel: "AI Agent · Automotive Cloud",
    inputDocs: [
      { label: "Vehicle Enquiry", color: SF_BLUE },
      { label: "Finance Query", color: "#60A5FA" },
      { label: "Service Booking", color: "#34D399" },
    ],
    processingSteps: ["Inventory Lookup", "Finance Pre-Qual", "Bay Availability"],
    outputFields: [
      { label: "Customer", value: "James Okonkwo" },
      { label: "Vehicle", value: "2026 Tiguan 4Motion" },
      { label: "Finance", value: "Pre-approved" },
      { label: "Status", value: "Test Drive Booked" },
    ],
    footerText: "Test drive confirmed · Finance pack sent · DMS record updated",
  },
  useCasesIntro: "Every use case below is a production-ready Agentforce deployment pattern for automotive OEMs, dealerships, and fleet businesses. Each targets a specific, high-volume interaction where autonomous agent resolution reduces dealer overhead and improves the customer buying and ownership experience.",
  useCases: [
    {
      id: "dealer-lead",
      icon: Car,
      color: SF_BLUE,
      title: "Dealer Lead Qualification Agent",
      subtitle: "ICP scoring, intent classification, test drive booking, and instant dealer routing",
      description: "Qualifies inbound vehicle enquiries — new and used, fleet and retail — against purchase intent signals, configures test drive bookings, and routes high-intent leads to the appropriate sales advisor within minutes of first contact.",
      bullets: ["Vehicle preference, budget, and trade-in capture from first enquiry", "Purchase timeline and intent scoring with high-intent routing to sales advisor", "Test drive booking directly in dealer calendar with customer confirmation", "Lead source attribution from all channels: web, chat, OEM portal, email"],
    },
    {
      id: "vehicle-financing",
      icon: CreditCard,
      color: "#60A5FA",
      title: "Vehicle Financing Agent",
      subtitle: "Finance options, pre-qualification, payment calculation, and F&I handoff",
      description: "Guides customers through vehicle financing options — explaining PCP, HP, and lease structures, running indicative payment calculations, capturing information for finance pre-qualification, and routing qualified customers to the F&I team with full vehicle and customer context.",
      bullets: ["PCP, HP, and finance lease explanation with payment calculator", "Indicative payment quotes from current manufacturer finance rates", "Finance pre-qualification information capture with lender routing", "F&I team handoff with vehicle, customer, and finance preference context"],
    },
    {
      id: "service-booking",
      icon: Wrench,
      color: "#34D399",
      title: "Service Booking Agent",
      subtitle: "Appointment scheduling, service menu explanation, loaner availability, and reminders",
      description: "Handles service department booking interactions — explaining service packages, scheduling appointments in workshop management system availability, confirming loaner or courtesy car availability, and sending pre-appointment reminders to reduce no-shows.",
      bullets: ["Service package explanation (interim, full, manufacturer service)", "Appointment scheduling integrated with workshop management system", "Loaner and courtesy car availability confirmation and reservation", "Pre-appointment reminder with drop-off instructions and required documentation"],
    },
    {
      id: "recall-warranty",
      icon: AlertTriangle,
      color: "#A78BFA",
      title: "Recall & Warranty Agent",
      subtitle: "NHTSA recall lookup, warranty eligibility, repair scheduling, and status updates",
      description: "Handles recall and warranty interactions — looking up active recall campaigns by VIN, explaining repair scope and safety implications, scheduling recall repair appointments, confirming warranty coverage for reported issues, and providing repair status updates.",
      bullets: ["Active recall lookup by VIN against NHTSA and manufacturer databases", "Recall repair scope, parts availability, and appointment booking", "Warranty coverage eligibility check from vehicle registration and service history", "Repair status updates and completion notification to customer"],
    },
    {
      id: "parts-accessories",
      icon: Settings,
      color: "#F59E0B",
      title: "Parts & Accessories Agent",
      subtitle: "Part lookup, fitment check, price and availability, and order confirmation",
      description: "Handles parts and accessories enquiries — looking up part numbers, checking fitment compatibility, confirming availability and pricing, routing to the parts counter for complex fitment queries, and confirming order placement and expected delivery.",
      bullets: ["Part number lookup and fitment compatibility check by VIN or vehicle spec", "Availability and pricing confirmation from live parts inventory", "Complex fitment routing to parts counter specialist with customer context", "Order confirmation and estimated delivery date with status tracking"],
    },
    {
      id: "customer-retention",
      icon: RefreshCcw,
      color: "#EF4444",
      title: "Customer Retention Agent",
      subtitle: "Service reminders, equity alerts, loyalty outreach, and repurchase campaigns",
      description: "Drives repeat business through proactive outreach — delivering personalised service reminders, alerting customers when their finance term creates a favourable equity position for upgrade, running loyalty programme communications, and managing repurchase campaign sequences.",
      bullets: ["Personalised service reminder delivery at configurable mileage or time intervals", "Finance equity alert when vehicle valuation creates upgrade opportunity", "Loyalty programme status and reward notification delivery", "Targeted repurchase campaign outreach based on ownership cycle and model year"],
    },
  ],
  buildSteps: [
    {
      number: "01", label: "Connect",
      title: "Connect Agentforce to Your DMS and Automotive Systems",
      desc: "We connect Agentforce to Salesforce Automotive Cloud, your Dealer Management System (CDK Global, Reynolds & Reynolds, Dealertrack), OEM inventory feed, and workshop management system — giving agents access to real-time vehicle inventory, customer history, and service availability.",
      bullets: ["Automotive Cloud audit and Agentforce prerequisites check", "DMS integration via MuleSoft (CDK Global, Reynolds & Reynolds, Dealertrack)", "OEM inventory feed and vehicle configuration data integration"],
    },
    {
      number: "02", label: "Build",
      title: "Build Agents Around Dealer Sales and Service Workflows",
      desc: "We design Topics, Actions, and Instructions for each automotive agent using Agent Builder, Prompt Builder, and Flow — configured to your specific dealer process, F&I workflow, and service department scheduling rules. Lead qualification criteria and finance routing rules are set by your sales leadership before go-live.",
      bullets: ["Lead qualification criteria configured to your dealer's sales process and ICP", "Finance routing rules set by F&I team with privacy compliance review", "Einstein Trust Layer configured with customer data protection controls"],
    },
    {
      number: "03", label: "Deploy",
      title: "Deploy with Sales and Service Management Sign-Off",
      desc: "Automotive Agentforce deployments include sales manager and service manager sign-off before go-live. We define performance benchmarks — lead response time, service booking conversion, CSAT — and validate at 30 and 90 days post-launch.",
      bullets: ["UAT with sales and service teams using real customer enquiry scenarios", "Finance and warranty routing paths reviewed for regulatory compliance", "Supervised go-live with daily monitoring and 30-day performance review"],
    },
  ],
  complianceTitle: "Built for automotive regulatory requirements.",
  complianceIntro: "Automotive Agentforce deployments handle consumer financial data (lending regulations), vehicle safety recall obligations (NHTSA), and customer personal data — all requiring specific compliance controls configured before go-live.",
  complianceItems: [
    { icon: Shield, title: "NHTSA Recall", desc: "Recall lookup and repair scheduling agents are configured to surface NHTSA-registered recall campaigns by VIN, with safety advisory language reviewed by your legal team." },
    { icon: ShieldCheck, title: "FCA / Consumer Credit", desc: "Finance explanation agents follow FCA and consumer credit information requirements — providing accurate, non-advisory information and routing regulated advice to F&I specialists." },
    { icon: Lock, title: "GDPR / CCPA", desc: "Customer personal and financial data handled within Salesforce trust boundary. PII masked before LLM prompt inclusion. Full data subject request support." },
    { icon: Database, title: "Einstein Trust Layer", desc: "Immutable audit trail of every agent action, zero external data retention at LLM providers, and configurable masking for customer financial and vehicle data." },
  ],
  integrations: ["Salesforce Automotive Cloud", "Salesforce Data Cloud", "MuleSoft", "CDK Global", "Reynolds & Reynolds", "Dealertrack", "vAuto", "RouteOne", "Dealerfit", "NHTSA API", "Black Book", "Kelley Blue Book"],
  faqTitle: "Agentforce for automotive — common questions.",
  faqs: [
    { q: "What Agentforce use cases work best for automotive dealerships?", a: "The highest-impact use cases for dealers are lead qualification (instant response to inbound vehicle enquiries, test drive booking, sales advisor routing), service booking (appointment scheduling, service package explanation, loaner availability), and recall management (VIN-based recall lookup, repair scheduling). These address the highest-volume customer touchpoints in the sales and service lifecycle." },
    { q: "Can Agentforce integrate with CDK Global or Reynolds & Reynolds?", a: "Yes. MuleSoft connects Agentforce to CDK Global, Reynolds & Reynolds, and Dealertrack DMS platforms — surfacing live vehicle inventory, customer service history, and workshop availability to ground agent responses in real-time operational data." },
    { q: "How does Agentforce reduce lead response time for dealers?", a: "Agentforce qualification agents respond to inbound vehicle enquiries within seconds of submission — regardless of hour — capturing vehicle preference, budget, and purchase timeline before routing high-intent leads to the sales advisor with a full qualification summary. Dealers using Agentforce typically reduce average lead response time from hours to under 4 minutes." },
    { q: "How does Agentforce handle NHTSA recall campaigns?", a: "Recall management agents look up active NHTSA campaigns by customer VIN, explain the recall scope and safety implications in approved language, check parts availability at the servicing dealer, and schedule recall repair appointments — proactively reaching out to affected customers rather than waiting for them to call." },
    { q: "How long does an automotive Agentforce implementation take?", a: "A focused pilot — dealer lead qualification or service booking — takes 2–3 weeks. Full deployments with DMS, OEM inventory, and workshop management system integration run 6–10 weeks." },
  ],
  ctaHeadline: "Ready to deploy Agentforce in your dealership or automotive business?",
  ctaBody: "Book a 30-minute call. We will scope one high-impact use case — lead qualification, service booking, or recall management — and give you a fixed-price delivery plan the same week.",
  ctaTrustItems: ["2–3 week sprint to production", "GDPR · FCA · NHTSA · Einstein Trust Layer", "Fixed price, no hourly billing"],
}

export default function AutomotiveAgentforcePage() {
  return <IndustryPageTemplate data={data} />
}
