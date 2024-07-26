import { ExperienceCompany, ProjectCardItem, TechImgItem } from '../interfaces';
import { HeaderNavItem } from '../interfaces/layouts';

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  { href: '#about', title: 'About' },
  { href: '#experience', title: 'Experience' },
  { href: '#projects', title: 'Projects' },
  { href: '#Contact', title: 'Contact' },
];

export const TECH_IMG_ITEMS: TechImgItem[] = [
  { src: 'html5/html5-original.svg', title: 'HTML5' },
  { src: 'css3/css3-plain-wordmark.svg', title: 'CSS3' },
  { src: 'javascript/javascript-original.svg', title: 'JavaScript' },
  { src: 'react/react-original-wordmark.svg', title: 'React' },
  { src: 'nextjs/nextjs-original.svg', title: 'Next.js' },
  { src: 'typescript/typescript-original.svg', title: 'TypeScript' },
  { src: 'redux/redux-original.svg', title: 'Redux' },
  { src: 'materialui/materialui-original.svg', title: 'Material UI' },
  { src: 'bootstrap/bootstrap-original.svg', title: 'Bootstrap' },
  { src: 'eslint/eslint-original.svg', title: 'ESLint' },
];

export const TECH_NAMES_ROW_1: string[] = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Redux Toolkit',
  'Saga',
  'React-query',
  'React-hook-form',
  'Formik',
  'Bootstrap',
  'TailwindCSS',
  'Axios',
];

export const TECH_NAMES_ROW_2: string[] = [
  'RestAPI',
  'Apollo GQL',
  'i18n',
  'Prettier',
  'ESLint',
  'Node.js',
  'Express',
  'Mongoose',
  'Trello',
  'ClickUp',
  'Git',
  'GitHub',
  'Jest',
  'React-testing-library',
  'Yarn',
  'Npm',
  'BEM',
];

export const EXPERIENCE_COMPANIES: ExperienceCompany[] = [
  {
    description: `As a Middle Frontend Developer at DarlySolutions I have been working on a medicine
            healthcare project. Colaborating with big team that includes me, 4 developers, project
            manager and CTO. Worked on creating new pages and layouts, team communication, PR
            reviews`,
    startPeriod: '2024.04.22',
    endPeriod: '2024.06.12',
    title: ' Middle Frontend Developer at DarlySolutions',
  },
  {
    description:
      'During my tenure at Appexoft, I held the role of React Developer, where I develop projects with any level from Landing Page to Big Single Page Aplications.',
    startPeriod: '2022.09.12',
    endPeriod: '2024.04.19',
    title: 'Junior/Junior+ React Developer at Appexoft',
  },
];

export const PROJECTS_ITEMS: ProjectCardItem[] = [
  {
    bgImgClassName: 'bg-memory-cards',
    title: 'Memory Cards',
    subTitle:
      'Realy fun & interesting memory game for everyone. Here you also can play online with your friends',
    githubLink: 'https://github.com/fantomblackstar/memory-card',
    liveLink: 'https://fantomblackstar.github.io/memory-card',
  },
  {
    bgImgClassName: 'bg-text-converter',
    title: 'Text converter',
    subTitle:
      'One of the test task. The project was extended to convert .txt files to pdf and from pdf to another files too',
    githubLink: 'https://github.com/fantomblackstar/text2pdf-converter',
    liveLink: 'https://fantomblackstar.github.io/text2pdf-converter',
  },
  {
    bgImgClassName: 'bg-habits',
    title: 'MyHabits',
    subTitle:
      'Single Page Aplication for tracking your habits. This one become you to be more productive and successful',
    githubLink: 'https://github.com/fantomblackstar/myhabits',
    liveLink: 'https://fantomblackstar.github.io/myhabits',
  },
  {
    bgImgClassName: 'bg-password-generator',
    title: 'Password Generator',
    subTitle:
      'This Web site helps you to create strong password to save your personal information on all your accounts',
    githubLink: 'https://github.com/fantomblackstar/password-generator',
    liveLink: 'https://fantomblackstar.github.io/password-generator',
  },
  {
    bgImgClassName: 'bg-pig-game',
    title: 'Pig Game',
    subTitle:
      'Pig is a very simple fun dice game. Players losing their gained score for the turn if they roll is 1',
    githubLink: 'https://github.com/fantomblackstar/pig-dice-game',
    liveLink: 'https://fantomblackstar.github.io/pig-dice-game',
  },
  {
    bgImgClassName: 'bg-tonatos-studio',
    title: 'Tonatos Studio',
    subTitle:
      'Simple Landing page template. You can use this templates for your own company or goals',
    githubLink: 'https://github.com/fantomblackstar/tonatos-studio-template',
    liveLink: 'https://fantomblackstar.github.io/tonatos-studio-template',
  },
];
