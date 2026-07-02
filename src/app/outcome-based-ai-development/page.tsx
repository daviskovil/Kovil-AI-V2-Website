import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Outcome-Based AI Development | Pay for Results, Not Hours',
  description: 'Outcome-based AI development: Kovil AI takes shared risk on your AI project. You define the metric that matters, we build the system that moves it. Pay on delivery.',
  keywords: ['outcome-based AI development', 'results-based AI project', 'AI development pay on results', 'performance-based AI', 'AI ROI guarantee', 'outcome-driven AI'],
  openGraph: {
    title: 'Outcome-Based AI Development | Pay for Results, Not Hours',
    description: 'Outcome-based AI development: Kovil AI takes shared risk on your AI project. You define the metric that matters, we build the system that moves it. Pay on delivery.',
    images: [{ url: 'https://kovil.ai/engagement-outcome-based.webp', width: 1200, height: 630 }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo.png',
  description: 'AI engineering company offering outcome-based project delivery where fees are tied to measurable business results.',
  sameAs: ['https://www.linkedin.com/company/kovil-ai'],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Outcome-Based AI Development', item: 'https://kovil.ai/outcome-based-ai-development' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Outcome-Based AI Development',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  areaServed: 'Worldwide',
  description: 'Outcome-based AI development where Kovil AI takes shared risk: fees are tied to measurable business metrics rather than time spent or deliverables alone.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is outcome-based AI development?',
      acceptedAnswer: { '@type': 'Answer', text: 'Outcome-based AI development is an engagement model where part or all of the fees are tied to measurable business results rather than time or deliverables. Instead of paying for engineering hours, you pay when a specific metric moves: support ticket deflection rate, contract review time, lead qualification accuracy, or another agreed KPI. Kovil AI takes shared risk on the project succeeding.' },
    },
    {
      '@type': 'Question',
      name: 'How is the success metric defined?',
      acceptedAnswer: { '@type': 'Answer', text: 'We define the success metric together during a 2-week scoping engagement before any build begins. The metric must be: measurable with existing instrumentation (or instrumentation we add), attributable to the AI system (not confounded by other changes), and achievable within the agreed timeline based on benchmark data. Common metrics include deflection rate, processing time reduction, accuracy on a classification task, and cost per transaction.' },
    },
    {
      '@type': 'Question',
      name: 'What if the AI system does not hit the target metric?',
      acceptedAnswer: { '@type': 'Answer', text: 'This depends on the specific contract structure. In a pure outcome-based model, the performance fee is not paid if the metric is not reached. In a hybrid model, a base fee covers engineering costs and the performance fee is paid on top when the metric is hit. Either way, Kovil AI has real skin in the game, which aligns incentives toward measurable success rather than just shipping code.' },
    },
    {
      '@type': 'Question',
      name: 'What types of AI projects suit outcome-based pricing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Outcome-based works best when: there is a clear, measurable metric you care about; the baseline is established (you know what "good" looks like today); the AI system is the primary lever for moving that metric; and the measurement window is 3-6 months. Good examples include customer support deflection, document processing throughput, fraud detection precision, and sales lead scoring accuracy.' },
    },
    {
      '@type': 'Question',
      name: 'How does outcome-based differ from fixed-price AI development?',
      acceptedAnswer: { '@type': 'Answer', text: 'Fixed-price ties the fee to delivering a defined set of features by a defined date. Outcome-based ties the fee (or a portion of it) to a business metric moving by a defined amount. Fixed-price is about delivery risk. Outcome-based is about performance risk. Many engagements use a hybrid: a fixed base fee for the build, plus a performance component paid when the metric is reached.' },
    },
    {
      '@type': 'Question',
      name: 'How long is the measurement window?',
      acceptedAnswer: { '@type': 'Answer', text: 'Typically 30-90 days after production deployment. This window must be long enough for statistical significance and to exclude launch effects, but short enough to keep the engagement commercially reasonable. The measurement window and method are agreed in the contract before work begins.' },
    },
    {
      '@type': 'Question',
      name: 'Do you work with clients who do not yet have a baseline?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, but the first step is establishing the baseline. If you do not have historical data on your current process, we instrument it during the scoping engagement. This usually takes 2-4 weeks of data collection before we can define a meaningful target. We cannot agree a performance metric without knowing where you are starting from.' },
    },
    {
      '@type': 'Question',
      name: 'What stops Kovil AI from taking only easy projects under this model?',
      acceptedAnswer: { '@type': 'Answer', text: 'We are selective. Outcome-based engagements require genuine confidence in the technical approach and the quality of the client\'s data. We will decline engagements where the data is too noisy, the metric is unattributable, or the timeline is unrealistic. This selectivity is what makes the model credible: we only take on outcome-based work where we genuinely believe the system will perform.' },
    },
  ],
}

