'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const capabilities = [
  {
    title: "Teams & Web Chat Deployment",
    desc: "Deploy the same AI agent to Microsoft Teams and your website chat widget simultaneously, with channel-specific formatting and response length tuning handled automatically.",
  },
  {
    title: "Email Thread Understanding",
    desc: "The agent reads full email thread history via Azure Communication Services, summarises prior context, and drafts responses that acknowledge the complete conversation — not just the latest message.",
  },
  {
    title: "Live CRM Context (Dynamics 365)",
    desc: "Before responding, the agent fetches the customer's open cases, purchase history, and account tier from Dynamics 365 in real time, tailoring every interaction to their relationship with your brand.",
  },
  {
    title: "Cross-Channel Conversation Memory",
    desc: "Conversation state is stored in Azure Service Bus and Cosmos DB, so a customer who starts on web chat and follows up via email is recognised and their full history is instantly available.",
  },
  {
    title: "Consistent Brand Voice Guardrails",
    desc: "A configured system prompt enforces your brand's tone, prohibited phrases, escalation language, and response structure across every channel — no variation, no surprises.",
  },
  {
    title: "Seamless Human Handoff with Full Context",
    desc: "When escalation is triggered, the receiving agent gets a structured handoff packet: conversation summary, detected intent, customer tier, and suggested resolution — ready to act immediately.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Channel Integration",
    desc: "Kovil AI connects your web chat, Microsoft Teams, and email channels to a unified Azure Communication Services backend, routing all interactions through a single agent orchestration layer.",
    bullets: [
      "Web chat widget deployed via embeddable JavaScript snippet",
      "Teams bot registered and deployed via Copilot Studio in under a day",
      "Email integration via Azure Communication Services Email with thread parsing",
    ],
  },
  {
    step: "02",
    title: "Unified Context Layer",
    desc: "A shared context store in Azure Cosmos DB and Azure Service Bus maintains conversation state across channels, ensuring the agent always has the full picture regardless of where the customer reaches out.",
    bullets: [
      "Customer identity resolved via email, Teams UPN, or CRM contact match",
      "Conversation history persisted with 90-day retention and GDPR-compliant deletion",
      "Real-time Dynamics 365 lookup enriches context at conversation start",
    ],
  },
  {
    step: "03",
    title: "Brand Voice Configuration",
    desc: "We work with your brand team to configure the agent's system prompt, response templates, and guardrails — then validate consistency across 300+ test scenarios spanning all channels before go-live.",
    bullets: [
      "Brand voice document translated into structured system prompt constraints",
      "Prohibited phrase list and required disclaimer enforcement",
      "Monthly red-team testing to verify guardrails remain effective post-launch",
    ],
  },
]

const metrics = [
  { value: "4 channels", label: "Unified" },
  { value: "<30s", label: "Context load time" },
  { value: "92%", label: "Brand consistency" },
  { value: "Zero", label: "Context loss on handoff" },
]

const techStack = [
  "Copilot Studio",
  "Azure Communication Services",
  "Dynamics 365",
  "Azure OpenAI",
  "Azure Service Bus",
  "Application Insights",
]

export default function OmnichannelEngagementAgentPage() {
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
            <Link href="/azure-ai-foundry/customer-experience" className="hover:text-foreground transition-colors">Customer Experience</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Omnichannel Engagement Agent</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Customer Experience · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            One AI agent. Every channel.{" "}
            <span className="text-accent">Consistent every time.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Kovil AI builds Azure-native omnichannel agents that unify Teams, web chat, and email under a single AI layer — with shared conversation memory, live CRM context from Dynamics 365, and consistent brand voice enforced across every touchpoint.
          </p>

          {/* Metrics strip */}
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">One agent, every channel, zero context loss.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Deliver one seamless experience across every channel.</h2>
            <p className="text-background/60 text-base">Book a call to map out your current channel fragmentation and see how quickly we can unify them under one AI agent.</p>
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
