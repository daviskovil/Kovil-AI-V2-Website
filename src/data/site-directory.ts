// Shared source of truth for "every page on kovil.ai, organized by category."
// Used by:
//  - src/app/sitemap/SitemapClient.tsx (the human-facing /sitemap page)
//  - src/lib/shyna/gemini.ts (so the Shyna chatbot can link to the exact right
//    page instead of defaulting to generic answers or the case studies page)

export type SitemapLink = { label: string; href: string }
export type SitemapGroup = { title: string; links: SitemapLink[] }
export type SitemapSection = {
  id: string
  title: string
  color: string
  links?: SitemapLink[]
  groups?: SitemapGroup[]
}

export const STATIC_SECTIONS: SitemapSection[] = [
  {
    id: 'company',
    title: 'Company',
    color: '#6366f1',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'What We Do', href: '/what-we-do' },
      { label: 'Contact', href: '/contact' },
      { label: 'Book a Call', href: '/book-a-call' },
      { label: 'FAQ', href: '/frequently-asked-questions' },
      { label: 'Apply as Engineer', href: '/apply' },
      { label: 'Apply as IT Recruiter', href: '/apply-as-it-recruiter' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
  {
    id: 'hire',
    title: 'Hire by Role',
    color: '#FF4F00',
    groups: [
      {
        title: 'Hub',
        links: [{ label: 'All Hire Pages', href: '/hire' }],
      },
      {
        title: 'AI & ML Specialists',
        links: [
          { label: 'Hire AI Agent Developers', href: '/hire/ai-agent-developer' },
          { label: 'Hire Claude Code Engineers', href: '/hire/claude-code-engineer' },
          { label: 'Hire AI Engineers', href: '/hire/ai-engineer' },
          { label: 'Hire Generative AI Developers', href: '/hire/generative-ai-developer' },
          { label: 'Hire LLM Engineers', href: '/hire/llm-engineer' },
          { label: 'Hire Prompt Engineers', href: '/hire/prompt-engineer' },
          { label: 'Hire LlamaIndex Engineers', href: '/hire/llamaindex-engineers' },
          { label: 'Hire ML Engineers', href: '/hire/ml-engineer' },
          { label: 'Hire Machine Learning Engineers', href: '/hire/machine-learning-engineers' },
          { label: 'Hire Computer Vision Engineers', href: '/hire/computer-vision-engineers' },
          { label: 'Hire NLP Engineers', href: '/hire/nlp-engineers' },
          { label: 'Hire Data Engineers', href: '/hire/data-engineer' },
          { label: 'Hire Data Engineers (Specialist)', href: '/hire/data-engineers' },
        ],
      },
      {
        title: 'Framework Specialists',
        links: [
          { label: 'Hire CrewAI Developers', href: '/hire/crewai-developers' },
          { label: 'Hire LangGraph Engineers', href: '/hire/langgraph-engineers' },
          { label: 'Hire AutoGen Developers', href: '/hire/autogen-developers' },
          { label: 'Hire n8n Automation Experts', href: '/hire/n8n-automation-experts' },
          { label: 'Hire Make.com Automation Experts', href: '/hire/make-automation-experts' },
          { label: 'Hire Voiceflow Developers', href: '/hire/voiceflow-developers' },
        ],
      },
      {
        title: 'Platform Specialists',
        links: [
          { label: 'Hire Databricks Engineers', href: '/hire-databricks-engineer' },
        ],
      },
      {
        title: 'Engineering',
        links: [
          { label: 'Hire Python Developers', href: '/hire/python-developer' },
          { label: 'Hire React Developers', href: '/hire/react-developer' },
          { label: 'Hire Full-Stack Developers', href: '/hire/full-stack-developer' },
          { label: 'Hire DevOps Engineers', href: '/hire/devops-engineer' },
          { label: 'Hire Cloud Engineers', href: '/hire/cloud-engineer' },
          { label: 'Hire QA Engineers', href: '/hire/qa-engineer' },
          { label: 'Hire Cybersecurity Engineers', href: '/hire/cybersecurity-engineer' },
          { label: 'Hire Software Engineers', href: '/hire/software-engineer' },
          { label: 'Hire Node.js Developers', href: '/hire/node-developer' },
          { label: 'Hire Product Managers', href: '/hire/product-manager' },
        ],
      },
    ],
  },
  {
    id: 'staff-aug',
    title: 'Staff Augmentation',
    color: '#10b981',
    links: [
      { label: 'Staff Augmentation', href: '/staff-augmentation' },
      { label: 'AI Staff Augmentation', href: '/ai-staff-augmentation' },
      { label: 'IT Staff Augmentation', href: '/it-staff-augmentation' },
      { label: 'Dedicated AI Team', href: '/dedicated-ai-team' },
      { label: 'Dedicated Development Team', href: '/dedicated-development-team' },
      { label: 'Managed AI Engineering', href: '/managed-ai-engineering' },
    ],
  },
  {
    id: 'engagement',
    title: 'Engagement Models',
    color: '#3b82f6',
    links: [
      { label: 'Managed AI Engineer', href: '/engage/managed-ai-engineer' },
      { label: 'Outcome-Based Project', href: '/engage/outcome-based-project' },
      { label: 'App Rescue', href: '/engage/app-rescue' },
      { label: 'Fixed-Price AI Project', href: '/fixed-price-ai-project' },
      { label: 'Outcome-Based AI Development', href: '/outcome-based-ai-development' },
      { label: 'AI Project Development', href: '/ai-project-development' },
    ],
  },
  {
    id: 'technologies',
    title: 'AI Technologies & Services',
    color: '#8b5cf6',
    groups: [
      {
        title: 'AI Development',
        links: [
          { label: 'AI Agent Development', href: '/ai-agent-development' },
          { label: 'RAG Pipeline Development', href: '/rag-pipeline-development' },
          { label: 'LLM Development', href: '/llm-development' },
          { label: 'OpenAI Integration', href: '/openai-integration' },
          { label: 'LangChain Development', href: '/langchain-developer' },
          { label: 'Generative AI Development', href: '/generative-ai-development' },
          { label: 'AI Consulting Services', href: '/ai-consulting-firm' },
          { label: 'AI Operations', href: '/ai-operations' },
        ],
      },
      {
        title: 'Intelligent Document Processing',
        links: [
          { label: 'Intelligent Document Processing', href: '/intelligent-document-processing' },
          { label: 'IDP — Banking & Financial Services', href: '/intelligent-document-processing/banking-financial-services' },
          { label: 'IDP — Insurance', href: '/intelligent-document-processing/insurance' },
          { label: 'IDP — Healthcare & Life Sciences', href: '/intelligent-document-processing/healthcare-life-sciences' },
          { label: 'IDP — Legal & Compliance', href: '/intelligent-document-processing/legal-compliance' },
          { label: 'IDP — Supply Chain & Logistics', href: '/intelligent-document-processing/supply-chain-logistics' },
          { label: 'IDP — Human Resources', href: '/intelligent-document-processing/human-resources' },
        ],
      },
    ],
  },
  {
    id: 'industries',
    title: 'Industries',
    color: '#14b8a6',
    links: [
      { label: 'AI for Legal', href: '/ai-for-legal' },
      { label: 'AI for Fintech', href: '/ai-for-fintech' },
      { label: 'AI for Healthcare', href: '/ai-for-healthcare' },
      { label: 'AI for E-Commerce', href: '/ai-for-ecommerce' },
      { label: 'AI for Logistics', href: '/ai-for-logistics' },
      { label: 'Fintech', href: '/fintech' },
      { label: 'Ad & Marketing Agencies', href: '/ad-marketing-agencies' },
    ],
  },
  {
    id: 'agentforce',
    title: 'Agentforce',
    color: '#0ea5e9',
    groups: [
      {
        title: 'Overview',
        links: [
          { label: 'Agentforce', href: '/agentforce' },
          { label: 'FAQ', href: '/agentforce/faq' },
          { label: 'Pricing', href: '/agentforce/pricing' },
          { label: 'Compare Hub', href: '/agentforce/compare' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'All Services', href: '/agentforce/services' },
          { label: 'Strategy & Readiness', href: '/agentforce/services/agentforce-strategy-readiness' },
          { label: 'Agent Design & Configuration', href: '/agentforce/services/agent-design-configuration' },
          { label: 'Sales Cloud Agent Deployment', href: '/agentforce/services/sales-cloud-agent-deployment' },
          { label: 'Service Cloud Agent Deployment', href: '/agentforce/services/service-cloud-agent-deployment' },
          { label: 'MuleSoft & Data Cloud Integration', href: '/agentforce/services/mulesoft-data-cloud-integration' },
          { label: 'Rescue & Optimisation', href: '/agentforce/services/agentforce-rescue-optimisation' },
        ],
      },
      {
        title: 'Playbook',
        links: [
          { label: 'All Playbooks', href: '/agentforce/playbook' },
          { label: 'Scope Your First Agent', href: '/agentforce/playbook/scope-your-first-agentforce-agent' },
          { label: 'Atlas Reasoning Engine Explained', href: '/agentforce/playbook/atlas-reasoning-engine-explained' },
          { label: 'Financial Services Service Cloud Build', href: '/agentforce/playbook/financial-services-service-cloud-build' },
          { label: 'Pricing Guide 2026', href: '/agentforce/playbook/agentforce-pricing-guide-2026' },
          { label: 'ROI Guide', href: '/agentforce/playbook/agentforce-roi-guide' },
          { label: 'How Does Agentforce Work', href: '/agentforce/playbook/how-does-agentforce-work' },
        ],
      },
      {
        title: 'Sales Cloud',
        links: [
          { label: 'Sales Cloud Hub', href: '/agentforce/sales-cloud' },
          { label: 'SDR Agent', href: '/agentforce/sales-cloud/sdr-agent' },
          { label: 'Pipeline Health Monitor', href: '/agentforce/sales-cloud/pipeline-health-monitor' },
          { label: 'Quote & Proposal Agent', href: '/agentforce/sales-cloud/quote-proposal-agent' },
        ],
      },
      {
        title: 'Service Cloud',
        links: [
          { label: 'Service Cloud Hub', href: '/agentforce/service-cloud' },
          { label: 'Autonomous Case Resolution', href: '/agentforce/service-cloud/autonomous-case-resolution' },
          { label: 'Intelligent Escalation', href: '/agentforce/service-cloud/intelligent-escalation' },
          { label: 'Knowledge Base Agent', href: '/agentforce/service-cloud/knowledge-base-agent' },
        ],
      },
      {
        title: 'Marketing Cloud',
        links: [
          { label: 'Marketing Cloud Hub', href: '/agentforce/marketing-cloud' },
          { label: 'Campaign Execution Agent', href: '/agentforce/marketing-cloud/campaign-execution-agent' },
          { label: 'Lead Nurture Agent', href: '/agentforce/marketing-cloud/lead-nurture-agent' },
          { label: 'Event & Webinar Agent', href: '/agentforce/marketing-cloud/event-webinar-agent' },
        ],
      },
      {
        title: 'Internal Operations',
        links: [
          { label: 'Internal Operations Hub', href: '/agentforce/internal-operations' },
          { label: 'HR Onboarding Agent', href: '/agentforce/internal-operations/hr-onboarding-agent' },
          { label: 'Finance Approval Agent', href: '/agentforce/internal-operations/finance-approval-agent' },
          { label: 'IT Helpdesk Agent', href: '/agentforce/internal-operations/it-helpdesk-agent' },
        ],
      },
      {
        title: 'Industries',
        links: [
          { label: 'All Industries', href: '/agentforce/industries' },
          { label: 'Financial Services', href: '/agentforce/industries/financial-services' },
          { label: 'Healthcare', href: '/agentforce/industries/healthcare' },
          { label: 'Insurance', href: '/agentforce/industries/insurance' },
          { label: 'Retail & E-Commerce', href: '/agentforce/industries/retail-ecommerce' },
          { label: 'Manufacturing', href: '/agentforce/industries/manufacturing' },
          { label: 'Telecom', href: '/agentforce/industries/telecom' },
          { label: 'Legal & Professional Services', href: '/agentforce/industries/legal-professional-services' },
          { label: 'Real Estate', href: '/agentforce/industries/real-estate' },
          { label: 'Energy & Utilities', href: '/agentforce/industries/energy-utilities' },
          { label: 'Logistics & Supply Chain', href: '/agentforce/industries/logistics-supply-chain' },
          { label: 'Education', href: '/agentforce/industries/education' },
          { label: 'Automotive', href: '/agentforce/industries/automotive' },
          { label: 'Government & Public Sector', href: '/agentforce/industries/government-public-sector' },
        ],
      },
      {
        title: 'Compare',
        links: [
          { label: 'Agentforce vs Einstein Copilot', href: '/agentforce/compare/agentforce-vs-einstein-copilot' },
          { label: 'Agentforce vs Microsoft Copilot', href: '/agentforce/compare/agentforce-vs-microsoft-copilot' },
        ],
      },
    ],
  },
  {
    id: 'azure',
    title: 'Azure AI Foundry',
    color: '#2563eb',
    groups: [
      {
        title: 'Overview',
        links: [
          { label: 'Azure AI Foundry', href: '/azure-ai-foundry' },
          { label: 'Services Hub', href: '/azure-ai-foundry/services' },
          { label: 'Industries Hub', href: '/azure-ai-foundry/industries' },
          { label: 'Playbook Hub', href: '/azure-ai-foundry/playbook' },
          { label: 'Compare Hub', href: '/azure-ai-foundry/compare' },
          { label: 'Integrations Hub', href: '/azure-ai-foundry/integrations' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Strategy & Readiness', href: '/azure-ai-foundry/services/azure-ai-foundry-strategy-readiness' },
          { label: 'AI Agent Design & Build', href: '/azure-ai-foundry/services/ai-agent-design-build' },
          { label: 'Azure OpenAI Integration', href: '/azure-ai-foundry/services/azure-openai-integration' },
          { label: 'Copilot Studio Agents', href: '/azure-ai-foundry/services/copilot-studio-agents' },
          { label: 'Azure AI Search & RAG', href: '/azure-ai-foundry/services/azure-ai-search-rag' },
          { label: 'Rescue & Optimisation', href: '/azure-ai-foundry/services/azure-ai-rescue-optimisation' },
          { label: 'Azure AI Agent Service', href: '/azure-ai-foundry/services/azure-ai-agent-service' },
        ],
      },
      {
        title: 'Enterprise Automation',
        links: [
          { label: 'Enterprise Hub', href: '/azure-ai-foundry/enterprise' },
          { label: 'Document Intelligence Agent', href: '/azure-ai-foundry/enterprise/document-intelligence-agent' },
          { label: 'Enterprise Knowledge Agent', href: '/azure-ai-foundry/enterprise/enterprise-knowledge-agent' },
          { label: 'ERP Process Agent', href: '/azure-ai-foundry/enterprise/erp-process-agent' },
        ],
      },
      {
        title: 'Customer Experience',
        links: [
          { label: 'Customer Experience Hub', href: '/azure-ai-foundry/customer-experience' },
          { label: 'AI Customer Service Agent', href: '/azure-ai-foundry/customer-experience/ai-customer-service-agent' },
          { label: 'Personalised Recommendation Agent', href: '/azure-ai-foundry/customer-experience/personalised-recommendation-agent' },
          { label: 'Omnichannel Engagement Agent', href: '/azure-ai-foundry/customer-experience/omnichannel-engagement-agent' },
        ],
      },
      {
        title: 'Operations',
        links: [
          { label: 'Operations Hub', href: '/azure-ai-foundry/operations' },
          { label: 'Predictive Maintenance Agent', href: '/azure-ai-foundry/operations/predictive-maintenance-agent' },
          { label: 'Supply Chain Intelligence Agent', href: '/azure-ai-foundry/operations/supply-chain-intelligence-agent' },
          { label: 'Compliance Monitoring Agent', href: '/azure-ai-foundry/operations/compliance-monitoring-agent' },
        ],
      },
      {
        title: 'Developer Tools',
        links: [
          { label: 'Developer Tools Hub', href: '/azure-ai-foundry/developer-tools' },
          { label: 'Internal Developer Copilot', href: '/azure-ai-foundry/developer-tools/internal-developer-copilot' },
          { label: 'API Integration Agent', href: '/azure-ai-foundry/developer-tools/api-integration-agent' },
          { label: 'MLOps Automation Agent', href: '/azure-ai-foundry/developer-tools/mlops-automation-agent' },
        ],
      },
      {
        title: 'Playbook',
        links: [
          { label: 'Architect Your First Azure AI Agent', href: '/azure-ai-foundry/playbook/architect-your-first-azure-ai-agent' },
          { label: 'Azure OpenAI vs OpenAI API', href: '/azure-ai-foundry/playbook/azure-openai-vs-openai-api' },
          { label: 'Claims Processing Azure AI Build', href: '/azure-ai-foundry/playbook/claims-processing-azure-ai-build' },
          { label: 'Pricing Guide 2026', href: '/azure-ai-foundry/playbook/pricing-guide-2026' },
          { label: 'Security & Compliance Guide', href: '/azure-ai-foundry/playbook/security-compliance-guide' },
          { label: 'ROI Guide', href: '/azure-ai-foundry/playbook/roi-guide' },
        ],
      },
      {
        title: 'Industries',
        links: [
          { label: 'Financial Services & Banking', href: '/azure-ai-foundry/industries/financial-services-banking' },
          { label: 'Healthcare & Life Sciences', href: '/azure-ai-foundry/industries/healthcare-life-sciences' },
          { label: 'Retail & E-Commerce', href: '/azure-ai-foundry/industries/retail-ecommerce' },
          { label: 'Manufacturing & Supply Chain', href: '/azure-ai-foundry/industries/manufacturing-supply-chain' },
          { label: 'Legal & Professional Services', href: '/azure-ai-foundry/industries/legal-professional-services' },
          { label: 'Insurance', href: '/azure-ai-foundry/industries/insurance' },
        ],
      },
      {
        title: 'Compare',
        links: [
          { label: 'vs AWS Bedrock', href: '/azure-ai-foundry/compare/vs-aws-bedrock' },
          { label: 'vs Google Vertex AI', href: '/azure-ai-foundry/compare/vs-google-vertex-ai' },
          { label: 'vs Agentforce', href: '/azure-ai-foundry/compare/vs-agentforce' },
          { label: 'Copilot Studio vs Power Virtual Agents', href: '/azure-ai-foundry/compare/copilot-studio-vs-power-virtual-agents' },
          { label: 'Semantic Kernel vs LangChain', href: '/azure-ai-foundry/compare/semantic-kernel-vs-langchain' },
        ],
      },
      {
        title: 'Integrations',
        links: [
          { label: 'Dynamics 365', href: '/azure-ai-foundry/integrations/dynamics-365' },
          { label: 'Microsoft 365 & Teams', href: '/azure-ai-foundry/integrations/microsoft-365-teams' },
          { label: 'SharePoint', href: '/azure-ai-foundry/integrations/sharepoint' },
          { label: 'Power Platform', href: '/azure-ai-foundry/integrations/power-platform' },
          { label: 'SAP', href: '/azure-ai-foundry/integrations/sap' },
          { label: 'ServiceNow', href: '/azure-ai-foundry/integrations/servicenow' },
        ],
      },
    ],
  },
  {
    id: 'vertex',
    title: 'Google Vertex AI',
    color: '#4285f4',
    groups: [
      {
        title: 'Overview',
        links: [
          { label: 'Vertex AI', href: '/vertex-ai' },
          { label: 'Services Hub', href: '/vertex-ai/services' },
          { label: 'Playbook Hub', href: '/vertex-ai/playbook' },
        ],
      },
      {
        title: 'Services',
        links: [
          { label: 'Strategy & Readiness', href: '/vertex-ai/services/vertex-ai-strategy-readiness' },
          { label: 'Gemini Integration', href: '/vertex-ai/services/gemini-integration' },
          { label: 'Vertex Agent Builder', href: '/vertex-ai/services/vertex-agent-builder' },
          { label: 'Vertex AI Search & RAG', href: '/vertex-ai/services/vertex-ai-search-rag' },
          { label: 'BigQuery ML & Data Agents', href: '/vertex-ai/services/bigquery-ml-data-agents' },
          { label: 'Rescue & Optimisation', href: '/vertex-ai/services/vertex-ai-rescue-optimisation' },
        ],
      },
      {
        title: 'Data & Analytics',
        links: [
          { label: 'Data & Analytics Hub', href: '/vertex-ai/data-analytics' },
          { label: 'BigQuery Intelligent Agent', href: '/vertex-ai/data-analytics/bigquery-intelligent-agent' },
          { label: 'Document AI Pipeline', href: '/vertex-ai/data-analytics/document-ai-pipeline' },
          { label: 'Enterprise Search Agent', href: '/vertex-ai/data-analytics/enterprise-search-agent' },
        ],
      },
      {
        title: 'Customer Experience',
        links: [
          { label: 'Customer Experience Hub', href: '/vertex-ai/customer-experience' },
          { label: 'Conversational AI Agent', href: '/vertex-ai/customer-experience/conversational-ai-agent' },
          { label: 'Personalisation Engine', href: '/vertex-ai/customer-experience/personalisation-engine' },
          { label: 'Contact Centre AI', href: '/vertex-ai/customer-experience/contact-centre-ai' },
        ],
      },
      {
        title: 'Operations',
        links: [
          { label: 'Operations Hub', href: '/vertex-ai/operations' },
          { label: 'Supply Chain Intelligence', href: '/vertex-ai/operations/supply-chain-intelligence' },
          { label: 'Predictive Analytics Agent', href: '/vertex-ai/operations/predictive-analytics-agent' },
          { label: 'Quality Control Vision Agent', href: '/vertex-ai/operations/quality-control-vision-agent' },
        ],
      },
      {
        title: 'Developer Tools',
        links: [
          { label: 'Developer Tools Hub', href: '/vertex-ai/developer-tools' },
          { label: 'Code Generation Agent', href: '/vertex-ai/developer-tools/code-generation-agent' },
          { label: 'MLOps Pipeline Agent', href: '/vertex-ai/developer-tools/mlops-pipeline-agent' },
          { label: 'API Testing Agent', href: '/vertex-ai/developer-tools/api-testing-agent' },
        ],
      },
      {
        title: 'Playbook',
        links: [
          { label: 'Architect Your First Vertex AI Agent', href: '/vertex-ai/playbook/architect-your-first-vertex-ai-agent' },
          { label: 'Vertex AI vs Gemini API', href: '/vertex-ai/playbook/vertex-ai-vs-gemini-api' },
          { label: 'Retail Personalisation Vertex AI Build', href: '/vertex-ai/playbook/retail-personalisation-vertex-ai-build' },
        ],
      },
    ],
  },
  {
    id: 'shopify',
    title: 'Shopify AI Solutions',
    color: '#10b981',
    links: [
      { label: 'Shopify Hub Overview', href: '/shopify' },
      { label: 'Hire Shopify AI Developer', href: '/shopify/hire-ai-agent-developer' },
      { label: 'Shopify Agentic Commerce', href: '/shopify/ai-agentic-commerce' },
      { label: 'Shopify AI Toolkit Integrations', href: '/shopify/ai-toolkit-integration' },
      { label: 'Custom Sidekick Actions', href: '/shopify/custom-sidekick-actions' },
      { label: 'E-Commerce Automation Solutions', href: '/shopify/ecommerce-automation-solutions' },
      { label: 'Beauty & Cosmetics AI Agents', href: '/shopify/solutions/beauty-cosmetics-ai-agents' },
      { label: 'Fashion & Apparel Sizing Agents', href: '/shopify/solutions/fashion-apparel-sizing-agents' },
      { label: 'Subscription Retention Agents', href: '/shopify/solutions/subscription-d2c-retention-agents' },
      { label: 'Semantic Product Recommendation RAG', href: '/shopify/solutions/ai-product-recommendations' },
      { label: 'Autonomous Customer Service', href: '/shopify/solutions/autonomous-customer-service' },
      { label: 'n8n Shopify Agentic Sync', href: '/shopify/workflows/n8n-shopify-agentic-sync' },
      { label: 'Competitor Price Repricer', href: '/shopify/workflows/competitor-price-repricer' },
      { label: 'Supplier Spec Sheet Catalog Enricher', href: '/shopify/workflows/spec-sheet-catalog-enricher' },
      { label: 'Returns Fraud Assessment Agent', href: '/shopify/workflows/returns-fraud-assessment' },
      { label: 'WhatsApp Agentic Marketing', href: '/shopify/workflows/whatsapp-agentic-marketing' },
    ],
  },
  {
    id: 'workflow',
    title: 'AI Workflow Automation Library',
    color: '#f59e0b',
    links: [
      { label: 'All Workflows', href: '/ai-workflow-automation-library' },
      { label: 'Campaign Performance Reporting', href: '/ai-workflow-automation-library/campaign-performance-reporting' },
      { label: 'AI Creative Brief Generator', href: '/ai-workflow-automation-library/ai-creative-brief-generator' },
      { label: 'New Client Onboarding Automation', href: '/ai-workflow-automation-library/new-client-onboarding-automation' },
      { label: 'Automated AM Briefs & Client Reporting', href: '/ai-workflow-automation-library/automated-am-briefs-client-reporting' },
      { label: 'Multi-Channel Inbound Dispatching', href: '/ai-workflow-automation-library/multi-channel-inbound-dispatching' },
      { label: 'White-Label Voice AI Agents', href: '/ai-workflow-automation-library/white-label-voice-ai-agents' },
      { label: 'CRM Ops Layer', href: '/ai-workflow-automation-library/crm-ops-layer' },
      { label: 'Automated SEO & Backlink Syndication', href: '/ai-workflow-automation-library/automated-seo-foundation-backlink-syndication' },
      { label: 'Smart Bidding & Algorithmic Media Buying', href: '/ai-workflow-automation-library/smart-bidding-algorithmic-media-buying' },
      { label: 'Deep SERP-First Hybrid Content Generation', href: '/ai-workflow-automation-library/deep-serp-first-hybrid-content-generation' },
      { label: 'ComfyUI & Runway Commercial Video Pipelines', href: '/ai-workflow-automation-library/comfyui-runway-commercial-video-pipelines' },
      { label: 'Social Intelligence & Subreddit Scraping', href: '/ai-workflow-automation-library/social-intelligence-subreddit-scraping' },
      { label: 'Browser-Based No-API Automation', href: '/ai-workflow-automation-library/browser-based-no-api-automation-legacy-enterprise' },
      { label: 'AI Loan Document Classifier', href: '/ai-workflow-automation-library/ai-loan-document-classifier' },
      { label: 'Automated Underwriting Workflow', href: '/ai-workflow-automation-library/automated-underwriting-workflow' },
      { label: 'Deal Processing Automation', href: '/ai-workflow-automation-library/deal-processing-automation' },
      { label: 'KYC & AML Identity Verification', href: '/ai-workflow-automation-library/kyc-aml-identity-verification' },
      { label: 'Invoice Reconciliation AI', href: '/ai-workflow-automation-library/invoice-reconciliation-ai' },
      { label: 'Real-Time Fraud Detection', href: '/ai-workflow-automation-library/real-time-fraud-detection' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    color: '#64748b',
    links: [
      { label: 'All Tools', href: '/tools' },
      { label: 'AI Project Estimator', href: '/tools/ai-project-estimator' },
      { label: 'AI Readiness — Ad & Marketing Agencies', href: '/tools/ai-readiness-ad-marketing-agencies' },
      { label: 'Azure AI Agent Readiness', href: '/tools/azure-ai-agent-readiness' },
    ],
  },
  {
    id: 'alternatives',
    title: 'Competitor Alternatives',
    color: '#ef4444',
    links: [
      { label: 'Toptal Alternative', href: '/toptal-alternative' },
      { label: 'Turing Alternative', href: '/turing-alternative' },
      { label: 'Andela Alternative', href: '/andela-alternative' },
      { label: 'Upwork Alternative', href: '/upwork-alternative' },
    ],
  },
]

export function countLinks(s: SitemapSection): number {
  if (s.links) return s.links.length
  if (s.groups) return s.groups.reduce((acc, g) => acc + g.links.length, 0)
  return 0
}

/**
 * Renders the full directory (static sections + any extra dynamic sections
 * passed in, e.g. blog posts / case studies) as a compact text block for
 * injection into an LLM prompt: one line per section, "Label (href)" pairs
 * comma-separated. Cheap enough (~a few thousand tokens) to include in full
 * on every request rather than relying on similarity search to surface it.
 */
export function buildSiteDirectoryText(extraSections: SitemapSection[] = []): string {
  const BASE_URL = 'https://kovil.ai'
  const sections = [...STATIC_SECTIONS, ...extraSections]

  return sections
    .map(section => {
      const lines: string[] = []
      if (section.links) {
        lines.push(section.links.map(l => `${l.label} (${BASE_URL}${l.href})`).join(', '))
      }
      if (section.groups) {
        for (const group of section.groups) {
          lines.push(`${group.title}: ` + group.links.map(l => `${l.label} (${BASE_URL}${l.href})`).join(', '))
        }
      }
      return `${section.title}:\n${lines.join('\n')}`
    })
    .join('\n\n')
}
