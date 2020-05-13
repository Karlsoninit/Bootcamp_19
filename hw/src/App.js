import React from "react";

import { Switch, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";

import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage.js";

const moviesConfig = {
  hash: "movies",
};

function App(props) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <HomePage {...props} hash={moviesConfig.hash} />}
      />
      <Route
        path={`/${moviesConfig.hash}/:movieId`}
        component={MovieDetailsPage}
      />
    </Switch>
  );
}

export default App;
