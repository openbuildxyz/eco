import type { SupportedLocale, LocaleValue } from '@/types';

import type { Project, ResolvedProject } from './typing';

const projects: Project[] = [
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
    owners: [
      { id: 5770157, username: 'zhang-wenchao' },
      { id: 562589, username: 'ourai' },
    ],
    homepage: 'https://openbuild.xyz',
  },
  {
    id: 'openbuildxyzx',
    title: {
      en: 'OpenBuild Official Website',
      zh: 'OpenBuild 官网',
    },
    description: {
      en: 'Help ✦ Developers ✦ get on the Success Way to Web3',
      zh: 'Help ✦ Developers ✦ get on the Success Way to Web3',
    },
    owners: [
      { id: 5770157, username: 'zhang-wenchao' },
      { id: 562589, username: 'ourai' },
    ],
    homepage: 'https://openbuild.xyz',
  },
];

function resolveLocalValue(data: LocaleValue<any>, locale: SupportedLocale) {
  return data[locale] || data.en;
}

function getList(locale: SupportedLocale): ResolvedProject[] {
  return projects.map(({ title, description, ...others }) => ({
    ...others,
    title: resolveLocalValue(title, locale),
    description: description ? resolveLocalValue(description, locale) : '',
  }));
}

export { getList };
