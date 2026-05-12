'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import {
  ArrowRight, ChevronDown, CheckCircle2, Shield, Database, Brain, Cpu, Zap,
  Wrench, BarChart3, BookOpen, Download, Clock, FileText, AlertCircle, Lock,
  Settings, Search, TrendingUp, Code2, Users, Layers, Star,
} from "lucide-react"
import { Button } from "../components/ui/button"
import { openCalendly } from "../lib/calendly"

// ── Google Cloud brand colours ─────────────────────────────────────────────────
const G_BLUE   = "#4285F4"
const G_RED    = "#EA4335"
const G_YELLOW = "#FBBC04"
const G_GREEN  = "#34A853"

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

// ── Hero — GCP Orbital Diagram ────────────────────────────────────────────────

function GCPOrbitalDiagram() {
  return (
    <svg viewBox="0 0 560 560" className="w-full h-auto" role="img" aria-label="Google Cloud Vertex AI platform diagram showing Gemini, Agent Builder, Vertex AI Search, and Reasoning Engine orbiting the core platform">
      <defs>
        {/* Center hub gradient — lit top-left */}
        <radialGradient id="gcp-hub" cx="34%" cy="26%" r="72%" fx="34%" fy="26%">
          <stop offset="0%"   stopColor="#82B4FF" />
          <stop offset="40%"  stopColor={G_BLUE} />
          <stop offset="100%" stopColor="#1a56c4" />
        </radialGradient>

        {/* Glow filter for center */}
        <filter id="gcp-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="20" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Soft drop shadow for nodes */}
        <filter id="gcp-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.14" />
        </filter>

        {/* Floor shadow blur */}
        <filter id="gcp-floor"><feGaussianBlur stdDeviation="8" /></filter>

        {/* Pulsing ring animation */}
        <style>{`
          @keyframes gcp-pulse {
            0%   { r: 78; opacity: 0.55; }
            100% { r: 110; opacity: 0; }
          }
          .gcp-pulse-ring { animation: gcp-pulse 2.4s ease-out infinite; }
        `}</style>
      </defs>

      {/* Floor shadow */}
      <ellipse cx="280" cy="530" rx="180" ry="16" fill="rgba(0,0,0,0.07)" filter="url(#gcp-floor)" />

      {/* ── Outer orbit ring (r=200) ── */}
      <circle cx="280" cy="280" r="200" fill="none" stroke={G_BLUE} strokeWidth="1.2" strokeOpacity="0.20" strokeDasharray="6 5" />

      {/* ── Inner orbit ring (r=120) ── */}
      <circle cx="280" cy="280" r="120" fill="none" stroke={G_BLUE} strokeWidth="1.4" strokeOpacity="0.28" strokeDasharray="5 4" />

      {/* ── Connection lines — center to inner nodes ── */}
      {/* Top — Gemini — G_BLUE */}
      <line x1="280" y1="208" x2="280" y2="280" stroke={G_BLUE} strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="5 4" />
      {/* Right — Agent Builder — G_GREEN */}
      <line x1="280" y1="280" x2="400" y2="280" stroke={G_GREEN} strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="5 4" />
      {/* Bottom — Vertex AI Search — G_RED */}
      <line x1="280" y1="352" x2="280" y2="280" stroke={G_RED} strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="5 4" />
      {/* Left — Reasoning Engine — G_YELLOW */}
      <line x1="160" y1="280" x2="280" y2="280" stroke={G_YELLOW} strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="5 4" />

      {/* ── Pulsing ring on center ── */}
      <circle className="gcp-pulse-ring" cx="280" cy="280" r="78" fill="none" stroke={G_BLUE} strokeWidth="2" />

      {/* ── Center hub ── */}
      <circle cx="280" cy="280" r="90" fill={G_BLUE} fillOpacity="0.10" filter="url(#gcp-glow)" />
      <circle cx="280" cy="280" r="72" fill="url(#gcp-hub)" filter="url(#gcp-shadow)" />
      {/* Specular highlight */}
      <ellipse cx="260" cy="255" rx="26" ry="16" fill="white" opacity="0.18" />
      {/* Center text */}
      <text x="280" y="271" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="3">VERTEX AI</text>
      <text x="280" y="289" textAnchor="middle" fill="white" fontSize="15" fontWeight="800" fontFamily="system-ui,sans-serif">Platform</text>
      <text x="280" y="306" textAnchor="middle" fill="rgba(255,255,255,0.60)" fontSize="9" fontFamily="system-ui,sans-serif">Gemini 2.0</text>

      {/* ── Inner orbit label ── */}
      <text x="280" y="133" textAnchor="middle" fill={G_BLUE} fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="2.5" opacity="0.70">CORE PLATFORM</text>

      {/* ── Outer orbit label ── */}
      <text x="280" y="58" textAnchor="middle" fill={G_GREEN} fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="2.5" opacity="0.70">BUILD LAYER</text>

      {/* ══ Inner nodes ══ */}

      {/* TOP — Gemini (280, 160) — G_BLUE */}
      <circle cx="280" cy="160" r="34" fill={G_BLUE} filter="url(#gcp-shadow)" />
      <ellipse cx="268" cy="147" rx="12" ry="7" fill="white" opacity="0.20" />
      <text x="280" y="164" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui,sans-serif">Gemini</text>
      <text x="280" y="204" textAnchor="middle" fill={G_BLUE} fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif">Gemini 2.0</text>

      {/* RIGHT — Agent Builder (400, 280) — G_GREEN */}
      <circle cx="400" cy="280" r="34" fill={G_GREEN} filter="url(#gcp-shadow)" />
      <ellipse cx="388" cy="267" rx="12" ry="7" fill="white" opacity="0.20" />
      <text x="400" y="277" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">Agent</text>
      <text x="400" y="289" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">Builder</text>
      <text x="400" y="324" textAnchor="middle" fill={G_GREEN} fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif">Agent Builder</text>

      {/* BOTTOM — Vertex AI Search (280, 400) — G_RED */}
      <circle cx="280" cy="400" r="34" fill={G_RED} filter="url(#gcp-shadow)" />
      <ellipse cx="268" cy="387" rx="12" ry="7" fill="white" opacity="0.20" />
      <text x="280" y="397" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">Vertex AI</text>
      <text x="280" y="409" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">Search</text>
      <text x="280" y="446" textAnchor="middle" fill={G_RED} fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif">Vertex AI Search</text>

      {/* LEFT — Reasoning Engine (160, 280) — G_YELLOW */}
      <circle cx="160" cy="280" r="34" fill={G_YELLOW} filter="url(#gcp-shadow)" />
      <ellipse cx="148" cy="267" rx="12" ry="7" fill="white" opacity="0.20" />
      <text x="160" y="277" textAnchor="middle" fill="#1a1a1a" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">Reasoning</text>
      <text x="160" y="289" textAnchor="middle" fill="#1a1a1a" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">Engine</text>
      <text x="160" y="324" textAnchor="middle" fill="#9a7700" fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif">Reasoning Engine</text>

      {/* ══ Outer nodes ══ */}

      {/* 45° — BigQuery ML (421, 139) — G_BLUE */}
      <circle cx="421" cy="139" r="26" fill={G_BLUE} fillOpacity="0.85" filter="url(#gcp-shadow)" />
      <text x="421" y="143" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">BigQuery</text>
      <text x="421" y="153" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">ML</text>
      <text x="421" y="174" textAnchor="middle" fill={G_BLUE} fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif">BigQuery ML</text>

      {/* 135° — Cloud Storage (421, 421) — G_GREEN */}
      <circle cx="421" cy="421" r="26" fill={G_GREEN} fillOpacity="0.85" filter="url(#gcp-shadow)" />
      <text x="421" y="425" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">Cloud</text>
      <text x="421" y="435" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">Storage</text>
      <text x="421" y="456" textAnchor="middle" fill={G_GREEN} fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif">Cloud Storage</text>

      {/* 225° — Document AI (139, 421) — G_RED */}
      <circle cx="139" cy="421" r="26" fill={G_RED} fillOpacity="0.85" filter="url(#gcp-shadow)" />
      <text x="139" y="425" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">Document</text>
      <text x="139" y="435" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">AI</text>
      <text x="139" y="456" textAnchor="middle" fill={G_RED} fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif">Document AI</text>

      {/* 315° — Workbench (139, 139) — G_YELLOW */}
      <circle cx="139" cy="139" r="26" fill={G_YELLOW} fillOpacity="0.85" filter="url(#gcp-shadow)" />
      <text x="139" y="143" textAnchor="middle" fill="#1a1a1a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">Work-</text>
      <text x="139" y="153" textAnchor="middle" fill="#1a1a1a" fontSize="8" fontWeight="700" fontFamily="system-ui,sans-serif">bench</text>
      <text x="139" y="174" textAnchor="middle" fill="#9a7700" fontSize="9" fontWeight="600" fontFamily="system-ui,sans-serif">Workbench</text>
    </svg>
  )
}

