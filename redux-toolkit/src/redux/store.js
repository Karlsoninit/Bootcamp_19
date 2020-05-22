import {
  configureStore,
  //   createReducer,
  //   createAction,
  createSlice,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

// const types = {
//   COUNT_INCREMENT: "counter/COUNT_INCREMENT",
//   COUNT_DECREMENT: "counter/COUNT_DECREMENT",
//   COUNT_RESET: "counter/COUNT_RESET",
// };

// export const incrementAction = createAction(types.COUNT_INCREMENT); // {type: 'COUNT_INCREMENT, payload: 3}

// export const decrementAction = createAction(types.COUNT_DECREMENT); // {type: 'COUNT_INCREMENT, payload: 3}

// export const resetAction = createAction(types.COUNT_RESET); // {type: 'COUNT_INCREMENT, payload: 3}

// // const reducer = () => 10;

// const initialState = {
//   count: 10,
// };

// const counter = createReducer(initialState, {
//   [types.COUNT_INCREMENT]: (state, { payload }) => ({
//     ...state,
//     count: state.count + payload,
//   }),
//   [types.COUNT_RESET]: (state) => ({
//     ...state,
//     count: 0,
//   }),

//   [types.COUNT_DECREMENT]: (state, { payload }) => ({
//     ...state,
//     count: state.count - payload,
//   }),
// });

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
  },
  reducers: {
    incrementAction: (state, { payload }) => ({
      ...state,
      count: state.count + payload,
    }),
    decrementAction: (state, { payload }) => ({
      ...state,
      count: state.count - payload,
    }),
    resetAction: (state) => ({
      ...state,
      count: 0,
    }),
  },
});

const { reducer, actions, name } = counterSlice;

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: combineReducers({
    [counterSlice.name]: persistedReducer,
  }),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistore = persistStore(store);

export { actions, name };
