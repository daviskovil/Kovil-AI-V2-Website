import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Upwork Alternative | Kovil AI vs Upwork | Managed AI Engineering',
  description: 'Looking for an Upwork alternative for AI engineering? Kovil AI offers vetted AI engineers with Engagement Manager oversight, 2-week trial, and milestone-gated delivery.',
  keywords: ['Upwork alternative', 'Upwork vs Kovil AI', 'alternative to Upwork', 'Upwork competitor for AI'],
  openGraph: { title: 'Upwork Alternative | Kovil AI', description: 'Vetted AI engineering vs open marketplace.', url: 'https://kovil.ai/upwork-alternative', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Upwork Alternative | Kovil AI', description: 'Why teams choose Kovil AI over Upwork.' },
  alternates: { canonical: 'https://kovil.ai/upwork-alternative' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Upwork Alternative', item: 'https://kovil.ai/upwork-alternative' }] }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why consider an Upwork alternative for AI engineering?', acceptedAnswer: { '@type': 'Answer', text: 'Upwork is an open marketplace where anyone can list themselves as an AI engineer regardless of actual capability. Credentials are self-reported. Disputes are common. There is no Engagement Manager, no delivery oversight, and no milestone accountability. For AI projects with real business stakes, the risk profile of an unvetted marketplace is simply too high.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from Upwork?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is a managed AI engineering firm with a curated, deeply-vetted team. Every engineer is vetted through 150+ real AI deployments, not self-reported experience. Every engagement has an Engagement Manager. Delivery is milestone-gated. 2-week trial with no deposit. No disputes, no bidding wars.' } },
    { '@type': 'Question', name: 'Is Kovil AI more expensive than Upwork?', acceptedAnswer: { '@type': 'Answer', text: 'Compared to low-bid Upwork freelancers, yes. Compared to the total cost of a failed AI project, rework, and management overhead — Kovil AI is cheaper. 98% of Kovil AI clients extend past their 2-week trial. Upwork project failure rates for complex AI projects are significantly higher.' } },
    { '@type': 'Question', name: 'Can Kovil AI deliver a fixed-price AI project?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — fixed-price delivery is a core Kovil AI model. We scope, price, and deliver the entire project milestone by milestone. You pay for outcomes, not hours. Upwork is hourly billing only.' } },
  ],
}

const comparisonRows = [
  { label: 'Type', upwork: 'Open marketplace, unvetted', kovil: 'Managed — EM-led' },
  { label: 'Rate', upwork: 'Hourly bids, wide range', kovil: 'Transparent, competitive' },
  { label: 'Vetting', upwork: 'Self-reported skills', kovil: '150+ AI deployments vetted' },
  { label: 'Time to Start', upwork: 'Immediately (anyone bids)', kovil: '48 hours (matched, vetted)' },
  { label: 'Delivery Guarantee', upwork: 'Disputes common', kovil: 'Engagement Manager + milestones' },
  { label: 'Trial', upwork: 'No trial', kovil: '2-week trial, no deposit' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20">

        <section className="bg-[#0A0A0A] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Upwork Alternative</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Upwork Alternative — Vetted AI Engineers With Delivery Accountability</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Upwork is an open marketplace where AI engineering credentials are self-reported. Kovil AI vets every engineer through 150+ real AI deployments, assigns an Engagement Manager, and backs every engagement with a 2-week trial and milestone-gated delivery.</p>
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
              <span>98% Trial-to-Hire Rate</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>No Disputes, No Bidding Wars</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">Kovil AI vs Upwork</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#E5E2D9] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans w-1/3"></th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans">Upwork</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#FF4F00] font-sans">Kovil AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'}>
                      <td className="p-4 text-sm font-semibold text-[#0A0A0A] font-sans border-t border-[#E5E2D9]">{row.label}</td>
                      <td className="p-4 text-sm text-[#6B7280] font-sans border-t border-[#E5E2D9]">{row.upwork}</td>
                      <td className="p-4 text-sm text-[#0A0A0A] font-semibold font-sans border-t border-[#E5E2D9]">{row.kovil}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">What Makes Kovil AI Different</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Curated, deeply-vetted AI engineers — not self-reported resumes',
                'Engagement Manager on every engagement — no disputes, no chasing freelancers',
                'Milestone-gated delivery — you approve every phase before payment',
                '2-week trial with no deposit — real accountability from day one',
                'Fixed-price project delivery available — Upwork is hourly only',
                '150+ AI deployments in production — not just profiles',
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

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8">Explore Alternatives</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Toptal Alternative', href: '/toptal-alternative' },
                { label: 'Turing Alternative', href: '/turing-alternative' },
                { label: 'Andela Alternative', href: '/andela-alternative' },
                { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
              ].map(r => (
                <Link key={r.href} href={r.href} className="px-4 py-2 rounded-full border border-[#E5E2D9] bg-white text-sm font-medium text-[#0A0A0A] hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors font-sans">{r.label}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Start Your 2-Week Risk-Free Trial</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">No deposit. No bidding. Engagement Manager included. Matched in 48 hours.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}
