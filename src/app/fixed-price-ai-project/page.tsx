import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fixed-Price AI Projects | Predictable Budget, Defined Scope, Clear Delivery',
  description: 'Fixed-price AI development: defined scope, fixed budget, guaranteed delivery date. Kovil AI runs discovery sprints to de-risk scope before committing. No surprises.',
  keywords: ['fixed price AI project', 'fixed cost AI development', 'fixed price AI development', 'AI project fixed budget', 'AI development fixed scope', 'AI project pricing'],
  openGraph: {
    title: 'Fixed-Price AI Projects | Predictable Budget, Defined Scope, Clear Delivery',
    description: 'Fixed-price AI development: defined scope, fixed budget, guaranteed delivery date. Kovil AI runs discovery sprints to de-risk scope before committing. No surprises.',
    images: [{ url: 'https://kovil.ai/engagement-fixed-price.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'AI engineering company offering fixed-price project delivery for enterprise AI builds with defined scope and guaranteed timelines.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Fixed-Price AI Project', item: 'https://kovil.ai/fixed-price-ai-project' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Fixed-Price AI Project Delivery',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'Fixed-price AI project delivery: scoped, budgeted, and time-boxed builds for AI chatbots, RAG pipelines, agent systems, and integrations.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a fixed-price AI project?',
      acceptedAnswer: { '@type': 'Answer', text: 'A fixed-price AI project is a software engagement where the scope, budget, and delivery timeline are agreed upfront before work begins. You pay a fixed amount and receive a defined set of deliverables by a defined date. This model works best when requirements are clear and stable — typically after a discovery sprint that nails down exactly what will be built.' },
    },
    {
      '@type': 'Question',
      name: 'How does Kovil AI prevent fixed-price projects from going over scope?',
      acceptedAnswer: { '@type': 'Answer', text: 'We run a 2-week paid discovery sprint before every fixed-price engagement. This sprint produces a detailed technical spec, wireframes where relevant, data architecture, and a risk-flagged scope document. Only after the discovery sprint do we issue a fixed-price proposal. This process catches the ambiguities that cause scope creep before any code is written.' },
    },
    {
      '@type': 'Question',
      name: 'What types of AI projects suit a fixed-price model?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fixed-price works well for: AI chatbot builds with defined channels and integrations, RAG pipelines over a known document corpus, OpenAI or Claude API integrations into existing products, document extraction and classification systems, and MVP builds with well-understood user flows. It works less well for open-ended research, novel model development, or products where the requirements are likely to change during build.' },
    },
    {
      '@type': 'Question',
      name: 'What happens if requirements change mid-project?',
      acceptedAnswer: { '@type': 'Answer', text: 'Scope changes are handled via a change order process. Any request outside the agreed spec is scoped, priced, and approved before work begins. Minor adjustments that fall within the original intent of a feature are absorbed. Significant additions or pivots are priced separately. This keeps the project predictable while remaining flexible for genuine priority changes.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a fixed-price AI project take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Timeline depends on scope. A focused AI chatbot integration takes 4-6 weeks. A RAG pipeline with evaluation infrastructure takes 6-10 weeks. A multi-agent workflow system takes 10-14 weeks. The 2-week discovery sprint happens before these timelines and produces the spec that makes the fixed price possible.' },
    },
    {
      '@type': 'Question',
      name: 'Who owns the code and AI models at the end of a fixed-price project?',
      acceptedAnswer: { '@type': 'Answer', text: 'You do. All code, model weights, prompts, evaluation datasets, and documentation are delivered to you at project completion. Kovil AI retains no ongoing rights to what we build for you. You can modify, extend, or hand off to another team without restriction.' },
    },
    {
      '@type': 'Question',
      name: 'Is fixed-price better than time-and-materials for AI projects?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fixed-price gives you budget certainty and accountability for delivery. Time-and-materials gives you flexibility to change direction. For AI projects where the requirements are known and stable, fixed-price is usually the right choice because it aligns incentives: we are motivated to ship efficiently, and you know exactly what you are committing to. For exploratory or research-heavy work, time-and-materials is often more appropriate.' },
    },
    {
      '@type': 'Question',
      name: 'What does the discovery sprint produce?',
      acceptedAnswer: { '@type': 'Answer', text: 'The 2-week discovery sprint delivers: a technical architecture document, data flow diagrams, API specifications, prompt engineering approach, evaluation criteria, risk log with mitigations, a prioritised feature list with effort estimates, and a fixed-price proposal for the full build. This document is yours to keep regardless of whether you proceed with Kovil AI.' },
    },
  ],
}

