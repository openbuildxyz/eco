import type { TagType } from './typing';

const tagTypes: TagType[] = [
  {
    id: 'category',
    text: { en: 'Category', zh: '类别' },
  },
  {
    id: 'domain',
    text: { en: 'Domain', zh: '领域' },
  },
  {
    id: 'tech',
    text: { en: 'Tech stack', zh: '技术栈' },
  },
  {
    id: 'general',
    text: { en: 'General', zh: '其他' },
  },
];

function getTagTypes() {
  return tagTypes.slice();
}

export { getTagTypes };
