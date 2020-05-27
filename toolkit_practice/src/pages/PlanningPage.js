import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/store";
console.log("actions", actions);

const createUser = {
  nickName: "Bob",
  info: {
    birthdayDate: "27-05-2020",
  },
};

export const PlanningPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getUser({ userInfo: createUser }));
  }, []);

  return <h2>PlanningPage</h2>;
};
