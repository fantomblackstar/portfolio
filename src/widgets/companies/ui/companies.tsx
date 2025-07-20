import { SectionBlock } from '@/shared/ui';
import { AnimatedBlock, AnimatedDirection } from '@/shared/ui/animated-block';
import Container from '@/shared/ui/layout/container';
import { SectionTitle } from '@/shared/ui/section-title';

import { COMPANIES_INFO } from '../lib/constants';
import { CompanyCard } from './company-card';

const Companies = () => {
  return (
    <SectionBlock id="companies">
      <Container>
        <AnimatedBlock direction={AnimatedDirection.BOTTOM} delayMs={0}>
          <SectionTitle title="Companies" className="text-blue-600" />
        </AnimatedBlock>
        <div className="space-y-3 md:space-y-5">
          {COMPANIES_INFO.map((company, index) => (
            <CompanyCard key={index} {...company} />
          ))}
        </div>
      </Container>
    </SectionBlock>
  );
};

export { Companies };
