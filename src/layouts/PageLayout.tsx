import React from 'react';
import Footer from './Footer';
import { ChildrenProps } from '../interfaces';
import Header from './Header';

const PageLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <main className="bg-primary">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
