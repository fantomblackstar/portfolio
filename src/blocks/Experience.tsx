import React from 'react';
import Container from '../layouts/Container';
import SectionTitle from '../components/SectionTitle';
import { EXPERIENCE_COMPANIES } from '../constants';
import { AnimatedDirection, ExperienceCompany } from '../interfaces';
import ExperienceCard from '../components/ExperienceCard';
import AnimatedBlock from '../components/AnimatedBlock';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-20 scroll-mt-20 lg:mb-[10rem]">
      <Container>
        <AnimatedBlock direction={AnimatedDirection.BOTTOM} delayMs={0}>
          <SectionTitle title="Work experience" className="text-blue-600" />
        </AnimatedBlock>
        {EXPERIENCE_COMPANIES.map((elem: ExperienceCompany, index: number) => (
          <AnimatedBlock
            key={`Company ${index}`}
            direction={index % 2 ? AnimatedDirection.LEFT : AnimatedDirection.RIGHT}
          >
            <ExperienceCard {...elem} />
          </AnimatedBlock>
        ))}
      </Container>
    </section>
  );
};

export default Experience;
