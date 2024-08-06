import React, { useEffect, useState } from 'react';
import Container from '../layouts/Container';
import { PROJECTS_ITEMS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import AnimatedBlock from '../components/AnimatedBlock';
import { AnimatedDirection } from '../interfaces';

const Projects: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width:767px)');
    if (media.matches) setIsMobile(true);
  });

  return (
    <section className="scroll-mt-24 overflow-clip pb-24" id="projects">
      <Container>
        <AnimatedBlock direction={AnimatedDirection.BOTTOM} delayMs={0}>
          <SectionTitle
            title="Projects"
            className="block w-max bg-gradient-to-r from-orange-1 to-violet-1 bg-clip-text text-transparent"
          />
        </AnimatedBlock>
        <div className="flex flex-wrap gap-3 lg:gap-5">
          {PROJECTS_ITEMS.map((project, index) => (
            <AnimatedBlock
              key={`ProjectItem ${index}`}
              direction={index % 2 ? AnimatedDirection.RIGHT : AnimatedDirection.LEFT}
              className="w-full md:w-[calc((100%-12px)/2)] lg:w-[calc((100%-20px)/2)]"
              delayMs={isMobile ? 0 : 500}
            >
              <ProjectCard {...project} />
            </AnimatedBlock>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
