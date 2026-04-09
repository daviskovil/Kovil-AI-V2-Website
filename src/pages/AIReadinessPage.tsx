'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, ArrowLeft, CheckCircle2, Clock, Zap, BarChart3, Users,
  AlertTriangle, TrendingUp, Wrench, Download,
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { OnboardingModal } from '../components/OnboardingModal'

// ── JSON-LD ──────────────────────────────────────────────────────────────────

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'AI Readiness Assessment for Ad & Marketing Agencies',
  description:
    'Free AI readiness assessment for ad and marketing agencies. Find out where you stand on AI automation readiness and get a personalised action plan.',
  url: 'https://kovil.ai/ai-readiness-ad-marketing-agencies',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'AI Readiness Assessment',
      item: 'https://kovil.ai/ai-readiness-ad-marketing-agencies',
    },
  ],
}

// ── Types ────────────────────────────────────────────────────────────────────

type Step = 1 | 2 | 3 | 4 | 'results'

interface FormData {
  agencyName: string
  contactName: string
  email: string
  teamSize: string
  specialization: string[]
  borough: string[]
  painPoints: string[]
  tools: string[]
  aiMaturity: string
  toolsUsed: string
  openness: string
  budget: string
}

interface Opportunity {
  title: string
  impact: string
  timeline: string
  description: string
}

interface RiskFlag {
  text: string
  severity: 'high' | 'medium' | 'low'
}

interface AssessmentResult {
  score: number
  tier: string
  tierColor: string
  summary: string
  dimensionScores: { automation: number; data: number; team: number; tooling: number }
  topOpportunities: Opportunity[]
  recommendedTools: string[]
  riskFlags: RiskFlag[]
}

// ── Constants ────────────────────────────────────────────────────────────────

const INITIAL_DATA: FormData = {
  agencyName: '', contactName: '', email: '',
  teamSize: '', specialization: [], borough: [],
  painPoints: [], tools: [],
  aiMaturity: '', toolsUsed: '', openness: '', budget: '',
}

const TEAM_SIZES = ['1–10', '11–50', '51–200', '200+']
const SPECIALIZATIONS = [
  'Performance/Paid Media', 'Creative & Branding', 'Social Media',
  'SEO/Content', 'Influencer Marketing', 'Full-Service', 'PR & Comms', 'Other',
]
const BOROUGHS = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island', 'Remote/Hybrid']
const PAIN_POINTS = [
  'Manual reporting & analytics', 'Slow creative production',
  'Repetitive client communication', 'Campaign performance monitoring',
  'Content ideation & briefs', 'Proposal & pitch deck creation',
  'Ad copy generation at scale', 'Data aggregation',
  'Budget pacing', 'Talent/resource allocation',
]
const TOOL_CATEGORIES = [
  { name: 'Ad Platforms', tools: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'The Trade Desk', 'DV360'] },
  { name: 'Project Management', tools: ['Asana', 'Monday.com', 'Notion', 'Jira', 'ClickUp', 'Basecamp'] },
  { name: 'Analytics', tools: ['Google Analytics 4', 'Looker Studio', 'Tableau', 'Power BI', 'Triple Whale', 'Northbeam'] },
  { name: 'Creative', tools: ['Canva', 'Adobe Creative Cloud', 'Figma', 'Midjourney', 'Runway', 'DALL-E'] },
  { name: 'CRM / Comms', tools: ['Salesforce', 'HubSpot', 'Slack', 'Microsoft Teams', 'Zapier', 'Make'] },
]
const AI_MATURITY_OPTIONS = ['None', 'Experimenting', 'Partial Adoption', 'Integrated', 'AI-First']
const OPENNESS_OPTIONS = ['Skeptical', 'Curious', 'Ready', 'Urgent']
const BUDGET_OPTIONS = ['Under $5K', '$5K–$15K', '$15K–$50K', '$50K+']

