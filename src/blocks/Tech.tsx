import React from 'react';
import Container from '../layouts/Container';
import SectionTitle from '../components/SectionTitle';
import { TECH_IMG_ITEMS, TECH_NAMES_ROW_1, TECH_NAMES_ROW_2 } from '../constants';
import { twMerge } from 'tailwind-merge';

const Tech: React.FC = () => {
  return (
    <section id="technologies" className="mb-20 lg:mb-[10rem]">
      <Container>
        <SectionTitle title="Experience with" className="text-yellow-400" />
        <div className="mb-10 flex flex-wrap justify-between gap-5">
          {TECH_IMG_ITEMS.map((elem, index) => (
            <img
              key={`TechImg ${index}`}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${elem.src}`}
              title={elem.title}
              alt={elem.title}
              className={twMerge('inline-block size-10 md:size-20', elem.className)}
            />
          ))}
        </div>
        <div className="overflow-hidden whitespace-nowrap text-base text-secondary md:text-lg xl:text-xl">
          <ul className="animate-loop-slider-l flex gap-5">
            {TECH_NAMES_ROW_1.concat(TECH_NAMES_ROW_1).map((elem, index) => (
              <li key={`TechNamesRow1_${index}`}>{elem}</li>
            ))}
          </ul>
          <ul className="animate-loop-slider-r flex gap-5">
            {TECH_NAMES_ROW_2.concat(TECH_NAMES_ROW_2).map((elem, index) => (
              <li key={`TechNamesRow2_${index}`}>{elem}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Tech;
