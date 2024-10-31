// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  ...(process.env.NODE_ENV === 'production' ? {
    site: 'https://openbuildxyz.github.io',
    base: 'eco',
    trailingSlash: 'never',
  } : {
    site: 'https://example.com',
  }),
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
});
