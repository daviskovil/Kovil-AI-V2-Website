'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Clock, BookOpen, Shield, Lock, Network, Eye, FileCheck, AlertTriangle } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"

export default function AzureSecurityCompliancePage() {
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
          <span className="text-foreground">Security & Compliance Guide</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Playbook · Azure AI Foundry</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-3.5 w-3.5" />11 min read</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          Azure AI Foundry Security & Compliance: The complete enterprise configuration guide
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
          Azure AI Foundry inherits Azure&apos;s enterprise security posture, but production AI deployments require deliberate configuration across six distinct security layers. The platform gives you the controls — this guide tells you exactly how to configure each one for enterprise compliance. Skipping any layer leaves gaps that will surface in a security audit.
        </p>
        <p className="text-sm text-muted-foreground italic">Written by Kovil AI engineers · Updated May 2026</p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-8 h-11" onClick={openCalendly}>
            Security architecture review <ArrowRight className="ml-2 h-4 w-4" />
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
              { n: "01", label: "Identity & Access: Managed Identity", anchor: "#identity-access" },
              { n: "02", label: "Network isolation: Private endpoints", anchor: "#network-isolation" },
              { n: "03", label: "Data governance: What Azure AI logs", anchor: "#data-governance" },
              { n: "04", label: "Content Safety configuration", anchor: "#content-safety" },
              { n: "05", label: "Compliance frameworks", anchor: "#compliance-frameworks" },
              { n: "06", label: "Audit & monitoring checklist", anchor: "#audit-checklist" },
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

          {/* Section 1 — Identity */}
          <div id="identity-access">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Identity & Access: Managed Identity configuration</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The most impactful security decision in any Azure AI deployment is authentication method. API keys stored in environment variables or Key Vault references are auditable but still represent a credential that can be leaked, rotated incorrectly, or shared across environments. Managed Identity eliminates the credential entirely — the Azure runtime handles identity, and access is controlled through Entra ID RBAC.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl border p-5 opacity-70" style={{ borderColor: "var(--border)", background: "var(--card)" }}>
                <p className="font-semibold text-sm text-red-400 mb-3">API key approach (avoid in production)</p>
                <ul className="space-y-2">
                  {["Key stored in Key Vault or environment variable", "Single key shared across application instances", "Manual rotation process with deployment risk", "No per-identity audit trail", "Key compromise requires immediate rotation across all consumers"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-red-400 shrink-0 mt-0.5">✕</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border p-5" style={{ borderColor: `${AZURE}30`, background: `${AZURE}08` }}>
                <p className="font-semibold text-sm mb-3" style={{ color: AZURE }}>Managed Identity (correct approach)</p>
                <ul className="space-y-2">
                  {["Zero credentials stored anywhere", "System or user-assigned identity per service", "Automatic rotation — no key management overhead", "Per-identity audit trail in Azure Monitor", "Compromise of one identity does not affect others"].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-green-400 shrink-0 mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">
              The RBAC role assignments that matter for a typical Azure AI Foundry deployment are precise. Assigning too broad a role (Contributor at subscription scope) is a common shortcut that fails security audits. Assign the minimum required role at the minimum required scope:
            </p>
            <div className="space-y-2">
              {[
                { service: "Azure OpenAI", role: "Cognitive Services OpenAI User", scope: "Resource level (not resource group)", note: "Allows inference calls; does not allow model deployment or resource configuration." },
                { service: "Azure AI Search", role: "Search Index Data Reader", scope: "Resource level", note: "Read-only access to indexes. Use Search Index Data Contributor only for indexer identity." },
                { service: "Azure Storage", role: "Storage Blob Data Reader", scope: "Container level", note: "Scoped to the specific container holding your documents, not the entire storage account." },
                { service: "Azure Key Vault", role: "Key Vault Secrets User", scope: "Secret level where possible", note: "Allows reading specific secrets. Never assign Key Vault Administrator to an application identity." },
                { service: "Azure ML Workspace", role: "AzureML Data Scientist", scope: "Workspace level", note: "For Prompt Flow evaluation runs. Does not allow compute provisioning or workspace configuration changes." },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-[120px_1fr] gap-4 p-4 rounded-xl border border-border bg-card text-sm">
                  <div>
                    <p className="font-semibold text-foreground text-xs">{row.service}</p>
                    <p className="text-xs text-muted-foreground mt-1">{row.scope}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs mb-1" style={{ color: AZURE }}>{row.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{row.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 — Network isolation */}
          <div id="network-isolation">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Network isolation: Private endpoints</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Private endpoints are the network-layer control that prevents any AI traffic from traversing the public internet. Every Azure service in your AI stack — Azure OpenAI, Azure AI Search, Azure Storage, Azure Key Vault — should be deployed with a private endpoint for production workloads handling sensitive data. This is a non-negotiable control for HIPAA, PCI DSS, and most enterprise security frameworks.
            </p>
            <div className="rounded-2xl p-5 border mb-6" style={{ background: `${AZURE}08`, borderColor: `${AZURE}25` }}>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: AZURE }}>Architecture principle</p>
              <p className="text-sm text-foreground leading-relaxed">Every AI service should be deployed with <strong>&ldquo;Public network access: Disabled&rdquo;</strong>. Traffic flows: Application (ACA/AKS/VM) → Private Endpoint → Azure Service. No traffic takes a public path. DNS resolution for service endpoints is handled by a Private DNS Zone linked to your VNet — not the public DNS records that resolve to public IP addresses.</p>
            </div>
            <div className="space-y-3">
              {[
                { service: "Azure OpenAI", steps: ["Create private endpoint in your VNet subnet", "Associate with Private DNS Zone: privatelink.openai.azure.com", "Set public network access to Disabled on the resource", "Update application to use the private FQDN"] },
                { service: "Azure AI Search", steps: ["Create private endpoint for search service", "Associate with Private DNS Zone: privatelink.search.windows.net", "Disable public access on the search service", "Configure indexer to run within the VNet using Shared Private Link"] },
                { service: "Azure Storage (documents)", steps: ["Private endpoint per storage service (Blob, File separately)", "Private DNS Zone: privatelink.blob.core.windows.net", "Disable public blob access at account level", "Storage firewall: deny all, allow VNet subnet"] },
                { service: "Azure Key Vault", steps: ["Private endpoint in same subnet as application", "Private DNS Zone: privatelink.vaultcore.azure.net", "Key Vault firewall: deny all public access", "Allow Azure Monitor service tag for diagnostic logs"] },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl border border-border bg-card">
                  <p className="font-semibold text-sm text-foreground mb-3">{item.service}</p>
                  <ol className="space-y-1.5">
                    {item.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="font-bold shrink-0 mt-0.5" style={{ color: AZURE }}>{j + 1}.</span>{step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 — Data governance */}
          <div id="data-governance">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Data governance: What Azure AI logs</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Understanding exactly what Azure AI services log — and where those logs go — is a prerequisite for data governance compliance. The default logging configuration is not always appropriate for regulated data, and several logging capabilities require explicit opt-in or opt-out decisions.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Service</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">What is logged by default</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">PII risk</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Action required</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Azure OpenAI", "Request metadata (timestamp, token counts, model, latency)", "Low — prompt content NOT logged by default", "Enable diagnostic logs to Log Analytics; verify content logging is off"],
                    ["Prompt Flow", "Flow run metadata, step-level latency, evaluation scores", "Medium — flow inputs/outputs can be captured", "Review trace settings; mask PII fields before trace capture"],
                    ["Azure AI Search", "Query text, result count, latency", "High — query text may contain PII", "Enable slow query logging to Log Analytics with appropriate retention"],
                    ["Azure Monitor", "Aggregated metrics only by default", "Low", "Configure resource-level diagnostic settings explicitly"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground text-xs">{row[0]}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs leading-relaxed">{row[1]}</td>
                      <td className="py-3 px-4 text-xs font-semibold" style={{ color: row[2] === "High" ? "#ef4444" : row[2] === "Medium" ? "#f59e0b" : "#22c55e" }}>{row[2]}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs leading-relaxed">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl p-5 border" style={{ background: "#ef444410", borderColor: "#ef444430" }}>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Azure OpenAI content logging opt-in</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">Microsoft offers an opt-in &ldquo;abuse monitoring&rdquo; feature that logs prompt and completion content for safety review. This is OFF by default for most enterprise agreements but should be verified explicitly — especially in HIPAA or data residency-sensitive contexts. Check your Azure OpenAI resource under &ldquo;Abuse monitoring&rdquo; in Azure AI Foundry.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 — Content Safety */}
          <div id="content-safety">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Content Safety configuration</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Azure AI Content Safety filters inputs and outputs for four harm categories. Default thresholds are generic — production deployments for regulated industries require explicit threshold configuration per deployment, and the configuration must be documented and defensible to auditors.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { category: "Hate & Fairness", default: "Medium", recommended: "Medium–High", note: "For customer-facing agents, keep at Medium. Internal tools may use High threshold if content policy permits." },
                { category: "Violence", default: "Medium", recommended: "Medium–High", note: "Adjust to High for general business use. Health/insurance deployments may require Medium to handle clinical content." },
                { category: "Sexual Content", default: "Medium", recommended: "High for enterprise", note: "Enterprise business applications should use High threshold. Adult content platforms require Azure content filtering waiver." },
                { category: "Self-Harm", default: "Medium", recommended: "Low for consumer-facing", note: "For any consumer-facing deployment, configure Low threshold and route flagged content to appropriate resources." },
              ].map(item => (
                <div key={item.category} className="p-4 rounded-xl border border-border bg-card">
                  <p className="font-semibold text-sm text-foreground mb-2">{item.category}</p>
                  <div className="flex gap-4 mb-2 text-xs">
                    <span className="text-muted-foreground">Default: <strong className="text-foreground">{item.default}</strong></span>
                    <span style={{ color: AZURE }}>Recommended: <strong>{item.recommended}</strong></span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beyond the four harm categories, two additional controls matter for enterprise deployments. Jailbreak detection (Prompt Shield) blocks adversarial prompt injection attempts — this should be enabled on all production deployments. Groundedness detection flags AI responses that make claims not supported by the retrieved context — critical for any compliance or regulated-content use case where hallucination is a business risk.
            </p>
            <div className="space-y-2">
              {[
                { control: "Prompt Shield (jailbreak detection)", action: "Enable on all deployments. Adds ~30ms latency.", status: "enable" },
                { control: "Custom blocklist", action: "Define for domain-specific prohibited terms (competitor names, restricted topics, internal product codes).", status: "configure" },
                { control: "Groundedness detection", action: "Enable for any RAG-based agent where factual accuracy is a compliance requirement.", status: "enable" },
                { control: "PII entity detection", action: "Enable for customer-facing agents. Configure redaction mode (substitute vs. mask) based on downstream processing needs.", status: "enable" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-border bg-card">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5" style={{ background: `${AZURE}20`, color: AZURE }}>{item.status}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.control}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 — Compliance */}
          <div id="compliance-frameworks">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Compliance frameworks</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Azure AI Foundry inherits compliance from the underlying Azure services. Each certification has different implications for what you need to configure versus what Microsoft has already done. Understanding these boundaries is critical for audit preparation.
            </p>
            <div className="space-y-4">
              {[
                {
                  framework: "HIPAA",
                  status: "BAA available",
                  covered: "Azure OpenAI, Azure AI Search, Azure Storage, Azure Monitor are all covered under Microsoft's HIPAA BAA when deployed in a compliant Azure subscription.",
                  gaps: "You must sign the BAA (available in Azure portal under Compliance), configure all services with private endpoints (no public access), and ensure PHI is not captured in diagnostic logs. The BAA covers the platform — your application-level PHI handling (logging, caching, display) is your responsibility.",
                },
                {
                  framework: "SOC 2 Type II",
                  status: "Covered",
                  covered: "All Azure AI services are SOC 2 Type II audited. Microsoft publishes the audit report under NDA via the Service Trust Portal.",
                  gaps: "Your application code and deployment processes are not in scope of Microsoft's SOC 2. You need your own controls for application-layer access management, change management, and incident response.",
                },
                {
                  framework: "ISO 27001",
                  status: "Covered",
                  covered: "Azure OpenAI and Azure AI Search are ISO 27001 certified. Certificates are available on the Service Trust Portal.",
                  gaps: "ISO 27001 requires a complete ISMS covering your organisation. The Azure certification covers the infrastructure layer — you need to demonstrate controls for the application, process, and people layers.",
                },
                {
                  framework: "PCI DSS",
                  status: "Qualified",
                  covered: "Azure is a PCI DSS Level 1 service provider. Payment card data can be processed within Azure boundaries when configured correctly.",
                  gaps: "Cardholder data must never enter Azure OpenAI prompts or AI Search indexes. Architect your solution so payment data is tokenised or detokenised outside the AI layer. The Azure PCI attestation does not cover AI workloads that process raw card data.",
                },
                {
                  framework: "FedRAMP Moderate",
                  status: "Authorized (Azure Government)",
                  covered: "Azure Government regions have FedRAMP Moderate authorization. Azure OpenAI is available in Azure Government with FedRAMP coverage.",
                  gaps: "Standard Azure commercial regions are not FedRAMP authorized. If your use case requires FedRAMP, you must deploy to Azure Government — verify service availability as not all AI Foundry features are available in Azure Government regions.",
                },
              ].map(item => (
                <div key={item.framework} className="p-5 rounded-2xl border border-border bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <p className="font-display font-bold text-lg text-foreground">{item.framework}</p>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "#22c55e20", color: "#22c55e" }}>{item.status}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2"><strong className="text-foreground">What&apos;s covered:</strong> {item.covered}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed"><strong className="text-foreground">Your responsibility:</strong> {item.gaps}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6 — Audit checklist */}
          <div id="audit-checklist">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Audit & monitoring checklist</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This 12-point checklist represents the production security baseline we verify on every Azure AI deployment before go-live. Each item is either a direct audit finding or a prerequisite for passing one.
            </p>
            <div className="space-y-3">
              {[
                { n: "01", item: "All service-to-service authentication uses Managed Identity — zero API keys in application code or environment variables." },
                { n: "02", item: "RBAC assignments follow least privilege: minimum required role, at minimum required scope (resource level, not subscription)." },
                { n: "03", item: "Private endpoints deployed for all AI services (OpenAI, AI Search, Storage, Key Vault). Public network access disabled on each resource." },
                { n: "04", item: "Private DNS Zones configured for each service and linked to the application VNet. Public DNS records resolve to private IPs within the VNet." },
                { n: "05", item: "Azure AI Content Safety thresholds configured explicitly per deployment — not relying on defaults." },
                { n: "06", item: "Prompt Shield (jailbreak detection) enabled on all customer-facing and internal deployments." },
                { n: "07", item: "Azure Monitor diagnostic settings configured for all AI services. Logs route to a dedicated Log Analytics workspace with appropriate retention (90 days minimum; 1 year for regulated industries)." },
                { n: "08", item: "PII is identified in the data flow and either masked before it enters LLM context or explicitly confirmed to be compliant with retention requirements." },
                { n: "09", item: "Azure OpenAI content logging (abuse monitoring) opt-in status verified and documented." },
                { n: "10", item: "Prompt Flow evaluation pipeline with a representative test dataset deployed and running on every code deployment. Evaluation scores tracked and alerted on regression." },
                { n: "11", item: "Incident response runbook documented: who is alerted on content safety violations, what the escalation path is, how the agent is disabled if needed." },
                { n: "12", item: "HIPAA BAA (or relevant compliance agreement) signed for the Azure subscription if regulated data is processed. Verified in Azure portal Compliance section." },
              ].map(item => (
                <div key={item.n} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                  <span className="font-display font-black text-sm shrink-0 mt-0.5" style={{ color: AZURE }}>{item.n}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.item}</p>
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground/30" />
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="rounded-2xl border p-6" style={{ background: `${AZURE}06`, borderColor: `${AZURE}20` }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Key takeaways</p>
            <ul className="space-y-3">
              {[
                "Managed Identity is not optional for production — it eliminates credential management risk and provides a complete identity-level audit trail.",
                "Private endpoints are the baseline network control for any regulated industry deployment. Configure them at the start of the build, not during a security review.",
                "Azure AI Content Safety requires explicit threshold configuration — default settings are not a compliance posture.",
                "HIPAA BAA, SOC 2, ISO 27001, and FedRAMP coverage applies to the Azure infrastructure layer. Your application controls (logging, access, incident response) are your responsibility.",
                "The 12-point audit checklist is the minimum bar. Regulated industries should layer additional controls: immutable audit storage, automated compliance scanning (Defender for Cloud), and quarterly access reviews.",
                "Groundedness detection and PII detection should be enabled for any deployment where AI-generated content is consumed by end users without further human review.",
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
              { pill: "Technical Deep Dive", title: "Azure OpenAI vs OpenAI API: What actually changes when you deploy in Azure?", href: "/azure-ai-foundry/playbook/azure-openai-vs-openai-api" },
              { pill: "Playbook", title: "Azure AI Foundry Pricing Guide 2026: What enterprise AI actually costs", href: "/azure-ai-foundry/playbook/pricing-guide-2026" },
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
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>Security architecture review</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Need a security-first Azure AI deployment?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We configure Managed Identity, private endpoints, Content Safety, and the full compliance stack from day one — so your deployment passes the audit the first time.</p>
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


      <AzurePracticeNavigation currentPath="/azure-ai-foundry/playbook/security-compliance-guide" />
    </div>
  )
}
