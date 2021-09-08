import React from "react";

// material-ui
import { Theme, makeStyles, createStyles } from "@material-ui/core";

// exports
export { Login };

interface LoginProps {}

function Login(props: LoginProps) {
  return <>Login Page</>;
}

const useStyles = makeStyles((theme: Theme) => createStyles({}));
