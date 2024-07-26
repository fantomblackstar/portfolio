import { ReactNode } from 'react';

export interface ChildrenProps {
  children?: ReactNode;
}

export interface ProjectCardItem {
  githubLink: string;
  liveLink: string;
  bgImgClassName: string;
  title: string;
  subTitle: string;
}

export interface TechImgItem {
  src: string;
  title: string;
  className?: HTMLImageElement['className'];
}

export interface ExperienceCompany {
  title: string;
  startPeriod: string;
  endPeriod?: string;
  description: string;
}
