import { z, defineCollection } from "astro:content";

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
};
