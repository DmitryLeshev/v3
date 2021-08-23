import { apiInstance, Response } from "./_base";
import type { Traffic } from "./models";

const BASE_PATH = "main";

const fetchRouter = apiInstance(BASE_PATH);

export const getGraphicData = async (): Promise<Response<Traffic[]>> => {
  return await fetchRouter({ getGraphicData: {} });
};
