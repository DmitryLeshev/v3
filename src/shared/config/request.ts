import { Headers } from "shared/types";

export const url = `http://192.168.0.1/index.php`;
export const method = "POST";
export const credentials = "include";

export const headers: Headers = {
  "Content-Type": "application/json",
  Accept: "/",
  "Cache-Control": "no-cache",
};
