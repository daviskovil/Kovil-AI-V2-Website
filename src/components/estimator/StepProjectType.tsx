'use client'

import RadioCard from './RadioCard'
import { EstimatorState } from './useEstimator'

const PROJECT_TYPES = [
  { label: 'AI Chatbot / Assistant', description: 'Conversational AI for customer support, internal tools, or product features' },
  { label: 'RAG / Document Intelligence', description: 'Search, summarise, and extract insights from your documents or knowledge base' },
  { label: 'Workflow Automation Agent', description: 'AI agents that automate multi-step business processes end-to-end' },
  { label: 'Voice AI', description: 'Voice-powered interfaces, transcription, or real-time speech applications' },
  { label: 'Computer Vision / Image AI', description: 'Image recognition, object detection, or visual inspection systems' },
  { label: 'Custom LLM Integration', description: 'Integrate LLMs into existing products, APIs, or internal workflows' },
  { label: 'AI Dashboard / Analytics', description: 'AI-powered reporting, forecasting, or business intelligence platforms' },
  { label: 'Other', description: 'Something unique — describe your project and we\'ll tailor the estimate' },
]

interface Props {
  state: EstimatorState
  setField: <K extends keyof EstimatorState>(key: K, value: EstimatorState[K]) => void
}

export default function StepProjectType({ state, setField }: Props) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">What are you building?</h2>
        <p style={{ color: '#888888', fontSize: '15px' }}>
          Select the type of AI project that best describes your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {PROJECT_TYPES.map((pt) => (
          <RadioCard
            key={pt.label}
            label={pt.label}
            description={pt.description}
            selected={state.projectType === pt.label}
            onClick={() => setField('projectType', pt.label)}
          />
        ))}
      </div>

      <div>
        <label
          htmlFor="projectName"
          className="block text-sm font-medium mb-2"
          style={{ color: '#CCCCCC' }}
        >
          Project name <span style={{ color: '#888888' }}>(optional)</span>
        </label>
        <input
          id="projectName"
          type="text"
          value={state.projectName}
          onChange={(e) => setField('projectName', e.target.value)}
          placeholder="e.g. SmartSupport AI, DocuQuery, VoiceOps"
          maxLength={80}
          className="w-full text-sm focus:outline-none transition-all"
          style={{
            backgroundColor: '#111111',
            border: '1.5px solid #222222',
            borderRadius: '10px',
            padding: '12px 16px',
            color: '#FFFFFF',
            caretColor: '#FF5A14',
          }}
          onFocus={(e) => { e.target.style.borderColor = '#FF5A14' }}
          onBlur={(e) => { e.target.style.borderColor = '#222222' }}
        />
      </div>
    </div>
  )
}
