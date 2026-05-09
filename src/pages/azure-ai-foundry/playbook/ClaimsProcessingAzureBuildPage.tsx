'use client'

import { motion } from "motion/react"
import { ArrowRight, ChevronRight, Clock, BookOpen, CheckCircle2, AlertTriangle } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const AZURE = "#0078D4"

export default function ClaimsProcessingAzureBuildPage() {
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
          <span className="text-foreground">Claims Processing Build</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full" style={{ color: AZURE, background: `${AZURE}15` }}>Case Study</span>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-3.5 w-3.5" />16 min read</span>
        </div>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-6">
          From 6-day claims processing to 18 hours: Building an Azure AI triage agent
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A step-by-step walkthrough of an insurance claims triage deployment — from the business problem through architecture decisions, the 4-week build, and 90-day production results. Everything that worked, and three things we&apos;d do differently.
        </p>
      </section>

      {/* Article */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-14">

          {/* Context */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">The problem</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The client: a regional insurer with 180,000 active policies across personal lines and commercial property. 3,200 new claims arriving each week. 18 FTEs whose primary role was manual triage — reading claim documents, cross-referencing policy terms, assigning claims to the correct team, and flagging missing documents.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The problem: six-day average from claim submission to first triage decision. Three root causes — (1) document volume exceeded team capacity during peak periods, (2) every claim required policy lookup that took 15–20 minutes manually, (3) fraud signal checking was manual and inconsistent.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              {[
                { value: "3,200", label: "claims/week" },
                { value: "18", label: "FTEs on manual triage" },
                { value: "6 days", label: "avg to first decision" },
                { value: "12+", label: "document formats" },
              ].map(m => (
                <div key={m.label} className="rounded-xl p-4 text-center border border-border bg-card">
                  <div className="font-display font-bold text-2xl text-foreground">{m.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why it was harder than it looked */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Why this was a harder problem than it looked</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Three complicating factors emerged in the first discovery session:</p>
            <div className="space-y-3">
              {[
                { title: "Document format diversity", body: "Claims arrived in 12+ formats: PDFs (digital and scanned), photographs of handwritten forms, email threads, Excel worksheets, and faxed images. A single claim often contained multiple formats. Standard OCR produced inconsistent extraction quality across formats — Azure AI Document Intelligence was needed as a preprocessing layer, not just a GPT-4o call." },
                { title: "Simultaneous cross-referencing requirement", body: "Accurate triage required the agent to hold three things in context simultaneously: the extracted claim fields, the relevant policy terms (from an 8-year archive of 400,000 policy documents), and the fraud signal indicators (from a separate scoring dataset). Standard single-turn RAG wasn't sufficient — multi-step retrieval was required." },
                { title: "Compliance risk on every error", body: "Incorrect triage direction — especially wrong fraud classification or wrong policy coverage determination — created downstream regulatory exposure. This meant the agent needed a human-in-the-loop escalation path for low-confidence decisions, not just a binary pass/fail output." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-5 rounded-2xl border border-border bg-card">
                  <span className="font-display font-black text-2xl shrink-0 leading-none mt-1" style={{ color: AZURE }}>0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-base mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Azure AI Foundry */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Why Azure AI Foundry (not OpenAI.com or AWS)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Three factors made Azure AI Foundry the unambiguous choice:</p>
            <ul className="space-y-3 mb-4">
              {[
                "Existing Azure estate: Dynamics 365, Azure Data Lake, Azure Active Directory (Entra ID) — Azure AI Foundry integrates natively with all three, eliminating integration work that would have taken 2–3 additional weeks on a different platform.",
                "HIPAA-adjacent compliance requirements: The insurer&apos;s data governance policy required data residency in US East — Azure OpenAI private endpoint configuration provided this. OpenAI.com offered no equivalent data residency guarantee.",
                "IT team Azure proficiency: The client&apos;s infrastructure team had deep Azure expertise. A deployment on AWS or a standalone OpenAI integration would have required external infrastructure support throughout the engagement.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>

          {/* The build */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">The build — week by week</h2>
            <div className="space-y-4">
              {[
                { week: "Week 1", title: "Document pipeline", body: "Azure AI Document Intelligence deployed as the preprocessing layer for all 12 claim document formats. Custom extraction models trained on 300 historical claim samples for each format category. A field normalisation layer built to standardise output structure regardless of source format — ensuring GPT-4o always receives consistently structured data." },
                { week: "Week 2", title: "Policy lookup RAG pipeline", body: "Azure AI Search indexed the full 8-year policy archive (400,000 documents, ~2.8GB) with vector + semantic hybrid search. Chunking strategy: 512-token chunks with 64-token overlap, preserving policy clause boundaries. Semantic ranking configured to prioritise temporal recency for policy version lookup. Evaluation: 95% retrieval precision on 200-question test set derived from historical triage decisions." },
                { week: "Week 3", title: "Triage agent", body: "GPT-4o via Azure OpenAI reading extracted document fields + retrieved policy context, outputting a structured JSON triage decision: claim type, priority level (P1–P4), assigned team, fraud risk score (0–100), confidence score (0–1), escalation flag, and missing documents checklist. Prompt Flow pipeline: version-controlled prompt, automated evaluation on every prompt change, A/B testing framework for refinements." },
                { week: "Week 4", title: "Integration, security & compliance", body: "Azure API Management gateway connecting the triage agent to the claims management system. Managed Identity authentication — zero stored credentials. Private endpoint on Azure OpenAI resource. Full audit logging to Azure Monitor: every triage decision, document hash, GPT-4o model version, confidence score, and processing time. Content safety configured with financial services harm thresholds. UAT: 200 historical claims re-triaged by agent vs. original human decisions — 96.4% agreement rate." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-5 rounded-2xl border border-border bg-card hover:border-accent/30 transition-colors">
                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${AZURE}15`, color: AZURE }}>{item.week}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">Results — 90 days post-launch</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[
                { value: "71%", label: "claims auto-triaged" },
                { value: "18 hrs", label: "avg processing (was 6 days)" },
                { value: "3 FTEs", label: "redeployed to complex claims" },
                { value: "$1.4M", label: "projected annual savings" },
                { value: "96.4%", label: "triage accuracy on UAT set" },
                { value: "Zero", label: "compliance incidents" },
              ].map(m => (
                <div key={m.label} className="rounded-xl p-4 text-center" style={{ background: `${AZURE}10`, border: `1px solid ${AZURE}25` }}>
                  <div className="font-display font-bold text-2xl" style={{ color: AZURE }}>{m.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The 29% of claims not auto-triaged fall into three categories: low-confidence agent decisions (escalated with full context for human review), novel claim types outside the training distribution, and claims explicitly flagged by fraud scoring above the P1 threshold. Human reviewers reported that escalated claims arrived with significantly better context than pre-agent — the agent&apos;s structured output pre-populated the reviewer interface with extracted fields and retrieved policy clauses.
            </p>
          </div>

          {/* Key callout */}
          <div className="rounded-2xl p-6 border" style={{ background: `${AZURE}08`, borderColor: `${AZURE}25` }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: AZURE }}>The most impactful decision</p>
            <p className="text-foreground leading-relaxed">
              Building the Prompt Flow evaluation pipeline before go-live. We ran 200 historical claims through the agent before launch and caught three failure modes — incorrect policy version selection for multi-year policies, a chunking artifact creating hallucinated clause references, and an edge case in the fraud scoring threshold logic. Fixing these in staging saved estimated 3–4 weeks of post-launch remediation.
            </p>
          </div>

          {/* What we'd do differently */}
          <div>
            <h2 className="font-display font-bold text-2xl lg:text-3xl mb-5">What we&apos;d do differently</h2>
            <div className="space-y-3">
              {[
                { issue: "Start evaluation dataset earlier", detail: "We needed 300+ labelled claim examples for Prompt Flow evaluation. Compiling and labelling these took 2 weeks — running in parallel with architecture work, but creating a dependency on Week 3. Starting dataset compilation in Week 0 would have compressed the timeline by a week." },
                { issue: "Invest in document normalisation earlier", detail: "We underestimated format diversity. The 12 identified formats became 18 by Week 2 as edge cases emerged from the archive. Building the normalisation layer as a configurable module (rather than per-format handlers) would have been faster to extend." },
                { issue: "Build the human-review UI in parallel", detail: "Human reviewers needed UI changes to consume the agent&apos;s structured output efficiently. We scoped this as post-launch work, but reviewer feedback during UAT identified requirements that added 1 week to the timeline. Starting UI work in Week 3 would have removed this delay." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                  <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.issue}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
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
              { pill: "Use Case", title: "AI Customer Service Agent — resolve 70% of support queries without a human", href: "/azure-ai-foundry/customer-experience/ai-customer-service-agent" },
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
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to build your Azure AI agent?</h2>
          <p className="text-background/60 mb-8 max-w-md mx-auto">We scope, build, and deploy your first production agent in 2 weeks. Fixed price. Zero delivery risk.</p>
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
