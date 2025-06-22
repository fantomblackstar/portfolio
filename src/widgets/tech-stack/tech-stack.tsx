import React from 'react';
import { twMerge } from 'tailwind-merge';
import { motion, Variant } from 'framer-motion';
import { AnimatedBlock, AnimatedDirection } from '../../shared/ui/animated-block';
import Container from '@/shared/ui/layout/container';
import { SectionTitle } from '@/shared/ui/section-title';
import { TECH_IMG_ITEMS, TECH_NAMES_ROW_1, TECH_NAMES_ROW_2 } from './lib/constants';

const TECH_VISIBLE_VARIANT: Variant = {
  transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 },
};

const TechStack: React.FC = () => {
  return (
    <section id="technologies" className="scroll-mt-20 py-20 lg:py-[10rem]">
      <Container>
        <AnimatedBlock direction={AnimatedDirection.BOTTOM} delayMs={0}>
          <SectionTitle title="Experience with" className="text-yellow-400" />
        </AnimatedBlock>
        <AnimatedBlock
          className="mb-1 flex flex-nowrap justify-between gap-5 overflow-hidden py-3 md:mb-7"
          delayMs={0}
          direction={AnimatedDirection.BOTTOM}
          visibleVariant={TECH_VISIBLE_VARIANT}
        >
          {TECH_IMG_ITEMS.map((elem, index) => (
            <motion.img
              key={`TechImg ${index}`}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${elem.src}`}
              title={elem.title}
              alt={elem.title}
              className={twMerge(
                'inline-block size-10 duration-150 ease-linear hover:translate-y-2 md:size-20',
                elem.className,
              )}
              whileHover={{ scale: 1.2 }}
              variants={{ hidden: { y: 10, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            />
          ))}
        </AnimatedBlock>
        <div className="overflow-hidden whitespace-nowrap text-base text-secondary md:text-lg xl:text-xl">
          <ul className="flex animate-loop-slider-l gap-5">
            {TECH_NAMES_ROW_1.concat(TECH_NAMES_ROW_1).map((elem, index) => (
              <li key={`TechNamesRow1_${index}`}>{elem}</li>
            ))}
          </ul>
          <ul className="flex animate-loop-slider-r gap-5">
            {TECH_NAMES_ROW_2.concat(TECH_NAMES_ROW_2).map((elem, index) => (
              <li key={`TechNamesRow2_${index}`}>{elem}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export { TechStack };
