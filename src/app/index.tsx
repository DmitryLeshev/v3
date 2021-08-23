import React, { useEffect } from "react";
import { withProviders } from "./providers";

import { routerApi, placeholderApi } from "shared/api";
import { setStorage, token } from "shared/storage";
import { indexedDB, localStorage, sessionStorage } from "shared/lib";
import { Button, Input } from "shared/ui";
import { useInput } from "shared/hooks";

const storages = {
  indexedDB: indexedDB.Storage.create(),
  localStorage: localStorage.Storage.create(),
  sessionStorage: sessionStorage.Storage.create(),
};

Object.assign(window, { storages });

const App = () => {
  const input = useInput("");

  async function fetchApi() {
    const res = await placeholderApi.todos.getTasksList();
    console.log("fetchApi", { res });
  }

  async function setToken() {
    console.log("[APP] input", input.value);
    const t = await token.setToken(input.value);
    console.log("setToken", t);
  }

  async function getToken() {
    const t = await token.getToken();
    console.log("getToken", t);
  }

  useEffect(() => {
    setStorage(storages.sessionStorage);
    fetchApi();
  }, []);

  return (
    <>
      App
      <Input {...input} />
      <Button onClick={() => getToken()}>getToken</Button>
      <Button onClick={() => setToken()}>setToken</Button>
    </>
  );
};

export default withProviders(App);