// ── Section 2 — GCP AI Stack tiers ───────────────────────────────────────────

const gcpStackTiers = [
  {
    tier: "Tier 1 — Models",
    color: G_BLUE,
    chips: ["Gemini 2.0 Flash", "Gemini 2.0 Pro", "Gemini 1.5 Pro", "Claude 3.5 (via Model Garden)", "Llama 3.3 (via Model Garden)"],
  },
  {
    tier: "Tier 2 — Build Tools",
    color: G_GREEN,
    chips: ["Vertex AI Agent Builder", "Reasoning Engine", "Vertex AI Studio", "Prompt Management", "Model Evaluation"],
  },
  {
    tier: "Tier 3 — Data & Retrieval",
    color: G_RED,
    chips: ["Vertex AI Search", "BigQuery ML", "Document AI", "Cloud Storage", "AlloyDB AI"],
  },
  {
    tier: "Tier 4 — Ops & Governance",
    color: G_YELLOW,
    chips: ["Vertex AI Pipelines", "Model Monitoring", "Explainable AI", "VPC Service Controls", "IAM & Audit Logs"],
  },
]

// ── Section 3 — Services ──────────────────────────────────────────────────────

const services = [
  {
    icon: Brain,
    title: "Vertex AI Strategy & Readiness",
    slug: "vertex-ai-strategy-readiness",
    desc: "GCP environment audit, use case mapping, and architecture blueprint — we identify your highest-ROI Vertex AI opportunity and design the full stack before a single resource is provisioned.",
  },
  {
    icon: Zap,
    title: "Gemini Integration & Fine-Tuning",
    slug: "gemini-integration",
    desc: "Production Gemini 2.0 deployments with enterprise grounding, supervised fine-tuning, prompt management, and token cost optimisation — shipped in fixed-price sprints.",
  },
  {
    icon: Cpu,
    title: "Agent Builder & Reasoning Engine",
    slug: "vertex-agent-builder",
    desc: "Production AI agents built with Vertex AI Agent Builder and Reasoning Engine — multi-step orchestration, tool calling, grounding in live GCP data sources, and enterprise safety guardrails.",
  },
  {
    icon: Search,
    title: "Vertex AI Search & RAG Pipeline",
    slug: "vertex-ai-search-rag",
    desc: "Enterprise RAG over GCP data using Vertex AI Search — vector and hybrid retrieval, semantic re-ranking, chunking strategy tuned to your domain, and hallucination guardrails throughout.",
  },
  {
    icon: BarChart3,
    title: "BigQuery ML & Data Intelligence",
    slug: "bigquery-ml-data-agents",
    desc: "AI agents and ML models built on BigQuery ML and Dataflow — real-time prediction, anomaly detection, and data intelligence pipelines that surface insights where your analysts work.",
  },
  {
    icon: Wrench,
    title: "Vertex AI Rescue & Optimisation",
    slug: "vertex-ai-rescue-optimisation",
    desc: "Fix broken or underperforming GCP AI deployments — we diagnose root causes (cost overruns, latency, hallucinations, drift) and restore measurable performance within one 2-week sprint.",
  },
]

