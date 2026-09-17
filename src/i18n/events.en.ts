export const eventsEn = {
  'beneath-the-skull-of-ai': {
    metaTitle: 'Beneath the Skull of AI | Oussama Bougnouch',
    metaDescription:
      'Workshop on how AI actually works under the hood: picking a model, the engine that runs it, hardware limits, quantization and context.',
    eyebrow: 'Workshop · Part 1',
    title: 'Beneath the Skull of AI',
    lede:
      'How an LLM actually works under the hood — choosing a model, the engine that runs it, the hardware that limits it, and the quantization and context tricks that make a large model fit on a laptop.',
    cardDescription:
      'How an LLM actually works under the hood — picking a model, the engine that runs it, the hardware that limits it, and the quantization and context tricks that make a large model fit on a laptop.',
    /* Home-page teaser, kept under 120 characters so the two cards stay
       the same height in the grid. */
    shortDescription:
      'How an LLM actually works under the hood — picking a model, the engine that runs it, quantization and context.',
    deckLabel: 'Beneath the Skull of AI — workshop slides',
    photos: {
      'opening-the-room': {
        caption: 'Opening the room',
        alt: 'Oussama standing and gesturing while addressing attendees, a laptop set up on the table behind him',
      },
      'medium-models': {
        caption: 'Which models fit on a laptop',
        alt: 'Oussama standing beside the screen showing the Medium models comparison table of Gemma and Qwen releases',
      },
      'mixture-of-experts': {
        caption: 'Mixture of Experts',
        alt: 'Oussama presenting in front of the Mixture of Experts slide, explaining how a router picks which specialists answer',
      },
      'the-shrink-ray': {
        caption: 'The mathematical shrink ray',
        alt: 'Oussama mid-explanation beside the Mathematical Shrink Ray slide introducing quantization',
      },
      'precision-scaling': {
        caption: 'Finding the sweet spot',
        alt: 'Oussama pointing at the How Precision Scaling Works slide, at the Q5 and Q4 sweet-spot bullet',
      },
      'the-destruction-zone': {
        caption: 'Down to the destruction zone',
        alt: 'Oussama with arm extended toward the precision-scaling illustration showing q8 through q1 shrinking in size',
      },
      'quantized-versions': {
        caption: '53 GB of vRAM saved',
        alt: 'Oussama pointing at the quantized-versions table for Qwen3.6-35B-A3B, comparing the 16-bit build against a 3-bit one',
      },
      'kv-cache': {
        caption: 'The KV cache',
        alt: 'Oussama pointing at the Understanding Conversation Overhead slide explaining how the KV cache grows with the conversation',
      },
      'open-discussion': {
        caption: 'Questions from the floor',
        alt: 'An attendee seated in the co-working space gesturing while making a point during the discussion',
      },
    },
  },

  'introduction-to-agentic-ai': {
    metaTitle: 'Introduction to Agentic AI | Oussama Bougnouch',
    metaDescription: 'Workshop gallery on AI agents and LLMs',
    eyebrow: 'Workshop · Part 2',
    title: 'Introduction to Agentic AI',
    lede:
      'A hands-on workshop exploring the difference between traditional LLMs and AI agents, covering practical applications and real-world implementations.',
    cardDescription:
      'A hands-on workshop exploring the difference between traditional LLMs and AI agents, covering practical applications and real-world implementations.',
    /* Home-page teaser, kept under 120 characters so the two cards stay
       the same height in the grid. */
    shortDescription:
      'From LLM to agent — the reasoning loop, the tools that give it hands, and the reasons agents fail in practice.',
    deckLabel: 'Introduction to Agentic AI — workshop slides',
    photos: {
      'group-photo': { caption: 'Everyone who showed up', alt: 'Group photo of all workshop attendees in front of the Hermes Agent slide at the end of the session' },
      setup: { caption: 'Setting up before the room filled', alt: 'Oussama preparing the workshop at a desk with a laptop, keyboard and mouse before attendees arrive' },
      'whats-the-difference': { caption: "What's the difference?", alt: 'Oussama presenting beside a screen comparing LLMs and AI agents point by point' },
      'explaining-agents': { caption: 'Explaining what makes an agent an agent', alt: 'Oussama speaking mid-explanation to seated attendees, an open laptop in the foreground' },
      'full-room': { caption: 'Slides up, room full', alt: 'Wide view of the workshop room from the back, attendees seated around tables facing the projector screen' },
      'live-presentation': { caption: 'Live presentation', alt: 'Oussama presenting to the room during the live walkthrough' },
      walkthrough: { caption: 'Walking through the flow', alt: 'Oussama standing between the tables walking attendees through an agent workflow' },
      'hermes-architecture': { caption: 'Hermes architecture', alt: 'Slide showing how the Hermes agent works, presented to the room' },
      attendees: { caption: 'Attendees', alt: 'Side view of attendees seated at long wooden tables listening, a mural on the far wall' },
      'audience-engagement': { caption: 'Audience engagement', alt: 'Attendees following along during the workshop' },
      'open-floor': { caption: 'Opening the floor', alt: 'Oussama standing with arms crossed listening to the room during an open discussion' },
      'interactive-session': { caption: 'Interactive session', alt: 'Attendees taking part in the interactive portion of the workshop' },
      'qa-session': { caption: 'Taking questions', alt: 'Oussama gesturing toward an attendee while answering a question during the Q&A' },
      discussion: { caption: 'Group discussion', alt: 'Oussama facing the room during a group discussion, attendees seated at tables around him' },
      'llm-vs-agents': { caption: 'LLM vs agents', alt: 'Slide contrasting what a traditional LLM can do against what an agent can do' },
      'from-the-back': { caption: 'From the back of the room', alt: 'View over attendees shoulders toward the presenter and projector screen' },
      'after-session': { caption: 'Conversations after the session', alt: 'Small group of attendees talking with Oussama around a table after the workshop ended' },
      'quick-recap': { caption: 'Quick recap', alt: 'Recap slide summarising the key takeaways of the workshop' },
      venue: { caption: 'The venue', alt: 'The co-working space that hosted the workshop' },
    },
  },
} as const;
