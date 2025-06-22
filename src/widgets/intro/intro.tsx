import React from 'react';
import ProfilePhoto from '@/shared/assets/images/profile_photo.jpg';

import { AnimatedBlock, AnimatedDirection } from '@/shared/ui/animated-block';
import { AuroraBackground } from '@/shared/ui/aurora-background';
import Container from '@/shared/ui/layout/container';
import { ActionButtons } from './action-buttons';
import { IntroText } from './intro-text';

const Intro: React.FC = () => {
  return (
    <AuroraBackground className="relative pb-20 pt-[4.375rem]" id="about">
      <Container className="relative pt-10 lg:pt-20">
        <AnimatedBlock
          direction={AnimatedDirection.BOTTOM}
          className="relative mx-auto mb-8 size-56 overflow-hidden rounded-full md:size-72 lg:size-96 xl:mb-12"
          delayMs={500}
        >
          <img
            src={ProfilePhoto}
            alt="Profile_photo"
            className="absolute -bottom-10 left-0 m-0 h-auto w-full md:-bottom-16"
          />
        </AnimatedBlock>
        <IntroText />
        <ActionButtons />
      </Container>
    </AuroraBackground>
  );
};

export { Intro };
