import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getBlogPosts().map((data) => {
      return db.blogPost.create({ data });
    })
  );

  await Promise.all(
    getProjects().map((data) => {
      return db.project.create({ data });
    })
  );
}

seed();

function getBlogPosts() {
  return [
    {
      slug: "hello-world",
      title: "Hello World",
      content: "This is the blog of james",
    },
    {
      slug: "second-post",
      title: "Second Post",
      content: "This is second post in the blog of james",
    },
  ];
}

function getProjects() {
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
