import { Headers } from "shared/types";

export const hettpUrl = `http://192.168.0.1`;
export const swUrl = `ws://192.168.0.1:9503/ws`;

export const method = "POST";
export const credentials = "include";

export const headers: Headers = {
  "Content-Type": "application/json",
  Accept: "/",
  "Cache-Control": "no-cache",
};