const howItWorks = [
  {
    step: '01',
    title: 'Metric Definition Scoping',
    duration: '2 weeks',
    desc: 'We define the success metric together. Establish the baseline, agree the target, confirm the measurement methodology, and assess technical feasibility. No ambiguity about what "success" means.',
    example: 'Example: "Support ticket deflection rate from 22% to 55% within 60 days of launch, measured by Zendesk ticket source tag."',
  },
  {
    step: '02',
    title: 'Contract and Fee Structure',
    duration: '1 week',
    desc: 'We agree the fee structure: base retainer (covers engineering cost) plus performance fee (paid when the metric is hit). Or a pure performance model for the right projects.',
    example: 'Example: 40% base on delivery, 60% performance fee paid at 30-day measurement window if target is met.',
  },
  {
    step: '03',
    title: 'Build and Deploy',
    duration: '4-12 weeks',
    desc: 'We build the AI system with the metric as the north star. Every technical decision is made with the outcome in mind, not just feature completion. Weekly progress against eval benchmarks.',
    example: 'Example: RAG pipeline tuned against RAGAS context-recall score, with weekly benchmark reports against baseline.',
  },
  {
    step: '04',
    title: 'Measurement Window',
    duration: '30-90 days',
    desc: 'After production deployment, the agreed measurement window runs. We monitor the metric and iterate rapidly on any issues. Performance fee is triggered when the target is confirmed.',
    example: 'Example: 60-day window. Deflection rate hit 61% at day 42. Performance fee paid. Monitoring continues.',
  },
]

const exampleMetrics = [
  {
    domain: 'Customer Support',
    metric: 'Ticket deflection rate',
    baseline: 'Typical: 15-25% deflection without AI',
    target: 'Target: 50-70% deflection with AI chatbot',
    measurement: 'Measured: Zendesk / Intercom source tags over 60 days',
  },
  {
    domain: 'Document Processing',
    metric: 'Processing time per document',
    baseline: 'Typical: 45-90 min manual review per contract',
    target: 'Target: Under 5 min with AI extraction + human confirm',
    measurement: 'Measured: Average time-to-approve in DocuSign audit log',
  },
  {
    domain: 'Sales Qualification',
    metric: 'Lead-to-opportunity conversion accuracy',
    baseline: 'Typical: 34% precision on manual SDR scoring',
    target: 'Target: 60%+ precision with AI lead scoring model',
    measurement: 'Measured: CRM opportunity conversion at 90-day window',
  },
  {
    domain: 'Fraud Detection',
    metric: 'False positive rate on transaction flagging',
    baseline: 'Typical: 8-12% false positive rate (blocking real customers)',
    target: 'Target: Under 2% false positives with AI model',
    measurement: 'Measured: Manual review queue resolution labels',
  },
]

const marketStats = [
  { value: '3-5x', label: 'higher alignment between Kovil AI incentives and client success under outcome-based models vs hourly billing' },
  { value: '82%', label: 'of enterprise AI projects fail to deliver measurable ROI when success metrics are not defined upfront (McKinsey)' },
  { value: '60 days', label: 'typical measurement window to confirm performance on support and document processing use cases' },
]

