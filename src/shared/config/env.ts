const getEnvVar = (key: string) => {
  const envKey = import.meta.env[key];
  if (envKey === undefined) {
    throw new Error(`Env variable ${envKey} is required`);
  }
  return envKey;
};

/** Режим запуска программы */
export const MODE = getEnvVar("MODE");

// /** API entrypoint */
export const API_URL = getEnvVar("VITE_API_URL");

// /** Режим приложения */
export const DEV = getEnvVar("DEV");
export const PROD = getEnvVar("PROD");

console.log({ MODE, API_URL, DEV, PROD });
