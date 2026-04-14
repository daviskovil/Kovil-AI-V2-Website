'use client'

interface ProgressBarProps {
  currentStep: number
  totalSteps?: number
}

const STEP_LABELS = ['Project Type', 'Features', 'Integrations', 'Timeline & Budget', 'Review']

export default function ProgressBar({ currentStep, totalSteps = 5 }: ProgressBarProps) {
  return (
    <div className="w-full mb-8">
      {/* Step labels */}
      <div className="flex justify-between mb-3 hidden sm:flex">
        {STEP_LABELS.map((label, idx) => {
          const step = idx + 1
          const isCompleted = step < currentStep
          const isActive = step === currentStep
          return (
            <span
              key={step}
              className="text-xs font-medium transition-colors"
              style={{
                color: isCompleted || isActive ? '#FF5A14' : '#888888',
                flex: 1,
                textAlign: idx === 0 ? 'left' : idx === STEP_LABELS.length - 1 ? 'right' : 'center',
              }}
            >
              {label}
            </span>
          )
        })}
      </div>

      {/* Progress track */}
      <div
        className="relative w-full rounded-full overflow-hidden"
        style={{ height: '6px', backgroundColor: '#222222' }}
      >
        <div
          className="absolute left-0 top-0 h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
            backgroundColor: '#FF5A14',
          }}
        />
      </div>

      {/* Step dots */}
      <div className="flex justify-between mt-2">
        {Array.from({ length: totalSteps }, (_, idx) => {
          const step = idx + 1
          const isCompleted = step < currentStep
          const isActive = step === currentStep
          return (
            <div
              key={step}
              className="flex flex-col items-center"
              style={{ flex: 1, alignItems: idx === 0 ? 'flex-start' : idx === totalSteps - 1 ? 'flex-end' : 'center' }}
            >
              <div
                className="rounded-full transition-all duration-300 flex items-center justify-center"
                style={{
                  width: isActive ? '20px' : '12px',
                  height: isActive ? '20px' : '12px',
                  backgroundColor: isCompleted || isActive ? '#FF5A14' : '#222222',
                  border: isActive ? '3px solid #FF5A14' : isCompleted ? 'none' : '2px solid #333333',
                  boxShadow: isActive ? '0 0 0 4px rgba(255,90,20,0.2)' : 'none',
                }}
              >
                {isCompleted && (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3 5.5L6.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Mobile step counter */}
      <div className="sm:hidden mt-2 text-center">
        <span style={{ color: '#888888', fontSize: '13px' }}>
          Step <span style={{ color: '#FF5A14', fontWeight: 600 }}>{currentStep}</span> of {totalSteps} — {STEP_LABELS[currentStep - 1]}
        </span>
      </div>
    </div>
  )
}
