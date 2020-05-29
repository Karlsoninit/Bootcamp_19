import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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
  const [isAuth, setisAuth] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userSlice.actions.getUser({ userInfo: createUser }));
  }, []);
  const routing = useRoute(isAuth);
  return (
    <>
      <Navigation isAuthentication={isAuth} />
      {routing}
    </>
  );
}

export default App;
