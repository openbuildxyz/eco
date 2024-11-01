import {
  Card, CardHeader, CardBody, CardFooter,
  Avatar, Tooltip,
} from '@/components/react';

import type { Project } from '../../typing';

type ProjectCardWidgetProps = {
  className?: string;
  dataSource: Project;
};

function resolveProjLink({ repo, homepage }: Project): string {
  if (homepage) {
    return homepage;
  }

  if (repo) {
    return typeof repo === 'string' ? repo : `https://github.com/${repo.owner}/${repo.name}`;
  }

  return '';
}

function ProjectCardWidget({ dataSource }: ProjectCardWidgetProps) {
  const projLink = resolveProjLink(dataSource);

  return (
    <Card>
      <CardHeader className="leading-none">
        {projLink ? (
          <a className="text-lg/tight font-semibold" href={projLink} target="_blank" rel="nofollow external">{dataSource.title}</a>
        ) : dataSource.title}
      </CardHeader>
      <CardBody className="py-0 text-sm font-light break-all">{dataSource.description}</CardBody>
      <CardFooter>
        {dataSource.owners.map(user => (
          <Tooltip key={user.github.username} content={user.nickname} showArrow>
            <a
              href={`https://github.com/${user.github.username}`}
              target="_blank"
              rel="nofollow external"
            >
              <Avatar
                className="w-6 h-6"
                src={`https://avatars.githubusercontent.com/u/${user.github.id}`}
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
