import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import { BirthdayPage } from "./pages/BirthdayPage";
import { PlanningPage } from "./pages/PlanningPage";
import { FriendWishesPage } from "./pages/FriendWishesPage";
import { BirthdayBoyPage } from "./pages/BirthdayBoyPage";

export const useRoute = (isAuthentication) => {
  if (!isAuthentication) {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to="/login" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/" component={PlanningPage} />
      <Route path="/birthday/birthdayBoy" component={BirthdayBoyPage} />
      <Route path="/birthday/:friend" component={FriendWishesPage} />
      <Route path="/birthday" component={BirthdayPage} />
      <Redirect to="/" />
    </Switch>
  );
};
