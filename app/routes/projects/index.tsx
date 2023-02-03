import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import type { Project } from "~/models/project";
import { Paper } from "~/components/Paper";

type LoaderData = { projects: Project[] };

export const loader: LoaderFunction = async () => {
  return json([]);
};

export default function Projects() {
  const { projects } = useLoaderData<LoaderData>();
  return (
    <Paper>
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
    </Paper>
  );
}