// ── Section 4 — Use Cases (Left-rail navigation) ──────────────────────────────

type Category = "Data & Analytics" | "Customer Experience" | "Operations" | "Developer Tools"

const CATEGORIES: Category[] = ["Data & Analytics", "Customer Experience", "Operations", "Developer Tools"]

const categoryIcons: Record<Category, typeof Database> = {
  "Data & Analytics":    Database,
  "Customer Experience": Users,
  "Operations":          Settings,
  "Developer Tools":     Code2,
}

const categorySlug: Record<Category, string> = {
  "Data & Analytics":    "data-analytics",
  "Customer Experience": "customer-experience",
  "Operations":          "operations",
  "Developer Tools":     "developer-tools",
}

const useCases: Record<Category, { title: string; slug: string; desc: string }[]> = {
  "Data & Analytics": [
    { title: "BigQuery Intelligent Agent",  slug: "bigquery-intelligent-agent", desc: "Natural-language analytics over your BigQuery data warehouse — query generation, result interpretation, anomaly surfacing, and scheduled insight delivery to your team in Slack or email." },
    { title: "Document AI Pipeline",        slug: "document-ai-pipeline",       desc: "Automated extraction and classification of invoices, contracts, and compliance documents using Document AI and Gemini — structured output to your ERP or data lake." },
    { title: "Enterprise Search Agent",     slug: "enterprise-search-agent",    desc: "Cross-repository enterprise search built on Vertex AI Search — unified search across GCS, BigQuery, databases, and APIs with semantic ranking and access control." },
  ],
  "Customer Experience": [
    { title: "Conversational AI Agent",  slug: "conversational-ai-agent", desc: "Production customer-facing agent built on Vertex AI Agent Builder — Gemini-powered, grounded in your product and policy knowledge, with seamless human handoff and CRM context." },
    { title: "Personalisation Engine",   slug: "personalisation-engine",  desc: "Real-time recommendation and personalisation using Gemini embeddings and user signal pipelines — surface the right product, content, or offer at the right moment, at scale." },
    { title: "Contact Centre AI",        slug: "contact-centre-ai",       desc: "AI agents that handle 60–80% of contact centre queries autonomously — integrated with your CRM, knowledge base, and escalation workflows via CCAI and Vertex AI." },
  ],
  "Operations": [
    { title: "Supply Chain Intelligence", slug: "supply-chain-intelligence",    desc: "Real-time supply chain risk analysis using BigQuery ML and Gemini — ingests supplier, logistics, and demand data, surfaces risks, and recommends re-routing autonomously." },
    { title: "Predictive Analytics Agent", slug: "predictive-analytics-agent",   desc: "Custom prediction pipelines on Vertex AI — demand forecasting, churn prediction, or equipment failure detection — with Gemini explaining predictions in plain language." },
    { title: "Quality Control Vision Agent", slug: "quality-control-vision-agent", desc: "Computer vision quality inspection using Gemini Vision and Vertex AI — detects defects, classifies issues, and triggers downstream workflows in real time on the production line." },
  ],
  "Developer Tools": [
    { title: "Code Generation Agent",          slug: "code-generation-agent",   desc: "Internal developer copilot powered by Gemini Code — trained on your codebase, architecture docs, and runbooks, deployed in your IDE and developer portals." },
    { title: "MLOps Pipeline Agent",           slug: "mlops-pipeline-agent",    desc: "Automates model evaluation, deployment gating, and retraining triggers on Vertex AI Pipelines — with Gemini monitoring and explaining model performance changes." },
    { title: "API Testing & Documentation Agent", slug: "api-testing-agent",  desc: "AI agent that generates, runs, and maintains API tests using Gemini — produces OpenAPI documentation, detects regressions, and flags contract violations automatically." },
  ],
}

// ── Section 5 — Case Studies (horizontal cards) ───────────────────────────────

