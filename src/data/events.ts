/** Language-neutral event data. Anything a translator would touch lives in
 *  src/i18n/events.*.ts instead, keyed by the same slugs. */

export interface PhotoMedia { slug: string; w: number; h: number; }

export interface EventData {
  slug: string;
  badge: string;
  cardImage: string;
  location: 'coworking' | 'workshopSpace';
  /** ISO date, e.g. '2025-11-08'. Schema.org requires `startDate` on an Event,
   *  so the page falls back to a dateless CreativeWork until this is filled in.
   *  Adding it upgrades the page to a rich `EducationalEvent` result. */
  date?: string;
  /** Subjects the talk covers — feeds `about`/`keywords` in structured data. */
  topics: string[];
  /** Slide headings. Deliberately NOT translated — they label slide images
   *  that are themselves in English, so a French caption would describe
   *  something the reader cannot see. */
  slideTitles: string[];
  photos: PhotoMedia[];
}

const portrait = (slug: string): PhotoMedia => ({ slug, w: 720, h: 1280 });

export const events: EventData[] = [
  {
    slug: 'beneath-the-skull-of-ai',
    badge: 'Part 1',
    cardImage: '/events/beneath-the-skull-of-ai/the-shrink-ray.webp',
    location: 'coworking',
    topics: [
      'Large Language Models',
      'Local LLM Deployment',
      'Model Quantization',
      'Mixture of Experts',
      'GPU and vRAM requirements',
      'Context windows',
      'Ollama',
      'llama.cpp',
    ],
    slideTitles: [
      'Beneath the Skull of AI: How It Actually Works (Part 1)',
      'The Great AI Shakeout',
      "Let's get started",
      'The Crossroads: cloud AI or local AI',
      'The Model (LLM)',
      'Choosing your model',
      'Large models',
      'Medium models',
      'Small models',
      'Mixture of Experts (MoE)',
      'Estimated sizes of popular AI models',
      'The Engine',
      'The Engine (the seat)',
      'llama.cpp and Ollama',
      'Hardware prerequisites',
      'RAM vs vRAM',
      'Unified Memory Architecture (UMA)',
      'The RAM allocation reality check',
      'The weight of the raw brains',
      'The GPU muscle',
      'The bandwidth',
      'The AI speed formula',
      'Tokens/s running Qwen 3.6 35B A3B',
      'Tokens/s — unquantized, the answer',
      'Tokens/s — quantized, the answer',
      'The Quantization',
      'The mathematical shrink ray',
      'How precision scaling works',
      'Qwen3.6-35B-A3B quantized versions',
      'Estimated precision loss per quantization',
      'The Context',
      'Understanding conversation overhead',
      'Choosing the right context size',
      'Context compression',
      'Context quantization',
      "What's coming in Part 2",
    ],
    photos: [
      portrait('opening-the-room'),
      portrait('medium-models'),
      portrait('mixture-of-experts'),
      portrait('the-shrink-ray'),
      portrait('precision-scaling'),
      portrait('the-destruction-zone'),
      portrait('quantized-versions'),
      portrait('kv-cache'),
      portrait('open-discussion'),
    ],
  },
  {
    slug: 'introduction-to-agentic-ai',
    badge: 'Part 2',
    cardImage: '/events/introduction-to-agentic-ai/whats-the-difference.webp',
    location: 'workshopSpace',
    topics: [
      'Agentic AI',
      'AI Agents',
      'Large Language Models',
      'Tool use',
      'Agent architecture',
      'Prompt engineering',
    ],
    slideTitles: [
      'Beneath the Skull of AI: Giving the Brain a Body (Part 2)',
      'Quick Recap of Part 1',
      "What You'll Learn Today",
      'From LLM to Agent',
      "What's the Difference?",
      'The Loop',
      'Tools: How The LLM Gets Hands',
      'Why Agents Fail',
      'The Agent That Lied to Me',
      'The Golden Rule: Trust, but Verify',
      'The Building Blocks of an AI Agent',
      'The 4 Parts of Every Agent',
      'The Personality File SOUL.md',
      'The Skills SKILL.md',
      'Meet Hermes',
      'Hermes: A Complete AI Agent',
      'Hermes: How it works',
      'Hermes Skills vs Tools',
      'Hermes Skills vs Tools — the full list',
      'Watch Hermes Work',
    ],
    photos: [
      { slug: 'group-photo', w: 1280, h: 960 },
      { slug: 'setup', w: 960, h: 1280 },
      portrait('whats-the-difference'),
      portrait('explaining-agents'),
      portrait('full-room'),
      portrait('live-presentation'),
      portrait('walkthrough'),
      portrait('hermes-architecture'),
      portrait('attendees'),
      portrait('audience-engagement'),
      portrait('open-floor'),
      portrait('interactive-session'),
      portrait('qa-session'),
      portrait('discussion'),
      portrait('llm-vs-agents'),
      portrait('from-the-back'),
      portrait('after-session'),
      portrait('quick-recap'),
      portrait('venue'),
    ],
  },
];

export const eventBySlug = (slug: string): EventData => {
  const found = events.find((e) => e.slug === slug);
  if (!found) throw new Error(`Unknown event slug: ${slug}`);
  return found;
};
