import type { HubOverview, HubComparison, HubFaq } from '@/src/components/hub/HubExtraSections'

export interface AgentforceHubContent {
  overview: HubOverview
  comparison?: HubComparison
  faqs: HubFaq[]
}

const PRICE_Q = 'How is the work priced?'

export const serviceCloudHub: AgentforceHubContent = {
  overview: {
    heading: 'How Agentforce works inside Service Cloud',
    paragraphs: [
      'The three agents cover the life of a support case: resolving routine cases, routing the rest to the right person, and keeping the knowledge base current. They run inside your Salesforce org on the Atlas Reasoning Engine, are covered by the Einstein Trust Layer, and are grounded in live CRM and Data Cloud data.',
      'The Autonomous Case Resolution agent starts when a case is created from any channel: web portal, email-to-case, chat or voice transcription. It assembles the customer\'s account history, orders, contracts and entitlements, classifies the case type, urgency and sentiment with Einstein Case Classification, and then picks a resolution path. The Intelligent Escalation agent scores case complexity, SLA risk and sentiment and routes the case to the right person with the context already loaded. The Knowledge Base Agent finds articles with semantic search filtered by product version and entitlement, summarises them for the customer, spots gaps from unresolved cases and drafts updates for a person to review.',
      'Each agent is a standalone deployment, typically a 3-week fixed-price sprint, so you can start with one and add the others.',
    ],
  },
  comparison: {
    heading: 'Which Service Cloud agent fits which problem',
    columns: ['Agent', 'Job it does', 'When it runs', 'Main Salesforce components', 'Where people stay involved'],
    rows: [
      ['Autonomous Case Resolution', 'Resolves Tier 1 and Tier 2 cases such as refunds, order status, rescheduling and account updates', 'When a new case is created, from any channel', 'Atlas Reasoning Engine, Einstein Case Classification, Salesforce Knowledge, Flow, OmniChannel, Data Cloud', 'Cases the agent cannot resolve go to a human agent'],
      ['Intelligent Escalation', 'Routes escalations by skill, SLA and sentiment with context pre-loaded', 'On case creation and on status changes', 'Atlas Reasoning Engine, Einstein Case Classification, OmniChannel, Flow, Data Cloud, Slack', 'The receiving agent starts with account history and conversation context'],
      ['Knowledge Base Agent', 'Surfaces articles, detects documentation gaps and drafts updates', 'During case resolution, plus a weekly gap analysis', 'Atlas Reasoning Engine, Salesforce Knowledge, Einstein Search, Prompt Builder, Flow', 'A person reviews drafts before anything is published'],
    ],
  },
  faqs: [
    { question: 'Which agent should we start with?', answer: 'Start with the problem that costs most today. Choose Autonomous Case Resolution if routine cases dominate your queue, Intelligent Escalation if hard cases are routed badly, and the Knowledge Base Agent if articles are out of date.' },
    { question: 'How do the agents avoid giving wrong answers?', answer: 'They are grounded in live CRM and Data Cloud data and run under the Einstein Trust Layer. The knowledge agent filters by product version and entitlement and never surfaces deprecated articles. Cases the agent cannot resolve are escalated to a person.' },
    { question: 'Do we need Data Cloud first?', answer: 'The agents use Data Cloud for unified customer context. Whether your data is ready is assessed in an Agentforce Strategy & Readiness engagement, which comes before the build.' },
    { question: 'Do the agents replace our support team?', answer: 'They handle Tier 1 and Tier 2 cases so that your human agents see the cases that need judgement, and they arrive with context loaded.' },
    { question: PRICE_Q, answer: 'Each agent is delivered as a fixed-price sprint, scoped on a discovery call.' },
  ],
}

