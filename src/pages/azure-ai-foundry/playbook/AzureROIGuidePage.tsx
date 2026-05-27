'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Clock, BookOpen, TrendingUp, Users, AlertTriangle, BarChart3, Target } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"
import AzurePracticeNavigation from '../../../components/azure/AzurePracticeNavigation'

const AZURE = "#0078D4"

export default function AzureROIGuidePage() {
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
          <span className="text-foreground">ROI Guide</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Playbook · Azure AI Foundry</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-3.5 w-3.5" />10 min read</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          The Azure AI Foundry ROI guide: How to build a business case that actually holds up
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-6">
          AI ROI is widely misunderstood. Most organisations measure output — queries answered, documents processed, tasks completed — instead of business outcomes: cost reduced, revenue generated, risk lowered. Output metrics tell you the agent is working. Business outcome metrics tell you whether building it was worth it. This guide shows how to build a defensible ROI model that survives scrutiny from finance and the board.
        </p>
        <p className="text-sm text-muted-foreground italic">Written by Kovil AI engineers · Updated May 2026</p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-8 h-11" onClick={openCalendly}>
            Build your ROI case <ArrowRight className="ml-2 h-4 w-4" />
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
              { n: "01", label: "The 4 ROI levers", anchor: "#roi-levers" },
              { n: "02", label: "ROI calculation methodology", anchor: "#calculation" },
              { n: "03", label: "Realistic timelines", anchor: "#timelines" },
              { n: "04", label: "What makes ROI calculations fail", anchor: "#failure-modes" },
              { n: "05", label: "Getting executive buy-in", anchor: "#executive-buyin" },
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

          {/* Section 1 — ROI Levers */}
          <div id="roi-levers">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">The 4 ROI levers</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every AI deployment generates value through some combination of these four levers. The best ROI cases activate multiple levers simultaneously — but the strongest single-lever cases are always easier to build and defend. Identify your primary lever first, quantify it conservatively, then layer in secondary levers as upside.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: Users,
                  n: "01",
                  lever: "Labour cost reduction",
                  how: "Task automation frees FTE capacity. The key question is: what does the freed capacity do? If it redeploys to higher-value work, you capture the benefit without headcount reduction. If the organisation is capacity-constrained, freed capacity directly enables growth.",
                  measure: "Hours saved per FTE per week × blended fully-loaded FTE rate × number of FTEs impacted",
                  example: "A 20-person ops team spending 40% of time on routine document review. If AI handles 70% of that task, each person saves 2.8 hours/week — 56 hours/week across the team, or ~$150k/year at a $75/hr blended rate.",
                },
                {
                  icon: Target,
                  n: "02",
                  lever: "Error & rework elimination",
                  how: "Manual processes accumulate errors. Each error has a downstream cost: rework time, customer complaints, compliance penalties, financial adjustments. AI systems, once calibrated, produce consistent outputs — error rates drop to near-zero for in-distribution cases.",
                  measure: "Error rate reduction (%) × volume × cost per error (rework time + downstream consequence cost)",
                  example: "Insurance claims data entry with 3% field error rate on 10k claims/month. Each error requires 45-minute correction. AI reduces errors to 0.2% — saving 2,800 correction hours/year, plus avoiding the downstream claims payment errors those misfields cause.",
                },
                {
                  icon: TrendingUp,
                  n: "03",
                  lever: "Throughput increase",
                  how: "The same headcount can process more volume. This lever is most valuable when the organisation is volume-constrained — turning away work, experiencing backlogs, or paying overtime. AI expands effective capacity without hiring.",
                  measure: "Additional volume processed × revenue or margin per unit × (1 − marginal cost ratio)",
                  example: "A legal team reviewing contracts at 15/week with a 6-week backlog. AI-assisted review increases throughput to 40/week. The backlog clears, and the team can take on new client work — the commercial value is the revenue from the additional contracts executed.",
                },
                {
                  icon: BarChart3,
                  n: "04",
                  lever: "Revenue impact",
                  how: "AI can directly generate revenue through faster sales cycles, better customer retention, or enabling new product capabilities. This lever is harder to quantify than cost reduction but often represents the largest upside.",
                  measure: "Sales cycle compression (days reduced × close rate × deal value) + Retention improvement (churn reduction × customer LTV) + New capability revenue",
                  example: "A customer service AI that resolves 65% of queries without escalation reduces customer wait time from 4 hours to under 2 minutes. CSAT improvement of 1.2 points correlates with 8% churn reduction — worth $600k/year in preserved ARR for a $7.5M ARR SaaS business.",
                },
              ].map(item => (
                <div key={item.n} className="p-5 rounded-2xl border border-border bg-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${AZURE}15` }}>
                      <item.icon className="h-4 w-4" style={{ color: AZURE }} />
                    </div>
                    <div>
                      <span className="font-display font-black text-xs" style={{ color: AZURE }}>{item.n}</span>
                      <h3 className="font-semibold text-sm text-foreground">{item.lever}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.how}</p>
                  <div className="p-3 rounded-lg bg-muted/40 mb-3">
                    <p className="text-xs font-semibold text-foreground mb-1">How to measure</p>
                    <p className="text-xs text-muted-foreground font-mono leading-relaxed">{item.measure}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">{item.example}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 — Calculation methodology */}
          <div id="calculation">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">ROI calculation methodology</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A defensible ROI model has three components: a baseline (what the process costs today), a projection (what it costs with AI), and a cost model (what the AI deployment costs). The difference between projection and baseline is your gross benefit. Subtract the AI cost to get net benefit, and payback period follows directly.
            </p>

            {/* Formula box */}
            <div className="rounded-2xl border border-border bg-card p-6 mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">The formula</p>
              <div className="space-y-3 font-mono text-sm">
                <div className="p-3 rounded-xl bg-muted/40">
                  <p className="text-xs text-muted-foreground mb-1">Annual Gross Benefit:</p>
                  <p className="text-foreground">= (Hours saved × FTE rate)</p>
                  <p className="text-foreground ml-4">+ (Error rate reduction × volume × cost per error)</p>
                  <p className="text-foreground ml-4">+ (Throughput gain × revenue per unit × margin)</p>
                </div>
                <div className="p-3 rounded-xl bg-muted/40">
                  <p className="text-xs text-muted-foreground mb-1">Annual Net Benefit:</p>
                  <p className="text-foreground">= Annual Gross Benefit</p>
                  <p className="text-foreground ml-4">− Annual infrastructure cost</p>
                  <p className="text-foreground ml-4">− Annual maintenance FTE (0.25–0.5 FTE)</p>
                  <p className="text-foreground ml-4">− Amortised implementation cost ÷ 3 years</p>
                </div>
                <div className="p-3 rounded-xl" style={{ background: `${AZURE}10` }}>
                  <p className="text-xs text-muted-foreground mb-1">Payback Period:</p>
                  <p className="text-foreground" style={{ color: AZURE }}>= Total implementation cost ÷ Annual Net Benefit</p>
                </div>
              </div>
            </div>

            {/* Worked example */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Worked example: 20-person claims ops team</p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-foreground mb-2">The baseline</p>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>20 FTEs processing insurance claims, blended fully-loaded cost $95k/year each = $1.9M/year</li>
                    <li>Each FTE spends 65% of time on routine data extraction and initial triage = $1.235M/year on automatable work</li>
                    <li>Average error rate of 4.2% on data entry, each error costing $180 in correction + downstream cost</li>
                    <li>10,000 claims/month processed; backlog of 2,000 claims means new client intake is limited</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">The projection (conservative automation at 70% of eligible task time)</p>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>Labour saving lever: 70% × $1.235M = $865k/year in freed capacity (redeployed to complex claims + new intake)</li>
                    <li>Error reduction lever: 4.2% → 0.5% error rate on 10k claims/month = 370 fewer errors/month × $180 = $800k/year</li>
                    <li>Throughput lever: freed capacity enables handling the backlog + 20% more new clients = $240k/year incremental revenue</li>
                    <li><strong className="text-foreground">Gross annual benefit: $1.905M</strong></li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">The cost model</p>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>Implementation cost: $120k (12-week build with Kovil AI)</li>
                    <li>Annual infrastructure (Azure OpenAI, AI Search, infrastructure): $48k/year</li>
                    <li>Annual maintenance FTE: 0.25 × $95k = $24k/year</li>
                    <li>Total Year 1 cost: $192k</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl" style={{ background: `${AZURE}10` }}>
                  <p className="font-semibold text-foreground mb-2">Result</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Year 1 net benefit", value: "$1.71M" },
                      { label: "Payback period", value: "~10 weeks" },
                      { label: "3-year ROI", value: "~14x" },
                    ].map(stat => (
                      <div key={stat.label} className="text-center">
                        <p className="font-display font-black text-xl" style={{ color: AZURE }}>{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">Note: This example uses conservative automation rates. Actual results depend on process characteristics, data quality, and change management effectiveness. The error reduction benefit — often ignored in ROI models — is frequently the largest single value driver in high-volume document processing.</p>
              </div>
            </div>
          </div>

          {/* Section 3 — Timelines */}
          <div id="timelines">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Realistic timelines</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI ROI does not arrive on day one of deployment. Value accumulates as the agent is calibrated, adoption increases, and the organisation adjusts its workflows to leverage the new capability. Organisations that expect immediate full-value capture invariably underestimate the change management component and become disappointed with early metrics.
            </p>
            <div className="space-y-4">
              {[
                {
                  period: "Month 1–2",
                  phase: "Pilot + baseline measurement",
                  description: "Deploy the agent to a representative subset of users or a defined process scope. This is not about generating ROI — it&apos;s about establishing your measurement baseline and validating the automation rate assumptions in your business case. Every assumption you made in the ROI model gets tested here. Document discrepancies between model and reality; adjust the projection accordingly.",
                  roiStatus: "Pre-ROI",
                  color: "text-muted-foreground",
                },
                {
                  period: "Month 3–6",
                  phase: "First ROI positive (typically)",
                  description: "For most mid-size deployments, accumulated net benefit exceeds accumulated cost at around month 4. Infrastructure cost is ongoing but stable; implementation cost is sunk; and the value from freed labour capacity and error reduction compounds month over month as the agent handles more volume. This is also when you identify the optimisation opportunities that the pilot surfaced — prompt improvements, retrieval tuning, additional process scope.",
                  roiStatus: "ROI positive",
                  color: "text-green-400",
                },
                {
                  period: "Month 6–18",
                  phase: "Scale and compound returns",
                  description: "Expand scope to additional process variants, additional teams, or additional agents handling adjacent use cases. ROI compounds non-linearly here because infrastructure cost grows slowly while benefit grows with headcount affected and process volume. Agent 2 built on the same stack costs 40–60% of Agent 1 to build — the foundation is already there.",
                  roiStatus: "Compounding",
                  color: "text-blue-400",
                },
                {
                  period: "Year 2–3",
                  phase: "Platform returns",
                  description: "Organisations that treat AI as a platform — not a series of one-off projects — see the most significant long-term returns. The Azure AI Foundry stack, Semantic Kernel plugins, Azure AI Search indexes, and evaluation frameworks built for the first agent become reusable infrastructure for subsequent agents. The marginal cost of each additional agent drops; the marginal value typically stays constant. 3-year ROI on mid-size Azure AI Foundry deployments typically lands at 3–8x on conservative estimates.",
                  roiStatus: "Platform returns",
                  color: "text-purple-400",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-5 rounded-2xl border border-border bg-card">
                  <div className="shrink-0 text-center w-20">
                    <p className="font-display font-black text-xs leading-tight" style={{ color: AZURE }}>{item.period}</p>
                    <p className={`text-xs font-semibold mt-1 ${item.color}`}>{item.roiStatus}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground mb-2">{item.phase}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 — Failure modes */}
          <div id="failure-modes">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">What makes ROI calculations fail</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We have reviewed many AI ROI models that were credible on paper and wrong in practice. The failure patterns are consistent. Recognising them in your own model before presenting to stakeholders is the difference between a business case that builds confidence and one that gets revised downward in year one.
            </p>
            <div className="space-y-4">
              {[
                {
                  failure: "Over-counting automation rate",
                  detail: "The most common error. A process step that currently takes 30 minutes does not save 30 minutes when automated. Humans spend time reviewing AI output, handling edge cases, managing escalations, and correcting errors the AI makes. The realistic net time saving is 60–75% of current time, not 95–100%. An automation rate of 80% in the model should be tested against: what is the human review time per AI-processed item? What is the escalation rate? What does the AI do with items it is not confident on?",
                },
                {
                  failure: "Ignoring change management cost",
                  detail: "Staff retraining, workflow redesign, process documentation, and manager adoption support are real costs that belong in the ROI model. A deployment that saves $500k in processing cost but requires $150k in change management is still highly ROI-positive — but if you model zero change management cost, the actuals will disappoint. Budget 10–20% of implementation cost for change management for large team deployments.",
                },
                {
                  failure: "Not measuring a baseline",
                  detail: "The most dangerous ROI calculation error is building a model before you know the current process cost. Assumptions about current processing time, error rates, and throughput capacity need to be validated against actual data — time-and-motion studies, ticket volume reports, correction log analysis. A ROI model built on assumed baselines will be challenged by the CFO and often fails to survive the scrutiny.",
                },
                {
                  failure: "Scope creep eroding the business case",
                  detail: "The original ROI model is for a clearly scoped process. During build, additional requirements are added — adjacent use cases, new integrations, additional compliance requirements. Each addition may be justified individually, but collectively they increase implementation cost and delay go-live. The ROI model should be version-controlled alongside the project scope — every scope addition should be evaluated against its ROI contribution.",
                },
                {
                  failure: "Measuring output metrics instead of outcome metrics",
                  detail: "Reporting '85% automation rate' and '10,000 queries/month handled' tells stakeholders the agent is running. It does not tell them it is delivering the business value it was funded to deliver. Connect every operational metric to a business outcome metric. Automation rate → FTE hours freed → productive redeployment. Query resolution rate → escalation reduction → support team headcount. Error reduction → rework cost → operational savings tracked in finance.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-5 rounded-2xl border border-border bg-card">
                  <div className="h-5 w-5 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <AlertTriangle className="h-3 w-3 text-red-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-2">{item.failure}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 — Executive buy-in */}
          <div id="executive-buyin">
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Getting executive buy-in</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A technically rigorous ROI model is necessary but not sufficient for executive approval. The presentation structure matters. Executives read business cases under time pressure — the structure below is what we have seen work consistently for Azure AI approval processes.
            </p>
            <div className="rounded-2xl border border-border bg-card p-6 mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">One-page business case template</p>
              <div className="space-y-4">
                {[
                  { n: "1", section: "Problem statement", guidance: "One paragraph. What specific process is broken or inefficient? What is the business consequence — cost, risk, customer impact, growth constraint? Use real numbers: '$1.9M/year in manual processing', '6-week backlog blocking new client intake', '4.2% error rate generating $800k in correction cost annually'." },
                  { n: "2", section: "Current cost quantification", guidance: "Show the loaded cost of the current state. Include FTE time, error correction cost, opportunity cost of throughput constraints, and any compliance risk exposure. This is the number you are replacing — make it concrete. 'The current process costs $X/year in direct cost and $Y/year in opportunity cost.'" },
                  { n: "3", section: "Proposed solution", guidance: "One paragraph on what you are building and how it works — non-technical. 'An AI agent on Azure AI Foundry that extracts and validates claims data automatically, routes complex cases to human reviewers, and generates draft adjudication decisions.' Describe outcomes, not technology." },
                  { n: "4", section: "Projected benefit", guidance: "Lead with the conservative case. Break down by lever: 'Labour cost reduction: $865k/year. Error reduction: $800k/year. Throughput increase: $240k/year. Total: $1.9M/year.' Include the assumption that drives each figure so reviewers can stress-test it." },
                  { n: "5", section: "Investment ask & payback", guidance: "Total cost (implementation + first year infrastructure + change management). Payback period. 3-year net benefit. Use a simple table. Do not model beyond 3 years — technology cost structures change and executives discount long-horizon projections heavily." },
                  { n: "6", section: "Risk and mitigation", guidance: "Name the top two or three risks and your mitigation. 'Risk: Automation rate lower than projected. Mitigation: 2-week parallel-run validation period before full go-live. ROI still positive at 50% of projected automation rate.' This demonstrates rigour and pre-empts the obvious challenge questions." },
                ].map(item => (
                  <div key={item.n} className="flex gap-4">
                    <span className="font-display font-black text-lg shrink-0 w-5 text-center" style={{ color: AZURE }}>{item.n}</span>
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-1">{item.section}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.guidance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-5 border" style={{ background: `${AZURE}08`, borderColor: `${AZURE}25` }}>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: AZURE }}>The most important sentence in your business case</p>
              <p className="text-sm text-foreground leading-relaxed">
                &ldquo;This project is ROI-positive at 50% of projected automation rate.&rdquo; If you can say this truthfully — and you should design the scope so you can — executive approval becomes much easier. It reframes the decision from &apos;will this work?&apos; to &apos;when does this pay back?&apos;, which is a question most leadership teams are very willing to answer in your favour.
              </p>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="rounded-2xl border p-6" style={{ background: `${AZURE}06`, borderColor: `${AZURE}20` }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: AZURE }}>Key takeaways</p>
            <ul className="space-y-3">
              {[
                "Measure business outcomes (cost saved, revenue generated, risk reduced) — not output metrics (queries answered, tasks processed).",
                "The four ROI levers are: labour cost reduction, error/rework elimination, throughput increase, and revenue impact. The strongest cases activate at least two.",
                "Use conservative automation rates in your model: 60–75% of eligible task time, not 95–100%. Your model must survive a 50% stress test.",
                "Measure your baseline before building your model — assumed process costs and error rates are challenged by finance and will undermine your credibility.",
                "Budget explicitly for change management (10–20% of implementation cost) and ongoing maintenance FTE (0.25–0.5 FTE per agent).",
                "For mid-size deployments, break-even typically occurs in months 4–10. 3-year ROI of 3–8x is realistic and typical.",
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
              { pill: "Playbook", title: "Azure AI Foundry Pricing Guide 2026: What enterprise AI actually costs", href: "/azure-ai-foundry/playbook/pricing-guide-2026" },
              { pill: "Case Study", title: "Insurance claims processing AI: 74% faster processing on Azure AI Foundry", href: "/azure-ai-foundry/playbook/claims-processing-azure-ai-build" },
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
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: AZURE }}>Free ROI workshop</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to build a defensible business case?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We run a 90-minute ROI workshop to quantify your specific process costs and build a conservative-case model you can take to your board.</p>
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


      <AzurePracticeNavigation currentPath="/azure-ai-foundry/playbook/roi-guide" />
    </div>
  )
}
