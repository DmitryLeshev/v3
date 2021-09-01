import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const LogIn = lazy(() => import("./login"));

export const Routing = ({ isAuth }: { isAuth: boolean }) => {
  console.log("[Routing]", { isAuth });
  return (
    <Switch>
      <Route exact path={"/login"} component={LogIn} />
      <Route
        exact
        path={"/activation"}
        component={() => <h1>"activation"</h1>}
      />
      <Redirect to={true ? "/" : "/login"} />
    </Switch>
  );
};

export const paths = {
  login: () => "/login",
  activation: () => "/activation",
  home: () => "/home",
  tasks: () => "/tasks",
  incidents: () => "/incidents",
  devices: () => "/devices",
  settings: () => "/settings",
  systems: () => "/systems",
  users: () => "/users",
  cardEdit: (cardId = ":cardId") => `/card/${cardId}/edit`,
  cardCreate: () => `/card/new`,
  oauthDone: () => "/accesso/done",
  user: (username = ":username") => `/u/${username}`,
  search: (query = "") => {
    if (query) return `/search?query=${query}`;
    return "/search";
  },
  /**
   * @example
   * user: (username = ':username') => `/@${username}`,
   */
};

export const ROUTES = {
  ROUTER: [
    { exact: true, path: paths.home(), component: () => <h1>"home"</h1> },
    { exact: true, path: paths.tasks(), component: () => <h1>"tasks"</h1> },
    {
      exact: true,
      path: paths.incidents(),
      component: () => <h1>"incidents"</h1>,
    },
    { exact: true, path: paths.devices(), component: () => <h1>"devices"</h1> },
    {
      exact: true,
      path: paths.settings(),
      component: () => <h1>"settings"</h1>,
    },
    { exact: true, path: paths.systems(), component: () => <h1>"systems"</h1> },
  ],
  SERVER: [
    { exact: true, path: paths.tasks(), component: () => <h1>"tasks"</h1> },
    {
      exact: true,
      path: paths.incidents(),
      component: () => <h1>"incidents"</h1>,
    },
    { exact: true, path: paths.devices(), component: () => <h1>"devices"</h1> },
    { exact: true, path: paths.users(), component: () => <h1>"users"</h1> },
    {
      exact: true,
      path: paths.settings(),
      component: () => <h1>"settings"</h1>,
    },
  ],
};
