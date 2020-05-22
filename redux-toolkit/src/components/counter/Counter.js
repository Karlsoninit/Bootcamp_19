import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, name } from "../../redux/store";

export const Counter = () => {
  const dispatch = useDispatch();
  const {
    [name]: { count },
  } = useSelector((state) => state);

  const increment = () => {
    dispatch(actions.incrementAction(3));
  };

  const decrement = () => {
    dispatch(actions.decrementAction(3));
  };

  const reset = () => {
    dispatch(actions.resetAction());
  };

  return (
    <>
      <button onClick={increment}>PLUS</button>
      <h2>{count}</h2>
      <button onClick={decrement}>MINUS</button>

      <button onClick={reset}>reset</button>
    </>
  );
};
