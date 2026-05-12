import type { Metadata } from 'next'
import GeminiIntegrationPage from '@/src/pages/vertex-ai/services/GeminiIntegrationPage'

export const metadata: Metadata = {
  title: 'Gemini Integration & Fine-Tuning | Kovil AI Google Cloud Vertex AI',
  description: 'Production Gemini 2.0 API integrations on Vertex AI. Grounding with Google Search and enterprise data, function calling, fine-tuning on proprietary data, and token cost optimisation.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/services/gemini-integration' },
  keywords: [
    'Gemini integration consulting',
    'Vertex AI Gemini 2.0 integration',
    'Gemini API production deployment',
    'Gemini grounding with Google Search',
    'Vertex AI Search grounding',
    'Gemini fine-tuning',
    'Gemini function calling',
    'Gemini Flash vs Pro',
    'Vertex AI token cost optimisation',
    'Gemini enterprise integration',
    'Google Cloud AI integration',
    'Gemini API consultant',
    'Vertex AI Gemini developer',
    'Gemini model integration services',
    'Gemini grounding API',
    'replace OpenAI with Gemini',
    'Gemini production API',
    'Vertex AI generative AI integration',
  ],
  openGraph: {
    type: 'website',
    title: 'Gemini Integration & Fine-Tuning | Kovil AI Google Cloud Vertex AI',
    description: 'Production Gemini 2.0 API integrations on Vertex AI. Grounding with Google Search and enterprise data, function calling, fine-tuning on proprietary data, and token cost optimisation.',
    url: 'https://kovil.ai/vertex-ai/services/gemini-integration',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Kovil AI Gemini Integration & Fine-Tuning' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemini Integration & Fine-Tuning | Kovil AI Google Cloud Vertex AI',
    description: 'Production Gemini 2.0 API integrations on Vertex AI. Grounding with Google Search and enterprise data, function calling, fine-tuning on proprietary data, and token cost optimisation.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gemini Integration & Fine-Tuning',
  description: 'Production Gemini 2.0 API integrations on Vertex AI. Grounding with Google Search and enterprise data, function calling, fine-tuning on proprietary data, and token cost optimisation.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Vertex AI Gemini Integration',
  url: 'https://kovil.ai/vertex-ai/services/gemini-integration',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Four-week build with production deployment, grounding, and token cost monitoring' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Gemini 2.0 and how does it differ from earlier versions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemini 2.0 is Google\'s most capable family of multimodal AI models available on Vertex AI. It includes Gemini 2.0 Flash for high-speed, cost-efficient tasks and Gemini 2.0 Pro for complex reasoning and long context. Compared to 1.5, Gemini 2.0 offers improved reasoning, native multimodal output, and better agentic capabilities for tool use and function calling.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is grounding and why does it matter for Gemini integrations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Grounding connects Gemini\'s responses to real, verifiable sources — either live Google Search results or your enterprise documents via Vertex AI Search. Without grounding, Gemini generates responses from model weights alone, which can produce hallucinations. Grounded responses include citations and are traceable back to authoritative sources, making them suitable for enterprise use.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should we fine-tune Gemini versus using prompt engineering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fine-tuning is appropriate when you have a large, domain-specific dataset and need consistent style, terminology, or response format that prompt engineering alone cannot reliably achieve. For most use cases, sophisticated prompt engineering with grounding delivers better ROI than fine-tuning. We assess your requirements and recommend the most cost-effective approach during the integration architecture phase.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Gemini Flash and Gemini Pro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemini Flash is optimised for speed and cost — ideal for high-volume, latency-sensitive tasks like classification, summarisation, and simple Q&A. Gemini Pro offers stronger reasoning, larger context windows, and better performance on complex, multi-step tasks but at higher cost per token. We benchmark both against your specific workload before recommending a model tier.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you reduce Gemini API token costs in production?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We apply several techniques: prompt compression to remove redundant tokens, context caching to avoid re-sending repeated system prompts, model tier right-sizing (Flash instead of Pro where quality is equivalent), output length controls, and caching frequent query-response pairs. Across production deployments, these techniques typically reduce token spend by 30–60%.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/vertex-ai/services' },
    { '@type': 'ListItem', position: 4, name: 'Gemini Integration & Fine-Tuning', item: 'https://kovil.ai/vertex-ai/services/gemini-integration' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GeminiIntegrationPage />
    </>
  )
}
