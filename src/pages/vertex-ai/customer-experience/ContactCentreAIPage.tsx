'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Headphones, FileText, Filter, PhoneForwarded, Activity, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const techStack = [
  "Google CCAI",
  "Dialogflow CX",
  "Gemini 2.0",
  "Speech-to-Text",
  "Agent Assist",
]

const problems = [
  {
    title: "30% of agent time lost to after-call work",
    description: "Contact centre agents spend nearly a third of their productive time writing call summaries, updating CRM records, and completing post-call administration.",
  },
  {
    title: "Inconsistent agent performance",
    description: "Newer or less experienced agents handle identical queries differently, creating service inconsistency that erodes customer trust and increases complaint rates.",
  },
  {
    title: "High handle times on complex queries",
    description: "Agents working complex queries without real-time guidance take significantly longer than experienced colleagues — increasing cost per call and frustrating customers.",
  },
]

const capabilities = [
  {
    icon: Headphones,
    title: "Real-Time Agent Assist Suggestions",
    description: "Agent Assist listens to live calls and surfaces relevant knowledge articles, suggested responses, and recommended next actions — in real time, on the agent's screen.",
  },
  {
    icon: FileText,
    title: "Automated Call Summarisation",
    description: "Gemini generates accurate call summaries and CRM-ready notes automatically at call end — eliminating after-call work and ensuring consistent documentation.",
  },
  {
    icon: Filter,
    title: "Intent Classification",
    description: "Dialogflow CX classifies caller intent at the start of the interaction, routing calls to the right agent group and surfacing relevant context before the agent picks up.",
  },
  {
    icon: PhoneForwarded,
    title: "IVR Deflection for Routine Queries",
    description: "Dialogflow CX handles common self-service queries — account balance, order status, appointment booking — in the IVR layer before reaching a human agent.",
  },
  {
    icon: Activity,
    title: "Sentiment Analysis and Escalation Triggers",
    description: "Real-time sentiment analysis detects frustrated or escalating customers and triggers priority routing, supervisor alerts, or empathy prompts for the agent.",
  },
]

const metrics = [
  { value: "43%", label: "Reduction in average handle time" },
  { value: "28%", label: "Reduction in after-call work time" },
  { value: "94%", label: "Call summary accuracy rate" },
]

const faqs = [
  {
    q: "Does this replace our contact centre platform or integrate with it?",
    a: "Google CCAI integrates with your existing telephony and contact centre platform. It supports native integration with Genesys, Avaya, Cisco, Amazon Connect, and Twilio. Agent Assist surfaces inside your existing agent desktop — agents see suggestions without leaving their current workflow. We do not replace your existing platform; we augment it with AI capabilities.",
  },
  {
    q: "How accurate is the automated call summarisation?",
    a: "Our clients achieve 94%+ summary accuracy as reported by agents reviewing auto-generated notes. Gemini uses the full call transcript to generate structured summaries covering: issue type, resolution taken, follow-up actions, and customer sentiment. Summaries are editable before CRM submission, so agents can correct the small percentage of cases where the summary requires adjustment.",
  },
  {
    q: "How does Agent Assist avoid distracting agents with irrelevant suggestions?",
    a: "Agent Assist uses intent classification and conversation context to surface suggestions only when relevant. Suggestion relevance thresholds are configurable — you can set how confident the system must be before surfacing a suggestion. In our implementations, agents report that 85%+ of surfaced suggestions are immediately useful, and agents can hide the panel for calls where they prefer to work unassisted.",
  },
  {
    q: "What languages does the speech recognition support?",
    a: "Google's Speech-to-Text API supports 125+ languages and variants. CCAI's real-time transcription and Agent Assist work across all supported languages. If your contact centre serves customers in multiple languages, we configure language detection at call start so the appropriate models and knowledge bases are activated for each interaction.",
  },
]

export default function ContactCentreAIPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai" className="hover:text-foreground transition-colors">Vertex AI</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai/customer-experience" className="hover:text-foreground transition-colors">Customer Experience</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">Contact Centre AI</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_BLUE, color: G_BLUE }}>
            Customer Experience
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Contact Centre AI
            <span className="block" style={{ color: G_BLUE }}>Agent Assist &amp; Automation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Google Cloud Contact Centre AI (CCAI) implementation — real-time agent assist, automated call summarisation, intent detection, and IVR deflection using Dialogflow CX and Gemini. Reduce handle times while improving service quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={openCalendly} size="lg" style={{ backgroundColor: G_BLUE }} className="text-white hover:opacity-90">
              Build This for Your Organisation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/vertex-ai">Explore Vertex AI Services</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* What We Build */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4">What We Build</h2>
          <p className="text-muted-foreground max-w-3xl mb-6">
            We implement Google's Contact Centre AI stack on your existing telephony infrastructure — configuring Dialogflow CX for IVR and intent classification, deploying Agent Assist to your agent desktop, and connecting Gemini's summarisation to your CRM. Implementation takes 4–6 weeks and works alongside your existing contact centre platform without requiring a platform migration.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: G_BLUE, color: G_BLUE, backgroundColor: `${G_BLUE}10` }}>
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* The Problem It Solves */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">The Problem It Solves</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="rounded-xl border bg-card p-6">
                <div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: G_BLUE }} />
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What You Get */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">What You Get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="rounded-xl border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${G_BLUE}15` }}>
                    <Icon className="w-5 h-5" style={{ color: G_BLUE }} />
                  </div>
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Business Impact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">Business Impact</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border bg-card p-8 text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: G_BLUE }}>{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border bg-card p-6">
                <h3 className="font-semibold mb-3 flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: G_BLUE }} />
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl p-10 text-center text-white"
          style={{ background: `linear-gradient(135deg, ${G_BLUE} 0%, #1a73e8 100%)` }}>
          <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Build This for Your Organisation</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Cut handle time, eliminate after-call work, and help every agent perform like your best. We implement CCAI in 4–6 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
