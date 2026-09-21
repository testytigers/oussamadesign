import type { CaseStudyFigure, CaseStudySection } from '../data/case-studies';

/** Figures are declared without `src` until the screens exist — the page then
 *  renders a labelled placeholder that still carries the caption. */
const figures: Record<string, CaseStudyFigure> = {
  problemScale: {
    src: '/images/work/matching-problem.webp',
    alt: 'Ink illustration: a recruiter in a suit sits alone on a stool holding one green folder, dwarfed by a wall of stacked paper resumes towering far above them',
    caption: 'One folder read, the rest of the week still stacked against the wall.',
  },
  pipelineBoard: {
    src: '/images/work/matching-pipeline.png',
    alt: 'The Wiggli pipeline board for a Senior Accountant IFRS vacancy, with Application, Internal review, Interview and Contract columns. Every candidate card carries a match score ring — 81%, 52%, 32% — and one card is mid-drag between two stages',
    caption: 'Scores ride on the cards, inside the pipeline recruiters already use. No new screen, no separate tool.',
  },
  candidateCard: {
    src: '/images/work/matching-candidate-card.webp',
    alt: 'The Application column of a Wiggli pipeline holding two candidate cards. Brooklyn Simmons and Andy Agarwal, both data analysts, each with a photo and job title on the top row and, on the row beneath, the application date next to a small score ring reading 81% and 52%. No badge, no label, no recommendation.',
    caption: 'The score sits on the bottom row, beneath the name and photo rather than above them.',
  },
  talentPoolBulkAdd: {
    video: {
      src: '/video/matching-sourcing.mp4',
      poster: '/video/matching-sourcing-poster.webp',
      width: 982,
      height: 720,
    },
    alt: 'Screen recording: on a Java developer vacancy the recruiter opens Qualified Matches, and Wiggli returns a filtered Search candidates list — Languages is English 5/5 and Skills is any of Agile Methodologies 3/5, twelve results — with a checkbox on every row for bulk processing',
    caption: 'Sourcing from the vacancy: one click returns the pool filtered against the posting, every row selectable for bulk processing.',
  },
};