const phases = [
  {
    step: '01',
    title: 'Discovery Sprint',
    duration: '2 weeks',
    desc: 'We map your data, define the architecture, write the technical spec, and identify risks. You get a full document at the end. Only then do we issue a fixed-price proposal.',
    deliverables: ['Technical architecture doc', 'Data flow diagrams', 'Risk log + mitigations', 'Fixed-price proposal'],
  },
  {
    step: '02',
    title: 'Milestone 1: Foundation',
    duration: '2-3 weeks',
    desc: 'Core infrastructure: data pipeline, model integration, evaluation harness. Deployed to staging. First demo at the end of this milestone.',
    deliverables: ['Working data ingestion pipeline', 'LLM integration + prompt v1', 'Eval suite baseline', 'Staging environment'],
  },
  {
    step: '03',
    title: 'Milestone 2: Core Features',
    duration: '2-4 weeks',
    desc: 'Primary user-facing features built and tested. Retrieval tuning, response quality benchmarks, integrations with your existing systems.',
    deliverables: ['Core feature set complete', 'Integration tested', 'RAGAS / eval scores baseline', 'UI / API layer'],
  },
  {
    step: '04',
    title: 'Milestone 3: Production Ready',
    duration: '1-2 weeks',
    desc: 'Performance tuning, security review, monitoring setup, documentation, and knowledge transfer. Delivered to your production environment.',
    deliverables: ['Production deployment', 'Monitoring + alerting', 'Full documentation', 'Handover session'],
  },
]

const goodFit = [
  { icon: '✅', label: 'AI chatbot with defined channels (web, Slack, WhatsApp)' },
  { icon: '✅', label: 'RAG pipeline over known document corpus (PDFs, Notion, Confluence)' },
  { icon: '✅', label: 'OpenAI / Claude API integration into existing product' },
  { icon: '✅', label: 'Document extraction: invoices, contracts, forms, reports' },
  { icon: '✅', label: 'AI feature addition to SaaS product (summarise, classify, generate)' },
  { icon: '✅', label: 'MVP build with well-understood user flows and data model' },
]

const poorFit = [
  { icon: '⚠️', label: 'Open-ended AI research or novel model development' },
  { icon: '⚠️', label: 'Products where requirements are expected to pivot frequently' },
  { icon: '⚠️', label: 'Enterprise integrations with poorly documented internal APIs' },
  { icon: '⚠️', label: 'Projects where training data does not yet exist' },
]

const comparison = [
  { dimension: 'Budget certainty', fixed: 'Exact — agreed upfront', tm: 'Variable — tracked monthly', outcome: 'Conditional — tied to results' },
  { dimension: 'Scope flexibility', fixed: 'Low — change orders for additions', tm: 'High — can pivot anytime', outcome: 'Low — success metric locked in' },
  { dimension: 'Best for', fixed: 'Known requirements, MVP builds', tm: 'Exploratory work, evolving specs', outcome: 'ROI-driven deployments' },
  { dimension: 'Risk allocation', fixed: 'Shared — spec must be solid', tm: 'On client (time spent = billed)', outcome: 'Mostly on Kovil AI' },
  { dimension: 'Payment structure', fixed: 'Milestone-based (30/40/30)', tm: 'Monthly invoicing', outcome: 'Upfront + performance fee' },
  { dimension: 'Discovery required', fixed: 'Yes — 2-week sprint first', tm: 'Optional', outcome: 'Yes — metric definition critical' },
]

const marketStats = [
  { value: '67%', label: 'of AI projects run over budget when scope is not locked before development starts (Gartner 2024)' },
  { value: '2 weeks', label: 'is all it takes in our discovery sprint to eliminate the ambiguity that causes most fixed-price failures' },
  { value: '94%', label: 'of Kovil AI fixed-price projects delivered on time and within agreed scope' },
]

