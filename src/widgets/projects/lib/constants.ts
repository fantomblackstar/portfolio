import AppexoftLogo from '@/shared/assets/images/appexoft_logo.jpeg';
import DarlyLogo from '@/shared/assets/images/darly_solutions_logo.jpeg';
import LumitechLogo from '@/shared/assets/images/lumitech_fzco_logo.jpeg';

import { ProjectInfo } from '../model';

export const cards: ProjectInfo[] = [
  {
    id: 1,
    title: 'Valorian – Multi-tenant industrial services platform',
    description:
      'Multi-tenant platform for industrial service companies that combines deep industry expertise with advanced technology. Delivers real-time safety monitoring, automated reporting, and AI-powered task management to optimize safety, turnaround management, and environmental compliance.',
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Next.js',
      'Axios',
      'Zod',
      'React Query',
      'Prisma',
      'Puppeteer',
      'Makepdf',
      'RTK Query',
      'Redux Toolkit',
      'React-hook-form',
      'Fastify',
      'REST APIs',
      'Tailwind CSS',
    ],
    companyLogo: LumitechLogo,
    responsibilities: [
      'Contributed across frontend and backend, implementing new features and integrating APIs',
      'Developed UI kit to increase development speed and maintain consistency',
      'Led technical initiatives for automation and AI integration',
      'Collaborated with PMs and developers to deliver production-ready features',
    ],
    achievements: [
      'Delivered a real-time safety map that visualizes key operational metrics for industrial service companies, improving incident visibility and on-site decision-making',
      'Engineered a scalable PDF generation pipeline for large survey datasets, automating creation of complex, branded reports and reducing manual reporting effort',
      'Created an internal chat assistant for PMs and developers that turns short task prompts into detailed task descriptions enriched with relevant internal file and documentation references, improving backlog quality and specification speed',
      'Built an automation that scans Dependabot alerts for the company repos and auto-creates security-related tickets, saving about 5 hours per week previously spent on manual ticket creation',
    ],
  },
  {
    id: 2,
    title: 'NDA project – SaaS web application',
    description:
      'SaaS web application developed with a focus on delivering high-quality UI features within tight deadlines. Led the development team to ensure code quality and consistency.',
    technologies: [
      'React.js',
      'TypeScript',
      'Next.js',
      'Tailwind CSS',
      'React Query',
      'Zustand',
      'React-hook-form',
      'REST APIs',
    ],
    companyLogo: LumitechLogo,
    responsibilities: [
      'Led the project development team, providing technical guidance, conducting code reviews, and ensuring high code quality and consistency',
      'Coordinated delivery and implementation of the UI scope, enabling the team to complete the planned UI features within 2 months',
    ],
    achievements: [
      'Successfully delivered planned UI features within 2-month timeline',
      'Maintained high code quality standards through comprehensive code reviews',
    ],
  },
  {
    id: 3,
    title: 'Safety App – Multi-site safety and compliance platform',
    description:
      'Web safety platform that replaces complex safety PDFs and spreadsheets with intuitive instructions, checklists, matrices, and calculators. Gives refinery workers fast access to critical guidance directly at the point of work across multiple sites.',
    technologies: [
      'React.js',
      'TypeScript',
      'Next.js',
      'Directus CMS',
      'Tailwind CSS',
      'React Query',
      'Zustand',
      'REST APIs',
      'FSD architecture',
      'Node.js',
      'Express.js',
    ],
    companyLogo: LumitechLogo,
    responsibilities: [
      'Built a web safety platform that replaces complex safety PDFs and spreadsheets with intuitive instructions, checklists, matrices, and calculators',
      "Introduced a multi-site, role-based architecture where each plant's administrators manage their own pages, components, and safety policies via Directus CMS, without code changes",
      'Delivered a dynamic page builder so admins assemble content from reusable blocks, supporting thousands of workers across multiple sites',
    ],
    achievements: [
      'Created a flexible CMS-driven architecture enabling non-technical admins to manage safety content across multiple industrial sites',
      'Developed reusable component blocks that can be assembled into custom safety pages without code changes',
      'Improved worker access to critical safety information by replacing static PDFs with interactive web-based tools',
    ],
    liveUrl: 'https://safetyapp.marathonpetroleum.com',
  },
  {
    id: 4,
    title: 'RevivX – Personalized IV therapy platform',
    description:
      'Personalized IV therapy booking platform under the world-leading brand REVIV. Enables businesses to deliver precision IV drip therapy with an intuitive booking system, calendar management, and internationalized user experience.',
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
      'Fullcalendar',
      'Date-fns',
      'ClickUp',
    ],
    companyLogo: DarlyLogo,
    responsibilities: [
      'Built a booking calendar with day, week, and month views, allowing users to easily browse availability and schedule IV therapy sessions',
      'Shipped new pages and features with a high on-time completion rate, collaborating closely with designers and the backend developer to align UX and technical constraints',
      'Created a reusable UI kit to standardize components and styles across the platform, improving development speed and visual consistency',
      'Participated in daily Agile/Scrum ceremonies, communicating progress, addressing blockers, and helping keep the team aligned with sprint goals',
      'Worked in an internationalized environment, implementing localization and date/time handling for different markets',
    ],
    achievements: [
      'Developed a calendar feature with three modes (day, week, month), allowing users to easily view and book events',
      'Successfully demonstrated the minimum viable product (MVP) to the client in 3 months, securing a new project',
    ],
    liveUrl: 'https://revivhub.com/login',
  },
  {
    id: 5,
    title: 'CRM for complex commercial and industrial flooring (NDA)',
    description:
      'A comprehensive web CRM application for a big corporation, a leader in complex commercial, industrial flooring, and marine decking projects. The company has completed over 4,000 projects across the U.S., focusing on quality, value, and customer-centric service.',
    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Axios',
      'Redux Toolkit',
      'Redux-Saga',
      'Reactstrap',
      'Bootstrap',
      'REST APIs',
      'Firebase Cloud Messaging',
      'Mongoose',
      'MongoDB',
    ],
    companyLogo: AppexoftLogo,
    responsibilities: [
      'Refactored a large legacy codebase to React 17 and TypeScript, improving type safety, maintainability, and developer experience',
      'Implemented push and email notification logic to trigger context-specific user actions, increasing engagement and responsiveness to key events',
      'Handled both frontend and backend tasks, adding new API endpoints and database models to support complex CRM workflows',
      'Resolved production bugs, improving platform stability and supporting a large enterprise customer with thousands of projects across the U.S.',
    ],
    achievements: [
      'Refactored all codebase to use React 17 and TypeScript',
      'Integrated push and email notifications, developed logic for their processing, capable of triggering specific user actions',
      'Created new pages and features, especially a user profile page with a lot of functionality and settings',
    ],
  },
  {
    id: 6,
    title: 'Job Search Web Platform (NDA)',
    description:
      'Job marketplace connecting European job seekers and employers with advanced CV parsing and structured data extraction capabilities.',
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
      'Architected the application for a job marketplace connecting European job seekers and employers, focusing on scalability and maintainability',
      'Built a CV parsing feature that extracts structured data from uploaded PDF resumes, reducing manual data entry and improving the onboarding experience for candidates',
    ],
    achievements: [
      'Created an architecture from scratch that supported seamless integration of advanced features',
      'Successfully developed a CV parsing feature that extracts data from uploaded PDF resumes into a structured form',
    ],
  },
  {
    id: 7,
    title: 'Car Insurance Web Application (NDA)',
    description:
      'Web application for a European market designed to calculate and provide personalized car insurance quotes based on vehicle specifications and driving habits. Features multilingual support and pixel-perfect UI implementation.',
    technologies: ['React.js', 'Next.js', 'i18n', 'Tailwind CSS'],
    companyLogo: AppexoftLogo,
    responsibilities: [
      'Implemented localization for two languages across all pages, ensuring a consistent multilingual experience for users',
      'Redesigned the home page and several key pages to improve usability and overall user experience for policy quote and management flows',
    ],
    achievements: [
      'Delivered 5 large, visually complex landing pages using a pixel-perfect approach',
      'Successfully implemented localization for the site, enabling support for two languages (ENG, NL)',
    ],
  },
];
