'use client'

import { useEffect } from 'react'
import { useEstimator } from '../components/estimator/useEstimator'
import ProgressBar from '../components/estimator/ProgressBar'
import StepProjectType from '../components/estimator/StepProjectType'
import StepFeatures from '../components/estimator/StepFeatures'
import StepIntegrations from '../components/estimator/StepIntegrations'
import StepTeamTimeline from '../components/estimator/StepTeamTimeline'
import StepReview from '../components/estimator/StepReview'
import EstimateResults from '../components/estimator/EstimateResults'

type GtagFn = (...args: unknown[]) => void
function fireGtag(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: GtagFn }).gtag === 'function') {
    ;(window as unknown as { gtag: GtagFn }).gtag('event', event, params ?? {})
  }
}

// Validation rules per step
function validateStep(step: number, state: ReturnType<typeof useEstimator>['state']): string | null {
  switch (step) {
    case 1:
      if (!state.projectType) return 'Please select a project type to continue.'
      return null
    case 2:
      if (!state.complexity) return 'Please select a complexity level to continue.'
      return null
    case 3:
      if (!state.dataSituation) return 'Please select your data situation to continue.'
      return null
    case 4:
      if (!state.engagementPreference) return 'Please select an engagement model to continue.'
      if (!state.timeline) return 'Please select a timeline to continue.'
      if (!state.teamSize) return 'Please select your team size to continue.'
      if (!state.budget) return 'Please select a budget range to continue.'
      return null
    default:
      return null
  }
}

export default function AiProjectEstimatorPage() {
  const {
    state,
    setField,
    toggleFeature,
    toggleIntegration,
    nextStep,
    prevStep,
    reset,
    generateEstimate,
  } = useEstimator()

  // Fire estimator_started once on mount
  useEffect(() => {
    fireGtag('estimator_started')
  }, [])

  const validationError = validateStep(state.currentStep, state)
  const showResults = state.result !== null

  const handleNext = () => {
    const error = validateStep(state.currentStep, state)
    if (error) {
      // Inline alert — browser native is accessible and unobtrusive for validation
      window.alert(error)
      return
    }
    nextStep()
  }

  return (
    <section style={{ backgroundColor: '#0A0A0A', minHeight: '100vh' }}>
      {/* Page header */}
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(255,90,20,0.06) 0%, transparent 100%)',
          borderBottom: '1px solid #1A1A1A',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{
              backgroundColor: 'rgba(255,90,20,0.1)',
              color: '#FF5A14',
              border: '1px solid rgba(255,90,20,0.2)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1L8.47 4.79L12.5 4.8L9.4 7.27L10.88 11.06L7 8.6L3.12 11.06L4.6 7.27L1.5 4.8L5.53 4.79L7 1Z" fill="#FF5A14"/>
            </svg>
            Free Instant Estimate
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ lineHeight: '1.15' }}>
            AI Project Cost{' '}
            <span style={{ color: '#FF5A14' }}>Estimator</span>
          </h1>
          <p className="text-lg" style={{ color: '#888888', maxWidth: '560px', margin: '0 auto', lineHeight: '1.65' }}>
            Answer 5 quick questions about your project. Get an instant, AI-generated cost range,
            timeline, tech stack, and engagement recommendation — tailored to your needs.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {showResults ? (
          <EstimateResults result={state.result!} onReset={reset} />
        ) : (
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ backgroundColor: '#111111', border: '1.5px solid #222222' }}
          >
            {/* Progress bar */}
            <ProgressBar currentStep={state.currentStep} totalSteps={5} />

            {/* Step content */}
            <div className="min-h-[320px]">
              {state.currentStep === 1 && (
                <StepProjectType state={state} setField={setField} />
              )}
              {state.currentStep === 2 && (
                <StepFeatures state={state} toggleFeature={toggleFeature} setField={setField} />
              )}
              {state.currentStep === 3 && (
                <StepIntegrations state={state} toggleIntegration={toggleIntegration} setField={setField} />
              )}
              {state.currentStep === 4 && (
                <StepTeamTimeline state={state} setField={setField} />
              )}
              {state.currentStep === 5 && (
                <StepReview state={state} onGenerate={generateEstimate} />
              )}
            </div>

            {/* Navigation buttons (hidden on step 5 — StepReview has its own generate button) */}
            {state.currentStep < 5 && (
              <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: '1px solid #1A1A1A' }}>
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={state.currentStep === 1}
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-200 focus:outline-none hover:opacity-80"
                  style={{
                    color: state.currentStep === 1 ? '#444444' : '#888888',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: state.currentStep === 1 ? 'not-allowed' : 'pointer',
                    padding: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back
                </button>

                {/* Step counter */}
                <span className="text-xs" style={{ color: '#555555' }}>
                  {state.currentStep} / 5
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 focus:outline-none hover:opacity-90"
                  style={{
                    backgroundColor: '#FF5A14',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    opacity: validationError ? 0.6 : 1,
                  }}
                >
                  {state.currentStep === 4 ? 'Review' : 'Next'}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}

            {/* Back button on step 5 */}
            {state.currentStep === 5 && !state.isLoading && (
              <div className="flex items-center justify-start mt-6 pt-6" style={{ borderTop: '1px solid #1A1A1A' }}>
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 text-sm font-medium transition-all duration-200 focus:outline-none hover:opacity-80"
                  style={{
                    color: '#888888',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Back to edit
                </button>
              </div>
            )}
          </div>
        )}

        {/* Trust signals */}
        {!showResults && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            {[
              { icon: '🔒', text: 'No email required' },
              { icon: '⚡', text: 'Results in ~10 seconds' },
              { icon: '🎯', text: 'Powered by Claude AI' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <span>{icon}</span>
                <span className="text-xs font-medium" style={{ color: '#555555' }}>{text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
