import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/config";
import { useParams, useHistory } from "react-router-dom";

export const Message = () => {
  const [note, setNote] = useState(null);
  const { message } = useParams();
  const history = useHistory();

  useEffect(() => {
    getNote();
    deleteNote();
  }, []);

  const deleteNote = () => {
    const del = async () => {
      await firestore.collection("notes").doc(message).delete();
      history.push("/");
    };

    setTimeout(() => {
      del();
    }, 5000);
  };

  const getNote = async () => {
    const note = await firestore.collection("notes").doc(message).get();

    console.log(note.data());
    setNote(note.data());
  };

  return note && <h2>{note.note}</h2>;
};
