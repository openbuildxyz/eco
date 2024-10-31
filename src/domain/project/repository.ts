import type { SupportedLocale } from '@/types';
import { unwrapLocalValue } from '@/utils';

import { getList as getContributorList } from '../contributor';
import type { InternalProject, Project } from './typing';

const projects: InternalProject[] = [
  {
    id: 'openbuildxyz',
    title: {
      en: 'OpenBuild Official Website',
      zh: 'OpenBuild 官网',
    },
    description: {
      en: 'Help ✦ Developers ✦ get on the Success Way to Web3',
      zh: 'Help ✦ Developers ✦ get on the Success Way to Web3',
    },
    owners: ['zhang-wenchao', 'ourai'],
    homepage: 'https://openbuild.xyz',
  },
  {
    id: 'amphitheatre',
    title: {
      en: 'Amphitheatre',
      zh: 'Amphitheatre',
    },
    description: {
      en: 'Instantly spin up fresh, automated dev environments in the cloud and start developing within seconds.',
      zh: 'Instantly spin up fresh, automated dev environments in the cloud and start developing within seconds.',
    },
    owners: ['wangeguo'],
    homepage: 'https://amphitheatre.app',
  },
];

function getList(locale: SupportedLocale): Project[] {
  return projects.map(({ title, description, owners, ...others }) => ({
    ...others,
    title: unwrapLocalValue(title, locale),
    description: description ? unwrapLocalValue(description, locale) : '',
    owners: getContributorList(owners, locale),
  }));
}

export { getList };
