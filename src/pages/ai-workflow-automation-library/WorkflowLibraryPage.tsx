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
    tools: ['n8n', 'GPT-4o', 'Google Sheets', 'Slack', 'Calendly'],
    timeSaved: '4 hrs/deal',
    steps: ['New deal enters pipeline', 'Validate against policy rules (automated)', 'GPT-4o extracts key deal terms from documents', 'Auto-populate standardised deal sheet in Google Sheets', 'Notify deal team via Slack', 'Auto-schedule review call via Calendly'],
    buildTime: '2 week sprint',
  },
  // HEALTHTECH
  {
    id: 7, industry: 'HealthTech', industryColor: '#F87171',
    title: 'AI Patient Intake Automation',
    description: 'Patient submits intake → Voice AI collects missing info → AI extracts structured data → push to 3 EHR systems → flag high-risk → alert team',
    nodes: ['Intake Form', 'Voice AI', 'AI Extract', 'EHR Push', 'Risk Flag'],
    nodeEmojis: ['📋', '🎙️', '🤖', '🏥', '⚠️'],
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
    tools: ['OpenAI Whisper', 'GPT-4o', 'EHR API', 'n8n'],
    timeSaved: '45 min/day per doctor',
    steps: ['Doctor uploads audio recording of consultation', 'Whisper API transcribes audio to text', 'GPT-4o structures transcript into SOAP note format', 'Doctor reviews and approves in lightweight UI', 'Approved note pushed directly to EHR system'],
    buildTime: '2–3 week sprint',
  },
  // SAAS & B2B
  {
    id: 10, industry: 'SaaS & B2B', industryColor: '#60A5FA',
    title: 'Manual Approval Workflow Automation',
    description: 'Request submitted → AI classifies type → routes to correct approver → auto-drafts decision message → sends decision → logs to Airtable',
    nodes: ['Form Submit', 'AI Classify', 'Route', 'Draft', 'Send'],
    nodeEmojis: ['📋', '🤖', '🔀', '✏️', '📤'],
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
    tools: ['GPT-4o', 'Python', 'HubSpot', 'Gmail', 'n8n'],
    timeSaved: '3 hrs/day CSM time',
    steps: ['Daily trigger fires at 6am', 'Pull usage metrics per account from product database', 'AI churn risk model scores each account (0–100)', 'Flag accounts scoring >70 as high risk', 'GPT-4o drafts personalised outreach email per account', 'Log risk scores and outreach status to HubSpot'],
    buildTime: '3–4 week sprint',
  },
  // ECOMMERCE
  {
    id: 13, industry: 'E-Commerce', industryColor: '#FBBF24',
    title: 'AI Customer Service Chatbot',
    description: 'Customer message → intent classifier → RAG searches product/policy docs → GPT-4o response → sentiment check → send or escalate',
    nodes: ['Message', 'Intent', 'RAG Search', 'GPT-4o', 'Send/Escalate'],
    nodeEmojis: ['💬', '🎯', '🔍', '🤖', '📤'],
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
    tools: ['Shopify API', 'GPT-4o', 'Klaviyo', 'Twilio', 'n8n'],
    timeSaved: '15% revenue recovery',
    steps: ['Cart abandonment event fires from Shopify', 'Wait 1 hour (grace period)', 'GPT-4o generates personalised recovery email with product details', 'Send email via Klaviyo', 'Check for purchase after 24 hours', 'No purchase: send SMS via Twilio with discount code'],
    buildTime: '1–2 week sprint',
  },
  // LEGALTECH
  {
    id: 16, industry: 'LegalTech', industryColor: '#F472B6',
    title: 'Contract Review Automation',
    description: 'Contract uploaded → GPT-4o Vision extracts clauses → AI risk classifier → flags non-standard terms → redline summary → lawyer review',
    nodes: ['Upload', 'GPT-4o Extract', 'Risk Classify', 'Flag Terms', 'Redline'],
    nodeEmojis: ['📄', '👁️', '🤖', '⚠️', '📝'],
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
    tools: ['OpenAI Whisper', 'GPT-4o', 'Python', 'n8n', 'Google Docs'],
    timeSaved: '3 hrs → 20 min',
    steps: ['Deposition audio or transcript uploaded', 'Whisper transcribes audio to text (if audio)', 'GPT-4o reads full transcript', 'Extract: key admissions, contradictions, important quotes', 'Generate structured deposition summary with timestamps', 'Attorney reviews and exports to Google Docs'],
    buildTime: '2 week sprint',
  },
  // PROPTECH
  {
    id: 19, industry: 'PropTech', industryColor: '#2DD4BF',
    title: 'AI Lead Qualification & Routing',
    description: 'New enquiry → AI scores lead quality → classifies property preference → routes to specialist agent → auto-sends property matches → CRM log',
    nodes: ['Enquiry', 'AI Score', 'Classify', 'Route Agent', 'Match'],
    nodeEmojis: ['🏠', '🤖', '🏷️', '👤', '🔍'],
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
    tools: ['GPT-4o', 'n8n', 'Twilio', 'Google Calendar', 'Airtable'],
    timeSaved: '1 hr/request',
    steps: ['Tenant submits maintenance request via app or SMS', 'AI classifies urgency (emergency/urgent/routine) and trade', 'Route to correct contractor from approved list', 'Auto-schedule via Google Calendar, confirm with contractor', 'Track job completion status in Airtable', 'SMS tenant with confirmation and completion update'],
    buildTime: '2 week sprint',
  },
  // LOGISTICS
  {
    id: 22, industry: 'Logistics', industryColor: '#FB923C',
    title: 'AI Shipment Exception Handler',
    description: 'Delay detected → AI classifies exception → notifies customer with ETA → raises carrier claim if needed → updates order management → logs',
    nodes: ['Delay Alert', 'AI Classify', 'Notify Customer', 'Carrier Claim?', 'Update OMS'],
    nodeEmojis: ['🚨', '🤖', '📧', '📋', '🔄'],
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
    tools: ['GPT-4o', 'Python', 'Google Maps API', 'n8n', 'Twilio'],
    timeSaved: '25% fuel cost reduction',
    steps: ['Pull all orders for the day at 6am', 'AI route optimisation algorithm runs', 'Assign optimised routes to available drivers', 'Push route to driver mobile app', 'Real-time monitoring: flag exceptions (delays, failed deliveries)', 'Auto-send ETA updates to customers via SMS'],
    buildTime: '4–6 week sprint',
  },
]

