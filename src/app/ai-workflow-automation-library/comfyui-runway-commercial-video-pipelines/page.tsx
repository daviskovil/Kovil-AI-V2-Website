import type { Metadata } from 'next'
import VideosPipelinesPage from '@/src/pages/ai-workflow-automation-library/VideosPipelinesPage'

export const metadata: Metadata = {
  title: 'ComfyUI & Runway Video Pipelines — AI Workflow',
  description: 'See how Kovil AI builds generative commercial video pipelines: creative brief → ComfyUI generates 50 product photos in 20 min → Runway Gen-3 motion ads → Google Veo 60-sec commercials → ElevenLabs multilingual dub + lip-sync → Frame.io delivery.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/comfyui-runway-commercial-video-pipelines' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'ComfyUI & Runway Commercial Video Pipelines | Kovil AI',
    description: 'Creative brief → ComfyUI product photography (50 variants, 20 min) → Runway motion ads → ElevenLabs multilingual dub → lip-sync → Frame.io delivery. Days to hours.',
    url: 'https://kovil.ai/ai-workflow-automation-library/comfyui-runway-commercial-video-pipelines',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ComfyUI & Runway Commercial Video Pipelines | Kovil AI',
    description: 'ComfyUI product photography + Runway motion + Google Veo commercials + ElevenLabs multilingual dub. Production-quality video in hours.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'ComfyUI & Runway Commercial Video Pipelines',
  description: 'A generative video production pipeline that uses ComfyUI for product photography, Runway Gen-3 for short-form motion ads, Google Veo for 60-second commercials, and ElevenLabs for multilingual voiceover and lip-sync — delivering production-ready assets to Frame.io in hours.',
  totalTime: 'PT4H',
  dateModified: '2025-04-21',
  tool: ['ComfyUI', 'Runway Gen-3', 'Google Veo', 'ElevenLabs', 'n8n', 'Frame.io'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Creative brief submission', text: 'Creative brief submitted with product images, mood board, target audience, brand color palette, and intended placement formats (16:9, 9:16, 1:1). GPT-4o validates completeness before proceeding.' },
    { '@type': 'HowToStep', position: 2, name: 'ComfyUI product photography', text: 'ComfyUI custom workflow generates 50 product photography variants in approximately 20 minutes. CLIP similarity scoring selects the best 10 against the mood board reference images.' },
    { '@type': 'HowToStep', position: 3, name: 'Runway Gen-3 motion generation', text: 'Top 3 hero shots sent to Runway Gen-3 Alpha API. GPT-4o generates motion prompts per image: product reveal, lifestyle b-roll, and 15-second ad cuts. Clips assembled in Frame.io.' },
    { '@type': 'HowToStep', position: 4, name: 'Google Veo 60-second commercials', text: 'For longer formats, GPT-4o converts the brief into a storyboard with 8-12 scene descriptions. Google Veo generates each scene. n8n assembles scenes into the complete commercial cut.' },
    { '@type': 'HowToStep', position: 5, name: 'ElevenLabs voiceover and lip-sync', text: 'GPT-4o generates voiceover script. ElevenLabs produces branded voice audio in target language. Lip-sync layer applied to on-camera talent footage, enabling multilingual production from one shoot.' },
    { '@type': 'HowToStep', position: 6, name: 'Frame.io structured delivery', text: 'Final assets uploaded to Frame.io with folder hierarchy by format and language. Each asset tagged with metadata. Client review link posted to Slack with format checklist.' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'ComfyUI & Runway Commercial Video Pipelines', item: 'https://kovil.ai/ai-workflow-automation-library/comfyui-runway-commercial-video-pipelines' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How realistic is ComfyUI-generated product photography?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ComfyUI with the right model stack (FLUX or SDXL with product-specific LoRA fine-tuning) produces product photography that is indistinguishable from a professional studio shoot in social media and digital ad contexts. The workflow generates 50 variants in approximately 20 minutes — a task that would take a professional photographer and post-production team 2–3 days and several thousand dollars.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Runway and Google Veo produce broadcast-quality video?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Runway Gen-3 Alpha and Google Veo 2 produce video at sufficient quality for digital advertising, social media, and streaming platforms. For broadcast television, the output typically requires compositing with traditional footage. Most New York agency use cases — Meta Ads, YouTube pre-roll, LinkedIn video, and OTT advertising — are fully served by generative video without traditional production.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the multilingual lip-sync work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "ElevenLabs generates the voiceover in the target language. A lip-sync model (currently Sync.so or similar) processes the original on-camera footage and adjusts the talent's lip movements to match the new audio track. The result is a version of the video where the talent appears to be speaking the target language natively — without a separate shoot.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost saving compared to traditional commercial production in NYC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 60-second commercial in New York City typically costs $50,000–$250,000 for location, crew, talent, and post-production. The generative pipeline produces comparable digital advertising output for a fraction of this — primarily the Kovil AI build cost and per-use API fees. The economic disruption is most pronounced for product advertising, lifestyle imagery, and multilingual campaign variants.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ComfyUI & Runway Commercial Video Pipelines',
  description: 'Generative commercial video production pipeline using ComfyUI, Runway Gen-3, Google Veo, and ElevenLabs — delivering production-quality assets in hours instead of days.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'AI Workflow Automation',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/ai-workflow-automation-library/comfyui-runway-commercial-video-pipelines',
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
        <VideosPipelinesPage />
      </div>
    </>
  )
}
