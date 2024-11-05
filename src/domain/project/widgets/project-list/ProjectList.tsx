import clsx from 'clsx';
import { useState } from 'react';

import { Button } from '@/components/react';
import { Filter } from '@/components/icon';

import { type TagId, type TagTypeId, getTagTypes, getTypeMap, TagFilterWidget } from '../../../tag';
import type { Project } from '../../typing';
import ProjectCardWidget from '../project-card';

type ProjectListWidgetProps = {
  dataSource: Project[];
};

type FilterTagMap = Partial<Record<TagTypeId, TagId[]>>;

const typeMap = getTypeMap();

function filterByTags(dataSource: Project[], filters: FilterTagMap) {
  const tagMap: Record<string, true> = Object.values(filters).reduce((p, tags) => ({ ...p, ...tags.reduce((_p, tag) => ({ ..._p, [tag]: true }), {}) }), {});

  let filtered = dataSource.slice();

  getTagTypes().forEach(({ id }) => {
    if ((filters[id] || []).length > 0) {
      const availableTagMap: Record<string, true> = typeMap[id].reduce((p, t) => ({ ...p, [t.id]: true }), {});

      filtered = filtered.filter(({ tags }) => !!tags && tags.some(tag => availableTagMap[tag] && tagMap[tag]));
    }
  });

  return filtered;
}

function ProjectListWidget({ dataSource }: ProjectListWidgetProps) {
  const [filterable, setFilterable] = useState(false);
  const [filters, setFilters] = useState<FilterTagMap>({});

  const filterd = filterByTags(dataSource, filters);
  const count = filterd.length;

  const handleFilterChange = (type: TagTypeId, ids: TagId[]) => {
    setFilters({ ...filters, [type]: ids });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div><span className="font-semibold">{count}</span> item{count !== 1 ? 's' : ''} found</div>
        <div>
          <Button
            variant={filterable ? 'solid' : 'light'}
            isIconOnly
            onClick={() => setFilterable(!filterable)}
          >
            <Filter className="size-4" />
          </Button>
        </div>
      </div>
      <div className={clsx(filterable ? 'grid grid-cols-4 gap-4' : undefined)}>
        <div className={clsx(['grid gap-4', filterable ? 'grid-cols-3 col-span-3' : 'grid-cols-4'])}>
          {filterd.map(proj => (
            <ProjectCardWidget key={proj.id} dataSource={proj} />
          ))}
        </div>
        <TagFilterWidget
          className={clsx(filterable ? 'block col-span-1' : 'hidden')}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default ProjectListWidget;
