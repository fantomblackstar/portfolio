export function getPublicUrl(pathname: string): string {
  const origin = window.location.origin;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (normalizedPath === '/') {
    return `${origin}${base}/`;
  }

  return `${origin}${base}${normalizedPath}`;
}

export function getSectionHref(sectionId: string): string {
  return `${import.meta.env.BASE_URL}#${sectionId}`;
}
