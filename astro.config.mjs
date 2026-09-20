// @ts-check

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { site } from "#src/config/site.ts";

export default defineConfig({
  integrations: [sitemap()],
  output: "static",
  site: site.url,
  vite: { plugins: [tailwindcss()] },
});
