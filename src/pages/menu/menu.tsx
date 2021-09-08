import React from "react";

// material-ui
import { Theme, makeStyles, createStyles } from "@material-ui/core";

// exports
export { Menu };

interface MenuProps {}

function Menu(props: MenuProps) {
  return <>Menu Page</>;
}

const useStyles = makeStyles((theme: Theme) => createStyles({}));
