import { firestore } from "../firebase/config";
import { planningSlice } from "./reducers/planningReducer";

export const currentBirthdayBoys = (category) => (dispatch) => {
  firestore.collection(category).onSnapshot((doc) => {
    const birthdayBoys = doc.docs.map((d) => ({ ...d.data(), wishId: d.id }));
    dispatch(planningSlice.actions.getBirthdayBoys({ birthdayBoys }));
  });
};
