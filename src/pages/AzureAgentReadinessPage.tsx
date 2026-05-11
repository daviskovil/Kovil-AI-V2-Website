'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, ArrowLeft, CheckCircle2, Clock, Shield, Server,
  AlertTriangle, Cpu, Download, Database, Users, Zap, CalendarDays, ClipboardList,
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { OnboardingModal } from '../components/OnboardingModal'

const AZURE = '#0078D4'

// ── Types ─────────────────────────────────────────────────────────────────────

type Step = 1 | 2 | 3 | 4 | 'results'

interface FormData {
  companyName: string
  contactName: string
  email: string
  industry: string
  orgSize: string
  azureSubscription: string
  azureAiServices: string[]
  identitySecurity: string[]
  agentType: string
  dataSources: string[]
  dataQuality: string
  complianceReqs: string[]
  azureExpertise: string
  aiMaturity: string
  hitlPlan: string
  budget: string
}

interface RiskFlag {
  text: string
  severity: 'high' | 'medium' | 'low'
}

interface RoadmapPhase {
  label: string
  weeks: string
  tasks: string[]
}

interface DimensionInsights {
  infrastructure: string
  data: string
  useCase: string
  team: string
  investment: string
}

interface UseCaseDetails {
  estimatedBuildTime: string
  whatItReplaces: string
  expectedROI: string
}

interface AssessmentResult {
  totalScore: number
  tier: string
  tierColor: string
  summary: string
  sprintTimeline: string
  dimensionScores: {
    infrastructure: number
    data: number
    useCase: number
    team: number
    investment: number
  }
  dimensionInsights: DimensionInsights
  recommendedUseCase: string
  useCaseDetails: UseCaseDetails
  recommendedServices: string[]
  roadmap: RoadmapPhase[]
  dataReadinessPlan: string[]
  teamChecklist: string[]
  riskFlags: RiskFlag[]
}

// ── Constants ─────────────────────────────────────────────────────────────────

const INITIAL_DATA: FormData = {
  companyName: '', contactName: '', email: '',
  industry: '', orgSize: '',
  azureSubscription: '',
  azureAiServices: [], identitySecurity: [],
  agentType: '',
  dataSources: [], dataQuality: '', complianceReqs: [],
  azureExpertise: '', aiMaturity: '', hitlPlan: '', budget: '',
}

const INDUSTRIES = [
  'Financial Services', 'Healthcare & Life Sciences', 'Retail & eCommerce',
  'Manufacturing', 'Professional Services', 'Government & Public Sector',
  'Technology & SaaS', 'Other',
]

const ORG_SIZES = ['Under 500', '500–2,000', '2,001–10,000', '10,000+']

const SUBSCRIPTION_OPTIONS = [
  { id: 'none', label: 'No Azure Account Yet', desc: 'We haven\'t set up Azure' },
  { id: 'payg', label: 'Pay-As-You-Go', desc: 'Individual or dev/test subscription' },
  { id: 'ea', label: 'Enterprise Agreement (EA)', desc: 'Corporate contract with Microsoft' },
  { id: 'csp', label: 'Cloud Solution Provider (CSP)', desc: 'Managed through a Microsoft partner' },
]

const AZURE_AI_SERVICES = [
  'Azure OpenAI Service', 'Azure AI Search', 'Azure Document Intelligence',
  'Azure Machine Learning', 'Azure Bot Service', 'Azure Databricks',
  'Azure Synapse Analytics', 'None of these',
]

const IDENTITY_SECURITY = [
  'Microsoft Entra ID (Azure AD)', 'Conditional Access Policies',
  'Azure Key Vault', 'Managed Identity', 'Private Endpoints / VNet',
  'Azure Firewall', 'Nothing configured yet',
]

const AGENT_TYPES = [
  { id: 'customer_chatbot', label: 'Customer-facing support / sales chatbot', desc: 'External-facing agent handling customer queries, returns, and bookings' },
  { id: 'internal_assistant', label: 'Internal employee knowledge assistant', desc: 'Answers questions from internal docs, policies, HR, and IT support materials' },
  { id: 'doc_processing', label: 'Document processing & data extraction agent', desc: 'Reads, extracts, and routes information from PDFs, forms, and contracts' },
  { id: 'process_automation', label: 'Workflow / process automation agent', desc: 'Automates multi-step business workflows across systems and APIs' },
  { id: 'multi_agent', label: 'Multi-agent orchestration system', desc: 'Multiple specialised agents working together on complex tasks' },
  { id: 'dev_copilot', label: 'Developer productivity copilot', desc: 'Code review, documentation, PR summaries, and internal dev tooling' },
]

const DATA_SOURCES = [
  'SharePoint / OneDrive', 'Azure Blob Storage', 'SQL Database / Azure SQL',
  'REST APIs / External services', 'PDF / Word documents', 'CRM (Salesforce / Dynamics 365)',
  'ERP systems (SAP / Oracle)', 'Real-time event streams',
]

const DATA_QUALITY_OPTIONS = [
  { id: 'clean', label: 'Clean and well-structured' },
  { id: 'partial', label: 'Partially structured — some clean-up needed' },
  { id: 'raw', label: 'Raw and unstructured' },
  { id: 'unsure', label: 'We\'re not sure' },
]

const COMPLIANCE_REQS = [
  'GDPR', 'HIPAA', 'ISO 27001', 'SOC 2 Type II', 'FedRAMP', 'PCI-DSS', 'None / Not sure yet',
]

const AZURE_EXPERTISE_OPTIONS = [
  { id: 'none', label: 'No Azure experience' },
  { id: 'basic', label: 'Basic — used Azure portal, deployed some VMs' },
  { id: 'intermediate', label: 'Intermediate — web apps, networking, storage set up' },
  { id: 'advanced', label: 'Advanced — complex multi-tier architectures, multi-tenant' },
  { id: 'certified', label: 'Azure-certified experts on staff' },
]

const AI_MATURITY_OPTIONS = [
  { id: 'none', label: 'None — starting fresh' },
  { id: 'experimenting', label: 'Some experimentation (used ChatGPT, Copilot, etc.)' },
  { id: 'staging', label: 'AI deployed in dev / staging environments' },
  { id: 'production', label: 'Production AI systems already running' },
]

const HITL_OPTIONS = [
  { id: 'not_defined', label: 'Not discussed yet' },
  { id: 'informal', label: 'Informally discussed — no defined process' },
  { id: 'partial', label: 'Partially defined — we know who\'s responsible' },
  { id: 'defined', label: 'Fully defined — governance process in place' },
]

const BUDGET_OPTIONS = [
  { id: 'under1k', label: 'Less than $1,000 / month' },
  { id: '1k_5k', label: '$1,000 – $5,000 / month' },
  { id: '5k_20k', label: '$5,000 – $20,000 / month' },
  { id: 'over20k', label: 'Over $20,000 / month' },
]

const STEP_TITLES: Record<number, string> = {
  1: 'Organisation Profile',
  2: 'Azure Infrastructure',
  3: 'Use Case & Data',
  4: 'Team & Investment',
}

// ── Scoring & Report Generation ───────────────────────────────────────────────

