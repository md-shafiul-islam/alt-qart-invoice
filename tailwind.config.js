/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: { min: "350px", max: "639px" },
      },
      fontFamily: {},
      colors: {},
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
