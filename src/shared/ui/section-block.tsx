import { HTMLAttributes } from 'react';

import { cn } from '@/shared/lib';

interface SectionBlockProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SectionBlock: React.FC<SectionBlockProps> = ({ children, className, ...restProps }) => {
  return (
    <section className={cn('scroll-mt-20 px-4 py-16', className)} {...restProps}>
      {children}
    </section>
  );
};

export { SectionBlock };
