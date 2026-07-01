import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MessageSquare, Star, Search, BarChart2, RefreshCw, ShoppingCart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for Ecommerce | Retail AI Development & Ecommerce Automation | Kovil AI',
  description: 'AI development for ecommerce and retail. AI support chatbots, product recommendation engines, AI-powered search, inventory forecasting, review analysis, and abandoned cart recovery. 70% support ticket deflection in production.',
  keywords: ['AI for ecommerce', 'ecommerce AI development', 'retail AI', 'AI product recommendations', 'ecommerce chatbot', 'AI customer support', 'inventory forecasting AI'],
  openGraph: {
    title: 'AI for Ecommerce | Kovil AI',
    description: '70% Support Tickets Deflected. AI-Powered Search, Recommendations, and Customer Experience.',
    url: 'https://kovil.ai/ai-for-ecommerce',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/industry-ecommerce.svg', width: 1200, height: 630, alt: 'AI for Ecommerce — Support, Recommendations, Revenue | Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'AI for Ecommerce | Kovil AI', description: 'Ecommerce AI built for revenue impact — support deflection, recommendations, search, and inventory.' },
  alternates: { canonical: 'https://kovil.ai/ai-for-ecommerce' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm specializing in ecommerce, healthcare, and enterprise AI systems.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI for Ecommerce', item: 'https://kovil.ai/ai-for-ecommerce' }] }

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI for Ecommerce',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  description: 'Ecommerce AI development — AI support chatbots, product recommendation engines, AI-powered search, inventory and demand forecasting, review and sentiment analysis, and abandoned cart recovery for online retailers.',
  serviceType: 'Ecommerce AI Development',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ecommerce AI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Customer Support Chatbot' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Recommendation Engine' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI-Powered Search' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inventory and Demand Forecasting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Review and Sentiment Analysis' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Abandoned Cart Recovery AI' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Kovil AI builds AI for ecommerce companies',
  description: 'Kovil AI builds ecommerce AI in four phases — from data and integration assessment through production deployment with revenue impact measurement.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Data and integration assessment', text: 'We audit your product catalog, customer data, order history, and support ticket data. We identify integration points with your ecommerce platform (Shopify, WooCommerce, Magento, custom), your support tool (Zendesk, Gorgias, Freshdesk), and your analytics stack. The assessment determines which AI use cases have the most data to work with and the clearest revenue or cost impact.' },
    { '@type': 'HowToStep', position: 2, name: 'AI system design and integration planning', text: 'We design the AI system with your existing tech stack as the integration target. A chatbot that cannot hand off to a human agent in Zendesk will not get adopted. A recommendation engine that does not integrate with your Shopify storefront will not drive revenue. Integration planning happens before model design — not after.' },
    { '@type': 'HowToStep', position: 3, name: 'Build, train, and test with your data', text: 'We build and train against your actual product catalog, customer history, and support ticket data. Ecommerce AI must be trained on your specific catalog and customer language — generic models trained on public ecommerce data perform poorly on niche or specialized product ranges. We run A/B test designs before launch so you can measure impact from day one.' },
    { '@type': 'HowToStep', position: 4, name: 'Deploy, measure, and iterate', text: 'We deploy with instrumentation that measures business outcomes — ticket deflection rate, revenue attributed to recommendations, search result click-through, cart recovery rate. We define the measurement framework before launch and build the dashboards alongside the system, so you have proof of impact within the first 30 days of production.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What types of ecommerce AI systems does Kovil AI build?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI builds AI customer support chatbots that handle order status, returns, FAQs, and product questions (70% ticket deflection achieved in production), product recommendation engines using collaborative filtering and session-based signals, AI-powered search with semantic understanding and typo tolerance, inventory and demand forecasting models that reduce overstock and stockout rates, review and sentiment analysis pipelines for product quality monitoring, and abandoned cart recovery flows using personalized AI outreach. All systems are integrated with your existing ecommerce platform and support stack.' } },
    { '@type': 'Question', name: 'How does an AI customer support chatbot work for ecommerce?', acceptedAnswer: { '@type': 'Answer', text: 'An ecommerce AI chatbot is trained on your product catalog, policies (return policy, shipping times, sizing guides), and historical support conversations. It handles the high-volume, repetitive tickets — order status (connected to your OMS), return initiation, product questions, sizing guidance — without a human agent. For complex issues or escalation requests, it hands off to your human agents in Zendesk, Gorgias, or Freshdesk with full context. Kovil AI built a retail AI chatbot that deflected 70% of incoming support tickets, reducing support headcount requirements without reducing customer satisfaction scores.' } },
    { '@type': 'Question', name: 'How accurate are AI product recommendations?', acceptedAnswer: { '@type': 'Answer', text: 'Recommendation accuracy is measured by click-through rate and conversion rate on recommended products — not a model accuracy percentage. Well-designed recommendation systems for ecommerce typically improve product page CTR by 15 to 35% and contribute 10 to 30% of total revenue through upsell and cross-sell. The starting performance depends heavily on catalog size and the richness of your historical order data. Larger catalogs with more purchase history allow for more accurate collaborative filtering. New stores with thin history start with content-based recommendations and migrate to collaborative filtering as data accumulates.' } },
    { '@type': 'Question', name: 'What is AI-powered search and why is it better than keyword search?', acceptedAnswer: { '@type': 'Answer', text: 'Standard keyword search matches the exact words in a query against product titles and descriptions. AI-powered search uses semantic embeddings to understand the intent behind a query — so "comfortable sneakers for wide feet" finds relevant products even if none of them use those exact words. AI search also handles typos, synonyms, and natural language queries that keyword search fails on. For ecommerce, search exits (users who search and leave without clicking) are a direct revenue loss. AI search typically reduces search exits by 20 to 40% and increases conversion from search by 15 to 25%.' } },
    { '@type': 'Question', name: 'How does AI demand forecasting work for ecommerce inventory?', acceptedAnswer: { '@type': 'Answer', text: 'AI demand forecasting models use historical order data, seasonal patterns, promotional calendars, and external signals (weather, events, trends) to predict demand by SKU over a future window — typically 4 to 12 weeks. The model outputs a forecast with confidence intervals, which feeds your reorder point and safety stock calculations. This is especially valuable for retailers with high SKU counts or seasonal peaks where manual forecasting is impractical. Overstock costs capital and storage; stockouts cost revenue and customer trust. Ecommerce AI forecasting typically reduces overstock by 15 to 25% and stockouts by 20 to 35%.' } },
    { '@type': 'Question', name: 'What ecommerce platforms can Kovil AI integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI has built integrations with Shopify and Shopify Plus (storefront API, webhooks, metafields), WooCommerce, Magento/Adobe Commerce, BigCommerce, and custom-built ecommerce platforms. For support integrations, we work with Zendesk, Gorgias, Freshdesk, and Intercom. For analytics, we integrate with Google Analytics 4, Segment, and custom data warehouses. If your platform is not on this list, we assess the available APIs during the data assessment phase.' } },
    { '@type': 'Question', name: 'How long does an ecommerce AI project take?', acceptedAnswer: { '@type': 'Answer', text: 'A focused AI customer support chatbot can be built and deployed in 6 to 8 weeks. Product recommendation engines with storefront integration typically take 8 to 12 weeks. AI search implementations run 6 to 10 weeks depending on catalog size and search infrastructure. Demand forecasting systems take 10 to 16 weeks — the model training requires sufficient historical data and the validation period is longer. All timelines are milestone-gated and agreed before work begins, with a defined measurement plan for business impact.' } },
    { '@type': 'Question', name: 'How do you measure the ROI of ecommerce AI?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI builds measurement frameworks alongside every ecommerce AI system. For chatbots, we track ticket deflection rate, first response time, CSAT, and cost-per-ticket. For recommendations, we track click-through rate, conversion rate, and revenue per session from recommended products. For search, we track search exit rate, null result rate, and conversion from search. For forecasting, we track forecast accuracy, overstock days-on-hand, and stockout frequency. Dashboards for these metrics are delivered as part of the engagement — not a separate project.' } },
    { '@type': 'Question', name: 'Who owns the AI models and code built by Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'The client owns 100% of all code, models, data pipelines, and IP produced during the engagement. Kovil AI retains no rights to any system built for you. This includes recommendation models, chatbot conversation flows, search index configurations, and all integration code. You receive full source code and model artifacts as a deliverable, deployable to your own infrastructure or cloud environment.' } },
  ],
}

