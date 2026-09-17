// Enterprise platforms Kovil AI builds AI agents into or on top of.
// Currently powers the /platforms hub directory only — no individual
// platform pages exist yet. Each entry is pre-slugged so /platforms/[slug]
// pages can be added later without renaming anything here.

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

export interface Platform {
  slug: string
  name: string
  category: string
  group: string
}

export const platforms: Platform[] = [
  { slug: 'salesforce', name: 'Salesforce', category: 'CRM & Enterprise Cloud', group: 'crm-sales' },
  { slug: 'hubspot', name: 'HubSpot', category: 'CRM & Marketing Automation', group: 'crm-sales' },
  { slug: 'pipedrive', name: 'Pipedrive', category: 'SMB Sales CRM', group: 'crm-sales' },
  { slug: 'freshworks', name: 'Freshworks', category: 'CRM & IT Helpdesk', group: 'crm-sales' },

  { slug: 'microsoft-dynamics-365', name: 'Microsoft Dynamics 365', category: 'ERP & CRM', group: 'erp-financials' },
  { slug: 'netsuite', name: 'NetSuite (Oracle)', category: 'Cloud ERP & Financials', group: 'erp-financials' },
  { slug: 'workday', name: 'Workday', category: 'HR & Financial Management', group: 'erp-financials' },
  { slug: 'odoo', name: 'Odoo', category: 'Open Source ERP', group: 'erp-financials' },
  { slug: 'acumatica', name: 'Acumatica', category: 'Cloud ERP', group: 'erp-financials' },
  { slug: 'zuora', name: 'Zuora', category: 'Subscription Billing & Finance', group: 'erp-financials' },
  { slug: 'sage-intacct', name: 'Sage Intacct', category: 'Cloud Financial Management', group: 'erp-financials' },
  { slug: 'quickbooks', name: 'QuickBooks', category: 'Small Business Accounting', group: 'erp-financials' },
  { slug: 'xero', name: 'Xero', category: 'SMB Cloud Accounting', group: 'erp-financials' },

  { slug: 'shopify-plus', name: 'Shopify Plus', category: 'Enterprise E-Commerce', group: 'ecommerce' },
  { slug: 'bigcommerce', name: 'BigCommerce', category: 'B2B & B2C E-Commerce Platform', group: 'ecommerce' },

  { slug: 'adobe-experience-manager', name: 'Adobe Experience Manager', category: 'Enterprise CMS & Marketing', group: 'marketing-engagement' },
  { slug: 'marketo', name: 'Marketo (Adobe)', category: 'B2B Marketing Automation', group: 'marketing-engagement' },
  { slug: 'activecampaign', name: 'ActiveCampaign', category: 'Marketing & CX Automation', group: 'marketing-engagement' },
  { slug: 'klaviyo', name: 'Klaviyo', category: 'E-Commerce Marketing Automation', group: 'marketing-engagement' },
  { slug: 'braze', name: 'Braze', category: 'Customer Engagement Platform', group: 'marketing-engagement' },

  { slug: 'atlassian', name: 'Atlassian (Jira/Confluence)', category: 'DevOps & Project Management', group: 'work-management' },
  { slug: 'monday', name: 'Monday.com', category: 'Work OS & Workflow Automation', group: 'work-management' },
  { slug: 'asana', name: 'Asana', category: 'Work Management & Productivity', group: 'work-management' },
  { slug: 'wrike', name: 'Wrike', category: 'Enterprise Work Management', group: 'work-management' },
  { slug: 'smartsheet', name: 'Smartsheet', category: 'Collaborative Work Management', group: 'work-management' },

  { slug: 'uipath', name: 'UiPath', category: 'Robotic Process Automation (RPA)', group: 'automation-integration' },
  { slug: 'mulesoft', name: 'MuleSoft', category: 'Integration Platform (iPaaS)', group: 'automation-integration' },
  { slug: 'boomi', name: 'Boomi', category: 'Integration Platform (iPaaS)', group: 'automation-integration' },

  { slug: 'servicenow', name: 'ServiceNow', category: 'ITSM & Enterprise Operations', group: 'support-service' },
  { slug: 'zendesk', name: 'Zendesk', category: 'Customer Support & Helpdesk', group: 'support-service' },

  { slug: 'webflow', name: 'Webflow', category: 'Low-Code Web Development', group: 'dev-infrastructure' },
  { slug: 'contentful', name: 'Contentful', category: 'Headless CMS', group: 'dev-infrastructure' },
  { slug: 'strapi', name: 'Strapi', category: 'Open Source Headless CMS', group: 'dev-infrastructure' },
  { slug: 'twilio', name: 'Twilio', category: 'Customer Engagement APIs', group: 'dev-infrastructure' },
  { slug: 'algolia', name: 'Algolia', category: 'AI Search & Discovery Platform', group: 'dev-infrastructure' },
  { slug: 'auth0-okta', name: 'Auth0 (Okta)', category: 'Identity & Access Management', group: 'dev-infrastructure' },
  { slug: 'stripe', name: 'Stripe', category: 'Payment Infrastructure', group: 'dev-infrastructure' },

  { slug: 'zoho-one', name: 'Zoho One', category: 'All-in-One Business Suite', group: 'all-in-one' },
]

export function getPlatformsByGroup(groupId: string): Platform[] {
  return platforms.filter((p) => p.group === groupId)
}
