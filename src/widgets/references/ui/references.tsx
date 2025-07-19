import { FC } from 'react';

import { AnimatedBlock, AnimatedDirection } from '@/shared/ui/animated-block';
import { SectionBlock } from '@/shared/ui/section-block';
import { SectionTitle } from '@/shared/ui/section-title';

import { referencesData } from '../lib/references-data';
import { Reference } from '../model/model';
import { ReferenceCard } from './reference-card';

export const References: FC = () => {
  return (
    <SectionBlock className="bg-gray-900" id="references">
      <div className="container mx-auto">
        <AnimatedBlock direction={AnimatedDirection.BOTTOM} delayMs={100}>
          <SectionTitle title="References" className="text-purple-600" />
        </AnimatedBlock>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {referencesData.map((reference: Reference) => (
            <ReferenceCard key={reference.id} {...reference} />
          ))}
        </div>
      </div>
    </SectionBlock>
  );
};
