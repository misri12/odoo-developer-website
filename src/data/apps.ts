export type AppScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type OdooApp = {
  slug: string;
  name: string;
  version: string;
  category: string;
  shortDescription: string;
  description: string;
  details?: string[];
  features: string[];
  href: string;
  github?: string;
  icon: string;
  banner?: string;
  hero?: string;
  screenshots?: AppScreenshot[];
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
    details: [
      'Shoppers ask natural-language questions; the assistant searches live catalog data with prices, variants and stock.',
      'Knowledge base support covers FAQ entries, PDFs and website pages with RAG retrieval and citations.',
      'Operators control capabilities, branding, multi-website behavior and usage analytics from Odoo.',
    ],
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
    screenshots: [
      {
        src: '/images/apps/screenshots/ai-ai-product-search-chatbot-odoo-ecommerce.webp',
        alt: 'AI product search chatbot on Odoo eCommerce',
        caption: 'Product search with live catalog answers',
      },
      {
        src: '/images/apps/screenshots/ai-ai-product-comparison-odoo-website.webp',
        alt: 'AI product comparison on Odoo website',
        caption: 'Side-by-side product comparison',
      },
      {
        src: '/images/apps/screenshots/ai-ai-add-to-cart-confirmation-odoo-website.webp',
        alt: 'AI add to cart confirmation on Odoo website sale',
        caption: 'Conversational add to cart confirmation',
      },
      {
        src: '/images/apps/screenshots/ai-ai-faq-knowledge-base-rag-citations-odoo.webp',
        alt: 'AI FAQ knowledge base with RAG citations',
        caption: 'FAQ / RAG answers with citations',
      },
      {
        src: '/images/apps/screenshots/ai-ai-order-tracking-customer-portal-odoo.webp',
        alt: 'AI order tracking in customer portal',
        caption: 'Order tracking for logged-in customers',
      },
      {
        src: '/images/apps/screenshots/ai-ai-chatbot-human-handoff-live-support-odoo.webp',
        alt: 'AI chatbot human handoff to live support',
        caption: 'Human handoff to live support',
      },
    ],
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
    details: [
      'Sync catalog, customers, orders, inventory, fulfillments and refunds through dedicated queues built for production workloads.',
      'Webhook endpoints are HMAC-secured for reliable near-real-time order intake without constant polling.',
      'Multi-store architecture supports separate credentials, warehouses and pricelists per Shopify shop.',
    ],
    features: [
      'Products and variants synchronization (SKU, price, barcode, SEO fields)',
      'Customers and orders sync with tax, shipping and discount mapping',
      'Inventory level synchronization across locations / warehouses',
      'Webhook-based order import with queue-based background processing',
      'Fulfillment tracking export and refund / credit-note sync',
      'Multi Shopify store support with per-store mappings',
    ],
    href: '/odoo-apps/shopify-connector-pro',
    github: 'https://github.com/misri12/custom_shopify_connector_pro',
    icon: '/images/apps/shopify-connector-icon.webp',
    banner: '/images/apps/shopify-connector-banner.webp',
    hero: '/images/apps/shopify-connector-hero.webp',
    screenshots: [
      {
        src: '/images/apps/screenshots/shopify-dashboard.webp',
        alt: 'Shopify Connector dashboard card in Odoo',
        caption: 'Connector dashboard overview',
      },
      {
        src: '/images/apps/screenshots/shopify-store-form.webp',
        alt: 'Shopify store configuration form in Odoo',
        caption: 'Shopify store configuration',
      },
      {
        src: '/images/apps/screenshots/shopify-products.webp',
        alt: 'Shopify product layer list in Odoo',
        caption: 'Product layer and mappings',
      },
      {
        src: '/images/apps/screenshots/shopify-inventory.webp',
        alt: 'Shopify inventory synchronization list',
        caption: 'Inventory synchronization',
      },
      {
        src: '/images/apps/screenshots/shopify-operations.webp',
        alt: 'Shopify operations wizard in Odoo',
        caption: 'Operations / sync wizard',
      },
      {
        src: '/images/apps/screenshots/shopify-export.webp',
        alt: 'Shopify export wizard in Odoo',
        caption: 'Export wizard',
      },
    ],
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
    details: [
      'Native Odoo workspace for WooCommerce instances — no middleware required for day-to-day sync.',
      'Queued, reprocessable jobs for products, orders and customers keep failed imports recoverable.',
      'HMAC webhooks, payment gateway mapping and sale auto-workflows support operational automation.',
    ],
    features: [
      'Product and inventory synchronization (simple / variable products)',
      'Order import with refunds, cancellations and fulfillment status export',
      'Customer synchronization into Odoo partners with mapping protection',
      'HMAC webhook support for event-driven updates',
      'Stock export / import and payment gateway mapping',
      'Series coverage for Odoo 12–19',
    ],
    href: '/odoo-apps/woocommerce-connector-pro',
    github: 'https://github.com/misri12/odoo-woocommerce-connector',
    icon: '/images/apps/woocommerce-connector-icon.webp',
    banner: '/images/apps/woocommerce-connector-banner.webp',
    hero: '/images/apps/woocommerce-connector-hero.webp',
    screenshots: [
      {
        src: '/images/apps/screenshots/woo-dashboard_screenshot.webp',
        alt: 'WooCommerce connector dashboard in Odoo',
        caption: 'Connector dashboard',
      },
      {
        src: '/images/apps/screenshots/woo-instance_screenshot.webp',
        alt: 'WooCommerce instance configuration',
        caption: 'Store instance setup',
      },
      {
        src: '/images/apps/screenshots/woo-product_mappings.webp',
        alt: 'WooCommerce product mappings',
        caption: 'Product mappings',
      },
      {
        src: '/images/apps/screenshots/woo-order_mappings.webp',
        alt: 'WooCommerce order mappings',
        caption: 'Order mappings',
      },
      {
        src: '/images/apps/screenshots/woo-customer_mappings.webp',
        alt: 'WooCommerce customer mappings',
        caption: 'Customer mappings',
      },
      {
        src: '/images/apps/screenshots/woo-sync_flow.webp',
        alt: 'WooCommerce sync flow diagram',
        caption: 'Sync flow overview',
      },
    ],
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
    details: [
      'Configure LWA credentials, refresh tokens, AWS IAM keys and marketplace IDs per Amazon account.',
      'Import Amazon orders into linked Odoo sales orders, then sync shipment tracking and returns.',
      'Logs dashboard with success/failed filters, manual retry and exponential backoff for rate limits.',
    ],
    features: [
      'Amazon account management with SP-API authentication',
      'Order synchronization into Odoo sales orders',
      'Inventory synchronization to configured stock locations',
      'Shipment tracking updates on delivery pickings',
      'Returns handling with return pickings and partial credit notes',
      'Logs, retry (up to 3) and HTTP 429 backoff',
    ],
    href: '/odoo-apps/amazon-connector',
    github: 'https://github.com/misri12',
    icon: '/images/apps/amazon-connector-icon.webp',
    banner: '/images/apps/amazon-connector-banner.webp',
    hero: '/images/apps/amazon-connector-hero.webp',
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
    details: [
      'Import courier payout files (CSV / XLSX), map columns once per courier, and reuse mappings on later batches.',
      'Multi-priority matching with tolerance-based reconciliation plus a manual match wizard for edge cases.',
      'Exception queues surface missing, underpaid, overpaid, returned, cancelled and unsettled COD amounts.',
    ],
    features: [
      'COD order reconciliation against courier settlement files',
      'Exception detection for missing, underpaid and overpaid amounts',
      'Returned, cancelled and unsettled order visibility',
      'Settlement batch workflow with KPI dashboard',
      'Optional courier remittance payments and fee journal entries',
      'Works with Shopify Connector Pro workflows',
    ],
    href: '/odoo-apps/shopify-cod-settlement-reconciliation',
    github: 'https://github.com/misri12/Shopify-COD-Settlement-Reconciliation',
    icon: '/images/apps/shopify-cod-icon.webp',
    banner: '/images/apps/shopify-cod-banner.webp',
    hero: '/images/apps/shopify-cod-hero.webp',
    screenshots: [
      {
        src: '/images/apps/screenshots/cod-dashboard.webp',
        alt: 'COD reconciliation dashboard',
        caption: 'Reconciliation dashboard KPIs',
      },
      {
        src: '/images/apps/screenshots/cod-batch.webp',
        alt: 'COD settlement batch screen',
        caption: 'Settlement batch processing',
      },
      {
        src: '/images/apps/screenshots/cod-matching.webp',
        alt: 'COD matching screen',
        caption: 'Automatic / manual matching',
      },
      {
        src: '/images/apps/screenshots/cod-exceptions.webp',
        alt: 'COD exception queue',
        caption: 'Exception queue',
      },
      {
        src: '/images/apps/screenshots/cod-import.webp',
        alt: 'COD settlement file import',
        caption: 'Courier file import',
      },
      {
        src: '/images/apps/screenshots/cod-lines.webp',
        alt: 'COD settlement lines',
        caption: 'Settlement line details',
      },
    ],
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
    details: [
      'One pallet calculation engine powers website cart, sales orders, shipment planning and warehouse visuals.',
      'Authenticated B2B buyers see live pallet fill, capacity breakdown and suggestions on the website cart.',
      'Shipment planner combines orders, compares transport profiles and previews layer plans without touching stock.',
    ],
    features: [
      'Pallet fill calculation engine (Euro / CHEP / standard unit loads)',
      'B2B website packing widget with utilisation milestones',
      'Shipment planner across multiple sales orders',
      'Warehouse visual / layer plan support',
      'Works with sales and stock workflows',
    ],
    href: '/odoo-apps/b2b-pallet-management',
    github: 'https://github.com/misri12/Pallet_managment_pro',
    icon: '/images/apps/b2b-pallet-icon.webp',
    banner: '/images/apps/b2b-pallet-banner.webp',
    hero: '/images/apps/b2b-pallet-hero.webp',
    screenshots: [
      {
        src: '/images/apps/screenshots/pallet-website_widget.webp',
        alt: 'B2B website pallet widget',
        caption: 'Website cart pallet widget',
      },
      {
        src: '/images/apps/screenshots/pallet-planner.webp',
        alt: 'B2B pallet shipment planner',
        caption: 'Shipment / load planner',
      },
      {
        src: '/images/apps/screenshots/pallet-mobile.webp',
        alt: 'B2B pallet widget on mobile',
        caption: 'Mobile-responsive widget',
      },
      {
        src: '/images/apps/screenshots/pallet-main_screenshot.webp',
        alt: 'B2B pallet management main screen',
        caption: 'Main pallet management view',
      },
    ],
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
    details: [
      'Generate Tally-ready XML from Odoo accounting records for controlled handoff to finance teams.',
      'Designed for businesses that keep Tally as the books-of-record while operating sales/stock in Odoo.',
      'Supports Odoo versions 14 through 17 for common mid-market upgrade paths.',
    ],
    features: [
      'Accounting data export from Odoo',
      'Tally-compatible XML voucher generation',
      'Supports Odoo versions 14–17',
      'Designed for accounting handoff workflows',
    ],
    href: '/odoo-apps/odoo-tally-connector',
    github: 'https://github.com/misri12/Odoo-Tally-Connector',
    icon: '/images/apps/tally-connector-icon.webp',
    banner: '/images/apps/tally-connector-banner.webp',
    hero: '/images/apps/tally-connector-hero.webp',
    relatedServices: [
      { label: 'Tally ↔ Odoo Integration', href: '/tally-odoo-integration' },
      { label: 'API & ERP Integrations', href: '/api-erp-integrations' },
    ],
  },
  {
    slug: 'quickbooks-online-connector-pro',
    name: 'QuickBooks Online Connector Pro',
    version: 'Odoo 19',
    category: 'Accounting / Integration',
    shortDescription:
      'Bidirectional QuickBooks Online sync for customers, invoices, bills, payments, reconciliation and queues.',
    description:
      'QuickBooks Online Connector Pro connects Odoo with QuickBooks Online using OAuth 2.0, webhook/CDC-driven updates, idempotent API requests and a reliable background queue so ERP operations and accounting stay aligned.',
    details: [
      'Sync customers, vendors, products, invoices, bills and payments with structured logs and an error inbox.',
      'Reconciliation dashboard highlights AR/AP drift between Odoo and QuickBooks Online.',
      'Setup wizard, multi-region support (US, Canada, UK, Australia) and optional migration / parallel-run tools.',
    ],
    features: [
      'Customers, vendors, products, invoices, bills and payments sync',
      'Webhooks + CDC polling for near real-time updates',
      'Reconciliation dashboard with AR/AP drift detection',
      'OAuth 2.0 connection with automatic token refresh',
      'Sync queue, logs and structured error inbox',
      'Setup wizard, migration and parallel-run cutover support',
    ],
    href: '/odoo-apps/quickbooks-online-connector-pro',
    github: 'https://github.com/misri12/quickbooks_online_connector_pro',
    icon: '/images/apps/quickbooks-connector-icon.webp',
    banner: '/images/apps/quickbooks-connector-banner.webp',
    hero: '/images/apps/quickbooks-connector-hero.webp',
    screenshots: [
      {
        src: '/images/apps/screenshots/qb-connection.webp',
        alt: 'QuickBooks Online connection screen',
        caption: 'OAuth connection status',
      },
      {
        src: '/images/apps/screenshots/qb-setup_wizard.webp',
        alt: 'QuickBooks Online setup wizard',
        caption: 'Setup wizard',
      },
      {
        src: '/images/apps/screenshots/qb-reconciliation.webp',
        alt: 'QuickBooks Online reconciliation dashboard',
        caption: 'Reconciliation dashboard',
      },
      {
        src: '/images/apps/screenshots/qb-sync_queue.webp',
        alt: 'QuickBooks Online sync queue',
        caption: 'Background sync queue',
      },
    ],
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
    details: [
      'Upload products.json / products.xlsx or read them from a server path for batch catalog onboarding.',
      'Download images from HTTPS URLs by default, or map a local/ZIP image folder when needed.',
      'Optional caps for products per run and published count; live website sync can refresh price and stock.',
    ],
    features: [
      'Import from products.json and Excel',
      'Image download from HTTPS URLs',
      'Optional local image folder / ZIP mapping',
      'Creates website-ready product templates',
      'SKU written to internal reference, supplier SKU and barcode',
      'Optional live website price & stock sync',
    ],
    href: '/odoo-apps/product-uploader',
    icon: '/images/apps/product-uploader-icon.webp',
    banner: '/images/apps/product-uploader-banner.webp',
    hero: '/images/apps/product-uploader-hero.webp',
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
      'Custom Odoo Helpdesk module for support ticket workflows, portal access and service operations.',
    description:
      'Odoo Helpdesk is a custom support module built for service and ticket workflows inside Odoo, useful when standard helpdesk flows need to match a specific operations process with mail and portal collaboration.',
    details: [
      'Ticket sequences, mail templates and security groups tailored for support teams.',
      'Portal templates let customers follow ticket progress without full backend access.',
      'Built as a maintainable custom application when out-of-the-box helpdesk needs do not fit.',
    ],
    features: [
      'Support ticket workflows in Odoo',
      'Mail and portal collaboration',
      'Security groups and record rules for service teams',
      'Customizable service operations',
      'Built as a maintainable custom module',
    ],
    href: '/odoo-apps/odoo-helpdesk',
    github: 'https://github.com/misri12/Odoo-HelpDesk',
    icon: '/images/apps/odoo-helpdesk-icon.webp',
    banner: '/images/apps/odoo-helpdesk-banner.webp',
    hero: '/images/apps/odoo-helpdesk-hero.webp',
    relatedServices: [
      { label: 'Custom Odoo Modules', href: '/custom-odoo-modules' },
      { label: 'Odoo Development', href: '/odoo-development' },
    ],
  },
];

export function getAppBySlug(slug: string): OdooApp | undefined {
  return odooApps.find((app) => app.slug === slug);
}
