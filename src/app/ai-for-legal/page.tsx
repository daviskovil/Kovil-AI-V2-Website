import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ArrowRight, FileText, Search, Shield, MessageSquare, BarChart2, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for Legal | Contract Review Automation & Legal AI Development',
  description: 'Legal AI development for law firms and in-house teams. Contract review automation, case law RAG, e-discovery, compliance monitoring, and legal intake chatbots. 78% faster contract review delivered in production.',
  keywords: ['AI for legal', 'legal AI development', 'contract review AI', 'law firm AI', 'e-discovery AI', 'legal document automation', 'LLM for legal'],
  openGraph: {
    title: 'AI for Legal | Kovil AI',
    description: '78% Faster Contract Review. Zero Downtime. $380K Partner Hours Reclaimed.',
    url: 'https://kovil.ai/ai-for-legal',
    siteName: 'Kovil AI',
    type: 'website',
    images: [{ url: 'https://kovil.ai/industry-legal.svg', width: 1200, height: 630, alt: 'AI for Legal — Contract Review, E-Discovery, Compliance | Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'AI for Legal | Kovil AI', description: 'Legal AI that works in production — contract review, e-discovery, compliance monitoring.' },
  alternates: { canonical: 'https://kovil.ai/ai-for-legal' },
  robots: { index: true, follow: true },
}

const orgSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol.webp', description: 'Managed AI engineering firm specializing in legal, fintech, and enterprise AI systems.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-646-535-9141', contactType: 'sales' }, sameAs: ['https://www.linkedin.com/company/kovil-ai/'] }

const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' }, { '@type': 'ListItem', position: 2, name: 'AI for Legal', item: 'https://kovil.ai/ai-for-legal' }] }

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI for Legal',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  description: 'Legal AI development — contract review automation, document intelligence, case law RAG, e-discovery, compliance monitoring, and legal intake chatbots for law firms and in-house legal teams.',
  serviceType: 'Legal AI Development',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal AI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contract Review Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Legal Document Intelligence' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Case Law RAG Pipeline' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Discovery AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Monitoring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Legal Intake Chatbot' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Kovil AI builds AI systems for legal teams',
  description: 'From workflow audit to production deployment — Kovil AI builds legal AI in four structured phases with milestone-gated delivery.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Legal workflow assessment', text: 'We map your existing contract review, document processing, and research workflows. We identify where AI provides the highest ROI — typically contract review, document extraction, and compliance checks — and define accuracy thresholds and integration requirements with your existing DMS or practice management system.' },
    { '@type': 'HowToStep', position: 2, name: 'AI architecture and data design', text: 'We design the AI architecture: LLM selection, retrieval strategy (RAG vs fine-tuning), document ingestion pipeline, and integration points. For legal data, we establish privilege protection protocols and data handling standards before any model training begins.' },
    { '@type': 'HowToStep', position: 3, name: 'Build, test, and validate against real documents', text: 'We build and test against a representative sample of your actual documents — not synthetic data. Legal AI requires high precision on clause identification, obligation extraction, and risk flagging. We run human-in-the-loop validation with your attorneys before any production deployment.' },
    { '@type': 'HowToStep', position: 4, name: 'Deploy, integrate, and monitor', text: 'We deploy to your infrastructure with full DMS integration, audit logging, and an attorney-facing review interface. Post-launch monitoring tracks extraction accuracy, model drift, and attorney override rates — giving you a continuous feedback loop for ongoing improvement.' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What types of legal AI systems does Kovil AI build?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI builds contract review and clause extraction systems, legal document intelligence pipelines (NDA, MSA, SLA, employment agreements), case law RAG tools for legal research, e-discovery automation for document review and privilege logging, compliance monitoring dashboards, and legal intake chatbots that triage matters and collect client information. All systems are built to integrate with existing DMS platforms like iManage, NetDocuments, or SharePoint.' } },
    { '@type': 'Question', name: 'How accurate is AI contract review?', acceptedAnswer: { '@type': 'Answer', text: 'Accuracy depends on the contract type and training data. In production systems built by Kovil AI, clause identification accuracy ranges from 91% to 97% for standard commercial agreements. Oblgation and deadline extraction runs slightly lower — 88% to 94% — because contextual language varies widely. All systems are designed with attorney review as a required step: AI surfaces risk flags and extracted data, attorneys confirm or override. Kovil AI measures attorney override rates post-launch and iterates the model accordingly.' } },
    { '@type': 'Question', name: 'How does Kovil AI handle privilege and confidentiality in legal AI projects?', acceptedAnswer: { '@type': 'Answer', text: 'Legal document confidentiality is treated as a first-class constraint from the architecture design phase. Kovil AI implements data isolation by client or matter, no training on client documents without explicit written consent, audit logging of all document access and model queries, role-based access controls, and deployment options that keep data entirely within your infrastructure or a private cloud environment. No client document data is used to improve third-party models.' } },
    { '@type': 'Question', name: 'What is a legal RAG pipeline and when is it useful?', acceptedAnswer: { '@type': 'Answer', text: 'A RAG (Retrieval-Augmented Generation) pipeline for legal work connects a language model to a searchable corpus of your documents — case law, internal precedents, client agreements, regulatory texts. When an attorney asks a question, the system retrieves the most relevant source documents and generates a grounded answer with citations. This is most useful for legal research (finding relevant case law or precedents), due diligence (answering questions across large document sets), and contract analysis (comparing a new agreement against your standard positions). RAG is preferred over fine-tuning for legal work because it keeps the source documents visible and auditable.' } },
    { '@type': 'Question', name: 'Can AI replace attorney review?', acceptedAnswer: { '@type': 'Answer', text: 'No, and Kovil AI does not design systems with that goal. Legal AI is most valuable as a force multiplier: it handles the high-volume, repetitive extraction work so attorneys can focus judgment on complex issues, negotiation, and client counsel. Systems built by Kovil AI are designed with mandatory attorney review checkpoints — AI surfaces findings, attorneys decide. This keeps the attorney in the loop for liability purposes and builds the human override data that improves the model over time.' } },
    { '@type': 'Question', name: 'How long does a legal AI project take to build?', acceptedAnswer: { '@type': 'Answer', text: 'A focused contract review system for a single agreement type (e.g., NDAs) can be built and validated in 6 to 8 weeks. A broader document intelligence platform covering multiple agreement types, with DMS integration and an attorney review interface, typically takes 12 to 16 weeks. E-discovery systems with full privilege detection and production log generation run 14 to 20 weeks depending on the volume and variety of document formats involved. Timelines are determined at the scope call and locked into the milestone delivery plan before work begins.' } },
    { '@type': 'Question', name: 'What DMS and practice management systems can Kovil AI integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI has built integrations with iManage, NetDocuments, SharePoint (used as a DMS), Clio, MyCase, and custom matter management systems. For e-discovery, integrations with Relativity and Everlaw are available. If your firm uses a system not on this list, we assess the available APIs and export formats in the workflow assessment phase and design the integration accordingly.' } },
    { '@type': 'Question', name: 'Does Kovil AI work with in-house legal teams or just law firms?', acceptedAnswer: { '@type': 'Answer', text: 'Both. Law firms typically engage Kovil AI for contract review automation, legal research tools, and client-facing intake chatbots. In-house legal teams engage us for contract lifecycle management AI, compliance monitoring, vendor agreement extraction, and NDA workflows. The use cases differ slightly — in-house teams often prioritize speed and volume, while law firms prioritize accuracy and defensibility — but the underlying AI architecture is similar.' } },
    { '@type': 'Question', name: 'Who owns the AI models and code built by Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'The client owns 100% of all code, models, pipelines, and IP produced during the engagement. Kovil AI retains no rights to any system built for you. This is true for both staff augmentation engagements and fixed-price project deliveries. You receive full source code, model weights (for any fine-tuned models), and deployment infrastructure as a deliverable.' } },
  ],
}

