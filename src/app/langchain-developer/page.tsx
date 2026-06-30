import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hire LangChain Developers | LangChain Development Services | Kovil AI',
  description: 'Hire expert LangChain developers from Kovil AI. LangGraph, LangSmith, LCEL, agents, RAG, and production AI chains. Fixed-price or staff aug. 150+ deployments.',
  keywords: ['hire LangChain developer', 'LangChain development', 'LangChain engineer', 'LangGraph developer'],
  openGraph: { title: 'Hire LangChain Developers | Kovil AI', description: 'Production AI chains and agents.', url: 'https://kovil.ai/langchain-developer', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Hire LangChain Developers | Kovil AI', description: 'LangChain for production.' },
  alternates: { canonical: 'https://kovil.ai/langchain-developer' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Hire LangChain Developers', item: 'https://kovil.ai/langchain-developer' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'LangChain Development', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Production LangChain development — LCEL chains, LangGraph agents, RAG pipelines, and LangSmith observability.', serviceType: 'LangChain Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is LangChain used for?', acceptedAnswer: { '@type': 'Answer', text: 'LangChain is a framework for building LLM-powered applications. It provides abstractions for chains, agents, memory, tool use, and retrieval. Most production RAG pipelines, AI agents, and LLM applications use LangChain or its graph-based extension, LangGraph.' } },
    { '@type': 'Question', name: 'What is LangGraph and when should I use it?', acceptedAnswer: { '@type': 'Answer', text: 'LangGraph is LangChain\'s stateful graph framework for building AI agents. It\'s ideal for multi-step workflows, agents that loop and retry, human-in-the-loop systems, and any system where you need explicit state management. Use LangGraph when your agent needs to do more than a single chain.' } },
    { '@type': 'Question', name: 'Do you use LangSmith for observability?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LangSmith traces every chain and agent run — you can see exactly what prompts were sent, what was retrieved, token counts, latency, and costs. We use it for debugging during development and ongoing monitoring in production.' } },
    { '@type': 'Question', name: 'What is LCEL and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'LCEL (LangChain Expression Language) is the composable, streaming-first way to build chains in modern LangChain. It enables streaming output, async execution, and parallelism. All our LangChain work uses LCEL — not the legacy Chain classes.' } },
    { '@type': 'Question', name: 'Can you build a RAG system with LangChain?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LangChain + LlamaIndex (for indexing) or LangChain\'s own retrieval modules are the standard way to build RAG. We\'ve built RAG systems on Pinecone, Weaviate, pgvector, and Chroma using LangChain.' } },
    { '@type': 'Question', name: 'Can I hire a LangChain developer to join my team?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kovil AI staff augmentation places a vetted LangChain developer into your team with a 2-week trial. 98% of clients extend past the trial. Matched in 48 hours.' } },
  ],
}

const skills = ['LangChain', 'LangGraph', 'LangSmith', 'LCEL', 'Agents', 'RAG', 'Tool Use', 'Memory', 'Python', 'FastAPI', 'Vector DBs', 'OpenAI', 'Anthropic', 'Gemini']

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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">LangChain Development</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Hire LangChain Developers — Build Production AI Chains and Agents</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Kovil AI&apos;s LangChain developers have shipped 150+ AI systems. LCEL chains, LangGraph agents, RAG pipelines, and LangSmith observability — production-ready from day one.</p>
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
              <span>98% Trial-to-Hire Rate</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">What Our LangChain Developers Build</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'LCEL chains and pipelines — streaming-first, async-capable, production-safe',
                'LangGraph agents — stateful, multi-step, with human-in-the-loop support',
                'RAG systems with LangChain retrieval — hybrid search, re-ranking, evaluation',
                'Tool-using agents that call APIs, query databases, and execute code',
                'LangSmith observability — tracing, evaluation, and prompt management',
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map(s => (<span key={s} className="px-4 py-2 rounded-full border border-[#E5E2D9] bg-white text-sm font-medium text-[#0A0A0A] font-sans">{s}</span>))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/hire/llm-engineer" className="text-[#FF4F00] font-semibold hover:underline font-sans">Hire LLM Engineers →</Link>
              <Link href="/ai-agent-development" className="text-[#FF4F00] font-semibold hover:underline font-sans">AI Agent Development →</Link>
              <Link href="/rag-pipeline-development" className="text-[#FF4F00] font-semibold hover:underline font-sans">RAG Pipeline Development →</Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Tell Us Your Use Case', desc: 'Describe what you need to build. We scope the right LangChain architecture for your use case.' },
                { step: '02', title: 'Matched in 48 Hours', desc: 'A senior LangChain developer is matched and starts with a 2-week trial. Full replacement guarantee.' },
                { step: '03', title: 'Ship in Production', desc: 'Milestone-gated delivery. First milestone in 14 days. LangSmith observability built in.' },
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
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">LangChain Multi-Agent Contract Review — 94% Clause Automation</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">94% Automated</p>
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
