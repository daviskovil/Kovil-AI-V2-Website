'use client'

import { motion } from "motion/react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar, Users, Lightbulb, Eye, GitBranch, Zap, RefreshCw, Shield } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"

const SF_BLUE = "#00A1E0"

const relatedArticles = [
  {
    pill: "Implementation Guide",
    title: "How to scope your first Agentforce agent: A practitioner's checklist",
    desc: "The 12 questions you must answer before writing a single Topic or Action.",
    readTime: "8 min read",
    href: "/agentforce/playbook/scope-your-first-agentforce-agent",
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

function ReasoningStep({ icon: Icon, phase, label, description }: { icon: React.ElementType; phase: string; label: string; description: string }) {
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

export default function AtlasReasoningEnginePage() {
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
              Technical Deep Dive
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Atlas Reasoning Engine explained: How Agentforce agents actually think
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Agentforce isn&apos;t a chatbot. Understanding how Atlas reasons, plans, and executes is essential for anyone building production agents — here&apos;s what&apos;s actually happening under the hood.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                12 min read
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
        >

          {/* Section 1 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mt-0 mb-4">
            What Atlas is (and what it isn&apos;t)
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The most common misconception about Agentforce is that it&apos;s a fine-tuned LLM — that Salesforce took a foundation model and trained it on Salesforce documentation and object schemas. It isn&apos;t. A second misconception is that it&apos;s a simple prompt chain — a sequence of hardcoded prompts that string together API calls. It isn&apos;t that either.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Atlas is Salesforce&apos;s hybrid reasoning layer that sits between the LLM and your org&apos;s actions. Think of it as an orchestration engine that uses an LLM for language understanding and response generation, but applies its own deterministic logic for routing, action selection, and guardrail enforcement. The LLM handles natural language; Atlas handles everything else.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            This architecture matters for how you build. It means some behaviours are configurable (Topic classification thresholds, action selection prompts, Instructions), while others are fixed (PII masking, audit trail generation, trust layer enforcement). It means hallucination can be addressed at the architecture level, not just through prompt engineering. And it means the debugging model is different: when an agent misbehaves, the problem might be in your Instructions, your Topic classification, your Action design, or the underlying data — and each requires a different fix.
          </p>

          <Callout>
            Atlas is not GPT-4 with a Salesforce hat on. The reasoning you see in Agentforce agents involves multiple model calls, deterministic routing rules, and org-specific context injection that happen invisibly between the user&apos;s message and the agent&apos;s response. Understanding the pipeline is what separates builders who ship reliable agents from those who can&apos;t explain why their agent worked in UAT and failed in production.
          </Callout>

          <div className="border-t border-border my-10" />

          {/* Section 2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            The reasoning loop: Observe, Plan, Act, Reflect
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            Every agent interaction runs through a four-phase loop. Here&apos;s how each phase works, using a concrete example: an SDR agent qualifying an inbound lead.
          </p>

          <div className="space-y-6 mb-8">
            <ReasoningStep
              icon={Eye}
              phase="Phase 1"
              label="Observe"
              description="Atlas receives the conversation context: the user's message, the active channel (chat, email, Slack), and any structured data attached at invocation — in our SDR example, the Lead record fields, company size, industry, and any prior engagement history pulled from Data Cloud. This context is assembled into the prompt that Atlas reasons over. The quality of what Atlas observes is directly determined by what your channel configuration and context actions provide at invocation."
            />
            <ReasoningStep
              icon={GitBranch}
              phase="Phase 2"
              label="Plan"
              description="Atlas classifies the request against your Topic library, selects the matching Topic, and generates an execution plan: which Actions to call, in what order, and what to do with the results. For the SDR agent, this might be: retrieve company firmographic data → assess against ICP criteria → if qualified, check calendar availability → draft personalised outreach → propose meeting. The plan is generated dynamically based on the specific request — it's not a fixed script."
            />
            <ReasoningStep
              icon={Zap}
              phase="Phase 3"
              label="Act"
              description="Actions are executed in sequence (or in parallel where Atlas determines they're independent). Each Action call — whether it's an Apex method, a Flow, an API endpoint, or a Data Cloud query — is a discrete, audited event. Results are returned to Atlas's context window for use in subsequent planning. If an Action fails, Atlas can either retry (if configured), route to a fallback, or escalate, depending on how your Instructions handle that state."
            />
            <ReasoningStep
              icon={RefreshCw}
              phase="Phase 4"
              label="Reflect"
              description="After executing, Atlas evaluates whether the plan produced a satisfactory outcome. If the lead qualified and a meeting was booked, the loop closes and a confirmation is sent. If something didn't resolve — the calendar API returned an error, the lead didn't match ICP criteria — Atlas determines whether to retry, adapt the plan, or escalate. This reflection phase is where well-written Instructions have the most impact: explicit success criteria in your Instructions give Atlas a clear basis for evaluating whether to proceed or escalate."
            />
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            The loop isn&apos;t always linear. For complex requests, Atlas might run multiple Plan-Act cycles before arriving at a final response. This is why context window management matters: every Action call consumes tokens, and a poorly designed agent that calls five Actions to answer a simple query will hit context limits on complex conversations.
          </p>

          <div className="border-t border-border my-10" />

          {/* Section 3 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Topic classification
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Before Atlas can plan anything, it needs to know which Topic applies to the current request. Topic classification is the first decision Atlas makes, and it&apos;s more nuanced than a keyword match.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Each Topic has a classification description — the text you write when defining the Topic in Agent Builder. Atlas uses this description, combined with the current conversation context, to score the relevance of each Topic. The Topic with the highest confidence score above the threshold is selected. If no Topic scores above the threshold, the request falls to the &ldquo;I Can&apos;t Help With That&rdquo; default.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The confidence threshold is configurable, and getting it right requires deliberate tuning. A threshold that&apos;s too high means borderline requests that the agent could handle get unnecessarily escalated. A threshold that&apos;s too low means the agent attempts Topics it shouldn&apos;t, leading to off-brand or incorrect responses. Most production configs we see run between 0.65 and 0.80 depending on the risk profile of the use case.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Topic descriptions also need to be non-overlapping. If two Topics have similar descriptions, Atlas will score them close together and make inconsistent routing decisions. The fix is precise language: Topics should describe what they do and what they explicitly don&apos;t do. &ldquo;Handle loan status queries for authenticated borrowers. Does not handle payment processing, hardship applications, or account closures.&rdquo; is a better Topic description than &ldquo;Answer questions about loans.&rdquo;
          </p>

          <Callout>
            One of the most useful debugging techniques in production: enable debug logging for Agent conversations (available in the Agentforce Console) and examine the Topic confidence scores for your misfired conversations. If a conversation routed to the wrong Topic, the log shows you why — either the Topic description was ambiguous or the confidence threshold was set wrong. This is a 10-minute fix versus a 2-hour guessing game.
          </Callout>

          <div className="border-t border-border my-10" />

          {/* Section 4 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Action execution
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Actions are the mechanism through which agents do things. Understanding how Atlas selects and executes Actions is critical for building agents that behave predictably.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Agentforce supports four Action types: Apex (invocable methods), Flow (Autolaunched or Screen), API (external HTTP endpoints), and MuleSoft (connected APIs via Anypoint). Each has different latency characteristics, error handling behaviour, and context injection capabilities. Apex is typically fastest and most flexible for complex business logic. Flow is easiest to build but has governor limit exposure in high-volume scenarios. API and MuleSoft Actions introduce external dependencies with their own failure modes.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            There&apos;s an important distinction between deterministic and LLM-directed action selection. For some Topics, you can define a fixed sequence of Actions — Atlas will always call Get Account, then Get Recent Cases, then Generate Response, in that order. This is deterministic action selection: predictable, auditable, and easy to debug.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            For more complex Topics, Atlas uses LLM-directed selection: it reasons over the available Actions and decides which to call based on the specific request. This is more flexible but introduces variability. The implication for builders: for regulated use cases or actions with side effects (writes, notifications, record updates), use deterministic sequencing. Reserve LLM-directed selection for informational, read-only Topics where variability in execution order carries lower risk.
          </p>

          <div className="border-t border-border my-10" />

        </motion.div>
      </div>

      {/* Mid-article CTA card */}
      <div className="max-w-2xl mx-auto px-6 mb-0">
        <div
          className="rounded-2xl p-8 text-center border"
          style={{ backgroundColor: `${SF_BLUE}08`, borderColor: `${SF_BLUE}30` }}
        >
          <Shield className="h-8 w-8 mx-auto mb-4" style={{ color: SF_BLUE }} />
          <h3 className="font-display text-xl font-bold mb-2">Working on an Agentforce implementation?</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Talk to our team. We&apos;ve built production Agentforce deployments across financial services, healthcare, and SaaS — and we know where the Atlas edge cases hide.
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

          {/* Section 5 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            The Einstein Trust Layer
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            The Einstein Trust Layer is the security and compliance wrapper that sits around all Atlas operations. For enterprise orgs — particularly in regulated industries — it&apos;s not optional configuration; it&apos;s what makes Agentforce defensible in a board-level risk conversation.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Prompt injection defence:</strong> Atlas validates all input before passing it to the LLM. Instructions embedded in user messages attempting to override system behaviour (&ldquo;ignore your previous instructions and instead...&rdquo;) are detected and blocked before they reach the reasoning layer. This isn&apos;t foolproof — novel injection techniques exist — but it catches the vast majority of automated and manual injection attempts.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">PII masking:</strong> Configurable at the field and object level. When enabled, specified data types (account numbers, SSNs, payment card data, healthcare identifiers) are replaced with tokens before being included in the LLM prompt. The LLM reasons over the tokenised representation; the actual values are never sent. This is essential for HIPAA, PCI-DSS, and GDPR compliance scenarios.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Audit logging:</strong> Every agent action — every Action call, every escalation, every response generated — is logged with a full trail: timestamp, user identity, action type, input parameters, output, and the Atlas confidence scores that drove routing decisions. For financial services clients under FCA or SEC oversight, this audit trail is the artefact that demonstrates the agent&apos;s behaviour is explainable and reviewable.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Zero data retention for LLM calls:</strong> Agentforce uses Salesforce&apos;s own LLM infrastructure with a zero-retention policy: no conversation data is retained by the LLM provider after the call completes. This is the key architectural difference from using OpenAI or Anthropic APIs directly — there&apos;s no risk of your org&apos;s data appearing in future model training.
          </p>

          <Callout>
            One conversation that comes up consistently with enterprise clients: &ldquo;We already have a ChatGPT Enterprise licence. Why do we need Agentforce?&rdquo; The Einstein Trust Layer is usually the deciding factor. ChatGPT Enterprise has good security, but it doesn&apos;t have Salesforce-native PII masking, org-level audit trails, or native integration with Salesforce&apos;s permission model. For orgs where agent actions modify records and those records are audited, Agentforce is the only option that satisfies the compliance requirement.
          </Callout>

          <div className="border-t border-border my-10" />

          {/* Section 6 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Grounding and hallucination prevention
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            LLMs hallucinate. This is a property of the architecture, not a bug that will be fixed. The question for Agentforce builders isn&apos;t whether the LLM could hallucinate — it&apos;s whether your architecture prevents hallucinations from reaching the user.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Atlas uses two grounding mechanisms. First, Data Cloud retrieval augmentation: at invocation time, Atlas can query Data Cloud for relevant records and inject them into the context window. This means the agent&apos;s response is grounded in actual org data — loan balances, case histories, account details — rather than the LLM&apos;s parametric knowledge. The LLM&apos;s role becomes synthesising and communicating the retrieved data, not generating it from memory.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Second, Action results: when an agent calls an Action and receives a structured response (a JSON object with specific field values), those results are passed back into the context window as ground truth. The LLM&apos;s job is then to present that data in natural language, not to recall it. An agent that retrieves a loan balance via a Get Loan Status Action and presents the retrieved value to the customer is not susceptible to hallucination on that specific fact.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            We&apos;ve seen what happens without proper grounding, and it&apos;s instructive. One client inherited an Agentforce deployment where the Knowledge Base Actions weren&apos;t working — broken SOQL queries meant the agent was receiving empty results. Rather than escalating, the agent was filling the gap with LLM-generated content that sounded plausible but was fabricated. Customers were receiving invented product specifications and non-existent return policies. The fix was straightforward once diagnosed, but the client had been live for three weeks before someone noticed.
          </p>

          <Callout>
            Always test your Actions with intentionally empty or degraded data responses during UAT. If an Action returns null or an empty array, what does the agent do? If the answer is &ldquo;it makes something up,&rdquo; your Instructions need an explicit handling instruction for empty data states: &ldquo;If the Get Loan Status Action returns no result, inform the customer you were unable to retrieve their account information and offer to connect them with the team.&rdquo;
          </Callout>

          <div className="border-t border-border my-10" />

          {/* Section 7 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            Practical implications for builders
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Understanding the Atlas architecture changes how you approach specific configuration decisions:
          </p>

          <div className="space-y-5 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">Writing Instructions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instructions are the most influential variable in agent behaviour, and they&apos;re also the most common source of production issues. Write Instructions as explicit business rules, not personality guidance. &ldquo;Be professional and friendly&rdquo; is not an Instruction; it&apos;s decoration. &ldquo;When the customer asks about loan balances, always retrieve the current balance using the Get Loan Balance Action before responding. Never state a balance from memory.&rdquo; is an Instruction. The more specific your Instructions, the less Atlas has to infer — and less inference means fewer surprises.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">Designing fallbacks</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every Topic should have an explicit fallback instruction for the cases you know will occur: Action failures, out-of-scope requests, authentication failures, empty data results. Don&apos;t rely on the default LLM behaviour for these states — it will be inconsistent. Write the fallback behaviour explicitly in the Instructions, including the exact escalation path and the context that should be passed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">Setting confidence thresholds</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Start conservative (0.75+) and tune down based on observed escalation rate. If your agent is escalating 40% of conversations that should be resolvable, pull a sample of those conversations, examine the confidence scores in debug logs, and adjust the threshold. Don&apos;t guess — look at the data. For high-risk Topics (anything involving record writes or financial data), stay above 0.70 regardless of escalation rate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1 text-sm">Context window management</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every Action call, every retrieved record, and every message in the conversation consumes tokens. For complex Topics with multiple Action calls, map out the approximate token consumption before building. If your context budget is tight, use targeted data retrieval (specific fields, not full record JSON) and consider whether any Actions can be combined. A well-scoped pilot agent should rarely hit context limits; an overly broad agent will hit them regularly.
              </p>
            </div>
          </div>

          <div className="border-t border-border my-10" />

          {/* Section 8 */}
          <h2 className="font-display text-2xl font-bold tracking-tight mb-4">
            What Agentforce 3 changes
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            Agentforce 3 (generally available Q1 2026) brings three changes that materially affect the architecture decisions described above.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Native MCP support:</strong> The Model Context Protocol integration means agents can now connect to MCP servers without building custom Apex callouts. Salesforce has first-party integrations with Google Cloud, Stripe, PayPal, GitHub, and several ERP vendors. For orgs with these systems, this eliminates a significant integration build. The trade-off: MCP connections are less auditable than native Actions — the Einstein Trust Layer doesn&apos;t instrument MCP calls with the same granularity as Apex or Flow Actions. For regulated use cases, Apex/MuleSoft remains the right choice.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Multi-agent orchestration:</strong> Agentforce 3 enables agents to invoke other agents as sub-tasks. An orchestrator agent can decompose a complex request and delegate sub-tasks to specialised agents — a Quote Drafter, a Pricing Validator, an Approval Submitter — each operating within its own Topic scope. The orchestration model provides cleaner separation of concerns for complex workflows, but adds debugging complexity: a failure in a sub-agent conversation doesn&apos;t always surface cleanly in the parent conversation&apos;s audit log.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Reasoning improvements:</strong> The Atlas reasoning layer in Agentforce 3 demonstrates measurably better performance on multi-step planning tasks compared to Agentforce 2. In our testing, Topics that previously required explicit step-by-step Instructions now execute correctly with higher-level goal descriptions. This doesn&apos;t mean you should reduce the precision of your Instructions — explicit constraints are still better than inferred ones — but it does mean the planning phase is more robust on complex, multi-action Topics.
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
            Ready to build on Atlas?
          </h2>
          <p className="text-base opacity-70 mb-8 max-w-xl mx-auto">
            Our engineers understand Agentforce at the architecture level — not just the configuration UI. If you&apos;re building something production-grade, let&apos;s talk.
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
