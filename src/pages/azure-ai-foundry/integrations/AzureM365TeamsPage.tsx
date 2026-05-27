'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, MessageSquare, Mail, FileText, Search, Users, Headphones } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const metrics = [
  { value: "2.4 hrs", label: "Saved per employee per week" },
  { value: "78%", label: "IT queries self-served" },
  { value: "91%", label: "Teams adoption rate for AI agent" },
  { value: "Zero", label: "Separate portal logins" },
]

const capabilities = [
  {
    icon: MessageSquare,
    title: "Teams Meeting Summarisation",
    desc: "Azure OpenAI processes Teams meeting transcripts in real-time, extracting decisions, action items, and owners — posted back to the channel within minutes of the meeting ending. No manual notes required.",
  },
  {
    icon: Mail,
    title: "Outlook Email Triage Agent",
    desc: "An AI agent classifies incoming email by urgency and category, drafts response options, and flags items requiring action — surfaced as an Outlook add-in via the Microsoft Graph API and Copilot extensibility framework.",
  },
  {
    icon: FileText,
    title: "Document Creation from Chat",
    desc: "Employees describe a document they need in Teams chat. The agent retrieves relevant context from SharePoint and OneDrive via Graph API, drafts the document, and drops it directly into the relevant channel or folder.",
  },
  {
    icon: Search,
    title: "Knowledge Agent in Teams",
    desc: "RAG pipeline over SharePoint and OneDrive content, surfaced as a Teams bot. Employees ask questions in natural language and receive cited answers — with links to the source documents and permission-aware retrieval.",
  },
  {
    icon: Users,
    title: "HR Onboarding Bot",
    desc: "New hires interact with an AI bot in Teams that answers policy questions, assigns onboarding tasks, tracks completion, and escalates to HR for edge cases — reducing HR team workload during high-volume hiring periods.",
  },
  {
    icon: Headphones,
    title: "IT Helpdesk Agent in Teams",
    desc: "IT support agent handles password resets, software requests, and connectivity troubleshooting directly in Teams. Integrates with ServiceNow or Jira via REST API to create tickets for issues beyond its scope.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Architecture & Auth",
    desc: "The Microsoft Graph API is the single integration point for all M365 data. Azure app registration with delegated and application permissions provides least-privilege access across Teams, Exchange, SharePoint, and OneDrive.",
    bullets: [
      "App registration in Entra ID with granular Microsoft Graph permission scopes",
      "Delegated permissions for user-context actions; application permissions for background agents",
      "Conditional access policies control which agents can access which workloads",
    ],
  },
  {
    step: "02",
    title: "Data Pipeline",
    desc: "Azure AI Search indexes SharePoint and OneDrive content with incremental crawls. Microsoft Graph webhooks push real-time events (new emails, calendar changes, Teams messages) to the agent orchestration layer.",
    bullets: [
      "Azure AI Search SharePoint Online indexer with delta crawl on a 15-minute schedule",
      "Vector embeddings (text-embedding-ada-002) applied at index time for semantic retrieval",
      "Microsoft Graph change notifications stream real-time M365 events to Azure Event Hub",
    ],
  },
  {
    step: "03",
    title: "Agent Surface",
    desc: "Copilot Studio delivers the conversational layer — building adaptive card responses, Teams bot manifests, and Outlook add-ins without custom UI development. Agents are deployed via Teams Admin Center.",
    bullets: [
      "Copilot Studio bot published to Teams, Outlook, and SharePoint — one build, multiple surfaces",
      "Adaptive Cards for structured responses with action buttons inside Teams",
      "Teams Admin Center deployment with pre-approved app consent for enterprise rollout",
    ],
  },
]

