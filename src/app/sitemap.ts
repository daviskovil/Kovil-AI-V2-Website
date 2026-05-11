import type { MetadataRoute } from 'next'
import { posts } from '@/src/data/posts'
import { caseStudies } from '@/src/data/case-studies'

const BASE_URL = 'https://kovil.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // ── Static core pages ──────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                                  lastModified: now,          changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/how-it-works`,                      lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/engage/managed-ai-engineer`,             lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/engage/outcome-based-project`,           lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/engage/app-rescue`,                      lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire`,                                   lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire/computer-vision-engineers`,         lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire/machine-learning-engineers`,        lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire/llm-engineers`,                     lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire/nlp-engineers`,                     lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire/data-engineers`,                    lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire/crewai-developers`,                 lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire/langgraph-engineers`,               lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire/autogen-developers`,                lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire/n8n-automation-experts`,            lastModified: now,          changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/about`,                             lastModified: now,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies`,                      lastModified: now,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`,                              lastModified: now,          changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/frequently-asked-questions`,        lastModified: now,          changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`,                           lastModified: now,          changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/book-a-call`,                       lastModified: now,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/apply`,                             lastModified: now,          changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools`,                             lastModified: now,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/ai-project-estimator`,        lastModified: now,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/ai-readiness-ad-marketing-agencies`, lastModified: now,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/azure-ai-agent-readiness`,    lastModified: now,          changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ad-marketing-agencies`,                          lastModified: now,  changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/ai-workflow-automation-library`,                 lastModified: now,  changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/agentforce`,                                      lastModified: now,  changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/ai-operations`,                                   lastModified: now,  changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/hire`,                                            lastModified: now,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/engage/computer-vision-engineers`,                lastModified: now,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/engage/machine-learning-engineers`,               lastModified: now,  changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/apply-as-it-recruiter`,                           lastModified: now,  changeFrequency: 'monthly', priority: 0.6 },
    // ── Azure AI Foundry landing ───────────────────────────────────────────────
    { url: `${BASE_URL}/azure-ai-foundry`,                               lastModified: now,  changeFrequency: 'weekly',  priority: 0.9 },
    // ── Azure AI Foundry service pages ────────────────────────────────────────
    { url: `${BASE_URL}/azure-ai-foundry/services/azure-ai-foundry-strategy-readiness`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/services/ai-agent-design-build`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/services/azure-openai-integration`,            lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/services/copilot-studio-agents`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/services/azure-ai-search-rag`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/services/azure-ai-rescue-optimisation`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // ── Azure AI Foundry — Enterprise Automation use cases ────────────────────
    { url: `${BASE_URL}/azure-ai-foundry/enterprise/document-intelligence-agent`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/enterprise/enterprise-knowledge-agent`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/enterprise/erp-process-agent`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // ── Azure AI Foundry — Customer Experience use cases ──────────────────────
    { url: `${BASE_URL}/azure-ai-foundry/customer-experience/ai-customer-service-agent`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/customer-experience/personalised-recommendation-agent`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/customer-experience/omnichannel-engagement-agent`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // ── Azure AI Foundry — Operations use cases ───────────────────────────────
    { url: `${BASE_URL}/azure-ai-foundry/operations/predictive-maintenance-agent`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/operations/supply-chain-intelligence-agent`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/operations/compliance-monitoring-agent`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // ── Azure AI Foundry — Developer Tools use cases ──────────────────────────
    { url: `${BASE_URL}/azure-ai-foundry/developer-tools/internal-developer-copilot`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/developer-tools/api-integration-agent`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/azure-ai-foundry/developer-tools/mlops-automation-agent`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // ── Azure AI Foundry — Playbook articles ──────────────────────────────────
    { url: `${BASE_URL}/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/azure-ai-foundry/playbook/azure-openai-vs-openai-api`,          lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/azure-ai-foundry/playbook/claims-processing-azure-ai-build`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // ── Agentforce service pages ───────────────────────────────────────────────
    { url: `${BASE_URL}/agentforce/services/agentforce-strategy-readiness`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/services/agent-design-configuration`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/services/sales-cloud-agent-deployment`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/services/service-cloud-agent-deployment`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/services/mulesoft-data-cloud-integration`,lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/services/agentforce-rescue-optimisation`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // ── Agentforce playbook articles ──────────────────────────────────────────────
    { url: `${BASE_URL}/agentforce/playbook/scope-your-first-agentforce-agent`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/agentforce/playbook/atlas-reasoning-engine-explained`,       lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/agentforce/playbook/financial-services-service-cloud-build`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // ── Agentforce Sales Cloud use cases ──────────────────────────────────────────
    { url: `${BASE_URL}/agentforce/sales-cloud/sdr-agent`,               lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/sales-cloud/pipeline-health-monitor`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/sales-cloud/quote-proposal-agent`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // ── Agentforce Service Cloud use cases ────────────────────────────────────────
    { url: `${BASE_URL}/agentforce/service-cloud/autonomous-case-resolution`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/service-cloud/intelligent-escalation`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/service-cloud/knowledge-base-agent`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // ── Agentforce Marketing Cloud use cases ──────────────────────────────────────
    { url: `${BASE_URL}/agentforce/marketing-cloud/campaign-execution-agent`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/marketing-cloud/lead-nurture-agent`,       lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/marketing-cloud/event-webinar-agent`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // ── Agentforce Internal Operations use cases ──────────────────────────────────
    { url: `${BASE_URL}/agentforce/internal-operations/hr-onboarding-agent`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/internal-operations/finance-approval-agent`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agentforce/internal-operations/it-helpdesk-agent`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // ── Individual workflow pages ──────────────────────────────────────────────
    { url: `${BASE_URL}/ai-workflow-automation-library/campaign-performance-reporting`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/ai-creative-brief-generator`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/new-client-onboarding-automation`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/automated-am-briefs-client-reporting`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/multi-channel-inbound-dispatching`,                lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/white-label-voice-ai-agents`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/crm-ops-layer`,                                    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/automated-seo-foundation-backlink-syndication`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/smart-bidding-algorithmic-media-buying`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/deep-serp-first-hybrid-content-generation`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/comfyui-runway-commercial-video-pipelines`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/social-intelligence-subreddit-scraping`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/ai-workflow-automation-library/browser-based-no-api-automation-legacy-enterprise`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  // ── Blog posts (auto-generated from posts.ts) ──────────────────────────────
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── Case studies (auto-generated from case-studies.ts) ────────────────────
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...caseStudyPages]
}
