import { FC } from 'react';

import { AnimatedBlock, AnimatedDirection } from '@/shared/ui/animated-block';
import { SectionTitle } from '@/shared/ui/section-title';

import { ProjectCardsList } from './project-cards-list';

const Projects: FC = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedBlock direction={AnimatedDirection.BOTTOM} delayMs={0}>
          <SectionTitle title="Projects" className="text-blue-600" />
        </AnimatedBlock>
        <ProjectCardsList />
      </div>
    </section>
  );
};

export { Projects };
