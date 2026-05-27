'use client'

import { motion } from "motion/react"
import { CheckCircle2, XCircle, ArrowRight, ChevronRight, Minus } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"

const features = [
  { name: "Model catalog breadth", sk: "check", lc: "check", skNote: "Azure OpenAI (first-class), OpenAI, Hugging Face, custom endpoints", lcNote: "100+ LLM providers — widest ecosystem by far" },
  { name: "Enterprise security (IAM)", sk: "check", lc: "partial", skNote: "Managed Identity + Entra ID native; credential-free Azure OpenAI auth", lcNote: "API key / env var default; Managed Identity possible but manual wiring" },
  { name: "Native M365 integration", sk: "check", lc: "cross", skNote: "Plugin architecture designed for M365, Dynamics, and Azure services", lcNote: "No built-in M365 connector; requires custom tool implementation" },
  { name: "Managed Identity", sk: "check", lc: "partial", skNote: "DefaultAzureCredential built into SK's Azure connectors by default", lcNote: "Possible via azure-identity + custom LLM wrapper; not built in" },
  { name: "Multi-agent orchestration", sk: "check", lc: "check", skNote: "Process framework + AutoGen integration for complex agent graphs", lcNote: "LangGraph — mature, battle-tested multi-agent framework; community-driven" },
  { name: "Low-code / citizen builder", sk: "partial", lc: "cross", skNote: "Copilot Studio uses Semantic Kernel as backend; SK itself is code-first", lcNote: "No low-code surface; developer-only" },
  { name: "Compliance frameworks", sk: "check", lc: "cross", skNote: "Covered by Azure enterprise agreements; Microsoft support SLA available", lcNote: "Open-source; no enterprise compliance coverage — you own the stack" },
  { name: "Pricing model", sk: "check", lc: "check", skNote: "Open-source SDK; Azure OpenAI usage costs apply separately", lcNote: "Open-source SDK; LangSmith tracing/observability has SaaS pricing" },
  { name: "Vendor lock-in risk", sk: "partial", lc: "check", skNote: "Lowest lock-in for Azure-specific apps; more portable than Copilot Studio", lcNote: "Very portable — community connectors cover virtually every LLM and tool" },
  { name: "RAG tooling", sk: "check", lc: "check", skNote: "Azure AI Search + SK Memory — tight Azure integration, enterprise-grade", lcNote: "Broad vector store support (Pinecone, Weaviate, Chroma, FAISS, pgvector)" },
]

