/* eslint-disable no-multi-str */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/auth/authOperations";

const initialState = {
  email: null,
  password: null,
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("state", state);
    dispatch(signUpUser(state));
  };
  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="email" name="email" onChange={handleChange} />
      <input placeholder="password" name="password" onChange={handleChange} />
      <button type="submit">sign up</button>
    </form>
  );
};

export default Register;
