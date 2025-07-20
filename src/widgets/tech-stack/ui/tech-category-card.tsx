import { FC } from 'react';

import { TechItem } from '../lib/tech-categories';

interface TechCategoryCardProps {
  title: string;
  items: TechItem[];
  className?: string;
  index: number;
}

const colors = [
  'border-blue-500',
  'border-purple-500',
  'border-green-500',
  'border-yellow-500',
  'border-red-500',
  'border-pink-500',
  'border-orange-500',
  'border-gray-100',
];

export const TechCategoryCard: FC<TechCategoryCardProps> = ({ title, items, className, index }) => {
  const randomColor = colors[index % colors.length];

  return (
    <div
      className={`rounded-lg border-t-4 bg-card p-6 shadow-md transition-all duration-300 hover:shadow-lg ${randomColor} hover:-translate-y-1 ${className}`}
    >
      <h3 className="mb-4 text-xl font-semibold text-blue-500">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={`${title}-${index}`}
            className="flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1 text-secondary transition-colors hover:bg-slate-700"
          >
            {item.icon && (
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}`}
                alt={item.name}
                className="size-5"
              />
            )}
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};
