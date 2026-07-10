'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Workflow, Brain, Zap, ShieldCheck, BarChart3, Repeat2,
  Database, Layers, CheckCircle2, ArrowRight, Clock, ChevronDown, Bot
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01", timeline: "Day 1",
    title: "Brief Your Needs",
    description: "Fill a 5-minute intake form describing your conversational agent goals — customer support, lead qualification, or interactive voice. A Delivery Lead contacts you within 24 hours to clarify constraints.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "Conversation scope mapped upfront"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Developer",
    description: "We surface 2–3 hand-picked Voiceflow developers with production experience in conversation design, intent training, API variables, and CRM handoff scripts. Review profiles and pick your engineer.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your developer works in focused sprints. An Engagement Manager audits every milestone. You get production-grade Voiceflow agent designs ready for web, WhatsApp, or voice channels.",
    bullets: ["Weekly milestone check-ins", "Engagement Manager quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted Voiceflow Developers", desc: "Every developer passes rigorous vetting — conversation state design, variables logic, API step integration, system prompt writing, and fallback routing." },
  { icon: Repeat2, title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every sprint milestone — conversational accuracy, error handling, validation, API safety, and data security." },
  { icon: Zap, title: "Sprint-Based Delivery", desc: "Structured weekly sprints with clear deliverables. Each sprint ends with a working, testable Voiceflow agent — not open-ended hours." },
  { icon: Bot, title: "Conversation Design & NLP", desc: "Specialists in conversational UX, intent parsing, entities configuration, fallback strategies, system instructions, and persona design." },
  { icon: Database, title: "Custom API & Knowledge Base Integration", desc: "Embed your internal APIs, databases, CRM, and custom knowledge libraries directly into Voiceflow via API blocks and dynamic queries." },
  { icon: BarChart3, title: "Testing & Analytics Optimisation", desc: "Configure Voiceflow analytics, test transcripts, and transcript reviews to fine-tune system prompts, identify errors, and increase resolution rate." },
]

const buildItems = [
  { title: "AI Customer Support Agents", desc: "Production-ready Voiceflow chat agents that resolve up to 70% of common customer questions using custom LLM instructions and local knowledge bases." },
  { title: "Lead Qualification & Booking Bots", desc: "Voiceflow agents that interact with prospects, capture key qualifying info, check Calendly availability, and book appointments automatically." },
  { title: "Dynamic API Integrations", desc: "Connect Voiceflow to your custom backends — lookup orders, update shipping info, query databases, or trigger actions in Salesforce, Zendesk, or Slack." },
  { title: "Omnichannel Publishing", desc: "Deploy your Voiceflow agent to multiple frontends — web widgets, custom React wrappers, WhatsApp, Twilio SMS, Discord, or custom apps." },
  { title: "Voice Agents & IVR", desc: "Build voice-activated agents that interact over phone lines, complete with text-to-speech customization, voice pauses, and speech-to-text configurations." },
  { title: "Human-in-the-Loop Handoffs", desc: "Build robust handoff scenarios that route the conversation to live agents on platforms like HubSpot, Zendesk, Intercom, or LiveChat when a bot fails." },
]

const forWho = [
  { title: "Teams Drowning in Support Tickets", desc: "Your support reps spend hours answering the same FAQs. Voiceflow can automate those repetitive queries, freeing your human team for complex issues." },
  { title: "Sales Teams Needing 24/7 Qualification", desc: "You have traffic landing on your site at all hours and need an intelligent AI agent to qualify leads, answer product questions, and book sales calls." },
  { title: "Product Teams Adding Conversational AI", desc: "You are building a chat-based interface for your software and need an expert to architect the logic, variables, and API calls within Voiceflow." },
]

const timeline = [
  { day: "Day 1",   title: "Submit Your Brief",      desc: "Fill a 5-minute intake form. A Delivery Lead calls within 24 hours to scope your conversation flows, tool integrations, and publishing channels." },
  { day: "Day 2–3", title: "Meet Your Shortlist",    desc: "We surface 2–3 Voiceflow developers matched to your domain. Review profiles, join intro calls, choose your fit." },
  { day: "Day 3–4", title: "Milestone Plan Locked",  desc: "You and your developer agree a sprint plan — conversation map, variables structure, API specifications, and fallback criteria." },
  { day: "Week 1+", title: "Sprint & Deliver",       desc: "Your developer builds in focused sprints. Your Engagement Manager audits every milestone. You test working chat/voice agents at each stage." },
  { day: "Ongoing", title: "Scale or Wind Down",     desc: "Add developers, extend sprints, or wind down — no lock-in. You stay because the agents are resolving chats, not because of a contract." },
]

const comparison = [
  { label: "Time to start",    kovil: "24–48 hours",   inhouse: "2–4 months",  agency: "2–4 weeks",   freelancer: "1–2 weeks" },
  { label: "Voiceflow expertise",kovil: "Deep specialist",inhouse: "Hard to find",agency: "Varies widely",freelancer: "Varies" },
  { label: "Managed delivery", kovil: "✓ Always",      inhouse: "✗",           agency: "Partial",     freelancer: "✗" },
  { label: "Risk-free trial",  kovil: "✓ 2 weeks",     inhouse: "✗",           agency: "✗",           freelancer: "Rarely" },
  { label: "Production deploy",kovil: "✓ Included",    inhouse: "Depends",     agency: "Extra cost",  freelancer: "Varies" },
  { label: "IP ownership",     kovil: "100% yours",    inhouse: "100% yours",  agency: "Often shared",freelancer: "Varies" },
]

