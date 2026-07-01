import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ClipboardList, FileText, Shield, Activity, Users, Brain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for Healthcare | Clinical AI Development & Healthcare Automation | Kovil AI',
  description: 'Healthcare AI development for clinical teams, health systems, and digital health companies. Patient intake automation, clinical documentation, medical coding AI, EHR integration, and prior auth workflows. 95% manual entry eliminated in production.',
  keywords: ['AI for healthcare', 'healthcare AI development', 'clinical AI', 'medical AI', 'EHR integration AI', 'prior authorization AI', 'clinical documentation AI', 'HIPAA AI'],
  openGraph: {
    title: 'AI for Healthcare | Kovil AI',
    description: '95% Manual Entry Eliminated. HIPAA-Compliant AI Built for Clinical Workflows.',
    url: 'https://kovil.ai/ai-for-healthcare',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/industry-healthcare.svg', width: 1200, height: 630, alt: 'AI for Healthcare — Clinical AI and HIPAA-Compliant Automation | Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'AI for Healthcare | Kovil AI', description: 'HIPAA-compliant clinical AI built for production — intake, documentation, coding, and EHR integration.' },
  alternates: { canonical: 'https://kovil.ai/ai-for-healthcare' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm specializing in healthcare, legal, and enterprise AI systems.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI for Healthcare', item: 'https://kovil.ai/ai-for-healthcare' }] }

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI for Healthcare',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  description: 'Healthcare AI development — patient intake automation, clinical documentation, medical coding AI, EHR integration, prior authorization workflows, and clinical decision support for health systems and digital health companies.',
  serviceType: 'Healthcare AI Development',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Healthcare AI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Patient Intake Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clinical Documentation AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Coding Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EHR Integration AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prior Authorization AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clinical Decision Support' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Kovil AI builds AI for healthcare organizations',
  description: 'Kovil AI builds healthcare AI in four HIPAA-first phases — from compliance assessment through EHR integration and clinical validation.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'HIPAA and clinical workflow assessment', text: 'We map your PHI data flows, existing EHR infrastructure, and clinical workflows before designing anything. HIPAA compliance requirements — BAA execution, PHI handling protocols, audit logging standards — are established as hard constraints. We identify which clinical workflows have the highest AI ROI: intake typically reduces staff burden by 40 to 60%, prior auth automation reduces denial rates by 20 to 35%, and documentation AI reduces physician charting time by 30 to 50%.' },
    { '@type': 'HowToStep', position: 2, name: 'AI architecture with HIPAA controls', text: 'We design the AI architecture with PHI isolation, role-based access controls, encrypted data storage and transmission, and complete audit logging of all AI interactions with patient data. For clinical documentation systems, we design the physician review workflow alongside the AI — every AI-generated note requires physician sign-off before it enters the medical record. For coding systems, we build the human review queue for AI-suggested codes.' },
    { '@type': 'HowToStep', position: 3, name: 'Build and clinical validation', text: 'We build the system and validate against a representative sample of your actual clinical data — de-identified for training, validated against live workflows with clinical staff. For documentation systems, we measure documentation completeness and accuracy against a baseline. For coding systems, we measure coding accuracy and denial rate impact. No system goes to production without passing clinical validation with your staff.' },
    { '@type': 'HowToStep', position: 4, name: 'EHR integration and production deployment', text: 'We integrate with your EHR via HL7 FHIR or direct API where available, and deploy with full audit logging, PHI access monitoring, and model performance tracking. Post-launch, we monitor for model drift (clinical language and coding guidelines change over time), physician override rates, and downstream quality metrics like denial rates and documentation completeness scores.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What types of healthcare AI systems does Kovil AI build?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI builds patient intake automation systems (conversational AI that collects demographics, insurance, chief complaint, and medical history before the encounter), clinical documentation AI (ambient or structured note generation from clinical encounters), medical coding automation (ICD-10, CPT code suggestion from clinical notes), EHR integration pipelines (HL7 FHIR-based data exchange between AI systems and EHRs like Epic, Cerner, Athenahealth), prior authorization AI (automated criteria matching and documentation assembly), and clinical decision support tools (evidence-based alerts and recommendations within clinical workflows). All systems are HIPAA-compliant by design.' } },
    { '@type': 'Question', name: 'How does Kovil AI ensure HIPAA compliance in healthcare AI projects?', acceptedAnswer: { '@type': 'Answer', text: 'HIPAA compliance is a design constraint, not a feature added at the end. Before writing any code, Kovil AI executes a Business Associate Agreement (BAA), maps all PHI data flows, defines data residency requirements, and establishes audit logging standards. Systems are built with PHI isolation by patient, role-based access controls, encrypted storage and transmission (AES-256 at rest, TLS 1.3 in transit), and complete audit logs of every AI interaction with patient data. No PHI is used to train or fine-tune models without explicit written authorization. Deployment environments are HIPAA-eligible cloud configurations (AWS HealthLake, Azure Health Data Services, or Google Cloud Healthcare API).' } },
    { '@type': 'Question', name: 'Can AI replace physician documentation?', acceptedAnswer: { '@type': 'Answer', text: 'No — and Kovil AI does not build systems designed to remove the physician from the loop. Clinical documentation AI generates a draft note from the clinical encounter (either from structured input or ambient conversation transcription), but the physician reviews, edits, and signs every note before it enters the medical record. This is both a clinical safety requirement and a legal requirement under state medical record laws. The value is time savings: physicians typically spend 1.5 to 2.5 hours per day on documentation. AI-assisted documentation reduces that to 30 to 60 minutes by handling the drafting layer.' } },
    { '@type': 'Question', name: 'What EHR systems can Kovil AI integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI has built integrations with Epic (via SMART on FHIR and Epic APIs), Cerner/Oracle Health, Athenahealth, and eClinicalWorks. For health systems with HL7 FHIR R4 APIs exposed, integration is straightforward. For older HL7 v2 interfaces, we build the transformation layer. Custom EHRs used by specialty practices or digital health companies are assessed during the workflow audit phase. If your EHR has no API, we assess HL7 feed and export options as integration paths.' } },
    { '@type': 'Question', name: 'How accurate is AI medical coding?', acceptedAnswer: { '@type': 'Answer', text: 'In production healthcare AI coding systems, ICD-10 primary diagnosis accuracy typically runs 88 to 94% for common conditions in well-documented notes. CPT procedure code suggestion accuracy is higher — 91 to 96% — because procedure descriptions are more standardized. Accuracy drops for complex, multi-diagnosis encounters and for rare conditions with limited training examples. Kovil AI builds coding systems with a mandatory human review step: AI suggests codes with confidence scores, coders review and confirm. This is not optional — AI-only coding without human review creates compliance and billing risk.' } },
    { '@type': 'Question', name: 'What is prior authorization AI and how much time does it save?', acceptedAnswer: { '@type': 'Answer', text: 'Prior authorization AI automates the matching of clinical documentation against payer criteria to determine whether a prior auth request is likely to be approved, assembles the required documentation package, and in some cases submits directly via payer APIs. Manual prior auth typically takes 20 to 40 minutes per request and has a first-pass denial rate of 15 to 25%. AI-assisted prior auth reduces assembly time to 5 to 10 minutes per request and improves first-pass approval rates by pre-checking criteria alignment before submission. The savings compound at scale — practices processing 50+ prior auths weekly see significant staff hour reduction.' } },
    { '@type': 'Question', name: 'How long does a healthcare AI project take?', acceptedAnswer: { '@type': 'Answer', text: 'A focused patient intake automation system can be built and deployed in 8 to 10 weeks. Clinical documentation AI with EHR integration typically takes 12 to 16 weeks — the integration and clinical validation phases take the most time. Medical coding systems with human review queues and denial analytics run 14 to 20 weeks. Prior authorization automation timelines depend heavily on payer API availability: practices relying on payer portals without APIs require additional integration work. All timelines are milestone-gated and agreed before work begins.' } },
    { '@type': 'Question', name: 'Does Kovil AI work with digital health startups or only large health systems?', acceptedAnswer: { '@type': 'Answer', text: 'Both. Large health systems engage Kovil AI for EHR integration projects, documentation AI pilots across service lines, and coding automation for revenue cycle improvement. Digital health startups engage Kovil AI to build the AI layer of their product — intake chatbots, clinical note generation, or symptom triage — without hiring a dedicated ML team. The compliance requirements are identical regardless of organization size: HIPAA applies to both a 50-physician practice and a 5,000-bed health system.' } },
    { '@type': 'Question', name: 'Who owns the AI models and code built by Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'The client owns 100% of all code, models, pipelines, and IP produced during the engagement. Kovil AI retains no rights to any system built for you. No patient data or clinical content is used to train or improve Kovil AI systems or any third-party models. You receive full source code, model artifacts, and deployment infrastructure as a deliverable, suitable for hosting in your HIPAA-eligible cloud environment.' } },
  ],
}

