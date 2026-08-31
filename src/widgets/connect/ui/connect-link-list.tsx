import { QrCode } from '@/shared/ui/qr-code';

import { CONNECT_LINKS } from '../model/connect-links';
import { cn } from '@/shared/lib';

interface ConnectLinkListProps {
  qrMode: boolean;
}

const ConnectLinkList = ({ qrMode }: ConnectLinkListProps) => {
  return (
    <ul className={cn("mx-auto flex w-full max-w-lg flex-col ", qrMode ? 'gap-8 lg:gap-10':'gap-3')}>
      {CONNECT_LINKS.map(({ id, label, href, Icon }) => (
        <li key={id}>
          {qrMode ? (
            <div className="flex flex-col items-center gap-4 rounded-xl border border-primary bg-card px-6 py-10 md:px-8 md:py-12">
              <QrCode value={href} size={208} />
              <span className="flex items-center gap-2 text-base font-semibold text-primary">
                <Icon className="size-6" />
                {label}
              </span>
            </div>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border border-primary bg-card px-5 py-4 text-lg font-semibold text-primary duration-200 hover:bg-card-hover"
            >
              <Icon className="size-8" />
              {label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export { ConnectLinkList };
