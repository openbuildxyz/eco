import type { SupportedLocale } from '@/types';
import { unwrapLocalValue } from '@/utils';

import type { TagType, InternalTag, Tag } from './typing';

type UntypedTag = Omit<InternalTag, 'type'>;

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

const typedTagMap: Record<TagType, InternalTag[]> = {
  domain: domainTags,
  tech: techTags,
  general: generalTags,
};

const tags = ([] as InternalTag[]).concat(domainTags, techTags, generalTags);

function getAll(): InternalTag[] {
  return tags;
}

function getList(locale: SupportedLocale, type?: TagType) {
  const sourceTags = (type && type in typedTagMap) ? typedTagMap[type] : tags;

  return sourceTags.map(({ text, ...others }) => ({
    ...others,
    text: unwrapLocalValue(text, locale),
  }));
}

export { getAll, getList };
