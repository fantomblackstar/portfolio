import { twMerge } from 'tailwind-merge';

import { QrCodeIcon } from '@/shared/assets/icons';

interface QrModeToggleProps {
  qrMode: boolean;
  onChange: (qrMode: boolean) => void;
}

const QrModeToggle = ({ qrMode, onChange }: QrModeToggleProps) => {
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      <span
        className={twMerge('text-sm font-medium transition-colors', !qrMode ? 'text-primary' : 'text-secondary')}
      >
        Links
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={qrMode}
        aria-label="Show destinations as QR codes"
        onClick={() => onChange(!qrMode)}
        className={twMerge(
          'relative h-8 w-14 rounded-3xl border border-primary/20 duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-1',
          qrMode ? 'bg-gradient-to-r from-orange-1 to-violet-1' : 'bg-zinc-600/80',
        )}
      >
        <span
          className={twMerge(
            'absolute left-1 top-1 size-6 rounded-full bg-white shadow-md duration-200 -translate-y-[2px]',
            qrMode ? 'translate-x-6' : 'translate-x-0',
          )}
        />
      </button>
      <QrCodeIcon className={twMerge('size-6 transition-colors', qrMode ? 'text-primary' : 'text-secondary')} />
    </div>
  );
};

export { QrModeToggle };
