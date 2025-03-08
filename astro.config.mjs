// @ts-check
import { defineConfig, envField } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stephen.codes',
  integrations: [mdx(), sitemap()],
  env: {
    schema: {
      TITLE: envField.string({
        context: 'client',
        access: 'public',
        optional: false,
      }),
      DESCRIPTION: envField.string({
        context: 'client',
        access: 'public',
        optional: false,
      }),
      AUTHOR: envField.string({
        context: 'client',
        access: 'public',
        optional: false,
      }),
      GTM_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      TWITTER_USERNAME: envField.string({
        context: 'client',
        access: 'public',
        optional: false,
      }),
      GITHUB_USERNAME: envField.string({
        context: 'client',
        access: 'public',
        optional: false,
      }),
      LINKEDIN_USERNAME: envField.string({
        context: 'client',
        access: 'public',
        optional: false,
      }),
      MODE: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
    }
  }
});