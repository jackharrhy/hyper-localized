import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { BlogPost } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { blogPosts: BlogPost[] };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    blogPosts: await db.blogPost.findMany(),
  };
  return json(data);
};

export default function Projects() {
  const { blogPosts } = useLoaderData<LoaderData>();
  return (
    <>
      <Link to="..">
        <p>back</p>
      </Link>
      <ul>
        {blogPosts.map(({ slug, title }) => (
          <li key={slug}>{title}</li>
        ))}
      </ul>
    </>
  );
}
