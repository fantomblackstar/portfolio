import Container from './container';
import { SocialMedia } from '../social-media';

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

export { Footer };
