'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, FileSearch, Scale, Clock, DollarSign, BookOpen, Bell } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  { title: "Contract Review & Extraction", desc: "Ingests contracts in any format and extracts key clauses, obligations, termination rights, payment terms, and risk provisions — surfacing non-standard terms against your firm's approved playbook automatically." },
  { title: "Legal Research Automation", desc: "Searches case law, statutes, regulations, and internal precedent libraries using Azure AI Search — returning cited, structured research memos in minutes rather than hours of associate time." },
  { title: "Matter Management Intelligence", desc: "Monitors open matters for milestone deadlines, budget burn rates, and outstanding tasks — generating automated status summaries for partners and clients without requiring manual updates." },
  { title: "Client Intake Automation", desc: "Handles new matter intake — collecting client information, running conflict checks, generating engagement letters, and routing to the appropriate practice group with all context pre-populated." },
  { title: "Billing Analysis & Write-Down Detection", desc: "Analyses time entry narratives against matter budgets and billing guidelines — flagging likely write-downs, identifying billing inefficiencies, and surfacing realization rate trends by timekeeper and matter type." },
  { title: "Regulatory Change Monitoring", desc: "Monitors regulatory publications, legislative databases, and court dockets for changes relevant to your practice areas — generating client alert drafts and internal briefing notes automatically." },
]

const howItWorks = [
  {
    step: "01",
    title: "Document & Matter System Integration",
    desc: "We connect the agent to your document management system, practice management platform, and matter repository via Azure AI Document Intelligence and the SharePoint Connector — making your firm's institutional knowledge searchable by the agent.",
    bullets: ["SharePoint and iManage document repository connectors", "Azure AI Document Intelligence for contract and brief processing", "Practice management system API integration"],
  },
  {
    step: "02",
    title: "AI-Powered Legal Analysis",
    desc: "Azure OpenAI and Azure AI Search work together to analyse documents, retrieve precedents, and generate structured legal outputs — applying your firm's specific guidelines and risk thresholds as guardrails on every output.",
    bullets: ["Azure OpenAI for contract clause extraction and research memos", "Azure AI Search hybrid retrieval over internal precedent libraries", "Prompt Flow for quality-controlled output generation"],
  },
  {
    step: "03",
    title: "Workflow Integration & Review Gates",
    desc: "Agent outputs are routed directly into your existing matter workflows — with configurable attorney review gates for high-stakes outputs — so the agent accelerates work without bypassing professional judgment.",
    bullets: ["Configurable review gates by matter type and risk level", "Azure API Management for matter system push integration", "Full output provenance and version tracking"],
  },
]

const metrics = [
  { value: "83%", label: "contract review time saved" },
  { value: "12 min", label: "research time (was 4 hrs)" },
  { value: "92%", label: "clause extraction accuracy" },
  { value: "$1.2M", label: "saved per practice/yr" },
]

const techStack = [
  "Azure OpenAI",
  "Azure AI Document Intelligence",
  "Azure AI Search",
  "SharePoint Connector",
  "Azure API Management",
  "Azure Prompt Flow",
]

export default function LegalProfServicesAzurePage() {
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
            <span className="text-foreground">Legal & Professional Services</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Industries · Legal & Professional Services</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            AI agents for legal & professional services.{" "}
            <span className="text-accent">Built on Azure.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            From contract review and legal research to matter management and regulatory monitoring — agents that replace hours of associate time with accurate, cited outputs in minutes. Deployed on Azure with your firm's data staying inside your environment.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Connect your matter systems. Automate the work that doesn't require a lawyer.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What the agent handles across legal and professional services workflows.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Give your lawyers back their time. Automate the rest.</h2>
            <p className="text-background/60 text-base">Legal AI agents on Azure. Your data stays in your tenant. First use case live in 3 weeks.</p>
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
