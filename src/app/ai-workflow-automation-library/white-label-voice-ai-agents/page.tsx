import type { Metadata } from 'next'
import VoiceAIAgentsPage from '@/src/pages/ai-workflow-automation-library/VoiceAIAgentsPage'

export const metadata: Metadata = {
  title: 'White-Label Voice AI Agents — Twilio + ElevenLabs + GPT-4o | Kovil AI',
  description: 'See how Kovil AI builds conversational voice AI agents: Twilio inbound → ElevenLabs voice → GPT-4o intent detection → Google Calendar booking → HubSpot CRM. Resellable 24/7 coverage for SMB clients.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/white-label-voice-ai-agents' },
  openGraph: {
    type: 'website',
    title: 'White-Label Voice AI Agents — Twilio + ElevenLabs + GPT-4o | Kovil AI',
    description: 'Twilio inbound → ElevenLabs voice clone → GPT-4o intent detection → Google Calendar booking → HubSpot CRM. 24/7 coverage, resellable to SMB clients.',
    url: 'https://kovil.ai/ai-workflow-automation-library/white-label-voice-ai-agents',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'White-Label Voice AI Agents with Twilio, ElevenLabs, GPT-4o and HubSpot',
  description: 'An automated voice AI workflow that answers inbound SMB calls via Twilio, uses an ElevenLabs cloned voice for natural conversation, detects intent with GPT-4o, routes to action nodes in n8n, books appointments in Google Calendar, and logs every call to HubSpot CRM.',
  totalTime: 'P6W',
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <VoiceAIAgentsPage />
      </div>
    </>
  )
}
