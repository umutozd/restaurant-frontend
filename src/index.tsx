import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Theme from "./theme";

ReactDOM.render(
  <Theme.ThemeProvider>
    <App />
  </Theme.ThemeProvider>,
  document.getElementById("root")
);
