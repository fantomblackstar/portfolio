import { useEffect } from 'react';

import { PageLayout } from '@/shared/ui/layout';
import { Companies } from '@/widgets/companies';
import { Intro } from '@/widgets/intro';
import { Projects } from '@/widgets/projects';
import { References } from '@/widgets/references';
import { TechStack } from '@/widgets/tech-stack';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <PageLayout>
      <Intro />
      <TechStack />
      <Projects />
      <Companies />
      <References />
    </PageLayout>
  );
}

export default App;
