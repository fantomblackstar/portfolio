export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: 'html5/html5-original.svg' },
      { name: 'CSS', icon: 'css3/css3-original.svg' },
      { name: 'SCSS', icon: 'sass/sass-original.svg' },
      { name: 'CSS modules', icon: 'css3/css3-original.svg' },
      { name: 'BEM' },
      { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', icon: 'bootstrap/bootstrap-original.svg' },
      { name: 'MUI', icon: 'materialui/materialui-original.svg' },
      { name: 'Puppeteer', icon: 'puppeteer/puppeteer-original.svg' },
      { name: 'Makepdf' },
    ],
  },
  {
    title: 'React Ecosystem',
    items: [
      { name: 'React.js', icon: 'react/react-original.svg' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
      { name: 'React-hook-form' },
      { name: 'Formik' },
      { name: 'Reactstrap', icon: 'reactbootstrap/reactbootstrap-original.svg' },
    ],
  },
  {
    title: 'State Management',
    items: [
      { name: 'Redux Toolkit', icon: 'redux/redux-original.svg' },
      { name: 'Redux Saga' },
      { name: 'Zustand' },
      { name: 'RTK Query', icon: 'redux/redux-original.svg' },
      { name: 'React-query' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'express/express-original.svg' },
      { name: 'Fastify', icon: 'fastify/fastify-original.svg' },
      { name: 'Mongoose', icon: 'mongoose/mongoose-original.svg' },
      { name: 'Prisma', icon: 'prisma/prisma-original.svg' },
      { name: 'FCM', icon: 'firebase/firebase-plain.svg' },
    ],
  },
  {
    title: 'APIs',
    items: [
      { name: 'REST API' },
      { name: 'Axios' },
      { name: 'Apollo GraphQL', icon: 'graphql/graphql-plain.svg' },
      { name: 'Directus SDK' },
    ],
  },
  {
    title: 'Testing & Quality',
    items: [
      { name: 'Jest', icon: 'jest/jest-plain.svg' },
      { name: 'React-testing-library' },
      { name: 'Prettier' },
      { name: 'ESLint', icon: 'eslint/eslint-original.svg' },
    ],
  },
  {
    title: 'Tools & Utilities',
    items: [
      { name: 'Git', icon: 'git/git-original.svg' },
      { name: 'GitHub', icon: 'github/github-original.svg' },
      { name: 'i18n' },
      { name: 'Next-intl' },
      { name: 'Date-fns' },
      { name: 'Fullcalendar' },
    ],
  },
  {
    title: 'Project Management',
    items: [
      { name: 'Trello', icon: 'trello/trello-plain.svg' },
      { name: 'ClickUp' },
      { name: 'Yarn', icon: 'yarn/yarn-original.svg' },
      { name: 'NPM', icon: 'npm/npm-original-wordmark.svg' },
    ],
  },
];
