import React from 'react';
import { ExperienceCompany } from '../interfaces';
import { format } from 'date-fns';

const ExperienceCard: React.FC<ExperienceCompany> = ({
  description,
  startPeriod,
  title,
  endPeriod,
}) => {
  const formatedStart = format(startPeriod, 'LLL yyyy');
  const formatedEnd = endPeriod ? format(endPeriod, 'LLL yyyy') : 'Present';

  return (
    <article className="mb-5 text-tertiary lg:mb-10">
      <div className="mb-4 flex flex-col gap-2 md:flex-row">
        <h3 className="text-lg font-bold text-primary md:text-xl lg:text-2xl">{title}</h3>
        <p className="text-base md:ml-auto md:text-lg">
          {formatedStart} - {formatedEnd}
        </p>
      </div>
      <p className="text-base md:text-lg xl:text-xl">{description}</p>
    </article>
  );
};

export default ExperienceCard;
