import React, { useEffect } from "react";
import { withProviders } from "./providers";

import { routerApi, placeholderApi } from "shared/api";
import { setStorage, token } from "shared/storage";
import { indexedDB, localStorage } from "shared/lib";

// setStorage(indexedDB.storage);
// token.setToken("MY_TOKEN_TEST");

const App = () => {
  async function fetchApi() {
    const res = await routerApi.auth.status();
    console.log({ res });
  }

  async function setToken() {
    const t = await token.setToken("My token");
    console.log("setToken", t);
  }

  async function getToken() {
    const t = await token.getToken();
    console.log("getToken", t);
  }

  useEffect(() => {
    setStorage(indexedDB);
    fetchApi();
    setToken();
    getToken();
  }, []);
  return <>App</>;
};

export default withProviders(App);
