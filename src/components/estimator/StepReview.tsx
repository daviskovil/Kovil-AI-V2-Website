'use client'

import { EstimatorState } from './useEstimator'

interface SummaryRowProps {
  label: string
  value: string | string[]
}

function SummaryRow({ label, value }: SummaryRowProps) {
  const display = Array.isArray(value) ? value.join(', ') : value
  if (!display || display.length === 0) return null
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 py-3" style={{ borderBottom: '1px solid #1A1A1A' }}>
      <span className="text-xs font-semibold uppercase tracking-wider flex-shrink-0 sm:w-40" style={{ color: '#888888' }}>
        {label}
      </span>
      <span className="text-sm font-medium" style={{ color: '#FFFFFF' }}>
        {display}
      </span>
    </div>
  )
}

interface Props {
  state: EstimatorState
  onGenerate: () => void
}

export default function StepReview({ state, onGenerate }: Props) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Review Your Details</h2>
        <p style={{ color: '#888888', fontSize: '15px' }}>
          Everything look right? Hit generate to get your AI-powered cost estimate.
        </p>
      </div>

      {/* Summary card */}
      <div
        className="rounded-2xl mb-8 overflow-hidden"
        style={{ backgroundColor: '#111111', border: '1.5px solid #222222' }}
      >
        <div className="px-5 py-4" style={{ borderBottom: '1px solid #1A1A1A' }}>
          <h3 className="text-sm font-semibold" style={{ color: '#FF5A14' }}>Project Summary</h3>
        </div>
        <div className="px-5 pb-2">
          <SummaryRow label="Project Type" value={state.projectType} />
          {state.projectName && <SummaryRow label="Project Name" value={state.projectName} />}
          <SummaryRow
            label="Features"
            value={state.features.length > 0 ? state.features : ['None selected']}
          />
          <SummaryRow label="Complexity" value={state.complexity} />
          <SummaryRow
            label="Integrations"
            value={state.integrations.length > 0 ? state.integrations : ['None']}
          />
          <SummaryRow label="Data Situation" value={state.dataSituation} />
          <SummaryRow label="Engagement" value={state.engagementPreference} />
          <SummaryRow label="Timeline" value={state.timeline} />
          <SummaryRow label="Team Size" value={state.teamSize} />
          <SummaryRow label="Budget Range" value={state.budget} />
        </div>
      </div>

      {/* Error state */}
      {state.error && (
        <div
          className="rounded-xl p-4 mb-6 flex items-start gap-3"
          style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1.5px solid rgba(239,68,68,0.3)' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
            <circle cx="9" cy="9" r="8" stroke="#EF4444" strokeWidth="1.5"/>
            <path d="M9 5.5V9.5M9 12H9.01" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div>
            <p className="text-sm font-medium" style={{ color: '#EF4444' }}>Error generating estimate</p>
            <p className="text-xs mt-0.5" style={{ color: '#888888' }}>{state.error}</p>
          </div>
        </div>
      )}

      {/* Generate button */}
      <button
        type="button"
        onClick={onGenerate}
        disabled={state.isLoading}
        className="w-full flex items-center justify-center gap-3 font-semibold text-base transition-all duration-200 focus:outline-none"
        style={{
          backgroundColor: state.isLoading ? '#CC4A10' : '#FF5A14',
          color: '#FFFFFF',
          borderRadius: '10px',
          padding: '16px 24px',
          cursor: state.isLoading ? 'not-allowed' : 'pointer',
          opacity: state.isLoading ? 0.85 : 1,
          border: 'none',
        }}
      >
        {state.isLoading ? (
          <>
            {/* Spinner */}
            <span
              className="inline-block rounded-full border-2 border-white border-t-transparent"
              style={{
                width: '20px',
                height: '20px',
                animation: 'spin 0.8s linear infinite',
              }}
            />
            Generating your estimate…
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2L12.09 7.26L17.66 7.27L13.27 10.47L15.36 15.73L10 12.53L4.64 15.73L6.73 10.47L2.34 7.27L7.91 7.26L10 2Z" fill="white"/>
            </svg>
            Generate My Estimate
          </>
        )}
      </button>

      {state.isLoading && (
        <p className="text-center text-xs mt-3" style={{ color: '#888888' }}>
          Analysing your requirements with Claude AI… this takes about 10 seconds.
        </p>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
