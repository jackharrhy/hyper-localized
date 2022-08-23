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
      <Link to="..">
        <p>back</p>
      </Link>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>{project.title}</li>
        ))}
      </ul>
    </>
  );
}
