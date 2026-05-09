'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  {
    title: "Purchase Order Automation",
    desc: "Automatically generate, route, and confirm purchase orders based on inventory signals, approved vendor lists, and configurable spend thresholds — no human touchpoints required below threshold.",
  },
  {
    title: "Vendor Onboarding Orchestration",
    desc: "Orchestrate the full vendor onboarding sequence: collect documentation, validate tax IDs and banking details, trigger compliance checks, and provision supplier access in Dynamics 365 or SAP.",
  },
  {
    title: "Approval Routing & Escalation",
    desc: "Dynamic approval chains adapt to spend value, cost centre, and policy rules. SLA breaches automatically escalate with contextual summaries so approvers have everything they need to decide.",
  },
  {
    title: "Dynamics 365 & SAP Integration",
    desc: "Pre-built Semantic Kernel plugins integrate with Dynamics 365 F&O and SAP S/4HANA APIs, enabling read/write operations across procurement, finance, and supply chain modules.",
  },
  {
    title: "Exception Handling & Human Escalation",
    desc: "Ambiguous transactions, policy violations, or API failures are caught, logged, and escalated to the right team member with full context — the agent never silently fails.",
  },
  {
    title: "Full Audit Trail in Azure Monitor",
    desc: "Every agent action, decision, and API call is recorded in structured logs in Azure Monitor, giving compliance teams a complete, queryable audit trail for every transaction.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Workflow Mapping & API Integration",
    desc: "Kovil AI maps your existing ERP workflows, identifies automation candidates, and builds secure API connections to your Dynamics 365 or SAP environment using Azure API Management.",
    bullets: [
      "Process discovery workshop to identify highest-value automation targets",
      "OAuth 2.0 and managed identity authentication to ERP APIs — no stored credentials",
      "Sandbox environment testing before any production workflow changes",
    ],
  },
  {
    step: "02",
    title: "Agent Orchestration Build",
    desc: "We build the orchestration layer using Semantic Kernel, composing plugins for each ERP action and chaining them into multi-step workflows with conditional logic and error handling.",
    bullets: [
      "Semantic Kernel agent with tool-use for each ERP API endpoint",
      "Prompt Flow for complex decision trees requiring LLM reasoning",
      "Configurable business rules engine for spend limits, approval hierarchies, and SLAs",
    ],
  },
  {
    step: "03",
    title: "Go-Live & Monitoring",
    desc: "Agents go live in shadow mode first, running in parallel with existing processes so results can be validated before full cutover. Azure Monitor dashboards provide real-time visibility.",
    bullets: [
      "Shadow mode deployment with side-by-side comparison against manual process",
      "Azure Monitor Workbooks for operational KPI dashboards",
      "Alerting rules for SLA breaches, error rates, and anomalous transactions",
    ],
  },
]

const metrics = [
  { value: "60%", label: "Manual steps eliminated" },
  { value: "4hr", label: "Approval cycle (was 3 days)" },
  { value: "99.2%", label: "Data accuracy" },
  { value: "$380K", label: "Annual savings" },
]

const techStack = [
  "Semantic Kernel",
  "Azure API Management",
  "Dynamics 365 Connector",
  "Azure Logic Apps",
  "Azure OpenAI",
  "Prompt Flow",
]

export default function ERPProcessAgentPage() {
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
            <Link href="/azure-ai-foundry/enterprise" className="hover:text-foreground transition-colors">Enterprise Automation</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">ERP Process Agent</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Enterprise Automation · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            ERP workflows that{" "}
            <span className="text-accent">run themselves.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Kovil AI builds Azure-native ERP process agents that orchestrate procurement, vendor management, and approval workflows across Dynamics 365 and SAP — eliminating manual steps, accelerating cycle times, and maintaining a complete audit trail.
          </p>

          {/* Metrics strip */}
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

      {/* How It Works */}
      <section className="border-t border-border py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From manual ERP tasks to fully orchestrated workflows.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-7 overflow-hidden group hover:border-accent/40 transition-all">
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

      {/* Capabilities */}
      <section className="border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>Capabilities</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What this agent can do.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/30 transition-colors">
                <div className="h-2 w-2 rounded-full mb-4" style={{ background: AZURE }} />
                <h3 className="font-semibold text-base mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border py-16 bg-muted/20">
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Stop paying people to click through ERP screens.</h2>
            <p className="text-background/60 text-base">Book a call and we'll map your highest-value ERP workflows for automation in the first session.</p>
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
