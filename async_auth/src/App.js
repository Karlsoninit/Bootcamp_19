import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase/config";

import { userSlice } from "./redux/reducers/userReducer";

import { useRoute } from "./router";

import { Navigation } from "./components/nav/Navigation";

const createUser = {
  nickName: "Bob",
  info: {
    birthdayDate: "27-05-2020",
  },
};

function App(props) {
  const [isAuth, setisAuth] = useState(null);
  useEffect(() => {
    onAuth();
    const currentUser = auth.currentUser;
    console.log("currentUser", currentUser);
    if (currentUser) {
      dispatch(userSlice.actions.getUser({ name: currentUser.displayName }));
    }
  }, [isAuth]);

  const onAuth = () => {
    auth.onAuthStateChanged((user) => {
      console.log("current user", user);

      setisAuth(user);
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {}, []);
  const routing = useRoute(isAuth);
  return (
    <>
      <Navigation isAuthentication={isAuth} />
      {routing}
    </>
  );
}

export default App;
