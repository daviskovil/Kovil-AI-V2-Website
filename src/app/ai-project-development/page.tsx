import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Project Development Company | Build AI Products | Kovil AI',
  description: 'End-to-end AI project development from Kovil AI. Staff aug or fixed-price. AI agents, RAG pipelines, LLM apps, and workflow automation. 150+ deployments.',
  keywords: ['AI project development', 'AI development company', 'build AI product', 'AI software development'],
  openGraph: { title: 'AI Project Development | Kovil AI', description: 'End-to-end AI builds. 150+ deployments.', url: 'https://kovil.ai/ai-project-development', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'AI Project Development | Kovil AI', description: 'End-to-end AI builds.' },
  alternates: { canonical: 'https://kovil.ai/ai-project-development' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI Project Development', item: 'https://kovil.ai/ai-project-development' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'AI Project Development', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'End-to-end AI project development — staff aug or fixed-price squad.', serviceType: 'AI Project Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What types of AI projects does Kovil AI develop?', acceptedAnswer: { '@type': 'Answer', text: 'AI agents, RAG pipelines, LLM-powered applications, document processing systems, workflow automation, computer vision systems, recommendation engines, and full AI SaaS products.' } },
    { '@type': 'Question', name: 'What engagement models are available?', acceptedAnswer: { '@type': 'Answer', text: 'Staff augmentation (extend your existing team with AI engineers) or a fixed-price dedicated squad (we own delivery end-to-end). Both include Engagement Manager oversight.' } },
    { '@type': 'Question', name: 'How quickly can you start?', acceptedAnswer: { '@type': 'Answer', text: 'Matched or scoped in 48 hours, first milestone delivered within 14 days of kick-off.' } },
    { '@type': 'Question', name: 'Do you build with specific AI frameworks?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — LangChain, LangGraph, LlamaIndex, CrewAI, AutoGen, OpenAI API, Anthropic API, and all major cloud AI services. We match to your stack and requirements.' } },
    { '@type': 'Question', name: 'Who owns the IP?', acceptedAnswer: { '@type': 'Answer', text: '100% yours. All code, models, prompts, and architecture are contractually transferred to you on delivery.' } },
    { '@type': 'Question', name: 'Is there a risk-free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — 2-week trial on staff aug engagements, milestone-gated payment on fixed-price projects.' } },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI Project Development</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">AI Project Development — From Idea to Production</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Whether you have a clear scope or just a problem to solve, Kovil AI builds AI products that work. Staff augmentation to extend your team, or a fixed-price squad to deliver the whole thing.</p>
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
                'End-to-end AI development — architecture through deployment',
                'AI agents, RAG pipelines, LLM integrations, and workflow automation',
                'Two engagement models: staff aug (extend your team) or fixed-price squad (we own delivery)',
                '150+ successful AI deployments across legal, fintech, healthcare, and e-commerce',
                'Engagement Manager on every engagement',
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
                { step: '01', title: 'Describe Your Needs', desc: 'Brief us on your AI project. Staff aug or fixed-price — we scope the right engagement.' },
                { step: '02', title: 'Meet Your Team', desc: 'Engineers matched in 24–48 hours. Milestone plan agreed before code starts.' },
                { step: '03', title: 'Watch Results Roll In', desc: 'First deliverable in 14 days. Milestone-gated. Zero lock-in.' },
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8">Explore AI Capabilities</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { label: 'AI Agent Development', href: '/ai-agent-development' },
                { label: 'RAG Pipeline Development', href: '/rag-pipeline-development' },
                { label: 'LLM Development', href: '/llm-development' },
                { label: 'Fixed-Price AI Project', href: '/fixed-price-ai-project' },
                { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
              ].map(r => (
                <Link key={r.href} href={r.href} className="px-4 py-2 rounded-full border border-[#E5E2D9] bg-white text-sm font-medium text-[#0A0A0A] hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors font-sans">{r.label}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="p-8 md:p-10 rounded-2xl bg-[#0A0A0A] text-white">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Legal / LegalTech</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI Contract Review Agent — 94% Clause Automation Delivered</h3>
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