function Cell({ val, note }: { val: string; note: string }) {
  return (
    <td className="py-3 px-4 text-sm text-muted-foreground align-top">
      <div className="flex items-start gap-2">
        {val === "check" && <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-green-500" />}
        {val === "cross" && <XCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-400" />}
        {val === "partial" && <Minus className="h-4 w-4 shrink-0 mt-0.5 text-amber-400" />}
        <span>{note}</span>
      </div>
    </td>
  )
}

export default function SemanticKernelVsLangChainPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/azure-ai-foundry" className="hover:text-foreground transition-colors">Azure AI Foundry</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/azure-ai-foundry/compare" className="hover:text-foreground transition-colors">Compare</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">Semantic Kernel vs LangChain</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Compare · Azure AI Foundry</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          Semantic Kernel vs LangChain: Choosing the right AI orchestration framework for enterprise
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Both Semantic Kernel and LangChain are open-source AI orchestration SDKs that let you build LLM-powered agents and pipelines. They are designed for different ecosystems and enterprise maturity levels: Semantic Kernel is Microsoft&apos;s framework, optimised for Azure and .NET; LangChain is the Python-native community standard with the broadest integrations. Many enterprise teams use both — here is how to decide which belongs where.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-8 h-12 text-base" onClick={openCalendly}>
            Talk to an AI engineering specialist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Link href="/azure-ai-foundry/services/ai-agent-design-build">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base">
              Agent design &amp; build service
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="max-w-4xl mx-auto px-6 pb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-8 md:p-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: AZURE }}>Quick Verdict</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { heading: "Choose Semantic Kernel if…", points: ["Your stack is Azure, .NET/C#, or TypeScript on Azure Functions/App Service", "You need Managed Identity to Azure OpenAI — no API keys in production", "You are building plugins for M365, Dynamics, or Azure-hosted enterprise tools"] },
              { heading: "Choose LangChain if…", points: ["Your team is Python-native and wants the broadest LLM provider ecosystem", "You are doing rapid prototyping or ML research that changes frequently", "You need vector store integrations beyond Azure AI Search (Pinecone, Weaviate, pgvector)"] },
              { heading: "Use both together if…", points: ["Your Azure backend uses Semantic Kernel; Python data science team uses LangChain", "You prototype in LangChain then harden the production path in Semantic Kernel", "Different teams own different pipelines and you want each to use their natural toolchain"] },
            ].map(col => (
              <div key={col.heading}>
                <p className="font-semibold text-sm mb-3 text-background/80">{col.heading}</p>
                <ul className="space-y-2">
                  {col.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-background/60">
                      <span className="shrink-0 mt-0.5 text-green-400">✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-2">Framework comparison</h2>
        <p className="text-muted-foreground mb-8">A technical comparison covering the dimensions that matter most for enterprise AI engineering teams.</p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground w-48">Capability</th>
                <th className="text-left py-3 px-4 font-semibold w-56" style={{ color: AZURE }}>Semantic Kernel</th>
                <th className="text-left py-3 px-4 font-semibold text-emerald-500 w-56">LangChain</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground align-top">{row.name}</td>
                  <Cell val={row.sk} note={row.skNote} />
                  <Cell val={row.lc} note={row.lcNote} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3 flex items-center gap-4">
          <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Strong / native</span>
          <span className="flex items-center gap-1"><Minus className="h-3.5 w-3.5 text-amber-400" /> Possible with configuration</span>
          <span className="flex items-center gap-1"><XCircle className="h-3.5 w-3.5 text-red-400" /> Not available</span>
        </p>
      </section>

      {/* When to Choose Semantic Kernel */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6">When to choose Semantic Kernel</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Azure-native, credential-free auth", body: "Semantic Kernel's Azure OpenAI connector uses DefaultAzureCredential out of the box, meaning your agent authenticates via Managed Identity without storing API keys anywhere. For enterprise production deployments, this is a significant operational and security advantage over LangChain's default API key approach." },
            { title: ".NET and C# enterprise backends", body: "If your application layer is .NET — Azure Functions, ASP.NET Core, Azure App Service — Semantic Kernel is the natural choice. LangChain's Python-first design means using Python microservices as a sidecar to your .NET code, adding operational complexity. Semantic Kernel also has a mature TypeScript SDK for Node.js backends." },
            { title: "Plugin architecture for enterprise tools", body: "Semantic Kernel's Plugin model is designed with Microsoft 365, Dynamics, and Azure services in mind. Plugins are OpenAPI-compatible and can be exposed directly to Copilot Studio agents, creating a clean bridge between your enterprise AI infrastructure and the low-code business layer." },
            { title: "Microsoft enterprise support", body: "Semantic Kernel is a Microsoft product with enterprise support SLA available through Azure support plans. LangChain is community-supported open source (with LangSmith as a commercial observability add-on). For regulated industries or mission-critical applications, an enterprise support SLA matters." },
          ].map(s => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold mb-2" style={{ color: AZURE }}>{s.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architectural note: how they relate */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="rounded-2xl p-6 border" style={{ background: `${AZURE}08`, borderColor: `${AZURE}25` }}>
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: AZURE }}>How Semantic Kernel and LangChain relate to Azure AI Foundry</p>
          <p className="text-foreground leading-relaxed mb-3">
            Azure AI Foundry is the managed platform layer — it provides the model endpoints (Azure OpenAI), the RAG index (Azure AI Search), the prompt tracing and evaluation (Prompt Flow), and the compliance/security infrastructure. Semantic Kernel and LangChain are orchestration SDKs that call into Azure AI Foundry from your application code.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Semantic Kernel is designed to work with Azure AI Foundry as its primary backend. LangChain can also target Azure OpenAI endpoints and Azure AI Search, but it requires more manual wiring. Either SDK is valid from a purely functional perspective — the choice comes down to team expertise, language ecosystem, and how much Azure-native integration you need out of the box.
          </p>
        </div>
      </section>

      {/* Our Recommendation */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Our recommendation</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            For enterprise teams building production AI agents on Azure, our default recommendation is Semantic Kernel as the primary orchestration framework. The credential-free Managed Identity authentication, the native Azure AI Search and Cosmos DB connectors, and the Plugin architecture that bridges into Copilot Studio create an integration story that is genuinely hard to replicate in LangChain without significant custom wrapper code. This matters most in regulated environments where secrets management, audit trails, and enterprise support SLAs are non-negotiable.
          </p>
          <p>
            LangChain remains the better choice for Python-native data science and ML engineering teams doing rapid iteration, prototyping, or research workloads where the breadth of community integrations — across vector stores, LLM providers, and tool ecosystems — outweighs the need for Azure-native auth. LangChain's LangGraph framework for multi-agent workflows is also more mature and battle-tested than Semantic Kernel's Process framework for certain complex graph patterns.
          </p>
          <p>
            In practice, the most effective enterprise AI teams use both: Semantic Kernel for the production application layer where security, compliance, and enterprise integration are paramount; LangChain for the data science and experimentation layer where speed of iteration and Python ecosystem breadth matter more. These frameworks are not mutually exclusive — many Azure AI Foundry deployments call into the same Azure OpenAI endpoints from both SK-based services and LangChain-based notebooks without conflict.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>AI engineering partnership</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Get your AI agent architecture right from the start</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We design Semantic Kernel-based agent architectures for Azure — Managed Identity auth, Azure AI Search RAG, Copilot Studio plugin bridges — production-grade from day one.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base" onClick={openCalendly}>
              Book a discovery call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry/services/ai-agent-design-build">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base border-background/20 text-background hover:bg-background/10">
                AI agent design &amp; build service
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <AzurePracticeNavigation currentPath="/azure-ai-foundry/compare/semantic-kernel-vs-langchain" />
    </div>
  )
}
