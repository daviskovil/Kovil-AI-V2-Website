import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CreditCard, Shield, FileText, Users, BarChart2, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for FinTech | Financial Services AI Development | Kovil AI',
  description: 'AI development for fintech, banking, and financial services. Payment intelligence, fraud detection, KYC/AML automation, loan origination AI, and regulatory compliance systems built for production. Shipped in 18 days.',
  keywords: ['AI for fintech', 'fintech AI development', 'financial services AI', 'fraud detection AI', 'KYC AML automation', 'payment AI', 'loan origination AI'],
  openGraph: {
    title: 'AI for FinTech | Kovil AI',
    description: 'Payment dashboard in 18 days. Mortgage document platform live. AI built for regulated financial environments.',
    url: 'https://kovil.ai/ai-for-fintech',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/industry-fintech.svg', width: 1200, height: 630, alt: 'AI for FinTech — Payment Intelligence, Fraud Detection, KYC/AML | Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'AI for FinTech | Kovil AI', description: 'FinTech AI built for compliance, speed, and production reliability.' },
  alternates: { canonical: 'https://kovil.ai/ai-for-fintech' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm specializing in fintech, legal, and enterprise AI systems.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI for FinTech', item: 'https://kovil.ai/ai-for-fintech' }] }

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI for FinTech',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  description: 'FinTech AI development — payment intelligence, fraud detection, KYC/AML automation, document intelligence for lending, loan origination AI, and regulatory compliance monitoring for financial services companies.',
  serviceType: 'FinTech AI Development',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'FinTech AI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Payment Intelligence AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fraud Detection Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'KYC/AML Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Document Intelligence for Lending' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Loan Origination AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Regulatory Compliance Monitoring' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Kovil AI builds AI for financial services companies',
  description: 'Kovil AI builds fintech AI in four compliance-first phases — from regulatory audit through production deployment with ongoing monitoring.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Compliance and workflow audit', text: 'We map your regulatory environment — SOC 2, PCI DSS, BSA/AML, FCRA — and identify which workflows have the highest AI ROI. Payment processing, document review, and KYC are the most common starting points. We define data handling requirements, model explainability needs (required for credit decisions under ECOA), and integration points with your core banking or payment infrastructure before any design begins.' },
    { '@type': 'HowToStep', position: 2, name: 'AI architecture with compliance controls built in', text: 'We design the AI system with your compliance requirements as hard constraints — not features added later. This includes model explainability for adverse action notices, audit trails for all AI-assisted decisions, data residency controls, and separation of training and production data environments. For fraud and credit systems, we design the human review workflow alongside the model, not as an afterthought.' },
    { '@type': 'HowToStep', position: 3, name: 'Build, backtest, and validate', text: 'We build the system and validate against your historical transaction data or document samples. For fraud models, we backtest against known fraud events. For document extraction, we validate against a labeled sample of your actual documents — paystubs, bank statements, tax forms. Accuracy gates must be passed before the system advances to production.' },
    { '@type': 'HowToStep', position: 4, name: 'Deploy and monitor with compliance logging', text: 'We deploy with full audit logging, model performance monitoring, and drift detection. Financial AI systems face concept drift as transaction patterns and fraud tactics evolve. We implement monitoring dashboards that surface degradation before it affects production accuracy, and we build the retraining pipeline so your team can update models without rebuilding the system.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What types of fintech AI systems does Kovil AI build?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI builds payment intelligence and anomaly detection systems, fraud detection models for real-time transaction scoring, KYC/AML automation for identity verification and suspicious activity monitoring, document intelligence for mortgage and lending (paystub extraction, bank statement analysis, tax form parsing), loan origination AI that automates underwriting steps, and regulatory compliance monitoring systems that flag policy deviations and suspicious patterns. All systems are designed for production environments with compliance logging and audit trails.' } },
    { '@type': 'Question', name: 'How does Kovil AI handle compliance requirements for financial AI?', acceptedAnswer: { '@type': 'Answer', text: 'Compliance is a design input, not a feature. Before writing a line of code, Kovil AI audits your regulatory environment — SOC 2, PCI DSS, BSA/AML, FCRA, ECOA — and maps requirements to system components. For credit and lending AI, we build in model explainability required for adverse action notices under ECOA. For payment and fraud systems, we implement PCI DSS-compliant data handling. All AI decisions are logged with decision factors, timestamps, and model version for full audit traceability.' } },
    { '@type': 'Question', name: 'How accurate are AI fraud detection systems?', acceptedAnswer: { '@type': 'Answer', text: 'Production fraud detection systems built by Kovil AI typically achieve precision rates of 94 to 97% on transaction scoring — meaning fewer than 3 to 6% of flagged transactions are false positives. Recall (catching actual fraud) is tuned based on your risk tolerance: higher recall means more false positives, which increases manual review burden. The threshold is set collaboratively with your risk team during the validation phase. All models are backtested against your historical fraud data before production deployment.' } },
    { '@type': 'Question', name: 'What is document intelligence for lending and how does it work?', acceptedAnswer: { '@type': 'Answer', text: 'Document intelligence for lending automates the extraction of structured data from unstructured financial documents — paystubs, W-2s, 1099s, bank statements, tax returns, and mortgage statements. An LLM or fine-tuned extraction model reads each document, identifies the relevant fields (income, employer, account number, balance, transaction history), and outputs structured data for your loan origination system. Kovil AI built a secondary mortgage document platform that eliminated 90% of manual data entry for a lending company processing hundreds of applications per month.' } },
    { '@type': 'Question', name: 'Can AI be used for KYC and AML compliance?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, and it is one of the highest-ROI applications in financial services. AI can automate identity document verification, cross-reference names against OFAC and PEP lists, classify transaction patterns for SAR (Suspicious Activity Report) candidacy, and monitor ongoing customer behavior for behavioral anomalies. KYC/AML AI does not replace human review for final determinations — it handles the high-volume triage so compliance analysts focus on genuinely ambiguous cases rather than processing clean applications manually.' } },
    { '@type': 'Question', name: 'How long does a fintech AI project take?', acceptedAnswer: { '@type': 'Answer', text: 'A focused payment dashboard or document extraction system can be built and deployed in 6 to 8 weeks. Kovil AI delivered a production-ready payment dashboard for a FinTech startup in 18 days under a fixed-price engagement. More complex systems — fraud detection with real-time scoring, full KYC/AML pipelines, or multi-document mortgage processing — typically take 12 to 20 weeks depending on data availability and integration complexity. Timelines are agreed and milestone-gated before work begins.' } },
    { '@type': 'Question', name: 'What infrastructure and core banking systems can Kovil AI integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI has built integrations with Plaid, Stripe, Marqeta, FIS, Fiserv, Temenos, and custom-built core banking systems. For cloud infrastructure, we work across AWS, GCP, and Azure — all of which have fintech-specific compliance certifications and data residency controls. For lending, we integrate with Encompass, Blend, and custom LOS platforms. If your system is not on this list, we assess the API surface and integration options during the workflow audit phase.' } },
    { '@type': 'Question', name: 'Does fintech AI require explainability?', acceptedAnswer: { '@type': 'Answer', text: 'For credit decisions, yes — explainability is a legal requirement under ECOA and FCRA. Adverse action notices must include specific reasons for credit denial, which means the AI system must output decision factors in plain language alongside the decision. For fraud and payment systems, explainability is operationally important but not legally mandated — analysts need to understand why a transaction was flagged to resolve disputes and tune the model. Kovil AI designs explainability into credit and lending AI from the start, not as a retrofit.' } },
    { '@type': 'Question', name: 'Who owns the AI models and code built by Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'The client owns 100% of all code, models, data pipelines, and IP produced during the engagement. Kovil AI retains no rights to any system built for you. This includes fine-tuned models, extraction templates, fraud scoring logic, and all integration code. You receive full source code and model artifacts as a deliverable, deployable to your own infrastructure.' } },
  ],
}

