/**
 * Single source of truth for brand, navigation, SEO defaults, and social links.
 * Only include real profile URLs. Do not invent credentials or social proof.
 */

export const SITE_URL = (
  import.meta.env.SITE_URL ||
  import.meta.env.SITE ||
  'https://example.com'
).replace(/\/$/, '');

export const brand = {
  name: 'Gultaj Khan',
  shortName: 'Gultaj',
  title: 'Odoo Developer & eCommerce Integration Specialist',
  tagline:
    'I build custom Odoo solutions, eCommerce integrations and business automation systems — with 3 years of experience in custom addons, web scraping, Odoo & Node.js websites, plus cybersecurity advisory.',
  email: 'gultajkhan980@gmail.com',
  locationFocus: 'International clients — USA, UK, Europe, Middle East, Australia and other markets',
  github: 'https://github.com/misri12',
  githubHandle: 'misri12',
  experienceYears: 3,
} as const;

export const social = {
  github: brand.github,
  linkedin: 'https://www.linkedin.com/in/gultajkhan980/',
} as const;

export const nav = [
  {
    label: 'Services',
    href: '/odoo-development',
    children: [
      { label: 'Odoo Development', href: '/odoo-development' },
      { label: 'Custom Odoo Modules', href: '/custom-odoo-modules' },
      { label: 'eCommerce Integrations', href: '/ecommerce-integrations' },
      { label: 'API & ERP Integrations', href: '/api-erp-integrations' },
    ],
  },
  {
    label: 'Integrations',
    href: '/ecommerce-integrations',
    children: [
      { label: 'Shopify ↔ Odoo', href: '/shopify-odoo-integration' },
      { label: 'WooCommerce ↔ Odoo', href: '/woocommerce-odoo-integration' },
      { label: 'Amazon ↔ Odoo', href: '/amazon-odoo-integration' },
      { label: 'Tally ↔ Odoo', href: '/tally-odoo-integration' },
      { label: 'API & ERP', href: '/api-erp-integrations' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Odoo Apps', href: '/odoo-apps' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
] as const;

export const footerNav = {
  services: [
    { label: 'Odoo Development', href: '/odoo-development' },
    { label: 'Custom Odoo Modules', href: '/custom-odoo-modules' },
    { label: 'eCommerce Integrations', href: '/ecommerce-integrations' },
    { label: 'API & ERP Integrations', href: '/api-erp-integrations' },
  ],
  integrations: [
    { label: 'Shopify ↔ Odoo', href: '/shopify-odoo-integration' },
    { label: 'WooCommerce ↔ Odoo', href: '/woocommerce-odoo-integration' },
    { label: 'Amazon ↔ Odoo', href: '/amazon-odoo-integration' },
    { label: 'Tally ↔ Odoo', href: '/tally-odoo-integration' },
  ],
  company: [
    { label: 'Projects', href: '/projects' },
    { label: 'Odoo Apps', href: '/odoo-apps' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export const technologies = [
  'Odoo',
  'Python',
  'Node.js',
  'PostgreSQL',
  'JavaScript',
  'XML / QWeb',
  'REST APIs',
  'Web scraping',
  'Shopify',
  'WooCommerce',
  'Amazon',
  'Tally',
  'Git',
] as const;

export const services = [
  {
    slug: 'odoo-development',
    href: '/odoo-development',
    title: 'Odoo Development',
    description: 'Custom Odoo development for workflows, business logic and ERP processes that match how your team works.',
    icon: 'code',
  },
  {
    slug: 'custom-odoo-modules',
    href: '/custom-odoo-modules',
    title: 'Custom Odoo Modules',
    description: 'Purpose-built modules for inventory, sales, accounting, manufacturing and industry-specific processes.',
    icon: 'modules',
  },
  {
    slug: 'ecommerce-integrations',
    href: '/ecommerce-integrations',
    title: 'eCommerce Integration',
    description: 'Connect Shopify, WooCommerce, Amazon and other storefronts to Odoo with reliable sync and automation.',
    icon: 'cart',
  },
  {
    slug: 'api-erp-integrations',
    href: '/api-erp-integrations',
    title: 'API Integration',
    description: 'REST API integrations that connect Odoo to payment gateways, shipping platforms and external systems.',
    icon: 'api',
  },
  {
    slug: 'erp-automation',
    href: '/api-erp-integrations',
    title: 'ERP Automation',
    description: 'Automate order flow, inventory updates, invoicing and operational handoffs across your stack.',
    icon: 'automation',
  },
  {
    slug: 'odoo-migration',
    href: '/odoo-development',
    title: 'Odoo Migration',
    description: 'Plan and execute Odoo version upgrades and data migrations with controlled downtime and validation.',
    icon: 'migrate',
  },
  {
    slug: 'odoo-website',
    href: '/odoo-development',
    title: 'Odoo Website & eCommerce',
    description: 'Odoo Website and eCommerce customization for product flows, checkout and storefront experience.',
    icon: 'web',
  },
  {
    slug: 'performance',
    href: '/odoo-development',
    title: 'Performance Optimization',
    description: 'Diagnose slow views, heavy queries and fragile customizations — then harden them for production.',
    icon: 'speed',
  },
] as const;

export const integrations = [
  { name: 'Shopify', href: '/shopify-odoo-integration', label: 'Shopify ↔ Odoo' },
  { name: 'WooCommerce', href: '/woocommerce-odoo-integration', label: 'WooCommerce ↔ Odoo' },
  { name: 'Amazon', href: '/amazon-odoo-integration', label: 'Amazon ↔ Odoo' },
  { name: 'Tally', href: '/tally-odoo-integration', label: 'Tally ↔ Odoo' },
  { name: 'Payment Gateways', href: '/api-erp-integrations', label: 'Payment Gateways ↔ Odoo' },
  { name: 'Shipping Platforms', href: '/api-erp-integrations', label: 'Shipping Platforms ↔ Odoo' },
  { name: 'REST APIs', href: '/api-erp-integrations', label: 'REST APIs ↔ Odoo' },
] as const;

export const problems = [
  {
    problem: 'Orders are manually entered into Odoo.',
    solution: 'Automate order synchronization so sales flow into Odoo without re-keying.',
  },
  {
    problem: 'Inventory differs between your store and ERP.',
    solution: 'Build reliable inventory synchronization with clear conflict handling.',
  },
  {
    problem: 'Your Odoo workflow does not match your business.',
    solution: 'Build custom modules and workflows around your actual process.',
  },
  {
    problem: 'Your existing integration is unreliable.',
    solution: 'Debug, optimize and rebuild the integration for stable production use.',
  },
] as const;

export const processSteps = [
  { step: '01', title: 'Understand', description: 'Clarify systems, data flows, pain points and success criteria.' },
  { step: '02', title: 'Plan', description: 'Define scope, integration map, module design and delivery milestones.' },
  { step: '03', title: 'Build', description: 'Develop modules, APIs and automations with maintainable Odoo patterns.' },
  { step: '04', title: 'Integrate', description: 'Connect systems, validate sync paths and harden edge cases.' },
  { step: '05', title: 'Support', description: 'Document the solution and provide practical ongoing support.' },
] as const;

export const whyPoints = [
  {
    title: 'Odoo-focused development',
    description: 'Work centers on Odoo architecture, ORM patterns, security rules and upgrade-friendly customizations.',
  },
  {
    title: 'Custom business workflows',
    description: 'Modules and automations are designed around your process — not forced into a generic template.',
  },
  {
    title: 'eCommerce integration experience',
    description: 'Shopify, WooCommerce, Amazon and related storefronts connected to Odoo with practical sync design.',
  },
  {
    title: 'API-first approach',
    description: 'Integrations use clear contracts, logging and error handling so operations teams can trust the pipeline.',
  },
  {
    title: 'Maintainable code',
    description: 'Readable structure, sensible module boundaries and documentation that another developer can follow.',
  },
  {
    title: 'Practical problem solving',
    description: 'Focus on fixing broken flows, fragile syncs and mismatched ERP processes with measurable outcomes.',
  },
  {
    title: 'Long-term support',
    description: 'Handover that includes how the system works, what to monitor and how to extend it safely.',
  },
] as const;

export const faqs = [
  {
    question: 'What Odoo versions do you work with?',
    answer:
      'Projects commonly involve current and recent Odoo versions. Version support depends on the module, integration and upgrade path for your instance. Share your Odoo version when you inquire.',
  },
  {
    question: 'Can you build custom Odoo modules?',
    answer:
      'Yes. Custom modules are a core part of the work — models, views, security, wizards, reports and workflow automation tailored to your business.',
  },
  {
    question: 'Can you integrate Shopify with Odoo?',
    answer:
      'Yes. Shopify ↔ Odoo integrations can cover products, inventory, orders, customers and related operational sync. See the Shopify integration page for details.',
    link: { href: '/shopify-odoo-integration', label: 'Shopify ↔ Odoo integration' },
  },
  {
    question: 'Can you integrate WooCommerce with Odoo?',
    answer:
      'Yes. WooCommerce ↔ Odoo integrations can synchronize catalog, stock, orders and customer data based on your store setup.',
    link: { href: '/woocommerce-odoo-integration', label: 'WooCommerce ↔ Odoo integration' },
  },
  {
    question: 'Can you integrate Amazon with Odoo?',
    answer:
      'Yes. Amazon ↔ Odoo work typically focuses on listings, inventory, orders and fulfillment-related data flows.',
    link: { href: '/amazon-odoo-integration', label: 'Amazon ↔ Odoo integration' },
  },
  {
    question: 'Can you connect external APIs to Odoo?',
    answer:
      'Yes. REST API integrations connect Odoo to payment gateways, shipping platforms, accounting tools and custom services.',
    link: { href: '/api-erp-integrations', label: 'API & ERP integrations' },
  },
  {
    question: 'Can you migrate an existing Odoo system?',
    answer:
      'Yes. Migration work includes version upgrades, data mapping, customization compatibility checks and controlled cutover planning.',
  },
  {
    question: 'Can you fix an existing Odoo customization?',
    answer:
      'Yes. Existing modules and integrations can be reviewed, debugged, optimized and refactored for stability and maintainability.',
  },
  {
    question: 'Can you work with an existing Odoo development team?',
    answer:
      'Yes. Collaboration with implementation partners, agencies and in-house teams is common — including scoped delivery and clear documentation.',
  },
] as const;

export const projectTypes = [
  'Odoo Development',
  'Custom Odoo Module',
  'eCommerce Integration',
  'API / ERP Integration',
  'Odoo Migration',
  'Bug Fix / Optimization',
  'Other',
] as const;

export const platforms = [
  'Odoo only',
  'Shopify',
  'WooCommerce',
  'Amazon',
  'Tally',
  'Multiple platforms',
  'Other / Custom',
] as const;

export const odooVersions = [
  'Odoo 19',
  'Odoo 18',
  'Odoo 17',
  'Odoo 16',
  'Odoo 15 or earlier',
  'Not sure',
] as const;

export const budgetRanges = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000 – $15,000',
  '$15,000+',
  'Prefer to discuss',
] as const;

export const timelines = [
  'ASAP / Urgent',
  '2 – 4 weeks',
  '1 – 2 months',
  '3+ months',
  'Flexible',
] as const;
