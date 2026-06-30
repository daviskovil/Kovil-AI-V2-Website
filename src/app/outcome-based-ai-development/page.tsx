import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Outcome-Based AI Development | Pay for Results | Kovil AI',
  description: 'Outcome-based AI development from Kovil AI. You define the outcome. We scope, build, and deliver it. Fixed price, milestone-gated. Zero delivery risk.',
  keywords: ['outcome based AI development', 'pay for results AI', 'AI development fixed price', 'results-based AI'],
  openGraph: { title: 'Outcome-Based AI Development | Kovil AI', description: 'Pay for results, not hours.', url: 'https://kovil.ai/outcome-based-ai-development', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Outcome-Based AI Development | Kovil AI', description: 'Pay for results, not hours.' },
  alternates: { canonical: 'https://kovil.ai/outcome-based-ai-development' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Outcome-Based AI Development', item: 'https://kovil.ai/outcome-based-ai-development' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Outcome-Based AI Development', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Outcome-based, fixed-price AI development. You define success — we build and deliver it.', serviceType: 'Outcome-Based AI Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is outcome-based AI development?', acceptedAnswer: { '@type': 'Answer', text: 'Outcome-based development means you define the business outcome you want — not a list of features. Kovil AI then scopes, prices, builds, and delivers to that outcome. You pay for results, not engineering hours.' } },
    { '@type': 'Question', name: 'How do you define "the outcome"?', acceptedAnswer: { '@type': 'Answer', text: 'In the discovery phase, we work with you to translate your business goal into measurable success criteria — e.g., "AI that classifies 95%+ of incoming documents correctly" or "agent that resolves 70%+ of Tier-1 support tickets without human escalation."' } },
    { '@type': 'Question', name: 'What happens if the outcome isn\'t met?', acceptedAnswer: { '@type': 'Answer', text: 'Our milestone-gated model means you don\'t pay for the next phase until the current one meets its criteria. If a milestone isn\'t hit, we fix it before proceeding — at no additional cost.' } },
    { '@type': 'Question', name: 'Is outcome-based different from fixed-price?', acceptedAnswer: { '@type': 'Answer', text: 'Outcome-based is a flavor of fixed-price — the price is fixed, and the milestone approval criteria are tied to business outcomes, not just feature delivery. You\'re paying for impact, not just completion.' } },
    { '@type': 'Question', name: 'What types of AI outcomes do you deliver?', acceptedAnswer: { '@type': 'Answer', text: 'AI agents that automate workflows, RAG systems that answer questions from your documents, document classifiers, recommendation engines, and AI-powered internal tools — all with measurable outcome definitions.' } },
    { '@type': 'Question', name: 'How quickly can you start?', acceptedAnswer: { '@type': 'Answer', text: 'Discovery and scoping within a week, first milestone delivered within 14 days of project kick-off.' } },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Outcome-Based AI Development</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Outcome-Based AI Development — Pay for Results, Not Hours</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Every AI agency bills hourly. Kovil AI bills for outcomes. Tell us what success looks like. We scope it, price it, build it, and don&apos;t move to the next phase until you approve the last one.</p>
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
                'You define success — we document it, price it, and are held to it',
                'Milestone-gated — you hold the keys at every stage',
                'Fixed price — no hourly billing, no scope creep invoices',
                'AI-native execution — your team builds with LLMs, agents, and automation from day one',
                'Case-study-proven — 150+ deployments shipped',
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
                { step: '01', title: 'Define the Outcome', desc: 'Tell us what success looks like in business terms. We translate that into measurable delivery criteria.' },
                { step: '02', title: 'We Scope & Price It', desc: 'Fixed-price proposal with milestone plan delivered within 48 hours. You approve before we start.' },
                { step: '03', title: 'We Build & Deliver It', desc: 'Milestone-gated build with Engagement Manager oversight. You only move forward when you\'re satisfied.' },
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
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI Contract Review — Outcome Defined as 94% Clause Automation. Delivered.</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">94% Clause Analysis Automated</p>
                <p className="text-[#FF4F00] font-display text-2xl font-bold">$380K Reclaimed</p>
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
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/fixed-price-ai-project" className="text-[#FF4F00] font-semibold hover:underline font-sans">Fixed-Price AI Projects →</Link>
              <Link href="/ai-project-development" className="text-[#FF4F00] font-semibold hover:underline font-sans">AI Project Development →</Link>
              <Link href="/contact" className="text-[#FF4F00] font-semibold hover:underline font-sans">Get a Quote →</Link>
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
