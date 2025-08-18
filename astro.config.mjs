// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://rodrigoluiz.xyz",
  integrations: [mdx(), sitemap()],
  i18n: {
    locales: ["pt-br", "en"],
    defaultLocale: "pt-br",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: { plugins: [tailwindcss()] },
});
