import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for Healthcare | Healthcare AI Development | Kovil AI',
  description: 'HIPAA-compliant AI for healthcare from Kovil AI. Clinical document processing, EHR integration, prior auth automation, and patient-facing AI. Production-grade.',
  keywords: ['AI for healthcare', 'healthcare AI development', 'HIPAA compliant AI', 'clinical AI', 'EHR AI integration'],
  openGraph: { title: 'AI for Healthcare | Kovil AI', description: 'HIPAA-compliant AI for clinical workflows.', url: 'https://kovil.ai/ai-for-healthcare', siteName: 'Kovil AI', type: 'website', images: [{ url: 'https://kovil.ai/og-default.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: 'AI for Healthcare | Kovil AI', description: 'HIPAA-compliant healthcare AI.' },
  alternates: { canonical: 'https://kovil.ai/ai-for-healthcare' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }
const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI for Healthcare', item: 'https://kovil.ai/ai-for-healthcare' }] }
const serviceSchema = { '@context': 'https://schema.org', '@type': 'Service', name: 'AI for Healthcare', provider: { '@type': 'Organization', name: 'Kovil AI' }, description: 'HIPAA-compliant AI for healthcare — clinical document processing, EHR integration, and workflow automation.', serviceType: 'Healthcare AI Development', areaServed: 'Worldwide' }
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Kovil AI HIPAA compliant?', acceptedAnswer: { '@type': 'Answer', text: 'We build healthcare AI systems with HIPAA compliance built in — BAA-signed cloud infrastructure, PHI data isolation, zero-retention policies with LLM providers, role-based access, and audit logging. We can also deploy entirely on-premise for maximum PHI control.' } },
    { '@type': 'Question', name: 'What healthcare workflows can AI automate?', acceptedAnswer: { '@type': 'Answer', text: 'Prior authorization document processing, clinical note summarization and structuring, EHR data extraction and normalization, patient intake processing, medical coding assistance, referral document review, and clinical decision support tools.' } },
    { '@type': 'Question', name: 'Can AI integrate with our EHR system?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We have built integrations with Epic, Cerner, Athena, and HL7 FHIR APIs. AI pipelines can ingest structured and unstructured EHR data, extract clinical entities, and write structured results back to the EHR.' } },
    { '@type': 'Question', name: 'How do you handle clinical accuracy requirements?', acceptedAnswer: { '@type': 'Answer', text: 'Healthcare AI requires a higher bar than most domains. We build evaluation frameworks with clinical subject matter experts, require human-in-the-loop review for clinical outputs, and benchmark accuracy against ground truth before production. We don\'t ship clinical AI without validated accuracy metrics.' } },
    { '@type': 'Question', name: 'Can AI help with prior authorization?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. AI can extract clinical criteria from prior auth requests, match against payer guidelines, identify supporting documentation, and draft the clinical justification letter — reducing prior auth processing time significantly while keeping clinicians in the decision loop.' } },
    { '@type': 'Question', name: 'What is the typical timeline for a healthcare AI project?', acceptedAnswer: { '@type': 'Answer', text: 'Healthcare AI projects take longer than standard AI projects due to compliance requirements and clinical validation. A focused document processing or workflow automation system typically takes 8–14 weeks. We scope in detail and include compliance review time in every estimate.' } },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI for Healthcare</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">HIPAA-Compliant AI for Healthcare — Clinical Documents, EHR Workflows, and Patient-Facing AI</h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">Healthcare AI demands a higher standard. Kovil AI builds HIPAA-compliant systems with clinical validation, PHI-safe architecture, and human-in-the-loop review for high-stakes decisions — not just rapid AI demos.</p>
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
              <span>HIPAA-Compliant Architecture</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>EHR Integration Specialists</span><span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>Clinical Validation at Every Phase</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">Healthcare AI Use Cases We Build</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Prior authorization processing — extract criteria, match guidelines, draft justification',
                'Clinical note summarization, structuring, and coding assistance',
                'EHR data extraction and normalization via HL7 FHIR',
                'Patient intake document processing and form population',
                'Referral and discharge summary document review',
                'Patient-facing AI for symptom triage, scheduling, and FAQ',
              ].map((p, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl border border-[#E5E2D9] bg-white">
                  <CheckCircle2 className="w-5 h-5 text-[#FF4F00] flex-shrink-0 mt-0.5" />
                  <p className="text-[#0A0A0A] font-sans leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8">Our HIPAA-Compliant Approach</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'BAA-signed infrastructure on AWS, Azure, or GCP',
                'Zero PHI data retention with LLM providers',
                'On-premise deployment available for maximum PHI control',
                'Role-based access control and comprehensive audit logging',
                'Human-in-the-loop checkpoints for all clinical outputs',
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
                { step: '01', title: 'Compliance & Use Case Scoping', desc: 'We assess your HIPAA requirements, PHI data flows, and clinical workflow to design a compliant architecture.' },
                { step: '02', title: 'Build with Clinical Validation', desc: 'Milestone-gated build with clinical SME validation at each phase. Accuracy benchmarked on your real data.' },
                { step: '03', title: 'Deploy with Audit Trail', desc: 'Production deployment with full audit logging, human-in-the-loop review, and compliance monitoring.' },
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Build HIPAA-Compliant AI?</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Fixed price. Milestone-gated. Clinical validation at every phase.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">Book a Call <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </section>

      </main>
    </>
  )
}
