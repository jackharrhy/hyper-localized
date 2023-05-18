import { z, defineCollection } from "astro:content";

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
  }),
});

const videosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string(),
  }),
});

const shopCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
  videos: videosCollection,
  shop: shopCollection,
};
