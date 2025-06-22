import { AnimatedBlock, AnimatedDirection } from '@/shared/ui/animated-block';

const IntroText = () => {
  return (
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
        I’m a qualified and professional front-end web developer with strong experience in creating
        websites. Good creative and analytical skills, team player with an eye for details. Open to
        new challenges where I can create beautiful results.
      </h3>
    </AnimatedBlock>
  );
};

export { IntroText };
