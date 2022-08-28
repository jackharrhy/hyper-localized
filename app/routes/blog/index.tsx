import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { BlogPost } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { blogPosts: BlogPost[] };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    blogPosts: await db.blogPost.findMany({ orderBy: { createdAt: "asc" } }),
  };
  return json(data);
};

export default function Blog() {
  const { blogPosts } = useLoaderData<LoaderData>();
  return (
    <>
      <Link to="/">
        <p className="text-lg">⟵ back</p>
      </Link>
      <ul>
        {blogPosts.map(({ slug, title }) => (
          <Link key={`./${slug}/`} to={slug}>
            <li className="text-xl my-3">{title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
