'use client'

import { motion } from "motion/react"
import { CheckCircle2, XCircle, ArrowRight, ChevronRight, Minus } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

const features = [
  { name: "Model catalog breadth", cs: "check", pva: "cross", csNote: "GPT-4o grounding + model selection via Azure AI Foundry connection", pvaNote: "Rule-based LUIS/CLU intents; no generative model integration" },
  { name: "Enterprise security (Entra ID)", cs: "check", pva: "check", csNote: "Entra ID SSO, Managed Identity, Conditional Access policies", pvaNote: "Entra ID SSO supported — same auth model as Copilot Studio" },
  { name: "Native M365 integration", cs: "check", pva: "partial", csNote: "Teams, SharePoint, Outlook, M365 Copilot as native deployment targets", pvaNote: "Teams channel deployment supported; no SharePoint/Copilot integration" },
  { name: "Managed Identity", cs: "check", pva: "cross", csNote: "Managed Identity to Azure AI Search, Azure OpenAI, and Power Platform connectors", pvaNote: "Not available — connector auth via stored credentials or OAuth" },
  { name: "Multi-agent orchestration", cs: "check", pva: "cross", csNote: "Autonomous agents with Semantic Kernel backend; multi-step planning", pvaNote: "Turn-based dialog flows only; no autonomous agent capability" },
  { name: "Low-code builder", cs: "check", pva: "check", csNote: "Visual agent canvas with generative answers; topic fallback to GPT-4o", pvaNote: "Full visual topic builder — mature, stable, well-documented" },
  { name: "Compliance frameworks", cs: "check", pva: "check", csNote: "Inherits full Azure/Power Platform compliance portfolio", pvaNote: "Same compliance portfolio as Copilot Studio — no difference here" },
  { name: "Generative answers (topic-free)", cs: "check", pva: "cross", csNote: "Answers questions without a matching topic by grounding on knowledge sources", pvaNote: "Every answer requires a pre-authored topic — no generative fallback" },
  { name: "Azure AI Search integration", cs: "check", pva: "cross", csNote: "Native connector to Azure AI Search for RAG over enterprise content", pvaNote: "Not available natively; requires Power Automate flow workaround" },
  { name: "Vendor lock-in risk", cs: "partial", pva: "partial", csNote: "Power Platform ecosystem; Semantic Kernel plugins are portable", pvaNote: "Power Platform ecosystem — same lock-in profile as Copilot Studio" },
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

export default function CopilotVsPVAPage() {
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
          <span className="text-foreground">Copilot Studio vs Power Virtual Agents</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Compare · Azure AI Foundry</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          Copilot Studio vs Power Virtual Agents: What changed and what it means for your agents
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Power Virtual Agents was rebranded to Microsoft Copilot Studio in November 2023 — but this was far more than a name change. Under the hood, Microsoft rebuilt the platform around generative AI: GPT-4o grounding replaced rule-based LUIS intents, Semantic Kernel replaced the turn-based dialog engine, and autonomous agent capability arrived alongside the classic topic builder. If you built PVA bots, here is exactly what changed, what still works, and what your migration path looks like.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-8 h-12 text-base" onClick={openCalendly}>
            Talk to a Copilot Studio specialist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Link href="/azure-ai-foundry/services/copilot-studio-agents">
            <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base">
              Copilot Studio agent service
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
              { heading: "If you have existing PVA bots…", points: ["Your bots continue to work — no forced migration", "Existing topics, entities, and flows are fully preserved", "You can access Copilot Studio features from the same admin centre"] },
              { heading: "New builds should use Copilot Studio…", points: ["Generative answers mean you no longer need a topic for every question", "Azure AI Search integration enables RAG over your SharePoint and document stores", "Semantic Kernel backend enables autonomous multi-step agents"] },
              { heading: "The real capability gap is…", points: ["PVA could not answer questions outside its authored topics — Copilot Studio can", "PVA was turn-based dialog; Copilot Studio supports autonomous task completion", "PVA had no native Azure OpenAI connection; Copilot Studio does via AI Foundry"] },
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
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-2">What actually changed</h2>
        <p className="text-muted-foreground mb-8">A technical breakdown of capability differences between Power Virtual Agents and its successor, Copilot Studio.</p>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground w-48">Capability</th>
                <th className="text-left py-3 px-4 font-semibold w-56" style={{ color: AZURE }}>Copilot Studio (2023+)</th>
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground w-56">Power Virtual Agents (legacy)</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground align-top">{row.name}</td>
                  <Cell val={row.cs} note={row.csNote} />
                  <Cell val={row.pva} note={row.pvaNote} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-3 flex items-center gap-4">
          <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-green-500" /> Available</span>
          <span className="flex items-center gap-1"><Minus className="h-3.5 w-3.5 text-amber-400" /> Partial / workaround required</span>
          <span className="flex items-center gap-1"><XCircle className="h-3.5 w-3.5 text-red-400" /> Not available</span>
        </p>
      </section>

      {/* When to Choose / Migration Guidance */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-display font-bold text-2xl lg:text-3xl mb-6">Migration guidance for existing PVA deployments</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Your PVA bots still work", body: "Microsoft has not sunset Power Virtual Agents. Existing bots continue to run, and you can manage them from the same Power Platform admin centre. There is no forced migration deadline announced. However, new capability development has shifted entirely to Copilot Studio." },
            { title: "Should you migrate?", body: "For bots that are working and meeting their KPIs, migration is not urgent. For bots that struggle with out-of-scope questions (a classic PVA limitation), migrating to Copilot Studio with generative answers enabled will immediately improve coverage without re-authoring topics." },
            { title: "What the migration actually involves", body: "Copilot Studio reads PVA topic structures — most of the migration is in the admin centre and does not require re-authoring. The effort lies in enabling generative answers, connecting Azure AI Search knowledge sources, and testing that GPT-4o fallback answers are appropriately scoped." },
            { title: "The Azure AI Foundry connection", body: "Copilot Studio connects to Azure AI Foundry via the Azure OpenAI connector in Power Platform. This means your Copilot Studio agents can invoke Azure OpenAI models, use Azure AI Search indexes, and call custom Prompt Flow endpoints — bringing the full Azure AI Foundry capability into a low-code surface." },
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
            The rebrand from Power Virtual Agents to Copilot Studio represents a genuine architectural shift, not marketing. The underlying change — from LUIS-driven intent classification to GPT-4o generative answers with Semantic Kernel as the agent runtime — is material. It means Copilot Studio agents can answer questions that were never authored as topics, perform multi-step tasks autonomously, and ground their responses on live enterprise content via Azure AI Search.
          </p>
          <p>
            For existing PVA deployments: do not rush to migrate for its own sake. Assess each bot against one question — does it regularly fail to answer user questions because there is no matching topic? If yes, migrating to Copilot Studio with generative answers will immediately improve user experience. If your PVA bot handles a narrow, well-defined use case (e.g., IT ticket submission, leave approval) where every user intent is already authored, the urgency is lower.
          </p>
          <p>
            For new builds: there is no reason to use Power Virtual Agents. Copilot Studio is the current platform, it includes everything PVA had, and it adds GPT-4o grounding, Azure AI Search integration, and autonomous agent capability. All new Microsoft documentation and support resources are oriented toward Copilot Studio. Treat PVA as the legacy system it has effectively become.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl bg-foreground text-background p-10 md:p-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>Copilot Studio migration</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Migrate your PVA bots to Copilot Studio — the right way</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We audit your existing PVA deployments, prioritise migration candidates, and rebuild with GPT-4o grounding and Azure AI Search — giving you enterprise AI agents that actually answer questions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base" onClick={openCalendly}>
              Book a discovery call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/azure-ai-foundry/services/copilot-studio-agents">
              <Button variant="outline" className="rounded-full font-semibold px-8 h-12 text-base border-background/20 text-background hover:bg-background/10">
                Copilot Studio agent service
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
