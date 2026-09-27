# Gultaj Khan — Odoo Developer Website

Premium personal website for **Gultaj Khan**, Odoo Developer & eCommerce Integration Specialist.

Primary goal: generate qualified international leads for Odoo development, custom modules, eCommerce integrations and ERP automation.

Built with **Astro** (static output) for strong SEO, Core Web Vitals and simple **Hostinger** deployment.

---

## Quick start

```bash
cp .env.example .env
# Edit SITE_URL to your production domain (no trailing slash)

npm install
npm run dev
```

Production build:

```bash
SITE_URL=https://yourdomain.com npm run build
```

Output directory: `dist/`

Preview locally:

```bash
npm run preview
```

---

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `SITE_URL` | Yes (production) | Canonical base URL for sitemap, robots, Open Graph, JSON-LD |
| `GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console meta token |
| `BING_SITE_VERIFICATION` | Optional | Bing Webmaster Tools meta token |
| `PUBLIC_WEB3FORMS_KEY` | Optional | If set, contact form posts to Web3Forms |
| `CONTACT_TO_EMAIL` | Optional (PHP) | Recipient for `public/api/contact.php` on Hostinger |

Do not hardcode the production domain in application code. Set `SITE_URL` before build.

---

## Site map (crawlable URLs)

| URL | Purpose |
|---|---|
| `/` | Homepage |
| `/odoo-development` | Odoo development service |
| `/custom-odoo-modules` | Custom module development |
| `/ecommerce-integrations` | eCommerce integrations hub |
| `/api-erp-integrations` | API & ERP integrations |
| `/shopify-odoo-integration` | Shopify ↔ Odoo |
| `/woocommerce-odoo-integration` | WooCommerce ↔ Odoo |
| `/amazon-odoo-integration` | Amazon ↔ Odoo |
| `/tally-odoo-integration` | Tally ↔ Odoo |
| `/projects` | Projects overview |
| `/odoo-apps` | Odoo Apps listing |
| `/odoo-apps/ai-commerce-assistant` | AI Commerce Assistant (images + details) |
| `/odoo-apps/shopify-connector-pro` | Shopify Connector Pro |
| `/odoo-apps/woocommerce-connector-pro` | WooCommerce Connector Pro |
| `/odoo-apps/amazon-connector` | Amazon Connector |
| `/odoo-apps/shopify-cod-settlement-reconciliation` | Shopify COD Reconciliation |
| `/odoo-apps/b2b-pallet-management` | B2B Pallet Management |
| `/odoo-apps/odoo-tally-connector` | Odoo Tally Connector |
| `/odoo-apps/quickbooks-online-connector-pro` | QuickBooks Online Connector Pro |
| `/odoo-apps/product-uploader` | Product Uploader |
| `/odoo-apps/odoo-helpdesk` | Odoo Helpdesk |
| `/about` | About |
| `/careers` | Careers / job applications |
| `/contact` | Project inquiry form |
| `/blog` | Architecture placeholder (noindex until articles exist) |

---

## Hostinger deployment

This project builds to static HTML/CSS/JS in `dist/`. Compatible with Hostinger shared hosting (hPanel File Manager / FTP).

### Steps

1. Set `SITE_URL` to your live domain (example: `https://gultaj.dev`).
2. Run `npm run build`.
3. Upload **contents** of `dist/` to `public_html` (or your domain root).
4. Confirm `api/contact.php` is present if you want the PHP mail handler.
5. Enable SSL in hPanel, then uncomment the HTTPS redirect in `.htaccess`.
6. Submit `https://yourdomain.com/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.
7. Add verification tokens via env vars and rebuild, or paste them into Search Console DNS/HTML methods.

## Contact form email delivery

The form sends inquiries to **gultajkhan980@gmail.com** via [FormSubmit](https://formsubmit.co) (works on localhost and Hostinger — no PHP required).

**First-time setup (required once):**
1. Submit the contact form once.
2. Open **gultajkhan980@gmail.com** (check spam).
3. Click FormSubmit’s activation / confirmation link.
4. Submit the form again — inquiries will arrive by email.

Optional override: set `PUBLIC_WEB3FORMS_KEY` in `.env` to use Web3Forms instead.

`public/api/contact.php` remains available for Hostinger PHP mail if you prefer that later.

### Optional automation

Use GitHub Actions + SFTP/SSH to sync `dist/` after each push. Keep Hostinger credentials in repository secrets.

---

## Architecture notes

- Framework: Astro 7, static output
- Styling: scoped CSS + global design tokens (no heavy UI library)
- SEO: per-page titles, descriptions, canonicals, Open Graph, Twitter cards, JSON-LD
- Sitemap: `@astrojs/sitemap` → `sitemap-index.xml`
- Robots: dynamic `robots.txt` using `SITE_URL`
- Blog route prepared at `/blog` (noindex, excluded from sitemap until content exists)
- Real brand data only: name, GitHub, email, AI Commerce Assistant app

---

## Keyword map (primary intent per page)

| Page | Primary keyword / intent |
|---|---|
| Home | Odoo developer |
| Odoo Development | Odoo development |
| Custom Modules | Odoo custom module development |
| eCommerce Integrations | Odoo eCommerce integration |
| API & ERP | Odoo API integration |
| Shopify | Shopify Odoo integration |
| WooCommerce | WooCommerce Odoo integration |
| Amazon | Amazon Odoo integration |
| Tally | Tally Odoo integration |
| Projects | Odoo development projects |
| Odoo Apps | Odoo Apps |
| About | About Gultaj Khan / Odoo developer |
| Contact | Contact / hire Odoo developer |

---

# Final SEO audit report

Generated after implementation and production build verification. Scores below are **status checks**, not claimed Lighthouse numbers unless measured.

## Technical SEO

| Check | Status |
|---|---|
| Sitemap | Pass — `@astrojs/sitemap` generates `sitemap-index.xml` from `SITE_URL`; `/blog` filtered out |
| robots.txt | Pass — dynamic route allows public pages, disallows `/api/` and `/blog`, includes sitemap URL |
| Canonical URLs | Pass — self-referencing canonical on every indexable page via `BaseLayout` |
| Structured data | Pass — WebSite, Person, WebPage, Service, SoftwareApplication, BreadcrumbList, FAQPage where content qualifies |
| Open Graph | Pass — title, description, type, url, image, site_name per page |
| Twitter metadata | Pass — `summary_large_image` + title/description/image |
| Heading structure | Pass — one H1 per page; logical H2/H3 hierarchy |
| Image SEO | Pass — descriptive filenames, alt text, WebP for app media, width/height where set |
| Internal linking | Pass — homepage ↔ services ↔ integrations ↔ apps ↔ contact |
| Indexability | Pass — public pages `index, follow`; `/blog` `noindex, follow` |

## Page metadata

| URL | H1 | SEO title | Meta description (summary) | Canonical | Primary intent | Index |
|---|---|---|---|---|---|---|
| `/` | Custom Odoo Solutions That Connect Your Business. | Odoo Developer & eCommerce Integration Specialist \| Gultaj Khan | Custom Odoo development, eCommerce integrations and ERP automation… | `{SITE_URL}/` | Odoo developer | index |
| `/odoo-development` | Odoo Development for Real Business Workflows | Odoo Development Services \| Custom Odoo Developer \| Gultaj Khan | Odoo development for customizations, workflows, modules… | `{SITE_URL}/odoo-development` | Odoo development | index |
| `/custom-odoo-modules` | Custom Odoo Module Development | Custom Odoo Module Development \| Odoo Developer \| Gultaj Khan | Custom Odoo module development for industry workflows… | `{SITE_URL}/custom-odoo-modules` | Custom module development | index |
| `/ecommerce-integrations` | eCommerce & Odoo Integrations | eCommerce & Odoo Integrations \| Shopify, WooCommerce & Amazon | Connect storefront to Odoo… | `{SITE_URL}/ecommerce-integrations` | Odoo eCommerce integration | index |
| `/api-erp-integrations` | Odoo API & ERP Integrations | Odoo API & ERP Integrations \| REST API Development \| Gultaj Khan | Odoo REST API and ERP integrations… | `{SITE_URL}/api-erp-integrations` | Odoo API integration | index |
| `/shopify-odoo-integration` | Shopify ↔ Odoo Integration | Shopify Odoo Integration \| Product, Order & Inventory Sync \| Gultaj Khan | Shopify ↔ Odoo integration for products, inventory, orders… | `{SITE_URL}/shopify-odoo-integration` | Shopify Odoo integration | index |
| `/woocommerce-odoo-integration` | WooCommerce ↔ Odoo Integration | WooCommerce Odoo Integration \| Store & ERP Sync \| Gultaj Khan | WooCommerce ↔ Odoo integration… | `{SITE_URL}/woocommerce-odoo-integration` | WooCommerce Odoo integration | index |
| `/amazon-odoo-integration` | Amazon ↔ Odoo Integration | Amazon Odoo Integration \| Marketplace & ERP Sync \| Gultaj Khan | Amazon ↔ Odoo integration… | `{SITE_URL}/amazon-odoo-integration` | Amazon Odoo integration | index |
| `/tally-odoo-integration` | Tally ↔ Odoo Integration | Tally Odoo Integration \| Accounting & ERP Connection \| Gultaj Khan | Tally ↔ Odoo integration… | `{SITE_URL}/tally-odoo-integration` | Tally Odoo integration | index |
| `/projects` | Odoo Projects & Case Studies | Odoo Development Projects & Case Studies \| Gultaj Khan | Selected Odoo development and integration work… | `{SITE_URL}/projects` | Odoo projects | index |
| `/odoo-apps` | Odoo Apps | Odoo Apps & Custom Modules \| Gultaj Khan | Odoo Apps built for website, eCommerce… | `{SITE_URL}/odoo-apps` | Odoo Apps | index |
| `/odoo-apps/ai-commerce-assistant` | AI Commerce Assistant | AI Commerce Assistant \| Odoo eCommerce AI Chatbot \| Gultaj Khan | AI shopping chatbot for Odoo Website & eCommerce… | `{SITE_URL}/odoo-apps/ai-commerce-assistant` | Odoo AI chatbot | index |
| `/about` | About Gultaj Khan | About Gultaj Khan \| Odoo Developer & Integration Specialist | About Gultaj Khan — Odoo developer focused on… | `{SITE_URL}/about` | About / Odoo developer | index |
| `/contact` | Discuss Your Odoo or Integration Project | Contact an Odoo Developer \| Discuss Your Project | Contact to discuss Odoo development… | `{SITE_URL}/contact` | Contact Odoo developer | index |
| `/blog` | Odoo Development Blog | Odoo Development Blog \| Guides & Integration Notes \| Gultaj Khan | Future home for guides — no placeholder posts | `{SITE_URL}/blog` | Blog (future) | **noindex** |

## Performance

| Item | Notes |
|---|---|
| Build status | Verified with `npm run build` (see local run) |
| Image optimization | App screenshots converted to WebP; OG images are compressed PNGs |
| JavaScript | Minimal Astro islands-free JS (header + contact form only) |
| Fonts | Google Fonts with `preconnect` + `display=swap` (Bricolage Grotesque, Source Sans 3) |
| Core Web Vitals risks | External font request; mitigate later with self-hosted fonts if needed. No autoplay video. Animations respect `prefers-reduced-motion`. |
| Lighthouse | Not claimed — run PageSpeed Insights on the deployed Hostinger URL after go-live |

## Accessibility

| Check | Status |
|---|---|
| Semantic HTML | `header`, `nav`, `main`, `section`, `article`, `footer` |
| Keyboard navigation | Skip link, focus-visible styles, native controls |
| Focus states | Global `:focus-visible` + form focus rings |
| Image alt text | Meaningful alts on content images; decorative hero diagram uses `aria-hidden` |
| Form accessibility | Labels, required indicators, live status region, error associations |
| Reduced motion | Global reduced-motion media query disables non-essential animation |

---

## Brand facts used (no invented social proof)

- Name: Gultaj Khan
- Role: Odoo Developer & eCommerce Integration Specialist
- GitHub: https://github.com/misri12
- Email (form delivery): gultajkhan980@gmail.com
- Real app: AI Commerce Assistant (Odoo 12.0–19.0) — https://github.com/misri12/odoo_ai_commerce_assistant

LinkedIn is omitted until a verified public profile URL is available.

---

## License

Website code: private / all rights reserved unless otherwise stated.
Odoo App referenced on the site remains under its own OPL-1 license.
