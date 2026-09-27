/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string;
  readonly SITE?: string;
  readonly GOOGLE_SITE_VERIFICATION?: string;
  readonly BING_SITE_VERIFICATION?: string;
  readonly PUBLIC_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
