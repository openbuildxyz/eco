import type { SupportedLocale } from '@/types';
import { unwrapLocalValue } from '@/utils';

import type { TagTypeId, InternalTag, Tag } from './typing';

type UntypedTag = Omit<InternalTag, 'type'>;

const categoryTags: InternalTag[] = ([
  {
    id: 'app',
    text: { en: 'Apps/Sites', zh: '应用/网站' },
  },
  {
    id: 'pluggable',
    text: { en: 'Services/Plugins', zh: '服务/插件' },
  },
  {
    id: 'semiFinished',
    text: { en: 'Libraries/Frameworks', zh: '库/框架' },
  },
] as UntypedTag[]).map(tag => ({ ...tag, type: 'category' }))

const domainTags: InternalTag[] = ([
  {
    id: 'frontend',
    text: { en: 'Front-end', zh: '前端' },
  },
  {
    id: 'backend',
    text: { en: 'Back-end', zh: '后端' }
  },
  {
    id: 'web3',
    text: { en: 'Web3', zh: 'Web3' },
  },
] as UntypedTag[]).map(tag => ({ ...tag, type: 'domain' }));

const techTags: InternalTag[] = ([
  {
    id: 'react',
    text: { en: 'React', zh: 'React' },
  },
  {
    id: 'vue',
    text: { en: 'Vue', zh: 'Vue' },
  },
] as UntypedTag[]).map(tag => ({ ...tag, type: 'tech' }));

const generalTags: InternalTag[] = [];

const typedTagMap: Record<TagTypeId, InternalTag[]> = {
  category: categoryTags,
  domain: domainTags,
  tech: techTags,
  general: generalTags,
};

const tags = ([] as InternalTag[]).concat(categoryTags, domainTags, techTags, generalTags);

function getTypeMap() {
  return { ...typedTagMap };
}

function getAll(): InternalTag[] {
  return tags.slice();
}

function getList(locale: SupportedLocale, type?: TagTypeId): Tag[] {
  const sourceTags = (type && type in typedTagMap) ? typedTagMap[type] : tags;

  return sourceTags.map(({ text, ...others }) => ({
    ...others,
    text: unwrapLocalValue(text, locale),
  }));
}

export { getTypeMap, getAll, getList };
