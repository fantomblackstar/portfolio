import React from 'react';
import Container from '../layouts/Container';
import SectionTitle from '../components/SectionTitle';
import { EXPERIENCE_COMPANIES } from '../constants';
import { ExperienceCompany } from '../interfaces';
import ExperienceCard from '../components/ExperienceCard';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-20 lg:mb-[10rem]">
      <Container>
        <SectionTitle title="Work experience" className="text-blue-600" />
        {EXPERIENCE_COMPANIES.map((elem: ExperienceCompany, index: number) => (
          <ExperienceCard {...elem} key={`Company ${index}`} />
        ))}
      </Container>
    </section>
  );
};

export default Experience;
