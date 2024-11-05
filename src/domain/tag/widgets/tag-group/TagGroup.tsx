import clsx from 'clsx';

import { getCurrentLocale } from '@/utils';
import { Chip } from '@/components/react';

import type { TagId, Tag } from '../../typing';
import { getList } from '../../repository';

type TagGroupWidgetProps = {
  className?: string;
  tags?: TagId[];
};

function TagGroupWidget({ className, tags = [] }: TagGroupWidgetProps) {
  const tagMap: Record<TagId, Tag> = getList(getCurrentLocale()).reduce((prev, tag) => ({ ...prev, [tag.id]: tag }), {});

  return tags.length > 0 ? (
    <div className={clsx('flex gap-1', className)}>
      {tags.map(id => {
        const tag = tagMap[id];

        return (
          <Chip
            key={id}
            size="sm"
            variant={tag.type === 'category' ? 'solid' : 'bordered'}
            color={['category', 'domain'].includes(tag.type) ? 'primary' : 'default'}
          >
            {tag.text}
          </Chip>
        );
      })}
    </div>
  ) : null;
}

export default TagGroupWidget;