const useCases = [
  { icon: ClipboardList, title: 'Patient Intake Automation', body: 'Conversational AI collects demographics, insurance, medical history, and chief complaint before the encounter. Reduces front desk burden by 40 to 60% and improves data completeness entering the clinical workflow.' },
  { icon: FileText, title: 'Clinical Documentation AI', body: 'AI-assisted note generation from structured input or ambient encounter transcription. Physicians review and sign — drafting time reduced by 30 to 50%. Kovil AI eliminated 95% of manual data entry in a production healthcare integration.' },
  { icon: Activity, title: 'Medical Coding Automation', body: 'ICD-10 and CPT code suggestion from clinical notes, with confidence scoring and a human review queue. Improves coding throughput and reduces denial rates from missed or incorrect codes.' },
  { icon: Users, title: 'EHR Integration AI', body: 'HL7 FHIR-based data pipelines connecting AI systems to Epic, Cerner, Athenahealth, and custom EHRs. Real-time data exchange for clinical workflows without manual re-entry or PDF uploads.' },
  { icon: Shield, title: 'Prior Authorization AI', body: 'Automates criteria matching, documentation assembly, and payer submission for prior authorization requests. Reduces per-request time from 30+ minutes to under 10 minutes and improves first-pass approval rates.' },
  { icon: Brain, title: 'Clinical Decision Support', body: 'Evidence-based alerts, drug interaction warnings, and care gap identification surfaced within clinical workflows. Designed to complement physician judgment without alert fatigue from low-specificity notifications.' },
]

