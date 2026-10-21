// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl = (process.env.SITE_URL || 'https://misri12.github.io/odoo-developer-website').replace(/\/$/, '');
let siteOrigin = 'https://misri12.github.io';
let base = '/';
try {
  const parsedSiteUrl = new URL(siteUrl);
  siteOrigin = parsedSiteUrl.origin;
  const pathname = parsedSiteUrl.pathname.replace(/\/$/, '');
  if (pathname) base = pathname;
} catch {
  // Keep safe deployment defaults if SITE_URL is malformed.
}

// https://astro.build/config
export default defineConfig({
  site: siteOrigin,
  base,
  trailingSlash: 'never',
  compressHTML: true,
  integrations: [
    sitemap({
      // Exclude noindex utility / future-content routes from the sitemap
      filter: (page) => !page.includes('/blog') && !page.includes('/careers'),
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
