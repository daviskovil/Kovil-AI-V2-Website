import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, BarChart2, Truck, Activity, Package, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for Logistics | Supply Chain AI & Route Optimization',
  description: 'AI development for logistics, supply chain, and transportation. Route optimization, demand forecasting, carrier selection, supply chain visibility, warehouse automation, and documentation AI. $2M seed round secured on logistics MVP.',
  keywords: ['AI for logistics', 'supply chain AI', 'route optimization AI', 'logistics AI development', 'demand forecasting logistics', 'warehouse automation AI', 'freight AI'],
  openGraph: {
    title: 'AI for Logistics | Kovil AI',
    description: '$2M Seed Round Secured on AI Logistics MVP. Route Optimization, Demand Forecasting, Supply Chain Visibility.',
    url: 'https://kovil.ai/ai-for-logistics',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/industry-logistics.svg', width: 1200, height: 630, alt: 'AI for Logistics — Route Optimization and Supply Chain AI | Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'AI for Logistics | Kovil AI', description: 'Logistics AI built for operational impact — route optimization, forecasting, visibility, and documentation.' },
  alternates: { canonical: 'https://kovil.ai/ai-for-logistics' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm specializing in logistics, healthcare, and enterprise AI systems.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI for Logistics', item: 'https://kovil.ai/ai-for-logistics' }] }

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI for Logistics',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  description: 'Logistics AI development — route optimization, demand forecasting, carrier selection AI, supply chain visibility platforms, warehouse automation, and freight documentation automation for logistics and supply chain companies.',
  serviceType: 'Logistics AI Development',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Logistics AI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Route Optimization AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Demand Forecasting' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carrier Selection AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supply Chain Visibility Platform' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Warehouse Automation AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Freight Documentation Automation' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Kovil AI builds AI for logistics and supply chain companies',
  description: 'Kovil AI builds logistics AI in four phases — from operations and data assessment through production deployment with operational impact measurement.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Operations and data assessment', text: 'We map your logistics operations — shipment volumes, route patterns, carrier mix, warehouse workflows, and documentation processes. We identify your data infrastructure: TMS, WMS, ERP, and any existing carrier or mapping APIs. The assessment determines which AI use cases have the most operational data to work with and the clearest cost reduction or revenue impact. For logistics, route optimization and demand forecasting typically have the highest ROI and the most available data.' },
    { '@type': 'HowToStep', position: 2, name: 'AI architecture and integration design', text: 'We design the AI architecture with your TMS, WMS, and ERP as the integration target. A route optimization model that outputs results outside your dispatch system will not get used. A demand forecast that does not feed into your procurement or inventory system will not change behavior. Integration design happens before model design — we confirm every output has a destination in your existing workflow before building anything.' },
    { '@type': 'HowToStep', position: 3, name: 'Build, backtest, and validate', text: 'We build the AI system and validate against your historical operational data. Route optimization models are backtested against historical shipment data to confirm cost and time improvements before live deployment. Demand forecasting models are validated against historical demand with held-out test periods. No system advances to production without passing validation against your specific operational data and geography.' },
    { '@type': 'HowToStep', position: 4, name: 'Deploy and measure operational impact', text: 'We deploy with instrumentation that measures operational outcomes — cost per shipment, on-time delivery rate, forecast accuracy, documentation processing time. We build the measurement dashboard alongside the system so you have proof of impact within 30 days of production. Post-launch, we monitor model performance and provide the retraining pipeline so accuracy improves as your operational data grows.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What types of logistics AI systems does Kovil AI build?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI builds route optimization systems that reduce cost per shipment and improve on-time delivery, demand forecasting models that predict shipment volumes and inventory needs across SKUs and locations, carrier selection AI that matches shipments to carriers based on cost, reliability, and SLA data, supply chain visibility platforms that aggregate real-time data across carriers and suppliers into a single view, warehouse automation AI for pick path optimization, slot assignment, and labor planning, and freight documentation automation that extracts and validates data from bills of lading, customs forms, and proof of delivery documents. All systems are integrated with your existing TMS, WMS, or ERP.' } },
    { '@type': 'Question', name: 'How does AI route optimization work and what results can I expect?', acceptedAnswer: { '@type': 'Answer', text: 'AI route optimization uses historical shipment data, real-time traffic and weather, carrier capacity, delivery windows, and vehicle constraints to compute optimal routes for a given set of shipments. It is particularly valuable for last-mile delivery, multi-stop LTL optimization, and dynamic re-routing when conditions change mid-day. Production route optimization systems typically reduce total route distance by 10 to 20%, reduce cost per delivery by 8 to 15%, and improve on-time delivery rates by reducing route variability. Results scale with shipment volume — high-volume operations see larger absolute savings.' } },
    { '@type': 'Question', name: 'What data does AI demand forecasting need for logistics?', acceptedAnswer: { '@type': 'Answer', text: 'Logistics demand forecasting models need at least 18 to 24 months of historical shipment or order data to capture seasonal patterns reliably. The data should include shipment volume by lane or SKU, dates, origins and destinations, and ideally any promotional or external event data that drove demand spikes. The more granular the data — by lane, by customer, by SKU — the more targeted the forecast. Kovil AI assesses data availability and quality in the first phase of every engagement and establishes what forecast granularity and horizon is achievable before building begins.' } },
    { '@type': 'Question', name: 'How does AI carrier selection work?', acceptedAnswer: { '@type': 'Answer', text: 'AI carrier selection models use your historical carrier performance data — on-time delivery rate, damage rate, cost per shipment by lane and weight class — alongside current carrier capacity signals and rate data to recommend the optimal carrier for each shipment. This goes beyond static rate shopping by incorporating carrier reliability data and lane-specific performance history. For shippers with large carrier networks, AI selection reduces manual tendering time and improves carrier performance by routing volume to carriers with strong lane-specific track records.' } },
    { '@type': 'Question', name: 'What is supply chain visibility and how does AI improve it?', acceptedAnswer: { '@type': 'Answer', text: 'Supply chain visibility means knowing where every shipment is, what its status is, and whether it will arrive on time — without manually checking carrier portals or waiting for exception calls. AI improves visibility by aggregating tracking data from multiple carriers and suppliers into a single normalized view, predicting ETAs based on historical performance and current conditions rather than relying solely on carrier-reported ETAs, and surfacing exceptions proactively — flagging at-risk shipments before they become customer service issues. For companies managing hundreds or thousands of active shipments, a visibility platform with AI-powered ETA prediction dramatically reduces the operational burden of exception management.' } },
    { '@type': 'Question', name: 'How does AI automate freight documentation?', acceptedAnswer: { '@type': 'Answer', text: 'Freight documentation — bills of lading, proof of delivery, customs declarations, carrier invoices — is high in volume and error-prone when processed manually. AI document automation uses OCR and LLM-based extraction to read these documents, extract structured fields (shipper, consignee, weight, commodity, charges), validate against your TMS or ERP data, and flag exceptions for human review. This eliminates manual data entry for routine documents and reduces processing time per document from minutes to seconds. For freight brokers and customs clearance companies, documentation automation is one of the highest-ROI AI investments available.' } },
    { '@type': 'Question', name: 'How long does a logistics AI project take?', acceptedAnswer: { '@type': 'Answer', text: 'A focused freight documentation automation system can be built and deployed in 6 to 8 weeks. Route optimization systems for last-mile or multi-stop delivery typically take 10 to 14 weeks — the optimization model requires significant data preparation and validation against historical routes. Demand forecasting systems take 12 to 16 weeks. Supply chain visibility platforms that aggregate data across multiple carriers and suppliers run 14 to 20 weeks depending on the number of integration points and carrier API coverage. Kovil AI delivered a logistics MVP in 4 weeks that secured a $2M seed round for a logistics startup.' } },
    { '@type': 'Question', name: 'What logistics platforms and TMS systems can Kovil AI integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI has built integrations with MercuryGate, project44, FourKites, SAP TM, Oracle TMS, and custom-built transportation management systems. For WMS integrations, we work with Manhattan Associates, Blue Yonder, and custom warehouse systems. For carrier data, we integrate with carrier APIs (UPS, FedEx, USPS, LTL carriers) and aggregator platforms (project44, Shippeo). If your TMS or WMS is not on this list, we assess the available API or EDI integration options during the assessment phase.' } },
    { '@type': 'Question', name: 'Who owns the AI models and code built by Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'The client owns 100% of all code, models, data pipelines, and IP produced during the engagement. Kovil AI retains no rights to any system built for you. This includes route optimization algorithms, forecasting models, carrier scoring logic, and all integration code. You receive full source code and model artifacts as a deliverable, deployable to your own infrastructure.' } },
  ],
}

