import { request } from "shared/api";
import { request as reqConfig } from "shared/config";

export const apiInstance = {
  get: (url: string, body?: any) =>
    request.send(reqConfig.jsonplaceholderUrl + url, {
      method: "GET",
      body: body && JSON.stringify(body),
    }),
};
