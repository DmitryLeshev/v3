import React, { ReactElement } from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import { UI } from "features/logotype";
import { Theme } from "shared/types";

interface Props {}

export function TopBar({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <header className={classes.topbar}>
      <UI.Logotype />
    </header>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topbar: { display: "flex", width: "100%", margin: "0 auto" },
  })
);
