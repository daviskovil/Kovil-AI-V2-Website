// All-in-One Business Suites: Zoho One. LEAN — skills badges only, no unverified certs.
const rate = (role, us, kr) => ({ role, us, kr })

function finish(s) {
  const n = s.name
  s.metaDesc = `Kovil AI is your single partner for ${n} — ${s.buildPhrase}, plus vetted ${s.rolesPhrase} matched in 48 hours. 2-week risk-free trial.`
  s.ogDesc = `${s.buildPhrase[0].toUpperCase() + s.buildPhrase.slice(1)}, plus vetted ${s.rolesPhrase} matched in 48 hours. 2-week risk-free trial.`
  s.twDesc = `${s.buildPhrase[0].toUpperCase() + s.buildPhrase.slice(1)}, plus vetted ${s.rolesPhrase} matched in 48 hours.`
  s.keywords = [`${n.toLowerCase()} ai agents`, `hire ${n.toLowerCase()} developer`, `${n.toLowerCase()} staff augmentation`, ...s.kw, `what is ${n.toLowerCase()}`]
  s.serviceDesc = `Kovil AI delivers ${s.buildPhrase} on ${n} and staffs vetted ${s.rolesPhrase}.`
  s.ogPanel = s.ogTone[0]; s.ogBorder = s.ogTone[1]; s.ogSubColor = s.ogTone[2]; s.ogFoot = s.ogTone[3]
  return s
}

