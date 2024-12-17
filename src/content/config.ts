import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const i18nSchema = z.object({
  en: z.string(),
  zh: z.string(),
});

const contributors = defineCollection({
  type: 'data',
  schema: z.object({
    nickname: i18nSchema,
    github: z.object({
      id: z.number(),
      username: z.string(),
    }),
  }),
});

const tagTypes = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    text: i18nSchema,
  }),
});

const tags = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    text: i18nSchema,
    type: z.string(),
  }),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: i18nSchema,
    description: i18nSchema.optional(),
    owners: z.array(z.string()),
    repo: z.union([
      z.string().url(),
      z.object({
        owner: z.string(),
        name: z.string(),
      }),
    ]).optional(),
    homepage: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const posts = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const docs = defineCollection({ schema: docsSchema() });

export const collections = {
  contributors,
  tagTypes, tags,
  projects,
  posts,
  docs,
};
