import type { Metadata } from 'next'
import LegalCompliancePage from '@/src/pages/idp/LegalCompliancePage'

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Legal Document Processing & Contract AI Automation | Kovil AI',
  description: 'Production IDP pipelines for legal and compliance — contract lifecycle management automation, eDiscovery document review, regulatory filing extraction, due diligence processing, and IP document management. Attorney-Client Privilege safe · SOC 2 · Fixed-price sprints, 2–4 weeks.',
  alternates: { canonical: 'https://kovil.ai/intelligent-document-processing/legal-compliance' },
  keywords: [
    'legal document processing',
    'contract lifecycle management automation',
    'contract AI automation',
    'CLM automation',
    'eDiscovery document review AI',
    'contract abstraction AI',
    'regulatory filing extraction',
    'due diligence document processing',
    'IP document management AI',
    'intelligent document processing legal',
    'legal IDP',
    'attorney client privilege AI',
    'legal NLP',
    'contract clause extraction',
    'legal document classification',
    'SEC filing extraction',
    'court document AI',
    'legal ops automation',
    'GRC document automation',
    'SOC 2 legal document processing',
  ],
  openGraph: {
    type: 'website',
    title: 'Legal Document Processing & Contract AI Automation | Kovil AI',
    description: 'Production IDP for legal and compliance — contract lifecycle management, eDiscovery review, regulatory filing extraction, and due diligence document processing. Privilege-safe · SOC 2 compliant.',
    url: 'https://kovil.ai/intelligent-document-processing/legal-compliance',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Legal Document Processing & Contract AI Automation — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Document Processing & Contract AI Automation | Kovil AI',
    description: 'Contract lifecycle management automation, eDiscovery review, regulatory filing extraction, and due diligence processing. Privilege-safe, fixed-price sprints.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

// ── Service Schema ────────────────────────────────────────────────────────────
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Legal Document Processing & Contract AI Automation',
  description: 'Kovil AI designs, builds, and deploys production Intelligent Document Processing (IDP) pipelines for legal and compliance — covering contract lifecycle management automation, eDiscovery document review, regulatory filing extraction, due diligence document processing, IP document management, and litigation document handling.',
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
  serviceType: 'Legal Document Processing',
  category: 'Legal & Compliance',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/intelligent-document-processing/legal-compliance',
  isPartOf: {
    '@type': 'Service',
    name: 'Intelligent Document Processing (IDP)',
    url: 'https://kovil.ai/intelligent-document-processing',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Legal & Compliance IDP Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contract Lifecycle Management Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'eDiscovery Document Review Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Regulatory Filing Extraction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Due Diligence Document Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IP Document Management Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Litigation & Court Document Processing' } },
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
      name: 'What is contract lifecycle management automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contract lifecycle management (CLM) automation uses AI Document Agents to handle the document-intensive stages of the contract lifecycle — classification of incoming agreements, extraction of material terms and obligations, identification of non-standard clauses, routing for review and approval, and ongoing obligation monitoring. AI CLM automation eliminates the manual abstraction that typically takes 30–90 minutes per contract, replacing it with a structured extraction in seconds that legal and procurement teams review and validate rather than create from scratch.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI improve eDiscovery document review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI improves eDiscovery document review by performing first-pass classification of the entire document corpus — tagging each document for relevance, responsiveness, and privilege candidacy — before any human reviewer touches a document. This means reviewers spend their time on documents AI has pre-identified as likely relevant, rather than reviewing millions of clearly non-responsive documents. AI eDiscovery tools typically reduce first-pass review cost by 60–80% compared to purely manual review, while improving recall consistency across large review teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'What legal document types does the AI handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our legal IDP pipeline handles: contracts (NDAs, MSAs, SOWs, licence agreements, employment contracts, lease agreements), SEC and regulatory filings, court pleadings and motions, deposition transcripts, expert reports, discovery responses, due diligence documents, patent applications and office actions, trademark filings, IP licensing agreements, compliance reports, board minutes and resolutions, and any document type generated in legal, compliance, or IP workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI handle attorney-client privilege in document review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI pipeline identifies privilege candidates at classification time using multiple detection signals: attorney names and bar numbers cross-referenced against a privilege custodian list, in-house counsel email domain markers, legal advice request and response language patterns, and document metadata indicating legal hold or privilege log entries. Privilege candidates are flagged with a confidence score and routed to a separate privilege review queue — they never enter the non-privileged review pool. Final privilege determinations remain with human attorneys.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is due diligence document processing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Due diligence document processing uses AI to classify and extract material information from every document in an M&A data room — contracts, financial statements, corporate records, IP filings, litigation documents, regulatory correspondence, and HR records. The AI identifies material risk flags across the document corpus — change-of-control provisions, pending litigation, IP ownership gaps, environmental liabilities — and produces structured summaries by due diligence category. This compresses weeks of manual review into days without sacrificing coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does legal document automation take to implement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production legal document automation pipeline targeting a defined document set — for example, NDA and MSA abstraction for a procurement team — typically takes 2–4 weeks from scoping to production. This covers document intake setup, legal NLP and Vision LLM classification and extraction, playbook integration for non-standard clause flagging, confidence scoring, HITL exception queue, and CLM or DMS integration. eDiscovery and large-scale due diligence deployments with custom coding schemas typically require 4–6 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI extract data from SEC and regulatory filings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our regulatory filing extraction pipeline handles SEC 10-K, 10-Q, and 8-K filings, proxy statements, Basel III and Pillar 3 disclosures, FINRA submissions, and international regulatory filings. The AI extracts financial figures, risk factor language, material event disclosures, and compliance attestations — producing structured data for GRC platforms, compliance monitoring dashboards, and investor relations systems. It also monitors for material changes between filing periods and flags amendments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is legal document AI SOC 2 compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Legal IDP pipelines are built with confidentiality as a first-class design constraint. We offer on-premise and private cloud LLM deployment so privileged communications, M&A deal documents, and regulatory submissions never leave your infrastructure. Every document event — classification, extraction, privilege flagging, human review — is logged to an immutable audit trail. Data residency controls are available for EU and UK matter processing to meet GDPR cross-border transfer requirements.',
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
    { '@type': 'ListItem', position: 3, name: 'Legal & Compliance', item: 'https://kovil.ai/intelligent-document-processing/legal-compliance' },
  ],
}

// ── WebPage + Speakable Schema ────────────────────────────────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Legal Document Processing & Contract AI Automation | Kovil AI',
  description: 'Production IDP pipelines for legal and compliance — contract lifecycle management automation, eDiscovery document review, regulatory filing extraction, due diligence processing, and IP document management.',
  url: 'https://kovil.ai/intelligent-document-processing/legal-compliance',
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#contract-lifecycle-management h2', '#extraction-coverage h2', '#use-cases h3', '#faq-grid h3'],
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
      <LegalCompliancePage />
    </>
  )
}
