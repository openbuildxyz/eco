import clsx from 'clsx';
import { useState } from 'react';

import { Button } from '@/components/react';
import { Filter } from '@/components/icon';

import type { TagId, TagType } from '../../../tag';
import type { Project } from '../../typing';
import ProjectCardWidget from '../project-card';
import FilterArea from './FilterArea';

type ProjectListWidgetProps = {
  dataSource: Project[];
};

type FilterTagMap = Partial<Record<TagType, TagId[]>>;

function filterByTags(dataSource: Project[], filters: FilterTagMap) {
  const tagMap: Record<string, true> = Object.values(filters).reduce((p, tags) => ({ ...p, ...tags.reduce((_p, tag) => ({ ..._p, [tag]: true }), {}) }), {});

  return Object.keys(tagMap).length > 0 ? dataSource.filter(({ tags }) => tags && tags.some(tag => tagMap[tag])) : dataSource;
}

function ProjectListWidget({ dataSource }: ProjectListWidgetProps) {
  const [filterable, setFilterable] = useState(false);
  const [filters, setFilters] = useState<FilterTagMap>({});

  const filterd = filterByTags(dataSource, filters);
  const count = filterd.length;

  const handleFilterChange = (type: TagType, ids: TagId[]) => {
    setFilters({ ...filters, [type]: ids });
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div><span className="font-semibold">{count}</span> item{count !== 1 ? 's' : ''} found</div>
        <div>
          <Button variant="light" isIconOnly onClick={() => setFilterable(!filterable)}>
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
        <FilterArea
          className={clsx(filterable ? 'block col-span-1' : 'hidden')}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default ProjectListWidget;
