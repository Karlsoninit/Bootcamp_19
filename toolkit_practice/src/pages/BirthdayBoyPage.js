import React, { useState, useEffect } from "react";
import { firestore } from "../firebase/config";

export const BirthdayBoyPage = (props) => {
  useEffect(() => {
    // getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    // await firestore
    //   .collection("birthday")
    //   .doc("0Zab7UdbTmsTJrmUUkDx")
    //   .onSnapshot((doc) => console.log(doc.data()));
    await firestore
      .collection("birthday")
      .doc("0Zab7UdbTmsTJrmUUkDx")
      .collection("wishes")
      .doc("EgkCzLFYxSKlUitoVgFe")
      .onSnapshot((doc) => console.log(doc.data()));
  };

  console.log("props", props);
  const [state, setState] = useState({
    birdayBoyName: null,
    wish: null,
    birthdayDate: null,
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const birthdayCollection = await firestore
      .collection("birthday")
      .add({ birdayBoyName: state.birdayBoyName });

    console.log("id", birthdayCollection.id);

    await firestore
      .collection("birthday")
      .doc(birthdayCollection.id)
      .collection("wishes")
      .add({ wish: state.wish, date: state.birthdayDate });
  };

  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h2>BirthdayBoyPage</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="birdayBoyName"
          type="text"
          onChange={handleChange}
          required
          placeholder="birthday boy name"
        />
        <input
          name="wish"
          type="text"
          onChange={handleChange}
          required
          placeholder="your wish"
        />
        <input
          name="birthdayDate"
          type="date"
          onChange={handleChange}
          required
        />
        <button type="submit">Create wish</button>
      </form>
    </>
  );
};