const painPoints = [
  { title: 'PHI compliance cannot be retrofitted', body: 'Healthcare AI projects that start with the model and add HIPAA compliance later consistently end up rebuilding the data layer. PHI isolation, audit logging, and BAA-compliant data handling must be designed in from the start — they affect infrastructure choices, model training protocols, and deployment architecture. Kovil AI establishes compliance requirements before writing the first line of code.' },
  { title: 'Clinical validation takes longer than teams expect', body: 'A coding AI with 85% accuracy sounds impressive until it hits a batch of complex multi-diagnosis encounters and produces 60% accuracy. Clinical AI must be validated against a representative sample of your actual patient population and documentation patterns — not a general benchmark dataset. This validation phase takes 4 to 6 weeks for most systems and requires clinical staff time. Teams that skip it discover the gaps in production, where fixing errors is expensive.' },
  { title: 'EHR integration is the hardest part', body: 'Epic, Cerner, and other major EHRs have extensive APIs — but accessing them requires IT involvement, SMART on FHIR registration, and often lengthy vendor approval processes. Building AI that sits outside the EHR and requires manual data entry creates a parallel workflow clinicians will not sustain. Integration planning must start on day one of the project, not after the AI is built.' },
  { title: 'Physician adoption is an implementation problem, not a technology problem', body: 'Healthcare AI built without clinical input into the workflow design fails at adoption regardless of technical quality. If the AI-generated note requires more editing than writing from scratch, physicians stop using it. If the coding suggestion queue interrupts the workflow, coders bypass it. Kovil AI embeds workflow design into the build phase — clinical staff review prototypes and provide feedback before any system goes to production.' },
]

