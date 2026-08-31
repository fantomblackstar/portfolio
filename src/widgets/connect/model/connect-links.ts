import { LinkedInIcon, PortfolioIcon, TelegramIcon } from '@/shared/assets/icons';
import { getPublicUrl } from '@/shared/lib/public-url';

export const CONNECT_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vasyl-voloshyn-dev',
    Icon: LinkedInIcon,
  },
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/vasyl_v_7',
    Icon: TelegramIcon,
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    href: getPublicUrl('/'),
    Icon: PortfolioIcon,
  },
] as const;

export const getConnectPageUrl = () => getPublicUrl('/connect');
