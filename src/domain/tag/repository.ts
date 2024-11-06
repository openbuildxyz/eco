import type { SupportedLocale } from '@/types';
import { getCollection, unwrapLocalValue } from '@/utils';

import type { TagTypeId, InternalTag, Tag } from './typing';

async function getSpecificTagCollection(type: TagTypeId) {
  return await getCollection('tags', data => data.type === type);
}

const categoryTags: InternalTag[] = await getSpecificTagCollection('category');
const domainTags: InternalTag[] = await getSpecificTagCollection('domain');
const techTags: InternalTag[] = await getSpecificTagCollection('tech');
const generalTags: InternalTag[] = await getSpecificTagCollection('general');

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
