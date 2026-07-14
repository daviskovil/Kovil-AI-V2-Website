import type { Metadata } from 'next'
import BeautyCosmeticsAiPage from '@/src/pages/shopify/solutions/BeautyCosmeticsAiPage'

export const metadata: Metadata = {
  title: 'Beauty & Cosmetics AI Agents for Shopify',
  description: 'Deploy custom conversational beauty agents for skin profiles, vision-model shade matching, and full routine bundling — with zero photo retention. Live in 2 weeks, risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/beauty-cosmetics-ai-agents' },
  keywords: [
    'beauty ai agent shopify',
    'cosmetics shade matcher ai',
    'skincare recommendation agent',
    'shopify beauty consultant',
    'conversational cosmetic shopify',
    'ai shade matching shopify',
    'skincare quiz ai agent',
    'shopify beauty personalization',
  ],
  openGraph: {
    type: 'website',
    title: 'Beauty & Cosmetics AI Agents for Shopify | Kovil AI',
    description: 'Conversational beauty agents for skin profiles, vision-model shade matching, and full routine bundling — with zero photo retention.',
    url: 'https://kovil.ai/shopify/solutions/beauty-cosmetics-ai-agents',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty & Cosmetics AI Agents for Shopify | Kovil AI',
    description: 'Conversational beauty agents for skin profiles, vision-model shade matching, and full routine bundling.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Beauty & Cosmetics AI Agents',
  description: 'Custom conversational AI agents for beauty and cosmetics Shopify stores — skin profile consultation, vision-model shade matching, routine bundle building, ingredient safety checks, and post-purchase skincare coaching.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    telephone: '+16465359141',
    sameAs: ['https://www.linkedin.com/company/kovil-ai/', 'https://clutch.co/profile/kovil-ai', 'https://www.crunchbase.com/organization/kovil-ai'],
    address: [{ '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }],
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Beauty & Cosmetics',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/solutions/beauty-cosmetics-ai-agents',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Beauty & Cosmetics Agent Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skin Profile Consultation Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shade & Tone Matching Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Routine Bundle Builder' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ingredient & Allergy Safety Check' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Post-Purchase Skincare Coach' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-week sprint to first live agent.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does the shade matching model execute?', acceptedAnswer: { '@type': 'Answer', text: 'We run custom vision model endpoints that analyze user-uploaded face photos under normal lighting, extracting tone and depth values to match with variant catalog attributes in real time. The result includes a confidence score, and the photo is discarded immediately after processing.' } },
    { '@type': 'Question', name: 'Is customer skincare data secure?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All customer image uploads are processed through secure gateways and are never persisted to disk or used in any model training pipeline. Structured profile data is stored in your own Shopify customer metafields.' } },
    { '@type': 'Question', name: 'Can the agent recommend complementary items?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, our models use semantic similarity search to recommend dynamic complementary upsells based on the main routine selection.' } },
    { '@type': 'Question', name: 'Does the agent make dermatological or medical claims?', acceptedAnswer: { '@type': 'Answer', text: 'No. Agents are explicitly scoped to cosmetic product recommendation language and redirect medical questions to a licensed professional rather than attempting a diagnosis.' } },
    { '@type': 'Question', name: 'How accurate is the shade matching in practice?', acceptedAnswer: { '@type': 'Answer', text: 'Production deployments typically see 85–92% first-match satisfaction, with the agent surfacing a confidence score and offering an alternate shade if needed.' } },
    { '@type': 'Question', name: 'Do you handle ingredient allergy and safety exclusions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We map your ingredient metadata so agents cross-reference stated exclusions before recommending a product, and explicitly flag any conflict rather than silently filtering.' } },
    { '@type': 'Question', name: 'How long does it take to launch a first agent?', acceptedAnswer: { '@type': 'Answer', text: 'A first-workflow deployment typically takes about 2 weeks from kickoff, including catalog indexing, questionnaire design, and testing against real customer scenarios.' } },
    { '@type': 'Question', name: 'Does this replace our existing beauty quiz app?', acceptedAnswer: { '@type': 'Answer', text: 'It typically supersedes static quiz apps, since the agent replaces a fixed multiple-choice flow with a real conversation grounded in live catalog and inventory data.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'Beauty & Cosmetics AI Agents', item: 'https://kovil.ai/shopify/solutions/beauty-cosmetics-ai-agents' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Beauty & Cosmetics AI Agents for Shopify | Kovil AI',
  description: 'Conversational beauty agents for skin profiles, vision-model shade matching, and full routine bundling.',
  url: 'https://kovil.ai/shopify/solutions/beauty-cosmetics-ai-agents',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#use-cases h2', '#use-cases h3'] },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <BeautyCosmeticsAiPage />
    </>
  )
}
