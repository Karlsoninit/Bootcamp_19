import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/userReducer";
import { planningSlice } from "./reducers/planningReducer";

console.log("userSlice", userSlice);
const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [planningSlice.name]: planningSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
