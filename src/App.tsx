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
      <Companies />
      <Projects />
      <References />
      <p className="py-10 text-center text-zinc-400">More blocks are coming soon...</p>
    </PageLayout>
  );
}

export default App;
