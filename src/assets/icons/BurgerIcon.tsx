import React, { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const BurgerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={twMerge('h-6 w-6', props.className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
};
