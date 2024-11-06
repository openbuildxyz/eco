import { getCollection } from '@/utils';

import type { TagType } from './typing';

const tagTypes: TagType[] = await getCollection('tag-types');

function getTagTypes() {
  return tagTypes.slice();
}

export { getTagTypes };
