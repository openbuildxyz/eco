import type { LocaleValue } from '@/types';

type TagTypeId = 'general' | 'category' | 'domain' | 'tech';

type TagType = {
  id: TagTypeId;
  text: LocaleValue<string>;
};

type TagId = string;

type InternalTag = {
  id: TagId;
  text: LocaleValue<string>;
  type: TagTypeId;
};

type Tag = Omit<InternalTag, 'text'> & {
  text: string;
};

export type { TagTypeId, TagType, TagId, InternalTag, Tag };
