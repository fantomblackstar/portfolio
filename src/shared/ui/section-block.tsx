import { cn } from '@/shared/lib';

interface SectionBlockProps extends React.HTMLAttributes<HTMLDivElement> {
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
