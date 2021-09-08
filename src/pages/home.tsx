import React from "react";

// material-ui
import { Theme, makeStyles, createStyles } from "@material-ui/core";

// exports
export { Home };

interface HomeProps {}

function Home(props: HomeProps) {
  return <>Home Page</>;
}

const useStyles = makeStyles((theme: Theme) => createStyles({}));