const useCases = [
  { icon: CreditCard, title: 'Payment Intelligence AI', body: 'Anomaly detection, transaction categorization, and real-time payment routing optimization. Kovil AI delivered a production-ready payment dashboard for a FinTech startup in 18 days under a fixed-price engagement.' },
  { icon: AlertTriangle, title: 'Fraud Detection', body: 'Real-time transaction scoring with precision rates of 94 to 97%. Models are backtested against your historical fraud data and deployed with human review workflows for flagged cases.' },
  { icon: FileText, title: 'Document Intelligence for Lending', body: 'Extract structured data from paystubs, W-2s, bank statements, and tax returns. Kovil AI built a secondary mortgage document platform that eliminated 90% of manual data entry for a lending company.' },
  { icon: Users, title: 'KYC/AML Automation', body: 'Automate identity verification, OFAC/PEP list screening, and SAR candidacy classification. AI handles the high-volume triage — compliance analysts focus on genuinely ambiguous cases.' },
  { icon: BarChart2, title: 'Loan Origination AI', body: 'Automate underwriting steps with document-grounded data extraction, income verification, and risk scoring. Reduce time-to-decision from days to hours while maintaining ECOA-compliant explainability.' },
  { icon: Shield, title: 'Regulatory Compliance Monitoring', body: 'Monitor transactions, communications, and customer behavior for regulatory deviations. Surface policy violations, unusual patterns, and reportable events before they become enforcement issues.' },
]

