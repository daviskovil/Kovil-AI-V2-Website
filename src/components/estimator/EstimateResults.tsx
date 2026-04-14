'use client'

import { EstimateResult } from './useEstimator'

const ENGAGEMENT_LINKS: Record<string, string> = {
  'Managed AI Engineer': '/engage/managed-ai-engineer',
  'Outcome-Based Project': '/engage/outcome-based-project',
  'App Rescue': '/engage/app-rescue',
}

function formatCurrency(amount: number): string {
  if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}M`
  if (amount >= 1000) return `$${Math.round(amount / 1000)}k`
  return `$${amount}`
}

function severityColor(severity: 'High' | 'Medium' | 'Low'): { bg: string; text: string; border: string } {
  switch (severity) {
    case 'High': return { bg: 'rgba(239,68,68,0.1)', text: '#EF4444', border: 'rgba(239,68,68,0.3)' }
    case 'Medium': return { bg: 'rgba(245,158,11,0.1)', text: '#F59E0B', border: 'rgba(245,158,11,0.3)' }
    case 'Low': return { bg: 'rgba(59,130,246,0.1)', text: '#3B82F6', border: 'rgba(59,130,246,0.3)' }
  }
}

type GtagFn = (...args: unknown[]) => void
function fireGtag(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: GtagFn }).gtag === 'function') {
    ;(window as unknown as { gtag: GtagFn }).gtag('event', event, params ?? {})
  }
}

interface Props {
  result: EstimateResult
  onReset: () => void
}

export default function EstimateResults({ result, onReset }: Props) {
  const engagementLink = ENGAGEMENT_LINKS[result.engagementModel] ?? '/engage/managed-ai-engineer'
  const totalPhasesCost = result.phases.reduce((sum, p) => sum + p.cost, 0)

  const handleCtaClick = () => {
    fireGtag('estimator_cta_clicked', { engagement_model: result.engagementModel })
  }

  const handlePrint = () => {
    fireGtag('estimator_pdf_downloaded')
    window.print()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
          style={{ backgroundColor: 'rgba(255,90,20,0.1)', color: '#FF5A14', border: '1px solid rgba(255,90,20,0.2)' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L8.47 4.79L12.5 4.8L9.4 7.27L10.88 11.06L7 8.6L3.12 11.06L4.6 7.27L1.5 4.8L5.53 4.79L7 1Z" fill="#FF5A14"/>
          </svg>
          AI-Generated Estimate
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Your Project Estimate</h2>
        <p style={{ color: '#888888', fontSize: '15px' }}>
          Based on your inputs, here's a detailed breakdown of costs, timeline, and approach.
        </p>
      </div>

      {/* ── 1. Cost Estimate ── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#111111', border: '1.5px solid #222222' }}
      >
        <div className="px-6 py-4" style={{ borderBottom: '1px solid #1A1A1A' }}>
          <h3 className="font-semibold text-white">Cost Estimate</h3>
        </div>
        <div className="px-6 py-6">
          {/* Big cost range */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-6">
            <div
              className="inline-flex flex-col items-center sm:items-start px-6 py-4 rounded-2xl"
              style={{ backgroundColor: 'rgba(255,90,20,0.1)', border: '1.5px solid rgba(255,90,20,0.25)' }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#FF5A14' }}>
                Estimated Range
              </span>
              <span className="text-4xl font-bold" style={{ color: '#FF5A14' }}>
                {formatCurrency(result.costMin)} – {formatCurrency(result.costMax)}
              </span>
              <span className="text-sm mt-1" style={{ color: '#888888' }}>
                {result.currency} · All-in estimate
              </span>
            </div>
          </div>

          {/* Phase breakdown table */}
          {result.phases.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
                Phase Breakdown
              </h4>
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #1A1A1A' }}>
                {result.phases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-4 py-3"
                    style={{
                      borderBottom: idx < result.phases.length - 1 ? '1px solid #1A1A1A' : 'none',
                      backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <div>
                      <span className="text-sm font-medium text-white">{phase.name}</span>
                      <span className="text-xs ml-3" style={{ color: '#888888' }}>{phase.duration}</span>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: '#CCCCCC' }}>
                      {formatCurrency(phase.cost)}
                    </span>
                  </div>
                ))}
                {totalPhasesCost > 0 && (
                  <div
                    className="flex items-center justify-between px-4 py-3"
                    style={{ backgroundColor: 'rgba(255,90,20,0.06)', borderTop: '1px solid rgba(255,90,20,0.15)' }}
                  >
                    <span className="text-sm font-bold text-white">Total</span>
                    <span className="text-sm font-bold" style={{ color: '#FF5A14' }}>
                      {formatCurrency(totalPhasesCost)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── 2. Timeline ── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#111111', border: '1.5px solid #222222' }}
      >
        <div className="px-6 py-4" style={{ borderBottom: '1px solid #1A1A1A' }}>
          <h3 className="font-semibold text-white">Timeline</h3>
        </div>
        <div className="px-6 py-6">
          <div className="flex items-center gap-3 mb-6">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="#FF5A14" strokeWidth="1.5"/>
              <path d="M10 5.5V10.5L13 13" stroke="#FF5A14" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="text-2xl font-bold text-white">{result.timeline}</span>
            <span className="text-sm" style={{ color: '#888888' }}>estimated total duration</span>
          </div>

          {/* CSS-only phase timeline bar */}
          {result.phases.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
                Phase Timeline
              </h4>
              <div className="space-y-2">
                {result.phases.map((phase, idx) => {
                  const pct = Math.max(8, Math.round((phase.cost / (totalPhasesCost || 1)) * 100))
                  const opacity = 0.5 + (idx / Math.max(result.phases.length - 1, 1)) * 0.5
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-xs text-right flex-shrink-0" style={{ color: '#888888', width: '120px' }}>
                        {phase.name}
                      </span>
                      <div className="flex-1 rounded-full overflow-hidden" style={{ height: '8px', backgroundColor: '#1A1A1A' }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: `rgba(255,90,20,${opacity})`,
                            transition: 'width 0.8s ease-out',
                          }}
                        />
                      </div>
                      <span className="text-xs flex-shrink-0" style={{ color: '#888888', width: '56px' }}>
                        {phase.duration}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── 3. Engagement Model ── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#111111', border: '1.5px solid #222222' }}
      >
        <div className="px-6 py-4" style={{ borderBottom: '1px solid #1A1A1A' }}>
          <h3 className="font-semibold text-white">Recommended Engagement Model</h3>
        </div>
        <div className="px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold mb-3"
                style={{ backgroundColor: 'rgba(255,90,20,0.12)', color: '#FF5A14', border: '1px solid rgba(255,90,20,0.2)' }}
              >
                {result.engagementModel}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#CCCCCC' }}>
                {result.engagementReason}
              </p>
            </div>
            <a
              href={engagementLink}
              onClick={() => fireGtag('estimator_cta_clicked', { type: 'engagement_link' })}
              className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: '#FF5A14',
                color: 'white',
                padding: '10px 18px',
                borderRadius: '10px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Learn More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── 4. What's Included ── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: '#111111', border: '1.5px solid #222222' }}
      >
        <div className="px-6 py-4" style={{ borderBottom: '1px solid #1A1A1A' }}>
          <h3 className="font-semibold text-white">What&apos;s Included</h3>
        </div>
        <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Deliverables */}
          {result.deliverables.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
                Deliverables
              </h4>
              <ul className="space-y-2">
                {result.deliverables.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm" style={{ color: '#CCCCCC' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                      <circle cx="8" cy="8" r="7" fill="rgba(255,90,20,0.15)" stroke="rgba(255,90,20,0.4)" strokeWidth="1"/>
                      <path d="M5 8L7 10L11 6" stroke="#FF5A14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {result.techStack.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: '#1A1A1A', color: '#CCCCCC', border: '1px solid #2A2A2A' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── 5. Risk Flags ── */}
      {result.risks && result.risks.length > 0 && (
        <div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: '#111111', border: '1.5px solid #222222' }}
        >
          <div className="px-6 py-4" style={{ borderBottom: '1px solid #1A1A1A' }}>
            <h3 className="font-semibold text-white">Risk Flags</h3>
          </div>
          <div className="px-6 py-6 space-y-3">
            {result.risks.map((risk, idx) => {
              const colors = severityColor(risk.severity)
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl px-4 py-3"
                  style={{ backgroundColor: colors.bg, border: `1px solid ${colors.border}` }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                    <path d="M8 1.5L14.5 13.5H1.5L8 1.5Z" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6V9M8 11H8.01" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: colors.text }}
                      >
                        {risk.severity}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: '#CCCCCC' }}>{risk.flag}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── 6. CTA ── */}
      <div
        className="rounded-2xl overflow-hidden text-center px-6 py-10"
        style={{ backgroundColor: '#111111', border: '1.5px solid rgba(255,90,20,0.3)' }}
      >
        <div
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
          style={{ backgroundColor: 'rgba(255,90,20,0.12)', border: '1px solid rgba(255,90,20,0.2)' }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 4L17.09 10.26L24 10.27L19 14.47L21.18 20.73L14 17.07L6.82 20.73L9 14.47L4 10.27L10.91 10.26L14 4Z" fill="#FF5A14"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Ready to build this?</h3>
        {result.cta && (
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: '#888888', lineHeight: '1.6' }}>
            {result.cta}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/contact"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2.5 font-semibold text-base transition-all duration-200 hover:opacity-90"
            style={{
              backgroundColor: '#FF5A14',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '10px',
              textDecoration: 'none',
            }}
          >
            Book a Free Discovery Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2.5 font-semibold text-base transition-all duration-200 hover:opacity-80"
            style={{
              backgroundColor: 'transparent',
              color: '#CCCCCC',
              padding: '14px 28px',
              borderRadius: '10px',
              border: '1.5px solid #333333',
              cursor: 'pointer',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 5V2H12V5M4 12H2V6H14V12H12M4 9H12V14H4V9Z" stroke="#CCCCCC" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Estimate
          </button>
        </div>
        <p className="text-xs mt-6" style={{ color: '#555555' }}>
          No commitment. We&apos;ll review your project and come back with a refined proposal.
        </p>
      </div>

      {/* Start over */}
      <div className="text-center pt-2">
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-medium transition-colors hover:opacity-80 focus:outline-none"
          style={{ color: '#888888', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ← Start Over with a New Project
        </button>
      </div>
    </div>
  )
}
