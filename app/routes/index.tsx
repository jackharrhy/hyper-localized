import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <>
      <p>welcome to james site</p>
      <Link to="/blog/">
        <p>blog</p>
      </Link>
      <Link to="/projects/">
        <p>projects</p>
      </Link>
    </>
  );
}
