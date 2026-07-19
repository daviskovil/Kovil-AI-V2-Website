# Kovil AI 1,000-Page SEO Matrix Guidelines

This project-scoped agent memory file defines the strict structure and research standards for expanding the Kovil AI organic search footprint to 1,000 pages.

## Core Rules

1.  **Duplicate Content Avoidance (SEO/GEO):** We must ensure there is zero keyword overlap or page cannibalization across our platforms, verticals, and horizontals.
2.  **No Fluke Keywords:** All page recommendations must be backed by real search volume, historical metrics, or rising search trajectories from Google Keyword Planner or Search Console.
3.  **Cross-Product Matrix Structure:** Scale pages programmatically by mapping:
    $$\text{Verticals (12 Industries)} \quad \times \quad \text{Horizontals (9 AI Agent Classes)} \quad \times \quad \text{Platforms (8 Integrations)}$$
4.  **Shopify Directory Siloing:** All Shopify-related pages (services, hiring, vertical solutions, and workflow library blueprints) must be nested strictly under the `/shopify/...` directory (e.g., `/shopify/hire-ai-agent-developer`, `/shopify/solutions/beauty-cosmetics-ai-agents`, `/shopify/workflows/n8n-shopify-agentic-sync`).
5.  **Visual Asset Blending (Rule of Thumb):** Always use transparent images for illustrations, vector schematics, and UI mockups. If a solid background is present, design it on pure white and apply CSS blending (`mix-blend-multiply` in Tailwind) on the container so the asset integrates seamlessly into the layout background without creating "patchwork" blocky edges.

## The 3D Matrix Schema

### Verticals
1.  Financial Services & Asset Management
2.  Insurance & Claims
3.  E-Commerce & D2C Brands
4.  Logistics, Freight & Supply Chain
5.  Ad & Marketing Agencies
6.  SaaS & Enterprise Tech
7.  Healthcare, BioTech & Life Sciences
8.  Legal Services & Corporate Compliance
9.  Real Estate & Property Management
10. Manufacturing & Robotics Ops
11. HR & Recruiting Agencies
12. EdTech & Higher Education

### Horizontals (Agent Classes)
1.  Customer Experience (Support, Voice, Chatbots)
2.  Sales & SDR (Leads, Qualifying, Pricing)
3.  Document Intelligence (IDP, Verification, Invoices)
4.  Operational Workflows (Underwriting, Logistics, Sync)
5.  Marketing & Content (Asset generation, SERPs, Briefs)
6.  Code & DevOps (Agentic coding, migrations, CI/CD)
7.  Data & Analytics (ETL, BI Querying, MLflow)
8.  Compliance & SecOps (Jailbreak defense, SOC2, Threats)
9.  Internal Helpdesk (HR onboarding, internal knowledge search)

### Platforms (Integrations)
1.  Salesforce (Agentforce, Einstein)
2.  Microsoft (Copilot Studio, Azure AI Foundry)
3.  Google Cloud (Vertex AI)
4.  ServiceNow (Creator Workflows, Integration Hub)
5.  SAP (Joule)
6.  Shopify (Headless, AI Toolkit)
7.  HubSpot (Breeze AI)
8.  Zendesk (Zendesk AI)

## Target Expansion Matrices (700+ New Pages)
*   **Matrix 1 (Vertical × Horizontal):** 108 Pages (e.g. `/solutions/fintech-customer-support-ai-agents`)
*   **Matrix 2 (Platform × Vertical):** 96 Pages (e.g. `/sap/financial-services-custom-agentic-workflows`)
*   **Matrix 3 (Framework × Tech Playbook):** 40 Pages (e.g. `/langgraph/multi-agent-orchestrator-design`)
*   **Matrix 4 (Platform Playbooks):** 120 Pages (Microsoft Copilot Studio, ServiceNow, SAP, Shopify playbooks siloed under their respective directories)
*   **Matrix 5 (AI Workflow Automation Library):** 130 Pages (e.g. `/ai-workflow-automation-library/automated-payroll-reconciliation`)
*   **Matrix 6 (Advanced Hiring & Competitor Alternatives):** 50 Pages (e.g. `/hire/llama-fine-tuning-expert`)
*   **Matrix 7 (Rescue & Audit Services):** 30 Pages (e.g. `/engage/ai-token-cost-audit`)
*   **Matrix 8 (Technical Deep-Dive Blogs):** 70 Pages (e.g. `/blog/llm-semantic-caching-for-production-latency`)

## Google Search Console (GSC) Indexation Cleanup (July 2026 Update)

*   **Status:** Active Pruning Mode.
*   **The Issue:** Legacy spam URLs (primarily starting with `/onlines/`, `/shop/`, `/product/`, etc. from the previous domain owner) had inflated Google's index.
*   **Index metrics timeline:** Detailed check logs are maintained in [.agents/GSC_CLEANUP_HISTORY.md](file:///c:/Users/davis/Projects/Kovil-AI-V2-Website/.agents/GSC_CLEANUP_HISTORY.md).
    *   **Baseline (15 & 19 July 2026):** 5.74k indexed, 651k not indexed, 752 blocked warnings.
    *   **Next Scheduled Check:** 22–23 July 2026.
    *   **Final Target:** < 1,000 indexed pages (matching core ~319 whitelist pages).
*   **The Solution Deployed:**
    *   **robots.txt Refactor:** Allowed full crawling of all paths (`Allow: /`) and disallowed only internals (`/_next/`, `/api/`, `/monitoring`) and parameter strings (`/*?*`). This enables Googlebot to crawl deleted pages to see their removal signals rather than keeping them blocked and cached.
    *   **Server-Side Pruning:** Next.js middleware returns `410 Gone` with a `noindex` tag for all non-sitemap URLs.
    *   **Sitemaps:** Primary sitemap (`/sitemap.xml` with 319 core pages) and cleanup sitemap (`/trash-cleanup-sitemap.xml` with 13,243 spam URLs) are registered.
*   **Monitoring Timeline:** Allow 4–8 weeks for the index to drop down to ~319 pages. Once indexed spam is ≈ 0, remove the sitemap from GSC, delete the sitemap code file, and update `robots.ts` to remove the trash sitemap reference.
