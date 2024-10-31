// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { LocaleValue, LocaleConfig } from '../types';

export const SITE_TITLE = 'OpenBuild Ecosystem';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const I18N_CONFIG: LocaleValue<LocaleConfig> = {
  en: {
    site: {
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
    },
    navs: {
      home: 'Home',
      projects: 'Projects',
      contributing: 'Contributing',
      about: 'About',
    },
  },
  zh: {
    site: {
      title: 'OpenBuild 生态',
      description: '与 OpenBuild 相关的社区生态项目',
    },
    navs: {
      home: '首页',
      projects: '项目',
      contributing: '贡献',
      about: '关于',
    },
  },
};
