// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { wishes } from "./reducers";
// // import { logger } from "../middlewares/logger";
// import loggerL from "redux-logger";
// import thunk from "redux-thunk";

// const middlewares = [thunk];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(loggerL);
// }

// export const store = createStore(
//   wishes,
//   composeWithDevTools(applyMiddleware(...middlewares))
// );

import { configureStore, createSlice } from "@reduxjs/toolkit";

const wishesSlice = createSlice({
  name: "wishes",
  initialState: {
    wishes: [],
    collection: "wishes",
  },
  reducers: {
    updateState: (state, { payload }) => ({ ...state, wishes: payload }),
  },
});

export const store = configureStore({
  reducer: wishesSlice.reducer,
});

export const { updateState } = wishesSlice.actions;
