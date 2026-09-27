import { brand, SITE_URL, social } from '../data/site';
import { absoluteUrl } from '../data/seo';

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export function websiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${brand.name} — ${brand.title}`,
    url: SITE_URL,
    description: brand.tagline,
    inLanguage: 'en',
    publisher: {
      '@type': 'Person',
      name: brand.name,
      url: SITE_URL,
    },
  };
}

export function personJsonLd(): Record<string, unknown> {
  const sameAs = [social.github, social.linkedin].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: brand.name,
    jobTitle: brand.title,
    description: brand.tagline,
    url: SITE_URL,
    email: brand.email,
    sameAs,
    knowsAbout: [
      'Odoo',
      'Odoo development',
      'Custom Odoo modules',
      'eCommerce integration',
      'Shopify Odoo integration',
      'WooCommerce Odoo integration',
      'Amazon Odoo integration',
      'Tally Odoo integration',
      'REST API integration',
      'ERP automation',
    ],
  };
}

export function webpageJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  type?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type || 'WebPage',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    isPartOf: {
      '@type': 'WebSite',
      name: `${brand.name} — ${brand.title}`,
      url: SITE_URL,
    },
    about: {
      '@type': 'Person',
      name: brand.name,
    },
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: {
      '@type': 'Person',
      name: brand.name,
      url: SITE_URL,
    },
    areaServed: 'Worldwide',
    serviceType: opts.name,
  };
}

export function softwareApplicationJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
  operatingSystem?: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    applicationCategory: opts.applicationCategory || 'BusinessApplication',
    operatingSystem: opts.operatingSystem || 'Odoo',
    author: {
      '@type': 'Person',
      name: brand.name,
      url: SITE_URL,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function stringifyJsonLd(data: JsonLd): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
