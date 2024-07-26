import React from 'react';

import Intro from './blocks/Intro';
import PageLayout from './layouts/PageLayout';
import Tech from './blocks/Tech';
import Experience from './blocks/Experience';
import Projects from './blocks/Projects';

function App() {
  return (
    <PageLayout>
      <Intro />
      <Tech />
      <Experience />
      <Projects />
    </PageLayout>
  );
}

export default App;
