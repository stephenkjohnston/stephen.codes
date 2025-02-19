import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const articleCollection = defineCollection({
  // loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  type: "content",
  schema: z.object({
    title: z.string(),
    url: z.string(),
    pubDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    tag: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  articles: articleCollection,
};
