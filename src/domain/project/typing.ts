import type { LocaleValue } from '@/types';

import type { Contributor } from '../contributor';
import type { TagId } from '../tag';

type ProjectLocale = {
  browseMore: string;
};

type GitHubRepo = {
  owner: string;
  name: string;
};

type InternalProject = {
  id: string;
  title: LocaleValue<string>;
  description?: LocaleValue<string>;
  repo?: GitHubRepo | string;
  homepage?: string;
  owners: Contributor['github']['username'][];
  tags?: TagId[];
};

type Project = Omit<InternalProject, 'title' | 'description' | 'owners'> & {
  title: string;
  description: string;
  owners: Contributor[];
};

export type { ProjectLocale, InternalProject, Project };