const sections: CaseStudySection[] = [
  {
    label: 'Summary',
    heading: 'A second attempt at a feature clients had already rejected',
    blocks: [
      {
        t: 'p',
        html: 'Recruiters on Wiggli were reading every resume that landed in the "Applied" column of their Kanban board. On a busy posting that meant hundreds of profiles and most of a working week.',
      },
      {
        t: 'p',
        html: 'Wiggli had already tried to fix this once. A matching score shipped, clients said it was wrong, and it was pulled. So the second attempt had two jobs, not one: <strong>rank candidates accurately, and give recruiters a reason to believe the ranking</strong>.',
      },
      {
        t: 'p',
        html: 'I audited the removed algorithm, mapped support tickets, and ran a client survey on how recruiters judge a profile. That became a six-part scoring model driving two flows: inbound applicants scored on arrival and ranked in the Kanban, and outbound sourcing that ranks the talent pool against a vacancy. In both, every score opens into a plain breakdown of how it was reached.',
      },
      {
        t: 'p',
        html: "Measured in Wiggli's super admin analytics, screening time fell <strong>65% for power users and 40% for regular users</strong>.",
      },
      {
        t: 'note',
        html: 'The gap is the more useful finding. The system does not hand back a fixed number of hours. It pays off in proportion to how much of it you actually use.',
      },
    ],
  },

  {
    label: '01 — The problem',
    heading: 'Two hundred profiles, unsorted, and one week to read them',
    blocks: [
      { t: 'h3', text: 'What recruiters were doing' },
      {
        t: 'p',
        html: 'Auto-rejection filters caught the obvious misses on location and knockout questions. Everything else, often 200 or more profiles, landed unsorted in one column.',
      },
      {
        t: 'flow',
        tone: 'problem',
        lanes: [
          {
            steps: [
              'Candidate applies',
              'Auto-rejection filters (location, knockout questions)',
              '200+ unsorted candidates in the "Applied" column',
              '12 to 18 hours of manual scanning, client-reported',
              'Fatigue, and strong candidates missed',
            ],
          },
        ],
      },
      {
        t: 'p',
        html: 'Support tickets and account management notes kept returning to the same complaint: good people were getting buried. The cost was not only time. It was never seeing the best applicant in the pile.',
      },

      { t: 'figure', key: 'problemScale' },

      { t: 'h3', text: 'Why the first attempt failed' },
      {
        t: 'p',
        html: 'Engineering and I read the removed algorithm together. Two structural faults:',
      },
      {
        t: 'ol',
        items: [
          '<strong>It counted keywords.</strong> A profile matched a term or it did not. No sense of how well, no grouping by functional domain, no read on language or career progression.',
          '<strong>It treated every requirement as equal.</strong> A must-have skill and a nice-to-have scored the same, so candidates missing the critical thing still floated to the top. That is what clients experienced as "inaccurate."',
        ],
      },

      { t: 'h3', text: 'The constraint that shaped everything' },
      {
        t: 'note',
        html: 'A ranking recruiters do not trust is worse than no ranking. They had been burned once already, so any score we shipped would be read with suspicion, and one visibly wrong ordering would confirm it. This drove the design more than the math did.',
      },
    ],
  },

  {
    label: '02 — Research',
    heading: 'Asking 2,000 recruiters how they actually judge a profile',
    blocks: [
      {
        t: 'p',
        html: '<strong>Support and account data.</strong> I grouped recurring complaints and requests from support tickets and account manager notes to find where evaluation actually broke down, and to understand what "inaccurate" had meant to clients in practice.',
      },
      {
        t: 'p',
        html: '<strong>Client survey.</strong> A structured survey went to roughly 2,000 active hiring clients asking how they weigh candidate attributes when judging a profile. <strong>243 replied</strong>, a response rate of about 12%.',
      },
      {
        t: 'p',
        html: "The responses, read against the support ticket patterns, gave us the six things recruiters consistently evaluate and a rough sense of their order. The final weights were set by me and the product director, reconciling the survey against what we could see in Wiggli's own platform analytics.",
      },
      {
        t: 'table',
        head: ['Pillar', 'Weight', 'What it covers'],
        align: ['left', 'right', 'left'],
        rows: [
          ['Skills', '40%', 'Hard skills, core tools, technical domain'],
          ['Functions', '25%', 'Primary functional domain and adjacent responsibilities'],
          ['Experience', '15%', 'Years of tenure, adjusted for industry relevance'],
          ['Education', '10%', 'Degree level and field relevance'],
          ['Seniority', '5%', 'Title and level parity'],
          ['Languages', '5%', 'Required and supplementary fluency'],
        ],
      },
    ],
  },

  {
    label: '03 — Design decisions',
    heading: 'Four choices did most of the work',
    blocks: [
      {
        t: 'p',
        html: '<strong>Weights trace back to recruiters, not to us alone.</strong> When a client argues with a score, the answer is that this reflects how their peers said they evaluate people, and here is the breakdown. That is a very different conversation from defending a black box.',
      },
      {
        t: 'p',
        html: '<strong>Must-haves are separated from nice-to-haves.</strong> Inside Skills and Functions, critical items carry 70% of the pillar and the rest carry 30%. This targets the exact failure that killed version one.',
      },
      {
        t: 'p',
        html: '<strong>Every score opens.</strong> No number appears without a route to its parts.',
      },
      {
        t: 'p',
        html: '<strong>The score orders, the recruiter decides.</strong> Nothing is auto-rejected on score and nothing is hidden. The ranking changes reading order and nothing else. The one place this principle bends is bulk selection by score threshold in the sourcing flow, which is discussed honestly further down rather than glossed over.',
      },
    ],
  },

  {
    label: '04 — The scoring model',
    heading: 'Six pillars, weights summing to 100',
    blocks: [
      { t: 'h3', text: 'Where the input numbers come from' },
      {
        t: 'p',
        html: 'Every formula below operates on a 0 to 1 rating per item. Those ratings are declared by people, not inferred by the system, and that is the biggest single difference from the version that was removed.',
      },
      {
        t: 'p',
        html: '<strong>Skill ratings</strong> are self-reported. A candidate who signs up to Wiggli rates their own skills on their profile. A candidate already in the pool was asked the same question during a phone screen: rate your wireframing from 1 to 5. The recruiter records that answer, they do not assign it, and recruiters cannot edit a candidate&rsquo;s rating.',
      },
      {
        t: 'p',
        html: '<strong>Industry and field relevance</strong> are marked by whoever publishes the vacancy. The system does not try to work out whether fintech is adjacent to insurance. The recruiter who knows the sector decides, per posting. That keeps the subjective call with the person who has the context, and it means the reason for a relevance multiplier can always be pointed at.',
      },
      {
        t: 'p',
        html: 'Version one read CV text and counted keyword hits, which is a guess about a candidate dressed up as a measurement. Building on declared ratings meant the score rested on something a person had actually stated, which is both more defensible and far easier to explain when a recruiter disagrees with a result.',
      },

      { t: 'h3', text: 'How a score is built' },
      {
        t: 'p',
        html: 'Skills and Functions share a shape. Score each item from 0 to 1, average within the group, weight must-haves at 70% and the rest at 30%, then apply the pillar weight.',
      },
      {
        t: 'formula',
        items: [
          { out: 'Skill Score', expr: '[ (avg must-have x 0.70) + (avg other x 0.30) ] x 0.40' },
          { out: 'Function Score', expr: '[ (avg core x 0.70) + (avg secondary x 0.30) ] x 0.25' },
        ],
      },
      { t: 'p', html: 'The remaining four are multipliers against a lookup.' },
      {
        t: 'formula',
        items: [
          {
            out: 'Experience',
            expr: 'min(1.0, candidate years / required years) x industry multiplier x 0.15',
            legend: ['Industry: direct 1.0, adjacent 0.8, unrelated 0.5'],
          },
          {
            out: 'Education',
            expr: 'degree multiplier x field multiplier x 0.10',
            legend: [
              "Degree: master's or PhD 1.0, bachelor's 0.8, associate or bootcamp 0.6",
              'Field: direct 1.0, related 0.7, unrelated 0.4',
            ],
          },
          { out: 'Seniority', expr: 'alignment matrix value x 0.05' },
          {
            out: 'Languages',
            expr: '(sum of proficiency multipliers / required languages) x 0.05',
            legend: ['Proficiency: native 1.0, professional 0.8, intermediate 0.5, basic 0.2'],
          },
        ],
      },

      { t: 'h3', text: 'Seniority alignment matrix' },
      {
        t: 'p',
        html: "Built with the product director using Wiggli's platform analytics.",
      },
      {
        t: 'table',
        head: ['Job level', 'Senior candidate', 'Mid-level', 'Junior', 'Fresh graduate'],
        align: ['left', 'right', 'right', 'right', 'right'],
        rows: [
          ['Senior', '1.00', '0.75', '0.25', '0.25'],
          ['Mid-level', '0.75', '1.00', '0.50', '0.50'],
          ['Junior', '0.50', '0.50', '1.00', '0.75'],
          ['Fresh graduate', '0.25', '0.25', '0.75', '1.00'],
        ],
      },
      {
        t: 'p',
        html: 'The matrix is deliberately not symmetrical. A senior candidate applying to a junior job scores 0.50, while a junior applying to a senior job scores 0.25. Overqualified is a smaller problem than underqualified, and the numbers say so.',
      },

      { t: 'h3', text: 'How missing skills are penalised' },
      {
        t: 'p',
        html: 'A missing must-have scores 0 for that item and drags down the 70% block it sits in. The penalty is proportional rather than a hard gate, and it is large.',
      },
      {
        t: 'p',
        html: 'In the worked example below there are four must-have skills, so each one is worth up to <strong>7 points of the final 100</strong>. Each of the five other skills is worth up to 2.4. A single missing must-have costs roughly three times what a missing nice-to-have costs, which is the whole point of the 70/30 split and the thing version one got wrong.',
      },
      {
        t: 'p',
        html: 'A candidate can still rank respectably while missing one must-have. That is intentional for a first release, because job postings list must-haves aspirationally and a hard gate would empty the board. The next version hands that decision to the recruiter through a strictness control.',
      },

      { t: 'h3', text: 'Worked example' },
      { t: 'p', html: 'One candidate, a senior product design role, scored end to end.' },
      {
        t: 'table',
        head: ['Pillar', 'Inputs', 'Result'],
        align: ['left', 'left', 'right'],
        rows: [
          [
            'Skills (40%)',
            'Must-have: journey mapping 0.8, quant surveys 0.6, qual surveys 0.8, contextual inquiry 0.0. Other: persona 0.8, design system 0.6, Figma 0.8, UX writing 1.0, accessibility 0.0',
            '23.08%',
          ],
          ['Functions (25%)', 'Core: product design 0.90. Secondary: frontend systems 0.60', '20.25%'],
          ['Experience (15%)', '4 years against a 5-year requirement (0.80), adjacent industry (0.80)', '9.60%'],
          ['Education (10%)', "Bachelor's (0.80) in a direct field (1.0)", '8.00%'],
          ['Seniority (5%)', 'Mid-level candidate, senior role (0.75)', '3.75%'],
          ['Languages (5%)', 'Native English (1.0), intermediate French (0.5)', '3.75%'],
          ['<strong>Total</strong>', '', '<strong>68.43%</strong>'],
        ],
      },
      {
        t: 'p',
        html: 'Skills arithmetic: must-have (0.8 + 0.6 + 0.8 + 0) / 4 = 0.55, times 0.70 = 0.385. Other (0.8 + 0.6 + 0.8 + 1.0 + 0) / 5 = 0.64, times 0.30 = 0.192. Combined 0.577, times 0.40 = 23.08%.',
      },
    ],
  },

  {
    label: '05 — The interface',
    heading: 'The score is half the product. The other half is whether a recruiter believes it',
    blocks: [
      {
        t: 'p',
        html: 'Most of the engine is arithmetic nobody ever sees. The design work was deciding what to bring up out of it, and where. The same scoring model drives two different jobs, and they needed different interfaces.',
      },

      { t: 'h3', text: 'Flow 1: inbound applicants' },
      {
        t: 'p',
        html: 'Candidates who apply to a vacancy are scored on arrival. The "Applied" column simply comes back ranked highest to lowest.',
      },
      {
        t: 'p',
        html: 'No new screen, no separate tool, no extra step. The column recruiters already lived in changed order and nothing else. This is the flow that attacks the original problem: hundreds of unsorted profiles and a week of reading.',
      },
      { t: 'figure', key: 'pipelineBoard' },

      { t: 'h3', text: 'Flow 2: sourcing from the talent pool' },
      {
        t: 'p',
        html: 'The second job is the opposite direction. Instead of waiting for applicants, the recruiter goes looking.',
      },
      {
        t: 'p',
        html: "From the top of a vacancy, <em>find best matches</em> runs the same six pillars across Wiggli's talent pool and returns candidates ranked against that specific posting. The recruiter then adds people to the vacancy: one at a time, as a multi-select group, or by filtering to a score threshold and adding everyone above it in one action.",
      },
      {
        t: 'p',
        html: 'That threshold filter is the most consequential control in the product. Set it to 70% and add the lot, and the score has stopped ordering a list and started forming a shortlist.',
      },
      { t: 'figure', key: 'talentPoolBulkAdd' },

      { t: 'h3', text: 'The wait' },
      {
        t: 'p',
        html: 'Scoring the talent pool against a vacancy takes a few seconds, so <em>find best matches</em> leads to a loading state rather than an instant result.',
      },
      {
        t: 'p',
        html: 'This is the weakest surface in the product and the first thing I would rebuild. A plain spinner spends several seconds of completely held attention saying nothing, on the one feature that most needs to explain itself. Those same seconds could name what is being weighed as it happens, which would do real work on the trust problem for very little cost. It was visible at the time and lost to scope.',
      },

      { t: 'h3', text: 'What the card does not do' },
      {
        t: 'p',
        html: "No traffic lights, no “recommended” badge, no auto-rejection on score. The number sits beside the candidate's name, title and tenure without outranking them. Restraint here was deliberate. A tool that looks like it is deciding invites recruiters to either over-trust it or reject it outright, and we had already seen what rejection costs.",
      },
      { t: 'figure', key: 'candidateCard' },

      { t: 'h3', text: 'New workflow' },
      {
        t: 'flow',
        tone: 'solution',
        lanes: [
          {
            title: 'Inbound',
            steps: [
              'Candidate applies',
              'Auto-rejection filters (location, knockout questions)',
              'Six-pillar scoring on arrival',
              '"Applied" column ranked high to low, every score openable',
              'Recruiter reads the top and still decides',
            ],
          },
          {
            title: 'Outbound',
            steps: [
              'Recruiter opens a vacancy',
              'Clicks "find best matches"',
              'Six-pillar scoring across the talent pool, a few seconds',
              'Ranked results, every score openable',
              'Add one by one, multi-select, or filter by score and bulk add',
              'Candidates land in the Kanban',
            ],
          },
        ],
      },
    ],
  },

  {
    label: '06 — Results',
    heading: 'Return scales with adoption depth',
    blocks: [
      { t: 'h3', text: 'Screening time, inbound flow' },
      {
        t: 'p',
        html: "Measured in Wiggli's super admin dashboard analytics, covering the inbound flow only.",
      },
      {
        t: 'table',
        head: ['Segment', 'Reduction in screening time'],
        align: ['left', 'right'],
        rows: [
          ['Power users', '<strong>65%</strong>'],
          ['Regular users', '<strong>40%</strong>'],
        ],
      },
      {
        t: 'p',
        html: 'Power users are defined by how many jobs they publish per week and how much of the platform they use, particularly the Kanban board. Before the change, clients reported spending 12 to 18 hours per posting reading through the "Applied" column.',
      },
      {
        t: 'p',
        html: 'The sourcing flow was not instrumented, so there is no equivalent figure for it. That is a gap, not a result.',
      },
      {
        t: 'note',
        html: 'The gap between the segments is the real finding. A recruiter who works the ranked column and opens score breakdowns gets most of their week back. A recruiter who still scrolls top to bottom gets less. That is not noise in the measurement, it is a product signal: return scales with adoption depth. It argues for better onboarding and for surfacing the breakdown more prominently, not for changing the algorithm.',
      },

      { t: 'h3', text: 'What recruiters asked for next' },
      {
        t: 'p',
        html: 'The qualitative response was positive overall, and the shape of the requests mattered more than the tone of them.',
      },
      {
        t: 'p',
        html: 'Recruiters did not ask us to fix the score. They asked to <em>adjust</em> it. Some wanted it stricter, so the final list came back shorter and harder to qualify for. Some wanted it softer, so fewer candidates were pushed down for a single missing requirement. Others wanted to move the weight of specific elements to match how they actually hire.',
      },
      {
        t: 'p',
        html: 'That is the clearest evidence the explainability worked. Version one produced one kind of feedback: the algorithm is wrong. Version two produced arguments about parameters. A recruiter can only ask for a weight change if they understood the model well enough to disagree with a specific part of it. The breakdown turned an unarguable number into an arguable one, which was the point.',
      },
      {
        t: 'p',
        html: 'It is indirect evidence rather than a usability test, and worth labelling as such. Nobody sat with recruiters to watch them read a breakdown.',
      },
      {
        t: 'note',
        html: 'The disagreement is itself a finding. Recruiters split on whether the system should be stricter or softer, and both camps were right about their own hiring. No single weighting serves an agency hiring welders and a SaaS company hiring engineers. That is what turned configurable weights and a strictness control from a nice-to-have into the defining feature of the second version.',
      },
    ],
  },

  {
    label: '07 — Limits worth naming',
    heading: 'What this system does not do',
    blocks: [
      {
        t: 'p',
        html: '<strong>Skills are self-reported, and they carry 40% of the score.</strong> Every skill number in the model is a candidate&rsquo;s own rating of themselves, whether typed into a signup form or given to a recruiter on a phone call. Nothing checks it against work history, a test, or a reference.',
      },
      {
        t: 'p',
        html: 'That was a deliberate trade for coverage. Verified skill data would be better and barely exists at the scale a talent pool needs. But it means a confident self-rater ranks above a modest one of equal ability, and the model has no way to tell them apart. Skills being the heaviest pillar makes this the largest single source of error in the system.',
      },
      {
        t: 'p',
        html: 'Whether the same question returns the same answer on a live call and in a signup form was never measured. It is worth knowing. The fix is not to abandon self-rating, it is to give the score a second opinion: corroborate claimed skills against work history, or mark a rating that has nothing supporting it so the recruiter can weigh it accordingly. That is the highest-value change I would make to this system.',
      },
      {
        t: 'p',
        html: '<strong>The model encodes stated preference, not hiring outcomes.</strong> The weights reflect what recruiters say matters, which is not the same as what predicts a good hire. We never checked whether high scorers were interviewed more, hired more, or performed better. That needs outcome data across several hiring cycles. Shipping on stated preference was the right call for a first release, because the alternative was shipping nothing while waiting for data that did not exist. But it is a limitation, not a feature.',
      },
      {
        t: 'p',
        html: '<strong>The survey sample selected itself.</strong> 243 of roughly 2,000 replied. Clients who answer a survey about hiring process are not a random sample of clients, and they skew toward the engaged.',
      },
      {
        t: 'p',
        html: '<strong>Education and language are scored inputs in a ranking of people.</strong> Degree tier weights formal education over self-taught routes. Language multipliers affect non-native speakers. Both are defensible for many roles and both can produce adverse impact at scale.',
      },
      {
        t: 'note',
        html: 'In the inbound flow this is contained, because the score orders a list that a recruiter still reads. In the sourcing flow it is not. Filtering the talent pool to 70% and adding everyone above it in one action means nobody below the line is ever seen, and no human looked at the cut. That is the score making a shortlisting decision at scale, which is a different risk from the score suggesting a reading order.',
      },
      {
        t: 'p',
        html: 'Two things would help and neither was built: show how many candidates a threshold excludes before the recruiter commits to it, and run an adverse-impact review across the education, language and seniority inputs. The bulk action is a real efficiency gain and I would not remove it. It needs guardrails it does not have.',
      },
      {
        t: 'p',
        html: '<strong>Must-haves are averaged, not gated.</strong> The strictness control in the next version moves that choice to the recruiter, which is better than either default.',
      },
    ],
  },

  {
    label: '08 — What comes next',
    heading: 'Where this goes',
    blocks: [
      {
        t: 'ul',
        items: [
          '<strong>Recruiter-configurable weights and strictness.</strong> This came directly from the feedback above. The next version lets clients set the weight of each element against their own priorities, and set how strictly the rules are enforced, with stricter settings returning a shorter and harder-qualified list. It also resolves the must-have averaging question, by moving the choice between a soft penalty and a hard gate to the person who knows the role.',
          '<strong>Validation against outcomes.</strong> Test the weights against who actually got hired, rather than against what recruiters said they valued.',
          '<strong>Adverse-impact review</strong> across the education, language and seniority inputs, and a count of who a score threshold excludes before a recruiter bulk-adds on it.',
          '<strong>Corroboration for self-rated skills,</strong> checking claimed ratings against work history and flagging the ones nothing supports.',
          '<strong>A confidence signal on thin profiles,</strong> so a 70% built from a two-line CV does not read the same as a 70% built from a complete one.',
          '<strong>A wait state that explains itself,</strong> replacing the spinner with something that shows what is being weighed while the scoring runs.',
        ],
      },
    ],
  },
];

