import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <h1 className="text-3xl text-center">welcome to james site</h1>
      <Link to="/blog/">
        <h2 className="text-2xl my-2">blog</h2>
      </Link>
      <Link to="/projects/">
        <h2 className="text-2xl my-2">projects</h2>
      </Link>
    </>
  );
}
