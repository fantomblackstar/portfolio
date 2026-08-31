import { QRCodeSVG } from 'qrcode.react';

import { cn } from '@/shared/lib/utils';

interface QrCodeProps {
  value: string;
  size?: number;
  className?: string;
}

const QrCode = ({ value, size = 200, className }: QrCodeProps) => {
  if (!value) {
    return null;
  }

  try {
    return (
      <div className={cn('inline-flex rounded-xl bg-white p-3', className)}>
        <QRCodeSVG value={value} size={size} bgColor="#ffffff" fgColor="#161513" />
      </div>
    );
  } catch {
    return (
      <a
        href={value}
        target="_blank"
        rel="noreferrer"
        className="break-all text-sm text-secondary underline"
      >
        {value}
      </a>
    );
  }
};

export { QrCode };
