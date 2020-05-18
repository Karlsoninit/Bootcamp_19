import React, { useState } from "react";
import { firestore } from "../../firebase/config";

const initialState = {
  title: "",
};

export const CreateNote = () => {
  const [state, setState] = useState(initialState);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(state);
    firestore.collection("notes").add(state);
  };
  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="note content" onChange={handleChange} />
    </form>
  );
};
