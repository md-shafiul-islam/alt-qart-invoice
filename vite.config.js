/* eslint-disable no-unused-vars */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import tailwindcss from "tailwindcss";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [react()],
});
