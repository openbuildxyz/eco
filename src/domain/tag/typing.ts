import type { LocaleValue } from '@/types';

type TagId = string;
type TagType = 'general' | 'domain' | 'tech';

type InternalTag = {
  id: TagId;
  text: LocaleValue<string>;
  type: TagType;
};

type Tag = Omit<InternalTag, 'text'> & {
  text: string;
};

export type { TagId, TagType, InternalTag, Tag };