const industries = ['All', 'Ad & Marketing', 'FinTech', 'HealthTech', 'SaaS & B2B', 'E-Commerce', 'LegalTech', 'PropTech', 'Logistics']

// ── Node Diagram ──────────────────────────────────────────────────────────────

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
          Real automations<br />
          <span className="bg-gradient-to-r from-[#FF4F00] to-[#FF8A00] bg-clip-text text-transparent">built &amp; deployed by</span><br />
          Kovil AI engineers
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.18 }}
          className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/55"
        >
          Browse 24 real-world AI workflow automations across 8 industries. See the stack, steal the flow, or have us build it for you.
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
          {['24 workflows documented', '8 industries covered', 'n8n · GPT-4o · LangChain · Make'].map((s, i) => (
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
        <p className="mb-6 text-xs text-white/30">
          Showing <span className="text-white/60">{filtered.length}</span> workflow{filtered.length !== 1 ? 's' : ''}
          {activeIndustry !== 'All' && <> in <span className="text-white/60">{activeIndustry}</span></>}
        </p>

        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map(wf => {
              // Card #1 links to a dedicated deep-dive page; rest open the modal
              const hasDedicatedPage = wf.id === 1
              const slug = 'campaign-performance-reporting'

              const cardContent = (
                <>
                  {/* Colored top accent bar */}
                  <div
                    className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, ${wf.industryColor}, ${wf.industryColor}55)` }}
                  />

                  {/* Hover glow overlay */}
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
                  <p className="mt-1.5 text-[12px] leading-relaxed text-white/40">
                    {wf.description}
                  </p>

                  {/* Diagram */}
                  <div className="mt-4">
                    <WorkflowDiagram nodes={wf.nodes} nodeEmojis={wf.nodeEmojis} />
                  </div>

                  {/* Tools */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {wf.tools.slice(0, 4).map(t => (
                      <span key={t} className="rounded px-2 py-0.5 text-[10px] text-white/40 border border-white/[0.07] bg-white/[0.03]">
                        {t}
                      </span>
                    ))}
                    {wf.tools.length > 4 && (
                      <span className="rounded px-2 py-0.5 text-[10px] text-white/30 border border-white/[0.05]">
                        +{wf.tools.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-white/40 transition-colors group-hover:text-white/70"
                      style={{ color: hasDedicatedPage ? undefined : undefined }}>
                      {hasDedicatedPage ? (
                        <span className="flex items-center gap-1 font-semibold" style={{ color: wf.industryColor }}>
                          Full workflow deep-dive <ExternalLink size={11} />
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          View workflow <ChevronRight size={12} strokeWidth={2.5} />
                        </span>
                      )}
                    </div>
                    {hasDedicatedPage && (
                      <span className="rounded-full bg-[#FF4F00]/10 border border-[#FF4F00]/25 px-2 py-0.5 text-[10px] font-semibold text-[#FF4F00] font-display">
                        Detailed
                      </span>
                    )}
                  </div>
                </>
              )

              const sharedMotionProps = {
                key: wf.id,
                layout: true,
                initial: { opacity: 0, scale: 0.97 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.97 },
                transition: { duration: 0.18 },
                whileHover: { y: -3 },
                className: "group relative cursor-pointer rounded-2xl border border-white/[0.07] bg-[#111111] p-5 pt-6 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]",
                style: { '--hover-border': `${wf.industryColor}35` } as React.CSSProperties,
                onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${wf.industryColor}35`
                },
                onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                },
              }

              return hasDedicatedPage ? (
                <motion.article
                  {...sharedMotionProps}
                  onClick={undefined}
                >
                  <Link
                    href={`/ai-workflow-automation-library/${slug}`}
                    className="absolute inset-0 z-10"
                    aria-label={wf.title}
                  />
                  {cardContent}
                </motion.article>
              ) : (
                <motion.article
                  {...sharedMotionProps}
                  onClick={() => setSelectedWorkflow(wf)}
                >
                  {cardContent}
                </motion.article>
              )
            })}
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
            All 24 workflows have been built and deployed by Kovil AI engineers.
          </p>
        </div>
      </section>

    </div>
  )
}
