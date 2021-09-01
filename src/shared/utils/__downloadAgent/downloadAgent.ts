export const downloadAgent = async (url: string) => {
  const element = document.createElement("a");
  const filename = "agent.exe";

  element.setAttribute("href", url + "/agent.exe");
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
