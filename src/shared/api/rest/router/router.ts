import { apiInstance, Response } from "./base";
import type { Router, RouterRange } from "./models";

const BASE_PATH = "setting";

const fetchRouter = apiInstance(BASE_PATH);

export type toggleWifiArgs = {
  range: RouterRange;
  started: boolean;
};

export const toggleWifi = async (
  args: toggleWifiArgs
): Promise<Response<any>> => {
  return await fetchRouter({ toggleWifi: args });
};

export const getWifiToggleInfo = async (): Promise<Response<Router[]>> => {
  return await fetchRouter({ getWifiToggleInfo: {} });
};
