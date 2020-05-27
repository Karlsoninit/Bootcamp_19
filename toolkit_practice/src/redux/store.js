import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";

const planningSlice = createSlice({
  name: "planning",
  initialState: {
    user: {
      nickName: null,
      info: {
        birthdayDate: null,
      },
    },
    birthday: [],
    travel: {},
    buy: {},
  },
  reducers: {
    getUser: (state, { payload }) => ({ ...state, user: payload.userInfo }),
    getBirthdayBoys: (state, { payload }) => ({
      ...state,
      birthday: payload.birthdayBoys,
    }),
  },
});

export const { actions } = planningSlice;

console.log("planningSlice", planningSlice);
const rootReducer = combineReducers({
  [planningSlice.name]: planningSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