const useCases = [
  { icon: MapPin, title: 'Route Optimization AI', body: 'Compute optimal routes for last-mile delivery, multi-stop LTL, and dynamic re-routing. Production systems reduce route distance by 10 to 20% and cost per delivery by 8 to 15% — savings that compound at volume.' },
  { icon: BarChart2, title: 'Demand Forecasting', body: 'Predict shipment volumes and inventory needs by lane, SKU, and location using 18+ months of historical data. Reduce both overstock and stockout scenarios with AI forecasts that outperform manual planning.' },
  { icon: Truck, title: 'Carrier Selection AI', body: 'Match shipments to carriers based on lane-specific performance history, real-time capacity, and rate data. Reduce tendering time and improve on-time delivery by routing volume to carriers with strong track records on each lane.' },
  { icon: Activity, title: 'Supply Chain Visibility', body: 'Aggregate tracking data from multiple carriers and suppliers into one normalized view. AI-powered ETA prediction surfaces at-risk shipments before they become customer service issues.' },
  { icon: Package, title: 'Warehouse Automation AI', body: 'Optimize pick paths, slot assignments, and labor planning using historical order patterns and warehouse layout data. Reduce pick time and travel distance per order without major physical infrastructure changes.' },
  { icon: FileText, title: 'Freight Documentation Automation', body: 'Extract and validate structured data from bills of lading, proof of delivery, customs forms, and carrier invoices. Reduce document processing time from minutes to seconds and eliminate manual re-entry errors.' },
]

