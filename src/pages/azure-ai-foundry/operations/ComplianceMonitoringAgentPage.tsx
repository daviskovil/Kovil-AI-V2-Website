'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Shield, Lock, FileText, AlertTriangle, BarChart3, Database } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  { title: "Real-Time Policy Adherence Monitoring", desc: "Continuously scans transactions, access logs, and operational data against your policy ruleset — flagging deviations within minutes, not days." },
  { title: "Regulatory Feed Ingestion", desc: "Ingests regulatory update feeds (SEC, HIPAA, GDPR, SOX) and automatically maps new requirements against your current compliance posture." },
  { title: "Automated Incident Report Drafting", desc: "When a violation is detected, Azure OpenAI drafts a structured incident report with root cause analysis, affected scope, and recommended remediation — ready for human review." },
  { title: "Azure Monitor Audit Log Integration", desc: "Every AI decision, flag, and human override is written to Azure Monitor as a tamper-evident audit trail — ready for regulator or auditor access." },
  { title: "SOC 2 / ISO 27001 Alignment", desc: "Compliance checks are mapped to SOC 2 Type II and ISO 27001 control frameworks — generating continuous evidence for annual audits automatically." },
  { title: "Evidence Package Generation", desc: "One-click export of audit evidence packages: control test results, exception logs, remediation records, and sign-off history — formatted for external auditors." },
]

const howItWorks = [
  {
    step: "01",
    title: "Policy & Regulatory Baseline Setup",
    desc: "We encode your policies, regulatory obligations, and risk thresholds into structured rulesets — connected to your operational data sources via Azure Event Grid.",
    bullets: ["Policy ruleset encoding in structured format", "Data source connections via Azure Event Grid", "Baseline compliance posture established"],
  },
  {
    step: "02",
    title: "Continuous Monitoring Pipeline",
    desc: "The agent monitors operational data streams in real time — comparing observed activity against the policy baseline and scoring deviations by severity.",
    bullets: ["Real-time event stream processing", "AI-powered deviation scoring", "Configurable alert thresholds by risk level"],
  },
  {
    step: "03",
    title: "Incident Response Automation",
    desc: "When a deviation exceeds thresholds, the agent triggers the appropriate response — notification, report drafting, evidence collection, or escalation to compliance officers.",
    bullets: ["Automated incident report drafting", "Stakeholder notification routing", "Evidence logged to tamper-evident audit trail"],
  },
]

const metrics = [
  { value: "100%", label: "policy coverage" },
  { value: "<5 min", label: "deviation detection time" },
  { value: "80%", label: "audit prep time saved" },
  { value: "Zero", label: "missed incidents" },
]

const techStack = ["Azure OpenAI", "Azure Monitor", "Azure Event Grid", "Semantic Kernel", "Azure Key Vault", "Microsoft Sentinel"]

export default function ComplianceMonitoringAgentPage() {
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
            <Link href="/azure-ai-foundry/operations" className="hover:text-foreground transition-colors">Operations</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Compliance Monitoring</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Operations · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Compliance monitoring that{" "}
            <span className="text-accent">never sleeps.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Continuously monitors policies, audit logs, and regulatory feeds using Azure OpenAI. Flags deviations instantly, drafts incident reports, and maintains a tamper-evident audit trail — built for regulated industries.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From policy ruleset to continuous audit-ready monitoring.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Audit-ready compliance. Built into your Azure estate.</h2>
            <p className="text-background/60 text-base">Fixed-price pilot. Deployed in 2–3 weeks. Zero delivery risk.</p>
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
