import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { BurgerIcon } from '@/shared/assets/icons';
import { getSectionHref } from '@/shared/lib/public-url';
import { useOutsideClick } from '@/shared/lib/use-outside-click';

import { ProgressIndicator } from '../progress-indicator';
import Container from './container';

export interface HeaderNavItem {
  href: string;
  title: string;
}

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  { href: '#technologies', title: 'Technologies' },
  { href: '#projects', title: 'Projects' },
  { href: '#companies', title: 'Companies' },
  { href: '#references', title: 'References' },
  { href: '/connect', title: 'Connect' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useOutsideClick(mobileNavRef, () => setIsOpen(false));

  const isHomePage = pathname === '/';

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getNavHref = (href: string) => {
    if (href.startsWith('/')) {
      return href;
    }

    if (isHomePage) {
      return href;
    }

    return getSectionHref(href.slice(1));
  };

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('/') && !isHomePage) {
      event.preventDefault();
      navigate({ pathname: '/', hash: href });
    }

    closeMenu();
  };

  return (
    <header className="transparented fixed z-40 h-auto w-full bg-card shadow-md" ref={mobileNavRef}>
      <Container className="relative z-20 flex items-center justify-end py-5">
        <Link
          to="/connect/qr"
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-gradient-to-r from-orange-1 to-violet-1 bg-clip-text text-xl font-bold text-transparent md:text-3xl"
          aria-label="Open connections QR page"
        >
          VoloshynV
        </Link>
        <nav className="hidden text-sm text-primary md:flex md:space-x-8 md:text-base">
          {HEADER_NAV_ITEMS.map((navItem: HeaderNavItem, index: number) => (
            navItem.href.startsWith('/') ? (
              <Link
                key={`NavItem ${index}`}
                to={navItem.href}
                onClick={handleNavClick(navItem.href)}
                className="hover:text-blue-700"
              >
                {navItem.title}
              </Link>
            ) : (
              <a
                key={`NavItem ${index}`}
                href={getNavHref(navItem.href)}
                onClick={handleNavClick(navItem.href)}
                className="hover:text-blue-700"
              >
                {navItem.title}
              </a>
            )
          ))}
        </nav>
        <div className="w-auto md:hidden">
          <button
            className={twMerge('rotate-0 duration-200 focus:outline-none', isOpen && 'rotate-90')}
            onClick={toggleMenu}
          >
            <BurgerIcon className="stroke-primary" />
          </button>
        </div>
      </Container>
      <nav
        className={twMerge(
          'ease absolute -top-[12rem] z-10 flex w-full flex-col items-center space-y-3 bg-card pb-4 text-sm font-normal text-primary shadow-md duration-300 md:hidden md:text-base',
          isOpen && 'top-full',
        )}
      >
        {HEADER_NAV_ITEMS.map((navItem: HeaderNavItem, index: number) => (
          navItem.href.startsWith('/') ? (
            <Link key={`MobileNavItem ${index}`} to={navItem.href} onClick={handleNavClick(navItem.href)}>
              {navItem.title}
            </Link>
          ) : (
            <a key={`MobileNavItem ${index}`} href={getNavHref(navItem.href)} onClick={handleNavClick(navItem.href)}>
              {navItem.title}
            </a>
          )
        ))}
      </nav>
      <ProgressIndicator />
    </header>
  );
};

export { Header };
