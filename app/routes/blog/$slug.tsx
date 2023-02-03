import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { marked } from "marked";
import { db } from "~/utils/db.server";
import type { BlogPost } from "~/models/blogPost";
import { Paper } from "~/components/Paper";

type LoaderData = { blogPost: BlogPost; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  const blogPost = null;

  if (blogPost === null) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const html = marked(blogPost.content);

  const data: LoaderData = { blogPost, html };
  return json(data);
};

export default function BlogSlug() {
  const { html } = useLoaderData<LoaderData>();

  return (
    <Paper>
      <Link to="/blog">
        <p className="text-lg">⟵ back</p>
      </Link>
      <div
        className="markdown max-w-[35rem] mx-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Paper>
  );
}