export default function FixedPriceAIProjectPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-[#0A0A0A] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm text-[#9B9B9B] mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Fixed-Price AI Project</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full" />
                <span className="text-[#FF4F00] text-sm font-medium">Defined Scope. Fixed Budget. Guaranteed Date.</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Fixed-Price AI Projects That Actually Deliver
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                You know exactly what you are building, what it will cost, and when it ships. We run a 2-week discovery sprint to lock scope before committing to a price. No surprises, no runaway budgets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
                >
                  Get a Fixed-Price Proposal
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 border border-[#3A3A3A] text-white font-semibold px-8 py-4 rounded-lg hover:border-white transition-colors"
                >
                  See Case Studies
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <Image
                src="/engagement-fixed-price.webp"
                alt="Fixed-price AI project delivery showing milestone timeline, scope document and budget agreement"
                width={540}
                height={304}
                className="relative rounded-2xl border border-[#2A2A2A] shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-white border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#4B4B4B]">
            {['2-week Discovery Sprint', 'Milestone-Based Payments', 'Full Scope Document', 'Change Order Process', 'You Own All Code', '94% On-Time Delivery'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What it means + market stats */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">What Fixed-Price Really Means</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Fixed-price is not a magic formula. It is a commitment that only works when the scope is genuinely understood before work begins. Most fixed-price AI projects fail because they skip this step: a vague spec gets priced, ambiguity becomes scope creep, and the budget blows out.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Our model is different. Every fixed-price engagement starts with a 2-week paid discovery sprint. By the end of week 2, we have a technical architecture document, a data flow diagram, a risk log, and a detailed scope. Only then do we issue a fixed-price proposal.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                The result: you get budget certainty backed by genuine scoping, not an optimistic estimate. We get a clear spec that lets us deliver efficiently. Everyone wins.
              </p>
              <div className="mt-8 bg-[#0A0A0A] rounded-xl p-6 border border-[#2A2A2A]">
                <p className="text-white font-semibold mb-2">A real example</p>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">
                  A logistics company wanted an AI chatbot to handle carrier queries. Initial estimate from another agency: "probably 3-4 months." After our 2-week discovery sprint, the spec revealed 3 critical integrations and 2 edge-case document types that added complexity. We priced those in upfront. Final delivery: 9 weeks, on budget, no surprises.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {marketStats.map(stat => (
                <div key={stat.value} className="bg-white rounded-xl border border-[#E5E2D9] p-6 flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#FF4F00] leading-none flex-shrink-0">{stat.value}</span>
                  <span className="text-[#4B4B4B] text-sm leading-relaxed pt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* How it works — phase timeline */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">How a Fixed-Price AI Project Works</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Four phases from first conversation to production handover. Every milestone has defined deliverables and a payment gate.</p>
          </div>
          <div className="space-y-5">
            {phases.map((phase, i) => (
              <div key={phase.step} className="bg-white rounded-xl border border-[#E5E2D9] p-6 lg:p-8 flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="flex-shrink-0 flex items-start gap-4 lg:w-56">
                  <span className="text-4xl font-bold text-[#FF4F00] opacity-40 leading-none">{phase.step}</span>
                  <div>
                    <p className="font-semibold text-[#0A0A0A]">{phase.title}</p>
                    <p className="text-sm text-[#9B9B9B]">{phase.duration}</p>
                  </div>
                </div>
                <div className="flex-1 border-t lg:border-t-0 lg:border-l border-[#E5E2D9] pt-4 lg:pt-0 lg:pl-10">
                  <p className="text-[#4B4B4B] leading-relaxed mb-4">{phase.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.deliverables.map(d => (
                      <span key={d} className="inline-flex items-center gap-1.5 text-xs bg-[#FAF8F4] border border-[#E5E2D9] rounded-full px-3 py-1 text-[#4B4B4B]">
                        <CheckCircle2 className="w-3 h-3 text-[#FF4F00]" />
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Good fit / poor fit */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Is Fixed-Price Right for Your AI Project?</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Fixed-price is powerful when requirements are stable. Here is how to know if it is the right model.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-[#E5E2D9] p-6">
              <h3 className="font-semibold text-[#0A0A0A] mb-4 pb-3 border-b border-[#E5E2D9]">Good fit for fixed-price</h3>
              <ul className="space-y-3">
                {goodFit.map(item => (
                  <li key={item.label} className="flex items-start gap-3 text-sm text-[#4B4B4B]">
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E2D9] p-6">
              <h3 className="font-semibold text-[#0A0A0A] mb-4 pb-3 border-b border-[#E5E2D9]">Consider a different model if</h3>
              <ul className="space-y-3">
                {poorFit.map(item => (
                  <li key={item.label} className="flex items-start gap-3 text-sm text-[#4B4B4B]">
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-[#E5E2D9]">
                <p className="text-xs text-[#9B9B9B]">Not sure? Our discovery sprint will tell you. If after 2 weeks we believe the scope is too volatile for fixed-price, we will say so and recommend the right model.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Mid CTA */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start with a 2-Week Discovery Sprint</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">
            The sprint produces a complete technical spec and fixed-price proposal. You keep the spec regardless of whether you proceed with us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
          >
            Book a Discovery Sprint
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Comparison table */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Fixed-Price vs Time-and-Materials vs Outcome-Based</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Three engagement models, three different risk and flexibility profiles. Here is how to choose.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E5E2D9]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0A0A] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Dimension</th>
                  <th className="text-left px-5 py-4 font-semibold text-[#FF4F00]">Fixed-Price</th>
                  <th className="text-left px-5 py-4 font-semibold">Time-and-Materials</th>
                  <th className="text-left px-5 py-4 font-semibold">Outcome-Based</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.dimension} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F4]'} border-t border-[#E5E2D9]`}>
                    <td className="px-5 py-4 font-semibold text-[#0A0A0A]">{row.dimension}</td>
                    <td className="px-5 py-4 text-[#4B4B4B] font-medium">{row.fixed}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.tm}</td>
                    <td className="px-5 py-4 text-[#4B4B4B]">{row.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/outcome-based-ai-development" className="inline-flex items-center gap-1.5 text-sm text-[#FF4F00] hover:underline">
              Learn about Outcome-Based AI <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/ai-project-development" className="inline-flex items-center gap-1.5 text-sm text-[#FF4F00] hover:underline">
              See all AI project types <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Case study */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 lg:p-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-4">Fixed-Price Case Study</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">E-Commerce Brand: AI Product Description Generator</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-4 max-w-2xl">
              A fashion e-commerce company needed to generate SEO-optimised product descriptions for 40,000 SKUs. Scope: ingest their product catalogue (CSV + images), generate descriptions in 3 tone variants per SKU, human-review workflow for flagged outputs, and Shopify push integration.
            </p>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              After a 2-week discovery sprint, we scoped the image-captioning pipeline (which they had not initially requested but turned out to be critical for accuracy), added it to the spec, and issued a revised fixed-price proposal. The project ran 8 weeks and delivered within the revised scope.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">40K</div>
                <div className="text-sm text-[#9B9B9B]">SKUs processed with AI-generated descriptions in 8 weeks</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">73%</div>
                <div className="text-sm text-[#9B9B9B]">reduction in copywriting time per SKU vs manual process</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">0</div>
                <div className="text-sm text-[#9B9B9B]">scope disputes — discovery sprint caught all ambiguities upfront</div>
              </div>
            </div>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors">
              Read more case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* FAQs */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">Fixed-Price AI Projects: Frequently Asked Questions</h2>
          <div className="divide-y divide-[#E5E2D9]">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="py-6">
                <h3 className="font-semibold text-[#0A0A0A] mb-2">{faq.name}</h3>
                <p className="text-[#4B4B4B] text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Related links */}
      <section className="bg-[#FAF8F4] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#0A0A0A] mb-4">Related engagement models and services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Outcome-Based AI Development', href: '/outcome-based-ai-development' },
              { label: 'AI Project Development', href: '/ai-project-development' },
              { label: 'AI Agent Development', href: '/ai-agent-development' },
              { label: 'RAG Pipeline Development', href: '/rag-pipeline-development' },
              { label: 'Hire AI Engineers', href: '/hire/ai-engineer' },
              { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1 text-sm text-[#4B4B4B] border border-[#E5E2D9] rounded-full px-4 py-2 hover:border-[#FF4F00] hover:text-[#FF4F00] transition-colors"
              >
                {link.label} <ChevronRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Bottom CTA */}
      <section className="bg-[#FF4F00] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready for a Fixed-Price AI Build?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Tell us what you want to build. We will run a 2-week discovery sprint, hand you a full technical spec, and give you a fixed-price proposal you can plan around.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg"
          >
            Get a Fixed-Price Proposal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