// ── Scoring ───────────────────────────────────────────────────────────────────

const OPPORTUNITY_MAP: Record<string, Opportunity> = {
  'Manual reporting & analytics': {
    title: 'Automated Reporting Dashboard',
    impact: 'High', timeline: '2–4 weeks',
    description: 'Connect ad platforms and analytics into a single automated dashboard. Eliminate 5–10 hours/week of manual data pulls.',
  },
  'Slow creative production': {
    title: 'AI-Assisted Creative Production',
    impact: 'High', timeline: '4–6 weeks',
    description: 'Integrate AI image and copy generation into your creative workflow. Reduce brief-to-asset time by 40–60%.',
  },
  'Repetitive client communication': {
    title: 'Client Communication Automation',
    impact: 'Medium', timeline: '2–3 weeks',
    description: 'Automate recurring status updates, performance summaries, and meeting prep using LLM-powered templates.',
  },
  'Campaign performance monitoring': {
    title: 'AI Campaign Monitoring & Alerts',
    impact: 'High', timeline: '1–2 weeks',
    description: 'Intelligent alerting that flags budget pacing issues and performance drops before they become problems.',
  },
  'Content ideation & briefs': {
    title: 'AI Content Brief Generator',
    impact: 'Medium', timeline: '1–2 weeks',
    description: "A prompt-based brief generator trained on your agency's tone. Cut brief creation time from hours to minutes.",
  },
  'Proposal & pitch deck creation': {
    title: 'Proposal Automation',
    impact: 'Medium', timeline: '3–4 weeks',
    description: 'Auto-populate proposals using CRM data and AI-generated strategy sections. Win more pitches with less effort.',
  },
  'Ad copy generation at scale': {
    title: 'AI Ad Copy at Scale',
    impact: 'High', timeline: '1–3 weeks',
    description: 'LLM-powered copy generation for A/B test variants. Generate 50+ variants per campaign in the time it takes to write 5.',
  },
  'Data aggregation': {
    title: 'Data Pipeline Automation',
    impact: 'High', timeline: '3–5 weeks',
    description: 'Automated ETL pipelines connecting ad platforms, CRM, and analytics. One source of truth, always current.',
  },
  'Budget pacing': {
    title: 'Automated Budget Pacing',
    impact: 'Medium', timeline: '2–3 weeks',
    description: 'Automated budget pacing alerts and reallocation recommendations across client portfolios. Reduce waste and manual oversight.',
  },
  'Talent/resource allocation': {
    title: 'Resource Allocation Optimisation',
    impact: 'Medium', timeline: '4–6 weeks',
    description: 'Forecast capacity, flag overloading, and optimise team assignment based on project type and workload.',
  },
}

const TOOL_RECS: Record<string, string[]> = {
  'Performance/Paid Media': ['n8n (automation)', 'Claude API (copy gen)', 'Looker Studio (reporting)'],
  'Creative & Branding': ['Midjourney (imagery)', 'Claude API (briefs)', 'Runway (video)'],
  'Social Media': ['n8n (scheduling)', 'Claude API (copy)', 'Buffer (distribution)'],
  'SEO/Content': ['Claude API (content)', 'Ahrefs (research)', 'n8n (publishing workflows)'],
  'Influencer Marketing': ['n8n (outreach automation)', 'Claude API (briefs)', 'HubSpot (CRM)'],
  'Full-Service': ['n8n (orchestration)', 'Claude API (multi-use)', 'Zapier (integrations)'],
  'PR & Comms': ['Claude API (drafting)', 'n8n (monitoring)', 'Zapier (distribution)'],
  'Other': ['n8n (workflow automation)', 'Claude API (AI tasks)', 'Zapier (integrations)'],
}

