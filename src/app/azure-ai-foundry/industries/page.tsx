import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry by Industry',
  description: 'Azure AI Foundry for financial services, healthcare, insurance, legal, manufacturing, and retail. Fixed-price production deployments.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/industries' },
  keywords: ['azure ai foundry financial services', 'azure ai healthcare', 'azure ai insurance', 'azure ai legal', 'azure ai manufacturing', 'azure ai retail', 'azure openai industry', 'azure ai foundry industry', 'azure ai banking', 'azure ai life sciences'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry by Industry | Kovil AI',
    description: 'Azure AI Foundry for financial services, healthcare, insurance, legal, manufacturing, and retail. Industry-specific fixed-price deployments.',
    url: 'https://kovil.ai/azure-ai-foundry/industries',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry by Industry — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry by Industry | Kovil AI', description: 'Financial services, healthcare, insurance, legal, manufacturing, retail on Azure AI Foundry.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry by Industry',
  url: 'https://kovil.ai/azure-ai-foundry/industries',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Azure AI Foundry for Financial Services', url: 'https://kovil.ai/azure-ai-foundry/industries/financial-services-banking' },
    { '@type': 'WebPage', name: 'Azure AI Foundry for Healthcare', url: 'https://kovil.ai/azure-ai-foundry/industries/healthcare-life-sciences' },
    { '@type': 'WebPage', name: 'Azure AI Foundry for Insurance', url: 'https://kovil.ai/azure-ai-foundry/industries/insurance' },
    { '@type': 'WebPage', name: 'Azure AI Foundry for Legal', url: 'https://kovil.ai/azure-ai-foundry/industries/legal-professional-services' },
    { '@type': 'WebPage', name: 'Azure AI Foundry for Manufacturing', url: 'https://kovil.ai/azure-ai-foundry/industries/manufacturing-supply-chain' },
    { '@type': 'WebPage', name: 'Azure AI Foundry for Retail', url: 'https://kovil.ai/azure-ai-foundry/industries/retail-ecommerce' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Industries', item: 'https://kovil.ai/azure-ai-foundry/industries' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Azure AI Foundry by Industry | Kovil AI',
  url: 'https://kovil.ai/azure-ai-foundry/industries',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const data: SectionHubData = {
  brandColor: AZURE,
  breadcrumbs: [{ label: 'Azure AI Foundry', href: '/azure-ai-foundry' }, { label: 'Industries' }],
  sectionTag: 'Industry-Specific Deployments',
  headline: 'Azure AI Foundry',
  headlineAccent: 'by Industry',
  description: 'Pre-built AI agent frameworks and compliance-ready deployments for regulated and data-intensive industries — built on Azure AI Foundry with industry-specific data schemas and security controls.',
  cards: [
    { href: '/azure-ai-foundry/industries/financial-services-banking', icon: 'Building2', color: AZURE, title: 'Financial Services & Banking', description: 'Azure AI Foundry agents for financial services — credit analysis, regulatory reporting, fraud detection, and customer advisory. FCA/SEC compliant, Azure Confidential Computing.' },
    { href: '/azure-ai-foundry/industries/healthcare-life-sciences', icon: 'Heart', color: '#34D399', title: 'Healthcare & Life Sciences', description: 'HIPAA-compliant AI agents on Azure for clinical documentation, patient triage, prior authorisation, and clinical trial data extraction. Azure Healthcare APIs ready.' },
    { href: '/azure-ai-foundry/industries/insurance', icon: 'Shield', color: '#60A5FA', title: 'Insurance', description: 'Claims processing, underwriting automation, policy Q&A, and fraud detection agents on Azure AI Foundry — integrated with core insurance systems and Azure Event Grid.' },
    { href: '/azure-ai-foundry/industries/legal-professional-services', icon: 'Scale', color: '#8B5CF6', title: 'Legal & Professional Services', description: 'Contract review, matter management, legal research, and client intake agents — built on Azure OpenAI with SRA/ABA compliance and attorney-client privilege controls.' },
    { href: '/azure-ai-foundry/industries/manufacturing-supply-chain', icon: 'Factory', color: '#F59E0B', title: 'Manufacturing & Supply Chain', description: 'Predictive maintenance, quality inspection, supply chain intelligence, and ERP automation agents for manufacturers — integrated with Azure IoT Hub and SAP.' },
    { href: '/azure-ai-foundry/industries/retail-ecommerce', icon: 'ShoppingCart', color: '#EF4444', title: 'Retail & E-Commerce', description: 'Personalised product recommendations, inventory intelligence, customer service agents, and demand forecasting on Azure AI Foundry — integrated with Dynamics 365 Commerce.' },
  ],
  overview: {
    "heading": "Why industry context changes how an agent is built",
    "paragraphs": [
      "Regulated and data-heavy industries need more than a general-purpose agent. They need audit trails, human review at the right steps, controls on where data goes, and data structures that match the sector. Each industry page describes agents scoped to that sector, the systems they connect to and the compliance questions to plan for.",
      "The six sectors below cover financial services, healthcare, insurance, legal, manufacturing and retail. Many of the agents are the same building blocks as in our use-case sections, such as document intelligence, predictive maintenance and customer service, applied to each sector's own workflows.",
      "Compliance depends on how a solution is configured and operated, not only on the platform underneath it. We scope the controls you need with your security and compliance team before the build starts."
    ]
  },
  comparison: {
    "heading": "Industries and the agents we build for them",
    "columns": [
      "Industry",
      "Typical agents",
      "Platform and compliance notes"
    ],
    "rows": [
      [
        "Financial Services & Banking",
        "Credit analysis, regulatory reporting, fraud detection, customer advisory",
        "Designed around FCA and SEC requirements, with Azure Confidential Computing"
      ],
      [
        "Healthcare & Life Sciences",
        "Clinical documentation, patient triage, prior authorisation, clinical trial data extraction",
        "Designed around HIPAA requirements, with Azure Healthcare APIs"
      ],
      [
        "Insurance",
        "Claims processing, underwriting automation, policy Q&A, fraud detection",
        "Integrates with core insurance systems and Azure Event Grid"
      ],
      [
        "Legal & Professional Services",
        "Contract review, matter management, legal research, client intake",
        "SRA and ABA considerations, with attorney-client privilege controls"
      ],
      [
        "Manufacturing & Supply Chain",
        "Predictive maintenance, quality inspection, supply chain intelligence, ERP automation",
        "Integrates with Azure IoT Hub and SAP"
      ],
      [
        "Retail & E-Commerce",
        "Personalised recommendations, inventory intelligence, customer service, demand forecasting",
        "Integrates with Dynamics 365 Commerce"
      ]
    ]
  },
  faqs: [
    {
      "question": "Do you only work in these six industries?",
      "answer": "No. These are the sectors with dedicated pages. We scope Azure AI Foundry work in other regulated sectors on a call."
    },
    {
      "question": "Is a solution built on Azure automatically compliant?",
      "answer": "No. Azure provides services that can be configured for frameworks such as HIPAA, but compliance depends on configuration, agreements and how the solution is operated. We agree the required controls with your compliance team up front."
    },
    {
      "question": "Will a person review what the agent does?",
      "answer": "In regulated workflows, yes. We design review steps for the decisions that need them, and every AI decision and override can be logged for audit."
    },
    {
      "question": "Can we reuse agents across industries?",
      "answer": "The underlying building blocks carry over, for example document extraction or knowledge search. The data schemas, integrations and controls are adapted to each sector."
    },
    {
      "question": "How is the work priced?",
      "answer": "Work is delivered as fixed-price builds scoped on a 30-minute call."
    }
  ],
  ctaHeadline: 'Don\'t see your industry?',
  ctaBody: 'We build Azure AI Foundry solutions across all regulated sectors. Book a call and we will scope your industry-specific use case.',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <SectionHubTemplate data={data} />
    </>
  )
}