export const marketingCloudHub: AgentforceHubContent = {
  overview: {
    heading: 'How Agentforce works inside Marketing Cloud',
    paragraphs: [
      'The three agents cover running campaigns, running events and nurturing leads. All use the Atlas Reasoning Engine with Marketing Cloud, Data Cloud and Prompt Builder, so decisions are based on your own engagement data.',
      'The Campaign Execution Agent ingests real-time engagement signals for every active journey through Data Cloud, compares them with your own historical benchmarks, uses Einstein Engagement Scoring to spot fatigue, adjusts targeting, pauses journeys that hurt deliverability and alerts your team to decisions that need human judgement. The Event & Webinar Agent handles registration, a personalised confirmation, a reminder sequence, attendance tracking and post-event follow-up by engagement level, then scores leads for sales handoff. The Lead Nurture Agent builds an intent and fit profile for each lead from Einstein Lead Scoring, Data Cloud signals and CRM history, selects the next piece of content for that lead, and hands off to sales when intent shows readiness.',
      'Each agent is a standalone deployment, typically a 3-week fixed-price sprint.',
    ],
  },
  comparison: {
    heading: 'Which Marketing Cloud agent fits which job',
    columns: ['Agent', 'Job it does', 'Signals it reads', 'Main Salesforce components', 'Handoff'],
    rows: [
      ['Campaign Execution', 'Monitors and adjusts live campaigns', 'Opens, clicks, unsubscribes, conversions and send-time patterns', 'Marketing Cloud, Data Cloud, Einstein Engagement Scoring, Prompt Builder, Flow, Slack', 'Alerts your team to decisions that need human judgement'],
      ['Event & Webinar', 'Runs an event from registration to follow-up', 'Registrations, attendance and post-event engagement', 'Marketing Cloud, Flow, Einstein Lead Scoring, Prompt Builder, Data Cloud', 'Passes scored leads to Sales Cloud'],
      ['Lead Nurture', 'Adapts each lead\'s content journey', 'Fit score, page visits, content downloads and CRM history', 'Marketing Cloud, Data Cloud, Einstein Lead Scoring, Prompt Builder, Flow', 'Hands off to sales when intent shows readiness'],
    ],
  },
  faqs: [
    { question: 'Which agent should we start with?', answer: 'Start where manual effort or lost leads cost most. Choose Campaign Execution if campaigns run unattended between reviews, Event & Webinar if event follow-up is slow, and Lead Nurture if every lead gets the same sequence.' },
    { question: 'How does the campaign agent decide a campaign is underperforming?', answer: 'It compares live signals against benchmark thresholds you configure, based on your own historical campaign performance rather than industry averages.' },
    { question: 'Will it make decisions without our marketers?', answer: 'It adjusts targeting and pauses harmful journeys on its own within the rules you set, and it alerts your team when a decision needs human judgement.' },
    { question: 'What does it need to work?', answer: 'Marketing Cloud and Data Cloud for engagement signals, and Sales Cloud for handoff of leads. A readiness assessment checks what is in place before the build.' },
    { question: PRICE_Q, answer: 'Each agent is delivered as a fixed-price sprint, scoped on a discovery call.' },
  ],
}

export const internalOperationsHub: AgentforceHubContent = {
  overview: {
    heading: 'How Agentforce works for internal operations',
    paragraphs: [
      'Finance, HR and IT teams spend much of their time on predictable, rule-based requests. The three agents here take on that work inside your Salesforce org, using the Atlas Reasoning Engine, Flow, Prompt Builder and the Einstein Trust Layer.',
      'The Finance Approval Agent accepts invoices and expense claims from the employee portal, an invoice email address or an API, extracts the key fields, validates them against policy, routes them through the right approval chain, chases approvers who miss their SLA and logs approved transactions to your ERP. The HR Onboarding Agent starts when a new employee record arrives from your HRIS, picks the onboarding track by department and location, and handles checklists, policy questions, access provisioning triggers and manager nudges. The IT Helpdesk Agent takes tickets from Slack, email or the self-service portal, classifies them, and resolves predictable L1 requests such as password resets, software access, VPN setup and account unlocks.',
      'Each agent is a standalone deployment, typically a 3-week fixed-price sprint.',
    ],
  },
  comparison: {
    heading: 'Which internal operations agent fits which team',
    columns: ['Agent', 'Team', 'How requests arrive', 'What it does', 'Main components'],
    rows: [
      ['Finance Approval', 'Finance', 'Employee portal, invoices emailed to a set address, purchase order uploads, procurement system API', 'Validates against policy, routes approvals, escalates exceptions, chases approvers, logs to your ERP', 'Atlas Reasoning Engine, Flow, Approval Process, Prompt Builder, Slack, ERP integration'],
      ['HR Onboarding', 'HR', 'A new employee record created from your HRIS, such as Workday or BambooHR', 'Sets the onboarding track, runs checklists, answers policy questions, triggers access provisioning, nudges managers', 'Atlas Reasoning Engine, Flow, Prompt Builder, Slack, Data Cloud, identity provisioning'],
      ['IT Helpdesk', 'IT', 'Slack command, email, self-service portal', 'Classifies tickets and resolves predictable L1 requests, escalating the rest', 'Atlas Reasoning Engine, Salesforce Case, Knowledge, Flow, Slack, identity systems'],
    ],
  },
  faqs: [
    { question: 'Which agent should we start with?', answer: 'Start with the team whose requests are most repetitive and rule-based. Finance approval chains, new hire checklists and L1 IT tickets are all good first candidates.' },
    { question: 'Where do approvals and exceptions go?', answer: 'The finance agent routes each request through the right approval chain, escalates exceptions and chases approvers who miss their SLA. Exceptions are escalated rather than approved automatically.' },
    { question: 'Which HR systems does onboarding connect to?', answer: 'It starts from an employee record in Salesforce that is populated from your HRIS, such as Workday or BambooHR, through an integration.' },
    { question: 'What happens to IT tickets the agent cannot solve?', answer: 'It escalates them to your IT engineers, so they focus on infrastructure and complex problems.' },
    { question: PRICE_Q, answer: 'Each agent is delivered as a fixed-price sprint, scoped on a discovery call.' },
  ],
}

