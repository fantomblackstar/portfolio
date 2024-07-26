import React, { ReactNode } from 'react';
import { ChildrenProps, ProjectCardItem } from '../interfaces';
import { twMerge } from 'tailwind-merge';

interface ProjectCardProps extends ProjectCardItem {
  className?: HTMLElement['className'];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  bgImgClassName,
  githubLink,
  liveLink,
  subTitle,
  title,
  className,
}) => {
  return (
    <article className={twMerge('overflow-hidden rounded-xl bg-card', className)}>
      <div className={twMerge('h-40 md:h-60 xl:h-72', bgImgClassName)}></div>
      <section className="flex flex-col justify-start p-4 md:p-7">
        <h3 className="mb-3 text-lg font-semibold md:text-xl xl:text-2xl">{title}</h3>
        <p className="mb-5 text-base text-tertiary md:text-lg xl:text-xl">{subTitle}</p>
        <div className="justyfy-start mt-auto flex flex-col gap-3 text-center text-base md:flex-row md:justify-between lg:text-lg">
          <a
            href={liveLink}
            className="w-full rounded-xl bg-gradient-to-r from-orange-1 to-violet-1 px-3 py-3 font-semibold text-black duration-200 hover:from-violet-1 hover:to-orange-1 hover:opacity-90 md:w-[calc((100%-12px)/2)] md:py-4"
            target="_blank"
          >
            View Live
          </a>
          <a
            href={githubLink}
            className="w-full rounded-xl border px-3 py-3 duration-200 hover:bg-white/90 hover:font-semibold hover:text-black md:w-[calc((100%-12px)/2)] md:py-4"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </section>
    </article>
  );
};

export default ProjectCard;
