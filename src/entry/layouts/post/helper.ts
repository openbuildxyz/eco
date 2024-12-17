import { getCollection } from 'astro:content';

import type { SupportedLocale } from '@/types';

async function resolvePosts(locale: SupportedLocale) {
  return (await getCollection('posts'))
    .filter(post => {
      const parts = post.slug.split('/');

      return locale === 'en' ? parts.length === 1 : parts.length === 2 && parts[0] === locale;
    })
    .map(({ slug, ...others }) => {
      const parts = slug.split('/');

      if (parts.length > 1) {
        parts.shift();
      }

      return { ...others, slug: parts.join('/') };
    });
}

export { resolvePosts };
