import type { APIRoute } from 'astro';

const site = (import.meta.env.SITE_URL || 'https://misri12.github.io/odoo-developer-website').replace(/\/$/, '');

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

# Form / utility endpoint — not a content page
Disallow: /api/

Sitemap: ${site}/sitemap-index.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