export const matchingEn = {
  metaTitle: 'Ranking 200 applicants without losing recruiter trust | Oussama Bougnouch',
  metaDescription:
    'A six-pillar, fully explainable candidate matching score for the Wiggli ATS. Screening time fell 65% for power users and 40% for regular users.',
  eyebrow: 'Case study',
  title: "Ranking 200 applicants without losing the recruiter's trust",
  lede: 'Principal Product Architect and UX Lead at Wiggli — rebuilding a matching score that clients had already rejected once, and making every number it produces open to inspection.',
  chips: ['Screening −65% power users', '−40% regular users', '243 survey responses'],
  meta: [
    { label: 'Role', value: 'Principal Product Architect and UX Lead' },
    { label: 'Team', value: 'Product Director, backend engineering, customer support, account management' },
    { label: 'Scope', value: 'Research, scoring model design, interface and workflow design' },
    { label: 'Platform', value: 'Wiggli ATS' },
  ],
  card: {
    title: 'Wiggli Candidate Matching',
    description:
      'A matching score clients had already rejected once, rebuilt so every number opens into the six pillars behind it. Screening time fell 65% for power users.',
    chips: ['Screening −65%', 'Six-pillar model', 'Explainable by design'],
    imageAlt: 'Wiggli candidate matching case study',
  },
  figures,
  sections,
};
