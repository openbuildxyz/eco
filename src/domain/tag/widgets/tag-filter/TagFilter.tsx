import { getCurrentLocale } from '@/utils';
import { Accordion, AccordionItem } from '@/components/react';

import type { TagId, TagTypeId } from '../../typing';
import { getTagTypes } from '../../helper';
import { getTypeMap, getList } from '../../repository';
import CheckableTagGroup from './CheckableTagGroup';

type TagFilterWidgetProps = {
  className?: string;
  onChange: (type: TagTypeId, ids: TagId[]) => void;
};

const typeMap = getTypeMap();

function TagFilterWidget({ className, onChange }: TagFilterWidgetProps) {
  const locale = getCurrentLocale();
  const tagTypes = getTagTypes();

  return (
    <div className={className}>
      <Accordion selectionMode="multiple" defaultExpandedKeys={tagTypes.map(({ id }) => id)}>
        {tagTypes.filter(type => typeMap[type.id].length > 0).map(type => (
          <AccordionItem key={type.id} title={type.text[locale]} classNames={{ indicator: 'size-4 *:size-full' }}>
            <CheckableTagGroup tags={getList(locale, type.id)} onChange={ids => onChange(type.id, ids)} />
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default TagFilterWidget;
