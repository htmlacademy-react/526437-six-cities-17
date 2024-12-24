
 interface ImportMetaEnv {
    readonly VITE_UPLOAD_URL: string;
    readonly VITE_TIME_OUT: number;
  }

 interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

