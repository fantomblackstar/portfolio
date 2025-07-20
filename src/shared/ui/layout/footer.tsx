import { GithubIcon, GmailIcon, LinkedInIcon, TelegramIcon } from '@/shared/assets/icons';
import Container from './container';

const socialLinks = [
  {
    href: 'https://t.me/vasyl_v_7',
    icon: TelegramIcon,
    className: 'size-7',
  },
  {
    href: 'https://www.linkedin.com/in/vasyl-voloshyn-dev',
    icon: LinkedInIcon,
    className: 'size-7',
  },
  {
    href: 'https://github.com/fantomblackstar',
    icon: GithubIcon,
    className: 'size-7',
  },
  {
    href: 'mailto:vasyl.voloshyn07@gmail.com',
    icon: GmailIcon,
    className: 'size-8',
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <Container className="flex justify-between divide-slate-500 py-5 text-base text-secondary xl:text-lg">
        <p>@{new Date().getFullYear()}</p>
        <div className="flex items-center gap-2 lg:gap-4">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;

            return (
              <a key={index} href={link.href} target="_blank" rel="noreferrer">
                <Icon
                  className={`${link.className} cursor-pointer duration-200 ease-linear hover:-translate-y-1`}
                />
              </a>
            );
          })}
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