const painPoints = [
  { title: 'Route optimization is complex at real operational scale', body: 'Simple routing algorithms work for 5 to 10 stops. At 50 to 200+ stops with time windows, vehicle capacity constraints, driver hours-of-service rules, and real-time traffic, the optimization problem is computationally hard. Most commercial route optimization tools use good heuristics for average cases — but they are not trained on your specific geography, customer density, or delivery window patterns. AI route optimization that is trained on your historical data consistently outperforms generic tools by 5 to 12% on cost metrics.' },
  { title: 'Logistics data is fragmented across too many systems', body: 'A typical logistics operation has shipment data in a TMS, inventory data in a WMS or ERP, carrier performance data in a separate reporting tool, and financial data in an accounting system. Building AI that improves operations requires integrating all of these data sources — which is the hardest part of any logistics AI project. Kovil AI scopes the data integration work explicitly and treats it as a first-class deliverable alongside the AI model, not a dependency to be resolved later.' },
  { title: 'Carrier performance data is rarely clean enough to use directly', body: 'Raw carrier tracking data — late scans, missing updates, inconsistent status codes across carrier APIs — cannot be fed directly into an AI model or a visibility platform. Data normalization, gap filling, and quality scoring are required before the data is useful for model training or operational monitoring. This cleanup work is consistently underestimated in logistics AI projects. Kovil AI includes a data quality assessment and normalization layer in every logistics AI engagement.' },
  { title: 'Forecasting accuracy degrades without a retraining pipeline', body: 'A demand forecasting model trained on last year\'s data will drift as seasonality patterns shift, new customers are added, and freight markets change. Without a retraining pipeline, a logistics AI system that performs well in month one will underperform by month six. Kovil AI builds the retraining pipeline as part of every forecasting engagement — scheduled retraining with accuracy monitoring so you know when the model needs updating, not after it has already degraded in production.' },
]

