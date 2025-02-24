import { z, defineCollection } from "astro:content";

const articleCollection = defineCollection({
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
