'use client'

import Tag from './Tag'
import RadioCard from './RadioCard'
import { EstimatorState } from './useEstimator'

const INTEGRATIONS = [
  'Slack / Teams',
  'Salesforce / HubSpot',
  'Stripe / Payments',
  'Google Workspace',
  'Database (SQL / NoSQL)',
  'REST / GraphQL APIs',
  'AWS / GCP / Azure',
  'Zapier / Make / n8n',
  'ERP / SAP',
]

const DATA_SITUATIONS = [
  {
    label: 'Data is clean and ready',
    description: 'Structured data already in a usable format — minimal prep needed.',
  },
  {
    label: 'Data needs cleaning / formatting',
    description: 'Raw data exists but requires significant preprocessing before use.',
  },
  {
    label: 'We need to collect data first',
    description: 'Data collection and pipelines need to be built as part of the project.',
  },
  {
    label: 'No data yet — starting fresh',
    description: 'Greenfield project with no existing data assets.',
  },
]

interface Props {
  state: EstimatorState
  toggleIntegration: (integration: string) => void
  setField: <K extends keyof EstimatorState>(key: K, value: EstimatorState[K]) => void
}

export default function StepIntegrations({ state, toggleIntegration, setField }: Props) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Integrations & Data</h2>
        <p style={{ color: '#888888', fontSize: '15px' }}>
          What systems do you need to connect, and what's your data situation?
        </p>
      </div>

      {/* Integrations */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
          Integrations <span style={{ color: '#555555', fontWeight: 400 }}>(select all that apply)</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {INTEGRATIONS.map((integration) => (
            <Tag
              key={integration}
              label={integration}
              selected={state.integrations.includes(integration)}
              onClick={() => toggleIntegration(integration)}
            />
          ))}
        </div>
        {state.integrations.length === 0 && (
          <p className="text-xs mt-2" style={{ color: '#555555' }}>
            None selected — standalone project assumed
          </p>
        )}
        {state.integrations.length > 0 && (
          <p className="text-xs mt-2" style={{ color: '#FF5A14' }}>
            {state.integrations.length} integration{state.integrations.length > 1 ? 's' : ''} selected
          </p>
        )}
      </div>

      {/* Data situation */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
          Your Data Situation <span style={{ color: '#EF4444', fontSize: '12px', fontWeight: 400 }}>*required</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DATA_SITUATIONS.map((opt) => (
            <RadioCard
              key={opt.label}
              label={opt.label}
              description={opt.description}
              selected={state.dataSituation === opt.label}
              onClick={() => setField('dataSituation', opt.label)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
