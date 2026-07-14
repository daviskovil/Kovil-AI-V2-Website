'use client'

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight, Bot, Sparkles, Terminal, Database, MessageSquare,
  Workflow, ShoppingBag, LineChart, ShieldCheck, Clock, Repeat2,
  CheckCircle2, ChevronRight, ChevronDown, Calculator, Sliders, Settings,
  Users, Boxes, Code2, FileText, X, Check
} from "lucide-react"
import { OnboardingModal } from "../../components/OnboardingModal"
import { Button } from "../../components/ui/button"

// ── Shopify-Specific CTA Trigger ─────────────────────────────────────────────
function ShopifyCTA({ label, size = "lg", className = "" }: { label: string; size?: "lg" | "sm"; className?: string }) {
  return (
    <OnboardingModal defaultGoal="talent">
      <Button size={size} className={`bg-accent hover:bg-accent/90 text-white ${className}`}>
        {label} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </OnboardingModal>
  )
}

// ── 15 Shopify Sub-Pages Index ───────────────────────────────────────────────
const shopifySubPages = [
  {
    slug: "hire-ai-agent-developer", icon: Bot, title: "Hire Shopify AI Agent Developers",
    desc: "Hire senior Python/TypeScript software developers to build and embed autonomous agents inside your Shopify store.",
    tags: ["Embedded Engineers", "Python/TS", "48h Match", "2-Wk Trial"],
    category: "Services & Integrations",
    href: "/book-a-call?ref=shopify-hire-developer"
  },
  {
    slug: "ai-agentic-commerce", icon: Sparkles, title: "Shopify Agentic Commerce Solutions",
    desc: "Core agency services designing and deploying custom multi-agent networks (Design, Comm, and Manager agents) tailored for high-volume store systems.",
    tags: ["Multi-Agent Architecture", "LangGraph", "Cognitive Flows", "Custom APIs"],
    category: "Services & Integrations",
    href: "/book-a-call?ref=shopify-agentic-commerce"
  },
  {
    slug: "ai-toolkit-integration", icon: Settings, title: "Shopify AI Toolkit Integrations",
    desc: "Custom implementation services for the official Shopify AI Toolkit and Model Context Protocol (MCP) servers.",
    tags: ["Shopify AI Toolkit", "MCP Servers", "API Spokes", "LLM Context"],
    category: "Services & Integrations",
    href: "/book-a-call?ref=shopify-ai-toolkit"
  },
  {
    slug: "custom-sidekick-actions", icon: Terminal, title: "Custom Shopify Sidekick Actions",
    desc: "Building custom database connectors, search actions, and API overrides for Shopify's Sidekick assistant.",
    tags: ["Sidekick Customization", "Context Mapping", "Custom Prompts", "Admin Actions"],
    category: "Services & Integrations",
    href: "/book-a-call?ref=shopify-sidekick-custom"
  },
  {
    slug: "ecommerce-automation-solutions", icon: Workflow, title: "Shopify E-Commerce Automation",
    desc: "Automating inventory synchronization, real-time supplier updates, and automated order fulfillment routing.",
    tags: ["Flow Automation", "Inventory Sync", "ERP Connections", "Supplier Ingestion"],
    category: "Services & Integrations",
    href: "/book-a-call?ref=shopify-ecom-automation"
  },
  {
    slug: "beauty-cosmetics-ai-agents", icon: Sparkles, title: "AI Agents for Cosmetics & Beauty",
    desc: "Tone-of-voice design agents, skin profile matchers, and multi-channel campaign planners tailored for cosmetics brands.",
    tags: ["Beauty Tech", "Visual Matching", "Klaviyo Flows", "Visual AI"],
    category: "Vertical Solutions",
    href: "/book-a-call?ref=shopify-beauty-cosmetics"
  },
  {
    slug: "fashion-apparel-sizing-agents", icon: Users, title: "AI Styling & Sizing Agents for Fashion",
    desc: "Visual styling agents, fit-recommendation engine setups, and personalized wardrobe recommendations.",
    tags: ["Fashion Retail", "Size Recommendation", "Wardrobe Orchestration", "Visual Search"],
    category: "Vertical Solutions",
    href: "/book-a-call?ref=shopify-fashion-apparel"
  },
  {
    slug: "subscription-d2c-retention-agents", icon: Repeat2, title: "Subscription & Churn Prevention Agents",
    desc: "AI agents that analyze subscriber cohorts, autonomously handle renewal negotiations, and manage custom subscription boxes.",
    tags: ["Churn Mitigation", "Cohort Analysis", "Recharge API", "Negotiation Agents"],
    category: "Vertical Solutions",
    href: "/book-a-call?ref=shopify-subscription-retention"
  },
  {
    slug: "ai-product-recommendations", icon: Database, title: "Semantic Product Recommendation RAG",
    desc: "Vector-database backed semantic recommendation systems for high-SKU stores, replacing simple tag-matching.",
    tags: ["Vector Search", "RAG Catalog", "Pinecone/Weaviate", "Product Discovery"],
    category: "Vertical Solutions",
    href: "/book-a-call?ref=shopify-product-recommendations"
  },
  {
    slug: "autonomous-customer-service", icon: MessageSquare, title: "Autonomous E-Commerce Customer Service",
    desc: "Autonomous customer support agents with read/write API access to order tracking, refunds, and return initiation.",
    tags: ["Gorgias Integration", "Order APIs", "Returns Routing", "Evals"],
    category: "Vertical Solutions",
    href: "/book-a-call?ref=shopify-customer-service"
  },
  {
    slug: "n8n-shopify-agentic-sync", icon: Code2, title: "n8n Agentic Shopify Sync Blueprint",
    desc: "Technical blueprint detailing n8n workflows that connect Shopify stores with OpenAI assistants and Supabase tables.",
    tags: ["n8n.io", "Supabase", "OpenAI Assistant", "Fulfillment Sync"],
    category: "Workflow Blueprints",
    href: "/book-a-call?ref=shopify-n8n-sync"
  },
  {
    slug: "competitor-price-repricer", icon: LineChart, title: "Autonomous Competitor Repricer Blueprint",
    desc: "AI-powered competitor pricing scraper and dynamic repricer scenario using Make.com and n8n.",
    tags: ["Make.com", "Scraping Agents", "Dynamic Pricing", "Profit Protection"],
    category: "Workflow Blueprints",
    href: "/book-a-call?ref=shopify-price-repricer"
  },
  {
    slug: "spec-sheet-catalog-enricher", icon: FileText, title: "Supplier Spec Sheet Catalog Enricher",
    desc: "Automating the ingestion of raw supplier PDF spec sheets and utilizing fine-tuned LLMs to output fully SEO-optimized product catalog entries.",
    tags: ["PDF Extraction", "SEO Copywriting", "Image Tagging", "Bulk Ingestion"],
    category: "Workflow Blueprints",
    href: "/book-a-call?ref=shopify-catalog-enricher"
  },
  {
    slug: "returns-fraud-assessment", icon: ShieldCheck, title: "Autonomous Returns Fraud Auditor",
    desc: "Autonomous returns risk auditor checking customer history, photos, and order profiles to automatically flag fraud or approve returns.",
    tags: ["Risk Evaluation", "Fraud Prevention", "Returns API", "Customer Sentiment"],
    category: "Workflow Blueprints",
    href: "/book-a-call?ref=shopify-returns-fraud"
  },
  {
    slug: "whatsapp-agentic-marketing", icon: MessageSquare, title: "Conversational WhatsApp Agentic Marketing",
    desc: "Deploying multi-turn conversational agents over WhatsApp connected to the Shopify checkout API.",
    tags: ["WhatsApp Business", "Checkout API", "Abandonment Recovery", "Twilio"],
    category: "Workflow Blueprints",
    href: "/book-a-call?ref=shopify-whatsapp-marketing"
  }
]

