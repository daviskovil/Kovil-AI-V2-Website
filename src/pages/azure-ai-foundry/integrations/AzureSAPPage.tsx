'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, ShoppingCart, FileText, Package, Users, DollarSign, AlertTriangle } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const metrics = [
  { value: "67%", label: "PO processing time reduction" },
  { value: "92%", label: "Invoice straight-through rate" },
  { value: "Real-time", label: "SAP inventory signals" },
  { value: "$840K", label: "Avg annual ops saving" },
]

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Purchase Order Automation",
    desc: "AI agents receive replenishment signals from inventory systems, query SAP S/4HANA material master and vendor lists via OData APIs, validate spend authority, and create POs in SAP — routing for approval only above configured thresholds.",
  },
  {
    icon: FileText,
    title: "Vendor Invoice Processing",
    desc: "Azure AI Document Intelligence extracts invoice data from PDFs and images. The agent validates extracted fields against open POs in SAP via the BAPI_PO_GETITEMS function module, flags mismatches, and posts matched invoices via BAPI_INCOMINGINVOICE_CREATE.",
  },
  {
    icon: Package,
    title: "Inventory Level Monitoring",
    desc: "Azure Logic Apps poll SAP inventory tables via OData on a configurable schedule. When stock falls below reorder point, the AI agent evaluates lead times, current demand forecast, and approved vendor availability before triggering a replenishment request.",
  },
  {
    icon: Users,
    title: "SAP HR Process Automation",
    desc: "AI agents automate SAP HR transactions — position creation, cost centre assignment, employee data updates — by calling RFC-enabled SAP HR function modules via Azure API Management, with approval routing built in Semantic Kernel.",
  },
  {
    icon: DollarSign,
    title: "Financial Close AI",
    desc: "During period close, AI agents query SAP FI/CO for outstanding items, draft accrual entries with supporting calculations, and route journal entries for controller review — reducing period-close cycle from days to hours.",
  },
  {
    icon: AlertTriangle,
    title: "Supply Chain Risk Alerts",
    desc: "AI agents correlate SAP delivery schedules, vendor performance history from MM, and external news signals to generate early-warning supply chain risk alerts — surfaced as Teams notifications with recommended mitigation actions.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Architecture & Auth",
    desc: "Azure API Management acts as the secure gateway between Azure AI services and SAP. OData services are exposed from SAP Gateway, and BAPI/RFC calls use the SAP .NET Connector (NCo) via Azure Logic Apps with OAuth 2.0 token exchange.",
    bullets: [
      "SAP Gateway OData services (S/4HANA) registered in Azure API Management with OpenAPI schema",
      "Azure Logic Apps SAP connector for BAPI and RFC calls — no custom middleware required",
      "Entra ID managed identity for Azure resources; SAP communication user with least-privilege role assignments",
    ],
  },
  {
    step: "02",
    title: "Data Pipeline",
    desc: "Azure Data Factory incremental extracts feed SAP transactional data into Azure Data Lake for historical analysis. For real-time operations, OData calls are made synchronously through the API Management gateway during agent execution.",
    bullets: [
      "Azure Data Factory SAP Table connector for nightly incremental load of master data and transactional history",
      "SAP OData real-time queries via API Management for agent decision context (inventory levels, PO status, vendor data)",
      "Semantic Kernel plugins wrap each SAP OData entity set and BAPI as a discrete callable tool",
    ],
  },
  {
    step: "03",
    title: "Agent Surface",
    desc: "Semantic Kernel orchestrates multi-step SAP transactions — composing OData queries, BAPI calls, and approval routing into end-to-end workflows. Agents surface as background automation processes, Teams bots for operator interaction, and Power Automate flows.",
    bullets: [
      "Semantic Kernel agent with SAP OData and BAPI plugins for read/write operations across procurement, HR, and finance modules",
      "Teams adaptive card notifications for human-in-the-loop approvals above spend threshold",
      "Full transaction audit log written to Azure Monitor with SAP document numbers for reconciliation",
    ],
  },
]

