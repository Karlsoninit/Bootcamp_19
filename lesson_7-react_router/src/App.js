import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import Nav from "./components/nav/Nav";
import { NewsPage } from "./pages/NewsPage";
import { ArticlePage } from "./pages/ArticlePage";

const apiKey = "ed5ebee752754cf7a93918ae83acba6f";

const config = {
  news: {
    path: "/news",
    pathName: "news",
    homeLabel: "NEWS",
  },
};

const nav = ["home", config.news.homeLabel, "profile"];

function App() {
  return (
    <>
      <Nav navOptions={nav} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} uniqueKey={apiKey} />}
        />
        <Route
          path="/profile"
          render={(props) => <ProfilePage {...props} info={{ port: 8800 }} />}
        />
        <Route
          exact
          path={config.news.path}
          render={(props) => <NewsPage {...props} uniqueKey={apiKey} />}
        />
        <Route path={`${config.news.path}/:article`} component={ArticlePage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