const useCases = [
  { icon: FileText, title: 'Contract Review Automation', body: 'Extract obligations, deadlines, termination clauses, and risk flags from commercial agreements at scale. Kovil AI built a system that cut attorney review time by 78% for a 200+ firm legal team.' },
  { icon: Search, title: 'Legal Document Intelligence', body: 'Parse and extract structured data from NDAs, MSAs, employment agreements, and SLAs. Build a searchable repository of clause language across your entire contract library.' },
  { icon: Scale, title: 'Case Law RAG Pipeline', body: 'Connect attorneys to a searchable corpus of case law, internal precedents, and regulatory texts. Ask questions in plain language and receive grounded answers with source citations.' },
  { icon: BarChart2, title: 'E-Discovery AI', body: 'Automate document review, privilege detection, and production log generation. Reduce document review hours by 60 to 80% on large matters while maintaining defensible privilege logs.' },
  { icon: Shield, title: 'Compliance Monitoring', body: 'Build automated monitors that flag regulatory changes, contract deviations, and SLA breaches in real time. Keep in-house legal and compliance teams ahead of obligations across large contract portfolios.' },
  { icon: MessageSquare, title: 'Legal Intake Chatbots', body: 'Deploy conversational AI that triages incoming matters, collects client information, qualifies cases, and routes to the right practice group. Reduce intake staff hours and improve response times.' },
]

