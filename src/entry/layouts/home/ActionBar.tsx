import clsx from 'clsx';

import { Button } from '@/components/react';
import { ArrowRight } from '@/components/icon';

import type { HomeLocale } from './typing';

type ActionBarProps = {
  className?: string;
  locale: HomeLocale;
};

function ActionBar({ className, locale }: ActionBarProps) {
  const handleClick = () => alert(';-D');

  return (
    <div className={clsx('flex gap-4', className)}>
      <Button
        size="lg"
        color="primary"
        endContent={<ArrowRight className="size-5" />}
        onClick={handleClick}
      >
        {locale.contribute}
      </Button>
      <Button
        size="lg"
        color="primary"
        variant="bordered"
        onClick={handleClick}
      >
        {locale.join}
      </Button>
    </div>
  );
}

export default ActionBar;
