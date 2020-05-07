import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import Nav from "./components/nav/Nav";
import { NewsPage } from "./pages/NewsPage";
import { ArticlePage } from "./pages/ArticlePage";

const apiKey = "ed5ebee752754cf7a93918ae83acba6f";

function App(props) {
  console.log("props App", props);
  return (
    <>
      <Nav />
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
          path="/news"
          render={(props) => <NewsPage {...props} uniqueKey={apiKey} />}
        />
        <Route path="/news/:article" component={ArticlePage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
