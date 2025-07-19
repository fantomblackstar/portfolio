import React from 'react';

import { Footer } from './footer';
import { Header } from './header';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="bg-primary">{children}</main>
      <Footer />
    </>
  );
};

export { PageLayout };
