import React from "react";

export function TodoList({ deleteNote, note: { title, date, id } }) {
  return (
    <li>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <button onClick={() => deleteNote(id)}>delete</button>
    </li>
  );
}
