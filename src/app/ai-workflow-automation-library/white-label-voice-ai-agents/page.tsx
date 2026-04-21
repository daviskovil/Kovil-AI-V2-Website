import type { Metadata } from 'next'
import VoiceAIAgentsPage from '@/src/pages/ai-workflow-automation-library/VoiceAIAgentsPage'

export const metadata: Metadata = {
  title: 'White-Label Voice AI Agents — Twilio + GPT-4o | Kovil AI',
  description: 'See how Kovil AI builds conversational voice AI agents: Twilio inbound → ElevenLabs voice → GPT-4o intent detection → Google Calendar booking → HubSpot CRM. Resellable 24/7 coverage for SMB clients.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/white-label-voice-ai-agents' },
  robots: { index: true, follow: true },
  keywords: [
    'white-label voice AI',
    'Twilio voice AI agent',
    'ElevenLabs voice clone',
    'AI phone agent',
    'GPT-4o voice assistant',
    'voice AI for agencies',
    'conversational AI agent',
  ],
  openGraph: {
    type: 'website',
    title: 'White-Label Voice AI Agents — Twilio + GPT-4o | Kovil AI',
    description: 'Twilio inbound → ElevenLabs voice clone → GPT-4o intent → Google Calendar booking → HubSpot CRM. 24/7 coverage resellable to SMB clients.',
    url: 'https://kovil.ai/ai-workflow-automation-library/white-label-voice-ai-agents',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'White-Label Voice AI Agents — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'White-Label Voice AI Agents — Twilio + GPT-4o | Kovil AI',
    description: 'Twilio inbound → ElevenLabs voice clone → GPT-4o intent → Google Calendar booking → HubSpot CRM. 24/7 coverage resellable to SMB clients.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'White-Label Voice AI Agents with Twilio, ElevenLabs, GPT-4o and HubSpot',
  description: 'An automated voice AI workflow that answers inbound SMB calls via Twilio, uses an ElevenLabs cloned voice for natural conversation, detects intent with GPT-4o, routes to action nodes in n8n, books appointments in Google Calendar, and logs every call to HubSpot CRM.',
  totalTime: 'P6W',
  dateModified: '2025-04-21',
  tool: ['Twilio', 'ElevenLabs', 'GPT-4o', 'n8n', 'Google Calendar', 'HubSpot'],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Twilio inbound call and WebSocket stream',
      text: 'An inbound call arrives on a Twilio phone number assigned to the SMB client. Twilio Media Streams opens a WebSocket connection to the n8n orchestration layer in real time, streaming audio chunks as base64 PCM. Call metadata is captured immediately. Average ring-to-answer: under 1.5 seconds.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'ElevenLabs voice AI handles speech and synthesis',
      text: 'ElevenLabs Conversational AI receives the audio stream and handles speech-to-text transcription, turn-taking detection, and text-to-speech synthesis in a single low-latency loop. The voice model is cloned from a 5-minute reference recording provided by the SMB client. End-to-end voice latency: under 500ms.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'GPT-4o classifies intent on every exchange',
      text: 'GPT-4o processes the real-time transcript and classifies intent on every exchange: booking request, pricing inquiry, complaint, transfer request, or general FAQ. The system prompt is customised per SMB client with their business hours, service menu, pricing, team names, and escalation rules.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Dynamic response and parallel action routing',
      text: 'Based on detected intent, GPT-4o generates the response and triggers the appropriate n8n action node in parallel. FAQ pulls from the knowledge base, booking checks Google Calendar, complaints trigger escalation, and transfer requests connect to a human via Twilio warm transfer. All actions are non-blocking.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Google Calendar books the appointment',
      text: "When a booking intent is confirmed, n8n calls the Google Calendar API to find the next available slot, creates the appointment, adds the caller's details, and sends a confirmation SMS via Twilio. The full booking flow takes under 45 seconds on the call.",
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'HubSpot CRM logs the full call with GPT-4o summary',
      text: 'On call end, n8n logs the full interaction to HubSpot: contact created or updated, call duration, intent classification, actions taken, and a GPT-4o-generated 3-bullet call summary. The SMB client sees all of this in their white-labeled dashboard.',
    },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'White-Label Voice AI Agents', item: 'https://kovil.ai/ai-workflow-automation-library/white-label-voice-ai-agents' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How realistic does the ElevenLabs voice sound on calls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ElevenLabs Conversational AI produces voices that most callers cannot distinguish from a human in standard telephony audio quality. The voice is cloned from a 5–10 minute reference recording provided by the SMB client — typically a staff member or professional voice artist. End-to-end voice latency is under 500ms, which eliminates the robotic pause that signals AI to callers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the voice agent transfer calls to a human?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. When a caller asks to speak to someone, expresses frustration, or triggers a configured escalation keyword, n8n initiates a Twilio warm transfer to a live agent. The human receives a Slack notification with the full call transcript before the transfer connects.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do agencies white-label and resell this to clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kovil AI builds the core infrastructure once. Each SMB client gets their own Twilio number, ElevenLabs voice model, and system prompt customised with their business name, services, and hours. The agency manages all clients from a single n8n instance. Billing is set up as a recurring monthly retainer per client — turning a one-time build into ongoing SaaS revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'What compliance and data handling considerations are there?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Call recordings and transcripts are handled per Twilio's data processing agreements. The workflow can be configured to not record calls where regulations require consent. GPT-4o processes transcripts in real time but does not store them beyond the session unless explicitly logged to HubSpot.",
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'White-Label Voice AI Agents',
  description: 'White-label voice AI agents built with Twilio, ElevenLabs, and GPT-4o — resellable 24/7 phone answering and booking automation for SMB clients.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'AI Workflow Automation',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/ai-workflow-automation-library/white-label-voice-ai-agents',
  category: 'Ad & Marketing',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="pt-20">
        <VoiceAIAgentsPage />
      </div>
    </>
  )
}
