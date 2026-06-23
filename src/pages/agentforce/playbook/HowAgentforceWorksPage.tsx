'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar, Users, Lightbulb, Eye, GitBranch, Zap, RefreshCw, Shield, Database, Globe, HelpCircle, CheckCircle, Cpu, Lock } from "lucide-react"
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
    pill: "Implementation Guide",
    title: "How to scope your first Agentforce agent: A practitioner's checklist",
    desc: "The 12 questions you must answer before writing a single Topic or Action.",
    readTime: "8 min read",
    href: "/agentforce/playbook/scope-your-first-agentforce-agent",
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

function ReasoningPhase({ icon: Icon, phase, label, description }: {
  icon: React.ElementType; phase: string; label: string; description: string
}) {
  return (
    <div className="flex gap-4">
      <div
        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${SF_BLUE}15` }}
      >
        <Icon className="h-5 w-5" style={{ color: SF_BLUE }} />
      </div>
      <div>
        <div className="text-xs font-mono font-semibold tracking-widest uppercase mb-1" style={{ color: SF_BLUE }}>{phase}</div>
        <h3 className="font-semibold text-foreground mb-1">{label}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const faqItems = [
  {
    q: "What is the difference between Agentforce and a chatbot?",
    a: "Traditional chatbots follow decision trees — predefined if-this-then-that logic. If the user says something the chatbot was not programmed for, it either escalates or gives an irrelevant response. Agentforce uses the Atlas Reasoning Engine to reason about user intent dynamically — it reads context, plans multi-step responses, executes actions (updating records, calling APIs, sending emails), and determines its own next step based on the outcome. It can handle novel situations it was not explicitly programmed for, within its defined Topic scope.",
  },
  {
    q: "What is the Atlas Reasoning Engine?",
    a: "Atlas is Agentforce's core AI reasoning layer. It runs a four-phase loop on every interaction: Observe (read the conversation and load customer context), Plan (determine which Topic applies and which Actions are needed), Act (execute those Actions — updating records, calling APIs, triggering Flows), and Reflect (evaluate whether the outcome was successful and determine if further steps or escalation are needed). This loop runs continuously throughout a conversation, not just at the start.",
  },
  {
    q: "What is the Einstein Trust Layer?",
    a: "The Einstein Trust Layer is the security and governance perimeter around all Agentforce AI operations. It does five things: prevents prompt injection (users cannot manipulate the agent by embedding instructions in their messages), filters PII from data sent to LLM APIs (keeping sensitive data within the Salesforce trust boundary), enforces zero data retention at the LLM level (Salesforce's LLM provider does not store your data), generates an immutable audit trail of every agent action, and blocks outputs that violate configured compliance rules. It is the reason enterprises can deploy Agentforce in regulated industries.",
  },
  {
    q: "How does Agentforce access CRM data?",
    a: "Agentforce accesses CRM data through Actions. A Get Account Action queries the Account object. A Get Case History Action retrieves related cases. These Actions are configured with specific field permissions — the agent can only access fields it is explicitly granted access to, determined by the Agent User permission set in your Salesforce org. Data Cloud provides an additional grounding layer, giving the agent access to unified profiles that combine CRM data with external signals.",
  },
  {
    q: "Can Agentforce take actions in external systems?",
    a: "Yes. Agentforce can connect to external systems through several mechanisms: HTTP callout Actions (via Apex) connect to REST APIs directly — suitable for simpler integrations. MuleSoft-backed Actions provide enterprise-grade integration with complex transformation and governance. MCP server integrations (available in Agentforce 3+) allow connection to any MCP-compatible external tool. Examples include updating ERP inventory, retrieving EHR patient data, or querying a logistics tracking API — all within a single agent interaction.",
  },
  {
    q: "What are Agentforce Topics and Actions?",
    a: "Topics define what an agent is responsible for — its 'job description'. Each Topic specifies the scope of queries the agent handles, the instructions for how to handle them, and which Actions the agent can use within that Topic. Actions define what the agent can do — the 'tools' available to it. Action types include Flow-based actions (update records, send emails), Apex actions (custom business logic), API callout actions (external REST APIs), and Prompt actions (LLM-based text generation). An agent has one or more Topics, and each Topic grants access to a specific set of Actions.",
  },
  {
    q: "Does Agentforce require Data Cloud?",
    a: "Not strictly, but it is recommended for production-grade deployments. Without Data Cloud, agents are grounded only in data available in the immediate Salesforce record context. With Data Cloud, agents access unified customer profiles that combine CRM data, engagement history, and external signals — enabling significantly better context and higher resolution rates. Many organisations already have Data Cloud; if not, the $108,000/year list price needs to be weighed against the improvement in agent accuracy.",
  },
  {
    q: "Can Agentforce be wrong? How do you handle hallucinations?",
    a: "Agentforce can produce incorrect outputs, particularly when knowledge base data is stale, Action results are ambiguous, or the agent is given conflicting instructions. Hallucination risk is mitigated through three mechanisms: Data grounding (agents reason over verified CRM data and structured knowledge articles, not free-form web content), Einstein Trust Layer guardrails (hard stops on categories of output the agent must never produce), and Human-in-the-loop escalation (for any action above a defined risk threshold, the agent requires human approval before executing). Agents should never be deployed in production without defined escalation paths for their failure modes.",
  },
]

export default function HowAgentforceWorksPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Back breadcrumb */}
      <div className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/agentforce" className="hover:text-foreground transition-colors">Agentforce</Link>
            <span>/</span>
            <span className="hover:text-foreground transition-colors cursor-default">Playbook</span>
            <span>/</span>
            <span className="text-foreground">How Agentforce Works</span>
          </nav>
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
              Playbook · Technical Guide
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              How Agentforce Works: The Complete Technical Guide for Decision-Makers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Agentforce is not a chatbot with better NLP. This guide explains the Atlas Reasoning Engine, Topics and Actions architecture, Einstein Trust Layer, and how agents actually take action in your systems — written for technical buyers who need to understand what they are deploying, not just what it promises.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                12 min read
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                June 2026
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
        >

          {/* Section 1 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mt-0 mb-4">
            What is Agentforce? (Not Einstein Copilot)
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Agentforce launched in October 2024 as a fundamental architectural departure from Einstein Copilot. The distinction matters because the two products are often confused, and deploying them interchangeably leads to misaligned expectations and failed implementations.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Einstein Copilot</strong> is a reactive assistant. A human asks it a question, it generates a response. It suggests the next action, the human decides whether to take it. It does not execute autonomously. It is a productivity layer on top of human decision-making.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Agentforce</strong> is an autonomous agent. It observes a trigger (a new lead, an incoming customer message, a scheduled event), reasons through a multi-step plan, executes Actions in your systems (updating records, calling APIs, sending emails), and determines its own next step — all without a human in the loop for standard cases. The human is only involved when the agent explicitly escalates.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {[
              { label: "Agentforce", items: ["Autonomous multi-step reasoning", "Action execution (not suggestion)", "Atlas Reasoning Engine", "Enterprise guardrails via ETL", "Priced per conversation"] },
              { label: "Einstein Copilot", items: ["Reactive copilot (human drives)", "Suggestion generation", "Basic prompt-response model", "Integrated into Salesforce UI", "User-based licence"] },
            ].map((col) => (
              <div
                key={col.label}
                className="rounded-xl border p-5"
                style={{ borderColor: `${SF_BLUE}25` }}
              >
                <div className="text-sm font-semibold mb-3" style={{ color: SF_BLUE }}>{col.label}</div>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" style={{ color: SF_BLUE }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            The four building blocks of every Agentforce agent
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Every Agentforce agent is built from four components. Understanding how they relate to each other is the foundation of every implementation.
          </p>

          <h3 className="font-display text-xl font-semibold mb-3 mt-8">Topics — the agent&apos;s job description</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Each Topic defines the scope of queries the agent handles, the instructions for how to handle them, and which Actions the agent can use within that scope. An agent can have multiple Topics — each covering a distinct type of interaction. The Atlas Reasoning Engine selects the appropriate Topic based on the content of the user&apos;s message and the active conversation context.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Topics should be scoped narrowly. &ldquo;Handle all customer service&rdquo; is not a Topic — it is a department function. &ldquo;Respond to inbound loan status queries from authenticated customers&rdquo; is a Topic. The narrower the Topic, the more precise the Instructions can be, the higher the resolution rate, and the more predictable the agent&apos;s behaviour.
          </p>

          <h3 className="font-display text-xl font-semibold mb-3 mt-8">Actions — what the agent can do</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Actions are the capabilities the agent can invoke. There are five types:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { type: "Flow-based actions", desc: "Trigger Salesforce Flows — update records, send emails, create tasks, post Chatter messages. The most common action type for standard CRM operations." },
              { type: "Apex actions", desc: "Invoke custom Apex classes for business logic that cannot be expressed in Flow — complex calculations, conditional routing, data transformation." },
              { type: "API callout actions", desc: "Make HTTP callouts to external REST APIs via Apex. Used for integrating with non-Salesforce systems without MuleSoft." },
              { type: "MuleSoft actions", desc: "Enterprise-grade integration with external systems via MuleSoft Anypoint Platform. Provides advanced transformation, monitoring, and governance for complex integration patterns." },
              { type: "Prompt actions", desc: "LLM-based text generation for drafting emails, summaries, and structured responses. Grounded in CRM data via Data Cloud or direct record context." },
            ].map((a) => (
              <div key={a.type} className="flex gap-3">
                <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full mt-2" style={{ backgroundColor: SF_BLUE }} />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">{a.type}:</strong> {a.desc}
                </p>
              </div>
            ))}
          </div>

          <h3 className="font-display text-xl font-semibold mb-3 mt-8">Instructions — the guardrails and behaviour rules</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Instructions are the most important — and most underestimated — component of an Agentforce agent. They define what the agent must always do, what it must never do, and how to handle edge cases. Instructions are written in natural language and interpreted by the Atlas Reasoning Engine at runtime.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Vague Instructions produce unpredictable agents. Precise Instructions — specifying exact escalation conditions, explicit &ldquo;never do&rdquo; constraints, and clear handling logic for ambiguous situations — produce agents that behave consistently in production. The quality of your Instructions is the single largest determinant of your autonomous resolution rate.
          </p>

          <h3 className="font-display text-xl font-semibold mb-3 mt-8">Guardrails (Einstein Trust Layer) — the security perimeter</h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The Einstein Trust Layer operates as the outer security perimeter around all agent AI operations. It runs before and after every LLM interaction: blocking prompt injection attempts (where a user tries to manipulate the agent by embedding instructions in their message), filtering PII from data before it is sent to the LLM provider, enforcing zero data retention at the LLM level, and generating an immutable audit trail of every action the agent takes.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            The Trust Layer is what makes Agentforce deployable in regulated industries. Without it, enterprise deployments in financial services, healthcare, or legal would be non-starters from a compliance perspective.
          </p>

          <Callout>
            A common misconception: the Einstein Trust Layer is not optional security configuration you turn on for sensitive deployments. It is the core architecture of every Agentforce interaction. Every prompt goes through it, every action is logged by it. Understanding this matters because it affects your compliance documentation — you are not deploying a raw LLM in your org. You are deploying an LLM behind a trust boundary with audit logging, PII filtering, and injection protection built in.
          </Callout>

          <div className="border-t border-border my-10" />

          {/* Section 3 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            The Atlas Reasoning Engine: four-phase loop
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Atlas does not process one message and generate one response. It runs a continuous four-phase reasoning loop throughout the entire conversation — re-evaluating context, executing actions, and reflecting on outcomes at every step.
          </p>

          <div className="space-y-6 mb-8">
            <ReasoningPhase
              icon={Eye}
              phase="Phase 1 — Observe"
              label="Reads the conversation and loads customer context"
              description="Atlas reads the incoming message and the full conversation history. It loads customer context from the CRM — Account record, related Cases, Opportunities, or any configured Data Cloud unified profile. It identifies intent: what is the user asking for, what is the implied need behind the stated request, and what context is most relevant to forming a response. Observation is not passive — Atlas actively queries structured data sources as part of the observe phase."
            />
            <ReasoningPhase
              icon={GitBranch}
              phase="Phase 2 — Plan"
              label="Determines which Topic applies and plans the execution sequence"
              description="Based on observed context and intent, Atlas determines which configured Topic is most relevant to the current interaction. Within that Topic, it identifies which Actions are needed to address the user's request and in what order they should be executed. For complex requests requiring multiple steps — retrieve data, update a record, send an email, confirm with the user — Atlas plans the full sequence before beginning execution."
            />
            <ReasoningPhase
              icon={Zap}
              phase="Phase 3 — Act"
              label="Executes Actions — Apex calls, Flow triggers, MuleSoft API calls, record updates"
              description="Atlas executes the planned Actions in sequence. Flow Actions trigger Salesforce Flows. Apex Actions invoke custom business logic. API callout Actions connect to external systems. Record Actions read and write CRM data. Each Action returns a result that informs the next step. If an Action fails (external API returns an error, Flow encounters an exception), Atlas routes to the configured fallback behaviour rather than surfacing a raw error to the user."
            />
            <ReasoningPhase
              icon={RefreshCw}
              phase="Phase 4 — Reflect"
              label="Evaluates outcome and determines next step or escalation"
              description="After executing the planned Actions, Atlas evaluates whether the outcome meets the resolution criteria defined in the Topic Instructions. Did the Action succeed? Does the user's response indicate the issue is resolved? Is further action needed? If the goal is met, the agent closes the conversation or offers additional help. If not, Atlas re-enters the plan-act loop with updated context. If the situation exceeds the agent's defined scope, Atlas triggers the configured escalation path."
            />
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 4 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            How data flows through an Agentforce interaction
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Here is a step-by-step walkthrough of a real Agentforce interaction — a customer requesting a product return through a Service Cloud Messaging channel.
          </p>

          <div className="space-y-4 my-8">
            {[
              { n: 1, title: "Customer sends message via web chat", body: 'Customer types: "I received the wrong item in my order #SF-29847. I want to return it." The message arrives in Service Cloud Messaging and triggers the Agentforce agent.' },
              { n: 2, title: "Atlas identifies intent and loads context", body: "Atlas reads the message, identifies intent (product return, wrong item), and loads the customer's Account record, the relevant Order record for #SF-29847, and the product return policy from the Knowledge base." },
              { n: 3, title: "Atlas selects the Product Returns Topic", body: "Based on intent, Atlas routes to the Product Returns Topic. This Topic has access to: Get Order Action, Check Return Eligibility Action, Create Return Case Action, and Send Confirmation Email Action." },
              { n: 4, title: "Atlas executes: Get Order, Check Eligibility", body: "Get Order Action retrieves #SF-29847 from the Order object — confirms it was delivered 3 days ago (within 30-day return window) and identifies the shipped SKU. Check Return Eligibility confirms the item is eligible." },
              { n: 5, title: "Atlas creates the return case and updates records", body: "Create Return Case Action creates a new Case record with type='Return', reason='Wrong Item', and links it to the order. The original order record is updated with return_requested=true." },
              { n: 6, title: "Agent responds and sends confirmation", body: "Atlas generates a response confirming the return initiation, provides the Case number, and sends a return label email via the Send Confirmation Email Action. The response is grounded in the actual Case number and return window data — not templated language." },
              { n: 7, title: "Reflect: issue resolved", body: "Atlas evaluates whether the customer's request is resolved. It confirmed the wrong item, initiated the return, and sent the label. Resolution criteria met. Conversation marked as autonomously resolved. Audit log entry created." },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: SF_BLUE }}
                >
                  {step.n}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 5 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Agent channels: where Agentforce appears
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Agentforce agents are not a single-channel product. They can be deployed across multiple touchpoints, each with different technical setup requirements and use case fit.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 my-6">
            {[
              { channel: "Service Cloud Messaging", desc: "Web chat, SMS, WhatsApp, Facebook Messenger. The most common deployment channel for customer-facing service agents.", icon: Globe },
              { channel: "Experience Cloud portals", desc: "Self-service portals for customers, partners, or employees. Embedded directly in portal pages.", icon: Globe },
              { channel: "Slack", desc: "Internal agent deployments for employee-facing use cases — IT helpdesk, HR queries, finance approvals.", icon: Users },
              { channel: "Email", desc: "Agents that monitor incoming email, classify intent, and respond or route automatically.", icon: CheckCircle },
              { channel: "Voice (partner integrations)", desc: "Voice channel integration via Salesforce's partner ecosystem. Available but requires additional configuration.", icon: Cpu },
              { channel: "Salesforce CRM UI", desc: "Agents embedded directly in the Salesforce interface for rep-facing and internal operations use cases.", icon: Database },
            ].map((ch) => (
              <div key={ch.channel} className="flex gap-3 rounded-lg border border-border p-4">
                <ch.icon className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: SF_BLUE }} />
                <div>
                  <div className="text-sm font-semibold text-foreground mb-0.5">{ch.channel}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{ch.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 6 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Agentforce vs. traditional chatbots: six key differences
          </h2>

          <div className="rounded-xl border border-border overflow-hidden my-6">
            <div className="grid grid-cols-3 gap-0">
              <div className="px-4 py-3 text-xs font-semibold text-muted-foreground bg-muted/30 border-b border-border">Capability</div>
              <div className="px-4 py-3 text-xs font-semibold border-b border-border" style={{ color: SF_BLUE, backgroundColor: `${SF_BLUE}08` }}>Agentforce</div>
              <div className="px-4 py-3 text-xs font-semibold text-muted-foreground border-b border-border bg-muted/20">Traditional chatbot</div>
            </div>
            {[
              { cap: "Intent recognition", af: "Dynamic LLM-based reasoning", chat: "Fixed keyword matching / NLU" },
              { cap: "Multi-step reasoning", af: "Full plan-act-reflect loop", chat: "Single-turn responses" },
              { cap: "CRM integration", af: "Native Salesforce data access", chat: "Limited or none" },
              { cap: "Action execution", af: "Executes records, emails, APIs", chat: "Suggestions only" },
              { cap: "Escalation handling", af: "Structured HITL with full context", chat: "Simple queue transfer" },
              { cap: "Audit trail", af: "Immutable log via ETL", chat: "Typically none" },
            ].map((row, i) => (
              <div key={row.cap} className={`grid grid-cols-3 gap-0 ${i < 5 ? 'border-b border-border' : ''}`}>
                <div className="px-4 py-3 text-xs text-muted-foreground bg-muted/10">{row.cap}</div>
                <div className="px-4 py-3 text-xs font-medium" style={{ backgroundColor: `${SF_BLUE}05`, color: SF_BLUE }}>{row.af}</div>
                <div className="px-4 py-3 text-xs text-muted-foreground">{row.chat}</div>
              </div>
            ))}
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 7 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Data grounding: how agents get accurate information
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            An agent is only as accurate as the data it can access. Agentforce has multiple mechanisms for grounding agent responses in verified, structured information rather than relying on the LLM&apos;s training data.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { icon: Database, label: "Data Cloud unified profiles", desc: "Combines CRM records, engagement history, and third-party signals into a single customer profile the agent can query in real-time. Enables highly contextualised responses grounded in current customer state." },
              { icon: Zap, label: "Real-time CRM data via Actions", desc: "Get Actions retrieve live record data at the point of interaction — current account balance, latest case status, active opportunities. Not cached or approximated." },
              { icon: CheckCircle, label: "Einstein Search for knowledge articles", desc: "Semantic search over your Salesforce Knowledge base. The agent finds relevant articles based on intent, not keyword match — enabling accurate policy and procedure responses." },
              { icon: Globe, label: "MuleSoft for external system data", desc: "Retrieves live data from ERP, EHR, core banking, or any external system that MuleSoft connects to. Gives the agent a complete picture even when relevant data lives outside Salesforce." },
              { icon: Shield, label: "Retrieval Augmented Generation (RAG)", desc: "For large, unstructured knowledge bases, RAG retrieves the most relevant documents and passes them as context to the LLM — enabling accurate responses without training the LLM on proprietary data." },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${SF_BLUE}15` }}
                >
                  <item.icon className="h-4 w-4" style={{ color: SF_BLUE }} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 8 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            How long does it take to build an Agentforce agent?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Build time is the question every buyer asks and every vendor answers differently. Here is the honest answer based on our experience across multiple production deployments.
          </p>

          <div className="space-y-4 mb-8">
            {[
              { phase: "Single use case pilot", time: "2–3 weeks", detail: "One Topic, 3–5 Actions, defined knowledge base scope. Suitable for Service Cloud Tier 1 deflection, SDR qualification, or a focused internal use case. This is the right starting point for any organisation." },
              { phase: "Multi-use case deployment", time: "6–12 weeks", detail: "Multiple Topics across one or more Clouds. Includes custom Action development, Data Cloud setup, knowledge base configuration, and full UAT. The upper end of this range applies to deployments requiring MuleSoft integration or regulated industry compliance configuration." },
            ].map((item) => (
              <div
                key={item.phase}
                className="rounded-xl border p-5"
                style={{ borderColor: `${SF_BLUE}25` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground text-sm">{item.phase}</span>
                  <span className="text-sm font-bold" style={{ color: SF_BLUE }}>{item.time}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">What determines build speed:</strong> Data readiness (the largest variable — clean, current CRM data and knowledge articles are a prerequisite), org complexity (the more custom configuration already in the org, the more integration work is needed), and integration requirements (external APIs and MuleSoft add weeks). Teams that have done the scoping work before build starts consistently hit the lower end of these ranges. Teams that scope and build simultaneously consistently hit the upper end.
          </p>

        </motion.div>
      </div>

      {/* Mid-article CTA */}
      <div className="max-w-2xl mx-auto px-6 mb-0">
        <div
          className="rounded-2xl p-8 text-center border"
          style={{ backgroundColor: `${SF_BLUE}08`, borderColor: `${SF_BLUE}30` }}
        >
          <Lock className="h-8 w-8 mx-auto mb-4" style={{ color: SF_BLUE }} />
          <h3 className="font-display text-xl font-bold mb-2">Ready to deploy Agentforce in your org?</h3>
          <p className="text-sm text-muted-foreground mb-6">
            We run structured technical scoping sessions that translate your use case into a specific Topics, Actions, and Instructions design — before you touch Agent Builder.
          </p>
          <Button
            onClick={openCalendly}
            className="font-semibold px-6 py-2.5 rounded-lg text-white"
            style={{ backgroundColor: SF_BLUE }}
          >
            Book a Technical Call
          </Button>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-bold tracking-tight mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqItems.map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-b border-border pb-8 last:border-0"
              >
                <div className="flex gap-3 mb-2">
                  <HelpCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: SF_BLUE }} />
                  <h3 className="font-display font-semibold text-base text-foreground leading-snug">{item.q}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">{item.a}</p>
              </motion.div>
            ))}
          </div>
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

      {/* Final CTA */}
      <div className="bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Understand how Agentforce will work in your org.
          </h2>
          <p className="text-base opacity-70 mb-8 max-w-xl mx-auto">
            Talk to our team. We will walk through the Atlas Reasoning Engine, Topics and Actions design, and Einstein Trust Layer configuration for your specific use case — not a generic demo.
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
