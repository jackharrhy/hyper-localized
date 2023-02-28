/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ["Chomsky", "serif"],
      body: ["Libre Caslon Text", "serif"],
    },
    extend: {
      colors: {
        primary: {
          500: "#BE1A1F",
        },
        secondary: {
          500: "#f09917",
        },
        sand: {
          500: "#f4f1e8",
          400: "#F9F8F3",
        },
        clay: {
          500: "#B6B09E",
        },
        dark: {
          500: "#121111",
        },
      },
    },
  },
  plugins: [],
};