function calculateResults(data: FormData): AssessmentResult {
  const maturityScore = ({ None: 5, Experimenting: 15, 'Partial Adoption': 25, Integrated: 35, 'AI-First': 40 } as Record<string, number>)[data.aiMaturity] ?? 5
  const opennessScore = ({ Skeptical: 5, Curious: 10, Ready: 16, Urgent: 20 } as Record<string, number>)[data.openness] ?? 5
  const budgetScore = ({ 'Under $5K': 5, '$5K–$15K': 10, '$15K–$50K': 16, '$50K+': 20 } as Record<string, number>)[data.budget] ?? 5
  const toolCount = data.tools.length
  const toolsScore = toolCount >= 10 ? 10 : toolCount >= 6 ? 7 : toolCount >= 3 ? 5 : 2
  const teamScore = ({ '1–10': 5, '11–50': 7, '51–200': 9, '200+': 10 } as Record<string, number>)[data.teamSize] ?? 5

  const score = Math.min(100, maturityScore + opennessScore + budgetScore + toolsScore + teamScore)

  let tier: string, tierColor: string, summary: string
  const name = data.agencyName || 'Your agency'
  if (score >= 76) {
    tier = 'Advanced Adopter'; tierColor = 'text-green-500'
    summary = `${name} is well ahead of the curve. You have the infrastructure, budget, and team readiness to implement high-impact AI automation across multiple workflows simultaneously.`
  } else if (score >= 56) {
    tier = 'AI-Ready'; tierColor = 'text-orange-500'
    summary = `${name} has a solid foundation. A few targeted automations — starting with your top pain points — could deliver measurable ROI within 60 days.`
  } else if (score >= 36) {
    tier = 'Building Momentum'; tierColor = 'text-yellow-500'
    summary = `${name} is moving in the right direction. Focus on 1–2 high-leverage quick wins to build internal confidence before scaling.`
  } else {
    tier = 'Early Stage'; tierColor = 'text-blue-500'
    summary = `${name} is at the start of the AI journey. The biggest gains are available right now from basic workflow automation — no complex AI required yet.`
  }

  const hasAnalytics = data.tools.some(t =>
    ['Google Analytics 4', 'Looker Studio', 'Tableau', 'Power BI', 'Triple Whale', 'Northbeam'].includes(t)
  )

  const dimensionScores = {
    automation: Math.min(100, Math.round((data.painPoints.length / 10) * 50 + (maturityScore / 40) * 50)),
    data: Math.min(100, Math.round((toolCount / 15) * 60 + (hasAnalytics ? 30 : 0) + 10)),
    team: Math.min(100, Math.round((opennessScore / 20) * 60 + (maturityScore / 40) * 40)),
    tooling: Math.min(100, Math.round((budgetScore / 20) * 50 + (toolsScore / 10) * 30 + (data.toolsUsed.length > 5 ? 20 : 5))),
  }

  const selected = data.painPoints.filter(p => OPPORTUNITY_MAP[p]).map(p => OPPORTUNITY_MAP[p])
  const defaults = [OPPORTUNITY_MAP['Manual reporting & analytics'], OPPORTUNITY_MAP['Ad copy generation at scale'], OPPORTUNITY_MAP['Campaign performance monitoring']]
  const topOpportunities = [...selected, ...defaults].filter((v, i, a) => a.indexOf(v) === i).slice(0, 3)

  const recommendedTools = TOOL_RECS[data.specialization[0]] ?? TOOL_RECS['Other']

  const riskFlags: RiskFlag[] = []
  if (data.openness === 'Skeptical') riskFlags.push({ text: 'Team skepticism will slow adoption — change management is as important as the technology', severity: 'high' })
  if (data.budget === 'Under $5K') riskFlags.push({ text: 'Limited budget restricts scope — focus on one high-ROI automation before expanding', severity: 'medium' })
  if (data.aiMaturity === 'None' && data.painPoints.length > 5) riskFlags.push({ text: 'High pain count with no AI adoption yet — significant quick-win potential being left on the table', severity: 'medium' })
  if (toolCount < 3) riskFlags.push({ text: 'Limited tooling infrastructure may slow automation implementation', severity: 'low' })

  return { score, tier, tierColor, summary, dimensionScores, topOpportunities, recommendedTools, riskFlags }
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SelectChip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-all ${
        selected
          ? 'bg-orange-500 border-orange-500 text-white'
          : 'bg-background border-border text-muted-foreground hover:border-orange-400 hover:text-foreground'
      }`}
    >
      {label}
    </button>
  )
}

function RadioCard({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl border text-sm font-medium text-left transition-all ${
        selected
          ? 'bg-orange-500/10 border-orange-500 text-foreground'
          : 'bg-background border-border text-muted-foreground hover:border-orange-400 hover:text-foreground'
      }`}
    >
      {selected && <span className="mr-1.5 text-orange-500">✓</span>}
      {label}
    </button>
  )
}

function DimensionBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-muted-foreground font-medium capitalize">{label}</span>
        <span className="text-foreground font-semibold">{value}</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="h-full bg-orange-500 rounded-full"
        />
      </div>
    </div>
  )
}

// ── Hero static bits ──────────────────────────────────────────────────────────

const HERO_PILLS = [
  { icon: Clock,     label: '3 minutes',      sub: 'to complete' },
  { icon: Zap,       label: 'Instant results', sub: 'no email required' },
  { icon: BarChart3, label: 'Scored across',   sub: '4 readiness dimensions' },
  { icon: Users,     label: 'Built for',       sub: 'agency founders & ops leaders' },
]

const WHAT_YOU_GET = [
  'Your AI readiness score across automation, data, team, and tooling dimensions',
  'The highest-leverage automation opportunities specific to your agency type',
  'A prioritised action plan — what to do first, second, and what to skip',
  'Honest context on what AI can and cannot realistically deliver for your situation',
]

// ── Main component ────────────────────────────────────────────────────────────

export default function AIReadinessPage() {
  const [step, setStep] = useState<Step>(1)
  const [data, setData] = useState<FormData>(INITIAL_DATA)
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [downloading, setDownloading] = useState(false)

  async function handleDownloadPDF() {
    const reportEl = document.querySelector<HTMLElement>('.kovil-print-report')
    if (!reportEl || !result) return
    setDownloading(true)
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ])
      // Temporarily render off-screen so html2canvas can capture it
      const prev = { display: reportEl.style.display, position: reportEl.style.position, left: reportEl.style.left, top: reportEl.style.top, width: reportEl.style.width }
      reportEl.style.display = 'block'
      reportEl.style.position = 'absolute'
      reportEl.style.left = '-9999px'
      reportEl.style.top = '0'
      reportEl.style.width = '794px'
      await new Promise(r => setTimeout(r, 50)) // let browser paint
      const canvas = await html2canvas(reportEl, { scale: 2, useCORS: true, backgroundColor: '#ffffff' })
      // Restore
      Object.assign(reportEl.style, prev)
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      const pdfW = pdf.internal.pageSize.getWidth()
      const pdfH = (canvas.height * pdfW) / canvas.width
      const imgData = canvas.toDataURL('image/jpeg', 0.92)
      // Handle multi-page if content is taller than A4
      const pageH = pdf.internal.pageSize.getHeight()
      if (pdfH <= pageH) {
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfW, pdfH)
      } else {
        let yOffset = 0
        while (yOffset < pdfH) {
          pdf.addImage(imgData, 'JPEG', 0, -yOffset, pdfW, pdfH)
          yOffset += pageH
          if (yOffset < pdfH) pdf.addPage()
        }
      }
      const filename = `kovil-ai-readiness-${(data.agencyName || 'report').toLowerCase().replace(/\s+/g, '-')}.pdf`
      pdf.save(filename)
    } finally {
      setDownloading(false)
    }
  }

  function toggle(field: 'painPoints' | 'tools' | 'specialization' | 'borough', value: string) {
    setData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(v => v !== value)
        : [...(prev[field] as string[]), value],
    }))
  }

  function set(field: keyof FormData, value: string) {
    setData(prev => ({ ...prev, [field]: value }))
  }

  function handleGenerate() {
    setResult(calculateResults(data))
    setStep('results')
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
  }

  const stepTitles: Record<number, string> = {
    1: 'Agency Profile',
    2: 'Workflow Pain Points',
    3: 'Current Tools',
    4: 'AI Maturity',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* ── Print styles ─────────────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          /* Hide everything except the report */
          body * { visibility: hidden; }
          .kovil-print-report, .kovil-print-report * { visibility: visible; }
          .kovil-print-report { display: block !important; position: fixed; inset: 0; padding: 32px 40px; background: #fff; color: #111; font-family: system-ui, sans-serif; }

          /* Print header */
          .kovil-print-header { display: flex !important; justify-content: space-between; align-items: center; border-bottom: 2px solid #f97316; padding-bottom: 12px; margin-bottom: 24px; }

          /* Cards */
          .kovil-print-card { border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px 20px; margin-bottom: 16px; break-inside: avoid; }
          .kovil-print-card h3 { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin-bottom: 12px; }

          /* Score */
          .kovil-print-score { font-size: 64px; font-weight: 800; color: #111; line-height: 1; }
          .kovil-print-tier { font-size: 18px; font-weight: 600; color: #f97316; margin-top: 4px; margin-bottom: 8px; }

          /* Dimension bars */
          .kovil-print-bar-track { height: 8px; background: #f3f4f6; border-radius: 4px; overflow: hidden; margin-top: 4px; }
          .kovil-print-bar-fill { height: 8px; background: #f97316; border-radius: 4px; }

          /* Opportunity cards */
          .kovil-print-opp { display: flex; gap: 12px; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 8px; break-inside: avoid; }
          .kovil-print-badge { height: 24px; width: 24px; border-radius: 50%; background: #f97316; color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
          .kovil-print-impact { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; padding: 2px 8px; border-radius: 99px; background: #fff7ed; color: #f97316; margin-left: 6px; }

          /* Two-col grid */
          .kovil-print-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

          /* Risk dot */
          .kovil-print-dot-high  { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #ef4444; margin-right: 6px; flex-shrink: 0; }
          .kovil-print-dot-medium{ display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #eab308; margin-right: 6px; flex-shrink: 0; }
          .kovil-print-dot-low   { display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #60a5fa; margin-right: 6px; flex-shrink: 0; }

          /* Footer */
          .kovil-print-footer { margin-top: 24px; border-top: 1px solid #e5e7eb; padding-top: 10px; font-size: 11px; color: #9ca3af; display: flex; justify-content: space-between; }

          /* Hide screen-only elements */
          .no-print { display: none !important; }

          @page { margin: 0; size: A4 portrait; }
        }
      ` }} />

      <main className="min-h-screen bg-background">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold text-orange-500 uppercase tracking-widest mb-4">
              Free Assessment · Ad &amp; Marketing Agencies
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
              Is Your Agency<br className="hidden sm:block" /> Ready for AI?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Most agencies know AI matters. Very few know where to start, what to automate first, or whether their data and team are actually ready. This assessment tells you exactly where you stand — in 3 minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {HERO_PILLS.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-2.5 bg-muted/60 border border-border rounded-full px-4 py-2">
                <Icon className="h-4 w-4 text-orange-500 shrink-0" />
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <span className="text-sm text-muted-foreground">{sub}</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Assessment ────────────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <AnimatePresence mode="wait">

            {/* ── Results ─────────────────────────────────────────────────── */}
            {step === 'results' && result && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="space-y-6"
              >
                {/* Score card */}
                <div className="rounded-2xl border border-border bg-card p-8 text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Your AI Readiness Score</p>
                  <div className="text-7xl font-bold text-foreground mb-2">{result.score}</div>
                  <div className={`text-lg font-semibold mb-4 ${result.tierColor}`}>{result.tier}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">{result.summary}</p>
                </div>

                {/* Dimension scores */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5">Readiness by Dimension</h2>
                  <div className="space-y-4">
                    {Object.entries(result.dimensionScores).map(([key, val]) => (
                      <DimensionBar key={key} label={key} value={val} />
                    ))}
                  </div>
                </div>

                {/* Top opportunities */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5">
                    <TrendingUp className="h-4 w-4 text-orange-500" /> Top 3 Automation Opportunities
                  </h2>
                  <div className="space-y-4">
                    {result.topOpportunities.map((opp, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-muted/40 border border-border">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">{i + 1}</div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-sm font-semibold text-foreground">{opp.title}</span>
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${opp.impact === 'High' ? 'bg-orange-500/15 text-orange-500' : 'bg-muted text-muted-foreground'}`}>{opp.impact} impact</span>
                            <span className="text-[10px] text-muted-foreground">{opp.timeline}</span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{opp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended tools + risk flags */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      <Wrench className="h-4 w-4 text-orange-500" /> Recommended Tools
                    </h2>
                    <ul className="space-y-2">
                      {result.recommendedTools.map((t) => (
                        <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {result.riskFlags.length > 0 && (
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        <AlertTriangle className="h-4 w-4 text-orange-500" /> Risk Flags
                      </h2>
                      <ul className="space-y-3">
                        {result.riskFlags.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={`mt-0.5 h-2 w-2 rounded-full shrink-0 ${f.severity === 'high' ? 'bg-red-500' : f.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-400'}`} />
                            <span className="text-xs text-muted-foreground leading-relaxed">{f.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 no-print">
                  <Button
                    onClick={handleDownloadPDF}
                    variant="outline"
                    size="sm"
                    className="rounded-xl border-border gap-2"
                    disabled={downloading}
                  >
                    <Download className={`h-4 w-4 ${downloading ? 'animate-bounce' : ''}`} />
                    {downloading ? 'Generating PDF…' : 'Download PDF Report'}
                  </Button>
                  <button
                    type="button"
                    onClick={() => { setStep(1); setData(INITIAL_DATA); setResult(null) }}
                    className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
                  >
                    Retake assessment
                  </button>
                </div>

                {/* ── Print-only report ──────────────────────────────────── */}
                <div className="kovil-print-report hidden">
                  {/* Header */}
                  <div className="kovil-print-header">
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 20, color: '#111' }}>Kovil AI</div>
                      <div style={{ fontSize: 12, color: '#6b7280' }}>AI Readiness Report — Ad &amp; Marketing Agencies</div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: 12, color: '#6b7280' }}>
                      <div>{data.agencyName || 'Agency'}</div>
                      <div>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="kovil-print-card" style={{ textAlign: 'center', marginBottom: 16 }}>
                    <div className="kovil-print-score">{result.score}</div>
                    <div className="kovil-print-tier">{result.tier}</div>
                    <div style={{ fontSize: 13, color: '#374151', maxWidth: 480, margin: '0 auto', lineHeight: 1.5 }}>{result.summary}</div>
                  </div>

                  {/* Dimensions */}
                  <div className="kovil-print-card">
                    <h3>Readiness by Dimension</h3>
                    {Object.entries(result.dimensionScores).map(([key, val]) => (
                      <div key={key} style={{ marginBottom: 10 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 3 }}>
                          <span style={{ color: '#374151', fontWeight: 500, textTransform: 'capitalize' }}>{key}</span>
                          <span style={{ fontWeight: 700 }}>{val}</span>
                        </div>
                        <div className="kovil-print-bar-track">
                          <div className="kovil-print-bar-fill" style={{ width: `${val}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Opportunities */}
                  <div className="kovil-print-card">
                    <h3>Top 3 Automation Opportunities</h3>
                    {result.topOpportunities.map((opp, i) => (
                      <div key={i} className="kovil-print-opp">
                        <div className="kovil-print-badge">{i + 1}</div>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 13 }}>
                            {opp.title}
                            <span className="kovil-print-impact">{opp.impact}</span>
                            <span style={{ fontSize: 11, color: '#6b7280', marginLeft: 6 }}>{opp.timeline}</span>
                          </div>
                          <div style={{ fontSize: 12, color: '#6b7280', marginTop: 3, lineHeight: 1.5 }}>{opp.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tools + Risks */}
                  <div className="kovil-print-grid">
                    <div className="kovil-print-card">
                      <h3>Recommended Tools</h3>
                      {result.recommendedTools.map(t => (
                        <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 6, fontSize: 12, color: '#374151' }}>
                          <span style={{ color: '#f97316', flexShrink: 0 }}>✓</span> {t}
                        </div>
                      ))}
                    </div>
                    {result.riskFlags.length > 0 && (
                      <div className="kovil-print-card">
                        <h3>Risk Flags</h3>
                        {result.riskFlags.map((f, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 8, fontSize: 12, color: '#374151' }}>
                            <span className={`kovil-print-dot-${f.severity}`} style={{ marginTop: 4 }} />
                            <span style={{ lineHeight: 1.4 }}>{f.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="kovil-print-footer">
                    <span>Generated by Kovil AI · kovil.ai</span>
                    <span>Book a free strategy call → kovil.ai/apply</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Form steps ──────────────────────────────────────────────── */}
            {step !== 'results' && (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
              >
                {/* Progress bar */}
                <div className="h-1 bg-muted">
                  <div
                    className="h-full bg-orange-500 transition-all duration-500"
                    style={{ width: `${(step as number / 4) * 100}%` }}
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-orange-500 mb-0.5">Step {step} of 4</p>
                      <h2 className="text-xl font-bold text-foreground">{stepTitles[step as number]}</h2>
                    </div>
                  </div>

                  {/* ── Step 1 ── */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {([['agencyName', 'Agency name'], ['contactName', 'Your name'], ['email', 'Work email']] as [keyof FormData, string][]).map(([field, label]) => (
                          <div key={field} className={field === 'email' ? 'sm:col-span-2' : ''}>
                            <label className="block text-xs font-semibold text-muted-foreground mb-1.5">{label}</label>
                            <input
                              type={field === 'email' ? 'email' : 'text'}
                              value={data[field] as string}
                              onChange={e => set(field, e.target.value)}
                              placeholder={label}
                              className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 transition"
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2">Team size</label>
                        <div className="flex flex-wrap gap-2">
                          {TEAM_SIZES.map(s => <RadioCard key={s} label={s} selected={data.teamSize === s} onClick={() => set('teamSize', s)} />)}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2">
                          Agency specialisation <span className="font-normal text-muted-foreground/60">— select all that apply</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {SPECIALIZATIONS.map(s => (
                            <SelectChip key={s} label={s} selected={data.specialization.includes(s)} onClick={() => toggle('specialization', s)} />
                          ))}
                        </div>
                        {data.specialization.length > 0 && (
                          <p className="text-xs text-orange-500 mt-2 font-medium">{data.specialization.length} selected</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2">
                          Location <span className="font-normal text-muted-foreground/60">— select all that apply</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {BOROUGHS.map(b => (
                            <SelectChip key={b} label={b} selected={data.borough.includes(b)} onClick={() => toggle('borough', b)} />
                          ))}
                        </div>
                        {data.borough.length > 0 && (
                          <p className="text-xs text-orange-500 mt-2 font-medium">{data.borough.length} selected</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* ── Step 2 ── */}
                  {step === 2 && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-4">Select all that apply — where does your team spend the most time on manual work?</p>
                      <div className="flex flex-wrap gap-2">
                        {PAIN_POINTS.map(p => (
                          <SelectChip key={p} label={p} selected={data.painPoints.includes(p)} onClick={() => toggle('painPoints', p)} />
                        ))}
                      </div>
                      {data.painPoints.length > 0 && (
                        <p className="text-xs text-orange-500 mt-3 font-medium">{data.painPoints.length} selected</p>
                      )}
                    </div>
                  )}

                  {/* ── Step 3 ── */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <p className="text-sm text-muted-foreground">Select all tools your team currently uses.</p>
                      {TOOL_CATEGORIES.map(cat => (
                        <div key={cat.name}>
                          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{cat.name}</p>
                          <div className="flex flex-wrap gap-2">
                            {cat.tools.map(t => (
                              <SelectChip key={t} label={t} selected={data.tools.includes(t)} onClick={() => toggle('tools', t)} />
                            ))}
                          </div>
                        </div>
                      ))}
                      {data.tools.length > 0 && (
                        <p className="text-xs text-orange-500 font-medium">{data.tools.length} tools selected</p>
                      )}
                    </div>
                  )}

                  {/* ── Step 4 ── */}
                  {step === 4 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2">Current AI usage</label>
                        <div className="flex flex-wrap gap-2">
                          {AI_MATURITY_OPTIONS.map(o => <RadioCard key={o} label={o} selected={data.aiMaturity === o} onClick={() => set('aiMaturity', o)} />)}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1.5">AI tools already in use <span className="font-normal">(optional)</span></label>
                        <input
                          type="text"
                          value={data.toolsUsed}
                          onChange={e => set('toolsUsed', e.target.value)}
                          placeholder="e.g. ChatGPT, Jasper, Perplexity…"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2">Team openness to AI</label>
                        <div className="flex flex-wrap gap-2">
                          {OPENNESS_OPTIONS.map(o => <RadioCard key={o} label={o} selected={data.openness === o} onClick={() => set('openness', o)} />)}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-2">Monthly AI/automation budget</label>
                        <div className="flex flex-wrap gap-2">
                          {BUDGET_OPTIONS.map(b => <RadioCard key={b} label={b} selected={data.budget === b} onClick={() => set('budget', b)} />)}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ── Nav buttons ── */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                    {(step as number) > 1 ? (
                      <Button variant="ghost" size="sm" onClick={() => setStep(((step as number) - 1) as Step)}>
                        <ArrowLeft className="mr-1.5 h-4 w-4" /> Back
                      </Button>
                    ) : <div />}

                    {(step as number) < 4 ? (
                      <Button
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl"
                        onClick={() => setStep(((step as number) + 1) as Step)}
                      >
                        Next <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 rounded-xl"
                        onClick={handleGenerate}
                        disabled={!data.aiMaturity || !data.openness || !data.budget}
                      >
                        Generate My Report <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ── What you get (hidden after results) ───────────────────────────── */}
        {step !== 'results' && (
          <section className="max-w-3xl mx-auto px-6 pb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }}
              className="bg-muted/40 border border-border rounded-2xl p-8"
            >
              <h2 className="text-xl font-bold text-foreground mb-5">What you get from this assessment</h2>
              <ul className="space-y-3.5">
                {WHAT_YOU_GET.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </section>
        )}

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="bg-foreground text-background py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.25 }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Want an expert to review your results?
              </h2>
              <p className="text-background/70 mb-8 leading-relaxed">
                Book a free 20-minute call with a Kovil AI engineer. We'll look at your assessment results, identify the highest-ROI automation for your agency, and tell you exactly what it would take to build it.
              </p>
              <OnboardingModal defaultGoal="automation">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 rounded-xl"
                >
                  Book a Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </OnboardingModal>
              <p className="text-background/40 text-xs mt-4">No pitch. No pressure. Just a direct conversation about what&apos;s possible.</p>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  )
}
