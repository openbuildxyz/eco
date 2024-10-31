// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  ...(process.env.NODE_ENV === 'production' ? {
    site: 'https://openbuildxyz.github.io',
    base: 'eco',
    trailingSlash: 'never',
  } : {
    site: 'https://example.com',
  }),
  integrations: [mdx(), sitemap(), react(), tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
});