module.exports = [finish({
  slug: 'zoho-one', name: 'Zoho One', comp: 'ZohoOnePlatformPage', full: false, Noun: 'Account',
  brand: '#E42527', brandLight: '#FF8F90', brandDark: '#A81719', panelA: '#3A0F10', panelB: '#240A0B',
  heroIcon: 'Boxes', panelTitle: 'Zoho One Business Suite',
  chips: ['CRM', 'Creator', 'Flow', 'Zia AI'],
  aiCard: { title: 'Zia AI', sub: 'AI agents, live in weeks' }, talentSub: 'Deluge devs, CRM admins, architects',
  accessStep: 'Before any work starts, you agree sandbox and org access, Deluge deployment process, and success metrics — so day one has a clear target and no production risk.',
  hireTime: '2–4 months to hire', siTime: '4–8 weeks to mobilize',
  whatIs: 'Zoho One is an all-in-one business software suite from Zoho that bundles dozens of integrated applications — including CRM, finance, HR, marketing, support, and low-code tools — under one login and shared data model.',
  nativeAi: { q: 'Does Zoho One have native AI, or do I need a custom build?', a: "Zoho ships its own AI assistant, Zia, across the suite for predictions, summaries, and automation. Kovil AI configures Zia natively and builds custom Deluge scripts, API integrations, and LLM-powered workflows where it isn't enough." },
  bothAnswer: 'Clients commonly hire a Zoho CRM admin or Deluge developer to clean up data and automation first, then add Zia and custom AI agents on top of a suite that is already well-configured.',
  rolesDiff: { q: 'What is the difference between a Zoho Developer, CRM Admin, and Solutions Architect?', a: 'A Zoho Developer writes Deluge scripts, custom functions, and API integrations. A Zoho CRM Admin owns day-to-day configuration, fields, workflows, and user permissions. A Solutions Architect designs how the suite\'s apps share data and which processes belong where.' },
  typicalBuild: 'Zoho CRM customization and automation, Creator custom apps, Flow integrations between Zoho and external tools, Books and Inventory configuration, and Zia-powered or LLM-powered workflows across the suite.',
  integrate: { q: 'Can Kovil AI integrate Zoho One with non-Zoho systems like Shopify, QuickBooks, or Salesforce?', a: 'Yes. Our Zoho talent regularly builds integrations using Zoho Flow, the Zoho APIs, and custom Deluge to connect the suite with Shopify, QuickBooks, Salesforce, and whatever else your business runs on.' },
  rescue: { q: 'Do you support Zoho rescues or fixing a messy Zoho setup?', a: 'Yes. A meaningful share of our Zoho engagements start as a rescue — apps adopted one at a time with duplicated data, Deluge scripts nobody understands, or a Zoho One rollout that never reached full adoption. We audit it, then rebuild in milestone-gated phases.' },
  heroSub: 'From Zia and custom AI agents to Zoho developers, CRM admins, and solutions architects — Kovil AI is a single partner for the entire Zoho One suite.',
  definition: '<strong className="text-foreground">Zoho One</strong> is an all-in-one business software suite from Zoho that bundles dozens of integrated applications — CRM, finance, HR, marketing, support, and low-code tools — under one login and shared data model. Most businesses adopt it app by app and end up with duplicated data and unused modules; connecting it properly, and adding <strong className="text-foreground">AI through Zia and custom agents</strong>, is exactly where Kovil AI works.',
  marketHeading: 'One suite for the whole business — and a unified data layer that AI agents can finally work across.',
  marketStats: [
    { value: 'Dozens', label: 'of integrated business apps — CRM, finance, HR, marketing, support — under a single Zoho One subscription', src: 'Zoho, 2026' },
    { value: 'Zia', label: "Zoho's built-in AI assistant for predictions, summaries, and automation across the suite", src: 'Zoho, 2026' },
    { value: 'Low-code', label: 'Creator, Flow, and Deluge let teams build custom apps and automations without a separate dev platform', src: 'Zoho, 2026' },
    { value: '2–4 mo', label: 'average time to hire a senior Zoho developer through traditional recruiting', src: 'Industry avg.' },
  ],
  pillarAi: 'AI agents built across the Zoho suite — configuring Zia natively, or building custom LLM-powered workflows that work across CRM, finance, support, and your other apps.',
  pillarTalent: "Vetted Zoho developers, CRM admins, solutions architects, and Zia AI specialists, matched in 48 hours. For the Zoho work that has to happen whether or not you're building AI yet.",
  glanceSub: 'Zoho One is rarely one app — most real deployments span several of these, sharing one customer and company record.',
  cta1Title: 'Not sure how much of Zoho One you are really using?', cta1Sub: "Tell us which apps you run on a 30-minute call — we'll find the gaps and scope the highest-impact AI use case.",
  cta2Title: 'Ready to scope a Zoho AI build?', cta3Title: 'Need a Zoho developer, CRM admin, or architect?',
  hireHeading: 'Hire Zoho Developers, CRM Admins, Architects & Zia AI Specialists',
  modules: [
    { icon: 'Users', title: 'Zoho CRM', desc: 'Leads, deals, pipelines, and sales automation — the app most Zoho One deployments center on.' },
    { icon: 'Wand2', title: 'Zoho Creator', desc: 'Low-code platform for building custom apps and workflows on top of your Zoho data.' },
    { icon: 'Workflow', title: 'Zoho Flow', desc: 'No-code integration and automation between Zoho apps and hundreds of external services.' },
    { icon: 'Banknote', title: 'Books, Inventory & Finance', desc: 'Accounting, invoicing, and inventory management that connect directly to sales and orders.' },
    { icon: 'Headset', title: 'Desk & Customer Support', desc: 'Helpdesk and customer support tied to the same customer record as sales and finance.' },
    { icon: 'BarChart3', title: 'Analytics & Reporting', desc: 'Cross-app dashboards and BI over the whole suite.' },
  ],
  aiCaps: [
    { icon: 'Bot', title: 'Zia Configuration', desc: "Set up and tune Zia's predictions, summaries, and automations across CRM, Desk, and other apps so they reflect your real processes." },
    { icon: 'Zap', title: 'Custom LLM Workflows with Deluge', desc: 'Deluge functions that call LLMs to draft emails, summarize records, and update fields — with approvals before anything customer-facing goes out.' },
    { icon: 'GitBranch', title: 'Cross-App Agent Workflows', desc: 'Agents that work across CRM, Books, Desk, and Projects so a single request updates every system it should.' },
    { icon: 'Database', title: 'Unified Data Cleanup', desc: 'Merge duplicated contacts and reconcile records between apps so AI is working from one version of the truth.' },
    { icon: 'ShieldCheck', title: 'Permissions & Data Audits', desc: 'Before agents act, we audit profiles, field-level access, and API scopes so automation cannot reach what it should not.' },
    { icon: 'Search', title: 'Readiness & Scoping', desc: 'Not sure where to start? We audit your Zoho One estate and scope the single highest-impact AI use case first.' },
  ],
  practice: [
    { title: 'One customer record across the suite', desc: 'CRM, Books, and Desk share a deduplicated customer record, so sales, billing, and support all see the same history.' },
    { title: 'Leads qualified and routed automatically', desc: 'An agent scores incoming leads, enriches them, and assigns the right owner, leaving reps to focus on conversations.' },
    { title: 'Month-end that closes itself', desc: 'Invoices, payments, and inventory reconcile across Zoho apps automatically, with only genuine exceptions flagged.' },
  ],
  roles: [
    { icon: 'Code2', title: 'Zoho Developers (Deluge)', desc: 'Write Deluge scripts, custom functions, and API integrations that extend Zoho apps cleanly and keep working through updates.', skills: ['Deluge scripting', 'Zoho APIs', 'Creator apps'] },
    { icon: 'Settings', title: 'Zoho CRM Admins', desc: 'Own fields, layouts, workflows, blueprints, and permissions so the CRM stays clean as the team grows.', skills: ['Workflows & blueprints', 'Profiles & permissions', 'Data hygiene'] },
    { icon: 'Layers', title: 'Zoho Solutions Architects', desc: 'Design how the suite\'s apps share data and which processes belong where, so adoption is deliberate instead of app-by-app drift.', skills: ['Cross-app data model', 'Zoho Flow', 'Integration design'] },
    { icon: 'Bot', title: 'Zia AI Specialists', desc: 'Configure Zia and build custom LLM-powered workflows across the suite — the fastest-growing Zoho specialization.', skills: ['Zia configuration', 'LLM integration', 'Agent workflows'] },
  ],
  rates: [rate('Zoho Developer (Deluge)', '55-90', '20-28'), rate('Zoho CRM Admin', '45-75', '18-24'), rate('Zia AI Specialist', '95-145', '32-42'), rate('Zoho Solutions Architect', '90-140', '30-40')],
  vetChallenge: { title: 'Live Zoho Build Challenge', desc: 'Build a working CRM automation with a Deluge function and an external API call against a realistic spec — not a take-home nobody reviews.' },
  vetJudgment: { title: 'Suite-Wide Judgment', desc: 'We test whether they think across apps — where data should live, which app owns a process, and how to avoid duplicated records — not just configure one module well.' },
  forWho: [
    { title: 'SMBs Running on Zoho One', desc: 'You adopted the suite for the price and now use a fraction of it. Get specialists who connect the apps into one working system.' },
    { title: 'Teams With Duplicated Data', desc: 'Contacts live in CRM, Books, and Desk as three different records. We unify the data model before adding AI on top.' },
    { title: 'Teams Adding AI to the Suite', desc: 'You want Zia and custom agents working across CRM, finance, and support, grounded in clean, connected data.' },
  ],
  stack: ['Zoho CRM', 'Creator', 'Flow', 'Books', 'Inventory', 'Desk', 'Analytics', 'Zia', 'Deluge', 'Shopify', 'QuickBooks', 'Salesforce'],
  explore: [
    { href: '/platforms/hubspot', label: 'HubSpot Platform', desc: 'CRM AI agents and HubSpot talent' },
    { href: '/platforms/salesforce', label: 'Salesforce Platform', desc: 'Agentforce builds and Salesforce talent' },
    { href: '/platforms/quickbooks', label: 'QuickBooks Platform', desc: 'Finance AI and QuickBooks talent' },
  ],
  buildPhrase: 'Zia and custom AI agent builds', rolesPhrase: 'Zoho developers, CRM admins, solutions architects, and Zia AI specialists',
  kw: ['zoho one consultant', 'zoho deluge developer', 'zoho crm admin for hire', 'zoho zia implementation'],
  ogTitle1: 'AI Agents & Specialist', ogTitle2: 'Talent for Zoho One', ogSub: 'Zia AI · Deluge Devs · CRM Admins · Architects', emoji: '🧩',
  ogTone: ['#4A1618', '#7A2528', '#C98688', '#A56164'],
})]
