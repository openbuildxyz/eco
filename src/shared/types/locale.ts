type SupportedLocale = 'en' | 'zh';

type SiteConfig = {
  title: string;
  description: string;
};

type NavConfig = {
  home: string;
  projects: string;
  contributing: string;
  about: string;
};

type LocaleConfig = {
  site: SiteConfig;
  navs: NavConfig;
};

type NavKey = keyof NavConfig;

export type { SupportedLocale, LocaleConfig, NavKey };
