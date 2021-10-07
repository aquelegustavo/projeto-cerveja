declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_BASE_URL: string;
      REACT_APP_AUTH0_DOMAIN: string;
      REACT_APP_AUTH0_CLIENT_ID: string;
      NODE_ENV?: "development" | "production";
      PORT?: string;
      PWD?: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
