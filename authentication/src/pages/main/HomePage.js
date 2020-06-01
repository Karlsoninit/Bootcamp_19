import React from "react";
import { useDispatch } from "react-redux";
import { tokenSlice } from "../../redux/token/tokenReducer";
import { userSlice } from "../../redux/user/userReducer";
export const HomePage = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(tokenSlice.actions.clearToken());
    dispatch(userSlice.actions.clearUser());
  };
  return (
    <>
      <h2>HomePage</h2>
      <button onClick={signOut}>signOut</button>
    </>
  );
};