const useCases = [
  { icon: MessageSquare, title: 'AI Customer Support Chatbot', body: 'Handles order status, returns, product questions, and FAQs without human agents. Kovil AI built a retail AI chatbot that deflected 70% of incoming support tickets — reducing headcount requirements while maintaining CSAT.' },
  { icon: Star, title: 'Product Recommendation Engine', body: 'Collaborative filtering and session-based recommendations that surface the right products at the right moment. Typical impact: 15 to 35% improvement in product page CTR and 10 to 30% of total revenue attributed to recommendations.' },
  { icon: Search, title: 'AI-Powered Search', body: 'Semantic search that understands intent, not just keywords. Handles typos, synonyms, and natural language queries that keyword search fails on. Reduces search exits by 20 to 40% and improves conversion from search by 15 to 25%.' },
  { icon: BarChart2, title: 'Inventory and Demand Forecasting', body: 'Predict demand by SKU using historical orders, seasonal patterns, and external signals. Reduce overstock by 15 to 25% and stockouts by 20 to 35% — improving margin and customer experience simultaneously.' },
  { icon: RefreshCw, title: 'Review and Sentiment Analysis', body: 'Automatically classify and analyze customer reviews by product, theme, and sentiment. Surface quality issues before they become return spikes or brand reputation problems. Integrate with your product operations workflow.' },
  { icon: ShoppingCart, title: 'Abandoned Cart Recovery', body: 'AI-personalized outreach that adapts message, timing, and offer based on cart content, customer history, and browsing behavior. Higher conversion rates than static abandoned cart sequences with no additional manual effort.' },
]

