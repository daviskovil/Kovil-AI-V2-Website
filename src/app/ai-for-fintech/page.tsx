import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for Fintech | Financial AI Development | Kovil AI',
  description: 'AI for fintech and financial services from Kovil AI. Document automation, intelligent processing, lending workflows, and AI-powered risk assessment. Production-grade.',
  keywords: ['AI for fintech', 'fintech AI development', 'financial AI automation', 'lending AI'],
  openGraph: { title: 'AI for Fintech | Kovil AI', description: 'Production AI for financial services.', url: 'https://kovil.ai/ai-for-fintech', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'AI for Fintech | Kovil AI', description: 'AI for financial services.' },
  alternates: { canonical: 'https://kovil.ai/ai-for-fintech' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI for Fintech', item: 'https://kovil.ai/ai-for-fintech' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'AI for Fintech', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'AI development for fintech and financial services — document processing, lending automation, and intelligent workflow systems.', serviceType: 'Financial AI Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What financial processes can AI automate?', acceptedAnswer: { '@type': 'Answer', text: 'Loan application document extraction and validation, mortgage document processing, KYC document review, financial statement analysis, credit memo generation, fraud pattern detection, regulatory compliance monitoring, and customer-facing AI copilots for financial products.' } },
    { '@type': 'Question', name: 'How do you handle financial data security?', acceptedAnswer: { '@type': 'Answer', text: 'We design fintech AI with security and compliance first — SOC 2-compatible architecture, private deployment options, zero data retention with LLM providers, role-based access control, and full audit trails. Financial data never leaves your controlled environment without explicit design.' } },
    { '@type': 'Question', name: 'Can AI reduce loan processing time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our secondary mortgage document platform processed 1,200+ loan files with 340% throughput improvement using AI-powered document extraction and classification. Manual review time dropped by 72%.' } },
    { '@type': 'Question', name: 'Do you integrate with core banking and LOS systems?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have integrated AI with major LOS platforms, core banking systems, and document management systems. OCR, extraction, classification, and workflow triggers can all be automated end-to-end.' } },
    { '@type': 'Question', name: 'Can you automate KYC document review?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. AI-powered KYC document classification, data extraction, completeness checking, and anomaly flagging. Human review is triggered only for edge cases and high-risk flags — reducing KYC review time significantly.' } },
    { '@type': 'Question', name: 'What AI models are appropriate for fintech?', acceptedAnswer: { '@type': 'Answer', text: 'For most fintech use cases: GPT-4o, Claude 3 Sonnet, or on-premise Llama 3 depending on your data sensitivity requirements. RAG over proprietary financial documents outperforms general LLM knowledge for domain-specific tasks.' } },
  ],
}

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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI for Fintech</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">AI for Financial Services — Automate Document Processing, Lending, and Compliance Workflows</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Kovil AI has shipped AI systems for mortgage lenders, secondary market platforms, and fintech companies. 340% throughput improvement on loan processing. 72% reduction in manual document review time.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/case-studies/secondary-mortgage-document-platform" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">See the Case Study</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>340% Throughput Improvement</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>72% Reduction in Manual Review</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>1,200+ Loan Files Processed</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Fintech AI Use Cases We Build</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Mortgage and loan document extraction — income, employment, assets, liabilities',
                'Secondary market document platform processing — due diligence at scale',
                'KYC document review, classification, and completeness checking',
                'Financial statement analysis and credit memo generation',
                'Regulatory compliance document monitoring',
                'Customer-facing AI copilots for financial products and onboarding',
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
                { step: '01', title: 'Map the Document Workflow', desc: 'We document your current manual process, document types, and exception patterns. This defines the AI system specification.' },
                { step: '02', title: 'Build & Validate Accuracy', desc: 'Milestone-gated build with extraction accuracy benchmarks. You validate against your real documents before production.' },
                { step: '03', title: 'Integrate & Monitor', desc: 'Integration with your LOS or DMS with exception routing and audit trail. Monitoring for accuracy drift over time.' },
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
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            <div className="p-8 md:p-10 rounded-2xl bg-[#0A0A0A] text-white">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Case Study — Secondary Mortgage Market</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI Document Platform — 1,200+ Loan Files, 340% Throughput Improvement</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div><p className="text-[#FF4F00] font-display text-2xl font-bold">340%</p><p className="text-[#A09A91] text-sm font-sans mt-1">Throughput</p></div>
                <div><p className="text-[#FF4F00] font-display text-2xl font-bold">72%</p><p className="text-[#A09A91] text-sm font-sans mt-1">Less Manual Review</p></div>
              </div>
              <Link href="/case-studies/secondary-mortgage-document-platform" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans">Read the Case Study <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="p-8 md:p-10 rounded-2xl bg-[#0A0A0A] text-white">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Case Study — Lending Platform</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">Lending AI Automation — End-to-End Workflow Transformation</h3>
              <Link href="/case-studies/lending-platform-ai-automation" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans">Read the Case Study <ArrowRight className="w-4 h-4" /></Link>
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Automate Financial Workflows?</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Fixed price. Milestone-gated. Zero delivery risk. Start with a discovery call.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}
