import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'RAG Pipeline Development | Retrieval Augmented Generation | Kovil AI',
  description: 'Expert RAG pipeline development from Kovil AI. Build production-grade retrieval augmented generation systems that ground LLMs in your proprietary data. Fix hallucinations.',
  keywords: ['RAG pipeline development', 'retrieval augmented generation', 'build RAG system', 'RAG developer'],
  openGraph: { title: 'RAG Pipeline Development | Kovil AI', description: 'Ground your LLM in real data, not hallucinations.', url: 'https://kovil.ai/rag-pipeline-development', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'RAG Pipeline Development | Kovil AI', description: 'Ground your AI in real data.' },
  alternates: { canonical: 'https://kovil.ai/rag-pipeline-development' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'RAG Pipeline Development', item: 'https://kovil.ai/rag-pipeline-development' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'RAG Pipeline Development', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Production-grade RAG pipelines that ground LLMs in your proprietary data and reduce hallucinations.', serviceType: 'RAG Pipeline Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is RAG?', acceptedAnswer: { '@type': 'Answer', text: 'RAG (Retrieval-Augmented Generation) is a technique that grounds LLM responses in your proprietary data. At query time, the system retrieves the most relevant documents from your knowledge base and passes them to the LLM as context — so the AI answers from your data, not just its training.' } },
    { '@type': 'Question', name: 'When should I use RAG vs fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'RAG is right for most enterprise use cases — when your data changes frequently, when you need source attribution, or when you want to avoid retraining costs. Fine-tuning is better for consistent output format or style. Our engineers will assess your use case and recommend the right approach.' } },
    { '@type': 'Question', name: 'How do you handle document chunking?', acceptedAnswer: { '@type': 'Answer', text: 'Chunking strategy depends on your document types. We choose from fixed-size, sentence, recursive, semantic, or document-structure-aware chunking based on how your content is structured and how users query it. Poor chunking is one of the most common causes of RAG failure.' } },
    { '@type': 'Question', name: 'How do you reduce hallucinations in a RAG system?', acceptedAnswer: { '@type': 'Answer', text: 'Multiple layers: high-quality chunking and retrieval, re-ranking to surface the most relevant context, structured prompting that constrains the model to the retrieved context, output validation, and evaluation frameworks (RAGAS) to measure retrieval accuracy and faithfulness.' } },
    { '@type': 'Question', name: 'What vector databases do you work with?', acceptedAnswer: { '@type': 'Answer', text: 'Pinecone, Weaviate, Chroma, pgvector (PostgreSQL), Qdrant, and Milvus. We choose based on your scale, latency requirements, and existing infrastructure. For many production systems, pgvector on an existing Postgres instance is the simplest and most maintainable choice.' } },
    { '@type': 'Question', name: 'Can you improve an existing failing RAG system?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — Kovil AI\'s App Rescue squad diagnoses failing RAG systems. Common issues: poor chunking, low retrieval relevance, missing re-ranking, context window overflow, and no evaluation pipeline. We audit and fix.' } },
  ],
}

const skills = ['LangChain', 'LlamaIndex', 'Pinecone', 'Weaviate', 'Chroma', 'pgvector', 'Embeddings', 'Chunking Strategies', 'Hybrid Search', 'Re-ranking', 'OpenAI', 'Python', 'FastAPI']

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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">RAG Pipeline Development</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">RAG Pipeline Development — Ground Your AI in Real Data, Not Hallucinations</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Hallucinating AI is useless AI. Kovil AI builds RAG systems that retrieve the right information at the right time — reducing hallucination rates and making your LLM trustworthy in production.</p>
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
                'RAG pipelines over your documents, PDFs, databases, and internal wikis',
                'Optimized chunking strategies — fixed, semantic, or document-structure-aware',
                'Hybrid search combining dense vector and sparse BM25 retrieval',
                'Re-ranking layers that surface the most relevant context before the LLM sees it',
                'RAGAS evaluation pipelines to measure retrieval accuracy and faithfulness in production',
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
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Audit Your Data', desc: 'We assess your document types, volumes, and query patterns to design the right RAG architecture.' },
                { step: '02', title: 'Build & Evaluate', desc: 'Milestone-gated build with RAGAS evaluation at each phase. You see retrieval accuracy before moving forward.' },
                { step: '03', title: 'Deploy & Monitor', desc: 'Production deployment with evaluation dashboards, latency monitoring, and hallucination rate tracking.' },
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
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">RAG Contract Review Agent — Trained on Firm&apos;s Own Precedent Library</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">94% Clause Automation</p>
                <p className="text-[#FF4F00] font-display text-2xl font-bold">78% Faster Review</p>
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
