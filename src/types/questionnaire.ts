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
  /**
   * Optional password gate. The `password` field is stripped in page.tsx before passing
   * to the client bundle — auth is verified server-side via /api/discovery/auth.
   * Only `uid` reaches the client (used as the localStorage auth token).
   */
  accessCredentials?: {
    uid: string      // Shown to the client as their "Access ID"
    password: string // Server-side only — NEVER sent to the client
  }
}

/** File attached to a question's response */
export interface QuestionAttachment {
  name: string
  size: number
  type: string
  url: string
  uploadedAt: string
}

/** Per-question answer: response text + optional notes + optional attachments */
export interface QuestionAnswer {
  response: string
  notes: string
  attachments?: QuestionAttachment[]
}

/** All saved answers keyed by question ID */
export type DiscoveryAnswers = Record<string, QuestionAnswer>
