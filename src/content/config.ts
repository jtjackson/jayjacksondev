import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Technical', 'Poetry', 'Personal', 'Career', 'Accessibility']),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    readTime: z.number().optional(),
  }),
});

export const collections = { blog };
