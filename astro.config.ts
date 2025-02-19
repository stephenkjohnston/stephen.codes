// @ts-check
import { defineConfig, envField } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
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
    },
  },
});
