import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import type { BlogPost } from "~/models/blogPost";
import { Paper } from "~/components/Paper";

type LoaderData = { blogPosts: BlogPost[] };

export const loader: LoaderFunction = async () => {
  const query = db.prepare("SELECT * FROM note").all(); // TODO limit to blog posts
  console.log({ query });
  const data: LoaderData = { blogPosts: [] };
  return json(data);
};

export default function Blog() {
  const { blogPosts } = useLoaderData<LoaderData>();
  return (
    <Paper>
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
    </Paper>
  );
}
