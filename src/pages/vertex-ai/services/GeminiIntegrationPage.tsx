'use client'

import { motion } from "motion/react"
import { Zap, Globe, Database, Wrench, FlaskConical, DollarSign, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const steps = [
  {
    number: "01",
    timeline: "Week 1",
    title: "Integration Architecture",
    description: "We design the integration foundation — selecting the right Gemini model (Flash vs Pro), defining grounding strategy with Google Search or enterprise data, and architecting function calling and tool use patterns for your use case.",
    bullets: ["Gemini Flash vs Pro selection for your workload", "Grounding strategy — Google Search vs enterprise data", "Function calling and tool use architecture design"],
  },
  {
    number: "02",
    timeline: "Weeks 2–3",
    title: "Build & Evaluate",
    description: "We build the integration end-to-end — wiring the Vertex AI API, configuring grounding, building the evaluation pipeline, and applying safety filters before any production traffic touches the model.",
    bullets: ["Vertex AI Gemini API integration and testing", "Grounding configuration and evaluation pipeline", "Safety filters and content moderation setup"],
  },
  {
    number: "03",
    timeline: "Week 4+",
    title: "Deploy & Optimise",
    description: "We deploy to production, wire up token cost monitoring, and run prompt optimisation cycles to maximise quality-per-dollar as usage scales across your team or product.",
    bullets: ["Production deployment on Vertex AI", "Token cost monitoring and alerting", "Prompt optimisation and model evaluation cycles"],
  },
]

const features = [
  {
    icon: FlaskConical,
    title: "Gemini Model Selection & Evaluation",
    desc: "Rigorous benchmarking of Gemini Flash, Pro, and Ultra variants against your actual workload — latency, accuracy, cost, and context window — so you pick the right model from day one.",
  },
  {
    icon: Globe,
    title: "Grounding with Google Search",
    desc: "Connect Gemini to live Google Search results using the Vertex AI Grounding API, dramatically reducing hallucinations and keeping responses current without manual knowledge-base maintenance.",
  },
  {
    icon: Database,
    title: "Enterprise Data Grounding via Vertex AI Search",
    desc: "Ground Gemini responses in your proprietary documents, databases, and knowledge bases using Vertex AI Search datastores — keeping sensitive data within your GCP environment.",
  },
  {
    icon: Wrench,
    title: "Function Calling & Tool Use",
    desc: "Build Gemini integrations that call external APIs, execute database queries, trigger workflows, and use tools — turning Gemini from a text generator into an action-taking agent.",
  },
  {
    icon: Zap,
    title: "Fine-Tuning on Proprietary Data",
    desc: "Supervised fine-tuning of Gemini models on your domain-specific data using Vertex AI — improving response quality and domain knowledge without sharing your data with Google.",
  },
  {
    icon: DollarSign,
    title: "Token Cost Optimisation",
    desc: "Systematic prompt compression, caching strategy, and model tier selection to reduce Gemini API spend by 30–60% while maintaining or improving response quality.",
  },
]

const forWho = [
  {
    label: "Teams wanting to integrate Gemini into products",
    desc: "Engineering teams building Gemini-powered features into their SaaS products or internal tools — you need a production-grade integration with grounding, safety, and cost controls from the start.",
  },
  {
    label: "Engineers replacing OpenAI with Google models",
    desc: "Teams migrating from GPT-4 or Claude to Gemini on Vertex AI — you need expert guidance on model parity, prompt adaptation, and cost optimisation during the transition.",
  },
  {
    label: "Organisations with sensitive data needing enterprise grounding",
    desc: "Enterprises that cannot send proprietary data to external search APIs — you need Gemini grounded in your internal documents within GCP's VPC Service Controls perimeter.",
  },
]

export default function GeminiIntegrationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/vertex-ai" className="hover:text-foreground transition-colors">Vertex AI</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Gemini Integration & Fine-Tuning</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: G_BLUE }}>Gemini Integration & Fine-Tuning</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Production Gemini integrations, <span className="text-accent">grounded and optimised.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We build production-grade Gemini 2.0 integrations on Vertex AI — with Google Search grounding, enterprise data grounding, function calling, fine-tuning, and token cost controls baked in from day one.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/vertex-ai">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                Back to Vertex AI
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: G_BLUE }}>How It Works</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From model selection to production in four weeks.</h2>
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
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: G_BLUE }}>What&apos;s Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Every layer of a production Gemini integration.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-6">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${G_BLUE}1A` }}>
                    <Icon className="h-5 w-5" style={{ color: G_BLUE }} />
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
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: G_BLUE }}>Who It&apos;s For</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Is this engagement right for you?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div key={w.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6">
              <div className="h-8 w-8 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${G_BLUE}1A` }}>
                <CheckCircle2 className="h-4 w-4" style={{ color: G_BLUE }} />
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to put Gemini into production with proper grounding and cost controls?</h2>
            <p className="text-background/60 text-base">Four-week build. Production-grade output. Token costs monitored from day one.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/vertex-ai">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                Back to Vertex AI
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