const caseStudies = [
  {
    industry: "Retail",
    accentColor: G_BLUE,
    sub: "340-person global retailer · e-commerce platform · 2.4M annual transactions",
    problem: "Generic product recommendations driving low conversion — no real-time personalisation, no user-level signal capture, 3.1% recommendation click-through rate.",
    built: "Personalisation AI agent on Vertex AI using Gemini embeddings and real-time Bigtable signal store — personalised recommendations across web, app, and email, grounded in live inventory.",
    metrics: [
      { value: "+28%", label: "average order value" },
      { value: "4.1x", label: "recommendation CTR" },
      { value: "$1.8M", label: "annual revenue uplift" },
    ],
  },
  {
    industry: "Financial Services",
    accentColor: G_GREEN,
    sub: "Investment bank · credit operations · 480 analysts across 6 global offices",
    problem: "Credit memo review averaging 14 hours per deal — analysts manually extracting financial data from unstructured documents, high error rate on long-form due diligence.",
    built: "Document intelligence pipeline using Document AI and Gemini 2.0 — automated extraction of financial metrics, covenant checks, and risk flags from credit memos into structured analyst dashboards.",
    metrics: [
      { value: "78%", label: "reduction in review time" },
      { value: "$2.4M", label: "analyst hours saved" },
      { value: "99.1%", label: "extraction accuracy" },
    ],
  },
  {
    industry: "Media & Entertainment",
    accentColor: G_RED,
    sub: "Global streaming platform · 85M subscribers · 240,000 hours of content",
    problem: "Manual content tagging taking 6 hours per title — inconsistent taxonomy, poor content discovery, 22% of catalogue undiscoverable via search.",
    built: "Content tagging and search pipeline using Vertex AI Search and Gemini Vision — automated multi-label classification, semantic enrichment, and real-time search index updates across the full catalogue.",
    metrics: [
      { value: "94%", label: "content discovery improvement" },
      { value: "17 min", label: "avg time to tag (was 6 hrs)" },
      { value: "+31%", label: "engagement increase" },
    ],
  },
]

// ── Section 6 — Playbook ──────────────────────────────────────────────────────

const playbookArticles = [
  {
    pill: "Implementation Guide",
    title: "How to architect your first Vertex AI agent: A practitioner's checklist",
    desc: "The 12 decisions you must make before writing a single line of agent code — from Gemini model selection to Reasoning Engine vs Agent Builder, grounding strategy, and VPC security posture.",
    readTime: "10 min read",
    href: "/vertex-ai/playbook/architect-your-first-vertex-ai-agent",
  },
  {
    pill: "Technical Deep Dive",
    title: "Vertex AI vs Gemini API: What actually changes when you build enterprise agents on GCP?",
    desc: "A technical breakdown of the differences — VPC Service Controls, IAM, audit logging, CMEK, regional data residency, model versioning, and Vertex AI Search grounding — with migration guidance.",
    readTime: "14 min read",
    href: "/vertex-ai/playbook/vertex-ai-vs-gemini-api",
  },
  {
    pill: "Case Study",
    title: "From 6-hour manual content review to 17 minutes: A Vertex AI build for a streaming platform",
    desc: "Step-by-step walkthrough of an entertainment deployment — Gemini Vision tagging pipeline, Vertex AI Search index design, real-time update architecture, and engagement measurement.",
    readTime: "18 min read",
    href: "/vertex-ai/playbook/retail-personalisation-vertex-ai-build",
  },
]

// ── Section 9 — FAQ ───────────────────────────────────────────────────────────

