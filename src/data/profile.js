// ─────────────────────────────────────────────────────────────
// All site text lives here. Edit this file to update the portfolio;
// you don't need to touch the components.
// ─────────────────────────────────────────────────────────────

import profilePhoto from '../assets/profile.png'

// Every image in src/assets/logos is loaded automatically by file name.
// Missing file → the tile shows a fallback icon instead (no build error).
const logoFiles = import.meta.glob('../assets/logos/*.{svg,png,webp,jpg,jpeg}', { eager: true, import: 'default' })
const logo = (file) => logoFiles[`../assets/logos/${file}`] ?? null

const powerApps = logo('power-apps.webp')
const powerAutomate = logo('power-automate.webp')
const dataverse = logo('dataverse.webp')
const sharepoint = logo('sharepoint.webp')
const aiBuilder = logo('ai-builder.webp')
const freshservice = logo('freshservice.svg')
const powerPages = logo('power-pages.svg')
const node = logo('node.webp')
const html = logo('html.webp')
const css = logo('css.webp')
const js = logo('js.webp')
const powerBi = logo('power-bi.webp')
const ssms = logo('ssms.webp')
// Add the official Claude logo as src/assets/logos/claude.svg (or .png) and it appears automatically.
const claude = logo('claude.svg') ?? logo('claude.png')

import arcgisImg from '../assets/projects/arcgis-power-platform.webp'
import workflowImg from '../assets/projects/workflow-automation.webp'
import freshserviceImg from '../assets/projects/freshservice-ai.webp'
import sharepointImg from '../assets/projects/sharepoint-migration.webp'
import datePickerImg from '../assets/projects/date-picker.webp'

export const profile = {
  firstName: 'Thirumalaivasan',
  initials: 'K N',
  shortName: 'Thirumalaivasan K N',
  logoText: 'TK',
  role: 'Software Engineer',
  company: 'Psiog',
  roleSince: 'Aug 2026',
  tagline: 'Software Engineer · Power Platform · SharePoint · Integrations',
  intro:
    'I build business apps, automated workflows and connected systems with Microsoft Power Platform and SharePoint.',
  photo: profilePhoto,
  // Put your résumé at public/resume.pdf and set this to './resume.pdf'.
  // Leave it empty ('') to hide the "Download résumé" button.
  resumeUrl: '',
  email: 'thirumalaivasan174@gmail.com',
  linkedin: 'https://www.linkedin.com/in/er-thirumalaivasan-nedunchezhian-157589225/',
  github: 'https://github.com/Thiru-174',
}

export const corePlatforms = [
  { name: 'Power Apps', logo: powerApps },
  { name: 'Power Automate', logo: powerAutomate },
  { name: 'Dataverse', logo: dataverse },
  { name: 'SharePoint', logo: sharepoint },
  { name: 'AI Builder', logo: aiBuilder },
  { name: 'Power Pages', logo: powerPages },
]

export const about = {
  heading: 'Turning business needs into connected Microsoft solutions',
  paragraphs: [
    "I'm a Software Engineer at Psiog who turns business requirements into working apps, automated workflows and connected systems across the Microsoft ecosystem.",
    'I build Canvas and Model-Driven Power Apps on Dataverse, automate processes end to end with Power Automate, and add intelligence with AI Builder. I also design and migrate SharePoint sites that teams use every day, and connect Power Platform with tools such as ArcGIS and Freshservice.',
    'I use Claude and Claude Code in my day-to-day development, and the Model Context Protocol (MCP) to connect AI assistants with business systems such as Power Apps.',
  ],
  focus: [
    { title: 'Power Apps', detail: 'Canvas & Model-Driven' },
    { title: 'Power Automate', detail: 'End-to-end workflows' },
    { title: 'SharePoint', detail: 'Sites, pages & migration' },
    { title: 'Integrations', detail: 'ArcGIS · Freshservice' },
    { title: 'Claude-based development', detail: 'Claude Code · Claude + Power Apps · MCP', wide: true },
  ],
}

// Newest first. Set current: true on the role you hold now (shows the "Active" tag).
export const experience = [
  {
    title: 'Software Engineer',
    company: 'Psiog',
    period: 'Aug 2026 – Present',
    current: true,
    summary:
      'Designing and delivering Power Platform and SharePoint solutions, workflow automation and third-party integrations for enterprise clients.',
    tags: ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'AI Builder', 'Power Pages', 'Integrations', 'Claude Code', 'MCP'],
  },
  {
    title: 'Graduate Software Trainee',
    company: 'Psiog',
    period: 'Aug 2025 – Aug 2026',
    summary:
      'Built Power Platform apps, Power Automate workflows and SharePoint solutions, and tested enterprise workflows end to end.',
    tags: ['Power Apps', 'Power Automate', 'Dataverse', 'SharePoint', 'AI Builder', 'Power Pages', 'Freshservice', 'Manual QA'],
  },
  {
    title: 'Student Intern',
    company: 'Psiog',
    period: 'Feb 2025 – Aug 2025',
    summary: 'Built foundations in web development, business data and reporting that underpin my Power Platform work.',
    tags: ['HTML · CSS · JavaScript', 'Node', 'Power BI', 'SQL · SSMS'],
  },
]

