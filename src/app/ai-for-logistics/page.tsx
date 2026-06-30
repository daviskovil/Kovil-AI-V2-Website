import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for Logistics | Supply Chain AI Development | Kovil AI',
  description: 'AI for logistics and supply chain from Kovil AI. Route optimization, demand forecasting, warehouse automation, freight pricing AI, and predictive maintenance. Production-grade.',
  keywords: ['AI for logistics', 'supply chain AI', 'route optimization AI', 'demand forecasting AI', 'logistics AI development'],
  openGraph: { title: 'AI for Logistics | Kovil AI', description: 'AI that moves supply chains faster.', url: 'https://kovil.ai/ai-for-logistics', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'AI for Logistics | Kovil AI', description: 'Supply chain AI in production.' },
  alternates: { canonical: 'https://kovil.ai/ai-for-logistics' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI for Logistics', item: 'https://kovil.ai/ai-for-logistics' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'AI for Logistics', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'AI development for logistics and supply chain — route optimization, demand forecasting, and warehouse automation.', serviceType: 'Logistics AI Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What logistics problems can AI solve?', acceptedAnswer: { '@type': 'Answer', text: 'Route optimization to reduce fuel costs and delivery times, demand forecasting to prevent stockouts and overstock, predictive maintenance to reduce equipment downtime, warehouse picking optimization, freight pricing AI, and document automation for shipping documentation.' } },
    { '@type': 'Question', name: 'How much does route optimization AI save?', acceptedAnswer: { '@type': 'Answer', text: 'Route optimization AI typically reduces total delivery distance by 15–25% and fuel costs proportionally. Savings scale with fleet size — a 50-vehicle fleet with optimized routing can generate $200K–$500K in annual fuel savings, plus reduced driver overtime.' } },
    { '@type': 'Question', name: 'What data do you need for demand forecasting?', acceptedAnswer: { '@type': 'Answer', text: 'Historical demand data (ideally 2+ years), promotional calendars, seasonal patterns, and if available, external signals like weather, macroeconomic indicators, or leading customer order signals. The more history and context, the more accurate the forecast.' } },
    { '@type': 'Question', name: 'Can AI automate logistics documentation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bills of lading, customs declarations, freight invoices, proof of delivery, and shipment tracking updates can all be automated with AI extraction and generation. We have built document automation for freight forwarders and 3PLs that reduced manual data entry by 80%+.' } },
    { '@type': 'Question', name: 'Can AI integrate with our TMS or WMS?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We integrate with major TMS platforms (SAP TM, Oracle TMS, BluJay) and WMS systems via API, EDI, or direct database integration. AI models are embedded into your existing operational workflows, not standalone tools.' } },
    { '@type': 'Question', name: 'What is predictive maintenance AI for logistics?', acceptedAnswer: { '@type': 'Answer', text: 'ML models that predict equipment failure before it happens — using sensor data, maintenance history, usage patterns, and environmental conditions. Predictive maintenance reduces unplanned downtime, extends asset life, and lowers emergency repair costs for fleets and warehouse equipment.' } },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI for Logistics</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">AI for Logistics — Route Optimization, Demand Forecasting, and Supply Chain Automation</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Logistics is one of the highest-ROI domains for AI. Kovil AI builds route optimization, demand forecasting, predictive maintenance, and document automation systems that reduce costs and improve delivery performance — in production, not in spreadsheets.</p>
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
              <span>Trusted by Smartfren, Unilever, and More</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Fixed-Price or Staff Aug</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Logistics AI Use Cases We Build</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Route optimization — reduce fuel costs and delivery times across your fleet',
                'Demand forecasting — predict inventory needs using ML on historical and external signals',
                'Predictive maintenance — flag equipment failures before they cause downtime',
                'Shipping document automation — BOL, customs, freight invoice extraction',
                'Warehouse picking optimization — reduce travel time per order',
                'Freight pricing AI — dynamic pricing based on lane, capacity, and market conditions',
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
                { step: '01', title: 'Identify the Highest ROI Use Case', desc: 'We analyze your operational data to identify which AI capability delivers the fastest and largest cost reduction.' },
                { step: '02', title: 'Build & Validate', desc: 'Milestone-gated build with accuracy and performance benchmarks validated against your real operational data.' },
                { step: '03', title: 'Integrate & Measure', desc: 'Integration with your TMS, WMS, or ERP. We track KPIs — cost per route, stockout rate, equipment uptime — to prove ROI.' },
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Optimize Your Supply Chain with AI?</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Fixed price. Milestone-gated. ROI tracked from day one. Zero delivery risk.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}
