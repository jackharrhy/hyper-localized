import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  collections: {
    news: collection({
      label: "News",
      slugField: "title",
      path: "src/content/news/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tag",
          itemLabel: (props) => props.value,
        }),
        image: fields.text({
          label: "Image URL",
        }),
      },
    }),
    videos: collection({
      label: "Videos",
      slugField: "title",
      path: "src/content/videos/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
        image: fields.text({
          label: "Image URL",
        }),
        youtubeId: fields.text({
          label: "YouTube ID",
        }),
      },
    }),
  },
});
