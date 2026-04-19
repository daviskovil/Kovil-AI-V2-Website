import type { Metadata } from 'next'
import WorkflowLibraryPage from '@/src/pages/ai-workflow-automation-library/WorkflowLibraryPage'

export const metadata: Metadata = {
  title: 'AI Workflow Automation Library — 24 Real Builds | Kovil AI',
  description:
    'Browse 24 real AI workflow automations built and deployed by Kovil AI engineers across 8 industries: marketing, fintech, healthtech, SaaS, e-commerce, legal, proptech, and logistics.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library' },
  keywords: [
    'AI workflow automation',
    'AI automation library',
    'AI workflow examples',
    'n8n workflow automation',
    'GPT-4o automation examples',
    'marketing agency AI automation',
    'fintech AI workflow',
    'healthcare AI automation',
    'SaaS AI workflow',
    'AI process automation',
    'LangChain workflow examples',
    'AI agent automation',
  ],
  openGraph: {
    type: 'website',
    title: 'AI Workflow Automation Library — 24 Real Builds | Kovil AI',
    description:
      'Browse 24 real AI workflow automations built and deployed by Kovil AI engineers across 8 industries.',
    url: 'https://kovil.ai/ai-workflow-automation-library',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'AI Workflow Automation Library — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation Library — 24 Real Builds | Kovil AI',
    description: 'Browse 24 real AI workflow automations across 8 industries. See the stack, steal the workflow, or have us build it.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'AI Workflow Automation Library',
  description:
    'A library of 24 real-world AI workflow automations built and deployed by Kovil AI engineers across 8 industries.',
  url: 'https://kovil.ai/ai-workflow-automation-library',
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'AI Workflow Automation Examples',
  description: '24 real AI workflow automations across 8 industries built by Kovil AI engineers.',
  numberOfItems: 24,
  itemListElement: [
    { '@type': 'ListItem', position: 1,  name: 'Campaign Performance Reporting Automation', description: 'Pull data from Meta, Google, LinkedIn → GPT-4o analysis → auto-build slide deck → email client + Slack team' },
    { '@type': 'ListItem', position: 2,  name: 'AI Creative Brief Generator', description: 'Client fills Typeform → pull brand guidelines → GPT-4o writes structured brief → approval gate → creative team' },
    { '@type': 'ListItem', position: 3,  name: 'New Client Onboarding Automation', description: 'Deal marked Won in HubSpot → parallel: contract + invoice + onboarding → auto-create Notion workspace + Slack channel' },
    { '@type': 'ListItem', position: 4,  name: 'AI Loan Document Classifier', description: 'PDF uploaded → GPT-4o Vision extracts document type + fields → classifier routes to checklist → flags missing docs' },
    { '@type': 'ListItem', position: 5,  name: 'Automated Underwriting Workflow', description: 'New loan application → credit bureau data → AI risk scoring → decision engine → auto-generate decision letter' },
    { '@type': 'ListItem', position: 6,  name: 'Deal Processing Automation', description: 'New deal enters pipeline → validate policy rules → AI extracts deal terms → auto-populate deal sheet → notify team' },
    { '@type': 'ListItem', position: 7,  name: 'AI Patient Intake Automation', description: 'Patient submits intake form → Voice AI collects missing info → AI extracts structured data → push to 3 EHR systems' },
    { '@type': 'ListItem', position: 8,  name: 'Appointment No-Show Prevention', description: 'Appointment booked → AI personalised reminders → no response: auto-reschedule prompt → calendar update' },
    { '@type': 'ListItem', position: 9,  name: 'Clinical Notes Summariser', description: 'Doctor completes consultation → Whisper transcribes → GPT-4o structures into SOAP note → human review → EHR push' },
    { '@type': 'ListItem', position: 10, name: 'Manual Approval Workflow Automation', description: 'Request submitted → AI classifies type → routes to correct approver → auto-drafts decision → sends → logs to Airtable' },
    { '@type': 'ListItem', position: 11, name: 'AI Customer Support Deflection', description: 'Support ticket → RAG pipeline searches knowledge base → GPT-4o drafts response → confidence check → send/queue' },
    { '@type': 'ListItem', position: 12, name: 'Churn Risk Detection & Outreach', description: 'Daily usage data pull → AI scores churn risk per account → high-risk flagged → personalised outreach email drafted' },
    { '@type': 'ListItem', position: 13, name: 'AI Customer Service Chatbot', description: 'Customer message → intent classifier → RAG searches product/policy docs → GPT-4o response → sentiment check' },
    { '@type': 'ListItem', position: 14, name: 'Dynamic Inventory Alerting', description: 'Hourly stock check → AI forecasts demand → low stock predicted → auto-raise PO draft → notify procurement' },
    { '@type': 'ListItem', position: 15, name: 'Abandoned Cart Recovery Agent', description: 'Cart abandoned → AI generates personalised recovery email → no purchase: SMS follow-up with discount' },
    { '@type': 'ListItem', position: 16, name: 'Contract Review Automation', description: 'Contract uploaded → GPT-4o Vision extracts clauses → AI risk classifier → flags non-standard terms → redline summary' },
    { '@type': 'ListItem', position: 17, name: 'Client Matter Intake Automation', description: 'New client enquiry → AI extracts case details → conflict check → matter opened → engagement letter drafted → DocuSign' },
    { '@type': 'ListItem', position: 18, name: 'Deposition Summary AI', description: 'Deposition transcript uploaded → Whisper transcribes → GPT-4o extracts key admissions + contradictions → structured summary' },
    { '@type': 'ListItem', position: 19, name: 'AI Lead Qualification & Routing', description: 'New enquiry → AI scores lead quality → classifies property preference → routes to specialist agent → property matches' },
    { '@type': 'ListItem', position: 20, name: 'Tenant Screening Automation', description: 'Application submitted → AI verifies employment + income → credit check → reference check automated → risk score → decision' },
    { '@type': 'ListItem', position: 21, name: 'Maintenance Request Triage', description: 'Tenant submits request → AI classifies urgency + trade → routes to contractor → auto-schedules → tracks completion' },
    { '@type': 'ListItem', position: 22, name: 'AI Shipment Exception Handler', description: 'Shipment delay detected → AI classifies exception → notifies customer → raises carrier claim if needed → updates OMS' },
    { '@type': 'ListItem', position: 23, name: 'Freight Quote Automation', description: 'Quote request → AI extracts shipment details → query 5 carrier APIs in parallel → AI ranks by cost/speed → sends in 2 min' },
    { '@type': 'ListItem', position: 24, name: 'Driver Route Optimisation Alerts', description: 'Daily: pull orders → AI optimises delivery routes → assign drivers → push route to driver app → ETA updates to customers' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI workflow automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI workflow automation is a connected sequence of steps that uses AI models (like GPT-4o, Whisper, or LangChain) alongside automation tools (like n8n, Make, or Zapier) to complete business processes without human intervention. Examples include auto-generating reports, classifying documents, routing support tickets, and sending personalised outreach.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take Kovil AI to build a workflow automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Simple automations typically take 1–2 weeks. More complex automations involving multiple AI models, parallel processing, or EHR/CRM integrations take 3–6 weeks. All builds are delivered as fixed-price sprints with clear milestones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools does Kovil AI use to build AI automations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kovil AI engineers build with n8n, Make, LangChain, CrewAI, LangGraph, and AutoGen for orchestration. For AI models, they use GPT-4o, OpenAI Whisper, and custom fine-tuned models. Integrations include HubSpot, Salesforce, Stripe, DocuSign, Twilio, Zendesk, and major healthcare EHR systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I see these automations before hiring Kovil AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — this library documents 24 real workflow automations that Kovil AI has built and deployed for clients across 8 industries. Each workflow shows the node diagram, tech stack, step-by-step breakdown, and time saved.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Automation Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20">
        <WorkflowLibraryPage />
      </div>
    </>
  )
}
