import type { Metadata } from 'next'
import AzurePricingGuidePage from '@/src/pages/azure-ai-foundry/playbook/AzurePricingGuidePage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry Pricing Guide 2026: What Enterprise AI Actually Costs | Kovil AI',
  description: 'Complete Azure AI Foundry pricing breakdown for 2026. Token costs, AI Search tiers, Copilot Studio licensing, hidden costs, and ROI framework. Real numbers from production deployments.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/playbook/pricing-guide-2026' },
  keywords: ['Azure AI Foundry pricing', 'Azure OpenAI cost 2026', 'Azure AI agent cost', 'Azure AI Search pricing', 'Copilot Studio pricing', 'Azure AI token cost', 'enterprise AI cost estimate', 'Azure AI Foundry budget', 'GPT-4o cost Azure', 'Azure AI ROI calculation', 'Azure AI pricing breakdown', 'Azure AI deployment cost', 'Azure AI Foundry pricing guide', 'AI agent monthly cost', 'Kovil AI Azure playbook', 'Azure AI infrastructure cost'],
  openGraph: { type: 'article', title: 'Azure AI Foundry Pricing Guide 2026 | Kovil AI', description: 'Real numbers: token costs, AI Search tiers, hidden costs, and ROI framework for Azure AI Foundry deployments in 2026.', url: 'https://kovil.ai/azure-ai-foundry/playbook/pricing-guide-2026', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry Pricing Guide 2026 — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry Pricing Guide 2026 | Kovil AI', description: 'Real costs for production Azure AI deployments: tokens, AI Search, hidden costs, ROI calculation.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  datePublished: '2026-05-27',
  dateModified: '2026-05-27',
  headline: 'Azure AI Foundry Pricing Guide 2026: What Enterprise AI Actually Costs',
  description: 'Complete Azure AI Foundry pricing breakdown — covering token costs, AI Search tiers, Copilot Studio licensing, hidden costs, and a framework for calculating ROI on enterprise AI deployments.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/azure-ai-foundry/playbook/pricing-guide-2026',
  image: 'https://kovil.ai/og-azure-ai-foundry.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/azure-ai-foundry/playbook/pricing-guide-2026' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Azure AI Foundry free?', acceptedAnswer: { '@type': 'Answer', text: 'Azure AI Foundry itself is free — there is no platform fee. You pay for the underlying services it orchestrates: Azure OpenAI (per token), Azure AI Search (per month by tier), Azure Machine Learning compute (per vCPU-hour if used), and Azure infrastructure (storage, networking, API Management). A small pilot using GPT-4o-mini with Azure AI Search S1 typically costs $500–$1,500/month in total.' } },
    { '@type': 'Question', name: 'What is the cheapest production-ready Azure AI Foundry setup?', acceptedAnswer: { '@type': 'Answer', text: 'The minimum production configuration is: Azure OpenAI with GPT-4o-mini (approximately $0.15/$0.60 per million input/output tokens), Azure AI Search Standard S1 ($245/month), Azure Container Apps or Functions for hosting (typically $20–$80/month), and Azure Monitor for basic observability ($30–$50/month). Total: approximately $400–$600/month before token consumption. This covers a single agent with low-to-medium query volume.' } },
    { '@type': 'Question', name: 'How do I estimate my Azure OpenAI token costs?', acceptedAnswer: { '@type': 'Answer', text: 'The formula is: Monthly token cost = (Monthly query volume × average input tokens per query × input price per million) + (Monthly query volume × average output tokens per query × output price per million). For GPT-4o at $2.50/$10.00 per million tokens: 10,000 queries × 800 average input tokens × $2.50/1M = $20/month in input costs. 10,000 queries × 300 average output tokens × $10.00/1M = $30/month in output costs. Total: $50/month for 10,000 queries. Add RAG retrieved context (typically 1,000–3,000 additional input tokens per query) for a more accurate estimate.' } },
    { '@type': 'Question', name: 'What is the ROI timeline for Azure AI Foundry?', acceptedAnswer: { '@type': 'Answer', text: 'For most mid-size deployments, the ROI break-even point occurs in months 4–10. Month 1–2 are the pilot and measurement baseline period. Month 3–6 typically see first ROI positive, with accumulated net benefit exceeding accumulated cost. Months 6–18 show compounding returns as scope expands. 3-year ROI on mid-size deployments typically ranges from 3–8x on conservative estimates, and higher when multiple ROI levers (labour reduction, error elimination, throughput increase) are activated simultaneously.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/azure-ai-foundry/playbook' },
    { '@type': 'ListItem', position: 4, name: 'Azure AI Foundry Pricing Guide 2026', item: 'https://kovil.ai/azure-ai-foundry/playbook/pricing-guide-2026' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzurePricingGuidePage />
    </>
  )
}
