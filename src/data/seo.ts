import { SITE_URL, brand } from './site';

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
  ogType?: 'website' | 'article' | 'profile';
  robots?: string;
  ogImage?: string;
};

/**
 * Keyword map + page-specific metadata.
 * One primary search intent per major page. Titles and descriptions are unique.
 */
export const pagesSeo: Record<string, PageSeo> = {
  home: {
    path: '/',
    title: `Odoo Developer & eCommerce Integration Specialist | ${brand.name}`,
    description:
      'Custom Odoo development, eCommerce integrations and ERP automation. Connect Shopify, WooCommerce, Amazon and APIs to Odoo with maintainable solutions.',
    h1: 'Custom Odoo Solutions That Connect Your Business.',
    primaryKeyword: 'Odoo developer',
    secondaryKeywords: ['Odoo development', 'Odoo integration', 'Odoo ERP developer'],
    ogImage: '/images/og/home.png',
  },
  odooDevelopment: {
    path: '/odoo-development',
    title: `Odoo Development Services | Custom Odoo Developer | ${brand.name}`,
    description:
      'Odoo development for customizations, workflows, modules and ERP processes. Practical Odoo engineering for international businesses and implementation partners.',
    h1: 'Odoo Development for Real Business Workflows',
    primaryKeyword: 'Odoo development',
    secondaryKeywords: ['Odoo customization', 'Odoo developer', 'Odoo ERP development'],
    ogImage: '/images/og/odoo-development.png',
  },
  customModules: {
    path: '/custom-odoo-modules',
    title: `Custom Odoo Module Development | Odoo Developer | ${brand.name}`,
    description:
      'Custom Odoo module development for industry workflows, automation and ERP extensions. Clean module structure built for maintainability and upgrades.',
    h1: 'Custom Odoo Module Development',
    primaryKeyword: 'Odoo custom module development',
    secondaryKeywords: ['custom Odoo modules', 'Odoo module developer'],
    ogImage: '/images/og/custom-odoo-modules.png',
  },
  ecommerceIntegrations: {
    path: '/ecommerce-integrations',
    title: 'eCommerce & Odoo Integrations | Shopify, WooCommerce & Amazon',
    description:
      'Connect your storefront to Odoo. Shopify, WooCommerce, Amazon and related eCommerce integrations with order, inventory and product synchronization.',
    h1: 'eCommerce & Odoo Integrations',
    primaryKeyword: 'Odoo eCommerce integration',
    secondaryKeywords: ['Shopify Odoo integration', 'WooCommerce Odoo integration'],
    ogImage: '/images/og/ecommerce-integrations.png',
  },
  apiErp: {
    path: '/api-erp-integrations',
    title: `Odoo API & ERP Integrations | REST API Development | ${brand.name}`,
    description:
      'Odoo REST API and ERP integrations for payments, shipping, accounting and custom systems. Reliable automation between Odoo and your stack.',
    h1: 'Odoo API & ERP Integrations',
    primaryKeyword: 'Odoo API integration',
    secondaryKeywords: ['Odoo REST API', 'ERP integration'],
    ogImage: '/images/og/api-erp-integrations.png',
  },
  projects: {
    path: '/projects',
    title: `Odoo Development Projects & Case Studies | ${brand.name}`,
    description:
      'Selected Odoo development and integration work — custom modules, eCommerce assistants and ERP automation projects.',
    h1: 'Odoo Projects & Case Studies',
    primaryKeyword: 'Odoo development projects',
    ogImage: '/images/og/projects.png',
  },
  odooApps: {
    path: '/odoo-apps',
    title: `Odoo Apps & Custom Modules | ${brand.name}`,
    description:
      'Odoo Apps and connectors for Shopify, WooCommerce, Amazon, Tally, QuickBooks, AI commerce, pallet management and more — built by Gultaj Khan.',
    h1: 'Odoo Apps & Connectors',
    primaryKeyword: 'Odoo Apps',
    secondaryKeywords: ['Odoo modules', 'Odoo eCommerce app', 'Shopify Odoo connector'],
    ogImage: '/images/og/odoo-apps.png',
  },
  about: {
    path: '/about',
    title: `About ${brand.name} | Odoo Developer & Integration Specialist`,
    description:
      'About Gultaj Khan — Odoo developer focused on custom modules, eCommerce integrations and practical ERP automation for international clients.',
    h1: `About ${brand.name}`,
    primaryKeyword: 'Odoo developer',
    ogType: 'profile',
    ogImage: '/images/og/about.png',
  },
  contact: {
    path: '/contact',
    title: 'Contact an Odoo Developer | Discuss Your Project',
    description:
      'Contact Gultaj Khan to discuss Odoo development, custom modules, eCommerce integrations or API automation. Send project details to start the conversation.',
    h1: 'Discuss Your Odoo or Integration Project',
    primaryKeyword: 'hire Odoo developer',
    ogImage: '/images/og/contact.png',
  },
  shopify: {
    path: '/shopify-odoo-integration',
    title: `Shopify Odoo Integration | Product & Order Sync | ${brand.name}`,
    description:
      'Shopify ↔ Odoo integration for products, inventory, orders and customers. Reliable synchronization designed around your operations.',
    h1: 'Shopify ↔ Odoo Integration',
    primaryKeyword: 'Shopify Odoo integration',
    ogImage: '/images/og/shopify-odoo.png',
  },
  woocommerce: {
    path: '/woocommerce-odoo-integration',
    title: `WooCommerce Odoo Integration | Store & ERP Sync | ${brand.name}`,
    description:
      'WooCommerce ↔ Odoo integration for catalog, stock, orders and customers. Connect your WordPress store to Odoo with maintainable automation.',
    h1: 'WooCommerce ↔ Odoo Integration',
    primaryKeyword: 'WooCommerce Odoo integration',
    ogImage: '/images/og/woocommerce-odoo.png',
  },
  amazon: {
    path: '/amazon-odoo-integration',
    title: `Amazon Odoo Integration | Marketplace & ERP Sync | ${brand.name}`,
    description:
      'Amazon ↔ Odoo integration for listings, inventory, orders and fulfillment-related data flows into your ERP.',
    h1: 'Amazon ↔ Odoo Integration',
    primaryKeyword: 'Amazon Odoo integration',
    ogImage: '/images/og/amazon-odoo.png',
  },
  tally: {
    path: '/tally-odoo-integration',
    title: `Tally Odoo Integration | Accounting & ERP Connection | ${brand.name}`,
    description:
      'Tally ↔ Odoo integration to connect accounting and ERP workflows. Reduce duplicate entry between Tally and Odoo.',
    h1: 'Tally ↔ Odoo Integration',
    primaryKeyword: 'Tally Odoo integration',
    ogImage: '/images/og/tally-odoo.png',
  },
  blog: {
    path: '/blog',
    title: `Odoo Development Blog | Guides & Integration Notes | ${brand.name}`,
    description:
      'Future home for Odoo development guides, integration notes and ERP automation articles. No placeholder posts — content will be published when ready.',
    h1: 'Odoo Development Blog',
    primaryKeyword: 'Odoo development blog',
    robots: 'noindex, follow',
    ogImage: '/images/og/home.png',
  },
};

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (normalized === '/') return SITE_URL;
  return `${SITE_URL}${normalized.replace(/\/$/, '')}`;
}

export function defaultOgImage(path?: string): string {
  return absoluteUrl(path || '/images/og/default.png');
}
