import { apiInstance, Response } from "./base";
import type { GetHomeInfoRES } from "./models";

const BASE_PATH = "main";

const fetchHome = apiInstance(BASE_PATH);

export const getHomeInfo = async (): Promise<Response<GetHomeInfoRES>> => {
  return await fetchHome({ index: {} });
};
