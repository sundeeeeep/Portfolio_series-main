/**
 * Central portfolio data — generated from Bhargava Sundeep's resume.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const assets = `${import.meta.env.BASE_URL}assets/`;

export const profile = {
  fullName: 'Bhimadolu Bhargava Sundeep',
  displayName: 'Bhargava Sundeep',
  firstName: 'Bhargava',
  portfolioTag: 'PORTFOLIO',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SUNDEEP ORIGINAL',
  role: 'Risk Management Analyst',
  tagline: ['Third-Party Risk', 'AI & GRC Automation', 'ServiceNow CMDB'],
  intro:
    'A Risk Management and technology governance professional with 5+ years of experience spanning third-party risk, vendor evidence assessment, risk registers, ServiceNow CMDB, IT asset management and software licensing. Building AI-assisted GRC solutions using Microsoft 365 Copilot, Power Automate, and Power BI.',
  location: 'Chennai, Tamil Nadu',
  email: 'sundeep.ham@gmail.com',
  phone: '+91 8106266055',
  links: {
    linkedin: 'https://www.linkedin.com/in/bhargava-sundeep-29064578',
    github: 'https://github.com',
  },
  resumePdf: `${assets}Bhargava_Sundeep_Professional_Resume.pdf`,
  portrait: {
    src: `${assets}portrait-720.webp`,
    srcSet: `${assets}portrait-420.webp 420w, ${assets}portrait-720.webp 720w, ${assets}portrait-1100.webp 1100w`,
    alt: 'Portrait of Bhargava Sundeep',
  },
  interests: ['Third-Party Risk Management', 'AI Agents for GRC', 'ServiceNow CSDM / HAM Pro'],
};

export const education = [
  {
    school: 'Andhra University',
    place: 'Andhra Pradesh',
    degree: 'Bachelor of Technology — Mechanical Engineering',
    period: '2018',
    score: 'B.Tech',
  },
];

export const experience = [
  {
    company: 'Ashley Furniture Industries',
    role: 'Risk Management Analyst',
    place: 'Chennai, Tamil Nadu',
    period: 'July 2025 – Present',
    points: [
      'Conduct vendor risk reviews by analysing security questionnaires, privacy and security evidence, policies, certifications, audit reports, Trust Centre content and supporting documentation.',
      'Assess control applicability, evidence quality, gaps, compensating controls, business impact and residual risk across information security, access management, data protection, vulnerability management, business continuity and governance.',
      'Prepare risk observations, acceptance rationales, mitigation actions, evidence references, ownership and follow-up requirements for vendor assessments, risk-register and management review.',
    ],
  },
  {
    company: 'Prodapt (Vendor)',
    role: 'Senior Analyst — IT Asset Management',
    place: 'Chennai, Tamil Nadu',
    period: 'January 2023 – June 2025',
    points: [
      'Managed enterprise asset inventory and lifecycle records in ServiceNow CMDB, including allocation, transfers, break-fix, lost or stolen assets, disposal and reporting.',
      'Supported incident and configuration management, escalations, VPN-token provisioning and asset-data validation with end-user support teams.',
      'Coordinated hardware, software and leased-equipment procurement; validated vendor quotations, supported purchase-order creation and initiated buyback activities.',
    ],
  },
  {
    company: 'TCS (Vendor)',
    role: 'Software Engineer',
    place: 'India',
    period: 'November 2022 – December 2022',
    points: [
      'Supported IT operations and asset-management activities in a short-term vendor engagement.',
    ],
  },
  {
    company: 'Wipro',
    role: 'Vendor — Asset Management',
    place: 'India',
    period: 'February 2021 – October 2022',
    points: [
      'Maintained hardware and software inventory and supported asset tracking from acquisition through disposal.',
      'Assisted with software-licence compliance, inventory reconciliation, procurement coordination, vendor management and operational reporting.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'risk-analyst-agent',
    title: 'Risk Analyst Agent',
    year: '2026',
    genre: 'AI • GRC Automation • Copilot',
    logline: 'Evidence-grounded Copilot agent for structured vendor questionnaire and security-evidence review.',
    stack: ['Microsoft 365 Copilot', 'Copilot Agent Builder', 'Power Automate', 'Power BI'],
    build: [
      'Built and tested a Risk Analyst Agent in Microsoft 365 Copilot to support first-pass review of vendor questionnaires and security evidence, with human approval retained for final risk decisions.',
      'Refined the agent by comparing outputs with completed human reviews and adding checks for missing responses, evidence quality, document versions, dates, recurring risks and risk-appetite rules.',
      'Created and tested a Policy Review Reminder and a Phishing Quarterly Manager Notification solution using Power Automate.',
    ],
    features: [
      'First-pass review of vendor questionnaires & security evidence',
      'Human-in-the-loop validation for risk decisions',
      'Checks for missing responses, document versions & risk rules',
      'Power Automate workflow reminders & manager notifications',
    ],
    metrics: [
      { value: 'Ongoing', label: 'vendor risk assessments' },
      { value: '27', label: 'risk-register entries documented' },
      { value: '3', label: 'AI / automation solutions' },
      { value: '5+', label: 'years of experience' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'risk-phishing-analytics',
    title: 'Risk & Phishing Analytics',
    year: '2026',
    genre: 'Analytics • Power BI • Reporting',
    logline: 'Power BI reporting for risk visibility, trends, training status and targeted follow-up.',
    stack: ['Power BI', 'ServiceNow', 'SharePoint', 'PowerShell'],
    build: [
      'Created risk-review and phishing-reporting views in Power BI for executive metrics, quarterly trends, training status, manager and department analysis, and repeat-compromise follow-up.',
      'Collaborated with Power BI and HR stakeholders to consolidate workforce and licence data, resolve inconsistencies and improve reporting accuracy using PowerShell-assisted extracts.',
    ],
    features: [
      'Executive metrics & quarterly trend dashboards',
      'Training status, manager & department analysis',
      'Repeat-compromise follow-up tracking',
      'PowerShell-assisted data consolidation extracts',
    ],
    metrics: [
      { value: 'Q3 2026', label: 'evidence portfolio cycle' },
      { value: '100%', label: 'management-ready reporting' },
      { value: 'Multi-dept', label: 'stakeholder integration' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'servicenow-cmdb-csdm',
    title: 'ServiceNow CMDB & Governance',
    year: '2025',
    genre: 'ITAM • ServiceNow • Governance',
    logline: 'Enterprise asset inventory management, ServiceNow CMDB/CSDM implementation, and licence governance.',
    stack: ['ServiceNow', 'CMDB', 'CSDM', 'HAM Pro', 'SAM'],
    build: [
      'Managed enterprise asset inventory and lifecycle records in ServiceNow CMDB, ensuring data foundation accuracy across allocation, transfers, and disposal.',
      'Provided business inputs for ServiceNow HAM Pro workflow development, supported Microsoft licence allocation analysis, and identified governance gaps such as reclaiming unused licences.',
    ],
    features: [
      'ServiceNow Certified Implementation Specialist in Data Foundations',
      'CMDB & CSDM framework alignment',
      'HAM Pro workflow development & licence reclaim governance',
      'Enterprise Agreement renewal & Microsoft BVA preparation',
    ],
    metrics: [
      { value: 'CIS', label: 'Data Foundations certified' },
      { value: '5+', label: 'years asset management expertise' },
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'best-team-player',
    title: 'Best Team Player Award',
    org: 'Internal Hackathon',
    detail: 'Contributed to an internal hackathon project building a Voice Shopping Assistant using .NET and Visual Studio Code.',
    laurel: 'Award Winner',
  },
  {
    id: 'servicenow-cis',
    title: 'ServiceNow CIS – Data Foundations',
    org: 'ServiceNow',
    detail: 'Certified Implementation Specialist in CMDB & CSDM frameworks.',
    laurel: 'Certified Specialist',
  },
  {
    id: 'tpm-portfolio',
    title: 'Vendor Assessments & Risk Registers',
    org: 'Ashley Furniture Industries',
    detail: 'Conducting vendor security assessments and maintaining risk-register documentation at Ashley Furniture Industries.',
    laurel: 'GRC Milestone',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'ServiceNow', name: 'Certified Implementation Specialist – Data Foundations (CMDB & CSDM)', link: 'https://www.linkedin.com/in/bhargava-sundeep-29064578' },
  { issuer: 'Microsoft', name: 'Cybersecurity: Identity & Access Solutions Using Azure AD', link: 'https://www.linkedin.com/in/bhargava-sundeep-29064578' },
  { issuer: 'Microsoft', name: 'Cybersecurity: Threat Vectors & Mitigation', link: 'https://www.linkedin.com/in/bhargava-sundeep-29064578' },
  { issuer: 'Microsoft', name: 'Introduction to Networking & Cloud Computing', link: 'https://www.linkedin.com/in/bhargava-sundeep-29064578' },
  { issuer: 'Microsoft', name: 'Introduction to Computers, Operating Systems & Security', link: 'https://www.linkedin.com/in/bhargava-sundeep-29064578' },
  { issuer: 'Outskill', name: 'Generative AI Mastermind', link: 'https://www.linkedin.com/in/bhargava-sundeep-29064578' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'grc',
    title: 'Risk & GRC',
    subtitle: 'Third-party risk and frameworks',
    skills: [
      { name: 'TPRM', mono: 'Tp', note: 'Core' },
      { name: 'Vendor Security Assessments', mono: 'Vs' },
      { name: 'Risk Registers', mono: 'Rr' },
      { name: 'ISO 27001', mono: 'Is' },
      { name: 'NIST CSF / RMF', mono: 'Ns' },
      { name: 'SOC 1 / 2 / 3', mono: 'Sc' },
      { name: 'PCI DSS', mono: 'Pc' },
    ],
  },
  {
    id: 'automation',
    title: 'AI & Automation',
    subtitle: 'AI agents and low-code workflows',
    skills: [
      { name: 'Microsoft 365 Copilot', mono: 'Cp' },
      { name: 'Copilot Agent Builder', mono: 'Ab' },
      { name: 'Power Automate', mono: 'Pa' },
      { name: 'Power BI', mono: 'Pb' },
      { name: 'AI Governance', mono: 'Ag' },
    ],
  },
  {
    id: 'servicenow',
    title: 'ServiceNow & ITAM',
    subtitle: 'CMDB, CSDM and asset governance',
    skills: [
      { name: 'ServiceNow', mono: 'Sn' },
      { name: 'CMDB', mono: 'Cb' },
      { name: 'CSDM', mono: 'Cs' },
      { name: 'HAM Pro', mono: 'Hp' },
      { name: 'SAM', mono: 'Sm' },
      { name: 'TruOps', mono: 'Tr' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Ecosystem',
    subtitle: 'Collaboration and scripting',
    skills: [
      { name: 'SharePoint', mono: 'Sp' },
      { name: 'PowerShell', mono: 'Ps' },
      { name: 'Microsoft 365', mono: 'M3' },
      { name: 'Defender', mono: 'Df' },
      { name: 'Purview', mono: 'Pv' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  TPRM: ['Ashley Furniture Vendor Risk Reviews', 'Q3 2026 Evidence Portfolio'],
  'Microsoft 365 Copilot': ['Risk Analyst Agent', 'AI Automation Highlights'],
  'Power Automate': ['Policy Review Reminder', 'Phishing Quarterly Manager Notification'],
  'Power BI': ['Risk & Phishing Analytics Dashboards'],
  ServiceNow: ['ServiceNow CIS Data Foundations', 'Prodapt Senior Analyst ITAM'],
  CMDB: ['ServiceNow Certified Implementation Specialist (CMDB & CSDM)'],
  'ISO 27001': ['Vendor Evidence Reviews and GRC Framework Application'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2018',
    synopsis: 'Mechanical Engineering degree from Andhra University.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Andhra University',
        description: 'Bachelor of Technology in Mechanical Engineering.',
        tags: ['B.Tech', 'Mechanical Engineering'],
        runtime: '2018',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Asset Management & IT Operations',
    period: '2021 – 2025',
    synopsis: 'Building enterprise asset management expertise across Wipro, TCS, and Prodapt in ServiceNow CMDB.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Wipro & TCS Engagements',
        description: 'Maintained hardware and software inventory, asset tracking, and licence compliance.',
        tags: ['Inventory', 'Procurement', 'ITAM'],
        runtime: 'Feb 2021 – Dec 2022',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Prodapt Senior Analyst',
        description: 'Managed enterprise asset inventory and lifecycle records in ServiceNow CMDB and coordinated procurement.',
        tags: ['ServiceNow CMDB', 'Incident Mgmt', 'Procurement'],
        runtime: 'Jan 2023 – Jun 2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Risk Management & AI Automation',
    period: '2025 – Present',
    synopsis: 'Risk Management Analyst at Ashley Furniture Industries leading TPRM and AI-assisted GRC solutions.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Ashley Furniture Industries',
        description: 'Conducting vendor security reviews, risk registers, and evidence assessments.',
        tags: ['TPRM', 'Vendor Reviews', 'Risk Registers'],
        runtime: 'Jul 2025 – Present',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'AI & GRC Solutions',
        description: 'Built Risk Analyst Agent in Microsoft 365 Copilot and Power Automate workflows.',
        tags: ['Copilot', 'Power Automate', 'Power BI'],
        runtime: '2026',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Expanding GRC expertise with ServiceNow CIS SAM Pro and ISO 27001 ISMS certifications.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Continuous Growth',
        description: 'Pursuing ServiceNow CIS - Software Asset Management (SAM Pro) and ISO 27001 ISMS certification.',
        tags: ['SAM Pro', 'ISO 27001', 'GRC'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Role', title: 'Risk Management Analyst', detail: 'Ashley Furniture Industries', palette: crimson },
  { label: 'Experience', title: '5+ Years', detail: 'Third-party risk, ITAM & ServiceNow', palette: amber },
  { label: 'AI Innovation', title: 'Risk Analyst Agent', detail: 'Microsoft 365 Copilot & Power Automate', palette: ocean },
  { label: 'Certification', title: 'ServiceNow CIS', detail: 'Data Foundations (CMDB & CSDM)', palette: jade },
  { label: 'Vendor Assessments', title: 'Ongoing', detail: 'Ashley Furniture Industries', palette: violet },
  { label: 'Risk Registers', title: '27 Entries Documented', detail: 'Ashley Furniture portfolio', palette: amber },
  { label: 'Analytics', title: 'Power BI Dashboards', detail: 'Risk visibility & phishing reporting', palette: crimson },
  { label: 'External Certifications', title: 'Microsoft & Outskill', detail: 'Cybersecurity, cloud & generative AI', palette: ocean },
  { label: 'Frameworks', title: 'ISO / NIST / SOC / PCI', detail: 'Security & governance concepts', palette: jade },
  { label: 'Award', title: 'Best Team Player', detail: 'Internal hackathon Voice Assistant', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Overview',
    title: 'Risk Management Analyst',
    lines: ['Ashley Furniture Industries · Chennai, Tamil Nadu', '5+ years of experience in TPRM, ITAM & ServiceNow CMDB'],
    chips: ['TPRM', 'ServiceNow CMDB', 'AI & GRC Automation'],
  },
  {
    kicker: 'Expertise',
    title: 'Third-Party Risk & AI',
    lines: ['Vendor security assessments & risk registers', 'Microsoft 365 Copilot Agent Builder & Power Automate', 'Power BI executive dashboards'],
    chips: ['Risk Analyst Agent', 'Power Automate', 'Power BI'],
  },
  {
    kicker: 'Projects',
    title: 'AI & GRC Solutions',
    lines: ['Risk Analyst Agent for vendor questionnaire review', 'Policy Review Reminder & Phishing Notifications', 'ServiceNow CMDB & CSDM workflow implementation'],
  },
  {
    kicker: 'Certifications',
    title: 'ServiceNow Certified',
    lines: [
      'Microsoft: Identity & Access Solutions Using Azure AD',
      'Microsoft: Cybersecurity Threat Vectors & Mitigation',
      'Microsoft: Introduction to Networking & Cloud Computing',
      'Microsoft: Introduction to Computers, Operating Systems & Security',
      'Outskill: Generative AI Mastermind',
    ],
  },
  {
    kicker: 'Current focus',
    title: 'Next Chapter',
    lines: ['ServiceNow SAM Pro · ISO 27001 ISMS · Advanced GRC'],
  },
];

export type ProfileId = 'sundeep' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sundeep',
    name: 'Bhargava Sundeep',
    blurb: 'The full portfolio, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Automation, AI & tools first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Risk & GRC Professional', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'My Projects', meta: `${projects.length} Projects • AI & GRC`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};