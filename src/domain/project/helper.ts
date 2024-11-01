import type { LocaleValue } from '@/types';
import { unwrapLocalValue } from '@/utils';

import type { ProjectLocale } from './typing';

const locales: LocaleValue<ProjectLocale> = {
  en: {
    browseMore: 'Browser more projects',
  },
  zh: {
    browseMore: '浏览更多项目',
  },
};

function resolveLocale(key: keyof ProjectLocale) {
  return unwrapLocalValue<ProjectLocale>(locales)[key];
}

export { resolveLocale };
