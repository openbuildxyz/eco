import type { PickCollectionData } from '@/types';

import type { Contributor } from '../contributor';

type ProjectLocale = {
  browseMore: string;
};

type InternalProject = PickCollectionData<'projects'>;

type Project = Omit<InternalProject, 'title' | 'description' | 'owners'> & {
  title: string;
  description: string;
  owners: Contributor[];
};

export type { ProjectLocale, InternalProject, Project };