const faqs = [
  {
    q: "What is Voiceflow and what can a Voiceflow developer build?",
    a: "Voiceflow is a visual development platform for building conversational AI agents for chat and voice channels. It combines LLM prompts, structured conversation maps, variables, and API requests. A Voiceflow developer builds autonomous customer service agents, AI scheduling bots, and voice-controlled IVRs that can read/write data to external databases and hand over to human reps when needed.",
  },
  {
    q: "How quickly can I hire a Voiceflow developer through Kovil AI?",
    a: "Most clients are matched with a vetted Voiceflow specialist within 24–48 hours of submitting their brief. The developer starts on a milestone plan within 3–4 days, and every engagement includes a 2-week risk-free trial.",
  },
  {
    q: "Voiceflow vs basic chatbot tools — what is the difference?",
    a: "Basic tools only support predefined rule trees. Voiceflow combines structured flow logic with LLMs (GPT, Claude) and vector databases (RAG), allowing for highly natural conversations while keeping the agent anchored. It also has a robust SDK and API architecture, letting you trigger database updates, query customer details in real time, and route transcripts to any live chat software.",
  },
  {
    q: "Can Voiceflow interact with custom APIs and databases?",
    a: "Yes. Voiceflow has a dedicated API block that can make GET/POST requests. Our developers build agents that request order statuses, create customer tickets, check scheduling calendars, and save prospect answers straight to your CRM or internal SQL databases.",
  },
  {
    q: "Who owns the conversational code and assets?",
    a: "You do — 100%. All conversational charts, system instructions, variables logic, API configurations, and custom scripts are fully owned by your company. We build directly within your Voiceflow workspace or transfer the project files before completion.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-base pr-4">{item.q}</span>
            <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function VoiceflowDevelopersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Voiceflow Developers</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire a Voiceflow Developer —<br />
            <span className="text-accent">Matched in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Vetted Tier-1 Voiceflow developers embedded into your team. Conversational AI agent design, custom API integrations, dynamic support routing, and CRM handoffs — sprint-delivered, Engagement Manager audited.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire a Voiceflow Developer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="text-sm text-muted-foreground">Two-week risk-free trial. No lock-in.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { stat: "< 48h",   label: "Time to match" },
            { stat: "Top 1%",  label: "Developer tier" },
            { stat: "100%",    label: "IP ownership" },
            { stat: "2 weeks", label: "Risk-free trial" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What They Build */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What They Build</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What Can a Voiceflow Developer Build for You?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Bot className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It's For</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire a Voiceflow Developer Through Kovil AI?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6"
            >
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Layers className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire a Voiceflow Developer with Kovil AI?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all"
              >
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
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire a Voiceflow developer?</h3>
            <p className="text-sm text-muted-foreground">Tell us your conversational AI use case. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0">
              Start Hiring <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What's Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What's Included When You Hire a Voiceflow Developer Through Kovil AI?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">What Should You Expect When Hiring a Voiceflow Developer?</h2>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-[136px] flex flex-col items-end gap-1 pt-1 hidden md:flex">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent bg-accent/10 px-2.5 py-1 rounded-full">{item.day}</span>
                </div>
                <div className="shrink-0 h-3 w-3 rounded-full bg-accent mt-2 hidden md:block ring-4 ring-background z-10" />
                <div className="flex-1 bg-muted/20 border border-border rounded-xl p-5 hover:border-accent/30 transition-colors">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent mb-1 block md:hidden">{item.day}</span>
                  <h3 className="font-display font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
        <h2 className="font-display font-bold text-3xl mb-12">How Does Kovil AI Compare to Other Ways to Hire a Voiceflow Developer?</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground w-40"></th>
                <th className="text-left py-4 px-6 font-bold text-accent">Kovil AI</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">In-House Hire</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Big Agency</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Freelancer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparison.map((row) => (
                <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 text-muted-foreground font-medium">{row.label}</td>
                  <td className="py-4 px-6 font-semibold text-foreground">{row.kovil}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.inhouse}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.agency}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.freelancer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring Voiceflow Developers</h2>
          <div className="max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/hire/ai-agent-developer",    label: "Hire AI Agent Developers", desc: "Autonomous agentic workflows, custom tool integrations" },
            { href: "/hire/llm-engineers",          label: "Hire LLM Engineers",         desc: "RAG systems, fine-tuning, system prompts, LLMOps" },
            { href: "/engage/managed-ai-engineer",  label: "Managed AI Engineer",       desc: "Embedded AI engineer for any AI task" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-border p-5 hover:border-accent/40 hover:bg-muted/20 transition-all group"
            >
              <p className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors">{link.label}</p>
              <p className="text-xs text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your Voiceflow developer?</h2>
            <p className="text-background/60 text-base">Tell us your conversational AI goals. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire a Voiceflow Developer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}
