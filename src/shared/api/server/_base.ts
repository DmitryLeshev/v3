import { Headers } from "shared/types";
import { transport } from "shared/utils";

export type Response<T> = {
  status?: boolean;
  data?: T;
  msg?: string;
};

export const url = `http://185.220.33.197`;
export const headers: Headers = {
  "Content-Type": "application/json",
  Accept: "/",
  "Cache-Control": "no-cache",
};

const http = transport.HttpTransport.create(url, {
  method: "POST",
  credentials: "include",
  headers,
});

export const apiInstance =
  (controller: string) =>
  async <T>(data: any): Promise<Response<T>> => {
    const [method, params] = Object.entries(data)[0];
    return await http.send({ path: `${controller}/${method}`, args: params });
  };
