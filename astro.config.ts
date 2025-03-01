// @ts-check
import { defineConfig, envField } from "astro/config";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://stephen.codes',
  integrations: [mdx(), sitemap()],
  env: {
    schema: {
      MODE: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
      SITE_TITLE: envField.string({
        context: "client",
        access: "public",
        optional: false,
        default: "Stephen Johnston",
      }),
      SITE_DESCRIPTION: envField.string({
        context: "client",
        access: "public",
        optional: false,
        default: "Stephen Johnston's personal website",
      }),
      GTM_ID: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
    },
  },
});