// lastActivity = new Date().getTime();

export function message(response: any) {
  if (response === "{}") return;
  let packet;
  try {
    packet = JSON.parse(response);
  } catch {
    return;
  }

  if (packet.callType) console.log("[message callType]", packet.callType);
  if (packet.msg) console.log("[message msg]", packet.msg);
  if (packet.error) console.log("[message error]", packet.error);
  if (!packet.status) console.log("[message status]", packet.status);

  return packet;
}
