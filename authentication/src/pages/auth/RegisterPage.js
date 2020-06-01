import React from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/token/tokenOperation";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(signUpUser());
  };
  return (
    <>
      <h2>RegisterPage</h2>
      <button onClick={handleClick}>register</button>
    </>
  );
};
