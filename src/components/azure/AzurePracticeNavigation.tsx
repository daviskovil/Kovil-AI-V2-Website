import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const AZURE = "#0078D4"

const clusters = [
  {
    label: "By Industry",
    links: [
      { label: "Financial Services & Banking", href: "/azure-ai-foundry/industries/financial-services-banking" },
      { label: "Healthcare & Life Sciences",   href: "/azure-ai-foundry/industries/healthcare-life-sciences" },
      { label: "Retail & eCommerce",            href: "/azure-ai-foundry/industries/retail-ecommerce" },
      { label: "Manufacturing & Supply Chain",  href: "/azure-ai-foundry/industries/manufacturing-supply-chain" },
      { label: "Legal & Professional Services", href: "/azure-ai-foundry/industries/legal-professional-services" },
      { label: "Insurance",                     href: "/azure-ai-foundry/industries/insurance" },
    ],
  },
  {
    label: "How We Compare",
    links: [
      { label: "Azure AI Foundry vs AWS Bedrock",       href: "/azure-ai-foundry/compare/vs-aws-bedrock" },
      { label: "Azure AI Foundry vs Google Vertex AI",  href: "/azure-ai-foundry/compare/vs-google-vertex-ai" },
      { label: "Azure AI Foundry vs Agentforce",        href: "/azure-ai-foundry/compare/vs-agentforce" },
      { label: "Copilot Studio vs Power Virtual Agents",href: "/azure-ai-foundry/compare/copilot-studio-vs-power-virtual-agents" },
      { label: "Semantic Kernel vs LangChain",          href: "/azure-ai-foundry/compare/semantic-kernel-vs-langchain" },
      { label: "Azure OpenAI vs OpenAI API",            href: "/azure-ai-foundry/playbook/azure-openai-vs-openai-api" },
    ],
  },
  {
    label: "Integrations",
    links: [
      { label: "Azure AI + Dynamics 365",        href: "/azure-ai-foundry/integrations/dynamics-365" },
      { label: "Azure AI + Microsoft 365 & Teams",href: "/azure-ai-foundry/integrations/microsoft-365-teams" },
      { label: "Azure AI + SharePoint",          href: "/azure-ai-foundry/integrations/sharepoint" },
      { label: "Azure AI + Power Platform",      href: "/azure-ai-foundry/integrations/power-platform" },
      { label: "Azure AI + SAP",                 href: "/azure-ai-foundry/integrations/sap" },
      { label: "Azure AI + ServiceNow",          href: "/azure-ai-foundry/integrations/servicenow" },
    ],
  },
  {
    label: "Playbook & Guides",
    links: [
      { label: "Architect your first Azure AI agent",   href: "/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent" },
      { label: "Azure OpenAI vs OpenAI API deep dive",  href: "/azure-ai-foundry/playbook/azure-openai-vs-openai-api" },
      { label: "Claims processing build walkthrough",   href: "/azure-ai-foundry/playbook/claims-processing-azure-ai-build" },
      { label: "Azure AI Foundry pricing guide 2026",   href: "/azure-ai-foundry/playbook/pricing-guide-2026" },
      { label: "Security & compliance guide",           href: "/azure-ai-foundry/playbook/security-compliance-guide" },
      { label: "Azure AI Foundry ROI guide",            href: "/azure-ai-foundry/playbook/roi-guide" },
    ],
  },
]

/**
 * Shared internal-linking footer for all Azure AI Foundry practice pages.
 * Pass `currentPath` so the page doesn't link to itself.
 */
export default function AzurePracticeNavigation({ currentPath = "" }: { currentPath?: string }) {
  return (
    <section className="border-t border-border py-14 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: AZURE }}>
              Azure AI Practice
            </p>
            <h2 className="font-display font-bold text-lg text-foreground">
              Explore more Azure AI Foundry content
            </h2>
          </div>
          <Link
            href="/azure-ai-foundry"
            className="inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 hover:opacity-80 transition-opacity"
            style={{ color: AZURE }}
          >
            View full practice hub <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 4-column link grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clusters.map((cluster) => (
            <div key={cluster.label}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                {cluster.label}
              </p>
              <ul className="space-y-2">
                {cluster.links
                  .filter((link) => link.href !== currentPath)
                  .map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-start gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <ArrowRight
                          className="h-3 w-3 shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: AZURE }}
                        />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
