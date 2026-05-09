'use client'

import { motion } from "motion/react"
import { Lock, Shield, Server, Zap, BarChart3, Code, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const steps = [
  {
    number: "01",
    timeline: "Days 1–3",
    title: "Model Selection & Deployment",
    description: "We select the right Azure OpenAI models for your use case — GPT-4o, o1, or embeddings — and deploy them into your Azure subscription with correct regional configuration and capacity planning.",
    bullets: ["Model selection and capacity planning", "Regional deployment with quota allocation", "Deployment versioning strategy defined"],
  },
  {
    number: "02",
    timeline: "Days 4–10",
    title: "Integration & Security Config",
    description: "Your application is integrated with Azure OpenAI via Managed Identity authentication, Private Endpoints, and Content Safety filters — meeting enterprise security requirements without proxy workarounds.",
    bullets: ["Managed Identity auth configured", "Private Endpoint network topology", "Content Safety filtering enabled"],
  },
  {
    number: "03",
    timeline: "Days 11–14",
    title: "Evaluation & Optimisation",
    description: "We run load tests, evaluate response quality against ground truth datasets, optimise system prompts, and configure token cost monitoring so you go live with confidence.",
    bullets: ["Load and latency benchmarking", "Response quality evaluation", "Token cost monitoring dashboards"],
  },
]

const features = [
  {
    icon: Server,
    title: "Model Deployment & Versioning",
    desc: "Deploy GPT-4o, o1, and embedding models into your Azure subscription with controlled versioning, blue-green deployment support, and capacity reservation planning.",
  },
  {
    icon: Lock,
    title: "Managed Identity Auth",
    desc: "Replace API key authentication with Azure Managed Identity — eliminating secret sprawl, enabling role-based access control, and meeting enterprise security policies.",
  },
  {
    icon: Shield,
    title: "Private Endpoint Config",
    desc: "Route all Azure OpenAI traffic through Azure Private Endpoints — ensuring no LLM traffic traverses the public internet, critical for regulated industries and sensitive data.",
  },
  {
    icon: Zap,
    title: "Content Safety Filtering",
    desc: "Configure Azure AI Content Safety filters at the gateway level — detecting and blocking harmful inputs and outputs with customisable severity thresholds per deployment.",
  },
  {
    icon: BarChart3,
    title: "Token Cost Optimisation",
    desc: "Implement prompt compression, response caching, model routing logic, and Azure Monitor cost dashboards — reducing token spend without sacrificing output quality.",
  },
  {
    icon: Code,
    title: "Prompt Flow Pipeline",
    desc: "Wrap your Azure OpenAI integration in a Prompt Flow pipeline — enabling versioned prompts, batch evaluation, A/B testing, and structured observability across all LLM calls.",
  },
]

const forWho = [
  {
    label: "Azure OpenAI access, no deployment",
    desc: "Teams who have been approved for Azure OpenAI but are still running API calls directly without proper security configuration, monitoring, or cost controls in place.",
  },
  {
    label: "Applications needing GPT-4o or o1",
    desc: "Engineering teams integrating GPT-4o or o1 reasoning models into existing applications — you need proper deployment architecture, not a quick API key swap.",
  },
  {
    label: "Enterprise security requirements",
    desc: "Organisations in financial services, healthcare, or government that must meet strict data residency, network isolation, and access control requirements around LLM usage.",
  },
]

export default function AzureOpenAIIntegrationPage() {
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
            <span className="text-foreground">Azure OpenAI Integration</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Azure OpenAI Integration</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Azure OpenAI. Integrated properly. <span className="text-accent">Production-ready.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We configure Azure OpenAI with enterprise-grade security, private networking, content safety, and cost monitoring — so your LLM integration meets the bar your organisation requires.
          </p>
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
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Secure, evaluated, and live in 14 days.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-muted/20 p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-black text-4xl text-accent/20 leading-none">{step.number}</span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                  <Clock className="h-3 w-3" />{step.timeline}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>
              <ul className="space-y-2">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>What&apos;s Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Every security and quality layer, properly configured.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-6">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${AZURE}1A` }}>
                    <Icon className="h-5 w-5" style={{ color: AZURE }} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>Who It&apos;s For</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Is this engagement right for you?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div key={w.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6">
              <div className="h-8 w-8 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${AZURE}1A` }}>
                <CheckCircle2 className="h-4 w-4" style={{ color: AZURE }} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{w.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Stop running Azure OpenAI without proper security and monitoring.</h2>
            <p className="text-background/60 text-base">14-day fixed-price engagement. Enterprise-grade integration. No open-ended timelines.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                Back to Azure AI Foundry
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
