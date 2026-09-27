// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl = (process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
let base = '/';
try {
  const pathname = new URL(siteUrl).pathname.replace(/\/$/, '');
  if (pathname) base = pathname;
} catch {
  base = '/';
}

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base,
  trailingSlash: 'never',
  compressHTML: true,
  integrations: [
    sitemap({
      // Exclude noindex / non-content utility routes from the sitemap
      filter: (page) => !page.includes('/blog'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
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
