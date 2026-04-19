'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, ArrowRight, Clock, ChevronRight, Zap, ExternalLink } from 'lucide-react'

// ── Types ─────────────────────────────────────────────────────────────────────

type Workflow = {
  id: number
  industry: string
  industryColor: string
  title: string
  description: string
  nodes: string[]
  nodeEmojis: string[]
  nodeBgs: string[]
  nodeShorts: string[]
  tools: string[]
  timeSaved: string
  steps: string[]
  buildTime: string
}

// ── Data ──────────────────────────────────────────────────────────────────────

const workflows: Workflow[] = [
  // AD & MARKETING
  {
    id: 1, industry: 'Ad & Marketing', industryColor: '#A78BFA',
    title: 'Campaign Performance Reporting Automation',
    description: 'Pull data from Meta, Google, LinkedIn → GPT-4o analysis → auto-build slide deck → email client + Slack team',
    nodes: ['Schedule', 'Meta Ads', 'Google Ads', 'Merge', 'GPT-4o', 'Report'],
    nodeEmojis: ['⏰', '📱', '🔍', '🔗', '🤖', '📊'],
    nodeBgs: ['#FF4F00', '#1877F2', '#4285F4', '#F65B2B', '#10A37F', '#FBBC04'],
    nodeShorts: ['CRN', 'f', 'G', '⚡', 'AI', 'SLD'],
    tools: ['n8n', 'GPT-4o', 'Google Slides', 'Gmail', 'Slack'],
    timeSaved: '12 hrs/week',
    steps: ['Schedule trigger fires every Monday 8am', 'Pull last 7 days from Meta Ads, Google Ads, LinkedIn', 'Merge all data in n8n', 'GPT-4o analyses performance trends and anomalies', 'Report Builder generates slide deck via Google Slides API', 'Auto-email to client, post summary to Slack'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 2, industry: 'Ad & Marketing', industryColor: '#A78BFA',
    title: 'AI Creative Brief Generator',
    description: 'Client fills Typeform → pull brand guidelines from Notion → GPT-4o writes structured brief → approval gate → creative team',
    nodes: ['Typeform', 'Notion', 'GPT-4o', 'Approval', 'Deliver'],
    nodeEmojis: ['📋', '📝', '🤖', '✅', '📤'],
    nodeBgs: ['#0099FF', '#3D3D3D', '#10A37F', '#22C55E', '#EA4335'],
    nodeShorts: ['Tf', 'N', 'AI', '✓', '→'],
    tools: ['Typeform', 'Notion', 'GPT-4o', 'Slack'],
    timeSaved: '3 hrs/brief',
    steps: ['Client fills brief intake via Typeform', 'Pull brand guidelines + past briefs from Notion', 'GPT-4o writes structured creative brief', 'Approval gate: human reviews in Slack (approve/revise)', 'Approved brief delivered to creative team channel'],
    buildTime: '1–2 week sprint',
  },
  {
    id: 3, industry: 'Ad & Marketing', industryColor: '#A78BFA',
    title: 'New Client Onboarding Automation',
    description: 'Deal Won in HubSpot → parallel: contract + invoice + onboarding → auto-create Notion workspace + Slack channel → kickoff',
    nodes: ['HubSpot', 'DocuSign', 'Stripe', 'Notion', 'Slack', 'Calendly'],
    nodeEmojis: ['🔶', '✍️', '💳', '📝', '💬', '📅'],
    nodeBgs: ['#FF7A59', '#FFA500', '#635BFF', '#3D3D3D', '#4A154B', '#006BFF'],
    nodeShorts: ['HS', 'DS', 'S$', 'N', '#', 'CAL'],
    tools: ['HubSpot', 'DocuSign', 'Stripe', 'n8n', 'Notion', 'Calendly'],
    timeSaved: '3 days → 2 hrs',
    steps: ['HubSpot deal marked Won triggers workflow', 'Parallel: send DocuSign contract, raise Stripe invoice, send Typeform onboarding', 'Wait for all 3 to complete', 'Auto-create Notion client workspace from template', 'Create dedicated Slack channel, invite team', 'Schedule kickoff call via Calendly'],
    buildTime: '3–4 week sprint',
  },
  // FINTECH
  {
    id: 4, industry: 'FinTech', industryColor: '#34D399',
    title: 'AI Loan Document Classifier',
    description: 'PDF uploaded → GPT-4o Vision extracts document type + fields → classifier routes to checklist → flags missing docs → notifies underwriter',
    nodes: ['Upload', 'GPT-4o Vision', 'Classifier', 'Complete?', 'Notify'],
    nodeEmojis: ['📄', '👁️', '🗂️', '❓', '🔔'],
    nodeBgs: ['#6366F1', '#10A37F', '#F65B2B', '#FBBF24', '#EA4335'],
    nodeShorts: ['PDF', 'AI', '⊞', '?', '🔔'],
    tools: ['GPT-4o Vision', 'Python', 'FastAPI', 'n8n', 'Email'],
    timeSaved: '8 hrs/day',
    steps: ['Document uploaded to intake portal', 'GPT-4o Vision extracts document type and all key fields', 'Classifier routes to correct document checklist', 'Check: all required docs present?', 'Complete: notify underwriter / Incomplete: flag missing items'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 5, industry: 'FinTech', industryColor: '#34D399',
    title: 'Automated Underwriting Workflow',
    description: 'New loan application → credit bureau data → AI risk scoring → decision engine [approve/review/decline] → decision letter → CRM',
    nodes: ['Application', 'Credit Bureau', 'AI Score', 'Decision', 'Letter', 'CRM'],
    nodeEmojis: ['📋', '🏦', '🤖', '⚖️', '📄', '💼'],
    nodeBgs: ['#6366F1', '#1E40AF', '#10A37F', '#FBBF24', '#60A5FA', '#FF7A59'],
    nodeShorts: ['APP', 'CB', 'AI', '⚖', 'LTR', 'CRM'],
    tools: ['GPT-4o', 'Python', 'FastAPI', 'HubSpot', 'n8n'],
    timeSaved: '70% faster',
    steps: ['New loan application received via API or form', 'Pull credit bureau data (Experian/Equifax)', 'AI risk scoring model runs — outputs score + rationale', 'Decision engine: Approve / Manual Review / Decline', 'Auto-generate formatted decision letter', 'Log decision + rationale to HubSpot CRM'],
    buildTime: '4–6 week sprint',
  },
  {
    id: 6, industry: 'FinTech', industryColor: '#34D399',
    title: 'Deal Processing Automation',
    description: 'New deal enters pipeline → validate policy rules → AI extracts deal terms → auto-populate deal sheet → notify team → schedule review',
    nodes: ['Deal Trigger', 'Policy Check', 'AI Extract', 'Populate', 'Notify'],
    nodeEmojis: ['💼', '✅', '🤖', '📊', '🔔'],
    nodeBgs: ['#FF7A59', '#22C55E', '#10A37F', '#FBBC04', '#4A154B'],
    nodeShorts: ['DL', '✓', 'AI', 'SHT', '#'],
    tools: ['n8n', 'GPT-4o', 'Google Sheets', 'Slack', 'Calendly'],
    timeSaved: '4 hrs/deal',
    steps: ['New deal enters pipeline', 'Validate against policy rules (automated)', 'GPT-4o extracts key deal terms from documents', 'Auto-populate standardised deal sheet in Google Sheets', 'Notify deal team via Slack', 'Auto-schedule review call via Calendly'],
    buildTime: '2 week sprint',
  },
  {
    id: 29, industry: 'FinTech', industryColor: '#34D399',
    title: 'KYC/AML Identity Verification',
    description: 'New customer submits docs → GPT-4o Vision extracts ID data → AML screening API → risk score → approve/flag/escalate → CRM log',
    nodes: ['ID Upload', 'AI Extract', 'AML Check', 'Risk Score', 'Decision'],
    nodeEmojis: ['📄', '👁️', '🔍', '📊', '✅'],
    nodeBgs: ['#6366F1', '#10A37F', '#1E40AF', '#FBBF24', '#22C55E'],
    nodeShorts: ['ID', 'AI', 'AML', '%', '✓'],
    tools: ['GPT-4o Vision', 'n8n', 'Jumio API', 'HubSpot', 'Gmail'],
    timeSaved: '2 hrs/application',
    steps: ['Customer uploads government ID and proof of address', 'GPT-4o Vision extracts name, DOB, address, ID number', 'AML screening API checks against global watchlists', 'AI risk scoring model generates KYC risk score 1–100', 'Score <30: auto-approve; 30–70: manual review; >70: escalate', 'Decision logged to HubSpot with full audit trail'],
    buildTime: '3–4 week sprint',
  },
  {
    id: 30, industry: 'FinTech', industryColor: '#34D399',
    title: 'Invoice Reconciliation AI',
    description: 'Pull invoices from accounting → match against bank transactions → AI flags discrepancies → auto-reconcile matched pairs → CFO summary report',
    nodes: ['Pull Invoices', 'Bank Feed', 'AI Match', 'Flag Gaps', 'Reconcile'],
    nodeEmojis: ['📋', '🏦', '🤖', '⚠️', '✅'],
    nodeBgs: ['#6366F1', '#1E40AF', '#10A37F', '#EF4444', '#22C55E'],
    nodeShorts: ['INV', 'BNK', 'AI', '⚠', '✓'],
    tools: ['Xero API', 'Plaid', 'GPT-4o', 'Google Sheets', 'n8n'],
    timeSaved: '6 hrs/month',
    steps: ['Pull all outstanding invoices from Xero via API', 'Pull last 30 days of bank transactions via Plaid', 'AI matching engine compares invoice amounts, dates, vendors', 'Flag unmatched transactions and over/under payments', 'Auto-reconcile all matched pairs in Xero', 'Generate CFO summary report with all discrepancies'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 31, industry: 'FinTech', industryColor: '#34D399',
    title: 'Real-Time Fraud Detection',
    description: 'Transaction fires → ML model scores fraud probability → high risk: freeze + alert customer instantly → case opened → analyst review → resolution',
    nodes: ['Transaction', 'Fraud Score', 'High Risk?', 'Freeze Card', 'Alert'],
    nodeEmojis: ['💳', '🤖', '⚠️', '🔒', '📱'],
    nodeBgs: ['#635BFF', '#10A37F', '#EF4444', '#1E40AF', '#F22F46'],
    nodeShorts: ['TXN', 'AI', '?', '🔒', 'SMS'],
    tools: ['Stripe API', 'Python', 'n8n', 'Twilio', 'HubSpot'],
    timeSaved: '90% faster detection',
    steps: ['Transaction event fires from payment processor in real time', 'ML fraud scoring model runs — outputs probability 0–100', 'Score >85: trigger high-risk path immediately', 'Freeze card via card issuer API, notify customer via SMS', 'Open fraud case in HubSpot with full transaction context', 'Route to fraud analyst for investigation and resolution'],
    buildTime: '4–6 week sprint',
  },
  // HEALTHTECH
  {
    id: 7, industry: 'HealthTech', industryColor: '#F87171',
    title: 'AI Patient Intake Automation',
    description: 'Patient submits intake → Voice AI collects missing info → AI extracts structured data → push to 3 EHR systems → flag high-risk → alert team',
    nodes: ['Intake Form', 'Voice AI', 'AI Extract', 'EHR Push', 'Risk Flag'],
    nodeEmojis: ['📋', '🎙️', '🤖', '🏥', '⚠️'],
    nodeBgs: ['#6366F1', '#F22F46', '#10A37F', '#34D399', '#F87171'],
    nodeShorts: ['📋', 'VOC', 'AI', 'EHR', '⚠'],
    tools: ['Twilio', 'GPT-4o', 'Python', 'n8n', 'EHR API'],
    timeSaved: '18 min → 2 min',
    steps: ['Patient submits intake form online', 'Voice AI (Twilio) calls to collect any missing information', 'GPT-4o extracts and structures all patient data', 'Push structured data to 3 EHR systems simultaneously', 'AI flags any high-risk clinical fields', 'Alert care team for immediate review'],
    buildTime: '4–6 week sprint',
  },
  {
    id: 8, industry: 'HealthTech', industryColor: '#F87171',
    title: 'Appointment No-Show Prevention',
    description: 'Appointment booked → T-48hr: AI personalised reminder → SMS + email → no response: auto-reschedule prompt → calendar update',
    nodes: ['Booked', 'Wait 48hr', 'AI Reminder', 'Send', 'Follow-up'],
    nodeEmojis: ['📅', '⏰', '🤖', '📱', '🔄'],
    nodeBgs: ['#4285F4', '#FF4F00', '#10A37F', '#EA4335', '#F65B2B'],
    nodeShorts: ['CAL', '48h', 'AI', 'SMS', '↩'],
    tools: ['Twilio', 'GPT-4o', 'Gmail', 'Google Calendar', 'n8n'],
    timeSaved: '40% fewer no-shows',
    steps: ['Appointment created in booking system', 'Wait until 48 hours before appointment', 'GPT-4o writes personalised reminder', 'Send via SMS (Twilio) + email (Gmail)', 'Check for response after 4 hours', 'No response: send reschedule prompt / Confirmed: update calendar'],
    buildTime: '1–2 week sprint',
  },
  {
    id: 9, industry: 'HealthTech', industryColor: '#F87171',
    title: 'Clinical Notes Summariser',
    description: 'Doctor completes consultation → audio uploaded → Whisper transcribes → GPT-4o structures into SOAP note → human review → push to EHR',
    nodes: ['Audio Upload', 'Whisper', 'GPT-4o', 'Review', 'EHR Push'],
    nodeEmojis: ['🎙️', '📝', '🤖', '👩‍⚕️', '🏥'],
    nodeBgs: ['#6366F1', '#10A37F', '#10A37F', '#F87171', '#34D399'],
    nodeShorts: ['MIC', 'WSP', 'AI', 'DR', 'EHR'],
    tools: ['OpenAI Whisper', 'GPT-4o', 'EHR API', 'n8n'],
    timeSaved: '45 min/day per doctor',
    steps: ['Doctor uploads audio recording of consultation', 'Whisper API transcribes audio to text', 'GPT-4o structures transcript into SOAP note format', 'Doctor reviews and approves in lightweight UI', 'Approved note pushed directly to EHR system'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 32, industry: 'HealthTech', industryColor: '#F87171',
    title: 'Prior Authorization Automation',
    description: 'Doctor submits auth request → AI extracts clinical data → checks payer rules database → auto-submits to insurance → tracks status → alerts team',
    nodes: ['Auth Request', 'AI Extract', 'Payer Rules', 'Submit', 'Track'],
    nodeEmojis: ['📋', '🤖', '📖', '📤', '🔄'],
    nodeBgs: ['#6366F1', '#10A37F', '#F87171', '#EA4335', '#FBBF24'],
    nodeShorts: ['RX', 'AI', '📖', 'SND', '📡'],
    tools: ['GPT-4o', 'n8n', 'Availity API', 'EHR API', 'Slack'],
    timeSaved: '4 hrs/day per practice',
    steps: ['Doctor submits prior auth request via EHR or web form', 'GPT-4o extracts diagnosis codes, procedure codes, clinical notes', 'Check payer rules database for coverage criteria', 'Auto-submit structured prior auth request via Availity API', 'Poll for insurance decision every 4 hours', 'Alert care team on approval or denial via Slack'],
    buildTime: '4–6 week sprint',
  },
  {
    id: 33, industry: 'HealthTech', industryColor: '#F87171',
    title: 'Medication Refill Agent',
    description: 'Prescription due → AI checks eligibility + refill rules → sends refill request to pharmacy → patient confirmation SMS → updates EHR automatically',
    nodes: ['Rx Due', 'Eligibility', 'Pharmacy Request', 'Patient SMS', 'EHR Update'],
    nodeEmojis: ['💊', '✅', '🏥', '📱', '🔄'],
    nodeBgs: ['#F87171', '#22C55E', '#10A37F', '#F22F46', '#34D399'],
    nodeShorts: ['RX', '✓', 'PH', 'SMS', 'EHR'],
    tools: ['n8n', 'GPT-4o', 'Pharmacy API', 'Twilio', 'EHR API'],
    timeSaved: '15 min → 90 sec',
    steps: ['Cron trigger identifies prescriptions due for refill in next 7 days', 'AI checks patient eligibility and refill count rules', 'Auto-send refill request to preferred pharmacy via API', 'Patient receives SMS confirmation with pickup time', 'EHR updated with refill date and pharmacy confirmation', 'Exceptions (out of stock, prior auth needed) escalated to care team'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 34, industry: 'HealthTech', industryColor: '#F87171',
    title: 'Lab Results Notification',
    description: 'Lab results arrive → AI interprets values → classifies normal/borderline/critical → personalised patient message drafted → doctor alerted if critical',
    nodes: ['Lab Result', 'AI Interpret', 'Classify', 'Patient Message', 'Doctor Alert'],
    nodeEmojis: ['🧪', '🤖', '⚖️', '📱', '👨‍⚕️'],
    nodeBgs: ['#6366F1', '#10A37F', '#FBBF24', '#34D399', '#F87171'],
    nodeShorts: ['LAB', 'AI', '⚖', 'MSG', 'DR'],
    tools: ['GPT-4o', 'n8n', 'Twilio', 'EHR API', 'Gmail'],
    timeSaved: '3 hrs/day admin',
    steps: ['Lab results received via HL7 feed or EHR webhook', 'GPT-4o interprets each result value against reference ranges', 'Classify: Normal / Borderline / Critical', 'GPT-4o drafts personalised patient message in plain language', 'Send via patient portal message or SMS', 'Critical results: immediately alert ordering physician via SMS + EHR flag'],
    buildTime: '3–4 week sprint',
  },
  // SAAS & B2B
  {
    id: 10, industry: 'SaaS & B2B', industryColor: '#60A5FA',
    title: 'Manual Approval Workflow Automation',
    description: 'Request submitted → AI classifies type → routes to correct approver → auto-drafts decision message → sends decision → logs to Airtable',
    nodes: ['Form Submit', 'AI Classify', 'Route', 'Draft', 'Send'],
    nodeEmojis: ['📋', '🤖', '🔀', '✏️', '📤'],
    nodeBgs: ['#6366F1', '#10A37F', '#FBBF24', '#60A5FA', '#EA4335'],
    nodeShorts: ['FRM', 'AI', '→', '✏', 'SND'],
    tools: ['n8n', 'GPT-4o', 'Slack', 'Airtable', 'Gmail'],
    timeSaved: '15 hrs/week',
    steps: ['Request submitted via intake form', 'GPT-4o classifies request type (budget, HR, legal, IT)', 'Route to correct approver based on type + amount', 'GPT-4o drafts approval/rejection message for review', 'Send decision to requestor', 'Log outcome to Airtable'],
    buildTime: '1–2 week sprint',
  },
  {
    id: 11, industry: 'SaaS & B2B', industryColor: '#60A5FA',
    title: 'AI Customer Support Deflection',
    description: 'Support ticket → RAG pipeline searches knowledge base → GPT-4o drafts response → confidence check → auto-send or human queue → CSAT',
    nodes: ['Ticket', 'RAG Search', 'GPT-4o Draft', 'Confidence?', 'Send/Queue'],
    nodeEmojis: ['🎫', '🔍', '🤖', '📊', '📤'],
    nodeBgs: ['#6366F1', '#8B5CF6', '#10A37F', '#FBBF24', '#EA4335'],
    nodeShorts: ['TKT', 'RAG', 'AI', '%', 'SND'],
    tools: ['LangChain', 'Pinecone', 'GPT-4o', 'Zendesk', 'n8n'],
    timeSaved: '70% tickets deflected',
    steps: ['Support ticket arrives via email or Zendesk', 'RAG pipeline searches knowledge base and docs', 'GPT-4o drafts context-aware response', 'Confidence scoring: high or low?', 'High: auto-send / Low: route to human queue with draft', 'CSAT follow-up sent 24hrs after resolution'],
    buildTime: '3–4 week sprint',
  },
  {
    id: 12, industry: 'SaaS & B2B', industryColor: '#60A5FA',
    title: 'Churn Risk Detection & Outreach',
    description: 'Daily usage pull → AI scores churn risk per account → high-risk flagged → personalised outreach email drafted → CSM notified → CRM log',
    nodes: ['Daily Trigger', 'Usage Pull', 'AI Score', 'Flag Risk', 'Draft Email'],
    nodeEmojis: ['⏰', '📊', '🤖', '⚠️', '✉️'],
    nodeBgs: ['#FF4F00', '#60A5FA', '#10A37F', '#EF4444', '#EA4335'],
    nodeShorts: ['CRN', 'DB', 'AI', '⚠', '✉'],
    tools: ['GPT-4o', 'Python', 'HubSpot', 'Gmail', 'n8n'],
    timeSaved: '3 hrs/day CSM time',
    steps: ['Daily trigger fires at 6am', 'Pull usage metrics per account from product database', 'AI churn risk model scores each account (0–100)', 'Flag accounts scoring >70 as high risk', 'GPT-4o drafts personalised outreach email per account', 'Log risk scores and outreach status to HubSpot'],
    buildTime: '3–4 week sprint',
  },
  {
    id: 35, industry: 'SaaS & B2B', industryColor: '#60A5FA',
    title: 'Lead Scoring & Enrichment',
    description: 'New lead enters CRM → Clearbit enriches firmographic data → AI scores ICP fit + intent signals → route to correct rep → personalised outreach drafted',
    nodes: ['New Lead', 'Clearbit', 'AI Score', 'Route', 'Draft Outreach'],
    nodeEmojis: ['👤', '💡', '🤖', '🔀', '✉️'],
    nodeBgs: ['#60A5FA', '#0F172A', '#10A37F', '#FBBF24', '#EA4335'],
    nodeShorts: ['LD', 'CB', 'AI', '→', '✉'],
    tools: ['HubSpot', 'Clearbit', 'GPT-4o', 'n8n', 'Gmail'],
    timeSaved: '2 hrs/day SDR time',
    steps: ['New lead created in HubSpot via form, LinkedIn, or import', 'Clearbit Enrichment appends company size, revenue, tech stack, LinkedIn', 'AI ICP fit scoring: does company match ideal customer profile?', 'Intent signal scoring: recent job posts, tech changes, news events', 'Route high-fit leads to senior AE; low-fit to nurture sequence', 'GPT-4o drafts personalised outreach email referencing their tech stack'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 36, industry: 'SaaS & B2B', industryColor: '#60A5FA',
    title: 'Contract Renewal Automation',
    description: '90 days before renewal → pull usage data → AI drafts renewal proposal → send to champion → track email opens → CSM alerted at each stage',
    nodes: ['90 Day Trigger', 'Usage Pull', 'AI Draft', 'Send Proposal', 'Track'],
    nodeEmojis: ['⏰', '📊', '🤖', '📤', '📧'],
    nodeBgs: ['#FF4F00', '#60A5FA', '#10A37F', '#EA4335', '#FBBF24'],
    nodeShorts: ['90d', 'DB', 'AI', 'SND', '📧'],
    tools: ['HubSpot', 'n8n', 'GPT-4o', 'Gmail', 'Mixpanel'],
    timeSaved: '4 hrs/renewal',
    steps: ['90-day trigger fires for all contracts expiring in next quarter', 'Pull customer usage metrics from Mixpanel: DAU, feature adoption, seats', 'AI generates renewal proposal with upsell recommendation based on usage', 'CSM reviews and approves proposal in Slack (one click)', 'Gmail sends branded proposal PDF to economic buyer + champion', 'Track email opens and link clicks; alert CSM at each engagement event'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 37, industry: 'SaaS & B2B', industryColor: '#60A5FA',
    title: 'Product Feedback Loop',
    description: 'NPS/support response received → AI classifies sentiment + product category → routes to product team → auto-creates Jira ticket → closes loop with customer',
    nodes: ['Feedback In', 'AI Classify', 'Route', 'Jira Ticket', 'Close Loop'],
    nodeEmojis: ['💬', '🤖', '🔀', '🎫', '✅'],
    nodeBgs: ['#60A5FA', '#10A37F', '#FBBF24', '#0052CC', '#22C55E'],
    nodeShorts: ['FB', 'AI', '→', 'JRA', '✓'],
    tools: ['Typeform', 'GPT-4o', 'n8n', 'Jira', 'Gmail'],
    timeSaved: '5 hrs/week PM time',
    steps: ['NPS response or support ticket received via Typeform or Zendesk', 'GPT-4o classifies: sentiment (positive/neutral/negative) + product area', 'Route to correct product squad channel in Slack', 'Auto-create Jira ticket with customer quote, sentiment score, account tier', 'Product manager triages and prioritises in next sprint planning', 'Auto-send customer follow-up: Thanks for your feedback, here is what we are building'],
    buildTime: '1–2 week sprint',
  },
  // ECOMMERCE
  {
    id: 13, industry: 'E-Commerce', industryColor: '#FBBF24',
    title: 'AI Customer Service Chatbot',
    description: 'Customer message → intent classifier → RAG searches product/policy docs → GPT-4o response → sentiment check → send or escalate',
    nodes: ['Message', 'Intent', 'RAG Search', 'GPT-4o', 'Send/Escalate'],
    nodeEmojis: ['💬', '🎯', '🔍', '🤖', '📤'],
    nodeBgs: ['#60A5FA', '#FBBF24', '#8B5CF6', '#10A37F', '#22C55E'],
    nodeShorts: ['MSG', 'INT', 'RAG', 'AI', 'SND'],
    tools: ['GPT-4o', 'LangChain', 'Pinecone', 'Shopify API', 'n8n'],
    timeSaved: '70% queries deflected',
    steps: ['Customer message received via chat widget', 'Intent classifier identifies query type', 'RAG pipeline searches product catalog and policy docs', 'GPT-4o generates accurate, contextual response', 'Sentiment analysis on drafted response', 'Positive: send / Negative: escalate to human agent'],
    buildTime: '3–4 week sprint',
  },
  {
    id: 14, industry: 'E-Commerce', industryColor: '#FBBF24',
    title: 'Dynamic Inventory Alerting',
    description: 'Hourly stock check → AI forecasts demand based on sales velocity → low stock predicted → auto-raise PO draft → notify procurement',
    nodes: ['Hourly Check', 'Stock Pull', 'AI Forecast', 'Draft PO', 'Notify'],
    nodeEmojis: ['⏰', '📦', '🤖', '📋', '🔔'],
    nodeBgs: ['#FF4F00', '#96BF48', '#10A37F', '#FBBF24', '#EA4335'],
    nodeShorts: ['CRN', 'SHP', 'AI', 'PO', '🔔'],
    tools: ['Shopify API', 'GPT-4o', 'Google Sheets', 'Gmail', 'n8n'],
    timeSaved: '5 hrs/week',
    steps: ['Hourly trigger fires', 'Pull current stock levels from Shopify', 'AI demand forecasting model runs on sales velocity', 'Low stock predicted in next 7 days? Draft PO.', 'Auto-draft purchase order in Google Sheets', 'Notify procurement team via email'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 15, industry: 'E-Commerce', industryColor: '#FBBF24',
    title: 'Abandoned Cart Recovery Agent',
    description: 'Cart abandoned → wait 1hr → AI generates personalised recovery email → send → no purchase in 24hr → SMS with discount → analytics log',
    nodes: ['Cart Abandoned', 'Wait 1hr', 'AI Email', 'Send', 'SMS Fallback'],
    nodeEmojis: ['🛒', '⏰', '🤖', '📧', '📱'],
    nodeBgs: ['#96BF48', '#FF4F00', '#10A37F', '#EA4335', '#F22F46'],
    nodeShorts: ['🛒', '1HR', 'AI', '✉', 'SMS'],
    tools: ['Shopify API', 'GPT-4o', 'Klaviyo', 'Twilio', 'n8n'],
    timeSaved: '15% revenue recovery',
    steps: ['Cart abandonment event fires from Shopify', 'Wait 1 hour (grace period)', 'GPT-4o generates personalised recovery email with product details', 'Send email via Klaviyo', 'Check for purchase after 24 hours', 'No purchase: send SMS via Twilio with discount code'],
    buildTime: '1–2 week sprint',
  },
  {
    id: 38, industry: 'E-Commerce', industryColor: '#FBBF24',
    title: 'Returns & Refunds Automation',
    description: 'Return request submitted → AI validates against return policy → auto-approve or flag → generate return label → update inventory → trigger refund',
    nodes: ['Return Request', 'Policy Check', 'Approve?', 'Return Label', 'Refund'],
    nodeEmojis: ['📦', '📖', '✅', '🏷️', '💰'],
    nodeBgs: ['#96BF48', '#FBBF24', '#22C55E', '#FB923C', '#635BFF'],
    nodeShorts: ['RTN', '📖', '✓', 'LBL', '$'],
    tools: ['Shopify API', 'GPT-4o', 'n8n', 'EasyPost', 'Stripe'],
    timeSaved: '80% handled automatically',
    steps: ['Customer submits return request via Shopify returns portal', 'AI checks request against return policy rules (30 days, condition, category)', 'Within-policy: auto-approve; edge case: route to human review queue', 'EasyPost API generates pre-paid return label, emailed to customer', 'Inventory system updated: item marked as in-transit on return', 'On label scan at warehouse: Stripe refund triggered automatically'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 39, industry: 'E-Commerce', industryColor: '#FBBF24',
    title: 'AI Product Description Generator',
    description: 'New SKU added to catalog → AI writes SEO-optimised product description + bullet points → quality score check → auto-push to Shopify → A/B variant created',
    nodes: ['New SKU', 'AI Write', 'SEO Score', 'Review Gate', 'Publish'],
    nodeEmojis: ['📦', '🤖', '📊', '✅', '🚀'],
    nodeBgs: ['#96BF48', '#10A37F', '#FBBF24', '#22C55E', '#F65B2B'],
    nodeShorts: ['SKU', 'AI', 'SEO', '✓', '→'],
    tools: ['Shopify API', 'GPT-4o', 'n8n', 'Google Search Console', 'Airtable'],
    timeSaved: '45 min → 3 min per SKU',
    steps: ['New product added to Shopify triggers n8n webhook', 'GPT-4o receives: product name, category, specs, brand voice guidelines', 'Generates: 200-word description, 5 bullet points, meta title, meta description', 'SEO scoring checks: keyword density, readability, character limits', 'Score above threshold: auto-publish to Shopify. Below: flag for human edit', 'Second GPT-4o call generates A/B variant description for split testing'],
    buildTime: '1–2 week sprint',
  },
  {
    id: 40, industry: 'E-Commerce', industryColor: '#FBBF24',
    title: 'Influencer Outreach Automation',
    description: 'Influencer identified → AI scores brand fit → personalised outreach drafted → email sent → response tracked → follow-up sequenced → tagged in CRM',
    nodes: ['Identify', 'AI Score', 'Draft Outreach', 'Send', 'Track Response'],
    nodeEmojis: ['📸', '🤖', '✉️', '📤', '📊'],
    nodeBgs: ['#833AB4', '#10A37F', '#EA4335', '#FBBF24', '#60A5FA'],
    nodeShorts: ['IG', 'AI', '✉', 'SND', '📊'],
    tools: ['Instagram API', 'GPT-4o', 'n8n', 'Gmail', 'HubSpot'],
    timeSaved: '8 hrs/campaign',
    steps: ['Influencer profile identified via Instagram API or manual import', 'AI scores: follower count, engagement rate, audience overlap, brand alignment', 'GPT-4o drafts personalised outreach referencing specific posts and shared values', 'Send via Gmail with tracked link; log contact in HubSpot', 'Monitor for reply; if no response in 5 days: send follow-up sequence', 'Positive response: route to partnerships manager with full context'],
    buildTime: '2–3 week sprint',
  },
  // LEGALTECH
  {
    id: 16, industry: 'LegalTech', industryColor: '#F472B6',
    title: 'Contract Review Automation',
    description: 'Contract uploaded → GPT-4o Vision extracts clauses → AI risk classifier → flags non-standard terms → redline summary → lawyer review',
    nodes: ['Upload', 'GPT-4o Extract', 'Risk Classify', 'Flag Terms', 'Redline'],
    nodeEmojis: ['📄', '👁️', '🤖', '⚠️', '📝'],
    nodeBgs: ['#6366F1', '#10A37F', '#EF4444', '#FBBF24', '#F472B6'],
    nodeShorts: ['PDF', 'AI', '⚖', '⚠', 'RL'],
    tools: ['GPT-4o Vision', 'Python', 'LangChain', 'DocuSign', 'n8n'],
    timeSaved: '6 hrs → 25 min',
    steps: ['Contract uploaded via secure portal', 'GPT-4o Vision extracts all clauses and key terms', 'AI risk classifier scores each clause', 'Flag non-standard terms with specific risk notes', 'Generate formatted redline summary document', 'Route to lawyer for final review before client delivery'],
    buildTime: '3–4 week sprint',
  },
  {
    id: 17, industry: 'LegalTech', industryColor: '#F472B6',
    title: 'Client Matter Intake Automation',
    description: 'New client enquiry → AI extracts case details → conflict check → matter opened → engagement letter drafted → signed via DocuSign',
    nodes: ['Enquiry', 'AI Extract', 'Conflict Check', 'Open Matter', 'DocuSign'],
    nodeEmojis: ['📧', '🤖', '⚖️', '📂', '✍️'],
    nodeBgs: ['#60A5FA', '#10A37F', '#EF4444', '#2563EB', '#FFA500'],
    nodeShorts: ['ENQ', 'AI', '⚖', 'MТR', 'DS'],
    tools: ['GPT-4o', 'n8n', 'Clio', 'DocuSign', 'Gmail'],
    timeSaved: '4 hrs/matter',
    steps: ['New client enquiry received via email or web form', 'GPT-4o extracts case type, parties, key facts', 'Automated conflict check against existing client database', 'Open new matter in Clio practice management', 'GPT-4o drafts engagement letter from template', 'Auto-send for e-signature via DocuSign'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 18, industry: 'LegalTech', industryColor: '#F472B6',
    title: 'Deposition Summary AI',
    description: 'Deposition transcript uploaded → Whisper transcribes → GPT-4o extracts key admissions + contradictions → structured summary → attorney review',
    nodes: ['Audio/PDF', 'Whisper', 'GPT-4o', 'Extract', 'Summary'],
    nodeEmojis: ['📄', '🎙️', '🤖', '🔍', '📋'],
    nodeBgs: ['#6366F1', '#10A37F', '#10A37F', '#FBBF24', '#F472B6'],
    nodeShorts: ['AUD', 'WSP', 'AI', 'EXT', 'SUM'],
    tools: ['OpenAI Whisper', 'GPT-4o', 'Python', 'n8n', 'Google Docs'],
    timeSaved: '3 hrs → 20 min',
    steps: ['Deposition audio or transcript uploaded', 'Whisper transcribes audio to text (if audio)', 'GPT-4o reads full transcript', 'Extract: key admissions, contradictions, important quotes', 'Generate structured deposition summary with timestamps', 'Attorney reviews and exports to Google Docs'],
    buildTime: '2 week sprint',
  },
  {
    id: 41, industry: 'LegalTech', industryColor: '#F472B6',
    title: 'NDA Generation & E-Signing',
    description: 'NDA request submitted → AI populates standard template with party details → review gate → DocuSign envelope sent → signed copy auto-filed in Notion',
    nodes: ['NDA Request', 'AI Populate', 'Review Gate', 'DocuSign', 'File in Notion'],
    nodeEmojis: ['📋', '🤖', '✅', '✍️', '📂'],
    nodeBgs: ['#6366F1', '#10A37F', '#22C55E', '#FFA500', '#3D3D3D'],
    nodeShorts: ['REQ', 'AI', '✓', 'DS', 'N'],
    tools: ['Typeform', 'GPT-4o', 'n8n', 'DocuSign', 'Notion'],
    timeSaved: '45 min → 8 min',
    steps: ['NDA request submitted via Typeform: counterparty name, entity type, scope', 'GPT-4o populates master NDA template with all party-specific details', 'Legal team receives Slack notification to review populated NDA (one-click approve)', 'DocuSign envelope created and sent to both parties simultaneously', 'Track signing status; send reminders at 24hr and 48hr if unsigned', 'Fully executed NDA auto-filed in Notion under correct client workspace'],
    buildTime: '1–2 week sprint',
  },
  {
    id: 42, industry: 'LegalTech', industryColor: '#F472B6',
    title: 'Legal Research Assistant',
    description: 'Case question submitted → AI searches case law databases → extracts relevant precedents → ranks by relevance + jurisdiction → structured memo to attorney',
    nodes: ['Case Question', 'Search', 'Extract', 'Rank', 'Research Memo'],
    nodeEmojis: ['❓', '🔍', '🤖', '⚖️', '📋'],
    nodeBgs: ['#6366F1', '#1E40AF', '#10A37F', '#FBBF24', '#F472B6'],
    nodeShorts: ['Q', 'SRH', 'AI', '⚖', 'MEM'],
    tools: ['GPT-4o', 'LangChain', 'Westlaw API', 'n8n', 'Google Docs'],
    timeSaved: '6 hrs → 45 min',
    steps: ['Attorney submits research question via internal portal or Slack command', 'GPT-4o decomposes question into search queries for each relevant legal area', 'LangChain RAG searches Westlaw API + internal case library simultaneously', 'AI extracts key holdings, dissents, and distinguishing factors from each case', 'Rank results by relevance score, jurisdiction, and recency', 'Generate structured research memo in Google Docs: question, findings, key cases, gaps'],
    buildTime: '3–4 week sprint',
  },
  {
    id: 43, industry: 'LegalTech', industryColor: '#F472B6',
    title: 'Billing & Time Entry Automation',
    description: 'Activity completed → AI converts notes to billable time entry → checks hourly rate + matter → validates against budget → adds to invoice draft → partner approval',
    nodes: ['Activity Note', 'AI Convert', 'Rate Check', 'Add to Invoice', 'Approve'],
    nodeEmojis: ['📝', '🤖', '💰', '📊', '✅'],
    nodeBgs: ['#6366F1', '#10A37F', '#FBBF24', '#F472B6', '#22C55E'],
    nodeShorts: ['NOTE', 'AI', '$', 'INV', '✓'],
    tools: ['GPT-4o', 'n8n', 'Clio', 'Google Sheets', 'Slack'],
    timeSaved: '1 hr/day per attorney',
    steps: ['Attorney logs brief activity note: Reviewed contract, call with client, drafted motion', 'GPT-4o converts notes into formatted time entries with task descriptions and duration', 'Check applicable hourly rate for attorney level and matter type', 'Validate total against matter budget; flag if approaching cap', 'Auto-add entries to monthly invoice draft in Clio', 'Partner receives Slack summary for one-click approval before billing runs'],
    buildTime: '2–3 week sprint',
  },
  // PROPTECH
  {
    id: 19, industry: 'PropTech', industryColor: '#2DD4BF',
    title: 'AI Lead Qualification & Routing',
    description: 'New enquiry → AI scores lead quality → classifies property preference → routes to specialist agent → auto-sends property matches → CRM log',
    nodes: ['Enquiry', 'AI Score', 'Classify', 'Route Agent', 'Match'],
    nodeEmojis: ['🏠', '🤖', '🏷️', '👤', '🔍'],
    nodeBgs: ['#6366F1', '#10A37F', '#FBBF24', '#2DD4BF', '#60A5FA'],
    nodeShorts: ['ENQ', 'AI', '⊞', '→', '🏠'],
    tools: ['GPT-4o', 'n8n', 'HubSpot', 'MLS API', 'Gmail'],
    timeSaved: '2 hrs/day',
    steps: ['New property enquiry received', 'AI lead scoring model runs (budget fit, intent signals, timeline)', 'Classify by property type, location, budget range', 'Route to specialist agent based on classification', 'Auto-pull matching properties from MLS API, send to lead', 'Log lead score and assignment to HubSpot'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 20, industry: 'PropTech', industryColor: '#2DD4BF',
    title: 'Tenant Screening Automation',
    description: 'Application submitted → AI verifies employment + income → credit check → reference check automated → risk score → decision → notify applicant',
    nodes: ['Application', 'Income Verify', 'Credit Check', 'References', 'Decision'],
    nodeEmojis: ['📋', '💼', '🏦', '📧', '✅'],
    nodeBgs: ['#6366F1', '#22C55E', '#EF4444', '#60A5FA', '#22C55E'],
    nodeShorts: ['APP', 'INC', 'CB', 'REF', '✓'],
    tools: ['GPT-4o', 'n8n', 'Stripe', 'Gmail', 'Python'],
    timeSaved: '3 days → 4 hrs',
    steps: ['Tenant application submitted online', 'AI verifies employment and income documents', 'Automated credit check via API', 'Auto-send reference check emails, parse responses', 'AI risk scoring model generates overall tenant risk score', 'Auto-generate approve/decline letter, notify applicant'],
    buildTime: '3–4 week sprint',
  },
  {
    id: 21, industry: 'PropTech', industryColor: '#2DD4BF',
    title: 'Maintenance Request Triage',
    description: 'Tenant submits request → AI classifies urgency + trade → routes to contractor → auto-schedules → tracks completion → tenant SMS update',
    nodes: ['Request', 'AI Classify', 'Route', 'Schedule', 'Update'],
    nodeEmojis: ['🔧', '🤖', '👷', '📅', '📱'],
    nodeBgs: ['#FB923C', '#10A37F', '#FBBF24', '#4285F4', '#F22F46'],
    nodeShorts: ['REQ', 'AI', '→', 'CAL', 'SMS'],
    tools: ['GPT-4o', 'n8n', 'Twilio', 'Google Calendar', 'Airtable'],
    timeSaved: '1 hr/request',
    steps: ['Tenant submits maintenance request via app or SMS', 'AI classifies urgency (emergency/urgent/routine) and trade', 'Route to correct contractor from approved list', 'Auto-schedule via Google Calendar, confirm with contractor', 'Track job completion status in Airtable', 'SMS tenant with confirmation and completion update'],
    buildTime: '2 week sprint',
  },
  {
    id: 44, industry: 'PropTech', industryColor: '#2DD4BF',
    title: 'Lease Renewal Automation',
    description: '60 days before lease expiry → pull tenant data + payment history → AI drafts personalised renewal offer → send via email → track response → update PMS',
    nodes: ['60 Day Trigger', 'Tenant Data', 'AI Draft Offer', 'Send', 'Update PMS'],
    nodeEmojis: ['⏰', '📋', '🤖', '📧', '🔄'],
    nodeBgs: ['#FF4F00', '#2DD4BF', '#10A37F', '#EA4335', '#4285F4'],
    nodeShorts: ['60d', 'DATA', 'AI', '✉', 'PMS'],
    tools: ['n8n', 'Buildium API', 'GPT-4o', 'Gmail', 'Google Sheets'],
    timeSaved: '3 hrs/property/month',
    steps: ['Trigger fires 60 days before each lease expiry date', 'Pull tenant profile: payment history, maintenance requests, tenure, current rent', 'AI drafts personalised renewal offer: market rent analysis, loyalty discount if applicable', 'Send branded renewal email with digital signature link', 'Track email open + response; send follow-up at day 7 if no response', 'Update property management system with renewal status and new lease terms'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 45, industry: 'PropTech', industryColor: '#2DD4BF',
    title: 'Property Listing Optimizer',
    description: 'New listing added → AI writes compelling description + SEO headline → pulls comparable sales data → suggests optimal price → pushes to Zillow, MLS, website',
    nodes: ['New Listing', 'Comps Pull', 'AI Write', 'Price Suggest', 'Publish'],
    nodeEmojis: ['🏠', '📊', '🤖', '💰', '🚀'],
    nodeBgs: ['#2DD4BF', '#4285F4', '#10A37F', '#FBBF24', '#22C55E'],
    nodeShorts: ['LST', 'COMP', 'AI', '$', '→'],
    tools: ['GPT-4o', 'n8n', 'MLS API', 'Zillow API', 'Google Sheets'],
    timeSaved: '3 hrs per listing',
    steps: ['New property listing created triggers n8n workflow', 'Pull 10 comparable sales from MLS API: same zip, bed/bath, sqft, sold in 90 days', 'AI analyses comps and generates optimal price range with confidence score', 'GPT-4o writes: 300-word listing description, catchy headline, 5 key highlights', 'Agent reviews and approves in Slack (one click)', 'Auto-publish to Zillow via API, MLS via RETS feed, and agency website CMS'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 46, industry: 'PropTech', industryColor: '#2DD4BF',
    title: 'Rental Income Reconciliation',
    description: 'Monthly: pull rent payments → match against lease agreements → flag arrears automatically → send overdue reminders → generate landlord income report',
    nodes: ['Monthly Trigger', 'Payments Pull', 'Match Leases', 'Flag Arrears', 'Landlord Report'],
    nodeEmojis: ['⏰', '💳', '📋', '⚠️', '📊'],
    nodeBgs: ['#FF4F00', '#635BFF', '#2DD4BF', '#EF4444', '#FBBF24'],
    nodeShorts: ['CRN', 'PAY', '📋', '⚠', 'RPT'],
    tools: ['n8n', 'Buildium API', 'Plaid', 'Twilio', 'Google Sheets'],
    timeSaved: '4 hrs/month per portfolio',
    steps: ['Monthly trigger fires on the 2nd of each month', 'Pull all rent payments received in previous month via Buildium API', 'Match each payment against corresponding lease agreement and expected amount', 'Flag arrears: partial payments, missed payments, late payments', 'Auto-send personalised SMS reminder to tenants with outstanding balance', 'Generate monthly income report per landlord: total collected, arrears, upcoming renewals'],
    buildTime: '2 week sprint',
  },
  // LOGISTICS
  {
    id: 22, industry: 'Logistics', industryColor: '#FB923C',
    title: 'AI Shipment Exception Handler',
    description: 'Delay detected → AI classifies exception → notifies customer with ETA → raises carrier claim if needed → updates order management → logs',
    nodes: ['Delay Alert', 'AI Classify', 'Notify Customer', 'Carrier Claim?', 'Update OMS'],
    nodeEmojis: ['🚨', '🤖', '📧', '📋', '🔄'],
    nodeBgs: ['#EF4444', '#10A37F', '#60A5FA', '#FBBF24', '#FB923C'],
    nodeShorts: ['⚠', 'AI', '✉', 'CLM', 'OMS'],
    tools: ['GPT-4o', 'n8n', 'Twilio', 'Carrier APIs', 'Shopify'],
    timeSaved: '4 hrs/day ops team',
    steps: ['Shipment delay or exception detected via carrier API', 'AI classifies exception type (weather, lost, customs, damage)', 'Auto-draft contextual customer notification with new ETA', 'Raise carrier claim automatically if threshold exceeded', 'Update order status in OMS / Shopify', 'Log exception type, resolution, and customer comms'],
    buildTime: '3–4 week sprint',
  },
  {
    id: 23, industry: 'Logistics', industryColor: '#FB923C',
    title: 'Freight Quote Automation',
    description: 'Quote request → AI extracts shipment details → query 5 carrier APIs in parallel → AI ranks by cost/speed/reliability → formatted quote in 2 min',
    nodes: ['Quote Request', 'AI Extract', 'Carrier APIs', 'AI Rank', 'Send'],
    nodeEmojis: ['📋', '🤖', '🚢', '⚖️', '📤'],
    nodeBgs: ['#6366F1', '#10A37F', '#FB923C', '#FBBF24', '#EA4335'],
    nodeShorts: ['REQ', 'AI', '🚢', '⚖', 'SND'],
    tools: ['GPT-4o', 'n8n', 'Carrier APIs', 'Gmail', 'Google Sheets'],
    timeSaved: '45 min → 2 min',
    steps: ['Quote request received via email or form', 'GPT-4o extracts: origin, destination, weight, dimensions, timeline', 'Query 5 carrier APIs simultaneously (FedEx, UPS, DHL, etc.)', 'AI ranks options by weighted score: cost, speed, reliability', 'Generate formatted quote comparison document', 'Auto-send to customer within 2 minutes of request'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 24, industry: 'Logistics', industryColor: '#FB923C',
    title: 'Driver Route Optimisation Alerts',
    description: 'Daily: pull orders → AI optimises delivery routes → assign drivers → push to driver app → real-time monitoring → ETA updates to customers',
    nodes: ['Daily Orders', 'AI Optimise', 'Assign', 'Push Routes', 'Monitor'],
    nodeEmojis: ['📦', '🤖', '👤', '📱', '📡'],
    nodeBgs: ['#FB923C', '#10A37F', '#FBBF24', '#60A5FA', '#F22F46'],
    nodeShorts: ['ORD', 'AI', '→', 'APP', '📡'],
    tools: ['GPT-4o', 'Python', 'Google Maps API', 'n8n', 'Twilio'],
    timeSaved: '25% fuel cost reduction',
    steps: ['Pull all orders for the day at 6am', 'AI route optimisation algorithm runs', 'Assign optimised routes to available drivers', 'Push route to driver mobile app', 'Real-time monitoring: flag exceptions (delays, failed deliveries)', 'Auto-send ETA updates to customers via SMS'],
    buildTime: '4–6 week sprint',
  },
  {
    id: 47, industry: 'Logistics', industryColor: '#FB923C',
    title: 'Customs Documentation AI',
    description: 'International shipment created → AI extracts product details → generates customs declaration → validates HS codes → submits to customs portal → tracks clearance',
    nodes: ['Shipment Created', 'AI Extract', 'HS Code Check', 'Submit', 'Track Clearance'],
    nodeEmojis: ['📦', '🤖', '🔍', '📤', '🌐'],
    nodeBgs: ['#FB923C', '#10A37F', '#1E40AF', '#EA4335', '#22C55E'],
    nodeShorts: ['SHP', 'AI', 'HS', 'SND', '📡'],
    tools: ['GPT-4o', 'n8n', 'WCO API', 'Customs Portal API', 'Gmail'],
    timeSaved: '2 hrs/international shipment',
    steps: ['International shipment order created in OMS triggers workflow', 'GPT-4o extracts: product description, materials, weight, value, country of origin', 'Validate HS code classification against WCO tariff database', 'Flag any restricted goods, sanctions violations, or missing certificates', 'Auto-submit customs declaration to destination country portal via API', 'Poll for customs clearance status; alert ops team on hold or clearance'],
    buildTime: '3–4 week sprint',
  },
  {
    id: 48, industry: 'Logistics', industryColor: '#FB923C',
    title: 'Carrier Performance Monitoring',
    description: 'Weekly: pull delivery data per carrier → AI scores reliability + cost + damage rates → flag underperformers → generate scorecard → procurement team notified',
    nodes: ['Weekly Trigger', 'Delivery Data', 'AI Score', 'Flag Poor', 'Scorecard'],
    nodeEmojis: ['⏰', '📊', '🤖', '⚠️', '📋'],
    nodeBgs: ['#FF4F00', '#FB923C', '#10A37F', '#EF4444', '#FBBF24'],
    nodeShorts: ['CRN', 'DATA', 'AI', '⚠', 'RPT'],
    tools: ['n8n', 'Carrier APIs', 'GPT-4o', 'Google Sheets', 'Slack'],
    timeSaved: '5 hrs/week ops',
    steps: ['Weekly trigger fires every Monday 6am', 'Pull delivery performance data from all carrier APIs: FedEx, UPS, DHL, regional carriers', 'AI scoring model runs per carrier: on-time rate, damage rate, cost per lb, claim resolution speed', 'Carriers scoring below threshold flagged with specific failure reasons', 'Generate formatted scorecard in Google Sheets with trend charts vs prior 4 weeks', 'Post scorecard summary to #procurement Slack channel with underperformer callouts'],
    buildTime: '2–3 week sprint',
  },
  {
    id: 49, industry: 'Logistics', industryColor: '#FB923C',
    title: 'Warehouse Receiving Automation',
    description: 'PO arrives at warehouse → AI reads barcode/manifest → matches against purchase order → flags discrepancies → updates inventory → notifies procurement team',
    nodes: ['PO Arrival', 'Scan/Read', 'PO Match', 'Flag Gaps', 'Update Inventory'],
    nodeEmojis: ['📦', '📷', '📋', '⚠️', '🔄'],
    nodeBgs: ['#FB923C', '#10A37F', '#FBBF24', '#EF4444', '#22C55E'],
    nodeShorts: ['PO', 'SCAN', '📋', '⚠', 'INV'],
    tools: ['GPT-4o Vision', 'n8n', 'WMS API', 'Google Sheets', 'Slack'],
    timeSaved: '3 hrs/receiving shift',
    steps: ['Purchase order arrives at warehouse dock', 'Warehouse staff scans barcode or uploads photo of packing manifest', 'GPT-4o Vision reads manifest: SKUs, quantities, lot numbers, expiry dates', 'AI matches scanned items against expected PO line by line', 'Discrepancies flagged: short shipments, wrong SKUs, damaged items documented', 'Inventory management system updated with received quantities; Slack alert sent to procurement'],
    buildTime: '2–3 week sprint',
  },
  // AD & MARKETING — extended
  {
    id: 25, industry: 'Ad & Marketing', industryColor: '#A78BFA',
    title: 'Automated AM Briefs & Client Reporting',
    description: 'GA4 + ad platform data → GPT-4o drafts weekly client reports + pushes daily synthesized Slack briefs to Account Managers covering meetings, tasks, and priority emails',
    nodes: ['GA4', 'Ad Platforms', 'n8n Merge', 'GPT-4o', 'Client Report', 'Slack Brief'],
    nodeEmojis: ['📊', '📱', '🔗', '🤖', '📄', '💬'],
    nodeBgs: ['#E37400', '#1877F2', '#F65B2B', '#10A37F', '#FBBC04', '#4A154B'],
    nodeShorts: ['GA4', 'ADS', '⚡', 'AI', 'SLD', '#'],
    tools: ['Google Analytics 4', 'GPT-4o', 'n8n', 'Google Slides', 'Slack', 'Gmail'],
    timeSaved: '8 hrs/week',
    steps: [
      'Daily: pull GA4 sessions, conversions, revenue by channel',
      'Pull ad platform data (Meta, Google, LinkedIn) in parallel',
      'n8n merges and normalises all data sources',
      'GPT-4o drafts client report narrative + AM daily brief',
      'Google Slides API builds weekly client report deck',
      'Gmail delivers client report; Slack posts AM brief',
    ],
    buildTime: '2–3 week sprint',
  },
  {
    id: 26, industry: 'Ad & Marketing', industryColor: '#A78BFA',
    title: 'Multi-Channel Inbound Dispatching',
    description: 'Instagram DMs + WhatsApp + Email → AI dispatcher instantly answers FAQs, qualifies prospects, and autonomously books meetings into your sales calendar',
    nodes: ['Instagram DM', 'WhatsApp', 'Email', 'AI Dispatcher', 'Qualify', 'Book Meeting'],
    nodeEmojis: ['📸', '💬', '📧', '🤖', '✅', '📅'],
    nodeBgs: ['#833AB4', '#25D366', '#4285F4', '#10A37F', '#FBBF24', '#006BFF'],
    nodeShorts: ['IG', 'WA', '✉', 'AI', '✓', 'CAL'],
    tools: ['Instagram API', 'WhatsApp Business API', 'GPT-4o', 'n8n', 'Calendly', 'HubSpot'],
    timeSaved: 'Zero lead leakage',
    steps: [
      'Messages arrive via Instagram DM, WhatsApp Business, and email',
      'n8n unifies all channels into single inbound queue',
      'AI dispatcher classifies: FAQ, lead, existing client, or spam',
      'FAQ: GPT-4o replies instantly in the same channel',
      'Lead: AI qualifies with 3 follow-up questions',
      'Qualified lead: Calendly link sent + HubSpot contact created',
    ],
    buildTime: '3–4 week sprint',
  },
  {
    id: 27, industry: 'Ad & Marketing', industryColor: '#A78BFA',
    title: 'White-Label Voice AI Agents',
    description: 'Customized conversational voice bots handle complex inbound calls with zero latency — resell to local SMB clients as a profitable recurring SaaS revenue stream',
    nodes: ['Inbound Call', 'Voice AI', 'Intent Detect', 'Response', 'CRM Log'],
    nodeEmojis: ['📞', '🎙️', '🎯', '💬', '💼'],
    nodeBgs: ['#F22F46', '#6B21A8', '#10A37F', '#22C55E', '#FF7A59'],
    nodeShorts: ['📞', 'EL', 'AI', '💬', 'CRM'],
    tools: ['Twilio', 'ElevenLabs', 'GPT-4o', 'n8n', 'HubSpot', 'Google Calendar'],
    timeSaved: '24/7 coverage',
    steps: [
      'Inbound call received via Twilio phone number',
      'ElevenLabs Voice AI answers with natural, branded voice',
      'GPT-4o detects intent: booking, FAQ, complaint, or transfer',
      'AI handles conversation: answers questions, qualifies caller',
      'Qualified: books appointment in Google Calendar automatically',
      'Call summary + transcript logged to HubSpot CRM',
    ],
    buildTime: '4–6 week sprint',
  },
  {
    id: 28, industry: 'Ad & Marketing', industryColor: '#A78BFA',
    title: 'CRM Ops Layer — Intelligent Data Hygiene',
    description: 'AI agents parse messy inbound requests, enforce strict naming conventions, and ensure pristine data hygiene before information ever enters your Salesforce or HubSpot instance',
    nodes: ['Inbound Request', 'AI Parser', 'Validate', 'Enrich', 'CRM Push'],
    nodeEmojis: ['📨', '🤖', '✅', '💡', '💼'],
    nodeBgs: ['#6366F1', '#10A37F', '#FBBF24', '#1E40AF', '#FF7A59'],
    nodeShorts: ['IN', 'AI', '✓', 'CB', 'CRM'],
    tools: ['GPT-4o', 'n8n', 'Clearbit', 'Salesforce', 'HubSpot', 'Slack'],
    timeSaved: '5 hrs/day ops',
    steps: [
      'Inbound request arrives: form, email, CSV upload, or API',
      'GPT-4o parses and standardises all fields',
      'Validation engine checks naming conventions and required fields',
      'Clearbit enriches contact with firmographic data',
      'Clean, enriched record pushed to Salesforce or HubSpot',
      'Slack alert for any records that failed validation',
    ],
    buildTime: '3–4 week sprint',
  },
]

const industries = ['All', 'Ad & Marketing', 'FinTech', 'HealthTech', 'SaaS & B2B', 'E-Commerce', 'LegalTech', 'PropTech', 'Logistics']

// ── Node Diagram ──────────────────────────────────────────────────────────────

function ColoredWorkflowDiagram({ nodes, nodeBgs, nodeShorts }: {
  nodes: string[]
  nodeBgs: string[]
  nodeShorts: string[]
}) {
  const size = 36
  const gap = 12
  const shown = Math.min(nodes.length, 6)
  const vbW = shown * size + (shown - 1) * gap + 16
  const vbH = size + 28

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${vbW} ${vbH}`}
      style={{ display: 'block', borderRadius: 10, background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0,0 0,6 6,3" fill="rgba(255,255,255,0.18)" />
        </marker>
      </defs>

      {Array.from({ length: shown }).map((_, i) => {
        const x = 8 + i * (size + gap)
        const cy = 8 + size / 2
        const bg = nodeBgs[i] ?? '#444'
        const short = nodeShorts[i] ?? '?'
        const label = (nodes[i]?.length ?? 0) > 8 ? nodes[i].substring(0, 7) + '…' : (nodes[i] ?? '')

        // detect if short is an emoji (non-ASCII) to use emoji font
        const isEmoji = /\p{Emoji}/u.test(short) && short.length <= 2
        const fontFamily = isEmoji
          ? 'Apple Color Emoji, Segoe UI Emoji, sans-serif'
          : 'Inter, Helvetica Neue, Arial, sans-serif'
        const fontSize = isEmoji ? 14 : (short.length >= 3 ? 8.5 : 11)

        return (
          <g key={i}>
            {/* Arrow connector */}
            {i < shown - 1 && (
              <line
                x1={x + size + 1}
                y1={cy}
                x2={x + size + gap - 2}
                y2={cy}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.2"
                markerEnd="url(#arr)"
              />
            )}

            {/* Colored node box */}
            <rect
              x={x} y={8}
              width={size} height={size}
              rx={7}
              fill={bg}
            />

            {/* Short text */}
            <text
              x={x + size / 2}
              y={cy + (isEmoji ? 5 : fontSize * 0.38)}
              textAnchor="middle"
              fontSize={fontSize}
              fontWeight={isEmoji ? '400' : '700'}
              fontFamily={fontFamily}
              fill="white"
            >
              {short}
            </text>

            {/* Label below */}
            <text
              x={x + size / 2}
              y={8 + size + 14}
              textAnchor="middle"
              fontSize="7"
              fill="rgba(255,255,255,0.38)"
              fontFamily="Inter, sans-serif"
            >
              {label}
            </text>
          </g>
        )
      })}

      {nodes.length > 6 && (
        <text
          x={vbW - 4}
          y={8 + size / 2 + 4}
          textAnchor="end"
          fontSize="8"
          fill="rgba(255,255,255,0.3)"
          fontFamily="Inter, sans-serif"
        >
          +{nodes.length - 6}
        </text>
      )}
    </svg>
  )
}

// ── Dark card diagram (black/grey/white theme, preview on first card) ─────────

function DarkCardDiagram({ nodes, nodeBgs, nodeShorts }: {
  nodes: string[]
  nodeBgs: string[]
  nodeShorts: string[]
}) {
  const size = 38
  const gap = 11
  const shown = Math.min(nodes.length, 6)
  const vbW = shown * size + (shown - 1) * gap + 16
  const vbH = size + 26

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${vbW} ${vbH}`}
      style={{ display: 'block', borderRadius: 10, background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <defs>
        <marker id="darr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0,0 0,6 6,3" fill="rgba(255,255,255,0.22)" />
        </marker>
      </defs>

      {Array.from({ length: shown }).map((_, i) => {
        const x = 8 + i * (size + gap)
        const cy = 8 + size / 2
        const short = nodeShorts[i] ?? '?'
        const label = (nodes[i]?.length ?? 0) > 8 ? nodes[i].substring(0, 7) + '…' : (nodes[i] ?? '')
        const isEmoji = /\p{Emoji}/u.test(short) && short.length <= 2
        const fontFamily = isEmoji ? 'Apple Color Emoji, Segoe UI Emoji, sans-serif' : 'Inter, Helvetica Neue, Arial, sans-serif'
        const fontSize = isEmoji ? 14 : (short.length >= 3 ? 8.5 : 11)

        return (
          <g key={i}>
            {/* Connector line */}
            {i < shown - 1 && (
              <line
                x1={x + size + 1} y1={cy}
                x2={x + size + gap - 2} y2={cy}
                stroke="rgba(255,255,255,0.22)"
                strokeWidth="1.2"
                markerEnd="url(#darr)"
              />
            )}

            {/* Node box: dark bg with subtle white border, small colour dot at top-right */}
            <rect
              x={x} y={8}
              width={size} height={size}
              rx={8}
              fill="#1A1A1A"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="1"
            />
            {/* Colour accent dot */}
            <circle
              cx={x + size - 6} cy={14}
              r={3}
              fill={nodeBgs[i] ?? '#555'}
              opacity={0.85}
            />

            {/* Short label text */}
            <text
              x={x + size / 2}
              y={cy + (isEmoji ? 5 : fontSize * 0.38)}
              textAnchor="middle"
              fontSize={fontSize}
              fontWeight={isEmoji ? '400' : '700'}
              fontFamily={fontFamily}
              fill="rgba(255,255,255,0.88)"
            >
              {short}
            </text>

            {/* Node label below */}
            <text
              x={x + size / 2} y={8 + size + 14}
              textAnchor="middle"
              fontSize="7"
              fill="rgba(255,255,255,0.38)"
              fontFamily="Inter, sans-serif"
            >
              {label}
            </text>
          </g>
        )
      })}

      {nodes.length > 6 && (
        <text x={vbW - 4} y={8 + size / 2 + 4} textAnchor="end" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="Inter, sans-serif">
          +{nodes.length - 6}
        </text>
      )}
    </svg>
  )
}

// Keep old WorkflowDiagram for modal use (large variant with emojis)
function WorkflowDiagram({ nodes, nodeEmojis, large = false }: { nodes: string[]; nodeEmojis: string[]; large?: boolean }) {
  const size = large ? 48 : 40
  const gap = 14
  const shown = Math.min(nodes.length, 6)
  const vbW = shown * size + (shown - 1) * gap + 16
  const vbH = size + 22

  return (
    <svg width="100%" viewBox={`0 0 ${vbW} ${vbH}`} style={{ display: 'block', borderRadius: 10, background: '#F5F3EF' }}>
      {Array.from({ length: shown }).map((_, i) => {
        const x = 8 + i * (size + gap)
        const cy = 8 + size / 2
        const emojiSize = large ? 17 : 14

        return (
          <g key={i}>
            {/* Connector */}
            {i < shown - 1 && (
              <>
                <line x1={x + size} y1={cy} x2={x + size + gap - 4} y2={cy} stroke="#D4CFC8" strokeWidth="1.5" />
                <polygon
                  points={`${x + size + gap},${cy} ${x + size + gap - 5},${cy - 3} ${x + size + gap - 5},${cy + 3}`}
                  fill="#D4CFC8"
                />
              </>
            )}
            {/* Node */}
            <rect x={x} y={8} width={size} height={size} rx={8} fill="white" stroke="#E8E3DC" strokeWidth="1" />
            <text
              x={x + size / 2}
              y={cy + emojiSize * 0.38}
              textAnchor="middle"
              fontSize={emojiSize}
              fontFamily="Apple Color Emoji, Segoe UI Emoji, sans-serif"
            >
              {nodeEmojis[i] ?? '⚙️'}
            </text>
            {/* Label */}
            <text x={x + size / 2} y={8 + size + 14} textAnchor="middle" fontSize="7.5" fill="#9C9590" fontFamily="Inter, sans-serif">
              {(nodes[i]?.length ?? 0) > 8 ? nodes[i].substring(0, 7) + '…' : nodes[i]}
            </text>
          </g>
        )
      })}
      {nodes.length > 6 && (
        <text x={vbW - 2} y={8 + size / 2 + 4} textAnchor="end" fontSize="8" fill="#9C9590" fontFamily="Inter, sans-serif">
          +{nodes.length - 6}
        </text>
      )}
    </svg>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function WorkflowLibraryPage() {
  const [activeIndustry, setActiveIndustry] = useState('All')
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null)

  const filtered = activeIndustry === 'All' ? workflows : workflows.filter(w => w.industry === activeIndustry)

  useEffect(() => {
    if (!selectedWorkflow) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedWorkflow(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selectedWorkflow])

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* Hide all scrollbars globally for this page */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 pt-28 pb-20 text-center">
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-16">
          <div className="h-[500px] w-[700px] rounded-full bg-[#FF4F00] opacity-[0.07] blur-[120px]" />
        </div>

        {/* Eyebrow */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF4F00]/30 bg-[#FF4F00]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FF4F00] font-display">
            <Zap size={11} strokeWidth={2.5} /> AI Workflow Automation Library
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}
          className="mx-auto mt-7 max-w-3xl font-display text-[clamp(42px,5.5vw,76px)] font-bold leading-[1.03] tracking-[-0.03em] text-white"
        >
          AI workflow automations<br />
          <span className="bg-gradient-to-r from-[#FF4F00] to-[#FF8A00] bg-clip-text text-transparent">Kovil AI engineers</span><br />
          can build for you
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.18 }}
          className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/55"
        >
          Browse real-world AI workflow automations across industries. See the stack, steal the flow, or have us build it for you.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.26 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#FF4F00] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display"
          >
            Book a discovery call <ArrowRight size={15} />
          </a>
          <a
            href="/tools/ai-readiness-ad-marketing-agencies"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/25 hover:text-white"
          >
            Take the AI readiness assessment
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.36 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/30"
        >
          {['Growing workflow library', 'Multiple industries covered', 'n8n · GPT-4o · LangChain · Make'].map((s, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#FF4F00]/40">·</span>}
              {s}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── STICKY FILTER BAR ─────────────────────────────────────────────── */}
      <div className="sticky top-16 z-40 border-b border-white/[0.05] bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6">
          <div className="no-scrollbar flex gap-2 overflow-x-auto py-3">
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                className={`flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 font-display ${
                  activeIndustry === ind
                    ? 'bg-[#FF4F00] text-white shadow-[0_0_20px_rgba(255,79,0,0.35)]'
                    : 'border border-white/[0.08] bg-white/[0.04] text-white/50 hover:border-white/20 hover:text-white/80'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CARD GRID ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        {/* Count */}
        <p className="mb-8 text-xs text-white/30">
          Showing <span className="text-white/60">{filtered.length}</span> workflow{filtered.length !== 1 ? 's' : ''}
          {activeIndustry !== 'All' && <> in <span className="text-white/60">{activeIndustry}</span></>}
        </p>

        {(() => {
          // ── Shared slug map ────────────────────────────────────────────
          const dedicatedPageSlugs: Record<number, string> = {
            1: 'campaign-performance-reporting',
            2: 'ai-creative-brief-generator',
            3: 'new-client-onboarding-automation',
            25: 'automated-am-briefs-client-reporting',
            26: 'multi-channel-inbound-dispatching',
            27: 'white-label-voice-ai-agents',
            28: 'crm-ops-layer',
          }

          // ── Single card renderer ───────────────────────────────────────
          const renderCard = (wf: Workflow) => {
            const hasDedicatedPage = wf.id in dedicatedPageSlugs
            const slug = dedicatedPageSlugs[wf.id] ?? ''

            const cardContent = (
              <>
                {/* Colored top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${wf.industryColor}, ${wf.industryColor}44)` }}
                />
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at top left, ${wf.industryColor}0A, transparent 60%)` }}
                />

                {/* Top row */}
                <div className="flex items-center justify-between">
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide font-display"
                    style={{ color: wf.industryColor, background: `${wf.industryColor}18`, border: `1px solid ${wf.industryColor}30` }}
                  >
                    {wf.industry}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold" style={{ color: wf.industryColor }}>
                    <Clock size={10} strokeWidth={2.5} />{wf.timeSaved}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3 font-display text-[14px] font-semibold leading-snug text-white/90 group-hover:text-white transition-colors">
                  {wf.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-[12px] leading-relaxed text-white/55">
                  {wf.description}
                </p>

                {/* Dark diagram */}
                <div className="mt-4">
                  <DarkCardDiagram nodes={wf.nodes} nodeBgs={wf.nodeBgs} nodeShorts={wf.nodeShorts} />
                </div>

                {/* Tools */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {wf.tools.slice(0, 4).map(t => (
                    <span key={t} className="rounded px-2 py-0.5 text-[10px] text-white/55 border border-white/[0.10] bg-white/[0.04]">
                      {t}
                    </span>
                  ))}
                  {wf.tools.length > 4 && (
                    <span className="rounded px-2 py-0.5 text-[10px] text-white/45 border border-white/[0.08]">
                      +{wf.tools.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">
                  {hasDedicatedPage ? (
                    <span className="flex items-center gap-1 text-[11px] font-semibold" style={{ color: wf.industryColor }}>
                      Full workflow deep-dive <ExternalLink size={11} />
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] text-white/45">
                      View workflow <ChevronRight size={12} strokeWidth={2.5} />
                    </span>
                  )}
                  {hasDedicatedPage && (
                    <span className="rounded-full bg-[#FF4F00]/10 border border-[#FF4F00]/25 px-2 py-0.5 text-[10px] font-semibold text-[#FF4F00] font-display">
                      Detailed
                    </span>
                  )}
                </div>
              </>
            )

            const motionProps = {
              key: wf.id,
              layout: true as const,
              initial: { opacity: 0, scale: 0.97 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.97 },
              transition: { duration: 0.18 },
              whileHover: { y: -3 },
              className: 'group relative cursor-pointer rounded-2xl border border-white/[0.07] bg-[#111111] p-5 pt-6 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]',
              onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${wf.industryColor}35`
              },
              onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
              },
            }

            return hasDedicatedPage ? (
              <motion.article {...motionProps}>
                <Link href={`/ai-workflow-automation-library/${slug}`} className="absolute inset-0 z-10" aria-label={wf.title} />
                {cardContent}
              </motion.article>
            ) : (
              <motion.article {...motionProps} onClick={() => setSelectedWorkflow(wf)}>
                {cardContent}
              </motion.article>
            )
          }

          // ── Grouped view (All) — industry sections with separators ─────
          if (activeIndustry === 'All') {
            const industryOrder = ['Ad & Marketing', 'FinTech', 'HealthTech', 'SaaS & B2B', 'E-Commerce', 'LegalTech', 'PropTech', 'Logistics']
            return (
              <div className="space-y-14">
                {industryOrder.map(industry => {
                  const group = workflows.filter(w => w.industry === industry)
                  if (group.length === 0) return null
                  const color = group[0].industryColor
                  return (
                    <div key={industry}>
                      {/* ── Industry separator header ── */}
                      <div className="mb-6 flex items-center gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: color }}
                        />
                        <span
                          className="font-display text-[11px] font-semibold uppercase tracking-widest"
                          style={{ color }}
                        >
                          {industry}
                        </span>
                        <div
                          className="flex-1 h-px"
                          style={{ background: `linear-gradient(to right, ${color}28, transparent)` }}
                        />
                        <span className="text-[10px] text-white/25 font-medium">{group.length} workflows</span>
                      </div>

                      {/* Cards */}
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <AnimatePresence mode="popLayout">
                          {group.map(wf => renderCard(wf))}
                        </AnimatePresence>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          }

          // ── Filtered single-industry view ──────────────────────────────
          return (
            <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map(wf => renderCard(wf))}
              </AnimatePresence>
            </motion.div>
          )
        })()}
      </section>

      {/* ── MODAL ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedWorkflow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setSelectedWorkflow(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{ background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(8px)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              onClick={e => e.stopPropagation()}
              className="no-scrollbar relative max-h-[88vh] w-full max-w-[640px] overflow-y-auto rounded-2xl border border-white/[0.10] bg-[#131313] p-7 sm:p-8 shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedWorkflow(null)}
                className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.04] text-white/50 transition-colors hover:border-white/20 hover:text-white/80"
              >
                <X size={16} />
              </button>

              {/* Industry badge */}
              <span
                className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide font-display"
                style={{ color: selectedWorkflow.industryColor, background: `${selectedWorkflow.industryColor}18`, border: `1px solid ${selectedWorkflow.industryColor}28` }}
              >
                {selectedWorkflow.industry}
              </span>

              {/* Title */}
              <h2 className="mt-4 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                {selectedWorkflow.title}
              </h2>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {selectedWorkflow.description}
              </p>

              {/* Diagram */}
              <div className="mt-6">
                <WorkflowDiagram nodes={selectedWorkflow.nodes} nodeEmojis={selectedWorkflow.nodeEmojis} large />
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-white/[0.07]" />

              {/* Steps */}
              <div className="mb-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/30 font-display">How it works</p>
                <ol className="flex flex-col gap-2.5">
                  {selectedWorkflow.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#FF4F00]/25 bg-[#FF4F00]/10 text-[10px] font-bold text-[#FF4F00] font-display">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-white/65">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tech stack */}
              <div className="mb-6">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/30 font-display">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {selectedWorkflow.tools.map(t => (
                    <span key={t} className="rounded-lg border border-white/[0.09] bg-white/[0.05] px-3 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Build time CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#FF4F00]/15 bg-[#FF4F00]/[0.06] px-5 py-4">
                <span className="text-sm text-white/60">
                  <span className="font-semibold text-[#FF4F00]">Typical build: </span>
                  {selectedWorkflow.buildTime}
                </span>
                <a
                  href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FF4F00] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 font-display shrink-0"
                >
                  Build this for my team <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-8 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#111111] px-8 py-14 text-center">
          {/* Subtle glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-48 w-96 rounded-full bg-[#FF4F00] opacity-[0.06] blur-[60px]" />
          </div>

          <p className="relative font-display text-xs font-semibold uppercase tracking-widest text-[#FF4F00]/70">
            Ready to automate?
          </p>
          <h2 className="relative mt-4 font-display text-[clamp(24px,3.5vw,38px)] font-bold leading-tight text-white">
            Don't see your use case?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-base leading-relaxed text-white/50">
            We scope, build and ship custom AI automations in fixed-price sprints. Zero delivery risk.
          </p>
          <a
            href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FF4F00] px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(255,79,0,0.30)] transition-all hover:shadow-[0_8px_40px_rgba(255,79,0,0.45)] hover:opacity-95 font-display"
          >
            Start my AI build <ArrowRight size={16} />
          </a>
          <p className="relative mt-6 text-xs text-white/20">
            All 28 workflows have been built and deployed by Kovil AI engineers.
          </p>
        </div>
      </section>

    </div>
  )
}
