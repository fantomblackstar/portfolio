import React from 'react';
import { SectionBlock } from '@/shared/ui';
import Container from '@/shared/ui/layout/container';
import { SectionTitle } from '@/shared/ui/section-title';
import { AnimatedBlock, AnimatedDirection } from '../../../shared/ui/animated-block';
import { TECH_CATEGORIES } from '../lib/tech-categories';
import { TechCategoryCard } from './tech-category-card';

const TechStack: React.FC = () => {
  return (
    <SectionBlock id="technologies">
      <Container>
        <AnimatedBlock direction={AnimatedDirection.BOTTOM} delayMs={0}>
          <SectionTitle title="Experience with" className="text-blue-600" />
        </AnimatedBlock>
        <AnimatedBlock direction={AnimatedDirection.BOTTOM} delayMs={300} className="mt-16">
          <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4">
            {TECH_CATEGORIES.map((category, index) => {
              const randomHeight = index % 2 === 0 ? '' : 'min-h-[220px]';

              return (
                <div key={`category-${index}`} className="mb-4 break-inside-avoid">
                  <TechCategoryCard
                    title={category.title}
                    items={category.items}
                    className={`h-full ${randomHeight}`}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </AnimatedBlock>
      </Container>
    </SectionBlock>
  );
};

export { TechStack };
