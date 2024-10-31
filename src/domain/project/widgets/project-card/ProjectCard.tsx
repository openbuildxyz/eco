import {
  Card, CardHeader, CardBody, CardFooter,
  Avatar, Tooltip,
} from '@/components/react';

import type { ResolvedProject } from '../../typing';

type ProjectCardWidgetProps = {
  className?: string;
  dataSource: ResolvedProject;
};

function ProjectCardWidget({ dataSource }: ProjectCardWidgetProps) {
  return (
    <Card>
      <CardHeader>{dataSource.title}</CardHeader>
      <CardBody className="text-sm font-light">{dataSource.description}</CardBody>
      <CardFooter>
        {dataSource.owners.map(user => (
          <Tooltip content={user.username} showArrow>
            <a
              href={`https://github.com/${user.username}`}
              target="_blank"
              rel="nofollow external"
            >
              <Avatar
                className="w-6 h-6"
                src={`https://avatars.githubusercontent.com/u/${user.id}`}
                isBordered
              />
            </a>
          </Tooltip>
        ))}
      </CardFooter>
    </Card>
  );
}

export default ProjectCardWidget;
