'use client'

import { motion } from "motion/react"
import { CheckCircle2, XCircle, ArrowRight, ChevronRight, Minus } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"

const features = [
  { name: "Model catalog breadth", azure: "check", aws: "check", azureNote: "GPT-4o, o1, Phi-4, Mistral, Llama + fine-tuning", awsNote: "Claude, Titan, Llama, Mistral, AI21 — wider 3rd-party variety" },
  { name: "Enterprise security (IAM)", azure: "check", aws: "check", azureNote: "Entra ID RBAC + Managed Identity (credential-free)", awsNote: "IAM roles + STS — strong but separate from AD" },
  { name: "Native M365 integration", azure: "check", aws: "cross", azureNote: "Teams, SharePoint, Dynamics, Outlook native connectors", awsNote: "Requires custom API bridge or 3rd-party middleware" },
  { name: "Managed Identity", azure: "check", aws: "partial", azureNote: "Zero-credential auth across all Azure services", awsNote: "IAM Instance Roles achieve similar but no AD federation" },
  { name: "Multi-agent orchestration", azure: "check", aws: "check", azureNote: "Semantic Kernel + AutoGen, Copilot Studio visual builder", awsNote: "Bedrock Agents with step functions; more code-heavy" },
  { name: "Low-code builder", azure: "check", aws: "partial", azureNote: "Copilot Studio — citizen developer friendly", awsNote: "PartyRock playground; no enterprise-grade low-code agent UI" },
  { name: "Compliance frameworks", azure: "check", aws: "check", azureNote: "HIPAA BAA, FedRAMP High, ISO 27001, PCI DSS, GDPR", awsNote: "HIPAA BAA, FedRAMP High, ISO 27001, PCI DSS — equivalent" },
  { name: "Pricing model", azure: "partial", aws: "partial", azureNote: "PTU (provisioned) or pay-per-token; PTU gives cost predictability", awsNote: "On-demand + provisioned throughput; generally competitive" },
  { name: "Vendor lock-in risk", azure: "partial", aws: "partial", azureNote: "High if using Copilot Studio; lower if Semantic Kernel only", awsNote: "High if using Bedrock Agents/Knowledge Bases natively" },
  { name: "RAG tooling", azure: "check", aws: "check", azureNote: "Azure AI Search (hybrid + semantic) deeply integrated", awsNote: "Knowledge Bases with OpenSearch; strong but less tightly coupled" },
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

export default function AzureVsAWSBedrockPage() {
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
          <span className="text-foreground">Azure AI Foundry vs AWS Bedrock</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Compare · Azure AI Foundry</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          Azure AI Foundry vs AWS Bedrock: Which platform should you build on?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Both are enterprise-grade managed AI platforms, but they sit in fundamentally different ecosystems. Azure AI Foundry is purpose-built for Microsoft-centric organisations; AWS Bedrock excels for AWS-native workloads and multi-cloud teams. The right answer depends almost entirely on where your data and identity already live.
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
              { heading: "Choose Azure AI Foundry if…", points: ["Your org runs on Microsoft 365, Teams, SharePoint or Dynamics 365", "You need Entra ID RBAC and Managed Identity (no stored credentials)", "HIPAA, FCA, or FedRAMP compliance is a hard requirement"] },
              { heading: "Choose AWS Bedrock if…", points: ["Your workloads already run in AWS and your team knows IAM deeply", "You need the widest possible third-party model marketplace today", "You are building ML-research-heavy pipelines with SageMaker integration"] },
              { heading: "Consider both if…", points: ["You operate a hybrid cloud strategy with workloads in both clouds", "Your AI use cases span CRM (Salesforce on AWS) and productivity (M365)", "You want to avoid single-vendor lock-in at the model layer"] },
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
        <p className="text-muted-foreground mb-8">How the platforms stack up across the capabilities that matter most for enterprise AI deployments.</p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground w-48">Feature</th>
                <th className="text-left py-3 px-4 font-semibold w-56" style={{ color: AZURE }}>Azure AI Foundry</th>
                <th className="text-left py-3 px-4 font-semibold text-amber-500 w-56">AWS Bedrock</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground align-top">{row.name}</td>
                  <Cell val={row.azure} note={row.azureNote} />
                  <Cell val={row.aws} note={row.awsNote} />
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
            { title: "Your identity is Microsoft", body: "If employees authenticate via Entra ID (formerly Azure AD), Azure AI Foundry gives you Managed Identity across every service — no API keys, no secrets management, full RBAC audit trails. Replicating this on AWS requires bespoke SAML federation work." },
            { title: "M365 is your productivity layer", body: "Copilot Studio deploys agents directly into Teams, SharePoint, and Outlook with native graph connectors. If your team lives in M365, the time-to-value for AI assistants is dramatically shorter on Azure than AWS." },
            { title: "Regulated industry requirements", body: "Azure AI Foundry inherits Azure's full compliance portfolio — HIPAA BAA, FedRAMP High, ISO 27001, PCI DSS, NHS DSPT. For healthcare, financial services, or public sector, this removes a significant procurement and legal review burden." },
            { title: "You want low-code agent development", body: "Copilot Studio allows non-developer teams (HR, customer service, finance) to build and maintain AI agents without writing code. AWS has no equivalent citizen-developer surface for enterprise agent creation." },
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
            For organisations that have standardised on Microsoft — meaning Entra ID for identity, M365 for productivity, and Azure for cloud infrastructure — Azure AI Foundry is the clear choice. The integration depth is not superficial: Managed Identity means your AI agents authenticate to every Azure service without a single stored credential. Azure AI Search plugs directly into SharePoint and OneDrive data estates. Copilot Studio agents surface inside Teams without any embedding work. The productivity multiplier is real.
          </p>
          <p>
            AWS Bedrock is the stronger choice for teams deeply invested in the AWS ecosystem — particularly those running large SageMaker pipelines, using Aurora/Redshift as their data layer, or operating in AWS GovCloud. The Bedrock model marketplace also tends to receive newer third-party model versions (Claude, Llama, Mistral) slightly ahead of Azure, which matters for organisations wanting to stay on the frontier.
          </p>
          <p>
            Where we see organisations make mistakes is assuming this is a permanent binary choice. Many large enterprises run Azure AI Foundry for internal productivity agents (M365-integrated) and AWS Bedrock for customer-facing inference workloads (sitting next to existing AWS infrastructure). The platforms are not mutually exclusive — but each workload should live where its data and identity already reside. We recommend Azure AI Foundry as the primary enterprise AI platform for any Microsoft-centric organisation, with AWS Bedrock as a secondary option for specific AWS-native workloads.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>Platform selection workshop</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Not sure which platform fits your workload?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We run a 2-hour platform selection workshop — covering your data estate, identity layer, compliance requirements, and build team — and give you a documented recommendation.</p>
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

      <AzurePracticeNavigation currentPath="/azure-ai-foundry/compare/vs-aws-bedrock" />
    </div>
  )
}
