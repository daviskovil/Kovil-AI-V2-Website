'use client'

import { motion } from "motion/react"
import { CheckCircle2, XCircle, ArrowRight, ChevronRight, Minus } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"
const GCP = "#4285F4"

const features = [
  {
    name: "Model catalog",
    azure: "check", aws: "check", gcp: "check",
    azureNote: "GPT-4o, o1, Phi-4, Mistral, Llama, Cohere + fine-tuning via Azure OpenAI",
    awsNote: "Claude 3.5 Sonnet, Titan, Llama, Mistral, AI21, Cohere — broadest 3rd-party variety",
    gcpNote: "Gemini 2.0 Flash/Pro, Gemini 1.5, PaLM, Llama, open-source via Model Garden",
  },
  {
    name: "Enterprise security (IAM)",
    azure: "check", aws: "check", gcp: "check",
    azureNote: "Entra ID RBAC + Managed Identity — credential-free across all Azure services",
    awsNote: "IAM roles + STS — strong but separate from Active Directory",
    gcpNote: "IAM + VPC-SC + Workload Identity Federation — no native AD; GWS binding manual",
  },
  {
    name: "Native productivity suite",
    azure: "check", aws: "cross", gcp: "check",
    azureNote: "Teams, SharePoint, Dynamics, Outlook native connectors via Copilot Studio",
    awsNote: "Requires custom API bridge or 3rd-party middleware; no native office suite",
    gcpNote: "Google Workspace (Docs, Gmail, Drive, Meet) native AI connectors",
  },
  {
    name: "Credential-free auth",
    azure: "check", aws: "partial", gcp: "partial",
    azureNote: "Managed Identity — zero stored credentials natively across all Azure services",
    awsNote: "IAM Instance Roles achieve similar but no AD federation out of the box",
    gcpNote: "Workload Identity Federation works well but requires more setup than Azure",
  },
  {
    name: "Multi-agent orchestration",
    azure: "check", aws: "check", gcp: "check",
    azureNote: "Semantic Kernel + AutoGen + Copilot Studio visual builder — most mature tooling",
    awsNote: "Bedrock Agents + Step Functions; reliable but more code-heavy to orchestrate",
    gcpNote: "Vertex AI Agent Engine (managed runtime) + Agent Builder; reached GA in 2024",
  },
  {
    name: "Low-code agent builder",
    azure: "check", aws: "partial", gcp: "partial",
    azureNote: "Copilot Studio — enterprise-grade citizen-developer surface with governance",
    awsNote: "PartyRock playground; no production-grade visual agent builder for enterprise",
    gcpNote: "Agent Builder visual tools exist but less mature than Copilot Studio for enterprise",
  },
  {
    name: "Compliance frameworks",
    azure: "check", aws: "check", gcp: "check",
    azureNote: "HIPAA BAA, FedRAMP High, ISO 27001, PCI DSS, GDPR, NHS DSPT",
    awsNote: "HIPAA BAA, FedRAMP High, ISO 27001, PCI DSS — broadly equivalent",
    gcpNote: "HIPAA BAA, FedRAMP High, ISO 27001, PCI DSS, SOC 2 — broadly equivalent",
  },
  {
    name: "Analytics + AI integration",
    azure: "check", aws: "check", gcp: "check",
    azureNote: "Microsoft Fabric + Synapse + ADLS; Fabric Copilot deeply embedded",
    awsNote: "Redshift, Athena, S3 + SageMaker pipelines — strongest ML-research integration",
    gcpNote: "BigQuery native Gemini integration — best analytics-to-AI link of the three",
  },
  {
    name: "RAG & vector search",
    azure: "check", aws: "check", gcp: "check",
    azureNote: "Azure AI Search (hybrid + semantic vector) tightly integrated; SharePoint connectors",
    awsNote: "Knowledge Bases with OpenSearch; strong but slightly less tightly coupled",
    gcpNote: "Vertex AI Search + RAG Engine; tightly coupled to BigQuery and GCS",
  },
  {
    name: "Vendor lock-in risk",
    azure: "partial", aws: "partial", gcp: "partial",
    azureNote: "High if using Copilot Studio; lower with Semantic Kernel / open SDKs",
    awsNote: "High if using Bedrock Agents/Knowledge Bases natively; lower with model-only usage",
    gcpNote: "High if using Vertex AI Agent Builder; lower with Gemma open-source or LangChain",
  },
]

