import { Card, CardHeader, CardBody } from '@/components/react';

import type { HomeLocale } from './typing';

type HighlightPoint = 'growth' | 'cuttingEdge' | 'reputation';

type HighlightListProps = {
  locale: HomeLocale;
};

function HighlightList({ locale }: HighlightListProps) {
  return (
    <div className="grid gap-4 lg:gap-9 grid-cols-1 sm:grid-cols-3">
      {(['growth', 'cuttingEdge', 'reputation'] as HighlightPoint[]).map(key => {
        const brief = locale[key];

        return (
          <Card key={key}>
            <CardHeader className="p-6 pb-1.5">
              <h3 className="grow m-0 text-xl font-semibold text-center">{brief.title}</h3>
            </CardHeader>
            <CardBody className="p-6 pt-1.5">
              <p className="m-0 text-sm break-all">{brief.description}</p>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default HighlightList;
