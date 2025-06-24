import React, { useEffect } from 'react';
import { PageLayout } from '@/shared/ui/layout';
import { Intro } from '@/widgets/intro';
import { TechStack } from '@/widgets/tech-stack';
import { Companies } from '@/widgets/companies';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <PageLayout>
      <Intro />
      <TechStack />
      <Companies />
      <p className="pb-10 text-center text-zinc-400">More blocks are coming soon...</p>
    </PageLayout>
  );
}

export default App;
