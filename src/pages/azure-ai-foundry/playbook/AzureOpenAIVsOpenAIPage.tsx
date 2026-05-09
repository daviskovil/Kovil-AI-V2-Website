'use client'

import { motion } from "motion/react"
import { ArrowRight, ChevronRight, Clock, BookOpen, Shield, Lock, Server, Globe, CheckCircle2, AlertTriangle } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

export default function AzureOpenAIVsOpenAIPage() {
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
          <span className="text-foreground">Azure OpenAI vs OpenAI API</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Technical Deep Dive</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-3.5 w-3.5" />13 min read</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          Azure OpenAI vs OpenAI API: What actually changes when you deploy in Azure?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          You&apos;re considering moving from openai.com to Azure OpenAI. The models are the same. Everything else is different. Here&apos;s a precise technical breakdown of what changes — and why it matters for production enterprise deployments.
        </p>
      </section>

      {/* Article Body */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-14">

          {/* What stays the same */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">What stays the same</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before the differences, what doesn&apos;t change is worth stating clearly. The models are identical — GPT-4o, o1, o3-mini, DALL-E 3, Whisper, and text-embedding-3-large are available on both platforms with no model-level differences. The OpenAI Python and Node.js SDKs work unchanged against Azure OpenAI — you change two lines of configuration, not the application code.
            </p>
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-muted-foreground">Migration: the only code change required</p>
              <div className="bg-muted/40 rounded-xl p-4 font-mono text-sm space-y-2">
                <p className="text-muted-foreground"># Before (openai.com)</p>
                <p className="text-foreground">client = AzureOpenAI(<span className="text-green-400">api_key=&quot;sk-...&quot;</span>)</p>
                <p className="text-muted-foreground mt-3"># After (Azure OpenAI — recommended with Managed Identity)</p>
                <p className="text-foreground">client = AzureOpenAI(<span style={{ color: AZURE }}>azure_endpoint=&quot;https://your-resource.openai.azure.com&quot;, azure_ad_token_provider=get_bearer_token_provider(DefaultAzureCredential(), &quot;https://cognitiveservices.azure.com/.default&quot;)</span>)</p>
              </div>
            </div>
          </div>

          {/* Authentication */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Authentication — the biggest change</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Both platforms support API key authentication. On Azure OpenAI, you should never use it in production. <strong className="text-foreground">Managed Identity</strong> is the correct authentication mechanism for Azure — it eliminates stored credentials entirely, integrates with Entra ID RBAC, and produces a full audit trail of which service made which AI call.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {[
                { label: "openai.com API", items: ["API key stored as environment variable", "Single shared key across environments", "Key rotation requires redeployment", "No identity-level audit trail"], good: false },
                { label: "Azure OpenAI (Managed Identity)", items: ["No credentials stored anywhere", "Per-identity RBAC via Entra ID", "Automatic rotation — no key management", "Full audit trail per service identity"], good: true },
              ].map(col => (
                <div key={col.label} className={`rounded-2xl border p-5 ${col.good ? "" : "opacity-75"}`} style={{ borderColor: col.good ? `${AZURE}30` : "var(--border)", background: col.good ? `${AZURE}08` : "var(--card)" }}>
                  <p className="font-semibold text-sm mb-3" style={{ color: col.good ? AZURE : "var(--muted-foreground)" }}>{col.label}</p>
                  <ul className="space-y-2">
                    {col.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`shrink-0 mt-0.5 text-xs ${col.good ? "text-green-400" : "text-red-400"}`}>{col.good ? "✓" : "✕"}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Content filtering */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Content filtering — stricter by default on Azure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Azure OpenAI has Azure AI Content Safety built in. Four harm categories — hate, violence, sexual content, self-harm — are filtered at four severity levels (safe, low, medium, high) for both inputs and outputs. Critically, you configure these thresholds per deployment resource. For a customer-facing medical information agent, you configure tighter thresholds than for an internal developer tool. openai.com&apos;s moderation API exists but doesn&apos;t offer the same granular per-deployment configurability.
            </p>
            <div className="rounded-2xl p-6 border" style={{ background: `${AZURE}08`, borderColor: `${AZURE}25` }}>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: AZURE }}>For regulated industries</p>
              <p className="text-foreground leading-relaxed">Azure AI Content Safety configurability is not optional overhead — it&apos;s a HIPAA, FCA, and enterprise risk management requirement. The ability to configure exact harm thresholds per deployment, and to demonstrate those configurations to auditors, is only available on Azure.</p>
            </div>
          </div>

          {/* Deployment model versioning */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Deployment model versioning — you control the upgrade</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              On openai.com, model versions are managed by OpenAI — when they deprecate gpt-4-0613 and replace it with gpt-4-0125-preview, your application updates automatically. On Azure OpenAI, you create named deployment resources (e.g., &ldquo;gpt4o-production&rdquo;, &ldquo;gpt4o-staging&rdquo;) and control which underlying model version each deployment uses. You choose when to upgrade. This is critical for production stability — an unexpected model update that changes output format or behaviour will break downstream parsing logic. On Azure, that never happens without your explicit action.
            </p>
          </div>

          {/* Private networking */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Private networking — zero public internet exposure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Azure OpenAI supports private endpoints. All traffic between your application and the Azure OpenAI service travels within your Azure Virtual Network — never traversing the public internet. openai.com has no equivalent. For any application handling PII, health data, financial data, or other sensitive information, private networking is not optional — it is a baseline security requirement. This single capability is often the deciding factor for regulated industry deployments.
            </p>
          </div>

          {/* Data residency */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Data residency &amp; compliance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Azure OpenAI processes data in your chosen Azure region and does not use your data to train models. Microsoft processes data under their standard enterprise DPA (Data Processing Addendum). Azure OpenAI is HIPAA, SOC 2 Type II, ISO 27001, PCI DSS, and FedRAMP compliant. For openai.com, data is processed by OpenAI under their terms — without the same enterprise compliance certifications or guaranteed data residency controls.
            </p>
          </div>

          {/* Comparison table */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Side-by-side comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Feature</th>
                    <th className="text-left py-3 px-4 font-semibold" style={{ color: AZURE }}>Azure OpenAI</th>
                    <th className="text-left py-3 px-4 font-semibold text-muted-foreground">openai.com API</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Authentication", "Managed Identity (credential-free)", "API key only"],
                    ["Private networking", "Private endpoints (VNet)", "Not available"],
                    ["Content safety", "Configurable per deployment", "Moderation API only"],
                    ["Model version control", "You control upgrades", "Automatic (OpenAI managed)"],
                    ["Data residency", "Your Azure region", "OpenAI data centres"],
                    ["HIPAA compliance", "✓ BAA available", "Limited"],
                    ["SOC 2 Type II", "✓", "✓"],
                    ["Enterprise DPA", "Microsoft DPA", "OpenAI ToS"],
                    ["Entra ID RBAC", "✓ Native integration", "✗"],
                    ["Audit logging", "Azure Monitor native", "Manual implementation"],
                    ["PTU (reserved capacity)", "✓ Provisioned throughput", "✗"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{row[0]}</td>
                      <td className="py-3 px-4 text-muted-foreground" style={{ color: row[1].startsWith("✓") ? "#22c55e" : undefined }}>{row[1]}</td>
                      <td className="py-3 px-4 text-muted-foreground" style={{ color: row[2].startsWith("✗") ? "#ef4444" : undefined }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Final callout */}
          <div className="rounded-2xl p-6 border" style={{ background: `${AZURE}08`, borderColor: `${AZURE}25` }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: AZURE }}>The bottom line</p>
            <p className="text-foreground leading-relaxed">
              For any production enterprise deployment handling sensitive data, Azure OpenAI is the right choice. The migration from openai.com is literally one configuration change. The security controls, private networking, compliance certifications, and model version stability you gain are not available on openai.com at any price.
            </p>
          </div>

        </div>
      </section>

      {/* Related Articles */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: AZURE }}>Continue Reading</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { pill: "Implementation Guide", title: "How to architect your first Azure AI Foundry agent: A practitioner's checklist", href: "/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent" },
              { pill: "Service", title: "Azure OpenAI Integration — production-grade deployment with Managed Identity", href: "/azure-ai-foundry/services/azure-openai-integration" },
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
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>2-week risk-free pilot</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to migrate to Azure OpenAI the right way?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We configure Managed Identity, private endpoints, content safety, and Prompt Flow monitoring — production-grade from day one.</p>
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
    </div>
  )
}
