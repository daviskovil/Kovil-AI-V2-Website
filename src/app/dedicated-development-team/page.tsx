import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dedicated Development Team | Full-Stack Squads | Kovil AI',
  description: 'Hire a dedicated development team from Kovil AI. Full-stack squads for web, mobile, and AI product development. Fixed-price or staff aug. Managed delivery.',
  keywords: ['dedicated development team', 'hire development team', 'outsource development team', 'dedicated software team'],
  openGraph: { title: 'Dedicated Development Team | Kovil AI', description: 'Full-stack squads, managed delivery.', url: 'https://kovil.ai/dedicated-development-team', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'Dedicated Development Team | Kovil AI', description: 'Full-stack squads, managed delivery.' },
  alternates: { canonical: 'https://kovil.ai/dedicated-development-team' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'Dedicated Development Team', item: 'https://kovil.ai/dedicated-development-team' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'Dedicated Development Team', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Full-stack development squads — frontend, backend, QA, DevOps — managed delivery.', serviceType: 'Dedicated Development Team', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is a dedicated development team?', acceptedAnswer: { '@type': 'Answer', text: 'A dedicated development team is a full squad assembled for your product — typically frontend, backend, QA, and DevOps engineers working together under your direction, managed and overseen by Kovil AI.' } },
    { '@type': 'Question', name: 'How is this different from staff augmentation?', acceptedAnswer: { '@type': 'Answer', text: 'Staff augmentation adds individual engineers to your existing team. A dedicated team is a self-contained squad that can operate independently — with a Project Manager coordinating delivery and an Engagement Manager auditing quality.' } },
    { '@type': 'Question', name: 'Can a dedicated team build an entire product?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly scope and deliver complete AI and web products — from architecture through deployment — using dedicated squads with fixed-price, milestone-gated delivery.' } },
    { '@type': 'Question', name: 'How quickly does the team start?', acceptedAnswer: { '@type': 'Answer', text: 'Squad assembled within a week, first deliverables in 14 days.' } },
    { '@type': 'Question', name: 'Is there a risk-free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — 2-week trial, free rematching on any team member, zero termination fees.' } },
    { '@type': 'Question', name: 'Do you offer AI-native development teams?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All Kovil AI teams are AI-native — they integrate LLM features, automation, and AI workflows into products naturally. See our Dedicated AI Team page for AI-specific squads.' } },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Dedicated Development Team</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Dedicated Development Teams — Full Squads, Managed Delivery</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Stop juggling freelancers. Kovil AI assembles and manages dedicated development squads — full-stack engineers, QA, and DevOps working as a unified team on your product.</p>
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
                'Coordinated squads — frontend, backend, QA, DevOps in one engagement',
                'AI-native teams that integrate LLM and automation features naturally',
                'Milestone-gated delivery — you approve, we ship',
                'Engagement Manager auditing every commit',
                'Scale up or down with no termination fees',
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
                { step: '01', title: 'Describe Your Needs', desc: 'Tell us your product scope. We scope the right squad composition and milestone plan.' },
                { step: '02', title: 'Meet Your Squad', desc: 'Your dedicated team is assembled within a week. Milestone plan locked before any code is written.' },
                { step: '03', title: 'Watch Results Roll In', desc: 'First deliverable in 14 days. You approve at every milestone. Zero lock-in.' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Mortgage / FinTech</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">Full AI Document Platform Built in a Single V1 Sprint</h3>
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
              <Link href="/staff-augmentation" className="text-[#FF4F00] font-semibold hover:underline font-sans">Staff Augmentation →</Link>
              <Link href="/dedicated-ai-team" className="text-[#FF4F00] font-semibold hover:underline font-sans">Dedicated AI Team →</Link>
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
