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
    nickname: { en: 'pseudoyu', zh: 'pseudoyu' },
    github: { id: 69753389, username: 'pseudoyu' },
  },
  {
    nickname: { en: 'sun', zh: 'sun' },
    github: { id: 58540575, username: 'jiahao6635' },
  },
  {
    nickname: { en: 'Kevin Lin', zh: 'Kevin Lin' },
    github: { id: 95925916, username: 'tokenlin' },
  },
  {
    nickname: { en: 'Lucifer', zh: 'Lucifer' },
    github: { id: 17881596, username: 'i-Lucifer' },
  },
  {
    nickname: { en: 'Ourai L.', zh: '欧雷' },
    github: { id: 562589, username: 'ourai' },
  },
  {
    nickname: { en: 'Qinghao Huang', zh: '微扰' },
    github: { id: 8191686, username: 'wfnuser' },
  },
  {
    nickname: { en: '0xfu', zh: '小符' },
    github: { id: 16130308, username: 'smallfu6' },
  },
  {
    nickname: { en: 'Septimus Shepherd', zh: 'Septimus Shepherd' },
    github: { id: 162018133, username: 'septshep' },
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
