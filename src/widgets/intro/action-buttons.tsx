import { AnimatedBlock, AnimatedDirection } from '@/shared/ui/animated-block';

const ActionButtons = () => {
  return (
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
        download rel="noreferrer"
      >
        Download CV
      </a>
    </AnimatedBlock>
  );
};

export { ActionButtons };
