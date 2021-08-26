import { Headers } from "shared/types";

export const routerHttpUrl = `http://192.168.0.1`;
export const serverHttpUrl = `http://185.220.33.197`;

export const routerSwUrl = `ws://192.168.0.1:9503/ws`;
export const serverSwUrl = `ws://192.168.0.1:9503/ws`;

export const jsonplaceholderUrl = `https://jsonplaceholder.typicode.com`;

export const method = "POST";
export const credentials = "include";

export const headers: Headers = {
  "Content-Type": "application/json",
  Accept: "/",
  "Cache-Control": "no-cache",
};
