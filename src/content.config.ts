import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().max(70),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'El slug debe usar minúsculas, números y guiones.'),
    description: z.string().max(160),
    metaTitle: z.string().max(70).optional(),
    metaDescription: z.string().max(160).optional(),
    category: z.enum(['ia', 'software', 'productividad', 'herramientas', 'tutoriales', 'comparativas']),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    related: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
