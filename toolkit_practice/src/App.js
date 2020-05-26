import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { BirthdayPage } from "./pages/BirthdayPage";
import { PlanningPage } from "./pages/PlanningPage";
import { FriendsWishesPage } from "./pages/FriendsWishesPage";

// import {} from "./pages/BuyPage";
// import {} from "./pages/TravelPage";

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
        <Route path="/birthday/:friends" component={FriendsWishesPage} />
        <Route path="/birthday" component={BirthdayPage} />
      </Switch>
    </>
  );
}

export default App;

// /planning

// /planning/birthday/
// /planning/birthday/:friends/wishes

// /planning/travel
// /planning/buy
