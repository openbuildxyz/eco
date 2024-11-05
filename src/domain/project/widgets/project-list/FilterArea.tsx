import { Accordion, AccordionItem } from '@/components/react';

import type { TagId, TagType } from '../../../tag';
import { getProjectTagList } from '../../repository';
import TagGroup from './TagGroup';

type FilterAreaProps = {
  className?: string;
  onChange: (type: TagType, ids: TagId[]) => void;
};

function FilterArea({ className, onChange }: FilterAreaProps) {
  const tagTypes: TagType[] = ['domain', 'tech', 'general'];

  return (
    <div className={className}>
      <Accordion selectionMode="multiple" defaultExpandedKeys={tagTypes}>
        {tagTypes.map(type => (
          <AccordionItem key={type} title={type} classNames={{ indicator: 'size-4 *:size-full' }}>
            <TagGroup tags={getProjectTagList(type)} onChange={ids => onChange(type, ids)} />
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FilterArea;
