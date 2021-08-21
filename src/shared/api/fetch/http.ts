import { request } from "shared/config";
import { CommonTransport } from "./common";

export class HttpTransport extends CommonTransport {
  constructor({ url, options = {} }: { url: any; options?: any }) {
    super({ url, options });
    this.open();
  }
  async open() {
    this.active = true;
    this.connected = true;
  }

  close() {
    this.active = false;
    this.connected = false;
  }

  async send(data: any) {
    this.lastActivity = new Date().getTime();
    // const token = "DEBUG";
    // if (token) requestConfig.headers["Authorization"] = "Basic " + token;
    console.log("SEND", {
      url: this.url,
      data,
      lastActivity: this.lastActivity,
    });

    return await fetch(this.url, {
      method: request.method,
      credentials: request.credentials,
      headers: request.headers,
      body: data,
    }).then((res: any) => {
      const { status } = res;
      if (status === 200) {
        return res.text().then((packet: any) => {
          if (packet.error) throw new Error(packet.error);
          return this.message(packet);
        });
      }
      throw new Error(`Status Code: ${status}`);
    });
  }
}
