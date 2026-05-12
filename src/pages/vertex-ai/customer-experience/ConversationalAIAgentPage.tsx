'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, MessageCircle, Users, Globe, ShieldAlert, UserCheck, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const techStack = [
  "Gemini 2.0 Flash",
  "Vertex AI Search",
  "Dialogflow CX",
  "Agent Builder",
  "Cloud Run",
]

const problems = [
  {
    title: "Support teams overwhelmed by repeat queries",
    description: "The same questions — order status, returns, account changes, billing — consume the majority of support team bandwidth, leaving complex issues under-resourced.",
  },
  {
    title: "4+ day response times damaging customer trust",
    description: "High query volume combined with limited support headcount creates multi-day response backlogs that frustrate customers and drive churn.",
  },
  {
    title: "Poor service experience causing customer churn",
    description: "Customers who can't get timely answers leave — research shows 32% of customers stop using a brand after one bad service experience.",
  },
]

const capabilities = [
  {
    icon: MessageCircle,
    title: "Multi-Turn Conversation Management",
    description: "Dialogflow CX manages complex multi-turn conversations with state, context, and memory across the interaction — handling follow-up questions naturally.",
  },
  {
    icon: Users,
    title: "CRM Integration for Live Account Context",
    description: "The agent pulls live account data at query time — order history, subscriptions, past interactions — so customers never repeat themselves.",
  },
  {
    icon: UserCheck,
    title: "Escalation to Human with Full Context",
    description: "When escalation is needed, the human agent receives a full conversation summary, identified issue type, and customer sentiment — no re-explanation required.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Gemini 2.0 Flash supports 40+ languages natively, allowing a single deployment to serve global customers without separate language configurations.",
  },
  {
    icon: ShieldAlert,
    title: "Safety Guardrails",
    description: "Configurable content policies prevent the agent from providing inappropriate advice, making commitments outside policy, or engaging with off-topic requests.",
  },
]

const metrics = [
  { value: "71%", label: "Queries resolved autonomously without human involvement" },
  { value: "3.8 hrs", label: "Average resolution time (was 4.1 days)" },
  { value: "4.6/5", label: "CSAT score maintained post-deployment" },
]

const faqs = [
  {
    q: "How does the agent access real-time account data?",
    a: "We implement CRM integration as part of the deployment — typically connecting to Salesforce, HubSpot, Zendesk, or your custom system via secure API calls made at conversation time. When a customer authenticates (via existing session or short verification), the agent retrieves their account data in real time. Data is never stored in the agent layer — it is fetched per session and discarded afterward.",
  },
  {
    q: "How is the agent kept current as our policies and products change?",
    a: "The agent's knowledge base is grounded in Vertex AI Search, which indexes your internal documentation. When you update a policy document, FAQ, or product guide in your source system, it is re-indexed automatically. Policy changes take effect in the agent within minutes of document update — no manual retraining required for knowledge updates.",
  },
  {
    q: "Can the agent handle authentication-gated actions like processing refunds?",
    a: "Yes. We implement an authentication flow where the agent verifies customer identity through your existing auth system before performing account-level actions. The scope of autonomous actions — what the agent can and cannot do — is fully configurable during implementation. Actions outside approved scope trigger an escalation to a human agent.",
  },
  {
    q: "What channels does the agent support?",
    a: "Dialogflow CX supports deployment across web chat, mobile app, WhatsApp Business, Facebook Messenger, Telephony (IVR), and Google Business Messages. We typically launch on your primary channel first and extend to additional channels in subsequent sprints. Voice deployments use Dialogflow CX's telephony integration with Google's Text-to-Speech and Speech-to-Text APIs.",
  },
]

export default function ConversationalAIAgentPage() {
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
            <span className="text-foreground">Conversational AI Agent</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_BLUE, color: G_BLUE }}>
            Customer Experience
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Conversational AI Customer Service Agent
            <span className="block" style={{ color: G_BLUE }}>Resolve 70%+ of Queries Autonomously</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Autonomous customer service agent handling 70%+ of support queries — powered by Gemini 2.0, grounded in enterprise knowledge via Vertex AI Search, deployed on web and Dialogflow CX. Customers get instant answers; your team handles only the complex cases.
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
            We implement a production-grade conversational AI agent on Google Cloud — integrating Gemini 2.0 with your CRM, grounding it in your internal knowledge via Vertex AI Search, and deploying it via Dialogflow CX to your web, mobile, and messaging channels. The agent handles authentication, account actions, and escalation — fully configurable to your service policies.
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
            Stop making customers wait days for answers. We implement a production-ready Conversational AI agent in 3 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
