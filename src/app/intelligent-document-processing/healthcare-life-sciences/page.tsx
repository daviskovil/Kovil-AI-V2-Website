import type { Metadata } from 'next'
import HealthcarePage from '@/src/pages/idp/HealthcarePage'

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Healthcare Document Processing & Clinical Data Extraction',
  description: 'Production IDP pipelines for healthcare and life sciences — medical records indexing, ICD-10/CPT coding automation, prior authorization prep, lab report extraction, and clinical trial document processing. HIPAA · SOC 2 · Fixed-price sprints, 2–4 weeks.',
  alternates: { canonical: 'https://kovil.ai/intelligent-document-processing/healthcare-life-sciences' },
  keywords: [
    'healthcare document processing',
    'medical records indexing automation',
    'clinical data extraction',
    'medical billing coding automation',
    'ICD-10 extraction AI',
    'CPT code extraction',
    'prior authorization automation healthcare',
    'healthcare IDP',
    'intelligent document processing healthcare',
    'HIPAA compliant document processing',
    'lab report extraction',
    'pathology report AI',
    'clinical trial document processing',
    'EHR document automation',
    'Epic Cerner document AI',
    'HL7 FHIR document extraction',
    'revenue cycle document automation',
    'medical records HIM automation',
    'healthcare document classification',
    '21 CFR Part 11 document processing',
  ],
  openGraph: {
    type: 'website',
    title: 'Healthcare Document Processing & Clinical Data Extraction | Kovil AI',
    description: 'Production IDP for healthcare — medical records indexing, ICD-10/CPT coding, prior auth prep, lab report extraction, and clinical trial document processing. HIPAA · SOC 2 compliant.',
    url: 'https://kovil.ai/intelligent-document-processing/healthcare-life-sciences',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Healthcare Document Processing & Clinical Data Extraction — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Document Processing & Clinical Data Extraction | Kovil AI',
    description: 'Medical records indexing, coding automation, prior auth prep, and clinical trial document processing. HIPAA-compliant, fixed-price sprints.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

// ── Service Schema ────────────────────────────────────────────────────────────
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Healthcare Document Processing & Clinical Data Extraction',
  description: 'Kovil AI designs, builds, and deploys production Intelligent Document Processing (IDP) pipelines for healthcare and life sciences — covering medical records indexing, ICD-10/CPT extraction, prior authorization preparation, lab and pathology report processing, clinical trial document management, and revenue cycle document automation.',
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
  serviceType: 'Healthcare Document Processing',
  category: 'Healthcare & Life Sciences',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/intelligent-document-processing/healthcare-life-sciences',
  isPartOf: {
    '@type': 'Service',
    name: 'Intelligent Document Processing (IDP)',
    url: 'https://kovil.ai/intelligent-document-processing',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Healthcare IDP Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Records Indexing Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Billing & Coding Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Prior Authorization Document Preparation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lab & Pathology Report Extraction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clinical Trial Document Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revenue Cycle Document Processing' } },
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
      name: 'What is medical records indexing automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medical records indexing automation uses AI Document Agents to classify, extract, and route incoming health records — discharge summaries, physician notes, operative reports, lab results, and referral letters — without manual HIM staff intervention for standard document types. The AI assigns document categories, extracts structured clinical data fields, and routes records to the correct EHR location. This eliminates the manual sorting and keying that typically consumes the majority of HIM department time, reducing release-of-information turnaround from days to hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI improve medical billing and coding accuracy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI improves medical billing and coding accuracy by extracting ICD-10 diagnosis codes and CPT procedure codes directly from clinical documentation — physician notes, operative reports, and discharge summaries — rather than relying on coders to read and interpret unstructured text. The AI maps clinical language to standardised terminology, flags documentation gaps that would cause denials, and validates code combinations against payer rules before submission. Production healthcare coding AI deployments typically achieve 90–96% coding accuracy on standard encounter types, with complex cases escalated to certified coders.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is prior authorization from the provider perspective?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From the provider perspective, prior authorization is a documentation workflow — clinical staff must gather patient records, complete payer-specific PA request forms, attach supporting clinical documentation, and submit structured requests. AI automates this by pulling clinical data from the patient chart, auto-populating PA request forms, identifying and attaching supporting documentation, and submitting to payer systems. Provider-side PA automation typically reduces staff time per PA request from 20–40 minutes to under 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What healthcare document types does the AI handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our healthcare IDP pipeline handles: discharge summaries, physician progress notes, operative reports, pathology reports, radiology and imaging reports, lab results, referral letters, consent forms, Explanations of Benefits, electronic remittance advices, prior authorisation request packets, clinical trial case report forms, adverse event reports, problem lists, medication reconciliation documents, care transition documents, and insurance eligibility responses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does clinical data extraction differ from standard OCR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard OCR extracts text using positional rules and has no understanding of clinical meaning. Clinical data extraction uses Vision LLMs and clinical NLP models to understand the semantic content of healthcare documents — recognising that "Dx: T2DM" and "Type 2 Diabetes Mellitus" map to ICD-10 code E11.9, identifying medication dosing instructions in free-text notes, and extracting lab values with their units and reference ranges from non-standard formats. Clinical data extraction handles the variability and domain specificity that breaks template-based OCR.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does healthcare document automation take to implement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production healthcare document automation pipeline targeting a defined document set — for example, discharge summaries and lab reports for a specific facility — typically takes 2–4 weeks from scoping to production. This covers document intake setup, Vision LLM classification and extraction, ICD-10/CPT mapping, HIPAA audit trail logging, HITL exception queue, and EHR integration via HL7 FHIR or native API. Multi-facility or multi-document-type deployments typically require 4–8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What clinical trial document processing capabilities does AI provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI clinical trial document processing covers: informed consent form version tracking and patient signature validation, case report form (CRF) data extraction and cross-validation against protocol definitions, adverse event report classification by seriousness and causality, site monitoring report summarisation, regulatory submission document indexing, and audit trail generation meeting 21 CFR Part 11 requirements. This eliminates the manual data entry that creates the most errors and delays in clinical trial data management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is healthcare IDP HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All healthcare IDP pipelines are built with HIPAA compliance as a first-class design constraint. We offer Business Associate Agreements, PHI handling controls with minimum necessary access policies, encryption at rest and in transit, on-premise or private cloud LLM deployment so patient records never leave the organisation\'s infrastructure, and full HIPAA Security Rule audit logging for every document event. For clinical research, we also support 21 CFR Part 11 audit trail requirements.',
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
    { '@type': 'ListItem', position: 3, name: 'Healthcare & Life Sciences', item: 'https://kovil.ai/intelligent-document-processing/healthcare-life-sciences' },
  ],
}

// ── WebPage + Speakable Schema ────────────────────────────────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Healthcare Document Processing & Clinical Data Extraction | Kovil AI',
  description: 'Production IDP pipelines for healthcare and life sciences — medical records indexing, ICD-10/CPT coding automation, prior authorization prep, lab report extraction, and clinical trial document processing.',
  url: 'https://kovil.ai/intelligent-document-processing/healthcare-life-sciences',
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#medical-records-indexing h2', '#extraction-coverage h2', '#use-cases h3', '#faq-grid h3'],
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
      <HealthcarePage />
    </>
  )
}
