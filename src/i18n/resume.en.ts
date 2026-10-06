/**
 * The resume page, lifted from public/resume.pdf so the page and the download
 * say the same thing. Dates are machine-readable (YYYY-MM) and formatted per
 * locale on the page; `end: null` means the role is current.
 */
export const resumeEn = {
  metaTitle: 'Resume | Oussama Bougnouch, Principal UX Designer',
  metaDescription:
    'Resume of Oussama Bougnouch, Principal UX Designer and AI Product Architect: 15+ years across B2B SaaS, marketplaces and enterprise products for CHANEL, AT&T and Fnac.',
  eyebrow: 'Resume',
  heading: 'Principal UX Designer & AI Product Architect',
  summary:
    'Principal UX Designer and Product Architect with 15+ years across B2B SaaS, marketplaces, and enterprise products for clients including CHANEL, AT&T, and Fnac. I find the leaks in user journeys and re-architect flows for measurable ROI, scaling marketplace orders 9x at Sobrus and cutting candidate dropout from 40% to 12% at Gentis. I design conversational and agentic AI features that turn multi-step workflows into a single prompt or voice command, and I build agent-ready design infrastructure: MCP-connected design systems and gated agent workflows that turn analytics into evidence-backed design decisions.',
  download: 'Download PDF',
  downloadMeta: '3 pages',
  location: 'Rabat, Morocco',
  present: 'Present',
  ongoing: 'Ongoing',

  experienceHead: 'Experience',
  experience: [
    {
      role: 'Principal UX Designer',
      org: 'Sobrus',
      place: 'Rabat',
      start: '2025-06',
      end: null,
      points: [
        { lead: 'Marketplace Growth', text: 'Increased marketplace orders 9x year-over-year by simplifying the procurement flow and prioritizing features that grew Average Order Value (AOV).' },
        { lead: 'Sobrus AI Chatbot (Conversational AI)', text: 'Designed an in-app AI assistant that gives pharmacists platform support and how-to guidance, and generates daily sales, purchase, and inventory reports on demand, directly in the chat.' },
        { lead: 'Ordering Flow', text: 'Reduced the steps to complete an order and introduced “Saved Offers” and “Abandoned Cart” reminders so pharmacists finish tasks faster.' },
        { lead: 'Inventory Wizard', text: 'Turned a manual, complex inventory bottleneck into a guided, step-by-step digital process.' },
        { lead: 'Contextual Discovery', text: 'Ran weekly on-site pharmacy visits for contextual inquiry, identifying real-world pain points and validating roadmap topics directly with owners.' },
        { lead: '“Sun” Design System', text: 'Built from scratch on a 3-layer token architecture (Primitive, Alias, Component); partnered with developers to implement tokens on shadcn/ui and React Native Reusables, doubling development speed.' },
        { lead: 'Design Leadership & Prioritization', text: 'Led weekly design reviews to validate sprint work, and set roadmap and sprint priorities from Microsoft Clarity and Mixpanel behavior data.' },
      ],
    },
    {
      role: 'Sr. Product Designer',
      org: 'Gentis',
      place: 'Casablanca',
      start: '2024-01',
      end: '2025-06',
      caseStudies: ['wiggli-calendar-ux-case-study', 'wiggli-candidate-matching-case-study'],
      points: [
        { lead: 'Conversational AI Recruiting Assistant', text: 'Designed a prompt- and voice-driven assistant that lets recruiters run their hiring pipeline through conversation: creating vacancies, filling them with the highest-matching candidates, and moving candidates across kanban recruiting stages.' },
        { lead: 'AI Sourcing Automation', text: 'Designed a prompt-driven agent that ranks candidates by matching score and automated the selection-to-interview pipeline, saving hiring managers up to 11 hours per week.' },
        { lead: 'AI Vacancy Generator', text: 'Replaced manual job creation with prompt-based generation, cutting time-to-post from 1 hour to ~12 minutes.' },
        { lead: 'Funnel Optimization', text: 'Cut candidate dropout from 40% to 12% by re-engineering the scheduling journey, shrinking the booking cycle from 3 days to ~15 minutes.' },
        { lead: 'Wiggli Credits & Tokens', text: 'Designed the credits system that manages platform billing and encourages recurring user actions.' },
        { lead: 'Unified Communication', text: 'Centralized recruiter-candidate messaging into a single, streamlined tool.' },
        { lead: 'Onboarding & Validation', text: 'Reached a 7.6/10 adoption score among first-time users through contextual onboarding guides and post-task surveys.' },
      ],
    },
    {
      role: 'Lead Product Designer',
      org: 'Freelance, Web3',
      place: 'Remote',
      start: '2022-09',
      end: '2024-12',
      points: [
        { lead: 'Hadeswap Liquidity Architecture', text: 'Designed the UX for the first automated market maker (AMM) for NFTs on Solana, pioneering NFT liquidity pools.' },
        { lead: 'DeFi Simplification', text: 'Made DeFi mechanics accessible to retail users, driving growth in trading volume and NFT market share.' },
        { lead: 'Minting & Wallet Flows', text: 'Researched Solana and Metaplex Candy Machine protocols to design secure, high-velocity minting flows, and optimized transaction signing for Phantom and other Solana wallets.' },
      ],
    },
    {
      role: 'Lead UX/UI Designer',
      org: '4D',
      place: 'Rabat',
      start: '2019-12',
      end: '2022-07',
      points: [
        { lead: 'Fnac Product Comparator', text: 'Built the advanced product comparator by auditing historical data to remove decision-making friction.' },
        { lead: 'Probiocal (Medical SaaS & E-commerce)', text: 'Designed the web app and optimized lab e-commerce, reducing checkout churn by 9.7%.' },
        { lead: 'Information Architecture', text: 'Restructured the blood-analysis results experience so professionals can interpret results more easily.' },
        { lead: 'Career Card', text: 'Designed a gamified mobile experience for instant employee recognition via QR code scanning.' },
      ],
    },
    {
      role: 'UX/UI Designer',
      org: 'IPPON Technology',
      place: 'Marrakech',
      start: '2018-02',
      end: '2019-10',
      points: [
        { lead: 'CHANEL', text: 'Designed an internal educational app that trains employees on upcoming drops, based on research revealing customer knowledge gaps.' },
        { lead: 'European Judo Union', text: 'Led the website redesign and overhauled “Live Competitions” with the “Tatamis” multi-stream system.' },
        { lead: 'French Foundation of Sport', text: 'Designed a private social app for athletes, reaching a 70% user activity rate at launch.' },
      ],
    },
    {
      role: 'UX/UI Designer',
      org: '4D',
      place: 'Rabat',
      start: '2014-02',
      end: '2018-01',
      points: [
        { lead: 'AT&T (SBC TARS)', text: 'Designed a modern web interface for a conflict-management application used by thousands of US field technicians.' },
        { lead: 'Italia Rails', text: 'Designed a ticketing app that modernized booking for high-volume travelers.' },
        { lead: 'Wakanda', text: 'Improved the UX of 4D’s internal developer tools to boost productivity.' },
      ],
    },
    {
      role: 'Co-Founder & Full-stack Designer',
      org: 'Themevan',
      place: 'Remote / China',
      start: '2010-03',
      end: '2014-06',
      points: [
        { lead: 'ThemeForest Elite Author', text: 'Co-founded a boutique WordPress agency and scaled it to thousands of customers worldwide through premium commercial themes, owning the full design and development lifecycle.' },
      ],
    },
  ],

  labHead: 'AI systems · Independent R&D',
  lab: [
    {
      name: 'Design Experiment Harness',
      kind: 'Agentic design workflow',
      points: [
        'Architected a 15-stage, gate-driven workflow (Discover → Frame → Make → Validate → Learn) that wraps AI agents around the product design process, with human-approval gates, an audit trail, journey maps, and a learning log.',
        'Orchestrator/worker setup: Claude Agent SDK / Claude Code as orchestrator, a local LLM (Hermes) for high-volume tasks, PostHog MCP for analytics and experiments, and Storybook MCP for component discovery.',
        'Added a living project-profile layer with explicit rules separating autonomous agent updates from changes that require human approval.',
      ],
    },
    {
      name: 'Vitamin-Z Design System',
      kind: 'Agent-first design system',
      points: [
        'Three-tier token architecture (primitive → semantic → component) with private primitives and a build-time “primitive-escape” check that blocks token leakage.',
        '24 automated accessibility audit checks across four theme combinations (light/dark × two brands).',
        'MCP server with CLAUDE.md and CONTEXT.md instruction files so AI coding agents consume the system correctly; built on Tailwind and CVA, with a Node.js token-sync script for the Figma Variables REST API.',
      ],
    },
  ],

  skillsHead: 'Core skills',
  skills: [
    { area: 'Agentic AI & LLM Systems', items: 'Agent workflow orchestration, human-in-the-loop approval gates, MCP (Model Context Protocol) servers and integrations, context engineering, prompt engineering, Claude Agent SDK / Claude Code, local LLM workers' },
    { area: 'Conversational AI Design', items: 'Chat and voice-driven assistants, prompt-to-action workflows, AI support and reporting assistants, LLM-based candidate matching' },
    { area: 'Design Systems Architecture', items: 'Multi-layer tokens (Primitive, Semantic/Alias, Component), agent-readable design systems, automated accessibility auditing, design governance, Tailwind + CVA, shadcn/ui' },
    { area: 'Research & Analytics', items: 'Contextual inquiry, quantitative and qualitative analysis, journey mapping, service blueprinting, A/B testing and experiment design' },
    { area: 'Product Strategy & Growth', items: 'Conversion rate optimization, funnel analysis, growth UX, monetization and credits systems, stakeholder alignment' },
    { area: 'Information Architecture', items: 'Complex data mapping, structural taxonomy, navigation logic for B2B SaaS, content strategy' },
    { area: 'Product Leadership', items: 'Weekly design reviews, technical feasibility audits, cross-functional leadership, mentorship, sprint definition, roadmapping' },
    { area: 'Tools', items: 'Figma, Tokens Studio, Storybook, Claude Code, Mixpanel, Microsoft Clarity, PostHog, GA4, Hotjar, Node.js' },
  ],

  learningHead: 'Education & certifications',
  education: [
    { school: 'IMBT', field: 'Application Architecture and Development Engineering (Master)', start: '2020', end: '2022' },
    { school: 'Miage Group', field: 'Software Development (Bachelor)', start: '2015', end: '2016' },
    { school: 'Moulik Group', field: 'Information Technology', start: '2011', end: '2013' },
    { school: 'FSJES University', field: 'Economics & Finance (BAC+2)', start: '2010', end: '2012' },
    { school: 'Mohamed VI High School', field: 'Accountancy & Management (Baccalaureate)', start: '2008', end: '2009' },
  ],
  certifications: [
    { issuer: 'Google', name: 'UX Design Specialization', note: '7 courses, from UX research to high-fidelity prototyping in Figma' },
    { issuer: 'IBM', name: 'Enterprise Design Thinking Practitioner; Product Management: An Introduction' },
    { issuer: 'SkillUp Online (by IBM)', name: 'Product Management: Foundations & Stakeholder Collaboration; Initial Product Strategy and Plan' },
  ],
};
