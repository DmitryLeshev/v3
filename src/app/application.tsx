import React from "react";
import { Routing } from "pages";
import { model } from "processes/check-status";
import { withProviders } from "./providers";
import { Layout } from "./layouts";

import "./index.scss";

const App = () => {
  const isAuth = model.selectors.useIsAuth();

  return (
    <Layout isAuth={isAuth}>
      <Routing isAuth={isAuth} />
    </Layout>
  );
};

export default withProviders(App);
