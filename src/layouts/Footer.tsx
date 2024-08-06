import React from 'react';
import Container from './Container';
import SocialMedia from '../components/SocialMedia';
import AnimatedBlock from '../components/AnimatedBlock';

const Footer = () => {
  return (
    <footer className="bg-primary">
      <Container className="flex justify-between divide-slate-500 py-5 text-base text-secondary xl:text-lg">
        <p>@{new Date().getFullYear()}</p>
        <SocialMedia />
      </Container>
    </footer>
  );
};

export default Footer;
