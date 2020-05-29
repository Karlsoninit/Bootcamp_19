import { auth } from "../../firebase/config";

export const signInUser = () => (dispatch, getState) => {};

export const signUpUser = ({ email, password, displayName }) => async (
  dispatch,
  getState
) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    const update = auth.currentUser;
    await update.updateProfile({
      displayName: displayName,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};
