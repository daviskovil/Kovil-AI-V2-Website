'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Clock, ChevronRight } from 'lucide-react'

// ── Workflow data ─────────────────────────────────────────────────────────────

const workflows = [
  // AD & MARKETING
  {
    id: 1, industry: 'Ad & Marketing', industryColor: '#8B5CF6',
    title: 'Campaign Performance Reporting Automation',
    description: 'Pull data from Meta, Google, LinkedIn → GPT-4o analysis → auto-build slide deck → email client + Slack team',
    nodes: ['Schedule', 'Meta Ads', 'Google Ads', 'Merge', 'GPT-4o', 'Report', 'Email'],
    nodeEmojis: ['⏰', '📱', '🔍', '⑂', '🟢', '📊', '📧'],
    tools: ['n8n', 'GPT-4o', 'Google Slides', 'Gmail', 'Slack'],
    timeSaved: '12 hrs/week',
    steps: [
      'Schedule trigger fires every Monday 8am',
      'Pull last 7 days from Meta Ads, Google Ads, LinkedIn',
      'Merge all data in n8n',
      'GPT-4o analyses performance trends and anomalies',
      'Report Builder generates slide deck via Google Slides API',
      'Auto-email to client, post summary to Slack',
    ],
    buildTime: '2–3 week sprint',
  },
  {
    id: 2, industry: 'Ad & Marketing', industryColor: '#8B5CF6',
    title: 'AI Creative Brief Generator',
    description: 'Client fills Typeform → pull brand guidelines from Notion → GPT-4o writes structured brief → approval gate → creative team',
    nodes: ['Typeform', 'Notion', 'GPT-4o', 'Approval', 'Deliver'],
    nodeEmojis: ['📋', '📝', '🟢', '✅', '📤'],
    tools: ['Typeform', 'Notion', 'GPT-4o', 'Slack'],
    timeSaved: '3 hrs/brief',
    steps: [
      'Client fills brief intake via Typeform',
      'Pull brand guidelines + past briefs from Notion',
      'GPT-4o writes structured creative brief',
      'Approval gate: human reviews in Slack (approve/revise)',
      'Approved brief delivered to creative team channel',
    ],
    buildTime: '1–2 week sprint',
  },
  {
    id: 3, industry: 'Ad & Marketing', industryColor: '#8B5CF6',
    title: 'New Client Onboarding Automation',
    description: 'Deal marked Won in HubSpot → parallel: contract + invoice + onboarding form → auto-create Notion workspace + Slack channel → schedule kickoff',
    nodes: ['HubSpot', 'DocuSign', 'Stripe', 'Typeform', 'Notion', 'Calendly'],
    nodeEmojis: ['🔶', '✍️', '💳', '📋', '📝', '📅'],
    tools: ['HubSpot', 'DocuSign', 'Stripe', 'n8n', 'Notion', 'Calendly'],
    timeSaved: '3 days → 2 hrs',
    steps: [
      'HubSpot deal marked Won triggers workflow',
      'Parallel: send DocuSign contract, raise Stripe invoice, send Typeform onboarding',
      'Wait for all 3 to complete',
      'Auto-create Notion client workspace from template',
      'Create dedicated Slack channel, invite team',
      'Schedule kickoff call via Calendly',
    ],
    buildTime: '3–4 week sprint',
  },
  // FINTECH
  {
    id: 4, industry: 'FinTech', industryColor: '#10B981',
    title: 'AI Loan Document Classifier',
    description: 'PDF uploaded → GPT-4o Vision extracts document type + fields → classifier routes to checklist → flags missing docs → notifies underwriter',
    nodes: ['Upload', 'GPT-4o Vision', 'Classifier', 'Complete?', 'Notify'],
    nodeEmojis: ['📄', '👁️', '🗂️', '🔀', '🔔'],
    tools: ['GPT-4o Vision', 'Python', 'FastAPI', 'n8n', 'Email'],
    timeSaved: '8 hrs/day',
    steps: [
      'Document uploaded to intake portal',
      'GPT-4o Vision extracts document type and all key fields',
      'Classifier routes to correct document checklist',
      'Check: all required docs present?',
      'Complete: notify underwriter to proceed / Incomplete: flag missing items',
    ],
    buildTime: '2–3 week sprint',
  },
  {
    id: 5, industry: 'FinTech', industryColor: '#10B981',
    title: 'Automated Underwriting Workflow',
    description: 'New loan application → pull credit bureau data → AI risk scoring → decision engine [approve/review/decline] → auto-generate decision letter → log to CRM',
    nodes: ['Application', 'Credit Bureau', 'AI Score', 'Decision', 'Letter', 'CRM'],
    nodeEmojis: ['📋', '🏦', '🟢', '⚖️', '📄', '💼'],
    tools: ['GPT-4o', 'Python', 'FastAPI', 'HubSpot', 'n8n'],
    timeSaved: '70% faster turnaround',
    steps: [
      'New loan application received via API or form',
      'Pull credit bureau data (Experian/Equifax)',
      'AI risk scoring model runs — outputs score + rationale',
      'Decision engine: Approve / Manual Review / Decline',
      'Auto-generate formatted decision letter',
      'Log decision + rationale to HubSpot CRM',
    ],
    buildTime: '4–6 week sprint',
  },
  {
    id: 6, industry: 'FinTech', industryColor: '#10B981',
    title: 'Deal Processing Automation',
    description: 'New deal enters pipeline → validate policy rules → AI extracts deal terms → auto-populate deal sheet → notify team → schedule review',
    nodes: ['Deal Trigger', 'Policy Check', 'AI Extract', 'Populate', 'Notify', 'Schedule'],
    nodeEmojis: ['💼', '✅', '🟢', '📊', '🔔', '📅'],
    tools: ['n8n', 'GPT-4o', 'Google Sheets', 'Slack', 'Calendly'],
    timeSaved: '4 hrs/deal',
    steps: [
      'New deal enters pipeline',
      'Validate against policy rules (automated)',
      'GPT-4o extracts key deal terms from documents',
      'Auto-populate standardised deal sheet in Google Sheets',
      'Notify deal team via Slack',
      'Auto-schedule review call via Calendly',
    ],
    buildTime: '2 week sprint',
  },
  // HEALTHTECH
  {
    id: 7, industry: 'HealthTech', industryColor: '#EF4444',
    title: 'AI Patient Intake Automation',
    description: 'Patient submits intake form → Voice AI collects missing info → AI extracts structured data → push to 3 EHR systems → flag high-risk fields → notify care team',
    nodes: ['Intake Form', 'Voice AI', 'AI Extract', 'EHR Push', 'Risk Flag', 'Alert'],
    nodeEmojis: ['📋', '🎙️', '🟢', '🏥', '⚠️', '🔔'],
    tools: ['Twilio', 'GPT-4o', 'Python', 'n8n', 'EHR API'],
    timeSaved: '18 min → 2 min',
    steps: [
      'Patient submits intake form online',
      'Voice AI (Twilio) calls to collect any missing information',
      'GPT-4o extracts and structures all patient data',
      'Push structured data to 3 EHR systems simultaneously',
      'AI flags any high-risk clinical fields',
      'Alert care team for immediate review',
    ],
    buildTime: '4–6 week sprint',
  },
  {
    id: 8, industry: 'HealthTech', industryColor: '#EF4444',
    title: 'Appointment No-Show Prevention',
    description: 'Appointment booked → T-48hr: AI personalised reminder → T-24hr: SMS + email → no response: auto-reschedule prompt → calendar update',
    nodes: ['Booked', 'Wait 48hr', 'AI Reminder', 'Send', 'No Response?', 'Reschedule'],
    nodeEmojis: ['📅', '⏰', '🟢', '📱', '❓', '🔄'],
    tools: ['Twilio', 'GPT-4o', 'Gmail', 'Google Calendar', 'n8n'],
    timeSaved: '40% fewer no-shows',
    steps: [
      'Appointment created in booking system',
      'Wait until 48 hours before appointment',
      'GPT-4o writes personalised reminder (uses patient name, appointment type)',
      'Send via SMS (Twilio) + email (Gmail)',
      'Check for response after 4 hours',
      'No response: send reschedule prompt / Confirmed: update calendar',
    ],
    buildTime: '1–2 week sprint',
  },
  {
    id: 9, industry: 'HealthTech', industryColor: '#EF4444',
    title: 'Clinical Notes Summariser',
    description: 'Doctor completes consultation → audio recording uploaded → Whisper transcribes → GPT-4o structures into SOAP note → human review → push to EHR',
    nodes: ['Audio Upload', 'Whisper', 'GPT-4o', 'Human Review', 'EHR Push'],
    nodeEmojis: ['🎙️', '📝', '🟢', '👩‍⚕️', '🏥'],
    tools: ['OpenAI Whisper', 'GPT-4o', 'EHR API', 'n8n'],
    timeSaved: '45 min/day per doctor',
    steps: [
      'Doctor uploads audio recording of consultation',
      'Whisper API transcribes audio to text',
      'GPT-4o structures transcript into SOAP note format',
      'Doctor reviews and approves in lightweight UI',
      'Approved note pushed directly to EHR system',
    ],
    buildTime: '2–3 week sprint',
  },
  // SAAS & B2B
  {
    id: 10, industry: 'SaaS & B2B', industryColor: '#3B82F6',
    title: 'Manual Approval Workflow Automation',
    description: 'Request submitted via form → AI classifies request type → routes to correct approver → auto-drafts decision message → sends decision → logs to Airtable',
    nodes: ['Form Submit', 'AI Classify', 'Route', 'Draft Decision', 'Send', 'Log'],
    nodeEmojis: ['📋', '🟢', '🔀', '✏️', '📤', '🗃️'],
    tools: ['n8n', 'GPT-4o', 'Slack', 'Airtable', 'Gmail'],
    timeSaved: '15 hrs/week',
    steps: [
      'Request submitted via intake form',
      'GPT-4o classifies request type (budget, HR, legal, IT, etc.)',
      'Route to correct approver based on type + amount',
      'GPT-4o drafts approval/rejection message for approver to review',
      'Send decision to requestor',
      'Log outcome to Airtable',
    ],
    buildTime: '1–2 week sprint',
  },
  {
    id: 11, industry: 'SaaS & B2B', industryColor: '#3B82F6',
    title: 'AI Customer Support Deflection',
    description: 'Support ticket received → RAG pipeline searches knowledge base → GPT-4o drafts response → confidence check [high→auto-send / low→human queue] → CSAT follow-up',
    nodes: ['Ticket', 'RAG Search', 'GPT-4o Draft', 'Confidence?', 'Send/Queue', 'CSAT'],
    nodeEmojis: ['🎫', '🔍', '🟢', '📊', '📤', '⭐'],
    tools: ['LangChain', 'Pinecone', 'GPT-4o', 'Zendesk', 'n8n'],
    timeSaved: '70% tickets deflected',
    steps: [
      'Support ticket arrives via email or Zendesk',
      'RAG pipeline searches knowledge base and docs',
      'GPT-4o drafts context-aware response',
      'Confidence scoring: high confidence or low?',
      'High: auto-send to customer / Low: route to human queue with draft',
      'CSAT follow-up sent 24hrs after resolution',
    ],
    buildTime: '3–4 week sprint',
  },
  {
    id: 12, industry: 'SaaS & B2B', industryColor: '#3B82F6',
    title: 'Churn Risk Detection & Outreach',
    description: 'Daily usage data pull → AI scores churn risk per account → high-risk flagged → personalised outreach email drafted → CSM notified → log to CRM',
    nodes: ['Daily Trigger', 'Usage Pull', 'AI Score', 'Flag Risk', 'Draft Email', 'CRM Log'],
    nodeEmojis: ['⏰', '📊', '🟢', '⚠️', '✉️', '💼'],
    tools: ['GPT-4o', 'Python', 'HubSpot', 'Gmail', 'n8n'],
    timeSaved: '3 hrs/day CSM time',
    steps: [
      'Daily trigger fires at 6am',
      'Pull usage metrics per account from product database',
      'AI churn risk model scores each account (0–100)',
      'Flag accounts scoring >70 as high risk',
      'GPT-4o drafts personalised outreach email per account',
      'Log risk scores and outreach status to HubSpot',
    ],
    buildTime: '3–4 week sprint',
  },
  // ECOMMERCE
  {
    id: 13, industry: 'E-Commerce', industryColor: '#F59E0B',
    title: 'AI Customer Service Chatbot',
    description: 'Customer message → intent classifier → RAG searches product/policy docs → GPT-4o response → sentiment check [positive→send / negative→escalate]',
    nodes: ['Message', 'Intent', 'RAG Search', 'GPT-4o', 'Sentiment?', 'Send/Escalate'],
    nodeEmojis: ['💬', '🎯', '🔍', '🟢', '💭', '📤'],
    tools: ['GPT-4o', 'LangChain', 'Pinecone', 'Shopify API', 'n8n'],
    timeSaved: '70% queries deflected',
    steps: [
      'Customer message received via chat widget',
      'Intent classifier identifies query type (order, return, product, etc.)',
      'RAG pipeline searches product catalog and policy docs',
      'GPT-4o generates accurate, contextual response',
      'Sentiment analysis on drafted response',
      'Positive: send to customer / Negative: escalate to human agent',
    ],
    buildTime: '3–4 week sprint',
  },
  {
    id: 14, industry: 'E-Commerce', industryColor: '#F59E0B',
    title: 'Dynamic Inventory Alerting',
    description: 'Hourly stock check → AI forecasts demand based on sales velocity → low stock predicted → auto-raise PO draft → notify procurement → log reorder',
    nodes: ['Hourly Check', 'Stock Pull', 'AI Forecast', 'Low Stock?', 'Draft PO', 'Notify'],
    nodeEmojis: ['⏰', '📦', '🟢', '❓', '📋', '🔔'],
    tools: ['Shopify API', 'GPT-4o', 'Google Sheets', 'Gmail', 'n8n'],
    timeSaved: '5 hrs/week',
    steps: [
      'Hourly trigger fires',
      'Pull current stock levels from Shopify',
      'AI demand forecasting model runs based on sales velocity',
      'Low stock predicted in next 7 days?',
      'Auto-draft purchase order in Google Sheets',
      'Notify procurement team via email',
    ],
    buildTime: '2–3 week sprint',
  },
  {
    id: 15, industry: 'E-Commerce', industryColor: '#F59E0B',
    title: 'Abandoned Cart Recovery Agent',
    description: 'Cart abandoned → wait 1hr → AI generates personalised recovery email → send → no purchase in 24hr → SMS follow-up with discount → log to analytics',
    nodes: ['Cart Abandoned', 'Wait 1hr', 'AI Personalise', 'Email Send', 'Purchased?', 'SMS Fallback'],
    nodeEmojis: ['🛒', '⏰', '🟢', '📧', '✅', '📱'],
    tools: ['Shopify API', 'GPT-4o', 'Klaviyo', 'Twilio', 'n8n'],
    timeSaved: '15% revenue recovery',
    steps: [
      'Cart abandonment event fires from Shopify',
      'Wait 1 hour (grace period)',
      'GPT-4o generates personalised recovery email with product details',
      'Send email via Klaviyo',
      'Check for purchase after 24 hours',
      'No purchase: send SMS via Twilio with discount code',
    ],
    buildTime: '1–2 week sprint',
  },
  // LEGALTECH
  {
    id: 16, industry: 'LegalTech', industryColor: '#EC4899',
    title: 'Contract Review Automation',
    description: 'Contract uploaded → GPT-4o Vision extracts clauses → AI risk classifier → flags non-standard terms → generates redline summary → lawyer review → client delivery',
    nodes: ['Upload', 'GPT-4o Extract', 'Risk Classify', 'Flag Terms', 'Redline', 'Deliver'],
    nodeEmojis: ['📄', '👁️', '🟢', '⚠️', '📝', '📤'],
    tools: ['GPT-4o Vision', 'Python', 'LangChain', 'DocuSign', 'n8n'],
    timeSaved: '6 hrs → 25 min',
    steps: [
      'Contract uploaded via secure portal',
      'GPT-4o Vision extracts all clauses and key terms',
      'AI risk classifier scores each clause (standard/non-standard/high-risk)',
      'Flag non-standard terms with specific risk notes',
      'Generate formatted redline summary document',
      'Route to lawyer for final review before client delivery',
    ],
    buildTime: '3–4 week sprint',
  },
  {
    id: 17, industry: 'LegalTech', industryColor: '#EC4899',
    title: 'Client Matter Intake Automation',
    description: 'New client enquiry → AI extracts case details → conflict check → matter opened in practice management → engagement letter drafted → signed via DocuSign',
    nodes: ['Enquiry', 'AI Extract', 'Conflict Check', 'Open Matter', 'Draft Letter', 'DocuSign'],
    nodeEmojis: ['📧', '🟢', '⚖️', '📂', '✉️', '✍️'],
    tools: ['GPT-4o', 'n8n', 'Clio', 'DocuSign', 'Gmail'],
    timeSaved: '4 hrs/matter',
    steps: [
      'New client enquiry received via email or web form',
      'GPT-4o extracts case type, parties, key facts',
      'Automated conflict check against existing client database',
      'Open new matter in Clio practice management',
      'GPT-4o drafts engagement letter from template',
      'Auto-send for e-signature via DocuSign',
    ],
    buildTime: '2–3 week sprint',
  },
  {
    id: 18, industry: 'LegalTech', industryColor: '#EC4899',
    title: 'Deposition Summary AI',
    description: 'Deposition transcript uploaded → Whisper transcribes audio → GPT-4o extracts key admissions + contradictions → structured summary → attorney review → export',
    nodes: ['Audio/PDF', 'Whisper', 'GPT-4o', 'Extract', 'Summary', 'Export'],
    nodeEmojis: ['📄', '🎙️', '🟢', '🔍', '📋', '📤'],
    tools: ['OpenAI Whisper', 'GPT-4o', 'Python', 'n8n', 'Google Docs'],
    timeSaved: '3 hrs → 20 min',
    steps: [
      'Deposition audio or transcript uploaded',
      'Whisper transcribes audio to text (if audio)',
      'GPT-4o reads full transcript',
      'Extract: key admissions, contradictions, important quotes',
      'Generate structured deposition summary with timestamps',
      'Attorney reviews and exports to Google Docs',
    ],
    buildTime: '2 week sprint',
  },
  // PROPTECH
  {
    id: 19, industry: 'PropTech', industryColor: '#14B8A6',
    title: 'AI Lead Qualification & Routing',
    description: 'New enquiry via web/portal → AI scores lead quality → classifies property preference → routes to specialist agent → auto-sends property matches → log CRM',
    nodes: ['Enquiry', 'AI Score', 'Classify', 'Route Agent', 'Property Match', 'CRM'],
    nodeEmojis: ['🏠', '🟢', '🏷️', '👤', '🔍', '💼'],
    tools: ['GPT-4o', 'n8n', 'HubSpot', 'MLS API', 'Gmail'],
    timeSaved: '2 hrs/day',
    steps: [
      'New property enquiry received',
      'AI lead scoring model runs (budget fit, intent signals, timeline)',
      'Classify by property type, location preference, budget range',
      'Route to specialist agent based on classification',
      'Auto-pull matching properties from MLS API, send to lead',
      'Log lead score, classification, and agent assignment to HubSpot',
    ],
    buildTime: '2–3 week sprint',
  },
  {
    id: 20, industry: 'PropTech', industryColor: '#14B8A6',
    title: 'Tenant Screening Automation',
    description: 'Application submitted → AI verifies employment + income → credit check API → reference check emails automated → risk score → approve/decline → notify applicant',
    nodes: ['Application', 'Income Verify', 'Credit Check', 'References', 'Risk Score', 'Decision'],
    nodeEmojis: ['📋', '💼', '🏦', '📧', '🟢', '✅'],
    tools: ['GPT-4o', 'n8n', 'Stripe', 'Gmail', 'Python'],
    timeSaved: '3 days → 4 hrs',
    steps: [
      'Tenant application submitted online',
      'AI verifies employment and income documents (GPT-4o Vision)',
      'Automated credit check via API',
      'Auto-send reference check emails, parse responses',
      'AI risk scoring model generates overall tenant risk score',
      'Auto-generate approve/decline letter, notify applicant',
    ],
    buildTime: '3–4 week sprint',
  },
  {
    id: 21, industry: 'PropTech', industryColor: '#14B8A6',
    title: 'Maintenance Request Triage',
    description: 'Tenant submits request → AI classifies urgency + trade required → routes to correct contractor → auto-schedules via calendar → tracks completion → tenant update',
    nodes: ['Request', 'AI Classify', 'Route', 'Schedule', 'Track', 'Update'],
    nodeEmojis: ['🔧', '🟢', '👷', '📅', '📊', '📱'],
    tools: ['GPT-4o', 'n8n', 'Twilio', 'Google Calendar', 'Airtable'],
    timeSaved: '1 hr/request',
    steps: [
      'Tenant submits maintenance request via app or SMS',
      'AI classifies urgency (emergency/urgent/routine) and trade required',
      'Route to correct contractor from approved list',
      'Auto-schedule via Google Calendar, confirm with contractor',
      'Track job completion status in Airtable',
      'SMS tenant with scheduling confirmation and completion update',
    ],
    buildTime: '2 week sprint',
  },
  // LOGISTICS
  {
    id: 22, industry: 'Logistics', industryColor: '#F97316',
    title: 'AI Shipment Exception Handler',
    description: 'Shipment delay detected → AI classifies exception type → notifies customer with context + ETA → raises carrier claim if needed → updates order management → logs',
    nodes: ['Delay Alert', 'AI Classify', 'Notify Customer', 'Carrier Claim?', 'Update OMS', 'Log'],
    nodeEmojis: ['🚨', '🟢', '📧', '📋', '🔄', '🗃️'],
    tools: ['GPT-4o', 'n8n', 'Twilio', 'Carrier APIs', 'Shopify'],
    timeSaved: '4 hrs/day ops team',
    steps: [
      'Shipment delay or exception detected via carrier API',
      'AI classifies exception type (weather, lost, customs, damage)',
      'Auto-draft and send contextual customer notification with new ETA',
      'Raise carrier claim automatically if threshold exceeded',
      'Update order status in OMS / Shopify',
      'Log exception type, resolution, and customer comms',
    ],
    buildTime: '3–4 week sprint',
  },
  {
    id: 23, industry: 'Logistics', industryColor: '#F97316',
    title: 'Freight Quote Automation',
    description: 'Quote request received → AI extracts shipment details → query 5 carrier APIs in parallel → AI ranks by cost/speed/reliability → formatted quote sent in 2 min',
    nodes: ['Quote Request', 'AI Extract', 'Carrier APIs', 'AI Rank', 'Format', 'Send'],
    nodeEmojis: ['📋', '🟢', '🚢', '⚖️', '📊', '📤'],
    tools: ['GPT-4o', 'n8n', 'Carrier APIs', 'Gmail', 'Google Sheets'],
    timeSaved: '45 min → 2 min',
    steps: [
      'Quote request received via email or form',
      'GPT-4o extracts: origin, destination, weight, dimensions, timeline',
      'Query 5 carrier APIs simultaneously (FedEx, UPS, DHL, etc.)',
      'AI ranks options by weighted score: cost, speed, reliability',
      'Generate formatted quote comparison document',
      'Auto-send to customer within 2 minutes of request',
    ],
    buildTime: '2–3 week sprint',
  },
  {
    id: 24, industry: 'Logistics', industryColor: '#F97316',
    title: 'Driver Route Optimisation Alerts',
    description: 'Daily: pull orders → AI optimises delivery routes → assign drivers → push route to driver app → real-time exception monitoring → ETA updates to customers',
    nodes: ['Daily Orders', 'AI Optimise', 'Assign Drivers', 'Push Routes', 'Monitor', 'ETA Updates'],
    nodeEmojis: ['📦', '🟢', '👤', '📱', '📡', '📧'],
    tools: ['GPT-4o', 'Python', 'Google Maps API', 'n8n', 'Twilio'],
    timeSaved: '25% fuel cost reduction',
    steps: [
      'Pull all orders for the day at 6am',
      'AI route optimisation algorithm runs (vehicle capacity, time windows, traffic)',
      'Assign optimised routes to available drivers',
      'Push route to driver mobile app',
      'Real-time monitoring: flag exceptions (delays, failed deliveries)',
      'Auto-send ETA updates to customers via SMS',
    ],
    buildTime: '4–6 week sprint',
  },
]

