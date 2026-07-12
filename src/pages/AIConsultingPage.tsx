'use client'

import { motion } from "motion/react"
import { ArrowRight, Bot, Shield, Zap, CheckCircle2, Terminal, Code2, Users, DollarSign } from "lucide-react"
import { Button } from "../components/ui/button"
import Link from "next/link"
import { openCalendly } from "../lib/calendly"
import { OnboardingModal } from "../components/OnboardingModal"

const services = [
  {
    icon: Bot,
    title: "AI Strategy & Feasibility",
    desc: "We analyze your business processes, audit your existing data, and design the right AI model architecture. We help you choose between OpenAI, Anthropic, Gemini, or self-hosted open-source models (Llama 3, Mistral) based on cost, latency, and compliance constraints."
  },
  {
    icon: Code2,
    title: "Custom RAG & Search Systems",
    desc: "Secure Retrieval-Augmented Generation (RAG) pipelines connected to your internal documents, databases, and enterprise applications. We design custom chunking, hybrid search indexing, and evaluation frameworks using Pinecone, Qdrant, and PGVector."
  },
  {
    icon: Terminal,
    title: "AI Agent Orchestration",
    desc: "Deploy stateful, autonomous AI agents capable of executing complex workflows, handling multi-step reasoning, and calling external APIs. Built on production-grade frameworks like LangGraph and CrewAI to ensure reliability beyond simple chat prototypes."
  },
  {
    icon: DollarSign,
    title: "LLMOps & Cost Optimization",
    desc: "Production AI monitoring, prompt engineering, drift detection, and cost optimization. We set up token budget routing that routes simple queries to cheap models and reserves premium models for complex reasoning, cutting API bills by 40-70%."
  }
]

const steps = [
  {
    num: "01",
    title: "Scope in 48 Hours",
    desc: "We work with your team to define technical requirements, model choices, and data privacy needs. We deliver a detailed product roadmap and a fixed-price outcome quote."
  },
  {
    num: "02",
    title: "Assemble Vetted Experts",
    desc: "We match your project with elite, pre-vetted AI engineers and prompt developers within 24-48 hours. Every squad is paired with a dedicated Engagement Manager."
  },
  {
    num: "03",
    title: "Milestone-Gated Sprints",
    desc: "We build and ship in 2-week sprints. You review and approve the working code of each milestone before we start the next one. Pay only for done, approved work."
  }
]

const faqs = [
  {
    q: "Who owns the IP developed during the AI consulting engagement?",
    a: "You do. 100% of all code, prompts, models, configurations, and evaluation datasets developed during the project belong to your company under our standard contract."
  },
  {
    q: "How does Kovil AI handle data privacy and security?",
    a: "We design all systems with compliance in mind (SOC2, HIPAA, GDPR). We build secure data ingestion pipelines, enforce strict boundary guardrails, and can configure systems using private VPC deployments or self-hosted models to prevent any training leak."
  },
  {
    q: "What is the difference between staff augmentation and consulting projects?",
    a: "Staff augmentation embeds a vetted AI engineer directly into your team under your management (starts with a 2-week risk-free trial). Consulting projects are outcome-based builds where Kovil AI scopes, manages, and delivers a complete production AI system for a fixed price agreed upfront."
  },
  {
    q: "How quickly can your consulting team kick off?",
    a: "We can complete scoping and matching within 48-72 hours. Most client projects kickoff and begin development within 7 days of intake."
  }
]

const GRID_BG = { backgroundImage: 'linear-gradient(#1e293b 1px,transparent 1px),linear-gradient(90deg,#1e293b 1px,transparent 1px)', backgroundSize: '40px 40px' }