const painPoints = [
  { title: 'Document volume outpaces attorney capacity', body: 'Contract review, due diligence, and e-discovery generate document loads that grow faster than headcount. Associates spend 30 to 50% of billable time on high-volume, low-judgment review tasks. AI can handle the extraction layer — reading, classifying, and flagging — so attorneys spend their time on complex judgment, not document throughput.' },
  { title: 'Generic AI tools are not built for legal precision', body: 'Off-the-shelf AI products trained on general text perform poorly on legal language. Clause interpretation requires understanding of jurisdiction, governing law, and contract context. A model that confidently misidentifies a "termination for convenience" clause creates liability, not efficiency. Legal AI must be validated against your document types with attorney input before deployment.' },
  { title: 'Privilege and confidentiality are non-negotiable', body: 'Any AI system touching client documents must be designed with privilege and confidentiality as first-class constraints — not afterthoughts. Data isolation, audit trails, and clear terms on whether documents are used for model training must be resolved before a single document is processed. Most commercial AI tools were not designed with this in mind.' },
  { title: 'Integration with existing workflows is underestimated', body: 'AI that sits outside your DMS, email, and billing systems creates a parallel workflow attorneys will not adopt. Successful legal AI integrates with how attorneys already work — surfacing findings in iManage, populating matter fields in Clio, or flagging issues inside Microsoft 365. Integration is where most legal AI projects stall or fail.' },
]

