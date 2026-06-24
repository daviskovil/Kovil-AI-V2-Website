import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const SF_BLUE = '#00A1E0'
const BASE = 'https://kovil.ai'
const CANONICAL = `${BASE}/agentforce/faq`

export const metadata: Metadata = {
  title: 'Agentforce FAQ 2026: 25 Answers from Implementation Engineers | Kovil AI',
  description: 'Definitive Agentforce FAQ — what it is, how it works, pricing, how it compares to Microsoft Copilot, security, implementation timelines, and how to work with Kovil AI. Updated June 2026.',
  alternates: { canonical: CANONICAL },
  keywords: [
    'agentforce faq',
    'agentforce frequently asked questions',
    'what is agentforce',
    'how does agentforce work',
    'agentforce pricing 2026',
    'agentforce vs microsoft copilot',
    'agentforce einstein trust layer',
    'agentforce implementation partner',
    'agentforce atlas reasoning engine',
    'salesforce agentforce questions and answers',
  ],
  openGraph: {
    type: 'article',
    title: 'Agentforce FAQ 2026: 25 Questions Answered | Kovil AI',
    description: 'Definitive Agentforce FAQ covering what it is, how it works, pricing, security, comparisons and implementation — from certified implementation engineers.',
    url: CANONICAL,
    siteName: 'Kovil AI',
    images: [{ url: `${BASE}/og-agentforce.png`, width: 1200, height: 630, alt: 'Agentforce FAQ — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce FAQ 2026: 25 Questions Answered | Kovil AI',
    description: 'Definitive Agentforce FAQ from implementation engineers — pricing, architecture, security, comparisons.',
    images: [`${BASE}/og-agentforce.png`],
  },
}

const faqData = [
  {
    category: 'Understanding Agentforce',
    faqs: [
      {
        q: 'What is Agentforce?',
        a: "Agentforce is Salesforce's autonomous AI agent platform, launched at Dreamforce in October 2024. It enables organisations to build, deploy, and monitor AI agents that observe context, plan actions, execute multi-step workflows, and reflect on outcomes — all within the Einstein Trust Layer security framework. Unlike traditional chatbots or AI assistants, Agentforce agents can act independently without requiring human prompting at each step.",
      },
      {
        q: 'What is the difference between Agentforce and a chatbot?',
        a: "A chatbot follows a scripted decision tree — it can only respond to what it was pre-programmed for. Agentforce agents are autonomous: they reason about the situation, choose the right action from a configured set, execute multi-step processes, and handle situations not explicitly scripted. An Agentforce agent can resolve a customer case end-to-end; a chatbot can collect information and route to a human.",
      },
      {
        q: 'What replaced Einstein Copilot?',
        a: 'Agentforce replaced Einstein Copilot in October 2024. Einstein Copilot was a reactive AI assistant that responded when users prompted it. Agentforce is an autonomous agent platform powered by the Atlas Reasoning Engine, capable of executing multi-step workflows without user intervention at each step. See our full comparison: Agentforce vs Einstein Copilot.',
      },
      {
        q: 'What can Agentforce actually do?',
        a: "Agentforce agents can: resolve inbound support cases from intake to close, qualify and route incoming sales leads, send personalised follow-up emails triggered by CRM events, update records based on customer interaction outcomes, escalate to a human when defined conditions are met, and connect to external systems via MuleSoft or MCP. The agent's capability set is defined by the Actions you configure — the platform can connect to any system Salesforce can access.",
      },
      {
        q: 'Is Agentforce only for large enterprises?',
        a: 'No. Agentforce is available to Salesforce customers across Growth, Professional, Enterprise, and Unlimited editions. The ~$2 per conversation consumption pricing means smaller organisations can start with a focused use case and expand over time without committing to large upfront seat costs. Many Kovil AI clients are mid-market companies (100–2,000 employees) running targeted Agentforce deployments.',
      },
    ],
  },
  {
    category: 'Technical Architecture',
    faqs: [
      {
        q: 'What is the Atlas Reasoning Engine?',
        a: "The Atlas Reasoning Engine is Salesforce's hybrid AI reasoning layer at the core of Agentforce. It operates in a four-phase loop: Observe (gather context from the conversation, CRM records, and Data Cloud), Plan (determine which Topic applies and which Actions to execute), Act (call the Actions — Salesforce Flows, Apex, MuleSoft APIs, MCP tools), and Reflect (evaluate whether the outcome achieved the goal and decide next steps). This loop enables autonomous multi-step execution.",
      },
      {
        q: 'What are Topics and Actions in Agentforce?',
        a: 'Topics are the domains your agent handles — for example, "Handle a return request" or "Qualify a new inbound lead." Actions are the specific things the agent can do within a Topic — for example, "Look up order history", "Issue refund via Flow", "Update lead stage in CRM." Agent Builder lets you define Topics with natural language instructions and connect Actions to existing Flows, Apex classes, MuleSoft APIs, or external MCP tools.',
      },
      {
        q: 'Does Agentforce require coding?',
        a: 'Basic Agentforce deployments can be configured entirely in Agent Builder using natural language instructions and drag-and-drop Action mapping — no code required. Advanced deployments that need custom logic typically leverage existing Apex code or Salesforce Flows as Actions. MuleSoft integrations require integration development. Kovil AI handles the full stack from low-code configuration to Apex and MuleSoft engineering.',
      },
      {
        q: 'What is Data Cloud and how does it work with Agentforce?',
        a: 'Data Cloud is Salesforce\'s customer data platform — it unifies customer data from all sources (CRM, website, marketing tools, service desk, external databases) into a single customer profile. Agentforce agents can access Data Cloud to make decisions with complete customer context. For example, a service agent can see purchase history, support case history, and email engagement history from a unified profile — not just the Salesforce Service Cloud record.',
      },
      {
        q: 'Can Agentforce integrate with systems outside Salesforce?',
        a: 'Yes. Agentforce connects to external systems via MuleSoft (API integration platform), HTTP callouts from Apex, and the Model Context Protocol (MCP) — an open standard for connecting AI agents to external data and tools. This means an Agentforce agent can call your ERP, your warehouse management system, a payment provider, or any REST or SOAP API with appropriate authentication.',
      },
    ],
  },
  {
    category: 'Pricing & Licensing',
    faqs: [
      {
        q: 'How much does Agentforce cost?',
        a: 'Agentforce is priced at approximately $2 per conversation as of 2026, with volume discounts for enterprise commitments. A "conversation" is a single end-to-end agent interaction — from a customer or internal user initiating a session through to resolution or handoff. This is separate from base Salesforce licences, Data Cloud, Einstein, and MuleSoft costs. See our full Agentforce Pricing Guide for a total cost of ownership breakdown.',
      },
      {
        q: 'What counts as an Agentforce conversation?',
        a: "A conversation is one end-to-end agent session — initiated when a user or system event starts a session with an Agentforce agent, and ending when the agent resolves the task, hands off to a human, or the session times out. A single conversation may involve multiple back-and-forth exchanges and multiple Actions (Flows, API calls). The conversation is the billable unit, not the number of messages or Actions within it.",
      },
      {
        q: 'Are there volume discounts for Agentforce?',
        a: 'Yes. Enterprise-scale Agentforce deployments can negotiate volume discount packages with Salesforce. Kovil AI can support Salesforce commercial negotiations for high-volume implementations. Contact our team if you anticipate more than 10,000 conversations per month.',
      },
      {
        q: 'Do I need additional Salesforce licences to run Agentforce?',
        a: 'Agentforce requires an active Salesforce org licence (Sales Cloud, Service Cloud, or equivalent). Depending on your use case, you may also need: Data Cloud (for unified customer profiles), Einstein (for additional AI features like predictive scoring), and MuleSoft (for external API integrations). These are separate licence costs. Kovil AI can help you identify exactly which licences are required for your specific use case.',
      },
    ],
  },
  {
    category: 'Implementation',
    faqs: [
      {
        q: 'How long does an Agentforce implementation take?',
        a: 'Implementation timelines vary by complexity. A focused single-use-case deployment (e.g., an autonomous case resolution agent for one product line) typically takes 4–6 weeks with Kovil AI. A multi-cloud deployment spanning Sales, Service, and Marketing typically takes 8–12 weeks. Enterprise deployments with MuleSoft integration and Data Cloud setup can take 12–20 weeks. Kovil AI uses fixed-price sprints so you know the timeline and cost before we start.',
      },
      {
        q: 'What does an Agentforce implementation project involve?',
        a: 'A typical Kovil AI Agentforce implementation covers: discovery and use case prioritisation, Topics and Actions design in Agent Builder, Einstein Trust Layer guardrail configuration, Salesforce Flow or Apex development for Actions, MuleSoft or HTTP integration (if external systems are needed), Data Cloud configuration (if used), testing, UAT, and production deployment. We deliver a production-grade agent, not a proof of concept.',
      },
      {
        q: 'What existing Salesforce setup do I need before implementing Agentforce?',
        a: 'At minimum: an active Salesforce org on a compatible edition, Salesforce Flows or Apex for the processes you want to automate, and clean CRM data (garbage data in = garbage agent decisions out). Agentforce does not require Data Cloud to start, though it unlocks significantly better context for agents. Kovil AI conducts a readiness assessment before any engagement.',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    faqs: [
      {
        q: 'What is the Einstein Trust Layer?',
        a: "The Einstein Trust Layer is Salesforce's security and governance framework for AI. It provides: PII masking (sensitive data is masked before it leaves Salesforce to LLM providers), prompt injection protection (prevents malicious inputs from hijacking agent behaviour), a full audit trail of every agent action and decision, output grounding (responses are grounded in Salesforce data, not hallucinated), and data residency controls. All Agentforce interactions pass through the Einstein Trust Layer.",
      },
      {
        q: 'Is Agentforce compliant with HIPAA, GDPR, and financial regulations?',
        a: "Agentforce runs on Salesforce's platform, which has achieved compliance certifications including HIPAA, SOC 2, ISO 27001, and GDPR data processing agreements. FedRAMP compliance is available on Government Cloud editions. However, compliance is a shared responsibility — your configuration, data handling, and Access Control setup must also meet requirements. Kovil AI has implemented Agentforce for regulated financial services and healthcare organisations and can guide compliance configuration.",
      },
      {
        q: 'Does Agentforce send my data to OpenAI or other LLM providers?',
        a: "Agentforce uses Salesforce's own AI infrastructure for the Atlas Reasoning Engine. When external LLM inference is used (e.g., for natural language generation in responses), data passes through the Einstein Trust Layer, which masks PII before any data leaves Salesforce systems. Salesforce contractually prohibits LLM providers from using your data to train their models.",
      },
    ],
  },
  {
    category: 'Agentforce vs Alternatives',
    faqs: [
      {
        q: 'How does Agentforce compare to Microsoft Copilot?',
        a: "The core difference is ecosystem. Agentforce is built for Salesforce CRM — natively integrated with Sales Cloud, Service Cloud, Data Cloud, and Slack. Microsoft Copilot is built for Microsoft 365 and Dynamics 365. Agentforce has a more autonomous agent execution model (Atlas Reasoning Engine); Microsoft Copilot is more commonly used as an embedded productivity assistant. See our full comparison: Agentforce vs Microsoft Copilot.",
      },
      {
        q: 'How does Agentforce compare to custom-built AI agents?',
        a: 'Custom-built AI agents (using LangChain, CrewAI, or similar frameworks) offer maximum flexibility but require significant engineering investment, ongoing maintenance, and custom security work. Agentforce is pre-integrated with Salesforce CRM, pre-compliant with enterprise security standards via the Einstein Trust Layer, and configurable by Salesforce administrators without deep AI engineering. For Salesforce-native workflows, Agentforce typically delivers faster ROI than a custom build.',
      },
    ],
  },
  {
    category: 'Working with Kovil AI',
    faqs: [
      {
        q: 'What does Kovil AI do for Agentforce clients?',
        a: "Kovil AI is a specialist Agentforce implementation partner. We handle everything from strategy and readiness assessment through to production deployment: use case prioritisation, Topics and Actions design, Flow and Apex development, MuleSoft integration, Data Cloud configuration, Einstein Trust Layer setup, and post-launch optimisation. We work in fixed-price sprints so there are no surprises on cost or timeline.",
      },
      {
        q: 'How quickly can Kovil AI get an Agentforce agent into production?',
        a: 'For a focused single-use-case deployment with a prepared Salesforce org, Kovil AI typically delivers a production Agentforce agent in 4–6 weeks. Our fastest deployments have gone from kickoff to production in 3 weeks for well-scoped use cases with existing Salesforce Flows. Book a free assessment to get a specific estimate for your situation.',
      },
      {
        q: 'Do you offer fixed-price Agentforce implementation?',
        a: 'Yes. Kovil AI works in fixed-price sprints for Agentforce implementations. After a discovery and scoping session, we provide a fixed price and timeline before any work begins. This means you know exactly what you are getting and what it will cost — no open-ended consulting engagements. Contact us to scope your specific requirements.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.flatMap(cat =>
    cat.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    }))
  ),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: `${BASE}/agentforce` },
    { '@type': 'ListItem', position: 3, name: 'Agentforce FAQ', item: CANONICAL },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce FAQ 2026',
  description: 'Definitive Agentforce FAQ covering what it is, how it works, pricing, security, comparisons and implementation.',
  url: CANONICAL,
  datePublished: '2026-06-24',
  dateModified: '2026-06-24',
  author: { '@type': 'Organization', name: 'Kovil AI', url: BASE },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
}

export default function Page() {
  const totalFaqs = faqData.reduce((sum, cat) => sum + cat.faqs.length, 0)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <main className="pt-20 bg-background min-h-screen">

        {/* ── HERO ── */}
        <section className="border-b border-border py-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 50% at 80% 50%, ${SF_BLUE}08 0%, transparent 70%)` }} />
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
              <span>/</span>
              <span className="text-foreground">Agentforce FAQ</span>
            </nav>

            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>FAQ · Updated June 2026</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Agentforce FAQ
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-4">
              <strong className="text-foreground">{totalFaqs} questions answered</strong> by Kovil AI Agentforce implementation engineers — covering what Agentforce is, how it works, pricing, security, comparisons, and how to implement it.
            </p>
            <p className="text-sm text-muted-foreground max-w-3xl">Use the category navigation below to jump to what you need, or scroll through the full list.</p>

            {/* Category nav */}
            <div className="flex flex-wrap gap-2 mt-8">
              {faqData.map(cat => (
                <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')}`} className="px-4 py-1.5 rounded-full text-xs font-medium border border-border bg-card hover:border-accent/40 hover:bg-accent/5 transition-all text-foreground">
                  {cat.category}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ SECTIONS ── */}
        {faqData.map((cat, catIdx) => (
          <section
            key={cat.category}
            id={cat.category.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')}
            className={`py-16 border-b border-border ${catIdx % 2 === 1 ? 'bg-muted/20' : ''}`}
          >
            <div className="max-w-5xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-7 w-7 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: `linear-gradient(135deg, ${SF_BLUE} 0%, #0050C8 100%)` }}>
                  {catIdx + 1}
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">{cat.category}</h2>
              </div>
              <div className="space-y-5">
                {cat.faqs.map(faq => (
                  <div key={faq.q} className="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors">
                    <h3 className="font-semibold text-foreground mb-3 leading-snug">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── RELATED ── */}
        <section className="py-14 border-b border-border bg-muted/20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-xl font-bold tracking-tight mb-6 text-foreground">Related Guides</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { title: 'Agentforce Pricing Guide 2026', href: '/agentforce/pricing' },
                { title: 'Agentforce vs Einstein Copilot', href: '/agentforce/compare/agentforce-vs-einstein-copilot' },
                { title: 'Agentforce vs Microsoft Copilot', href: '/agentforce/compare/agentforce-vs-microsoft-copilot' },
                { title: 'How Agentforce Works', href: '/agentforce/playbook/how-does-agentforce-work' },
                { title: 'Agentforce Services Overview', href: '/agentforce' },
                { title: 'Book a free assessment', href: '/book-a-call' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="group flex items-center gap-2 p-4 bg-card border border-border rounded-xl hover:border-accent/40 hover:shadow-md transition-all text-sm font-medium text-foreground">
                  <span className="flex-1">{link.title}</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #050D1A 0%, #091526 60%, #0C1E38 100%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: `radial-gradient(ellipse, ${SF_BLUE}18 0%, transparent 70%)` }} />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm font-mono font-semibold tracking-widest uppercase mb-4" style={{ color: SF_BLUE }}>Agentforce Implementation Partner · New York</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Still have questions about Agentforce?</h2>
            <p className="text-white/50 mb-8 max-w-2xl mx-auto leading-relaxed">Our Agentforce engineers answer every question in a free 30-minute assessment — including a specific recommendation for your use case, technology stack, and Salesforce setup.</p>
            <Link href="/book-a-call" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:-translate-y-0.5" style={{ background: SF_BLUE, boxShadow: `0 8px 32px ${SF_BLUE}45` }}>
              Book a free Agentforce assessment <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

      </main>
    </>
  )
}
