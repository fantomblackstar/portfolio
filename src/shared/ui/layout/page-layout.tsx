import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

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
