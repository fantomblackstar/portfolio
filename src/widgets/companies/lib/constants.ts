import AppexoftLogo from '@/shared/assets/images/appexoft_logo.jpeg';
import DarlyLogo from '@/shared/assets/images/darly_solutions_logo.jpeg';
import LumitechLogo from '@/shared/assets/images/lumitech_fzco_logo.jpeg';

import type { CompanyCard } from '../model';

export const COMPANIES_INFO: CompanyCard[] = [
  {
    name: 'Lumitech',
    logo: LumitechLogo,
    position: 'Full Stack Developer',
    startDate: 'Aug 2024',
    endDate: null,
    link: 'https://lumitech.co/',
    description: `Lumitech is a custom software development company based in the UAE, achieving 2x engineering growth in 2024 and ranked among Clutch's 100 fastest-growing software development companies. Focus is on building AI- and tech-driven development teams to help businesses increase operational efficiency and adapt to an AI-driven industry through custom software.`,
  },
  {
    name: 'Darly Solutions',
    logo: DarlyLogo,
    position: 'Frontend Developer',
    startDate: 'Apr 2024',
    endDate: 'Jul 2024',
    link: 'https://www.darly.solutions/',
    description: `A full-service IT solutions provider, dedicated to delivering exceptional service and cutting-edge technology to clients. Their goal is to help clients make the most of their technology investments and increase their competitiveness.`,
  },
  {
    name: 'Appexoft',
    logo: AppexoftLogo,
    position: 'Full Stack Developer',
    startDate: 'Sep 2021',
    endDate: 'Apr 2024',
    link: 'https://appexoft.com/',
    description: `The company to turn into reality what exists in their imagination. It is important for them to build environment where both clients and employees will get pleasure from work because it's the only way to assure highest level of productivity. Their goal is to develop first-class mobile applications and websites to provide their customers with the best solutions to maximize profits and make their ideas a reality.`,
  },
];
