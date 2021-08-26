import React, { useEffect } from "react";

import { routerApi, placeholderApi } from "shared/api";
import { setStorage, storages, token } from "shared/storages";
import { useInput } from "shared/hooks";

import { Routing } from "pages";

import { model } from "processes/check-status";

import { withProviders } from "./providers";
import { Layout } from "./layouts";

import "./index.scss";

const App = () => {
  const isAuth = model.selectors.useIsAuth();
  useEffect(() => {
    setStorage(storages.sessionStorage);
  }, []);

  return (
    <Layout isAuth={isAuth}>
      <Routing isAuth={isAuth} />
    </Layout>
  );
};

export default withProviders(App);
