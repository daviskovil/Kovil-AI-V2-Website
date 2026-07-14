import type { Metadata } from 'next'
import ShopifyEcommerceAutomationPage from '@/src/pages/shopify/ShopifyEcommerceAutomationPage'

export const metadata: Metadata = {
  title: 'Shopify AI E-Commerce Automation Systems',
  description: 'Enterprise-tier e-commerce AI automation workflows. Deploy custom autonomous systems for returns fraud verification, supplier catalog enrichment, multi-warehouse fulfillment, and omnichannel marketing sync.',
  alternates: { canonical: 'https://kovil.ai/shopify/ecommerce-automation-solutions' },
  keywords: [
    'shopify ecommerce automation',
    'ecommerce ai automation',
    'shopify workflow automation',
    'automated returns shopify',
    'custom retail workflow sync',
    'shopify supplier catalog automation',
    'shopify fulfillment automation',
    'ecommerce ops automation ai',
  ],
  openGraph: {
    type: 'website',
    title: 'Shopify AI E-Commerce Automation Systems | Kovil AI',
    description: 'Enterprise-tier e-commerce AI automation workflows for returns fraud verification, supplier catalog enrichment, and omnichannel marketing.',
    url: 'https://kovil.ai/shopify/ecommerce-automation-solutions',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/shopify-cosmetics-case-study.png', width: 1200, height: 675, alt: 'Shopify E-Commerce Automation — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify AI E-Commerce Automation Systems | Kovil AI',
    description: 'Enterprise-tier e-commerce AI automation workflows for returns fraud verification, supplier catalog enrichment, and omnichannel marketing.',
    images: ['https://kovil.ai/shopify-cosmetics-case-study.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shopify E-Commerce Automation Solutions',
  description: 'Cognitive AI automation workflows for Shopify stores — returns fraud auditing, supplier catalog enrichment, multi-channel marketing sync, and inventory/fulfillment orchestration across ERP and 3PL systems.',
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
      { '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' },
    ],
  },
  serviceType: 'E-Commerce Operations Automation',
  category: 'Shopify AI Automation',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/ecommerce-automation-solutions',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'E-Commerce Automation Pillars',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Returns Fraud Auditing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Supplier Catalog Enrichment' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Channel Marketing Sync' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inventory & Fulfillment Sync' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-3 week fixed-price sprint per workflow.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do custom AI automation workflows differ from Shopify Flow?', acceptedAnswer: { '@type': 'Answer', text: 'Shopify Flow runs static if/then rules that require exact string matches. Our cognitive AI automation workflows use reasoning models to process unstructured data, like customer support emails, return photos, and supplier PDFs, making decisions on complex variables on the fly.' } },
    { '@type': 'Question', name: 'What systems can the e-commerce agents connect with?', acceptedAnswer: { '@type': 'Answer', text: 'Our engineers construct custom connectors to sync Shopify with shipping platforms (ShipStation), ERP software (NetSuite/SAP), CRM layers (HubSpot), email marketers (Klaviyo), and internal tools (n8n/Slack).' } },
    { '@type': 'Question', name: 'How do you verify return photos for fraud?', acceptedAnswer: { '@type': 'Answer', text: 'We integrate visual models (VLM) that compare customer-uploaded product photos with standard catalog images, identifying color matches, label authenticity, and damage states before authorizing refunds.' } },
    { '@type': 'Question', name: 'Can this replace our operations team entirely?', acceptedAnswer: { '@type': 'Answer', text: 'No. These agents remove the repetitive, judgment-light portions of ops work so your team spends time on the exceptions and strategic decisions that actually need a human.' } },
    { '@type': 'Question', name: 'How accurate is the supplier catalog enrichment?', acceptedAnswer: { '@type': 'Answer', text: 'Extraction accuracy on well-formatted supplier PDFs typically exceeds 95% for core fields. Every new product is created as a draft for human review before publishing.' } },
    { '@type': 'Question', name: 'Do you build automations for multi-warehouse or 3PL setups?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly build fulfillment routing logic that checks real-time stock across multiple warehouses and third-party logistics providers before confirming an order.' } },
    { '@type': 'Question', name: 'Can I see what the agents are doing in real time?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every deployment includes an audit trail dashboard logging every action an agent takes, with timestamps and the reasoning behind each decision.' } },
    { '@type': 'Question', name: 'Is my customer and payment data safe in these automations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Token-shielding middleware masks customer addresses and payment details before any data reaches a model, and all data processing happens within your dedicated private cloud tenant.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'E-Commerce Automation', item: 'https://kovil.ai/shopify/ecommerce-automation-solutions' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Shopify AI E-Commerce Automation Systems | Kovil AI',
  description: 'Enterprise-tier e-commerce AI automation workflows for returns fraud verification, supplier catalog enrichment, and omnichannel marketing.',
  url: 'https://kovil.ai/shopify/ecommerce-automation-solutions',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ShopifyEcommerceAutomationPage />
    </>
  )
}
