import type { SupportedLocale } from '@/types';
import { OFFICIAL_WEBSITE_URL } from '@/constants/config';
import { getCurrentLocale, unwrapLocalValue } from '@/utils';

import { type TagType, getList as getTagList } from '../tag';
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
    homepage: OFFICIAL_WEBSITE_URL,
    tags: ['web3', 'frontend', 'backend', 'react'],
  },
  {
    id: 'openbuildeco',
    title: {
      en: 'OpenBuild Ecosystem Website',
      zh: 'OpenBuild 生态',
    },
    owners: ['ourai'],
    repo: { owner: 'openbuildxyz', name: 'eco' },
    tags: ['frontend', 'react'],
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
  {
    id: 'faucet',
    title: {
      en: 'Faucet Terminal',
      zh: 'Faucet Terminal',
    },
    description: {
      en: 'An open-source project dedicated to simplifying the process for Web3 developers to acquire test token.',
      zh: 'An open-source project dedicated to simplifying the process for Web3 developers to acquire test token.',
    },
    owners: [],
    repo: 'https://github.com/faucet-terminal',
    homepage: 'https://faucet.openbuild.xyz',
  },
  {
    id: 'answerWalletConnector',
    title: {
      en: 'Answer Web3 Wallet Connector',
      zh: 'Answer Web3 钱包连接器',
    },
    description: {
      en: 'An Apache Answer plugin to support authorizing with Web3 wallet.',
      zh: '一个支持用 Web3 钱包授权的 Apache Answer 插件。',
    },
    owners: ['i-Lucifer', 'ourai'],
  },
  {
    id: 'web3Packages',
    title: {
      en: 'Web3Packages',
      zh: 'Web3Packages',
    },
    description: {
      en: 'The goal of this project is to build a Web3 standard library similar to npm.',
      zh: '本项目目标是建立一个类似 npm 的 Web3 标准库。',
    },
    owners: ['tokenlin'],
    homepage: 'https://github.com/web3packages',
  },
  {
    id: 'web3Insights',
    title: {
      en: 'Web3Insights',
      zh: 'Web3Insights',
    },
    description: {
      en: 'A comprehensive metrics platform focused on Web3 ecosystems, communities, repositories, and developers.',
      zh: 'A comprehensive metrics platform focused on Web3 ecosystems, communities, repositories, and developers.',
    },
    owners: ['pseudoyu'],
    repo: { owner: 'pseudoyu', name: 'Web3Insights' },
    homepage: 'https://web3insights.app',
    tags: ['frontend', 'web3'],
  },
  {
    id: 'accordingWork',
    title: {
      en: 'According Work',
      zh: 'According Work',
    },
    description: {
      en: 'Fairly distributing rewards for R & D efforts.',
      zh: 'Fairly distributing rewards for R & D efforts.',
    },
    owners: ['wfnuser'],
    repo: { owner: 'YoubetDao', name: 'youbet-task' },
    homepage: 'https://according.work',
    tags: ['frontend', 'web3'],
  },
  {
    id: 'w5Link',
    title: {
      en: 'W5.Link',
      zh: 'W5.Link',
    },
    owners: ['septshep'],
    tags: ['frontend', 'backend', 'web3'],
  },
  {
    id: 'gasWait',
    title: {
      en: 'GasWait',
      zh: 'GasWait',
    },
    description: {
      en: 'A tool that allows users to choose the ideal time for submitting their transactions, helping them save on gas fees.',
      zh: 'A tool that allows users to choose the ideal time for submitting their transactions, helping them save on gas fees.',
    },
    owners: ['smallfu6'],
    homepage: 'https://github.com/Unblock-Chain',
  },
  {
    id: 'ohw',
    title: {
      en: 'Open Hardware Wallet',
      zh: '硬件钱包',
    },
    owners: ['zhang-wenchao'],
    homepage: 'https://github.com/butterfly-communtiy',
  },
  {
    id: 'ohwAlgorithm',
    title: {
      en: 'OHW-Algorithm',
      zh: 'OHW-Algorithm',
    },
    description: {
      en: 'An embedded systems-focused library that implements some cryptographic algorithms.',
      zh: 'An embedded systems-focused library that implements some cryptographic algorithms.',
    },
    owners: ['septshep'],
    repo: { owner: 'butterfly-communtiy', name: 'ohw-algorithm' },
  },
  {
    id: 'handie',
    title: {
      en: 'Handie',
      zh: 'Handie',
    },
    description: {
      en: 'Vue & React progressive framework for front-end of web-based management systems.',
      zh: '渐进式知识驱动前端应用开发与治理框架，让业务开发者将关注点聚焦于业务本身而非技术细节。',
    },
    owners: ['ourai'],
    homepage: 'https://handiejs.github.io',
    tags: ['frontend', 'react', 'vue'],
  },
  {
    id: 'petals',
    title: {
      en: 'Petals',
      zh: 'Petals',
    },
    description: {
      en: 'Born for component-based front-end development, and provides atomic controls (UI components).',
      zh: '跨 JS-based 技术栈控件（UI 组件）体系，为基于组件的前端开发而生，提供大量原子化的控件。',
    },
    owners: ['ourai'],
    homepage: 'https://petals-ui.github.io',
    tags: ['frontend', 'react', 'vue'],
  },
];

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

function getProjectTagList(type?: TagType) {
  return getTagList(getCurrentLocale(), type);
}

export { getList, getFeaturedList, getProjectTagList };
