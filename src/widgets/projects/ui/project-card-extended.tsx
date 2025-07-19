import { motion } from 'framer-motion';
import { FC, useRef } from 'react';

import { useOutsideClick } from '@/shared/lib';

import { ProjectInfo } from '../model';

interface ProjectCardExtendedProps {
  clearActive: () => void;
  active: ProjectInfo;
}

const ProjectCardExtended: FC<ProjectCardExtendedProps> = ({ clearActive, active }) => {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => clearActive());

  return (
    <motion.div
      layoutId={`card-${active.title}-${active.id}`}
      ref={ref}
      className="flex h-full w-full max-w-md flex-col overflow-auto bg-zinc-800 sm:rounded-3xl md:h-fit md:max-h-[70vh] md:max-w-lg lg:max-w-4xl dark:bg-zinc-800"
    >
      <div className="sticky top-0 z-10 flex items-center justify-between bg-zinc-900 p-4">
        <motion.div
          layoutId={`image-${active.title}-${active.id}`}
          className="flex items-center gap-3"
        >
          <img src={active.companyLogo} alt={active.title} className="size-8 rounded" />
          <motion.h3
            layoutId={`title-${active.title}-${active.id}`}
            className="text-lg font-bold text-white lg:text-2xl"
          >
            {active.title}
          </motion.h3>
        </motion.div>

        {active.liveUrl && (
          <a
            href={active.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit shrink-0 animate-pulse rounded-md bg-purple-600 px-4 py-2 text-sm font-bold text-white hover:bg-purple-400"
          >
            View Live
          </a>
        )}
      </div>

      <div className="flex flex-col gap-6 p-6 text-white">
        <div>
          <h4 className="mb-2 text-lg font-semibold text-green-400">Description</h4>
          <motion.p
            layoutId={`description-${active.description}-${active.id}`}
            className="text-neutral-300"
          >
            {active.description}
          </motion.p>
        </div>

        {active.achievements.length > 0 && (
          <div>
            <h4 className="mb-2 text-lg font-semibold text-red-500">Achievements</h4>
            <ul className="list-inside list-disc space-y-1 text-neutral-300">
              {active.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}

        {active.responsibilities.length > 0 && (
          <div>
            <h4 className="mb-2 text-lg font-semibold text-purple-600">Responsibilities</h4>
            <ul className="list-inside list-disc space-y-1 text-neutral-300">
              {active.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="mb-2 text-lg font-semibold text-blue-700">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {active.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-zinc-700 px-3 py-1 text-sm text-white">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            onClick={clearActive}
            className="w-fit shrink-0 rounded-md bg-green-700 px-4 py-2 text-sm font-bold text-white hover:bg-white hover:text-black md:mt-0"
          >
            View Less
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export { ProjectCardExtended };
