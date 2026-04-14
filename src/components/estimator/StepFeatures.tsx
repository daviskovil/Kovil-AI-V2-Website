'use client'

import Tag from './Tag'
import RadioCard from './RadioCard'
import { EstimatorState } from './useEstimator'

const FEATURES = [
  'User Authentication & Roles',
  'Real-time Streaming Responses',
  'File / Document Upload',
  'Multi-language Support',
  'Custom Fine-tuning',
  'Admin Dashboard',
  'Analytics & Usage Tracking',
  'API / Webhook Endpoints',
  'Mobile App (iOS / Android)',
  'Automated Email / Notifications',
]

const COMPLEXITY_OPTIONS = [
  {
    label: 'Simple',
    description: 'Single core feature, standard integrations, clear scope. e.g. a chatbot on top of existing data.',
  },
  {
    label: 'Medium',
    description: 'Multiple features, some custom logic, a few integrations. e.g. a RAG system with custom UI and analytics.',
  },
  {
    label: 'Complex',
    description: 'Novel architecture, many integrations, compliance requirements, or enterprise-grade scale.',
  },
]

interface Props {
  state: EstimatorState
  toggleFeature: (feature: string) => void
  setField: <K extends keyof EstimatorState>(key: K, value: EstimatorState[K]) => void
}

export default function StepFeatures({ state, toggleFeature, setField }: Props) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Features & Complexity</h2>
        <p style={{ color: '#888888', fontSize: '15px' }}>
          Select every feature you need, then tell us how complex the overall project is.
        </p>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
          Key Features <span style={{ color: '#555555', fontWeight: 400 }}>(select all that apply)</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {FEATURES.map((feature) => (
            <Tag
              key={feature}
              label={feature}
              selected={state.features.includes(feature)}
              onClick={() => toggleFeature(feature)}
            />
          ))}
        </div>
        {state.features.length > 0 && (
          <p className="text-xs mt-2" style={{ color: '#FF5A14' }}>
            {state.features.length} feature{state.features.length > 1 ? 's' : ''} selected
          </p>
        )}
      </div>

      {/* Complexity */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
          Overall Complexity <span style={{ color: '#EF4444', fontSize: '12px', fontWeight: 400 }}>*required</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {COMPLEXITY_OPTIONS.map((opt) => (
            <RadioCard
              key={opt.label}
              label={opt.label}
              description={opt.description}
              selected={state.complexity === opt.label}
              onClick={() => setField('complexity', opt.label)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
