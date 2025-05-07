import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const collections = {
  articles: defineCollection({
    loader: glob({ pattern: "**/*.(mdx)", base: "./src/pages/articles" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      topic: z.string(),
      series: z.string().optional(),
      status: z.enum(["Publish", "Draft"]),
    }),
  }),
  kilobits: defineCollection({
    loader: glob({ pattern: "**/*.(mdx)", base: "./src/pages/kilobits" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      language: z.string(),
      series: z.string().optional(),
      status: z.enum(["Publish", "Draft"]),
    }),
  }),
};
