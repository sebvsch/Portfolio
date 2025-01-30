/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_EMAILJS_PUBLIC_KEY: string;
    VITE_EMAILJS_TEMPLATE_ID: string;
    VITE_EMAILJS_SERVICE_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}