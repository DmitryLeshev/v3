import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { Atom } from "shared/ui";

import { UI as UILog } from "features/logotype";
import { UI as UINav } from "features/navigation";

import { model } from "widgets/left-bar";
import { Theme } from "shared/types";

export const Navbar = () => {
  const leftbar = model.selectors.useLeftbar();
  const classes = useStyles();
  return (
    <div
      className={clsx(classes["left-bar"], {
        [classes["left-bar_shift"]]: leftbar === "OPEN",
      })}
    >
      <UILog.Logotype />
      <UINav.SiteNavigation />
      {/* <UINav.SettingsNavigation /> */}
    </div>
  );
};

export function ToggleLeftbarButton() {
  return (
    <Atom.Button onClick={() => model.events.toggleBar()}>Toggle</Atom.Button>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "left-bar": {
      position: "absolute",
      zIndex: theme.zIndex.drawer,
      top: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(0),
      opacity: 0,
      width: theme.drawer.closeWidth,
      overflow: "auto",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[3],
      transition: `all ${theme.drawer.transition}`,
    },
    "left-bar_shift": {
      width: theme.drawer.openWidth,
      padding: theme.spacing(0, 2),
      paddingTop: theme.header.height,
      opacity: 1,
      [theme.breakpoints.down("sm")]: {
        width: theme.drawer.openWidth + 50,
      },
    },
  })
);
