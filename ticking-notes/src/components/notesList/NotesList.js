import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/config";

export const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    const allNotes = await firestore.collection("notes").get();
    console.log(allNotes);
    const data = allNotes.docs.map((note) => ({ ...note.data(), id: note.id }));
    console.log(data);
    setNotes(data);
  };

  return (
    <ul>
      {notes.map(({ note, id }) => (
        <li key={id}>
          <h2>{note}</h2>
          <Link
            to={{
              pathname: `/${id}`,
            }}
          >
            generate link
          </Link>
        </li>
      ))}
    </ul>
  );
};
