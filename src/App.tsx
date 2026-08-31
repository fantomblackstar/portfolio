import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ConnectPage } from '@/pages/connect-page';
import { ConnectQrPage } from '@/pages/connect-qr-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { PageLayout } from '@/shared/ui/layout';
import { Companies } from '@/widgets/companies';
import { Intro } from '@/widgets/intro';
import { Projects } from '@/widgets/projects';
import { References } from '@/widgets/references';
import { TechStack } from '@/widgets/tech-stack';

function HomePage() {
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

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/connect" element={<PageLayout><ConnectPage /></PageLayout>} />
      <Route path="/connect/qr" element={<PageLayout><ConnectQrPage /></PageLayout>} />
      <Route path="*" element={<PageLayout><NotFoundPage /></PageLayout>} />
    </Routes>
  );
}

export default App;
