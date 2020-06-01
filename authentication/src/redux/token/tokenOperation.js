import axios from "axios";
import { tokenSlice } from "./tokenReducer";
import { userSlice } from "../user/userReducer";

export const signUpUser = () => async (dispatch, getState) => {
  try {
    const data = await axios.post(
      "https://kidslike.goit.co.ua/api/auth/signup",
      { email: "test4s137@mail.com", password: "qwer4321" },
      { headers: { "content-type": "application/json" } }
    );
    const status = data.data.status === "success";
    const tokenValue = data.data.token;
    const user = data.data.user;

    if (status) {
      dispatch(tokenSlice.actions.getToken({ token: tokenValue }));
      dispatch(userSlice.actions.getUser({ id: user._id, email: user.email }));
    }
  } catch (err) {
    console.log(err);
  }
};
export const signInUser = (params) => async (dispatch, getState) => {
  try {
    const data = await axios.post(
      "https://kidslike.goit.co.ua/api/auth/signin",
      params,
      { headers: { "content-type": "application/json" } }
    );
    const status = data.data.status === "success";
    const tokenValue = data.data.token;
    const user = data.data.user;

    if (status) {
      dispatch(tokenSlice.actions.getToken({ token: tokenValue }));
      dispatch(userSlice.actions.getUser({ id: user._id, email: user.email }));
    }
  } catch (err) {
    console.log(err);
  }
};
