import React, { useEffect } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BirthdayPage } from "./pages/BirthdayPage";
import { PlanningPage } from "./pages/PlanningPage";
import { FriendWishesPage } from "./pages/FriendWishesPage";
import { BirthdayBoyPage } from "./pages/BirthdayBoyPage";
import { actions } from "./redux/store";
const createUser = {
  nickName: "Bob",
  info: {
    birthdayDate: "27-05-2020",
  },
};

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getUser({ userInfo: createUser }));
  }, []);
  return (
    <>
      <button
        onClick={() =>
          props.history.push({
            pathname: "/birthday",
            search: "?category=birthday",
          })
        }
      >
        Bithday
      </button>
      <button
        onClick={() =>
          props.history.push({
            pathname: "/birthday",
            search: "?category=birthday",
          })
        }
      >
        Travel
      </button>
      <button
        onClick={() =>
          props.history.push({
            pathname: "/birthday",
            search: "?category=birthday",
          })
        }
      >
        Buy
      </button>
      <Switch>
        <Route exact path="/" component={PlanningPage} />
        <Route path="/birthday/birthdayBoy" component={BirthdayBoyPage} />
        <Route path="/birthday/:friend" component={FriendWishesPage} />
        <Route path="/birthday" component={BirthdayPage} />
      </Switch>
    </>
  );
}

export default App;
