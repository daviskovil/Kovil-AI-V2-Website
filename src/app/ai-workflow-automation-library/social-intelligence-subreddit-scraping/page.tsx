import type { Metadata } from 'next'
import SocialIntelligencePage from '@/src/pages/ai-workflow-automation-library/SocialIntelligencePage'

export const metadata: Metadata = {
  title: 'Social Intelligence & Algorithmic Subreddit Scraping — AI Workflow | Kovil AI',
  description: 'See how Kovil AI builds a social intelligence system: monitor Reddit + LinkedIn + forums every 30 minutes → Claude 3.5 scores relevance on 3 axes → high-signal posts + pre-drafted replies → human approval dashboard → publish. 10x signal-to-noise ratio.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/social-intelligence-subreddit-scraping' },
  openGraph: {
    type: 'website',
    title: 'Social Intelligence & Algorithmic Subreddit Scraping | Kovil AI',
    description: 'Reddit + LinkedIn monitoring every 30 min → Claude 3.5 scores posts on 3 axes → high-signal posts with pre-drafted replies → human approves in 30 seconds → publish. 10x signal-to-noise.',
    url: 'https://kovil.ai/ai-workflow-automation-library/social-intelligence-subreddit-scraping',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Intelligence & Algorithmic Subreddit Scraping | Kovil AI',
    description: 'Reddit/LinkedIn monitoring + Claude 3.5 scoring + human-approved reply drafts. 10x signal-to-noise ratio for community management.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Social Intelligence & Algorithmic Subreddit Scraping',
  description: 'An automated community intelligence system that monitors Reddit, LinkedIn, and niche forums every 30 minutes, uses Claude 3.5 Sonnet to score posts on 3 axes (ICP relevance, engagement potential, purchase intent), and routes high-signal posts with pre-drafted replies to a human approval dashboard.',
  totalTime: 'PT30M',
  tool: ['Reddit API', 'Python', 'Claude 3.5 Sonnet', 'n8n', 'Airtable', 'Slack'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Platform monitoring', text: 'Custom Python scripts monitor configured subreddits, LinkedIn groups, and niche forums for client-specific keywords and problem statements every 30 minutes. New posts deduplicated against a rolling 7-day history.' },
    { '@type': 'HowToStep', position: 2, name: 'Claude 3.5 three-axis scoring', text: 'Claude 3.5 Sonnet scores each post: ICP relevance (0-10), engagement potential (0-10), and purchase intent signal (0-10). Returns structured JSON with a rationale for each score.' },
    { '@type': 'HowToStep', position: 3, name: 'Threshold filtering', text: 'Posts scoring above a configurable threshold (default 21/30 combined) are forwarded to the Airtable review dashboard. All posts stored for reporting regardless of score.' },
    { '@type': 'HowToStep', position: 4, name: 'Claude reply drafting', text: 'Claude drafts a contextual, helpful reply for each qualifying post following the client\'s community guidelines playbook. Non-promotional, helpful-first framing by default.' },
    { '@type': 'HowToStep', position: 5, name: 'Human approval queue', text: 'Account manager reviews Airtable queue: original post, score breakdown, drafted reply. One-click approve, inline edit, or skip. Nothing published without human sign-off.' },
    { '@type': 'HowToStep', position: 6, name: 'Outcome logging and weekly digest', text: 'All published engagements logged to Airtable with post URL, reply, scores, and outcome tracking. Weekly Monday Slack digest with engagement performance metrics.' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Social Intelligence & Algorithmic Subreddit Scraping', item: 'https://kovil.ai/ai-workflow-automation-library/social-intelligence-subreddit-scraping' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <SocialIntelligencePage />
      </div>
    </>
  )
}
