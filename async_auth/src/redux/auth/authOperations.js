import { auth } from "../../firebase/config";

export const signInUser = () => (dispatch, getState) => {};

export const signUpUser = ({ email, password }) => async (
  dispatch,
  getState
) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    console.log("user", user);
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};
