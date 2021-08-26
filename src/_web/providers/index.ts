import compose from "compose-function";
import { withRouter } from "./with-router";
import { withTheme } from "./with-theme";

// import { withStore } from "./with-store";

export const withProviders = compose(withRouter, withTheme);