const painPoints = [
  { title: 'Financial AI must be explainable, not just accurate', body: 'A credit decision AI that produces accurate outcomes but cannot explain why it declined an application is not production-ready — it is a regulatory liability. ECOA and FCRA require adverse action notices with specific, human-readable reasons. Any fintech AI touching credit decisions must output decision factors alongside its output. Most AI frameworks are not designed for this, and retrofitting explainability after the model is built is expensive and often compromises accuracy.' },
  { title: 'Data quality and labeling are always harder than expected', body: 'Fraud models require labeled fraud events — but most companies have far fewer confirmed fraud cases than they think, because unresolved chargebacks and disputed transactions are ambiguous. Document extraction models need labeled samples of every document variant in your corpus. Underestimating the labeling effort is the most common reason fintech AI projects run over schedule. Kovil AI scopes the data preparation phase explicitly and surfaces this risk before the contract is signed.' },
  { title: 'Real-time requirements change the architecture entirely', body: 'A fraud detection model that runs a 200ms inference is architecturally different from one that takes 2 seconds — and both are different from a batch document processing system that runs overnight. Real-time payment scoring requires low-latency infrastructure, model serving optimization, and fallback logic for when the model is unavailable. These requirements must be established before architecture design, not discovered mid-build.' },
  { title: 'Integration with core banking and payment infrastructure is complex', body: 'AI systems that sit outside your payment processor, core banking system, or LOS become tools your operations team manually copies data into. Successful fintech AI integrates directly — reading transaction streams, writing back to the LOS, triggering compliance workflows. Building that integration layer properly is as complex as building the AI itself, and it requires engineers who understand both sides.' },
]

