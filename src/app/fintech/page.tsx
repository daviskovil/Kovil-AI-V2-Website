import type { Metadata } from 'next'
import FinTechPage from '@/src/pages/fintech/FinTechPage'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Engineering for FinTech & Financial Services',
  description: 'Kovil AI embeds vetted AI engineers into FinTech companies — building compliant fraud detection, KYC/AML automation, underwriting AI, and financial workflow systems.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'AI Engineering for Financial Services',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/fintech',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'FinTech AI Solutions',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real-Time Fraud Detection', description: 'ML-powered fraud detection with sub-80ms latency, XGBoost scoring, and PCI-DSS compliant audit logging.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'KYC/AML Identity Verification', description: 'Automated identity verification with GPT-4o Vision, watchlist screening, and risk scoring.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Loan Document Classifier', description: 'Automate loan document intake — classify, extract, validate, and notify underwriters in under 60 seconds.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automated Underwriting', description: 'AI-assisted underwriting workflow — data aggregation, risk scoring, and compliance-ready decision packages.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Does Kovil AI build compliance-ready AI for financial services?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All AI systems we build for FinTech include compliance-first design — audit logging, explainability layers (SHAP), regulatory documentation, and PCI-DSS or SOC 2 alignment depending on the use case.' } },
    { '@type': 'Question', name: 'How quickly can Kovil AI deliver a fraud detection system?', acceptedAnswer: { '@type': 'Answer', text: 'A production-grade ML fraud detection pipeline typically takes 4–8 weeks to build, test, and deploy, depending on data availability and integration complexity. We start with a scoping call to define the exact timeline.' } },
    { '@type': 'Question', name: 'Can you integrate AI into our existing FinTech stack?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build AI layers that integrate with your existing CRM, LOS, data warehouse, or banking platform. Common integrations include Salesforce, Dynamics 365, AWS, Azure, and Databricks.' } },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'FinTech AI Engineering', item: 'https://kovil.ai/fintech' },
  ],
}

export const metadata: Metadata = {
  title: 'AI Engineering for FinTech & Financial Services | Kovil AI',
  description: 'Kovil AI embeds vetted AI engineers into FinTech companies. Build compliant fraud detection, KYC automation, underwriting AI, and financial workflow systems — 48hr match, 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/fintech' },
  openGraph: {
    type: 'website',
    title: 'AI Engineering for FinTech & Financial Services | Kovil AI',
    description: 'Production-grade AI for FinTech — fraud detection, KYC/AML, underwriting automation. 48hr engineer match, compliance-ready builds.',
    url: 'https://kovil.ai/fintech',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'AI Engineering for FinTech — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineering for FinTech | Kovil AI',
    description: 'Fraud detection, KYC automation, underwriting AI — production-grade FinTech AI engineering. 48hr match, risk-free trial.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><FinTechPage /></div>
    </>
  )
}
