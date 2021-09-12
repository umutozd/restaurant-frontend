import React from "react";

// material-ui
import { Theme, makeStyles, createStyles } from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";

/** NotImplemented is the component for pages that aren't ready yet */
export function NotImplemented() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BuildIcon className={classes.buildIcon} />
      Page not implemented yet
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: theme.palette.primary.main,
    },
    buildIcon: {
      width: 150,
      height: 150,
      marginBottom: 32,
    },
  })
);
