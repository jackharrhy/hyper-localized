/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        background: "#11061c",
        paper: "#eff2df",
      },
      backgroundImage: {
        dots: "url('/assets/dots.svg')",
      },
      fontFamily: {
        drawn: "Virgil",
      },
    },
  },
  plugins: [],
};
