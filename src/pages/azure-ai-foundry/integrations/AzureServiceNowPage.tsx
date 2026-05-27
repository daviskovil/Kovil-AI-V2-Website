'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, AlertCircle, Search, GitMerge, Brain, Clock, Bot } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const metrics = [
  { value: "74%", label: "Tickets auto-resolved" },
  { value: "4.2 min", label: "Avg resolution time (was 2.1 hrs)" },
  { value: "91%", label: "First-contact resolution" },
  { value: "60%", label: "Analyst time saved" },
]

const capabilities = [
  {
    icon: AlertCircle,
    title: "Incident Triage & Routing AI",
    desc: "Incoming ServiceNow incidents are classified by the AI agent — category, subcategory, priority, and affected CI — before a human analyst sees the ticket. Routing rules assign to the correct team instantly, eliminating manual triage queues.",
  },
  {
    icon: Search,
    title: "Self-Service Resolution Agent",
    desc: "Azure AI Search indexes the ServiceNow knowledge base (KB articles, resolved tickets, runbooks). When a new incident arrives, the agent retrieves the most relevant resolution steps and attempts autonomous resolution for known issue patterns.",
  },
  {
    icon: GitMerge,
    title: "Change Advisory Board Automation",
    desc: "Change requests are assessed by the AI agent against change history, affected CI blast radius, and current change freeze windows. Low-risk standard changes are auto-approved; complex changes receive an AI risk summary for the CAB.",
  },
  {
    icon: Brain,
    title: "Problem Management Intelligence",
    desc: "The agent correlates recurring incidents by symptom patterns, affected CIs, and error codes — identifying candidate problems automatically. Problem records are created with an AI-generated root cause hypothesis and linked incident list.",
  },
  {
    icon: Clock,
    title: "SLA Breach Prediction",
    desc: "Azure Monitor tracks ticket age, assignment group queue depth, and historical resolution times. The agent proactively re-prioritises or escalates tickets predicted to breach SLA before the deadline — surfaced as Teams alerts to service managers.",
  },
  {
    icon: Bot,
    title: "Service Catalog AI Assistant",
    desc: "Employees request IT services through a conversational Teams bot rather than navigating the ServiceNow catalog. The agent identifies the correct catalog item, pre-fills request fields from employee context, and submits to ServiceNow via REST API.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Architecture & Auth",
    desc: "Azure AI agents connect to ServiceNow via the Table API and Scripted REST APIs — no ServiceNow plugin installation required. OAuth 2.0 with a ServiceNow OAuth provider profile handles authentication; Azure API Management adds rate limiting and request normalisation.",
    bullets: [
      "ServiceNow Table API endpoints registered in Azure API Management with OpenAPI schema for Semantic Kernel plugin generation",
      "OAuth 2.0 client credentials flow to ServiceNow OAuth provider — token refresh handled by API Management",
      "ServiceNow integration user with scoped role assignments — read/write limited to incident, problem, change, and knowledge tables",
    ],
  },
  {
    step: "02",
    title: "Data Pipeline",
    desc: "Azure AI Search indexes the ServiceNow knowledge base via HTTP push connector, receiving new and updated KB articles via ServiceNow Business Rules. Resolved incident text is periodically indexed to build a resolution pattern corpus.",
    bullets: [
      "Azure AI Search HTTP push indexer receiving ServiceNow KB article payloads via Business Rule webhook",
      "Vector embeddings on KB article content + resolution notes — hybrid search (BM25 + semantic) for retrieval",
      "Azure Monitor receives ServiceNow incident event stream via webhook for SLA prediction model input",
    ],
  },
  {
    step: "03",
    title: "Agent Surface",
    desc: "Semantic Kernel orchestrates the incident lifecycle — calling ServiceNow APIs to read ticket context, Azure AI Search to retrieve KB resolutions, and ServiceNow Table API to post work notes and close tickets. Human escalation surfaces via Teams adaptive cards.",
    bullets: [
      "Semantic Kernel agent with ServiceNow read/write plugins for incident, change, and knowledge operations",
      "Teams adaptive card escalation for incidents the agent cannot resolve — full context pre-loaded for analyst",
      "Azure Monitor alert rules trigger the SLA breach prediction agent on queue depth and age thresholds",
    ],
  },
]

const useCases = [
  {
    title: "Password Reset & Account Unlock",
    scenario: "Employee messages the IT bot in Teams: 'My account is locked.' The agent authenticates the request via Entra ID MFA, calls ServiceNow Table API to create an incident, invokes the Entra ID API to unlock the account, and resolves the ticket — all within 90 seconds.",
    outcome: "Password and account lockout incidents represent 25-35% of helpdesk volume at most enterprises. Automating these fully frees analyst capacity for complex incidents while improving employee experience.",
  },
  {
    title: "P1 Incident Auto-Triage",
    scenario: "A monitoring alert fires and creates a P1 incident in ServiceNow via REST API. The AI agent reads the incident, queries the Azure Monitor log stream for correlated errors, retrieves the relevant runbook from Azure AI Search, and posts a structured triage summary as a work note within 60 seconds.",
    outcome: "Incident commanders begin response with full diagnostic context rather than spending the first 15-20 minutes gathering information. MTTR for major incidents reduces by 35%.",
  },
  {
    title: "Proactive SLA Management",
    scenario: "The SLA prediction agent monitors queue depth and ticket age every 5 minutes. When a ticket is predicted to breach SLA based on assignment group historical resolution times, it alerts the service manager via Teams and optionally re-assigns to a shorter-queue group.",
    outcome: "SLA breach rate drops significantly as proactive re-prioritisation replaces reactive escalation. Service managers have predictive visibility rather than reacting to breaches after they occur.",
  },
  {
    title: "Problem Identification from Incident Clusters",
    scenario: "The problem management agent runs nightly, clustering incidents by affected CI, error codes, and resolution category. When three or more incidents match a pattern within 30 days, it creates a Problem record with AI-drafted root cause hypotheses and links all contributing incidents.",
    outcome: "Problem management team identifies systemic issues weeks earlier than manual review would allow. Problem resolution rate improves as root cause hypotheses are better supported with linked evidence.",
  },
]

const techStack = [
  "Azure OpenAI", "ServiceNow REST API", "Azure API Management",
  "Azure AI Search (KB indexer)", "Semantic Kernel", "Azure Monitor",
]

export default function AzureServiceNowPage() {
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
            <span className="text-foreground">ServiceNow</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Integrations · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Azure AI Foundry + ServiceNow: AI agents that resolve tickets before humans touch them
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Azure OpenAI connected to ServiceNow via REST API enables AI agents that triage incidents, suggest resolutions from the knowledge base, and auto-close repeat issues — without modifying your ServiceNow instance or installing a plugin.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Six ITSM capabilities AI agents can handle autonomously.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Azure AI to ServiceNow — no instance modifications required.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Real outcomes from Azure AI + ServiceNow deployments.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">74% of your tickets could resolve themselves. Let's find them.</h2>
            <p className="text-background/60 text-base">Book a call and we'll audit your ServiceNow ticket categories to identify which ones are candidates for full AI resolution.</p>
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
