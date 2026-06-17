'use client'

import { motion } from "motion/react"
import {
  FileText, Brain, CheckCircle2, ArrowRight, ChevronRight,
  Shield, Clock, Zap, Users, ShieldCheck, Database,
  Truck, Package, Globe, FileCheck2, BarChart2, Archive,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { openCalendly } from "../../lib/calendly"
import Link from "next/link"

const useCases = [
  {
    id: "accounts-payable-automation",
    icon: FileCheck2,
    color: "#F97316",
    title: "Accounts Payable Automation",
    subtitle: "Invoice, PO, and receipt 3-way matching — eliminate manual keying",
    description:
      "Accounts payable is the highest-volume document AI use case in supply chain — every supplier relationship generates a continuous stream of invoices, purchase orders, and goods receipt notes. Our AI pipeline classifies each incoming document, extracts all line-item data, performs 3-way PO/invoice/GRN matching automatically, and routes matched invoices to straight-through payment while escalating exceptions for review.",
    bullets: [
      "Invoice data extraction — vendor, invoice number, line items, amounts, tax, payment terms",
      "3-way matching: PO, invoice, and goods receipt note reconciliation",
      "Duplicate invoice detection and early payment discount identification",
      "ERP integration: SAP S/4HANA, Oracle, NetSuite, Microsoft Dynamics 365",
    ],
  },
  {
    id: "customs-trade-compliance",
    icon: Globe,
    color: "#0078D4",
    title: "Customs & Trade Compliance",
    subtitle: "Import/export declarations, certificates of origin, and HS code classification",
    description:
      "Customs documentation is complex, time-sensitive, and carries significant penalty risk for errors. Our AI pipeline classifies all customs and trade documents — commercial invoices, packing lists, bills of lading, certificates of origin, and dangerous goods declarations — extracts structured compliance fields, validates HS code classifications, and flags OFAC/sanctions exposure before goods cross the border.",
    bullets: [
      "Customs declaration extraction — importer, HS codes, declared value, country of origin, duty",
      "Certificate of origin validation — goods description, certifying authority, preferential tariff eligibility",
      "Dangerous goods document classification — UN numbers, packing group, emergency contact",
      "OFAC/Sanctions screening on counterparty names extracted from trade documents",
    ],
  },
  {
    id: "freight-shipping-documents",
    icon: Truck,
    color: "#10B981",
    title: "Freight & Shipping Document Processing",
    subtitle: "Bills of lading, air waybills, and delivery orders — end-to-end visibility",
    description:
      "Freight documents are the data backbone of supply chain visibility — bills of lading, air waybills, sea waybills, and delivery orders contain the shipment data that feeds tracking, inventory, and finance systems. Our AI extracts structured shipment data from all freight document formats, feeds it into TMS and ERP systems in real time, and flags discrepancies between booking orders and actual shipment documents.",
    bullets: [
      "Bill of lading extraction — shipper, consignee, ports, vessel, container numbers, cargo description",
      "Air waybill parsing — MAWB/HAWB numbers, routing, weight, dimensions, charges",
      "Delivery order and proof-of-delivery extraction — recipient, date, condition notes, signature",
      "TMS integration: Cargowise, Oracle TMS, SAP TM, Descartes",
    ],
  },
  {
    id: "supplier-onboarding-documents",
    icon: Package,
    color: "#8B5CF6",
    title: "Supplier Onboarding Document Processing",
    subtitle: "Vendor qualification, W-9s, certificates, and insurance documents",
    description:
      "Supplier onboarding is a document-intensive compliance process — new vendors submit W-9 forms, certificates of insurance, quality certifications, bank details, and company registration documents before they can be activated in procurement systems. Our AI pipeline classifies, extracts, and validates all onboarding documents, checks for expiry dates on certificates and insurance policies, and routes complete profiles to ERP supplier master data.",
    bullets: [
      "W-9 / W-8 extraction — entity type, TIN, address, certification details",
      "Certificate of insurance parsing — coverage types, limits, expiry dates, named insured",
      "Quality certification extraction — ISO standards, scope, certification body, expiry",
      "Automated expiry tracking and renewal alert generation from extracted dates",
    ],
  },
  {
    id: "trade-finance-documents",
    icon: BarChart2,
    color: "#F59E0B",
    title: "Trade Finance Document Automation",
    subtitle: "Letters of credit, bank guarantees, and documentary collection processing",
    description:
      "Trade finance operations are among the most document-intensive in supply chain — letters of credit, bank guarantees, bills of exchange, and documentary collections require precise, error-free document sets. Our AI pipeline classifies and extracts all trade finance documents, validates presented documents against LC terms and conditions, identifies discrepancies before presentation, and routes clean document sets to banks for processing.",
    bullets: [
      "Letter of credit field extraction — terms, expiry, presentation period, required documents",
      "Document set validation against LC conditions — discrepancy identification before bank presentation",
      "Bank guarantee extraction — beneficiary, guarantor, amount, expiry, demand conditions",
      "Bills of exchange parsing — parties, amount, tenor, acceptance terms",
    ],
  },
  {
    id: "warehouse-inventory-documents",
    icon: Archive,
    color: "#EF4444",
    title: "Warehouse & Inventory Document Processing",
    subtitle: "GRNs, inspection reports, and packing lists — accurate inventory from day one",
    description:
      "Warehouse document processing — goods receipt notes, inspection reports, packing lists, and stock transfer orders — feeds the inventory accuracy that drives the entire supply chain. Our AI extracts structured item, quantity, and condition data from all warehouse documents, reconciles received quantities against PO and ASN data, flags inspection discrepancies, and pushes clean inventory updates to WMS and ERP systems.",
    bullets: [
      "Goods receipt note extraction — supplier, items, quantities, lot numbers, receipt date",
      "Inspection report parsing — item condition, defect classification, accept/reject status",
      "Packing list extraction — SKUs, quantities per carton, gross/net weight, dimensions",
      "WMS integration: Manhattan Associates, Blue Yonder, SAP EWM, Oracle WMS",
    ],
  },
]

const extractionTable = [
  {
    docType: "Invoice",
    fields: "Vendor, invoice number, PO reference, line items, quantities, unit prices, tax, total, payment terms, due date",
    accuracy: "97–99%",
    integration: "ERP AP module, payment system",
  },
  {
    docType: "Bill of Lading",
    fields: "Shipper, consignee, notify party, vessel, voyage, ports, container numbers, cargo description, HS codes, B/L number",
    accuracy: "96–99%",
    integration: "TMS, ERP, customs platform",
  },
  {
    docType: "Customs Declaration",
    fields: "Importer/exporter, HS codes, declared value, currency, country of origin, gross weight, duty rate, entry number",
    accuracy: "95–98%",
    integration: "Customs broker system, trade compliance platform",
  },
  {
    docType: "Purchase Order",
    fields: "PO number, vendor, buyer, line items, quantities, unit prices, delivery address, delivery date, payment terms",
    accuracy: "97–99%",
    integration: "ERP procurement module, supplier portal",
  },
  {
    docType: "Certificate of Origin",
    fields: "Goods description, HS codes, country of origin, exporter, consignee, certifying authority, preferential tariff claim",
    accuracy: "96–98%",
    integration: "Customs platform, trade compliance system",
  },
  {
    docType: "Goods Receipt Note",
    fields: "Supplier, PO reference, items, ordered vs. received quantities, lot numbers, inspection status, receipt date",
    accuracy: "96–98%",
    integration: "WMS, ERP inventory module",
  },
]

const steps = [
  {
    number: "01",
    label: "Ingest",
    title: "Connect Your Supply Chain Document Sources",
    desc: "We connect every document intake channel — email inboxes, supplier portals, EDI feeds, customs broker APIs, TMS document queues, and fax-to-digital feeds — into a unified ingestion pipeline. PDFs, EDI-converted documents, scanned paper invoices, and email attachments are all handled with automatic format normalisation and duplicate detection.",
    bullets: [
      "Multi-source intake: email, supplier portal, EDI, customs broker API, TMS queue",
      "Duplicate invoice detection across vendor codes and invoice numbers at ingestion",
      "Document quality normalisation for scanned paper invoices and fax-converted documents",
    ],
  },
  {
    number: "02",
    label: "Classify & Extract",
    title: "AI Agent Classifies Shipment Documents and Extracts Trade Data",
    desc: "Our AI Document Agent uses Vision LLMs and supply chain NLP models to classify each document type — invoice, B/L, customs declaration, or certificate of origin — extract all structured trade data fields with confidence scores, perform 3-way matching for AP documents, and flag compliance exceptions for trade and customs documents.",
    bullets: [
      "Document type classification across all supply chain and trade finance document categories",
      "Line-item level extraction with unit-price, quantity, and total cross-validation",
      "HS code classification and OFAC/Sanctions counterparty screening at extraction",
    ],
  },
  {
    number: "03",
    label: "Integrate",
    title: "Push to ERP, TMS, and Trade Compliance Systems",
    desc: "Extracted and validated supply chain data flows automatically into your ERP, TMS, WMS, or customs platform. The agent triggers downstream workflows — payment approval, customs filing submission, inventory updates, or supplier exception alerts — without manual re-keying across disconnected systems.",
    bullets: [
      "Native ERP connectors: SAP S/4HANA, Oracle ERP Cloud, NetSuite, Microsoft Dynamics 365",
      "Automated downstream triggers: AP payment approval, customs filing, inventory update, PO close",
      "Exception queue with full document evidence for discrepancy resolution",
    ],
  },
]

const complianceItems = [
  {
    icon: Globe,
    title: "C-TPAT / AEO",
    desc: "Customs-Trade Partnership Against Terrorism and Authorised Economic Operator programme documentation — supply chain security document requirements met with full audit trails.",
  },
  {
    icon: ShieldCheck,
    title: "OFAC / Sanctions Screening",
    desc: "Counterparty names extracted from trade documents are automatically screened against OFAC SDN, EU, and UN sanctions lists at classification time — before any transaction is processed.",
  },
  {
    icon: Shield,
    title: "SOC 2 Type II",
    desc: "On-premise and private cloud deployment options. Commercial contracts, supplier financials, and trade pricing data never transmitted to third-party APIs without explicit authorisation.",
  },
  {
    icon: Database,
    title: "GDPR / Data Residency",
    desc: "EU data residency controls for supply chain document processing involving European counterparties. PII redaction pipelines for supplier personal data in onboarding documents.",
  },
]

const engagements = [
  {
    icon: Zap,
    title: "Fixed-Price Sprint",
    subtitle: "2–4 weeks",
    href: "/engage/outcome-based-project",
    desc: "We scope one high-impact supply chain document workflow — AP invoice automation, customs document processing, or freight document extraction — define clear accuracy benchmarks, and deliver a production pipeline at a fixed price.",
    bullets: [
      "One supply chain document workflow scoped and built to production",
      "3-way matching or customs compliance extraction deployed",
      "Delivered against agreed accuracy and STP rate benchmarks",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Supply Chain Document AI Squad",
    subtitle: "Monthly retainer",
    href: "/engage/managed-ai-engineer",
    desc: "Embed a pre-vetted AI engineer specialised in supply chain document processing, ERP integrations, and trade compliance automation into your team. Ideal for manufacturers, 3PLs, and importers with a document automation roadmap.",
    bullets: [
      "Senior Document AI engineer embedded in your team",
      "Full ownership of your supply chain IDP pipeline roadmap",
      "Flexible scope — AP automation today, customs compliance next quarter",
    ],
  },
  {
    icon: Brain,
    title: "IDP Rescue & Optimisation",
    subtitle: "Assessment + fix",
    href: "/engage/app-rescue",
    desc: "Is your existing supply chain document pipeline producing low 3-way match rates, missing HS code errors, or failing on non-standard invoice formats? Our SWAT team audits and fixes it.",
    bullets: [
      "Full pipeline audit against your supply chain document corpus",
      "Vision LLM model tuning for your vendor document mix",
      "Trade compliance logic and ERP integration hardening",
    ],
  },
]

const faqs = [
  {
    q: "What is accounts payable automation in supply chain?",
    a: "Accounts payable automation in supply chain uses AI Document Agents to process every incoming supplier invoice — extracting vendor details, line items, amounts, and payment terms — and automatically reconcile the invoice against the corresponding purchase order and goods receipt note in a 3-way match. Matched invoices route to straight-through payment approval; mismatched invoices queue for exception review with all evidence pre-populated. Production AP automation pipelines typically achieve 70–85% straight-through processing rates on standard supplier invoices.",
  },
  {
    q: "How does AI handle customs document processing?",
    a: "AI customs document processing classifies all incoming trade documents — commercial invoices, packing lists, bills of lading, and certificates of origin — extracts structured compliance fields including HS codes, declared values, and country of origin, validates HS code classifications against the harmonised tariff schedule, screens counterparty names against OFAC and international sanctions lists, and flags discrepancies before goods reach the border. This reduces customs filing errors and associated penalties while accelerating clearance times.",
  },
  {
    q: "What supply chain document types does the AI handle?",
    a: "Our supply chain IDP pipeline handles: commercial invoices, purchase orders, goods receipt notes, bills of lading, air waybills, sea waybills, packing lists, certificates of origin, customs declarations, dangerous goods declarations, certificates of insurance, supplier W-9 / W-8 forms, quality certifications, letters of credit, bank guarantees, bills of exchange, delivery orders, proof-of-delivery documents, stock transfer orders, and warehouse inspection reports.",
  },
  {
    q: "What is 3-way matching in accounts payable?",
    a: "3-way matching in accounts payable is the process of reconciling three documents — the purchase order (what was ordered), the goods receipt note (what was received), and the supplier invoice (what was billed) — to verify that the quantities and prices match before approving payment. AI-powered 3-way matching extracts structured data from all three document types, performs the reconciliation automatically, and routes matched invoices to payment while flagging discrepancies — quantity shortfalls, price variances, or missing GRNs — for human review.",
  },
  {
    q: "How does AI improve customs compliance?",
    a: "AI improves customs compliance by extracting and validating trade document data at classification time — identifying HS code misclassifications, declared value inconsistencies, missing certificates of origin, and counterparty sanctions exposure before documents are submitted to customs authorities. This prevents compliance failures that result in border delays, seizures, and financial penalties. AI also maintains structured audit trails of all customs document decisions for regulatory examination.",
  },
  {
    q: "How long does supply chain document automation take to implement?",
    a: "A production supply chain document automation pipeline targeting a defined document set — for example, invoice processing and 3-way matching for a manufacturing company's top 50 suppliers — typically takes 2–4 weeks from scoping to production. This covers document intake setup, line-item extraction, matching logic configuration, ERP integration, and exception routing. More complex multi-entity or multi-country customs compliance deployments typically require 4–8 weeks.",
  },
  {
    q: "What ERP systems does the AI integrate with?",
    a: "Our supply chain IDP pipeline integrates with: SAP S/4HANA and SAP ECC (AP, MM, and WM modules), Oracle ERP Cloud and Oracle NetSuite, Microsoft Dynamics 365 Finance and Supply Chain, Infor CloudSuite, Epicor, Sage, and custom ERP environments via REST API. For logistics, we integrate with Cargowise, Oracle TMS, SAP Transportation Management, Descartes, and major WMS platforms including Manhattan Associates and Blue Yonder.",
  },
  {
    q: "Is supply chain IDP SOC 2 compliant?",
    a: "Yes. Supply chain IDP pipelines are built with data security as a first-class design constraint. We offer on-premise and private cloud LLM deployment options so commercially sensitive documents — supplier contracts, pricing agreements, and trade finance documents — never leave your infrastructure. Every document event is logged to an immutable audit trail. OFAC/Sanctions screening is performed locally without transmitting counterparty data to external services.",
  },
]

export default function SupplyChainLogisticsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <section id="hero" className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center justify-between flex-wrap gap-y-1 mb-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link href="/intelligent-document-processing" className="hover:text-foreground transition-colors">Intelligent Document Processing</Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-foreground">Supply Chain &amp; Logistics</span>
              </nav>
              <time className="text-xs text-muted-foreground/50" dateTime="2026-06-17">Updated June 2026</time>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">Industry Focus · Supply Chain &amp; Logistics</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-3">
              Supply Chain Document Processing <span className="text-accent">&amp; Trade Automation</span>
            </h1>
            <p className="text-xl font-semibold text-foreground/60 mb-5">
              Accounts payable automation, customs compliance, and freight document processing — production pipelines for manufacturers, 3PLs, and importers.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              We design, build, and deploy production Intelligent Document Processing (IDP) pipelines for supply chain and logistics — automating accounts payable 3-way matching, customs document extraction, freight document processing, supplier onboarding, and trade finance document automation. Fixed-price sprints, 2–4 weeks to production.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
                Book a Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/intelligent-document-processing">
                <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">IDP Platform Overview</Button>
              </Link>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden lg:block" style={{ perspective: "1400px" }}>
            <div className="rounded-2xl p-5 space-y-3 relative overflow-hidden" style={{
              background: "linear-gradient(145deg, #0d1117 0%, #0c1629 50%, #0f0d1a 100%)",
              transform: "rotateY(-10deg) rotateX(4deg)", transformStyle: "preserve-3d",
              boxShadow: "32px 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(249,115,22,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}>
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)" }} />
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)" }} />

              <div className="flex items-center gap-2 relative">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>AI Document Agent · Supply Chain</span>
                <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ color: "#4ade80", background: "rgba(74,222,128,0.12)" }}>Live</span>
              </div>

              <div className="grid grid-cols-3 gap-2 relative">
                {[{ label: "Supplier Invoice", color: "#F97316" }, { label: "Bill of Lading", color: "#60A5FA" }, { label: "Customs Decl.", color: "#34D399" }].map((doc) => (
                  <div key={doc.label} className="rounded-xl p-2.5 text-center" style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${doc.color}28` }}>
                    <FileText className="h-4 w-4 mx-auto mb-1" style={{ color: doc.color }} />
                    <span className="text-[10px] leading-tight block" style={{ color: "rgba(255,255,255,0.5)" }}>{doc.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center"><div className="w-px h-4" style={{ background: "rgba(249,115,22,0.35)" }} /></div>

              <div className="rounded-xl p-3" style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.3)" }}>
                <div className="flex items-center gap-2 mb-2.5">
                  <Brain className="h-3.5 w-3.5" style={{ color: "#F97316" }} />
                  <span className="text-[11px] font-bold" style={{ color: "#F97316" }}>AI Document Agent</span>
                </div>
                <div className="space-y-1.5">
                  {["Document Classification", "Trade Data Extraction", "3-Way Match & Compliance"].map((s) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3 w-3 shrink-0" style={{ color: "#4ade80" }} />
                      <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.6)" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center"><div className="w-px h-4" style={{ background: "rgba(249,115,22,0.35)" }} /></div>

              <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div className="text-[10px] font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>Extracted Data · 98.3% Confidence</div>
                <div className="space-y-1">
                  {[
                    { label: "Vendor", value: "Global Logistics Ltd", badge: "99.2%" },
                    { label: "HS Code", value: "8471.30.0100", badge: "97.8%" },
                    { label: "Value", value: "$124,500 CIF", badge: "98.9%" },
                    { label: "Match", value: "3-Way ✓ Approved", badge: "✓ Auto" },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center justify-between text-[11px] py-0.5">
                      <span className="w-14 shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>{f.label}</span>
                      <span className="font-medium flex-1 px-2" style={{ color: "rgba(255,255,255,0.85)" }}>{f.value}</span>
                      <span className="text-[10px] font-semibold" style={{ color: "#4ade80" }}>{f.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Zap className="h-3 w-3 shrink-0" style={{ color: "#F97316" }} />
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>Posted to SAP · Customs filed · Payment approved</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/10 py-7">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
            {[
              { stat: "90%+", label: "reduction in manual invoice processing and keying time" },
              { stat: "70–85%", label: "straight-through processing rate on standard AP invoices" },
              { stat: "60%", label: "faster customs document preparation and border clearance" },
              { stat: "2–4 weeks", label: "to production on a fixed-price supply chain sprint" },
            ].map((item) => (
              <div key={item.stat} className="flex flex-col items-center gap-1">
                <span className="font-display font-black text-2xl text-foreground">{item.stat}</span>
                <span className="text-xs text-muted-foreground max-w-[160px] leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground/40 mt-4">
            Based on <Link href="/case-studies" className="underline hover:text-muted-foreground transition-colors">production deployments</Link> and industry benchmarks for supply chain document automation.
          </p>
        </div>
      </section>

      <section id="the-challenge" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">The Problem</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Supply chains run on documents — and most are still processed by hand.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">A mid-size manufacturer processes 50,000+ invoices per year. Each cross-border shipment generates 10–20 compliance documents. A single customs error can hold goods at the border for days. AP teams key the same data from paper invoices that suppliers already have in structured systems. The bottleneck is documents.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-border bg-background p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Manual / Legacy Supply Chain Document Handling</p>
              <ul className="space-y-3">
                {[
                  "AP staff key invoice data from PDFs into ERP — 5–15 minutes per invoice",
                  "3-way matching done in spreadsheets — errors cause duplicate payments",
                  "Customs documents prepared manually — HS code errors cause border delays",
                  "Freight documents arrive by email and fax — data manually re-entered into TMS",
                  "Supplier onboarding takes weeks — certificate and insurance document review is manual",
                  "Trade finance discrepancies discovered at bank presentation — costly delays",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1 h-4 w-4 shrink-0 rounded-full bg-destructive/10 flex items-center justify-center text-destructive text-[10px] font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl border border-accent/30 bg-accent/5 p-7">
              <p className="text-[11px] font-bold uppercase tracking-widest text-accent mb-4">Supply Chain IDP — Kovil AI</p>
              <ul className="space-y-3">
                {[
                  "Invoices extracted and matched in seconds — AP team approves exceptions, not every invoice",
                  "3-way match automated — duplicate payment prevention built in",
                  "Customs documents validated before filing — HS code and value errors caught at source",
                  "Freight document data flows directly to TMS — no manual re-entry",
                  "Supplier onboarding automated — certificates validated and expiry alerts set at intake",
                  "LC discrepancies identified before bank presentation — corrections made in time",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Use Cases</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Supply Chain IDP Use Cases: AP, Customs, Freight &amp; More</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Every use case below is a production-ready pipeline we design and deploy. Each targets a specific, high-volume supply chain document workflow where manual handling costs the most time, money, and operational risk.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => {
            const Icon = uc.icon
            return (
              <motion.div key={uc.id} id={uc.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-background p-6 hover:border-accent/30 transition-colors group">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${uc.color}18`, border: `1px solid ${uc.color}30` }}>
                  <Icon className="h-5 w-5" style={{ color: uc.color }} />
                </div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">{uc.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{uc.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
                <ul className="space-y-1.5">
                  {uc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: uc.color }} />{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="extraction-coverage" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Extraction Coverage</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Supply Chain Document Extraction: What the AI Extracts</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">From invoices to customs declarations, every major supply chain document type is covered. Below are the fields extracted per document type with accuracy ranges from production deployments.</p>
          <div className="rounded-2xl border border-border bg-background overflow-hidden">
            <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-muted/30 border-b border-border">
              {["Document Type", "Extracted Fields", "Accuracy", "Integration Target"].map((h) => (
                <span key={h} className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{h}</span>
              ))}
            </div>
            {extractionTable.map((row, i) => (
              <motion.div key={row.docType} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                <span className="text-sm font-semibold text-foreground">{row.docType}</span>
                <span className="text-sm text-muted-foreground leading-relaxed">{row.fields}</span>
                <span className="text-sm font-semibold text-green-600">{row.accuracy}</span>
                <span className="text-sm text-muted-foreground">{row.integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">How We Build It</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">From document intake to ERP and customs — in three steps.</h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">Every supply chain IDP engagement follows the same proven three-step delivery pattern — built around your existing document sources, ERP systems, and trade compliance requirements.</p>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-8 items-start">
              <div className="hidden md:flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-accent text-sm">{step.number}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 min-h-[60px] bg-border" />}
              </div>
              <div className="flex-1 pb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-3 inline-block">{step.label}</span>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">{step.desc}</p>
                <ul className="space-y-1.5">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="compliance" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Compliance</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">Built for trade compliance and sanctions requirements.</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Supply chain document processing operates under complex trade regulations — customs security programmes, sanctions screening obligations, and data residency requirements. Compliance is a first-class design constraint, not an afterthought.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {complianceItems.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-2xl border border-border bg-background p-6">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="engagement-models" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">Engagement Models</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4">How to work with us on supply chain document AI.</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl">Three engagement models — matched to where you are: proving ROI on one workflow, scaling a document automation roadmap, or rescuing a broken pipeline.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {engagements.map((eng, i) => {
            const Icon = eng.icon
            return (
              <motion.div key={eng.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div><p className="font-semibold text-base">{eng.title}</p><p className="text-xs text-muted-foreground">{eng.subtitle}</p></div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{eng.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {eng.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
                <Link href={eng.href} className="text-sm font-semibold text-accent hover:underline flex items-center gap-1.5 mt-auto">Learn more <ArrowRight className="h-3.5 w-3.5" /></Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section id="faq" className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-accent">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Supply Chain &amp; Logistics IDP — common questions.</h2>
          <div id="faq-grid" className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-semibold text-base mb-3 leading-snug">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-accent/5 border border-accent/20 p-10 lg:p-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-accent">Get Started</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5 max-w-2xl mx-auto">Ready to automate your supply chain document workflows?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Book a 30-minute call. We will scope one high-impact workflow — AP invoice automation, customs document processing, or freight document extraction — and give you a fixed-price delivery plan the same week.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>Book a Call <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Link href="/case-studies"><Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">See Case Studies</Button></Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8">
            {[<><Clock className="h-3.5 w-3.5" /> 2–4 week sprint to production</>, <><Shield className="h-3.5 w-3.5" /> C-TPAT · OFAC · SOC 2</>, <><CheckCircle2 className="h-3.5 w-3.5" /> Fixed price, no hourly billing</>].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">{item}</span>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
