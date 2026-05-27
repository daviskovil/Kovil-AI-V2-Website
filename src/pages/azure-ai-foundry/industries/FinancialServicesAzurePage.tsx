'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Shield, FileSearch, AlertTriangle, TrendingUp, FileText, Eye } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"

const capabilities = [
  { title: "Regulatory Compliance Monitoring", desc: "Continuously monitors transactions, communications, and documentation against evolving regulatory requirements — flagging violations in real time before they become audit findings." },
  { title: "Fraud Detection & Prevention", desc: "Analyses transaction patterns, entity relationships, and behavioural signals in real time to surface anomalous activity. Integrates with existing fraud risk frameworks without replacing them." },
  { title: "Client Advisory Automation", desc: "Generates personalised investment insights, portfolio summaries, and suitability assessments for relationship managers — reducing prep time per client meeting from hours to minutes." },
  { title: "Loan & Credit Underwriting", desc: "Automates document ingestion, financial spreading, covenant extraction, and risk scoring for loan applications — accelerating credit decisions while maintaining full audit trails." },
  { title: "KYC / AML Document Processing", desc: "Extracts, validates, and cross-references identity documents, beneficial ownership structures, and sanction lists — dramatically compressing onboarding timelines for new clients." },
  { title: "Trade Surveillance Intelligence", desc: "Monitors trading activity for market manipulation patterns, front-running signals, and insider trading indicators — generating structured alerts with evidence packages for compliance teams." },
]

const howItWorks = [
  {
    step: "01",
    title: "Data Integration & Access",
    desc: "We connect the agent to your core banking systems, document repositories, and data warehouses via Azure API Management — with Entra ID governing every access grant.",
    bullets: ["Core banking and CRM system connectors", "Entra ID role-based access governance", "Encrypted data pipeline with audit log"],
  },
  {
    step: "02",
    title: "Intelligent Processing & Analysis",
    desc: "Azure OpenAI and Azure AI Document Intelligence process structured and unstructured data — extracting entities, classifying risk, and generating structured outputs your compliance and advisory teams can act on immediately.",
    bullets: ["Document Intelligence for KYC/AML extraction", "Azure OpenAI for risk narrative generation", "Azure AI Search for regulatory knowledge retrieval"],
  },
  {
    step: "03",
    title: "Audit Trail & Governance",
    desc: "Every agent action, decision, and data access is logged in Azure Monitor with immutable records — ensuring full regulatory defensibility and enabling seamless internal audit support.",
    bullets: ["Immutable action log in Azure Monitor", "Human-in-the-loop approval for high-risk decisions", "Exportable audit evidence packages"],
  },
]

const metrics = [
  { value: "71%", label: "claims auto-triaged" },
  { value: "6x", label: "faster KYC" },
  { value: "99.2%", label: "audit trail completeness" },
  { value: "$2.4M", label: "saved per year" },
]

const techStack = [
  "Azure OpenAI",
  "Azure AI Document Intelligence",
  "Azure AI Search",
  "Azure Machine Learning",
  "Microsoft Entra ID",
  "Azure Monitor",
]

export default function FinancialServicesAzurePage() {
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
            <Link href="/azure-ai-foundry/industries" className="hover:text-foreground transition-colors">Industries</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Financial Services</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Industries · Financial Services</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            AI agents for financial services.{" "}
            <span className="text-accent">Built on Azure.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            From KYC onboarding and AML monitoring to credit underwriting and trade surveillance — intelligent agents that operate inside your compliance framework, not around it. Enterprise-grade security, full audit trails, and Microsoft Entra ID governance baked in.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Integrate, analyse, and govern — with a complete audit trail.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What the agent handles across financial services.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Compliance-grade AI agents, deployed in weeks.</h2>
            <p className="text-background/60 text-base">Full audit trails. Entra ID governance. Built for regulated financial services environments.</p>
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

      <AzurePracticeNavigation currentPath="/azure-ai-foundry/industries/financial-services-banking" />
    </div>
  )
}
