import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    location: z.string().optional(),
  }),
});

export const collections = {
  events,
};
