import { createEvent, createEffect } from "effector";

import { routerApi } from "shared/api";

export const inputChangeLogin = createEvent<string>();
export const inputChangePassword = createEvent<string>();
export const inputChangeRepeatPassword = createEvent<string>();

export const logIn = createEvent();
export const logOut = createEvent();

export const viewerLogInFx = createEffect(
  (params: routerApi.auth.LoginParams) => routerApi.auth.login(params)
);

export const viewerLogOutFx = createEffect(() => routerApi.auth.logout());