const personas = [
  { title: 'FinTech startups building AI into their core product', body: 'Payment companies, lending platforms, and neo-banks that need AI features shipped fast without building a dedicated ML team. Kovil AI delivers the AI layer as a milestone-gated project — you get a production system without the hiring overhead.' },
  { title: 'Banks and credit unions modernizing document workflows', body: 'Traditional financial institutions processing mortgage applications, loan documents, and compliance filings manually. Document intelligence reduces processing time and headcount requirements while maintaining the audit trails regulators require.' },
  { title: 'Compliance and risk teams under regulatory pressure', body: 'Financial institutions facing BSA/AML audit findings or SAR reporting backlogs. AI-assisted compliance monitoring and triage reduces the manual burden on compliance analysts while improving coverage and consistency across the transaction base.' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI for FinTech</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Financial Services AI Built for Compliance and Production Speed
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                Payment intelligence, fraud detection, KYC/AML automation, and document intelligence for lending. Kovil AI has shipped a production payment dashboard in 18 days and built a secondary mortgage document platform that eliminated 90% of manual data entry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">
                  Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies/fintech-payment-dashboard" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">
                  See Payment Dashboard Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>Payment Dashboard Shipped in 18 Days</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>90% Manual Entry Eliminated</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Compliance-First Architecture</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>150+ AI Systems Delivered</span>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">FinTech AI use cases Kovil AI builds</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              From real-time fraud scoring to mortgage document extraction, each system is designed around your regulatory environment, data architecture, and integration requirements.
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
              src="/industry-fintech.svg"
              alt="AI for FinTech — stacked credit cards with fraud detection accuracy chart, representing payment intelligence, KYC/AML, and document AI built by Kovil AI"
              width={1200}
              height={630}
              className="rounded-2xl w-full"
              unoptimized
            />
            <p className="text-[#6B7280] font-sans text-sm mt-4 text-center">Kovil AI builds AI for regulated financial environments — compliance-first architecture with full audit trails and production monitoring.</p>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Where fintech AI projects go wrong — and how Kovil AI avoids it</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              FinTech AI failures are rarely model failures. They are compliance design failures, data quality failures, and integration failures — all preventable with the right process.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How Kovil AI builds fintech AI — four phases</h2>
            <p className="text-[#A09A91] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Every fintech AI engagement starts with a compliance audit. Architecture decisions follow the regulatory constraints — not the other way around.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Who Kovil AI builds fintech AI for</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              FinTech AI looks different for a startup, a regional bank, and a compliance team under regulatory pressure. The use cases overlap but the priorities differ significantly.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">FinTech AI delivered by Kovil AI — real results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — FinTech startup</p>
                <h3 className="font-display text-xl font-bold mb-4">Production payment dashboard shipped in 18 days</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A FinTech startup needed a production-ready payment dashboard built to a hard board deadline. Kovil AI scoped, staffed, and delivered under a fixed-price engagement — live in 18 days with zero scope overrun and full integration with the existing payment processor API.
                </p>
                <Link href="/case-studies/fintech-payment-dashboard" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — Lending platform</p>
                <h3 className="font-display text-xl font-bold mb-4">Secondary mortgage document platform eliminates manual entry</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A secondary mortgage lender was processing hundreds of applications monthly with significant manual data entry from paystubs, bank statements, and tax returns. Kovil AI built a document intelligence platform that automated 90% of data extraction, cutting processing time per application from hours to minutes.
                </p>
                <Link href="/case-studies/secondary-mortgage-document-platform" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
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
                { label: 'Intelligent Document Processing', sub: 'IDP and document AI', href: '/intelligent-document-processing' },
                { label: 'AI for Legal', sub: 'Contract review and legal AI', href: '/ai-for-legal' },
                { label: 'Outcome-Based AI Projects', sub: 'Fixed-price AI delivery', href: '/engage/outcome-based-project' },
                { label: 'Payment Dashboard Case Study', sub: 'Shipped in 18 days', href: '/case-studies/fintech-payment-dashboard' },
                { label: 'Mortgage Document Platform', sub: '90% manual entry eliminated', href: '/case-studies/secondary-mortgage-document-platform' },
                { label: 'RAG Pipeline Development', sub: 'Retrieval-augmented systems', href: '/rag-pipeline-development' },
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to build fintech AI for production?</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Book a 30-minute call. We will audit your compliance environment, identify the highest-ROI AI opportunity, and outline a milestone delivery plan.</p>
            <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
