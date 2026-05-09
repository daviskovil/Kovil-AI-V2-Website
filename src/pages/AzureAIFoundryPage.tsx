'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Database, Brain, Cpu, Zap, Users, Wrench, BarChart3, BookOpen, Download, Clock, FileText, AlertCircle, Cloud, Lock, Settings } from "lucide-react"
import { Button } from "../components/ui/button"
import { openCalendly } from "../lib/calendly"

// ── Azure AI Foundry brand colour ─────────────────────────────────────────────
const AZURE = "#0078D4"

// ── Corporate email blocklist ─────────────────────────────────────────────────
const CONSUMER_DOMAINS = new Set([
  "gmail.com","yahoo.com","hotmail.com","outlook.com","icloud.com","aol.com",
  "protonmail.com","live.com","me.com","msn.com","ymail.com","googlemail.com",
  "mail.com","inbox.com","zohomail.com","fastmail.com","hey.com","pm.me",
])

function isCorporateEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase()
  return !!domain && !CONSUMER_DOMAINS.has(domain)
}

// ── Hero — Azure Architecture Diagram ────────────────────────────────────────

function AzureArchDiagram() {
  const layers = [
    {
      label: "User Interfaces",
      items: [
        { name: "Microsoft Teams" },
        { name: "Web / Mobile" },
        { name: "Custom API" },
      ],
      color: `${AZURE}20`,
      border: `${AZURE}40`,
    },
    {
      label: "Agent Orchestration",
      items: [
        { name: "Semantic Kernel" },
        { name: "Prompt Flow" },
        { name: "Copilot Studio" },
      ],
      color: `${AZURE}15`,
      border: `${AZURE}35`,
    },
    {
      label: "Azure AI Core",
      items: [
        { name: "Azure OpenAI" },
        { name: "Azure AI Search" },
        { name: "Model Catalog" },
      ],
      color: `${AZURE}10`,
      border: `${AZURE}30`,
    },
    {
      label: "Your Data & Systems",
      items: [
        { name: "SharePoint · SQL" },
        { name: "Dynamics · M365" },
        { name: "APIs · Files" },
      ],
      color: "transparent",
      border: "rgba(255,255,255,0.1)",
    },
  ]

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-3xl opacity-20 blur-3xl" style={{ background: `radial-gradient(ellipse at center, ${AZURE}, transparent)` }} />

      <div className="relative space-y-2">
        {/* Top badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl font-bold text-white text-sm shadow-xl" style={{ background: AZURE, boxShadow: `0 8px 32px ${AZURE}50` }}>
            <div className="h-5 w-5 rounded-md bg-white/20 flex items-center justify-center">
              <Cloud className="h-3 w-3 text-white" />
            </div>
            Azure AI Foundry
          </div>
        </div>

        {/* Connector arrow */}
        <div className="flex justify-center">
          <div className="w-px h-4" style={{ background: `${AZURE}50` }} />
        </div>

        {/* Architecture layers */}
        {layers.map((layer, li) => (
          <div key={layer.label}>
            <div
              className="rounded-xl border px-4 py-3"
              style={{ background: layer.color, borderColor: layer.border }}
            >
              <p className="text-[10px] font-semibold tracking-widest uppercase mb-2.5" style={{ color: AZURE }}>
                {layer.label}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {layer.items.map(item => (
                  <div
                    key={item.name}
                    className="rounded-lg px-2.5 py-2 text-center"
                    style={{ background: `${AZURE}12`, border: `1px solid ${AZURE}25` }}
                  >
                    <span className="text-[11px] font-medium text-foreground leading-tight">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {li < layers.length - 1 && (
              <div className="flex justify-center">
                <div className="w-px h-3" style={{ background: `${AZURE}40` }} />
              </div>
            )}
          </div>
        ))}

        {/* Stats strip */}
        <div className="mt-4 grid grid-cols-3 gap-2 pt-2">
          {[
            { value: "GPT-4o", label: "& 1,700+ models" },
            { value: "99.9%", label: "Azure SLA" },
            { value: "ISO 27001", label: "SOC 2 · HIPAA" },
          ].map(stat => (
            <div key={stat.value} className="text-center rounded-xl py-2.5" style={{ background: `${AZURE}10`, border: `1px solid ${AZURE}25` }}>
              <div className="text-sm font-display font-bold" style={{ color: AZURE }}>{stat.value}</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Section 3 — Services ──────────────────────────────────────────────────────

const services = [
  {
    icon: Brain,
    title: "Azure AI Foundry Strategy & Readiness",
    slug: "azure-ai-foundry-strategy-readiness",
    desc: "We audit your Azure environment, data estate, and use-case landscape — then deliver a prioritised AI agent roadmap and architecture blueprint before a single resource is provisioned.",
  },
  {
    icon: Cpu,
    title: "AI Agent Design & Build",
    slug: "ai-agent-design-build",
    desc: "End-to-end agent engineering using Semantic Kernel, Prompt Flow, and Azure OpenAI — including tool calling, memory management, multi-agent orchestration, and content safety configuration.",
  },
  {
    icon: Zap,
    title: "Azure OpenAI Integration",
    slug: "azure-openai-integration",
    desc: "Production-grade Azure OpenAI deployments: fine-tuning, RAG pipeline design, token cost optimisation, content filtering, and Managed Identity authentication — scoped to your workload.",
  },
  {
    icon: Users,
    title: "Copilot Studio Agents",
    slug: "copilot-studio-agents",
    desc: "Low-code agent deployment via Microsoft Copilot Studio — connected to Teams, SharePoint, and Dynamics 365, with AI Search grounding and enterprise guardrails configured from day one.",
  },
  {
    icon: Database,
    title: "Azure AI Search & RAG Pipeline",
    slug: "azure-ai-search-rag",
    desc: "High-accuracy RAG systems over your enterprise knowledge base: vector + hybrid search, semantic ranking, chunking strategy, index freshness automation, and hallucination guardrails.",
  },
  {
    icon: Wrench,
    title: "Azure AI Rescue & Optimisation",
    slug: "azure-ai-rescue-optimisation",
    desc: "Inherited a broken or underperforming Azure AI deployment? We diagnose root causes — drift, cost overruns, hallucinations, latency — and restore measurable performance within one 2-week sprint.",
  },
]

// ── Section 4 — Use Cases ─────────────────────────────────────────────────────

type Tab = "Enterprise Automation" | "Customer Experience" | "Operations" | "Developer Tools"

const TABS: Tab[] = ["Enterprise Automation", "Customer Experience", "Operations", "Developer Tools"]

const tabSlug: Record<Tab, string> = {
  "Enterprise Automation": "enterprise",
  "Customer Experience":  "customer-experience",
  "Operations":           "operations",
  "Developer Tools":      "developer-tools",
}

const useCases: Record<Tab, { title: string; slug: string; desc: string }[]> = {
  "Enterprise Automation": [
    { title: "Document Intelligence Agent", slug: "document-intelligence-agent", desc: "Processes contracts, invoices, and compliance documents with GPT-4o and Azure AI Document Intelligence — extracting, routing, and acting on structured data autonomously." },
    { title: "Enterprise Knowledge Agent",  slug: "enterprise-knowledge-agent",  desc: "RAG agent over SharePoint, Confluence, and internal wikis. Employees get instant, accurate answers — grounded in your documents, cited to the source." },
    { title: "ERP Process Automation Agent", slug: "erp-process-agent", desc: "Automates purchase orders, vendor onboarding, and approval workflows via Semantic Kernel orchestrated against Dynamics 365 and SAP APIs." },
  ],
  "Customer Experience": [
    { title: "AI Customer Service Agent",         slug: "ai-customer-service-agent",        desc: "Handles 70%+ of support queries — refunds, order status, troubleshooting — grounded in your knowledge base via Azure AI Search. Hands off to humans with full context." },
    { title: "Personalised Recommendation Agent", slug: "personalised-recommendation-agent", desc: "Recommends products or services using real-time user signals and semantic similarity search — integrated with your e-commerce platform or CRM." },
    { title: "Omnichannel Engagement Agent",       slug: "omnichannel-engagement-agent",      desc: "Unified agent surface across Teams, web chat, and email — with live CRM context from Dynamics 365 and consistent brand-safe responses on every channel." },
  ],
  "Operations": [
    { title: "Predictive Maintenance Agent",      slug: "predictive-maintenance-agent",      desc: "Monitors IoT sensor data via Azure IoT Hub, detects anomaly patterns with Azure OpenAI, and triggers maintenance work orders before equipment fails." },
    { title: "Supply Chain Intelligence Agent",   slug: "supply-chain-intelligence-agent",   desc: "Real-time supply chain risk analysis: ingests logistics, supplier, and demand data — surfaces risks, recommends re-routing, and escalates exceptions autonomously." },
    { title: "Compliance Monitoring Agent",        slug: "compliance-monitoring-agent",        desc: "Continuously monitors policies, audit logs, and regulatory feeds. Flags deviations, drafts incident reports, and maintains a complete audit trail in Azure Monitor." },
  ],
  "Developer Tools": [
    { title: "Internal Developer Copilot", slug: "internal-developer-copilot", desc: "Custom Copilot extension trained on your internal codebase, architecture docs, and runbooks — deployed in Teams and VS Code. Cut developer onboarding time by 60%." },
    { title: "API Integration Agent",      slug: "api-integration-agent",      desc: "Accelerates integration testing, generates OpenAPI documentation, and diagnoses integration errors — connected to your Azure API Management gateway." },
    { title: "MLOps Automation Agent",     slug: "mlops-automation-agent",     desc: "Automates model evaluation, deployment gating, and performance monitoring via Azure Machine Learning and AI Foundry — human-in-the-loop only for exceptions." },
  ],
}

// ── Section 5 — Case Studies ──────────────────────────────────────────────────

const caseStudies = [
  {
    label: "Professional Services",
    sub: "Global consulting firm · 2,400 consultants · 15-year document archive",
    problem: "Consultants spending 3–4 hours per engagement searching internal reports and methodology documents. Knowledge locked in 800,000+ unstructured files.",
    built: "Azure AI Search RAG agent over the full document archive, surfaced inside Teams via Copilot Studio. GPT-4o with grounded citations — every answer traceable to source.",
    metrics: [
      { value: "83%", label: "answer accuracy rate" },
      { value: "12 min", label: "research time (was 4.2 hrs)" },
      { value: "$2.1M", label: "annual productivity gain" },
    ],
  },
  {
    label: "Financial Services",
    sub: "Regional insurer · 180,000 active policies · regulated environment",
    problem: "Claims triage team processing 3,200 claims/week manually — 6-day average to first decision, 18 FTEs tied to document review.",
    built: "Claims triage agent using GPT-4o + Azure AI Document Intelligence to extract, classify, and route claims. Integrated with policy management system via Azure API Management.",
    metrics: [
      { value: "71%", label: "claims auto-triaged" },
      { value: "18 hrs", label: "avg processing (was 6 days)" },
      { value: "$1.4M", label: "annual operations saving" },
    ],
  },
  {
    label: "Healthcare",
    sub: "Hospital network · 12 facilities · Epic EHR integration",
    problem: "Admin staff handling 2,100 patient intake and pre-authorisation queries per week — 40% consumed by data entry and insurance eligibility verification.",
    built: "Patient intake and pre-auth agent connected to Epic EHR via Azure Health Data Services and Azure API. Handles eligibility checks, pre-auth submission, and appointment prep autonomously.",
    metrics: [
      { value: "68%", label: "pre-auth queries automated" },
      { value: "22 hrs", label: "admin time saved/facility/wk" },
      { value: "4.7/5", label: "patient satisfaction score" },
    ],
  },
]

// ── Section 6 — Playbook ──────────────────────────────────────────────────────

const playbookArticles = [
  {
    pill: "Implementation Guide",
    title: "How to architect your first Azure AI Foundry agent: A practitioner's checklist",
    desc: "The 14 decisions you must make before writing a single Semantic Kernel plugin — from model selection to content safety to identity configuration.",
    readTime: "9 min read",
    href: "/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent",
  },
  {
    pill: "Technical Deep Dive",
    title: "Azure OpenAI vs OpenAI API: What actually changes when you deploy in Azure?",
    desc: "A technical breakdown of Managed Identity, content filtering, private endpoints, deployment model versioning, and regional availability — with migration guidance.",
    readTime: "13 min read",
    href: "/azure-ai-foundry/playbook/azure-openai-vs-openai-api",
  },
  {
    pill: "Case Study",
    title: "From 6-day claims processing to 18 hours: Building an Azure AI triage agent",
    desc: "Step-by-step walkthrough of an insurance deployment — GPT-4o integration, Document Intelligence pipeline, Azure API Management, and compliance logging.",
    readTime: "16 min read",
    href: "/azure-ai-foundry/playbook/claims-processing-azure-ai-build",
  },
]

// ── Section 9 — FAQ ───────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What is Azure AI Foundry?",
    a: "Azure AI Foundry (formerly Azure AI Studio) is Microsoft's unified platform for building, deploying, and governing enterprise AI applications. It brings together the Azure Model Catalog (1,700+ models including GPT-4o, o1, Phi-4, Llama 3, and Mistral), Prompt Flow for LLMOps, Azure OpenAI Service, Azure AI Search, Semantic Kernel, and Responsible AI tooling — all within a single governed environment. It launched as a rebrand of Azure AI Studio in late 2024 and is tightly integrated with Microsoft Fabric, Copilot Studio, and Microsoft 365.",
  },
  {
    q: "How is Azure AI Foundry different from Azure OpenAI Service?",
    a: "Azure OpenAI Service is the API gateway to OpenAI models (GPT-4o, o1, o3, DALL-E, Whisper) within the Azure trust boundary. Azure AI Foundry is the full development and operations platform that sits on top — it includes Azure OpenAI, but also the Model Catalog with 1,700+ non-OpenAI models, Prompt Flow for deployment orchestration, evaluation tools, RAG pipeline tooling, Responsible AI dashboards, and connections to Azure AI Search and Azure Machine Learning. For most enterprise agent builds, you use both.",
  },
  {
    q: "How long does an Azure AI Foundry implementation take?",
    a: "A focused pilot agent scoped to one use case — for example, a RAG knowledge agent over SharePoint — typically takes 2–3 weeks from architecture to production deployment. A full multi-agent system with Copilot Studio, Dynamics 365 integration, and Azure AI Search typically runs 6–10 weeks depending on data readiness and enterprise architecture complexity. We scope every engagement in detail before any work begins.",
  },
  {
    q: "Do we need to be deep in the Microsoft ecosystem to use Azure AI Foundry?",
    a: "No — Azure AI Foundry works with any data source or system via Azure API Management and custom connectors. That said, organisations already using Microsoft 365, SharePoint, Dynamics 365, or Azure Data Factory get compounding benefits: Copilot Studio agents deploy natively into Teams, SharePoint data indexes automatically into Azure AI Search, and Entra ID handles identity seamlessly. If your organisation is Microsoft-heavy, the ROI on Azure AI Foundry is significantly higher than platform-agnostic alternatives.",
  },
  {
    q: "What is Semantic Kernel and why does it matter for agent builds?",
    a: "Semantic Kernel is Microsoft's open-source AI orchestration SDK (available in Python, C#, and Java). It's the primary framework for building multi-step, multi-tool AI agents in Azure — defining plugins (tools the agent can call), planners (how the agent sequences steps), and memory (how context is maintained). Think of it as LangChain's enterprise-grade equivalent within the Microsoft ecosystem, with native Azure OpenAI integration and built-in support for function calling, RAG, and structured output. Kovil AI uses Semantic Kernel for all complex agent orchestration on Azure.",
  },
  {
    q: "How does Azure AI Search enable RAG for enterprise agents?",
    a: "Azure AI Search provides enterprise-grade vector and hybrid search — the retrieval layer in a RAG (Retrieval-Augmented Generation) pipeline. It indexes your documents (SharePoint, Blob Storage, SQL, custom sources), generates vector embeddings, and supports semantic ranking to surface the most relevant chunks to the language model. The critical advantage over open-source vector stores is managed infrastructure, native Entra ID access control (your agents only retrieve data the user is authorised to see), and integration with Azure OpenAI for zero-latency retrieval-to-generation pipelines.",
  },
  {
    q: "What is Copilot Studio and when should we use it instead of Semantic Kernel?",
    a: "Copilot Studio (formerly Power Virtual Agents) is Microsoft's low-code agent builder, tightly integrated with Teams, SharePoint, and Microsoft 365. Use Copilot Studio when: you need a Teams-native agent quickly, your team has Power Platform expertise, your use case is conversational and bounded (customer service, HR queries, IT helpdesk), and you need non-technical staff to manage and update agent topics. Use Semantic Kernel (code-first) when: your agent requires complex multi-step reasoning, custom tool integrations, fine-grained control over prompting and memory, or high-throughput API performance. Many enterprise builds combine both — Copilot Studio as the user interface, Semantic Kernel handling complex backend orchestration.",
  },
  {
    q: "How does Azure AI Foundry handle security and compliance?",
    a: "Azure AI Foundry inherits Azure's enterprise security posture: Managed Identity for authentication (no stored credentials), private endpoints to keep data off the public internet, Azure Key Vault for secrets management, content safety filters for inputs and outputs, and role-based access control via Entra ID. For regulated industries, Azure AI Foundry supports HIPAA, SOC 2, ISO 27001, PCI DSS, and FedRAMP compliance frameworks. Prompt Flow provides full audit logging of every AI interaction. Kovil AI configures all security and compliance controls as standard — not optional extras.",
  },
  {
    q: "What is Prompt Flow and how does it fit into a production AI deployment?",
    a: "Prompt Flow is Azure AI Foundry's LLMOps tool — it lets you define, test, evaluate, and deploy AI workflows as versioned, observable pipelines. In production, Prompt Flow handles: A/B testing of prompt variants, automated evaluation against ground truth datasets, deployment to managed online endpoints, and real-time monitoring of quality metrics. For teams running AI in regulated environments or at scale, Prompt Flow is the difference between 'it works in demo' and 'it works reliably in production.' Kovil AI builds every production agent deployment on top of Prompt Flow.",
  },
  {
    q: "How much does Azure AI Foundry cost?",
    a: "Azure AI Foundry itself is free — you pay for the underlying services consumed: Azure OpenAI (priced per token; GPT-4o is ~$2.50/1M input tokens, ~$10/1M output tokens as of 2025), Azure AI Search (from ~$250/month for a standard tier), Azure Machine Learning compute, and Copilot Studio (from ~$200/month per 2,000 sessions). Total AI infrastructure costs for a production agent typically range from $800–$5,000/month depending on volume. Kovil AI provides a detailed cost model as part of every scoping engagement.",
  },
  {
    q: "Can Azure AI Foundry agents connect to non-Microsoft systems?",
    a: "Yes. Azure AI Foundry agents connect to external systems through Azure API Management (REST/SOAP connectors), Logic Apps and Power Automate (hundreds of pre-built connectors for Salesforce, SAP, ServiceNow, HubSpot, and more), Semantic Kernel plugins (custom HTTP or SDK integrations), and Azure Data Factory (ETL pipelines from any data source). There is no requirement to be a Microsoft-only shop — most enterprise deployments integrate with a mix of Microsoft and non-Microsoft systems.",
  },
  {
    q: "What is the Kovil AI risk-free pilot for Azure AI Foundry?",
    a: "We scope a single high-impact agent use case, define clear success metrics, and build and deploy it in 2 weeks. If the pilot doesn't hit agreed metrics, you don't pay. The pilot includes: Azure environment provisioning and security configuration, agent architecture and Prompt Flow deployment, RAG pipeline setup if applicable, evaluation framework, and a 30-day post-launch support window. Over 90% of our Azure AI pilots convert to full production engagements. Book a free discovery call to get started.",
  },
]

// ── Accordion Item ────────────────────────────────────────────────────────────

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`border border-border rounded-xl overflow-hidden transition-colors ${open ? "bg-accent/5 border-accent/30" : "bg-card hover:border-border/80"}`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left">
        <span className={`font-medium text-sm ${open ? "text-accent" : "text-foreground"}`}>{q}</span>
        <ChevronDown className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180 text-accent" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Download Card ─────────────────────────────────────────────────────────────

function DownloadCard({ resourceLabel, title, desc, buttonLabel, fileHref }: { resourceLabel: string; title: string; desc: string; buttonLabel: string; fileHref: string }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    if (!email.trim()) return
    if (!isCorporateEmail(email)) {
      setError("Please use your work email address.")
      return
    }

    setLoading(true)
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    const leadData = {
      name: "Resource Download",
      email,
      engagement_type: "azure_download",
      project_description: `Downloaded: ${title}`,
      source: "azure_ai_foundry_download",
    }

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(leadData),
      })

      fetch(`${SUPABASE_URL}/functions/v1/notify-lead`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      }).catch(err => console.error('Email notification error:', err))

    } catch (err) {
      console.error('Lead submission error:', err)
    }

    setLoading(false)
    setSubmitted(true)

    const a = document.createElement("a")
    a.href = fileHref
    a.download = fileHref.split("/").pop() ?? "download.pdf"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
      <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full self-start mb-5" style={{ color: AZURE, background: `${AZURE}18` }}>
        {resourceLabel}
      </span>
      <div className="flex items-start gap-3 mb-4">
        <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${AZURE}18` }}>
          <FileText className="h-5 w-5" style={{ color: AZURE }} />
        </div>
        <h3 className="font-display font-bold text-xl text-foreground leading-snug">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{desc}</p>
      {submitted ? (
        <div className="flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 rounded-xl px-4 py-3">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          Your download has started — check your downloads folder.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={e => { setEmail(e.target.value); setError("") }}
              placeholder="you@company.com"
              className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <Button type="submit" variant="accent" className="rounded-xl shrink-0" disabled={loading}>
              <Download className="h-4 w-4 mr-2" />
              {loading ? "Saving…" : buttonLabel}
            </Button>
          </div>
          {error && (
            <p className="flex items-center gap-1.5 text-xs text-red-400">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />{error}
            </p>
          )}
        </form>
      )}
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function AzureAIFoundryPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Enterprise Automation")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="pt-20 bg-background min-h-screen">

      {/* ── SECTION 1 — HERO ── */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ borderColor: `${AZURE}50`, background: `${AZURE}10`, color: AZURE }}>
              Azure AI Foundry Practice — New York &amp; Austin
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] mb-6">
              Build AI agents on Azure.{" "}
              <span className="text-accent">Ship to production.</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Kovil AI is a specialist Azure AI Foundry implementation partner. We design, build and deploy production-grade AI agents for Microsoft ecosystem organisations — in fixed-price sprints, with zero delivery risk.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button variant="accent" size="lg" className="text-base h-12 px-8 rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all" onClick={openCalendly}>
                Start my Azure AI build <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="#downloads">
                <Button variant="outline" size="lg" className="text-base h-12 px-8 rounded-full">
                  Download the Architecture Guide
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground font-medium">
              2-week risk-free pilot · Fixed-price sprints · Milestone-gated delivery
            </p>
            <p className="text-xs text-muted-foreground/50 mt-4 leading-relaxed max-w-lg">
              Kovil AI is a specialist Azure AI Foundry implementation partner serving enterprises across the United States and United Kingdom. Our practice covers Azure OpenAI integration, Semantic Kernel agent development, Azure AI Search RAG pipelines, Copilot Studio deployment, Prompt Flow LLMOps, and Azure AI governance — delivered from our New York and Austin offices.
            </p>
          </motion.div>

          {/* Right — Azure architecture diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden md:flex items-center justify-center"
          >
            <AzureArchDiagram />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2 — VALUE PROPOSITION ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">The Implementation Gap</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
              Most Azure subscribers have the platform.<br />
              <span className="text-accent">Almost none have production AI agents.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Azure AI Foundry is a world-class platform. But access to Azure OpenAI is not the same as having a working AI agent. The gap is implementation — choosing the right architecture, grounding agents in live enterprise data, configuring security and content safety correctly, and building something that performs under real production load. That's where most teams get stuck. That's exactly what we fix.
            </p>
          </motion.div>

          {/* 3-step process */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: "01",
                title: "Discovery & Architecture",
                timeframe: "1 week",
                desc: "We audit your Azure environment, data estate, and use case landscape — then design the agent architecture, model selection, security posture, and RAG strategy. You get a detailed implementation blueprint before a single resource is provisioned.",
                color: AZURE,
              },
              {
                step: "02",
                title: "Build, Evaluate & Deploy",
                timeframe: "2–3 weeks",
                desc: "We build your first production agent — Semantic Kernel orchestration, Prompt Flow pipeline, Azure AI Search grounding, content safety configuration, and managed endpoint deployment. Evaluated against your real data, not synthetic benchmarks.",
                color: "#FF4F00",
              },
              {
                step: "03",
                title: "Scale & Operate",
                timeframe: "Ongoing",
                desc: "Once your first agent is live and measurably performing, we expand — additional use cases, new data sources, multi-agent workflows, Copilot Studio surfaces. You own the agents. We own the outcomes.",
                color: AZURE,
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: item.color }} />
                <div className="flex items-center justify-between mb-5">
                  <span className="text-4xl font-display font-bold opacity-10 text-foreground">{item.step}</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}10` }}>
                    {item.timeframe}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Why most fail */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <p className="text-sm font-mono tracking-widest uppercase mb-6 text-center" style={{ color: AZURE }}>Why Azure AI implementations fail — and what we do differently</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  problem: "Azure OpenAI API access without an agent architecture",
                  fix: "We design the full agent stack upfront — model selection, orchestration layer, retrieval strategy, memory management, and tool integrations — before writing a line of code.",
                },
                {
                  problem: "RAG pipelines with no enterprise data grounding",
                  fix: "We connect Azure AI Search to your live data sources — SharePoint, SQL, Blob, APIs — with chunking strategies, freshness automation, and semantic re-ranking tuned to your domain.",
                },
                {
                  problem: "Dev builds with no production security or compliance",
                  fix: "Every build includes Managed Identity auth, private endpoints, content safety filters, Entra ID RBAC, and Prompt Flow audit logging — security is not an afterthought.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs font-bold">✕</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-through opacity-60">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${AZURE}20` }}>
                      <span className="text-xs font-bold" style={{ color: AZURE }}>✓</span>
                    </div>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2B — WHAT IS AZURE AI FOUNDRY (AEO) ── */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Azure AI Foundry Explained</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">What is Azure AI Foundry?</h2>
            <div className="prose-like space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg"><strong className="text-foreground">Azure AI Foundry is Microsoft&apos;s unified platform for building, deploying, and governing enterprise AI applications and agents.</strong> Launched in late 2024 as a rebrand of Azure AI Studio, it consolidates the Azure Model Catalog (1,700+ models including GPT-4o, o1, o3-mini, Phi-4, Llama 3.3, and Mistral), Azure OpenAI Service, Prompt Flow, Azure AI Search, and Responsible AI tooling into a single governed workspace.</p>
              <p>For organisations in the Microsoft ecosystem, Azure AI Foundry is the natural foundation for agentic AI — it integrates natively with <strong className="text-foreground">Microsoft Copilot Studio</strong> (low-code agent builder for Teams and M365), <strong className="text-foreground">Semantic Kernel</strong> (open-source orchestration SDK), <strong className="text-foreground">Microsoft Fabric</strong> (unified data platform), and <strong className="text-foreground">Azure Machine Learning</strong> (custom model training and MLOps).</p>
              <p>Enterprise security is handled natively through Azure: <strong className="text-foreground">Managed Identity</strong> for credential-free authentication, <strong className="text-foreground">Private Endpoints</strong> to keep data off the public internet, <strong className="text-foreground">Entra ID RBAC</strong> for access control, and Azure AI Content Safety for input/output filtering. Azure AI Foundry supports HIPAA, SOC 2 Type II, ISO 27001, PCI DSS, and FedRAMP compliance frameworks — making it suitable for regulated industries.</p>
              <p>As of 2025, Azure AI Foundry supports multi-agent workflows via <strong className="text-foreground">Semantic Kernel Agent Framework</strong> and <strong className="text-foreground">AutoGen integration</strong>, enabling complex orchestration where specialised sub-agents collaborate on long-horizon tasks — retrieved data, code execution, API calls, and human-in-the-loop approval flows.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Azure OpenAI", "Semantic Kernel", "Prompt Flow", "Azure AI Search", "Copilot Studio", "Model Catalog", "Responsible AI", "Microsoft Fabric"].map(tag => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted-foreground bg-card">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3 — SERVICES ── */}
      <section className="border-t border-border py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Services</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Azure AI Foundry Services</h2>
            <p className="text-muted-foreground text-lg">From first agent to full enterprise rollout — we cover every phase of the build.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Link href={`/azure-ai-foundry/services/${svc.slug}`} className="group bg-card border border-border rounded-2xl p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col h-full block">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <svc.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-accent mt-5 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA 1 — after services ── */}
      <section className="py-14" style={{ background: `linear-gradient(135deg, ${AZURE}08 0%, transparent 100%)` }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-mono tracking-widest uppercase mb-3" style={{ color: AZURE }}>Free · No commitment</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Not sure which Azure AI Foundry service fits your situation?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Book a free 30-minute discovery call. We&apos;ll review your Azure environment, identify your highest-ROI agent opportunities, and give you an honest architecture recommendation — no sales pitch.</p>
          <Button variant="accent" size="lg" className="rounded-full px-8" onClick={openCalendly}>
            Book a free discovery call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* ── SECTION 4 — USE CASES (Tab Switcher) ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Use Cases</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">What We Build</h2>
          </motion.div>

          {/* Tab bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? "text-white shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:border-accent/30 hover:text-foreground"
                }`}
                style={activeTab === tab ? { background: AZURE, boxShadow: `0 4px 14px ${AZURE}40` } : {}}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }} className="grid md:grid-cols-3 gap-6">
              {useCases[activeTab].map((uc, i) => (
                <Link
                  key={uc.title}
                  href={`/azure-ai-foundry/${tabSlug[activeTab]}/${uc.slug}`}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300 block"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white" style={{ background: AZURE }}>
                      {i + 1}
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground group-hover:text-accent transition-colors">{uc.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.desc}</p>
                  <div className="flex items-center gap-1 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    View details <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── SECTION 5 — CASE STUDIES ── */}
      <section className="border-t border-border py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Results</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-3">Azure AI Foundry in Production</h2>
            <p className="text-muted-foreground text-lg">Real deployments. Real outcomes.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-card border border-border rounded-2xl p-6 flex flex-col">
                <div className="mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>{cs.label}</span>
                  <p className="text-xs text-muted-foreground mt-2">{cs.sub}</p>
                </div>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                </div>
                <div className="mb-6">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">What we built</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.built}</p>
                </div>
                <div className="mt-auto grid grid-cols-3 gap-2">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="rounded-xl p-3 text-center" style={{ background: `${AZURE}10` }}>
                      <div className="font-display font-bold text-lg" style={{ color: AZURE }}>{m.value}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA 2 — after case studies ── */}
      <section className="py-14 border-t border-border bg-foreground">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: AZURE }}>2-week risk-free pilot</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-background leading-tight">
                See results like these in your Azure environment.
              </h2>
              <p className="text-background/60 mt-2 max-w-md">We scope, build, and deploy your first Azure AI Foundry agent in 2 weeks. Fixed price. If it doesn&apos;t hit your agreed metrics, you don&apos;t pay.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="accent" size="lg" className="rounded-full px-8" onClick={openCalendly}>
                Start my pilot <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="#downloads">
                <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 text-background hover:bg-white/10">
                  Download Architecture Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — PLAYBOOK ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Playbook</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">The Azure AI Foundry Playbook</h2>
            <p className="text-muted-foreground text-lg">Implementation guides, architecture patterns, and field notes from real Azure AI Foundry deployments. Written by the engineers who build them.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {playbookArticles.map((article, i) => (
              <motion.div key={article.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Link href={article.href} className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col h-full block">
                  <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full self-start mb-4" style={{ color: AZURE, background: `${AZURE}15` }}>
                    {article.pill}
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground leading-snug mb-3 group-hover:text-accent transition-colors flex-1">{article.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />{article.readTime}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/azure-ai-foundry/playbook" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              View all Playbook articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — DOWNLOADS ── */}
      <section id="downloads" className="border-t border-border py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Resources</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-3">Free Azure AI Foundry Resources</h2>
            <p className="text-muted-foreground text-lg">Download and keep. No spam.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <DownloadCard
                resourceLabel="eBook · 28 pages · PDF"
                title="The Azure AI Foundry Readiness Guide"
                desc="Is your organisation ready to build AI agents on Azure? This guide covers the 5 readiness pillars — data estate, Azure environment, use case prioritisation, governance, and team capability — with a self-assessment scorecard for each."
                buttonLabel="Download free eBook"
                fileHref="/azure-ai-foundry-readiness-guide.pdf"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              <DownloadCard
                resourceLabel="Whitepaper · 22 pages · PDF"
                title="Azure AI Foundry Architecture Whitepaper"
                desc="A technical deep dive into Azure AI Foundry: Model Catalog, Prompt Flow LLMOps, Semantic Kernel orchestration patterns, Azure AI Search RAG pipelines, enterprise security configuration, and phased rollout framework."
                buttonLabel="Download whitepaper"
                fileHref="/azure-ai-foundry-architecture-whitepaper.pdf"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 — WHY KOVIL AI ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Why Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Why Kovil AI for Azure AI Foundry?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Brain,
                title: "Microsoft ecosystem depth, not generic AI consulting",
                desc: "We understand Entra ID, Azure RBAC, Managed Identity, private networking, and how AI agents integrate with M365, Dynamics 365, and Azure services — not just the LLM layer. Our engineers hold Microsoft Azure certifications and have shipped production Azure AI systems.",
              },
              {
                icon: BarChart3,
                title: "Fixed-price sprints. No scope creep.",
                desc: "Every engagement is scoped, priced, and milestone-gated before we write a single line of code. You know exactly what you're getting, when you'll get it, and what it costs — no time-and-materials ambiguity.",
              },
              {
                icon: Shield,
                title: "2-week risk-free pilot",
                desc: "We scope a single high-impact agent, build it to production standards, and deploy it in 2 weeks. If it doesn't hit your agreed success metrics, you pay nothing. Over 90% of our pilots convert to full engagements.",
              },
              {
                icon: Lock,
                title: "Security-first from day one",
                desc: "Every Azure AI build includes Managed Identity authentication, private endpoint configuration, Entra ID RBAC, content safety filtering, and Prompt Flow audit logging. Compliance is not an add-on — it's built in from the first sprint.",
              },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust signals strip */}
          <div className="mt-12 bg-card border border-border rounded-2xl p-8">
            <p className="text-sm font-mono tracking-widest uppercase mb-6 text-center" style={{ color: AZURE }}>Built for enterprise. Trusted by regulated industries.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Shield, label: "HIPAA-aligned builds", sub: "Healthcare-ready configurations" },
                { icon: Lock, label: "SOC 2 compatible", sub: "Audit-ready from day one" },
                { icon: Settings, label: "Azure certified engineers", sub: "Hands-on platform expertise" },
                { icon: CheckCircle2, label: "30-day post-launch support", sub: "Included in every build" },
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: `${AZURE}15` }}>
                    <item.icon className="h-5 w-5" style={{ color: AZURE }} />
                  </div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — FAQ ── */}
      <section className="border-t border-border py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="font-display text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10 — FINAL CTA ── */}
      <section className="py-24 max-w-4xl mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-foreground rounded-2xl p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-3">Ready to build your first Azure AI Foundry agent?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto text-lg">Scoped and shipped in 2 weeks. Fixed price. Zero delivery risk.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button variant="accent" size="lg" className="rounded-full px-8" onClick={openCalendly}>
              Book a discovery call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="#downloads">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 text-background hover:bg-white/10">
                <BookOpen className="mr-2 h-4 w-4" />
                Download the Readiness Guide
              </Button>
            </Link>
          </div>
          <p className="text-background/40 text-sm">No commitment · 2-week pilot · Real outcomes</p>
        </motion.div>
      </section>

    </main>
  )
}
