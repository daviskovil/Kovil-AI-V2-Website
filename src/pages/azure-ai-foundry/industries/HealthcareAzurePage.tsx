'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Shield, FileText, Heart, Users, Database, ClipboardList } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"

const capabilities = [
  { title: "Patient Intake & Pre-Auth Automation", desc: "Handles end-to-end patient intake workflows and prior authorisation requests — extracting data from insurance forms, matching against payer requirements, and submitting automatically." },
  { title: "Clinical Documentation Assistance", desc: "Listens to clinical conversations and generates structured SOAP notes, referral letters, and discharge summaries — reducing documentation burden so clinicians focus on patients." },
  { title: "EHR Data Extraction & Normalisation", desc: "Connects to Epic, Cerner, and other EHR systems via FHIR APIs to extract, normalise, and enrich patient records — enabling analytics and downstream agent workflows." },
  { title: "Prior Authorisation Processing", desc: "Automates the preparation, submission, and follow-up of prior auth requests — integrating with payer portals and surfacing denial patterns to optimise approval rates over time." },
  { title: "Discharge Planning Coordination", desc: "Identifies discharge-ready patients, coordinates with post-acute care providers, generates care transition summaries, and flags social determinants of health for care managers." },
  { title: "Clinical Trial Matching", desc: "Screens patient records against active clinical trial eligibility criteria in real time — surfacing match notifications to physicians and research coordinators at the point of care." },
]

const howItWorks = [
  {
    step: "01",
    title: "HIPAA-Compliant Data Integration",
    desc: "We connect the agent to your EHR, patient management systems, and payer portals via Azure Health Data Services and Azure API Management — with BAA-covered infrastructure throughout.",
    bullets: ["FHIR R4 API connectors for Epic, Cerner, and others", "Azure Health Data Services as the HIPAA-compliant data layer", "Encrypted data pipelines with PHI access controls"],
  },
  {
    step: "02",
    title: "Clinical Intelligence Processing",
    desc: "Azure OpenAI processes clinical notes, insurance documents, and patient intake forms — extracting structured data, identifying care gaps, and generating human-readable outputs for clinical staff.",
    bullets: ["Azure AI Document Intelligence for form and fax processing", "Azure OpenAI for clinical note generation", "Azure AI Search for evidence-based knowledge retrieval"],
  },
  {
    step: "03",
    title: "Governance & Compliance Reporting",
    desc: "Every agent action touching PHI is logged with full provenance in Azure Monitor — enabling HIPAA audit readiness, breach investigation support, and compliance reporting for healthcare leadership.",
    bullets: ["Immutable PHI access logs in Azure Monitor", "Azure Policy enforcement for data residency", "Configurable human review gates for clinical decisions"],
  },
]

const metrics = [
  { value: "68%", label: "pre-auth automated" },
  { value: "22 hrs", label: "saved/facility/week" },
  { value: "4.7/5", label: "patient satisfaction" },
  { value: "100%", label: "HIPAA-aligned" },
]

const techStack = [
  "Azure OpenAI",
  "Azure Health Data Services",
  "Azure AI Document Intelligence",
  "Azure API Management",
  "Azure AI Search",
  "Azure Policy",
]

export default function HealthcareAzurePage() {
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
            <span className="text-foreground">Healthcare & Life Sciences</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Industries · Healthcare</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            AI agents for healthcare.{" "}
            <span className="text-accent">Built on Azure. HIPAA-ready.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Intelligent agents that handle prior auth, clinical documentation, EHR extraction, and discharge coordination — reducing administrative burden on clinical staff while maintaining the compliance and security standards healthcare demands.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">HIPAA-compliant AI that integrates with your clinical systems.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What the agent handles across clinical and administrative workflows.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Reduce administrative burden. Improve patient outcomes.</h2>
            <p className="text-background/60 text-base">HIPAA-aligned AI agents on Azure Health Data Services. BAA available. Clinical deployment in 4–6 weeks.</p>
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

      <AzurePracticeNavigation currentPath="/azure-ai-foundry/industries/healthcare-life-sciences" />
    </div>
  )
}
