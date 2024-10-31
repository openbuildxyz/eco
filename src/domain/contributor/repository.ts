import type { SupportedLocale } from '@/types';
import { unwrapLocalValue } from '@/utils';

import type { InternalContributor, Contributor } from './typing';

const contributors: InternalContributor[] = [
  {
    nickname: { en: 'Vincent', zh: 'Vincent' },
    github: { id: 5770157, username: 'zhang-wenchao' },
  },
  {
    nickname: { en: 'Eguo Wang', zh: '国子' },
    github: { id: 146697, username: 'wangeguo' },
  },
  {
    nickname: { en: 'sun', zh: 'sun' },
    github: { id: 58540575, username: 'jiahao6635' },
  },
  {
    nickname: { en: 'Ourai L.', zh: '欧雷' },
    github: { id: 562589, username: 'ourai' },
  },
];

const contributorMap: Record<InternalContributor['github']['username'], InternalContributor> = contributors.reduce((p, c) => ({
  ...p,
  [c.github.username]: c,
}), {});

function getList(usernames: InternalContributor['github']['username'][], locale: SupportedLocale = 'en'): Contributor[] {
  return usernames.map(username => {
    const { nickname, ...others } = contributorMap[username];

    return {
      ...others,
      nickname: unwrapLocalValue(nickname, locale),
    };
  });
}

export { getList };
