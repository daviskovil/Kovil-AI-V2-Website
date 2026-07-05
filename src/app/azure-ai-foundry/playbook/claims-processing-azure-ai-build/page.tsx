import type { Metadata } from 'next'
import ClaimsProcessingAzureBuildPage from '@/src/pages/azure-ai-foundry/playbook/ClaimsProcessingAzureBuildPage'

export const metadata: Metadata = {
  title: 'Claims Processing AI Agent on Azure — Insurance Case Study',
  description: 'How Kovil AI built an insurance claims processing agent on Azure AI Foundry. Week-by-week build breakdown, architecture decisions, results (74% faster processing), and lessons learned.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/playbook/claims-processing-azure-ai-build' },
  keywords: ['insurance claims AI Azure', 'claims processing automation AI', 'Azure AI insurance', 'insurance AI agent case study', 'claims automation Azure OpenAI', 'Azure AI Foundry insurance', 'claims processing agent build', 'insurance document AI Azure', 'AI claims adjudication Azure', 'Azure Document Intelligence insurance', 'insurance AI case study', 'claims processing 74% faster', 'insurance automation Azure', 'AI claims review Azure', 'Kovil AI Azure playbook', 'claims AI build guide'],
  openGraph: { type: 'article', title: 'Claims Processing AI on Azure — Build Case Study | Kovil AI', description: 'Week-by-week: how we built an insurance claims AI agent on Azure. 74% faster processing. Full architecture and lessons learned.', url: 'https://kovil.ai/azure-ai-foundry/playbook/claims-processing-azure-ai-build', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'Claims Processing Azure AI Build — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'Claims Processing AI on Azure | Kovil AI', description: 'Week-by-week build. Insurance claims AI on Azure AI Foundry. 74% faster processing. Lessons learned.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'How We Built an Insurance Claims Processing AI Agent on Azure — Week-by-Week',
  description: 'A detailed case study of building an insurance claims processing AI agent on Azure AI Foundry — architecture decisions, week-by-week build, production results, and lessons learned.',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
  url: 'https://kovil.ai/azure-ai-foundry/playbook/claims-processing-azure-ai-build',
  image: 'https://kovil.ai/og-azure-ai-foundry.png',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/azure-ai-foundry/playbook/claims-processing-azure-ai-build' },
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How did you handle HIPAA compliance in the claims processing agent?', acceptedAnswer: { '@type': 'Answer', text: 'All PHI (Protected Health Information) in claims documents flows exclusively within the client\'s Azure tenant. Azure OpenAI runs under a HIPAA BAA, Azure Document Intelligence processes forms within the same tenant, and Private Endpoints ensure no data traverses the public internet. All audit logs capturing what PHI was processed, by which service, at what time, are written to Azure Monitor with immutable retention. No PHI is stored in prompt history or model fine-tuning datasets.' } },
    { '@type': 'Question', name: 'What was the biggest technical challenge in the claims build?', acceptedAnswer: { '@type': 'Answer', text: 'The most challenging aspect was handling the variability in claims document formats. The insurer received claims from 340+ different provider templates — each with different field layouts, terminology, and document structures. We solved this by training Azure Document Intelligence on a representative sample of 2,000 historical documents across 40 template types, then using GPT-4o to handle the long tail of unseen templates through few-shot prompting with extracted field examples.' } },
    { '@type': 'Question', name: 'How did you validate AI adjudication accuracy before going live?', acceptedAnswer: { '@type': 'Answer', text: 'We ran a 6-week parallel operation period where the AI agent processed all incoming claims simultaneously with the existing human review process. Adjudication decisions were compared at a field level — agreement rate, disagreement categorisation (AI correct vs human correct), and edge case identification. We required 94% agreement on coverage decisions and 99% agreement on payment amount calculations before enabling autonomous processing. The parallel operation period identified 12 rule gaps that were fixed before go-live.' } },
    { '@type': 'Question', name: 'What does the human-in-the-loop process look like for complex claims?', acceptedAnswer: { '@type': 'Answer', text: 'The agent classifies each claim into three routing tiers: Tier 1 (straightforward, high-confidence — processed autonomously, 67% of volume), Tier 2 (moderate complexity or borderline policy match — AI produces draft decision with supporting evidence for human review, 28% of volume), and Tier 3 (novel situation, litigation risk, or confidence below threshold — routed directly to senior adjudicator with full AI analysis as background, 5% of volume). The tiering thresholds are configurable and have been tuned quarterly based on production outcomes.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/azure-ai-foundry/playbook' },
    { '@type': 'ListItem', position: 4, name: 'Claims Processing Azure AI Build', item: 'https://kovil.ai/azure-ai-foundry/playbook/claims-processing-azure-ai-build' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ClaimsProcessingAzureBuildPage />
    </>
  )
}
