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
        I&apos;m fullstack developer who turns ambitious ideas into reality. With 4+ years of creating
        high-performance web applications, I specialize in React.js ecosystems and scalable
        solutions. Let&apos;s turn your ideas into success!
      </h3>
    </AnimatedBlock>
  );
};

export { IntroText };
