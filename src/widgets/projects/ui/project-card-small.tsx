import { motion } from 'framer-motion';
import { FC } from 'react';

import { AnimatedBlock, AnimatedDirection } from '@/shared/ui';

import { ProjectInfo } from '../model';

interface ProjectCardSmallProps extends ProjectInfo {
  onCardClick: (id: number) => void;
  index: number;
}

export const ProjectCardSmall: FC<ProjectCardSmallProps> = ({
  id,
  title,
  description,
  companyLogo,
  onCardClick,
  index,
  liveUrl,
}) => {
  return (
    <AnimatedBlock
      direction={index % 2 === 0 ? AnimatedDirection.RIGHT : AnimatedDirection.LEFT}
      layoutId={`card-${title}-${id}`}
      key={`card-${title}-${id}`}
      onClick={() => onCardClick(id)}
      className="flex cursor-pointer flex-col items-center justify-between gap-5 rounded-xl bg-card p-6 text-white hover:bg-card-hover md:flex-row md:gap-10"
    >
      <motion.div>
        <motion.div layoutId={`image-${title}-${id}`} className="mb-2 flex items-center gap-2">
          <img src={companyLogo} alt={title} className="size-5 rounded md:size-7" />
          <motion.h3
            layoutId={`title-${title}-${id}`}
            className="text-left text-lg font-medium text-neutral-200 md:text-2xl"
          >
            {title}
          </motion.h3>
        </motion.div>

        <motion.p
          layoutId={`description-${description}-${id}`}
          className="text-justify text-base text-tertiary md:text-left lg:text-lg"
        >
          {description}
        </motion.p>
      </motion.div>
      <div className="flex w-fit shrink-0 flex-col gap-2">
        <motion.button
          layoutId={`button-${title}-${id}`}
          className="mt-4 w-full text-nowrap rounded-md bg-green-700 px-4 py-2 text-sm font-bold text-primary hover:bg-white hover:text-black md:mt-0"
        >
          View More
        </motion.button>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full text-nowrap rounded-md bg-purple-600 px-4 py-2 text-center text-sm font-bold text-white hover:bg-purple-400"
          >
            Live Preview
          </a>
        )}
      </div>
    </AnimatedBlock>
  );
};