export default function OutcomeBasedAIDevelopmentPage() {
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
                <span className="text-white">Outcome-Based AI Development</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF4F00]/10 border border-[#FF4F00]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#FF4F00] rounded-full" />
                <span className="text-[#FF4F00] text-sm font-medium">We Share the Risk. You Pay for Results.</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                AI Development Where We Have Skin in the Game
              </h1>
              <p className="text-lg text-[#9B9B9B] leading-relaxed mb-8">
                Define the metric that matters to your business. Kovil AI builds the system to move it. Part of our fee is paid only when the target is hit. Not just shipped. Delivered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
                >
                  Discuss an Outcome-Based Build
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
                src="/engagement-outcome-based.webp"
                alt="Outcome-based AI development showing success metric dashboard, performance fee structure and ROI measurement"
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
            {['Metric-First Scoping', 'Shared Risk Model', 'Base + Performance Fee', '30-90 Day Measurement', 'Clear Attribution Method', 'Weekly Benchmark Reports'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What it means + stats */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">What Outcome-Based AI Development Actually Means</h2>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                Most AI development is billed by the hour or by the deliverable. You pay for engineering time regardless of whether the system works. Outcome-based development flips this: a portion of Kovil AI's fee is contingent on the system moving a business metric you define.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed mb-4">
                This is not a gimmick. It requires genuine commitment from both sides. You need clean data, an established baseline, and a metric that is attributable to the AI system. We need confidence in the technical approach and realistic timelines. When those conditions are met, the model is transformative.
              </p>
              <p className="text-[#4B4B4B] leading-relaxed">
                The practical structure is usually a hybrid: a base fee covers engineering costs so the project is commercially viable, and a performance fee is paid when the metric target is confirmed in the measurement window. The split and structure depend on the project.
              </p>
              <div className="mt-8 bg-[#0A0A0A] rounded-xl p-6 border border-[#2A2A2A]">
                <p className="text-white font-semibold mb-2">A plain-English example</p>
                <p className="text-[#9B9B9B] text-sm leading-relaxed">
                  A healthcare company's support team handles 8,000 tickets per month. Today's chatbot deflects 18%. They want 55%. We agree: base fee covers build costs, performance fee is paid at 60 days if deflection is 50% or higher (measured by Zendesk source tag). We ship at week 8. At day 47, deflection reaches 58%. Performance fee is triggered.
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

      {/* How it works */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">How Outcome-Based AI Development Works</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Four stages from metric definition to performance fee payment. Every stage has a clear purpose and deliverable.</p>
          </div>
          <div className="space-y-5">
            {howItWorks.map((phase) => (
              <div key={phase.step} className="bg-white rounded-xl border border-[#E5E2D9] p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-start gap-4 lg:w-56 flex-shrink-0">
                    <span className="text-4xl font-bold text-[#FF4F00] opacity-40 leading-none">{phase.step}</span>
                    <div>
                      <p className="font-semibold text-[#0A0A0A]">{phase.title}</p>
                      <p className="text-sm text-[#9B9B9B]">{phase.duration}</p>
                    </div>
                  </div>
                  <div className="flex-1 border-t lg:border-t-0 lg:border-l border-[#E5E2D9] pt-4 lg:pt-0 lg:pl-10">
                    <p className="text-[#4B4B4B] leading-relaxed mb-4">{phase.desc}</p>
                    <div className="bg-[#FAF8F4] border border-[#E5E2D9] rounded-lg px-4 py-3">
                      <p className="text-xs text-[#9B9B9B] italic">{phase.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Metric examples */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">Outcome Metrics We Have Built Against</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">Real metrics from real use cases. Each one measurable, attributable, and time-boxed.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {exampleMetrics.map(ex => (
              <div key={ex.domain} className="bg-white rounded-xl border border-[#E5E2D9] p-6 hover:border-[#FF4F00]/40 transition-colors">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-3">{ex.domain}</span>
                <h3 className="font-semibold text-[#0A0A0A] text-lg mb-4">{ex.metric}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#9B9B9B] flex-shrink-0 w-20">Baseline</span>
                    <span className="text-[#4B4B4B]">{ex.baseline}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#9B9B9B] flex-shrink-0 w-20">Target</span>
                    <span className="text-[#FF4F00] font-medium">{ex.target}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#9B9B9B] flex-shrink-0 w-20">Measured</span>
                    <span className="text-[#4B4B4B]">{ex.measurement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Mid CTA */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">If We Do Not Move the Metric, We Do Not Get Paid</h2>
          <p className="text-[#9B9B9B] max-w-xl mx-auto mb-8">
            That is the commitment. Tell us the metric you care about and we will tell you honestly if it is achievable.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#e64400] transition-colors"
          >
            Define Your Outcome Metric
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* When it works / when it does not */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">When Outcome-Based Works (and When It Does Not)</h2>
            <p className="text-[#4B4B4B] max-w-2xl mx-auto">We are selective about which projects we take on this model. Here is our honest assessment.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-[#E5E2D9] p-6">
              <h3 className="font-semibold text-[#0A0A0A] mb-4 pb-3 border-b border-[#E5E2D9]">Works well when</h3>
              <ul className="space-y-3">
                {[
                  'You have a clear, measurable metric with an established baseline',
                  'The metric is attributable to the AI system (not confounded by other changes)',
                  'Historical data exists to benchmark against',
                  'The measurement window is 30-90 days (not multi-year)',
                  'Stakeholders are aligned on what "success" looks like before we start',
                  'The use case has worked in comparable companies (reduces technical risk)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4B4B4B]">
                    <CheckCircle2 className="w-4 h-4 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-[#E5E2D9] p-6">
              <h3 className="font-semibold text-[#0A0A0A] mb-4 pb-3 border-b border-[#E5E2D9]">Not the right model when</h3>
              <ul className="space-y-3">
                {[
                  'No baseline data exists to measure against',
                  'The metric is a leading indicator with no historical conversion rate',
                  'Many other initiatives are running simultaneously (attribution impossible)',
                  'The target requires novel model research with uncertain outcomes',
                  'Measurement requires manual effort that is not already instrumented',
                  'Timeline to measure is longer than 12 months',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#4B4B4B]">
                    <span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-[#E5E2D9]" />

      {/* Case study */}
      <section className="bg-[#FAF8F4] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A0A0A] rounded-2xl p-8 lg:p-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#FF4F00] mb-4">Outcome-Based Case Study</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">SaaS Company: AI Support Deflection on Outcome Model</h2>
            <p className="text-[#9B9B9B] leading-relaxed mb-4 max-w-2xl">
              A B2B SaaS company had a 9-person support team handling 6,200 tickets per month. Their chatbot deflected 14%. They wanted 50%. We agreed: base fee covers engineering, performance fee paid at day 60 if deflection exceeds 45%.
            </p>
            <p className="text-[#9B9B9B] leading-relaxed mb-8 max-w-2xl">
              We built a RAG pipeline over their help center, product changelog, and support macros. Added a confidence-gating layer that escalated to humans when the model was uncertain. Shipped at week 7.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">63%</div>
                <div className="text-sm text-[#9B9B9B]">deflection rate at day 52, exceeding the 45% target</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">3,900</div>
                <div className="text-sm text-[#9B9B9B]">tickets per month now handled without human agent</div>
              </div>
              <div className="bg-white/5 rounded-xl border border-white/10 p-5">
                <div className="text-3xl font-bold text-[#FF4F00] mb-1">$840K</div>
                <div className="text-sm text-[#9B9B9B]">annualised support headcount savings at current ticket volume</div>
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
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-10 text-center">Outcome-Based AI: Frequently Asked Questions</h2>
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
              { label: 'Fixed-Price AI Project', href: '/fixed-price-ai-project' },
              { label: 'AI Project Development', href: '/ai-project-development' },
              { label: 'AI Agent Development', href: '/ai-agent-development' },
              { label: 'RAG Pipeline Development', href: '/rag-pipeline-development' },
              { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
              { label: 'Generative AI Development', href: '/generative-ai-development' },
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
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What Metric Would You Want Us to Move?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
            Tell us the KPI that matters. We will assess whether it is achievable and what an outcome-based structure would look like for your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#FF4F00] font-bold px-10 py-4 rounded-lg hover:bg-[#FAF8F4] transition-colors text-lg"
          >
            Start the Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
