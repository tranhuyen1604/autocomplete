/// <reference types="vite/client" />

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly REACT_APP_API_BASE_URL: string;
  readonly REACT_APP_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
