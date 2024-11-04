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
      customCss: [
        './src/shared/styles/guide.css',
      ],
      components: {
        SiteTitle: './src/entry/layouts/default/BrandLogo.astro',
        SocialIcons: './src/entry/layouts/default/NavMenu.astro',
      },
      sidebar: [
        {
          label: 'Getting Started',
          translations: { zh: '开始' },
          items: [
            'guides',
            // 'guides/team',
            // 'guides/code-of-conduct',
          ],
        },
        {
          label: 'Building Ecosystem',
          translations: { zh: '构建生态' },
          items: [
            'guides/how-to-contribute',
            'guides/how-to-join',
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/openbuildxyz/eco/edit/main',
      },
    }),
  ],
});
