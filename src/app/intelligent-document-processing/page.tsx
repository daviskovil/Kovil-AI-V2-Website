import type { Metadata } from 'next'
import IntelligentDocumentProcessingPage from '@/src/pages/IntelligentDocumentProcessingPage'

// ── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Intelligent Document Processing (IDP) & AI Document Agents',
  // P1-A: trimmed from 236 → ~158 chars — within Google display limit
  description: 'Production IDP pipelines powered by Vision LLMs & AI Document Agents. Document classification, LLM extraction, HITL validation. BFSI · Insurance · Healthcare · Legal. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/intelligent-document-processing' },
  keywords: [
    'intelligent document processing',
    'intelligent document processing platform',
    'intelligent document processing solutions',
    'best intelligent document processing software',
    'intelligent document processing use cases',
    'intelligent document processing companies',
    'intelligent document processing for insurance',
    'intelligent document processing claims processing',
    'document classification',
    'document classification AI',
    'ai document agent',
    'document ai',
    'llm data extraction',
    'vision llm document processing',
    'data extraction software',
    'automated document workflow',
    'agentic document processing',
    'human in the loop document validation',
    'HIPAA compliant document processing',
    'SOC 2 document extraction',
    'KYC document classification',
    'mortgage document processing AI',
    'invoice processing automation',
    'OCR AI replacement',
    'multimodal document intelligence',
    'how long does idp implementation take',
    'intelligent document processing cost',
  ],
  openGraph: {
    type: 'website',
    title: 'Intelligent Document Processing (IDP) & AI Document Agents | Kovil AI',
    description: 'Production IDP pipelines powered by Vision LLMs & AI Document Agents. Document classification, LLM data extraction, HITL validation. BFSI, Insurance, Healthcare, Legal.',
    url: 'https://kovil.ai/intelligent-document-processing',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-intelligent-document-processing.png', width: 1200, height: 630, alt: 'Intelligent Document Processing & AI Document Agents — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelligent Document Processing & AI Document Agents | Kovil AI',
    description: 'Production IDP pipelines powered by Vision LLMs. Document classification, extraction, HITL validation. BFSI, Insurance, Healthcare, Legal.',
    images: ['https://kovil.ai/og-intelligent-document-processing.png'],
  },
}

// ── Service Schema (P1-C: sameAs; P1-D: dates) ───────────────────────────────
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Intelligent Document Processing (IDP) & AI Document Agents',
  description: 'Kovil AI designs, builds, and deploys production Intelligent Document Processing pipelines powered by Vision LLMs and AI Document Agents — covering document classification, LLM data extraction, agentic RAG, human-in-the-loop validation, and multi-system integration for BFSI, Insurance, Healthcare, Legal, and Supply Chain.',
  datePublished: '2026-05-20',
  dateModified: '2026-06-03',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    telephone: '+16465359141',
    // P1-C: sameAs for LLM entity disambiguation and E-E-A-T
    sameAs: [
      'https://www.linkedin.com/company/kovil-ai/',
      'https://clutch.co/profile/kovil-ai',
      'https://www.crunchbase.com/organization/kovil-ai',
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '734 Franklin Ave',
        addressLocality: 'Garden City',
        addressRegion: 'NY',
        postalCode: '11530',
        addressCountry: 'US',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '1401 Lavaca Street, Unit #7259',
        addressLocality: 'Austin',
        addressRegion: 'TX',
        postalCode: '78701',
        addressCountry: 'US',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: '+16465359141',
      url: 'https://kovil.ai/contact',
      areaServed: ['US', 'GB', 'AU', 'CA'],
      availableLanguage: 'English',
    },
  },
  serviceType: 'Intelligent Document Processing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/intelligent-document-processing',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IDP & Document AI Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Document Classification Engine' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vision LLM Data Extraction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Agentic RAG for Documents' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Human-in-the-Loop Validation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IDP Rescue & Optimisation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dedicated Document AI Squad' } },
    ],
  },
}

// ── HowTo Schema (P2-A) ───────────────────────────────────────────────────────
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Intelligent Document Processing Works',
  description: 'A 3-step walkthrough of how AI Document Agents automate document workflows — from intake and classification through Vision LLM extraction to downstream system action.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Connect Any Document Source',
      text: 'Connect your document intake — email inboxes, SharePoint, cloud storage, ERP upload portals, or API endpoints — into a unified ingestion pipeline. PDFs, scanned images, smartphone photos, Excel files, and XML are all supported with pre-processing and quality normalisation applied automatically.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'AI Agent Classifies and Extracts',
      text: 'The AI Document Agent uses Vision LLMs and layout-aware models to classify each document type, write its own extraction prompt based on the detected layout, extract structured data fields with confidence scores, and escalate low-confidence outputs to human reviewers via a HITL validation interface.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Push to Downstream Systems',
      text: 'Extracted and validated data flows automatically into CRM, ERP, core banking, or data warehouse systems. The agent triggers downstream actions — SAP line-item matching, payment scheduling, approval email drafting, or anomaly alerts — without manual intervention for clean documents.',
    },
  ],
}

