import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../../redux/token/tokenOperation";

const initialState = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const [state, setstate] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("state", state);
    dispatch(signInUser(state));
    setstate(initialState);
  };

  const handleChange = ({ target: { name, value } }) => {
    setstate((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        placeholder="enter email"
        type="email"
        onChange={handleChange}
        value={state.email}
      />
      <input
        name="password"
        placeholder="enter password"
        type="password"
        onChange={handleChange}
        value={state.password}
      />
      <button type="submit">login</button>
    </form>
  );
};
