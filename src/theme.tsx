import React from "react";

import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core";
import { pink, blue } from "@material-ui/core/colors";
import { PaletteType } from "@material-ui/core";

/** Light theme config */
const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#66bb6a",
    },
    background: {
      default: "#fff",
    },
    type: "light",
  },
  typography: {
    allVariants: {
      textTransform: "none",
    },
  },
});

/** Dark theme config */
const darkTheme = createTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: pink[200],
    },
    background: {
      default: "#212121",
      paper: "#393939",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cbcbcb",
    },
    type: "dark",
  },
  typography: {
    allVariants: {
      textTransform: "none",
    },
  },
});

/** State is the type of the state for ThemeProvider component */
interface State {
  paletteType: PaletteType;
}

/** StateAndDispatch is the type for the context for theme */
interface StateAndDispatch {
  state?: State;
  dispatch?: React.Dispatch<any>;
}

/** Initial state of ThemeProvider component */
const initialState = { paletteType: "dark" };

/** The context of theme*/
const StateAndDispatchContext = React.createContext({} as StateAndDispatch);

/**
 * React hook for toggling palette type.
 * @returns Function that calls dispatch for toggling palette type.
 */
function useTogglePaletteType() {
  const { dispatch } = React.useContext<StateAndDispatch>(
    StateAndDispatchContext
  );
  return React.useCallback(
    () => dispatch!({ type: "togglePalette" }),
    [dispatch]
  );
}

/**
 * React hook for getting palette type from theme context.
 * @returns Palette type; "dark" or "light"
 */
function usePaletteType() {
  const { state } = React.useContext<StateAndDispatch>(StateAndDispatchContext);
  return state?.paletteType ?? "dark";
}

/** Reducer function for ThemeProvider component */
function reducer(state: any, action: any) {
  switch (action.type) {
    case "togglePalette":
      var to = state.paletteType === "dark" ? "light" : "dark";
      localStorage.setItem("paletteType", to);
      return {
        ...state,
        paletteType: to,
      };

    default:
      return state;
  }
}

/**
 * @param props Child react nodes to be rendered
 * @returns Main react node that wraps its children with a theme.
 */
function ThemeProvider(props: { children: React.ReactElement }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // initially, check local storage for paletteType from previous sessions
  React.useEffect(() => {
    var t = localStorage.getItem("paletteType");
    if (!t || !["dark", "light"].includes(t)) {
      t = "dark"; // prefer dark
      localStorage.setItem("paletteType", t); // save to browser
    }

    if (t !== state.paletteType) {
      dispatch({ type: "togglePalette" });
    }
  }, [state.paletteType]);

  return (
    <MuiThemeProvider
      theme={state.paletteType === "light" ? lightTheme : darkTheme}
    >
      <StateAndDispatchContext.Provider
        value={{ state: state, dispatch: dispatch }}
      >
        {props.children}
      </StateAndDispatchContext.Provider>
    </MuiThemeProvider>
  );
}

const Exports = { ThemeProvider, usePaletteType, useTogglePaletteType };
export default Exports;
