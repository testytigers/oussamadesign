export const caseStudyEn = {
  metaTitle: 'Wiggli Calendar UX Case Study | Oussama Bougnouch',
  metaDescription:
    'How collaborative scheduling cut candidate dropout from 40% to 12% and reduced scheduling time from 3 days to 15 minutes.',
  eyebrow: 'Case study',
  title: 'Centralizing the hiring process through collaborative scheduling',
  lede: 'UX Designer at Wiggli — scheduling efficiency, team coordination, and tool consolidation.',
  chips: ['Dropout 40% → 12%', '3 days → 15 min', '50+ active recruiters'],

  figures: {
    calView:
      'Wiggli collaborative scheduling calendar interface showing weekly view with interview events, Collaborative Groups panel, and team availability across multiple recruiters',
    journeyMap:
      'Service blueprint mapping the 6-stage hiring journey — Initiate, Check Availability, Align Schedules, Propose Interview, Await Response, Confirm Interview — with actions, feelings, pain points and opportunities per stage',
    problem:
      'Diagram of multi-party interview scheduling: a proposed 12:00-13:00 slot is rejected by the candidate, two interviewers each list separate availability, and the hiring manager has to hunt for the single overlapping slot, 13:00-14:00, before confirming it back to the candidate after a delay',
    oldExperience:
      'Screen recording of the legacy Wiggli interview scheduling UI, showing the limitation of proposing only a single time slot — the root cause of 40% candidate dropout',
    oldExperienceCaption:
      'The old design only allowed proposing a single time slot, which led to communication issues and increased the rescheduling rate.',
    userFlow:
      'End-to-end user flow diagram for the redesigned Wiggli scheduling system covering Interview creation, Event setup, New Collaborative Group, Join Group, and Calendar Sync decision trees',
    collaborativeGroups:
      'Wiggli Collaborative Groups feature UI — showing the Join Group permission modal alongside the shared calendar view where all team members’ availability is visible in a unified weekly layout',
    findBest:
      'Multi-timezone availability intersection diagram showing how the Find Best Times engine identifies 1.8 hours of shared open slots within a 4-hour common work window across Interviewer in NYC (GMT-4), Interviewer in London (GMT+0), and Candidate in Cairo (GMT+2)',
    calendarViews:
      'Three Wiggli calendar layout variants side by side — Daily view for hour-by-hour scheduling, Weekly view for mid-term planning, and Monthly view for high-level hiring volume overview',
    calendarSettings:
      'Wiggli Calendar Settings screen showing Google and Outlook sync configuration, Collaborative Groups management panel, and granular member permission controls (See Event Names, See Only Free/Busy)',
    schedule:
      'Wiggli Schedule Availability feature — Quick Add dropdown showing Event, Interview and Availability options, allowing recruiters to pre-mark free interview slots during busy hiring seasons',
  },

  discovery: {
    label: '01 — Discovery',
    heading: 'Identifying fragmented communication causing a 40% candidate dropout rate',
    p1: 'In professional recruitment, speed is the only competitive advantage. At Gentis/Wiggli, we identified a critical failure in our production line: 40% of candidates were dropping out during the scheduling phase.',
    p2: 'This wasn’t just a "UX friction" issue; it was a massive financial leak. Every abandoned candidate represented thousands of dollars in wasted sourcing spend (CAC) and lost potential revenue. The process was manual, fragmented, and prone to human error. A recruiter would spend weeks sourcing a high-level "unicorn" candidate, only to lose them during a 3-day "email ping-pong" session.',
    researchHeading: 'Internal research &amp; surveys',
    research: [
      '<strong>Quantitative:</strong> I used Mixpanel funnel analysis to track the candidate journey. The data was startling: 40% of candidates who reached the "Invite to Interview" stage never actually booked a slot. The drop-off happened exactly at the transition between the recruiter’s email and the calendar view.',
      '<strong>Qualitative:</strong> To define the scope, I conducted a survey with 23 Hiring Managers at Gentis. This was supplemented by a deep-dive interview with 4 Hiring Managers from different experience levels, including Sarra, a Sr. Hiring Manager with 8+ years of experience, to map the current journey.',
    ],
    problemsHeading: 'The core problems identified',
    problems: [
      '<strong>Communication delays:</strong> The "ping-pong" between interviewers and candidates led to slow response times and necessitated frequent manual reminders.',
      '<strong>Schedule misalignment:</strong> Coordinating multiple interviewers without a unified view led to constant conflicts and rescheduling.',
      '<strong>Tool fragmentation:</strong> Recruiters were forced to use Slack, Email, WhatsApp, and phone calls simultaneously, leading to confusion and high risk of miscommunication.',
      '<strong>The legacy UI limitation:</strong> The old design only allowed proposing a single time slot, which was the primary driver of high rescheduling rates and candidate frustration.',
      '<strong>Timezone paralysis:</strong> For international teams, calculating offsets across GMT, EST, and CET led to frequent manual errors and wasted executive hours.',
      '<strong>Cognitive load:</strong> Recruiters were acting as manual "data routers," spending 5+ hours a week just moving calendar slots around.',
    ],
  },

  solution: {
    label: '02 — Solution',
    heading: 'Collaborative Groups &amp; smart scheduling',
    p1: 'Based on the research, I developed a new user flow and concept centred around "Collaborative Groups" to streamline the scheduling process.',
    groupsHeading: 'Collaborative Groups',
    groupsP: 'I designed a system where hiring teams can join a specific group for a vacancy. This centralizes the feedback loop and ensures that all stakeholders have the same view of the candidate’s progress and the team’s availability.',
    engineHeading: '"Find the Best Times" engine',
    engineP: 'A logic layer that automates multi-participant scheduling math:',
    engine: [
      '<strong>Normalization:</strong> Syncs disparate Google/Outlook data into a unified UTC 15-minute grid.',
      '<strong>Privacy-first constraints:</strong> Consumes "Busy" blocks only, respecting global working hours and mandatory buffers.',
      '<strong>Multi-user intersection:</strong> Overlays all participant calendars to identify the "Golden Window" of shared availability.',
      '<strong>Smart filtering:</strong> Automatically discards "time fragments" — gaps technically free but too short for the required interview duration.',
    ],
    archHeading: 'Flexible calendar architecture',
    archP: 'I designed three distinct views to cater to different planning needs:',
    arch: [
      '<strong>Daily:</strong> For granular, hour-by-hour scheduling.',
      '<strong>Weekly:</strong> For mid-term planning.',
      '<strong>Monthly:</strong> For a high-level overview of hiring volume.',
    ],
    syncHeading: 'Sync &amp; real-time alignment',
    syncP: 'I ensured the sync feature provided instant updates across all connected calendars (Google/Outlook), keeping internal teams perfectly aligned and eliminating double-booking errors.',
    notifHeading: 'The notification ecosystem',
    notifP: 'Implemented automated SMS and email triggers for 24-hour and 1-hour pre-interview windows, with the option of adding multiple reminders, reducing no-shows by 46%.',
  },

  adoption: {
    label: '03 — Adoption',
    heading: 'Adoption &amp; change management',
    items: [
      '<strong>Contextual onboarding:</strong> Designed a just-in-time onboarding guide with contextual tooltips to flatten the learning curve without forced manuals.',
      '<strong>Validation via post-task survey:</strong> Achieved a 7.6/10 rating. Qualitative feedback led to the addition of a "Manual Availability Override" for high-priority executive hires.',
    ],
  },

  results: {
    label: '04 — Results',
    heading: 'Results &amp; iteration',
    p1: 'The implementation was tracked via Wiggli’s reporting dashboard for 50+ active recruiters, proving that structural UX changes drive direct business ROI.',
    tableHeaders: ['Metric', 'Before', 'After', 'Impact'],
    rows: [
      { metric: 'Candidate dropout', before: '40%', after: '12%', impact: '70% friction reduction' },
      { metric: 'Scheduling speed', before: '3 days', after: '~15 mins', impact: '90% cycle reduction' },
      { metric: 'Operational ROI', before: '5 hrs/wk', after: '< 1 hr/wk', impact: '20 hrs saved / month' },
      { metric: 'Hiring speed (TTF)', before: '50 days', after: '35 days', impact: '30% faster hiring' },
      { metric: 'Rescheduling rate', before: '23%', after: '6%', impact: 'Significant UX improvement' },
    ],
    measuresHeading: 'Additional measures',
    measures: [
      '<strong>Rescheduling reduction:</strong> Initial testing showed that the multiple-timeslot feature significantly reduced rescheduling rates by providing candidates with more flexibility.',
      '<strong>Positive coordination feedback:</strong> Users reported that the Collaborative Groups feature greatly improved team alignment.',
    ],
    iterationHeading: 'Continuous iteration',
    iterationP: 'Based on user feedback during testing, I identified a new requirement for a "Schedule Availability" feature. This allows recruiters to pre-mark their "free for interview" slots during busy seasons, further reducing friction in the planning stage.',
  },

  conclusion: {
    label: '05 — Conclusion',
    heading: 'What it added up to',
    p1: 'Working on Wiggli allowed me to build a tight feedback loop with the end users at Gentis. By transforming a chaotic journey involving five different communication platforms into a centralized "Collaborative Group" experience, we didn’t just redesign a calendar — we engineered a more efficient way for the organization to grow.',
  },
} as const;
