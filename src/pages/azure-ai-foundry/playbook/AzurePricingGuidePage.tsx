'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Clock, BookOpen, DollarSign, Zap, Database, Server, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"

export default function AzurePricingGuidePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/azure-ai-foundry" className="hover:text-foreground transition-colors">Azure AI Foundry</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/azure-ai-foundry/playbook" className="hover:text-foreground transition-colors">Playbook</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">Pricing Guide 2026</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Playbook · Azure AI Foundry</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-3.5 w-3.5" />8 min read</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          Azure AI Foundry Pricing Guide 2026: What enterprise AI actually costs
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
          Azure AI Foundry itself is free — you pay for the underlying services it orchestrates. Understanding the actual cost of a production AI agent deployment requires breaking down five distinct cost categories, each with its own pricing model and optimisation levers. This guide gives you real numbers and a framework to build an honest budget.
        </p>
        <p className="text-sm text-muted-foreground italic">Written by Kovil AI engineers · Updated May 2026</p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-8 h-11" onClick={openCalendly}>
            Get a cost estimate <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Link href="/azure-ai-foundry">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-11">
              View all services
            </Button>
          </Link>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">In this guide</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { n: "01", label: "The 5 cost categories", anchor: "#cost-categories" },
              { n: "02", label: "Monthly costs by deployment type", anchor: "#deployment-costs" },
              { n: "03", label: "Token cost optimisation", anchor: "#token-optimisation" },
              { n: "04", label: "Hidden costs to budget for", anchor: "#hidden-costs" },
              { n: "05", label: "ROI calculation framework", anchor: "#roi-framework" },
            ].map(item => (
              <a key={item.n} href={item.anchor} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/40 transition-colors group">
                <span className="font-display font-black text-sm shrink-0" style={{ color: AZURE }}>{item.n}</span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-16">

          {/* Section 1 — Cost Categories */}
          <div id="cost-categories">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">The 5 cost categories</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Azure AI Foundry sits above a set of Azure services you provision and pay for directly. Every production deployment spans some or all of these five categories. None are optional for a serious enterprise deployment — they each serve a distinct function.
            </p>
            <div className="space-y-5">
              {[
                {
                  icon: Zap,
                  n: "01",
                  title: "Azure OpenAI — token-based compute",
                  body: "The largest variable cost for most deployments. GPT-4o is priced at approximately $2.50 per million input tokens and $10.00 per million output tokens (pay-as-you-go, East US region, 2026 pricing). GPT-4o-mini runs at roughly $0.15/$0.60 per million tokens — 94% cheaper on input. For a customer service agent handling 10,000 queries per month at an average of 800 input tokens and 300 output tokens per exchange, GPT-4o costs approximately $200/month in model inference alone. Provisioned throughput units (PTUs) offer 30–50% savings at committed volume.",
                },
                {
                  icon: Database,
                  n: "02",
                  title: "Azure AI Search — retrieval infrastructure",
                  body: "Required for any RAG-based agent. Standard tier (S1) starts at approximately $245/month per search unit and is the minimum for production workloads — Free tier is single-replica, single-partition, and not suitable for enterprise use. A typical enterprise knowledge base (100k–500k documents, 1536-dimensional vectors) requires S1 or S2 depending on index size. Storage for vector indexes is priced additionally at roughly $0.025 per GB per month. Budget $245–$980/month for AI Search depending on document volume and query throughput requirements.",
                },
                {
                  icon: Server,
                  n: "03",
                  title: "Azure Machine Learning compute — fine-tuning and batch",
                  body: "Only relevant if you are fine-tuning models or running batch inference jobs. Fine-tuning GPT-4o requires a quota request and is priced per training token ($0.008/1k tokens) plus inference cost. For deployments using only RAG (the majority), Azure ML compute cost is minimal — limited to any scheduled evaluation or batch jobs you run. Most production agents that don't fine-tune spend less than $50/month on ML compute for evaluation pipelines.",
                },
                {
                  icon: DollarSign,
                  n: "04",
                  title: "Microsoft Copilot Studio — if you use low-code orchestration",
                  body: "Copilot Studio is licensed at $200 per month for 2,000 message sessions, with each additional 1,000 sessions costing approximately $100. A 'session' is up to 60 minutes of interaction with a single user. For Teams-embedded agents with moderate volume (under 2,000 sessions/month), this is the most cost-effective orchestration layer. For high-volume deployments, Semantic Kernel orchestration via Azure Functions is typically cheaper because you pay for compute rather than sessions.",
                },
                {
                  icon: TrendingUp,
                  n: "05",
                  title: "Azure infrastructure — the sum of the small parts",
                  body: "Storage (Azure Blob for documents, $0.018/GB/month for hot tier), networking (egress from Azure is $0.087/GB after 5GB/month), Azure API Management (Developer tier free, Standard from $175/month), Azure Monitor and Application Insights ($2.30/GB ingested), Azure Key Vault ($0.03 per 10,000 operations), and Azure Container Apps or Functions for hosting your agent code ($0.000016 per vCPU-second). These individually look small but aggregate to $100–$500/month for a typical medium deployment.",
                },
              ].map(item => (
                <div key={item.n} className="flex gap-5 p-6 rounded-2xl border border-border bg-card">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0 mt-1" style={{ background: `${AZURE}15` }}>
                    <item.icon className="h-5 w-5" style={{ color: AZURE }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-display font-black text-sm" style={{ color: AZURE }}>{item.n}</span>
                      <h3 className="font-semibold text-base">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 — Monthly costs table */}
          <div id="deployment-costs">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Typical monthly costs by deployment type</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These ranges are based on deployments we have built and operated. They assume pay-as-you-go pricing on GPT-4o, Standard tier AI Search, and no fine-tuning. Committed-use agreements and PTUs can reduce the AI compute component by 30–50% at scale.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Deployment type</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Configuration</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: AZURE }}>Monthly cost range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Small pilot", "1 agent, GPT-4o-mini or GPT-4o, low query volume (<5k/mo), AI Search S1, no fine-tuning", "$500 – $1,500"],
                    ["Medium deployment", "3–5 agents, GPT-4o, medium volume (5k–50k queries/mo), AI Search S1–S2, Copilot Studio or Semantic Kernel", "$2,000 – $8,000"],
                    ["Large rollout", "10+ agents, GPT-4o with PTUs, high volume (50k–500k queries/mo), AI Search S2–S3, API Management Standard", "$10,000 – $50,000"],
                    ["Enterprise scale", "Multi-region, dedicated PTU capacity, multiple AI Search indexes, full observability stack", "$50,000+"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4 font-semibold text-foreground">{row[0]}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs leading-relaxed">{row[1]}</td>
                      <td className="py-3 px-4 font-semibold" style={{ color: AZURE }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl p-5 border" style={{ background: `${AZURE}08`, borderColor: `${AZURE}25` }}>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: AZURE }}>Cost modelling tip</p>
              <p className="text-sm text-foreground leading-relaxed">The biggest swing factor is query volume and average context length. A 10x increase in query volume does not produce a 10x cost increase — most of the infrastructure cost (AI Search, API Management, monitoring) is fixed. Token costs scale linearly with volume, but that&apos;s only one of five cost categories. Run your cost model at 3x your expected volume to stress-test the business case.</p>
            </div>
          </div>

          {/* Section 3 — Token optimisation */}
          <div id="token-optimisation">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Token cost optimisation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Token costs are the most optimisable expense in your AI deployment. We have seen 40–70% token cost reductions on production deployments through systematic application of these strategies — without any degradation in output quality.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Model selection: right-size for the task",
                  body: "GPT-4o-mini handles the majority of factual Q&A, summarisation, classification, and structured extraction tasks at 94% lower cost than GPT-4o. Reserve GPT-4o for complex reasoning, nuanced judgement, or multi-step planning tasks. A production deployment that uses GPT-4o-mini for 80% of queries and GPT-4o for 20% of complex queries spends roughly 55% less on model inference than an all-GPT-4o deployment.",
                },
                {
                  title: "Prompt caching: pay once, retrieve cheaply",
                  body: "Azure OpenAI supports prompt caching for system prompts and static context. If your system prompt is 2,000 tokens and you handle 10,000 queries per month, prompt caching eliminates 20 million input tokens per month — approximately $50/month saved on GPT-4o at current pricing. Caching is enabled by default for compatible deployments; the key is structuring your prompts so the static prefix (system prompt, RAG context) comes first and the dynamic user input comes last.",
                },
                {
                  title: "Context window management",
                  body: "Conversation history is the silent budget killer. A naive implementation that appends every message to context produces an exponentially growing context window. Implement conversation summarisation at 4–6 turns: replace the full history with a compressed summary, preserving key facts and decisions. Semantic Kernel&apos;s KernelFunction-based memory compression handles this automatically when configured correctly.",
                },
                {
                  title: "RAG chunk sizing and retrieval precision",
                  body: "Returning 10 irrelevant 500-token chunks from Azure AI Search costs more than returning 3 highly relevant 300-token chunks. Use hybrid search (vector + BM25) with reciprocal rank fusion to improve retrieval precision. Set your top-K parameter (k=3 or k=5) based on empirical testing of your dataset, not defaults. Every unnecessary token in retrieved context is a direct cost.",
                },
                {
                  title: "Batching and async processing",
                  body: "For non-real-time workloads (document summarisation, batch classification, scheduled report generation), use the Azure OpenAI Batch API. Batch processing is priced at 50% of the standard token rate. A nightly document processing pipeline that costs $200/month in real-time API calls costs $100/month via the Batch API — no code changes beyond async submission.",
                },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl border border-border bg-card">
                  <h3 className="font-semibold text-sm text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 — Hidden costs */}
          <div id="hidden-costs">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Hidden costs to budget for</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every AI deployment budget we have reviewed underestimates these items. They are not surprising in retrospect — but they rarely appear in initial cost models because they are not line items in the Azure pricing calculator.
            </p>
            <div className="space-y-3">
              {[
                { label: "Data ingestion pipeline", detail: "One-time and ongoing cost to extract, chunk, enrich, and index your documents into Azure AI Search. For 100k documents, initial ingestion engineering is typically 2–4 weeks of developer time. Ongoing indexing of new documents requires an automated pipeline (Azure Functions or Logic App) — budget $50–$200/month for compute." },
                { label: "Index maintenance and re-indexing", detail: "Azure AI Search indexes degrade as your document corpus evolves. Plan for quarterly re-indexing runs as document chunking strategies and embedding models improve. Each re-index of a large corpus consumes significant Azure AI Search query and indexing units — budget 10–20% of your monthly AI Search cost for index maintenance operations." },
                { label: "Azure AI Content Safety filtering", detail: "Content Safety is priced per 1,000 text records analyzed ($1–$2.50/1k depending on tier and features). For a deployment handling 50k queries per month with both input and output filtering, budget $100–$250/month specifically for content safety." },
                { label: "Monitoring, logging, and alerting", detail: "Application Insights and Azure Monitor data ingestion adds up quickly. A production agent generating detailed traces (recommended for quality evaluation) generates 1–5 GB of telemetry per 10k queries. At $2.30/GB ingested, a high-volume deployment can easily spend $200–$500/month on observability alone." },
                { label: "Developer and ML engineer time", detail: "The most underestimated cost of all. Prompt engineering, evaluation dataset curation, model evaluation runs, and ongoing quality monitoring require sustained engineering effort. A production AI agent typically requires 0.25–0.5 FTE of ongoing maintenance per agent — prompt updates, retrieval quality improvements, evaluation refreshes, incident response. This cost is real even though it does not appear on your Azure bill." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: `${AZURE}20` }}>
                    <span className="text-xs font-bold" style={{ color: AZURE }}>!</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 — ROI framework */}
          <div id="roi-framework">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">ROI calculation framework</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A sound business case does not start from the technology cost — it starts from the current cost of the process you are automating. Here is the framework we use with every client before a build begins.
            </p>
            <div className="rounded-2xl border border-border bg-card p-6 mb-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">The ROI formula</p>
              <div className="space-y-3 font-mono text-sm">
                <div className="p-3 rounded-xl bg-muted/40">
                  <p className="text-foreground">Annual Benefit = (Hours saved × blended FTE rate)</p>
                  <p className="text-foreground ml-16">+ (Error reduction × cost per error)</p>
                  <p className="text-foreground ml-16">+ (Throughput gain × revenue per unit)</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/40">
                  <p className="text-foreground">Annual Net Benefit = Annual Benefit</p>
                  <p className="text-foreground ml-28">− (Infrastructure cost)</p>
                  <p className="text-foreground ml-28">− (Maintenance FTE cost)</p>
                  <p className="text-foreground ml-28">− (Amortised implementation cost)</p>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">
              The key to a credible business case is being conservative on automation rate. A process that takes 30 minutes of human time cannot save 30 minutes when automated — humans will spend 5–10 minutes reviewing AI output, handling escalations, and managing exceptions. A realistic automation saving is 60–75% of the original process time, not 100%.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Conservative", rate: "3–4x", period: "18–24 months", note: "Small team, moderate volume, careful phased rollout" },
                { label: "Typical", rate: "4–6x", period: "12–18 months", note: "Mid-size deployment, clear process scope, good baseline data" },
                { label: "Best case", rate: "8–12x", period: "6–12 months", note: "High-volume repetitive process, strong data quality, quick scale-up" },
              ].map(scenario => (
                <div key={scenario.label} className="rounded-2xl border border-border bg-card p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">{scenario.label}</p>
                  <p className="font-display font-black text-3xl mb-1" style={{ color: AZURE }}>{scenario.rate}</p>
                  <p className="text-xs text-muted-foreground mb-2">3-year ROI</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{scenario.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="rounded-2xl border p-6" style={{ background: `${AZURE}06`, borderColor: `${AZURE}20` }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Key takeaways</p>
            <ul className="space-y-3">
              {[
                "Azure AI Foundry is free — costs come from the underlying services: Azure OpenAI, AI Search, and infrastructure.",
                "Small pilots typically cost $500–$1,500/month. Medium enterprise deployments run $2,000–$8,000/month.",
                "Token costs are the most optimisable expense — model selection and prompt caching alone can cut inference costs by 50–70%.",
                "Budget explicitly for hidden costs: data ingestion, index maintenance, content safety filtering, and ongoing developer time.",
                "Build your ROI case from current process cost, not from technology cost. Use conservative automation rates (60–75%, not 100%).",
                "Provisioned throughput units (PTUs) become cost-effective above roughly 50,000 queries per month.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: AZURE }} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: AZURE }}>Continue Reading</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { pill: "Playbook", title: "The Azure AI Foundry ROI guide: How to build a business case that actually holds up", href: "/azure-ai-foundry/playbook/roi-guide" },
              { pill: "Playbook", title: "Azure AI Foundry Security & Compliance: The complete enterprise configuration guide", href: "/azure-ai-foundry/playbook/security-compliance-guide" },
              { pill: "Implementation Guide", title: "How to architect your first Azure AI Foundry agent: A practitioner's checklist", href: "/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent" },
              { pill: "Service", title: "AI Agent Design & Build — end-to-end agent engineering on Azure", href: "/azure-ai-foundry/services/ai-agent-design-build" },
            ].map(a => (
              <Link key={a.title} href={a.href} className="group block rounded-2xl border border-border bg-background p-5 hover:border-accent/40 hover:shadow-md transition-all">
                <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: AZURE }}>{a.pill}</span>
                <p className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors leading-snug">{a.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>Free cost estimate</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Want a real cost model for your deployment?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We build accurate cost models based on your actual query volumes, document corpus, and process scope — not generic estimates. No obligation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base" onClick={openCalendly}>
              Book a discovery call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base border-background/20 text-background hover:bg-background/10">
                <BookOpen className="mr-2 h-4 w-4" />
                View all services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>


      <AzurePracticeNavigation currentPath="/azure-ai-foundry/playbook/pricing-guide-2026" />
    </div>
  )
}
