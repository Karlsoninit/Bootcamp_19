import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

ReactDOM.render(
  <App sale={true} isAuth={true} />,
  document.getElementById("root")
);
