import clsx from 'clsx';

import { Accordion, AccordionItem } from '@/components/react';

import type { TagType } from '../../../tag';
import type { Project } from '../../typing';
import { getProjectTagList } from '../../repository';
import ProjectCardWidget from '../project-card';
import TagGroup from './TagGroup';

type ProjectListWidgetProps = {
  dataSource: Project[];
};

function ProjectListWidget({ dataSource }: ProjectListWidgetProps) {
  const filtered = false;
  const tagTypes: TagType[] = ['domain', 'tech', 'general'];

  return (
    <div className={clsx(filtered ? 'grid grid-cols-4 gap-4' : undefined)}>
      <div className={clsx(filtered ? 'block col-span-1' : 'hidden')}>
        <Accordion selectionMode="multiple" defaultExpandedKeys={tagTypes}>
          {tagTypes.map(type => (
            <AccordionItem key={type} title={type} classNames={{ indicator: 'size-4 *:size-full' }}>
              <TagGroup tags={getProjectTagList(type)} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className={clsx(['grid gap-4', filtered ? 'grid-cols-3 col-span-3' : 'grid-cols-4'])}>
        {dataSource.map(proj => (
          <ProjectCardWidget key={proj.id} dataSource={proj} />
        ))}
      </div>
    </div>
  );
}

export default ProjectListWidget;
