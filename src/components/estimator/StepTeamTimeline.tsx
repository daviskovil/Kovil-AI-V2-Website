'use client'

import RadioCard from './RadioCard'
import { EstimatorState } from './useEstimator'

const ENGAGEMENT_OPTIONS = [
  {
    label: 'Managed AI Engineer',
    description: 'Embed a vetted AI engineer into your team. Best for ongoing product development.',
  },
  {
    label: 'Outcome-Based Project',
    description: 'Fixed-price, fixed-scope delivery. Best for well-defined projects with clear deliverables.',
  },
  {
    label: 'App Rescue',
    description: 'Take over and fix a failing AI project. Best if you have existing work that needs saving.',
  },
  {
    label: 'Not sure — recommend one',
    description: "We'll analyse your requirements and recommend the best fit.",
  },
]

const TIMELINE_OPTIONS = [
  { label: 'ASAP (under 4 weeks)', description: 'Urgent — need to move fast. Premium pricing may apply.' },
  { label: 'Standard (1–3 months)', description: 'Normal pace with structured sprints and milestones.' },
  { label: 'Flexible (3–6 months)', description: 'No rush — quality and process matter more than speed.' },
  { label: 'Planning ahead (6+ months)', description: 'Long-horizon roadmap or future-state planning.' },
]

const TEAM_SIZE_OPTIONS = [
  { label: 'Solo / Indie Founder', description: "It's just me — I need a full team." },
  { label: 'Small team (2–5 people)', description: 'Early-stage startup with a lean crew.' },
  { label: 'Mid-size (6–25 people)', description: 'Growing company with existing engineering capacity.' },
  { label: 'Enterprise (25+ people)', description: 'Large org with dedicated engineering and product teams.' },
]

const BUDGET_OPTIONS = [
  { label: 'Under $15k', description: 'Tight budget — MVP or proof of concept only.' },
  { label: '$15k – $50k', description: 'Small project with focused scope.' },
  { label: '$50k – $100k', description: 'Medium project with multiple features.' },
  { label: '$100k – $250k', description: 'Substantial build with integrations and polish.' },
  { label: '$250k – $500k', description: 'Enterprise-grade or complex multi-phase project.' },
  { label: '$500k+', description: 'Large-scale platform or multi-team engagement.' },
]

interface Props {
  state: EstimatorState
  setField: <K extends keyof EstimatorState>(key: K, value: EstimatorState[K]) => void
}

export default function StepTeamTimeline({ state, setField }: Props) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Timeline, Team & Budget</h2>
        <p style={{ color: '#888888', fontSize: '15px' }}>
          Help us understand your constraints so we can tailor the estimate.
        </p>
      </div>

      {/* Engagement preference */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
          How do you want to engage? <span style={{ color: '#EF4444', fontSize: '12px', fontWeight: 400 }}>*required</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ENGAGEMENT_OPTIONS.map((opt) => (
            <RadioCard
              key={opt.label}
              label={opt.label}
              description={opt.description}
              selected={state.engagementPreference === opt.label}
              onClick={() => setField('engagementPreference', opt.label)}
            />
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
          Timeline Urgency <span style={{ color: '#EF4444', fontSize: '12px', fontWeight: 400 }}>*required</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TIMELINE_OPTIONS.map((opt) => (
            <RadioCard
              key={opt.label}
              label={opt.label}
              description={opt.description}
              selected={state.timeline === opt.label}
              onClick={() => setField('timeline', opt.label)}
            />
          ))}
        </div>
      </div>

      {/* Team size */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
          Your Team Size <span style={{ color: '#EF4444', fontSize: '12px', fontWeight: 400 }}>*required</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TEAM_SIZE_OPTIONS.map((opt) => (
            <RadioCard
              key={opt.label}
              label={opt.label}
              description={opt.description}
              selected={state.teamSize === opt.label}
              onClick={() => setField('teamSize', opt.label)}
            />
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: '#888888' }}>
          Budget Range <span style={{ color: '#EF4444', fontSize: '12px', fontWeight: 400 }}>*required</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {BUDGET_OPTIONS.map((opt) => (
            <RadioCard
              key={opt.label}
              label={opt.label}
              description={opt.description}
              selected={state.budget === opt.label}
              onClick={() => setField('budget', opt.label)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
