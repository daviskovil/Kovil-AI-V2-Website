export type HireGroup = 'AI & machine learning' | 'Agent frameworks & automation' | 'Software engineering' | 'Data engineering'

export interface HireDirectoryEntry {
  href: string
  name: string
  group: HireGroup
}

/** Every role page, in the order shown on /hire. Keep in sync with src/app/hire and src/data/hire-roles.ts. */
export const hireDirectory: HireDirectoryEntry[] = [
  { href: '/hire/ai-engineer', name: 'AI Engineers', group: 'AI & machine learning' },
  { href: '/hire/ai-agent-developer', name: 'AI Agent Developers', group: 'AI & machine learning' },
  { href: '/hire/generative-ai-developer', name: 'Generative AI Developers', group: 'AI & machine learning' },
  { href: '/hire/llm-engineer', name: 'LLM Engineers', group: 'AI & machine learning' },
  { href: '/hire/machine-learning-engineers', name: 'Machine Learning Engineers', group: 'AI & machine learning' },
  { href: '/hire/ml-engineer', name: 'ML Engineers', group: 'AI & machine learning' },
  { href: '/hire/nlp-engineers', name: 'NLP Engineers', group: 'AI & machine learning' },
  { href: '/hire/computer-vision-engineers', name: 'Computer Vision Engineers', group: 'AI & machine learning' },
  { href: '/hire/prompt-engineer', name: 'Prompt Engineers', group: 'AI & machine learning' },
  { href: '/hire/claude-code-engineer', name: 'Claude Code Engineers', group: 'AI & machine learning' },
  { href: '/hire/forward-deployed-engineer', name: 'Forward Deployed Engineers', group: 'AI & machine learning' },

  { href: '/hire/langgraph-engineers', name: 'LangGraph Engineers', group: 'Agent frameworks & automation' },
  { href: '/hire/autogen-developers', name: 'AutoGen Developers', group: 'Agent frameworks & automation' },
  { href: '/hire/crewai-developers', name: 'CrewAI Developers', group: 'Agent frameworks & automation' },
  { href: '/hire/llamaindex-engineers', name: 'LlamaIndex Engineers', group: 'Agent frameworks & automation' },
  { href: '/hire/voiceflow-developers', name: 'Voiceflow Developers', group: 'Agent frameworks & automation' },
  { href: '/hire/n8n-automation-experts', name: 'n8n Automation Experts', group: 'Agent frameworks & automation' },
  { href: '/hire/make-automation-experts', name: 'Make Automation Experts', group: 'Agent frameworks & automation' },
  { href: '/hire-databricks-engineer', name: 'Databricks Engineers', group: 'Data engineering' },
  { href: '/hire/data-engineer', name: 'Data Engineers', group: 'Data engineering' },
  { href: '/hire/data-engineers', name: 'AI Data Engineers', group: 'Data engineering' },

  { href: '/hire/software-engineer', name: 'Software Engineers', group: 'Software engineering' },
  { href: '/hire/full-stack-developer', name: 'Full-Stack Developers', group: 'Software engineering' },
  { href: '/hire/python-developer', name: 'Python Developers', group: 'Software engineering' },
  { href: '/hire/node-developer', name: 'Node.js Developers', group: 'Software engineering' },
  { href: '/hire/react-developer', name: 'React Developers', group: 'Software engineering' },
  { href: '/hire/devops-engineer', name: 'DevOps Engineers', group: 'Software engineering' },
  { href: '/hire/cloud-engineer', name: 'Cloud Engineers', group: 'Software engineering' },
  { href: '/hire/qa-engineer', name: 'QA Engineers', group: 'Software engineering' },
  { href: '/hire/cybersecurity-engineer', name: 'Cybersecurity Engineers', group: 'Software engineering' },
  { href: '/hire/product-manager', name: 'Remote Product Managers', group: 'Software engineering' },
]

export const hireGroups: HireGroup[] = ['AI & machine learning', 'Agent frameworks & automation', 'Data engineering', 'Software engineering']

/** Up to `count` other roles from the same group, rotating so every role is linked from its neighbours. */
export function relatedHireRoles(href: string, count = 4): HireDirectoryEntry[] {
  const self = hireDirectory.find((r) => r.href === href)
  if (!self) return []
  const same = hireDirectory.filter((r) => r.group === self.group)
  const i = same.indexOf(self)
  const picks: HireDirectoryEntry[] = []
  for (let k = 1; k < same.length && picks.length < count; k++) picks.push(same[(i + k) % same.length])
  return picks
}
