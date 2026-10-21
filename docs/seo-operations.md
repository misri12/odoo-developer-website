# SEO operations, Search Console & ethical backlinks

Operational checklist for the GitHub Pages site at
`https://misri12.github.io/odoo-developer-website/`.

## Google Search Console (manual — requires your account)

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add a **URL-prefix** property: `https://misri12.github.io/odoo-developer-website/`
   (project sites should use the full path prefix, not only `github.io`).
3. Verify with one of:
   - HTML tag: set `GOOGLE_SITE_VERIFICATION` in the deploy environment (already wired in `BaseLayout.astro`), redeploy, then click Verify; or
   - DNS / Google Analytics association if you already use those.
4. Submit sitemap: `https://misri12.github.io/odoo-developer-website/sitemap-index.xml`
5. Use **URL Inspection** on:
   - `…/odoo-apps/jtl-odoo-connector` (app detail)
   - `…/jtl-wawi-odoo-connector` (integration / migration landing)
6. Monitor **Performance** (queries, clicks, impressions, landing pages) and **Links** (external linking sites).
7. Do not treat “Discovered” as indexed. Only mark a URL indexed after Search Console shows a successful crawl/index state.

## Bing Webmaster Tools (optional)

Set `BING_SITE_VERIFICATION` and submit the same sitemap URL.

## Conversion tracking (site code)

Implemented in `src/components/Analytics.astro` + `data-track` attributes.

| Event | When it fires | PII? |
| --- | --- | --- |
| `contact_form_success` | After confirmed successful project form submit | No |
| `cta_project_inquiry` | Primary CTA click | No |
| `cta_project_details` | Secondary CTA click | No |
| `cta_jtl_migration` | JTL landing primary CTA | No |
| `email_contact_click` | Mailto fallback / privacy mailto | No |

Enable by setting **one** of:

- `PUBLIC_PLAUSIBLE_DOMAIN` (preferred; cookie-free)
- `PUBLIC_GA_MEASUREMENT_ID` (review consent requirements first)

Leaving both blank keeps the site analytics-free while still defining `window.__siteTrack` for local debugging via the `site:track` CustomEvent.

## Canonical route map (JTL)

| Intent | Canonical path |
| --- | --- |
| Packaged Odoo app / Apps grid card | `/odoo-apps/jtl-odoo-connector` |
| Integration / migration service landing | `/jtl-wawi-odoo-connector` |

Both are intentional and appear in the sitemap. Do not merge them without a redirect plan.

## Ethical backlink prospects

Status values: `prospecting` → `contacted` → `accepted` → `published`.

### 1. Odoo Forum — existing JTL migration thread

- **URL:** https://www.odoo.com/forum/help-1/migration-from-jtl-wawi-to-odoo-269203
- **Relevance:** Direct JTL-Wawi → Odoo audience (DACH ecommerce).
- **Route:** Forum answers (already active conversation; Gultaj has participated).
- **Proposal:** Publish a follow-up answer summarizing dry-run / cutover lessons + link to the migration landing page only where it helps the asker.
- **Outreach draft:** N/A (public reply). Keep promotional tone minimal; lead with technical value.
- **Status:** `prospecting` (continue helpful answers; do not spam).
- **Live URL when published:** same forum thread.

### 2. Odoo Apps Store listing

- **URL:** https://apps.odoo.com/apps/upload
- **Relevance:** Official discovery channel for Odoo modules.
- **Route:** Register Git repo + module `static/description` (verified submission path exists after sign-in).
- **Proposal:** Publish `jtl_odoo_connector` with accurate screenshots, SELECT-only disclaimer, and website URL in the description.
- **Outreach draft:** N/A (self-serve upload). Ensure lowest/same public price and complete presentation page.
- **Status:** `prospecting`
- **Live URL when published:** Apps Store product URL (fill when live).

### 3. Odoo Community Association / documentation contributions

- **URL:** https://odoo-community.org/page/Contribute  
  Docs: https://www.odoo.com/documentation/latest/contributing/documentation.html
- **Relevance:** High-authority Odoo ecosystem.
- **Route:** Genuine contribution guidelines exist (code, docs, triage).
- **Proposal:** Contribute a migration checklist or connector pattern write-up if accepted by maintainers — not a paid link placement.
- **Outreach draft:**  
  Subject: Contribution idea — JTL-Wawi → Odoo migration safety checklist  
  Body: Short intro, link to draft checklist (dry run, read-only SQL, cutover policy), ask whether OCA/docs want it as a how-to or blog.
- **Status:** `prospecting`

### 4. InfoQ (practitioner article)

- **URL:** https://www.infoq.com/guidelines/
- **Relevance:** Senior engineers / architects; ERP migration patterns can fit if marketing-free.
- **Route:** Verified proposal form + editorial review (~10% acceptance noted by InfoQ).
- **Proposal:** “Controlled ERP cutovers: dry-run led migration from a proprietary WMS/ERP (JTL-Wawi) into Odoo” — architecture, validation, failure modes. No product pitch in the body; author bio may link the site.
- **Outreach draft:** Use InfoQ submission form with outline: problem, SELECT-only source access, mapping/validation, dry run vs full sync, reconciliation, lessons. State originality and no prior free republication.
- **Status:** `prospecting`

### 5. GitHub / open technical artifacts

- **URL:** https://github.com (public repo under `misri12`)
- **Relevance:** Developers searching JTL/Odoo migration code.
- **Route:** Publish sanitized sample mappings, dry-run fixtures, or a migration README that links to the site docs section.
- **Proposal:** “jtl-odoo-migration-notes” repo with architecture diagram, field-mapping template, and SQL Server read-only requirements.
- **Outreach draft:** N/A (self-publish). Share repo in relevant forum answers when it answers the question.
- **Status:** `prospecting`

### 6. Partner / agency collaboration (example class)

- **URL:** Identify DACH Odoo partners via https://www.odoo.com/partners (verify each firm individually).
- **Relevance:** Implementation partners who need a JTL migration capability.
- **Route:** Warm intro / capability sheet — only after confirming they accept partner referrals.
- **Proposal:** White-label assessment + connector for their JTL clients; reciprocal case-study link if a joint project completes.
- **Outreach draft:**  
  Subject: JTL-Wawi → Odoo migration capability for your DACH clients  
  Body: 4–5 sentences on SELECT-only connector, dry run, Odoo 20 scope; ask if they want a technical briefing. No purchased-link language.
- **Status:** `prospecting` (do not list unverified partner names as confirmed targets).

## Do not do

- Paid ranking links, link farms, mass directory spam, fake partnerships, or fabricated reviews.
- Claiming guest-post acceptance without verifying guidelines (as done above for InfoQ / Odoo Apps / OCA).
- Counting a CTA click as a form conversion.
