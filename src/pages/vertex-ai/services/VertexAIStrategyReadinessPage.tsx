'use client'

import { motion } from "motion/react"
import { ClipboardList, BarChart3, Shield, Database, FileText, GitBranch, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const steps = [
  {
    number: "01",
    timeline: "Days 1–3",
    title: "GCP Environment Audit",
    description: "We perform a deep technical assessment of your Google Cloud environment — mapping existing GCP services, Vertex AI access and quotas, data estate readiness, IAM posture, and current AI spend across your projects.",
    bullets: ["GCP project and service inventory", "Vertex AI quota and API access review", "IAM posture and data estate assessment"],
  },
  {
    number: "02",
    timeline: "Days 4–7",
    title: "Use Case Prioritisation & Gemini Model Selection",
    description: "Every high-ROI Vertex AI use case is identified, scored against ROI and feasibility, and matched to the right Gemini model from the Model Garden — giving you a clear, funded activation sequence.",
    bullets: ["Use cases ranked by ROI and feasibility", "Gemini model selection from Model Garden", "Effort vs. impact prioritisation matrix"],
  },
  {
    number: "03",
    timeline: "Day 10",
    title: "Architecture Blueprint Delivery",
    description: "You receive a detailed Vertex AI architecture blueprint — covering agent architecture, Vertex AI Search indexing strategy, BigQuery ML integration plan, cost model, and a phased implementation roadmap.",
    bullets: ["Agent architecture blueprint document", "Vertex AI Search and BigQuery ML plan", "Cost model and phased implementation roadmap"],
  },
]

const features = [
  {
    icon: ClipboardList,
    title: "GCP Environment Assessment",
    desc: "Comprehensive review of your Google Cloud projects, existing Vertex AI deployments, API quotas, networking configuration, and current AI service spend across your GCP organisation.",
  },
  {
    icon: Database,
    title: "Data Estate Readiness",
    desc: "Evaluate your data sources — BigQuery, Cloud Storage, AlloyDB, Firestore — against what Vertex AI agents need to ground Gemini responses in accurate, fresh enterprise data.",
  },
  {
    icon: BarChart3,
    title: "Use Case ROI Mapping",
    desc: "Identify and rank every high-value AI agent opportunity across your business, with effort estimates, expected ROI, and a recommended implementation sequence tied to Vertex AI capabilities.",
  },
  {
    icon: GitBranch,
    title: "Model Selection Framework",
    desc: "Determine which Gemini model — Flash, Pro, or Ultra — is right for each use case based on latency, cost, context window, and multimodal requirements from the Vertex AI Model Garden.",
  },
  {
    icon: FileText,
    title: "Cost Modelling",
    desc: "Model token costs, compute requirements, and GCP infrastructure spend for your prioritised use cases so you can budget accurately before committing to development.",
  },
  {
    icon: Shield,
    title: "Security & Compliance Review",
    desc: "Assess your GCP IAM configuration, VPC Service Controls, data residency posture, and Vertex AI safety settings against enterprise AI security best practices and regulatory requirements.",
  },
]

const forWho = [
  {
    label: "GCP users with no production agents",
    desc: "Organisations with Vertex AI access and budget approval but no production AI agents deployed — you need a defensible GCP AI roadmap before spending on development.",
  },
  {
    label: "CTOs needing a GCP AI roadmap",
    desc: "Technical leaders who must present a credible, board-ready Vertex AI strategy with phased milestones, resource requirements, and measurable ROI projections grounded in your actual GCP environment.",
  },
  {
    label: "Teams comparing Vertex AI vs Azure OpenAI",
    desc: "Engineering and architecture teams evaluating whether to build on Vertex AI or Azure — you need a technical assessment that maps your current GCP footprint to AI agent capabilities.",
  },
]

export default function VertexAIStrategyReadinessPage() {
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
            <span className="text-foreground">Strategy & Readiness</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: G_BLUE }}>Vertex AI Strategy & Readiness</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Turn your GCP environment into a <span className="text-accent">live AI strategy.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We audit your Google Cloud environment, identify your highest-ROI Vertex AI opportunities, and deliver a production-ready architecture blueprint — in 10 days.
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From audit to blueprint in 10 days.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Everything you need to make the right AI decision.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to turn your GCP environment into a working AI strategy?</h2>
            <p className="text-background/60 text-base">10-day fixed-price engagement. Blueprint delivered. No open-ended consulting.</p>
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
