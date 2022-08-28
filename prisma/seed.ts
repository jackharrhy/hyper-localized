import fs from "fs/promises";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    (
      await getBlogPosts()
    ).map((data) => {
      return db.blogPost.create({ data });
    })
  );

  await Promise.all(
    (
      await getProjects()
    ).map((data) => {
      return db.project.create({ data });
    })
  );
}

seed();

async function getBlogPosts() {
  return [
    {
      slug: "how-to-write-your-first-blog-post",
      title: "how to write your first blog post",
      content: await fs.readFile("./prisma/seed-data/blog-01.md", "utf8"),
    },
    {
      slug: "second-post",
      title: "Second Post",
      content: "This is second post in the blog of james",
    },
  ];
}

async function getProjects() {
  return [
    {
      slug: "video-project",
      title: "Video Project",
      content: "Context behind video project",
    },
    {
      slug: "film-project",
      title: "Film Project",
      content: "Context behind film project",
    },
  ];
}
