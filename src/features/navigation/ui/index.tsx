import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";
import { routes, env } from "shared/config";
import { Theme } from "shared/types";
import { ROUTES } from "pages";

export const SiteNavigation = () => {
  const { APP } = env;

  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      {ROUTES[APP ?? "ROUTER"].map((route, idx) => (
        <Link key={idx} className={classes.link} to={route.path}>
          {route.path}
        </Link>
      ))}
    </nav>
  );
};

export const SettingsNavigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      {routes.SETTINGS_NAVIGATION.map((link) => (
        <Link key={link.id} className={classes.link} to={link.url()}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: () => ({
      display: "flex",
      flexDirection: "column",
    }),
    link: {
      textDecoration: "none",
      color: theme.palette.getContrastText(theme.palette.background.paper),
    },
  })
);
