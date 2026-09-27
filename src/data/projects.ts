export type Project = {
  slug: string;
  name: string;
  problem: string;
  solution: string;
  technology: string[];
  outcome: string;
  relatedServices: { label: string; href: string }[];
  href?: string;
  /** Odoo version(s) when known — optional, factual only. */
  odooVersion?: string;
  /** Primary integration target when known — optional, factual only. */
  integration?: string;
  /** Short architecture note when known — optional, factual only. */
  architecture?: string;
  /** Key functionality bullets when known — optional, factual only. */
  keyFunctionality?: string[];
  /**
   * When true, this entry is incomplete as a client case study.
   * UI should say details are available on request — never invent outcomes.
   */
  placeholder: boolean;
};

/**
 * Real packaged work and connectors. No invented client revenue or ratings.
 */
export const projects: Project[] = [
  {
    slug: 'ai-commerce-assistant',
    name: 'AI Commerce Assistant for Odoo eCommerce',
    problem:
      'Odoo Website & eCommerce stores need conversational product discovery, stock-aware answers and assisted cart actions without replacing the existing storefront.',
    solution:
      'Built a reusable Odoo module that adds an AI shopping assistant with live product intelligence, RAG knowledge, controlled cart actions and human handoff — available across Odoo 12.0–19.0.',
    technology: ['Odoo', 'Python', 'JavaScript', 'PostgreSQL', 'REST APIs', 'OpenAI-compatible APIs'],
    outcome:
      'Shipped as a packaged Odoo App (OPL-1) with installation docs, configuration UI and series branches for multiple Odoo versions.',
    relatedServices: [
      { label: 'View Odoo App', href: '/odoo-apps/ai-commerce-assistant' },
      { label: 'Custom Odoo Modules', href: '/custom-odoo-modules' },
    ],
    href: '/odoo-apps/ai-commerce-assistant',
    odooVersion: '12.0–19.0',
    integration: 'Odoo Website & eCommerce',
    placeholder: false,
  },
  {
    slug: 'shopify-odoo-connector',
    name: 'Shopify ↔ Odoo Connector Pro',
    problem:
      'Shopify catalogs, orders and inventory drift from ERP when teams rely on manual entry or fragile sync jobs.',
    solution:
      'Built Shopify Connector Pro for product/variant, customer, order and inventory synchronization with webhook import and queue-based processing.',
    technology: ['Odoo', 'Shopify APIs', 'Python', 'Webhooks', 'REST APIs'],
    outcome: 'Packaged connector available for Odoo 19 with multi-store support.',
    relatedServices: [
      { label: 'View Odoo App', href: '/odoo-apps/shopify-connector-pro' },
      { label: 'Shopify ↔ Odoo', href: '/shopify-odoo-integration' },
    ],
    href: '/odoo-apps/shopify-connector-pro',
    odooVersion: '19',
    integration: 'Shopify',
    placeholder: false,
  },
  {
    slug: 'woocommerce-odoo-connector',
    name: 'WooCommerce ↔ Odoo Connector Pro',
    problem:
      'WooCommerce stores need reliable product, order, inventory and refund synchronization into Odoo across multiple Odoo versions.',
    solution:
      'Built WooCommerce Odoo Connector Pro with HMAC webhooks and series packages spanning Odoo 12–19.',
    technology: ['Odoo', 'WooCommerce REST API', 'Python', 'Webhooks'],
    outcome: 'Version-specific connector packages maintained for Odoo 12 through 19.',
    relatedServices: [
      { label: 'View Odoo App', href: '/odoo-apps/woocommerce-connector-pro' },
      { label: 'WooCommerce ↔ Odoo', href: '/woocommerce-odoo-integration' },
    ],
    href: '/odoo-apps/woocommerce-connector-pro',
    odooVersion: '12–19',
    integration: 'WooCommerce',
    placeholder: false,
  },
  {
    slug: 'amazon-odoo-connector',
    name: 'Amazon SP-API Connector for Odoo',
    problem:
      'Marketplace orders, stock and returns need to land in Odoo without rebuilding selling operations outside the ERP.',
    solution:
      'Built Amazon Connector for Odoo 19 with SP-API authentication, order sync, inventory, shipments and returns handling.',
    technology: ['Odoo', 'Amazon SP-API', 'Python', 'REST APIs'],
    outcome: 'Odoo 19 connector covering core SP-API operational sync paths.',
    relatedServices: [
      { label: 'View Odoo App', href: '/odoo-apps/amazon-connector' },
      { label: 'Amazon ↔ Odoo', href: '/amazon-odoo-integration' },
    ],
    href: '/odoo-apps/amazon-connector',
    odooVersion: '19',
    integration: 'Amazon SP-API',
    placeholder: false,
  },
  {
    slug: 'shopify-cod-reconciliation',
    name: 'Shopify COD & Settlement Reconciliation',
    problem:
      'COD courier settlements often disagree with Shopify order totals, creating finance exceptions that are hard to spot manually.',
    solution:
      'Built reconciliation tooling that matches Shopify COD orders to courier settlement files and surfaces missing, underpaid, overpaid and unsettled cases in Odoo.',
    technology: ['Odoo', 'Shopify', 'Accounting', 'Python'],
    outcome: 'Accounting-focused settlement exception workflow for Shopify COD operations.',
    relatedServices: [
      { label: 'View Odoo App', href: '/odoo-apps/shopify-cod-settlement-reconciliation' },
      { label: 'Shopify ↔ Odoo', href: '/shopify-odoo-integration' },
    ],
    href: '/odoo-apps/shopify-cod-settlement-reconciliation',
    odooVersion: '19',
    integration: 'Shopify COD / courier settlements',
    placeholder: false,
  },
  {
    slug: 'b2b-pallet-management',
    name: 'B2B Pallet Management',
    problem:
      'Wholesale packing and pallet planning is hard to communicate consistently between sales, warehouse and B2B website buyers.',
    solution:
      'Built a pallet fill engine with website widget, shipment planner and warehouse visuals inside Odoo.',
    technology: ['Odoo', 'Inventory', 'Website', 'Python'],
    outcome: 'Packaged B2B pallet planning module with website and warehouse support.',
    relatedServices: [
      { label: 'View Odoo App', href: '/odoo-apps/b2b-pallet-management' },
      { label: 'Custom Odoo Modules', href: '/custom-odoo-modules' },
    ],
    href: '/odoo-apps/b2b-pallet-management',
    odooVersion: '14 / 17 / 19',
    integration: 'Odoo Website / Inventory',
    placeholder: false,
  },
  {
    slug: 'odoo-tally-connector',
    name: 'Odoo Tally Connector',
    problem:
      'Finance teams need Odoo accounting data in Tally without re-entering vouchers by hand.',
    solution:
      'Built an export connector that generates Tally-compatible XML vouchers from Odoo accounting data (Odoo 14–17).',
    technology: ['Odoo', 'Tally XML', 'Accounting', 'Python'],
    outcome: 'Public connector repository for Tally voucher export workflows.',
    relatedServices: [
      { label: 'View Odoo App', href: '/odoo-apps/odoo-tally-connector' },
      { label: 'Tally ↔ Odoo', href: '/tally-odoo-integration' },
    ],
    href: '/odoo-apps/odoo-tally-connector',
    odooVersion: '14–17',
    integration: 'Tally',
    placeholder: false,
  },
];
