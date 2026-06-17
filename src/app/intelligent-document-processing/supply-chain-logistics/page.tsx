import type { Metadata } from 'next'
import SupplyChainLogisticsPage from '@/src/pages/idp/SupplyChainLogisticsPage'

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Supply Chain Document Processing & Logistics AI Automation | Kovil AI',
  description: 'Production IDP pipelines for supply chain and logistics — accounts payable automation, 3-way invoice matching, customs and trade compliance, freight document processing, supplier onboarding, and trade finance. C-TPAT · OFAC · SOC 2 · Fixed-price sprints, 2–4 weeks.',
  alternates: { canonical: 'https://kovil.ai/intelligent-document-processing/supply-chain-logistics' },
  keywords: [
    'supply chain document processing',
    'logistics document automation',
    'accounts payable automation',
    'invoice processing AI',
    '3-way matching automation',
    'customs document processing',
    'trade compliance automation',
    'bill of lading AI extraction',
    'freight document processing',
    'supplier onboarding automation',
    'trade finance document processing',
    'intelligent document processing supply chain',
    'supply chain IDP',
    'OFAC screening automation',
    'C-TPAT compliance document AI',
    'SAP accounts payable automation',
    'ERP invoice automation',
    'purchase order matching AI',
    'warehouse document processing',
    'supply chain AI automation',
  ],
  openGraph: {
    type: 'website',
    title: 'Supply Chain Document Processing & Logistics AI Automation | Kovil AI',
    description: 'Production IDP for supply chain and logistics — accounts payable automation, 3-way matching, customs compliance, freight document processing, and supplier onboarding. C-TPAT · OFAC · SOC 2 compliant.',
    url: 'https://kovil.ai/intelligent-document-processing/supply-chain-logistics',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Supply Chain Document Processing & Logistics Automation — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Supply Chain Document Processing & Logistics AI Automation | Kovil AI',
    description: 'Accounts payable automation, 3-way invoice matching, customs compliance, and freight document processing. Fixed-price sprints, 2–4 weeks to production.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

// ── Service Schema ────────────────────────────────────────────────────────────
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Supply Chain Document Processing & Logistics AI Automation',
  description: 'Kovil AI designs, builds, and deploys production Intelligent Document Processing (IDP) pipelines for supply chain and logistics — covering accounts payable automation with 3-way matching, customs and trade compliance document processing, freight and shipping document classification, supplier onboarding document automation, trade finance processing, and warehouse and inventory document management.',
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
  serviceType: 'Supply Chain Document Processing',
  category: 'Supply Chain & Logistics',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/intelligent-document-processing/supply-chain-logistics',
  isPartOf: {
    '@type': 'Service',
    name: 'Intelligent Document Processing (IDP)',
    url: 'https://kovil.ai/intelligent-document-processing',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Supply Chain & Logistics IDP Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accounts Payable Automation with 3-Way Matching' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customs & Trade Compliance Document Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Freight & Shipping Document Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supplier Onboarding Document Processing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Trade Finance Document Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Warehouse & Inventory Document Processing' } },
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
      name: 'What is accounts payable automation in supply chain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accounts payable automation in supply chain uses AI Document Agents to process invoices, purchase orders, and goods receipt notes — extracting all structured data, performing 3-way PO/invoice/GRN matching automatically, and routing matched invoices to straight-through payment while escalating exceptions for review. This eliminates manual invoice keying and matching that typically takes AP teams 5–10 minutes per invoice. AI AP automation achieves 70–85% straight-through processing rates on matched invoices, reducing AP processing cost by 60–80% and enabling early payment discount capture.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 3-way matching in accounts payable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '3-way matching is the process of reconciling three documents before approving an invoice for payment: the purchase order (authorising the purchase), the invoice (the supplier\'s payment request), and the goods receipt note (confirming delivery). AI 3-way matching extracts structured data from all three documents, compares line items, quantities, prices, and terms, and flags discrepancies for human review. Matched invoices that pass all tolerance checks are automatically approved for payment — eliminating manual reconciliation that typically requires 15–30 minutes per exception invoice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What supply chain document types does the AI process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our supply chain IDP pipeline handles: supplier invoices, purchase orders, goods receipt notes, bills of lading, packing lists, certificates of origin, customs declarations, commercial invoices, air waybills, HS tariff classification documents, letters of credit, shipping instructions, freight rate confirmations, carrier booking confirmations, MSDS/SDS safety data sheets, supplier qualification documents, and any document generated in procurement, logistics, customs, and warehouse workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI automate customs and trade compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI customs and trade compliance automation extracts HS tariff codes, country of origin, declared values, incoterms, and restricted party identifiers from commercial invoices, certificates of origin, and customs declarations. The AI cross-references extracted data against OFAC SDN lists and export control entity lists for sanctions screening, validates HS classifications against trade agreement preferential tariff schedules, and flags shipments requiring additional customs documentation or broker intervention. This reduces customs entry preparation time by 60%+ and eliminates manual sanctions screening for standard commercial shipments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is trade finance document processing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trade finance document processing uses AI to validate and extract data from the complex document sets required for letter of credit, documentary collection, and supply chain finance transactions — commercial invoices, bills of lading, packing lists, insurance certificates, certificates of origin, and inspection certificates. The AI validates document compliance against LC terms (UCP 600), flags discrepancies before bank presentation, and extracts structured trade data for ERP posting. This reduces LC document checking time from hours to minutes and eliminates the 30–50% first-presentation discrepancy rate typical of manual document checking.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does supply chain document automation take to implement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production supply chain document automation pipeline targeting a defined document set — for example, supplier invoice processing with 3-way matching for a specific ERP system — typically takes 2–4 weeks from scoping to production. This covers document intake setup, Vision LLM classification and extraction, ERP or TMS integration, 3-way matching logic, tolerance threshold configuration, and HITL exception queue. Multi-supplier, multi-currency, or multi-jurisdiction deployments typically require 4–8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ERP systems does supply chain IDP integrate with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our supply chain IDP pipelines integrate with SAP S/4HANA (AP, MM, and FI modules), Oracle ERP Cloud (Fusion Financials, Procurement), NetSuite (AP, PO management), Microsoft Dynamics 365 Finance & Operations, Coupa, Basware, and specialist logistics platforms including Cargowise, Manhattan Associates, and Blue Yonder. Integration is via native APIs, SAP BAPIs/IDocs, or structured data extraction for batch posting workflows where real-time API access is not available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is supply chain document AI C-TPAT and OFAC compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Supply chain IDP pipelines include OFAC SDN list and BIS Entity List screening integrated into the document classification pipeline — every shipment document is screened against current restricted party lists before processing. For C-TPAT and AEO compliance, the pipeline generates and retains structured audit trails for all document processing events, enabling compliance evidence for customs authority audits. Data residency and on-premise deployment options are available for organisations with data sovereignty requirements on trade document processing.',
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
    { '@type': 'ListItem', position: 3, name: 'Supply Chain & Logistics', item: 'https://kovil.ai/intelligent-document-processing/supply-chain-logistics' },
  ],
}

// ── WebPage + Speakable Schema ────────────────────────────────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Supply Chain Document Processing & Logistics AI Automation | Kovil AI',
  description: 'Production IDP pipelines for supply chain and logistics — accounts payable automation, 3-way invoice matching, customs and trade compliance, freight document processing, supplier onboarding, and trade finance.',
  url: 'https://kovil.ai/intelligent-document-processing/supply-chain-logistics',
  datePublished: '2026-06-17',
  dateModified: '2026-06-17',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#accounts-payable-automation h2', '#extraction-coverage h2', '#use-cases h3', '#faq-grid h3'],
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
      <SupplyChainLogisticsPage />
    </>
  )
}
