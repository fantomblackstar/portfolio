import React from 'react';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <Container className="flex justify-between divide-slate-500 py-5 text-base text-secondary xl:text-lg">
        <p>@{new Date().getFullYear()}</p>
        <p>Vasyl Voloshyn</p>
      </Container>
    </footer>
  );
};

export default Footer;
