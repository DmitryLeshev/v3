const getEnvVar = (key: string): any => {
  const envKey = import.meta.env[key];
  if (envKey === undefined) {
    throw new Error(`Env variable ${envKey} is required`);
  }
  return envKey;
};

export const APP: "ROUTER" | "SERVER" | "EXAMPLE" = getEnvVar("VITE_APP");
export const SERVER_API_URL = getEnvVar("VITE_SERVER_API_URL");
export const ROUTER_API_URL = getEnvVar("VITE_ROUTER_API_URL");

export const MODE = getEnvVar("MODE");
export const DEV = getEnvVar("DEV");
export const PROD = getEnvVar("PROD");

console.log({ env: import.meta.env });