export const servicesHub: AgentforceHubContent = {
  overview: {
    heading: 'How an Agentforce engagement works',
    paragraphs: [
      'Our six services fall into four groups. Plan: Strategy & Readiness audits your Salesforce org, ranks agent opportunities and delivers a prioritised roadmap. Build: Agent Design & Configuration, Sales Cloud Agent Deployment and Service Cloud Agent Deployment. Connect: MuleSoft & Data Cloud Integration links agents to your other systems. Fix: Rescue & Optimisation repairs agents that are not performing.',
      'Build engagements follow the same pattern. We scope Topics, Actions, edge cases and escalation paths first. We then build in Agent Builder, Prompt Builder and Flow with Einstein Trust Layer policies applied. Before go-live, we test every topic and fallback path with user acceptance sessions and adversarial prompts, and we support a supervised launch.',
      'Every engagement is fixed price. The timeline for each service is set during scoping, because it depends on your org and the number of agents.',
    ],
  },
  comparison: {
    heading: 'Choosing the right Agentforce service',
    columns: ['Service', 'Choose it when', 'What happens', 'Main Salesforce components'],
    rows: [
      ['Strategy & Readiness', 'You hold Agentforce licences or are considering them and have no plan', 'Org audit, Data Cloud readiness scoring, use case ranking by feasibility and impact, roadmap delivery', 'Salesforce org, Data Cloud'],
      ['Agent Design & Configuration', 'You know the workflow and need an agent built to your logic', 'Scoping, build and configuration, testing and hardening, go-live support', 'Agent Builder, Prompt Builder, Flow, Einstein Trust Layer'],
      ['Sales Cloud Agent Deployment', 'You want an SDR agent for inbound leads', 'Lead qualification, outreach drafting and call booking inside your org, with a supervised pilot', 'Sales Cloud, Agent Builder, CRM and calendar integration'],
      ['Service Cloud Agent Deployment', 'You want agents to resolve L1 and L2 cases', 'Case flow mapping, knowledge and order data integration, supervised go-live', 'Service Cloud, Knowledge, Order Management'],
      ['MuleSoft & Data Cloud Integration', 'Agents need data from ERP, EHR, payments or logistics systems', 'Integration discovery, MuleSoft connectors, Data Cloud unification of the data streams', 'MuleSoft Anypoint, Data Cloud'],
      ['Rescue & Optimisation', 'A live Agentforce deployment is failing or underperforming', 'Diagnostic audit of Topics, Actions, Instructions, Trust Layer settings and conversation logs, then remediation and handover', 'Existing Agentforce configuration'],
    ],
  },
  faqs: [
    { question: 'Where should we start?', answer: 'If you have no plan yet, start with Strategy & Readiness. If the workflow is clear, start with Agent Design & Configuration or the Sales Cloud or Service Cloud deployment.' },
    { question: 'Do we need MuleSoft and Data Cloud?', answer: 'Only if your agents need data from outside Salesforce. Data Cloud unifies that data so agents are grounded in real-time information, and MuleSoft connects the external systems.' },
    { question: 'What does the rescue service look at?', answer: 'Topic and Action configuration, prompt Instructions, Trust Layer policy settings, integration connections and production conversation logs. Each failure gets a documented root cause, then a fix.' },
    { question: 'How long does each service take?', answer: 'It depends on the service and your org. We confirm the timeline on the discovery call and fix it in the scope before work begins.' },
    { question: PRICE_Q, answer: 'Every engagement is fixed price, with the deliverable and timeline defined before we start.' },
  ],
}

