import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for Legal | Legal AI Development | Kovil AI',
  description: 'AI for legal teams and law firms from Kovil AI. Contract review automation, legal research, document processing, and LLM-powered legal workflows. 78% faster contract review.',
  keywords: ['AI for legal', 'legal AI development', 'contract review AI', 'law firm AI automation'],
  openGraph: { title: 'AI for Legal | Kovil AI', description: '78% Faster Contract Review. $380K Partner Hours Reclaimed.', url: 'https://kovil.ai/ai-for-legal', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'AI for Legal | Kovil AI', description: 'Legal AI that works in production.' },
  alternates: { canonical: 'https://kovil.ai/ai-for-legal' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI for Legal', item: 'https://kovil.ai/ai-for-legal' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'AI for Legal', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Legal AI development — contract review, document automation, and legal research tools for law firms and in-house teams.', serviceType: 'Legal AI Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What legal tasks can AI automate?', acceptedAnswer: { '@type': 'Answer', text: 'Contract review and clause extraction, legal research and precedent search, NDA analysis, compliance checking, document summarization, matter intake classification, and due diligence document processing. AI is not replacing lawyers — it is eliminating the hours of document work that precede legal judgment.' } },
    { '@type': 'Question', name: 'How accurate is AI contract review?', acceptedAnswer: { '@type': 'Answer', text: 'With the right RAG architecture and domain-tuned prompts, AI can automate 90%+ of standard clause identification and flagging. Our law firm case study achieved 94% automation on NDA and commercial contract review — with all high-risk clauses flagged for attorney review.' } },
    { '@type': 'Question', name: 'How do you handle confidential legal documents?', acceptedAnswer: { '@type': 'Answer', text: 'We design legal AI systems with data privacy as a first-class concern — on-premise deployment options, private cloud, zero data retention policies with LLM providers, and end-to-end encryption. Your clients\' documents never leave your control.' } },
    { '@type': 'Question', name: 'Can legal AI integrate with our practice management software?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have integrated legal AI with iManage, NetDocuments, Clio, Relativity, and custom DMS systems. Document ingestion, metadata tagging, and workflow triggers can all be automated.' } },
    { '@type': 'Question', name: 'What is the ROI of legal AI?', acceptedAnswer: { '@type': 'Answer', text: 'For the law firm in our case study, the contract review AI reclaimed $380K in partner hours annually — from a deployment that cost a fraction of that. ROI in legal AI is driven by eliminating high-cost-per-hour work that does not require partner-level judgment.' } },
    { '@type': 'Question', name: 'How long does a legal AI project take?', acceptedAnswer: { '@type': 'Answer', text: 'A focused contract review or document processing system typically takes 6–10 weeks from discovery to production. We scope in detail before committing. Fixed-price, milestone-gated.' } },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI for Legal</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">AI for Legal Teams — Contract Review, Research, and Document Automation</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Kovil AI builds legal AI systems that work in the real world — not in demos. Our contract review AI has automated 94% of clause analysis for a law firm with 250+ attorneys. 78% faster review cycles. $380K in partner hours reclaimed annually.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
                <Link href="/case-studies/law-firm-contract-review-ai" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">See the Case Study</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>78% Faster Contract Review</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>$380K Partner Hours Reclaimed</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>94% Clause Analysis Automated</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Legal AI Use Cases We Build</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Contract review — clause extraction, risk flagging, deviation from playbook',
                'NDA and commercial agreement analysis at scale',
                'Legal research — precedent search across your firm\'s knowledge base',
                'Due diligence document processing for M&A and transactions',
                'Matter intake classification and routing',
                'Compliance document monitoring and change detection',
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
                { step: '01', title: 'Define the Legal Workflow', desc: 'We document your review process, clause types, and risk thresholds. This becomes the AI\'s specification.' },
                { step: '02', title: 'Build & Validate', desc: 'Milestone-gated build with accuracy benchmarks at every phase. Senior attorneys validate outputs before production.' },
                { step: '03', title: 'Deploy to Production', desc: 'Integrated into your DMS with human-in-the-loop review for high-risk items. Full audit trail.' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Case Study — Law Firm (250+ Attorneys)</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI Contract Review System — Deployed in 8 Weeks</h3>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div><p className="text-[#FF4F00] font-display text-2xl font-bold">78%</p><p className="text-[#A09A91] text-sm font-sans mt-1">Faster Review</p></div>
                <div><p className="text-[#FF4F00] font-display text-2xl font-bold">$380K</p><p className="text-[#A09A91] text-sm font-sans mt-1">Hours Reclaimed</p></div>
                <div><p className="text-[#FF4F00] font-display text-2xl font-bold">94%</p><p className="text-[#A09A91] text-sm font-sans mt-1">Clause Automation</p></div>
              </div>
              <Link href="/case-studies/law-firm-contract-review-ai" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans">Read the Full Case Study <ArrowRight className="w-4 h-4" /></Link>
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Automate Legal Workflows?</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Fixed price. Milestone-gated. Zero delivery risk. Start with a discovery call.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}
