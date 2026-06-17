import type { Metadata } from 'next'
import HumanResourcesPage from '@/src/pages/idp/HumanResourcesPage'

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'HR Document Processing & People Operations Automation | Kovil AI',
  description: 'Production IDP pipelines for human resources — resume and CV parsing, I-9 and onboarding document automation, background check processing, benefits enrolment, performance document management, and compliance certification tracking. EEOC · GDPR · SOC 2 · Fixed-price sprints, 2–4 weeks.',
  alternates: { canonical: 'https://kovil.ai/intelligent-document-processing/human-resources' },
  keywords: [
    'HR document processing',
    'resume parsing AI',
    'CV parsing automation',
    'I-9 processing automation',
    'employee onboarding document automation',
    'background check document processing',
    'benefits enrolment automation',
    'HR document AI',
    'intelligent document processing HR',
    'human resources IDP',
    'HRIS document automation',
    'ATS resume parsing',
    'people operations document automation',
    'compliance certification tracking AI',
    'GDPR HR document processing',
    'EEOC compliant resume parsing',
    'Workday document automation',
    'SuccessFactors document AI',
    'employee record management AI',
    'onboarding automation HR',
  ],
  openGraph: {
    type: 'website',
    title: 'HR Document Processing & People Operations Automation | Kovil AI',
    description: 'Production IDP for human resources — resume parsing, I-9 automation, onboarding documents, background check processing, and compliance certification tracking. EEOC · GDPR · SOC 2 compliant.',
    url: 'https://kovil.ai/intelligent-document-processing/human-resources',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'HR Document Processing & People Operations Automation — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HR Document Processing & People Operations Automation | Kovil AI',
    description: 'Resume parsing, I-9 processing, onboarding document automation, and compliance tracking for HR ops and people teams. Fixed-price sprints, 2–4 weeks.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

// ── Service Schema ────────────────────────────────────────────────────────────
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'HR Document Processing & People Operations Automation',
  description: 'Kovil AI designs, builds, and deploys production Intelligent Document Processing (IDP) pipelines for human resources — covering resume and CV parsing, employee onboarding document automation, background check document processing, benefits enrolment form extraction, performance and development document management, and compliance certification tracking.',
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
  serviceType: 'HR Document Processing',
  category: 'Human Resources',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/intelligent-document-processing/human-resources',
  isPartOf: {
    '@type': 'Service',
    name: 'Intelligent Document Processing (IDP)',
    url: 'https://kovil.ai/intelligent-document-processing',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HR & People Operations IDP Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Resume & CV Parsing Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Employee Onboarding Document Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Background Check Document Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Benefits & Payroll Document Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance & Development Document Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance & Certification Tracking Automation' } },
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
      name: 'What is AI resume parsing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI resume parsing uses Vision LLMs and HR-domain NLP models to extract structured candidate data from unstructured resume and CV documents — regardless of format, layout, or country-specific conventions. The AI identifies and extracts work history with dates and titles, skills (normalising synonyms across a skills taxonomy), education with institutions and qualifications, certifications and licences, and contact details. This replaces manual data entry into ATS systems, reducing resume processing from minutes per candidate to seconds, and enabling structured data search and filtering across large candidate pools.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI automate I-9 processing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI I-9 processing uses computer vision to extract all fields from completed Form I-9 documents — employee name, date of birth, SSN (last 4 digits), employment eligibility attestation, and List A or B+C identity and employment authorisation document details. The AI validates eligibility codes against USCIS acceptable document lists, flags incomplete or inconsistent entries, and triggers E-Verify submissions for employers using electronic I-9 workflows. Expiry dates on temporary work authorisation documents are tracked automatically for re-verification scheduling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What HR document types does the AI process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our HR IDP pipeline handles: resumes and CVs (all formats and nationalities), Form I-9 and supporting identity documents, W-4 and state income tax withholding forms, offer letters, employment agreements, onboarding checklists, background check reports (criminal, credit, employment verification, professional licence), benefits election forms, qualifying life event documents, Explanations of Benefits, payroll change forms, performance review forms, PIPs, training completion certificates, professional licence renewals, OSHA training records, and any document type in the HR and people operations workflow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AI resume screening EEOC compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our resume parsing pipeline is designed for EEOC compliance. We do not extract or score protected class attributes — race, gender, age, national origin, religion, or disability status — unless explicitly required for affirmative action reporting under a separate, controlled workflow. Skills and experience extraction is neutral with respect to candidate demographics. For adverse impact monitoring, we provide structured extraction outputs that HR teams can use with their own adverse impact analysis tools, keeping human judgement in the hiring decision loop.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI handle background check document processing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI background check processing classifies incoming reports from background screening vendors — criminal background checks, credit reports, employment verification letters, professional licence checks, and international police clearance certificates — and extracts key structured data including findings by category, adverse items, jurisdictions searched, and report dates. Configurable adverse action thresholds trigger FCRA-compliant escalation routing for reports with adverse items, while standard clear reports are auto-closed without requiring HR review. This eliminates manual reading of thousands of background check reports per year.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does HR document automation take to implement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production HR document automation pipeline targeting a defined document set — for example, resume parsing into an ATS, or I-9 extraction into an HRIS — typically takes 2–4 weeks from scoping to production. This covers document intake setup, Vision LLM classification and extraction, HRIS or ATS integration, PII handling controls, HITL exception queue, and compliance audit logging. Multi-document-type deployments covering the full onboarding document set typically require 4–6 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI extract data from international CVs and non-standard resume formats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our resume parsing pipeline handles international CV formats — European Europass CVs, UK-style two-page CVs, APAC formats with photos and personal details, and academic CVs with publication sections — as well as non-standard creative or infographic resumes. Vision LLMs process the visual layout of the document rather than relying on positional templates, enabling accurate extraction from any resume format. Skills normalisation maps country-specific qualification names (e.g. UK A-levels, German Abitur) to a unified education taxonomy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is HR document processing GDPR compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All HR IDP pipelines are built with GDPR compliance as a first-class design constraint. We offer on-premise and private cloud LLM deployment so candidate and employee PII never leaves your organisation\'s infrastructure. Data minimisation controls ensure only the fields required for the downstream HR workflow are extracted and stored. Right-to-erasure workflows support GDPR Article 17 requests across candidate records. Data residency options are available for organisations processing EU employee documents under cross-border transfer restrictions.',
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
    { '@type': 'ListItem', position: 3, name: 'Human Resources', item: 'https://kovil.ai/intelligent-document-processing/human-resources' },
  ],
}

// ── WebPage + Speakable Schema ────────────────────────────────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'HR Document Processing & People Operations Automation | Kovil AI',
  description: 'Production IDP pipelines for human resources — resume and CV parsing, I-9 and onboarding document automation, background check processing, benefits enrolment, performance document management, and compliance certification tracking.',
  url: 'https://kovil.ai/intelligent-document-processing/human-resources',
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#resume-cv-parsing h2', '#extraction-coverage h2', '#use-cases h3', '#faq-grid h3'],
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
      <HumanResourcesPage />
    </>
  )
}
