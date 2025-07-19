import { motion } from 'framer-motion';
import { FC } from 'react';
import { ProjectInfo } from '../model';

interface ProjectCardSmallProps extends ProjectInfo {
  onCardClick: (id: number) => void;
}

export const ProjectCardSmall: FC<ProjectCardSmallProps> = ({
  id,
  title,
  description,
  companyLogo,
  onCardClick,
}) => {
  return (
    <motion.div
      layoutId={`card-${title}-${id}`}
      key={`card-${title}-${id}`}
      onClick={() => onCardClick(id)}
      className="hover:bg-card-hover flex cursor-pointer flex-col items-center justify-between gap-5 rounded-xl bg-card p-6 text-white md:flex-row md:gap-10"
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
      <motion.button
        layoutId={`button-${title}-${id}`}
        className="mt-4 w-fit shrink-0 rounded-md bg-green-700 px-4 py-2 text-sm font-bold text-primary hover:bg-white hover:text-black md:mt-0"
      >
        View More
      </motion.button>
    </motion.div>
  );
};
