'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, FileText, GitBranch, LayoutGrid, Database, Bot, BarChart2 } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const metrics = [
  { value: "5x", label: "Faster workflow creation" },
  { value: "900+", label: "Connector integrations" },
  { value: "Zero", label: "Custom code for standard flows" },
  { value: "3 weeks", label: "Average deployment time" },
]

const capabilities = [
  {
    icon: FileText,
    title: "Document Processing with AI Extraction",
    desc: "Power Automate flows invoke Azure AI Document Intelligence to extract structured data from invoices, purchase orders, and forms — then write extracted fields directly to Dataverse, SharePoint lists, or downstream APIs.",
  },
  {
    icon: GitBranch,
    title: "Approval Workflows with AI Reasoning",
    desc: "Approval chains in Power Automate call Azure OpenAI to provide decision context — summarising the approval item, surfacing relevant history from Dataverse, and recommending approve/reject with supporting rationale.",
  },
  {
    icon: LayoutGrid,
    title: "Power Apps with Embedded AI",
    desc: "Canvas apps and model-driven apps in Power Apps call custom Azure AI connectors — enabling natural language search, AI-generated form fields, and embedded chatbots without leaving the application.",
  },
  {
    icon: Database,
    title: "Dataverse + AI Triggers",
    desc: "Dataverse row creation or update events trigger AI-augmented flows. A new customer record triggers an enrichment agent; a support case update triggers sentiment analysis and priority re-scoring.",
  },
  {
    icon: Bot,
    title: "Custom Copilot in Canvas Apps",
    desc: "Copilot Studio agents are embedded directly into Power Apps canvas apps via the AI Builder integration — giving field workers, operations staff, and customer-facing teams an AI assistant within existing apps.",
  },
  {
    icon: BarChart2,
    title: "Power BI + AI Insights Narration",
    desc: "Azure OpenAI generates natural language summaries of Power BI report changes — delivered as Power Automate notifications when KPIs cross thresholds, with an explanation of the contributing factors.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Architecture & Auth",
    desc: "Power Platform uses custom connectors backed by Azure API Management to call Azure OpenAI and Azure AI services. Service principal authentication from Power Platform to Azure is established via Entra ID app registrations.",
    bullets: [
      "Custom connector definition in Power Platform wrapping Azure OpenAI REST API endpoints",
      "Azure API Management policies for request transformation, token management, and rate limiting",
      "Entra ID service principal with least-privilege role assignments on Azure AI resources",
    ],
  },
  {
    step: "02",
    title: "Data Pipeline",
    desc: "Dataverse serves as the central data store, with Power Automate connecting to 900+ external systems via pre-built connectors. Azure AI Document Intelligence handles unstructured inputs before writing structured output to Dataverse.",
    bullets: [
      "Dataverse tables with custom columns for AI-enriched fields (sentiment score, classification, extracted entities)",
      "Power Automate premium connectors for SAP, Dynamics 365, ServiceNow, and external REST APIs",
      "Azure AI Document Intelligence pre-built and custom models for invoice, receipt, and form extraction",
    ],
  },
  {
    step: "03",
    title: "Agent Surface",
    desc: "Copilot Studio provides the conversational layer for end-user-facing agents, while Power Automate handles background automation. Both are deployed and managed through the Power Platform admin centre.",
    bullets: [
      "Copilot Studio agent published to Teams, Power Apps portal, or web embed — zero additional infrastructure",
      "Power Automate flows triggered by schedules, events, HTTP webhooks, or Dataverse row changes",
      "Power Platform CoE toolkit for governance, usage monitoring, and maker enablement at scale",
    ],
  },
]

const useCases = [
  {
    title: "Invoice Processing Automation",
    scenario: "Supplier invoices arrive by email. A Power Automate flow extracts the attachment, sends it to Azure AI Document Intelligence, maps extracted fields (vendor, amount, line items) to Dataverse, and triggers a three-way PO match.",
    outcome: "92% of invoices processed straight-through with zero manual data entry. AP team reviews exceptions only, reducing processing cost per invoice by over 70%.",
  },
  {
    title: "Field Inspection App with AI",
    scenario: "Field inspectors use a Power Apps canvas app to log equipment checks. The embedded Copilot agent interprets inspection notes in natural language, classifies defect severity, and pre-populates the work order in Dynamics 365 Field Service.",
    outcome: "Inspection report submission time drops from 45 minutes to 12 minutes. Defect classification consistency improves as AI applies a standardised rubric across all inspectors.",
  },
  {
    title: "HR Leave Request Intelligent Routing",
    scenario: "An employee submits a leave request in a Power Apps form. Power Automate checks team calendar coverage via Microsoft Graph, calculates leave balance from the HR system, and routes to the manager with an AI-generated coverage summary.",
    outcome: "Leave approval cycle drops from 2 days to same-day. Managers have full context before approving — reducing approval reversals caused by calendar conflicts.",
  },
  {
    title: "Sales Proposal Generation",
    scenario: "A sales rep completes a deal qualification form in a Power App. Power Automate calls Azure OpenAI with the deal parameters and retrieves relevant case studies from SharePoint via Azure AI Search, assembling a tailored proposal draft.",
    outcome: "Proposal turnaround drops from 3 days to 4 hours. Proposal quality improves as AI populates relevant proof points rather than sales reps writing from blank.",
  },
]

const techStack = [
  "Power Automate", "Copilot Studio", "Azure OpenAI",
  "Dataverse", "Power Apps", "Azure AI Document Intelligence",
]

export default function AzurePowerPlatformPage() {
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
            <span className="text-foreground">Power Platform</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Integrations · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Azure AI Foundry + Power Platform: AI-powered automation for every business process
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Power Automate + Azure OpenAI + Copilot Studio form a complete no-code/low-code AI automation stack — connecting 900+ connectors with LLM intelligence. Build agents that span every system in your enterprise without writing custom integration code.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Six automation patterns unlocked by AI + Power Platform.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Connecting Azure AI to Power Platform in three layers.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Concrete outcomes from Power Platform + Azure AI deployments.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">The fastest path from business process to AI automation.</h2>
            <p className="text-background/60 text-base">Book a call and we'll map your highest-value Power Platform + Azure AI opportunities in the first session.</p>
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
