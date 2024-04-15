import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import node from "@astrojs/node";

import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://hyper-localized.jackharrhy.dev/",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
