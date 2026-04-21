import type { Metadata } from 'next'
import SocialIntelligencePage from '@/src/pages/ai-workflow-automation-library/SocialIntelligencePage'

export const metadata: Metadata = {
  title: 'Social Intelligence & Subreddit Scraping | Kovil AI',
  description: 'See how Kovil AI builds a social intelligence system: monitor Reddit + LinkedIn + forums every 30 minutes → Claude 3.5 scores relevance on 3 axes → high-signal posts + pre-drafted replies → human approval dashboard → publish. 10x signal-to-noise ratio.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/social-intelligence-subreddit-scraping' },
  robots: { index: true, follow: true },
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
  dateModified: '2025-04-21',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Is Reddit scraping against the platform's terms of service?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The workflow uses the official Reddit API, not unauthorised scraping. Reddit's API provides programmatic access to public post data, which is permitted for monitoring and analytics purposes within their rate limits. The workflow operates within Reddit's API usage policies and does not scrape private communities or bypass access controls.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does Claude 3.5 score posts on the three axes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Claude 3.5 Sonnet receives each post with a structured scoring prompt specifying: ICP relevance (0–10, how closely the poster matches the client's ideal customer profile), engagement potential (0–10, likelihood that a helpful reply would generate meaningful interaction), and purchase intent signal (0–10, strength of buying signals in the language). Scores are returned as JSON with a one-sentence rationale per axis.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does the human approval queue work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Account managers access a filtered Airtable view showing only posts above the relevance threshold. Each row shows the original post, subreddit, score breakdown, and Claude's drafted reply. The AM reads the draft, edits it inline if needed, and clicks Approve. n8n receives the approval webhook and publishes the reply to the correct platform via the relevant API.",
      },
    },
    {
      '@type': 'Question',
      name: 'What platforms besides Reddit does this monitor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard build monitors Reddit and LinkedIn groups. Additional integrations can be added for Quora, niche industry forums (via RSS scraping), Facebook Groups (via Meta API where permitted), and Twitter/X search via their API. Each platform is a separate n8n trigger node feeding the same Claude scoring pipeline.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Intelligence & Subreddit Scraping',
  description: 'Community intelligence system monitoring Reddit and LinkedIn every 30 minutes, scoring posts with Claude 3.5 on three axes, and routing high-signal posts with pre-drafted replies to a human approval queue.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'AI Workflow Automation',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/ai-workflow-automation-library/social-intelligence-subreddit-scraping',
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
        <SocialIntelligencePage />
      </div>
    </>
  )
}