// ── Agent Console Simulation Logs ────────────────────────────────────────────
const consoleLogs = {
  manager: [
    { time: "09:00:15", type: "system", text: "Initialized workflow ecomm_bfcm_promo_v2" },
    { time: "09:00:16", type: "manager", text: "Triggering Design Agent to generate BFCM campaign banner..." },
    { time: "09:00:22", type: "design", text: "Banners generated successfully (using SupplierSpec_A.pdf). Saved to Shopify CDN." },
    { time: "09:00:23", type: "manager", text: "Routing asset to Communication Agent for marketing email draft..." },
    { time: "09:00:28", type: "comms", text: "Drafted email 'BFCM Early Access' in Klaviyo with personalized product recommendations." },
    { time: "09:00:29", type: "system", text: "Workflow HELD for human review. Triggered Slack approval request to merchant." }
  ],
  design: [
    { time: "10:15:02", type: "system", text: "Ingesting supplier spec sheet 'CosmeticsFormula_V3.pdf'" },
    { time: "10:15:04", type: "design", text: "Extracted ingredients: Jojoba Oil, Shea Butter, Vitamin E. Generating vector keywords..." },
    { time: "10:15:06", type: "system", text: "Calling Replicate (Stable Diffusion XL) for product lifestyle background..." },
    { time: "10:15:12", type: "design", text: "Generated visual: 'https://cdn.shopify.com/s/files/1/lifestyle_bg.png'" },
    { time: "10:15:13", type: "system", text: "Output saved in Shopify Asset API. Drafted SEO meta tags." }
  ],
  communication: [
    { time: "11:30:10", type: "system", text: "Webhook: User 'Jane Doe' clicked checkout but abandoned cart 10m ago." },
    { time: "11:30:11", type: "comms", text: "Querying profile data: High-value tier, past purchases: skincare. Churn probability: Low." },
    { time: "11:30:13", type: "manager", text: "Requesting unique discount code generation via Shopify Admin API: JANE-RET-15" },
    { time: "11:30:15", type: "comms", text: "Drafting personalized cart-recovery SMS: 'Hey Jane, noticed you left the Jojoba Serum. Use code JANE-RET-15 for 15% off...'" },
    { time: "11:30:16", type: "system", text: "SMS scheduled via Klaviyo API. Monitoring delivery status." }
  ]
}

const heroStats = [
  { stat: "< 48h",   label: "Time to match" },
  { stat: "Top 1%",  label: "Engineer tier" },
  { stat: "2 weeks", label: "Risk-free trial" },
  { stat: "100%",    label: "IP ownership" },
]

