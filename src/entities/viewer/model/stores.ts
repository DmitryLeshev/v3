import { createStore } from "effector";
import { useStore } from "effector-react";

export const $viewer = createStore("");

export const $token = createStore("");

export const $inputLogin = createStore("");
export const $inputPassword = createStore("");
export const $inputRepeatPassword = createStore("");

export const selectors = {
  useVeiwer: () => useStore($viewer),
  useToken: () => useStore($token),
  useLogin: () => useStore($inputLogin),
  usePassword: () => useStore($inputPassword),
  useRepeatPassword: () => useStore($inputRepeatPassword),
};
