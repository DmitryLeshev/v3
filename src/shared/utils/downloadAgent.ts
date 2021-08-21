import { request } from "shared/config";

export const downloadAgent = async () => {
  const element = document.createElement("a");
  const filename = "agent.exe";

  element.setAttribute("href", request.routerHttpUrl + "/agent.exe");
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
