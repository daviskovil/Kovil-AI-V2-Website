import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'LLM Development Services | Custom LLM Integration | Kovil AI',
  description: 'Expert LLM development and integration from Kovil AI. GPT-4, Claude, Gemini, fine-tuning, RAG, and production deployment. Fixed-price or staff aug. 150+ deployments.',
  keywords: ['LLM development', 'LLM integration', 'large language model development', 'custom LLM'],
  openGraph: { title: 'LLM Development | Kovil AI', description: 'From API integration to fine-tuned production systems.', url: 'https://kovil.ai/llm-development', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'LLM Development | Kovil AI', description: 'Production LLM systems.' },
  alternates: { canonical: 'https://kovil.ai/llm-development' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'LLM Development', item: 'https://kovil.ai/llm-development' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'LLM Development', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Production-grade LLM development — API integration, fine-tuning, RAG, and deployment.', serviceType: 'LLM Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is LLM development?', acceptedAnswer: { '@type': 'Answer', text: 'LLM development covers the full spectrum of building with large language models — from API integration and prompt engineering through fine-tuning, RAG pipeline development, agent creation, and production LLMOps.' } },
    { '@type': 'Question', name: 'Which LLMs do you work with?', acceptedAnswer: { '@type': 'Answer', text: 'GPT-4, GPT-4o, Claude 3 (Opus/Sonnet/Haiku), Gemini 1.5/2.0, Llama 3, Mistral, Falcon, and other open-source models. We select and combine models based on your performance, cost, and privacy requirements.' } },
    { '@type': 'Question', name: 'Do you offer fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. LoRA, QLoRA, and full fine-tuning on your proprietary data. We assess whether fine-tuning or RAG (or both) is the right approach based on your use case.' } },
    { '@type': 'Question', name: 'How do you handle production LLM reliability?', acceptedAnswer: { '@type': 'Answer', text: 'We build LLMOps infrastructure — evaluation frameworks, regression pipelines, prompt versioning, cost dashboards, latency monitoring, and fallback routing. LLM production reliability is a first-class concern.' } },
    { '@type': 'Question', name: 'Can you integrate LLMs into our existing product?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We specialize in integrating LLM capabilities into existing products — streaming responses, copilot features, AI search, document Q&A, and workflow automation — without rebuilding your product.' } },
    { '@type': 'Question', name: 'What engagement models are available?', acceptedAnswer: { '@type': 'Answer', text: 'Staff augmentation (LLM engineer embedded in your team) or fixed-price project delivery (we scope and ship the whole thing). Both include Engagement Manager oversight.' } },
  ],
}

const skills = ['GPT-4', 'Claude 3', 'Gemini', 'Llama 3', 'Mistral', 'Fine-tuning', 'LoRA/QLoRA', 'LangChain', 'LlamaIndex', 'RAG', 'Prompt Engineering', 'LLMOps', 'MLflow']

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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">LLM Development</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">LLM Development — From API Integration to Fine-Tuned Production Systems</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Kovil AI builds LLM-powered systems that work in production — not just demos. From simple API integration to custom fine-tuned models, RAG pipelines, and autonomous agents.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">LLM Capabilities We Deliver</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'LLM API integration — OpenAI, Anthropic, Google, and open-source models',
                'Fine-tuning on your proprietary data (LoRA, QLoRA, full fine-tuning)',
                'RAG pipeline development — ground your LLM in your documents',
                'LLM-powered agents that plan, use tools, and complete multi-step tasks',
                'LLMOps infrastructure — evaluation, monitoring, prompt versioning, cost tracking',
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
              <Link href="/rag-pipeline-development" className="text-[#FF4F00] font-semibold hover:underline font-sans">RAG Pipeline Development →</Link>
              <Link href="/ai-agent-development" className="text-[#FF4F00] font-semibold hover:underline font-sans">AI Agent Development →</Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Describe Your Needs', desc: 'Tell us your LLM use case. We recommend the right models, architecture, and engagement model.' },
                { step: '02', title: 'Build & Evaluate', desc: 'Milestone-gated development with evaluation at each phase. You see quality benchmarks before moving on.' },
                { step: '03', title: 'Deploy & Monitor', desc: 'Production deployment with LLMOps dashboards, cost monitoring, and regression testing.' },
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
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">LLM Contract Review System — 94% Clause Analysis Automated</h3>
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