export default function ShopifyHubPage() {
  // Console state
  const [activeConsoleTab, setActiveConsoleTab] = useState<'manager' | 'design' | 'communication'>('manager')
  const [visibleLogs, setVisibleLogs] = useState<any[]>([])

  // Categorized index state
  const [selectedCategory, setSelectedCategory] = useState("Services & Integrations")
  const [currentPage, setCurrentPage] = useState(1)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Estimator state
  const [skuRange, setSkuRange] = useState<number>(1) // 0: <100, 1: 100-1000, 2: 1000+
  const [orderRange, setOrderRange] = useState<number>(1) // 0: <1k, 1: 1k-10k, 2: 10k+
  const [selectedAgents, setSelectedAgents] = useState({
    support: true,
    repricer: false,
    newsletter: true,
    sync: false
  })

  // ROI state
  const [roiTab, setRoiTab] = useState<'support' | 'design' | 'marketing' | 'operations'>('support')
  const [monthlyTickets, setMonthlyTickets] = useState<number>(1200)
  const [csAgentSalary, setCsAgentSalary] = useState<number>(3800)
  const [assetsNeeded, setAssetsNeeded] = useState<number>(15)
  const [designerRate, setDesignerRate] = useState<number>(45)
  const [campaignsCount, setCampaignsCount] = useState<number>(8)
  const [copywriterRate, setCopywriterRate] = useState<number>(50)
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(85000)
  const [abandonmentRate, setAbandonmentRate] = useState<number>(10)

  // Blueprint & FAQ State
  const [activeBlueprintId, setActiveBlueprintId] = useState<'repricer' | 'marketing' | 'inventory'>('repricer')
  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(0)

  // Simulated log typewriter animation
  useEffect(() => {
    setVisibleLogs([])
    const logs = consoleLogs[activeConsoleTab]
    let index = 0
    const interval = setInterval(() => {
      if (index < logs.length) {
        const currentLog = logs[index]
        setVisibleLogs(prev => [...prev, currentLog])
        index++
      } else {
        clearInterval(interval)
      }
    }, 800)
    return () => clearInterval(interval)
  }, [activeConsoleTab])

  // Estimator logic (Average rate: $6k per agent)
  const calculateEstimate = () => {
    let teamSize = "1 Embedded AI Developer"

    if (skuRange === 2 || orderRange === 2) {
      teamSize = "1 Lead AI Engineer + 1 DevOps/Data Engineer"
    }

    let agentCount = 0
    if (selectedAgents.support) agentCount++
    if (selectedAgents.repricer) agentCount++
    if (selectedAgents.newsletter) agentCount++
    if (selectedAgents.sync) agentCount++

    const costValue = agentCount * 6000
    const baseHoursPerAgent = 40
    const totalHours = agentCount === 0 ? 0 : (agentCount * baseHoursPerAgent) + 10

    return {
      hours: totalHours,
      team: teamSize,
      timeline: agentCount === 0 ? "0 Weeks" : `${agentCount}–${agentCount + 1} Weeks`,
      cost: costValue === 0 ? "Select at least 1 agent" : `$${(costValue / 1000).toFixed(0)}k`,
      costRaw: costValue
    }
  }

  const estimateResult = calculateEstimate()

  // Category filtering & pagination logic
  const CARDS_PER_PAGE = 6
  const filteredSubPages = shopifySubPages.filter(p => p.category === selectedCategory)
  const totalPages = Math.ceil(filteredSubPages.length / CARDS_PER_PAGE)
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE
  const displayedSubPages = filteredSubPages.slice(startIndex, startIndex + CARDS_PER_PAGE)

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero Section with Live Agent Simulation ──────────────────────────── */}
      <section className="relative pt-16 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto">

          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Shopify</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full">
                <ShoppingBag className="h-3.5 w-3.5" /> Autonomous E-Commerce
              </span>
              <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance">
                Deploy Custom AI Agent Networks to Run Your <span className="text-accent">Shopify Store.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Vetted Tier-1 AI engineers embedded in your team in 48 hours. Integrate custom Model Context Protocol (MCP) servers, autonomous customer support agents, and design-to-comms workflows that execute tasks — not just answer questions.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <ShopifyCTA label="Get E-Commerce Scoping Brief" className="px-8 h-12 text-base rounded-full" />
                <Button size="lg" variant="outline" className="h-12 rounded-full" asChild>
                  <Link href="#blueprint-index">See All 15 Blueprints</Link>
                </Button>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 mt-2 border-t border-border">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display font-black text-2xl text-accent">{s.stat}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right Column - Interactive Terminal Console */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-border bg-slate-950 shadow-2xl overflow-hidden">
                {/* Window Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs text-white/40 font-mono ml-2">shopify_agent_console.log</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-accent tracking-wider font-mono">Live Simulation</span>
                </div>

                {/* Console Tabs */}
                <div className="grid grid-cols-3 text-center text-xs font-mono border-b border-white/5 bg-slate-950">
                  {(['manager', 'design', 'communication'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveConsoleTab(tab)}
                      className={`py-3 transition-colors ${
                        activeConsoleTab === tab
                          ? "text-accent bg-slate-900 border-b border-accent font-semibold"
                          : "text-white/40 hover:text-white/70"
                      }`}
                    >
                      {tab.toUpperCase()} AGENT
                    </button>
                  ))}
                </div>

                {/* Console Terminal Screen */}
                <div className="p-5 min-h-[260px] bg-slate-950 font-mono text-xs leading-relaxed space-y-3 overflow-y-auto">
                  <AnimatePresence mode="popLayout">
                    {visibleLogs.filter(Boolean).map((log, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-white/30 shrink-0">[{log.time}]</span>
                        <span className={`shrink-0 uppercase font-bold text-[10px] px-1.5 py-0.5 rounded ${
                          log.type === "system" ? "bg-white/10 text-white/70" :
                          log.type === "manager" ? "bg-accent/20 text-accent border border-accent/30" :
                          log.type === "design" ? "bg-violet-500/20 text-violet-400 border border-violet-500/30" :
                          "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                        }`}>
                          {log.type}
                        </span>
                        <span className="text-white/80">{log.text}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {visibleLogs.length < consoleLogs[activeConsoleTab].length && (
                    <div className="flex items-center gap-1.5 text-accent animate-pulse font-bold mt-2">
                      <span className="w-1.5 h-3 bg-accent inline-block" /> Running process...
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Partner / Stack Marquee ──────────────────────────────────────────── */}
      <section className="py-10 border-y border-border bg-muted/20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Built to work with your stack</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 opacity-70">
            {["Shopify Plus", "n8n.io", "Make.com", "Klaviyo", "Stripe", "Recharge"].map((name) => (
              <span key={name} className="text-base font-display font-bold tracking-tight text-foreground/70">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flagship Case Study (Beauty/Cosmetics Store) ───────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-border bg-muted/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12">

            {/* Case Study Left Column */}
            <div className="lg:col-span-6 p-8 md:p-12 space-y-6 flex flex-col justify-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">D2C Case Study</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight leading-tight">
                How We Built a 3-Agent Autonomous Team for a Cosmetics Brand
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By designing an integrated agent network using the Shopify Admin API and LangGraph workflows, we completely automated their customer retention campaigns and spec-sheet marketing catalog ingestion.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
                <div>
                  <div className="font-display font-black text-2xl md:text-3xl text-accent">-82%</div>
                  <div className="text-xs text-muted-foreground mt-1">Support Ticket Deflection</div>
                </div>
                <div>
                  <div className="font-display font-black text-2xl md:text-3xl text-accent">+14%</div>
                  <div className="text-xs text-muted-foreground mt-1">Cart Recovery Conversions</div>
                </div>
                <div>
                  <div className="font-display font-black text-2xl md:text-3xl text-accent">0 hrs</div>
                  <div className="text-xs text-muted-foreground mt-1">Manual Content Production</div>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="/book-a-call?ref=shopify-cosmetics-case-scoping">
                    Read the Technical Case Study <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Case Study Right Column - Dashboard visual */}
            <div className="lg:col-span-6 bg-slate-950 min-h-[380px] relative overflow-hidden">
              <img
                src="/shopify-cosmetics-case-study.png"
                alt="Live analytics dashboard showing revenue, orders, and AI agent activity for a Shopify cosmetics store"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── System Architecture Section ──────────────────────────────────────── */}
      <section className="py-20 px-6 border-y border-border bg-muted/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Architecture Visual */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-slate-950 border border-border relative aspect-square">
            <img
              src="/shopify-agent-architecture.png"
              alt="Diagram of the custom AI agent architecture connecting the Shopify Admin API, vector database, and LLM providers via the Model Context Protocol"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Architecture Explainer */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Under the Hood</p>
            <h2 className="font-display font-bold text-3xl tracking-tight">
              Standard Integration Hubs Sync. Kovil AI Agents Perform.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We construct custom Shopify Admin API integrations that provide large language models with native "tools" via the Model Context Protocol (MCP). Instead of flat data pipelines, our agents reason over product catalogs, inventory constraints, and customer states to execute multi-turn operational loops.
            </p>

            <div className="space-y-4">
              {[
                { title: "Model Context Protocol (MCP) Connections", desc: "Allowing agents to query product descriptions, inventory levels, and orders directly using semantic context." },
                { title: "Multi-Agent LangGraph Workflows", desc: "Coordinating task execution so the Design Agent outputs files that the Communication Agent automatically schedules." },
                { title: "Human-in-the-Loop Slack Controls", desc: "Setting up safety triggers so that pricing overrides or email launches are held in review until approved by your managers." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 15 Categorized Sub-Page Index Grid ────────────────────────────────── */}
      <section id="blueprint-index" className="py-20 px-6 scroll-mt-20" ref={sectionRef}>
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12 space-y-4">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight">Shopify AI Integration Index</h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Every card below represents a specialized Shopify integration capability. Explore specific services, retail vertical solutions, or ready-to-deploy workflow blueprints.
            </p>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {["Services & Integrations", "Vertical Solutions", "Workflow Blueprints"].map(cat => {
                const isActive = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                      isActive
                        ? "bg-accent border-accent text-white shadow-md shadow-accent/15"
                        : "bg-background border-border text-muted-foreground hover:text-foreground hover:border-accent/40"
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedSubPages.map((page, i) => {
              const Icon = page.icon
              return (
                <motion.div
                  key={page.slug}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (i % 3) * 0.05 }}
                >
                  <Link
                    href={page.href}
                    className="group relative flex flex-col h-full rounded-2xl border border-border bg-muted/20 hover:bg-muted/40 hover:border-accent/40 transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5"
                  >
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
                    <div className="p-6 flex flex-col flex-1">

                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                          <Icon className="h-5 w-5" />
                        </div>
                        {selectedCategory === "Workflow Blueprints" && (
                          <span className="text-[10px] font-bold tracking-wider uppercase text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">Blueprint</span>
                        )}
                      </div>

                      <h3 className="text-base font-bold mb-2 group-hover:text-accent transition-colors leading-tight">{page.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{page.desc}</p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {page.tags.map(tag => (
                          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-sm font-semibold text-accent mt-auto pt-1 gap-1">
                        Book Scoping Brief <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="border-border text-foreground hover:bg-muted/40 disabled:opacity-40"
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1
                const isActive = page === currentPage
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-accent border-accent text-white shadow-md shadow-accent/25"
                        : "border border-border text-foreground hover:bg-muted/40 bg-background"
                    }`}
                  >
                    {page}
                  </button>
                )
              })}
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="border-border text-foreground hover:bg-muted/40 disabled:opacity-40"
              >
                Next
              </Button>
            </div>
          )}

        </div>
      </section>

      {/* ── Project Cost & Resource Estimator ────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-border bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="font-display font-bold text-3xl tracking-tight flex items-center justify-center gap-2">
              <Calculator className="h-7 w-7 text-accent" /> Shopify Project Estimator
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Select your Shopify store's attributes and desired agent configurations to dynamically calculate engineering workload, recommended staffing, and implementation budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Estimator Controls (Left Column) */}
            <div className="lg:col-span-7 border border-border bg-background rounded-2xl p-6 md:p-8 space-y-8 flex flex-col justify-between">

              {/* Slider 1: SKU Catalog Size */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span>Store Catalog Size (SKU Count)</span>
                  <span className="text-accent font-bold">
                    {skuRange === 0 ? "Under 100 SKUs" : skuRange === 1 ? "100 – 1,000 SKUs" : "1,000+ SKUs"}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="1"
                  value={skuRange}
                  onChange={e => setSkuRange(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Small catalog</span>
                  <span>Mid-sized brand</span>
                  <span>Enterprise SKU volume</span>
                </div>
              </div>

              {/* Slider 2: Monthly Order Volume */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span>Monthly Order Volume</span>
                  <span className="text-accent font-bold">
                    {orderRange === 0 ? "Under 1k Orders/mo" : orderRange === 1 ? "1k – 10k Orders/mo" : "10k+ Orders/mo"}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="1"
                  value={orderRange}
                  onChange={e => setOrderRange(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Under 1,000</span>
                  <span>1,000 – 10,000</span>
                  <span>Over 10,000 (Plus)</span>
                </div>
              </div>

              {/* Checkboxes: Selected Agents */}
              <div className="space-y-3">
                <span className="text-sm font-semibold block">Select E-Commerce Agents to Deploy</span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "support", label: "Autonomous Support Agent", icon: MessageSquare },
                    { id: "repricer", label: "Competitor Repricing Agent", icon: LineChart },
                    { id: "newsletter", label: "Automated Campaign Agent", icon: Sparkles },
                    { id: "sync", label: "Fulfillment Sync Agent", icon: Workflow }
                  ].map(agent => {
                    const isSelected = selectedAgents[agent.id as keyof typeof selectedAgents]
                    const Icon = agent.icon
                    return (
                      <button
                        key={agent.id}
                        onClick={() => setSelectedAgents(prev => ({
                          ...prev,
                          [agent.id]: !prev[agent.id as keyof typeof selectedAgents]
                        }))}
                        className={`flex items-center gap-3 border rounded-xl p-3.5 text-left transition-all ${
                          isSelected
                            ? "border-accent/40 bg-accent/5 text-foreground font-semibold"
                            : "border-border bg-background hover:bg-muted/35 text-muted-foreground"
                        }`}
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-accent" : ""}`} />
                        <span className="text-sm leading-snug">{agent.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* Estimator Outputs (Right Column) */}
            <div className="lg:col-span-5 border border-border bg-muted/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

              <div className="space-y-6 my-auto">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Estimated Cost Budget</span>
                  <div className="font-display font-black text-3xl md:text-4xl text-accent tracking-tight">{estimateResult.cost}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-border py-6 text-left">
                  <div>
                    <div className="text-muted-foreground uppercase text-xs font-bold mb-1">Timeline</div>
                    <div className="text-foreground font-semibold text-sm">{estimateResult.timeline}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground uppercase text-xs font-bold mb-1">Workload</div>
                    <div className="text-foreground font-semibold text-sm">{estimateResult.hours} Eng Hours</div>
                  </div>
                </div>

                <div className="text-left space-y-1 bg-background border border-border p-4 rounded-xl">
                  <div className="text-xs text-muted-foreground uppercase font-bold">Recommended Resourcing</div>
                  <div className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Bot className="h-4 w-4 text-accent shrink-0" /> {estimateResult.team}
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <ShopifyCTA label="Reserve Embedded Resources" className="w-full rounded-full" />
                <p className="text-xs text-muted-foreground mt-2">2-week risk-free trial applies to all embedded engineer placements.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── E-Commerce ROI Calculator Section ────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12 space-y-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Value Realisation</span>
            <h2 className="font-display font-bold text-3xl tracking-tight flex items-center justify-center gap-2">
              <Sliders className="h-7 w-7 text-accent" /> Shopify AI Agent ROI Calculator
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Simulate your shop's operations to calculate the value AI agents create. Toggle through the tabs to customize your business scenarios and review cumulative savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* ROI Inputs (Left Column) */}
            <div className="lg:col-span-7 border border-border bg-muted/10 rounded-2xl p-6 md:p-8 space-y-8 flex flex-col justify-between">

              {/* ROI Situation Tabs */}
              <div className="flex border-b border-border text-sm mb-4 overflow-x-auto gap-2">
                {[
                  { id: 'support', label: 'Customer Support' },
                  { id: 'design', label: 'Design & Creative' },
                  { id: 'marketing', label: 'Marketing' },
                  { id: 'operations', label: 'Operations' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setRoiTab(tab.id as any)}
                    className={`pb-2 pr-4 transition-colors font-semibold whitespace-nowrap ${
                      roiTab === tab.id ? "text-accent border-b-2 border-accent" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Support Inputs */}
              {roiTab === 'support' && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span>Monthly Support Tickets</span>
                      <span className="text-accent font-bold">{monthlyTickets.toLocaleString()} Tickets</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="100"
                      value={monthlyTickets}
                      onChange={e => setMonthlyTickets(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>100</span>
                      <span>2,500</span>
                      <span>5,000</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span>Avg. Monthly Support Agent Salary</span>
                      <span className="text-accent font-bold">${csAgentSalary.toLocaleString()}/mo</span>
                    </div>
                    <input
                      type="range"
                      min="1500"
                      max="6000"
                      step="100"
                      value={csAgentSalary}
                      onChange={e => setCsAgentSalary(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>$1,500</span>
                      <span>$3,750</span>
                      <span>$6,000</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Design Inputs */}
              {roiTab === 'design' && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span>Promo Assets / Banners Needed (Monthly)</span>
                      <span className="text-accent font-bold">{assetsNeeded} Assets</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      step="1"
                      value={assetsNeeded}
                      onChange={e => setAssetsNeeded(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5 assets</span>
                      <span>27 assets</span>
                      <span>50 assets</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span>Designer / Agency Hourly Rate</span>
                      <span className="text-accent font-bold">${designerRate}/hr</span>
                    </div>
                    <input
                      type="range"
                      min="25"
                      max="100"
                      step="5"
                      value={designerRate}
                      onChange={e => setDesignerRate(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>$25/hr</span>
                      <span>$62/hr</span>
                      <span>$100/hr</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Marketing Inputs */}
              {roiTab === 'marketing' && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span>Email Marketing Campaigns (Monthly)</span>
                      <span className="text-accent font-bold">{campaignsCount} Campaigns</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="20"
                      step="1"
                      value={campaignsCount}
                      onChange={e => setCampaignsCount(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>2 campaigns</span>
                      <span>11 campaigns</span>
                      <span>20 campaigns</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span>Avg. Marketer / Copywriter Rate</span>
                      <span className="text-accent font-bold">${copywriterRate}/hr</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="120"
                      step="5"
                      value={copywriterRate}
                      onChange={e => setCopywriterRate(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>$30/hr</span>
                      <span>$75/hr</span>
                      <span>$120/hr</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Operations Inputs */}
              {roiTab === 'operations' && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span>Avg. Monthly Store Revenue</span>
                      <span className="text-accent font-bold">${monthlyRevenue.toLocaleString()}/mo</span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="500000"
                      step="5000"
                      value={monthlyRevenue}
                      onChange={e => setMonthlyRevenue(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>$5,000</span>
                      <span>$250,000</span>
                      <span>$500,000</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span>Estimated Cart Abandonment Rate</span>
                      <span className="text-accent font-bold">{abandonmentRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="25"
                      step="1"
                      value={abandonmentRate}
                      onChange={e => setAbandonmentRate(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5%</span>
                      <span>15%</span>
                      <span>25%</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* ROI Outputs (Right Column) */}
            {(() => {
              const payrollSaved = Math.round((monthlyTickets / 1000) * csAgentSalary * 0.8)
              const designSaved = Math.round(assetsNeeded * 3 * designerRate)
              const marketingSaved = Math.round(campaignsCount * 5 * copywriterRate)
              const revenueRecovered = Math.round(monthlyRevenue * (abandonmentRate / 100) * 0.45)

              const totalMonthlySavings = payrollSaved + designSaved + marketingSaved + revenueRecovered
              const paybackPeriod = estimateResult.costRaw === 0
                ? 0
                : parseFloat((estimateResult.costRaw / totalMonthlySavings).toFixed(1))

              return (
                <div className="lg:col-span-5 border border-border bg-muted/20 rounded-2xl p-6 md:p-8 flex flex-col justify-between text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

                  <div className="space-y-6 my-auto">
                    <div className="space-y-1">
                      <span className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Cumulative Monthly Value Created</span>
                      <div className="font-display font-black text-3xl md:text-4xl text-accent tracking-tight">
                        ${totalMonthlySavings.toLocaleString()}/mo
                      </div>
                    </div>

                    {/* Breakdown details */}
                    <div className="border-y border-border py-4 text-left text-sm space-y-2">
                      <div className="flex justify-between text-muted-foreground">
                        <span>CS Ticket Deflection (80%):</span>
                        <span className="text-foreground font-semibold">${payrollSaved.toLocaleString()}/mo</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Creative & Design Automation:</span>
                        <span className="text-foreground font-semibold">${designSaved.toLocaleString()}/mo</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Campaign Copy & Scheduling:</span>
                        <span className="text-foreground font-semibold">${marketingSaved.toLocaleString()}/mo</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Cart Recovery Revenue (4.5% lift):</span>
                        <span className="text-foreground font-semibold">${revenueRecovered.toLocaleString()}/mo</span>
                      </div>
                    </div>

                    <div className="text-left space-y-1 bg-background border border-border p-4 rounded-xl">
                      <div className="text-xs text-muted-foreground uppercase font-bold">Break-Even / Payback Timeline</div>
                      <div className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent shrink-0" />
                        {estimateResult.costRaw === 0 ? (
                          <span className="text-muted-foreground">Select agents in estimator above</span>
                        ) : (
                          <span>{paybackPeriod} Months <span className="text-muted-foreground">({paybackPeriod < 2 ? "Immediate Return" : "Payback Period"})</span></span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <ShopifyCTA label="Claim E-Commerce ROI" className="w-full rounded-full" />
                    <p className="text-xs text-muted-foreground mt-2">Cumulative calculation tracks value across support, creative assets, copywriting, and recovered sales.</p>
                  </div>

                </div>
              )
            })()}

          </div>
        </div>
      </section>

      {/* ── AI Workflow Blueprints Section ─────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-border bg-muted/20">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="text-center space-y-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Agent Logic</span>
            <h2 className="font-display font-bold text-3xl tracking-tight">AI Workflow Blueprints</h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Inspect the exact multi-turn execution loops our agents use to coordinate store operations. Toggle through the blueprints to view the steps.
            </p>
          </div>

          {/* Blueprint selector buttons */}
          <div className="flex justify-center flex-wrap gap-3 max-w-2xl mx-auto">
            {[
              { id: 'repricer', label: 'Repricing Autopilot', icon: LineChart },
              { id: 'marketing', label: 'Creative Ad Pipeline', icon: Sparkles },
              { id: 'inventory', label: 'Inventory Autopilot', icon: Workflow }
            ].map(bp => {
              const Icon = bp.icon
              const isActive = activeBlueprintId === bp.id
              return (
                <button
                  key={bp.id}
                  onClick={() => setActiveBlueprintId(bp.id as any)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all border font-semibold ${
                    isActive
                      ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                      : "bg-background border-border text-muted-foreground hover:bg-muted/30"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {bp.label}
                </button>
              )
            })}
          </div>

          {/* Blueprint Detail Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-background border border-border rounded-3xl p-6 md:p-10 shadow-sm">

            {/* Left Panel: Description */}
            <div className="lg:col-span-5 space-y-6">
              {activeBlueprintId === 'repricer' && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-accent">Competitor Repricing Autopilot</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Protects margins and captures revenue leaks by continuously monitoring competitor pricing. Designed specifically for stores operating in hyper-competitive retail niches.
                  </p>
                  <ul className="text-sm space-y-2.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Scrapes pricing hourly via semantic crawlers.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Analyzes cost margins and sets price caps.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Automatically syncs prices with Shopify Admin.
                    </li>
                  </ul>
                </div>
              )}

              {activeBlueprintId === 'marketing' && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-accent">Creative & Ad Copy Pipeline</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Automates asset generation and campaign building. The design agent matches product details with prompt guides to generate high-converting banner designs.
                  </p>
                  <ul className="text-sm space-y-2.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Parses product inventory changes instantly.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Designs custom marketing assets based on catalogs.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Drafts high-converting copies and uploads to Klaviyo.
                    </li>
                  </ul>
                </div>
              )}

              {activeBlueprintId === 'inventory' && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-accent">Inventory & PO Autopilot</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Prevents stockouts and automates purchasing loops. Monitors catalog inventory levels and sales velocity to alert managers in Slack for stock replenishments.
                  </p>
                  <ul className="text-sm space-y-2.5 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Computes depletion velocity and schedules POs.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Automatically drafts supplier order purchase sheets.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Direct approvals inside Slack before ERP routing.
                    </li>
                  </ul>
                </div>
              )}

              <div className="pt-2">
                <ShopifyCTA label="Deploy this Blueprint" size="sm" className="rounded-full" />
              </div>
            </div>

            {/* Right Panel: Interactive Workflow Flowchart */}
            <div className="lg:col-span-7 bg-muted/20 border border-border rounded-2xl p-6 flex flex-col justify-center min-h-[300px] relative">
              <div className="absolute top-3 left-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Live Schematic Pipeline</div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mt-4">

                {/* Step 1 Card */}
                <div className="bg-background border border-border rounded-xl p-4 text-center space-y-2 shadow-sm">
                  <div className="mx-auto w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">1</div>
                  <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Trigger Input</div>
                  <div className="text-sm font-semibold leading-tight">
                    {activeBlueprintId === 'repricer' && "Competitor Price Drop"}
                    {activeBlueprintId === 'marketing' && "New Catalog Ingestion"}
                    {activeBlueprintId === 'inventory' && "SKU Depot Depletion"}
                  </div>
                </div>

                {/* Step 2 Card */}
                <div className="bg-background border border-accent/30 rounded-xl p-4 text-center space-y-2 shadow-sm relative">
                  <div className="absolute -top-1.5 -right-1.5 bg-accent text-[9px] text-white px-1.5 py-0.5 rounded-full uppercase font-bold tracking-wider">AI Agent</div>
                  <div className="mx-auto w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">2</div>
                  <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Custom Agent</div>
                  <div className="text-sm font-semibold leading-tight">
                    {activeBlueprintId === 'repricer' && "LLM Margin Valuation"}
                    {activeBlueprintId === 'marketing' && "Content Designer Agent"}
                    {activeBlueprintId === 'inventory' && "PO Generation Brain"}
                  </div>
                </div>

                {/* Step 3 Card */}
                <div className="bg-background border border-border rounded-xl p-4 text-center space-y-2 shadow-sm">
                  <div className="mx-auto w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">3</div>
                  <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Shopify Action</div>
                  <div className="text-sm font-semibold leading-tight">
                    {activeBlueprintId === 'repricer' && "Shopify Price Sync"}
                    {activeBlueprintId === 'marketing' && "Klaviyo Draft Upload"}
                    {activeBlueprintId === 'inventory' && "Slack Manager Review"}
                  </div>
                </div>

              </div>

              {/* Loop back arrow trace */}
              <div className="text-center mt-6 text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                <Repeat2 className="h-3.5 w-3.5 text-accent animate-spin" style={{ animationDuration: '3s' }} /> Custom deployment looping 24/7. Self-healing exceptions.
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Kovil AI vs Standard Apps Comparison Section ──────────────────────── */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="text-center space-y-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">App Comparison</span>
            <h2 className="font-display font-bold text-3xl tracking-tight">Kovil AI Custom Agents vs. Standard Apps</h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Compare custom-built large language model agents against standard, hard-coded e-commerce automation plugins.
            </p>
          </div>

          <div className="border border-border rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-border bg-muted/20 text-xs uppercase text-muted-foreground">
                    <th className="p-4 md:p-6 font-bold">Capability</th>
                    <th className="p-4 md:p-6 font-bold">Standard Shopify Apps</th>
                    <th className="p-4 md:p-6 font-bold text-accent">Kovil AI Custom Agents</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-border">
                  {[
                    {
                      feat: "Operational Flexibility",
                      app: "Requires static rules and webhook setups. Breaks if catalog attributes change.",
                      kovil: "Autonomous reasoning. Reads descriptions semantically to update parameters.",
                    },
                    {
                      feat: "Catalog Search & RAG",
                      app: "Exact-match keyword string search. Zero context mapping.",
                      kovil: "Dedicated Model Context Protocol connections. Fast vector search index.",
                    },
                    {
                      feat: "Exception Handling",
                      app: "Fails silently. Halts processing on schema variations.",
                      kovil: "Self-healing error loops. Agent self-corrects based on error messages.",
                    },
                    {
                      feat: "Data Privacy & Compliance",
                      app: "Customer logs and tokens stored on shared, multi-tenant databases.",
                      kovil: "Private instance, secure tokens, and direct model integrations.",
                    }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-muted/10 transition-colors">
                      <td className="p-4 md:p-6 font-bold text-foreground align-top">{row.feat}</td>
                      <td className="p-4 md:p-6 text-muted-foreground align-top">
                        <div className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" /> {row.app}
                        </div>
                      </td>
                      <td className="p-4 md:p-6 text-foreground font-medium bg-accent/5 border-x border-accent/15 align-top">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>{row.kovil}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ── Native Integrations Logo Grid Section ────────────────────────────── */}
      <section className="py-20 px-6 border-t border-border bg-muted/20">
        <div className="max-w-5xl mx-auto space-y-12">

          <div className="text-center space-y-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Compatibility</span>
            <h2 className="font-display font-bold text-3xl tracking-tight">App Store & Tech Stack Integrations</h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Our custom agents connect directly with the customer support helpdesks, marketing systems, and logistics software you already use.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Klaviyo", desc: "Automate email outreach drafts and promotional campaign generation.", icon: Sparkles },
              { title: "Gorgias", desc: "Deflect 80% of support tickets by routing catalog data into Gorgias macros.", icon: MessageSquare },
              { title: "Zendesk", desc: "Sync technical order statuses and refund tickets directly.", icon: Bot },
              { title: "Stripe", desc: "Reconcile payment payouts and verify billing ledgers automatically.", icon: LineChart },
              { title: "ShipStation", desc: "Extract carrier tracking codes and sync carrier data automatically.", icon: Workflow },
              { title: "Loop Returns", desc: "Authorize exchanges and sync stock back into active inventory.", icon: Repeat2 },
              { title: "NetSuite & SAP ERP", desc: "Sync inventory changes with 500ms latency across warehouses.", icon: Database },
              { title: "n8n & LangGraph", desc: "Interface agents with custom multi-system workflows.", icon: Settings }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-background border border-border rounded-2xl p-5 hover:-translate-y-0.5 hover:border-accent/40 transition-all duration-200 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── FAQ Accordion Section ────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-3xl mx-auto space-y-12">

          <div className="text-center space-y-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent">Got Questions?</span>
            <h2 className="font-display font-bold text-3xl tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Everything you need to know about our custom Shopify AI agent setups, secure access, and token structures.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How securely do custom agents access my Shopify database?",
                a: "All agent connections are established using read-write restricted API tokens through a Shopify Partner Admin account. Read scopes are constrained specifically to product catalogs and customer history, with token logs isolated strictly within your secure cloud tenant. Customer personal information (PII) is masked and never exposed to model training loops."
              },
              {
                q: "What are the monthly running costs for LLM tokens?",
                a: "Kovil AI does not charge markups on model token usage. You pay the model providers (OpenAI, Anthropic, or DeepSeek) directly. The average running cost is extremely low, ranging from $10 to $50 per month depending on store order volumes and customer support tickets deflection rates."
              },
              {
                q: "Do I have to approve every single price change or email draft?",
                a: "No, you have complete control. We implement human-in-the-loop triggers using secure Slack or email buttons. Agents draft marketing campaigns, update pricing tables, or create POs, but the actions remain pending in draft state until a manager reviews and clicks 'Approve'."
              },
              {
                q: "What does the 2-week risk-free trial cover?",
                a: "The 2-week trial applies to all embedded engineer placements and initial deployment cycles. If the agentic workflow or developer does not meet your specifications during the first two weeks, you can cancel the engagement with zero cost and no upfront scoping fees."
              }
            ].map((item, idx) => {
              const isOpen = expandedFaqId === idx
              return (
                <div key={idx} className="border border-border rounded-xl overflow-hidden bg-muted/10">
                  <button
                    onClick={() => setExpandedFaqId(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-muted/20 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold">{item.q}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── High-Converting CTA Banner ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 pb-24 pt-4">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Not Sure How to Interface AI with Your Catalog?</h2>
            <p className="text-background/60 text-base max-w-xl">
              Book a 30-minute scoping call with a Kovil AI Delivery Lead. We'll map your Shopify Admin schemas, vector constraints, and custom agents, with a shortlist of engineers ready within 48 hours.
            </p>
            <p className="text-background/40 text-xs mt-4">No upfront scoping fees. 2-week risk-free trial on placements.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <ShopifyCTA label="Book Scoping Call" className="rounded-full px-8 h-12 text-base whitespace-nowrap" />
            <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10 rounded-full h-12" asChild>
              <Link href="/book-a-call">Talk to a Lead</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