function calculateResults(data: FormData): AssessmentResult {
  // ── Raw scores ───────────────────────────────────────────────────────────

  // Infrastructure (max 25)
  const subScore = ({ none: 0, payg: 5, ea: 12, csp: 12 } as Record<string, number>)[data.azureSubscription] ?? 0
  const aiServicesCount = data.azureAiServices.filter(s => s !== 'None of these').length
  const aiServicesScore = Math.min(10, aiServicesCount * 2)
  const hasEntraId = data.identitySecurity.includes('Microsoft Entra ID (Azure AD)')
  const hasKeyVault = data.identitySecurity.includes('Azure Key Vault')
  const hasPrivateEndpoints = data.identitySecurity.includes('Private Endpoints / VNet')
  const identityScore = Math.min(3, (hasEntraId ? 1 : 0) + (hasKeyVault ? 1 : 0) + (hasPrivateEndpoints ? 1 : 0))
  const infraScore = Math.min(25, subScore + aiServicesScore + identityScore)

  // Data (max 25)
  const sourceCount = data.dataSources.length
  const sourceScore = sourceCount >= 6 ? 15 : sourceCount >= 4 ? 10 : sourceCount >= 2 ? 6 : sourceCount >= 1 ? 3 : 0
  const qualityScore = ({ clean: 8, partial: 5, raw: 2, unsure: 0 } as Record<string, number>)[data.dataQuality] ?? 0
  const complianceCount = data.complianceReqs.filter(c => c !== 'None / Not sure yet').length
  const complianceScore = complianceCount > 0 ? 2 : 0
  const dataScore = Math.min(25, sourceScore + qualityScore + complianceScore)

  // Use Case (max 20)
  const agentTypeScore = data.agentType ? 12 : 0
  const dataSourceBonus = sourceCount >= 3 ? 8 : sourceCount >= 1 ? 4 : 0
  const useCaseScore = Math.min(20, agentTypeScore + dataSourceBonus)

  // Team (max 20)
  const azureExpRaw = ({ none: 0, basic: 3, intermediate: 7, advanced: 13, certified: 17 } as Record<string, number>)[data.azureExpertise] ?? 0
  const azureExpScore = Math.min(12, azureExpRaw)
  const aiMatScore = Math.min(5, ({ none: 0, experimenting: 2, staging: 4, production: 6 } as Record<string, number>)[data.aiMaturity] ?? 0)
  const hitlScore = ({ not_defined: 0, informal: 1, partial: 2, defined: 3 } as Record<string, number>)[data.hitlPlan] ?? 0
  const teamScore = Math.min(20, azureExpScore + aiMatScore + hitlScore)

  // Budget / Governance (max 10)
  const budgetScore = ({ under1k: 2, '1k_5k': 5, '5k_20k': 8, over20k: 10 } as Record<string, number>)[data.budget] ?? 0

  const totalScore = Math.min(100, infraScore + dataScore + useCaseScore + teamScore + budgetScore)

  // ── Dimension display scores (0–100) ─────────────────────────────────────

  const dimensionScores = {
    infrastructure: Math.round((infraScore / 25) * 100),
    data: Math.round((dataScore / 25) * 100),
    useCase: Math.round((useCaseScore / 20) * 100),
    team: Math.round((teamScore / 20) * 100),
    investment: Math.round((budgetScore / 10) * 100),
  }

  // ── Tier ─────────────────────────────────────────────────────────────────

  const company = data.companyName || 'Your organisation'
  let tier: string, tierColor: string, summary: string, sprintTimeline: string
  if (totalScore >= 76) {
    tier = 'Enterprise-Ready'
    tierColor = 'text-green-400'
    summary = `${company} has the Azure infrastructure, data maturity, and team capability to build and deploy a production-grade AI agent on Azure AI Foundry. A focused 4–6 week sprint can have your first agent live.`
    sprintTimeline = '4–6 weeks to first agent live'
  } else if (totalScore >= 56) {
    tier = 'Pre-Production Ready'
    tierColor = 'text-[#0078D4]'
    summary = `${company} has a solid Azure foundation. Address the 1–2 gaps flagged below and you\'re ready to begin a structured build sprint. Expect your first agent live in 6–10 weeks.`
    sprintTimeline = '6–10 weeks (close gaps first)'
  } else if (totalScore >= 36) {
    tier = 'Foundation Building Needed'
    tierColor = 'text-yellow-400'
    summary = `${company} needs 4–8 weeks of Azure infrastructure and data preparation before deploying agents to production. Getting the foundations right prevents costly rebuilds and security failures later.`
    sprintTimeline = '12–16 weeks (foundation + build + launch)'
  } else {
    tier = 'Discovery Phase'
    tierColor = 'text-orange-400'
    summary = `${company} is early in the Azure AI journey. A scoping sprint will define the right architecture, identify your highest-value first agent, and build a realistic 90-day deployment roadmap.`
    sprintTimeline = 'Scoping sprint recommended first'
  }

  // ── Dimension insights ───────────────────────────────────────────────────

  const dimensionInsights: DimensionInsights = {
    infrastructure: infraScore >= 20
      ? 'Strong Azure foundation — enterprise agreement and existing AI services mean infrastructure setup is minimal.'
      : infraScore >= 12
      ? 'Solid subscription in place. Configure remaining AI services and identity controls before the build sprint.'
      : infraScore >= 5
      ? 'Azure account exists but AI services and security layer need setting up — allow 2–3 weeks of infrastructure work.'
      : 'No Azure infrastructure in place. Environment setup is the first sprint milestone.',

    data: dataScore >= 20
      ? 'Data is production-ready — structured sources and clean quality enable immediate retrieval pipeline setup.'
      : dataScore >= 12
      ? 'Good data foundation. Budget 1–2 weeks for ingestion pipeline setup and metadata enrichment before build.'
      : dataScore >= 6
      ? 'Data requires preparation before reliable agent retrieval is possible — plan a dedicated data preparation sprint.'
      : 'Data readiness is the primary risk area. A data audit and preparation phase must precede agent development.',

    useCase: useCaseScore >= 16
      ? 'Well-defined use case with identified data sources — the agent scope is clear and buildable.'
      : useCaseScore >= 10
      ? 'Good use case direction. Define acceptance criteria and edge cases before development begins.'
      : useCaseScore >= 4
      ? 'Use case is partially defined — a scoping workshop will sharpen the scope and prevent scope creep.'
      : 'The use case needs definition before any build begins. A scoping sprint is the recommended next step.',

    team: teamScore >= 16
      ? 'Strong in-house Azure and AI capability — your team can lead the build with specialist support as needed.'
      : teamScore >= 10
      ? 'Solid foundation. Embedding a specialist Azure AI engineer will reduce risk and accelerate the timeline.'
      : teamScore >= 5
      ? 'Limited Azure AI expertise in-house — a managed build engagement significantly reduces delivery risk.'
      : 'No Azure AI experience on the team — a fully managed build is the lowest-risk path to production.',

    investment: budgetScore >= 8
      ? 'Budget is well-aligned for a production-grade Azure AI Foundry deployment including GPT-4o and premium search.'
      : budgetScore >= 5
      ? 'Budget is workable — scope the first agent carefully to stay within GPT-4o throughput limits.'
      : budgetScore >= 2
      ? 'Constrained budget — start with Standard tier Azure OpenAI and scale as you prove ROI.'
      : 'Budget not yet defined — this is a prerequisite for any build commitment.',
  }

  // ── Recommended use case ─────────────────────────────────────────────────

  const USE_CASE_MAP: Record<string, string> = {
    'Financial Services': 'AI-Powered KYC & Document Verification Agent',
    'Healthcare & Life Sciences': 'Clinical Documentation & Prior Authorisation Assistant',
    'Retail & eCommerce': 'Customer Order Support & Returns Automation Agent',
    'Manufacturing': 'Maintenance Ticket Classification & Routing Agent',
    'Professional Services': 'Internal Knowledge & Document Q&A Assistant',
    'Government & Public Sector': 'Policy Document Classification & Compliance Agent',
    'Technology & SaaS': 'Internal Developer Copilot with Code Review Automation',
    'Other': 'Internal Knowledge Management & Process Automation Agent',
  }
  const recommendedUseCase = USE_CASE_MAP[data.industry] ?? 'Internal Knowledge Management & Process Automation Agent'

  // ── Use case details by agent type ──────────────────────────────────────

  const USE_CASE_DETAILS: Record<string, UseCaseDetails> = {
    customer_chatbot: {
      estimatedBuildTime: '4–6 weeks',
      whatItReplaces: 'First-line support, FAQ handling, ticket triage, and basic order queries',
      expectedROI: '20–40% reduction in inbound support ticket volume within 90 days of launch',
    },
    internal_assistant: {
      estimatedBuildTime: '3–5 weeks',
      whatItReplaces: 'Manual document search, policy lookups, repetitive IT and HR queries',
      expectedROI: '2–4 hours saved per employee per week on information retrieval tasks',
    },
    doc_processing: {
      estimatedBuildTime: '4–7 weeks',
      whatItReplaces: 'Manual document review, data entry, form classification, and routing workflows',
      expectedROI: '60–80% reduction in manual document processing time; faster SLA compliance',
    },
    process_automation: {
      estimatedBuildTime: '5–8 weeks',
      whatItReplaces: 'Manual multi-step approval workflows, status update chasing, and cross-system data routing',
      expectedROI: '30–50% reduction in process cycle time; fewer handoff errors',
    },
    multi_agent: {
      estimatedBuildTime: '8–12 weeks',
      whatItReplaces: 'Complex multi-department workflows that currently require human coordination across teams',
      expectedROI: 'High — multi-agent systems typically address high-value enterprise bottlenecks worth $500K+ annually',
    },
    dev_copilot: {
      estimatedBuildTime: '3–5 weeks',
      whatItReplaces: 'Manual code review, onboarding documentation, PR summary writing, and runbook lookups',
      expectedROI: '15–25% developer productivity improvement within 60 days of deployment',
    },
  }
  const useCaseDetails = USE_CASE_DETAILS[data.agentType] ?? USE_CASE_DETAILS['internal_assistant']

  // ── Recommended Azure services ───────────────────────────────────────────

  const AZURE_SERVICES_MAP: Record<string, string[]> = {
    customer_chatbot: [
      'Azure OpenAI Service (GPT-4o) — reasoning and response generation',
      'Azure AI Search — RAG retrieval over your knowledge base',
      'Azure Bot Service / Direct Line — channel connectivity (web, Teams, WhatsApp)',
      'Azure Cosmos DB — conversation history and session state',
      'Azure App Service — hosting the agent API layer',
    ],
    internal_assistant: [
      'Azure OpenAI Service (GPT-4o) — reasoning and answer generation',
      'Azure AI Search (vector + keyword hybrid) — RAG over internal documents',
      'Microsoft Graph API — SharePoint and Teams content ingestion',
      'Azure AI Foundry — agent orchestration, evaluation, and prompt management',
      'Azure API Management — access control and rate limiting per team/role',
    ],
    doc_processing: [
      'Azure Document Intelligence — form extraction, table parsing, and PDF comprehension',
      'Azure OpenAI Service (GPT-4o) — semantic understanding and field classification',
      'Azure Blob Storage — document ingestion pipeline and archival',
      'Azure Functions — serverless processing orchestration and routing logic',
      'Azure AI Search — post-extraction retrieval and audit trail indexing',
    ],
    process_automation: [
      'Azure OpenAI Service (GPT-4o) — decision reasoning and natural language triggers',
      'Azure Logic Apps — low-code workflow orchestration across systems',
      'Azure Service Bus — reliable message queuing between workflow steps',
      'Azure Functions — custom action handlers and system integrations',
      'Azure API Management — controlled exposure of internal APIs to the agent',
    ],
    multi_agent: [
      'Azure AI Foundry (multi-agent SDK) — orchestration of specialist agent roles',
      'Azure OpenAI Service (GPT-4o) — shared reasoning model across agent fleet',
      'Azure Container Apps — isolated hosting for each specialist agent',
      'Azure Service Bus — agent-to-agent messaging and task handoff',
      'Azure AI Search — shared knowledge base accessible to all agents',
    ],
    dev_copilot: [
      'GitHub Copilot Enterprise — in-IDE code suggestions and chat',
      'Azure OpenAI Service (GPT-4o) — custom reasoning over your internal codebase',
      'Azure DevOps — PR summary automation and pipeline integration',
      'Azure AI Foundry — prompt management and evaluation of code outputs',
      'VS Code Extension SDK — custom tooling surface for your engineering team',
    ],
  }
  const recommendedServices = AZURE_SERVICES_MAP[data.agentType] ?? AZURE_SERVICES_MAP['internal_assistant']

  // ── 90-Day Roadmap ───────────────────────────────────────────────────────

  const hasSubscription = data.azureSubscription && data.azureSubscription !== 'none'

  const foundationTasks: string[] = []
  if (!hasSubscription) foundationTasks.push('Set up Azure subscription (EA or PAYG) and configure spending limits and cost alerts')
  foundationTasks.push('Create Azure Resource Group and configure Azure AI Foundry Hub and Project')
  if (!hasEntraId) foundationTasks.push('Configure Microsoft Entra ID and assign RBAC roles to the project team')
  if (!hasKeyVault) foundationTasks.push('Set up Azure Key Vault to manage API keys, connection strings, and secrets')
  foundationTasks.push('Deploy Azure OpenAI Service and request GPT-4o model access (may require quota approval)')
  foundationTasks.push('Provision Azure AI Search instance and define index schema for your data')
  if (data.dataQuality === 'raw' || data.dataQuality === 'partial' || data.dataQuality === 'unsure') {
    foundationTasks.push('Run data preparation sprint — clean, chunk, and structure content for reliable retrieval')
  }
  if (!data.hitlPlan || data.hitlPlan === 'not_defined' || data.hitlPlan === 'informal') {
    foundationTasks.push('Define human-in-the-loop governance: owner, trigger conditions, and escalation SLA')
  }

  const sourcesList = data.dataSources.slice(0, 3).join(', ') || 'identified data repositories'

  const buildTasks: string[] = [
    `Build ${recommendedUseCase} using Azure AI Foundry SDK`,
    'Configure RAG pipeline — chunking strategy, embedding model (text-embedding-3-large), and index schema',
    'Implement system prompt, grounding instructions, and agent persona',
    `Connect data sources (${sourcesList}) via ingestion pipeline and test retrieval accuracy`,
    'Build agent orchestration logic, tool definitions, and fallback handling',
    'Configure Azure AI Content Safety filters and define guardrail thresholds',
    'Run iterative prompt engineering cycles against your real data',
  ]

  const launchTasks: string[] = [
    'Set up Azure Monitor and Application Insights for agent tracing and latency tracking',
    'Run formal evaluation using Azure AI Foundry Evaluation SDK — groundedness, relevance, coherence',
    'Conduct user acceptance testing with 10–20 internal testers from target user group',
    'Staged rollout — 10% → 50% → 100% of target users with rollback plan',
    'Establish HITL review cadence — weekly output sampling and structured feedback loop',
    'Document agent behaviour, known limitations, and escalation paths for the support team',
  ]

  const roadmapWeeks = {
    foundation: totalScore >= 76 ? 'Weeks 1–2' : totalScore >= 56 ? 'Weeks 1–3' : totalScore >= 36 ? 'Weeks 1–6' : 'Weeks 1–4',
    build: totalScore >= 76 ? 'Weeks 3–6' : totalScore >= 56 ? 'Weeks 4–9' : totalScore >= 36 ? 'Weeks 7–12' : 'Weeks 5–12',
    launch: totalScore >= 76 ? 'Weeks 7–8' : totalScore >= 56 ? 'Weeks 10–12' : 'Weeks 13–16',
  }

  const roadmap: RoadmapPhase[] = [
    {
      label: totalScore >= 76 ? 'Architecture Lock-in' : totalScore >= 56 ? 'Close Gaps' : 'Foundation Build',
      weeks: roadmapWeeks.foundation,
      tasks: foundationTasks.slice(0, 6),
    },
    {
      label: 'Build Sprint',
      weeks: roadmapWeeks.build,
      tasks: buildTasks,
    },
    {
      label: 'Harden & Launch',
      weeks: roadmapWeeks.launch,
      tasks: launchTasks,
    },
  ]

  // ── Data readiness plan ──────────────────────────────────────────────────

  const dataReadinessPlan: string[] = []

  if (data.dataQuality === 'unsure') {
    dataReadinessPlan.push('Conduct a data audit — catalogue all document types, formats, volumes, and data owners')
    dataReadinessPlan.push('Assess data sensitivity — identify any PII or regulated content requiring access controls')
    dataReadinessPlan.push('Define chunking strategy once data is mapped (recommended: 512 tokens, 10% overlap)')
  } else if (data.dataQuality === 'raw') {
    dataReadinessPlan.push('Normalise raw data — convert to formats compatible with Azure AI Search (PDF, TXT, JSON, HTML)')
    dataReadinessPlan.push('Content deduplication — remove contradictory or outdated documents that degrade retrieval accuracy')
    dataReadinessPlan.push('Define chunking strategy: 512 tokens with 10% overlap is a strong starting point for most use cases')
    dataReadinessPlan.push('Metadata enrichment — add title, date, author, category, and source fields to every document')
  } else if (data.dataQuality === 'partial') {
    dataReadinessPlan.push('Data clean-up sprint — remove duplicates, fix formatting inconsistencies, and retire outdated content')
    dataReadinessPlan.push('Metadata standardisation — ensure consistent field names and values across all document sources')
    dataReadinessPlan.push('Define chunking strategy and select embedding model — text-embedding-3-large recommended for most workloads')
  } else { // clean
    dataReadinessPlan.push('Data is production-ready — proceed directly to Azure AI Search ingestion pipeline setup')
    dataReadinessPlan.push('Select embedding model and define chunking strategy — text-embedding-3-large with 512-token chunks recommended')
  }

  if (data.dataSources.includes('SharePoint / OneDrive')) {
    dataReadinessPlan.push('Configure Microsoft Graph API connector to continuously sync SharePoint content into Azure AI Search')
  }
  if (data.dataSources.includes('SQL Database / Azure SQL')) {
    dataReadinessPlan.push('Set up Azure AI Search SQL indexer or custom ETL pipeline for structured relational data')
  }
  if (data.dataSources.includes('PDF / Word documents')) {
    dataReadinessPlan.push('Deploy Azure Document Intelligence to extract and structure content from PDFs and Office files before indexing')
  }
  if (data.dataSources.includes('CRM (Salesforce / Dynamics 365)')) {
    dataReadinessPlan.push('Build a custom connector or use Azure Logic Apps to sync CRM records into the agent\'s knowledge base')
  }
  if (complianceCount > 0) {
    const reqs = data.complianceReqs.filter(c => c !== 'None / Not sure yet')
    dataReadinessPlan.push(`Compliance pre-check — validate ${reqs.join(' + ')} data handling requirements before any data enters Azure AI pipelines`)
  }

  const dataReadinessPlanFinal = dataReadinessPlan.slice(0, 7)

  // ── Team & governance checklist ──────────────────────────────────────────

  const teamChecklist: string[] = []

  if (data.azureExpertise === 'none' || data.azureExpertise === 'basic') {
    teamChecklist.push('Set up Azure AI Foundry Hub and Project — requires Owner or Contributor role on the target resource group')
    teamChecklist.push('Complete Azure AI Foundry quickstart to understand the Hub → Project → Deployment → Agent hierarchy')
    teamChecklist.push('Engage an Azure-certified partner or managed AI engineer for solution architecture review before build begins')
  } else if (data.azureExpertise === 'intermediate') {
    teamChecklist.push('Review Azure AI Foundry SDK documentation — focus on agent creation, tool definitions, and evaluation patterns')
    teamChecklist.push('Set up Azure AI Foundry Hub and configure GPT-4o model deployment with appropriate throughput quota')
    teamChecklist.push('Study RAG implementation patterns — chunking strategy, embedding model selection, hybrid retrieval configuration')
  } else {
    teamChecklist.push('Focus on Azure AI Foundry-specific patterns: prompt flow, evaluation SDK, distributed tracing, and content safety')
    teamChecklist.push('Review multi-agent orchestration patterns if you plan to build beyond a single-agent deployment')
  }

  if (!data.hitlPlan || data.hitlPlan === 'not_defined' || data.hitlPlan === 'informal') {
    teamChecklist.push('Appoint a named HITL owner — the person accountable for agent output quality must be identified before build begins')
    teamChecklist.push('Define trigger conditions — document what confidence levels or content types require human review before release')
    teamChecklist.push('Document the escalation path and SLA — how does a flagged output reach the reviewer and what is the resolution time?')
  } else if (data.hitlPlan === 'partial') {
    teamChecklist.push('Formalise your HITL governance in writing — a one-page process document is sufficient to start')
    teamChecklist.push('Configure Azure AI Content Safety as your automated first-line HITL layer with custom category thresholds')
  } else {
    teamChecklist.push('Configure Azure AI Content Safety filters to enforce your documented governance policies')
    teamChecklist.push('Set up Azure Monitor alerts to flag agent outputs that breach defined confidence or safety thresholds')
  }

  if (data.aiMaturity === 'none' || data.aiMaturity === 'experimenting') {
    teamChecklist.push('Run a 1-week internal pilot using Azure OpenAI Playground before committing to a full build sprint')
    teamChecklist.push('Define evaluation metrics upfront — groundedness, relevance, and coherence are standard starting points for RAG agents')
  }

  const teamChecklistFinal = teamChecklist.slice(0, 8)

  // ── Risk flags ───────────────────────────────────────────────────────────

  const riskFlags: RiskFlag[] = []
  const hasRegulatedCompliance = data.complianceReqs.some(c => ['HIPAA', 'FedRAMP', 'PCI-DSS'].includes(c))
  const hasDataSecurity = data.identitySecurity.some(s => ['Azure Key Vault', 'Private Endpoints / VNet', 'Azure Firewall'].includes(s))

  if (!hasSubscription) {
    riskFlags.push({ text: 'No Azure subscription in place. This is the critical first step — nothing can be built without it. Kovil AI can set up and configure your Azure environment as part of sprint 1.', severity: 'high' })
  }
  if (hasSubscription && !hasEntraId) {
    riskFlags.push({ text: 'Microsoft Entra ID not configured. Enterprise AI agents require proper identity management to control data access, audit usage logs, and pass internal security reviews.', severity: 'high' })
  }
  if (!data.hitlPlan || data.hitlPlan === 'not_defined') {
    riskFlags.push({ text: 'Human-in-the-loop accountability is not defined. Agents without clear human oversight paths fail enterprise compliance reviews and generate unchecked errors in production at scale.', severity: 'high' })
  }
  if (data.dataQuality === 'raw' || data.dataQuality === 'unsure') {
    riskFlags.push({ text: 'Unstructured or unknown data quality requires a dedicated preparation phase (typically 2–4 weeks) before reliable agent retrieval and grounding is possible. Skipping this is the #1 cause of poor agent output quality.', severity: 'medium' })
  }
  if (data.azureExpertise === 'none' || data.azureExpertise === 'basic') {
    riskFlags.push({ text: 'Limited Azure expertise in-house. Azure AI Foundry architecture mistakes — wrong SKU selection, poor chunking strategy, missing monitoring — are costly and slow to reverse. A managed build engagement is strongly recommended.', severity: 'medium' })
  }
  if (hasRegulatedCompliance && !hasDataSecurity) {
    riskFlags.push({ text: 'Regulated compliance requirements (HIPAA / FedRAMP / PCI-DSS) without data security controls (Key Vault, Private Endpoints). Sensitive data must be protected before entering agent pipelines — this is a compliance blocker, not a nice-to-have.', severity: 'high' })
  }
  if (data.budget === 'under1k') {
    riskFlags.push({ text: 'Sub-$1K/month budget may restrict access to GPT-4o throughput tiers and premium Azure AI Search SKUs. Scope your first agent to Standard tiers and plan for a budget uplift once ROI is demonstrated.', severity: 'low' })
  }

  return {
    totalScore, tier, tierColor, summary, sprintTimeline,
    dimensionScores, dimensionInsights,
    recommendedUseCase, useCaseDetails, recommendedServices,
    roadmap,
    dataReadinessPlan: dataReadinessPlanFinal,
    teamChecklist: teamChecklistFinal,
    riskFlags,
  }
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SelectChip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-1.5 rounded-lg border text-sm font-medium transition-all"
      style={
        selected
          ? { background: AZURE + '20', borderColor: AZURE, color: 'white' }
          : { background: '#1a1a1a', borderColor: '#333333', color: '#888888' }
      }
    >
      {label}
    </button>
  )
}

