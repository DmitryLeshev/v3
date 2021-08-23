import { request } from "shared/utils";
import { request as reqConfig } from "shared/config";

export const apiInstance = {
  get: (url: string) => request.send(reqConfig.jsonplaceholderUrl + url),
  post: (url: string, body?: any) =>
    request.send(reqConfig.jsonplaceholderUrl + url, {
      method: "POST",
      body: body && JSON.stringify(body),
    }),
};
