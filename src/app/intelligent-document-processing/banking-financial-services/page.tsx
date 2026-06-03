import type { Metadata } from 'next'
import BankingFinancialServicesPage from '@/src/pages/idp/BankingFinancialServicesPage'

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Financial Data Extraction & KYC Automation for Banking | Kovil AI',
  description: 'Production IDP pipelines for banking — KYC automation, automated mortgage processing, bank statement parsing, credit underwriting, and loan document processing. Fixed-price sprints, 2–4 weeks.',
  alternates: { canonical: 'https://kovil.ai/intelligent-document-processing/banking-financial-services' },
  keywords: [
    'financial data extraction',
    'kyc automation',
    'credit underwriting software',
    'automated mortgage processing',
    'bank statement parsing',
    'loan document processing',
    'financial IDP',
    'intelligent document processing for banking',
    'banking document automation',
    'KYC document classification',
    'mortgage document processing AI',
    'identity document extraction',
    'BSA AML document processing',
    'BFSI document AI',
    'trade finance document automation',
    'loan origination document processing',
    'bank statement AI extraction',
    'credit file document processing',
    'SOC 2 banking document AI',
  ],
  openGraph: {
    type: 'website',
    title: 'Financial Data Extraction & KYC Automation for Banking | Kovil AI',
    description: 'Production IDP pipelines for BFSI — KYC automation, automated mortgage processing, bank statement parsing, and credit underwriting. SOC 2 · BSA/AML · Fixed-price sprints.',
    url: 'https://kovil.ai/intelligent-document-processing/banking-financial-services',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/hero-idp-banking-financial-services.png', width: 1200, height: 630, alt: 'Financial Data Extraction & KYC Automation for Banking — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Data Extraction & KYC Automation for Banking | Kovil AI',
    description: 'KYC automation, automated mortgage processing, bank statement parsing, and credit underwriting IDP. Fixed-price sprints for BFSI.',
    images: ['https://kovil.ai/hero-idp-banking-financial-services.png'],
  },
}

// ── Service Schema ────────────────────────────────────────────────────────────
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Financial Data Extraction & IDP for Banking and Financial Services',
  description: 'Kovil AI designs, builds, and deploys production Intelligent Document Processing (IDP) pipelines for banking and financial services — covering KYC automation, automated mortgage processing, bank statement parsing, credit underwriting document processing, loan document processing, and trade finance document automation.',
  datePublished: '2026-06-03',
  dateModified: '2026-06-03',
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
  serviceType: 'Financial Document Processing',
  category: 'Banking & Financial Services',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/intelligent-document-processing/banking-financial-services',
  isPartOf: {
    '@type': 'Service',
    name: 'Intelligent Document Processing (IDP)',
    url: 'https://kovil.ai/intelligent-document-processing',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Banking IDP Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'KYC Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automated Mortgage Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Credit Underwriting Document Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bank Statement Parsing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Loan Document Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trade Finance Document Automation' } },
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
      name: 'What is financial data extraction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Financial data extraction is the automated process of pulling structured fields — income, liabilities, transaction amounts, dates, party names, risk signals — from unstructured banking documents such as bank statements, tax returns, pay stubs, and financial statements. Modern financial data extraction uses Vision LLMs and layout-aware AI models to handle variable formats across banks, geographies, and document vintages, replacing manual spreading and keying.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is KYC automation and how does AI improve it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KYC automation uses AI document agents to classify incoming identity documents — passports, national IDs, utility bills, proof-of-address letters — extract structured identity fields with confidence scores, flag potential document tampering, and generate AML-compliant audit trails without manual review for high-confidence documents. AI improves KYC automation by handling multi-country ID formats, poor-quality scans, and mixed document bundles that break rule-based systems. Production KYC automation pipelines typically process identity documents in under 3 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does automated mortgage processing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Automated mortgage processing uses AI Document Agents to handle the full mortgage bundle: classifying each document (paystubs, W-2s, 1040s, bank statements), extracting income and asset fields, calculating DTI and LTV ratios, checking document completeness, and pushing structured data into the loan origination system. Automated mortgage processing typically reduces income and asset verification from 2–3 days to under 2 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can bank statement parsing extract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bank statement parsing can extract: individual transactions with amounts, dates, and merchant categories; income streams; expense categories; recurring payment amounts and frequencies; available balance history; cash flow trends; and anomalous transactions. Our bank statement parsing pipeline handles multi-page statements from any bank format — PDF exports, scanned paper statements, or smartphone photos — without requiring bank-specific templates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is credit underwriting software in the context of document AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the context of document AI, credit underwriting software refers to systems that automate the extraction and analysis of financial documents required for credit decisions — P&L statements, balance sheets, cash flow statements, tax returns, and bank statements. The AI extracts all relevant financial fields, identifies risk signals, and presents a structured risk summary for underwriter review. This typically reduces spreading time from 2–4 hours per loan application to under 10 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does KYC automation take to implement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production KYC automation pipeline targeting a defined set of identity document types typically takes 2–4 weeks from scoping to production. This covers document intake setup, Vision LLM classification and extraction, confidence scoring, BSA/AML audit trail logging, HITL exception queue, and integration with the KYC platform or CRM. More complex multi-jurisdiction workflows typically require 4–8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is loan document processing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loan document processing is the automated classification, extraction, and routing of documents throughout the loan lifecycle — from origination through servicing to default and resolution. AI loan document processing eliminates manual sorting and data entry at each stage, ensuring clean structured data flows into the LOS, core banking, and CRM systems without re-keying.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is banking IDP SOC 2 and BSA/AML compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build banking IDP pipelines with compliance as a first-class design constraint. For SOC 2 compliance, we offer on-premise or private cloud LLM deployment options so sensitive financial documents never leave the institution\'s infrastructure. For BSA/AML compliance, every document event is logged to an immutable, timestamped audit trail that meets examination requirements. We also support GLBA Safeguards Rule alignment with data residency controls, PII redaction, and role-based access logging.',
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
    { '@type': 'ListItem', position: 3, name: 'Banking & Financial Services', item: 'https://kovil.ai/intelligent-document-processing/banking-financial-services' },
  ],
}

// ── WebPage + Speakable Schema ────────────────────────────────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Financial Data Extraction & KYC Automation for Banking | Kovil AI',
  description: 'Production IDP pipelines for banking — KYC automation, automated mortgage processing, bank statement parsing, credit underwriting, and loan document processing.',
  url: 'https://kovil.ai/intelligent-document-processing/banking-financial-services',
  datePublished: '2026-06-03',
  dateModified: '2026-06-03',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#kyc-automation h2', '#financial-data-extraction h2', '#use-cases h3', '#faq-grid h3'],
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
      <BankingFinancialServicesPage />
    </>
  )
}
