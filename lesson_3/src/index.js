import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const fruits = { apple: 10, graps: 12 };

const img =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FMXI5Qy9NQdc%2Fmaxresdefault.jpg&f=1&nofb=1";

ReactDOM.render(
  <App step={10} img={img} addFruits={fruits} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
