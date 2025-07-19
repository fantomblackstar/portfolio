import React from 'react';

import { GithubIcon } from '../assets/icons/GithubIcon';
import { GmailIcon } from '../assets/icons/GmailIcon';
import { LinkedInIcon } from '../assets/icons/LinkedInIcon';
import TelegramIcon from '../assets/icons/TelegramIcon';

const SocialMedia: React.FC = () => {
  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <a href="https://t.me/vasyl_v_7" target="_blank" rel="noreferrer">
        <TelegramIcon className="size-7 cursor-pointer duration-200 ease-linear hover:-translate-y-1" />
      </a>
      <a href="https://www.linkedin.com/in/vasyl-voloshyn-9142b324b" target="_blank" rel="noreferrer">
        <LinkedInIcon className="size-7 cursor-pointer duration-200 ease-linear hover:-translate-y-1" />
      </a>
      <a href="https://github.com/fantomblackstar" target="_blank" rel="noreferrer">
        <GithubIcon className="size-7 cursor-pointer duration-200 ease-linear hover:-translate-y-1" />
      </a>
      <a href="mailto:vasyl.voloshyn07@gmail.com" target="_blank" rel="noreferrer">
        <GmailIcon className="size-8 cursor-pointer duration-200 ease-linear hover:-translate-y-1" />
      </a>
    </div>
  );
};

export { SocialMedia };
