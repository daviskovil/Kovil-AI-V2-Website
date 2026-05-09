'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Code, Zap, Shield, BarChart3, GitBranch, FileText } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  { title: "OpenAPI Spec Auto-Generation", desc: "Analyses live traffic through Azure API Management and generates accurate OpenAPI 3.0 specifications automatically — eliminating manual spec writing." },
  { title: "Natural Language Error Explanations", desc: "When an integration fails, the agent explains the root cause in plain English — including which service failed, why, and the exact fix — reducing diagnosis time from hours to minutes." },
  { title: "Integration Test Case Generation", desc: "Automatically generates test suites for new endpoints based on the OpenAPI spec — covering happy paths, edge cases, and error scenarios your team would likely miss." },
  { title: "Azure APIM Policy Analysis", desc: "Reads your Azure API Management policies and flags conflicts, security gaps, and performance issues — with specific remediation recommendations." },
  { title: "Breaking Change Detection", desc: "Compares new API versions against existing contracts and flags any breaking changes before deployment — preventing downstream consumer breakage." },
  { title: "Developer Self-Service Portal", desc: "Auto-generated developer portal content: endpoint descriptions, request/response examples, authentication guides, and rate limit documentation — always current." },
]

const howItWorks = [
  {
    step: "01",
    title: "API Gateway Analysis",
    desc: "We connect to your Azure API Management gateway to analyse existing APIs, traffic patterns, and policy configurations — establishing the baseline for automation.",
    bullets: ["Azure APIM traffic analysis completed", "Existing policy audit performed", "API inventory and dependency map created"],
  },
  {
    step: "02",
    title: "Documentation & Test Generation",
    desc: "The agent generates OpenAPI specifications, test suites, and developer documentation from live traffic and code analysis — no manual input required.",
    bullets: ["OpenAPI 3.0 specs generated from traffic", "Test suites created for all endpoints", "Developer docs published to portal"],
  },
  {
    step: "03",
    title: "Error Diagnosis Pipeline",
    desc: "A real-time error analysis pipeline monitors API failures and surfaces natural language root cause explanations — integrated into your alerting and ticketing workflow.",
    bullets: ["Real-time failure monitoring configured", "Natural language diagnostics in Teams/Slack", "Integration with Azure DevOps for ticket creation"],
  },
]

const metrics = [
  { value: "70%", label: "faster integration dev" },
  { value: "85%", label: "APIs auto-documented" },
  { value: "4x", label: "faster error diagnosis" },
  { value: "Zero", label: "manual spec writing" },
]

const techStack = ["Azure OpenAI", "Azure API Management", "Semantic Kernel", "Azure DevOps", "Azure Application Insights", "Prompt Flow"]

export default function APIIntegrationAgentPage() {
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
            <Link href="/azure-ai-foundry/developer-tools" className="hover:text-foreground transition-colors">Developer Tools</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">API Integration Agent</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Developer Tools · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            API integrations that{" "}
            <span className="text-accent">write themselves.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Accelerates API integration development — automatically generates OpenAPI documentation, diagnoses errors in plain English, and tests new endpoints against your Azure API Management gateway.
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

      {/* How It Works */}
      <section className="border-t border-border py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From API gateway to automated documentation and diagnostics.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Stop writing API docs manually. Let the agent do it.</h2>
            <p className="text-background/60 text-base">Fixed-price build. Deployed against your Azure APIM gateway in 2 weeks.</p>
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
