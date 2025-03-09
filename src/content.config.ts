import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const collections = {
  articles: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      topic: z.string(),
      series: z.string().optional(),
    }),
  }),
  kilobits: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      language: z.string(),
    }),
  }),
};
