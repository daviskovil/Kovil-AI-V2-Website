import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Staff Augmentation Services | Vetted Tech Engineers | Kovil AI',
  description: 'IT staff augmentation from Kovil AI. Pre-vetted software engineers, DevOps, QA, and cloud specialists. Matched in 48 hours. 2-week risk-free trial. Zero termination fees.',
  keywords: ['IT staff augmentation', 'IT staffing services', 'hire software engineers', 'tech staff augmentation'],
  openGraph: { title: 'IT Staff Augmentation | Kovil AI', description: 'Vetted engineers in 48 hours. Zero delivery risk.', url: 'https://kovil.ai/it-staff-augmentation', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'IT Staff Augmentation | Kovil AI', description: 'Vetted engineers in 48 hours.' },
  alternates: { canonical: 'https://kovil.ai/it-staff-augmentation' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'IT Staff Augmentation', item: 'https://kovil.ai/it-staff-augmentation' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'IT Staff Augmentation', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'Pre-vetted software engineers, DevOps, QA, and cloud specialists — matched in 48 hours.', serviceType: 'IT Staff Augmentation', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is IT staff augmentation?', acceptedAnswer: { '@type': 'Answer', text: 'IT staff augmentation is extending your in-house tech team with external engineers who work under your direction — software developers, DevOps engineers, QA specialists, cloud architects, and data engineers.' } },
    { '@type': 'Question', name: 'How quickly can an IT engineer start?', acceptedAnswer: { '@type': 'Answer', text: 'Matched in 24–48 hours, onboarded within a week, first deliverable in 14 days.' } },
    { '@type': 'Question', name: 'What roles do you place?', acceptedAnswer: { '@type': 'Answer', text: 'Software engineers, full-stack developers, React developers, Python developers, Node.js developers, DevOps engineers, cloud engineers, QA engineers, data engineers, cybersecurity engineers, and product managers.' } },
    { '@type': 'Question', name: 'How do you vet engineers?', acceptedAnswer: { '@type': 'Answer', text: 'Every engineer passes a technical interview, architecture assessment, and live build challenge. We accept only the top 1% of applicants.' } },
    { '@type': 'Question', name: 'Can I scale up or down?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. No termination fees, no lock-in. Scale your team up or down based on your project needs.' } },
    { '@type': 'Question', name: 'Is there a risk-free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — 2-week trial, free rematching if it\'s not the right fit, zero termination fees.' } },
  ],
}

export default function Page() {
  const roles = [
    { label: 'Software Engineers', href: '/hire/software-engineer' }, { label: 'Full-Stack Developers', href: '/hire/full-stack-developer' },
    { label: 'React Developers', href: '/hire/react-developer' }, { label: 'Python Developers', href: '/hire/python-developer' },
    { label: 'Node.js Developers', href: '/hire/node-developer' }, { label: 'DevOps Engineers', href: '/hire/devops-engineer' },
    { label: 'Cloud Engineers', href: '/hire/cloud-engineer' }, { label: 'QA Engineers', href: '/hire/qa-engineer' },
    { label: 'Data Engineers', href: '/hire/data-engineer' }, { label: 'Cybersecurity Engineers', href: '/hire/cybersecurity-engineer' },
    { label: 'Product Managers', href: '/hire/product-manager' },
  ]
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20">

        <section className="bg-[#0A0A0A] py-24">
          <div className="max-w-6xl mx-auto px-6 max-w-3xl">
            <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">IT Staff Augmentation</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">IT Staff Augmentation — Vetted Engineers in 48 Hours</h1>
            <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">IT staffing searches hit their biggest breakout in years in 2025. Demand is back — and so is the talent shortage. Kovil AI gives you access to the engineers the market is competing for.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">See How It Works</Link>
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
                'Engineers across every IT discipline — software dev, DevOps, QA, cloud, security, data',
                'Pre-vetted top 1% — technical interview + architecture assessment + build challenge',
                'Timezone-matched placements — no 12-hour collaboration headaches',
                'Managed delivery — Engagement Manager audits every commit',
                'Scale up or down, no termination fees',
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">From Brief to Shipping in 14 Days</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Describe Your Needs', desc: 'Tell us your stack, role, and timeline. A Delivery Lead contacts you within 24 hours.' },
                { step: '02', title: 'Meet Your Engineer', desc: 'Matched with a vetted IT specialist in 24–48 hours. Start your 2-week risk-free trial.' },
                { step: '03', title: 'Watch Results Roll In', desc: 'First deliverable in 14 days. Engagement Manager oversight. Zero lock-in.' },
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">IT Engineering Roles We Place</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {roles.map(r => (
                <Link key={r.href} href={r.href} className="flex items-center justify-between p-4 rounded-xl border border-[#E5E2D9] bg-white hover:border-[#FF4F00] hover:bg-orange-50 transition-colors group font-sans">
                  <span className="font-medium text-[#0A0A0A]">{r.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#FF4F00] transition-colors" />
                </Link>
              ))}
            </div>
            <Link href="/staff-augmentation" className="text-[#FF4F00] font-semibold hover:underline font-sans">View All Staff Augmentation →</Link>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="p-8 md:p-10 rounded-2xl bg-[#0A0A0A] text-white">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-3 font-sans">FinTech / Lending</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 max-w-2xl">AI-First Engineering Team Transforms Digital Lending Platform</h3>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <p className="text-[#FF4F00] font-display text-2xl font-bold">Faster Deal Processing</p>
                <p className="text-[#FF4F00] font-display text-2xl font-bold">Reduced Manual Effort</p>
              </div>
              <Link href="/case-studies/lending-platform-ai-automation" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans">Read the Case Study <ArrowRight className="w-4 h-4" /></Link>
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
