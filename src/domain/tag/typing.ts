import type { LocaleValue } from '@/types';

type TagType = 'general' | 'domain' | 'tech';

type InternalTag = {
  id: string;
  text: LocaleValue<string>;
  type: TagType;
};

type Tag = Omit<InternalTag, 'text'> & {
  text: string;
};

export type { TagType, InternalTag, Tag };
