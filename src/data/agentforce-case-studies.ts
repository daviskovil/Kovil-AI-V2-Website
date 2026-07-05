export interface AgentforceMetric {
  value: string;
  label: string;
  sublabel?: string;
}

export interface AgentforceFaq {
  q: string;
  a: string;
}

export interface AgentforceImplementationStep {
  title: string;
  detail: string;
}

export interface AgentforceCaseStudy {
  slug: string;
  type: 'case-study' | 'capability-spotlight';
  industry: string;
  clientType: string;
  headline: string;
  subheadline: string;
  excerpt: string;
  published: string;
  tags: string[];
  techStack: string[];
  metrics: AgentforceMetric[];
  challengeHeading: string;
  challengeBody: string;
  challengeBullets: string[];
  solutionHeading: string;
  solutionBody: string;
  solutionBullets: string[];
  implementationSteps: AgentforceImplementationStep[];
  resultsHeading: string;
  resultsBody: string;
  resultsBullets: string[];
  faqs: AgentforceFaq[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const agentforceCaseStudies: AgentforceCaseStudy[] = [
  // ─── CASE STUDY 1: TELECOM ─────────────────────────────────────────────────
  {
    slug: 'agentforce-telecom-service-automation',
    type: 'case-study',
    industry: 'Telecommunications',
    clientType: 'Mid-Size Telecom Provider',
    headline: 'Agentforce Service Agent Automates 87% of Tier-1 Support for a Mid-Size Telecom Provider',
    subheadline: 'From fragmented channels and manual case creation to 24/7 autonomous resolution, deployed in 8 weeks.',
    excerpt:
      'A mid-size telecom provider was creating 14% of support tickets manually, had no after-hours coverage, and routed customer contacts across email, phone, chat, and a web portal with no unification. Kovil AI deployed an Agentforce Service Agent that automated case creation, applied Einstein AI priority scoring, and delivered 24/7 resolution across all channels.',
    published: 'June 2026',
    tags: ['Service Cloud', 'Einstein AI', 'Digital Engagement', '24/7 Automation', 'Prompt Builder'],
    techStack: ['Agentforce', 'Service Cloud', 'Einstein AI', 'Digital Engagement', 'Prompt Builder', 'Data Cloud'],
    metrics: [
      { value: '87%', label: 'Reduction in Manual Case Creation', sublabel: 'Automated across all inbound channels' },
      { value: '71%', label: 'Faster Average Handle Time', sublabel: '14.3 min → 4.1 min per case' },
      { value: '91%', label: 'First-Contact Resolution Rate', sublabel: 'Up from 68% pre-deployment' },
      { value: '24/7', label: 'Coverage Achieved', sublabel: 'Up from 8/5 business hours only' },
    ],
    challengeHeading: 'The Support Operation That Could Not Scale',
    challengeBody:
      'The telecom provider\'s support team was operating at the edge of capacity. Manual processes that worked at 10,000 subscribers were breaking at 80,000. Every operational gap was compounding into customer churn.',
    challengeBullets: [
      '14% of all support tickets required manual creation, agents hand-typed case details instead of resolving issues',
      'No after-hours coverage: 10% of customer contacts arrived outside business hours with no response mechanism',
      'Inbound contacts fragmented across email, phone, chat, and web portal, no unified routing or priority queue',
      'Average handle time of 14.3 minutes per case, driven by agents switching between 4 systems to gather context',
      'First-contact resolution at 68%, agents regularly needed callbacks after researching issues offline',
    ],
    solutionHeading: 'Agentforce Service Agent: End-to-End Automation Across Every Channel',
    solutionBody:
      'Kovil AI designed a Service Cloud architecture powered by Agentforce that connected every inbound channel into a single autonomous support layer. The agent does not just route, it resolves.',
    solutionBullets: [
      'Agentforce Service Agent deployed across email, phone (CTI integration), chat, and web portal via Digital Engagement hub',
      'Einstein AI case classification engine categorized and prioritized 23 issue types automatically on arrival',
      'Prompt Builder templates pre-built for billing queries, service outages, plan changes, and account lookups',
      '24/7 autonomous resolution layer handled the highest-volume ticket types without human intervention',
      'Cases requiring escalation were handed to agents with full context pre-populated, zero data re-entry',
      'Data Cloud unified account history, service records, and billing data into a single agent-accessible profile',
    ],
    implementationSteps: [
      {
        title: 'Channel Audit and Data Model Design',
        detail:
          'Mapped all inbound contact channels, classified the 23 most frequent issue types, and designed the Salesforce data model to support a unified case record across channels.',
      },
      {
        title: 'Digital Engagement Hub Configuration',
        detail:
          'Configured the Agentforce Digital Engagement hub to route all inbound contacts into a single prioritized queue with channel-appropriate handling for email, phone, chat, and web.',
      },
      {
        title: 'Einstein AI Training and Prompt Builder Deployment',
        detail:
          'Trained the Einstein AI classification engine on 12 months of historical tickets. Built 23 Prompt Builder templates covering the most frequent resolution flows, tested against real ticket samples.',
      },
      {
        title: 'Go-Live, Monitoring, and Iteration',
        detail:
          'Deployed in shadow mode for two weeks alongside the human team. Monitored resolution accuracy, adjusted confidence thresholds, and progressively handed volume to Agentforce over a 3-week ramp.',
      },
    ],
    resultsHeading: 'Operational Results: 8 Weeks to Full Deployment',
    resultsBody:
      'Within eight weeks of kickoff, the telecom provider\'s support operation had fundamentally changed. Volume grew, quality went up, not down.',
    resultsBullets: [
      '87% reduction in manual case creation, agents now spend time resolving, not typing',
      '24/7 support coverage delivered without additional headcount',
      'Average handle time reduced from 14.3 minutes to 4.1 minutes (71% improvement)',
      'First-contact resolution rate improved from 68% to 91%',
      '3x increase in simultaneous case handling capacity with the same team size',
      'Customer satisfaction score improved 18 points within 60 days of go-live',
    ],
    faqs: [
      {
        q: 'How long does it take to deploy Agentforce for a telecom service operation?',
        a: 'For a mid-size telecom with 3-5 inbound channels and under 30 issue types, a full Agentforce Service Agent deployment typically takes 6-10 weeks. The critical path is the Digital Engagement channel configuration and Einstein AI classifier training, both require 2-3 weeks of data preparation before any agent logic is built.',
      },
      {
        q: 'Which Agentforce components are most important for telecom support automation?',
        a: 'Digital Engagement (channel unification), Prompt Builder (resolution templates), and Einstein AI Classification (case routing) are the core three. Data Cloud becomes essential when account data is scattered across billing, service, and CRM systems, unified context is what allows autonomous resolution rather than just routing.',
      },
      {
        q: 'Can Agentforce handle after-hours support without human escalation paths?',
        a: 'Yes, for defined issue categories. Agentforce can resolve billing queries, service status updates, plan information, and account lookups autonomously around the clock. Complex technical faults that require network-level investigation still need human review, but Agentforce can acknowledge, triage, and set expectations at any hour.',
      },
      {
        q: 'What is the typical ROI timeline for an Agentforce Service Cloud deployment?',
        a: 'Most service automation implementations break even within 4-6 months through reduced average handle time and improved first-contact resolution. The largest financial return is usually the capacity expansion: the same team can handle 3-4x the volume without additional headcount.',
      },
    ],
    metaTitle: 'Agentforce Telecom Case Study: 87% Fewer Manual Cases, 24/7 AI Support | Kovil AI',
    metaDescription:
      'See how Kovil AI deployed Agentforce Service Agent for a mid-size telecom provider, automating 87% of manual case creation, achieving 24/7 coverage, and cutting handle time from 14 to 4 minutes.',
    keywords: [
      'Agentforce telecom case study',
      'Salesforce Service Cloud telecom',
      'Agentforce service automation',
      'telecom support automation Salesforce',
      'Agentforce Digital Engagement',
      'Einstein AI case classification',
      'Salesforce Prompt Builder service agent',
      'Agentforce 24/7 support',
      'Salesforce service automation ROI',
    ],
  },

  // ─── CASE STUDY 2: MEDICARE INSURANCE ──────────────────────────────────────
  {
    slug: 'agentforce-medicare-insurance-ai',
    type: 'case-study',
    industry: 'Insurance / Healthcare',
    clientType: 'Medicare Insurance Provider',
    headline: 'Salesforce Data Cloud and Agentforce Build Member 360 for a Medicare Provider Serving 120K+ Members',
    subheadline: 'Unifying 4 disconnected systems into a single member profile, and reducing advisor data-lookup time by 42%.',
    excerpt:
      'A Medicare insurance provider with 120,000+ members and 150+ licensed advisors across 20+ states was losing enrollment conversions to manual data lookup, uncoordinated advisor routing, and no automated follow-up. Kovil AI deployed Salesforce Data Cloud and Agentforce to unify member profiles, route inquiries by advisor specialty, and automate plan comparison follow-ups.',
    published: 'May 2026',
    tags: ['Data Cloud', 'Customer 360', 'Omni-Channel', 'Einstein Analytics', 'Enrollment Automation'],
    techStack: ['Agentforce', 'Data Cloud', 'Customer 360', 'Omni-Channel', 'Einstein Analytics', 'Marketing Cloud'],
    metrics: [
      { value: '42%', label: 'Less Advisor Data-Lookup Time', sublabel: 'More time on enrollment conversations' },
      { value: '28%', label: 'Enrollment Conversion Lift', sublabel: 'Inquiry-to-enrolled member rate' },
      { value: '4 hrs', label: 'Plan Inquiry Response Time', sublabel: 'Down from 3.2 days' },
      { value: '120K+', label: 'Member Profiles Unified', sublabel: 'Across 4 previously siloed systems' },
    ],
    challengeHeading: 'Four Systems, Zero Unified View',
    challengeBody:
      'The Medicare provider operated a fragmented data environment that made every advisor interaction harder than it needed to be. Member information lived in four separate systems, and advisors had no way to see a complete picture.',
    challengeBullets: [
      '120,000+ member profiles scattered across CRM, enrollment platform, claims system, and telephony database',
      '3,500+ monthly advisor queries with no intelligent routing to advisors by state license or specialty',
      '150+ licensed advisors across 20+ states, allocation was manual and capacity-blind',
      'Advisors spending 40% of their time on data lookup before every member call',
      'No automated follow-up after plan comparison requests: 62% of interested members never heard back within 48 hours',
      'Enrollment pipeline had no geographic visibility, management could not see which states were underperforming',
    ],
    solutionHeading: 'Data Cloud + Agentforce: One Member Profile, Smart Routing, Automated Nurture',
    solutionBody:
      'Kovil AI deployed Salesforce Data Cloud as the central member intelligence layer, with Agentforce coordinating advisor routing and Marketing Cloud automating follow-up sequences.',
    solutionBullets: [
      'Data Cloud ingested and reconciled 120,000+ member profiles from 4 systems into a single golden record per member',
      'Omni-Channel routing engine matched inbound member inquiries to advisors by state license, plan specialty, and available capacity',
      'Agentforce plan comparison agent surfaced top 3 eligible plan options within 90 seconds of a member inquiry',
      'Marketing Cloud Journey Builder automated a 5-touch follow-up sequence 48 hours after every plan comparison request',
      'Einstein Analytics dashboards gave management real-time enrollment pipeline visibility by geography, advisor, and plan type',
      'Member 360 profile available on advisor screen before every call, zero manual data lookup at call start',
    ],
    implementationSteps: [
      {
        title: 'Data Architecture and System Integration',
        detail:
          'Mapped all 4 source systems, designed the Data Cloud identity resolution rules, and built ETL pipelines to unify member records. Identity resolution took 3 weeks of testing to achieve a clean golden record with no false merges.',
      },
      {
        title: 'Omni-Channel Routing Configuration',
        detail:
          'Built the advisor routing model in Omni-Channel: skill profiles for each state license, capacity rules, and priority weights for inbound inquiry types. Tested routing accuracy against 6 months of historical inquiry data.',
      },
      {
        title: 'Agentforce Plan Comparison Agent',
        detail:
          'Deployed the Agentforce plan comparison agent using Prompt Builder: configured it to read the member\'s unified Data Cloud profile, apply eligibility rules, and surface the top 3 plans with side-by-side comparisons.',
      },
      {
        title: 'Marketing Cloud Journey and Analytics',
        detail:
          'Built the 5-touch follow-up journey in Marketing Cloud Journey Builder. Connected Einstein Analytics to the Data Cloud member profiles for real-time pipeline reporting. Trained advisors on the new single-screen workflow.',
      },
    ],
    resultsHeading: 'Member Experience and Enrollment Outcomes',
    resultsBody:
      'The unified member intelligence layer transformed how advisors worked and how members experienced the enrollment process.',
    resultsBullets: [
      '42% reduction in advisor data-lookup time, advisors arrive at every call with the full member picture already loaded',
      'Plan inquiry response time reduced from 3.2 days to 4 hours',
      '28% improvement in enrollment conversion rate from inquiry to enrolled member',
      '98% advisor capacity utilization across all 20+ states through smart Omni-Channel routing',
      '120,000+ member profiles successfully unified with less than 0.3% identity resolution error rate',
      'Enrollment pipeline management visibility: management now has real-time dashboards by geography and advisor',
    ],
    faqs: [
      {
        q: 'How does Salesforce Data Cloud handle member identity resolution across multiple systems?',
        a: 'Data Cloud uses deterministic and probabilistic matching rules, email, phone, member ID, and date-of-birth combinations, to reconcile records across source systems. For Medicare providers, the member ID is typically the primary deterministic key, with probabilistic matching as a fallback for pre-enrollment leads without an assigned ID.',
      },
      {
        q: 'Can Agentforce be configured to respect state-level advisor licensing requirements?',
        a: 'Yes. Omni-Channel routing skills can be configured with state license attributes, and Agentforce can enforce that no member from State A is routed to an advisor licensed only in State B. This is a core compliance guardrail for insurance use cases.',
      },
      {
        q: 'How long does a Salesforce Data Cloud implementation take for a mid-size insurance provider?',
        a: 'A full Data Cloud deployment, from data inventory to golden record, typically takes 8-14 weeks for a provider with 3-5 source systems and under 200,000 profiles. The longest phase is usually identity resolution tuning, which requires iterative testing against real data samples.',
      },
      {
        q: 'What does the 5-touch follow-up journey look like in Marketing Cloud?',
        a: 'Touch 1 is an immediate plan summary email (within 2 minutes of inquiry). Touch 2 is a WhatsApp or SMS reminder at 48 hours. Touch 3 is a personalized email with advisor contact details at day 5. Touch 4 is an advisor outbound call prompt at day 8. Touch 5 is a final enrollment deadline reminder at day 12. Each touch adapts based on the member\'s engagement with previous messages.',
      },
    ],
    metaTitle: 'Agentforce Medicare Insurance Case Study: Data Cloud Member 360 and 28% Enrollment Lift | Kovil AI',
    metaDescription:
      'How Kovil AI used Salesforce Data Cloud and Agentforce to unify 120K+ Medicare member profiles, route advisors by state license, and improve enrollment conversion by 28%.',
    keywords: [
      'Agentforce insurance case study',
      'Salesforce Data Cloud Medicare',
      'Medicare insurance Salesforce',
      'Salesforce member 360',
      'Agentforce insurance enrollment',
      'Data Cloud identity resolution insurance',
      'Salesforce Omni-Channel insurance routing',
      'Medicare advisor routing Salesforce',
      'insurance enrollment automation Agentforce',
    ],
  },

  // ─── CASE STUDY 3: EDUCATION ────────────────────────────────────────────────
  {
    slug: 'agentforce-education-enrollment-automation',
    type: 'case-study',
    industry: 'Education / EdTech',
    clientType: 'Higher Education Institution',
    headline: 'Agentforce Automates Multi-Channel Student Capture and Counselor Routing for a Higher Education Institution',
    subheadline: '97% of inquiries responded to within 5 minutes. 45% enrollment conversion lift. Counselor routing fully automated.',
    excerpt:
      'A higher education institution was handling 800+ weekly prospective student inquiries across website, WhatsApp, Facebook Messenger, and email, all manually routed by spreadsheet. Kovil AI deployed Agentforce Digital Engagement to unify channels, route by program and counselor capacity, and deliver personalized course recommendations using Einstein AI.',
    published: 'April 2026',
    tags: ['Digital Engagement', 'WhatsApp Business API', 'Omni-Channel', 'Einstein AI', 'Enrollment Automation'],
    techStack: ['Agentforce', 'Digital Engagement', 'WhatsApp Business API', 'Omni-Channel', 'Einstein AI', 'Prompt Builder', 'Marketing Cloud'],
    metrics: [
      { value: '97%', label: 'Inquiries Responded Within 5 Min', sublabel: 'Up from 65% within 24 hours' },
      { value: '45%', label: 'Enrollment Conversion Lift', sublabel: 'Inquiry-to-application rate' },
      { value: '100%', label: 'Routing Automated', sublabel: 'Zero manual spreadsheet assignment' },
      { value: '3.2x', label: 'Counselor Time on High-Intent Leads', sublabel: 'Freed from manual triage work' },
    ],
    challengeHeading: 'Eight Hundred Weekly Inquiries. One Spreadsheet.',
    challengeBody:
      'The institution\'s admissions team was stretched across four inbound channels with no automation, and losing applicants to slow response times they could not fix without adding headcount.',
    challengeBullets: [
      'Prospective student inquiries arriving simultaneously from website chat, WhatsApp, Facebook Messenger, and email, all handled in separate tabs',
      '800+ weekly inquiries manually assigned to counselors via a shared spreadsheet, no capacity visibility',
      '35% of inquiries went unresponded for more than 24 hours during peak enrollment periods',
      'No personalization: every program interest received the same generic acknowledgment email regardless of academic background',
      'Counselors spending 60% of their time on admin (routing, logging, follow-up tracking) and 40% on actual advising',
    ],
    solutionHeading: 'Agentforce Digital Engagement: One Inbox, Smart Routing, Instant Personalization',
    solutionBody:
      'Kovil AI unified all four inbound channels into Agentforce\'s Digital Engagement hub, then built an intelligent routing layer that directed every inquiry to the right counselor automatically.',
    solutionBullets: [
      'Agentforce Digital Engagement hub connected website chat, WhatsApp Business API, Facebook Messenger, and email into a single managed queue',
      'Einstein AI intent classifier categorized each inquiry by program interest (undergraduate, postgraduate, MBA, professional certificate) within seconds of receipt',
      'Omni-Channel routing assigned inquiries by program specialty, counselor capacity, and geographic preference, real-time, automatic',
      'Agentforce course recommendation engine surfaced 3 personalized program suggestions based on each student\'s stated academic background',
      'Automated follow-up sequences: WhatsApp acknowledgment within 5 minutes, counselor-specific email within 2 hours',
      'Marketing Cloud open day and virtual tour invites triggered based on program interest, no manual campaign management needed',
    ],
    implementationSteps: [
      {
        title: 'Channel Mapping and Counselor Skill Profiling',
        detail:
          'Audited all inbound inquiry flows and built counselor skill profiles: program specializations, language capabilities, and target geographies. Designed the Salesforce data model for student inquiry records with program interest, source channel, and academic background fields.',
      },
      {
        title: 'Digital Engagement Hub Setup',
        detail:
          'Configured the WhatsApp Business API connector and Facebook Messenger integration into Agentforce Digital Engagement. Built unified queue rules and SLA targets: 5-minute response for all channels during business hours, automated acknowledgment after-hours.',
      },
      {
        title: 'Einstein AI Classifier and Recommendation Engine',
        detail:
          'Trained the Einstein AI intent classifier on 18 months of historical inquiry transcripts. Built the course recommendation Prompt Builder template that reads the student\'s stated background and surfaces 3 relevant programs with a comparison summary.',
      },
      {
        title: 'Automation Sequences and Counselor Training',
        detail:
          'Built the WhatsApp and email follow-up sequences in Marketing Cloud Journey Builder. Ran a 2-week parallel operation period where counselors validated routing accuracy before the spreadsheet was retired. Trained the full admissions team on the new Salesforce-native workflow.',
      },
    ],
    resultsHeading: 'Admissions Results: First Enrollment Cycle After Go-Live',
    resultsBody:
      'The first full enrollment season after deployment showed dramatic changes in response speed, counselor productivity, and conversion outcomes.',
    resultsBullets: [
      '97% of inquiries responded to within 5 minutes (up from 65% within 24 hours)',
      '45% improvement in enrollment conversion from initial inquiry to completed application',
      'Counselor manual routing eliminated: 100% of assignments now automated',
      'Counselors redirected 3.2x more time to high-intent applicants who needed advising, not admin',
      'Personalized program recommendations delivered to 100% of inquiries (up from 0%)',
      'Peak enrollment period handled with existing headcount, no temporary hiring required',
    ],
    faqs: [
      {
        q: 'How does Agentforce handle WhatsApp Business API for student inquiries?',
        a: 'Agentforce connects to WhatsApp via the WhatsApp Business API through the Digital Engagement hub. Incoming WhatsApp messages are queued alongside chat, email, and social channel contacts in a single prioritized view. The Agentforce agent can send template messages (pre-approved by Meta) and free-form responses, and can transfer the conversation to a human counselor with full transcript context intact.',
      },
      {
        q: 'Can the routing logic handle inquiries in multiple languages?',
        a: 'Yes. Omni-Channel routing can be configured with language as a counselor skill attribute. If the Einstein AI classifier detects a non-English inquiry, the routing engine filters the eligible counselor pool to those with the matching language skill before assigning.',
      },
      {
        q: 'How is academic background captured to power personalized program recommendations?',
        a: 'Agentforce collects academic background through a structured intake flow during the first inquiry interaction, for WhatsApp and chat, this is a short 3-question conversation; for email and web forms, a structured intake field set. This data populates the student lead record and is passed to the Einstein AI recommendation engine.',
      },
      {
        q: 'What happens to inquiries that arrive outside business hours?',
        a: 'Agentforce delivers an automated acknowledgment on the same channel within 5 minutes: a personalized message on WhatsApp, a formatted email, or a chat response confirming receipt. The system records the inquiry, categorizes it, and queues it for counselor assignment when business hours resume, with a pre-populated context card so the counselor needs zero additional research.',
      },
    ],
    metaTitle: 'Agentforce Education Case Study: 97% Instant Response, 45% Enrollment Lift | Kovil AI',
    metaDescription:
      'Kovil AI deployed Agentforce Digital Engagement for a higher education institution, unifying WhatsApp, Facebook, website, and email into one intelligent queue with 45% enrollment conversion improvement.',
    keywords: [
      'Agentforce education case study',
      'Salesforce higher education enrollment',
      'Agentforce WhatsApp education',
      'Salesforce admissions automation',
      'Digital Engagement education Salesforce',
      'Agentforce student lead routing',
      'Einstein AI education recommendations',
      'higher education Salesforce Agentforce',
      'student enrollment automation Salesforce',
    ],
  },

  // ─── CASE STUDY 4: HOSPITALITY ──────────────────────────────────────────────
  {
    slug: 'agentforce-hospitality-lead-management',
    type: 'case-study',
    industry: 'Hospitality / Hotels',
    clientType: 'Multi-Property Hotel Management Company',
    headline: 'Agentforce and Data Cloud Cut Duplicate Leads by 85% and Slash Response Time to 45 Minutes for a Multi-Property Hotel Group',
    subheadline: '18 hotels, 4 resorts, 1,200+ rooms, all guest intelligence unified in one place for the first time.',
    excerpt:
      'A hotel management company operating 18 hotels, 4 resorts, and 1,200+ rooms across multiple properties had an 85% duplicate guest lead problem, 8.3-hour average lead response times, and no cross-property revenue visibility. Kovil AI deployed Salesforce Data Cloud and Agentforce to unify guest profiles, automate deduplication, and deliver personalized marketing at scale.',
    published: 'March 2026',
    tags: ['Data Cloud', 'Einstein AI', 'Marketing Cloud', 'Lead Deduplication', 'Corporate Account Management'],
    techStack: ['Agentforce', 'Data Cloud', 'Marketing Cloud', 'Einstein AI', 'Service Cloud', 'Omni-Channel'],
    metrics: [
      { value: '85%', label: 'Fewer Duplicate Guest Records', sublabel: 'Across all 22 properties' },
      { value: '96%', label: 'Faster Lead Response Time', sublabel: '8.3 hours → 45 minutes' },
      { value: '80%', label: 'More Personalized Campaigns', sublabel: 'Using RFM segmentation and guest history' },
      { value: '+22 pts', label: 'NPS Improvement', sublabel: 'Guest satisfaction score within 60 days' },
    ],
    challengeHeading: 'The Same Corporate Client. Five Different Records. Zero Coherent Strategy.',
    challengeBody:
      'The hotel group\'s data problem was invisible until you looked closely, and then it was everywhere. The same corporate client appeared as five separate leads across five properties, with no system connecting them.',
    challengeBullets: [
      '18 hotels and 4 resorts each operating separate reservation systems with no cross-property guest identity reconciliation',
      '85% of corporate client leads appeared as duplicates when a client contacted more than one property',
      'Average lead response time: 8.3 hours, industry best practice is under 60 minutes for corporate RFPs',
      '80% of marketing campaigns sent generic content with no personalization based on guest history or property preference',
      'Revenue management had no view of a corporate account\'s total spend across all 22 properties, blind to their highest-value clients',
      'No automated routing for corporate RFPs to designated account managers, all handled reactively by individual property teams',
    ],
    solutionHeading: 'Data Cloud as the Guest Intelligence Layer: One Record Per Guest, Across Every Property',
    solutionBody:
      'Kovil AI designed a Salesforce Data Cloud architecture that treated every property as a node feeding into a single guest intelligence platform, with Agentforce coordinating the response layer on top.',
    solutionBullets: [
      'Data Cloud ingested and unified guest records from 22 property management systems into a single guest golden record using email, phone, and loyalty number as match keys',
      'Einstein AI deduplication engine ran continuously, merging new leads against the unified profile within seconds of creation',
      'Agentforce routed corporate RFP inquiries to the designated account manager for that corporate relationship within 45 minutes, 24/7',
      'Marketing Cloud activated RFM-segmented campaigns: guest recency, frequency, and monetary value drove tailored offers by property tier and stay preference',
      'Cross-property corporate revenue dashboard gave revenue management complete visibility into every account\'s total spend, preferred properties, and booking patterns',
      'Automated campaign triggers: anniversary stays, loyalty tier upgrades, and corporate contract renewals all handled by Marketing Cloud journey automation',
    ],
    implementationSteps: [
      {
        title: 'Property System Audit and Data Mapping',
        detail:
          'Audited all 22 property management systems to map guest record schemas, identify the 6 match key fields available across systems (email, phone, loyalty number, company name, booking reference, and national ID), and design the Data Cloud identity resolution ruleset.',
      },
      {
        title: 'Data Cloud Unification and Deduplication',
        detail:
          'Built and tested the Data Cloud ingestion pipelines for all 22 sources. Ran the Einstein AI matching engine against 3 years of historical guest data to generate the initial unified profile database. Manually reviewed a 5,000-record sample to validate identity resolution accuracy before full activation.',
      },
      {
        title: 'Agentforce RFP Routing and Account Manager Assignment',
        detail:
          'Configured the Agentforce routing logic for corporate RFP inquiries: identified 140 corporate accounts with designated managers, built the matching rules, and tested response time SLA compliance across simulated inquiry volumes.',
      },
      {
        title: 'Marketing Cloud Segmentation and Campaign Activation',
        detail:
          'Built the RFM segmentation model in Data Cloud, activated segments in Marketing Cloud, and deployed the first 8 personalized journey templates. Trained the marketing team on the new campaign management workflow and reporting dashboards.',
      },
    ],
    resultsHeading: 'Revenue Management and Guest Experience Outcomes',
    resultsBody:
      'Unifying 22 properties into one data layer changed how the hotel group understood its most valuable guests, and changed the revenue outcomes that followed.',
    resultsBullets: [
      '85% reduction in duplicate guest records, the first clean guest database in the company\'s history',
      'Corporate RFP response time improved from 8.3 hours to 45 minutes (96% improvement)',
      '80% of campaigns now use personalized content based on guest history and property preference',
      'Cross-property corporate revenue visibility: management sees total account value across all 22 properties for the first time',
      'Guest satisfaction (NPS) improved 22 points within 60 days of full deployment',
      'Marketing team campaign build time reduced by 60% through journey automation templates',
    ],
    faqs: [
      {
        q: 'How does Data Cloud handle guest identity resolution across 22 separate property management systems?',
        a: 'Data Cloud uses a combination of deterministic and probabilistic identity resolution. Deterministic rules match on exact keys (email, loyalty number, booking reference). Probabilistic rules catch cases where only partial data is available, for example, a guest who booked under a corporate email at one property and a personal email at another. The Einstein AI matching engine scores every potential match and applies a configurable confidence threshold before merging records.',
      },
      {
        q: 'What is RFM segmentation and how does it apply to hotel marketing?',
        a: 'RFM stands for Recency (when did the guest last stay?), Frequency (how often do they stay?), and Monetary value (how much do they spend per stay?). Combined, these three signals create powerful guest segments: Champions (recent, frequent, high-value), Loyal Guests, At-Risk Guests, and New Guests. Marketing Cloud uses these segments to deliver different messages, a Champion gets an early-access offer; an At-Risk Guest gets a win-back incentive.',
      },
      {
        q: 'Can Agentforce be used to automate corporate RFP responses?',
        a: 'Yes. Agentforce can classify inbound RFP inquiries, retrieve the corporate account history from Data Cloud, and either route to the designated account manager with a pre-populated context brief or, for standard RFPs, generate a draft response using Prompt Builder that the account manager reviews and sends. The latter is more common when RFP volume is high.',
      },
      {
        q: 'How long did the Data Cloud deployment take for 22 property sources?',
        a: 'The data unification phase took 10 weeks for this engagement: 2 weeks for source system audit and mapping, 4 weeks for pipeline build and testing, and 4 weeks for identity resolution tuning and quality validation. The Agentforce routing and Marketing Cloud campaign layers were built in parallel during weeks 6-14, putting total delivery at 14 weeks end-to-end.',
      },
    ],
    metaTitle: 'Agentforce Hospitality Case Study: 96% Faster RFP Response, 85% Less Duplicates | Kovil AI',
    metaDescription:
      'Kovil AI deployed Salesforce Data Cloud and Agentforce for a multi-property hotel group, unifying 22 property systems, cutting duplicate leads by 85%, and reducing RFP response time from 8 hours to 45 minutes.',
    keywords: [
      'Agentforce hospitality case study',
      'Salesforce hotel management',
      'Data Cloud hospitality deduplication',
      'Agentforce hotel lead management',
      'Salesforce property management integration',
      'hospitality marketing automation Salesforce',
      'hotel group Salesforce Data Cloud',
      'Agentforce RFP automation hotels',
      'RFM segmentation Salesforce Marketing Cloud',
    ],
  },

  // ─── CASE STUDY 5: REAL ESTATE DATA CLOUD ──────────────────────────────────
  {
    slug: 'agentforce-real-estate-data-cloud-cdp',
    type: 'case-study',
    industry: 'Real Estate',
    clientType: 'Leading Real Estate Company',
    headline: 'Salesforce Data Cloud and BANT Lead Scoring Transform Pipeline Quality for a Leading Real Estate Company',
    subheadline: 'Eliminating 40% data handoff loss, automating lead scoring, and achieving 34% higher inquiry-to-meeting conversion.',
    excerpt:
      'A leading real estate company was losing 40% of leads in the CRM-to-marketing handoff, spending 2+ hours manually scoring each lead, and running sales and marketing from completely disconnected data environments. Kovil AI deployed Salesforce Data Cloud as the unified CDP and built an automated BANT lead scoring engine that gave every agent their 10 highest-intent leads each morning.',
    published: 'February 2026',
    tags: ['Data Cloud', 'BANT Lead Scoring', 'Marketing Cloud', 'Einstein Analytics', 'Sales Intelligence'],
    techStack: ['Salesforce Data Cloud', 'BANT Scoring Engine', 'Marketing Cloud', 'Einstein Analytics', 'Sales Cloud'],
    metrics: [
      { value: '34%', label: 'Higher Inquiry-to-Meeting Rate', sublabel: 'From better qualified lead prioritization' },
      { value: '61%', label: 'Less Time on Unqualified Leads', sublabel: 'Sales agents redirected to high-intent buyers' },
      { value: '47%', label: 'Marketing ROI Increase', sublabel: 'First 6 months post-deployment' },
      { value: '2%', label: 'Lead Handoff Data Loss', sublabel: 'Down from 40% before Data Cloud' },
    ],
    challengeHeading: 'Two Departments. Two Databases. Forty Percent of Leads Lost Between Them.',
    challengeBody:
      'The real estate company\'s core operational problem was data fragmentation. Marketing generated leads that sales could not effectively prioritize, and sales intelligence never flowed back to marketing to improve targeting.',
    challengeBullets: [
      'Customer data fragmented across CRM, website analytics, email platform, offline event databases, and a legacy property management system, 5 separate sources with no reconciliation',
      'Sales management spending 2+ hours per lead on manual BANT qualification before assigning to agents',
      '40% of marketing-qualified leads lost in the handoff to sales, no CRM field mapping, no context transfer',
      'No behavioral intent data: sales agents could not see which buyers had visited a property listing multiple times, downloaded floor plans, or calculated mortgage eligibility',
      'Marketing campaigns targeted broad geographic areas with no micro-market demand intelligence',
    ],
    solutionHeading: 'Data Cloud as the Unified Buyer Intelligence Layer',
    solutionBody:
      'Kovil AI deployed Salesforce Data Cloud as the single source of truth for all buyer data, then built the BANT lead scoring engine and sales intelligence layer on top.',
    solutionBullets: [
      'Data Cloud integrated 5 source systems, CRM, website analytics, email platform, event database, and property management system, into a unified buyer CDP',
      'Automated BANT scoring engine analyzed 34 behavioral and demographic signals to produce a single qualification score per buyer',
      'Marketing Cloud Journey Builder activated segment-specific nurture tracks (High/Medium/Low intent) automatically based on BANT score thresholds',
      'Einstein Analytics demand prediction model used 18 months of transaction data to identify the top 3 micro-markets by buy-intent velocity each week',
      'Sales Cloud daily digest surfaced each agent\'s top 10 highest-intent leads with the 3 most recent buying signals highlighted',
      'Bi-directional sync: Sales outcomes (wins, losses, stalls) fed back into Data Cloud to continuously retrain the BANT scoring model',
    ],
    implementationSteps: [
      {
        title: 'Data Inventory and CDP Architecture Design',
        detail:
          'Inventoried all 5 source systems, mapped available buyer data fields, and designed the Data Cloud buyer profile schema. Defined the 34 BANT scoring signals across the 4 data categories: online behavior, inquiry history, financial capacity proxies, and property preference signals.',
      },
      {
        title: 'Data Cloud Pipeline Build and Testing',
        detail:
          'Built ingestion pipelines for all 5 sources with real-time sync for CRM and website events and daily batch for the remaining systems. Tested identity resolution across 3 months of historical buyer data to validate clean profile unification.',
      },
      {
        title: 'BANT Scoring Engine Deployment',
        detail:
          'Built the BANT scoring formula in Data Cloud calculated insights. Configured score thresholds for High (85+), Medium (50-84), and Low (<50) intent segments. Activated Marketing Cloud journey enrollment based on segment transitions.',
      },
      {
        title: 'Sales Cloud Integration and Einstein Analytics',
        detail:
          'Built the daily digest Salesforce Flow that populated each agent\'s task list with their top 10 leads at 8 AM each morning. Deployed Einstein Analytics demand dashboards for sales leadership and connected the outcome feedback loop to continuously update BANT model weights.',
      },
    ],
    resultsHeading: 'Sales and Marketing Outcomes: First Six Months',
    resultsBody:
      'The unified data layer changed how both sales and marketing teams operated, and the revenue outcomes reflected the improvement.',
    resultsBullets: [
      'Lead handoff data loss reduced from 40% to 2%',
      'Lead-to-meeting conversion improved by 34% through better intent-based prioritization',
      'Sales agent time on unqualified leads reduced by 61%',
      'High-intent buyer identification accuracy reached 89% in the BANT model',
      'Marketing ROI increased 47% in the first 6 months through better segment targeting',
      'Sales management manual lead scoring eliminated, 2+ hours per lead reclaimed',
    ],
    faqs: [
      {
        q: 'What signals does BANT scoring use in a real estate context?',
        a: 'Budget signals: mortgage calculator usage, property price range filters, finance inquiry forms. Authority signals: named-buyer vs. broker contact, multi-property comparison behavior. Need signals: property search frequency, floor plan downloads, site visit requests. Timeline signals: move-in date field population, contact frequency acceleration in the last 14 days. The model weights recent signals more heavily than older ones.',
      },
      {
        q: 'How does Data Cloud handle behavioral event data from a website?',
        a: 'Data Cloud ingests website event data via a server-side SDK or a CDN-routed stream. Each event (page view, property view, floor plan download, mortgage calculator submission) is timestamped and attached to the visitor\'s unified buyer profile using cookie-to-identity resolution. This means even anonymous browsing sessions are retroactively connected to a named lead record when the buyer submits an inquiry form.',
      },
      {
        q: 'What does the Marketing Cloud nurture track look like for high-intent buyers?',
        a: 'High-intent buyers receive a 7-touch track: immediate property shortlist email, WhatsApp follow-up at 24 hours, agent introduction at 48 hours, virtual tour invite at day 4, financing options guide at day 7, site visit booking prompt at day 10, and a final availability urgency message at day 14. The track adapts: if the buyer books a site visit, subsequent touches switch to post-visit nurture content.',
      },
      {
        q: 'How quickly does the BANT model improve after deployment?',
        a: 'The initial model is trained on historical data and produces accurate segmentation from day one. The feedback loop, where sales outcomes feed back into Data Cloud, starts improving model weights from the first month. By month 3-4, the model has enough real-outcome data to materially improve accuracy beyond the baseline. Most clients see a 10-15 percentage point improvement in scoring precision within 6 months.',
      },
    ],
    metaTitle: 'Agentforce Real Estate Data Cloud Case Study: BANT Scoring and 34% Conversion Lift | Kovil AI',
    metaDescription:
      'Kovil AI deployed Salesforce Data Cloud and BANT lead scoring for a leading real estate company, reducing lead data loss from 40% to 2% and improving inquiry-to-meeting conversion by 34%.',
    keywords: [
      'Agentforce real estate case study',
      'Salesforce Data Cloud real estate',
      'BANT lead scoring Salesforce',
      'real estate CDP Salesforce',
      'Sales Cloud real estate lead scoring',
      'Salesforce Einstein Analytics real estate',
      'Marketing Cloud real estate nurture',
      'real estate sales automation Salesforce',
      'Agentforce real estate lead management',
    ],
  },

  // ─── CASE STUDY 6: REAL ESTATE BUILDER / WHATSAPP ──────────────────────────
  {
    slug: 'agentforce-real-estate-whatsapp-automation',
    type: 'case-study',
    industry: 'Real Estate / PropTech',
    clientType: 'Premium Property Developer',
    headline: 'Agentforce WhatsApp Integration Drives 30% Lead Conversion Lift for a Premium Property Developer',
    subheadline: 'Document generation from 2 days to 2 minutes. 100% buyer channel visibility. Sales response time under 30 minutes.',
    excerpt:
      'A premium property developer was losing deals to slow follow-up across fragmented channels, two-day document generation cycles, and zero unified buyer visibility. Kovil AI integrated WhatsApp Business API with Agentforce and Salesforce Sales Cloud, automating document generation, enabling Slack-native buyer intelligence, and delivering 24/7 follow-up across every channel.',
    published: 'January 2026',
    tags: ['WhatsApp Business API', 'Digital Engagement', 'Slack Integration', 'Sales Cloud', 'Document Automation'],
    techStack: ['Agentforce', 'WhatsApp Business API', 'Digital Engagement', 'Slack Integration', 'Sales Cloud', 'Prompt Builder'],
    metrics: [
      { value: '+30%', label: 'Lead-to-Booking Conversion', sublabel: 'Improvement from automated follow-up' },
      { value: '2 min', label: 'Document Generation Time', sublabel: 'Down from 2 days for booking forms' },
      { value: '100%', label: 'Buyer Channel Visibility', sublabel: 'All conversations unified in one timeline' },
      { value: '<30 min', label: 'Average Sales Response Time', sublabel: 'Down from 6+ hours average' },
    ],
    challengeHeading: 'Premium Properties. Slow Follow-Up. Lost Deals.',
    challengeBody:
      'In luxury property sales, speed of response is a direct proxy for brand quality. The developer\'s 6-hour average response time and 2-day document delays were sending high-intent buyers to competitors who were faster.',
    challengeBullets: [
      'Prospective buyers inquiring across WhatsApp, website chat, and email with no unified conversation history',
      'Site visit confirmations, booking forms, and NDAs generated manually over 2 days, buyers lost interest before paperwork arrived',
      'Sales team using WhatsApp personally on mobile devices: zero CRM logging, zero management visibility',
      'No automated follow-up sequences: a buyer who went cold after an initial inquiry received no outreach unless a sales rep remembered to follow up manually',
      'Slack used internally for team coordination but completely disconnected from CRM data, no buyer intent signals visible in the team\'s workflow',
    ],
    solutionHeading: 'WhatsApp, Slack, and Agentforce, Connected Into One Sales Intelligence Layer',
    solutionBody:
      'Kovil AI built a connected sales infrastructure where every channel fed buyer intelligence into Salesforce, and every workflow tool surfaced that intelligence where the sales team already worked.',
    solutionBullets: [
      'WhatsApp Business API integrated into Agentforce Digital Engagement: all buyer WhatsApp messages logged to the Salesforce Contact/Lead record in real time',
      'Agentforce document generation: booking confirmations, site visit confirmations, and NDAs generated from Prompt Builder templates in under 2 minutes',
      'Slack-to-Salesforce integration: sales team Slack channels surfaced real-time buyer intent signals, property views, document opens, and inquiry timestamps, in the team\'s primary workflow tool',
      'Five-touch automated follow-up sequence triggered on first contact: WhatsApp, email, WhatsApp, call prompt, final message, across 14 days',
      'Agentforce 24/7 WhatsApp agent handled after-hours inquiries: property information, pricing guides (no specific figures), availability, and site visit booking',
      '360-degree buyer timeline: every WhatsApp message, email, call log, document, and site visit unified in a single Salesforce Contact record',
    ],
    implementationSteps: [
      {
        title: 'WhatsApp Business API Setup and Agentforce Digital Engagement',
        detail:
          'Configured the WhatsApp Business API connector through a Meta-approved Business Solution Provider. Set up the Agentforce Digital Engagement hub to receive and route WhatsApp conversations alongside website chat and email. Built the escalation path from the 24/7 AI agent to a human sales rep.',
      },
      {
        title: 'Document Generation Automation with Prompt Builder',
        detail:
          'Mapped the 6 most frequent document types generated for buyers (site visit confirmation, booking form, NDA, brochure dispatch, floor plan bundle, price list). Built Prompt Builder templates that pulled buyer name, property details, and appointment data from the Salesforce record to auto-populate each document.',
      },
      {
        title: 'Slack Integration and Buyer Intent Signals',
        detail:
          'Built the Salesforce-to-Slack webhook that pushed buyer intent events (property page views, document opens, inquiry timestamps, site visit completions) into dedicated Slack channels organized by sales team and property development. Sales reps received context-rich notifications without leaving Slack.',
      },
      {
        title: 'Follow-Up Sequence Deployment and Team Training',
        detail:
          'Built the 5-touch follow-up sequence in Salesforce Flow and Marketing Cloud. Ran a 2-week training program for the sales team on the new WhatsApp business account, Salesforce mobile app, and Slack notification protocols. Retired all personal WhatsApp usage for business inquiries.',
      },
    ],
    resultsHeading: 'Sales Outcomes: Quarter Following Deployment',
    resultsBody:
      'In the first full quarter after go-live, the developer\'s sales team operated with complete buyer visibility and dramatically faster response times.',
    resultsBullets: [
      '30% improvement in lead-to-booking conversion, attributed primarily to faster follow-up and automated document delivery',
      'Document generation reduced from 2 days to under 2 minutes for all 6 document types',
      '100% buyer channel visibility: every interaction across WhatsApp, chat, email, and phone logged in Salesforce',
      'Average sales response time reduced from 6+ hours to under 30 minutes',
      'Follow-up sequence completion rate: 92% (up from 23% with manual follow-up)',
      'Zero personal WhatsApp usage for business contacts, all buyer communications now auditable',
    ],
    faqs: [
      {
        q: 'How does the WhatsApp Business API differ from personal WhatsApp for sales teams?',
        a: 'WhatsApp Business API enables businesses to send messages programmatically, integrate with CRM systems, and have multiple agents serve customers from a single business number. Unlike personal WhatsApp, all conversations are logged, auditable, and managed within a business platform, in this case, Salesforce Agentforce. It requires Meta approval and a Business Solution Provider for connectivity.',
      },
      {
        q: 'What document types can Agentforce Prompt Builder generate automatically?',
        a: 'Any document that follows a structured template with variable fields can be generated by Prompt Builder, site visit confirmations, booking forms, NDAs, property brochures, floor plan dispatches, and appointment letters are the most common in property sales. For legally binding documents (NDAs, booking agreements), Prompt Builder generates a draft that is sent for human review before delivery.',
      },
      {
        q: 'How does the Slack integration surface buyer intent signals without requiring CRM access?',
        a: 'Salesforce sends a webhook notification to a Slack channel when defined buyer events occur: a contact views a specific property listing, opens a document, completes a site visit, or goes inactive for 7+ days. The Slack notification includes the buyer\'s name, property interest, last activity date, and a direct link to the Salesforce record. The sales rep gets full context without leaving Slack.',
      },
      {
        q: 'What is the 5-touch follow-up sequence timeline?',
        a: 'Touch 1: WhatsApp acknowledgment within 5 minutes of first contact. Touch 2: Personalized email with property brochure within 2 hours. Touch 3: WhatsApp follow-up at 48 hours with site visit invite. Touch 4: Sales rep call prompt in Salesforce task at day 5. Touch 5: Final WhatsApp message at day 10 with availability update. The sequence pauses automatically if the buyer books a site visit or responds to any touch.',
      },
    ],
    metaTitle: 'Agentforce WhatsApp Real Estate Case Study: 30% Conversion Lift, 2-Min Document Generation | Kovil AI',
    metaDescription:
      'Kovil AI integrated Agentforce and WhatsApp Business API for a premium property developer, delivering 30% lead conversion lift, 2-minute document generation, and 100% buyer channel visibility.',
    keywords: [
      'Agentforce WhatsApp real estate case study',
      'Salesforce WhatsApp Business API property',
      'real estate WhatsApp automation Salesforce',
      'Agentforce document generation property',
      'Salesforce Slack integration real estate',
      'property developer CRM automation',
      'WhatsApp Business API Agentforce',
      'real estate sales automation Salesforce',
      'Salesforce Digital Engagement real estate',
    ],
  },

  // ─── CASE STUDY 7: STAFFING & RECRUITING ────────────────────────────────────
  {
    slug: 'agentforce-staffing-recruiting-ai-screening',
    type: 'case-study',
    industry: 'Staffing & Recruiting / HR',
    clientType: 'Mid-Size Staffing Firm',
    headline: 'Agentforce and Prompt Builder Cut Time-to-Fill from 42 Days to 11 Days for a Staffing Firm Processing 8,000 CVs Monthly',
    subheadline: '74% reduction in time-to-fill. Candidate drop-off from 28% to 4%. Recruiter CV screening time cut from 70% to 18%.',
    excerpt:
      'A staffing firm with 60+ recruiters processing 8,000+ CVs per month had a 42-day average time-to-fill, 28% candidate drop-off before first recruiter contact, and no consistent screening criteria across the team. Kovil AI deployed Agentforce with Prompt Builder to automate CV parsing, standardize skills evaluation, and surface the highest-match candidates to recruiters every morning.',
    published: 'December 2025',
    tags: ['Prompt Builder', 'Einstein AI', 'CV Parsing', 'Candidate Matching', 'Salesforce Flow'],
    techStack: ['Agentforce', 'Prompt Builder', 'Einstein AI', 'Data Cloud', 'Sales Cloud', 'Salesforce Flow'],
    metrics: [
      { value: '74%', label: 'Reduction in Time-to-Fill', sublabel: '42 days → 11 days average' },
      { value: '4%', label: 'Candidate Drop-Off Rate', sublabel: 'Down from 28% pre-deployment' },
      { value: '15 min', label: 'Application-to-First-Contact', sublabel: 'Down from 3.2 days' },
      { value: '+41%', label: 'Placement Rate Improvement', sublabel: 'Across all active roles' },
    ],
    challengeHeading: '8,000 CVs. 60 Recruiters. 42 Days to Fill.',
    challengeBody:
      'The staffing firm\'s core inefficiency was simple: human reviewers were the bottleneck in a high-volume process that demanded speed. Every day a role went unfilled was a day of lost revenue.',
    challengeBullets: [
      '8,000+ CVs received per month, 60+ recruiters each manually reviewing 130+ CVs weekly alongside their placement work',
      'Average time-to-fill of 42 days, above the industry benchmark and directly costing revenue on time-sensitive placements',
      '28% of candidates dropped off before first recruiter contact: either applied elsewhere or lost interest during the 3.2-day average wait time',
      'No standardized evaluation criteria: two recruiters could assess the same CV completely differently',
      'Recruiters spending 70% of their time on CV screening and 30% on relationship-building, the ratio that should be reversed',
      'No skill-gap analysis before recruiter calls: recruiters went into every candidate conversation without knowing where the candidate fell short',
    ],
    solutionHeading: 'Agentforce as the Intelligent Front of the Recruiting Funnel',
    solutionBody:
      'Kovil AI built an Agentforce automation layer that handled the high-volume, low-judgment work, so recruiters could focus on the high-judgment, relationship work that actually drives placements.',
    solutionBullets: [
      'Agentforce Prompt Builder parsed every incoming CV against a standardized 34-criteria skills extraction framework within 60 seconds of application',
      'Einstein AI matching engine scored each candidate against every active open role using structured criteria: skill match, seniority level, industry experience, location, and availability',
      'Automated outreach triggered within 15 minutes of application: personalized acknowledgment with timeline and next steps, eliminating the 3.2-day silence that caused drop-off',
      'Skill-gap analysis generated automatically before every recruiter call: a structured briefing card showing exactly where the candidate met or fell short of the role criteria',
      'Daily recruiter dashboard surfaced the top 20 highest-match candidates per open role, zero manual prioritization required',
      'Salesforce Flow automated all status updates, rejection notifications, and scheduling, recruiters never had to send a template email manually',
    ],
    implementationSteps: [
      {
        title: 'Skills Framework and CV Parsing Architecture',
        detail:
          'Worked with the client\'s senior recruiters to build the 34-criteria skills evaluation framework covering hard skills, soft skills, seniority indicators, and industry experience markers. Designed the Agentforce Prompt Builder template to extract and structure all 34 criteria from any CV format.',
      },
      {
        title: 'Einstein AI Matching Model Calibration',
        detail:
          'Loaded 18 months of historical placements into Data Cloud as training data for the Einstein AI matching engine. Calibrated the model weights based on which criteria historically correlated with successful placements. Validated matching accuracy against a held-out test set of 500 placements.',
      },
      {
        title: 'Automated Outreach and Flow Deployment',
        detail:
          'Built the 15-minute outreach automation in Salesforce Flow: application receipt → CV parsing → role matching → personalized acknowledgment message. Configured the 5-stage candidate communication sequence (acknowledgment, screening invitation, interview scheduling, feedback, offer/rejection).',
      },
      {
        title: 'Recruiter Dashboard and Training',
        detail:
          'Built the recruiter Salesforce dashboard with the daily top-20 candidate prioritization view, skill-gap analysis cards, and workload metrics. Ran a 3-day training programme with the full recruiting team and a 2-week parallel operation period before retiring the manual spreadsheet-based workflow.',
      },
    ],
    resultsHeading: 'Recruiting Outcomes: First Quarter Post-Deployment',
    resultsBody:
      'The staffing firm filled roles in 11 days that previously took 42, and did it with the same team, just redirected toward the work that required human judgment.',
    resultsBullets: [
      'Time-to-fill reduced from 42 days to 11 days (74% improvement)',
      'Candidate drop-off rate reduced from 28% to 4% through instant automated acknowledgment',
      'Application-to-first-contact time reduced from 3.2 days to 15 minutes',
      'Recruiter CV screening time reduced from 70% to 18% of working hours',
      'Placement rate improved by 41% through better candidate-to-role matching',
      'Recruiter relationship-building time increased from 30% to 72% of working hours',
    ],
    faqs: [
      {
        q: 'How does Agentforce Prompt Builder parse CVs at scale?',
        a: 'Prompt Builder sends each CV through an LLM-based extraction pipeline that applies the configured skills framework. The extracted data is structured into Salesforce fields, hard skills, years of experience per skill, seniority level, industry background, and availability, creating a standardized candidate record regardless of how the original CV was formatted. This happens in under 60 seconds per CV.',
      },
      {
        q: 'What are the 34 criteria in the skills matching framework?',
        a: 'The 34 criteria span five categories: Technical Skills (12 criteria), Soft Skills (4 criteria), Seniority Indicators (6 criteria, e.g., team leadership, budget ownership, client-facing experience), Industry Experience (8 criteria, sectors worked in and duration), and Logistics (4 criteria, availability date, notice period, location flexibility, and contract vs. permanent preference). The exact criteria are customized for each client based on their most common placement types.',
      },
      {
        q: 'How does the automated acknowledgment reduce candidate drop-off?',
        a: 'Candidate drop-off in the first 48 hours after application is almost entirely caused by silence, the candidate hears nothing and assumes their application was not received or is not progressing. The automated 15-minute acknowledgment confirms receipt, sets a clear expectation for next steps, and provides a named contact point. This alone accounts for the majority of the drop-off reduction from 28% to 4%.',
      },
      {
        q: 'Can the Einstein AI matching model handle niche technical roles?',
        a: 'Yes, with appropriate training data. For niche roles where fewer than 20 historical placements exist, the model relies more heavily on deterministic skill-matching criteria and less on probabilistic pattern-matching. As more placements accumulate in Data Cloud, the model continuously retrains and improves accuracy for those role types.',
      },
    ],
    metaTitle: 'Agentforce Recruiting Case Study: 42-Day to 11-Day Time-to-Fill with AI CV Screening | Kovil AI',
    metaDescription:
      'Kovil AI deployed Agentforce and Prompt Builder for a staffing firm processing 8,000 CVs monthly, cutting time-to-fill from 42 to 11 days and reducing candidate drop-off from 28% to 4%.',
    keywords: [
      'Agentforce staffing recruiting case study',
      'Salesforce recruiting automation',
      'Agentforce Prompt Builder CV screening',
      'Einstein AI candidate matching',
      'Salesforce staffing automation',
      'recruiting AI Salesforce Agentforce',
      'time-to-fill reduction Salesforce',
      'CV parsing automation Salesforce',
      'Agentforce HR recruitment',
    ],
  },

  // ─── CASE STUDY 8: ENTERPRISE SERVICE ──────────────────────────────────────
  {
    slug: 'agentforce-enterprise-service-cloud-atlas',
    type: 'case-study',
    industry: 'Enterprise Technology / Professional Services',
    clientType: 'Large Enterprise',
    headline: 'Agentforce Atlas Reasoning Engine Eliminates 40-Minute Manual Triage Across Slack, Jira, Zendesk, Teams, and SharePoint',
    subheadline: 'Zero manual triage. SLA compliance from 62% to 94%. Senior engineers freed from Tier-1 tickets entirely.',
    excerpt:
      'A large enterprise\'s support team was spending 20-40 minutes manually researching context across 5 disconnected tools before assigning every support ticket. Kovil AI deployed Agentforce with the Atlas Reasoning Engine and MCP Architecture to connect all five systems, automate cross-system context assembly, and route tickets by severity and team, in under 60 seconds.',
    published: 'November 2025',
    tags: ['Atlas Reasoning Engine', 'MCP Architecture', 'Slack Integration', 'Zendesk', 'Service Automation'],
    techStack: ['Agentforce', 'Atlas Reasoning Engine', 'Data Cloud', 'MCP Architecture', 'Slack Integration', 'Jira Connector', 'Zendesk Integration'],
    metrics: [
      { value: '0 min', label: 'Manual Triage Time', sublabel: 'Down from 20-40 minutes per ticket' },
      { value: '94%', label: 'SLA Compliance Rate', sublabel: 'Up from 62% before deployment' },
      { value: '47%', label: 'Faster Ticket Resolution', sublabel: 'End-to-end across all severity levels' },
      { value: '3x', label: 'Knowledge Base Utilization', sublabel: 'Via unified cross-system search' },
    ],
    challengeHeading: 'Five Tools. One Broken Triage Process.',
    challengeBody:
      'The enterprise support team was not failing because of a people problem, they were failing because of a systems problem. Every ticket required a manual research expedition across five separate platforms before anyone could even decide who should handle it.',
    challengeBullets: [
      'Support tickets arriving through 5 disconnected channels: Slack, Jira, Zendesk, Microsoft Teams, and SharePoint',
      'Every ticket requiring 20-40 minutes of manual cross-system context research before assignment, senior engineers doing junior admin work',
      'No automated triage: severity assessment done manually, causing senior engineers to receive Tier-1 tickets while Tier-3 issues sat unresolved',
      'Knowledge base fragmented: relevant resolution articles split between SharePoint and Zendesk with no unified search',
      'SLA compliance at 62%: 38% of tickets breached SLA due to triage and routing delays, not resolution complexity',
      'Ticket context lost in handoffs: agents reassigned tickets without transferring the research context they had already gathered',
    ],
    solutionHeading: 'Atlas Reasoning Engine: The Connective Intelligence Layer Across All Five Systems',
    solutionBody:
      'Kovil AI deployed Agentforce\'s Atlas Reasoning Engine as the central intelligence layer, using MCP Architecture to read and reason across all five systems simultaneously, what took humans 40 minutes, the Atlas Engine did in under 60 seconds.',
    solutionBullets: [
      'Agentforce Atlas Reasoning Engine connected to all 5 systems via MCP Architecture: reading live data from Slack, Jira, Zendesk, Microsoft Teams, and SharePoint without requiring data migration',
      'Automated context assembly: for every new ticket, Atlas gathered related Jira issues, previous Zendesk tickets for the same user, SharePoint knowledge articles, and Slack conversation threads, in under 60 seconds',
      'Intelligent triage engine classified every ticket by severity (P1-P4), impact scope, and affected system within seconds of arrival',
      'Unified knowledge search surfaced the top 3 most relevant resolution articles from both SharePoint and Zendesk simultaneously',
      'Real-time SLA monitoring with proactive escalation: Atlas flagged tickets approaching SLA breach 30 minutes in advance for manager review',
      'Full context package handed to the assigned engineer with every ticket: no manual research, no context requests, no waiting',
    ],
    implementationSteps: [
      {
        title: 'System Integration Architecture and MCP Configuration',
        detail:
          'Mapped all 5 source systems, designed the MCP Architecture integration layer, and configured Agentforce Atlas Reasoning Engine connectors for Slack, Jira, Zendesk, Microsoft Teams, and SharePoint. Defined the data schema for the unified ticket context record.',
      },
      {
        title: 'Severity Classification and Triage Logic',
        detail:
          'Worked with the client\'s engineering leadership to define the P1-P4 severity criteria, impact scope rules, and team routing matrix. Built the classification engine in Atlas and tested against 6 months of historical ticket data to validate routing accuracy.',
      },
      {
        title: 'Knowledge Base Unification',
        detail:
          'Built the unified knowledge search layer that queried both SharePoint and Zendesk simultaneously using relevance scoring. Tagged and categorized existing SharePoint articles to improve retrieval precision. Connected the knowledge retrieval output to the ticket context package.',
      },
      {
        title: 'SLA Monitoring, Escalation, and Go-Live',
        detail:
          'Built the SLA monitoring engine with configurable breach thresholds per priority level. Deployed proactive escalation notifications to team leads 30 minutes before projected SLA breach. Ran a 2-week parallel operation period alongside the manual triage process before full cutover.',
      },
    ],
    resultsHeading: 'Operational Outcomes: Three Months Post-Deployment',
    resultsBody:
      'Three months after go-live, the manual triage process no longer existed. Every ticket was classified, contextualized, and routed automatically.',
    resultsBullets: [
      'Manual triage time eliminated: 20-40 minutes per ticket reduced to zero',
      'SLA compliance improved from 62% to 94%',
      'Ticket resolution speed improved by 47% end-to-end',
      'Knowledge base utilization tripled through unified cross-system search',
      'Senior engineers completely removed from Tier-1 ticket handling',
      'Ticket context loss in handoffs reduced to zero, every reassignment carries the full Atlas-assembled context package',
    ],
    faqs: [
      {
        q: 'What is the Agentforce Atlas Reasoning Engine?',
        a: 'The Atlas Reasoning Engine is the AI reasoning layer within Agentforce that allows the agent to plan, reason across multiple data sources, and take multi-step actions to complete complex tasks. Rather than following a fixed decision tree, Atlas can dynamically decide which systems to query, in what order, and how to combine the outputs to answer a question or complete a workflow. In this deployment, Atlas reasons across 5 live systems to assemble a complete ticket context package.',
      },
      {
        q: 'What is MCP Architecture in the context of Agentforce?',
        a: 'MCP (Multi-Cloud Platform) Architecture in Agentforce refers to the integration layer that connects Agentforce to external systems, both Salesforce and non-Salesforce, through a standardized API and connector framework. Rather than migrating data into Salesforce, MCP allows Agentforce to read and act on live data in the systems where it already lives, including Slack, Jira, Zendesk, Microsoft Teams, and SharePoint.',
      },
      {
        q: 'How does the severity classification engine determine P1 vs. P4?',
        a: 'The classification engine applies a configurable rule set that considers: the number of users affected, the system or service impacted, whether revenue generation is blocked, and whether the issue is a new symptom or a recurrence of a known problem. P1 is reserved for production outages affecting revenue-critical systems across multiple users; P4 covers single-user, non-revenue-impacting issues with documented workarounds. The thresholds are set by the client\'s engineering leadership during implementation.',
      },
      {
        q: 'Does the Atlas Reasoning Engine write to the connected systems (Jira, Zendesk, etc.) or only read?',
        a: 'Both, depending on configuration. In this deployment, Atlas reads from all five systems for context assembly and writes to Salesforce Service Cloud for the ticket record and routing decisions. It also writes status updates back to Zendesk and creates Jira sub-tasks when the triage engine determines that a ticket requires engineering involvement. Read-only and write permissions are configured per system during the MCP integration setup.',
      },
    ],
    metaTitle: 'Agentforce Atlas Reasoning Engine Case Study: Zero Triage, 94% SLA Compliance | Kovil AI',
    metaDescription:
      'Kovil AI deployed Agentforce Atlas Reasoning Engine to connect Slack, Jira, Zendesk, Teams, and SharePoint, eliminating 40-minute manual triage and improving SLA compliance from 62% to 94%.',
    keywords: [
      'Agentforce Atlas Reasoning Engine case study',
      'Salesforce enterprise service automation',
      'Agentforce MCP Architecture',
      'Salesforce Jira Zendesk integration',
      'Atlas Reasoning Engine enterprise',
      'Agentforce multi-system integration',
      'enterprise service triage automation',
      'Salesforce Slack Zendesk Jira',
      'Agentforce SLA compliance automation',
    ],
  },

  // ─── CAPABILITY SPOTLIGHT 1: AI CALL SUMMARY ────────────────────────────────
  {
    slug: 'agentforce-ai-call-summary-insights',
    type: 'capability-spotlight',
    industry: 'Cross-Industry',
    clientType: 'Sales and Service Teams',
    headline: 'Agentforce AI Call Summary Insights: Automated Post-Call Intelligence for Sales and Service Teams',
    subheadline: '9 capabilities that turn every customer call into a structured intelligence asset, automatically.',
    excerpt:
      'Agentforce AI Call Summary Insights uses Einstein AI to transcribe, analyze, and extract structured intelligence from every customer call, in real time and post-call. Sales managers get coaching signals without listening to recordings. CRM records update themselves. Action items create themselves as Salesforce tasks. This is what your call intelligence layer should look like.',
    published: 'June 2026',
    tags: ['Einstein AI', 'Call Intelligence', 'Sales Cloud', 'Post-Call Automation', 'Coaching Analytics'],
    techStack: ['Agentforce', 'Einstein AI', 'Sales Cloud', 'Service Cloud', 'Prompt Builder', 'Data Cloud'],
    metrics: [
      { value: '9', label: 'AI Capabilities Per Call', sublabel: 'From transcription to coaching signals' },
      { value: '100%', label: 'CRM Auto-Update Rate', sublabel: 'No manual data entry after calls' },
      { value: 'Real-time', label: 'Sentiment Analysis', sublabel: 'Live call scoring during the conversation' },
      { value: '0 hrs', label: 'Post-Call Admin Time', sublabel: 'Notes, tasks, and follow-ups automated' },
    ],
    challengeHeading: 'The Post-Call Admin Tax Your Team Pays Every Day',
    challengeBody:
      'For most sales and service teams, a 30-minute customer call generates 15 minutes of post-call admin: updating the CRM, writing notes, creating follow-up tasks, and informing the manager of any important signals. Multiply that across a team of 50 reps and you\'re losing 125+ hours per week to administrative overhead that AI can handle.',
    challengeBullets: [
      'Reps spending 30-50% of post-call time on CRM updates and note-writing, time not spent with customers',
      'No consistent capture of competitor mentions, objections, or buying signals across the team',
      'Managers spending hours listening to call recordings to identify coaching opportunities',
      'Action items discussed on calls frequently not captured, follow-through inconsistency damaging customer trust',
      'No structured data on call quality trends by rep, product, or geography',
    ],
    solutionHeading: 'Nine AI Capabilities That Run After Every Call, Without Anyone Asking',
    solutionBody:
      'Agentforce AI Call Summary Insights deploys 9 automated intelligence capabilities that activate immediately after (or during) every customer call.',
    solutionBullets: [
      'Real-time call transcription using Einstein AI speech-to-text with speaker diarization',
      'Sentiment analysis scoring, positive, neutral, and negative, updated in real time during the call and summarized post-call',
      'Action item extraction: every commitment made during the call is identified and automatically created as a Salesforce task assigned to the rep',
      'Next-step recommendation engine: Einstein AI recommends the optimal follow-up action based on call content and deal stage',
      'Competitor mention detection and flagging: any named competitor surfaced immediately in the deal record and the team\'s Slack channel',
      'Compliance keyword monitoring: flags any language that violates regulatory or policy guidelines for compliance review',
      'Coaching opportunity identification: Einstein AI surfaces calls with coaching-relevant patterns for manager review, without requiring the manager to listen',
      'Cross-call trend analysis: aggregate patterns by product, region, rep, and objection type visible in Einstein Analytics dashboards',
      'CRM auto-update: call summary, sentiment, key topics, next steps, and participants written to the Salesforce record automatically, zero manual entry',
    ],
    implementationSteps: [
      {
        title: 'Telephony Integration and Transcription Setup',
        detail:
          'Configured the Einstein AI transcription connector for the client\'s telephony platform. Set up speaker diarization to separate rep and customer voice tracks. Validated transcription accuracy against a 200-call sample set before activation.',
      },
      {
        title: 'Intelligence Layer Configuration',
        detail:
          'Configured the sentiment analysis, competitor mention, and compliance keyword detection models. Built the action item extraction Prompt Builder template and the next-step recommendation logic based on the client\'s sales methodology.',
      },
      {
        title: 'CRM Integration and Automated Update Rules',
        detail:
          'Built the post-call automation flow that populated the Salesforce record with all extracted insights. Configured the Salesforce task creation rules for action items and the Slack notification for competitor mentions.',
      },
      {
        title: 'Coaching Dashboard and Analytics Deployment',
        detail:
          'Built the manager coaching dashboard in Einstein Analytics: rep-level call quality trends, sentiment distribution, objection frequency by product, and coaching signal queue. Trained managers on the new coaching workflow.',
      },
    ],
    resultsHeading: 'What AI Call Intelligence Delivers at Scale',
    resultsBody:
      'AI Call Summary Insights does not improve one call, it improves every call, simultaneously, across the entire team.',
    resultsBullets: [
      'Post-call admin time eliminated: reps move to the next call or customer immediately after hanging up',
      'Competitor intelligence captured from 100% of calls, not just the ones reps remember to log',
      'Action item follow-through rate improves when tasks are automatically created vs. manually remembered',
      'Managers coach from data signals, not from random recording samples',
      'Compliance teams have structured, searchable call records for every interaction',
      'Sales leadership makes product and pricing decisions using structured objection data from actual calls',
    ],
    faqs: [
      {
        q: 'Which telephony platforms does Agentforce AI Call Summary Insights integrate with?',
        a: 'Agentforce integrates natively with Salesforce-compatible telephony providers via Open CTI, including Aircall, RingCentral, Amazon Connect, Genesys Cloud, and others through AppExchange connectors. For platforms without a native connector, the Einstein AI transcription service can also ingest recordings via API from most modern VoIP and CCaaS platforms.',
      },
      {
        q: 'How does the competitor mention detection work?',
        a: 'The detection uses a configurable keyword and entity list that the client maintains in Salesforce. The Einstein AI model monitors transcriptions for these terms in real time. A detection triggers a flagged annotation in the transcript, a notification field on the opportunity/case record, and, if configured, a Slack notification to the rep\'s manager. The list is updated by the revenue operations team and takes effect for all future calls immediately.',
      },
      {
        q: 'Is call summary data visible to the customer?',
        a: 'No. The AI Call Summary Insights data is internal to your Salesforce org, it is not shared with customers and does not appear in any customer-facing portal or communication. Some regulatory environments require call recording consent disclosures, which are handled by the telephony platform at the call start, not by Agentforce.',
      },
      {
        q: 'How does the coaching signal identification work for managers?',
        a: 'The coaching engine applies a set of configurable patterns to each call: long periods of rep silence, repeated customer objections, calls with declining sentiment scores, or competitor mentions handled without a value-based response. When these patterns are detected, the call appears in the manager\'s coaching queue with the specific timestamp and transcript excerpt highlighted. The manager reviews the 2-minute segment, not the full 30-minute call.',
      },
    ],
    metaTitle: 'Agentforce AI Call Summary Insights: 9 Post-Call AI Capabilities for Sales Teams | Kovil AI',
    metaDescription:
      'Learn how Agentforce AI Call Summary Insights automates post-call CRM updates, extracts action items, monitors competitor mentions, and delivers coaching signals, for every call, automatically.',
    keywords: [
      'Agentforce AI call summary',
      'Salesforce call intelligence',
      'Einstein AI call transcription',
      'Agentforce post-call automation',
      'Salesforce call coaching analytics',
      'Agentforce competitor mention detection',
      'Einstein AI sentiment analysis calls',
      'Salesforce call summary automation',
      'Agentforce call intelligence capabilities',
    ],
  },

  // ─── CAPABILITY SPOTLIGHT 2: NEXT BEST ACTION ───────────────────────────────
  {
    slug: 'agentforce-next-best-action',
    type: 'capability-spotlight',
    industry: 'Cross-Industry',
    clientType: 'Sales, Service, and Marketing Teams',
    headline: 'Salesforce Next Best Action: AI-Powered Recommendations at Every Customer Touchpoint',
    subheadline: '8 capabilities that surface the right action for every agent, at every moment, in every channel.',
    excerpt:
      'Salesforce Next Best Action (NBA) uses Einstein AI to surface the most effective action a rep or agent can take at any point in a customer interaction, based on real-time context, history, and predictive models. From upsell recommendations at case resolution to channel-appropriate offers during chat, NBA turns reactive service into proactive revenue.',
    published: 'May 2026',
    tags: ['Einstein AI', 'Next Best Action', 'Sales Cloud', 'Service Cloud', 'Revenue Intelligence'],
    techStack: ['Agentforce', 'Einstein AI', 'Sales Cloud', 'Service Cloud', 'Data Cloud', 'Marketing Cloud'],
    metrics: [
      { value: '8', label: 'NBA Capability Layers', sublabel: 'From recommendation to compliance filter' },
      { value: 'Real-time', label: 'Context Reading', sublabel: 'Case history, purchase data, sentiment' },
      { value: 'Built-in', label: 'A/B Testing', sublabel: 'Compare recommendation strategies in production' },
      { value: '100%', label: 'Compliance Filtered', sublabel: 'Regulated-product recommendations excluded automatically' },
    ],
    challengeHeading: 'Service Agents Who Cannot Upsell. Sales Reps Who Cannot Personalize.',
    challengeBody:
      'Most sales and service teams miss revenue and retention opportunities because the right recommendation is buried in systems the agent cannot access in real time, or because the agent does not know what the right recommendation is at all.',
    challengeBullets: [
      'Service agents resolving cases without knowing what the resolved customer could benefit from next, upsell moment missed',
      'Sales reps delivering the same pitch regardless of the buyer\'s history, sentiment, or channel',
      'Marketing offers appearing in service conversations that are inappropriate for the customer\'s situation or regulatory status',
      'No data on which recommendation strategies actually convert, managers operating on intuition rather than evidence',
      'Recommended actions not adapted to the channel: a chat conversation needs a different action than a phone call',
    ],
    solutionHeading: 'Eight NBA Capabilities That Make Every Agent Smarter in Real Time',
    solutionBody:
      'Salesforce Next Best Action embeds a context-aware recommendation engine directly into the agent\'s Salesforce screen, surfacing the right action at the right moment without requiring the agent to ask for it.',
    solutionBullets: [
      'Einstein AI recommendation engine embedded in Service Cloud and Sales Cloud: surfaces top 3 recommended actions on every case, opportunity, and contact screen',
      'Context-aware: reads case history, purchase history, last interaction sentiment, and current channel before generating recommendations',
      'Upsell and cross-sell recommendations surfaced at case resolution, the highest-intent moment in a service interaction',
      'Channel-appropriate actions: phone call recommendations emphasize verbal prompts; chat recommendations emphasize quick-link offers; email recommendations surface longer-form content',
      'Built-in A/B testing framework: compare two recommendation strategies in live production with automatic winner selection based on conversion rate',
      'Compliance filter: automatically excludes any recommendation that the customer is not eligible for under regulatory rules or account restrictions',
      'Manager override: custom recommendation rules per product line, business unit, or customer segment configured by revenue operations without code',
      'ROI attribution: every NBA action tracked with conversion rate and revenue attribution, the first time most organizations see the actual value of their recommendation engine',
    ],
    implementationSteps: [
      {
        title: 'Customer Context Architecture and Data Model',
        detail:
          'Designed the Salesforce data model to make the necessary customer context available to the NBA engine at recommendation time: purchase history, case history, last 5 interaction summaries, current channel, and account segment.',
      },
      {
        title: 'Recommendation Strategy Design',
        detail:
          'Worked with the client\'s sales and marketing leaders to define 3-5 initial recommendation strategies per customer segment. Built the Einstein AI recommendation configuration using Strategy Builder and defined the compliance exclusion rules.',
      },
      {
        title: 'A/B Testing Framework and Agent UX',
        detail:
          'Configured the A/B testing framework to run the initial recommendation strategies in parallel. Built the agent-facing recommendation card UI within the Salesforce layout, designed to surface the top 3 actions with a one-click accept button.',
      },
      {
        title: 'ROI Tracking and Optimization Loop',
        detail:
          'Built the conversion tracking mechanism: when an agent accepts an NBA recommendation and the customer takes the associated action (purchases, upgrades, books a follow-up), the outcome is logged and attributed. Einstein Analytics dashboard surfaces recommendation performance by strategy, segment, and channel.',
      },
    ],
    resultsHeading: 'What Next Best Action Delivers Across the Business',
    resultsBody:
      'NBA changes the economics of every customer-facing interaction by turning each touchpoint into a data-driven decision.',
    resultsBullets: [
      'Service interactions generate revenue opportunities instead of just resolving issues',
      'Recommendation acceptance rates improve as Einstein AI learns which actions convert for each segment',
      'Compliance risk eliminated through automated product eligibility filtering',
      'A/B testing replaces intuition-based recommendation strategy decisions with evidence',
      'Revenue operations can tune recommendation strategies in minutes without engineering involvement',
      'ROI attribution shows the exact revenue impact of the NBA program for the first time',
    ],
    faqs: [
      {
        q: 'What is the difference between Salesforce Next Best Action and a standard recommendation engine?',
        a: 'Standard recommendation engines typically operate on a single signal (purchase history) and return a static result. Salesforce NBA reads multiple real-time signals simultaneously, case context, sentiment, account tier, current channel, regulatory status, and applies business rules on top of the Einstein AI model to surface a recommendation that is not just data-optimal but also business-appropriate and compliant.',
      },
      {
        q: 'How does the A/B testing framework work in production?',
        a: 'Strategy Builder randomly assigns each customer interaction to one of the configured strategy variants. Both strategies run simultaneously with the same customer population. Einstein Analytics tracks conversion rates per variant and surfaces statistical significance when a winner emerges. The revenue operations team activates the winning strategy with a single configuration change, no code deployment required.',
      },
      {
        q: 'Can NBA recommendations be triggered outside of agent interactions, for example, in automated email journeys?',
        a: 'Yes. Salesforce NBA can integrate with Marketing Cloud Journey Builder to surface NBA recommendations in automated email and SMS sequences. The recommendation engine runs at send time, not at journey creation time, so each recipient receives a recommendation based on their context at the moment the message is sent, not a static segment recommendation built weeks earlier.',
      },
      {
        q: 'How long does it take for the Einstein AI model to learn and improve recommendations?',
        a: 'The initial model is configured with business rules and initial strategy definitions from day one. The learning loop begins as soon as interaction and outcome data accumulates. Most clients see the model\'s recommendation quality materially improve within 60-90 days as the AI identifies which actions are actually converting for each customer segment in their specific context.',
      },
    ],
    metaTitle: 'Salesforce Next Best Action: 8 NBA Capabilities for Sales and Service Teams | Kovil AI',
    metaDescription:
      'Discover how Salesforce Next Best Action uses Einstein AI to surface real-time recommendations in Sales Cloud, Service Cloud, and Marketing Cloud, with built-in A/B testing and compliance filtering.',
    keywords: [
      'Salesforce Next Best Action',
      'Agentforce NBA capabilities',
      'Einstein AI recommendation engine',
      'Next Best Action Sales Cloud',
      'Salesforce recommendation engine',
      'Agentforce upsell recommendations',
      'Salesforce Einstein Next Best Action',
      'Sales Cloud service upsell automation',
      'Agentforce revenue intelligence',
    ],
  },

  // ─── CAPABILITY SPOTLIGHT 3: BUYER INTELLIGENT INSIGHT ──────────────────────
  {
    slug: 'agentforce-buyer-intelligent-insight',
    type: 'capability-spotlight',
    industry: 'Real Estate / Sales',
    clientType: 'Property Developers and Sales Teams',
    headline: 'Agentforce Buyer Intelligent Insight: AI That Identifies Who Is Ready to Buy, Before They Tell You',
    subheadline: '7 intelligence capabilities that score, predict, and surface high-intent buyers at scale.',
    excerpt:
      'Agentforce Buyer Intelligent Insight assembles signals across every buyer touchpoint, website behavior, email engagement, call sentiment, and event attendance, into a single buyer readiness score. For real estate developers and sales teams with large pipeline volumes, it answers the question every rep asks every morning: who do I call first?',
    published: 'April 2026',
    tags: ['Einstein AI', 'Lead Scoring', 'Buyer Intent', 'Sales Cloud', 'Predictive Analytics'],
    techStack: ['Agentforce', 'Einstein AI', 'Data Cloud', 'Sales Cloud', 'Salesforce Mobile', 'Marketing Cloud'],
    metrics: [
      { value: '7', label: 'Intent Signal Categories', sublabel: 'From website behavior to call sentiment' },
      { value: 'BANT', label: 'Qualification Framework', sublabel: 'Budget, Authority, Need, Timeline, automated' },
      { value: 'Mobile-first', label: 'Insight Delivery', sublabel: 'All signals in Salesforce mobile for field teams' },
      { value: 'Predictive', label: 'Close Date Modeling', sublabel: 'Einstein AI regression-based timeline prediction' },
    ],
    challengeHeading: 'Large Pipelines, Limited Visibility Into Who is Actually Ready',
    challengeBody:
      'High-volume real estate sales teams face a consistent challenge: every lead in the CRM looks the same until it does not. By the time you know a buyer is ready, they have already chosen a competitor.',
    challengeBullets: [
      'Sales teams managing 500+ active leads with no systematic way to prioritize who to contact today',
      'Buyer interest signals scattered across website, email, WhatsApp, call logs, and event attendance, no aggregated view',
      'BANT qualification done manually in conversations rather than automatically from available behavioral data',
      'High-intent buyers missed because they were in a low-priority segment based on the date they first inquired, not their current activity level',
      'Field sales teams with no mobile access to buyer intelligence, context arrives on laptop, not where they work',
    ],
    solutionHeading: 'Seven Buyer Intelligence Capabilities That Make Every Sales Conversation Count',
    solutionBody:
      'Agentforce Buyer Intelligent Insight aggregates multi-channel buyer signals into a unified intelligence layer that tells every rep, in clear terms, who is ready and why.',
    solutionBullets: [
      'Multi-signal intent scoring: website property views, email open and click rates, call sentiment scores, event attendance, and WhatsApp response speed all contribute to a single buyer readiness score (0-100)',
      'Automated BANT qualification: budget signals from mortgage calculator and price filter behavior, authority from named-buyer vs. intermediary contact, need from property search depth, timeline from move-in date and contact frequency',
      'Look-alike buyer modeling: Einstein AI identifies buyers who match the profile of your last 50 closed deals and surfaces them as high-priority prospects',
      'Real-time property interest mapping: which specific properties each buyer has viewed, how many times, and when, with velocity trending (interest increasing or decreasing)',
      'Engagement velocity tracking: is this buyer\'s activity level accelerating in the last 7 days? A buyer who viewed 1 property per week and now views 5 per day is different from a buyer who viewed 5 last month and has gone quiet',
      'Predicted close date: Einstein AI regression model estimates when a high-intent buyer is most likely to transact, based on historical patterns for buyers with similar behavior profiles',
      'Salesperson-specific mobile insight cards: each rep sees their top 10 buyers for the day on Salesforce mobile, with a 3-signal summary card showing exactly why each buyer ranks where they rank',
    ],
    implementationSteps: [
      {
        title: 'Signal Inventory and Data Architecture',
        detail:
          'Inventoried all available buyer touchpoints and mapped them to Data Cloud. Configured real-time event ingestion for website behavior and email engagement. Built the buyer profile schema that aggregated all signals into a single unified record.',
      },
      {
        title: 'BANT Model and Intent Scoring Build',
        detail:
          'Defined the BANT signal weights with the client\'s sales leadership. Built the scoring formula in Data Cloud calculated insights. Validated scoring accuracy against a held-out set of historical closed deals.',
      },
      {
        title: 'Look-Alike Modeling and Predictive Analytics',
        detail:
          'Trained the Einstein AI look-alike model on 18 months of closed deal profiles. Built the engagement velocity calculation (7-day rolling activity acceleration) and the predicted close date regression model using historical conversion timeline data.',
      },
      {
        title: 'Mobile Dashboard and Field Team Deployment',
        detail:
          'Built the Salesforce mobile daily digest view for field sales reps with the top-10 priority list and 3-signal insight cards. Trained the field team on the mobile workflow and the intent signal interpretation framework.',
      },
    ],
    resultsHeading: 'What Buyer Intelligence Delivers for High-Volume Sales Teams',
    resultsBody:
      'Buyer Intelligent Insight changes the structure of a sales team\'s day: from random outreach to systematic prioritization based on evidence.',
    resultsBullets: [
      'Reps call the right buyers first, the ones with the highest current intent, not the ones who inquired most recently',
      'BANT qualification happening before the call, not during it, conversations start at a higher level',
      'High-intent buyers who were buried in a large CRM are systematically surfaced every morning',
      'Field teams arrive at site visits with a complete picture of the buyer\'s interest history',
      'Sales leadership can see which properties and geographies have the highest concentration of ready buyers',
      'Predicted close dates enable more accurate revenue forecasting and resource allocation',
    ],
    faqs: [
      {
        q: 'How does engagement velocity tracking differ from standard lead scoring?',
        a: 'Standard lead scoring gives a buyer a static score based on cumulative activity. Engagement velocity measures the rate of change in activity, a buyer who has gone from 1 property view per week to 5 per day is fundamentally different from a buyer with a high cumulative score that has been declining for 3 weeks. Velocity tracking catches the acceleration signal early, before it shows up in cumulative scoring.',
      },
      {
        q: 'How accurate is the Einstein AI predicted close date?',
        a: 'Accuracy depends on the quality and volume of historical closed deal data. For clients with 200+ closed deals in the training set, the predicted close date is typically accurate within a 2-3 week window for high-confidence predictions. The model also provides a confidence band, reps can see whether the prediction is high-confidence (±2 weeks) or lower-confidence (±6 weeks) and act accordingly.',
      },
      {
        q: 'Can Buyer Intelligent Insight be applied outside of real estate?',
        a: 'Yes. The core signal architecture, multi-channel behavioral data, BANT qualification automation, engagement velocity, and look-alike modeling, applies to any high-value sales process with a meaningful consideration period: enterprise software, financial products, professional services, and automotive sales all share the same structure.',
      },
      {
        q: 'Does the system require custom development or is it configuration-only?',
        a: 'The core capabilities, Data Cloud ingestion, BANT scoring, and Salesforce mobile dashboards, are configuration-based. The look-alike model and predicted close date regression require Einstein AI setup, which is also configuration-driven within Salesforce. For clients who want to incorporate non-standard signals (WhatsApp response time, custom survey scores), a lightweight integration is needed but the underlying model remains configuration-based.',
      },
    ],
    metaTitle: 'Agentforce Buyer Intelligent Insight: 7 AI Capabilities to Identify Ready-to-Buy Leads | Kovil AI',
    metaDescription:
      'Discover how Agentforce Buyer Intelligent Insight uses Einstein AI to score buyer intent, automate BANT qualification, and surface your 10 highest-priority leads every morning.',
    keywords: [
      'Agentforce buyer intelligence',
      'Salesforce buyer intent scoring',
      'Einstein AI lead scoring real estate',
      'BANT automation Salesforce',
      'buyer intent AI Salesforce',
      'Agentforce predictive close date',
      'real estate lead scoring Agentforce',
      'Salesforce engagement velocity',
      'Agentforce look-alike buyer modeling',
    ],
  },

  // ─── CAPABILITY SPOTLIGHT 4: AI WHATSAPP AGENT ──────────────────────────────
  {
    slug: 'agentforce-whatsapp-autonomous-agent',
    type: 'capability-spotlight',
    industry: 'Cross-Industry',
    clientType: 'Customer-Facing Sales and Service Teams',
    headline: 'Agentforce WhatsApp AI Agent: Autonomous Customer Engagement at Scale on the World\'s Largest Messaging Platform',
    subheadline: '8 capabilities that turn WhatsApp from a personal tool into a 24/7 enterprise-grade AI engagement channel.',
    excerpt:
      'Three billion people use WhatsApp. Most businesses reply to WhatsApp manually, from personal phones, with no CRM logging and no after-hours coverage. Agentforce\'s WhatsApp AI Agent changes that, integrating WhatsApp Business API directly into Salesforce for 24/7 autonomous resolution, CRM-logged conversations, and intelligent escalation to human agents.',
    published: 'March 2026',
    tags: ['WhatsApp Business API', 'Digital Engagement', 'Agentforce', '24/7 Automation', 'Multi-language'],
    techStack: ['Agentforce', 'WhatsApp Business API', 'Digital Engagement', 'Sales Cloud', 'Service Cloud', 'Prompt Builder'],
    metrics: [
      { value: '24/7', label: 'WhatsApp Coverage', sublabel: 'Autonomous AI agent, no human required after-hours' },
      { value: '100%', label: 'Conversations CRM-Logged', sublabel: 'Every message linked to the Salesforce record' },
      { value: '8', label: 'Core Agent Capabilities', sublabel: 'From inquiry resolution to document delivery' },
      { value: '<5 min', label: 'First Response on Any Inquiry', sublabel: 'Business hours or after-hours' },
    ],
    challengeHeading: 'The WhatsApp Problem Every Business Has',
    challengeBody:
      'WhatsApp is the customer\'s preferred channel in most markets outside North America, and the business\'s weakest link. Reps use personal phones, conversations are invisible to management, follow-up is forgotten, and the channel goes dark after 6 PM.',
    challengeBullets: [
      'Sales and service teams using personal WhatsApp accounts for business conversations, zero CRM logging',
      'Customer conversations lost when a rep leaves the company or changes role',
      'No after-hours WhatsApp coverage: customers who inquire at 10 PM wait until 9 AM',
      'No structured follow-up: WhatsApp conversations end and rarely continue unless the rep manually picks them up',
      'Management has no visibility into WhatsApp conversation quality, volume, or response times',
    ],
    solutionHeading: 'Eight Agentforce WhatsApp Capabilities That Replace the Personal Phone Approach',
    solutionBody:
      'Agentforce\'s WhatsApp AI Agent operates as a fully integrated enterprise channel, with the same AI capabilities that power Salesforce service and sales experiences, delivered through WhatsApp.',
    solutionBullets: [
      '24/7 inbound query resolution: the Agentforce AI agent handles product information, property lookups, plan comparisons, service status, and account queries autonomously at any hour',
      'Product, property, and plan lookup: the agent queries Salesforce data in real time to deliver accurate, personalized information, not scripted FAQs',
      'Document delivery: booking confirmations, brochures, floor plans, and information packs sent directly via WhatsApp as formatted messages or PDF attachments',
      'Appointment and site visit scheduling: calendar integration allows the AI agent to offer available slots, confirm bookings, and send calendar invites from within WhatsApp',
      'Intelligent escalation: when a query exceeds the AI agent\'s scope, it transfers to a human agent with full conversation transcript and context, zero repetition for the customer',
      'Multi-language support: the AI agent detects conversation language and responds in the same language across major regional languages',
      'CRM sync: every WhatsApp message logged to the corresponding Salesforce Contact or Lead record in real time, full conversation history visible to all authorized team members',
      'Campaign broadcast: outbound personalized WhatsApp messages sent from Salesforce Marketing Cloud to opted-in contacts, property launches, appointment reminders, and follow-up sequences',
    ],
    implementationSteps: [
      {
        title: 'WhatsApp Business API Setup and Meta Approval',
        detail:
          'Configured the WhatsApp Business API through a Meta-approved Business Solution Provider. Built the Agentforce Digital Engagement connector and mapped the business account to the client\'s Salesforce org. Submitted and received approval for all message templates used in outbound communications.',
      },
      {
        title: 'AI Agent Scope and Resolution Flow Design',
        detail:
          'Defined the AI agent\'s scope of autonomous resolution: which query types the agent handles without human involvement and which trigger escalation. Built the Prompt Builder resolution flows for all in-scope query types and tested against a sample of real customer inquiries.',
      },
      {
        title: 'CRM Integration and Escalation Configuration',
        detail:
          'Configured the real-time CRM logging webhook that wrote every WhatsApp message to the Salesforce record. Built the human escalation flow: the AI agent pauses, transfers conversation context to the Omni-Channel queue, and notifies the assigned rep via Slack and mobile push.',
      },
      {
        title: 'Team Training and Go-Live',
        detail:
          'Trained the sales and service team on the new WhatsApp business number and the Salesforce conversation view. Communicated the channel migration to customers (from personal numbers to the business account). Ran a 1-week parallel operation period before retiring personal WhatsApp usage.',
      },
    ],
    resultsHeading: 'What Enterprise WhatsApp Delivers',
    resultsBody:
      'Enterprise WhatsApp through Agentforce turns the world\'s largest messaging platform into a fully managed, AI-powered business channel.',
    resultsBullets: [
      '24/7 coverage with no after-hours headcount increase',
      'Every customer conversation logged, searchable, and visible to management',
      'No conversation lost when a rep changes role or leaves',
      'Document delivery and appointment scheduling handled without human involvement',
      'Response times measured and managed, not estimated based on rep memory',
      'Outbound WhatsApp campaigns operate from Salesforce Marketing Cloud with full attribution',
    ],
    faqs: [
      {
        q: 'What is the difference between WhatsApp Business App and WhatsApp Business API?',
        a: 'WhatsApp Business App is a free mobile app designed for small businesses, one phone, one user, manual replies. WhatsApp Business API is the enterprise-grade integration layer: it connects WhatsApp to platforms like Salesforce Agentforce, supports multiple simultaneous users, enables automated responses, allows CRM integration, and supports outbound messaging to opted-in contacts at scale. The API requires a Meta-approved Business Solution Provider for connectivity.',
      },
      {
        q: 'Which industries see the highest value from an Agentforce WhatsApp integration?',
        a: 'Real estate (buyer inquiry and site visit coordination), insurance (member inquiries and document delivery), education (student enrollment inquiries), hospitality (reservation management), and retail financial services (account queries) consistently see the highest ROI. The common factor is a high-volume inbound inquiry load where speed of response directly correlates with conversion.',
      },
      {
        q: 'How does the AI agent know when to escalate to a human?',
        a: 'The escalation logic is configured during implementation. Triggers include: a customer explicitly requesting a human, the AI agent encountering a query type outside its defined scope, a customer expressing frustration (negative sentiment detected), or a query involving a sensitive topic (complaints, legal matters, complex account changes). The escalation is seamless, the human agent receives the full conversation transcript and can continue without asking the customer to repeat themselves.',
      },
      {
        q: 'Can Agentforce send outbound WhatsApp messages as part of a marketing campaign?',
        a: 'Yes, through Marketing Cloud integration. Outbound WhatsApp messages require opt-in consent from the recipient and must use Meta-approved message templates (for the first outbound message in a conversation window). Once a customer responds, the conversation window opens and the AI agent or human rep can reply with free-form messages. Campaigns are built in Marketing Cloud Journey Builder and triggered based on segment conditions.',
      },
    ],
    metaTitle: 'Agentforce WhatsApp AI Agent: 8 Enterprise WhatsApp Capabilities | Kovil AI',
    metaDescription:
      'Learn how Agentforce WhatsApp AI Agent delivers 24/7 autonomous engagement, CRM-logged conversations, document delivery, and intelligent escalation through WhatsApp Business API.',
    keywords: [
      'Agentforce WhatsApp agent',
      'Salesforce WhatsApp Business API',
      'WhatsApp AI agent Salesforce',
      'Agentforce Digital Engagement WhatsApp',
      'enterprise WhatsApp automation Salesforce',
      'WhatsApp Salesforce integration',
      'Agentforce WhatsApp 24/7',
      'WhatsApp customer service automation',
      'Salesforce Marketing Cloud WhatsApp',
    ],
  },

  // ─── CAPABILITY SPOTLIGHT 5: GEOPROSPECT AI ─────────────────────────────────
  {
    slug: 'agentforce-geoprospect-field-sales-ai',
    type: 'capability-spotlight',
    industry: 'Field Sales / Real Estate / Enterprise Sales',
    clientType: 'Field Sales Teams and Revenue Operations',
    headline: 'Agentforce GeoProspect AI: Field Sales Intelligence for Location-Based Revenue Teams',
    subheadline: '7 capabilities that tell your field reps which territory to work, which leads to visit, and which competitors to displace.',
    excerpt:
      'GeoProspect AI layers Agentforce intelligence onto geographic data to give field sales teams a competitive edge they have never had before: knowing which territories have the highest deal velocity, which leads within 2 km are ready to meet today, and which locations have competitor installations that represent displacement opportunities. Built on Salesforce Data Cloud and delivered through Salesforce mobile.',
    published: 'February 2026',
    tags: ['Field Sales', 'Geographic Intelligence', 'Salesforce Mobile', 'Einstein AI', 'Territory Management'],
    techStack: ['Agentforce', 'Einstein AI', 'Data Cloud', 'Sales Cloud', 'Salesforce Mobile', 'Maps'],
    metrics: [
      { value: '7', label: 'Field Intelligence Capabilities', sublabel: 'From territory scoring to proximity leads' },
      { value: 'Mobile-first', label: 'Delivery Platform', sublabel: 'All insights in Salesforce mobile for field reps' },
      { value: 'Real-time', label: 'Territory Heat Maps', sublabel: 'Deal velocity by geography, updated daily' },
      { value: '2 km', label: 'Proximity Lead Radius', sublabel: 'Surface highest-intent leads near the rep\'s location' },
    ],
    challengeHeading: 'Field Sales Reps Who Drive Past Their Best Leads Every Day',
    challengeBody:
      'Most field sales teams operate on intuition and route planning, not data. The highest-intent lead of the day might be 200 meters from a rep\'s current location, but they do not know it because the data lives in a CRM they cannot effectively access from their car.',
    challengeBullets: [
      'Field reps planning daily routes manually with no real-time intelligence on which areas have the highest deal velocity',
      'No proximity-based lead surfacing: reps driving past high-intent leads they do not know about',
      'Territory allocation based on geography, not deal potential, high-velocity micro-markets under-resourced',
      'No competitive intelligence on which locations have competitor installations, displacement opportunities missed',
      'Manager visibility into field team coverage limited to post-hoc call logs, no real-time territory map',
    ],
    solutionHeading: 'Seven GeoProspect Capabilities for Data-Driven Field Sales',
    solutionBody:
      'GeoProspect AI combines Salesforce Data Cloud with geographic intelligence and Salesforce Maps to give field reps and their managers a level of territory visibility that was previously impossible.',
    solutionBullets: [
      'Geographic lead scoring: Agentforce scores every lead by territory, combining buyer intent signals with micro-market demand data to produce a territory heat map updated daily',
      'Route optimization: AI-planned daily visit sequences that maximize the number of high-priority contacts in a single route, minimizing drive time between calls',
      'Territory heat maps: visual overlay of deal velocity, average transaction value, and win rate by micro-market, updated daily in Salesforce Maps',
      'Proximity-based lead surfacing: when a rep opens Salesforce mobile, the system surfaces the 5 highest-intent leads within 2 km of their current GPS location',
      'Competitive presence mapping: flags geographic locations where competitor installations, signage, or account activity has been recorded, identifying displacement opportunity clusters',
      'Mobile-first delivery: all GeoProspect intelligence available in Salesforce mobile with offline capability for areas with poor connectivity',
      'Manager territory dashboard: real-time view of field team coverage, lead density by territory, and gap analysis showing which high-velocity areas have insufficient rep coverage',
    ],
    implementationSteps: [
      {
        title: 'Geographic Data Layer and Data Cloud Integration',
        detail:
          'Integrated the client\'s geographic data (property addresses, territory boundaries, transaction history by postcode) with Salesforce Data Cloud. Built the micro-market scoring model using transaction velocity, average deal value, and buyer intent density.',
      },
      {
        title: 'Salesforce Maps Configuration',
        detail:
          'Configured Salesforce Maps with the client\'s territory boundaries and lead record data. Built the heat map visualization layers (deal velocity, win rate, competitor presence) and tested rendering performance on Salesforce mobile across different device types.',
      },
      {
        title: 'Proximity Engine and Route Optimization',
        detail:
          'Built the GPS-triggered proximity lead surfacing engine: when a rep\'s mobile location falls within a configurable radius of a high-intent lead, the lead surfaces as a suggested visit. Built the AI route optimizer using the rep\'s current location and daily appointment schedule as constraints.',
      },
      {
        title: 'Manager Dashboard and Field Team Onboarding',
        detail:
          'Built the manager territory coverage dashboard with real-time rep location heatmap and gap analysis. Ran a field team onboarding session: mobile app setup, GPS data consent confirmation, and a live demonstration of proximity lead surfacing and route planning in a real territory.',
      },
    ],
    resultsHeading: 'What GeoProspect AI Delivers for Field Sales Teams',
    resultsBody:
      'GeoProspect AI gives field teams the same data advantage that digital-native competitors have had for years, available in the field, on mobile, in real time.',
    resultsBullets: [
      'Field reps spend time in the highest-value territories, not the most familiar ones',
      'Proximity lead surfacing ensures that high-intent leads near the rep\'s location are never missed',
      'Route optimization reduces drive time and increases the number of high-quality visits per day',
      'Competitive presence mapping surfaces displacement opportunities the team did not know existed',
      'Manager territory dashboards replace post-hoc call logs with real-time coverage visibility',
      'Gap analysis identifies under-resourced high-velocity micro-markets that can be reallocated or supported',
    ],
    faqs: [
      {
        q: 'What geographic data sources does GeoProspect AI integrate with?',
        a: 'GeoProspect integrates with Salesforce Maps as the core geographic visualization layer. It ingests geographic data from the client\'s internal sources (property addresses, territory boundaries, account locations) and can supplement with third-party geographic data providers for market demand indicators, demographic data, or competitor location intelligence depending on the use case and industry.',
      },
      {
        q: 'How does the proximity lead surfacing work technically?',
        a: 'Salesforce mobile uses the device\'s GPS location (with rep consent) and triggers a real-time Data Cloud query for leads and accounts within the configured radius whose buyer intent score exceeds the set threshold. The query runs when the rep opens the Salesforce mobile app or on a configurable location-change trigger. The proximity results surface in a dedicated mobile component separate from the standard lead list.',
      },
      {
        q: 'Can the territory heat maps be used for territory design decisions?',
        a: 'Yes. The heat maps surface the same deal velocity, win rate, and buyer intent data that is used for real-time rep guidance, but can also be exported for territory design reviews. Revenue operations teams use the heat map output to identify cases where territory boundaries do not reflect the actual distribution of deal potential, and to support quarterly territory rebalancing decisions.',
      },
      {
        q: 'Does the route optimization tool work offline?',
        a: 'The route is calculated while the device is online and cached for offline use. If a rep loses connectivity mid-route, the optimized route remains available in the app. Proximity lead surfacing requires an active connection for real-time queries. The maps themselves are partially cached for offline rendering, but the intent-score overlays require connectivity to update.',
      },
    ],
    metaTitle: 'Agentforce GeoProspect AI: Field Sales Intelligence with Geographic Lead Scoring | Kovil AI',
    metaDescription:
      'Learn how Agentforce GeoProspect AI gives field sales teams geographic lead scoring, proximity-based lead surfacing, route optimization, and competitive presence mapping in Salesforce mobile.',
    keywords: [
      'Agentforce GeoProspect AI field sales',
      'Salesforce geographic lead scoring',
      'Salesforce Maps field sales intelligence',
      'Agentforce territory heat maps',
      'field sales AI Salesforce',
      'proximity lead surfacing Salesforce',
      'Salesforce route optimization field sales',
      'Agentforce competitive presence mapping',
      'field sales territory management Salesforce',
    ],
  },
]

export function getAgentforceCaseStudy(slug: string): AgentforceCaseStudy | undefined {
  return agentforceCaseStudies.find((cs) => cs.slug === slug)
}

export const agentforceCaseStudySlugs = agentforceCaseStudies.map((cs) => cs.slug)
