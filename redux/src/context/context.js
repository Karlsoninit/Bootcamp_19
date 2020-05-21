import React, { createContext, useReducer } from "react";
import { useSelector } from "react-redux";
import countrys from "../countrys.json";
export const LayaltyProgramContext = createContext();

const handlers = {
  DEFAULT: (state) => state,
};

const reducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
const initialState = {};

export const LayaltyProgram = ({ children }) => {
  const {
    user: { bonus },
  } = useSelector((state) => state);

  //   function init() {
  //     return {
  //       bonus,
  //       countrys,
  //     };
  //   }
  //   init();

  console.log(initialState);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LayaltyProgramContext.Provider
      value={{
        state,
        dispatch,
        bonus,
        countrys,
      }}
    >
      {children}
    </LayaltyProgramContext.Provider>
  );
};
