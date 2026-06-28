export type QuestionPriority = 'Must-have' | 'Important' | 'Nice-to-have'

export interface DiscoveryQuestion {
  id: string             // e.g. "BUS-01"
  question: string       // The full question text
  purpose: string        // Why we ask / Purpose (shown as tooltip)
  priority: QuestionPriority
  feedsDocument: string  // e.g. "SOW, Project Plan"
}

export interface DiscoveryTab {
  id: string             // URL-safe slug
  label: string          // Full display label
  shortLabel: string     // Abbreviated for narrow screens
  questions: DiscoveryQuestion[]
}

export interface DiscoveryConfig {
  clientSlug: string
  clientName: string
  projectTitle: string
  tabs: DiscoveryTab[]
}

/** Per-question answer: response text + optional notes */
export interface QuestionAnswer {
  response: string
  notes: string
}

/** All saved answers keyed by question ID */
export type DiscoveryAnswers = Record<string, QuestionAnswer>
