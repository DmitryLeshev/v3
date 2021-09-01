import { createStore, createEffect, createEvent } from "effector";
import { useStore } from "effector-react";

import { env } from "shared/config";
import { exampleApi, routerApi, serverApi } from "shared/api";
import { PING_INTERVAL } from "shared/constans";
import { Status } from "shared/types";

const API = { ROUTER: routerApi, SERVER: serverApi, EXAMPLE: exampleApi };

let interval: NodeJS.Timeout;

const check = createEvent();

const getStatusFx = createEffect(() => {
  return API[env.APP].auth.status();
});

export const statusInitialState: Status = null;
const $status = createStore<Status>(statusInitialState).on(
  getStatusFx.doneData,
  (_, payload) => payload.data
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