const painPoints = [
  { title: 'Generic AI chatbots create poor customer experiences', body: 'Off-the-shelf chatbots trained on generic ecommerce data know nothing about your specific products, return policy, shipping windows, or brand voice. Customers who ask about a specific SKU availability or a nuanced return scenario hit dead ends and escalate to a human anyway. A chatbot that deflects less than 40% of tickets while creating more frustrated customers is worse than no chatbot at all. Ecommerce AI must be trained on your catalog and policies and integrated with your OMS to answer the questions customers actually ask.' },
  { title: 'Recommendation engines need your data, not generic data', body: 'Product recommendation models trained on public ecommerce datasets perform poorly on specialized or niche catalogs. A pet supplies retailer has different purchase co-occurrence patterns than a fashion retailer. A B2B supplies store has different session behavior than a DTC brand. Your recommendation engine must be trained on your customers purchasing your products — not a generic model slapped onto your catalog. Kovil AI trains recommendation models on your order history and validates against your conversion metrics before launch.' },
  { title: 'AI search requires catalog and infrastructure work', body: 'AI search is not a search plugin you enable — it requires a well-structured product catalog (consistent attributes, clean titles, complete descriptions) and an embedding pipeline that keeps the search index in sync with catalog changes. Retailers with messy product data get messy search results regardless of how good the underlying model is. The catalog cleanup and embedding pipeline build are part of the AI search engagement — not a prerequisite you figure out separately.' },
  { title: 'Demand forecasting fails without the right data history', body: 'A demand forecasting model trained on 6 months of order data will not capture seasonal patterns that repeat annually. For seasonal businesses (holiday, summer, back-to-school), Kovil AI requires at least 18 to 24 months of order history to build a reliable forecasting model. The data assessment phase establishes what data is available and what forecast horizon is achievable — so there are no surprises about model limitations after the build is complete.' },
]

