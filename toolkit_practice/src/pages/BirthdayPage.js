import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../firebase/config";
import { actions } from "../redux/store";

export const BirthdayPage = () => {
  const dispatch = useDispatch();
  const { birthday } = useSelector((state) => state.planning);
  useEffect(() => {
    currentBirthdayBoys();
  }, []);

  const currentBirthdayBoys = () => {
    firestore.collection("birthday").onSnapshot((doc) => {
      const birthdayBoys = doc.docs.map((d) => ({ ...d.data(), wishId: d.id }));
      dispatch(actions.getBirthdayBoys({ birthdayBoys }));
    });
  };

  const currentBirthdayBoyWishes = (id) => {
    firestore
      .collection("birthday")
      .doc(id)
      .collection("wishes")
      .onSnapshot((doc) =>
        console.log(doc.docs.map((d) => ({ ...d.data(), wishId: d.id })))
      );
  };

  return (
    <div>
      <h2>BirthdayPage</h2>
      <ul>
        {birthday.map((b) => (
          <li key={b.wishId}>
            <h2>{b.birdayBoyName}</h2>
            <button onClick={() => currentBirthdayBoyWishes(b.wishId)}>
              show wish
            </button>
          </li>
        ))}
      </ul>
      <Link to="/birthday/birthdayBoy">birthdayBoy</Link>
    </div>
  );
};
