import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { Project } from "@prisma/client";
import { db } from "~/utils/db.server";

type LoaderData = { projects: Project[] };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    projects: await db.project.findMany(),
  };
  return json(data);
};

export default function Projects() {
  const { projects } = useLoaderData<LoaderData>();
  return (
    <>
      <Link to="/">
        <p className="text-lg">⟵ back</p>
      </Link>
      <ul>
        {projects.map(({ slug, title }) => (
          <Link key={`./${slug}/`} to={slug}>
            <li className="text-xl my-3">{title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
