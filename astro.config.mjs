// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';

export default defineConfig({
  ...(process.env.NODE_ENV === 'production' ? {
    site: 'https://openbuildxyz.github.io',
    base: 'eco',
    trailingSlash: 'never',
  } : {
    site: 'https://example.com',
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },
  integrations: [
    react({ experimentalReactChildren: true }),
    tailwind(),
    starlight({
      title: 'OpenBuild Ecosystem',
      components: {
        SiteTitle: './src/entry/layouts/default/BrandLogo.astro',
      },
    }),
  ],
});