const useCases = [
  {
    title: "Procure-to-Pay Automation",
    scenario: "Warehouse management system raises a replenishment request. The AI agent queries SAP MM for approved vendors, checks current pricing in SAP info records, validates budget availability in SAP CO, and creates a purchase order — escalating to procurement for review above $50K.",
    outcome: "PO creation cycle drops from 3 days to 4 hours for below-threshold orders. Procurement team reviews exception reports rather than processing every transaction, reducing per-PO cost by 67%.",
  },
  {
    title: "Three-Way Match Invoice Processing",
    scenario: "Supplier invoice PDF arrives by email. Power Automate extracts the attachment and sends to Azure AI Document Intelligence. The agent retrieves the matching SAP PO via OData, validates quantities and prices, and posts a matched invoice via BAPI — flagging discrepancies for AP review.",
    outcome: "92% of invoices post straight-through with zero human handling. AP team processes only exceptions — complex disputes, pricing variances, and unapproved charges.",
  },
  {
    title: "Financial Period Close Assistant",
    scenario: "At period end, the finance agent queries SAP FI for open items, identifies accruals needed based on goods receipts without invoices, drafts journal entry postings with calculation summaries, and routes to the controller for approval via Teams.",
    outcome: "Period close time reduces from 5 days to 2 days. Controllers review AI-prepared analysis rather than pulling reports manually, focusing effort on material judgement items.",
  },
  {
    title: "Vendor Performance Risk Monitoring",
    scenario: "The supply chain agent aggregates SAP delivery confirmations, goods receipt dates, and quality rejection records to generate a weekly vendor scorecard. Vendors below threshold trigger an automated remediation workflow in SAP.",
    outcome: "Procurement team has real-time visibility into supply chain risk rather than waiting for quarterly reviews. At-risk vendors are flagged and managed before disruption materialises.",
  },
]

const techStack = [
  "Azure API Management (SAP OData connector)", "Azure OpenAI", "Azure Logic Apps",
  "SAP Business Technology Platform", "Semantic Kernel", "Azure Data Factory",
]

export default function AzureSAPPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/azure-ai-foundry" className="hover:text-foreground transition-colors">Azure AI Foundry</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/azure-ai-foundry/integrations" className="hover:text-foreground transition-colors">Integrations</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">SAP</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Integrations · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Azure AI Foundry + SAP: AI agents that read, write, and act on your SAP data
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Azure API Management + SAP OData/BAPI connectors allow Azure AI agents to query SAP S/4HANA, ECC, and Ariba data — triggering purchase orders, reading inventory, and automating approvals without SAP customisation or ABAP development.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {metrics.map(m => (
              <div key={m.label} className="rounded-xl p-4 text-center" style={{ background: `${AZURE}10`, border: `1px solid ${AZURE}25` }}>
                <div className="font-display font-bold text-2xl" style={{ color: AZURE }}>{m.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                Back to Azure AI Foundry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Possible */}
      <section className="border-t border-border py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>What's Possible</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Six SAP processes AI agents can own end-to-end.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-background p-6 hover:border-accent/30 transition-colors">
                <cap.icon className="h-5 w-5 mb-4" style={{ color: AZURE }} />
                <h3 className="font-semibold text-base mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Connect It */}
      <section className="border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>How We Connect It</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Azure to SAP integration without ABAP customisation.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-card p-7 overflow-hidden group hover:border-accent/40 transition-all">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
                <span className="font-display font-black text-5xl text-accent/15 leading-none block mb-4">{step.step}</span>
                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                <ul className="space-y-2">
                  {step.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-t border-border py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>Use Cases</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Real outcomes from Azure AI + SAP deployments.</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6 hover:border-accent/30 transition-colors">
                <h3 className="font-semibold text-lg mb-2" style={{ color: AZURE }}>{uc.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed"><span className="font-medium text-foreground">Scenario: </span>{uc.scenario}</p>
                <p className="text-sm text-muted-foreground leading-relaxed"><span className="font-medium text-foreground">Outcome: </span>{uc.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Built With</p>
          <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Azure technology stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map(tech => (
              <span key={tech} className="px-4 py-2 rounded-xl text-sm font-medium border" style={{ borderColor: `${AZURE}30`, background: `${AZURE}08`, color: AZURE }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">SAP holds your most valuable operational data. Let AI act on it.</h2>
            <p className="text-background/60 text-base">Book a call and we'll identify your top SAP automation opportunities — no ABAP development required.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
