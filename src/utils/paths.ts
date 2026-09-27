/**
 * Prefix internal paths with Astro `base` (needed for GitHub Pages project sites).
 * Root hosting (Hostinger): SITE_URL=https://domain.com → base `/`
 * GitHub Pages project: SITE_URL=https://user.github.io/repo → base `/repo`
 */
export function p(path: string = '/'): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (!path || path === '/') {
    return base || '/';
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
