'use client'

import { useState, useCallback } from 'react'

export interface EstimateResult {
  costMin: number
  costMax: number
  currency: string
  timeline: string
  engagementModel: string
  engagementReason: string
  phases: { name: string; duration: string; cost: number }[]
  techStack: string[]
  deliverables: string[]
  risks: { flag: string; severity: 'High' | 'Medium' | 'Low' }[]
  cta: string
}

export interface EstimatorState {
  // Step 1
  projectType: string
  projectName: string
  // Step 2
  features: string[]
  complexity: string
  // Step 3
  integrations: string[]
  dataSituation: string
  // Step 4
  engagementPreference: string
  timeline: string
  teamSize: string
  budget: string
  // Meta
  currentStep: number
  isLoading: boolean
  result: EstimateResult | null
  error: string | null
}

const initialState: EstimatorState = {
  projectType: '',
  projectName: '',
  features: [],
  complexity: '',
  integrations: [],
  dataSituation: '',
  engagementPreference: '',
  timeline: '',
  teamSize: '',
  budget: '',
  currentStep: 1,
  isLoading: false,
  result: null,
  error: null,
}

type GtagFn = (...args: unknown[]) => void
function fireGtag(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: GtagFn }).gtag === 'function') {
    ;(window as unknown as { gtag: GtagFn }).gtag('event', event, params ?? {})
  }
}

export function useEstimator() {
  const [state, setState] = useState<EstimatorState>(initialState)

  const setField = useCallback(<K extends keyof EstimatorState>(key: K, value: EstimatorState[K]) => {
    setState(prev => ({ ...prev, [key]: value }))
  }, [])

  const toggleFeature = useCallback((feature: string) => {
    setState(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature],
    }))
  }, [])

  const toggleIntegration = useCallback((integration: string) => {
    setState(prev => ({
      ...prev,
      integrations: prev.integrations.includes(integration)
        ? prev.integrations.filter(i => i !== integration)
        : [...prev.integrations, integration],
    }))
  }, [])

  const nextStep = useCallback(() => {
    setState(prev => {
      const next = prev.currentStep + 1
      fireGtag('estimator_step_completed', { step: prev.currentStep })
      return { ...prev, currentStep: next }
    })
  }, [])

  const prevStep = useCallback(() => {
    setState(prev => ({ ...prev, currentStep: Math.max(1, prev.currentStep - 1) }))
  }, [])

  const reset = useCallback(() => {
    setState(initialState)
  }, [])

  const generateEstimate = useCallback(async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }))

    const prompt = `You are an expert AI project estimator for Kovil AI, a managed AI engineering company. Based on the following project details, provide a detailed cost estimate in JSON format.

Project Details:
- Project Type: ${state.projectType}
- Project Name: ${state.projectName || 'Not specified'}
- Key Features: ${state.features.length > 0 ? state.features.join(', ') : 'None selected'}
- Complexity Level: ${state.complexity}
- Integrations Needed: ${state.integrations.length > 0 ? state.integrations.join(', ') : 'None'}
- Data Situation: ${state.dataSituation}
- Preferred Engagement Model: ${state.engagementPreference}
- Timeline Urgency: ${state.timeline}
- Team Size: ${state.teamSize}
- Budget Range: ${state.budget}

Respond ONLY with a valid JSON object matching this exact structure:
{
  "costMin": <number in USD, no commas>,
  "costMax": <number in USD, no commas>,
  "currency": "USD",
  "timeline": "<e.g. '6–10 weeks'>",
  "engagementModel": "<one of: 'Managed AI Engineer', 'Outcome-Based Project', 'App Rescue'>",
  "engagementReason": "<1-2 sentence explanation of why this engagement model fits>",
  "phases": [
    { "name": "<phase name>", "duration": "<e.g. '2 weeks'>", "cost": <number> }
  ],
  "techStack": ["<technology>"],
  "deliverables": ["<deliverable item>"],
  "risks": [
    { "flag": "<risk description>", "severity": "<High|Medium|Low>" }
  ],
  "cta": "<one compelling sentence tailored to this project encouraging the user to book a discovery call>"
}

Guidelines for estimation:
- Base costs on US market rates for senior AI engineers ($150-250/hr)
- Simple projects: $15k-$50k, Medium: $50k-$150k, Complex: $150k-$500k+
- Include 3-5 phases covering Discovery, Development, Integration, Testing, Launch
- Include 4-8 realistic deliverables
- Include 1-4 risks if relevant (data quality, integration complexity, scope creep, etc.)
- The engagementModel should match what the user selected unless it clearly doesn't fit
- Make the CTA specific to the project type and engaging`

    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
      if (!apiKey) {
        throw new Error('API key not configured. Please contact us directly for an estimate.')
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.3, maxOutputTokens: 1500 },
          }),
        }
      )

      if (!response.ok) {
        const err = await response.text()
        throw new Error(`API request failed: ${response.status} — ${err}`)
      }

      const data = await response.json()
      const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''

      const match = text.match(/\{[\s\S]*\}/)
      if (!match) {
        throw new Error('Could not parse estimate response. Please try again.')
      }

      const result: EstimateResult = JSON.parse(match[0])

      fireGtag('estimator_generated', {
        project_type: state.projectType,
        complexity: state.complexity,
        cost_min: result.costMin,
        cost_max: result.costMax,
      })

      setState(prev => ({ ...prev, isLoading: false, result, error: null }))
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setState(prev => ({ ...prev, isLoading: false, error: message }))
    }
  }, [state])

  return {
    state,
    setField,
    toggleFeature,
    toggleIntegration,
    nextStep,
    prevStep,
    reset,
    generateEstimate,
    fireGtag,
  }
}
