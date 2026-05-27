'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Database, Users, FileText, BarChart2, RefreshCw, Cpu } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const metrics = [
  { value: "68%", label: "Faster lead qualification" },
  { value: "3.2x", label: "Support ticket resolution speed" },
  { value: "40%", label: "Forecast accuracy improvement" },
  { value: "Zero", label: "Manual data entry" },
]

const capabilities = [
  {
    icon: Users,
    title: "Lead Scoring Agent",
    desc: "Azure OpenAI reads Dynamics 365 contact history, firmographic data, and engagement signals to score and rank leads autonomously — updating CRM records and triggering SDR workflows without human intervention.",
  },
  {
    icon: BarChart2,
    title: "Sales Forecast Automation",
    desc: "AI agents pull pipeline data from Dynamics 365 Sales, apply probabilistic scoring, and generate forecast commentary in natural language — giving sales leaders a narrative alongside the numbers.",
  },
  {
    icon: FileText,
    title: "Service Ticket Triage",
    desc: "Incoming cases in Dynamics 365 Customer Service are classified by urgency, category, and customer tier. The agent routes to the right team, populates resolution suggestions, and sets SLA timers automatically.",
  },
  {
    icon: Database,
    title: "ERP Process Agent",
    desc: "Azure AI Foundry agents connect to Dynamics 365 Finance & Operations via Dataverse and OData endpoints — automating purchase order creation, approval routing, and invoice matching against PO records.",
  },
  {
    icon: RefreshCw,
    title: "Field Service Scheduling",
    desc: "AI dispatches field service jobs by reading technician availability, skill certifications, location, and job priority from Dynamics 365 Field Service — minimising travel time and SLA breaches.",
  },
  {
    icon: Cpu,
    title: "Contract Lifecycle AI",
    desc: "Agents monitor contract renewal dates in Dynamics 365, draft renewal summaries, flag non-standard terms via Azure AI Document Intelligence, and alert account managers on a configurable lead-time.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Architecture & Auth",
    desc: "Azure API Management provides a unified gateway over Dynamics 365 REST and OData APIs. Authentication uses Entra ID managed identities — no service account passwords stored anywhere.",
    bullets: [
      "Dataverse Web API and Dynamics 365 OData endpoints registered in API Management",
      "Managed identity OAuth 2.0 flow — credentials rotate automatically",
      "API Management policies for rate limiting, caching, and request transformation",
    ],
  },
  {
    step: "02",
    title: "Data Pipeline",
    desc: "Semantic Kernel plugins wrap each Dynamics 365 API action. Azure AI Search indexes Dataverse tables for semantic retrieval — giving agents access to relational CRM data through natural language.",
    bullets: [
      "Semantic Kernel functions for read, create, update, and relate operations on Dataverse",
      "Azure AI Search indexer over Dynamics 365 tables for hybrid keyword + vector search",
      "Power Automate triggers feed real-time CRM events to the agent orchestration layer",
    ],
  },
  {
    step: "03",
    title: "Agent Surface",
    desc: "Agents are surfaced where work happens — as Copilot Studio bots inside Dynamics 365, Teams channels, or as background automation processes triggered by CRM events.",
    bullets: [
      "Copilot Studio agent embedded in Dynamics 365 Sales and Customer Service apps",
      "Teams bot surfacing CRM context for account managers and support reps",
      "Background agents triggered by Power Automate flows on record creation or status changes",
    ],
  },
]

const useCases = [
  {
    title: "Sales SDR Agent",
    scenario: "Agent reads a new contact record in Dynamics 365, retrieves email engagement history from M365 Graph, and scores the lead against ICP criteria using Azure OpenAI.",
    outcome: "SDRs receive a pre-qualified lead with a recommended next action and email draft — reducing research time from 25 min to under 2 min per lead.",
  },
  {
    title: "Service Resolution Agent",
    scenario: "A D365 Customer Service case arrives. The agent classifies the issue, retrieves similar resolved cases from Azure AI Search, and drafts a resolution for agent review or direct customer send.",
    outcome: "First-response time drops from hours to under 4 minutes. CSAT scores improve as customers receive specific, accurate replies rather than generic acknowledgements.",
  },
  {
    title: "ERP Purchase Order Automation",
    scenario: "Inventory sensor signal triggers a replenishment need. The AI agent checks approved vendor list in D365, validates budget availability in Finance & Operations, and raises a PO — routing for approval above threshold.",
    outcome: "PO cycle time drops from 3 days to 4 hours. Finance team reviews exception reports rather than processing every transaction manually.",
  },
  {
    title: "Renewal Propensity Scoring",
    scenario: "Agent runs nightly across all accounts approaching renewal. It reads product usage telemetry, support ticket history, and relationship health scores from D365 to produce a renewal risk rating.",
    outcome: "Account managers prioritise at-risk accounts 60 days before renewal rather than discovering churn risk after the fact. Renewal rates improve materially.",
  },
]

const techStack = [
  "Azure OpenAI", "Dataverse Connector", "Azure API Management",
  "Power Automate", "Semantic Kernel", "Copilot Studio",
]

export default function AzureDynamics365Page() {
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
            <span className="text-foreground">Dynamics 365</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Integrations · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Azure AI Foundry + Dynamics 365: Build AI agents that act on your CRM and ERP data
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Azure AI Foundry natively connects to Dynamics 365 via Dataverse connectors and Azure API Management — enabling AI agents that read CRM context, trigger workflows, and update records autonomously.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Six ways AI agents transform your Dynamics 365 environment.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">A three-layer integration architecture.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Concrete outcomes from real Dynamics 365 deployments.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Your Dynamics 365 data should drive decisions, not just store them.</h2>
            <p className="text-background/60 text-base">Book a call and we'll identify your highest-value D365 automation opportunities in the first session.</p>
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
