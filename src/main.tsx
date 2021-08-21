import React from "react";
import ReactDOM from "react-dom";
import { request } from "shared/api";

import Application from "./app";

await request({ "auth/status": {} });

ReactDOM.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
  document.getElementById("root")
);