function RadioCard({ label, selected, onClick, desc }: { label: string; selected: boolean; onClick: () => void; desc?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all"
      style={
        selected
          ? { background: AZURE + '15', borderColor: AZURE, color: 'white' }
          : { background: '#1a1a1a', borderColor: '#333333', color: '#888888' }
      }
    >
      <div className="flex items-start gap-2.5">
        {selected && <span className="shrink-0 mt-0.5 text-xs" style={{ color: AZURE }}>●</span>}
        <div>
          <div className="font-semibold">{label}</div>
          {desc && <div className="text-xs mt-0.5 font-normal" style={{ color: '#666666' }}>{desc}</div>}
        </div>
      </div>
    </button>
  )
}

function DimensionBar({ label, value, insight }: { label: string; value: number; insight?: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-[#888888] font-medium capitalize">{label}</span>
        <span className="text-white font-semibold">{value}</span>
      </div>
      <div className="h-2 bg-[#222222] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: AZURE }}
        />
      </div>
      {insight && <p className="text-xs leading-relaxed pt-0.5" style={{ color: '#555555' }}>{insight}</p>}
    </div>
  )
}

// ── Static content ────────────────────────────────────────────────────────────

const HERO_PILLS = [
  { icon: Clock, label: '4 minutes', sub: 'to complete' },
  { icon: Zap, label: 'Instant results', sub: 'no sales call required' },
  { icon: Server, label: 'Scored across', sub: '5 Azure AI dimensions' },
  { icon: Users, label: 'Built for', sub: 'enterprise AI decision-makers' },
]

const WHAT_YOU_GET = [
  'Your readiness score across Azure infrastructure, data quality, use case clarity, team capability, and investment',
  'Your recommended first Azure AI Foundry agent — specific to your industry and target use case',
  'The exact Azure services stack you need to build it, with descriptions of why each service is needed',
  'A phased 90-day deployment roadmap with specific tasks for your situation',
  'A data readiness action plan and team governance checklist tailored to your gaps',
  'Every critical blocker standing between you and a production-grade agent',
]

// ── Main Component ────────────────────────────────────────────────────────────

export default function AzureAgentReadinessPage() {
  const [step, setStep] = useState<Step>(1)
  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [downloading, setDownloading] = useState(false)

  async function handleDownloadPDF() {
    const reportEl = document.querySelector<HTMLElement>('.kovil-azure-print-report')
    if (!reportEl || !result) return
    setDownloading(true)
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ])
      const prev = { display: reportEl.style.display, position: reportEl.style.position, left: reportEl.style.left, top: reportEl.style.top, width: reportEl.style.width }
      reportEl.style.display = 'block'
      reportEl.style.position = 'absolute'
      reportEl.style.left = '-9999px'
      reportEl.style.top = '0'
      reportEl.style.width = '794px'
      await new Promise(r => setTimeout(r, 50))
      const canvas = await html2canvas(reportEl, { scale: 2, useCORS: true, backgroundColor: '#ffffff' })
      Object.assign(reportEl.style, prev)
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      const pdfW = pdf.internal.pageSize.getWidth()
      const pdfH = (canvas.height * pdfW) / canvas.width
      const imgData = canvas.toDataURL('image/jpeg', 0.92)
      const pageH = pdf.internal.pageSize.getHeight()
      if (pdfH <= pageH) {
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pdfH)
      } else {
        let yOffset = 0
        while (yOffset < pdfH) {
          pdf.addImage(imgData, 'JPEG', 0, -yOffset, pdfW, pdfH)
          yOffset += pageH
          if (yOffset < pdfH) pdf.addPage()
        }
      }
      const filename = `kovil-azure-ai-readiness-${(data.companyName || 'report').toLowerCase().replace(/\s+/g, '-')}.pdf`
      pdf.save(filename)
    } finally {
      setDownloading(false)
    }
  }

  function toggleMulti(field: 'azureAiServices' | 'identitySecurity' | 'dataSources' | 'complianceReqs', value: string) {
    setData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(v => v !== value)
        : [...(prev[field] as string[]), value],
    }))
  }

  function setSingle(field: keyof FormData, value: string) {
    setData(prev => ({ ...prev, [field]: value }))
  }

  function handleGenerate() {
    const computed = calculateResults(data)
    setResult(computed)
    setStep('results')
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)

    if (!data.email) return
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
    const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    if (!SUPABASE_URL || !SUPABASE_KEY) return

    const leadData = {
      name: [data.contactName, data.companyName].filter(Boolean).join(' — ') || 'Unknown',
      email: data.email,
      engagement_type: 'Azure AI Foundry Readiness Assessment',
      project_description: [
        `Company: ${data.companyName || '—'}`,
        `Score: ${computed.totalScore} / 100 — ${computed.tier}`,
        `Sprint timeline: ${computed.sprintTimeline}`,
        `Industry: ${data.industry || '—'}`,
        `Org size: ${data.orgSize || '—'}`,
        `Azure subscription: ${data.azureSubscription || '—'}`,
        `Agent type: ${data.agentType || '—'}`,
        `Data quality: ${data.dataQuality || '—'}`,
        `Data sources: ${data.dataSources.join(', ') || '—'}`,
        `Compliance: ${data.complianceReqs.join(', ') || '—'}`,
        `Azure expertise: ${data.azureExpertise || '—'}`,
        `AI maturity: ${data.aiMaturity || '—'}`,
        `HITL plan: ${data.hitlPlan || '—'}`,
        `Monthly budget: ${data.budget || '—'}`,
        `Recommended use case: ${computed.recommendedUseCase}`,
        `Risk flags: ${computed.riskFlags.length} (${computed.riskFlags.filter(r => r.severity === 'high').length} high priority)`,
      ].join('\n'),
      source: 'azure-ai-agent-readiness-assessment',
      notes: `Dimensions — Infra: ${computed.dimensionScores.infrastructure} | Data: ${computed.dimensionScores.data} | Use Case: ${computed.dimensionScores.useCase} | Team: ${computed.dimensionScores.team} | Investment: ${computed.dimensionScores.investment}`,
    }

    const headers = { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json' }
    fetch(`${SUPABASE_URL}/rest/v1/leads`, { method: 'POST', headers: { ...headers, Prefer: 'return=minimal' }, body: JSON.stringify(leadData) }).catch(() => {})
    fetch(`${SUPABASE_URL}/functions/v1/notify-lead`, { method: 'POST', headers, body: JSON.stringify(leadData) }).catch(() => {})
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <main className="min-h-screen bg-[#0A0A0A]">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest mb-4" style={{ color: AZURE }}>
            Free Assessment · Azure AI Foundry
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
            Is Your Enterprise Ready to<br className="hidden sm:block" />
            <span style={{ color: AZURE }}> Deploy AI Agents on Azure?</span>
          </h1>
          <p className="text-lg text-[#888888] max-w-2xl mx-auto leading-relaxed">
            Most enterprises have the intent but not the infrastructure. This assessment scores your organisation
            across five dimensions — and delivers a full deployment plan, not just a number.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {HERO_PILLS.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-2.5 bg-[#111111] border border-[#222222] rounded-full px-4 py-2">
              <Icon className="h-4 w-4 shrink-0" style={{ color: AZURE }} />
              <span className="text-sm font-semibold text-white">{label}</span>
              <span className="text-sm text-[#888888]">{sub}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Assessment ────────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <AnimatePresence mode="wait">

          {/* ── RESULTS ─────────────────────────────────────────────────── */}
          {step === 'results' && result && (
            <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45 }} className="space-y-5">

              {/* Score card */}
              <div className="rounded-2xl border border-[#222222] bg-[#111111] p-8 text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-[#666666] mb-3">Azure AI Foundry Readiness Score</p>
                <div className="text-7xl font-bold text-white mb-2">{result.totalScore}<span className="text-3xl text-[#444444]">/100</span></div>
                <div className={`text-xl font-bold mb-3 ${result.tierColor}`}>{result.tier}</div>
                <p className="text-sm text-[#888888] leading-relaxed max-w-xl mx-auto mb-5">{result.summary}</p>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold" style={{ background: AZURE + '15', color: AZURE }}>
                  <CalendarDays className="h-3.5 w-3.5" />
                  {result.sprintTimeline}
                </div>
              </div>

              {/* Dimension scores + insights */}
              <div className="rounded-2xl border border-[#222222] bg-[#111111] p-6">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#666666] mb-6">Readiness by Dimension</h2>
                <div className="space-y-5">
                  {(Object.entries(result.dimensionScores) as [keyof typeof result.dimensionScores, number][]).map(([key, val]) => (
                    <DimensionBar
                      key={key}
                      label={key === 'useCase' ? 'use case clarity' : key}
                      value={val}
                      insight={result.dimensionInsights[key === 'useCase' ? 'useCase' : key]}
                    />
                  ))}
                </div>
              </div>

              {/* Recommended first agent */}
              <div className="rounded-2xl p-6" style={{ border: `1px solid ${AZURE}30`, background: AZURE + '08' }}>
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#666666] mb-4">Recommended First Agent</h2>
                <div className="flex items-start gap-4 mb-5">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: AZURE + '25' }}>
                    <Cpu className="h-5 w-5" style={{ color: AZURE }} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base leading-snug">{result.recommendedUseCase}</p>
                    <p className="text-[#888888] text-xs mt-1">Based on your industry and target agent type — highest ROI starting point for your organisation</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 border-t pt-4" style={{ borderColor: AZURE + '25' }}>
                  {[
                    { label: 'Build Time', value: result.useCaseDetails.estimatedBuildTime },
                    { label: 'Replaces', value: result.useCaseDetails.whatItReplaces },
                    { label: 'Expected ROI', value: result.useCaseDetails.expectedROI },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#666666] mb-1.5">{label}</p>
                      <p className="text-xs text-[#aaaaaa] leading-relaxed">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Azure services stack */}
              <div className="rounded-2xl border border-[#222222] bg-[#111111] p-6">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#666666] mb-4">
                  <Server className="h-4 w-4" style={{ color: AZURE }} />
                  Azure Services Stack
                </h2>
                <ul className="space-y-3">
                  {result.recommendedServices.map(service => {
                    const [name, ...rest] = service.split(' — ')
                    return (
                      <li key={service} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: AZURE }} />
                        <span className="text-sm text-[#888888] leading-relaxed">
                          <span className="text-white font-medium">{name}</span>
                          {rest.length > 0 && <span> — {rest.join(' — ')}</span>}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* 90-Day Roadmap */}
              <div className="rounded-2xl border border-[#222222] bg-[#111111] p-6">
                <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#666666] mb-5">
                  <CalendarDays className="h-4 w-4" style={{ color: AZURE }} />
                  Your 90-Day Deployment Roadmap
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {result.roadmap.map((phase, i) => (
                    <div key={i} className="rounded-xl p-4" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0" style={{ background: AZURE }}>
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: AZURE }}>{phase.weeks}</p>
                          <p className="text-xs font-bold text-white">{phase.label}</p>
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {phase.tasks.map((task, j) => (
                          <li key={j} className="flex items-start gap-1.5 text-[11px] text-[#777777] leading-relaxed">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-[#444444] shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data readiness + Team checklist */}
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Data readiness */}
                <div className="rounded-2xl border border-[#222222] bg-[#111111] p-6">
                  <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#666666] mb-4">
                    <Database className="h-4 w-4" style={{ color: AZURE }} />
                    Data Readiness Plan
                  </h2>
                  <ul className="space-y-3">
                    {result.dataReadinessPlan.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-0.5 h-4 w-4 rounded-full border flex items-center justify-center shrink-0" style={{ borderColor: AZURE + '50' }}>
                          <span className="text-[9px] font-bold" style={{ color: AZURE }}>{i + 1}</span>
                        </div>
                        <span className="text-xs text-[#888888] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Team & governance checklist */}
                <div className="rounded-2xl border border-[#222222] bg-[#111111] p-6">
                  <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#666666] mb-4">
                    <ClipboardList className="h-4 w-4" style={{ color: AZURE }} />
                    Team &amp; Governance Checklist
                  </h2>
                  <ul className="space-y-3">
                    {result.teamChecklist.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className="mt-0.5 h-4 w-4 rounded flex items-center justify-center shrink-0" style={{ border: `1px solid ${AZURE}50` }}>
                          <span className="text-[9px] font-bold" style={{ color: AZURE }}>✓</span>
                        </div>
                        <span className="text-xs text-[#888888] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Risk flags */}
              {result.riskFlags.length > 0 && (
                <div className="rounded-2xl border border-[#222222] bg-[#111111] p-6">
                  <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#666666] mb-4">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    {result.riskFlags.filter(f => f.severity === 'high').length} Critical Blocker{result.riskFlags.filter(f => f.severity === 'high').length !== 1 ? 's' : ''} · {result.riskFlags.length} Total Issues
                  </h2>
                  <ul className="space-y-4">
                    {result.riskFlags.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full shrink-0" style={{ background: f.severity === 'high' ? '#ef4444' : f.severity === 'medium' ? '#eab308' : '#60a5fa' }} />
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest mr-2" style={{ color: f.severity === 'high' ? '#ef4444' : f.severity === 'medium' ? '#eab308' : '#60a5fa' }}>
                            {f.severity}
                          </span>
                          <span className="text-sm text-[#888888] leading-relaxed">{f.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA card */}
              <div className="rounded-2xl p-6 text-center" style={{ border: `1px solid ${AZURE}30`, background: AZURE + '08' }}>
                <p className="text-white font-bold text-lg mb-2">Want Kovil AI to walk through your results?</p>
                <p className="text-[#888888] text-sm mb-5 max-w-md mx-auto">
                  Book a free 30-minute scoping call. We&apos;ll review your assessment, identify the fastest path to production, and give you a fixed-price sprint quote.
                </p>
                <OnboardingModal defaultGoal="project">
                  <Button size="sm" className="font-semibold px-6 rounded-xl text-white" style={{ background: AZURE }}>
                    Book a Free Azure AI Scoping Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </OnboardingModal>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Button onClick={handleDownloadPDF} variant="outline" size="sm" className="rounded-xl border-[#333333] text-[#888888] hover:text-white gap-2" disabled={downloading}>
                  <Download className={`h-4 w-4 ${downloading ? 'animate-bounce' : ''}`} />
                  {downloading ? 'Generating PDF…' : 'Download Full PDF Report'}
                </Button>
                <button type="button" onClick={() => { setStep(1); setData(INITIAL_DATA); setResult(null) }} className="text-xs text-[#666666] underline underline-offset-2 hover:text-white transition-colors">
                  Retake assessment
                </button>
              </div>

              {/* Hidden PDF report ─────────────────────────────────────────── */}
              <div className="kovil-azure-print-report hidden" style={{ fontFamily: 'system-ui, sans-serif', color: '#111' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #0078D4', paddingBottom: 12, marginBottom: 20 }}>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 20, color: '#111' }}>Kovil AI</div>
                    <div style={{ fontSize: 11, color: '#6b7280' }}>Azure AI Foundry Agent Deployment Readiness Report</div>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: 11, color: '#6b7280' }}>
                    <div>{data.companyName || 'Organisation'} {data.orgSize ? `· ${data.orgSize} employees` : ''}</div>
                    <div>{data.industry || ''}</div>
                    <div>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  </div>
                </div>

                {/* Score */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px 18px', marginBottom: 14, textAlign: 'center' }}>
                  <div style={{ fontSize: 56, fontWeight: 800, color: '#111', lineHeight: 1 }}>{result.totalScore}<span style={{ fontSize: 24, color: '#9ca3af' }}>/100</span></div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#0078D4', marginTop: 4, marginBottom: 6 }}>{result.tier}</div>
                  <div style={{ fontSize: 12, color: '#374151', maxWidth: 480, margin: '0 auto', lineHeight: 1.5, marginBottom: 8 }}>{result.summary}</div>
                  <div style={{ display: 'inline-block', background: '#0078D415', color: '#0078D4', borderRadius: 99, padding: '3px 12px', fontSize: 11, fontWeight: 700 }}>{result.sprintTimeline}</div>
                </div>

                {/* Dimensions */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px 18px', marginBottom: 14 }}>
                  <h3 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: 10 }}>Readiness by Dimension</h3>
                  {(Object.entries(result.dimensionScores) as [string, number][]).map(([key, val]) => (
                    <div key={key} style={{ marginBottom: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}>
                        <span style={{ color: '#374151', fontWeight: 600, textTransform: 'capitalize' }}>{key === 'useCase' ? 'Use Case Clarity' : key}</span>
                        <span style={{ fontWeight: 700 }}>{val}</span>
                      </div>
                      <div style={{ height: 6, background: '#f3f4f6', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{ height: 6, background: '#0078D4', borderRadius: 4, width: `${val}%` }} />
                      </div>
                      <div style={{ fontSize: 10, color: '#9ca3af', marginTop: 2 }}>{result.dimensionInsights[key as keyof DimensionInsights]}</div>
                    </div>
                  ))}
                </div>

                {/* Recommended agent + services */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                  <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px 18px' }}>
                    <h3 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: 8 }}>Recommended First Agent</h3>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#111', lineHeight: 1.4, marginBottom: 8 }}>{result.recommendedUseCase}</div>
                    <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 2 }}><strong>Build time:</strong> {result.useCaseDetails.estimatedBuildTime}</div>
                    <div style={{ fontSize: 10, color: '#6b7280', marginBottom: 2 }}><strong>Replaces:</strong> {result.useCaseDetails.whatItReplaces}</div>
                    <div style={{ fontSize: 10, color: '#6b7280' }}><strong>Expected ROI:</strong> {result.useCaseDetails.expectedROI}</div>
                  </div>
                  <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px 18px' }}>
                    <h3 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: 8 }}>Azure Services Stack</h3>
                    {result.recommendedServices.map(s => (
                      <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: 4, fontSize: 10, color: '#374151' }}>
                        <span style={{ color: '#0078D4', flexShrink: 0 }}>✓</span> {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Roadmap */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px 18px', marginBottom: 14 }}>
                  <h3 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: 10 }}>90-Day Deployment Roadmap</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                    {result.roadmap.map((phase, i) => (
                      <div key={i} style={{ background: '#f9fafb', borderRadius: 8, padding: '10px 12px' }}>
                        <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', color: '#0078D4', marginBottom: 2 }}>{phase.weeks}</div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#111', marginBottom: 6 }}>{phase.label}</div>
                        {phase.tasks.slice(0, 4).map((task, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 4, marginBottom: 3, fontSize: 9.5, color: '#6b7280', lineHeight: 1.4 }}>
                            <span style={{ flexShrink: 0, marginTop: 2 }}>·</span>{task}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data plan + Team checklist */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
                  <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px 18px' }}>
                    <h3 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: 8 }}>Data Readiness Plan</h3>
                    {result.dataReadinessPlan.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: 5, fontSize: 10, color: '#374151', lineHeight: 1.4 }}>
                        <span style={{ color: '#0078D4', flexShrink: 0, fontWeight: 700 }}>{i + 1}.</span>{item}
                      </div>
                    ))}
                  </div>
                  <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px 18px' }}>
                    <h3 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: 8 }}>Team &amp; Governance Checklist</h3>
                    {result.teamChecklist.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 5, marginBottom: 5, fontSize: 10, color: '#374151', lineHeight: 1.4 }}>
                        <span style={{ color: '#0078D4', flexShrink: 0 }}>□</span>{item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risk flags */}
                {result.riskFlags.length > 0 && (
                  <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px 18px', marginBottom: 14 }}>
                    <h3 style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: 8 }}>Critical Blockers &amp; Risk Flags</h3>
                    {result.riskFlags.map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8, fontSize: 10.5, color: '#374151' }}>
                        <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: f.severity === 'high' ? '#ef4444' : f.severity === 'medium' ? '#eab308' : '#60a5fa', flexShrink: 0, marginTop: 3 }} />
                        <span style={{ lineHeight: 1.5 }}>{f.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div style={{ marginTop: 16, borderTop: '1px solid #e5e7eb', paddingTop: 10, fontSize: 10, color: '#9ca3af', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Generated by Kovil AI · kovil.ai · Azure AI Foundry Specialists</span>
                  <span>Book a free scoping call → kovil.ai/book-a-call</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── FORM STEPS ──────────────────────────────────────────────── */}
          {step !== 'results' && (
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="rounded-2xl border border-[#222222] bg-[#111111] shadow-sm overflow-hidden">
              <div className="h-1 bg-[#222222]">
                <div className="h-full transition-all duration-500" style={{ width: `${((step as number) / 4) * 100}%`, background: AZURE }} />
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-0.5" style={{ color: AZURE }}>Step {step} of 4</p>
                  <h2 className="text-xl font-bold text-white">{STEP_TITLES[step as number]}</h2>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {([['companyName','Company name','text','Acme Corp'],['contactName','Your name','text','Jane Smith'],['email','Work email *','email','jane@acmecorp.com']] as [keyof FormData, string, string, string][]).map(([field, label, type, placeholder]) => (
                        <div key={field} className={field === 'email' ? 'sm:col-span-2' : ''}>
                          <label className="block text-xs font-semibold text-[#888888] mb-1.5">{label}</label>
                          <input type={type} value={data[field] as string} onChange={e => setSingle(field, e.target.value)} placeholder={placeholder}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-[#333333] bg-[#1a1a1a] text-sm text-white placeholder:text-[#555555] focus:outline-none transition"
                            onFocus={e => { e.currentTarget.style.borderColor = AZURE; e.currentTarget.style.boxShadow = `0 0 0 2px ${AZURE}20` }}
                            onBlur={e => { e.currentTarget.style.borderColor = '#333333'; e.currentTarget.style.boxShadow = 'none' }}
                          />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">Industry</label>
                      <div className="flex flex-wrap gap-2">{INDUSTRIES.map(ind => <SelectChip key={ind} label={ind} selected={data.industry === ind} onClick={() => setSingle('industry', ind)} />)}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">Organisation size</label>
                      <div className="flex flex-wrap gap-2">{ORG_SIZES.map(s => <SelectChip key={s} label={s} selected={data.orgSize === s} onClick={() => setSingle('orgSize', s)} />)}</div>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-3">Azure subscription type</label>
                      <div className="space-y-2">{SUBSCRIPTION_OPTIONS.map(opt => <RadioCard key={opt.id} label={opt.label} desc={opt.desc} selected={data.azureSubscription === opt.id} onClick={() => setSingle('azureSubscription', opt.id)} />)}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">Azure AI services already deployed <span className="font-normal text-[#555555]">— select all that apply</span></label>
                      <div className="flex flex-wrap gap-2">{AZURE_AI_SERVICES.map(s => <SelectChip key={s} label={s} selected={data.azureAiServices.includes(s)} onClick={() => toggleMulti('azureAiServices', s)} />)}</div>
                      {data.azureAiServices.length > 0 && <p className="text-xs mt-2 font-medium" style={{ color: AZURE }}>{data.azureAiServices.length} selected</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">Identity &amp; security layer <span className="font-normal text-[#555555]">— select all that apply</span></label>
                      <div className="flex flex-wrap gap-2">{IDENTITY_SECURITY.map(s => <SelectChip key={s} label={s} selected={data.identitySecurity.includes(s)} onClick={() => toggleMulti('identitySecurity', s)} />)}</div>
                      {data.identitySecurity.length > 0 && <p className="text-xs mt-2 font-medium" style={{ color: AZURE }}>{data.identitySecurity.length} selected</p>}
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-3">What type of AI agent are you looking to build?</label>
                      <div className="space-y-2">{AGENT_TYPES.map(opt => <RadioCard key={opt.id} label={opt.label} desc={opt.desc} selected={data.agentType === opt.id} onClick={() => setSingle('agentType', opt.id)} />)}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">Where does your key data live? <span className="font-normal text-[#555555]">— select all that apply</span></label>
                      <div className="flex flex-wrap gap-2">{DATA_SOURCES.map(s => <SelectChip key={s} label={s} selected={data.dataSources.includes(s)} onClick={() => toggleMulti('dataSources', s)} />)}</div>
                      {data.dataSources.length > 0 && <p className="text-xs mt-2 font-medium" style={{ color: AZURE }}>{data.dataSources.length} source{data.dataSources.length !== 1 ? 's' : ''} selected</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">How would you describe the quality of that data?</label>
                      <div className="space-y-2">{DATA_QUALITY_OPTIONS.map(opt => <RadioCard key={opt.id} label={opt.label} selected={data.dataQuality === opt.id} onClick={() => setSingle('dataQuality', opt.id)} />)}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">Compliance requirements <span className="font-normal text-[#555555]">— select all that apply</span></label>
                      <div className="flex flex-wrap gap-2">{COMPLIANCE_REQS.map(c => <SelectChip key={c} label={c} selected={data.complianceReqs.includes(c)} onClick={() => toggleMulti('complianceReqs', c)} />)}</div>
                    </div>
                  </div>
                )}

                {/* Step 4 */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">Azure expertise in your team</label>
                      <div className="space-y-2">{AZURE_EXPERTISE_OPTIONS.map(opt => <RadioCard key={opt.id} label={opt.label} selected={data.azureExpertise === opt.id} onClick={() => setSingle('azureExpertise', opt.id)} />)}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">AI / ML experience in your team</label>
                      <div className="space-y-2">{AI_MATURITY_OPTIONS.map(opt => <RadioCard key={opt.id} label={opt.label} selected={data.aiMaturity === opt.id} onClick={() => setSingle('aiMaturity', opt.id)} />)}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">Human-in-the-loop governance plan</label>
                      <div className="space-y-2">{HITL_OPTIONS.map(opt => <RadioCard key={opt.id} label={opt.label} selected={data.hitlPlan === opt.id} onClick={() => setSingle('hitlPlan', opt.id)} />)}</div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#888888] mb-2">Monthly budget earmarked for Azure AI</label>
                      <div className="flex flex-wrap gap-2">{BUDGET_OPTIONS.map(opt => <SelectChip key={opt.id} label={opt.label} selected={data.budget === opt.id} onClick={() => setSingle('budget', opt.id)} />)}</div>
                    </div>
                  </div>
                )}

                {/* Nav */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#222222]">
                  {(step as number) > 1 ? (
                    <Button variant="ghost" size="sm" onClick={() => setStep(((step as number) - 1) as Step)}>
                      <ArrowLeft className="mr-1.5 h-4 w-4" /> Back
                    </Button>
                  ) : <div />}
                  {(step as number) < 4 ? (
                    <Button size="sm" onClick={() => setStep(((step as number) + 1) as Step)} className="font-semibold rounded-xl text-white" style={{ background: AZURE }}>
                      Next <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button size="sm" onClick={handleGenerate} disabled={!data.azureExpertise || !data.aiMaturity || !data.hitlPlan || !data.budget} className="font-semibold px-6 rounded-xl text-white" style={{ background: AZURE }}>
                      Generate My Report <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      {step !== 'results' && (
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }} className="bg-[#111111] border border-[#222222] rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-5">What your report includes</h2>
            <ul className="space-y-3.5">
              {WHAT_YOU_GET.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: AZURE }} />
                  <span className="text-sm text-[#888888] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      )}

      {/* ── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="bg-[#111111] border-t border-[#222222] py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.25 }}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6" style={{ background: AZURE + '15', color: AZURE }}>
              <Shield className="h-3 w-3" /> Azure AI Foundry Specialists
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to build your first Azure AI agent?</h2>
            <p className="text-[#888888] mb-8 leading-relaxed">
              Kovil AI specialises in Azure AI Foundry builds for enterprise. Book a free 30-minute scoping call and we&apos;ll review your readiness results, identify the fastest path to production, and give you a fixed-price sprint quote.
            </p>
            <OnboardingModal defaultGoal="project">
              <Button size="lg" className="font-semibold px-8 rounded-xl text-white" style={{ background: AZURE }}>
                Book a Free Azure AI Scoping Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="text-[#555555] text-xs mt-4">No pitch. No pressure. Just a direct conversation about your Azure AI Foundry build.</p>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
