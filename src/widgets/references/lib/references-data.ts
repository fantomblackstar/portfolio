import DanielShchadnykhAvatar from '@/widgets/references/ui/images/daniel-shchadnykh.jpeg';
import NoAvatar from '@/widgets/references/ui/images/no-avatar.jpeg';

import { Reference } from '../model/model';

export const referencesData: Reference[] = [
  {
    id: 1,
    name: 'Danil Shchadnykh',
    company: 'Phenomenon Studio',
    position: 'Project Manager',
    quote: null,
    email: 'danyashchadnykh@gmail.com',
    linkedInUrl: 'https://linkedin.com/in/daniel-shchadnykh',
    logo: DanielShchadnykhAvatar,
  },
  {
    id: 2,
    name: 'Yurii Andriiko',
    company: 'DarlySolutions',
    position: 'Full Stack JavaScript Developer',
    linkedInUrl: 'https://linkedin.com/in/yurii-andriiko',
    email: 'yuretshome@gmail.com',
    quote:
      'I had the opportunity to work in the same team as Vasyl. He has proven to be a strong specialist. Responsive and open to helping other team members. What can I say, a team player! I can recommend him!',
    logo: NoAvatar,
  },
  {
    id: 3,
    linkedInUrl: 'https://linkedin.com/in/vitaliy-golubovich-b81618212',
    name: 'Vitaliy Golubovich',
    company: 'Sombra',
    position: 'Frontend Developer',
    quote: null,
    email: 'vitalik.golubovich.work@gmail.com',
    logo: NoAvatar,
  },
];
