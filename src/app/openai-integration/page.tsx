import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'OpenAI Integration Services | Production-Grade GPT-4 Integration | Kovil AI',
  description: 'Expert OpenAI API integration from Kovil AI. GPT-4, GPT-4o, Assistants API, function calling, streaming, fine-tuning, and embeddings. Production-grade, not just a prototype.',
  keywords: ['OpenAI integration', 'GPT-4 integration', 'OpenAI API developer', 'hire OpenAI developer'],
  openGraph: { title: 'OpenAI Integration | Kovil AI', description: 'Production-grade, not just a prototype.', url: 'https://kovil.ai/openai-integration', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'OpenAI Integration | Kovil AI', description: 'Production OpenAI integrations.' },
  alternates: { canonical: 'https://kovil.ai/openai-integration' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'OpenAI Integration', item: 'https://kovil.ai/openai-integration' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'OpenAI Integration', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Production-grade OpenAI API integration — GPT-4, Assistants API, function calling, fine-tuning, and deployment.', serviceType: 'OpenAI Integration', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What OpenAI APIs do you integrate?', acceptedAnswer: { '@type': 'Answer', text: 'GPT-4, GPT-4o, GPT-4o mini, the Assistants API (threads, files, tools), Function Calling, Structured Outputs, Streaming, Batch API, Embeddings API, Fine-tuning API, DALL-E, and Whisper (transcription).' } },
    { '@type': 'Question', name: 'What does "production-grade" mean for OpenAI integration?', acceptedAnswer: { '@type': 'Answer', text: 'It means: rate limit handling and retry logic, cost monitoring and alerting, prompt versioning and evaluation pipelines, streaming for low-latency UX, fallback routing when models are unavailable, and comprehensive logging. Not a prototype — production-ready from day one.' } },
    { '@type': 'Question', name: 'Do you work with the Assistants API or raw completions?', acceptedAnswer: { '@type': 'Answer', text: 'Both. The Assistants API (with threads, file search, and code interpreter) is ideal for persistent conversation and document Q&A. Raw completions give you more control for custom pipelines. We choose based on your use case.' } },
    { '@type': 'Question', name: 'Can you integrate OpenAI with our existing product?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — AI copilots, document Q&A, search, workflow automation, and content generation features can all be integrated into existing products without rebuilding your stack.' } },
    { '@type': 'Question', name: 'Do you handle OpenAI cost optimization?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Caching, model selection (right model for each task), prompt compression, Batch API for non-real-time workloads, and cost dashboards. OpenAI costs can spiral without careful management.' } },
    { '@type': 'Question', name: 'Can you fine-tune a model on our data?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Fine-tuning GPT-4o mini and other fine-tunable models on your proprietary data. We assess whether fine-tuning, RAG, or both is the right approach based on your use case and data volume.' } },
  ],
}

const skills = ['OpenAI API', 'GPT-4/GPT-4o', 'Assistants API', 'Function Calling', 'Structured Outputs', 'Streaming', 'Batch API', 'Embeddings', 'Fine-tuning', 'DALL-E', 'Whisper', 'Python']

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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">OpenAI Integration</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">OpenAI Integration — Production-Grade, Not Just a Prototype</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Anyone can call the OpenAI API. Kovil AI builds OpenAI integrations that handle rate limits, cost spikes, latency, and production reliability — so your product works when customers are actually using it.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">What We Build</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'AI copilots embedded in your existing product — streaming, low-latency, production-safe',
                'Document Q&A and search using OpenAI Embeddings + Assistants API with file search',
                'Function calling and Structured Outputs for reliable JSON extraction and tool use',
                'Fine-tuned models on your proprietary data for custom tone, format, or domain knowledge',
                'LLMOps infrastructure — cost dashboards, prompt versioning, evaluation pipelines, rate limit handling',
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8">APIs & Technologies</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map(s => (<span key={s} className="px-4 py-2 rounded-full border border-[#E5E2D9] bg-white text-sm font-medium text-[#0A0A0A] font-sans">{s}</span>))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/hire/ai-engineer" className="text-[#FF4F00] font-semibold hover:underline font-sans">Hire AI Engineers →</Link>
              <Link href="/llm-development" className="text-[#FF4F00] font-semibold hover:underline font-sans">LLM Development →</Link>
              <Link href="/rag-pipeline-development" className="text-[#FF4F00] font-semibold hover:underline font-sans">RAG Pipeline Development →</Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Scope the Integration', desc: 'Tell us what you want to build. We recommend the right OpenAI APIs and architecture for your use case.' },
                { step: '02', title: 'Build & Evaluate', desc: 'Milestone-gated development with latency, cost, and quality benchmarks at each phase.' },
                { step: '03', title: 'Deploy & Monitor', desc: 'Production deployment with cost monitoring, rate limit handling, and reliability dashboards.' },
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
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">GPT-4 Contract Review — 94% of Clauses Automated in Production</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">94% Automated</p>
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
