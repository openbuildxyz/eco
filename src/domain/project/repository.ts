import type { SupportedLocale } from '@/types';
import { getCollection, unwrapLocalValue } from '@/utils';

import { getList as getContributorList } from '../contributor';
import type { InternalProject, Project } from './typing';

const projects: InternalProject[] = await getCollection('projects');

const projectMap: Record<InternalProject['id'], InternalProject> = projects.reduce((p, c) => ({
  ...p,
  [c.id]: c,
}), {});

const featured = ['openbuildxyz', 'amphitheatre', 'web3Insights', 'accordingWork', 'gasWait', 'ohw', 'handie', 'openbuildeco'];

function resolveProject(
  { title, description, owners, ...others }: InternalProject,
  locale: SupportedLocale,
): Project {
  return {
    ...others,
    title: unwrapLocalValue(title, locale),
    description: description ? unwrapLocalValue(description, locale) : '',
    owners: getContributorList(owners, locale),
  };
}

function getList(locale: SupportedLocale): Project[] {
  return projects.map(project => resolveProject(project, locale));
}

function getFeaturedList(locale: SupportedLocale): Project[] {
  return featured.map(id => resolveProject(projectMap[id], locale));
}

export { getList, getFeaturedList };
