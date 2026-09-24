// Enterprise platforms Kovil AI builds AI agents into — and staffs specialist
// engineers for. Currently powers the /platforms hub directory only — no
// individual platform pages exist yet. Each entry is pre-slugged so
// /platforms/[slug] pages can be added later without renaming anything here.

export interface PlatformGroup {
  id: string
  title: string
  color: string
  icon: string
}

export const PLATFORM_GROUPS: PlatformGroup[] = [
  { id: 'crm-sales', title: 'CRM & Sales', color: '#00A1E0', icon: 'Building2' },
  { id: 'erp-financials', title: 'ERP & Financials', color: '#10B981', icon: 'DollarSign' },
  { id: 'ecommerce', title: 'E-Commerce', color: '#95BF47', icon: 'ShoppingCart' },
  { id: 'marketing-engagement', title: 'Marketing & Customer Engagement', color: '#EC4899', icon: 'MessageSquare' },
  { id: 'work-management', title: 'Work & Project Management', color: '#8B5CF6', icon: 'ClipboardList' },
  { id: 'automation-integration', title: 'Automation, Integration & RPA', color: '#F59E0B', icon: 'GitBranch' },
  { id: 'support-service', title: 'Support & Service Operations', color: '#0EA5E9', icon: 'Headphones' },
  { id: 'dev-infrastructure', title: 'Developer Platforms & Infrastructure', color: '#6366F1', icon: 'Code2' },
  { id: 'all-in-one', title: 'All-in-One Business Suites', color: '#EF4444', icon: 'Package' },
]

/** Talent demand volume, as sourced from market-demand research. Ranked loosely low → high for badge styling. */
export type TalentDemand = 'Moderate' | 'Moderate-High' | 'Growing Fast' | 'High' | 'Very High' | 'Critically High' | 'Constant'

/** Customer LTV / retention tier for engagements built on this platform. */
export type LtvTier = 'Moderate-High' | 'High' | 'Very High' | 'Ultra-High'

export const LTV_RANK: Record<LtvTier, number> = {
  'Moderate-High': 1,
  'High': 2,
  'Very High': 3,
  'Ultra-High': 4,
}

export interface Platform {
  slug: string
  name: string
  category: string
  group: string
  /** SMB & mid-market adoption level — stored for future filtering/detail pages. */
  adoption: string
  demand: TalentDemand
  ltv: LtvTier
  roles: string[]
  /** Set once a dedicated /platforms/[slug] page exists — makes the hub card a link. */
  href?: string
}

