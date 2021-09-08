import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// material-ui
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme as MuiTheme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle } from "@material-ui/icons";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// system
import Theme from "./theme";
import * as snack from "./components/snackbar";

// pages
import { Home, Menu, Login } from "./pages";

export { Routes };

function Routes(props: {}) {
  return (
    <Router>
      <Switch>
        <Route path="/menu">
          <RouteElement component={<Menu />} />
        </Route>

        <Route path="/login">
          <RouteElement component={<Login />} />
        </Route>

        <Route path="/">
          <RouteElement component={<Home />} />
        </Route>
      </Switch>
    </Router>
  );
}

function RouteElement(props: { component: React.ReactNode }) {
  const classes = useStyles();
  const paletteType = Theme.usePaletteType();
  const togglePaletteType = Theme.useTogglePaletteType();

  return (
    <div
      className={classes.root}
      style={{
        height: Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        ),
      }}
    >
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Canan Kafe
          </Typography>
          <IconButton>
            <ShoppingCartIcon color="inherit" />
          </IconButton>
          <IconButton color="inherit" onClick={() => togglePaletteType()}>
            {paletteType === "light" ? (
              <WbSunnyIcon color="inherit" />
            ) : (
              <Brightness3Icon color="inherit" />
            )}
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      {props.component}
      <snack.Snackbar />
    </div>
  );
}

const useStyles = makeStyles((theme: MuiTheme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: theme.palette.background.default,
      // height: "auto",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingTop: 60,
    },
    appBar: {
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      // marginBottom: 60,
      height: 60,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80%",
    },
    mainButton: {
      height: 100,
      width: 250,
      fontSize: 25,
      textTransform: "initial",
      marginBottom: 8,
    },
  })
);
