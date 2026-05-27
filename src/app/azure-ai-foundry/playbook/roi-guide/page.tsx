import type { Metadata } from 'next'
import AzureROIGuidePage from '@/src/pages/azure-ai-foundry/playbook/AzureROIGuidePage'

export const metadata: Metadata = {
  title: 'Azure AI Foundry ROI Guide: How to Build a Business Case That Holds Up | Kovil AI',
  description: 'How to build a defensible Azure AI ROI model. The 4 ROI levers, calculation methodology with worked example, realistic timelines, failure modes, and executive buy-in template.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/playbook/roi-guide' },
  keywords: ['Azure AI ROI', 'AI business case', 'Azure AI Foundry ROI', 'AI ROI calculation', 'enterprise AI ROI', 'Azure AI payback period', 'AI automation ROI', 'Azure AI business case template', 'AI ROI methodology', 'Azure OpenAI ROI', 'AI agent ROI', 'AI investment return', 'Azure AI value', 'AI cost benefit analysis', 'Kovil AI Azure playbook', 'enterprise AI business case'],
  openGraph: { type: 'article', title: 'Azure AI Foundry ROI Guide | Kovil AI', description: 'Build a defensible AI business case: 4 ROI levers, worked example with a 20-person ops team, realistic timelines, and executive buy-in template.', url: 'https://kovil.ai/azure-ai-foundry/playbook/roi-guide', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Azure AI Foundry ROI Guide — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Azure AI Foundry ROI Guide | Kovil AI', description: '4 ROI levers, worked ROI example, realistic timelines, and what makes AI ROI calculations fail.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  datePublished: '2026-05-27',
  dateModified: '2026-05-27',
  headline: 'The Azure AI Foundry ROI Guide: How to Build a Business Case That Actually Holds Up',
  description: 'A practitioner\'s guide to building defensible Azure AI ROI models — covering the four value levers, calculation methodology with a worked example, realistic timelines, common failure modes, and executive presentation structure.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/azure-ai-foundry/playbook/roi-guide',
  image: 'https://kovil.ai/og-azure-ai-foundry.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/azure-ai-foundry/playbook/roi-guide' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is a typical ROI for an Azure AI Foundry deployment?', acceptedAnswer: { '@type': 'Answer', text: 'For mid-size deployments, 3-year ROI typically ranges from 3–8x on conservative estimates. The wide range reflects variation in process characteristics: deployments targeting high-volume repetitive processes with good baseline data tend toward the higher end. Conservative scenarios (smaller teams, moderate volume, phased rollout) typically see 3–4x. Best-case scenarios (high-volume repetitive process, strong data quality, quick scale-up) can reach 8–12x. The key driver is usually the ratio of annual gross benefit to implementation cost — and annual gross benefit is dominated by whichever ROI lever (labour, errors, throughput, revenue) is most significant for the specific process.' } },
    { '@type': 'Question', name: 'How long until an Azure AI deployment breaks even?', acceptedAnswer: { '@type': 'Answer', text: 'Most mid-size Azure AI deployments reach break-even at around month 4–10 after go-live. The pilot and baseline measurement period (months 1–2) is pre-ROI. The first ROI-positive milestone typically occurs in months 3–6 as freed labour capacity compounds and error reduction accumulates. Faster break-even timelines are achievable when the primary value driver is error reduction (which starts delivering value on day one of production) rather than throughput increase or revenue impact (which require additional time to manifest). Break-even beyond 12 months usually indicates an over-scoped initial implementation or underestimated change management cost.' } },
    { '@type': 'Question', name: 'How do I measure automation rate accurately?', acceptedAnswer: { '@type': 'Answer', text: 'Automation rate is the percentage of process steps or tasks handled by the AI without requiring human intervention. To measure it accurately: (1) Define exactly what "automated" means for your process — does reviewing an AI draft count? Does approving an AI recommendation count? (2) Log every interaction with the agent and tag outcomes: fully automated, human-reviewed, escalated, or rejected. (3) Calculate the true labour saving as hours saved per completed item, not percentage of items touched. An item that takes 2 minutes of human review instead of 20 has an 80% time saving but a 0% automation rate by a strict definition — use the time metric, not the task count metric.' } },
    { '@type': 'Question', name: 'What is a good ROI for an AI pilot?', acceptedAnswer: { '@type': 'Answer', text: 'A good AI pilot ROI is one that is positive at 50% of your projected automation rate — meaning the business case holds even if the agent performs at half the expected capability. Pilots specifically should not be evaluated on ROI in isolation; their purpose is to validate assumptions, establish measurement baselines, and identify gaps in the production design. A pilot that delivers 60% of projected automation rate but identifies three critical data quality issues that would have caused a production failure is highly valuable — even if its standalone ROI looks modest. Expect pilot ROI to be 30–60% of full-scale deployment ROI once the measurement methodology is established.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/azure-ai-foundry/playbook' },
    { '@type': 'ListItem', position: 4, name: 'Azure AI Foundry ROI Guide', item: 'https://kovil.ai/azure-ai-foundry/playbook/roi-guide' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AzureROIGuidePage />
    </>
  )
}
