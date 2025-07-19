import React from 'react';

import { CardBody, CardContainer, CardItem } from '@/shared/ui/3d-card';

import type { CompanyCard } from '../model';

interface CompanyCardProps extends CompanyCard {}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  logo,
  position,
  startDate,
  endDate,
  description,
  link,
}) => {
  return (
    <CardContainer
      containerClassName="p-0"
      className="hover:bg-card-hover group relative rounded-2xl bg-card p-6 shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <CardBody className="h-auto w-full">
        <div className="mb-4 flex w-full flex-wrap items-center justify-start gap-4 md:flex-row">
          <CardItem
            translateZ={40}
            className="flex size-24 items-center justify-center overflow-hidden rounded-lg bg-zinc-700"
          >
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-auto max-h-full w-auto max-w-full object-contain"
            />
          </CardItem>
          <CardItem translateZ={40}>
            <a
              href={link}
              className="text-nowrap text-lg font-semibold text-white underline hover:text-blue-500 md:text-2xl"
              target="_blank" rel="noreferrer"
            >
              {name}
            </a>
            <p className="font-medium text-zinc-400">{position}</p>
          </CardItem>
          <CardItem
            translateZ={40}
            className="md:text-bas text-sm font-medium text-zinc-400 md:ml-auto"
          >
            {startDate} - {endDate || 'Current'}
          </CardItem>
        </div>
        <CardItem translateZ={40} className="text-justify text-base text-tertiary lg:text-lg">
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export { CompanyCard };
