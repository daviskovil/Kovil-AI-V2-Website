import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for E-Commerce | E-Commerce AI Development | Kovil AI',
  description: 'AI for e-commerce from Kovil AI. Personalization engines, product recommendation AI, search optimization, customer service AI, and inventory forecasting. Production-grade.',
  keywords: ['AI for e-commerce', 'e-commerce AI development', 'product recommendation AI', 'personalization engine AI'],
  openGraph: { title: 'AI for E-Commerce | Kovil AI', description: 'AI that drives conversions and revenue.', url: 'https://kovil.ai/ai-for-ecommerce', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'AI for E-Commerce | Kovil AI', description: 'E-commerce AI in production.' },
  alternates: { canonical: 'https://kovil.ai/ai-for-ecommerce' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI for E-Commerce', item: 'https://kovil.ai/ai-for-ecommerce' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'AI for E-Commerce', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'AI development for e-commerce — personalization, recommendation engines, search, and customer service automation.', serviceType: 'E-Commerce AI Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What e-commerce problems can AI solve?', acceptedAnswer: { '@type': 'Answer', text: 'Personalized product recommendations that increase AOV, AI-powered search that understands intent (not just keywords), customer service automation that resolves Tier-1 queries without agents, demand forecasting for inventory optimization, and dynamic pricing systems.' } },
    { '@type': 'Question', name: 'How do recommendation engines work?', acceptedAnswer: { '@type': 'Answer', text: 'Modern recommendation engines combine collaborative filtering (users like you bought X), content-based filtering (similar products to what you browsed), and LLM-powered semantic understanding (finds related products even without browsing history). We build hybrid systems that outperform single-algorithm approaches.' } },
    { '@type': 'Question', name: 'Can AI improve e-commerce search?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. AI-powered semantic search understands what customers mean, not just what they typed. Vector search finds semantically similar products. Query rewriting improves recall. LLM-based conversational search lets customers describe what they want in natural language.' } },
    { '@type': 'Question', name: 'How do you build customer service AI for e-commerce?', acceptedAnswer: { '@type': 'Answer', text: 'RAG-based AI over your product catalog, FAQ, and order data lets AI accurately answer order status, return policy, product questions, and warranty queries. Complex cases are routed to humans. We build with escalation logic and continuous improvement feedback loops.' } },
    { '@type': 'Question', name: 'Can AI help with demand forecasting and inventory?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. AI demand forecasting uses historical sales, seasonal patterns, marketing calendars, and external signals to predict inventory needs. This reduces stockouts and excess inventory costs — particularly impactful for high-SKU operations.' } },
    { '@type': 'Question', name: 'What platforms do you integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'Shopify, Magento, WooCommerce, Salesforce Commerce Cloud, BigCommerce, and custom e-commerce stacks. APIs, webhooks, and data pipelines are all covered.' } },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI for E-Commerce</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">AI for E-Commerce — Personalization, Recommendations, Search, and Customer Service That Convert</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">AI has the highest measurable ROI in e-commerce of any industry. Kovil AI builds recommendation engines, AI search, customer service automation, and demand forecasting systems that generate revenue — not just traffic.</p>
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
              <span>Trusted by Unilever and More</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Fixed-Price or Staff Aug</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">E-Commerce AI Use Cases We Build</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Personalization engines — individualized homepages, category pages, and email recommendations',
                'Product recommendation AI — "customers also bought," cross-sell, and upsell',
                'AI-powered semantic search — intent-based, not just keyword matching',
                'Customer service AI — order status, returns, product Q&A, handled automatically',
                'Demand forecasting and inventory optimization with ML models',
                'Dynamic pricing and promotion targeting based on real-time signals',
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
                { step: '01', title: 'Identify the Revenue Driver', desc: 'Which AI capability has the highest ROI for your store — search, recommendations, or support? We prioritize based on your data.' },
                { step: '02', title: 'Build & A/B Test', desc: 'Milestone-gated build with A/B testing built into the delivery plan. You measure revenue impact before full rollout.' },
                { step: '03', title: 'Deploy & Optimize', desc: 'Production deployment with monitoring dashboards and feedback loops to continuously improve model performance.' },
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Build E-Commerce AI?</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Fixed price. Milestone-gated. A/B testing built in. Zero delivery risk.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}
