import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { marked } from "marked";
import type { Project } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { project: Project; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  const project = await db.project.findFirst({
    where: { slug: params.slug },
  });
  if (project === null) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  const html = marked(project.content);

  const data: LoaderData = { project, html };
  return json(data);
};

export default function ProjectSlug() {
  const { html } = useLoaderData<LoaderData>();

  return (
    <>
      <Link to="/projects/">
        <p className="text-lg">⟵ back</p>
      </Link>
      <div
        className="markdown max-w-[35rem] mx-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}