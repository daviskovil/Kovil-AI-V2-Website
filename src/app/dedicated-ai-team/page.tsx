import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dedicated AI Team | Build with a Full AI Squad | Kovil AI',
  description: 'Build with a dedicated AI team from Kovil AI. AI engineers, data engineers, and DevOps in a coordinated squad. Fixed-price delivery. Zero delivery risk.',
  keywords: ['dedicated AI team', 'hire AI team', 'AI development team', 'dedicated AI engineers'],
  openGraph: { title: 'Dedicated AI Team | Kovil AI', description: 'Full AI squads — fixed-price, milestone-gated.', url: 'https://kovil.ai/dedicated-ai-team', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Dedicated AI Team | Kovil AI', description: 'Full AI squads — fixed-price delivery.' },
  alternates: { canonical: 'https://kovil.ai/dedicated-ai-team' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Dedicated AI Team', item: 'https://kovil.ai/dedicated-ai-team' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Dedicated AI Team', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Coordinated AI squads — engineers, data specialists, and DevOps in one milestone-gated engagement.', serviceType: 'Dedicated AI Team', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is a dedicated AI team?', acceptedAnswer: { '@type': 'Answer', text: 'A dedicated AI team is a coordinated squad assembled specifically for your AI project — typically including AI/ML engineers, a data engineer, and a DevOps specialist, managed by a Project Manager and overseen by a Kovil AI Engagement Manager.' } },
    { '@type': 'Question', name: 'How is this different from hiring individual engineers?', acceptedAnswer: { '@type': 'Answer', text: 'A dedicated team is pre-configured for full-stack AI delivery. The squad is coordinated from day one — no onboarding friction between team members, and a Project Manager keeps everyone aligned.' } },
    { '@type': 'Question', name: 'Can I use a fixed-price model with a dedicated team?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dedicated teams can be engaged on a fixed-price, milestone-gated basis — you define the outcome, we define the price, and you approve each phase before we proceed.' } },
    { '@type': 'Question', name: 'How quickly can a dedicated AI team start?', acceptedAnswer: { '@type': 'Answer', text: 'Squad assembled and onboarded within a week, first feature ships in 14 days of kick-off.' } },
    { '@type': 'Question', name: 'What does the Engagement Manager do?', acceptedAnswer: { '@type': 'Answer', text: 'The Engagement Manager audits every commit from every team member — enforcing code quality, architecture standards, and milestone delivery across the full squad.' } },
    { '@type': 'Question', name: 'Is there a risk-free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — 2-week trial, free rematching on any team member, zero termination fees.' } },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Dedicated AI Team</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">A Dedicated AI Team — Without the Hiring Nightmare</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Building AI at scale requires a coordinated team — not just one engineer. Kovil AI assembles and manages dedicated AI squads: engineers, data specialists, and DevOps in one milestone-gated engagement.</p>
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
                'Full-squad delivery — AI/ML engineers, data engineers, and DevOps working in sync',
                'Fixed scope, fixed price, milestone-gated — you approve each phase',
                'Dedicated Project Manager coordinating the squad',
                'An Engagement Manager auditing every commit from every team member',
                'First feature ships in 14 days of kick-off',
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
                { step: '01', title: 'Describe Your Needs', desc: 'Tell us your AI project scope and outcome. A Delivery Lead scopes the right squad composition.' },
                { step: '02', title: 'Meet Your Squad', desc: 'Your dedicated team is assembled and introduced within a week. Milestone plan agreed upfront.' },
                { step: '03', title: 'Watch Results Roll In', desc: 'First feature ships in 14 days. You approve at each milestone. Scale or wind down — zero lock-in.' },
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
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI Contract Review Agent Built by a Coordinated AI Squad</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">94% Clause Automation</p>
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
