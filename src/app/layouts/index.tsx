import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { model as modelCheckStatus } from "processes/check-status";
import { UI as UITopbar } from "widgets/top-bar";
import { UI as UILeftbar, model as modelLeftbar } from "widgets/left-bar";

import { Theme } from "shared/types";
import { Atom } from "shared/ui";

export type Props = {
  children: React.ReactElement;
  isAuth: boolean;
};

export function Layout({ isAuth, children }: Props) {
  const status = modelCheckStatus.selectors.useStatus();
  const leftbar = modelLeftbar.selectors.useLeftbar();

  // const isAuth = status === "cubic-auth" || status === "user-auth";

  console.log("[Layout]", { isAuth, status });

  const classes = useStyles();
  return (
    <>
      {!status && <UITopbar.TopBar />}
      {isAuth && <UILeftbar.Navbar />}
      {status ? (
        <main
          className={clsx(classes.main, {
            [classes.mainShift]: isAuth && leftbar === "OPEN",
            [classes.mainNotAuth]: !isAuth,
          })}
        >
          {children}
        </main>
      ) : (
        <Atom.CircularProgress />
      )}
      <div className="full-window bg blur" />
    </>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      overflow: "auto",
      width: `calc(100% - ${theme.drawer.closeWidth}px)`,
      marginLeft: theme.drawer.closeWidth,
      transition: theme.drawer.transition,
    },
    mainShift: {
      width: `calc(100% - ${theme.drawer.openWidth}px)`,
      marginLeft: theme.drawer.openWidth,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginLeft: 0,
      },
    },
    mainNotAuth: {
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
