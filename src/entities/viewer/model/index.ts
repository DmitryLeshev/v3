import * as actions from "./actions";
import * as stores from "./stores";

stores.$inputLogin.on(actions.inputChangeLogin, (_, payload) => payload);
stores.$inputPassword.on(actions.inputChangePassword, (_, payload) => payload);
stores.$inputRepeatPassword.on(
  actions.inputChangeRepeatPassword,
  (_, payload) => payload
);

export const selectors = stores.selectors;
export { actions, stores };
