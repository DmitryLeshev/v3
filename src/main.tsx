import React from "react";
import ReactDOM from "react-dom";

import Application from "app";

// import { SECOND } from "shared/constans";
// import { indexedDB } from "shared/lib";

// await indexedDB.init();
// setTimeout(async () => {
//   await indexedDB.setItem("key", "value");
// }, SECOND * 2);
// setTimeout(async () => {
//   const result = await indexedDB.getItem("js");
//   console.log({ result });
// }, SECOND * 3);
// setInterval(() => {
//   console.log(indexedDB.db);
// }, SECOND * 5);

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);
