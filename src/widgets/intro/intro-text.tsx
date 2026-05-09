import { AnimatedBlock, AnimatedDirection } from '@/shared/ui/animated-block';

const IntroText = () => {
  return (
    <AnimatedBlock
      direction={AnimatedDirection.LEFT}
      className="mb-8 flex flex-col items-center text-center md:mb-10"
    >
      <h1 className="mb-8 text-xl font-bold text-primary md:w-[25rem] md:text-2xl xl:w-[35rem] xl:text-3xl 2xl:text-4xl">
        I build websites and code
        <br /> with{' '}
        <span className="bg-gradient-to-r from-orange-1 to-violet-1 bg-clip-text text-transparent">
          passion!
        </span>
      </h1>
      <h3 className="text-lg font-normal text-secondary md:w-[35rem] 2xl:text-xl">
        I&apos;m a Full Stack Developer who turns ambitious ideas into reality. With ~5 years of
        building SaaS, multi-tenant web applications, and CMS-driven platforms using React, Next.js,
        Node.js, and TypeScript. Let&apos;s turn your ideas into success!
      </h3>
    </AnimatedBlock>
  );
};

export { IntroText };