const useCases = [
  {
    title: "Executive Assistant Agent",
    scenario: "PA asks the Teams agent to prepare a briefing for a board meeting. The agent retrieves the latest financials from SharePoint, pulls recent emails on the relevant topic, and drafts a one-page summary.",
    outcome: "Preparation time for executive briefings drops from 3 hours to 20 minutes. The PA focuses on review rather than assembly.",
  },
  {
    title: "IT Password Reset & Access Requests",
    scenario: "Employee messages the IT agent in Teams requesting a password reset and access to a new SaaS tool. The agent verifies identity via Entra ID, resets the password, and creates an access request ticket in ServiceNow.",
    outcome: "78% of standard IT requests resolved in under 3 minutes without IT staff involvement. Helpdesk capacity freed for complex incidents.",
  },
  {
    title: "Sales Enablement Knowledge Bot",
    scenario: "Sales rep asks the Teams agent for the latest competitive battlecard against a specific vendor. The agent retrieves the most recent version from SharePoint, summarises the key win themes, and links to the full document.",
    outcome: "Sales reps find accurate, up-to-date competitive intelligence in seconds rather than navigating SharePoint or emailing product marketing.",
  },
  {
    title: "Project Meeting Action Tracker",
    scenario: "Project manager runs a weekly Teams call. The AI agent transcribes, identifies all action items and owners, and posts a structured summary to the project channel — with tasks synced to Microsoft Planner.",
    outcome: "Zero administrative overhead for meeting notes. Action item completion rate improves as assignments are tracked automatically.",
  },
]

const techStack = [
  "Microsoft Graph API", "Copilot Studio", "Azure OpenAI",
  "Teams Bot Framework", "SharePoint Connector", "Azure AI Search",
]

export default function AzureM365TeamsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/azure-ai-foundry" className="hover:text-foreground transition-colors">Azure AI Foundry</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/azure-ai-foundry/integrations" className="hover:text-foreground transition-colors">Integrations</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">Microsoft 365 & Teams</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Integrations · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Azure AI Foundry + Microsoft 365 & Teams: Deploy AI agents where your team already works
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            The M365 Graph API and Copilot Studio provide native AI agent surfaces inside Teams, Outlook, and Office apps — no separate portal for employees to learn or log into.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {metrics.map(m => (
              <div key={m.label} className="rounded-xl p-4 text-center" style={{ background: `${AZURE}10`, border: `1px solid ${AZURE}25` }}>
                <div className="font-display font-bold text-2xl" style={{ color: AZURE }}>{m.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 text-base h-12">
                Back to Azure AI Foundry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Possible */}
      <section className="border-t border-border py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>What's Possible</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Six ways AI agents augment every employee in M365.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-border bg-background p-6 hover:border-accent/30 transition-colors">
                <cap.icon className="h-5 w-5 mb-4" style={{ color: AZURE }} />
                <h3 className="font-semibold text-base mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Connect It */}
      <section className="border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>How We Connect It</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Graph API to agent surface in three layers.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-card p-7 overflow-hidden group hover:border-accent/40 transition-all">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
                <span className="font-display font-black text-5xl text-accent/15 leading-none block mb-4">{step.step}</span>
                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{step.desc}</p>
                <ul className="space-y-2">
                  {step.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="border-t border-border py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>Use Cases</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Concrete outcomes across the Microsoft 365 stack.</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6 hover:border-accent/30 transition-colors">
                <h3 className="font-semibold text-lg mb-2" style={{ color: AZURE }}>{uc.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed"><span className="font-medium text-foreground">Scenario: </span>{uc.scenario}</p>
                <p className="text-sm text-muted-foreground leading-relaxed"><span className="font-medium text-foreground">Outcome: </span>{uc.outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Built With</p>
          <h2 className="font-display font-bold text-2xl lg:text-3xl mb-8">Azure technology stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map(tech => (
              <span key={tech} className="px-4 py-2 rounded-xl text-sm font-medium border" style={{ borderColor: `${AZURE}30`, background: `${AZURE}08`, color: AZURE }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Meet employees where they already spend their day.</h2>
            <p className="text-background/60 text-base">Book a call and we'll scope an M365 AI agent deployment your team will actually use.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap" onClick={openCalendly}>
              Book a Call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base whitespace-nowrap border-background/20 text-background hover:bg-background/10">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
