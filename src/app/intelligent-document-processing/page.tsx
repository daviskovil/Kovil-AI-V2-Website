import type { Metadata } from 'next'
import IntelligentDocumentProcessingPage from '@/src/pages/IntelligentDocumentProcessingPage'

export const metadata: Metadata = {
  title: 'Intelligent Document Processing (IDP) & AI Document Agents | Kovil AI',
  description: 'Kovil AI builds production Intelligent Document Processing pipelines powered by Vision LLMs and AI Document Agents — document classification, LLM data extraction, HITL validation. BFSI, Insurance, Healthcare, Legal. Fixed-price sprints.',
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
  ],
  openGraph: {
    type: 'website',
    title: 'Intelligent Document Processing (IDP) & AI Document Agents | Kovil AI',
    description: 'Production IDP pipelines powered by Vision LLMs and AI Document Agents. Document classification, LLM data extraction, HITL validation. BFSI, Insurance, Healthcare, Legal.',
    url: 'https://kovil.ai/intelligent-document-processing',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-intelligent-document-processing.png', width: 1200, height: 630, alt: 'Intelligent Document Processing & AI Document Agents — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelligent Document Processing & AI Document Agents | Kovil AI',
    description: 'Production IDP pipelines powered by Vision LLMs. Document classification, data extraction, HITL validation. BFSI, Insurance, Healthcare, Legal.',
    images: ['https://kovil.ai/og-intelligent-document-processing.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Intelligent Document Processing (IDP) & AI Document Agents',
  description: 'Kovil AI designs, builds, and deploys production Intelligent Document Processing pipelines powered by Vision LLMs and AI Document Agents — covering document classification, LLM data extraction, agentic RAG, human-in-the-loop validation, and multi-system integration for BFSI, Insurance, Healthcare, Legal, and Supply Chain.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
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
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
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
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Intelligent Document Processing', item: 'https://kovil.ai/intelligent-document-processing' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IntelligentDocumentProcessingPage />
    </>
  )
}
