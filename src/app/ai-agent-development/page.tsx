import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Agent Development | Build Autonomous AI Agents | Kovil AI',
  description: 'Expert AI agent development from Kovil AI. Build autonomous agents for workflow automation, research, and decision-making. Fixed-price or staff aug. 150+ deployments.',
  keywords: ['AI agent development', 'build AI agent', 'autonomous AI agents', 'AI agent company'],
  openGraph: { title: 'AI Agent Development | Kovil AI', description: 'Autonomous AI agents that work in production.', url: 'https://kovil.ai/ai-agent-development', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'AI Agent Development | Kovil AI', description: 'Autonomous AI agents in production.' },
  alternates: { canonical: 'https://kovil.ai/ai-agent-development' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI Agent Development', item: 'https://kovil.ai/ai-agent-development' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'AI Agent Development', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Production-grade AI agent development — autonomous systems for workflow automation and decision-making.', serviceType: 'AI Agent Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is an AI agent?', acceptedAnswer: { '@type': 'Answer', text: 'An AI agent is an autonomous system powered by an LLM that can plan, use tools, take actions, and complete multi-step tasks without constant human input. Unlike a chatbot that just answers questions, an agent can browse the web, query databases, call APIs, write code, and execute workflows.' } },
    { '@type': 'Question', name: 'What frameworks do you use for AI agent development?', acceptedAnswer: { '@type': 'Answer', text: 'LangGraph for stateful graph-based agents, LangChain Agents for tool-using agents, CrewAI for multi-agent orchestration, AutoGen for Microsoft ecosystem agents, and custom ReAct implementations. We choose the framework based on your use case and production requirements.' } },
    { '@type': 'Question', name: 'How do you prevent agents from going off the rails?', acceptedAnswer: { '@type': 'Answer', text: 'We build guardrails into every agent — output validation, tool use constraints, budget limits, human-in-the-loop checkpoints for high-risk actions, and comprehensive logging. Agent reliability is our primary design concern.' } },
    { '@type': 'Question', name: 'Can you build multi-agent systems?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Multi-agent systems — where specialized agents collaborate under a coordinator — are a Kovil AI specialty. We\'ve built legal review systems, document processing pipelines, and research agents with multi-agent architectures.' } },
    { '@type': 'Question', name: 'What is the difference between an agent and a chatbot?', acceptedAnswer: { '@type': 'Answer', text: 'A chatbot responds to questions. An agent takes actions — it can call APIs, write files, query databases, browse the web, and execute multi-step workflows. Agents are proactive and goal-oriented; chatbots are reactive.' } },
    { '@type': 'Question', name: 'How long does it take to build an AI agent?', acceptedAnswer: { '@type': 'Answer', text: 'A focused single-purpose agent can be built and deployed in 2–4 weeks. Complex multi-agent systems or enterprise-grade deployments with extensive guardrails and integrations typically take 6–12 weeks.' } },
  ],
}

const skills = ['LangChain Agents', 'LangGraph', 'AutoGen', 'CrewAI', 'Tool Use', 'ReAct', 'Python', 'FastAPI', 'OpenAI API', 'Claude API', 'Vector DBs', 'Orchestration']

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20">

        <section className="bg-[#0A0A0A] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI Agent Development</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">AI Agent Development — Autonomous Systems That Actually Work in Production</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Anyone can demo an AI agent. Very few companies can ship one that works reliably in production. Kovil AI has built 150+ AI systems — including autonomous agents for legal, fintech, and enterprise.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">See How It Works</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>150+ Successful AI Deployments</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>50+ Enterprise Customers</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>98% Trial-to-Hire Rate</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Trusted by teams from Smartfren, Unilever, and more</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">What We Build</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Single-purpose task agents — document processors, research agents, workflow automators',
                'Multi-agent systems where specialized agents collaborate under a coordinator',
                'Tool-using agents that call APIs, query databases, write files, and browse the web',
                'Human-in-the-loop agents with approval gates for high-stakes decisions',
                'Production-grade deployment with guardrails, logging, and reliability monitoring',
              ].map((p, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-[#E5E2D9] bg-white">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0A0A0A] font-sans leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8">Frameworks &amp; Technologies</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map(s => (
                <span key={s} className="px-4 py-2 rounded-full border border-[#E5E2D9] bg-white text-sm font-medium text-[#0A0A0A] font-sans">{s}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/hire/ai-engineer" className="text-[#FF4F00] font-semibold hover:underline font-sans">Hire AI Engineers →</Link>
              <Link href="/rag-pipeline-development" className="text-[#FF4F00] font-semibold hover:underline font-sans">RAG Pipeline Development →</Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Describe Your Use Case', desc: 'Tell us what the agent needs to do. We scope the architecture, guardrails, and delivery plan.' },
                { step: '02', title: 'Build & Iterate', desc: 'Milestone-gated development with evaluation at every phase. You test in staging before production.' },
                { step: '03', title: 'Deploy & Monitor', desc: 'Production deployment with logging, guardrails, and reliability monitoring in place.' },
              ].map(s => (
                <div key={s.step} className="p-8 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
                  <div className="text-[#FF4F00] font-display text-4xl font-bold mb-4 opacity-60">{s.step}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-[#A09A91] font-sans leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="p-8 md:p-10 rounded-2xl bg-[#0A0A0A] text-white">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Legal / LegalTech</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI Contract Review Agent Automates 94% of Clause Analysis</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">94% Clause Automation</p>
                <p className="text-[#FF4F00] font-display text-2xl font-bold">$380K Partner Hours Reclaimed</p>
              </div>
              <Link href="/case-studies/law-firm-contract-review-ai" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans">Read the Case Study <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Frequently Asked Questions</h2>
            <div className="divide-y divide-[#E5E2D9]">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="py-8">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{faq.name}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Start Your 2-Week Risk-Free Trial</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Fixed price. Milestone-gated. Zero delivery risk. Zero termination fees.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}
