import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import type { BlogPost } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { blogPost: BlogPost };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  const blogPost = await db.blogPost.findFirst({
    where: { slug: params.slug },
  });
  if (blogPost === null) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  const data: LoaderData = { blogPost };
  return json(data);
};

export default function DevLogSlug() {
  const { blogPost } = useLoaderData<LoaderData>();

  return (
    <>
      <p>{blogPost.title}</p>
      <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
    </>
  );
}
