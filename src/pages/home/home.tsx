import React from "react";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import { Theme, makeStyles, createStyles, Button } from "@material-ui/core";

// exports
export { Home };

interface HomeProps {}

function Home(props: HomeProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RouterLink to="/menu">
        <Button className={classes.button} variant="contained" color="primary">
          Menü
        </Button>
      </RouterLink>
      <RouterLink to="/login">
        <Button className={classes.button} variant="contained" color="primary">
          Giriş yap
        </Button>
      </RouterLink>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    button: {
      margin: 30,
      borderRadius: 48,
      width: 250,
      height: 70,
      fontSize: 30,
    },
  })
);