export const playbookHub: AgentforceHubContent = {
  overview: {
    heading: 'What is in the Agentforce playbook',
    paragraphs: [
      'The playbook collects the guides we use ourselves when scoping and delivering Agentforce work: a scoping checklist, two technical explainers, a worked case study, and the pricing and business case guides.',
      'If you are new to Agentforce, start with how it works, which explains Atlas reasoning, Topics, Actions and the Einstein Trust Layer. If you are about to commission a first agent, read the scoping checklist. If you need to justify the spend, the pricing and ROI guides cover costs and how to build the case.',
      'Salesforce changes pricing and product names often. Treat the cost figures as planning estimates and confirm against Salesforce\'s current pricing before you set a budget.',
    ],
  },
  comparison: {
    heading: 'Guides and when to read them',
    columns: ['Guide', 'Type', 'Read time', 'Read it when'],
    rows: [
      ['How to scope your first Agentforce agent', 'Implementation guide', '8 min', 'You need to choose a use case and define data readiness, escalation and guardrails before building'],
      ['Atlas Reasoning Engine explained', 'Technical deep dive', '12 min', 'You want to understand how agents classify topics and execute actions'],
      ['A financial services Service Cloud build', 'Case study', '15 min', 'You want to see the architecture, MuleSoft integration and guardrails of a real deployment'],
      ['Agentforce Pricing Guide 2026', 'Pricing guide', '10 min', 'You are estimating per-conversation, Data Cloud, licence and implementation costs'],
      ['The Agentforce ROI Guide', 'Business case', '9 min', 'You need a cost savings and revenue model to present internally'],
      ['How Agentforce works', 'Technical guide', '14 min', 'You are a decision-maker who needs the full picture, including how it differs from a chatbot'],
    ],
  },
  faqs: [
    { question: 'Who is the playbook for?', answer: 'Salesforce admins, architects and business leaders who are evaluating, scoping or running Agentforce deployments.' },
    { question: 'Where should I start?', answer: 'Read "How Agentforce works" for the concepts, then "How to scope your first Agentforce agent" before you plan a build.' },
    { question: 'Are the pricing figures current?', answer: 'They are planning estimates written for 2026. Salesforce updates pricing and packaging often, so confirm against its current price list.' },
    { question: 'Can you review our own scoping?', answer: 'Yes. A discovery call can review your use case, data readiness and guardrail design.' },
  ],
}

export const compareHub: AgentforceHubContent = {
  overview: {
    heading: 'Understanding the Agentforce comparisons',
    paragraphs: [
      'Agentforce, Einstein Copilot and Microsoft 365 Copilot are often grouped together, but they do different jobs. Agentforce is Salesforce\'s autonomous agent platform. Einstein Copilot was its predecessor and has been replaced by Agentforce. Microsoft 365 Copilot augments work inside Microsoft productivity apps.',
      'The two guides below cover the questions teams ask most. The Einstein Copilot guide is a migration guide for existing customers, covering what carries over and what must be rebuilt. The Microsoft Copilot guide is a head-to-head covering pricing, architecture and use cases.',
      'Where your data lives is a compliance question as well as a technical one. Agentforce keeps context inside your Salesforce org under the Einstein Trust Layer, while Microsoft routes requests through Azure OpenAI.',
    ],
  },
  faqs: [
    { question: 'Do we have to move from Einstein Copilot to Agentforce?', answer: 'Einstein Copilot has been deprecated, so existing customers need to migrate. The migration guide covers what carries over and what has to be rebuilt.' },
    { question: 'Agentforce or Microsoft Copilot?', answer: 'They suit different jobs. Agentforce fits Salesforce-native organisations that need autonomous action on CRM data, while Microsoft Copilot fits Microsoft 365 productivity work. They are different tools for different jobs.' },
    { question: 'How do the pricing models differ?', answer: 'Agentforce is priced per conversation and Microsoft Copilot per user per month, so total cost depends heavily on your volume and use case. Check each vendor\'s current price list.' },
    { question: 'Can you give a recommendation for our org?', answer: 'Yes. Send us your Salesforce org details and goals and an Agentforce architect will give an honest recommendation, including whether Agentforce is the right tool.' },
  ],
}