const personas = [
  { title: 'BigLaw and mid-market firms with high contract volume', body: 'Corporate, M&A, and real estate practices with 50+ attorneys processing hundreds of agreements monthly. The ROI on contract review AI is measured in associate hours reclaimed and partner leverage improved.' },
  { title: 'In-house legal teams managing large contract portfolios', body: 'GCs and CLOs at companies with 500+ active vendor, customer, and employment agreements. AI enables the in-house team to operate like a team twice its size — monitoring obligations, flagging renewals, and surfacing risk without adding headcount.' },
  { title: 'LegalTech companies building AI into their products', body: 'Practice management, CLM, and e-discovery software vendors who need AI capabilities built into their platform. Kovil AI builds the AI layer — extraction models, RAG pipelines, review interfaces — so product teams can ship AI features without hiring a dedicated ML team.' },
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
              <p className="text-[#FF4F00] text-sm font-semibold uppercase tracking-widest mb-4 font-sans">AI for Legal</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Legal AI Development for Law Firms and In-House Teams
              </h1>
              <p className="text-[#A09A91] text-lg md:text-xl leading-relaxed mb-10 font-sans">
                Contract review automation, case law RAG, e-discovery, and compliance monitoring built for production. Kovil AI has delivered legal AI systems that cut contract review time by 78% and maintained 100% SLA through a full engineering team transition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-[#FF4F00] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e64600] transition-colors font-sans">
                  Book a Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/case-studies/law-firm-contract-review-ai" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors font-sans">
                  See Contract Review Case Study
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-[#E5E2D9] bg-[#FAF8F4] py-6">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#6B7280] font-sans">
              <span>78% Faster Contract Review</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>$380K Partner Hours Reclaimed</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>100% SLA During Team Transition</span>
              <span className="hidden sm:inline text-[#E5E2D9]">|</span>
              <span>150+ AI Systems Delivered</span>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Legal AI use cases Kovil AI builds</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              From contract extraction to e-discovery automation, each system is designed around the specific accuracy, privilege, and integration requirements of legal work.
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
              src="/industry-legal.svg"
              alt="AI for Legal — balance scales with contract documents, representing contract review automation, e-discovery, and compliance AI built by Kovil AI"
              width={1200}
              height={630}
              className="rounded-2xl w-full"
              unoptimized
            />
            <p className="text-[#6B7280] font-sans text-sm mt-4 text-center">Kovil AI manages the full AI delivery lifecycle — from legal workflow audit through production deployment and post-launch monitoring.</p>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Where legal AI projects fail — and how Kovil AI avoids it</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Most legal AI failures are not model failures — they are design, validation, or integration failures. The problems are predictable and preventable.
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

        {/* How Kovil AI builds legal AI */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How Kovil AI builds legal AI — four phases</h2>
            <p className="text-[#A09A91] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Every legal AI engagement follows a structured delivery process. Milestone gates mean you approve each phase before work proceeds — no runaway scope, no surprise deliverables.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">Who Kovil AI builds legal AI for</h2>
            <p className="text-[#6B7280] font-sans text-lg leading-relaxed mb-12 max-w-3xl">
              Legal AI looks different for a law firm, an in-house team, and a LegalTech product company. The use cases overlap but the priorities differ.
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-10">Legal AI delivered by Kovil AI — real results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — Law Firm</p>
                <h3 className="font-display text-xl font-bold mb-4">78% faster contract review. $380K in partner hours reclaimed.</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A 200+ attorney firm was spending 12 to 15 attorney hours per NDA review. Kovil AI built a contract review system that cut that to under 3 hours per agreement by automating clause extraction, risk flagging, and deviation identification. The system reviewed 1,800 agreements in its first quarter.
                </p>
                <Link href="/case-studies/law-firm-contract-review-ai" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white">
                <p className="text-[#FF4F00] text-xs font-semibold uppercase tracking-widest mb-3 font-sans">Case study — LegalTech</p>
                <h3 className="font-display text-xl font-bold mb-4">Zero downtime through a full engineering team transition</h3>
                <p className="text-[#A09A91] font-sans leading-relaxed text-sm mb-6">
                  A legal tech firm lost their entire engineering team over two weeks. Kovil AI matched a senior AI engineer in 48 hours, stabilized three production applications in five days, and maintained 100% SLA for 200+ law firm users throughout the transition. No missed deployments, no data incidents.
                </p>
                <Link href="/case-studies/legal-tech-maintenance" className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#FF4F00] transition-colors font-sans text-sm">
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
                { label: 'AI for FinTech', sub: 'Finance and banking AI', href: '/ai-for-fintech' },
                { label: 'Outcome-Based AI Projects', sub: 'Fixed-price AI delivery', href: '/engage/outcome-based-project' },
                { label: 'Contract Review Case Study', sub: '78% faster, $380K saved', href: '/case-studies/law-firm-contract-review-ai' },
                { label: 'LegalTech Maintenance Case Study', sub: 'Zero downtime delivery', href: '/case-studies/legal-tech-maintenance' },
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
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Ready to build legal AI that works?</h2>
            <p className="text-white/80 text-lg font-sans mb-10 max-w-xl mx-auto">Book a 30-minute call. We will assess your legal workflow, identify the highest-ROI AI opportunity, and outline a delivery plan with milestones.</p>
            <Link href="/book-a-call" className="inline-flex items-center justify-center gap-2 bg-white text-[#FF4F00] font-bold px-8 py-4 rounded-full hover:bg-[#FAF8F4] transition-colors font-sans">
              Book a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
