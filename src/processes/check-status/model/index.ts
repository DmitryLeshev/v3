import { createStore, createEffect, createEvent } from "effector";
import { useStore } from "effector-react";

import { env } from "shared/config";
import { routerApi, serverApi } from "shared/api";
import { PING_INTERVAL } from "shared/constans";

const { APP } = env;

const API = {
  ROUTER: routerApi,
  SERVER: serverApi,
};

let interval: NodeJS.Timeout;

const check = createEvent();

const getStatusFx = createEffect(() => {
  return API[APP].auth.status();
});

type ROUTER = "cubic-is-not-auth" | "cubic-auth" | "wizard" | null;
type SERVER = "user-is-not-auth" | "user-auth" | null;

export type Status = ROUTER | SERVER;

export const statusInitialState: Status = null;
const $status = createStore<Status>(statusInitialState).on(
  getStatusFx.doneData,
  (_, payload) => {
    if (payload?.data && !Array.isArray(payload?.data)) return payload?.data;
    if (payload?.msg) return payload?.msg;
  }
);

const $isAuth = createStore<boolean>(false).on($status, (_, payload) => {
  return payload === "cubic-auth" || payload === "user-auth";
});

export const $statusLoading = getStatusFx.pending;

const useStatus = () => {
  return useStore($status);
};

check.watch(async () => {
  await getStatusFx();
});

check();
interval = setInterval(() => {
  check();
}, PING_INTERVAL);

export const actions = { check };
export const effects = { getStatusFx };
export const selectors = {
  useStatus,
  useIsAuth: () => useStore($isAuth),
};
