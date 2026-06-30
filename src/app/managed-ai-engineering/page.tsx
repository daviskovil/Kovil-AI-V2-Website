import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Managed AI Engineering | Zero-Chase Delivery | Kovil AI',
  description: 'Managed AI engineering from Kovil AI. Every engineer paired with an Engagement Manager who audits every commit. Fixed-price, milestone-gated. Zero delivery risk.',
  keywords: ['managed AI engineering', 'managed AI development', 'AI engineering services', 'managed software engineering'],
  openGraph: { title: 'Managed AI Engineering | Kovil AI', description: 'Zero-chase delivery — every commit audited.', url: 'https://kovil.ai/managed-ai-engineering', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Managed AI Engineering | Kovil AI', description: 'Zero-chase delivery — every commit audited.' },
  alternates: { canonical: 'https://kovil.ai/managed-ai-engineering' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Managed AI Engineering', item: 'https://kovil.ai/managed-ai-engineering' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Managed AI Engineering', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Every engineer paired with an Engagement Manager who audits every commit. Milestone-gated, zero-chase delivery.', serviceType: 'Managed AI Engineering', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is managed AI engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Managed AI engineering is a model where Kovil AI provides not just the engineer, but the management layer on top — an Engagement Manager who audits every commit, milestone reporting, and delivery accountability. You never chase a developer for status.' } },
    { '@type': 'Question', name: 'What is the Zero-Chase Policy?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI\'s Zero-Chase Policy means you never need to follow up to find out where your build stands. Your Engagement Manager proactively reports progress, flags blockers, and ensures milestone delivery — you\'re informed, not chasing.' } },
    { '@type': 'Question', name: 'How does milestone-gating work?', acceptedAnswer: { '@type': 'Answer', text: 'Every engagement is divided into defined milestones with clear deliverables and quality criteria. You review and approve each milestone before the next begins. No surprises, no scope creep.' } },
    { '@type': 'Question', name: 'What does the Engagement Manager do?', acceptedAnswer: { '@type': 'Answer', text: 'The Engagement Manager audits every commit for code quality, architecture standards, and milestone delivery. They produce weekly status reports and are the single point of accountability for delivery quality.' } },
    { '@type': 'Question', name: 'Is there a fixed-price option?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Both fixed-price projects (defined scope, defined price) and staff augmentation (flexible, ongoing) are available under the managed AI engineering model.' } },
    { '@type': 'Question', name: 'What is the trial period?', acceptedAnswer: { '@type': 'Answer', text: '2-week risk-free trial. Free rematching if it\'s not the right fit. Zero termination fees. 98% trial-to-hire rate — we get the match right.' } },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Managed AI Engineering</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Managed AI Engineering — You Focus on the Business. We Handle Delivery.</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Kovil AI&apos;s Zero-Chase Policy means you never have to chase a developer for a status update again. Every engineer is pair-locked with an Engagement Manager who audits every commit.</p>
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
                'Engagement Manager auditing every commit — you always know where your build stands',
                'Milestone-gated sprints — you approve before we proceed',
                'Weekly delivery reports — what shipped, what\'s next, what\'s blocked',
                'Fixed-price and staff aug models available',
                '98% trial-to-hire rate — we get the match right',
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
                { step: '01', title: 'Describe Your Needs', desc: 'Brief us on your AI project. A Delivery Lead scopes requirements and assigns the right specialist.' },
                { step: '02', title: 'Meet Your Engineer + Manager', desc: 'Matched in 24–48 hours. Your engineer and Engagement Manager are introduced together.' },
                { step: '03', title: 'Watch Results Roll In', desc: 'Weekly reports, milestone approvals, zero chasing. First feature in 14 days.' },
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
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI Contract Review Agent — Zero-Chase Delivery for a 60-Attorney Firm</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">78% Faster Review</p>
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
              <Link href="/how-it-works" className="text-[#FF4F00] font-semibold hover:underline font-sans">How It Works →</Link>
              <Link href="/staff-augmentation" className="text-[#FF4F00] font-semibold hover:underline font-sans">Staff Augmentation →</Link>
              <Link href="/fixed-price-ai-project" className="text-[#FF4F00] font-semibold hover:underline font-sans">Fixed-Price AI Projects →</Link>
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
