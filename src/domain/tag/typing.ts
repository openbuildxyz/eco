import type { PickCollectionData } from '@/types';

type TagTypeId = 'general' | 'category' | 'domain' | 'tech';

type TagType = PickCollectionData<'tagTypes'>;

type TagId = string;

type InternalTag = PickCollectionData<'tags'>;

type Tag = Omit<InternalTag, 'text'> & {
  text: string;
};

export type { TagTypeId, TagType, TagId, InternalTag, Tag };
