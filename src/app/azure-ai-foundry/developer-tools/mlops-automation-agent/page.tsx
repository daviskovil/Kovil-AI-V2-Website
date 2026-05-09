import type { Metadata } from 'next'
import MLOpsAutomationAgentPage from '@/src/pages/azure-ai-foundry/developer-tools/MLOpsAutomationAgentPage'

export const metadata: Metadata = {
  title: 'MLOps Automation Agent — Azure Prompt Flow & Model Monitoring | Kovil AI',
  description: 'AI agent that automates prompt evaluation, deployment gating, and drift detection using Azure Prompt Flow and Azure Machine Learning. Ship AI faster with zero-regression CI/CD.',
  alternates: { canonical: 'https://kovil.ai/azure-ai-foundry/developer-tools/mlops-automation-agent' },
  keywords: ['MLOps automation Azure', 'Azure Prompt Flow MLOps', 'Azure Machine Learning automation', 'AI deployment gating Azure', 'prompt evaluation automation', 'model drift detection Azure', 'Azure AI Foundry MLOps', 'LLMOps Azure', 'AI CI/CD Azure DevOps', 'Azure ML pipeline automation', 'AI model monitoring Azure', 'prompt regression testing', 'Azure AI evaluation automation', 'LLM deployment Azure', 'Kovil AI Azure', 'MLOps developer tools Azure'],
  openGraph: { type: 'website', title: 'MLOps Automation Agent — Azure Prompt Flow | Kovil AI', description: 'Automate prompt evaluation, deployment gating, and drift detection. Azure Prompt Flow + Azure ML. Ship AI faster.', url: 'https://kovil.ai/azure-ai-foundry/developer-tools/mlops-automation-agent', siteName: 'Kovil AI', images: [{ url: 'https://kovil.ai/og-azure-ai-foundry.png', width: 1200, height: 630, alt: 'MLOps Automation Agent — Kovil AI' }] },
  twitter: { card: 'summary_large_image', title: 'MLOps Automation Agent | Kovil AI', description: 'Prompt evaluation, deployment gating, drift detection. Azure Prompt Flow + ML. Zero-regression AI CI/CD.', images: ['https://kovil.ai/og-azure-ai-foundry.png'] },
}

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'MLOps Automation Agent',
  description: 'AI agent that automates the AI development lifecycle — running prompt evaluations in Prompt Flow, gating deployments on quality scores, and detecting model drift in production via Azure Machine Learning.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Azure AI Foundry Implementation',
  url: 'https://kovil.ai/azure-ai-foundry/developer-tools/mlops-automation-agent',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What evaluation metrics does the agent use for deployment gating?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt Flow evaluation runs measure: groundedness (retrieved context usage), coherence (logical consistency), fluency (language quality), relevance (alignment to user intent), and custom task-specific metrics defined per agent type. Deployment is blocked if any metric falls below a configurable threshold — typically set to 85% of the baseline scores established during the initial evaluation run.' } },
    { '@type': 'Question', name: 'How does drift detection work in production?', acceptedAnswer: { '@type': 'Answer', text: 'Azure Machine Learning monitors production inference telemetry continuously — comparing live output distributions against the baseline established at deployment. Statistical drift signals (KL divergence on output embeddings, shift in response length distributions, change in confidence score distributions) trigger automated alerts. When drift exceeds threshold, the agent raises a re-evaluation run in Prompt Flow and notifies the engineering team before performance degrades visibly.' } },
    { '@type': 'Question', name: 'How does the agent integrate with Azure DevOps pipelines?', acceptedAnswer: { '@type': 'Answer', text: 'The MLOps agent is implemented as an Azure DevOps pipeline extension. On each commit to a prompt configuration or model version branch, the pipeline triggers a Prompt Flow evaluation run automatically. The agent posts evaluation results as a PR check — passing scores allow merge, failing scores block merge and post a detailed quality report. No manual evaluation steps are required in the standard path.' } },
    { '@type': 'Question', name: 'Can this work with models deployed in Azure AI Foundry model catalog?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The automation agent manages the full lifecycle for Azure OpenAI deployments, Azure AI Foundry model catalog deployments (Llama, Mistral, Phi, and others), and custom fine-tuned models registered in Azure Machine Learning. Evaluation configurations are model-agnostic — the same quality gate logic applies regardless of the underlying model provider.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Azure AI Foundry', item: 'https://kovil.ai/azure-ai-foundry' },
    { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: 'https://kovil.ai/azure-ai-foundry/developer-tools' },
    { '@type': 'ListItem', position: 4, name: 'MLOps Automation Agent', item: 'https://kovil.ai/azure-ai-foundry/developer-tools/mlops-automation-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MLOpsAutomationAgentPage />
    </>
  )
}