export const projects = [
  {
    title: 'ArcGIS + Power Platform Integration',
    image: arcgisImg,
    description:
      'Brings ArcGIS map and location data into Power Apps, so users can view and act on geographic records inside their business apps.',
    tags: ['Power Apps', 'ArcGIS', 'Dataverse'],
  },
  {
    title: 'Workflow Automation Systems',
    image: workflowImg,
    description:
      'Power Automate flows that route approvals, send notifications and update records across SharePoint and Dataverse.',
    tags: ['Power Automate', 'SharePoint', 'Dataverse'],
  },
  {
    title: 'Freshservice + AI Ticket Categorization',
    image: freshserviceImg,
    description:
      'Pulls Freshservice tickets into Power Platform and uses AI Builder to classify them by category, so they reach the right team faster.',
    tags: ['Freshservice', 'Power Automate', 'AI Builder'],
  },
  {
    title: 'SharePoint Migration & Collaboration',
    image: sharepointImg,
    description:
      'Migrates and restructures SharePoint sites, pages and lists for team collaboration and document management.',
    tags: ['SharePoint', 'Microsoft 365'],
  },
  {
    title: 'Claude + Power Apps',
    image: null, // add a screenshot in src/assets/projects/ and import it here
    icon: claude,
    description:
      'Using Claude and Claude Code alongside Power Apps and Power Automate, with MCP to connect the AI assistant to business data and workflows.',
    tags: ['Claude', 'Claude Code', 'MCP', 'Power Apps'],
  },
  {
    title: 'Dynamic Date Picker Validation',
    image: datePickerImg,
    description:
      'A reusable Power Apps component that enforces date rules, such as allowed ranges and blocked dates, as the user picks a date.',
    tags: ['Power Apps', 'Power Fx'],
  },
]

// logo: null shows the fallback icon named in `icon` ('check' | 'spark' | 'plug').
export const skills = [
  { name: 'Power Apps', logo: powerApps },
  { name: 'Power Automate', logo: powerAutomate },
  { name: 'Dataverse', logo: dataverse },
  { name: 'SharePoint', logo: sharepoint },
  { name: 'AI Builder', logo: aiBuilder },
  { name: 'Freshservice', logo: freshservice },
  { name: 'Power Pages', logo: powerPages },
  { name: 'Node', logo: node },
  { name: 'HTML', logo: html },
  { name: 'CSS', logo: css },
  { name: 'JavaScript', logo: js },
  { name: 'Power BI', logo: powerBi },
  { name: 'SSMS', logo: ssms },
  { name: 'Claude', logo: claude, icon: 'spark' },
  { name: 'Claude Code', logo: claude, icon: 'spark' },
  { name: 'MCP', logo: null, icon: 'plug' },
  { name: 'Manual QA', logo: null, icon: 'check' },
]

export const education = {
  degree: 'B.E. Electronics & Instrumentation Engineering',
  school: 'Kumaraguru College of Technology, Coimbatore',
  // Fill in, e.g. '2021 – 2025'. Leave empty ('') to hide the line.
  years: '2021 – 2025',
}

export const leadership = {
  title: 'President, Department Association',
  org: 'EIE Department, Kumaraguru College of Technology',
  detail: "Joint Secretary → Secretary → President (2024–25) of the department association, on KCT's Leadership Council.",
  stat: '500+',
  statLabel: 'Alumni community members',
  statDetail: 'EIE Department network',
}

// Shown in the Education & Leadership section, below the three cards.
export const achievements = [
  {
    title: 'Best Outgoing Student',
    detail: 'Department of Electronics & Instrumentation Engineering, KCT (2025)',
  },
  {
    title: "Institutional Contributors' Award",
    detail: 'Kumaraguru Achievers Awards: one of 66 recognised from 1,300+ students in the 2025 batch',
  },
  {
    title: '4× MG Merit Scholarship',
    detail: 'Awarded four times for academic performance at KCT',
  },
  {
    title: 'Alumnet',
    detail: 'Started a student–alumni network while leading department association activities (2022–2025)',
  },
  {
    title: 'Alumni reunions',
    detail: 'Coordinated GAM 2023, DECADE 2023 and the Silver Jubilee meets of the 1999 and 2000 batches',
  },
  {
    title: 'Yugam 2023 – 2025 & placement drives',
    detail: 'Key organiser of the Yugam festival at department and institution level; placement drive volunteer',
  },
]
