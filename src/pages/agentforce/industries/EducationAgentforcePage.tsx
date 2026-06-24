'use client'

import { GraduationCap, BookOpen, DollarSign, LifeBuoy, Users, Compass, Shield, Lock, Database, ShieldCheck } from "lucide-react"
import IndustryPageTemplate, { type IndustryPageData } from "./_shared/IndustryPageTemplate"

const SF_BLUE = "#00A1E0"

const data: IndustryPageData = {
  breadcrumb: "Education & Higher Ed",
  industryTag: "Education & Higher Ed",
  headline: "Agentforce for",
  headlineAccent: "Education & Higher Ed",
  description: "Admissions inquiry agents, enrolment support, financial aid automation, student services, alumni engagement, and course advising — production Agentforce for universities, colleges, and higher education institutions.",
  expandedDescription: "Kovil AI designs, builds, and deploys production Agentforce implementations for universities and higher education institutions using Salesforce Education Cloud. Every engagement is scoped to your student information system, financial aid platform, and enrolment workflow — delivering working agents in 2–3 weeks on a fixed-price basis.",
  ctaLabel: "Book a Call",
  stats: [
    { stat: "62%", label: "admissions inquiries handled without staff involvement" },
    { stat: "+19%", label: "enrolled student yield with proactive engagement agents" },
    { stat: "4.7/5", label: "student satisfaction score post-deployment" },
    { stat: "2–3 weeks", label: "to production on a fixed-price sprint" },
  ],
  heroPanel: {
    agentLabel: "AI Agent · Education Cloud",
    inputDocs: [
      { label: "Admissions Query", color: SF_BLUE },
      { label: "Financial Aid", color: "#60A5FA" },
      { label: "Student Support", color: "#34D399" },
    ],
    processingSteps: ["Student Record Lookup", "Application Status", "Aid Eligibility Check"],
    outputFields: [
      { label: "Student", value: "Priya Nair" },
      { label: "Program", value: "MSc Data Science" },
      { label: "Status", value: "Application Under Review" },
      { label: "Action", value: "Next Steps Sent" },
    ],
    footerText: "Checklist delivered · Financial aid options shared · Advisor booked",
  },
  useCasesIntro: "Every use case below is a production-ready Agentforce deployment pattern for universities and higher education institutions. Each targets a specific, high-volume student interaction that can be handled autonomously — freeing admissions, financial aid, and student services staff for complex cases.",
  useCases: [
    {
      id: "admissions-inquiry",
      icon: GraduationCap,
      color: SF_BLUE,
      title: "Admissions Inquiry Agent",
      subtitle: "Programme information, eligibility guidance, application status, and next steps",
      description: "Handles inbound admissions inquiries around the clock — answering programme questions, explaining entry requirements, walking applicants through the application process, delivering application status updates, and booking admissions advisor calls for high-intent prospects.",
      bullets: ["24/7 programme information and eligibility guidance via web, chat, email", "Application status queries resolved from SIS integration in real time", "Next steps checklist delivery for incomplete applications", "High-intent prospect routing to admissions advisor with full context"],
    },
    {
      id: "enrolment-support",
      icon: BookOpen,
      color: "#60A5FA",
      title: "Enrolment Support Agent",
      subtitle: "Acceptance confirmation, course registration, document collection, and orientation",
      description: "Supports accepted students through the enrolment lifecycle — confirming acceptance, guiding through course registration, collecting required documentation, explaining orientation requirements, and proactively following up with students who have not completed enrolment steps.",
      bullets: ["Acceptance confirmation and enrolment intention capture", "Course registration guidance and timetable query resolution", "Required document collection with completeness tracking", "Proactive enrolment step follow-up for students with incomplete records"],
    },
    {
      id: "financial-aid",
      icon: DollarSign,
      color: "#34D399",
      title: "Financial Aid Agent",
      subtitle: "Eligibility screening, FAFSA guidance, award queries, and disbursement status",
      description: "Handles routine financial aid interactions — explaining eligibility criteria, guiding students through FAFSA or institutional aid applications, answering award letter queries, providing disbursement status, and routing complex aid appeals to financial aid officers.",
      bullets: ["Financial aid eligibility explanation for programmes and income thresholds", "FAFSA and institutional aid application process guidance", "Award letter explanation and comparison of aid packages", "Disbursement status queries and payment schedule delivery"],
    },
    {
      id: "student-support",
      icon: LifeBuoy,
      color: "#A78BFA",
      title: "Student Support Agent",
      subtitle: "Academic queries, service referrals, wellbeing triage, and record requests",
      description: "Supports enrolled students with routine service interactions — academic calendar queries, library and campus service information, unofficial transcript requests, and wellbeing concern triage with routing to the appropriate student support service.",
      bullets: ["Academic calendar, deadline, and exam schedule information delivery", "Campus service and resource directory queries", "Unofficial transcript and enrolment verification request processing", "Wellbeing concern triage with sensitive escalation to student support services"],
    },
    {
      id: "alumni-engagement",
      icon: Users,
      color: "#F59E0B",
      title: "Alumni Engagement Agent",
      subtitle: "Donation campaigns, reunion outreach, mentoring programme, and contact updates",
      description: "Runs personalised alumni engagement programmes — delivering reunion and event invitations, supporting annual fund campaigns, onboarding alumni into mentoring programmes, and collecting contact and career updates to keep alumni data current.",
      bullets: ["Personalised reunion and homecoming event invitation and registration", "Annual fund campaign outreach with personalised giving history context", "Mentoring programme enrolment and mentor-mentee matching support", "Career update and contact data collection with CRM update confirmation"],
    },
    {
      id: "course-advisor",
      icon: Compass,
      color: "#EF4444",
      title: "Course Advisor Agent",
      subtitle: "Module selection, prerequisite checks, programme planning, and study load guidance",
      description: "Helps students navigate module selection and programme planning — checking prerequisite requirements, explaining module content and assessment structure, guiding study load decisions, and routing academic planning queries to a human advisor when personalised guidance is required.",
      bullets: ["Module prerequisite checks and enrolment eligibility confirmation", "Module content, assessment structure, and timetable information", "Study load guidance based on programme requirements and credit rules", "Complex programme planning routing to academic advisor with student context"],
    },
  ],
  buildSteps: [
    {
      number: "01", label: "Connect",
      title: "Connect Agentforce to Your SIS and Financial Aid Systems",
      desc: "We connect Agentforce to Salesforce Education Cloud, your Student Information System (Ellucian Banner, Colleague, PeopleSoft, Workday Student), and financial aid platform — giving agents access to real-time application status, student records, and aid data.",
      bullets: ["Education Cloud audit and Agentforce prerequisites check", "SIS integration via MuleSoft (Ellucian Banner, Colleague, PeopleSoft)", "Financial aid platform integration for live award and disbursement data"],
    },
    {
      number: "02", label: "Build",
      title: "Build FERPA-Compliant Agents with Student Pathway Logic",
      desc: "We design Topics, Actions, and Instructions with FERPA data protection controls built in — ensuring agents only surface student data to the verified student, with multi-step identity verification for sensitive record access. Wellbeing triage logic is reviewed by student services leadership before go-live.",
      bullets: ["FERPA-compliant student data access with identity verification gates", "Wellbeing concern triage logic reviewed by student services leadership", "Einstein Trust Layer configured with student PII masking and full audit trail"],
    },
    {
      number: "03", label: "Deploy",
      title: "Deploy with Admissions and Student Services Sign-Off",
      desc: "Education Agentforce deployments include admissions team UAT, student services review, and a supervised go-live period. Wellbeing and mental health interaction pathways receive additional sign-off from the student welfare team before any autonomous routing is activated.",
      bullets: ["UAT with admissions and financial aid teams using real inquiry scenarios", "Student services and welfare team sign-off on triage and escalation paths", "Supervised go-live with 30-day performance review and CSAT monitoring"],
    },
  ],
  complianceTitle: "Built for FERPA and higher education compliance.",
  complianceIntro: "Education Agentforce deployments handle protected student educational records under FERPA, financial aid data under federal regulations, and wellbeing information under institutional duty of care obligations.",
  complianceItems: [
    { icon: Shield, title: "FERPA", desc: "Student educational records protected under FERPA — agents only surface data to the verified student, with identity verification gates for sensitive record access." },
    { icon: ShieldCheck, title: "GDPR / CCPA", desc: "Prospective and enrolled student personal data handled within Salesforce trust boundary. PII masked before LLM prompt inclusion. Full data subject request support." },
    { icon: Lock, title: "Student Wellbeing", desc: "Wellbeing triage interactions are reviewed by student welfare leadership. Agents follow mandatory reporting obligations and escalation protocols for at-risk students." },
    { icon: Database, title: "Einstein Trust Layer", desc: "Immutable audit trail of every agent action, zero external data retention at LLM providers, and configurable PII masking for student records and financial data." },
  ],
  integrations: ["Salesforce Education Cloud", "Salesforce Data Cloud", "MuleSoft", "Ellucian Banner", "Ellucian Colleague", "Oracle PeopleSoft", "Workday Student", "COD (Federal Aid)", "Scholarship Universe", "Slate CRM", "DocuSign", "Twilio"],
  faqTitle: "Agentforce for higher education — common questions.",
  faqs: [
    { q: "What Agentforce use cases work best for universities?", a: "The highest-impact use cases are admissions inquiry handling (24/7 programme information, eligibility, application status), financial aid guidance (eligibility explanation, FAFSA guidance, award queries), and student support (campus service information, transcript requests, academic calendar). These represent the highest-volume student interactions that currently consume admissions and student services staff time for routine queries." },
    { q: "Can Agentforce integrate with Ellucian Banner or PeopleSoft?", a: "Yes. MuleSoft connects Agentforce to Ellucian Banner, Colleague, Oracle PeopleSoft Campus Solutions, and Workday Student — surfacing application status, student records, academic history, and financial aid data to ground agent responses in real-time SIS data." },
    { q: "How does Agentforce help improve student yield and enrolment?", a: "Agentforce improves yield by eliminating inquiry drop-off points: 24/7 response to programme questions, proactive follow-up on incomplete applications, and personalised next-steps delivery to high-intent applicants. Institutions using systematic inquiry response agents typically see 15–25% improvement in qualified applicant conversion." },
    { q: "How does Agentforce handle FERPA requirements?", a: "FERPA compliance is built into the agent architecture: student educational records are only surfaced after identity verification, agents cannot disclose one student's data in response to another party's query, and the Einstein Trust Layer provides immutable audit logging of every data access event for FERPA compliance documentation." },
    { q: "How long does a higher education Agentforce implementation take?", a: "A focused pilot on one use case — admissions inquiry handling or financial aid guidance — takes 2–3 weeks. Full deployments with SIS and financial aid platform integration run 6–10 weeks." },
  ],
  ctaHeadline: "Ready to deploy Agentforce in your institution?",
  ctaBody: "Book a 30-minute call. We will scope one high-impact use case — admissions inquiry handling, financial aid support, or student services — and give you a fixed-price delivery plan the same week.",
  ctaTrustItems: ["2–3 week sprint to production", "FERPA · GDPR · Einstein Trust Layer", "Fixed price, no hourly billing"],
}

export default function EducationAgentforcePage() {
  return <IndustryPageTemplate data={data} />
}
