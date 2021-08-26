import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { env } from "shared/config";
import { paths } from "./paths";

const LogIn = lazy(() => import("./login"));

export const Routing = ({ isAuth }: { isAuth: boolean }) => {
  const APP: "ROUTER" | "SERVER" = env.APP;
  console.log("[Routing]", { isAuth, APP });
  return (
    <Switch>
      <Route exact path={"/login"} component={LogIn} />
      <Route
        exact
        path={"/activation"}
        component={() => <h1>"activation"</h1>}
      />
      {ROUTES[APP ?? "ROUTER"].map((route, idx) => {
        return <Route key={idx} {...route} />;
      })}
      <Redirect to={isAuth ? "/" : "/login"} />
    </Switch>
  );
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
