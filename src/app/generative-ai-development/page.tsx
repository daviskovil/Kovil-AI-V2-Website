import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Generative AI Development | GenAI Products | Kovil AI',
  description: 'Generative AI development from Kovil AI. 150+ GenAI deployments across legal, fintech, healthcare, and e-commerce. Fixed-price or staff augmentation. Ships in weeks.',
  keywords: ['generative AI development', 'GenAI development company', 'build generative AI product', 'generative AI services'],
  openGraph: { title: 'Generative AI Development | Kovil AI', description: 'Products that generate real business value.', url: 'https://kovil.ai/generative-ai-development', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Generative AI Development | Kovil AI', description: 'GenAI that generates business value.' },
  alternates: { canonical: 'https://kovil.ai/generative-ai-development' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Generative AI Development', item: 'https://kovil.ai/generative-ai-development' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Generative AI Development', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Production-grade generative AI development — LLMs, agents, RAG, and GenAI products that deliver real business outcomes.', serviceType: 'Generative AI Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is generative AI development?', acceptedAnswer: { '@type': 'Answer', text: 'Generative AI development is the discipline of building production applications powered by large language models and related technologies — including text generation, RAG systems, AI agents, image generation, code generation, and multimodal AI. It covers everything from API integration to full product development.' } },
    { '@type': 'Question', name: 'What types of generative AI products does Kovil AI build?', acceptedAnswer: { '@type': 'Answer', text: 'AI copilots, document Q&A and RAG systems, autonomous agents, content generation tools, AI-powered search, automated document processing, code generation assistants, and AI-enhanced workflows. 150+ GenAI deployments shipped.' } },
    { '@type': 'Question', name: 'Which generative AI models do you work with?', acceptedAnswer: { '@type': 'Answer', text: 'GPT-4, GPT-4o, Claude 3 (Opus/Sonnet/Haiku), Gemini 1.5 Pro/2.0, Llama 3, Mistral, and other open-source models. We match models to your performance, cost, and data privacy requirements.' } },
    { '@type': 'Question', name: 'How long does a generative AI product take to build?', acceptedAnswer: { '@type': 'Answer', text: 'A focused GenAI feature (document Q&A, AI search, content generation) typically takes 4–8 weeks to production. A full AI-native product takes 8–16 weeks. We scope in detail before committing.' } },
    { '@type': 'Question', name: 'Do you work on both staff aug and fixed-price engagements?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Staff augmentation (your team, our engineers) and fixed-price project delivery (we own scope and execution). Both models include Engagement Manager oversight and milestone-gated delivery.' } },
    { '@type': 'Question', name: 'Is generative AI ready for regulated industries?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, with the right architecture. Kovil AI has shipped GenAI systems in legal, financial services, and healthcare — where output reliability, auditability, and data privacy are non-negotiable. Guardrails, human-in-the-loop, and evaluation pipelines are built in.' } },
  ],
}

const capabilities = [
  { title: 'LLM Integration', desc: 'GPT-4, Claude, Gemini, Llama 3 — integrated into your product with production-grade reliability.' },
  { title: 'AI Agents', desc: 'Autonomous agents that plan, use tools, and complete multi-step tasks in your workflows.' },
  { title: 'RAG Pipelines', desc: 'Retrieval-augmented generation grounded in your documents, databases, and knowledge bases.' },
  { title: 'Document AI', desc: 'Intelligent document processing — extraction, classification, Q&A, and summarization at scale.' },
  { title: 'Fine-tuning', desc: 'Custom-tuned models on your proprietary data for domain-specific accuracy and tone.' },
  { title: 'GenAI Products', desc: 'Full AI-native product development — from architecture through launch.' },
]

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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Generative AI Development</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Generative AI Development — Products That Generate Real Business Value</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Generative AI is the fastest-growing technology category in enterprise software. Kovil AI has shipped 150+ GenAI deployments — across legal, fintech, healthcare, and e-commerce — and we know what separates demos from products that generate actual ROI.</p>
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
              <span>150+ GenAI Deployments</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>50+ Enterprise Customers</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>98% Trial-to-Hire Rate</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">GenAI Capabilities</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c, i) => (
                <div key={i} className="p-6 rounded-2xl border border-[#E5E2D9] bg-white">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-2">{c.title}</h3>
                  <p className="text-[#6B7280] font-sans text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">What You Get</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Production-grade delivery — not POCs that never ship',
                'Two engagement models: staff aug (your team + our AI engineers) or fixed-price squad (we own it)',
                'Engagement Manager on every engagement — your single point of contact',
                'Milestone-gated delivery — you approve each phase before we proceed',
                '2-week risk-free trial on staff aug engagements',
              ].map((p, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-[#E5E2D9] bg-white">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0A0A0A] font-sans leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Define the Use Case', desc: 'Tell us what you need to build or the business problem to solve. We scope the right GenAI approach.' },
                { step: '02', title: 'Build & Evaluate', desc: 'Milestone-gated development with quality benchmarks at every phase. You see results before paying for the next.' },
                { step: '03', title: 'Launch & Operate', desc: 'Production deployment with monitoring, evaluation pipelines, and ongoing support if needed.' },
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
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">GenAI Contract Review — From 8 Hours Per Contract to Under 40 Minutes</h3>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8">Explore GenAI Services</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { label: 'LLM Development', href: '/llm-development' },
                { label: 'AI Agent Development', href: '/ai-agent-development' },
                { label: 'RAG Pipeline Development', href: '/rag-pipeline-development' },
                { label: 'OpenAI Integration', href: '/openai-integration' },
                { label: 'Hire Generative AI Developer', href: '/hire/generative-ai-developer' },
              ].map(r => (
                <Link key={r.href} href={r.href} className="px-4 py-2 rounded-full border border-[#E5E2D9] bg-white text-sm font-medium text-[#0A0A0A] hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors font-sans">{r.label}</Link>
              ))}
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
