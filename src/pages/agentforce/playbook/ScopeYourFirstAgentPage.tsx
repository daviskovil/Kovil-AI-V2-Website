'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar, CheckSquare, AlertTriangle, Lightbulb, Users } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"

const SF_BLUE = "#00A1E0"

const relatedArticles = [
  {
    pill: "Technical Deep Dive",
    title: "Atlas Reasoning Engine explained: How Agentforce agents actually think",
    desc: "A technical breakdown of hybrid reasoning, topic classification, and action execution — with real org examples.",
    readTime: "12 min read",
    href: "/agentforce/playbook/atlas-reasoning-engine-explained",
  },
  {
    pill: "Case Study",
    title: "From 48-hour case resolution to 4 hours: An Agentforce Service Cloud build",
    desc: "Step-by-step walkthrough of a financial services deployment — architecture, MuleSoft integration, and guardrail configuration.",
    readTime: "15 min read",
    href: "/agentforce/playbook/financial-services-service-cloud-build",
  },
]

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-5 my-8 border-l-4"
      style={{ backgroundColor: `${SF_BLUE}10`, borderLeftColor: SF_BLUE }}
    >
      <div className="flex gap-3">
        <Lightbulb className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: SF_BLUE }} />
        <div className="text-sm leading-relaxed text-foreground">{children}</div>
      </div>
    </div>
  )
}

export default function ScopeYourFirstAgentPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Back breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            href="/agentforce"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Agentforce
          </Link>
        </div>
      </div>

      {/* Article header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block text-xs font-mono font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
              style={{ backgroundColor: `${SF_BLUE}15`, color: SF_BLUE }}
            >
              Implementation Guide
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              How to scope your first Agentforce agent: A practitioner&apos;s checklist
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most Agentforce implementations fail at scoping — not at configuration. Here are the 12 questions every implementation team must answer before touching Agent Builder.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                8 min read
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                April 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                By Kovil AI Engineering Team
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose-like"
        >

          {/* Section 1 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mt-0 mb-4">
            Why scoping is where Agentforce projects fail
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            We get the same call about once a month. A Salesforce admin or a VP of Technology rings us and says something like: &ldquo;We bought Agentforce licences six months ago and we still haven&apos;t deployed anything.&rdquo; Or worse: &ldquo;We built something, it went live, and now the agents are doing things we didn&apos;t intend.&rdquo;
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            In almost every case, the root cause is the same: the team skipped scoping. They looked at Agent Builder, saw the drag-and-drop interface, and assumed the hard part was the tool. It isn&apos;t. The hard part is deciding — with precision — what the agent should do, what data it needs, what it should never do, and how you&apos;ll know if it&apos;s working.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The Agentforce implementations that succeed consistently share one trait: the team spent two to three days on structured scoping before touching a keyboard. They answered a set of fundamental questions about business logic, data access, failure modes, and success criteria. Only then did they open Agent Builder.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            This isn&apos;t a process formality. The answers to these questions are what you put directly into your Topics and Instructions. If you don&apos;t know them, your Instructions will be vague, your Topics will be over-scoped, and your agent will start behaving unpredictably the moment it encounters an edge case.
          </p>

          <Callout>
            The most expensive Agentforce mistake we&apos;ve seen: an org that built 14 Topics in week one because it felt productive. By week three they had an agent that claimed it could do everything and did nothing reliably. They rebuilt from scratch with 3 focused Topics. The rebuild took less time than the original build.
          </Callout>

          <div className="border-t border-border my-10" />

          {/* Section 2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            The 12 pre-build questions
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Work through these in order. Don&apos;t skip to Agent Builder until you have clear, documented answers to all twelve. If you can&apos;t answer a question, that&apos;s a scoping blocker — resolve it before you build.
          </p>

          <div className="space-y-6 mb-8">

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >1</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What is the single, specific job this agent will do?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Not &ldquo;handle customer service&rdquo; — that&apos;s a department, not a job. Not &ldquo;help with sales&rdquo; — that&apos;s a team function. The job should be expressible in one sentence: &ldquo;Respond to inbound loan status queries from authenticated customers and return current loan balance, payment due date, and next scheduled payment amount.&rdquo; If you need two sentences, you&apos;re scoping two agents. Build one first.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >2</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What Salesforce objects does it need read and write access to?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  List every object the agent will touch. For each, specify whether it needs read, write, or both. This drives your permission set design and determines which Actions you&apos;ll need to build. An agent that can read but accidentally writes (or vice versa) is a production incident waiting to happen.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >3</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What triggers this agent?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Inbound message (chat, email, SMS), record change (new Case, updated Opportunity), scheduled trigger, or user-invoked from a UI? The trigger determines your channel configuration, your activation condition in the Topic, and how context is passed to the agent at the start of the conversation. Each trigger type has different data available at the point of invocation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >4</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What does a successful outcome look like, and how will you measure it?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Define the metric before you build. Autonomous resolution rate? Average handle time? CSAT score? Escalation rate? You need a number, a baseline, and a target — not a vague sense that &ldquo;it should be better.&rdquo; This is also what your UAT sign-off will be based on. No measurement definition means no objective pass/fail for go-live.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >5</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What should the agent never do?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This is as important as what it should do. The &ldquo;never do&rdquo; list goes directly into your Instructions as hard constraints. Typical examples: never make commitments about refund timelines, never quote prices, never discuss competitor products, never access account data without authentication, never process transactions above $X without human approval. Write these down explicitly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >6</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Does the agent need data outside Salesforce?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ERP inventory data, EHR patient records, payment processor transaction history, logistics tracking systems — if your agent needs data that lives outside Salesforce, you need an integration strategy before you build. The options are MuleSoft API connectors, direct Apex HTTP callouts, or MCP server integrations (Agentforce 3+). Each has different latency, failure mode, and governance implications.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >7</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Which human does the agent hand off to when it can&apos;t resolve?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Every agent needs a defined escalation path. Name the queue, the team, or the specific role. Specify what context the agent should pass when escalating — case summary, sentiment flag, customer tier, prior interaction history. An agent that escalates with &ldquo;I couldn&apos;t help&rdquo; and no context is worse than no agent at all, because it&apos;s added a frustrating step to a customer who already needs a human.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >8</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What&apos;s the fallback if the agent fails or times out?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Agent Builder doesn&apos;t have automatic retry logic for failed Actions. If your external API returns a 503, what does the agent say? If the agent exceeds its context window mid-conversation, what happens to the customer? Design these failure states explicitly. A well-designed fallback degrades gracefully. An undesigned fallback either surfaces a raw error or silently drops the conversation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >9</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Do you have enough clean data to ground the agent&apos;s actions?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Agentforce agents reason over the data they&apos;re given access to. If your Account records have 40% blank fields, your Contact data is three years stale, or your Knowledge base hasn&apos;t been updated since last year&apos;s product refresh — your agent will either hallucinate, give outdated answers, or escalate everything. Data readiness isn&apos;t a nice-to-have; it&apos;s a hard prerequisite.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >10</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What are the regulatory and compliance constraints?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  PII handling (GDPR, CCPA), audit trail requirements, financial advice restrictions (FCA, SEC), healthcare data rules (HIPAA) — these drive your Einstein Trust Layer configuration, your audit logging setup, and in some cases your entire architecture. Financial services orgs especially: the agent must not give personalised financial advice. Healthcare: PHI cannot be passed to the LLM in identifiable form. Map these before you build.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >11</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Who approves the agent&apos;s outputs before go-live?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Name the UAT owner. This is the person who will run test scenarios, sign off on edge case behaviour, and formally approve go-live. Without a named UAT owner, UAT either doesn&apos;t happen or everyone reviews it but nobody owns the decision. Both situations lead to a go-live with known issues and no accountability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: SF_BLUE }}
              >12</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">What does pilot success look like at 30 days?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Set a 30-day threshold before go-live. Not a vague aspiration — a number: &ldquo;55% autonomous resolution rate on loan status queries with CSAT ≥ 4.2/5.&rdquo; This is your pilot pass/fail criterion. If you hit it, you expand to the next use case. If you don&apos;t, you investigate the failure modes before scaling. This framing also makes the business case for a second agent dramatically easier.
                </p>
              </div>
            </div>

          </div>

          <Callout>
            A completed scoping document should fit on two pages. If it&apos;s longer, you&apos;re probably scoping more than one agent. If it&apos;s shorter, you&apos;ve probably skipped a question. Two focused pages is the right level of detail for a practitioner-built pilot.
          </Callout>

          <div className="border-t border-border my-10" />

          {/* Section 3 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Turning your answers into a Topic design
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Here&apos;s how the scoping questions map directly to the three core components you&apos;ll configure in Agent Builder:
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Topics</strong> are defined by questions 1, 3, and 5. Question 1 gives you the Topic name and classification label. Question 3 defines your Activation Condition — the specific phrasing or context that tells Atlas to route to this Topic. Question 5 becomes your out-of-scope guard: you&apos;ll add explicit language to the Topic telling the agent what categories of request it should decline.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Actions</strong> are driven by questions 2 and 6. Each object that needs read access becomes a Get [Object] Action. Each write becomes an Update or Create Action. External data needs (question 6) become Apex or MuleSoft-backed Actions with proper error handling. Question 8 (fallback design) shapes how each Action handles failure — specifically what the Action returns when the upstream system is unavailable.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Instructions</strong> are the most detailed artefact and draw from questions 4, 5, 7, 8, and 10. Your success metrics (question 4) shape how you phrase the agent&apos;s goal in the Instructions preamble. Your &ldquo;never do&rdquo; list (question 5) goes in verbatim. Your escalation path (question 7) is written as an explicit instruction: &ldquo;If you cannot resolve the issue within two exchanges, use the Escalate to Human Action and pass [these specific fields] as context.&rdquo; Compliance constraints (question 10) are written as hard stops with exact language.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Questions 9 (data readiness) and 11 (UAT owner) don&apos;t map to Agent Builder directly — they&apos;re prerequisites. Data readiness must be confirmed before you create any Actions that depend on that data. The UAT owner must be identified before you schedule the test phase.
          </p>

          <div className="border-t border-border my-10" />

          {/* Mid-article CTA */}
        </motion.div>
      </div>

      {/* Mid-article CTA card */}
      <div className="max-w-2xl mx-auto px-6 mb-0">
        <div
          className="rounded-2xl p-8 text-center border"
          style={{ backgroundColor: `${SF_BLUE}08`, borderColor: `${SF_BLUE}30` }}
        >
          <CheckSquare className="h-8 w-8 mx-auto mb-4" style={{ color: SF_BLUE }} />
          <h3 className="font-display text-xl font-bold mb-2">Working on an Agentforce implementation?</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Talk to our team. We run structured scoping workshops that take you from &ldquo;we have licences&rdquo; to a fully signed-off agent design in two days.
          </p>
          <Button
            onClick={openCalendly}
            className="font-semibold px-6 py-2.5 rounded-lg text-white"
            style={{ backgroundColor: SF_BLUE }}
          >
            Book a Call
          </Button>
        </div>
      </div>

      {/* Continue article body */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >

          {/* Section 4 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Common scoping mistakes we see
          </h2>

          <div className="space-y-5 mb-8">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-500" />
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">Agents scoped too broadly</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The most common mistake is treating Agentforce as a general-purpose assistant for an entire department. A &ldquo;Service Cloud agent&rdquo; that handles returns, complaints, billing queries, technical support, and appointment booking is five agents masquerading as one. Each job requires different data access, different escalation paths, and different compliance constraints. Mashing them together produces an agent that handles simple cases inconsistently and fails on complex ones silently.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-500" />
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">No defined fallback</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We&apos;ve seen production agents that respond to any query they can&apos;t handle with the LLM&apos;s default refusal language — cold, unhelpful, and confusing for the customer. Fallback design is not an edge case. Depending on your use case, 20–35% of interactions will hit a boundary condition in the first 90 days. Plan for this explicitly or you&apos;ll be firefighting post-launch.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-500" />
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">Missing data access</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Discovery call: &ldquo;We want the agent to give customers their order status.&rdquo; Build call: &ldquo;Oh, order data is in SAP, not Salesforce.&rdquo; This is a 2-week detour for an integration that should have been identified in scoping. We now ask about data location on the first call before any scoping work starts.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-amber-500" />
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">Skipping the &ldquo;never do&rdquo; list</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Without explicit constraints, the LLM will attempt to be helpful in ways the business can&apos;t authorise. We&apos;ve seen agents promise specific refund timelines (which the business can&apos;t guarantee), quote prices that are out of date, and give what amounts to personalised financial advice. The &ldquo;never do&rdquo; list isn&apos;t just about safety — it&apos;s about keeping the agent within the scope of what it&apos;s actually authorised to say.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 5 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            What to do next
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Download this checklist and block two days on the calendar with your team — a Salesforce admin, a business process owner, and ideally whoever owns the system that holds the relevant data. Work through each question and document the answers together. Disagreements on the answers are a good sign: they surface ambiguities that would have become production defects.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Once you have clear answers to all twelve questions, you&apos;re ready to start your org audit. Check your Data Cloud enablement status, your Einstein Trust Layer configuration, and the current state of the objects your agent will need to touch. If you find gaps, you now know what to fix before building.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            If your org is complex — multiple clouds, legacy integrations, or a large volume of existing configuration — consider starting with a structured readiness assessment. Our{" "}
            <Link
              href="/agentforce/services/agentforce-strategy-readiness"
              className="underline underline-offset-2 font-medium"
              style={{ color: SF_BLUE }}
            >
              Agentforce Strategy & Readiness
            </Link>{" "}
            engagement covers exactly this: a full org audit, use case prioritisation, and a deployment roadmap — delivered in 10 days.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            For a deeper technical understanding of what happens once you do start building — how Atlas actually reasons, how Topics get selected, and how Actions are executed — read our{" "}
            <Link
              href="/agentforce/playbook/atlas-reasoning-engine-explained"
              className="underline underline-offset-2 font-medium"
              style={{ color: SF_BLUE }}
            >
              Atlas Reasoning Engine breakdown
            </Link>
            .
          </p>

        </motion.div>
      </div>

      {/* Related articles */}
      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="font-display text-2xl font-bold tracking-tight mb-8">Related articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group block rounded-2xl border border-border bg-card p-6 hover:border-border/60 transition-colors"
              >
                <span
                  className="inline-block text-xs font-mono font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4"
                  style={{ backgroundColor: `${SF_BLUE}15`, color: SF_BLUE }}
                >
                  {article.pill}
                </span>
                <h3 className="font-display font-semibold text-base mb-2 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{article.desc}</p>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA banner */}
      <div className="bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to scope your first agent?
          </h2>
          <p className="text-base opacity-70 mb-8 max-w-xl mx-auto">
            Our team runs structured scoping workshops that take you from zero to a signed-off agent design in two days — with a clear path to go-live.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={openCalendly}
              className="font-semibold px-6 py-2.5 rounded-lg text-white"
              style={{ backgroundColor: SF_BLUE }}
            >
              Book a Call
            </Button>
            <Link href="/agentforce">
              <Button variant="outline" className="font-semibold px-6 py-2.5 rounded-lg border-background/30 text-background hover:bg-background/10">
                Back to Agentforce <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
