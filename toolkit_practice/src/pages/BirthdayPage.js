import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase/config";

export const BirthdayPage = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    currentBirthdayBoy();
  }, []);

  // useEffect(() => {
  //   currentBirthdayBoyWishes();
  // }, []);

  const currentBirthdayBoy = () => {
    firestore
      .collection("birthday")
      .onSnapshot((doc) =>
        setstate(doc.docs.map((d) => ({ ...d.data(), wishId: d.id })))
      );
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
        {state.map((b) => (
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
