import type { SupportedLocale } from '@/types';
import { getCollection, unwrapLocalValue } from '@/utils';

import type { InternalContributor, Contributor } from './typing';

const contributors: InternalContributor[] = await getCollection('contributors');

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
