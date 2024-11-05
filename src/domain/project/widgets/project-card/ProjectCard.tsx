import { getRelativeLocaleUrl } from 'astro:i18n';

import { getCurrentLocale } from '@/utils';
import {
  Card, CardHeader, CardBody, CardFooter,
  Avatar, Tooltip,
} from '@/components/react';
import { ArrowRight } from '@/components/icon';

import { TagGroupWidget } from '../../../tag';

import type { Project } from '../../typing';
import { resolveLocale } from '../../helper';

type ProjectCardWidgetProps = {
  className?: string;
  dataSource: Project;
  showMore?: boolean;
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

function ProjectCardWidget({ dataSource, showMore = false }: ProjectCardWidgetProps) {
  const projLink = resolveProjLink(dataSource);

  return (
    <Card>
      <CardHeader className="flex-col items-start leading-none">
        {projLink ? (
          <a className="text-lg/tight font-semibold" href={projLink} target="_blank" rel="nofollow external">{dataSource.title}</a>
        ) : (
          <span className="text-lg/tight font-semibold">{dataSource.title}</span>
        )}
        <TagGroupWidget className="mt-2" tags={dataSource.tags} />
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
      {showMore && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-all">
          <a
            className="flex items-center gap-2 px-4 leading-10 border border-current rounded-full text-white/70 hover:text-white transition-all"
            href={getRelativeLocaleUrl(getCurrentLocale(), '/projects')}
          >
            <span>{resolveLocale('browseMore')}</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      )}
    </Card>
  );
}

export default ProjectCardWidget;
