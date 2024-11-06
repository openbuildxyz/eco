import type { PickCollectionData } from '@/types';

type InternalContributor = PickCollectionData<'contributors'>;

type Contributor = Omit<InternalContributor, 'nickname'> & {
  nickname: string;
};

export type { InternalContributor, Contributor };
