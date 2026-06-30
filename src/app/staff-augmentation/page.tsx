import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Staff Augmentation Services | AI Engineering Teams | Kovil AI',
  description: 'Kovil AI provides staff augmentation for AI and tech teams. Pre-vetted engineers, matched in 48 hours. Fixed-price or flexible. 2-week risk-free trial. Zero termination fees.',
  keywords: ['staff augmentation', 'AI staff augmentation', 'IT staff augmentation', 'hire AI engineers'],
  openGraph: {
    title: 'Staff Augmentation Services | AI Engineering Teams | Kovil AI',
    description: 'Pre-vetted engineers, matched in 48 hours. Fixed-price or flexible. 2-week risk-free trial.',
    url: 'https://kovil.ai/staff-augmentation',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Staff Augmentation | Kovil AI', description: 'Pre-vetted engineers matched in 48 hours.' },
  alternates: { canonical: 'https://kovil.ai/staff-augmentation' },
  robots: { index: true, follow: true },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo-symbol.webp',
  description: 'Managed AI engineering firm that embeds vetted Tier-1 AI engineers into your team.',
  contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' },
  sameAs: ['https://www.linkedin.com/company/kovil-ai/'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Staff Augmentation', item: 'https://kovil.ai/staff-augmentation' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Staff Augmentation',
  provider: { '@type': 'Organization', name: 'Kovil AI' },
  description: 'Pre-vetted AI and tech engineers embedded into your team — matched in 48 hours, milestone-gated, 2-week risk-free trial.',
  serviceType: 'Staff Augmentation',
  areaServed: 'Worldwide',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is staff augmentation?', acceptedAnswer: { '@type': 'Answer', text: 'Staff augmentation is a model where you extend your in-house team with external engineers who work under your direction. Unlike outsourcing, augmented engineers integrate into your team, attend your standups, and work in your tools — but are sourced, vetted, and managed by Kovil AI.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'A staffing agency sends you CVs. Kovil AI sends you vetted engineers with an Engagement Manager auditing every commit. We\'re accountable for delivery quality, not just placement. Every engineer is milestone-gated and comes with a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'How quickly can engineers start?', acceptedAnswer: { '@type': 'Answer', text: 'Matched in 24–48 hours, onboarded within a week, first feature ships in 14 days. That\'s the Kovil AI standard.' } },
    { '@type': 'Question', name: 'What if it\'s not a good fit?', acceptedAnswer: { '@type': 'Answer', text: 'Free rematching during your 2-week trial. No questions asked, zero termination fees. You only pay if you decide to continue the engagement.' } },
    { '@type': 'Question', name: 'Do you offer fixed-price projects too?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Alongside staff augmentation, Kovil AI offers outcome-based fixed-price AI project delivery — defined scope, fixed timeline, milestone-gated payment.' } },
    { '@type': 'Question', name: 'What industries do you serve?', acceptedAnswer: { '@type': 'Answer', text: 'We serve fintech, legal, healthcare, e-commerce, logistics, SaaS, and enterprise across North America, Europe, the Middle East, and Asia-Pacific.' } },
  ],
}

const hireRoles = [
  { label: 'AI Engineers', href: '/hire/ai-engineer' },
  { label: 'GenAI Developers', href: '/hire/generative-ai-developer' },
  { label: 'LLM Engineers', href: '/hire/llm-engineer' },
  { label: 'ML Engineers', href: '/hire/ml-engineer' },
  { label: 'Python Developers', href: '/hire/python-developer' },
  { label: 'React Developers', href: '/hire/react-developer' },
  { label: 'Full-Stack Developers', href: '/hire/full-stack-developer' },
  { label: 'DevOps Engineers', href: '/hire/devops-engineer' },
  { label: 'Cloud Engineers', href: '/hire/cloud-engineer' },
  { label: 'Data Engineers', href: '/hire/data-engineer' },
  { label: 'QA Engineers', href: '/hire/qa-engineer' },
  { label: 'Cybersecurity Engineers', href: '/hire/cybersecurity-engineer' },
  { label: 'Software Engineers', href: '/hire/software-engineer' },
  { label: 'Node.js Developers', href: '/hire/node-developer' },
  { label: 'Product Managers', href: '/hire/product-manager' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="pt-20">

        {/* HERO */}
        <section className="bg-[#0A0A0A] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">Staff Augmentation</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Staff Augmentation That Delivers — Not Just Resumes
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                Most staff augmentation firms send you candidates. Kovil AI sends you vetted engineers with an Engagement Manager watching every commit. Matched in 24–48 hours, shipping in 14 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">
                  Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>150+ Successful AI Deployments</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>50+ Enterprise Customers</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>98% Trial-to-Hire Rate</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Trusted by teams from Smartfren, Unilever, and more</span>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">What You Get</h2>
            <p className="text-[#6B7280] text-lg font-sans mb-12 max-w-2xl">Every staff augmentation engagement comes with managed delivery — not just a placement.</p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Pre-vetted top 1% engineers matched to your stack and timezone',
                'An Engagement Manager paired to every hire — auditing every commit',
                'Scale up or down with no termination fees',
                '2-week risk-free trial — rematch at no cost if it\'s not right',
                '150+ successful deployments across fintech, legal, healthcare, and more',
              ].map((point, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-[#E5E2D9] bg-white">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0A0A0A] font-sans leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-[#A09A91] text-lg font-sans mb-12 max-w-2xl">
              Learn the full process at <Link href="/how-it-works" className="text-[#FF4F00] hover:underline">how it works</Link>.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Describe Your Needs', desc: 'Fill a brief intake form. A Delivery Lead contacts you within 24 hours to scope requirements, stack, and timeline.' },
                { step: '02', title: 'Meet Your Expert', desc: 'We match you with 1–3 vetted engineers in 24–48 hours. Review profiles, join intro calls, start your trial.' },
                { step: '03', title: 'Watch Results Roll In', desc: 'First feature ships in 14 days. Engagement Manager audits every commit. Scale or wind down — zero lock-in.' },
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

        {/* HIRE ROLES LINKS */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">15 Engineering Specialisms</h2>
            <p className="text-[#6B7280] text-lg font-sans mb-10 max-w-2xl">
              From AI/ML specialists to DevOps and product managers — browse every role Kovil AI places.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {hireRoles.map(r => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex items-center justify-between p-4 rounded-xl border border-[#E5E2D9] bg-white hover:border-[#FF4F00] hover:bg-orange-50 transition-colors group font-sans"
                >
                  <span className="font-medium text-[#0A0A0A]">{r.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#FF4F00] transition-colors" />
                </Link>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/ai-staff-augmentation" className="text-[#FF4F00] font-semibold hover:underline font-sans">AI Staff Augmentation →</Link>
              <Link href="/it-staff-augmentation" className="text-[#FF4F00] font-semibold hover:underline font-sans">IT Staff Augmentation →</Link>
              <Link href="/dedicated-ai-team" className="text-[#FF4F00] font-semibold hover:underline font-sans">Dedicated AI Team →</Link>
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">Proven Results</h2>
            <div className="p-8 md:p-10 rounded-2xl bg-[#0A0A0A] text-white">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">Legal / LegalTech</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI Contract Review Agent Cuts Review Time by 78%</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">78% Faster Review</p>
                <p className="text-[#FF4F00] font-display text-2xl font-bold">$380K Partner Hours Reclaimed</p>
              </div>
              <Link href="/case-studies/law-firm-contract-review-ai" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans">
                Read the Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* FINAL CTA */}
        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Start Your 2-Week Risk-Free Trial</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Fixed price. Milestone-gated. Zero delivery risk. Zero termination fees.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
