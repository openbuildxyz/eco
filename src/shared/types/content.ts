import type { CollectionEntry } from 'astro:content';

type TagTypesKey = 'tagTypes' | 'tag-types';
type DataCollectionKey = 'contributors' | TagTypesKey | 'tags' | 'projects';

type PickCollectionData<K extends DataCollectionKey> = CollectionEntry<K>['data'];

export type { DataCollectionKey, PickCollectionData };
