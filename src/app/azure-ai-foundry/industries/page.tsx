import type { Metadata } from 'next'
import SectionHubTemplate from '@/src/components/hub/SectionHubTemplate'
import { Building2, Heart, Shield, Scale, Factory, ShoppingCart } from 'lucide-react'
import type { SectionHubData } from '@/src/components/hub/SectionHubTemplate'

const AZURE = '#0078D4'

export const metadata: Metadata = {
  title: 'Azure AI Foundry by Industry | Kovil AI',
  description: 'Industry-specific Azure AI Foundry implementations — financial services, healthcare, insurance, legal, manufacturing, and retail. Each with dedicated compliance controls and integration patterns. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/industries' },
  keywords: ['azure ai foundry financial services', 'azure ai healthcare', 'azure ai insurance', 'azure ai foundry legal', 'azure ai manufacturing', 'azure ai retail', 'azure ai foundry industry', 'azure ai enterprise industry solutions', 'azure ai implementation by industry', 'azure ai foundry industry partner'],
  openGraph: {
    type: 'website',
    title: 'Azure AI Foundry by Industry | Kovil AI',
    description: 'Industry-specific Azure AI Foundry — financial services, healthcare, insurance, legal, manufacturing, retail. Compliance-first, fixed-price sprints.',
    url: 'https://kovil.ai/azure-ai-foundry/industries',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry by Industry — Kovil AI' }],
  },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry by Industry | Kovil AI', description: 'Industry-specific Azure AI — financial services, healthcare, insurance, legal, manufacturing, retail.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const collectionSchema = {
  '@context': 'https://schema.org', '@type': 'CollectionPage',
  name: 'Azure AI Foundry by Industry | Kovil AI',
  description: 'Industry-specific Azure AI Foundry implementations across six regulated sectors.',
  url: 'https://kovil.ai/azure-ai-foundry/industries',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  hasPart: [
    { '@type': 'WebPage', name: 'Azure AI for Financial Services & Banking', url: 'https://kovil.ai/azure-ai-foundry/industries/financial-services-banking' },
    { '@type': 'WebPage', name: 'Azure AI for Healthcare & Life Sciences', url: 'https://kovil.ai/azure-ai-foundry/industries/healthcare-life-sciences' },
    { '@type': 'WebPage', name: 'Azure AI for Insurance', url: 'https://kovil.ai/azure-ai-foundry/industries/insurance' },
    { '@type': 'WebPage', name: 'Azure AI for Legal & Professional Services', url: 'https://kovil.ai/azure-ai-foundry/industries/legal-professional-services' },
    { '@type': 'WebPage', name: 'Azure AI for Manufacturing & Supply Chain', url: 'https://kovil.ai/azure-ai-foundry/industries/manufacturing-supply-chain' },
    { '@type': 'WebPage', name: 'Azure AI for Retail & eCommerce', url: 'https://kovil.ai/azure-ai-foundry/industries/retail-ecommerce' },
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
  sectionTag: 'Industry-Specific Azure AI',
  headline: 'Azure AI Foundry',
  headlineAccent: 'by Industry',
  description: 'Production Azure AI Foundry deployments across six regulated sectors — each with dedicated compliance controls, integration patterns, and use cases proven in enterprise environments.',
  cards: [
    { href: '/azure-ai-foundry/industries/financial-services-banking', icon: Building2, color: AZURE, tag: 'Financial Services', title: 'Financial Services & Banking', description: 'Fraud detection, compliance monitoring, wealth management automation, and loan servicing agents on Azure — meeting SEC, FINRA, and SOX requirements.' },
    { href: '/azure-ai-foundry/industries/healthcare-life-sciences', icon: Heart, color: '#34D399', tag: 'Healthcare', title: 'Healthcare & Life Sciences', description: 'HIPAA-ready AI agents for clinical documentation, patient engagement, prior auth, and life sciences research automation on Azure Health Data Services.' },
    { href: '/azure-ai-foundry/industries/insurance', icon: Shield, color: '#60A5FA', tag: 'Insurance', title: 'Insurance', description: 'FNOL intake, underwriting triage, claims processing, and compliance agents on Azure — meeting state DOI, NAIC, and GDPR requirements.' },
    { href: '/azure-ai-foundry/industries/legal-professional-services', icon: Scale, color: '#8B5CF6', tag: 'Legal', title: 'Legal & Professional Services', description: 'Contract analysis, client intake, matter management, and regulatory compliance agents on Azure AI — built with client privilege controls from day one.' },
    { href: '/azure-ai-foundry/industries/manufacturing-supply-chain', icon: Factory, color: '#F59E0B', tag: 'Manufacturing', title: 'Manufacturing & Supply Chain', description: 'IoT-connected predictive maintenance, quality control vision agents, and supply chain intelligence on Azure IoT Hub and Vertex AI.' },
    { href: '/azure-ai-foundry/industries/retail-ecommerce', icon: ShoppingCart, color: '#EF4444', tag: 'Retail', title: 'Retail & eCommerce', description: 'Personalised recommendations, inventory intelligence, order management, and omnichannel support agents on Azure — PCI-DSS and GDPR compliant.' },
  ],
  ctaHeadline: "Don't see your industry?",
  ctaBody: 'Azure AI Foundry works across any sector. Book a call — we will scope the right use case and compliance configuration for your business.',
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
