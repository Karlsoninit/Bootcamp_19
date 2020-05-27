import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { BirthdayPage } from "./pages/BirthdayPage";
import { PlanningPage } from "./pages/PlanningPage";
import { FriendsWishesPage } from "./pages/FriendsWishesPage";
import { BirthdayBoyPage } from "./pages/BirthdayBoyPage";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/birthday">Bithday</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={PlanningPage} />
        <Route path="/birthday/birthdayBoy" component={BirthdayBoyPage} />
        <Route path="/birthday/:friends" component={FriendsWishesPage} />
        <Route path="/birthday" component={BirthdayPage} />
      </Switch>
    </>
  );
}

export default App;
