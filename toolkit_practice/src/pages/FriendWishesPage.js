import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../firebase/config";
import { actions } from "../redux/store";

export const FriendWishesPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { chooseBirthdayBoy } = useSelector((state) => state.planning.birthday);
  console.log("history", history);
  const { category } = queryString.parse(history.location.search);

  const nickName = history.location.hash.split("-");
  const name = nickName[nickName.length - 1];

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
        dispatch(actions.getFriendWishes({ birthdayBoys: wishes }));
      });
  };

  const wishesList = chooseBirthdayBoy;
  console.log("wishesList", wishesList);
  return (
    wishesList.length &&
    wishesList.map(({ wish, wishId }) => <h2 key={wishId}>{wish}</h2>)
  );
};
