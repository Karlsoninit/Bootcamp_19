import React from "react";
import { useRouter } from "./router";

import Nav from "./components/nav/Nav";

const config = {
  news: {
    path: "/news",
    pathName: "news",
    homeLabel: "NEWS",
  },
};

const nav = ["home", config.news.homeLabel, "profile"];

const token = "cvccv987cudikfmgn";

function App() {
  const routing = useRouter(token);
  return (
    <>
      {token && <Nav navOptions={nav} />}
      {routing}
    </>
  );
}

export default App;
