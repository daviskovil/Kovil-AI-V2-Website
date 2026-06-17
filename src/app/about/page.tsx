import type { Metadata } from 'next'
import AboutPage from '@/src/pages/AboutPage'

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kovil AI',
  url: 'https://kovil.ai',
  logo: 'https://kovil.ai/kovil-logo-symbol-orange.png',
  description: 'Kovil AI is a managed AI engineering company based in Garden City, New York. We embed vetted AI engineers into enterprise teams and own the delivery.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '600 Old Country Road, Suite 535',
    addressLocality: 'Garden City',
    addressRegion: 'NY',
    postalCode: '11530',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/company/kovil-ai',
    'https://www.crunchbase.com/organization/kovil-ai',
    'https://clutch.co/profile/kovil-ai',
  ],
  foundingDate: '2023',
  areaServed: { '@type': 'Country', name: 'United States' },
  knowsAbout: ['AI Engineering', 'LLM Development', 'AI Agents', 'RAG Pipelines', 'Managed AI Engineering', 'Salesforce Agentforce', 'Azure AI Foundry', 'Google Vertex AI'],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://kovil.ai/about' },
  ],
}

export const metadata: Metadata = {
  title: 'About Kovil AI — Managed AI Engineering Company, New York',
  description: 'Kovil AI is a managed AI engineering company based in Garden City, New York. We embed vetted AI engineers into your team and own the delivery.',
  alternates: { canonical: 'https://kovil.ai/about' },
  openGraph: {
    type: 'website',
    title: 'About Kovil AI — Managed AI Engineering Company, New York',
    description: 'Kovil AI embeds vetted Tier-1 AI engineers into your team and owns the delivery. Based in Garden City, New York.',
    url: 'https://kovil.ai/about',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'About Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Kovil AI — Managed AI Engineering Company, New York',
    description: 'Kovil AI embeds vetted Tier-1 AI engineers into your team and owns the delivery. Based in Garden City, New York.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><AboutPage /></div>
    </>
  )
}
