import type { LocaleValue } from '@/types';

type GitHubRepo = {
  owner: string;
  name: string;
};

type GitHubUser = {
  id: number;
  username: string;
};

type Project = {
  id: string;
  title: LocaleValue<string>;
  description?: LocaleValue<string>;
  repo?: GitHubRepo | string;
  homepage?: string;
  owners: GitHubUser[];
};

type ResolvedProject = Omit<Project, 'title' | 'description'> & {
  title: string;
  description: string;
};

export type { Project, ResolvedProject };