const personas = [
  { title: 'DTC and online retailers with growing support volume', body: 'Direct-to-consumer brands and online retailers hitting a point where support costs are scaling with revenue rather than staying flat. An AI chatbot that deflects 60 to 70% of tickets means support headcount does not need to scale linearly with order volume — a significant unit economics improvement.' },
  { title: 'Marketplaces and multi-vendor platforms', body: 'Multi-vendor marketplaces where support spans multiple seller policies, product catalogs, and fulfillment timelines. AI can handle the common questions at marketplace level (order status, platform policies) while routing vendor-specific issues to the right seller support queue.' },
  { title: 'Retailers building AI into their product experience', body: 'Ecommerce platforms and retail software companies adding AI features — recommendation engines, AI search, demand forecasting — to their product. Kovil AI builds the AI layer so product teams can ship AI capabilities without a dedicated ML team.' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="pt-20">

        {/* Hero */}
        <section className="bg-[#0A0A0A] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI for Ecommerce</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Ecommerce AI That Deflects Tickets, Drives Revenue, and Forecasts Inventory
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                AI customer support, product recommendations, search, and demand forecasting built for production ecommerce. Kovil AI delivered a retail AI chatbot that deflected 70% of support tickets and built a lead generation AI that drove measurable pipeline growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">
                  Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies/retail-chatbot" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">
                  See Retail Chatbot Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>70% Support Ticket Deflection</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>AI-Powered Search and Recommendations</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Shopify, WooCommerce, Magento Integrations</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>150+ AI Systems Delivered</span>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Ecommerce AI use cases Kovil AI builds</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              From support deflection to inventory optimization, each system is built around your platform, catalog, and revenue impact metrics.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc, i) => (
                <div key={i} className="p-8 rounded-2xl border border-[#E5E2D9] bg-[#FAF8F4]">
                  <uc.icon className="w-8 h-8 text-[#FF4F00] mb-5" />
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{uc.title}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed text-sm">{uc.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry image */}
        <section className="py-12 bg-white border-b border-[#E5E2D9]">
          <div className="max-w-6xl mx-auto px-6">
            <Image
              src="/industry-ecommerce.svg"
              alt="AI for Ecommerce — shopping bag with revenue trend chart and AI-recommended products, representing chatbot, search, and forecasting AI built by Kovil AI"
              width={1200}
              height={630}
              className="rounded-2xl w-full"
              unoptimized
            />
            <p className="text-[#6B7280] font-sans text-sm mt-4 text-center">Ecommerce AI built for revenue impact — trained on your catalog and customer data, integrated with your existing platform stack.</p>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Where ecommerce AI fails — and what Kovil AI does differently</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Most ecommerce AI failures are not model failures. They are data, catalog, and integration failures that were predictable from the start.
            </p>
            <div className="space-y-6">
              {painPoints.map((pt, i) => (
                <div key={i} className="p-8 rounded-2xl border border-[#E5E2D9] bg-white">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{pt.title}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed">{pt.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Kovil AI builds */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How Kovil AI builds ecommerce AI — four phases</h2>
            <p className="text-[#A09A91] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Every ecommerce AI engagement starts with a data and integration assessment. We confirm the data exists before designing the system.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {howToSchema.step.map((step, i) => (
                <div key={i} className="p-8 rounded-2xl border border-[#1E1E1E] bg-[#111111]">
                  <div className="text-[#FF4F00] font-display text-3xl font-bold mb-4 opacity-40">0{i + 1}</div>
                  <h3 className="font-display text-lg font-bold text-white mb-3">{step.name}</h3>
                  <p className="text-[#A09A91] font-sans leading-relaxed text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who we build for */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Who Kovil AI builds ecommerce AI for</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              The AI use cases and priority order differ for a DTC brand, a marketplace, and a retail software company.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {personas.map((p, i) => (
                <div key={i} className="p-8 rounded-2xl border border-[#E5E2D9] bg-[#FAF8F4]">
                  <div className="text-[#FF4F00] font-display text-3xl font-bold mb-4 opacity-40">0{i + 1}</div>
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{p.title}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed text-sm">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">Ecommerce AI delivered by Kovil AI — real results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — Retail</p>
                <h3 className="font-display text-xl font-bold mb-4">70% of support tickets deflected with AI chatbot</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A retail company was scaling customer support headcount in direct proportion to order volume. Kovil AI built an AI support chatbot trained on their product catalog, return policy, and order management system. The chatbot handled order status, returns initiation, product questions, and FAQs — deflecting 70% of tickets while maintaining customer satisfaction scores.
                </p>
                <Link href="/case-studies/retail-chatbot" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — Lead generation AI</p>
                <h3 className="font-display text-xl font-bold mb-4">AI-powered lead generation with measurable pipeline impact</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A company needed to scale lead generation without scaling sales headcount proportionally. Kovil AI built an AI-powered lead generation and qualification system that automated prospect identification, outreach personalization, and qualification scoring — driving measurable pipeline growth tracked from day one.
                </p>
                <Link href="/case-studies/ai-powered-lead-generation" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Frequently asked questions</h2>
            <div className="divide-y divide-[#E5E2D9] max-w-3xl">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="py-8">
                  <h3 className="font-display text-lg font-bold text-[#0A0A0A] mb-3">{faq.name}</h3>
                  <p className="text-[#6B7280] font-sans leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore */}
        <section className="py-16 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-[#0A0A0A] mb-8">Explore related work</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'AI Agent Development', sub: 'Autonomous AI agents', href: '/ai-agent-development' },
                { label: 'AI for Logistics', sub: 'Supply chain and operations AI', href: '/ai-for-logistics' },
                { label: 'Outcome-Based AI Projects', sub: 'Fixed-price AI delivery', href: '/engage/outcome-based-project' },
                { label: 'Retail Chatbot Case Study', sub: '70% ticket deflection', href: '/case-studies/retail-chatbot' },
                { label: 'Lead Generation Case Study', sub: 'AI-powered pipeline growth', href: '/case-studies/ai-powered-lead-generation' },
                { label: 'Generative AI Development', sub: 'Custom LLM applications', href: '/generative-ai-development' },
              ].map(r => (
                <Link key={r.href} href={r.href} className="flex flex-col p-5 rounded-2xl border border-[#E5E2D9] bg-white hover:border-[#FF4F00] transition-colors group">
                  <span className="font-display font-bold text-[#0A0A0A] text-base group-hover:text-[#FF4F00] transition-colors">{r.label}</span>
                  <span className="text-[#6B7280] font-sans text-sm mt-1">{r.sub}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#FF4F00]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to build ecommerce AI that drives results?</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Book a 30-minute call. We will audit your data and platform, identify the highest-ROI AI opportunity, and outline a milestone delivery plan with clear revenue impact metrics.</p>
            <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