const faqs = [
  {
    q: "What is Google Cloud Vertex AI?",
    a: "Google Cloud Vertex AI is Google's unified machine learning platform for building, deploying, and scaling AI applications and agents in production. It brings together the Model Garden (150+ foundation models including Gemini 2.0, Claude 3.5, Llama 3.3, and Mistral), Vertex AI Agent Builder for low-code agent creation, Reasoning Engine for complex multi-step orchestration, Vertex AI Search for enterprise RAG, BigQuery ML for data-native modelling, and Document AI for structured extraction — all governed under Google Cloud's enterprise security posture, including VPC Service Controls, IAM, CMEK, and audit logging.",
  },
  {
    q: "What is the difference between Vertex AI and the Gemini API?",
    a: "The Gemini API (available via Google AI Studio) is a direct API to Gemini models, designed for prototyping and consumer use cases. Vertex AI is the enterprise platform that hosts those same models but adds: VPC Service Controls for network isolation, IAM and CMEK for data governance, audit logs for compliance, Vertex AI Search for grounded retrieval, Agent Builder and Reasoning Engine for production orchestration, Vertex AI Pipelines for MLOps, and Model Monitoring for production observability. For any production enterprise deployment, Vertex AI is the correct choice — it is what we build on.",
  },
  {
    q: "What is Vertex AI Agent Builder?",
    a: "Vertex AI Agent Builder is Google Cloud's managed platform for building and deploying AI agents — combining conversational flows, data store grounding (via Vertex AI Search), tool calling, and Gemini reasoning in a managed environment. It supports both no-code and code-first development, integrates natively with Dialogflow CX for complex conversation management, and can be deployed as API endpoints, web widgets, or Telephony integrations. Agent Builder is the recommended starting point for customer-facing agent workloads on GCP.",
  },
  {
    q: "What is the Vertex AI Reasoning Engine?",
    a: "Vertex AI Reasoning Engine (formerly Vertex AI Extensions) is a managed execution environment for deploying custom AI agent logic on Google Cloud. It supports LangChain, LlamaIndex, and custom agent frameworks — running them in a fully managed, scalable, and observable infrastructure. Reasoning Engine is ideal when you need fine-grained control over multi-step agent orchestration, custom tools, complex memory management, or enterprise-grade latency and reliability requirements that go beyond what Agent Builder's managed flows support.",
  },
  {
    q: "How long does a Vertex AI implementation take?",
    a: "A focused pilot agent scoped to one use case — for example, a RAG search agent over your GCS and BigQuery data — typically takes 2–3 weeks from architecture to production deployment on Vertex AI. A full multi-agent system with Reasoning Engine orchestration, BigQuery ML integration, and Vertex AI Search RAG typically runs 6–10 weeks depending on data readiness and enterprise architecture complexity. Kovil AI scopes every engagement in detail before any work begins, so timelines and deliverables are agreed upfront.",
  },
  {
    q: "How does Vertex AI Search enable RAG for enterprise agents?",
    a: "Vertex AI Search is Google Cloud's managed enterprise search service — it indexes your data from GCS, BigQuery, Cloud SQL, websites, and custom data sources, generates vector embeddings using Google's latest embedding models, and supports hybrid (keyword + vector) retrieval with semantic re-ranking. For RAG, Vertex AI Search acts as the retrieval layer: given a user query, it surfaces the most relevant document chunks, which are then passed to Gemini as grounding context. The key enterprise advantages are managed infrastructure, native IAM access control (so agents only retrieve data the user is authorised to see), and near-zero latency retrieval-to-generation pipelines.",
  },
  {
    q: "What is BigQuery ML and how does it relate to Vertex AI?",
    a: "BigQuery ML allows you to create, train, and run ML models directly in BigQuery using SQL — no data movement required. It supports logistic regression, boosted trees, neural networks, time series forecasting, matrix factorisation, and integration with Vertex AI AutoML models. In the Vertex AI stack, BigQuery ML complements foundation model agents: structured prediction tasks (demand forecasting, churn scoring, fraud detection) run in BigQuery ML, while unstructured reasoning and generation tasks use Gemini via Vertex AI. Kovil AI builds unified pipelines where BigQuery ML predictions and Gemini reasoning work together in a single agent response.",
  },
  {
    q: "How does Vertex AI handle enterprise security and compliance?",
    a: "Vertex AI is built on Google Cloud's enterprise security foundation: VPC Service Controls create a perimeter that prevents data exfiltration across projects and APIs; IAM roles and bindings provide granular access control; Customer-Managed Encryption Keys (CMEK) let you control encryption at rest; Data Loss Prevention (Cloud DLP) can scan inputs and outputs for sensitive data; and Cloud Audit Logs record every API call for compliance and forensics. Vertex AI supports HIPAA, SOC 2 Type II, ISO 27001, PCI DSS, and FedRAMP High compliance frameworks. Kovil AI configures all security controls from the first sprint — security is never an afterthought.",
  },
  {
    q: "Do we need to be on GCP already to use Vertex AI?",
    a: "No — Vertex AI is a fully managed cloud service, so you start from a Google Cloud project with no prior infrastructure. Organisations without an existing GCP footprint can provision a new project, enable the Vertex AI API, and have a working agent environment in hours. That said, organisations already on GCP with BigQuery, GCS, Cloud SQL, or Apigee get compounding benefits: data is already in the right place for Vertex AI Search and BigQuery ML, and IAM bindings apply consistently across all services. Kovil AI handles GCP environment provisioning and security configuration as part of every engagement.",
  },
  {
    q: "What models are available on Vertex AI Model Garden?",
    a: "As of 2025, Vertex AI Model Garden offers 150+ models including: Google's Gemini 2.0 Flash and Pro (multimodal, million-token context), Gemini 1.5 Pro and Flash, Imagen 3 for image generation, Chirp for speech, Code Gemma for code generation, Anthropic's Claude 3.5 Sonnet and Haiku, Meta's Llama 3.3 70B and 3.1 405B, Mistral Large and NeMo, and Falcon 40B — all accessible under the same IAM, VPC Service Controls, and billing as the rest of your GCP environment. Model Garden models can be deployed to managed online endpoints or used via the Vertex AI SDK.",
  },
  {
    q: "How much does Vertex AI cost?",
    a: "Vertex AI pricing depends on the services used: Gemini 2.0 Flash is priced at approximately $0.075/1M input tokens and $0.30/1M output tokens (as of 2025); Vertex AI Search runs from ~$2.50/1,000 search queries for managed indexes; BigQuery ML training costs vary by model type; and Vertex AI Pipelines are priced per pipeline run. For a typical production agent (one Gemini-powered RAG agent with Vertex AI Search, moderate query volume), total GCP infrastructure costs typically range from $600–$4,000/month. Kovil AI provides a detailed cost model as part of every scoping engagement — including multi-month projections.",
  },
  {
    q: "What is the Kovil AI risk-free pilot for Vertex AI?",
    a: "We scope a single high-impact Vertex AI use case, define clear success metrics, and build and deploy it in 2 weeks. If the pilot does not hit your agreed metrics, you pay nothing. The pilot includes: GCP environment provisioning and security configuration, agent architecture design, Vertex AI Search or Reasoning Engine setup as needed, evaluation framework with ground truth testing, and 30-day post-launch support. Over 90% of our Vertex AI pilots convert to full production engagements. Book a free 30-minute discovery call to scope your pilot.",
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
      engagement_type: "vertex_ai_download",
      project_description: `Downloaded: ${title}`,
      source: "vertex_ai_download",
    }
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(leadData),
      })
      fetch(`${SUPABASE_URL}/functions/v1/notify-lead`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      }).catch(err => console.error("Email notification error:", err))
    } catch (err) {
      console.error("Lead submission error:", err)
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
      <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full self-start mb-5" style={{ color: G_BLUE, background: `${G_BLUE}18` }}>
        {resourceLabel}
      </span>
      <div className="flex items-start gap-3 mb-4">
        <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${G_BLUE}18` }}>
          <FileText className="h-5 w-5" style={{ color: G_BLUE }} />
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

export default function VertexAIPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Data & Analytics")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="pt-20 bg-background min-h-screen">

      {/* ── SECTION 1 — HERO ── */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ borderColor: `${G_BLUE}50`, background: `${G_BLUE}10`, color: G_BLUE }}
            >
              Google Cloud Vertex AI Practice
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05] mb-6">
              Build AI agents on{" "}
              <span className="text-accent">Google Cloud.</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Kovil AI is a specialist Vertex AI implementation partner. We design, build, and deploy production-grade AI agents on Google Cloud — Gemini integration, Agent Builder, Vertex AI Search RAG, BigQuery ML — in fixed-price sprints with zero delivery risk.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button variant="accent" size="lg" className="text-base h-12 px-8 rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all" onClick={openCalendly}>
                Start my Vertex AI build <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="#downloads">
                <Button variant="outline" size="lg" className="text-base h-12 px-8 rounded-full">
                  Download the Readiness Guide
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground font-medium">
              2-week risk-free pilot · Fixed-price sprints · GCP-certified engineers
            </p>
            <p className="text-xs text-muted-foreground/50 mt-4 leading-relaxed max-w-lg">
              Kovil AI is a specialist Google Cloud Vertex AI implementation partner serving enterprises across the United States and United Kingdom. Our practice covers Gemini 2.0 integration, Vertex AI Agent Builder, Reasoning Engine orchestration, Vertex AI Search RAG pipelines, BigQuery ML, Document AI, and Vertex AI governance — delivered from our New York and Austin offices.
            </p>
          </motion.div>

          {/* Right — GCP Orbital Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="w-full max-w-md select-none">
              <GCPOrbitalDiagram />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2 — GCP AI STACK ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">The GCP AI Stack</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-5">
              The Google Cloud AI Stack
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Vertex AI is not a single product — it is a layered platform. Understanding which tier to use for which job is the difference between a prototype and a production system that holds up under enterprise load.
            </p>
          </motion.div>

          {/* 4-row tier breakdown */}
          <div className="space-y-3 mb-16">
            {gcpStackTiers.map((tier, i) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl flex items-start gap-0 overflow-hidden"
              >
                {/* Left accent border */}
                <div className="w-1.5 self-stretch rounded-l-xl shrink-0" style={{ background: tier.color }} />
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-4 flex-1 min-w-0">
                  <span className="text-sm font-bold text-foreground whitespace-nowrap w-52 shrink-0" style={{ color: tier.color === G_YELLOW ? "#9a7700" : tier.color }}>
                    {tier.tier}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {tier.chips.map(chip => (
                      <span
                        key={chip}
                        className="text-xs font-medium px-3 py-1 rounded-full border"
                        style={{ borderColor: `${tier.color}40`, background: `${tier.color}10`, color: tier.color === G_YELLOW ? "#9a7700" : tier.color }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why most fail panel */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <p className="text-sm font-mono tracking-widest uppercase mb-8 text-center" style={{ color: G_BLUE }}>
              Why Google Cloud AI deployments stall — and what we do differently
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  problem: "Gemini API access without an agent architecture",
                  fix: "We design the full Vertex AI stack upfront — model selection, Agent Builder vs Reasoning Engine, grounding strategy, memory management, and tool integrations — before writing a single line of code.",
                  color: G_BLUE,
                },
                {
                  problem: "RAG with no enterprise data grounding",
                  fix: "We connect Vertex AI Search to your live GCP data sources — GCS, BigQuery, Cloud SQL, APIs — with chunking strategy, hybrid retrieval, semantic re-ranking, and IAM-controlled access throughout.",
                  color: G_GREEN,
                },
                {
                  problem: "Dev builds with no GCP security posture",
                  fix: "Every build includes VPC Service Controls, IAM least-privilege bindings, CMEK encryption, audit logging, and DLP scanning — configured from the first sprint, never retrofitted at go-live.",
                  color: G_RED,
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
                    <div className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${item.color}20` }}>
                      <span className="text-xs font-bold" style={{ color: item.color }}>✓</span>
                    </div>
                    <p className="text-sm text-foreground font-medium leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2B — WHAT IS VERTEX AI (AEO) ── */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Vertex AI Explained</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">What is Google Cloud Vertex AI?</h2>
            <div className="prose-like space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <strong className="text-foreground">Google Cloud Vertex AI is Google&apos;s unified AI platform for building, deploying, and governing production AI agents and machine learning models.</strong> It consolidates the full Google Cloud AI stack — foundation models via the <strong className="text-foreground">Model Garden</strong>, conversational agent development via <strong className="text-foreground">Agent Builder</strong>, multi-step reasoning via the <strong className="text-foreground">Reasoning Engine</strong>, enterprise search and RAG via <strong className="text-foreground">Vertex AI Search</strong>, and structured ML via <strong className="text-foreground">BigQuery ML</strong> — into a single governed environment.
              </p>
              <p>
                At the core of Vertex AI is <strong className="text-foreground">Gemini 2.0</strong> — Google&apos;s frontier multimodal model family, available as Flash (fast, cost-efficient) and Pro (highest capability). Gemini 2.0 supports a 1-million-token context window, native tool use, and multi-modal inputs including text, images, audio, video, and code. For enterprise deployments, Gemini is accessed through Vertex AI — not the public Gemini API — to get full GCP security and compliance controls.
              </p>
              <p>
                <strong className="text-foreground">Vertex AI Agent Builder</strong> provides a managed platform for creating production AI agents with Gemini reasoning, data store grounding, Dialogflow CX conversation management, and API tool calling. <strong className="text-foreground">Reasoning Engine</strong> extends this for code-first, complex orchestration using LangChain, LlamaIndex, or custom frameworks — deployed in managed, scalable infrastructure with full observability. Together, they form the agent development layer of the Vertex AI platform.
              </p>
              <p>
                Enterprise security is handled natively: <strong className="text-foreground">VPC Service Controls</strong> prevent data exfiltration; <strong className="text-foreground">IAM and CMEK</strong> provide access control and encryption management; <strong className="text-foreground">Cloud Audit Logs</strong> record every API call; and <strong className="text-foreground">Data Loss Prevention</strong> scans inputs and outputs. Vertex AI supports HIPAA, SOC 2 Type II, ISO 27001, PCI DSS, and FedRAMP High — making it the right foundation for regulated enterprises.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Gemini 2.0", "Agent Builder", "Reasoning Engine", "Vertex AI Search", "BigQuery ML", "Model Garden", "Document AI", "Vertex AI Pipelines"].map(tag => (
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
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Vertex AI Services</h2>
            <p className="text-muted-foreground text-lg">From first agent to full GCP AI rollout — we cover every phase of the build.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Link href={`/vertex-ai/services/${svc.slug}`} className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full block" style={{ "--tw-border-opacity": "1" } as React.CSSProperties}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${G_BLUE}50`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "")}
                >
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5 transition-colors" style={{ background: `${G_BLUE}15` }}>
                    <svc.icon className="h-6 w-6" style={{ color: G_BLUE }} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <div className="flex items-center gap-1 text-xs mt-5 opacity-0 group-hover:opacity-100 transition-opacity font-semibold" style={{ color: G_BLUE }}>
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA 1 — after services ── */}
      <section className="py-14" style={{ background: `linear-gradient(135deg, ${G_BLUE}08 0%, ${G_GREEN}05 50%, transparent 100%)` }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-mono tracking-widest uppercase mb-3" style={{ color: G_BLUE }}>Free · No commitment</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Not sure which Vertex AI service fits your situation?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Book a free 30-minute discovery call. We&apos;ll review your GCP environment, identify your highest-ROI Vertex AI opportunities, and give you an honest architecture recommendation — no sales pitch.
          </p>
          <Button variant="accent" size="lg" className="rounded-full px-8" onClick={openCalendly}>
            Book a free discovery call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* ── SECTION 4 — USE CASES (Left-rail navigation) ── */}
      <section className="border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Use Cases</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">What We Build on Vertex AI</h2>
          </motion.div>

          {/* Mobile: horizontal scroll tab strip */}
          <div className="flex md:hidden overflow-x-auto gap-2 pb-4 mb-8 -mx-2 px-2">
            {CATEGORIES.map(cat => {
              const Icon = categoryIcons[cat]
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all shrink-0"
                  style={isActive
                    ? { background: G_BLUE, color: "white", boxShadow: `0 4px 14px ${G_BLUE}40` }
                    : { background: "transparent", border: "1px solid var(--border)", color: "var(--muted-foreground)" }
                  }
                >
                  <Icon className="h-4 w-4" />
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Desktop: left-rail + content grid */}
          <div className="md:grid md:grid-cols-[220px_1fr] gap-8">

            {/* Left rail — GCP Console sidebar aesthetic */}
            <div className="hidden md:flex flex-col gap-1 bg-muted/30 rounded-2xl p-3 border border-border self-start sticky top-24">
              <p className="text-xs font-mono text-muted-foreground/60 tracking-widest uppercase px-3 py-2">Categories</p>
              {CATEGORIES.map(cat => {
                const Icon = categoryIcons[cat]
                const isActive = activeCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all text-left relative"
                    style={isActive
                      ? { color: G_BLUE, background: `${G_BLUE}10` }
                      : { color: "var(--muted-foreground)" }
                    }
                  >
                    {/* Active left border indicator */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
                        style={{ background: G_BLUE }}
                      />
                    )}
                    <Icon className="h-4 w-4 shrink-0" style={isActive ? { color: G_BLUE } : {}} />
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* Right content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {useCases[activeCategory].map((uc, i) => (
                  <Link
                    key={uc.title}
                    href={`/vertex-ai/${categorySlug[activeCategory]}/${uc.slug}`}
                    className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 block"
                    onMouseEnter={e => (e.currentTarget.style.borderColor = `${G_BLUE}50`)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "")}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white" style={{ background: G_BLUE }}>
                        {i + 1}
                      </div>
                      <h3 className="font-display font-bold text-base text-foreground group-hover:text-accent transition-colors leading-tight">{uc.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.desc}</p>
                    <div className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: G_BLUE }}>
                      View details <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — CASE STUDIES (horizontal cards) ── */}
      <section className="border-t border-border py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Results</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-3">Vertex AI in Production</h2>
            <p className="text-muted-foreground text-lg">Real GCP deployments. Real business outcomes.</p>
          </motion.div>

          <div className="space-y-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.industry}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden flex"
              >
                {/* Left accent strip */}
                <div className="w-1.5 shrink-0" style={{ background: cs.accentColor }} />

                <div className="p-6 md:p-8 flex-1 min-w-0">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: cs.accentColor, background: `${cs.accentColor}15` }}>
                        {cs.industry}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2">{cs.sub}</p>
                    </div>
                  </div>

                  {/* Problem / Built / Metrics row */}
                  <div className="grid md:grid-cols-[1fr_1fr_auto] gap-6 items-start">
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Problem</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">What we built</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.built}</p>
                    </div>
                    <div className="flex md:flex-col gap-3 shrink-0">
                      {cs.metrics.map(m => (
                        <div key={m.label} className="rounded-xl p-3 text-center min-w-[100px]" style={{ background: `${cs.accentColor}10` }}>
                          <div className="font-display font-bold text-xl" style={{ color: cs.accentColor }}>{m.value}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
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
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: G_BLUE }}>2-week risk-free pilot</p>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-background leading-tight">
                See results like these in your GCP environment.
              </h2>
              <p className="text-background/60 mt-2 max-w-md">
                We scope, build, and deploy your first Vertex AI agent in 2 weeks. Fixed price. If it doesn&apos;t hit your agreed metrics, you don&apos;t pay.
              </p>
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
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">The Vertex AI Playbook</h2>
            <p className="text-muted-foreground text-lg">Implementation guides, architecture patterns, and field notes from real Vertex AI deployments — written by the engineers who build them.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {playbookArticles.map((article, i) => (
              <motion.div key={article.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Link href={article.href} className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full block"
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${G_BLUE}50`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "")}
                >
                  <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full self-start mb-4" style={{ color: G_BLUE, background: `${G_BLUE}15` }}>
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
            <Link href="/vertex-ai/playbook" className="inline-flex items-center gap-2 font-semibold hover:underline" style={{ color: G_BLUE }}>
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
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-3">Free Vertex AI Resources</h2>
            <p className="text-muted-foreground text-lg">Download and keep. No spam.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <DownloadCard
                resourceLabel="eBook · 26 pages · PDF"
                title="The Vertex AI Readiness Guide"
                desc="Is your organisation ready to build AI agents on Google Cloud? This guide covers the 5 readiness pillars — GCP environment, data estate, use case prioritisation, security posture, and team capability — with a self-assessment scorecard and Vertex AI stack selection framework."
                buttonLabel="Download free eBook"
                fileHref="/vertex-ai-readiness-guide.pdf"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              <DownloadCard
                resourceLabel="Whitepaper · 20 pages · PDF"
                title="GCP AI Agent Architecture Whitepaper"
                desc="A technical deep dive into the Vertex AI agent stack: Model Garden, Agent Builder vs Reasoning Engine, Vertex AI Search RAG pipelines, BigQuery ML integration patterns, VPC Service Controls configuration, and phased production rollout framework."
                buttonLabel="Download whitepaper"
                fileHref="/vertex-ai-architecture-whitepaper.pdf"
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
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Why Kovil AI for Vertex AI?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Star,
                title: "Multi-cloud AI engineering, GCP-native expertise",
                desc: "We hold GCP certifications and have shipped production Vertex AI agents across Gemini, BigQuery ML, and Document AI. We understand VPC Service Controls, IAM, CMEK, and how Vertex AI integrates with the rest of your GCP data estate — not just the LLM layer.",
                color: G_BLUE,
              },
              {
                icon: BarChart3,
                title: "Fixed-price sprints. No GCP surprises.",
                desc: "Every engagement is scoped, priced, and milestone-gated before we write a single line of code. You know exactly what you&apos;re getting, when you&apos;ll get it, and what it costs — including a detailed GCP infrastructure cost model for the first 12 months.",
                color: G_GREEN,
              },
              {
                icon: Layers,
                title: "2-week risk-free pilot",
                desc: "We scope a single high-impact Vertex AI agent, build it to production standards, and deploy it in 2 weeks. If it doesn&apos;t hit your agreed success metrics, you pay nothing. Over 90% of our Vertex AI pilots convert to full engagements.",
                color: G_RED,
              },
              {
                icon: Shield,
                title: "GCP security from day one",
                desc: "Every build includes VPC Service Controls, IAM least-privilege bindings, CMEK encryption, audit logging, and Data Loss Prevention — configured from the first sprint. Security is not an afterthought or a post-launch retrofit.",
                color: G_YELLOW,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${item.color}15` }}>
                  <item.icon className="h-6 w-6" style={{ color: item.color === G_YELLOW ? "#9a7700" : item.color }} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Trust strip — 4-column, multi-color */}
          <div className="mt-12 bg-card border border-border rounded-2xl p-8">
            <p className="text-sm font-mono tracking-widest uppercase mb-6 text-center" style={{ color: G_BLUE }}>Built for enterprise. Trusted by regulated industries.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border">
              {[
                { icon: Star,        label: "GCP certified engineers",           sub: "Hands-on Vertex AI expertise",       color: G_BLUE },
                { icon: Database,    label: "BigQuery + Vertex AI specialists",  sub: "Production MLOps",                   color: G_GREEN },
                { icon: Zap,         label: "Gemini 2.0 integrations",           sub: "Enterprise RAG pipelines",           color: G_RED },
                { icon: CheckCircle2,label: "30-day post-launch support",        sub: "Included in every build",            color: G_YELLOW },
              ].map((cell, i) => (
                <div key={cell.label} className={`flex flex-col items-center gap-2 text-center px-4 py-2 ${i !== 0 ? "" : ""}`}>
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ background: `${cell.color}15` }}>
                    <cell.icon className="h-5 w-5" style={{ color: cell.color === G_YELLOW ? "#9a7700" : cell.color }} />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{cell.label}</p>
                  <p className="text-xs text-muted-foreground">{cell.sub}</p>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-3">
            Ready to build your first Vertex AI agent?
          </h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto text-lg">
            Scoped and shipped in 2 weeks. Fixed price. Zero delivery risk.
          </p>
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
