import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Agent Development | Autonomous AI Agents Built for Production',
  description: 'Kovil AI builds production-grade AI agents — single-purpose task agents, multi-agent systems, and human-in-the-loop workflows. 150+ deployments. Fixed-price delivery.',
  keywords: ['AI agent development', 'build AI agent', 'autonomous AI agents', 'LangGraph development', 'multi-agent systems', 'AI agent company'],
  openGraph: {
    title: 'AI Agent Development | Autonomous AI Agents Built for Production | Kovil AI',
    description: 'Production-grade AI agents for workflow automation, research, and decision-making. 150+ deployments. Fixed-price.',
    url: 'https://kovil.ai/ai-agent-development',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/tech-ai-agent-development.webp', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'AI Agent Development | Kovil AI', description: 'Production AI agents that actually work.' },
  alternates: { canonical: 'https://kovil.ai/ai-agent-development' },
  robots: { index: true, follow: true },
}

const orgSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI',
  url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp',
  description: 'Managed AI engineering firm specialising in autonomous AI agent development.',
  address: { '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' },
  contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' },
  sameAs: ['https://www.linkedin.com/company/kovil-ai/'],
}
const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'AI Agent Development', item: 'https://kovil.ai/ai-agent-development' },
  ],
}
const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'AI Agent Development',
  provider: { '@type': 'Organization', name: 'Kovil AI' },
  description: 'Production-grade autonomous AI agent development — single agents, multi-agent systems, and human-in-the-loop workflows.',
  serviceType: 'AI Agent Development', areaServed: 'Worldwide',
}
const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an AI agent?', acceptedAnswer: { '@type': 'Answer', text: 'An AI agent is an autonomous system powered by a large language model that can plan, use tools, take actions, and complete multi-step tasks without constant human input. Unlike a chatbot that answers questions, an agent can browse the web, query databases, call APIs, write and run code, and execute complete workflows.' } },
    { '@type': 'Question', name: 'What frameworks do you use for AI agent development?', acceptedAnswer: { '@type': 'Answer', text: 'LangGraph for stateful graph-based agents, CrewAI for multi-agent team orchestration, AutoGen for Microsoft ecosystem agents, and custom ReAct implementations when we need maximum control. We choose the framework based on your use case, reliability requirements, and production constraints.' } },
    { '@type': 'Question', name: 'How do you prevent AI agents from going off the rails in production?', acceptedAnswer: { '@type': 'Answer', text: 'Every agent we build includes multiple layers of guardrails: output validation schemas, tool use constraints (agents can only call pre-approved tools), token and step budget limits, human-in-the-loop approval gates for high-risk actions, comprehensive structured logging, and production monitoring with alerting. Reliability is a first-class design requirement, not an afterthought.' } },
    { '@type': 'Question', name: 'Can you build multi-agent systems?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Multi-agent systems where specialised agents collaborate under a coordinator are a Kovil AI specialty. We have built legal document review pipelines, financial data extraction systems, and research automation platforms using multi-agent architectures.' } },
    { '@type': 'Question', name: 'What is the difference between an AI agent and a chatbot?', acceptedAnswer: { '@type': 'Answer', text: 'A chatbot responds to user questions with text. An AI agent takes real actions: it can call external APIs, query databases, write and execute code, send emails, fill forms, and complete multi-step workflows that span hours or days. Agents are goal-oriented and autonomous; chatbots are reactive and conversational.' } },
    { '@type': 'Question', name: 'How long does it take to build an AI agent?', acceptedAnswer: { '@type': 'Answer', text: 'A focused single-purpose agent can be built and deployed to production in 2 to 4 weeks. Complex multi-agent systems with extensive tool integrations, approval workflows, and enterprise-grade reliability typically take 6 to 12 weeks.' } },
    { '@type': 'Question', name: 'Do you build agents that work with proprietary or sensitive data?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We design agents with data security as a core requirement: no training data leakage, proper secrets management, role-based access controls, and audit logging for every tool call. We can also deploy on private infrastructure if your compliance requirements demand it.' } },
    { '@type': 'Question', name: 'What does a production-ready AI agent include that a demo does not?', acceptedAnswer: { '@type': 'Answer', text: 'A production agent includes: comprehensive error handling and retry logic, structured logging of every decision and tool call, guardrails that constrain what the agent can and cannot do, monitoring and alerting, graceful degradation when external tools fail, human-in-the-loop checkpoints for high-stakes actions, and a defined rollback plan. Most demos have none of this.' } },
  ],
}

