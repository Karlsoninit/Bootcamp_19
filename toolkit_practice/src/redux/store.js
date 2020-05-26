import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";

const planningSlice = createSlice({
  name: "planning",
  initialState: {
    bithday: {},
    travel: {},
    buy: {},
  },
  reducers: {},
});

const {} = planningSlice.actions;

const rootReducer = combineReducers({
  [planningSlice.name]: planningSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
