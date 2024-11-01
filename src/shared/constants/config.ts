// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { LocaleValue, LocaleConfig } from '../types';

const SITE_TITLE = 'OpenBuild Ecosystem';
const SITE_DESCRIPTION = 'Welcome to my website!';

const I18N_CONFIG: LocaleValue<LocaleConfig> = {
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

const OFFICIAL_WEBSITE_URL = 'https://openbuild.xyz';
const ECOSYSTEM_WEBSITE_URL = import.meta.env.SITE;

export {
  SITE_TITLE,
  SITE_DESCRIPTION,
  I18N_CONFIG,
  OFFICIAL_WEBSITE_URL, ECOSYSTEM_WEBSITE_URL,
};
