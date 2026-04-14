import type { Metadata } from 'next'
import AiProjectEstimatorPage from '@/src/pages/AiProjectEstimatorPage'

export const metadata: Metadata = {
  title: 'AI Project Cost Estimator — Free Instant Estimate | Kovil AI',
  description: 'How much does an AI project cost? Answer 5 quick questions and get an instant cost range, timeline, tech stack recommendation, and risk flags — powered by Gemini AI. Free, no sign-up.',
  keywords: ['AI project cost', 'AI project cost estimator', 'how much does AI cost', 'AI development cost', 'AI project budget', 'AI project timeline', 'AI cost calculator', 'Kovil AI'],
  alternates: { canonical: 'https://kovil.ai/tools/ai-project-estimator' },
  openGraph: {
    type: 'website',
    title: 'AI Project Cost Estimator — Free Instant Estimate | Kovil AI',
    description: 'Answer 5 quick questions about your AI project. Get an instant cost range, timeline, tech stack, and engagement model recommendation — powered by Gemini AI.',
    url: 'https://kovil.ai/tools/ai-project-estimator',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Kovil AI — AI Project Cost Estimator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Project Cost Estimator — Free Instant Estimate | Kovil AI',
    description: 'Answer 5 quick questions about your AI project. Get an instant cost range, timeline, and tech stack recommendation — powered by Gemini AI.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AI Project Cost Estimator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://kovil.ai/tools/ai-project-estimator',
  description: 'A free 5-step wizard that generates an instant AI project cost range, timeline, recommended tech stack, engagement model, and risk flags — powered by Gemini AI.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  creator: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
  },
  featureList: [
    'Instant AI project cost range',
    'Timeline estimation',
    'Tech stack recommendation',
    'Engagement model suggestion (managed engineer vs fixed-price project)',
    'Risk flags and mitigation hints',
    'Powered by Google Gemini AI',
    'Free, no sign-up required',
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to estimate your AI project cost with Kovil AI',
  description: 'Use the Kovil AI Project Cost Estimator to get an instant cost range, timeline, and tech stack recommendation for your AI project in under 5 minutes.',
  totalTime: 'PT5M',
  tool: [
    { '@type': 'HowToTool', name: 'AI Project Cost Estimator by Kovil AI' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Describe your project type',
      text: 'Select the type of AI project you want to build — chatbot, RAG system, automation workflow, computer vision app, or custom AI agent.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Set your complexity level',
      text: 'Choose the complexity of your project: simple MVP, moderate (multi-step logic, integrations), or complex (custom models, real-time processing).',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Describe your data situation',
      text: 'Tell the estimator whether your data is ready and clean, needs preparation, or needs to be collected from scratch.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'List your integration requirements',
      text: 'Specify what systems the AI needs to connect to — CRM, ERP, APIs, databases, or no integrations.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Share your timeline and budget',
      text: 'Enter your target delivery timeline and rough budget range so the estimator can calibrate its recommendation.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Receive your instant estimate',
      text: 'Gemini AI analyses your inputs and returns a cost range, timeline, tech stack, engagement model recommendation, and key risk flags — all in seconds.',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does an AI project cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI project costs vary widely depending on complexity, data readiness, and integration requirements. A simple chatbot or automation workflow typically costs $5,000–$25,000. A moderate AI project with integrations and custom logic ranges from $25,000–$80,000. Complex AI systems with custom model training or real-time processing can cost $80,000–$300,000+. Use Kovil AI\'s free estimator to get a tailored range for your specific project.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an AI project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A simple AI MVP can be built in 2–4 weeks. Moderate AI projects typically take 6–12 weeks. Complex AI systems with data pipelines and custom model training can take 3–6 months. Timeline depends heavily on data readiness and integration complexity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the AI Project Cost Estimator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AI Project Cost Estimator is a free 5-step interactive tool by Kovil AI. You answer questions about your project type, complexity, data situation, integrations, and timeline. Gemini AI then generates an instant cost range, recommended tech stack, engagement model (managed engineer vs fixed-price project), and risk flags. The whole process takes 3–5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the AI Project Cost Estimator free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The AI Project Cost Estimator is completely free. No account, no sign-up, and no credit card required. Results are delivered instantly on the page.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after I get my AI project estimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After receiving your estimate, you can download it as a PDF to share with stakeholders, or book a free discovery call with Kovil AI to get a fixed-price quote and discuss your specific project requirements with an AI engineer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I hire an AI engineer or use a fixed-price AI project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you have an ongoing AI roadmap and need dedicated engineering capacity, a Managed AI Engineer (embedded, milestone-gated) is the better fit. If you have a clearly scoped deliverable, an Outcome-Based AI Project with a fixed price and defined output is the right approach. The estimator recommends the best model based on your answers.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="pt-20"><AiProjectEstimatorPage /></div>
    </>
  )
}
