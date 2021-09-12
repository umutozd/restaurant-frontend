import React from "react";

import { Snackbar as MuiSnackbar, Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

interface SnackbarProps {}

export var openSnack = (message: string) => {};
export var hideSnack = () => {};

export function Snackbar(props: SnackbarProps) {
  const [show, setShow] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const classes = useStyles();

  React.useEffect(() => {
    openSnack = (msg: string) => {
      if (show) {
        setShow(false);
      }
      setShow(true);
      setMessage(msg);
    };
    hideSnack = () => setShow(false);
  }, [show]);

  return (
    <MuiSnackbar
      className={classes.snackBar}
      open={show}
      autoHideDuration={1500}
      message={message}
      onClose={() => setShow(false)}
    />
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    snackBar: { marginBottom: 24, marginLeft: 4, marginRight: 4 },
  })
);
