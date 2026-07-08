import type { Metadata } from 'next'
import ClaudeCodeEngineerPage from '@/src/pages/hire/ClaudeCodeEngineerPage'

export const metadata: Metadata = {
  title: 'Hire Claude Code Engineers — Agentic Coding, Vetted in 48 Hours',
  description: "Hire vetted Claude Code engineers through Kovil AI. Experts in Anthropic's Claude Code agentic toolchain — ship features, run migrations, build MCP tooling, and enable your team. Matched in 48 hours, 2-week risk-free trial, 100% IP yours.",
  alternates: { canonical: 'https://kovil.ai/hire/claude-code-engineer' },
  keywords: [
    'claude code engineer',
    'claude code software engineer',
    'claude code lead engineer',
    'hire claude code engineer',
    'hire claude code developer',
    'agentic coding engineer',
    'anthropic claude code developer',
    'claude code consultant',
    'claude code certification',
    'model context protocol developer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire Claude Code Engineers — Agentic Coding, Vetted in 48 Hours | Kovil AI',
    description: "Elite engineers fluent in Anthropic's Claude Code toolchain. Ship at agentic velocity with senior review discipline. Matched in 48 hours. 2-week risk-free trial.",
    url: 'https://kovil.ai/hire/claude-code-engineer',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-hire-claude-code-engineer.png', width: 1200, height: 630, alt: 'Hire Claude Code Engineers — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Claude Code Engineers — Agentic Coding, Vetted in 48 Hours | Kovil AI',
    description: "Elite engineers fluent in Anthropic's Claude Code toolchain. Ship at agentic velocity with senior review discipline.",
    images: ['https://kovil.ai/og-hire-claude-code-engineer.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Claude Code Engineers',
  description: "Embed a vetted engineer fluent in Anthropic's Claude Code agentic coding toolchain into your team in 48 hours. Ship features at velocity, run large-scale migrations, build Model Context Protocol tooling, and enable your team on agentic coding — with senior review discipline.",
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Agentic Coding Engineering',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/claude-code-engineer',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/hire/claude-code-engineer' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a Claude Code Engineer with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Project', text: 'Describe your codebase, stack, and what you want to ship or modernise. A Delivery Lead scopes it with you within 24 hours.', url: 'https://kovil.ai/hire/claude-code-engineer' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Engineer', text: 'Review 2–3 engineers fluent in Claude Code with proven work in your language and domain. Interview and choose.', url: 'https://kovil.ai/hire/claude-code-engineer' },
    { '@type': 'HowToStep', position: 3, name: 'Ship at Velocity', text: 'Your engineer ships in focused sprints using Claude Code, with rigorous review and testing. An Engagement Manager audits every milestone.', url: 'https://kovil.ai/hire/claude-code-engineer' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is a Claude Code engineer?', acceptedAnswer: { '@type': 'Answer', text: "A Claude Code engineer is a software engineer fluent in Anthropic's Claude Code — an agentic coding tool that works in the terminal and IDE, understands an entire codebase, and can plan and execute multi-file changes, run tests, and iterate autonomously under the engineer's direction. A Claude Code engineer combines strong software-engineering fundamentals with the judgment to scope work for the agent, verify its output, and know when to trust it and when to intervene." } },
    { '@type': 'Question', name: 'What is Claude Code?', acceptedAnswer: { '@type': 'Answer', text: "Claude Code is Anthropic's agentic coding tool, powered by its Claude models. Unlike an autocomplete assistant, it operates over your whole repository: it reads and reasons about the codebase, plans changes, edits multiple files, runs commands and tests, and iterates toward a goal in the terminal or IDE. It supports the Model Context Protocol (MCP) to connect to external tools and data sources." } },
    { '@type': 'Question', name: 'What does a Claude Code lead engineer do?', acceptedAnswer: { '@type': 'Answer', text: "A Claude Code lead engineer is a senior engineer who sets agentic-coding standards across a team: defining Claude Code workflows and guardrails, building MCP tooling to connect the agent to internal systems, establishing review and verification standards for agent-assisted output, mentoring other engineers, and owning the highest-complexity work. The lead turns agentic coding from an individual productivity hack into a reliable team capability." } },
    { '@type': 'Question', name: 'Is there a Claude Code certification?', acceptedAnswer: { '@type': 'Answer', text: "There is no single official exam that gates the skill of using Claude Code, so a 'certification' is not the meaningful signal of competence. What matters is demonstrated production work — real repositories shipped, migrations completed, and evidence of sound review discipline. Kovil AI vets engineers on exactly this: a live build, a portfolio of shipped agent-assisted work, and their judgment in reviewing and verifying output. Anthropic publishes official documentation and best-practice guides for Claude Code that our engineers know deeply." } },
    { '@type': 'Question', name: 'How is Claude Code different from GitHub Copilot or Cursor?', acceptedAnswer: { '@type': 'Answer', text: "GitHub Copilot is primarily an in-editor autocomplete and chat assistant. Cursor is an AI-native code editor with strong in-IDE agentic features. Claude Code is Anthropic's agentic coding tool that runs in the terminal and IDE and is designed to operate autonomously over an entire codebase — planning, editing across many files, running tests, and iterating — with deep Model Context Protocol support. Teams often use more than one; a skilled engineer picks the right tool for the task." } },
    { '@type': 'Question', name: 'What are some tips for using Claude Code effectively?', acceptedAnswer: { '@type': 'Answer', text: "Scope work into clear, verifiable units rather than vague mega-tasks; give the agent good context via a well-maintained project guide, tests, and conventions; use tests and evals as ground truth so the agent can self-correct; keep a human in the loop on architecture, security, and high-stakes changes; wire it to your real systems with MCP; and review agent output with the same rigor as any pull request. Speed comes from good scoping and verification, not blindly accepting generated code." } },
    { '@type': 'Question', name: 'How much does it cost to hire a Claude Code engineer?', acceptedAnswer: { '@type': 'Answer', text: "A senior engineer full-time in the US typically costs $170,000–$250,000 in base salary plus recruiting and equity. Freelance rates vary widely with inconsistent quality. Kovil AI places a vetted, Engagement-Manager-audited Claude Code engineer on a fixed monthly or milestone basis — usually a fraction of a full-time hire's fully-loaded cost, with no recruiting delay, a 2-week risk-free trial, and no lock-in. Because agentic coding compresses delivery time, cost per shipped outcome is often dramatically lower." } },
    { '@type': 'Question', name: 'How quickly can I hire a Claude Code engineer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted Claude Code engineer within 24–48 hours of submitting their brief, with work starting on an agreed milestone plan in 3–4 days. A 2-week risk-free trial lets you validate fit, velocity, and output quality first.' } },
    { '@type': 'Question', name: 'Can a Claude Code engineer help my team adopt agentic coding?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — team enablement is a core offering. Beyond shipping features, our engineers can establish Claude Code workflows, build MCP tooling, set review and verification standards, and mentor your developers so the capability stays with your team. This is a common reason engineering leaders hire a Claude Code lead engineer specifically.' } },
    { '@type': 'Question', name: 'Do I own all the code produced with Claude Code?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100%. All code, tooling, MCP integrations, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no carve-outs, no shared IP, and no lock-in.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers', item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'Claude Code Engineers', item: 'https://kovil.ai/hire/claude-code-engineer' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><ClaudeCodeEngineerPage /></div>
    </>
  )
}
