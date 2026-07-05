import type { Metadata } from 'next'
import InsurancePage from '@/src/pages/idp/InsurancePage'

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Insurance Document Automation & Claims Processing IDP',
  description: 'Insurance document automation built for production — claims processing, FNOL data extraction, medical bill parsing, prior authorisation, and underwriting document processing. HIPAA · SOC 2 · Fixed-price sprints, 2–4 weeks.',
  alternates: { canonical: 'https://kovil.ai/intelligent-document-processing/insurance' },
  keywords: [
    'insurance document automation',
    'document automation for insurance',
    'health insurance document automation',
    'insurance claims processing automation',
    'insurance document processing',
    'FNOL automation',
    'claims document extraction',
    'prior authorization automation',
    'insurance IDP',
    'intelligent document processing insurance',
    'medical bill processing AI',
    'repair estimate parsing',
    'insurance fraud detection AI',
    'straight-through processing insurance',
    'claims automation software',
    'insurance document AI',
    'underwriting document processing',
    'HIPAA compliant claims processing',
    'property claims document automation',
    'auto claims document processing',
    'health insurance document processing',
    'insurance document classification',
    'claims cycle time reduction',
  ],
  openGraph: {
    type: 'website',
    title: 'Insurance Document Automation & Claims Processing IDP | Kovil AI',
    description: 'Insurance document automation in production — claims processing, FNOL extraction, medical bill parsing, prior authorisation, and fraud detection. HIPAA · SOC 2 · Fixed-price sprints.',
    url: 'https://kovil.ai/intelligent-document-processing/insurance',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Insurance Document Automation & Claims Processing IDP — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance Document Automation & Claims Processing IDP | Kovil AI',
    description: 'Insurance document automation — claims processing, FNOL extraction, prior authorisation, and fraud detection. Fixed-price sprints for insurers.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

// ── Service Schema ────────────────────────────────────────────────────────────
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Insurance Document Automation & Claims Processing IDP',
  description: 'Kovil AI designs, builds, and deploys production insurance document automation and Intelligent Document Processing (IDP) pipelines — covering claims processing automation, FNOL data extraction, medical bill parsing, repair estimate processing, prior authorisation automation, underwriting document processing, and insurance fraud detection.',
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    telephone: '+16465359141',
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
    ],
  },
  serviceType: 'Insurance Document Processing',
  category: 'Insurance',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/intelligent-document-processing/insurance',
  isPartOf: {
    '@type': 'Service',
    name: 'Intelligent Document Processing (IDP)',
    url: 'https://kovil.ai/intelligent-document-processing',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Insurance IDP Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Insurance Claims Processing Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FNOL Data Extraction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Bill Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prior Authorization Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Underwriting Document Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Insurance Fraud Detection via Document AI' } },
    ],
  },
}

// ── FAQPage Schema ────────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is insurance claims processing automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Insurance claims processing automation uses AI Document Agents to handle every document that flows through a claim — FNOL forms, medical bills, repair estimates, police reports, and appraisals — without manual review for clean, high-confidence documents. The AI classifies each document, extracts structured claim data with confidence scores, applies fraud signals, and routes the claim to straight-through processing or adjuster review based on complexity and risk. Production claims automation pipelines typically reduce end-to-end claims cycle time by 40–70%.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is straight-through processing (STP) in insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Straight-through processing (STP) in insurance refers to claims that can be validated, approved, and settled without any human intervention. AI-powered insurance IDP enables STP by extracting and validating all claim fields automatically, cross-checking them against policy terms and coverage limits, scoring fraud risk, and triggering payment without an adjuster touching the file. Typical STP rates achievable with modern insurance IDP range from 30–60% of total claim volume for standard personal lines.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI document processing reduce claims cycle time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI document processing reduces claims cycle time by eliminating the manual steps that create the most delay: sorting incoming documents, keying claim data from FNOL forms and medical bills, cross-referencing repair estimates against policy limits, and routing files to the correct adjuster queue. Each step — which takes hours or days manually — is completed in seconds by an AI Document Agent. Production insurance IDP deployments typically cut document-related cycle time by 40–70%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI detect fraudulent insurance claims from documents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. AI document processing can surface fraud signals at classification time — before a human reviewer sees the document. These signals include document editing artifacts, duplicate claim patterns, inflated repair estimates compared to benchmark databases, medical billing anomalies such as unbundling and upcoding, and narrative inconsistencies between FNOL descriptions and police reports. Fraud risk scores are appended to every extracted claim record for SIU review.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is prior authorization automation in health insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prior authorization (PA) automation in health insurance uses AI Document Agents to process incoming PA request packets — physician request forms, clinical documentation, lab results, and prior treatment records — extract diagnosis and procedure codes, match them against formulary and coverage criteria, and automatically approve PA requests that meet criteria without clinical reviewer intervention. PA automation typically reduces prior auth processing time from 2–5 days to under 2 hours for criteria-matched requests.',
      },
    },
    {
      '@type': 'Question',
      name: 'What insurance document types does the AI handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our insurance IDP pipeline handles: FNOL forms, medical bills and Explanations of Benefits, repair estimates and body shop invoices, police and incident reports, property appraisals and inspection reports, contractor estimates, loss run reports, prior authorisation request packets, clinical notes and lab results, motor vehicle records, death certificates, commercial policy documents and endorsements, and reinsurance bordereau files.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does insurance claims document automation take to implement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production insurance claims document automation pipeline targeting a defined document set — for example, FNOL forms, medical bills, and repair estimates for auto claims — typically takes 2–4 weeks from scoping to production. This covers document intake setup, Vision LLM classification and extraction, confidence scoring, fraud signal integration, HITL exception queue, and integration with the claims management system. More complex multi-line workflows typically require 4–8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is insurance IDP HIPAA and SOC 2 compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. For health insurance and any workflow touching PHI, we build HIPAA-compliant pipelines with Business Associate Agreements, PHI handling controls, minimum necessary access policies, and full HIPAA Security Rule audit logging. For SOC 2 compliance, we offer on-premise or private cloud LLM deployment so sensitive claim documents never leave the insurer\'s infrastructure. Every document event is logged to an immutable audit trail for regulatory examination and litigation support.',
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
    { '@type': 'ListItem', position: 3, name: 'Insurance', item: 'https://kovil.ai/intelligent-document-processing/insurance' },
  ],
}

// ── WebPage + Speakable Schema ────────────────────────────────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Insurance Document Automation & Claims Processing IDP | Kovil AI',
  description: 'Insurance document automation and production IDP pipelines — claims processing automation, FNOL data extraction, medical bill parsing, prior authorisation, and underwriting document processing.',
  url: 'https://kovil.ai/intelligent-document-processing/insurance',
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#claims-processing h2', '#extraction-coverage h2', '#use-cases h3', '#faq-grid h3'],
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <InsurancePage />
    </>
  )
}
