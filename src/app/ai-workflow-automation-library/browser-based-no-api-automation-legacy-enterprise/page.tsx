import type { Metadata } from 'next'
import BrowserAutomationPage from '@/src/pages/ai-workflow-automation-library/BrowserAutomationPage'

export const metadata: Metadata = {
  title: 'Browser-Based No-API Automation for Legacy Enterprise — AI Workflow | Kovil AI',
  description: 'See how Kovil AI builds browser-based automation for legacy enterprise systems: Twin.so cloud browser navigates the UI like a human → GPT-4o Vision reads the screen → AI extracts and writes data → full Slack audit log. Zero API access needed.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/browser-based-no-api-automation-legacy-enterprise' },
  openGraph: {
    type: 'website',
    title: 'Browser-Based No-API Automation for Legacy Enterprise | Kovil AI',
    description: 'Legacy enterprise UI → Twin.so cloud browser → GPT-4o Vision reads screen → AI extracts and writes data → Slack audit log. Zero IT tickets, zero API access needed.',
    url: 'https://kovil.ai/ai-workflow-automation-library/browser-based-no-api-automation-legacy-enterprise',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browser-Based No-API Automation for Legacy Enterprise | Kovil AI',
    description: 'Twin.so cloud browser + GPT-4o Vision screen reading + AI data extraction + full audit log. Automate any legacy system without API access.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Browser-Based No-API Automation for Legacy Enterprise Clients',
  description: 'A workflow that uses Twin.so cloud browsers and GPT-4o Vision to automate legacy enterprise systems without API access — reading screens like a human, extracting data, writing it to modern systems, and logging every action with screenshots to Slack.',
  totalTime: 'PT30M',
  tool: ['Twin.so', 'n8n', 'GPT-4o', 'Slack', 'Airtable', 'Python'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Workflow trigger', text: 'Workflow triggered on schedule or via Slack slash command with task parameters. n8n validates input, checks for conflicting sessions, and queues the task with operator confirmation.' },
    { '@type': 'HowToStep', position: 2, name: 'Twin.so cloud browser launch', text: 'Twin.so spins up a fresh isolated cloud browser session, navigates to the legacy system URL, and logs in using encrypted credentials from a secrets vault. Handles 2FA and CAPTCHA automatically.' },
    { '@type': 'HowToStep', position: 3, name: 'GPT-4o Vision screen reading', text: 'Twin.so screenshots the current page state and sends to GPT-4o Vision, which identifies input fields, table structures, buttons, menus, and data values — requiring zero API documentation.' },
    { '@type': 'HowToStep', position: 4, name: 'AI agent action execution', text: 'n8n directs Twin.so to execute specific actions: click navigation elements, input form data, scroll to load rows, or export reports. Each action is confirmed with a new Vision analysis before proceeding.' },
    { '@type': 'HowToStep', position: 5, name: 'Data normalization and write-back', text: 'Extracted data normalized by GPT-4o into clean schema (ISO 8601 dates, stripped formatting). Written to Airtable, Google Sheets, Salesforce, or any API endpoint. Data validation runs before write.' },
    { '@type': 'HowToStep', position: 6, name: 'Slack audit log', text: 'Complete audit package compiled and posted to Slack: action timeline, screenshots at each key step, raw and normalized data, run duration. 90-day retention. Fully exportable for compliance.' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Browser-Based No-API Automation for Legacy Enterprise', item: 'https://kovil.ai/ai-workflow-automation-library/browser-based-no-api-automation-legacy-enterprise' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <BrowserAutomationPage />
      </div>
    </>
  )
}
