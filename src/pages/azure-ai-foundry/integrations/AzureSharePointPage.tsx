'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, BookOpen, Shield, FolderSearch, FileText, Users, Terminal } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const metrics = [
  { value: "83%", label: "Answer accuracy rate" },
  { value: "12 min", label: "Research time (was 4.2 hrs)" },
  { value: "100%", label: "Permission-aware retrieval" },
  { value: "Real-time", label: "Index updates" },
]

const capabilities = [
  {
    icon: BookOpen,
    title: "Employee Knowledge Agent",
    desc: "Employees ask questions in plain English and receive precise, cited answers drawn from SharePoint documents — policies, project archives, product specs. The agent retrieves the most relevant chunks and surfaces the source document link.",
  },
  {
    icon: Shield,
    title: "Policy & Compliance Assistant",
    desc: "Legal, HR, and compliance teams query the agent for the current version of any policy, regulatory requirement, or procedure. Azure AI Search indexes policy libraries with real-time delta crawls so answers always reflect the latest documents.",
  },
  {
    icon: FolderSearch,
    title: "Project Knowledge Retrieval",
    desc: "Project managers retrieve past deliverables, lessons learned, and technical specs from completed projects without manual SharePoint navigation. Semantic search surfaces relevant content even when exact terminology differs.",
  },
  {
    icon: FileText,
    title: "Meeting Notes Search",
    desc: "Teams meeting recordings and transcripts stored in SharePoint become fully searchable. Ask 'what was decided about the Q3 pricing change in the June leadership meeting?' and get the specific passage with a timestamp link.",
  },
  {
    icon: Users,
    title: "HR Handbook Bot",
    desc: "New employees and managers ask the HR bot questions about leave policies, benefits, performance processes, and office procedures. The agent answers from the authoritative HR SharePoint site — with escalation paths for edge cases.",
  },
  {
    icon: Terminal,
    title: "IT Runbook Agent",
    desc: "IT engineers query the runbook agent for step-by-step procedures during incidents. The agent retrieves the correct runbook version, adapts the steps to the specific environment described, and logs the retrieval for audit purposes.",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Architecture & Auth",
    desc: "Azure AI Search uses the SharePoint Online indexer to crawl selected site collections. Entra ID permission inheritance is enforced at query time — users only retrieve documents their account is authorised to access in SharePoint.",
    bullets: [
      "SharePoint Online indexer in Azure AI Search with site collection and document library scope configuration",
      "Entra ID group-based permission filtering applied per search query — no security trimming bypass possible",
      "Managed identity authentication between Azure AI Search and SharePoint — no stored credentials",
    ],
  },
  {
    step: "02",
    title: "Data Pipeline",
    desc: "Documents are chunked, embedded using text-embedding-ada-002, and stored as vectors in the Azure AI Search index. A hybrid retrieval strategy combines BM25 keyword search with vector similarity — maximising recall and precision.",
    bullets: [
      "Recursive text chunking at 512 tokens with 64-token overlap to preserve semantic context across chunks",
      "Hybrid query: BM25 keyword match + cosine vector similarity, re-ranked by semantic ranker",
      "Delta crawl schedule (every 15 minutes) plus SharePoint webhook trigger for immediate re-index on document update",
    ],
  },
  {
    step: "03",
    title: "Agent Surface",
    desc: "The RAG pipeline is exposed via Semantic Kernel as a plugin that any AI agent can call. Copilot Studio wraps it into a conversational bot deployed to Teams, SharePoint embedded web part, or standalone portal.",
    bullets: [
      "Semantic Kernel retrieval plugin with grounding instruction to cite source documents and page numbers",
      "Copilot Studio bot published to Teams and SharePoint home site via app manifest",
      "Hallucination guard: agent instructed to answer only from retrieved context — fallback message if no relevant document found",
    ],
  },
]

const useCases = [
  {
    title: "Legal Contract Library Search",
    scenario: "In-house counsel asks the agent for all indemnification clauses in vendor contracts signed in the last two years. The agent queries the indexed contract library and returns the relevant clauses with document references.",
    outcome: "Contract review preparation time reduced from half a day to under 30 minutes. Legal team queries the agent rather than asking junior staff to manually search SharePoint.",
  },
  {
    title: "Engineering Standards Retrieval",
    scenario: "Engineer asks 'what is the approved cable specification for outdoor installations in our UK sites?' The agent retrieves the current version of the relevant technical standard from the SharePoint engineering library.",
    outcome: "Engineers access authoritative standards in seconds rather than navigating multi-level SharePoint hierarchies. Version confusion eliminated as the index always reflects the current approved document.",
  },
  {
    title: "Incident Response Runbook",
    scenario: "An on-call SRE receives a P1 alert at 2am. They ask the IT agent for the runbook for that specific alert type. The agent retrieves the runbook, confirms the current on-call rotation from SharePoint, and opens a ticket.",
    outcome: "MTTR reduced as responders spend time executing the recovery procedure rather than finding it. Runbook version accuracy guaranteed by real-time index updates.",
  },
  {
    title: "New Hire Policy Orientation",
    scenario: "A new employee asks the HR bot about the company's remote work policy, equipment allowance, and performance review cycle. The agent answers from the current HR handbook sections and links to the full documents.",
    outcome: "HR team spends less time answering repetitive onboarding queries. Employees get consistent, policy-accurate answers rather than relying on colleague word-of-mouth.",
  },
]

const techStack = [
  "Azure AI Search (SharePoint indexer)", "Azure OpenAI", "Semantic Kernel",
  "Copilot Studio", "Microsoft Graph API",
]

export default function AzureSharePointPage() {
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
            <span className="text-foreground">SharePoint</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Integrations · Azure AI Foundry</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Azure AI Search + SharePoint: Turn your document library into an AI knowledge base
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Azure AI Search indexes SharePoint Online natively — crawling documents, applying vector embeddings, and making 10 years of company knowledge instantly queryable by AI agents. Entra ID permissions are enforced at query time so agents never surface documents users aren't authorised to see.
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Six knowledge use cases your SharePoint content enables.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">From SharePoint library to permission-aware RAG in three steps.</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Real outcomes from SharePoint AI knowledge deployments.</h2>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Your SharePoint library is a knowledge asset. Start using it like one.</h2>
            <p className="text-background/60 text-base">Book a call and we'll scope a permission-aware RAG deployment over your SharePoint environment.</p>
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
