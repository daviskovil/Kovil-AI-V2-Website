'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Shield, FileText, AlertTriangle, MessageCircle, ClipboardList, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  { title: "Claims Triage & Routing", desc: "Automatically classifies incoming claims by type, complexity, and fraud risk — routing straight-through-processable claims directly to payment and escalating complex or suspicious cases to the appropriate adjuster queue." },
  { title: "Underwriting Automation", desc: "Extracts risk factors from application documents, medical records, property surveys, and third-party data sources — generating structured risk summaries and preliminary underwriting recommendations for review." },
  { title: "Fraud Detection", desc: "Applies network analysis, anomaly detection, and pattern matching across claims history, claimant relationships, and external fraud indicator databases — flagging suspicious claims before payment is released." },
  { title: "Policy Servicing Chatbot", desc: "Handles policy lookup, coverage questions, mid-term adjustments, and certificate requests across digital channels — resolving the majority of policyholder service requests without agent involvement." },
  { title: "Regulatory Filing Automation", desc: "Monitors filing deadlines, extracts required data from policy and claims systems, and generates formatted submissions for state insurance department filings — reducing compliance operations overhead." },
  { title: "Renewal Propensity Scoring", desc: "Analyses policyholder behaviour signals, claims history, payment patterns, and market data to score renewal likelihood — enabling proactive retention outreach focused on the accounts most at risk of lapsing." },
]

const howItWorks = [
  {
    step: "01",
    title: "Policy & Claims Data Integration",
    desc: "We connect the agent to your core insurance systems — policy administration, claims management, and document repositories — via Azure API Management and Azure AI Document Intelligence, with Entra ID governing access.",
    bullets: ["Policy administration and claims system API connectors", "Azure AI Document Intelligence for FNOL and supporting document processing", "Microsoft Entra ID for role-based data access governance"],
  },
  {
    step: "02",
    title: "Intelligent Claims & Risk Analysis",
    desc: "Azure OpenAI extracts structured data from unstructured claims documents, while Azure Machine Learning applies fraud and risk models — generating adjuster-ready summaries and decision support outputs in seconds.",
    bullets: ["Azure ML for fraud scoring and renewal propensity models", "Azure OpenAI for claims narrative analysis and coverage matching", "Azure AI Search for policy document retrieval at claim time"],
  },
  {
    step: "03",
    title: "Decision Routing & Compliance Logging",
    desc: "Straight-through-processable claims are automatically resolved with full audit trail. Complex cases are routed with AI-generated summaries. Every decision is logged in Azure Monitor for regulatory defensibility.",
    bullets: ["Configurable straight-through processing thresholds", "Adjuster-ready claim summary generation", "Immutable decision audit log in Azure Monitor"],
  },
]

const metrics = [
  { value: "71%", label: "claims auto-triaged" },
  { value: "18 hrs", label: "avg processing (was 6 days)" },
  { value: "64%", label: "fraud detection improvement" },
  { value: "$1.4M", label: "ops savings/year" },
]

const techStack = [
  "Azure OpenAI",
  "Azure AI Document Intelligence",
  "Azure Machine Learning",
  "Azure AI Search",
  "Azure API Management",
  "Microsoft Entra ID",
]

export default function InsuranceAzurePage() {
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
            <span className="text-foreground">Insurance</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Industries · Insurance</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            AI agents for insurance.{" "}
            <span className="text-accent">Claims to compliance. Azure-native.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Intelligent agents that triage claims automatically, detect fraud before payment, automate underwriting document review, and keep policyholders served without growing your operations headcount. Built on Azure with full regulatory audit trail.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From FNOL to adjuster-ready summary — in under two minutes.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What the agent handles across insurance operations.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Process more claims. Detect more fraud. Spend less on ops.</h2>
            <p className="text-background/60 text-base">Insurance AI agents on Azure. Full audit trail. Regulatory-ready. Deployed in 4 weeks.</p>
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
