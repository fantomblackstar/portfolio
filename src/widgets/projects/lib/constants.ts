import AppexoftLogo from '@/shared/assets/images/appexoft_logo.jpeg';
import DarlyLogo from '@/shared/assets/images/darly_solutions_logo.jpeg';
import LumitechLogo from '@/shared/assets/images/lumitech_fzco_logo.jpeg';

import { ProjectInfo } from '../model';

export const cards: ProjectInfo[] = [
  {
    id: 5,
    title: 'Multi-tenant app (NDA)',
    description:
      'This application combines deep industry expertise with advanced technology to deliver tailored solutions for industrial service companies. From optimizing safety through digital Job Safety Audits to enhancing turnaround management and environmental compliance, increase efficiency, and unlock new growth opportunities.',
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Next.js',
      'Directus',
      'Axios',
      'Zod',
      'React Query',
      'Prisma',
      'Puppeteer',
      'RTK Query',
      'Zustand',
      'React-hook-form',
      'FSD architecture',
      'Fastify',
      'REST APIs',
      'Tailwind CSS',
    ],
    companyLogo: LumitechLogo,
    responsibilities: [
      'Develop UI kit, resulting in increased development speed',
      'Contribute to Frontend and Backend development',
      'Implement new features and pages',
      'Fix bugs on production',
    ],
    achievements: [
      'Implemented safety map feature by providing real-time data and enhanced metrics on the map',
      'Developed full dynamic app from scratch using reusable blocks with full control from Directus CMS',
      'Engineered a scalable solution for generating complex PDF documents from extensive survey data',
    ],
  },
  {
    id: 4,
    title: 'RevivX - Delivering personalized & precision IV therapy',
    description:
      'The application RevivX allows you to deliver IV drip therapy under the world-leading brand, REVIV. The low-cost, low-risk solution to IV success in any business.',
    technologies: [
      'React.js',
      'TypeScript',
      'Next.js',
      'Axios',
      'Zod',
      'React Query',
      'React-hook-form',
      'REST APIs',
      'Tailwind CSS',
      'Next-intl',
      'ClickUp',
    ],
    companyLogo: DarlyLogo,
    responsibilities: [
      'Develop UI kit',
      'Implement features and pages, achieving an average of 90% completion rate within deadlines',
      'Collaborate closely with designers and other developers to ensure seamless integration and alignment with project goals',
      'Attend daily team meetings following the Scrum methodology to discuss progress, blockers, and upcoming tasks',
    ],
    achievements: [
      'Developed a calendar feature with three modes (day, week, month), allowing users to easily view and book events',
      'Successfully demonstrated the minimum viable product (MVP) to the client in 3 months, securing a new project',
    ],
    liveUrl: 'https://revivhub.com/login',
  },
  {
    id: 3,
    title: 'CRM for complex commercial and industrial flooring (NDA)',
    description:
      'A comprehensive web CRM application for a big corporation, a leader in complex commercial, industrial flooring, and marine decking projects. The company has completed over 4,000 projects across the U.S., focusing on quality, value, and customer-centric service.',
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Axios',
      'Redux',
      'Saga',
      'Reactstrap',
      'Bootstrap',
      'REST APIs',
      'Firebase Cloud Messaging',
      'Mongoose',
    ],
    companyLogo: AppexoftLogo,
    responsibilities: [
      'Contribute to Frontend and Backend development',
      'Develop new pages and features to optimize client interaction',
      'Resolve bugs and ensure the stability of the platform',
      'Implement new API queries and database models to support advanced functionality',
    ],
    achievements: [
      'Refactored all codebase to use React 17 and TypeScript',
      'Integrated push and email notifications, developed logic for their processing, capable of triggering specific user actions',
      'Created new pages and features, especially a user profile page with a lot of functionality and settings',
    ],
  },
  {
    id: 2,
    title: 'Job Search Web Application (NDA)',
    description:
      'The web platform is designed to connect job seekers and employers for European market.',
    technologies: [
      'React.js',
      'TypeScript',
      'Next.js',
      'React-hook-form',
      'Tailwind CSS',
      'Next-intl',
      'Zod',
    ],
    companyLogo: AppexoftLogo,
    responsibilities: [
      "Design and implementation of the application's architecture, ensuring scalability and maintainability",
      'Develop key pages and features to support core functionality',
      'Collaborate with other developers to ensure efficient teamwork and timely delivery',
    ],
    achievements: [
      'Created an architecture from scratch that supported seamless integration of advanced features',
      'Successfully developed a CV parsing feature that extracts data from uploaded PDF resumes into a structured form',
    ],
  },
  {
    id: 1,
    title: 'Car Insurance Application (NDA)',
    description:
      'This web application is tailored for one European country, designed to calculate and provide personalized car insurance quotes based on various vehicle specifications and monthly driving habits.',
    technologies: ['React.js', 'Next.js', 'I18n', 'Tailwind CSS'],
    companyLogo: AppexoftLogo,
    responsibilities: [],
    achievements: [
      'Delivered 5 large, visually complex landing pages using a pixel-perfect approach',
      'Successfully implemented localization for the site, enabling support for two languages (ENG, NL)',
    ],
  },
];
