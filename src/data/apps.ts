export type OdooApp = {
  slug: string;
  name: string;
  version: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  href: string;
  github?: string;
  icon: string;
  banner?: string;
  hero?: string;
  relatedServices?: { label: string; href: string }[];
};

/**
 * Real Odoo apps / connectors authored or maintained for Apps Store / client delivery.
 * Do not invent marketplace ratings or sales numbers.
 */
export const odooApps: OdooApp[] = [
  {
    slug: 'ai-commerce-assistant',
    name: 'AI Commerce Assistant',
    version: 'Odoo 12.0–19.0',
    category: 'Website / eCommerce',
    shortDescription:
      'AI shopping chatbot for Odoo Website & eCommerce — product search, live prices & stock, cart actions, FAQ/RAG knowledge and human handoff.',
    description:
      'AI Commerce Assistant is an AI sales and support assistant for Odoo website and eCommerce (website_sale). It works with OpenAI and OpenAI-compatible APIs (OpenRouter, Groq, Mistral, Together, Ollama, vLLM, LM Studio).',
    features: [
      'AI product search with live prices, variants and stock',
      'Product comparison, alternatives and recommendations',
      'Conversational add to cart with customer confirmation',
      'FAQ, PDF and website knowledge base with RAG retrieval',
      'Order tracking, invoices and delivery status for logged-in customers',
      'Quote requests, callbacks, support tickets and human handoff',
      'Streaming replies, multi-website, custom branding and usage analytics',
    ],
    href: '/odoo-apps/ai-commerce-assistant',
    github: 'https://github.com/misri12/odoo_ai_commerce_assistant',
    icon: '/images/apps/ai-commerce-assistant-icon.webp',
    banner: '/images/apps/ai-commerce-assistant-banner.webp',
    hero: '/images/apps/ai-commerce-assistant-hero.webp',
    relatedServices: [
      { label: 'Custom Odoo Modules', href: '/custom-odoo-modules' },
      { label: 'Odoo Website & eCommerce', href: '/odoo-development' },
    ],
  },
  {
    slug: 'shopify-connector-pro',
    name: 'Shopify Connector Pro',
    version: 'Odoo 19',
    category: 'Sales / eCommerce Integration',
    shortDescription:
      'Bidirectional Shopify ↔ Odoo integration for products, variants, customers, orders, inventory and webhook-driven imports.',
    description:
      'Shopify Connector integrates Odoo with Shopify for automatic synchronization of products and variants, customers, orders and inventory levels, with webhook-based order import and queue-based background processing. Multi-store support is included.',
    features: [
      'Products and variants synchronization',
      'Customers and orders sync',
      'Inventory level synchronization',
      'Webhook-based order import',
      'Queue-based background processing',
      'Multi Shopify store support',
    ],
    href: '/odoo-apps/shopify-connector-pro',
    github: 'https://github.com/misri12/custom_shopify_connector_pro',
    icon: '/images/apps/shopify-connector-icon.webp',
    relatedServices: [
      { label: 'Shopify ↔ Odoo Integration', href: '/shopify-odoo-integration' },
      { label: 'eCommerce Integrations', href: '/ecommerce-integrations' },
    ],
  },
  {
    slug: 'woocommerce-connector-pro',
    name: 'WooCommerce Odoo Connector Pro',
    version: 'Odoo 12.0–19.0',
    category: 'Sales / eCommerce Integration',
    shortDescription:
      'WooCommerce ↔ Odoo connector for products, orders, customers, inventory, refunds, cancellations and HMAC webhooks — series packages across Odoo versions.',
    description:
      'WooCommerce Odoo Connector Pro synchronizes catalog, customers, orders, inventory, refunds and related operational data between WooCommerce and Odoo. Version-specific packages are maintained for Odoo 12 through 19.',
    features: [
      'Product and inventory synchronization',
      'Order import with refunds and cancellations',
      'Customer synchronization',
      'HMAC webhook support',
      'Native Odoo integration patterns',
      'Series coverage for Odoo 12–19',
    ],
    href: '/odoo-apps/woocommerce-connector-pro',
    github: 'https://github.com/misri12/odoo-woocommerce-connector',
    icon: '/images/apps/woocommerce-connector-icon.webp',
    relatedServices: [
      { label: 'WooCommerce ↔ Odoo Integration', href: '/woocommerce-odoo-integration' },
      { label: 'eCommerce Integrations', href: '/ecommerce-integrations' },
    ],
  },
  {
    slug: 'amazon-connector',
    name: 'Amazon Connector',
    version: 'Odoo 19',
    category: 'Sales / Marketplace Integration',
    shortDescription:
      'Amazon SP-API integration for Odoo — account setup, order sync, inventory, shipments and returns into ERP workflows.',
    description:
      'Amazon Connector for Odoo provides Amazon SP-API integration so marketplace orders, inventory, shipments and returns can be synchronized into Odoo sales, stock and accounting processes.',
    features: [
      'Amazon account management with SP-API authentication',
      'Order synchronization into Odoo',
      'Inventory synchronization',
      'Shipment-related updates',
      'Returns handling into Odoo workflows',
    ],
    href: '/odoo-apps/amazon-connector',
    github: 'https://github.com/misri12',
    icon: '/images/apps/amazon-connector-icon.webp',
    relatedServices: [
      { label: 'Amazon ↔ Odoo Integration', href: '/amazon-odoo-integration' },
      { label: 'eCommerce Integrations', href: '/ecommerce-integrations' },
    ],
  },
  {
    slug: 'shopify-cod-settlement-reconciliation',
    name: 'Shopify COD & Settlement Reconciliation',
    version: 'Odoo 19',
    category: 'Accounting',
    shortDescription:
      'Reconcile Shopify COD orders with courier settlement files — flag missing, underpaid, overpaid, returned, cancelled and unsettled orders.',
    description:
      'Shopify COD & Settlement Reconciliation automatically matches Shopify COD orders against courier settlement/payout files so finance and operations teams can identify settlement exceptions quickly inside Odoo.',
    features: [
      'COD order reconciliation against courier settlement files',
      'Exception detection for missing, underpaid and overpaid amounts',
      'Returned, cancelled and unsettled order visibility',
      'Works with Shopify Connector Pro workflows',
      'Accounting-oriented operational views',
    ],
    href: '/odoo-apps/shopify-cod-settlement-reconciliation',
    github: 'https://github.com/misri12/Shopify-COD-Settlement-Reconciliation',
    icon: '/images/apps/shopify-cod-icon.webp',
    banner: '/images/apps/shopify-cod-banner.webp',
    relatedServices: [
      { label: 'Shopify ↔ Odoo Integration', href: '/shopify-odoo-integration' },
      { label: 'API & ERP Integrations', href: '/api-erp-integrations' },
    ],
  },
  {
    slug: 'b2b-pallet-management',
    name: 'B2B Pallet Management',
    version: 'Odoo 14 / 17 / 19',
    category: 'Inventory / Website',
    shortDescription:
      'Pallet fill engine, B2B website widget, shipment planner and warehouse visual for wholesale packing workflows.',
    description:
      'B2B Pallet Management helps wholesale and B2B operations plan pallet fills, present packing guidance on the website, and coordinate shipment planning with warehouse-oriented visuals inside Odoo.',
    features: [
      'Pallet fill calculation engine',
      'B2B website packing widget',
      'Shipment planner',
      'Warehouse visual support',
      'Works with sales and stock workflows',
    ],
    href: '/odoo-apps/b2b-pallet-management',
    github: 'https://github.com/misri12/Pallet_managment_pro',
    icon: '/images/apps/b2b-pallet-icon.webp',
    banner: '/images/apps/b2b-pallet-banner.webp',
    hero: '/images/apps/b2b-pallet-hero.webp',
    relatedServices: [
      { label: 'Custom Odoo Modules', href: '/custom-odoo-modules' },
      { label: 'Odoo Development', href: '/odoo-development' },
    ],
  },
  {
    slug: 'odoo-tally-connector',
    name: 'Odoo Tally Connector',
    version: 'Odoo 14–17',
    category: 'Accounting / Integration',
    shortDescription:
      'Export Odoo accounting data into Tally-compatible XML vouchers for import into Tally.',
    description:
      'Odoo Tally Connector exports Odoo accounting data as Tally-compatible XML vouchers so finance teams can move voucher data from Odoo into Tally without re-keying.',
    features: [
      'Accounting data export from Odoo',
      'Tally-compatible XML voucher generation',
      'Supports Odoo versions 14–17',
      'Designed for accounting handoff workflows',
    ],
    href: '/odoo-apps/odoo-tally-connector',
    github: 'https://github.com/misri12/Odoo-Tally-Connector',
    icon: '/images/apps/tally-connector-icon.webp',
    relatedServices: [
      { label: 'Tally ↔ Odoo Integration', href: '/tally-odoo-integration' },
      { label: 'API & ERP Integrations', href: '/api-erp-integrations' },
    ],
  },
  {
    slug: 'quickbooks-online-connector-pro',
    name: 'QuickBooks Online Connector Pro',
    version: 'Odoo',
    category: 'Accounting / Integration',
    shortDescription:
      'Connect Odoo ERP workflows with QuickBooks Online for accounting and operational data handoff.',
    description:
      'QuickBooks Online Connector Pro connects Odoo with QuickBooks Online so businesses can reduce duplicate entry between ERP operations and accounting.',
    features: [
      'Odoo ↔ QuickBooks Online connection',
      'Accounting-oriented data handoff',
      'Built for operational ERP workflows',
    ],
    href: '/odoo-apps/quickbooks-online-connector-pro',
    github: 'https://github.com/misri12/quickbooks_online_connector_pro',
    icon: '/images/apps/quickbooks-connector-icon.webp',
    relatedServices: [
      { label: 'API & ERP Integrations', href: '/api-erp-integrations' },
      { label: 'Odoo Development', href: '/odoo-development' },
    ],
  },
  {
    slug: 'product-uploader',
    name: 'Product Uploader (JSON / Excel + Images)',
    version: 'Odoo 19',
    category: 'Sales / Website',
    shortDescription:
      'Create Odoo website products from scraper JSON, Excel and image folders — built for catalog import and migration workflows.',
    description:
      'Product Uploader imports product templates from scraper JSON and Excel outputs, with image handling from HTTPS URLs or local image folders, so large catalogs can be loaded into Odoo Website / eCommerce efficiently.',
    features: [
      'Import from products.json and Excel',
      'Image download from HTTPS URLs',
      'Optional local image folder mapping',
      'Creates website-ready product templates',
      'Useful for scraper-driven catalog onboarding',
    ],
    href: '/odoo-apps/product-uploader',
    icon: '/images/apps/product-uploader-icon.webp',
    relatedServices: [
      { label: 'Odoo Website & eCommerce', href: '/odoo-development' },
      { label: 'Custom Odoo Modules', href: '/custom-odoo-modules' },
    ],
  },
  {
    slug: 'odoo-helpdesk',
    name: 'Odoo Helpdesk',
    version: 'Odoo',
    category: 'Services',
    shortDescription:
      'Custom Odoo Helpdesk module for support ticket workflows and service operations.',
    description:
      'Odoo Helpdesk is a custom support module built for service and ticket workflows inside Odoo, useful when standard helpdesk flows need to match a specific operations process.',
    features: [
      'Support ticket workflows in Odoo',
      'Customizable service operations',
      'Built as a maintainable custom module',
    ],
    href: '/odoo-apps/odoo-helpdesk',
    github: 'https://github.com/misri12/Odoo-HelpDesk',
    icon: '/images/apps/odoo-helpdesk-icon.webp',
    relatedServices: [
      { label: 'Custom Odoo Modules', href: '/custom-odoo-modules' },
      { label: 'Odoo Development', href: '/odoo-development' },
    ],
  },
];

export function getAppBySlug(slug: string): OdooApp | undefined {
  return odooApps.find((app) => app.slug === slug);
}
