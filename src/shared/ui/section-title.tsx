import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  className?: HTMLParagraphElement['className'];
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ className, title }) => {
  return (
    <h2
      className={twMerge(
        'mx-auto mb-8 text-center text-xl font-bold uppercase md:text-2xl lg:mb-12 xl:text-3xl',
        className,
      )}
    >
      {title}
    </h2>
  );
};

export { SectionTitle };
