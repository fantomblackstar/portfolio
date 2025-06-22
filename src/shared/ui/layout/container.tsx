import React, { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Container: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className={twMerge('container mx-auto px-5', props.className)}>{props.children}</div>;
};

export default Container;
