import type { LocaleValue } from '@/types';

type GitHubUser = {
  id: number;
  username: string;
};

type InternalContributor = {
  nickname: LocaleValue<string>;
  github: GitHubUser;
};

type Contributor = Omit<InternalContributor, 'nickname'> & {
  nickname: string;
};

export type { InternalContributor, Contributor };