const frameworks = [
  { name: 'LangGraph', bestFor: 'Stateful, cyclical agent workflows', maturity: 'High', complexity: 'Medium', ourTake: 'Go-to for complex, long-running production agents' },
  { name: 'CrewAI', bestFor: 'Multi-agent team orchestration', maturity: 'Medium', complexity: 'Low', ourTake: 'Best for fast multi-agent prototyping and delivery' },
  { name: 'AutoGen', bestFor: 'Microsoft ecosystem and enterprise agents', maturity: 'High', complexity: 'Medium', ourTake: 'Strong choice when MS stack is required' },
  { name: 'Custom ReAct', bestFor: 'Mission-critical, full-control systems', maturity: 'N/A', complexity: 'High', ourTake: 'When reliability demands outweigh framework convenience' },
]

const agentTypes = [
  { icon: '⚙️', title: 'Task Automation Agents', desc: 'Agents that handle repetitive, structured workflows end to end. Document processing, data extraction, report generation, email routing.' },
  { icon: '🔍', title: 'Research and Analysis Agents', desc: 'Agents that gather, synthesise, and summarise information from multiple sources. Web research, competitive intelligence, literature review.' },
  { icon: '🤝', title: 'Multi-Agent Pipelines', desc: 'Systems where specialised agents collaborate under a coordinator. One agent extracts, another validates, another routes for review.' },
  { icon: '👁️', title: 'Human-in-the-Loop Agents', desc: 'Agents with built-in approval gates. The agent works autonomously until a decision requires human sign-off, then pauses and waits.' },
  { icon: '💬', title: 'Conversational Agents with Memory', desc: 'Agents that maintain context across long sessions, remember user preferences, and take actions based on conversation history.' },
  { icon: '🔗', title: 'Integration Agents', desc: 'Agents that connect your internal systems: CRM, ERP, databases, APIs, email, and Slack into a single automated workflow.' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-20">

        {/* ── HERO ── */}
        <section className="bg-[#0A0A0A] py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <nav className="flex items-center gap-1.5 text-xs text-[#6B7280] mb-6 font-sans">
                  <Link href="/" className="hover:text-[#FF4F00] transition-colors">Home</Link>
                  <ChevronRight className="w-3 h-3" />
                  <span className="text-[#A09A91]">AI Agent Development</span>
                </nav>
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-4 font-sans">AI Agent Development</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                  AI Agents That Work in Production, Not Just in Demos
                </h1>
                <p className="text-[#A09A91] text-lg leading-relaxed mb-8 font-sans">
                  Anyone can build an AI agent that works in a Jupyter notebook. Very few can ship one that runs reliably at scale, with proper guardrails, monitoring, and production infrastructure. Kovil AI has done it 150+ times.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['150+ AI Deployments', 'Fixed-Price Delivery', '2-Week Trial', 'LangGraph + CrewAI Experts'].map(b => (
                    <span key={b} className="inline-flex items-center gap-1.5 bg-[#141414] border border-[#252525] text-white text-xs font-medium px-3 py-1.5 rounded-full font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F00] flex-shrink-0" />{b}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#e64600] transition-colors font-sans">
                    Book a Free Call <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">
                    How It Works
                  </Link>
                </div>
              </div>
              <div className="lg:flex justify-end hidden">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#FF4F00]/20 to-transparent rounded-2xl blur-xl" />
                  <Image src="/tech-ai-agent-development.webp" alt="AI Agent Development by Kovil AI" width={540} height={304} className="relative rounded-2xl border border-[#1E1E1E] shadow-2xl" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="bg-white border-b border-[#E5E2D9] py-5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm font-medium text-[#6B7280] font-sans">
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> 150+ AI Agent Deployments</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> 50+ Enterprise Clients</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> LangGraph, CrewAI, AutoGen</span>
              <span className="flex items-center gap-2"><span className="text-[#FF4F00]">✦</span> Production-Grade Guardrails</span>
            </div>
          </div>
        </section>

        {/* ── WHAT IS AN AI AGENT ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">What is an AI Agent?</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">Beyond Chatbots: Systems That Take Real Action</h2>
                <p className="text-[#4B4B4B] font-sans leading-relaxed mb-4">
                  An AI agent is an autonomous system that perceives its environment, plans a course of action, executes tool calls, and adapts based on results — all without step-by-step human instruction. While a chatbot answers questions, an agent completes goals.
                </p>
                <p className="text-[#4B4B4B] font-sans leading-relaxed mb-6">
                  In 2026, production AI agents use LLMs as their reasoning engine and connect to tools: web search, database queries, API calls, code execution, and file operations. The challenge is not building an agent that works once — it is building one that works reliably, safely, and observably across thousands of runs.
                </p>
                <div className="bg-[#0A0A0A] rounded-xl p-5 border border-[#1E1E1E]">
                  <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-2 font-sans">Kovil AI's approach</p>
                  <p className="text-[#A09A91] text-sm font-sans leading-relaxed">Every agent we build is designed for production from day one: structured logging, guardrails, monitoring, and graceful degradation. We have delivered 150+ AI systems and know exactly where production agents fail.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { value: '$10.4B', label: 'AI agent market size projected by 2028 (MarketsandMarkets)' },
                  { value: '81%', label: 'Enterprises piloting or deploying AI agents in 2025 (Capgemini Research)' },
                  { value: '40-70%', label: 'Reduction in manual task time for companies with production AI agents (McKinsey)' },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-[#E5E2D9]">
                    <p className="font-display text-3xl font-bold text-[#FF4F00] mb-1">{s.value}</p>
                    <p className="text-[#6B7280] text-sm font-sans">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── WHAT WE BUILD ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">What We Build</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Six Types of AI Agents We Deliver</h2>
            <p className="text-[#6B7280] font-sans mb-12 max-w-2xl">Each agent type has distinct architecture requirements. We scope the right approach for your use case, compliance requirements, and technical environment.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentTypes.map((a, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#E5E2D9] p-6 hover:border-[#FF4F00]/40 transition-colors">
                  <div className="text-3xl mb-4">{a.icon}</div>
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-2">{a.title}</h3>
                  <p className="text-[#6B7280] text-sm font-sans leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── FRAMEWORK COMPARISON ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Framework Selection</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Which AI Agent Framework Is Right for Your Project?</h2>
            <p className="text-[#6B7280] font-sans mb-10 max-w-2xl">We are framework-agnostic. The right choice depends on your use case, reliability requirements, and how much control you need in production.</p>
            <div className="overflow-x-auto rounded-2xl border border-[#E5E2D9]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="text-left px-5 py-4 text-[#6B7280] font-semibold font-sans">Framework</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Best For</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Maturity</th>
                    <th className="text-left px-5 py-4 text-white font-semibold font-sans">Complexity</th>
                    <th className="text-left px-5 py-4 text-[#FF4F00] font-semibold font-sans">Kovil AI View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3F4F6]">
                  {frameworks.map((f, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}>
                      <td className="px-5 py-4 font-bold text-[#0A0A0A] font-sans">{f.name}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{f.bestFor}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{f.maturity}</td>
                      <td className="px-5 py-4 text-[#4B4B4B] font-sans">{f.complexity}</td>
                      <td className="px-5 py-4 text-[#16a34a] font-medium font-sans">{f.ourTake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── MID CTA ── */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-2 font-sans">Ready to Build?</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-white">From agent architecture to production in 4 to 8 weeks.</h2>
                <p className="text-[#A09A91] font-sans mt-2">Fixed-price. Milestone-gated. Fully observable from day one.</p>
              </div>
              <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF4F00] text-white font-bold px-7 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans whitespace-nowrap">
                Scope My Agent Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <div className="border-t border-[#1E1E1E]" />

        {/* ── HOW WE DELIVER ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Our Delivery Process</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">How We Take an AI Agent from Idea to Production</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Architecture Scoping', desc: 'We map the agent\'s tools, decision points, data flows, guardrail requirements, and integration dependencies before writing a line of code.' },
                { step: '02', title: 'Evaluation Framework First', desc: 'We define success metrics and build the evaluation harness before the agent. Agents are hard to measure — we solve that upfront.' },
                { step: '03', title: 'Milestone-Gated Build', desc: 'You test the agent in a staging environment at each milestone and approve before we proceed. No surprises at the end.' },
                { step: '04', title: 'Production Deployment', desc: 'Full production deployment with structured logging, monitoring, alerting, and a runbook for your team to operate it going forward.' },
              ].map(s => (
                <div key={s.step} className="bg-white rounded-2xl border border-[#E5E2D9] p-6">
                  <div className="font-display text-4xl font-bold text-[#FF4F00] opacity-40 mb-4">{s.step}</div>
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{s.title}</h3>
                  <p className="text-[#6B7280] text-sm font-sans leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── WHAT GOES WRONG ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Why AI Agents Fail</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">The Six Reasons Production AI Agents Break</h2>
            <p className="text-[#6B7280] font-sans mb-10 max-w-2xl">Most AI agent failures are predictable and preventable. We engineer specifically against each one.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { problem: 'No evaluation framework', fix: 'We build the eval harness before the agent. You cannot improve what you cannot measure.' },
                { problem: 'Missing tool error handling', fix: 'Every tool call is wrapped with retry logic, fallback behavior, and structured error logging.' },
                { problem: 'Prompt brittleness', fix: 'We use structured outputs, constrained decision spaces, and regression testing against prompt changes.' },
                { problem: 'No guardrails on tool use', fix: 'Agents can only call pre-approved tools with pre-approved parameters. No open-ended shell access.' },
                { problem: 'Context window overflow', fix: 'We design agents with explicit memory management strategies: summarisation, retrieval, and windowing.' },
                { problem: 'No human escalation path', fix: 'High-stakes actions pause and request human approval before executing. The agent never acts unilaterally on irreversible decisions.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-xl border border-[#E5E2D9] p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-red-600 text-xs font-bold">✕</div>
                  <div>
                    <p className="font-semibold text-[#0A0A0A] font-sans mb-1">{item.problem}</p>
                    <p className="text-[#6B7280] text-sm font-sans">{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── CASE STUDY ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-[#0A0A0A] rounded-2xl p-8 md:p-12">
              <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">Case Study — Legal / LegalTech</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 max-w-2xl">AI Contract Review Agent Automates 94% of Clause Analysis for 60-Attorney Firm</h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  { stat: '94%', label: 'of clause analysis automated' },
                  { stat: '78%', label: 'faster contract review time' },
                  { stat: '$380K', label: 'in partner hours reclaimed annually' },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="font-display text-3xl font-bold text-[#FF4F00] mb-1">{s.stat}</p>
                    <p className="text-[#A09A91] text-sm font-sans">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/case-studies/law-firm-contract-review-ai" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans">
                Read the Full Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── FAQs ── */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-[#FF4F00] text-xs font-bold uppercase tracking-widest mb-3 font-sans">FAQs</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Common Questions About AI Agent Development</h2>
            <div className="divide-y divide-[#E5E2D9]">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="py-7">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{faq.name}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-[#E5E2D9]" />

        {/* ── RELATED LINKS ── */}
        <section className="py-12 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-4 font-sans">Related Services</p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/rag-pipeline-development', label: 'RAG Pipeline Development' },
                { href: '/llm-development', label: 'LLM Development' },
                { href: '/generative-ai-development', label: 'Generative AI Development' },
                { href: '/hire/ai-engineer', label: 'Hire AI Engineers' },
                { href: '/hire/llm-engineer', label: 'Hire LLM Engineers' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 text-[#FF4F00] font-semibold hover:underline font-sans text-sm">
                  {l.label} <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Your AI Agent. Built, Deployed, and Working.</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Fixed price. Milestone-gated delivery. 2-week risk-free trial. Zero termination fees.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Free Architecture Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
