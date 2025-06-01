/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // other environment variables that we use...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
