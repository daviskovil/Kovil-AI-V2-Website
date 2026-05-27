'use client'

import { motion } from "motion/react"
import { CheckCircle2, XCircle, ArrowRight, ChevronRight, Minus } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const features = [
  { name: "Model catalog breadth", azure: "check", vertex: "check", azureNote: "GPT-4o, o1, Phi-4, Mistral, Llama — strong OpenAI-first lineup", vertexNote: "Gemini 1.5 Pro/Flash, Gemini 2.0, Imagen, Chirp — Google-first but third-party available" },
  { name: "Enterprise security (IAM)", azure: "check", vertex: "check", azureNote: "Entra ID RBAC + Managed Identity, credential-free by default", vertexNote: "Google IAM + Workload Identity Federation — solid but requires GCP expertise" },
  { name: "Native M365 integration", azure: "check", vertex: "cross", azureNote: "Teams, SharePoint, Outlook, Dynamics native connectors", vertexNote: "Google Workspace native; no M365 connectors out of the box" },
  { name: "Managed Identity", azure: "check", vertex: "partial", azureNote: "System/user-assigned managed identities across all Azure services", vertexNote: "Service Accounts + Workload Identity — functional but more config-heavy" },
  { name: "Multi-agent orchestration", azure: "check", vertex: "check", azureNote: "Semantic Kernel + AutoGen, Copilot Studio visual builder", vertexNote: "Vertex AI Agent Builder + Reasoning Engine; strong but more code-first" },
  { name: "Low-code builder", azure: "check", vertex: "partial", azureNote: "Copilot Studio — full citizen developer surface with M365 deployment", vertexNote: "Agent Builder has a UI, but less mature for non-technical builders" },
  { name: "Compliance frameworks", azure: "check", vertex: "check", azureNote: "HIPAA BAA, FedRAMP High, ISO 27001, PCI DSS, NHS DSPT", vertexNote: "HIPAA BAA, FedRAMP High, ISO 27001, PCI DSS — broadly equivalent" },
  { name: "Pricing model", azure: "partial", vertex: "partial", azureNote: "PTU provisioned + pay-per-token; predictable at scale with PTU", vertexNote: "On-demand + committed use discounts; Gemini Flash very cost-competitive" },
  { name: "Vendor lock-in risk", azure: "partial", vertex: "partial", azureNote: "High with Copilot Studio; moderate with Semantic Kernel", vertexNote: "High with Reasoning Engine; lower if using Gemini API + LangChain" },
  { name: "RAG tooling", azure: "check", vertex: "check", azureNote: "Azure AI Search (hybrid + semantic ranking) deeply integrated", vertexNote: "Vertex AI Search + BigQuery integration — stronger for analytics-led RAG" },
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

export default function AzureVsVertexAIPage() {
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
          <span className="text-foreground">Azure AI Foundry vs Google Vertex AI</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Compare · Azure AI Foundry</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          Azure AI Foundry vs Google Vertex AI: Enterprise AI platform comparison
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Azure AI Foundry and Google Vertex AI are both serious enterprise platforms, but they reflect the different strengths of their parent ecosystems. Azure wins on identity, compliance, and M365 integration; Vertex AI wins on multimodal model capability, BigQuery analytics integration, and Google Workspace native workflows.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-8 h-12 text-base" onClick={openCalendly}>
            Talk to an Azure specialist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Link href="/azure-ai-foundry">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base">
              Explore Azure AI Foundry services
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
              { heading: "Choose Azure AI Foundry if…", points: ["Your productivity layer is M365 — Teams, SharePoint, Outlook, Dynamics", "Entra ID is your identity provider and you want Managed Identity auth", "You operate in regulated industries requiring HIPAA BAA or FedRAMP"] },
              { heading: "Choose Vertex AI if…", points: ["Your data estate lives in BigQuery and analytics drives your AI use cases", "You need Gemini's multimodal capabilities (vision, audio, long-context) at scale", "Your team already uses Google Workspace and wants native AI integration"] },
              { heading: "Consider both if…", points: ["You run a mixed Microsoft + Google productivity environment", "You want to benchmark GPT-4o vs Gemini 1.5 Pro on your specific workload", "Your ML team uses Vertex AI but business users are on M365"] },
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-2">Feature comparison</h2>
        <p className="text-muted-foreground mb-8">A practical breakdown across the dimensions enterprise AI buyers evaluate most.</p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground w-48">Feature</th>
                <th className="text-left py-3 px-4 font-semibold w-56" style={{ color: AZURE }}>Azure AI Foundry</th>
                <th className="text-left py-3 px-4 font-semibold text-green-600 w-56">Google Vertex AI</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground align-top">{row.name}</td>
                  <Cell val={row.azure} note={row.azureNote} />
                  <Cell val={row.vertex} note={row.vertexNote} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3 flex items-center gap-4">
          <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Strong / native</span>
          <span className="flex items-center gap-1"><Minus className="h-3.5 w-3.5 text-amber-400" /> Partial / requires configuration</span>
          <span className="flex items-center gap-1"><XCircle className="h-3.5 w-3.5 text-red-400" /> Not available</span>
        </p>
      </section>

      {/* When to Choose Azure */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6">When to choose Azure AI Foundry</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "M365 is your business operating system", body: "Azure AI Foundry agents deploy natively into Teams channels, SharePoint sites, and Outlook as Copilot extensions. No embedding work required. For organisations where employees spend their day in M365, this is a significant competitive advantage over Vertex AI." },
            { title: "Entra ID is your identity layer", body: "Managed Identity means your AI agents authenticate to Azure OpenAI, Azure AI Search, Cosmos DB, and Blob Storage without a single stored credential. Vertex AI's equivalent (Service Accounts + Workload Identity) works but requires more configuration, especially for teams not native to GCP." },
            { title: "Regulated industry compliance", body: "Both platforms hold HIPAA and FedRAMP, but Azure's compliance portfolio is broader (NHS DSPT, UK Cyber Essentials Plus, Germany C5). For NHS Trusts, financial services firms under FCA regulation, or US federal agencies, Azure AI Foundry reduces procurement complexity." },
            { title: "You want enterprise sales and support", body: "Microsoft's enterprise relationship — EA agreements, CSP partners, dedicated TAMs — makes Azure AI Foundry easier to procure, budget for, and get support on than Vertex AI for most mid-to-large enterprises. Google Cloud is improving but Microsoft's enterprise motion is more mature." },
          ].map(s => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold mb-2" style={{ color: AZURE }}>{s.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Recommendation */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Our recommendation</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            For the majority of enterprise buyers — particularly those in the UK, Europe, and regulated sectors — Azure AI Foundry is the stronger platform choice. The combination of Entra ID identity, Managed Identity credential management, and deep M365 integration creates a security and productivity baseline that is genuinely difficult to replicate on Vertex AI without significant custom engineering.
          </p>
          <p>
            Google Vertex AI has a genuine edge in two areas that should not be understated. First, the Gemini model family — particularly Gemini 1.5 Pro with its 1M token context window and native multimodality — is technically ahead of what is available through Azure AI Foundry today for specific use cases like document understanding at scale, video analysis, and audio processing. Second, for organisations whose data estate is BigQuery-centric, Vertex AI's native BigQuery ML integration dramatically simplifies the RAG pipeline architecture.
          </p>
          <p>
            Our practical recommendation: if your org runs on Microsoft, start with Azure AI Foundry. The integration work you save on identity, compliance, and M365 connectivity will significantly exceed the time you spend evaluating Vertex AI. If your data is primarily in BigQuery or your team is a Google Workspace shop, Vertex AI is the correct primary platform — and you can still access OpenAI models through Azure AI Foundry as a secondary resource for specific workloads.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>Platform selection workshop</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Azure vs Vertex — get a clear recommendation for your org</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We assess your data estate, identity layer, compliance requirements, and team expertise to give you a documented platform recommendation — not a generic comparison.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base" onClick={openCalendly}>
              Book a discovery call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base border-background/20 text-background hover:bg-background/10">
                View Azure AI Foundry services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
