import type { SupportedLocale, LocaleValue } from '@/types';
import { I18N_CONFIG } from '@/constants/config';

import type { HomeLocale } from './typing';

const locales: LocaleValue<HomeLocale> = {
  en: {
    heading: I18N_CONFIG.en.site.title,
    slogan: 'Help ecological projects and contributors to achieve success.',
    highlights: 'What You Can Get',
    featured: 'Featured Projects',
    growth: {
      title: 'Growing through practice',
      description: 'Through practical projects, you can deepen your understanding of what you have learned on the OpenBuild official website and truly master new technologies.',
    },
    cuttingEdge: {
      title: 'Keep up with the trend',
      description: 'Each project is using the current cutting-edge technology stack. Participating and contributing can help you keep up with the times.',
    },
    reputation: {
      title: 'Accumulate reputation',
      description: 'Active participation and contribution will help you get to know more bigwigs, expand your influence and find a good job.',
    },
  },
  zh: {
    heading: I18N_CONFIG.zh.site.title,
    slogan: '助力生态项目及参与共建的贡献者取得成功。',
    highlights: '你能获得',
    featured: '特色项目',
    growth: {
      title: '实践中成长',
      description: '通过项目实战加深自己在 OpenBuild 官网所学内容的理解，真正地掌握新技术。',
    },
    cuttingEdge: {
      title: '紧跟潮流',
      description: '每个项目都在使用当下前沿的技术栈，参与贡献可帮助自己不被时代所抛下。',
    },
    reputation: {
      title: '积累声望',
      description: '积极参与贡献有助于自己认识更多大佬，有利于扩大影响力和找到好工作。',
    },
  },
};

function resolveLocale(locale: SupportedLocale): HomeLocale {
  return locales[locale];
}

export { resolveLocale };
