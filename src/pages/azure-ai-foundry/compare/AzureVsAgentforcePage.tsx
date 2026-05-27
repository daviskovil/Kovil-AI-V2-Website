'use client'

import { motion } from "motion/react"
import { CheckCircle2, XCircle, ArrowRight, ChevronRight, Minus } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"

const features = [
  { name: "Model catalog breadth", azure: "check", sf: "partial", azureNote: "GPT-4o, o1, Phi-4, Mistral, Llama — full model choice", sfNote: "Einstein AI models (OpenAI-based) + limited third-party; model choice is restricted" },
  { name: "Enterprise security (IAM)", azure: "check", sf: "check", azureNote: "Entra ID RBAC + Managed Identity across all Azure resources", sfNote: "Salesforce Shield, Event Monitoring, Named Credentials — strong within Salesforce" },
  { name: "Native M365 integration", azure: "check", sf: "cross", azureNote: "Teams, SharePoint, Outlook, Dynamics native connectors", sfNote: "No M365 integration; Salesforce + Microsoft require middleware or MuleSoft" },
  { name: "Data scope", azure: "check", sf: "partial", azureNote: "Any Azure data source: SQL, Cosmos DB, Blob, SharePoint, APIs", sfNote: "Primarily Salesforce CRM data (Leads, Contacts, Cases, Opportunities)" },
  { name: "Multi-agent orchestration", azure: "check", sf: "partial", azureNote: "Semantic Kernel + AutoGen for complex multi-step enterprise agents", sfNote: "Agentforce flows are powerful but bounded to Salesforce workflow primitives" },
  { name: "Low-code builder", azure: "check", sf: "check", azureNote: "Copilot Studio — visual agent builder with M365 deployment", sfNote: "Flow Builder + Agentforce setup UI — excellent for Salesforce admins" },
  { name: "Compliance frameworks", azure: "check", sf: "check", azureNote: "HIPAA BAA, FedRAMP High, ISO 27001, PCI DSS, NHS DSPT", sfNote: "HIPAA BAA, SOC 2 Type II, ISO 27001 — strong within CRM boundary" },
  { name: "Pricing model", azure: "partial", sf: "partial", azureNote: "PTU + pay-per-token; predictable at scale but infrastructure cost on top", sfNote: "Einstein add-on licensing per user/conversation; can be expensive at scale" },
  { name: "Vendor lock-in risk", azure: "partial", sf: "check", azureNote: "Moderate — Copilot Studio creates some lock-in; Semantic Kernel is portable", sfNote: "High — Agentforce agents are deeply coupled to Salesforce data and flows" },
  { name: "RAG tooling", azure: "check", sf: "partial", azureNote: "Azure AI Search (hybrid + semantic) — works with any data source", sfNote: "Einstein Copilot Search grounded on Salesforce Knowledge and CRM data only" },
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

export default function AzureVsAgentforcePage() {
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
          <span className="text-foreground">Azure AI Foundry vs Salesforce Agentforce</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Compare · Azure AI Foundry</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          Azure AI Foundry vs Salesforce Agentforce: Which AI agent platform is right for you?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Agentforce and Azure AI Foundry serve fundamentally different layers of the enterprise AI stack. Agentforce is a CRM-native agent platform built on top of Salesforce data and flows; Azure AI Foundry is enterprise infrastructure-layer AI that can reach any data source across your organisation. Understanding this distinction is the starting point for choosing correctly — and many organisations will need both.
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
              { heading: "Choose Agentforce if…", points: ["You need agents that automate Salesforce Sales, Service, or Marketing Cloud workflows", "Your use case is entirely CRM-bounded: lead qualification, case routing, opportunity updates", "You want fastest time-to-value for Salesforce admins without infrastructure involvement"] },
              { heading: "Choose Azure AI Foundry if…", points: ["You need agents that span your entire data estate — ERP, SharePoint, SQL, APIs", "Your use case touches non-CRM systems: finance, HR, manufacturing, compliance", "You need custom model selection, Entra ID auth, or M365 surface deployment"] },
              { heading: "Use both together if…", points: ["Agentforce handles CRM-side automation; Azure AI Foundry handles enterprise-wide orchestration", "Your sales team uses Agentforce inside Salesforce; back-office teams use Azure agents in Teams", "You want to pass enriched Azure AI outputs into Salesforce via MuleSoft or API connectors"] },
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
        <p className="text-muted-foreground mb-8">Note that these platforms have different scopes — direct feature comparisons are most useful where the use cases genuinely overlap.</p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground w-48">Feature</th>
                <th className="text-left py-3 px-4 font-semibold w-56" style={{ color: AZURE }}>Azure AI Foundry</th>
                <th className="text-left py-3 px-4 font-semibold text-sky-500 w-56">Salesforce Agentforce</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground align-top">{row.name}</td>
                  <Cell val={row.azure} note={row.azureNote} />
                  <Cell val={row.sf} note={row.sfNote} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3 flex items-center gap-4">
          <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Strong / native</span>
          <span className="flex items-center gap-1"><Minus className="h-3.5 w-3.5 text-amber-400" /> Partial / within platform scope</span>
          <span className="flex items-center gap-1"><XCircle className="h-3.5 w-3.5 text-red-400" /> Not available</span>
        </p>
      </section>

      {/* When to Choose Azure */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6">When to choose Azure AI Foundry</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Enterprise-wide data access", body: "Agentforce agents can only see what is in Salesforce. Azure AI Foundry agents can be grounded on SharePoint, SQL databases, ERP systems, Blob Storage, and any REST API. If your use case requires synthesising data from multiple enterprise systems, Azure is the correct choice." },
            { title: "Non-CRM workflows", body: "Azure AI Foundry is designed for use cases across every function — finance approvals, HR onboarding, compliance monitoring, supply chain exception handling. These workflows live outside Salesforce and require an enterprise-layer AI platform, not a CRM-native one." },
            { title: "Regulated industry requirements", body: "For healthcare, financial services, and public sector, Azure AI Foundry's compliance portfolio (HIPAA BAA, FedRAMP High, NHS DSPT) and private endpoint networking provide a security posture that Agentforce, operating within Salesforce's shared infrastructure, cannot fully match." },
            { title: "Custom model selection", body: "Azure AI Foundry gives you full model choice — GPT-4o, o1, Phi-4, Mistral, Llama, and custom fine-tuned models. Agentforce uses Einstein AI (built on OpenAI), with no flexibility to swap models. For organisations with specific accuracy, cost, or latency requirements, Azure AI Foundry's model flexibility matters." },
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
            The most important framing for this comparison is that Agentforce and Azure AI Foundry are not competing for the same space — they operate at different layers. Agentforce is a product built on Salesforce's CRM platform; Azure AI Foundry is enterprise AI infrastructure. Choosing between them is often the wrong question: the right question is which use cases belong in each.
          </p>
          <p>
            Agentforce delivers genuine value for Salesforce-bounded use cases: qualifying leads using Salesforce data, routing service cases based on case history, generating opportunity summaries from CRM records. For these workflows, Agentforce's out-of-the-box Salesforce context and admin-friendly setup means faster time-to-value than building equivalent agents on Azure AI Foundry.
          </p>
          <p>
            Azure AI Foundry is the right choice for enterprise-wide AI — workflows that touch ERP data, SharePoint knowledge bases, SQL analytics, HR systems, and compliance data stores. Organisations with serious AI programmes typically end up running Agentforce for their CRM-layer automation and Azure AI Foundry for their enterprise-layer orchestration, with data flowing between the two via MuleSoft or direct Salesforce API connectors. We recommend starting with Azure AI Foundry as your enterprise AI foundation, and adding Agentforce only where its deep Salesforce CRM integration delivers a specific, measurable advantage.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>Enterprise AI strategy</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Map your AI use cases to the right platform</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We help you identify which workloads belong in Agentforce, which in Azure AI Foundry, and how to connect the two — so you invest in the right platform for each use case.</p>
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

      <AzurePracticeNavigation currentPath="/azure-ai-foundry/compare/vs-agentforce" />
    </div>
  )
}