const industries = ['All', 'Ad & Marketing', 'FinTech', 'HealthTech', 'SaaS & B2B', 'E-Commerce', 'LegalTech', 'PropTech', 'Logistics']

// ── Workflow SVG Diagram ──────────────────────────────────────────────────────

function WorkflowDiagram({ nodes, nodeEmojis, large = false }: { nodes: string[]; nodeEmojis: string[]; large?: boolean }) {
  const nodeSize = large ? 52 : 44
  const gap = 18
  const labelHeight = 20
  const totalNodes = Math.min(nodes.length, 6)
  const rowWidth = totalNodes * nodeSize + (totalNodes - 1) * gap + 24
  const svgHeight = nodeSize + labelHeight + 16

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${rowWidth} ${svgHeight}`}
      style={{ background: '#F8F7F4', borderRadius: 8, display: 'block' }}
    >
      {Array.from({ length: totalNodes }).map((_, i) => {
        const x = 12 + i * (nodeSize + gap)
        const y = 8
        const midY = y + nodeSize / 2

        return (
          <g key={i}>
            {/* Connector + arrowhead */}
            {i < totalNodes - 1 && (
              <>
                <line
                  x1={x + nodeSize}
                  y1={midY}
                  x2={x + nodeSize + gap - 5}
                  y2={midY}
                  stroke="#D0CDC6"
                  strokeWidth="1.5"
                />
                <polygon
                  points={`${x + nodeSize + gap},${midY} ${x + nodeSize + gap - 6},${midY - 3} ${x + nodeSize + gap - 6},${midY + 3}`}
                  fill="#D0CDC6"
                />
              </>
            )}
            {/* Node box */}
            <rect x={x} y={y} width={nodeSize} height={nodeSize} rx={8} fill="white" stroke="rgba(0,0,0,0.08)" strokeWidth="1" />
            {/* Emoji */}
            <text
              x={x + nodeSize / 2}
              y={y + nodeSize / 2 + (large ? 7 : 6)}
              textAnchor="middle"
              fontSize={large ? 18 : 14}
              style={{ userSelect: 'none' }}
            >
              {nodeEmojis[i] ?? '⚙️'}
            </text>
            {/* Label */}
            <text
              x={x + nodeSize / 2}
              y={y + nodeSize + 14}
              textAnchor="middle"
              fontSize="8"
              fill="#6B6966"
              fontFamily="DM Sans, sans-serif"
            >
              {(nodes[i]?.length ?? 0) > 9 ? nodes[i].substring(0, 8) + '…' : nodes[i]}
            </text>
          </g>
        )
      })}
      {nodes.length > 6 && (
        <text x={rowWidth - 4} y={nodeSize / 2 + 12} textAnchor="end" fontSize="9" fill="#6B6966" fontFamily="DM Sans, sans-serif">
          +{nodes.length - 6}
        </text>
      )}
    </svg>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

type Workflow = typeof workflows[0]

export default function WorkflowLibraryPage() {
  const [activeIndustry, setActiveIndustry] = useState('All')
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null)

  const filtered = activeIndustry === 'All' ? workflows : workflows.filter(w => w.industry === activeIndustry)

  // ESC key + scroll lock
  useEffect(() => {
    if (!selectedWorkflow) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedWorkflow(null) }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [selectedWorkflow])

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", color: '#F0EDE6' }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      {/* Dot grid */}
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{ padding: '96px 24px 72px', maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,90,20,0.12)', border: '1px solid rgba(255,90,20,0.3)', color: '#FF5A14', borderRadius: 999, padding: '6px 16px', fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', marginBottom: 32, fontFamily: "'Syne', sans-serif" }}>
              AI Workflow Automation Library
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(40px, 6vw, 68px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 24, color: '#F0EDE6' }}
          >
            Real automations built<br />
            <span style={{ color: '#FF5A14' }}>and deployed by</span><br />
            Kovil AI engineers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: 18, color: 'rgba(240,237,230,0.65)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.7 }}
          >
            Browse 24 real-world AI workflow automations across 8 industries. See the workflow, steal the stack, or have us build it for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}
          >
            <a
              href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF5A14', color: 'white', borderRadius: 8, padding: '14px 28px', fontWeight: 600, fontSize: 15, textDecoration: 'none', fontFamily: "'Syne', sans-serif" }}
            >
              Book a discovery call <ArrowRight size={16} />
            </a>
            <a
              href="/tools/ai-readiness-ad-marketing-agencies"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: '#F0EDE6', border: '1px solid rgba(240,237,230,0.2)', borderRadius: 8, padding: '14px 28px', fontWeight: 500, fontSize: 15, textDecoration: 'none' }}
            >
              Take the AI readiness assessment
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', fontSize: 13, color: 'rgba(240,237,230,0.4)' }}
          >
            {['24 workflows documented', '8 industries', 'Built with n8n · GPT-4o · LangChain · Make'].map((s, i) => (
              <span key={i} style={{ padding: '0 8px' }}>
                {i > 0 && <span style={{ marginRight: 8, color: 'rgba(255,90,20,0.35)' }}>·</span>}
                {s}
              </span>
            ))}
          </motion.div>
        </section>

        {/* ── STICKY FILTER BAR ────────────────────────────────────────────── */}
        <div style={{ position: 'sticky', top: 64, zIndex: 50, background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '12px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', overflowX: 'auto', display: 'flex', gap: 8, scrollbarWidth: 'none' }}>
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setActiveIndustry(ind)}
                style={{
                  flexShrink: 0, padding: '7px 16px', borderRadius: 999, fontSize: 13, fontWeight: 500, cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'background 0.2s, color 0.2s',
                  background: activeIndustry === ind ? '#FF5A14' : 'rgba(255,255,255,0.04)',
                  color: activeIndustry === ind ? 'white' : 'rgba(240,237,230,0.65)',
                  border: activeIndustry === ind ? 'none' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* ── CARD GRID ────────────────────────────────────────────────────── */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
          <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
            <AnimatePresence mode="popLayout">
              {filtered.map(wf => (
                <motion.div
                  key={wf.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedWorkflow(wf)}
                  style={{
                    background: 'rgba(20,20,20,0.9)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12,
                    padding: 20,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(255,90,20,0.3)'
                    el.style.boxShadow = '0 8px 32px rgba(255,90,20,0.08)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: wf.industryColor, background: `${wf.industryColor}1A`, border: `1px solid ${wf.industryColor}30`, borderRadius: 999, padding: '3px 10px', fontFamily: "'Syne', sans-serif", letterSpacing: '0.03em' }}>
                      {wf.industry}
                    </span>
                    <span style={{ fontSize: 12, color: '#FF5A14', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={11} /> {wf.timeSaved}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 6, color: '#F0EDE6', lineHeight: 1.35 }}>
                    {wf.title}
                  </h3>

                  <p style={{ fontSize: 12, color: 'rgba(240,237,230,0.5)', marginBottom: 16, lineHeight: 1.6 }}>
                    {wf.description}
                  </p>

                  <div style={{ marginBottom: 14 }}>
                    <WorkflowDiagram nodes={wf.nodes} nodeEmojis={wf.nodeEmojis} />
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                    {wf.tools.map(tool => (
                      <span key={tool} style={{ fontSize: 11, color: 'rgba(240,237,230,0.5)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, padding: '2px 8px' }}>
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#FF5A14', fontWeight: 600 }}>
                    See full build <ChevronRight size={13} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ── MODAL ────────────────────────────────────────────────────────── */}
        <AnimatePresence>
          {selectedWorkflow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWorkflow(null)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, backdropFilter: 'blur(4px)' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={e => e.stopPropagation()}
                style={{ background: '#141414', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, maxWidth: 680, width: '100%', maxHeight: '88vh', overflowY: 'auto', padding: 32, position: 'relative' }}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedWorkflow(null)}
                  style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: 8, cursor: 'pointer', color: 'rgba(240,237,230,0.6)', display: 'flex', alignItems: 'center' }}
                >
                  <X size={18} />
                </button>

                <span style={{ fontSize: 11, fontWeight: 600, color: selectedWorkflow.industryColor, background: `${selectedWorkflow.industryColor}1A`, border: `1px solid ${selectedWorkflow.industryColor}30`, borderRadius: 999, padding: '3px 10px', display: 'inline-block', marginBottom: 16, fontFamily: "'Syne', sans-serif" }}>
                  {selectedWorkflow.industry}
                </span>

                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800, marginBottom: 12, color: '#F0EDE6', lineHeight: 1.2 }}>
                  {selectedWorkflow.title}
                </h2>

                <p style={{ fontSize: 14, color: 'rgba(240,237,230,0.65)', marginBottom: 24, lineHeight: 1.7 }}>
                  {selectedWorkflow.description}
                </p>

                <div style={{ marginBottom: 28 }}>
                  <WorkflowDiagram nodes={selectedWorkflow.nodes} nodeEmojis={selectedWorkflow.nodeEmojis} large />
                </div>

                {/* Steps */}
                <div style={{ marginBottom: 24 }}>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', color: 'rgba(240,237,230,0.35)', textTransform: 'uppercase', marginBottom: 14 }}>How it works</h4>
                  <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {selectedWorkflow.steps.map((step, i) => (
                      <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <span style={{ flexShrink: 0, width: 22, height: 22, background: 'rgba(255,90,20,0.12)', border: '1px solid rgba(255,90,20,0.25)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#FF5A14', fontFamily: "'Syne', sans-serif" }}>
                          {i + 1}
                        </span>
                        <span style={{ fontSize: 14, color: 'rgba(240,237,230,0.75)', lineHeight: 1.55 }}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tools */}
                <div style={{ marginBottom: 24 }}>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', color: 'rgba(240,237,230,0.35)', textTransform: 'uppercase', marginBottom: 10 }}>Tech stack</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {selectedWorkflow.tools.map(tool => (
                      <span key={tool} style={{ fontSize: 13, color: '#F0EDE6', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6, padding: '5px 12px' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Build time CTA */}
                <div style={{ background: 'rgba(255,90,20,0.06)', border: '1px solid rgba(255,90,20,0.15)', borderRadius: 10, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 14, color: 'rgba(240,237,230,0.7)' }}>
                    <span style={{ fontWeight: 600, color: '#FF5A14' }}>Typical build: </span>
                    {selectedWorkflow.buildTime}
                  </span>
                  <a
                    href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF5A14', color: 'white', borderRadius: 8, padding: '11px 22px', fontWeight: 600, fontSize: 14, textDecoration: 'none', fontFamily: "'Syne', sans-serif", flexShrink: 0 }}
                  >
                    Build this for my team <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── BOTTOM CTA ───────────────────────────────────────────────────── */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px 96px', textAlign: 'center' }}>
          <div style={{ background: 'rgba(20,20,20,0.9)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '56px 40px' }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, marginBottom: 16, color: '#F0EDE6' }}>
              Don't see your use case?
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(240,237,230,0.6)', marginBottom: 32, lineHeight: 1.65 }}>
              We scope, build and ship custom AI automations in fixed-price sprints.<br />Zero delivery risk.
            </p>
            <a
              href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FF5A14', color: 'white', borderRadius: 8, padding: '16px 32px', fontWeight: 700, fontSize: 16, textDecoration: 'none', fontFamily: "'Syne', sans-serif" }}
            >
              Start my AI build <ArrowRight size={18} />
            </a>
            <p style={{ marginTop: 24, fontSize: 12, color: 'rgba(240,237,230,0.3)' }}>
              All workflows shown have been built and deployed by Kovil AI engineers.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
