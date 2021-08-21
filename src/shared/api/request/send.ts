import { message } from "./message";

export async function send(url: string, options: RequestInit) {
  return await fetch(url, options).then((res: any) => {
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
