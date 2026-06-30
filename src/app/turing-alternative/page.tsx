import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Turing Alternative | Kovil AI vs Turing | Managed AI Engineering',
  description: 'Looking for a Turing alternative? Kovil AI offers managed AI engineering with an Engagement Manager, milestone-gated delivery, and a 2-week trial. No AI screening gimmicks.',
  keywords: ['Turing alternative', 'Turing vs Kovil AI', 'alternative to Turing', 'Turing.com competitor'],
  openGraph: { title: 'Turing Alternative | Kovil AI', description: 'Managed AI engineering vs AI-matched marketplace.', url: 'https://kovil.ai/turing-alternative', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Turing Alternative | Kovil AI', description: 'Why teams choose Kovil AI over Turing.' },
  alternates: { canonical: 'https://kovil.ai/turing-alternative' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Turing Alternative', item: 'https://kovil.ai/turing-alternative' }] }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Turing.com and why consider an alternative?', acceptedAnswer: { '@type': 'Answer', text: 'Turing is an AI-matched marketplace for remote engineers. You submit a job description, their algorithm matches candidates, and you manage the engineer directly. There is no Engagement Manager, no delivery oversight, and no guarantee beyond a basic replacement policy. For AI-specific projects, domain vetting matters more than algorithm matching.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from Turing?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is a managed AI engineering firm. Every engagement includes a human Engagement Manager who owns delivery oversight, not an algorithm. Our engineers are vetted through 150+ real AI deployments, not a screening test. We also offer fixed-price project delivery — Turing is staff aug only.' } },
    { '@type': 'Question', name: 'Is Kovil AI more expensive than Turing?', acceptedAnswer: { '@type': 'Answer', text: 'Turing positions itself on low rates ($30–$60/hr). However, the total cost of an unmanaged engagement — your time managing the engineer, rework from missed specs, and the cost of a failed project — often exceeds the cost of a managed engagement. Kovil AI\'s rates are competitive, with the Engagement Manager included.' } },
    { '@type': 'Question', name: 'How fast can Kovil AI start?', acceptedAnswer: { '@type': 'Answer', text: '48 hours to match, first milestone delivered within 14 days. Turing advertises 48-hour matching as well, but without managed delivery oversight.' } },
  ],
}

const comparisonRows = [
  { label: 'Type', turing: 'AI-matched marketplace', kovil: 'Managed — EM-led' },
  { label: 'Rate', turing: '$30–$60/hr', kovil: 'Transparent, competitive' },
  { label: 'Vetting', turing: 'AI-screened assessments', kovil: '150+ AI deployments vetted' },
  { label: 'Time to Start', turing: '48 hours', kovil: '48 hours' },
  { label: 'Delivery Guarantee', turing: 'No delivery guarantee', kovil: 'Engagement Manager + milestones' },
  { label: 'Trial', turing: 'No standard trial', kovil: '2-week trial, no deposit' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Turing Alternative</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Turing Alternative — Managed AI Engineering vs AI-Matched Marketplace</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Turing matches engineers with an algorithm and leaves you to manage delivery. Kovil AI assigns an Engagement Manager, delivers milestone-gated, and backs every engagement with a 2-week trial. Same speed — fundamentally different delivery model.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">Kovil AI vs Turing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-[#E5E2D9] rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans w-1/3"></th>
                    <th className="p-4 text-left text-sm font-semibold text-[#A09A91] font-sans">Turing</th>
                    <th className="p-4 text-left text-sm font-semibold text-[#FF4F00] font-sans">Kovil AI</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'}>
                      <td className="p-4 text-sm font-semibold text-[#0A0A0A] font-sans border-t border-[#E5E2D9]">{row.label}</td>
                      <td className="p-4 text-sm text-[#6B7280] font-sans border-t border-[#E5E2D9]">{row.turing}</td>
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
                'Engagement Manager on every engagement — human oversight, not an algorithm',
                'AI-specific vetting through 150+ real deployments — not a timed coding test',
                'Fixed-price project delivery available — Turing is staff aug only',
                'Milestone-gated delivery — you approve each phase before we proceed',
                '2-week trial with no deposit — zero financial risk to start',
                'Full replacement guarantee — free swap if it\'s not working',
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
                { label: 'Andela Alternative', href: '/andela-alternative' },
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
