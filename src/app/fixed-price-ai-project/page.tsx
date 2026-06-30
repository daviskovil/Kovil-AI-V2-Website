import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fixed-Price AI Projects | Milestone-Gated Delivery | Kovil AI',
  description: 'Fixed-price AI project delivery from Kovil AI. Defined scope, defined timeline, defined price. Milestone-gated — you approve each phase. Zero delivery risk. Zero surprise bills.',
  keywords: ['fixed price AI project', 'AI project delivery', 'fixed price software development', 'milestone-gated AI development'],
  openGraph: { title: 'Fixed-Price AI Projects | Kovil AI', description: 'Defined scope, price, timeline. Zero surprises.', url: 'https://kovil.ai/fixed-price-ai-project', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Fixed-Price AI Projects | Kovil AI', description: 'Zero surprises. Milestone-gated delivery.' },
  alternates: { canonical: 'https://kovil.ai/fixed-price-ai-project' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Fixed-Price AI Project', item: 'https://kovil.ai/fixed-price-ai-project' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Fixed-Price AI Project', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Fixed-price, milestone-gated AI project delivery. Defined scope, defined price, zero surprises.', serviceType: 'Fixed-Price AI Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What makes a project "fixed price"?', acceptedAnswer: { '@type': 'Answer', text: 'A fixed-price project has a defined scope, defined timeline, and defined price — all agreed and signed before any code is written. You know exactly what you\'re getting and what it will cost. Milestone-gated payment means you pay phase by phase, and only move forward when you approve.' } },
    { '@type': 'Question', name: 'What if scope changes mid-project?', acceptedAnswer: { '@type': 'Answer', text: 'Scope changes are scoped and priced as a change order before any additional work begins. The original fixed price remains fixed for the original scope. No surprise invoices.' } },
    { '@type': 'Question', name: 'How are milestones defined?', acceptedAnswer: { '@type': 'Answer', text: 'Milestones are defined during the discovery phase — typically 3–5 phases covering: architecture & design, core build, integration, QA, and launch. Each milestone has clear deliverables and acceptance criteria that you sign off on.' } },
    { '@type': 'Question', name: 'What happens if you miss a deadline?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is accountable for milestone delivery. If we miss a milestone deadline without prior notice and agreed extension, the milestone cost is adjusted accordingly. Accountability is built into the contract.' } },
    { '@type': 'Question', name: 'Can I convert to a staff aug engagement after?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many clients start with a fixed-price project to build V1, then convert to staff augmentation for ongoing development. The same engineer can often continue — ensuring continuity of knowledge.' } },
    { '@type': 'Question', name: 'What types of AI projects do you deliver fixed-price?', acceptedAnswer: { '@type': 'Answer', text: 'AI agents, RAG pipelines, LLM-powered applications, document processing systems, workflow automation, computer vision systems, and full AI SaaS products. We\'ve delivered 150+ successful AI projects.' } },
  ],
}

const phases = [
  { num: 1, title: 'Discovery & Scope', desc: 'We document your requirements, define success criteria, and produce a fixed-price proposal. Nothing starts until you approve.' },
  { num: 2, title: 'Architecture & Design', desc: 'System architecture, data flows, and technical design reviewed and signed off before any code is written.' },
  { num: 3, title: 'Build (Milestone-Gated)', desc: 'Development in structured sprints. Each milestone reviewed and approved before the next begins. Engagement Manager audits every commit.' },
  { num: 4, title: 'QA & Launch', desc: 'End-to-end testing, performance validation, and zero-downtime launch to production.' },
  { num: 5, title: 'Handoff & Optional Support', desc: 'Full IP and code handoff. Optional ongoing staff aug or AI operations support available.' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Fixed-Price AI Projects</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Fixed-Price AI Projects — Know Exactly What You&apos;re Getting Before We Start</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Vague AI agency quotes and hourly billing that spirals out of control are the norm. Kovil AI is the exception — fixed scope, fixed timeline, fixed price, milestone-gated delivery. No surprises.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">What You Get</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Fixed scope defined and signed before a line of code is written',
                'Milestone-gated payment — you approve each phase before the next begins',
                'Dedicated squad with a Project Manager overseeing delivery',
                'Engagement Manager auditing every commit',
                '150+ successful fixed-price AI deployments',
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">The 5-Phase Delivery Process</h2>
            <div className="space-y-4">
              {phases.map(p => (
                <div key={p.num} className="flex gap-6 p-6 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
                  <div className="text-[#FF4F00] font-display text-2xl font-bold min-w-[2rem] opacity-60">0{p.num}</div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-[#A09A91] font-sans leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="p-8 md:p-10 rounded-2xl bg-[#0A0A0A] text-white">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Mortgage / FinTech</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI Document Platform — Fixed-Price, Delivered in a Single Sprint</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">2-Phase Platform Delivered</p>
                <p className="text-[#FF4F00] font-display text-2xl font-bold">Auto Document Classification</p>
              </div>
              <Link href="/case-studies/secondary-mortgage-document-platform" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans">Read the Case Study <ArrowRight className="w-4 h-4" /></Link>
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
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/dedicated-ai-team" className="text-[#FF4F00] font-semibold hover:underline font-sans">Dedicated AI Team →</Link>
              <Link href="/ai-staff-augmentation" className="text-[#FF4F00] font-semibold hover:underline font-sans">AI Staff Augmentation →</Link>
              <Link href="/how-it-works" className="text-[#FF4F00] font-semibold hover:underline font-sans">How It Works →</Link>
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
