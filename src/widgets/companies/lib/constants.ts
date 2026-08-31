import AcademySmartLogo from '@/shared/assets/images/academy-smart-logo.svg';
import AppexoftLogo from '@/shared/assets/images/appexoft_logo.jpeg';
import DarlyLogo from '@/shared/assets/images/darly_solutions_logo.jpeg';
import LumitechLogo from '@/shared/assets/images/lumitech_fzco_logo.jpeg';

import type { CompanyCard } from '../model';

export const COMPANIES_INFO: CompanyCard[] = [
  {
    name: 'Academy Smart',
    logo: AcademySmartLogo,
    position: 'Software Engineer',
    startDate: 'Aug 2026',
    endDate: null,
    link: 'https://academysmart.com/',
    description: `Academy Smart is a custom LMS development company operating since 2009 with a 4.9/5 Clutch rating. It specializes in tailored learning platforms for corporate training providers, edtech firms, and regulated industries. Its pre-built LMS foundation with SCORM, xAPI, LTI, and multi-tenancy cuts development time by 50% compared with typical builds and can reduce client costs versus SaaS subscription models. Notable work includes an enterprise LMS for Cyber Inc. that reduced costs by 68% and an AI-driven learning portal for EI Assessment Platform serving over 38,000 users.`,
  },
  {
    name: 'Lumitech',
    logo: LumitechLogo,
    position: 'Full Stack Developer',
    startDate: 'Aug 2024',
    endDate: 'Aug 2026',
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
