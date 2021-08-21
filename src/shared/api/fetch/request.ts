import { CommonTransport } from "./transport";
import { request as requestConfig } from "shared/config";

const http = CommonTransport.create(requestConfig.hettpUrl, {});
// const ws = CommonTransport.create(requestConfig.swUrl, {});

export async function request(packet: any) {
  const [path, args] = Object.entries(packet)[0];
  console.log({ path, args });
  return http.send({ path, args });
}

Object.assign(window, { request });
