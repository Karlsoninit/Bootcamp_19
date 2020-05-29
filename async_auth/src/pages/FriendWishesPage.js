import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../firebase/config";
import { planningSlice } from "../redux/reducers/planningReducer";

import { selectors } from "../redux/selectors";

export const FriendWishesPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const chooseBirthdayBoyWishes = useSelector((state) =>
    selectors.chooseBirthdayBoyWishes(state)
  );

  // -------------- selectors ------
  // const state = useSelector((state) => state);

  // console.log("getCurrentUser", getCurrentUser(state));
  // console.log("getCurrentUserInfo", getCurrentUserInfo(state));
  // console.log("getCurrentUserNickName", getCurrentUserNickName(state));

  console.log("history", history);
  const { category } = queryString.parse(history.location.search);

  const { friend } = useParams();
  useEffect(() => {
    currentBirthdayBoyWishes(friend);
  }, []);

  const currentBirthdayBoyWishes = (id) => {
    firestore
      .collection(category)
      .doc(id)
      .collection("wishes")
      .onSnapshot((doc) => {
        const wishes = doc.docs.map((d) => ({ ...d.data(), wishId: d.id }));
        dispatch(
          planningSlice.actions.getFriendWishes({ birthdayBoys: wishes })
        );
      });
  };

  return (
    chooseBirthdayBoyWishes.length &&
    chooseBirthdayBoyWishes.map(({ wish, wishId }) => (
      <h2 key={wishId}>{wish}</h2>
    ))
  );
};
