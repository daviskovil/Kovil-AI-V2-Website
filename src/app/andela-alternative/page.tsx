import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Andela Alternative | Kovil AI vs Andela | Managed AI Engineering',
  description: 'Looking for an Andela alternative? Kovil AI offers managed AI engineering with an Engagement Manager, 2-week trial, 48-hour matching, and milestone-gated delivery.',
  keywords: ['Andela alternative', 'Andela vs Kovil AI', 'alternative to Andela', 'Andela competitor'],
  openGraph: { title: 'Andela Alternative | Kovil AI', description: 'Managed AI engineering vs Africa-focused talent marketplace.', url: 'https://kovil.ai/andela-alternative', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Andela Alternative | Kovil AI', description: 'Why teams choose Kovil AI over Andela.' },
  alternates: { canonical: 'https://kovil.ai/andela-alternative' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Andela Alternative', item: 'https://kovil.ai/andela-alternative' }] }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Andela and why consider an alternative?', acceptedAnswer: { '@type': 'Answer', text: 'Andela is a talent marketplace focused on African engineers. They provide staff augmentation at competitive salary-based rates with internal vetting. Matching takes 1–4 weeks. There is no Engagement Manager and no delivery guarantee beyond a replacement policy. For AI-specific projects requiring deep domain vetting and managed delivery, teams often look for alternatives.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from Andela?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is a managed AI engineering firm. Every engagement includes an Engagement Manager who owns delivery oversight. Our engineers are vetted through 150+ real AI deployments, not just internal assessments. We match in 48 hours (vs Andela\'s 1–4 weeks) and offer a 2-week trial with no deposit.' } },
    { '@type': 'Question', name: 'Does Kovil AI have a trial period?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — 2-week risk-free trial with no deposit required. Andela has limited trial options depending on the engagement structure. Kovil AI\'s trial is a firm commitment: if it\'s not working after 2 weeks, you pay nothing and we find a replacement or part ways.' } },
    { '@type': 'Question', name: 'Can Kovil AI do fixed-price project delivery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kovil AI offers both staff augmentation and fixed-price project delivery. Andela is staff aug only. Fixed-price delivery means we scope, price, and deliver the entire project — you pay for outcomes, not hours.' } },
  ],
}

const comparisonRows = [
  { label: 'Type', andela: 'Africa-focused marketplace', kovil: 'Managed — EM-led' },
  { label: 'Rate', andela: 'Salary-based, competitive', kovil: 'Transparent, competitive' },
  { label: 'Vetting', andela: 'Internal assessments', kovil: '150+ AI deployments vetted' },
  { label: 'Time to Start', andela: '1–4 weeks', kovil: '48 hours' },
  { label: 'Delivery Guarantee', andela: 'No delivery guarantee', kovil: 'Engagement Manager + milestones' },
  { label: 'Trial', andela: 'Limited trial options', kovil: '2-week trial, no deposit' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Andela Alternative</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Andela Alternative — Managed AI Engineering With 48-Hour Matching and a Real Trial</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Andela takes 1–4 weeks to match and leaves you managing the engineer. Kovil AI matches in 48 hours, assigns an Engagement Manager, and starts your 2-week trial with no deposit. AI-specific vetting through 150+ real deployments.</p>
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
              <span>No Deposit Required</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">Kovil AI vs Andela</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#E5E2D9] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans w-1/3"></th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans">Andela</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#FF4F00] font-sans">Kovil AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'}>
                      <td className="p-4 text-sm font-semibold text-[#0A0A0A] font-sans border-t border-[#E5E2D9]">{row.label}</td>
                      <td className="p-4 text-sm text-[#6B7280] font-sans border-t border-[#E5E2D9]">{row.andela}</td>
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
                'Engagement Manager on every engagement — your single point of contact',
                'AI-specific vetting — 150+ real deployments, not internal assessments',
                'Fixed-price project delivery available — Andela is staff aug only',
                'Milestone-gated delivery — you hold the keys at every phase',
                '2-week trial with no deposit — zero financial risk to start',
                'Matched in 48 hours — not 1–4 weeks',
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
                { label: 'Upwork Alternative', href: '/upwork-alternative' },
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
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">No deposit. No lock-in. Engagement Manager included. Matched in 48 hours.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}
