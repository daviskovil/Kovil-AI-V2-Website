import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Staff Augmentation | Hire AI Engineers On Demand | Kovil AI',
  description: 'AI staff augmentation from Kovil AI. Embed elite AI engineers into your team — matched in 48 hours. Fixed-price AI projects or flexible staff aug. Zero delivery risk.',
  keywords: ['AI staff augmentation', 'hire AI engineers', 'AI engineering team', 'AI staff augmentation company'],
  openGraph: {
    title: 'AI Staff Augmentation | Hire AI Engineers On Demand | Kovil AI',
    description: 'Elite AI engineers embedded in your team in 48 hours. Fixed-price or flexible. Zero delivery risk.',
    url: 'https://kovil.ai/ai-staff-augmentation',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'AI Staff Augmentation | Kovil AI', description: 'Elite AI engineers in 48 hours.' },
  alternates: { canonical: 'https://kovil.ai/ai-staff-augmentation' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI Staff Augmentation', item: 'https://kovil.ai/ai-staff-augmentation' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'AI Staff Augmentation', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Embed elite AI engineers into your team — matched in 48 hours, milestone-gated, 2-week risk-free trial.', serviceType: 'AI Staff Augmentation', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is AI staff augmentation?', acceptedAnswer: { '@type': 'Answer', text: 'AI staff augmentation is embedding specialized AI engineers — LLM specialists, ML engineers, data engineers, DevOps — into your team on a flexible basis. You get expert AI talent without the risk and delay of a full-time hire.' } },
    { '@type': 'Question', name: 'What kinds of AI engineers do you place?', acceptedAnswer: { '@type': 'Answer', text: 'AI engineers, generative AI developers, LLM engineers, ML engineers, data engineers, DevOps specialists, and cloud architects with AI workload expertise. We cover the full AI engineering stack.' } },
    { '@type': 'Question', name: 'How is this different from a recruiting agency?', acceptedAnswer: { '@type': 'Answer', text: 'A recruiting agency places candidates and walks away. Kovil AI is a managed firm — we pair an Engagement Manager to every engineer, audit every commit, and are accountable for delivery quality, not just placement.' } },
    { '@type': 'Question', name: 'Can you augment our existing AI team?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly embed engineers into teams that already have AI capability — to fill skill gaps, accelerate delivery, or cover a specific sprint or project phase.' } },
    { '@type': 'Question', name: 'Do you do fixed-price AI projects?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Both models are available — flexible staff augmentation and outcome-based fixed-price AI project delivery with milestone-gated payment.' } },
    { '@type': 'Question', name: 'How quickly can an AI engineer start?', acceptedAnswer: { '@type': 'Answer', text: 'Matched in 24–48 hours, onboarded within a week, first feature ships in 14 days.' } },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI Staff Augmentation</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">AI Staff Augmentation — Elite AI Engineers, Managed Delivery</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">51% of companies have an AI skills gap. Kovil AI closes it fast — placing vetted AI engineers, GenAI developers, and LLM specialists into your team in 48 hours.</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">What You Get</h2>
            <p className="text-[#6B7280] text-lg font-sans mb-12 max-w-2xl">AI-native engineers with managed delivery — not a marketplace search.</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Top 1% AI engineers: AI/ML, GenAI, LLM, DevOps, and data specialists',
                'AI-native delivery — your engineer understands LLMs, RAG, and production AI systems',
                'Engagement Manager on every placement — auditing every commit',
                'Flexible engagement — staff aug or fixed-price project',
                '2-week risk-free trial, free rematching',
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
                { step: '01', title: 'Describe Your Needs', desc: 'Tell us your AI stack, use case, and timeline. We scope the right specialist in 24 hours.' },
                { step: '02', title: 'Meet Your AI Engineer', desc: 'Matched with a vetted AI specialist in 24–48 hours. Start your 2-week risk-free trial.' },
                { step: '03', title: 'Watch Results Roll In', desc: 'First AI feature ships in 14 days. Scale or wind down — zero lock-in.' },
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8">AI Engineering Specialisms</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { label: 'AI Engineers', href: '/hire/ai-engineer' },
                { label: 'GenAI Developers', href: '/hire/generative-ai-developer' },
                { label: 'LLM Engineers', href: '/hire/llm-engineer' },
                { label: 'ML Engineers', href: '/hire/ml-engineer' },
                { label: 'Data Engineers', href: '/hire/data-engineer' },
                { label: 'DevOps Engineers', href: '/hire/devops-engineer' },
              ].map(r => (
                <Link key={r.href} href={r.href} className="px-4 py-2 rounded-full border border-[#E5E2D9] bg-white text-sm font-medium text-[#0A0A0A] hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors font-sans">{r.label}</Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/staff-augmentation" className="text-[#FF4F00] font-semibold hover:underline font-sans">All Staff Augmentation →</Link>
              <Link href="/ai-agent-development" className="text-[#FF4F00] font-semibold hover:underline font-sans">AI Agent Development →</Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="p-8 md:p-10 rounded-2xl bg-[#0A0A0A] text-white">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Legal / LegalTech</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI Contract Review Agent Automates 94% of Clause Analysis</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">94% Clauses Automated</p>
                <p className="text-[#FF4F00] font-display text-2xl font-bold">$380K Partner Hours Reclaimed</p>
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
