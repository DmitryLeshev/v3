import * as routerApi from "./router";
import * as serverApi from "./server";
import * as placeholderApi from "./placeholder";

import { env } from "shared/config";
const { APP } = env;

const API = {
  ROUTER: routerApi,
  SERVER: serverApi,
  TEST: placeholderApi,
};

const api = API[APP];

export { routerApi, serverApi, placeholderApi, api };
