import React, { useEffect } from 'react';
import { PageLayout } from '@/shared/ui/layout';
import { Intro } from '@/widgets/intro';
import { TechStack } from '@/widgets/tech-stack';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <PageLayout>
      <Intro />
      <TechStack />
    </PageLayout>
  );
}

export default App;
