import type { APIRoute } from 'astro';

const site = (import.meta.env.SITE || 'https://example.com').replace(/\/$/, '');

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

# Form handler — not a content page
Disallow: /api/

# Prepared blog index is noindex until articles exist
Disallow: /blog

Sitemap: ${site}/sitemap-index.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
