// this.lastActivity = new Date().getTime();

import { request } from "shared/config";
import { message } from "./message";

export function send(data: any) {
  const token = "DEBUG";
  if (token) request.headers["Authorization"] = "Basic " + token;
  fetch(request.url, {
    method: request.method,
    credentials: request.credentials,
    headers: request.headers,
    body: data,
  }).then((res: any) => {
    const { status } = res;
    if (status === 200) {
      return res.text().then((packet: any) => {
        if (packet.error) throw new Error(packet.error);
        message(packet);
      });
    }
    throw new Error(`Status Code: ${status}`);
  });
}