// ── FAQPage Schema (updated with 2 new questions) ────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is intelligent document processing (IDP)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intelligent document processing (IDP) is the use of AI, machine learning, and large language models to automatically classify, extract, validate, and route data from unstructured documents — PDFs, scanned images, forms, and emails — at scale. Unlike traditional OCR, which relies on fixed templates and position-based rules, IDP uses layout-aware models and Vision LLMs to handle variability in document formats, handwriting, and image quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the main intelligent document processing use cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The highest-volume IDP use cases are: KYC and identity verification in banking; mortgage and loan document processing; insurance claims processing; accounts payable automation with 3-way matching; medical records indexing; and contract lifecycle management. Banking, financial services, and insurance (BFSI) is the single largest vertical by document volume.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between OCR and intelligent document processing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional OCR converts document images into text using positional rules and fixed templates — it breaks when layouts change or image quality is poor. Intelligent document processing uses Vision LLMs to understand document semantics, classifies document types dynamically, writes context-aware extraction prompts, validates fields against business rules, and routes exceptions to human reviewers. IDP handles variability; OCR requires uniformity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is document classification and how does AI improve it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Document classification is the automatic identification of what type of document has arrived — invoice, ID, contract, medical record, customs form — so it can be routed to the correct extraction pipeline. AI document classification uses layout-aware models and Vision LLMs to classify incoming documents even when templates vary across vendors, geographies, or time periods, without requiring rigid rules or manual template maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an AI document agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI document agent is an autonomous AI system that does more than extract data — it reasons over documents, takes actions, and orchestrates multi-step workflows. For example, an AI document agent processing an insurance claim will extract data from the medical bill, retrieve the patient\'s policy via RAG, determine coverage, calculate the payable amount, and draft an approval email — all without human intervention for standard cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is intelligent document processing HIPAA and SOC 2 compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build IDP pipelines with compliance as a first-class constraint — HIPAA-compliant architectures with PII redaction, data residency controls, encrypted storage, and full audit logging. For SOC 2 compliance we support on-premise or private cloud LLM deployment options, role-based access controls, and complete audit trails. We also support GDPR-compliant architectures for European document workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does intelligent document processing help with insurance claims processing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In insurance claims processing, IDP eliminates manual classification and data entry from submitted documents — medical bills, police reports, repair estimates. An AI document agent classifies each document, extracts relevant fields, cross-references them against the policy via RAG, checks coverage rules, and either auto-approves straightforward claims or escalates complex cases with all data pre-populated. Insurers typically see 60–80% reduction in manual processing time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which industries benefit most from intelligent document processing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The BFSI sector (banking, financial services, insurance) processes the highest document volume and delivers the strongest IDP ROI. Healthcare follows with EHR indexing, medical billing, and prior authorisation. Legal and compliance teams benefit from contract classification and eDiscovery. Supply chain operations use IDP for accounts payable automation and customs compliance. HR rounds out the top verticals with resume parsing and employee records management.',
      },
    },
    // P2-D: new commercial-intent FAQ
    {
      '@type': 'Question',
      name: 'How long does it take to implement an intelligent document processing solution?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused IDP sprint targeting a single document workflow — invoice processing, KYC classification, or insurance claims extraction — typically takes 2–4 weeks from scoping to production. More complex multi-document-type pipelines with extensive ERP integrations typically require 6–12 weeks. Starting with one high-volume, high-value document type and expanding iteratively is consistently faster than attempting a full enterprise IDP platform in a single build.',
      },
    },
    // P2-D: new commercial-intent FAQ
    {
      '@type': 'Question',
      name: 'What does intelligent document processing cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fixed-price IDP sprint targeting one document workflow typically costs $25,000–$60,000, covering pipeline design, Vision LLM extraction, HITL validation, and downstream integration. Larger multi-workflow enterprise implementations run $75,000–$200,000+. Dedicated Document AI Squad engagements are priced as monthly retainers. ROI is typically strong: manual document processing costs $2–$15 per document; automated IDP at scale reduces this to fractions of a cent.',
      },
    },
  ],
}

// ── BreadcrumbList Schema ─────────────────────────────────────────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Intelligent Document Processing', item: 'https://kovil.ai/intelligent-document-processing' },
  ],
}

// ── WebPage + Speakable Schema (P3-C) ─────────────────────────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Intelligent Document Processing (IDP) & AI Document Agents | Kovil AI',
  description: 'Kovil AI builds production IDP pipelines powered by Vision LLMs and AI Document Agents — document classification, LLM data extraction, HITL validation. BFSI, Insurance, Healthcare, Legal.',
  url: 'https://kovil.ai/intelligent-document-processing',
  datePublished: '2026-05-20',
  dateModified: '2026-06-03',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#what-is-idp h3', '#faq h3'],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <IntelligentDocumentProcessingPage />
    </>
  )
}
