/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CHATWOOT_TOKEN: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
