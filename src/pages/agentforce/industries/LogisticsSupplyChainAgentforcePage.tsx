'use client'

import { Package, DollarSign, RotateCcw, Truck, Bell, HeadphonesIcon, Shield, Lock, Database, ShieldCheck } from "lucide-react"
import IndustryPageTemplate, { type IndustryPageData } from "./_shared/IndustryPageTemplate"

const SF_BLUE = "#00A1E0"

const data: IndustryPageData = {
  breadcrumb: "Logistics & Supply Chain",
  industryTag: "Logistics & Supply Chain",
  headline: "Agentforce for",
  headlineAccent: "Logistics & Supply Chain",
  description: "Shipment tracking agents, freight quoting automation, returns and claims processing, carrier communication, inventory alerts, and customer order support — production Agentforce for logistics and supply chain businesses.",
  expandedDescription: "Kovil AI designs, builds, and deploys production Agentforce implementations for logistics providers, freight forwarders, 3PLs, and supply chain teams. Every engagement is scoped to your TMS, WMS, and carrier integration landscape — delivering working agents in 2–3 weeks on a fixed-price basis.",
  ctaLabel: "Book a Call",
  stats: [
    { stat: "74%", label: "shipment tracking queries handled autonomously" },
    { stat: "< 3 min", label: "average freight quote turnaround time" },
    { stat: "60%", label: "reduction in claims processing time" },
    { stat: "2–3 weeks", label: "to production on a fixed-price sprint" },
  ],
  heroPanel: {
    agentLabel: "AI Agent · Salesforce CRM",
    inputDocs: [
      { label: "Tracking Query", color: SF_BLUE },
      { label: "Freight Quote", color: "#60A5FA" },
      { label: "Claims Request", color: "#34D399" },
    ],
    processingSteps: ["Shipment Lookup", "Carrier API", "Rate Engine"],
    outputFields: [
      { label: "Shipper", value: "Hartmann Logistics" },
      { label: "PRO#", value: "HLG-2026-8841" },
      { label: "Status", value: "In Transit" },
      { label: "ETA", value: "Jun 25, 14:00" },
    ],
    footerText: "ETA confirmed · Proactive exception alert sent · POD on file",
  },
  useCasesIntro: "Every use case below is a production-ready Agentforce deployment pattern for logistics providers, freight brokers, 3PLs, and supply chain teams. Each targets a specific, high-volume interaction that can be handled autonomously — freeing customer service and ops teams for exception management.",
  useCases: [
    {
      id: "shipment-tracking",
      icon: Package,
      color: SF_BLUE,
      title: "Shipment Tracking Agent",
      subtitle: "Real-time status, ETA updates, exception alerts, and POD delivery",
      description: "Handles inbound shipment tracking queries around the clock — delivering real-time status, ETA updates, exception notifications, and proof of delivery — without requiring customer service agent involvement for standard status requests.",
      bullets: ["24/7 shipment status via web, chat, email, or SMS", "Real-time ETA updates from TMS and carrier API integration", "Proactive exception alerts for delays, holds, or damaged freight", "POD document delivery and archival confirmation"],
    },
    {
      id: "freight-quoting",
      icon: DollarSign,
      color: "#60A5FA",
      title: "Freight Quoting Agent",
      subtitle: "Instant spot quotes, lane pricing, and carrier rate engine integration",
      description: "Generates instant freight quotes for standard lanes — LTL, FTL, and intermodal — from rate engine and carrier API data, routes high-value or complex shipments to freight specialists, and captures quote acceptance directly in the CRM.",
      bullets: ["Instant LTL, FTL, and intermodal quote generation from rate engine", "Multi-carrier rate comparison with transit time and service level display", "High-value or special commodity routing to freight specialist", "Quote acceptance capture and load booking confirmation in CRM"],
    },
    {
      id: "returns-claims",
      icon: RotateCcw,
      color: "#34D399",
      title: "Returns & Claims Agent",
      subtitle: "Return authorisation, claim filing, document collection, and status tracking",
      description: "Manages the complete returns and freight claims lifecycle — issuing return authorisations, capturing damage claim information, collecting supporting documentation, submitting to carrier claims platforms, and providing status updates throughout the resolution process.",
      bullets: ["Return merchandise authorisation (RMA) issuance and tracking", "Freight damage and shortage claim intake with photo documentation", "Carrier claims platform submission via MuleSoft integration", "Claims status updates at each stage of the resolution lifecycle"],
    },
    {
      id: "carrier-communication",
      icon: Truck,
      color: "#A78BFA",
      title: "Carrier Communication Agent",
      subtitle: "Pickup confirmation, appointment scheduling, load tendering, and check-calls",
      description: "Automates routine carrier communication — sending load tenders, confirming pickup appointments, conducting automated check-calls for in-transit freight, and escalating no-show or late-pickup situations to the appropriate dispatch team.",
      bullets: ["Load tender transmission and carrier acceptance confirmation", "Pickup appointment scheduling with carrier and shipper alignment", "Automated check-call execution for in-transit high-value loads", "No-show and late pickup escalation to dispatch team with full context"],
    },
    {
      id: "inventory-alert",
      icon: Bell,
      color: "#F59E0B",
      title: "Inventory Alert Agent",
      subtitle: "Low stock detection, replenishment triggers, and supplier communication",
      description: "Monitors inventory levels in your WMS against reorder thresholds, triggers replenishment alerts to purchasing teams, sends automated replenishment requests to approved suppliers, and tracks inbound purchase order status against expected receipt dates.",
      bullets: ["Real-time inventory level monitoring against configurable reorder points", "Low stock alert delivery to purchasing team with suggested reorder quantity", "Automated replenishment request generation for approved supplier list", "Inbound PO status tracking against expected warehouse receipt dates"],
    },
    {
      id: "customer-order-support",
      icon: HeadphonesIcon,
      color: "#EF4444",
      title: "Customer Order Support Agent",
      subtitle: "Order status, delivery confirmation, invoice queries, and exception communication",
      description: "Handles the full range of customer order support interactions — order status queries, delivery confirmation, invoice disputes, shortages, and delivery exceptions — resolving standard queries autonomously and routing complex issues to the right account manager.",
      bullets: ["Order status and estimated delivery queries across all channels", "Delivery confirmation and signed POD delivery to customer", "Invoice query resolution with billing system integration", "Shortage and exception communication with resolution timeline commitments"],
    },
  ],
  buildSteps: [
    {
      number: "01", label: "Connect",
      title: "Connect Agentforce to Your TMS, WMS, and Carrier APIs",
      desc: "We connect Agentforce to Salesforce CRM, your TMS (MercuryGate, Oracle TMS, McLeod), WMS (Manhattan, Blue Yonder, SAP EWM), and carrier track-and-trace APIs via MuleSoft — giving agents access to real-time shipment status, rate data, and inventory levels.",
      bullets: ["Salesforce CRM audit and Agentforce prerequisites check", "TMS and WMS integration via MuleSoft (MercuryGate, Oracle, Manhattan)", "Carrier API and track-and-trace integration for real-time shipment data"],
    },
    {
      number: "02", label: "Build",
      title: "Build Agents Around Your Operations and Customer SLAs",
      desc: "We design Topics, Actions, and Instructions for each logistics agent using Agent Builder, Prompt Builder, and Flow — configured to your specific SLA commitments, escalation paths, and carrier communication protocols. Exception scenarios are mapped before any agent goes live.",
      bullets: ["Agent Topics and Actions designed around your carrier and customer SLAs", "Exception handling mapped: delays, damage, lost freight, no-shows", "Einstein Trust Layer configured with customer and shipment data protection controls"],
    },
    {
      number: "03", label: "Deploy",
      title: "Deploy with Ops and Customer Service Sign-Off",
      desc: "Logistics Agentforce deployments include operations manager and customer service lead sign-off before go-live. We define performance benchmarks — tracking query resolution rate, quote turnaround, CSAT — and validate against them at 30 and 90 days.",
      bullets: ["UAT with ops and customer service teams using real shipment scenarios", "Performance benchmarks defined and agreed before go-live", "Supervised go-live with exception scenario monitoring in the first two weeks"],
    },
  ],
  complianceTitle: "Built for logistics data and compliance requirements.",
  complianceIntro: "Logistics Agentforce deployments handle customer shipment data, carrier rate information, and supply chain financial data — subject to GDPR, CCPA, and industry-specific requirements including C-TPAT and AEO.",
  complianceItems: [
    { icon: Shield, title: "C-TPAT / AEO", desc: "Customs-Trade Partnership Against Terrorism and Authorised Economic Operator security requirements supported for cross-border freight and customs documentation workflows." },
    { icon: ShieldCheck, title: "GDPR / CCPA", desc: "Customer shipment and commercial data handled within Salesforce trust boundary. PII masked before LLM prompt inclusion. Full audit trail of every data access." },
    { icon: Lock, title: "Data Residency", desc: "Salesforce data residency controls ensure customer shipment data remains within the required geographic boundary for multinational logistics operations." },
    { icon: Database, title: "Einstein Trust Layer", desc: "Immutable logging of every agent action, zero external data retention, and configurable masking for sensitive commercial rate and customer account data." },
  ],
  integrations: ["Salesforce CRM", "Salesforce Data Cloud", "MuleSoft", "MercuryGate TMS", "Oracle TMS", "McLeod Software", "Manhattan Associates WMS", "Blue Yonder", "SAP EWM", "FedEx API", "UPS API", "project44"],
  faqTitle: "Agentforce for logistics — common questions.",
  faqs: [
    { q: "What Agentforce use cases work best for logistics and supply chain?", a: "The strongest use cases are shipment tracking (real-time status, ETA, POD delivery), freight quoting (instant lane rates, carrier comparison, load booking), and customer order support (status queries, delivery confirmation, invoice disputes). These represent the highest-volume, most repetitive customer service interactions in logistics operations." },
    { q: "Can Agentforce integrate with MercuryGate or Oracle TMS?", a: "Yes. MuleSoft connects Agentforce to MercuryGate, Oracle Transportation Management, McLeod Software, and major WMS platforms — surfacing live shipment status, rate data, and inventory information to ground agent responses in real-time operational data." },
    { q: "How does Agentforce handle shipment exceptions and delays?", a: "Agentforce exception management agents monitor in-transit shipments for delay signals from carrier APIs, proactively notify affected customers with revised ETAs before they call in, and route unresolved exceptions to the appropriate operations team member with full shipment context." },
    { q: "Can Agentforce handle 3PL freight quoting across multiple carriers?", a: "Yes. Agentforce quoting agents connect to rate engines and carrier APIs to generate multi-carrier spot quotes for LTL, FTL, and intermodal lanes in real time. High-value or complex commodity routing is flagged to freight specialists with full quote context." },
    { q: "How long does a logistics Agentforce implementation take?", a: "A focused pilot on one use case — shipment tracking or freight quoting — takes 2–3 weeks. Full deployments with TMS, WMS, and carrier API integration run 6–10 weeks depending on the number of carrier integrations and operational complexity." },
  ],
  ctaHeadline: "Ready to deploy Agentforce in your logistics operation?",
  ctaBody: "Book a 30-minute call. We will scope one high-impact use case — shipment tracking, freight quoting, or customer order support — and give you a fixed-price delivery plan the same week.",
  ctaTrustItems: ["2–3 week sprint to production", "GDPR · C-TPAT · Einstein Trust Layer", "Fixed price, no hourly billing"],
}

export default function LogisticsSupplyChainAgentforcePage() {
  return <IndustryPageTemplate data={data} />
}
