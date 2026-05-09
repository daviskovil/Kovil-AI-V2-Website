'use client'

import { motion } from "motion/react"
import { Users, Database, Layout, Globe, BarChart3, Shield, CheckCircle2, Clock, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const steps = [
  {
    number: "01",
    timeline: "Days 1–3",
    title: "Agent Design & Topic Mapping",
    description: "We define the agent's purpose, conversation flows, escalation paths, and knowledge sources — producing a topic map and design document that aligns IT, HR, or Ops stakeholders before build begins.",
    bullets: ["Agent scope and persona defined", "Topic and conversation flow mapped", "Knowledge source inventory completed"],
  },
  {
    number: "02",
    timeline: "Days 4–10",
    title: "Build & Azure AI Grounding",
    description: "The Copilot Studio agent is built and connected to Azure AI Search, SharePoint, and your enterprise data sources — grounding every response in your actual organisational knowledge.",
    bullets: ["Copilot Studio agent built and configured", "Azure AI Search knowledge grounding", "SharePoint and data source connections"],
  },
  {
    number: "03",
    timeline: "Days 11–14",
    title: "Teams Deployment & Testing",
    description: "The agent is deployed into Microsoft Teams, tested end-to-end with real user scenarios, conversation analytics configured, and guardrails verified before rollout to your organisation.",
    bullets: ["Microsoft Teams channel published", "End-to-end user acceptance testing", "Conversation analytics dashboard live"],
  },
]

const features = [
  {
    icon: Users,
    title: "Microsoft Teams Integration",
    desc: "Deploy your Copilot Studio agent directly into Microsoft Teams — available to all users in your M365 tenant via the Teams app store or direct installation, with no separate login required.",
  },
  {
    icon: Database,
    title: "Azure AI Search Grounding",
    desc: "Connect the agent to an Azure AI Search index so every answer is grounded in your internal knowledge base — reducing hallucinations and making the agent authoritative for your organisation.",
  },
  {
    icon: Layout,
    title: "SharePoint Data Connection",
    desc: "Ingest and index SharePoint document libraries, wikis, and pages directly into the agent's knowledge — so users get accurate answers from your existing content without any migration.",
  },
  {
    icon: Globe,
    title: "Dynamics 365 Integration",
    desc: "Connect the agent to Dynamics 365 via Power Platform connectors — enabling agents to look up case status, account records, or HR data and surface contextual information mid-conversation.",
  },
  {
    icon: BarChart3,
    title: "Conversation Analytics",
    desc: "Built-in Copilot Studio analytics combined with Azure Application Insights — tracking conversation volume, topic resolution rates, escalation frequency, and satisfaction scores.",
  },
  {
    icon: Shield,
    title: "Enterprise Guardrails",
    desc: "Configure topic avoidance, sensitive information handling, escalation triggers, and content moderation policies — ensuring the agent stays on-topic and compliant with your policies.",
  },
]

const forWho = [
  {
    label: "Microsoft 365 organisations",
    desc: "Companies already running M365 who want AI-powered self-service inside the tools their employees use every day — without adding yet another application to the stack.",
  },
  {
    label: "IT, HR, and Ops teams",
    desc: "Service desk, HR operations, and internal ops teams drowning in repetitive queries — a well-grounded Copilot Studio agent can deflect 40-60% of incoming tickets.",
  },
  {
    label: "Low-code teams without custom dev",
    desc: "Teams who need a capable AI agent but don't have Python or .NET engineers available — Copilot Studio lets you build enterprise-grade agents without a full development team.",
  },
]

export default function CopilotStudioAgentsPage() {
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
            <span className="text-foreground">Copilot Studio Agents</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Copilot Studio Agents</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            AI agents inside Teams. Built in <span className="text-accent">days, not months.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            We build and deploy Copilot Studio agents grounded in your SharePoint, Azure AI Search, and enterprise data — delivered live inside Microsoft Teams within two weeks.
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Designed, grounded, and live in Teams in 14 days.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Enterprise AI inside the tools your team already uses.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to deploy an AI agent inside Microsoft Teams?</h2>
            <p className="text-background/60 text-base">14-day fixed-price engagement. Grounded in your data. Live in Teams by end of sprint.</p>
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