const personas = [
  { title: 'Health systems and large medical groups', body: 'Multi-specialty health systems and large physician groups with high documentation and coding volume. The ROI on clinical documentation AI and coding automation compounds at scale — a 30-physician group saving 90 minutes per day across physicians represents significant reclaimed clinical capacity.' },
  { title: 'Revenue cycle and billing companies', body: 'Medical billing companies and revenue cycle management firms processing high volumes of claims across multiple practices. Coding AI improves throughput per coder and reduces first-pass denial rates — both directly impacting margin on processing-fee-based revenue models.' },
  { title: 'Digital health and health IT companies', body: 'Digital health startups and health IT vendors building AI into their products. Kovil AI builds the AI layer — intake chatbots, documentation generation, clinical data pipelines — so product teams can ship AI features without a dedicated ML team or the compliance overhead of building it from scratch.' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI for Healthcare</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                HIPAA-Compliant Clinical AI for Health Systems and Digital Health Companies
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                Patient intake automation, clinical documentation, medical coding, and EHR integration built for production clinical workflows. Kovil AI eliminated 95% of manual data entry in a production healthcare AI integration — with full HIPAA compliance and physician oversight built in.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">
                  Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies/healthcare-ai-integration" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">
                  See Healthcare AI Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>95% Manual Entry Eliminated</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>HIPAA-Compliant by Design</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Epic, Cerner, FHIR Integration</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>150+ AI Systems Delivered</span>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Healthcare AI use cases Kovil AI builds</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              From patient intake through revenue cycle, each system is designed around your clinical workflows, EHR infrastructure, and HIPAA requirements.
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
              src="/industry-healthcare.svg"
              alt="AI for Healthcare — medical cross with ECG heartbeat line and patient data panel, representing HIPAA-compliant clinical AI built by Kovil AI"
              width={1200}
              height={630}
              className="rounded-2xl w-full"
              unoptimized
            />
            <p className="text-[#6B7280] font-sans text-sm mt-4 text-center">Kovil AI builds healthcare AI with HIPAA compliance and clinical validation as first-class requirements — not afterthoughts.</p>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Where healthcare AI projects fail — and how Kovil AI avoids it</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Healthcare AI failures are almost always compliance, validation, or adoption failures — not model failures. The risks are predictable and preventable.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How Kovil AI builds healthcare AI — four phases</h2>
            <p className="text-[#A09A91] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Every healthcare AI engagement starts with a HIPAA and clinical workflow assessment. Compliance is established before architecture decisions are made — not added at the end.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Who Kovil AI builds healthcare AI for</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Healthcare AI priorities differ by organization type. The compliance requirements are identical — the use cases and ROI drivers are not.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">Healthcare AI delivered by Kovil AI — real results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — Healthcare integration</p>
                <h3 className="font-display text-xl font-bold mb-4">95% of manual data entry eliminated in production</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A healthcare organization was manually re-entering patient data across disconnected clinical systems, consuming significant staff hours per day and creating data integrity risks. Kovil AI built an AI integration layer that automated 95% of that data movement — connecting the systems, validating data quality, and surfacing exceptions for human review. Staff hours spent on data entry dropped from hours to minutes per shift.
                </p>
                <Link href="/case-studies/healthcare-ai-integration" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-8 rounded-2xl bg-[#111111] text-white border border-[#1E1E1E]">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Typical outcomes</p>
                <div className="space-y-5">
                  {[
                    { metric: '30 to 50%', label: 'Reduction in physician documentation time with AI-assisted note generation' },
                    { metric: '40 to 60%', label: 'Reduction in front desk burden with patient intake automation' },
                    { metric: '20 to 35%', label: 'Improvement in prior auth first-pass approval rates' },
                    { metric: '15 to 25%', label: 'Reduction in coding denial rates with AI-assisted code suggestion' },
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
                { label: 'Intelligent Document Processing', sub: 'IDP for clinical documents', href: '/intelligent-document-processing' },
                { label: 'AI for Legal', sub: 'Contract review and legal AI', href: '/ai-for-legal' },
                { label: 'Outcome-Based AI Projects', sub: 'Fixed-price AI delivery', href: '/engage/outcome-based-project' },
                { label: 'Healthcare AI Case Study', sub: '95% manual entry eliminated', href: '/case-studies/healthcare-ai-integration' },
                { label: 'RAG Pipeline Development', sub: 'Retrieval-augmented systems', href: '/rag-pipeline-development' },
                { label: 'AI Agent Development', sub: 'Autonomous AI agents', href: '/ai-agent-development' },
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to build healthcare AI that works?</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Book a 30-minute call. We will assess your clinical workflows and HIPAA environment, identify the highest-ROI AI opportunity, and outline a milestone delivery plan.</p>
            <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