export default function AIConsultingPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#090d16] text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.25]" style={GRID_BG} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090d16]/70 to-[#090d16]" />
        
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Enterprise AI Consulting</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Vetted AI Consulting<br />
              <span className="text-accent">Company &amp; Agency</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              We design, build, and deploy production-grade artificial intelligence systems. From secure enterprise RAG pipelines to autonomous multi-agent workflows — delivered at a fixed price or scale with embedded AI engineers in 48 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <OnboardingModal defaultGoal="project">
                <Button variant="accent" size="lg" className="rounded-full px-8">
                  Get a Fixed-Price Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </OnboardingModal>
              <button onClick={openCalendly} className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent hover:bg-slate-800 text-white font-medium px-8 py-3 transition-colors">
                Book a Call
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-slate-950/50 border border-slate-900 rounded-2xl p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-bold text-accent mb-2">48 Hrs</p>
              <p className="text-sm text-slate-400">Match time for vetted AI engineering squads</p>
            </div>
            <div className="bg-slate-950/50 border border-slate-900 rounded-2xl p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-bold text-accent mb-2">42%</p>
              <p className="text-sm text-slate-400">Average token cost savings from prompt optimization</p>
            </div>
            <div className="bg-slate-950/50 border border-slate-900 rounded-2xl p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-bold text-accent mb-2">2 Weeks</p>
              <p className="text-sm text-slate-400">Risk-free trial with free engineer rematching</p>
            </div>
            <div className="bg-slate-950/50 border border-slate-900 rounded-2xl p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-bold text-accent mb-2">Zero</p>
              <p className="text-sm text-slate-400">Delivery risk: milestone-gated payout approvals</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-mono text-accent uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Our AI Consulting Capabilities</h2>
          <p className="mt-4 text-slate-400">
            We don't just write slide decks. We construct working code, configure MLOps pipelines, and build production applications that drive operational metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="bg-slate-950/40 border border-slate-900 rounded-2xl p-8 hover:border-slate-800 transition-colors flex gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 h-fit text-accent">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-950/40 border-t border-b border-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-2">Our Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">How We Deliver AI Systems</h2>
            <p className="mt-4 text-slate-400">
              Traditional consulting firms take 6 months to deliver blueprints. We use a milestone-gated process to build, validate, and ship working code in weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-8 relative overflow-hidden">
                <span className="absolute top-4 right-6 text-7xl font-bold text-slate-950/50 font-display select-none">{s.num}</span>
                <h3 className="font-display text-lg font-bold mb-4 relative z-10">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Why Kovil AI?</h2>
          <p className="mt-4 text-slate-400">
            Compare our managed delivery model to standard AI consulting alternatives:
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-900 bg-slate-950/30">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-900 bg-slate-950/60">
                <th className="p-4 font-semibold text-slate-300">Dimension</th>
                <th className="p-4 font-semibold text-accent">Kovil AI</th>
                <th className="p-4 font-semibold text-slate-400">Standard Consulting Firm</th>
                <th className="p-4 font-semibold text-slate-400">Freelance Marketplace</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-900/60 hover:bg-slate-900/10">
                <td className="p-4 font-medium text-slate-200">Delivery Risk</td>
                <td className="p-4 text-slate-300 font-semibold"><CheckCircle2 className="inline h-4 w-4 text-accent mr-1.5" /> Zero (Milestone Gated)</td>
                <td className="p-4 text-slate-500">High (Hourly or upfront retainers)</td>
                <td className="p-4 text-slate-500">Very High (No vetting, low accountability)</td>
              </tr>
              <tr className="border-b border-slate-900/60 hover:bg-slate-900/10">
                <td className="p-4 font-medium text-slate-200">Match Speed</td>
                <td className="p-4 text-slate-300 font-semibold"><CheckCircle2 className="inline h-4 w-4 text-accent mr-1.5" /> 24-48 Hours</td>
                <td className="p-4 text-slate-500">4-8 Weeks</td>
                <td className="p-4 text-slate-500">1-2 Weeks (Requires self-vetting)</td>
              </tr>
              <tr className="border-b border-slate-900/60 hover:bg-slate-900/10">
                <td className="p-4 font-medium text-slate-200">Management Overhead</td>
                <td className="p-4 text-slate-300 font-semibold"><CheckCircle2 className="inline h-4 w-4 text-accent mr-1.5" /> Paired Engagement Manager</td>
                <td className="p-4 text-slate-500">Weekly status reviews only</td>
                <td className="p-4 text-slate-500">None (You manage them daily)</td>
              </tr>
              <tr className="hover:bg-slate-900/10">
                <td className="p-4 font-medium text-slate-200">Pricing Model</td>
                <td className="p-4 text-slate-300 font-semibold"><CheckCircle2 className="inline h-4 w-4 text-accent mr-1.5" /> Fixed-price roadmaps</td>
                <td className="p-4 text-slate-500">High monthly retainers</td>
                <td className="p-4 text-slate-500">Varying hourly rates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 border-t border-slate-900">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-900 pb-6">
              <h3 className="font-display text-lg font-semibold mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-slate-950 to-slate-900 py-24 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Ready to Scale Your AI Capability?</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Get matched with pre-vetted AI consultants and developers in 48 hours. Let's discuss your roadmap on a free strategy call.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <OnboardingModal defaultGoal="project">
              <Button variant="accent" size="lg" className="rounded-full px-8">
                Scope Your AI Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <button onClick={openCalendly} className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent hover:bg-slate-800 text-white font-medium px-8 py-3 transition-colors">
              Book Discovery Call
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
