import React from 'react';
import Container from '../layouts/Container';
import { PROJECTS_ITEMS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

const Projects: React.FC = () => {
  return (
    <section className="pb-24">
      <Container>
        <SectionTitle
          title="Projects"
          className="block w-max bg-gradient-to-r from-orange-1 to-violet-1 bg-clip-text text-transparent"
        />
        <div className="flex flex-wrap gap-3 lg:gap-5">
          {PROJECTS_ITEMS.map((project, index) => (
            <ProjectCard
              key={`ProjectItem ${index}`}
              {...project}
              className="w-full md:w-[calc((100%-12px)/2)] lg:w-[calc((100%-40px)/3)]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
