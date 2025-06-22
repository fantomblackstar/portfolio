import React from 'react';
import ProfilePhoto from '../assets/images/profile_photo.jpg';
import Container from '../layouts/Container';

import AnimatedBlock from '../components/AnimatedBlock';
import { AnimatedDirection } from '../interfaces';
import { AuroraBackground } from '@/components/ui/aurora-background';

const Intro: React.FC = () => {
  return (
    <AuroraBackground className="relative pb-20 pt-[4.375rem] lg:mb-[10rem]" id="about">
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
        <AnimatedBlock
          direction={AnimatedDirection.LEFT}
          className="mb-8 flex flex-col items-center text-center md:mb-10"
        >
          <h1 className="mb-8 text-xl font-bold text-primary md:w-[25rem] md:text-2xl xl:w-[35rem] xl:text-4xl">
            I build websites and code with{' '}
            <span className="bg-gradient-to-r from-orange-1 to-violet-1 bg-clip-text text-transparent">
              passion!
            </span>
          </h1>
          <h3 className="text-lg font-normal text-secondary md:w-[35rem] md:text-xl">
            I’m a qualified and professional front-end web developer with strong experience in
            creating websites. Good creative and analytical skills, team player with an eye for
            details. Open to new challenges where I can create beautiful results.
          </h3>
        </AnimatedBlock>
        <AnimatedBlock
          direction={AnimatedDirection.RIGHT}
          className="flex flex-col justify-center gap-2 text-center text-base md:flex-row md:gap-5 lg:text-lg"
        >
          <a
            href="mailto:vasyl.voloshyn07@gmail.com"
            className="w-full rounded-xl bg-gradient-to-r from-orange-1 to-violet-1 px-7 py-3 font-semibold text-black duration-200 hover:from-violet-1 hover:to-orange-1 hover:text-white hover:opacity-90 md:w-auto md:py-4"
          >
            Get In Touch
          </a>
          <a
            className="w-full rounded-xl border px-7 py-3 text-white duration-200 hover:bg-white/90 hover:text-black md:w-auto md:py-4"
            href={import.meta.env.VITE_PDF_CV_LINK}
            target="_blank"
            download
          >
            Download CV
          </a>
        </AnimatedBlock>
      </Container>
    </AuroraBackground>
  );
};

export default Intro;
