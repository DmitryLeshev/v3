import {
  CALL_TIMEOUT,
  RECONNECT_TIMEOUT,
  PING_INTERVAL,
} from "shared/constans";

import { EventEmitter } from "./event-emitter";
import { WebsocketTransport } from "./ws";
import { HttpTransport } from "./http";

export const connections: any = new Set();

window.addEventListener("online", () => {
  for (const connection of connections) {
    if (!connection.connected) connection.open();
  }
});

const transports = {
  ws: WebsocketTransport,
  http: HttpTransport,
};

export class CommonTransport extends EventEmitter {
  url: any;
  socket: any;
  api: {};
  callId: number;
  calls: Map<any, any>;
  streams: Map<any, any>;
  active: boolean;
  connected: boolean;
  lastActivity: number;
  callTimeout: any;
  pingInterval: any;
  reconnectTimeout: any;

  constructor({ url, options = {} }: { url: any; options?: any }) {
    super();
    this.url = url;
    this.socket = null;
    this.api = {};
    this.callId = 0;
    this.calls = new Map();
    this.streams = new Map();
    this.active = false;
    this.connected = false;
    this.lastActivity = new Date().getTime();
    this.callTimeout = options.callTimeout || CALL_TIMEOUT;
    this.pingInterval = options.pingInterval || PING_INTERVAL;
    this.reconnectTimeout = options.reconnectTimeout || RECONNECT_TIMEOUT;
  }

  static create(url: string, options: any) {
    const Transport = url.startsWith("ws") ? transports.ws : transports.http;
    return new Transport({ url, options });
  }

  message(data: any) {
    console.log("Message", { data });
    if (data === "{}") return;
    this.lastActivity = new Date().getTime();
    let packet: any;
    try {
      packet = JSON.parse(data);
    } catch {
      return;
    }
    if (packet.callType) console.log("[message callType]", packet.callType);
    if (packet.msg) console.log("[message msg]", packet.msg);
    if (packet.error) console.log("[message error]", packet.error);
    if (!packet.status) console.log("[message status]", packet.status);
    return packet;
  }
}
