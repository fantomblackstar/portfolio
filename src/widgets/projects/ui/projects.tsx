import { FC } from 'react';

import {
  AnimatedBlock,
  AnimatedDirection,
  SectionTitle,
  SectionBlock,
  BackgroundGradientAnimation,
} from '@/shared/ui';
import { ProjectCardsList } from './project-cards-list';

const Projects: FC = () => {
  return (
    <BackgroundGradientAnimation>
      <SectionBlock id="projects">
        <div className="container mx-auto px-4">
          <AnimatedBlock direction={AnimatedDirection.BOTTOM} delayMs={0}>
            <SectionTitle title="Projects" className="text-yellow-500" />
          </AnimatedBlock>
          <ProjectCardsList />
        </div>
      </SectionBlock>
    </BackgroundGradientAnimation>
  );
};

export { Projects };