export const platforms: Platform[] = [
  { slug: 'salesforce', name: 'Salesforce', category: 'CRM & Enterprise Cloud', group: 'crm-sales', adoption: 'High to Massive', demand: 'Critically High', ltv: 'Ultra-High', roles: ['Salesforce Developers (Apex/LWC)', 'Admins', 'Architects', 'Agentforce Specialists'], href: '/platforms/salesforce' },
  { slug: 'hubspot', name: 'HubSpot', category: 'CRM & Marketing Automation', group: 'crm-sales', adoption: 'Massive', demand: 'Critically High', ltv: 'Ultra-High', roles: ['HubSpot Developers', 'Solutions Architects', 'Admins'] },
  { slug: 'pipedrive', name: 'Pipedrive', category: 'SMB Sales CRM', group: 'crm-sales', adoption: 'Massive', demand: 'Moderate', ltv: 'Moderate-High', roles: ['CRM Implementation Experts', 'Zapier/Make Automation Devs'] },
  { slug: 'freshworks', name: 'Freshworks', category: 'CRM & IT Helpdesk', group: 'crm-sales', adoption: 'Massive', demand: 'High', ltv: 'High', roles: ['Freshdesk/Freshservice Admins', 'Freshworks Developers'] },

  { slug: 'microsoft-dynamics-365', name: 'Microsoft Dynamics 365', category: 'ERP & CRM', group: 'erp-financials', adoption: 'High', demand: 'High', ltv: 'Very High', roles: ['D365 Developers (X++)', 'Functional Consultants', 'Power Platform Devs'] },
  { slug: 'netsuite', name: 'NetSuite (Oracle)', category: 'Cloud ERP & Financials', group: 'erp-financials', adoption: 'High — go-to for scaling SMBs', demand: 'Very High', ltv: 'Very High', roles: ['NetSuite Developers (SuiteScript)', 'ERP Consultants'] },
  { slug: 'workday', name: 'Workday', category: 'HR & Financial Management', group: 'erp-financials', adoption: 'Medium', demand: 'Very High', ltv: 'Ultra-High', roles: ['Workday Integration Devs', 'HCM Consultants'] },
  { slug: 'odoo', name: 'Odoo', category: 'Open Source ERP', group: 'erp-financials', adoption: 'Massive Globally', demand: 'Very High', ltv: 'High', roles: ['Python/Odoo Developers', 'Functional Analysts'] },
  { slug: 'acumatica', name: 'Acumatica', category: 'Cloud ERP', group: 'erp-financials', adoption: 'Increasing', demand: 'High', ltv: 'Very High', roles: ['.NET/Acumatica Developers', 'ERP Consultants'] },
  { slug: 'zuora', name: 'Zuora', category: 'Subscription Billing & Finance', group: 'erp-financials', adoption: 'Massive', demand: 'High', ltv: 'Ultra-High', roles: ['Billing Integration Experts', 'Zuora Developers'] },
  { slug: 'sage-intacct', name: 'Sage Intacct', category: 'Cloud Financial Management', group: 'erp-financials', adoption: 'High', demand: 'High', ltv: 'Very High', roles: ['Intacct Consultants', 'Financial Systems Integrators'] },
  { slug: 'quickbooks', name: 'QuickBooks', category: 'Small Business Accounting', group: 'erp-financials', adoption: 'Massive', demand: 'Moderate-High', ltv: 'Very High', roles: ['QBO Integration Devs', 'App Ecosystem Experts'] },
  { slug: 'xero', name: 'Xero', category: 'SMB Cloud Accounting', group: 'erp-financials', adoption: 'Medium-High', demand: 'Moderate', ltv: 'Very High', roles: ['Xero API Developers', 'Ecosystem Integration Specialists'] },

  { slug: 'shopify-plus', name: 'Shopify Plus', category: 'Enterprise E-Commerce', group: 'ecommerce', adoption: 'Massive', demand: 'Constant', ltv: 'High', roles: ['Shopify Frontend (Liquid)', 'Backend Devs', 'Custom App Developers'] },
  { slug: 'bigcommerce', name: 'BigCommerce', category: 'B2B & B2C E-Commerce Platform', group: 'ecommerce', adoption: 'High', demand: 'Moderate-High', ltv: 'High', roles: ['BigCommerce Developers', 'Full-Stack Engineers'] },

  { slug: 'adobe-experience-manager', name: 'Adobe Experience Manager', category: 'Enterprise CMS & Marketing', group: 'marketing-engagement', adoption: 'Massive', demand: 'Very High', ltv: 'High', roles: ['AEM Developers', 'Adobe Target Specialists'] },
  { slug: 'marketo', name: 'Marketo (Adobe)', category: 'B2B Marketing Automation', group: 'marketing-engagement', adoption: 'High', demand: 'Very High', ltv: 'High', roles: ['Marketo Solutions Architects', 'Adobe Target Specialists'] },
  { slug: 'activecampaign', name: 'ActiveCampaign', category: 'Marketing & CX Automation', group: 'marketing-engagement', adoption: 'Massive', demand: 'High', ltv: 'High', roles: ['Marketing Automation Engineers', 'API Specialists'] },
  { slug: 'klaviyo', name: 'Klaviyo', category: 'E-Commerce Marketing Automation', group: 'marketing-engagement', adoption: 'Massive', demand: 'Very High', ltv: 'High', roles: ['Klaviyo Developers', 'E-Commerce Data Engineers'] },
  { slug: 'braze', name: 'Braze', category: 'Customer Engagement Platform', group: 'marketing-engagement', adoption: 'High', demand: 'High', ltv: 'High', roles: ['Braze Solutions Architects', 'Lifecycle Developers'] },

  { slug: 'atlassian', name: 'Atlassian (Jira/Confluence)', category: 'DevOps & Project Management', group: 'work-management', adoption: 'Ubiquitous', demand: 'High', ltv: 'High', roles: ['Jira Administrators', 'Atlassian Integration Engineers'] },
  { slug: 'monday', name: 'Monday.com', category: 'Work OS & Workflow Automation', group: 'work-management', adoption: 'Massive', demand: 'Growing Fast', ltv: 'Moderate-High', roles: ['Solutions Engineers', 'Automation/API Developers'] },
  { slug: 'asana', name: 'Asana', category: 'Work Management & Productivity', group: 'work-management', adoption: 'Massive', demand: 'Moderate', ltv: 'Moderate-High', roles: ['API Integration Specialists', 'Solutions Architects'] },
  { slug: 'wrike', name: 'Wrike', category: 'Enterprise Work Management', group: 'work-management', adoption: 'High', demand: 'High', ltv: 'High', roles: ['Wrike Implementation Consultants', 'Automation Experts'] },
  { slug: 'smartsheet', name: 'Smartsheet', category: 'Collaborative Work Management', group: 'work-management', adoption: 'High', demand: 'High', ltv: 'High', roles: ['Smartsheet Solutions Architects', 'Automation/API Developers'] },

  { slug: 'uipath', name: 'UiPath', category: 'Robotic Process Automation (RPA)', group: 'automation-integration', adoption: 'Medium-High', demand: 'High', ltv: 'High', roles: ['RPA Developers', 'UiPath Solution Architects'] },
  { slug: 'mulesoft', name: 'MuleSoft', category: 'Integration Platform (iPaaS)', group: 'automation-integration', adoption: 'Medium-High', demand: 'Critically High', ltv: 'Ultra-High', roles: ['Integration Engineers', 'API Developers'] },
  { slug: 'boomi', name: 'Boomi', category: 'Integration Platform (iPaaS)', group: 'automation-integration', adoption: 'High', demand: 'High', ltv: 'Very High', roles: ['Dell Boomi Integration Developers', 'Cloud Architects'] },

  { slug: 'servicenow', name: 'ServiceNow', category: 'ITSM & Enterprise Operations', group: 'support-service', adoption: 'Medium-High', demand: 'Critically High', ltv: 'Ultra-High', roles: ['ServiceNow Developers', 'ITSM Consultants', 'Architects'] },
  { slug: 'zendesk', name: 'Zendesk', category: 'Customer Support & Helpdesk', group: 'support-service', adoption: 'High', demand: 'Moderate-High', ltv: 'High', roles: ['Zendesk Admins', 'Support Workflow Devs'] },

  { slug: 'webflow', name: 'Webflow', category: 'Low-Code Web Development', group: 'dev-infrastructure', adoption: 'High', demand: 'Very High', ltv: 'Moderate-High', roles: ['Webflow Developers', 'Custom JS Frontend Engineers'] },
  { slug: 'contentful', name: 'Contentful', category: 'Headless CMS', group: 'dev-infrastructure', adoption: 'High', demand: 'Very High', ltv: 'High', roles: ['Headless CMS Frontend Engineers', 'GraphQL/API Specialists'] },
  { slug: 'strapi', name: 'Strapi', category: 'Open Source Headless CMS', group: 'dev-infrastructure', adoption: 'High', demand: 'Growing Fast', ltv: 'Moderate-High', roles: ['Node.js/Strapi Developers', 'Jamstack Engineers'] },
  { slug: 'twilio', name: 'Twilio', category: 'Customer Engagement APIs', group: 'dev-infrastructure', adoption: 'High', demand: 'Critically High', ltv: 'Very High', roles: ['Twilio API Developers', 'Communications Engineers'] },
  { slug: 'algolia', name: 'Algolia', category: 'AI Search & Discovery Platform', group: 'dev-infrastructure', adoption: 'High', demand: 'Very High', ltv: 'High', roles: ['Search Relevance Engineers', 'Frontend/API Developers'] },
  { slug: 'auth0-okta', name: 'Auth0 (Okta)', category: 'Identity & Access Management', group: 'dev-infrastructure', adoption: 'High', demand: 'Very High', ltv: 'Ultra-High', roles: ['IAM Security Engineers', 'Auth0 Integration Developers'] },
  { slug: 'stripe', name: 'Stripe', category: 'Payment Infrastructure', group: 'dev-infrastructure', adoption: 'Massive', demand: 'Very High', ltv: 'Ultra-High', roles: ['Payment Gateway Integration Engineers', 'Billing Developers'] },

  { slug: 'zoho-one', name: 'Zoho One', category: 'All-in-One Business Suite', group: 'all-in-one', adoption: 'Massive', demand: 'Very High', ltv: 'Moderate-High', roles: ['Zoho Developers (Deluge script)', 'Zoho CRM Admins'] },
]

export function getPlatformsByGroup(groupId: string): Platform[] {
  return platforms.filter((p) => p.group === groupId)
}