const personas = [
  { title: 'Freight brokers and 3PLs scaling operations', body: 'Third-party logistics companies and freight brokers processing high shipment volumes with lean ops teams. AI carrier selection, documentation automation, and visibility platforms allow operations to scale without proportional headcount growth.' },
  { title: 'Shippers with high logistics complexity', body: 'Manufacturers, distributors, and retailers with large carrier networks, multi-modal shipments, or complex last-mile operations. Route optimization and demand forecasting drive direct cost savings measurable in the first 30 days of production.' },
  { title: 'Logistics tech companies building AI into their platform', body: 'TMS, WMS, and supply chain visibility vendors adding AI capabilities to their product. Kovil AI builds the AI layer — route optimization, forecasting models, visibility dashboards — so product teams can ship AI features without a dedicated ML team.' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI for Logistics</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Logistics AI That Cuts Cost Per Shipment, Improves Visibility, and Forecasts Demand
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                Route optimization, demand forecasting, carrier selection, supply chain visibility, and freight documentation automation built for production logistics operations. Kovil AI delivered a logistics AI MVP in 4 weeks that secured a $2M seed round for a logistics startup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">
                  Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies/logistics-mvp-sprint" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">
                  See Logistics MVP Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>$2M Seed Round on MVP in 4 Weeks</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>10 to 20% Route Cost Reduction</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>TMS, WMS, ERP Integration</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>150+ AI Systems Delivered</span>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Logistics AI use cases Kovil AI builds</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              From route optimization to freight documentation, each system is built around your operational data, TMS infrastructure, and cost impact targets.
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
              src="/industry-logistics.svg"
              alt="AI for Logistics — delivery truck with route network map showing AI-optimized delivery paths, representing logistics AI built by Kovil AI"
              width={1200}
              height={630}
              className="rounded-2xl w-full"
              unoptimized
            />
            <p className="text-[#6B7280] font-sans text-sm mt-4 text-center">Kovil AI delivered a logistics AI MVP in 4 weeks — route optimization, carrier selection, and supply chain visibility integrated with existing TMS infrastructure.</p>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Where logistics AI projects stall — and how Kovil AI avoids it</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Logistics AI fails for predictable reasons: fragmented data, carrier API complexity, and models that degrade without retraining pipelines.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How Kovil AI builds logistics AI — four phases</h2>
            <p className="text-[#A09A91] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Every logistics AI engagement starts with an operations and data assessment. We confirm the data quality and integration path before any architecture decisions are made.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Who Kovil AI builds logistics AI for</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              The AI use cases and integration requirements differ for a freight broker, a large shipper, and a logistics software company.
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

        {/* Case study */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">Logistics AI delivered by Kovil AI — real results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — Logistics startup</p>
                <h3 className="font-display text-xl font-bold mb-4">$2M seed round secured on a logistics AI MVP built in 4 weeks</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A logistics startup needed to demonstrate their AI product to investors on a tight timeline. Kovil AI built a fully functional logistics AI MVP in 4 weeks — route optimization, carrier selection, and supply chain visibility integrated with existing TMS infrastructure. The startup used the working product to close a $2M seed round.
                </p>
                <Link href="/case-studies/logistics-mvp-sprint" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-8 rounded-2xl bg-[#111111] text-white border border-[#1E1E1E]">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Typical outcomes</p>
                <div className="space-y-5">
                  {[
                    { metric: '10 to 20%', label: 'Reduction in total route distance with AI-optimized dispatching' },
                    { metric: '8 to 15%', label: 'Reduction in cost per delivery through route and carrier optimization' },
                    { metric: '20 to 35%', label: 'Reduction in stockout frequency with AI demand forecasting' },
                    { metric: 'Seconds vs minutes', label: 'Document processing time with freight documentation automation' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="text-[#FF4F00] font-display font-bold text-lg whitespace-nowrap">{item.metric}</span>
                      <p className="text-[#A09A91] font-sans text-sm leading-relaxed">{item.label}</p>
                    </div>
                  ))}
                </div>
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
                { label: 'Intelligent Document Processing', sub: 'IDP for freight docs', href: '/intelligent-document-processing' },
                { label: 'AI for Ecommerce', sub: 'Inventory and support AI', href: '/ai-for-ecommerce' },
                { label: 'Outcome-Based AI Projects', sub: 'Fixed-price AI delivery', href: '/engage/outcome-based-project' },
                { label: 'Logistics MVP Case Study', sub: '$2M seed round in 4 weeks', href: '/case-studies/logistics-mvp-sprint' },
                { label: 'AI Agent Development', sub: 'Autonomous operations agents', href: '/ai-agent-development' },
                { label: 'Managed AI Engineer', sub: 'Staff aug for logistics AI', href: '/engage/managed-ai-engineer' },
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to build logistics AI for production?</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Book a 30-minute call. We will assess your operational data and TMS infrastructure, identify the highest-ROI AI opportunity, and outline a milestone delivery plan.</p>
            <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