type CellVal = "check" | "cross" | "partial"

function Cell({ val, note }: { val: CellVal; note: string }) {
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

const verdictCols = [
  {
    heading: "Choose Azure AI Foundry if…",
    color: AZURE,
    bg: `${AZURE}18`,
    points: [
      "Your org runs on Microsoft 365, Teams, SharePoint, or Dynamics 365",
      "You need Entra ID RBAC + Managed Identity (zero stored credentials)",
      "HIPAA, FCA, FedRAMP, or NHS DSPT compliance is a hard requirement",
      "You want citizen-developer agent building via Copilot Studio",
    ],
  },
  {
    heading: "Choose AWS Bedrock if…",
    color: "#F59E0B",
    bg: "#F59E0B18",
    points: [
      "Your workloads already run in AWS and your team knows IAM deeply",
      "You need Anthropic Claude or the broadest third-party model marketplace",
      "You are building ML-research-heavy pipelines alongside SageMaker",
      "Customer-facing inference sits next to existing AWS infrastructure",
    ],
  },
  {
    heading: "Choose Google Vertex AI if…",
    color: GCP,
    bg: `${GCP}18`,
    points: [
      "Your data already lives in BigQuery or Google Cloud Storage",
      "You rely on Google Workspace (Docs, Gmail, Drive) as your productivity layer",
      "You want Gemini 2.0 as your primary model with tightest native support",
      "Analytics-to-AI pipelines are a core use case (BigQuery + Gemini)",
    ],
  },
  {
    heading: "Consider multi-cloud if…",
    color: "#10B981",
    bg: "#10B98118",
    points: [
      "You operate hybrid workloads across two or more cloud providers",
      "Internal productivity agents (M365) and customer inference (AWS/GCP) are separate",
      "Your data estate is split — some in BigQuery, some in ADLS, some in S3",
      "You want to avoid single-vendor LLM dependency at the model layer",
    ],
  },
]

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
          <span className="text-foreground">Azure AI Foundry vs AWS Bedrock vs Google Vertex AI</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Platform Comparison 2026</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          Azure AI Foundry vs AWS Bedrock vs Google Vertex AI: Which platform should you build on?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
          All three are enterprise-grade managed AI platforms — but they are built for fundamentally different ecosystems and workload types. The right choice depends almost entirely on where your data, identity, and productivity tools already live.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Azure AI Foundry wins for Microsoft-centric organisations. AWS Bedrock excels for AWS-native workloads and teams wanting the widest model marketplace. Google Vertex AI is the strongest choice when BigQuery is your data warehouse or Google Workspace is your productivity layer.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-8 h-12 text-base" onClick={openCalendly}>
            Talk to an AI platform specialist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Link href="/azure-ai-foundry">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base">
              Explore Azure AI Foundry services
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-8 md:p-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6 text-background/50">Quick Verdict</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verdictCols.map(col => (
              <div key={col.heading}>
                <p className="font-semibold text-sm mb-3" style={{ color: col.color }}>{col.heading}</p>
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
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-2">Feature comparison: Azure AI Foundry vs AWS Bedrock vs Google Vertex AI</h2>
        <p className="text-muted-foreground mb-8">How all three platforms stack up across the capabilities that matter most for enterprise AI deployments.</p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground w-40">Feature</th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: AZURE }}>Azure AI Foundry</th>
                <th className="text-left py-3 px-4 font-semibold text-amber-500">AWS Bedrock</th>
                <th className="text-left py-3 px-4 font-semibold" style={{ color: GCP }}>Google Vertex AI</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground align-top">{row.name}</td>
                  <Cell val={row.azure as CellVal} note={row.azureNote} />
                  <Cell val={row.aws as CellVal} note={row.awsNote} />
                  <Cell val={row.gcp as CellVal} note={row.gcpNote} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3 flex flex-wrap items-center gap-4">
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
            { title: "Your identity is Microsoft", body: "If employees authenticate via Entra ID (formerly Azure AD), Azure AI Foundry gives you Managed Identity across every service — no API keys, no secrets management, full RBAC audit trails. Replicating this on AWS requires bespoke SAML federation work; on GCP it requires Workload Identity Federation configuration." },
            { title: "M365 is your productivity layer", body: "Copilot Studio deploys agents directly into Teams, SharePoint, and Outlook with native graph connectors. If your team lives in M365, the time-to-value for AI assistants is dramatically shorter on Azure than AWS Bedrock or Google Vertex AI." },
            { title: "Regulated industry requirements", body: "Azure AI Foundry inherits Azure's full compliance portfolio — HIPAA BAA, FedRAMP High, ISO 27001, PCI DSS, NHS DSPT. All three platforms meet core compliance requirements, but Azure's breadth and existing enterprise procurement agreements often give it the edge in regulated deals." },
            { title: "You want low-code agent development", body: "Copilot Studio allows non-developer teams (HR, customer service, finance) to build and maintain AI agents without writing code. Neither AWS Bedrock nor Google Vertex AI has a comparable citizen-developer surface with the same enterprise governance controls." },
          ].map(s => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold mb-2" style={{ color: AZURE }}>{s.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* When to Choose AWS Bedrock */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6">When to choose AWS Bedrock</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "You need the widest model marketplace", body: "AWS Bedrock offers the broadest third-party model catalog today — Anthropic Claude 3.5 Sonnet, Meta Llama, Mistral, AI21 Jurassic, Cohere Command. For organisations that want to evaluate or run multiple model vendors without managing separate API contracts, Bedrock is the most convenient single endpoint." },
            { title: "AWS is your primary cloud", body: "If your data sits in S3, your team knows IAM deeply, and your applications run on ECS or Lambda, Bedrock is the lowest-friction path. Running Azure AI Foundry workloads that depend on your AWS data estate adds unnecessary data egress cost and latency." },
            { title: "ML research pipelines matter", body: "The Bedrock + SageMaker combination is the strongest ML research and training platform of the three. For organisations that fine-tune models regularly or run large-scale training jobs alongside inference, the native SageMaker integration gives AWS a meaningful edge." },
            { title: "Customer inference at AWS scale", body: "If customer-facing inference workloads already run at scale in AWS (e.g., next to a Redshift data warehouse or an RDS database), Bedrock delivers the lowest latency and best operational efficiency by keeping compute and data colocated." },
          ].map(s => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold mb-2 text-amber-500">{s.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* When to Choose Google Vertex AI */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6">When to choose Google Vertex AI</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "BigQuery is your data warehouse", body: "Gemini in BigQuery allows you to run AI directly against your data warehouse without moving data. For analytics-heavy organisations, this eliminates the ETL step entirely — SQL analysts can call Gemini from a BigQuery query to summarise, classify, or extract from text columns at terabyte scale." },
            { title: "Google Workspace is your productivity layer", body: "If your team works in Google Docs, Gmail, Drive, and Meet, Vertex AI Agent Builder connects natively to the Google Workspace corpus. Building internal knowledge agents, meeting summarisers, or doc review tools is faster on Vertex AI than Azure or AWS for Google Workspace organisations." },
            { title: "You want Gemini 2.0 natively", body: "Google Vertex AI is the first platform where Gemini 2.0 Flash and Pro are production-available with SLAs, provisioned throughput, and fine-tuning support. For organisations that have evaluated models and specifically want Gemini 2.0 as their primary LLM, Vertex AI provides tighter native support than calling the API externally." },
            { title: "Open-source and research workloads", body: "Vertex AI Model Garden offers a broader open-source model selection than Azure AI Foundry, including many HuggingFace models served at scale. For research teams wanting to experiment with open weights without running their own GPU clusters, Model Garden reduces operational overhead." },
          ].map(s => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold mb-2" style={{ color: GCP }}>{s.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Head-to-Head: Migration paths */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6">Platform migration and switching cost</h2>
        <div className="space-y-4">
          {[
            {
              from: "AWS → Azure", color: AZURE,
              body: "Migration from AWS Bedrock to Azure AI Foundry is viable but involves rearchitecting identity (IAM → Entra ID Managed Identity), moving vector indexes from OpenSearch to Azure AI Search, and rewriting agent logic from Bedrock Agents to Semantic Kernel or Copilot Studio. For M365-centric organisations this effort typically pays back within 6–12 months through reduced integration friction."
            },
            {
              from: "GCP → Azure", color: AZURE,
              body: "Teams migrating from Google Vertex AI to Azure AI Foundry will need to migrate vector stores (Vertex AI Search → Azure AI Search), re-instrument agent runtimes (Agent Builder → Semantic Kernel), and re-map identity from Workload Identity Federation to Managed Identity. BigQuery → Microsoft Fabric migration is the highest-effort component if analytics-to-AI pipelines are in scope."
            },
            {
              from: "Multi-cloud strategy", color: "#10B981",
              body: "Many large enterprises settle on a split: Azure AI Foundry for internal productivity agents (M365, HR, finance automation) and either AWS Bedrock or Google Vertex AI for customer-facing inference workloads co-located with existing data estates. This maximises integration value on each cloud without forcing a single-vendor bet on LLM infrastructure."
            },
          ].map(item => (
            <div key={item.from} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-semibold mb-2 text-sm" style={{ color: item.color }}>{item.from}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Recommendation */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Our recommendation</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            For organisations that have standardised on Microsoft — Entra ID for identity, M365 for productivity, Azure for cloud infrastructure — <strong className="text-foreground">Azure AI Foundry is the clear choice</strong>. The integration depth is real: Managed Identity means agents authenticate to every Azure service without a single stored credential. Azure AI Search plugs directly into SharePoint and OneDrive data estates. Copilot Studio agents surface inside Teams without any embedding work. No other platform matches this for Microsoft-centric organisations.
          </p>
          <p>
            <strong className="text-foreground">AWS Bedrock is the stronger choice</strong> for teams deeply invested in the AWS ecosystem — particularly those running large SageMaker pipelines, using Aurora or Redshift as their primary data layer, or operating in AWS GovCloud. Bedrock also wins when Claude 3.5 Sonnet is the model of choice, as Anthropic's first-party endpoint on AWS is typically ahead of availability on other platforms.
          </p>
          <p>
            <strong className="text-foreground">Google Vertex AI is the right choice</strong> when BigQuery is the data warehouse — Gemini in BigQuery eliminates the ETL step entirely for analytics-to-AI pipelines. Google Workspace organisations also get significantly faster time-to-value for internal AI assistants built on the Workspace corpus.
          </p>
          <p>
            The most common architecture we see in large enterprises is a hybrid: Azure AI Foundry for internal M365-integrated productivity agents, paired with AWS Bedrock or Vertex AI for external inference workloads that sit closer to existing data infrastructure on those clouds. The platforms are not mutually exclusive — but each workload should live where its data and identity already reside. Don't let vendor marketing or a single procurement negotiation force an unnatural fit.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>Platform selection workshop</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Not sure which platform fits your workload?</h2>
          <p className="text-background/60 mb-8 max-w-lg mx-auto">We run a 2-hour platform selection workshop — covering your data estate, identity layer, compliance requirements, and build team — and give you a documented recommendation across Azure, AWS, and GCP.</p>
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
