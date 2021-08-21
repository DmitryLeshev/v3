import React from "react";
import ReactDOM from "react-dom";
import { request } from "shared/api";

import { indexedDB } from "shared/lib";
import { SECOND } from "shared/constans";

import Application from "./app";

await request({ "auth/status": {} });
await indexedDB.init();

setTimeout(async () => {
  await indexedDB.setItem("key", "value");
}, SECOND * 2);

setTimeout(async () => {
  const result = await indexedDB.getItem("js");
  console.log({ result });
}, SECOND * 3);

setInterval(() => {
  console.log(indexedDB.db);
}, SECOND * 5);

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);
