/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHATWOOT_TOKEN: string;
  readonly VITE_TURNSTILE_SITE_KEY: string;
  readonly VITE_N8N_WEBHOOK_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
