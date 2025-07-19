import { FC } from 'react';

import { GmailIcon } from '@/shared/assets/icons';
import { GlareCard } from '@/shared/ui/glare-card';

import { Reference } from '../model/model';

export const ReferenceCard: FC<Reference> = ({
  name,
  company,
  position,
  quote,
  email,
  logoUrl,
  linkedInUrl,
}) => {
  return (
    <GlareCard className="flex flex-col justify-center gap-5 rounded-md bg-card p-6 text-tertiary shadow-lg transition-all duration-300 hover:shadow-xl lg:gap-8">
      <div className="space-y-4">
        <img
          src={logoUrl}
          alt={name}
          className="mx-auto mt-5 block size-16 rounded-full md:size-20"
        />
        <div className="space-y-1 text-center">
          <h3 className="text-xl font-medium text-neutral-200">{name}</h3>
          <p>{position}</p>
          <p className="text-sm">at {company}</p>
        </div>
      </div>
      {quote && (
        <blockquote className="text-justify text-secondary">&ldquo;{quote}&rdquo;</blockquote>
      )}
      <div className="flex items-center justify-center gap-4">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn"
            className="h-7 w-auto"
          />
        </a>
        <a href={`mailto:${email}`}>
          <GmailIcon className="size-8 hover:scale-110" />
        </a>
      </div>
    </GlareCard>
  );
};
