import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStyles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "james site",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-background h-full p-8 font-drawn">
        <main className="bg-paper flex flex-col p-4 max-w-[40rem] mx-auto min-h-full border-x-4 border-y border-black rounded-lg">
          <div className="bg-dots bg-repeat bg-[length:1rem] flex-1 h-full w-full px-4 py-[1.2rem]">
            <Outlet />
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
