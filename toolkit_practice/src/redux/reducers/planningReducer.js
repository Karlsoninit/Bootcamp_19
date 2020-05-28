import { createSlice } from "@reduxjs/toolkit";

export const planningSlice = createSlice({
  name: "planning",
  initialState: {
    birthday: {
      allBirthdayBoys: [],
      chooseBirthdayBoy: {
        wishes: [],
        chooseWish: [],
      },
    },
  },

  reducers: {
    getBirthdayBoys: (state, { payload }) => ({
      ...state,
      birthday: { ...state.birthday, allBirthdayBoys: payload.birthdayBoys },
    }),
    getFriendWishes: (state, { payload }) => ({
      ...state,
      birthday: {
        ...state.birthday,
        chooseBirthdayBoy: {
          ...state.birthday.chooseBirthdayBoy,
          wishes: payload.birthdayBoys,
        },
      },
    }),
  },
});
